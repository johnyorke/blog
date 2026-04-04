import Foundation
import Ignite

struct Tags: TagPage {
    var body: some HTML {
        Text(tag.name.isEmpty ? "All tags" : tag.name)
            .font(.title1)

        Section {
            for article in tag.articles {
                ArticlePreview(for: article)
            }
        }
    }
}
