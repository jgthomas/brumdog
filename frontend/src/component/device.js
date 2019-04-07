
const size = {
    laptopLarge: "1440px",
    laptopHuge: "1600px",
    desktopLarge: "1920px",
    desktopHuge: "2450px"
}

const device = {
    laptopLarge: `(min-width: ${size.laptopLarge})`,
    laptopHuge: `(min-width: ${size.laptopHuge})`,
    desktopLarge: `(min-width: ${size.desktopLarge})`,
    desktopHuge: `(min-width: ${size.desktopHuge})`
}

export device;
