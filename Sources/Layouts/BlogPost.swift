import Foundation
import Ignite

struct BlogPost: ArticlePage {
    var body: some HTML {
        Text(article.title)
            .font(.title1)

        Text(article.date.formatted(date: .long, time: .omitted))
            .foregroundStyle(.secondary)

        article.text
    }
}
