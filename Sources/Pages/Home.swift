import Foundation
import Ignite

struct Home: StaticPage {
    var title = "Home"

    @Environment(\.articles) var articles

    var body: some HTML {
        let sorted = articles.all.sorted { $0.date > $1.date }

        Section {
            for article in sorted {
                ArticlePreview(for: article)
            }
        }
    }
}
