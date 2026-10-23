import Foundation
import Ignite

struct Games: StaticPage {
    var title = "Games"
    var path = "games"

    var body: some HTML {
        Text("Games")
            .font(.title1)

        Text("A couple of small games I've made that you can play in the browser.")

        Text {
            Link("Social Distancing", target: "/games/social-distancing/")
        }
        .font(.title3)
        Text("A GameMaker Studio experiment from the early days of the pandemic. Keep your distance from sneezing people and collect the sought-after toilet rolls.")

        Text {
            Link("Pull Request", target: "/games/pull-request/")
        }
        .font(.title3)
        Text("You are the last human PR reviewer in an AI company. Review the deluge, find the flaws and ship yourself out of a job.")
    }
}
