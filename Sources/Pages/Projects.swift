import Foundation
import Ignite

struct Projects: StaticPage {
    var title = "Projects"
    var path = "projects"

    var body: some HTML {
        Text("Projects")
            .font(.title1)

        Text {
            Link("Tempo Weather", target: "https://bsky.app/profile/did:plc:l2ivqhps4jgde4kidasaqvbw")
            " (iOS, 2013)"
        }
        .font(.title3)
        Text("My first app published to the store. At it's peak it reached 10,000 downloads a day, re-gained in popularity when I added watchOS support on day 1 of the Apple Watch being available.")

        Text {
            Link("Chelsea FC Hospitality", target: "https://apps.apple.com/gb/app/chelsea-fc-hospitality/id751451886")
            " (iOS, 2014)"
        }
        .font(.title3)
        Text("Worked closely with Chelsea FC to deliver an app to compliment their matchdays. Interesting project that shifted state based on real-time events (pre-match, during match, half time, post-match).")

        Text {
            Link("Can't Help My Selfie for FCUK", target: "https://vimeo.com/94516759")
            " (macOS, 2014)"
        }
        .font(.title3)
        Text("I was the lead developer for the macOS app that was hooked-up to an array of webcams which registered people's votes for a look that appears in the window display.")

        Text {
            Link("Interactive Window Catalogue for Finery", target: "https://vimeo.com/118485213")
            " (macOS, 2015)"
        }
        .font(.title3)
        Text("Built a macOS app to interact with a product catalogue through the window using a Magic Leap.")

        Text {
            Link("Feelix", target: "https://artgym.com/what-if-we-could-picture-how-the-world-feels/")
            " (iOS, 2015)"
        }
        .font(.title3)
        Text("Charming app that used the camera to help you capture daily images and assign emotions and colours to them. All displayed in an Instagram-like feed.")

        Text {
            Link("Football Whispers", target: "/assets/videos/football_whispers/football_whispers.mp4")
            " (iOS, 2016)"
        }
        .font(.title3)
        Text("I designed and developed the app that took advantage of most corners of iOS at the time, including haptics, 3D Touch and rich push notifications, all wrapped up in a very native-feeling experience.")

        Text {
            Link("Easy Sleep Tracker", target: "https://www.noactivityapp.com")
            " (iOS, 2018)"
        }
        .font(.title3)
        Text("My own app that I designed and developed to help you automatically track your sleep based on large periods of inactivity (like your watch being on your nightstand).")

        Text {
            Link("Drest", target: "https://www.drest.com")
            " (iOS, 2019)"
        }
        .font(.title3)
        Text("I spent a lot of time leading the Core team there, and continued contributing to a codebase that I started in 2016.")
    }
}
