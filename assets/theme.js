// Shared Tailwind theme for every page of the site.
// Colours come from the logo: misty sky, sage field, peach field, charcoal line.
// The token names are the ones the pages already use, so one change here restyles the whole site.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // sage (logo field, deepened for text and buttons)
        "primary": "#4A7A60",
        "surface-tint": "#3D6750",
        "on-primary": "#ffffff",
        "primary-container": "#DCEBE0",
        "on-primary-container": "#2E5442",
        "primary-fixed": "#DCEBE0",
        "primary-fixed-dim": "#C5DCCB",
        "on-primary-fixed": "#1E3A2C",
        "on-primary-fixed-variant": "#2E5442",
        "inverse-primary": "#C5DCCB",
        "spring-mist": "#EEF5F0",

        // sky (logo wash)
        "soft-cream": "#F4F8F8",
        "sky": "#DAE5E6",
        "sky-mist": "#F2F7F7",
        "sky-deep": "#4F7480",

        // peach (logo field) and its deeper clay tone
        "peach": "#EDCFC1",
        "peach-mist": "#FBF2ED",
        "clay": "#A35F47",
        "warm-wood": "#A35F47",
        "secondary": "#7A5A4C",
        "on-secondary": "#ffffff",
        "secondary-container": "#FBF0EA",
        "on-secondary-container": "#7A4E3C",
        "secondary-fixed": "#FBF0EA",
        "secondary-fixed-dim": "#EDCFC1",
        "on-secondary-fixed": "#3E271D",
        "on-secondary-fixed-variant": "#6E4636",
        "tertiary": "#7A5A4C",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#EDCFC1",
        "on-tertiary-container": "#6E4636",
        "tertiary-fixed": "#FBF0EA",
        "tertiary-fixed-dim": "#EDCFC1",
        "on-tertiary-fixed": "#3E271D",
        "on-tertiary-fixed-variant": "#6E4636",

        // charcoal (logo line) and white surfaces
        "deep-charcoal": "#2F3537",
        "background": "#ffffff",
        "surface": "#ffffff",
        "surface-bright": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#F5F8F8",
        "surface-container": "#EFF4F4",
        "surface-container-high": "#E8EFEF",
        "surface-container-highest": "#E1E9E9",
        "surface-dim": "#DCE4E4",
        "surface-variant": "#E8EFEF",
        "on-surface": "#2B3133",
        "on-background": "#2B3133",
        "on-surface-variant": "#535B5E",
        "outline": "#8A9497",
        "outline-variant": "#DCE4E4",
        "inverse-surface": "#2F3537",
        "inverse-on-surface": "#F2F7F7",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "md": "12px",
        "lg": "14px",
        "xl": "18px",
        "2xl": "22px",
        "3xl": "30px",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1200px",
        "margin-desktop": "48px",
        "margin-mobile": "16px",
        "base": "8px",
        "gutter": "24px",
        "section-gap": "56px"
      },
      fontFamily: {
        "sans": ["Assistant", "Heebo", "sans-serif"],
        "serif": ["Frank Ruhl Libre", "serif"],
        "display-lg": ["Frank Ruhl Libre", "serif"],
        "display-lg-mobile": ["Frank Ruhl Libre", "serif"],
        "headline-lg": ["Frank Ruhl Libre", "serif"],
        "headline-md": ["Frank Ruhl Libre", "serif"],
        "body-lg": ["Assistant", "Heebo", "sans-serif"],
        "body-md": ["Assistant", "Heebo", "sans-serif"],
        "label-md": ["Assistant", "Heebo", "sans-serif"],
        "caption": ["Assistant", "Heebo", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["54px", { "lineHeight": "1.12", "letterSpacing": "-0.01em", "fontWeight": "500" }],
        "display-lg-mobile": ["38px", { "lineHeight": "1.18", "fontWeight": "500" }],
        "headline-lg": ["36px", { "lineHeight": "1.25", "fontWeight": "500" }],
        "headline-md": ["24px", { "lineHeight": "1.35", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "1.75", "fontWeight": "400" }],
        "body-md": ["16.5px", { "lineHeight": "1.7", "fontWeight": "400" }],
        "label-md": ["15px", { "lineHeight": "1.35", "fontWeight": "600" }],
        "caption": ["13px", { "lineHeight": "1.45", "fontWeight": "400" }]
      }
    }
  }
};
