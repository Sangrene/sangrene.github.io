import baseStyled, { ThemedStyledInterface, keyframes } from "styled-components";
export const theme = {
  color: {
    text: "",
    intro: {
      background: "#FFFFFF",
      main: "#9b3587",
    },
    perso: {
      background: "#9B3587",
    },
    skills: {
      background: "#96F550",
    },
    experiences: {
      background: "#016FB9",
    },
    contact: {
      background: "#686963",
    },
  },
  breakpoint: {
    mobile: `(max-width: 768px)`,
  },
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export type styledAnimation = typeof keyframes;
export type StyleSheet = { [key: string]: React.CSSProperties };
