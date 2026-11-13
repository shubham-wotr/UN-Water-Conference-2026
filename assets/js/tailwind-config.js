  tailwind.config = {
    theme: {
      extend: {
        colors: {
          /* WOTR theme (wotr.org): deep teal + sunflower yellow */
          "background": "#f8faf9", "surface": "#f8faf9",
          "surface-container-lowest": "#ffffff", "surface-container-low": "#eef5f3",
          "surface-container": "#e3efec", "surface-container-high": "#d3e5e1",
          "surface-variant": "#d3e5e1", "inverse-surface": "#0f3d3a",
          "on-surface": "#10302d", "on-surface-variant": "#3e5552",
          "primary": "#134f4c", "on-primary": "#ffffff",
          "primary-container": "#fdc530", "on-primary-container": "#10302d",
          "primary-fixed": "#fde9ad", "on-primary-fixed": "#10302d",
          "secondary": "#1d6b66", "on-secondary": "#ffffff",
          "tertiary": "#2e7d4f", "on-tertiary": "#ffffff",
          "accent": "#fdc530", "accent-dim": "#f0b400", "on-accent": "#10302d",
          "deep": "#0f3d3a",
          "outline": "#6b7f7c", "outline-variant": "#bfd0cc",
          "error": "#ba1a1a", "error-container": "#ffdad6",
          "banner": "#93a9b8"
        },
        borderRadius: { DEFAULT: "0.125rem", lg: "0.25rem", xl: "0.5rem", full: "9999px" },
        spacing: {
          "space-xs": "0.25rem", "space-sm": "0.5rem", "space-md": "1rem",
          "space-lg": "1.5rem", "space-xl": "2.5rem", "gutter": "1.5rem", "margin-mobile": "1rem"
        },
        fontFamily: { sans: ["Lexend", "system-ui", "sans-serif"] },
        fontSize: {
          "display-hero": ["48px", { lineHeight: "56px", fontWeight: "700" }],
          "headline-lg": ["36px", { lineHeight: "44px", fontWeight: "700" }],
          "headline-lg-mobile": ["26px", { lineHeight: "33px", fontWeight: "700" }],
          "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
          "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
          "title": ["16px", { lineHeight: "24px", fontWeight: "600" }],
          "body-lg": ["18px", { lineHeight: "28px" }],
          "body-md": ["15px", { lineHeight: "22px" }],
          "body-sm": ["13px", { lineHeight: "18px" }],
          "label-default": ["12px", { lineHeight: "16px", fontWeight: "500" }],
          "label-caps": ["11px", { lineHeight: "16px", fontWeight: "700" }]
        }
      }
    }
  }
