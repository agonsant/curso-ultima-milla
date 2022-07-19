export type ThemeType = typeof light;

export const light = {
  primary: "#3D50DF",
  secondary: "#00F8FF",
  text: "#120D26",
  lightText: "#9E9E9E",
  background: "#e5e5e5",
};

export const dark = {
  primary: "#222",
  secondary: "#00F8FF",
  text: "#120D26",
  lightText: "#9E9E9E",
  background: "#353232",
};

let theme = light;
export default theme;
