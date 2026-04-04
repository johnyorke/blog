import Foundation
import Ignite

struct About: StaticPage {
    var title = "About"
    var path = "about"

    var body: some HTML {
        Text("About")
            .font(.title1)

        Text("I live and work in Milton Keynes, UK. I'm the husband to a wonderful wife, and father to two extremely noisy children.")

        Text {
            "The views and code-quality presented on this site are not reflective of my "
            Link("current employer", target: "http://www.monzo.com")
            "."
        }
    }
}
