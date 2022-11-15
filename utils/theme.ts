export const sizes = {
  xsmall: 375,
  small: 600,
  medium: 850,
  large: 1025,
  xlarge: 1520,
};

export const pixelSizes = {
  xsmall: sizes.xsmall + 'px',
  small: sizes.small + 'px',
  medium: sizes.medium + 'px',
  large: sizes.large + 'px',
  xlarge: sizes.xlarge + 'px',
};

export default {
  colors: {
    black: '#323D43',
    white: 'white',
    primary: '#00365F',
    action: '#457b9d',
    lightGray: '#e5e5e5',
    border: '#1d3557',
  },
  layout: {
    pagePadding: '16rem',
    mobilePagePadding: '1.6rem',
  },
  device: {
    mobileM: `(min-width: ${pixelSizes.xsmall})`,
    mobileL: `(min-width: ${pixelSizes.small})`,
    tablet: `(min-width: ${pixelSizes.medium})`,
    desktop: `(min-width: ${pixelSizes.large})`,
    desktopL: `(min-width: ${pixelSizes.xlarge})`,
  },
};
