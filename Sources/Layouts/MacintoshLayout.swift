import Foundation
import Ignite

struct MacintoshLayout: Layout {
    @Environment(\.page) private var page
    @Environment(\.site) private var site

    var body: some Document {
        Head {
            MetaLink(href: "/css/macintosh.css", rel: .stylesheet)
        }

        Body {
            Section {
                Section {
                    Link("", target: "/")
                        .aria(.label, "johnyorke.me home")
                        .class("mac-menu-apple")

                    Link("Blog", target: "/")
                        .class("mac-menu-item")

                    Link("About", target: "/about")
                        .class("mac-menu-item")

                    Link("Projects", target: "/projects")
                        .class("mac-menu-item")

                    Link("Games", target: "/games")
                        .class("mac-menu-item")

                    Span(site.name)
                        .class("mac-menu-name")
                }
                .class("mac-menu-bar")

                Section {
                    Section {
                        Link("Macintosh HD", target: "/")
                            .class("mac-desktop-icon", "mac-disk-icon")

                        Link("About", target: "/about")
                            .class("mac-desktop-icon", "mac-document-icon")
                    }
                    .class("mac-desktop-icons")

                    Section {
                        Section {
                            Link("", target: "/")
                                .aria(.label, "Close window and go home")
                                .class("mac-close-box")

                            Span(windowTitle)
                                .class("mac-window-title")

                            Span()
                                .class("mac-zoom-box")
                        }
                        .class("mac-title-bar")

                        Section {
                            content
                        }
                        .class("mac-window-content")

                        Section {
                            Span(site.name)
                                .class("mac-status-left")

                            Span("Macintosh System 1.0")
                                .class("mac-status-right")
                        }
                        .class("mac-status-bar")
                    }
                    .class("mac-window")

                    Span("Trash")
                        .class("mac-desktop-icon", "mac-trash-icon")
                }
                .class("mac-desktop")
            }
            .class("mac-screen")
        }
        .ignorePageGutters()
    }

    private var windowTitle: String {
        let title = page.title.trimmingCharacters(in: .whitespacesAndNewlines)

        if title.isEmpty || title == "Home" {
            return site.name
        }

        return "\(title) - \(site.name)"
    }
}
