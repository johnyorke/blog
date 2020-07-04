---
layout: post
title:  "Keeping External Dependencies On The Outer Layer"
date:   2018-03-30 19:58:06 +0000
categories: ios swift development
---

I’m going to lay out a technique that I use to keep external dependencies on the outer layer of the apps that I work on.

Before we begin, this method was by no means invented by me, [parts of it](https://en.wikipedia.org/wiki/Dependency_inversion_principle) are quite old, in fact. It’s just one of those things I wish I had started doing earlier so I thought I’d share.

## The Problem

A common thing to see at the top of a UIViewController;

{% highlight swift %}
import Foundation
import UIKit
import CoreData
import GoogleAnalytics
{% endhighlight %}

Starts off ok. Importing Foundation and UIKit sounds reasonable enough. But that’s when things take a dive. If you import big external libraries like Core Data and Google Analytics, you’re going to have a problem later on if, for example, you found out one of the libraries surreptitiously captures your user’s data without you or your users knowing and you want to rip it out quickly. Ripping it out is typically going to involve re-writing code in multiple view controllers, and cutting off the tentacles can prove a nightmare.

One way to combat this is to use a monolithic UIViewController base class that has methods for doing common tasks related to (in this example) persistence or analytics. For me, that’s a no-no. Mainly because I don’t really want a greasy slide of inheritance throughout my app and all the baggage that comes with it, and nor do I believe it belongs in a view controller.

## A Potential Solution

![A graphic showing "3rd Party Dependency" in a box at the top labelled "Outer Layer". Underneath it is another box titled "Middle man between 1st and 3rd party.". At the bottom is a 3rd box titled "All the stuff specific to your app" labelled "Core". There are 2 arrows going upwards from the bottom, linking the 3 box.]({{site.url}}/assets/images/dependencies/dependency_graphic_1.png)

This is where leaning heavily on protocols can lead to a big win. First let’s declare a few domain objects that are specific to our app and only uses primitive types.

{% highlight swift %}
struct Person: Persistable {
 let name: String
 let age: Int
}
struct Car: Persistable {
 let plate: String
 let mileage: Int
}
{% endhighlight %}

Then we’re going to declare a protocol that can handle common tasks related to the dependency you wish to use. For now we’ll concentrate on a persistence layer.

{% highlight swift %}
protocol Database {
 func addOrReplace<T: Persistable>(_ object: T) -> Bool
 func delete<T: Persistable>(_ object: T) -> Bool
 func object<T: Persistable>(usingPredicate: NSPredicate) -> [R]
}
{% endhighlight %}

Next, we declare a repository-style struct that connects our inner classes (eg. view controllers) to our database (outer layer) and has some common queries we might want to use.

{% highlight swift %}
struct DatabaseRepository {
 
 private var database: Database!
 
 private init {
  self.database = CoreDatabase()
 }
  
func save<T: Persistable>(_ object: T) -> Bool {
  return self.database.addOrReplace(object)
 }
  
func remove<T: Persistable>(_ object: T) -> Bool {
  return self.database.delete(object)
 }
  
// MARK: Queries
func people(above age: Int) -> [Person] {
  let predicate = NSPredicate(format: "age > %d", age)
  if let people = self.database.objects(usingPredicate: predicate) as? [Person] {
   return people
  } else { return [] }
 }
  
func cars(withMileageBelow mileage: Int) -> [Car] {
  let predicate = NSPredicate(format: “mileage < %d”, mileage)
  if let cars = self.database.object(usingPredicate: predicate) as? [Car] {
   return cars
  } else { return [] }
 }
 
}
{% endhighlight %}

Now, we bring in the dependency. For example, if we wanted to use CoreData we’d declare a new struct which adheres to Database.

{% highlight swift %}
import CoreData

struct CoreDataDatabase: Database {

func addOrReplace<T: Persistable>(object: T) -> Bool {
  var entity = NSManagedObject?
  
  if let domainObject = object as? Person {
   entity = CoreDataPerson.init(from: domainObject) 
  }
  
  if let domainObject = object as? Car {
   entity = CoreDataCar.init(from: domainObject)
  }
  
   self.context.insert(entity)
   self.context.save()
 }
  
func delete(object: DatabaseObject) -> Bool {
  // Similar to above but resulting in...
  self.context.delete(entity)
  self.context.save()
 }
  
func objects<T: Persistable>(usingPredicate predicate: NSPredicate) -> [R] {
  // Set up fetch query using predicate then...
  return entityObjects.flatMap { $0.domainObject() }
 }
  
// Then all of the helpers and boilerplate that comes with CoreData.
  
}
{% endhighlight %}

As you can see we’re using some models here that are specific to Core Data (NSManagedObject). You can make your life easier by providing the mapping to your domain layer objects in that class via way of a protocol method along the lines of func domainObject() -> Person which simply maps the Core Data properties to a new instance of your domain layer model equivalent.

{% highlight swift %}
import CoreData

protocol OuterModel<T: Persistable> {
 func init(from model: T)
 func domainObject() -> T
}

class CoreDataPerson: NSManagedObject, OuterModel {
// Two methods here; one init that takes a domain model
// and one creates and returns a new domain model
}
{% endhighlight %}

Technically, you should now be able to pass your domain objects around your inner layers without worrying about how and where they are stored. At the call site it would simply look a little like this;

{% highlight swift %}
import Foundation
import UIKit

class PeopleTableViewController: UITableViewController {
  
let repo = DatabaseRepository()
var people: [Person]?
  
func viewDidLoad() {
  super.viewDidLoad()
  people = repo.people(above: 18)
  tableView.reload()
 }
  
func addPersonButtonTouchUpInside(_ sender: Any) {
  let newPerson = Person(name: nameLabel.text, age: agePicker.value)
  repo.save(newPerson)
 }
  
}
{% endhighlight %}

If you now wanted to switch to a Realm Database you’d just need to do the following:

1. Create a new RealmDatabase object that adheres to Database

1. Create a new RealmPerson object that maps to and from Person

1. Update the DatabaseRepository initialiser to use RealmDatabase() instead of CoreDataDatabase()

And that’s it! Your commit would be tiny and (in this case) only add a 2 new files, even though you’ve just switched your (typically deep-rooted) persistence layer to another provider.

![A graphic showing "Realm" in a box at the top labelled "Outer Layer", next to it is a crossed-out box title "Core Data". Underneath it is another box titled "Database Repository.". At the bottom is a 3rd box titled "View Controllers" labelled "Core". There are 2 arrows going upwards from the bottom, linking the 3 boxes.]({{site.url}}/assets/images/dependencies/dependency_graphic_2.png)

## Other Use Cases

There are several ways to use this pattern, but it basically comes down to being able to abstract up a layer from your dependencies so that the implementation is generic enough to work with multiple libraries (that do the same thing). Here are a few other examples;

{% highlight swift %}
// Could be used with Haneke or SDWebImage
protocol ImageCacher {
 func cache(image: UIImage, withKey key: String)
 func imageFromCache(withKey key: String)
}

// Could be used with Firebase or MixPanel
protocol AnalyticsTracker {
 func trackEvent(withName name: String, meta: [String: Any])
}

// Could be used with Firebase or even NSURLSession
protocol FileDownloader {
 func downloadData(from: URL, completion: (Data) -> Void)
}
{% endhighlight %}

All of these examples can be easily implemented by all sorts of libraries, but it avoids having 3rd party code and models in your domain layer and makes switching one out an absolute breeze.

For example, in my [last app](https://itunes.apple.com/gb/app/no-activity-sleep-tracker/id1351478990?mt=8) I use a repository to sit between my core app layer and HealthKit. That way, if I ever wanted to switch to another source of health data, I could do so easily. Also, my domain layer objects don’t have the 100s of properties that HealthKit’s do, instead, my models just have the properties I need.

## Conclusion

There are obvious benefits to this approach for testing, as well as some advanced implementations where the repo/manager holds multiple instances of a protocol type. Handy if, for example, you’re using multiple analytics providers, or uploading files to multiple places (eg. Amazon and Firebase).

Writing all this down makes it sounds like I’m pointing out the bleeding obvious, but hopefully it’ll be useful to someone. And as usual, the implementation of this pattern sounds great until you actually come to do it and meet a giant road block. It’s happened to me countless times, but for the sole reason of being able to rip out dependencies at a days notice makes it worth pursuing.

I’d love to hear from you if you like what I’ve done, or likewise if you don’t. Or if you have any questions I’m always happy to help and you can find me on [email](mailto:hello@johnyorke.me) or [Twitter](http://www.twitter.com/johnyorke).
