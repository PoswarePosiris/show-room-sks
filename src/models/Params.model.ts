interface Params {
    ParametersID: string;
    CompanyName: string;
    CompanyLogo: string;
    CompanyLogoPrinter: string;
    ImageTpe: string;
    BackgroundIntro: string;
    BackgroundImage: string;
    ColorBackground: string;
    ColorBackgroundDefault: string;
    ColorPrimary: string;
    ColorSecondary: string;
    ColorTertiary: string;
    ColorSuccess: string;
    ColorError: string;
    ColorTextLight: string;
    ColorTextDark: string;
    createdAt: string;
    updateAt: string;
}

interface macTheme extends Params {
    macAdress: string;
}

export type { Params, macTheme };