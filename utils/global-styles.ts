import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<{ theme: any }>`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.black};
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background-color: ${props => props.theme.colors.lightGray};
    text-align: center;
  }

  html {
    font-size: 10px;
  }

  @media ${props => props.theme.device.tablet} {
    html {
      font-size: 1vw;
    }
  }

  @media ${props => props.theme.device.desktop} {
    html {
      font-size: 0.8vw;
    }
  }
  @media ${props => props.theme.device.desktopL} {
    html {
      font-size: 0.7vw;
    }
  }

  * {
    box-sizing: border-box;
    backface-visibility: hidden;
  }

  button:hover {
    cursor: pointer;
  }

  p {
    font-size: 2rem;
    font-weight: normal;
    padding: 1rem 2rem 2rem 2rem;
  }

  label {
    font-size: 2rem;
  }

  span {
    font-size: 4rem;
  }

  .colorChangeDiv {
    margin: 2rem;
  }

  h1 {
    font-size: 2rem;
    @media ${props => props.theme.device.tablet} {
      font-size: 3rem;
    }
  }

`;
