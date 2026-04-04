import Foundation
import Ignite

@main
struct IgniteWebsite {
    static func main() async {
        var site = JohnYorkeSite()

        do {
            try await site.publish()
        } catch {
            print(error.localizedDescription)
        }
    }
}

struct JohnYorkeSite: Site {
    var name = "johnyorke.me"
    var titleSuffix = " – johnyorke.me"
    var url = URL(static: "https://www.johnyorke.me")
    var author = "John Yorke"

    var homePage = Home()
    var tagPage = Tags()
    var layout = MainLayout()
    var staticPages: [any StaticPage] = [About(), Projects(), Recommendations()]
    var articlePages: [any ArticlePage] = [BlogPost()]
    var feedConfiguration = FeedConfiguration(mode: .full, contentCount: 20)
    var syntaxHighlighterConfiguration = SyntaxHighlighterConfiguration(languages: [.swift])
}
