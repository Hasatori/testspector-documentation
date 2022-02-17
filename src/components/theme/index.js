const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#ECF2FA',
    heading: '#262035',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#4285f4',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#001933',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#4484CE',
  },
};

export { lightTheme, darkTheme };
