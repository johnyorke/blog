import Ignite

struct MacintoshTheme: Theme {
    var colorScheme: ColorScheme { .light }

    var accent: Color { Color(hex: "#000000") }
    var secondaryAccent: Color { Color(hex: "#555555") }
    var success: Color { Color(hex: "#000000") }
    var info: Color { Color(hex: "#000000") }
    var warning: Color { Color(hex: "#000000") }
    var danger: Color { Color(hex: "#000000") }

    var offWhite: Color { Color(hex: "#f4f4f4") }
    var offBlack: Color { Color(hex: "#000000") }

    var primary: Color { Color(hex: "#000000") }
    var emphasis: Color { Color(hex: "#000000") }
    var secondary: Color { Color(hex: "#333333") }
    var tertiary: Color { Color(hex: "#666666") }

    var background: Color { Color(hex: "#ffffff") }
    var secondaryBackground: Color { Color(hex: "#dddddd") }
    var tertiaryBackground: Color { Color(hex: "#eeeeee") }

    var link: Color { Color(hex: "#000000") }
    var hoveredLink: Color { Color(hex: "#555555") }
    var linkDecoration: TextDecoration { .underline }
    var border: Color { Color(hex: "#000000") }

    var font: Font {
        Font(
            name: "\"Chicago\", \"Geneva\", \"Monaco\", \"Courier New\", monospace",
            weight: .regular,
            sources: [])
    }

    var headingFont: Font { font }

    var monospaceFont: Font {
        Font(
            name: "\"Monaco\", \"Courier New\", monospace",
            weight: .regular,
            sources: [])
    }
    var headingFontWeight: FontWeight { .bold }
}
