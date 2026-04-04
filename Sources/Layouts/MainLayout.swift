import Foundation
import Ignite

struct MainLayout: Layout {
    var body: some Document {
        Body {
            NavigationBar(logo: "johnyorke.me") {
                Link("Blog", target: "/")
                Link("About", target: "/about")
                Link("Projects", target: "/projects")
                Link("Recommendations", target: "/recommendations")
            }

            content

            IgniteFooter()
        }
    }
}
