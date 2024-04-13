export const Breakpoints = {
  mobile: 420,
  tablet: 768,
  desktop: 1280
};

export const Constants = {
  mediaQueries: {
    mobile: `screen and (min-width: ${Breakpoints.tablet - 1}px)`,
    tablet: `screen and (min-width: ${Breakpoints.desktop - 1}px)`
  }
};
