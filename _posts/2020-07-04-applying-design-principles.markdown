---
layout: post
title:  "Applying Dieter Rams 10 Principles of Good Design to APIs"
date:   2020-07-04 00:00:00 +0000
categories: ios swift development
---

The best engineers don’t just make something work, they also consider *how* it works. The idea of “API design” garners very little attention, but to me it is a fundamental of programming. 

Whether you work in a team or it’s just you and your future-self, APIs will have “users” at the end of the day and they need to be intuitive. When writing, the author should agonise over how the next engineer might interpret and use their design. 

In case I haven’t been 100% clear: **this article has nothing to do with the end-user or a graphical user interface, it’s about developer-to-developer interfacing.**

The header file is your “user interface” and should adhere to Dieter Rams’ [10 Principles of Good Design](https://hackernoon.com/dieter-rams-10-principles-of-good-design-e7790cc983e9)…

### 1. Good design is innovative
**innovative** - *featuring new methods; advanced and original*

The API does something new in the application and is worthy of creating a new class (as opposed to extending an existing one). 

### 2. Good design makes a product useful
**useful** - *able to be used for a practical purpose or in several ways*

The API makes a previously labour-intensive task trivial and highly likely to be used in the future. 

### 3. Good design is aesthetic
**aesthetic** - *concerned with beauty or the appreciation of beauty*

The signature should be pleasing to the eye and easy for the brain to parse, both in the declaration and at the call site. 

Consider a database object that can save a new record:

```swift
// Option 1
func saveRecordToDatabase(record: Database) -> Error?

// Option 2
func save(_ record: Record) throws
```

Option 2 is more natural to read and makes use of language features to keep the word-count down and add clarity.

### 4. Good design makes a product understandable
**understandable** - *to be expected; natural, reasonable, or forgivable*

One glance and you should know how to use the class or a given function. Decrease the cognitive load on the reader by favouring tight access-control over kitchen-sink flexibility.

### 5. Good design is unobtrusive
**unobtrusive** - *not conspicuous or attracting attention*

The API should not have a huge build-up procedure and should be lightweight enough to create and (critically) dispose-of easily.

### 6. Good design is honest
**honest** - *free of deceit; truthful and sincere*

The signature is descriptive and explains exactly what it does.

All dependencies are injected in so there are is internal magic, no global state that can be altered and no nasty side-effects.

Let’s imagine you need an object to fetch some data from a remote source:

```swift
    // Option 1
    func fetchData(_ completion: (Data?) -> Void) {
        let category = database.getParentCategory(for: self.selectedItem)
        // How would I know that this function accesses the database unless I looked
        // closely at the implementation?
        
        setLoadingStateTo(.loading)
        // Again, how would I know this affects some state by this function name?

        apiClient.data(for: category.id) { result in
            // process the result and return the data
        }
    }
    
    // Option 2
    func fetchData(forCategoryId id: String, completion: (Data?) -> Void) {
        apiClient.data(for: category.id) { result in
            // process the result and return the data
        }
    }
```

### 7. Good design is long lasting
**long lasting** - *enduring or having endured for a long period of time*

Should be written to be extendable and very rarely modified. Application or language versions can change but the public API should stand the test of time.

### 8. Good design is thorough down to the last detail
**thorough** - *performed or written with great care and completeness*

Well documented and every signature, parameter name and return type considered for legibility and usefulness.

### 9. Good design is environmentally friendly
**environmentally friendly** - *not harmful to the environment*

I think Dieter Ram was referring to the natural environment we live in, but it’s not much of a stretch to see the codebase and the development team as the “environment”.

This means the API shouldn’t affect any global state and keeps performance in mind. It should be backed up by tests to give the user or future maintainer confidence. 

If there is a style guide or convention in the app, it should be considered as part of the legibility/usability thought-process when designing.

### 10. Good design is as little design as possible

Keep it terse and have the callee in mind. Internally, keep an eye on the line count and consider creating a separate object if it gets out of hand. Remember that less code == less bugs. 

Da Vinci was rumoured to have said “simplicity is the ultimate sophistication”. We tend to see simplicity as something an engineer graduates from, but instead it should be a quality they relentlessly chase through their entire career.

## Summary

The best companies recognise that “creatives” are essentially engineers and that engineers are inherently creative. A lot of the learnings from the alternative discipline can often be applied to what you do. 

[Abstract](www.abstract.com) is a good example of the opposite to this article, in that it takes something that works well in software development (version control and a peer review process) and applies it to the visual design process.

The term “design” is not reserved for the visual. The genius of Dieter Rams principles is that they are universal and can be applied to every discipline that requires craft. And very few (in my humble opinion) require more craft than a simple and useful API.
