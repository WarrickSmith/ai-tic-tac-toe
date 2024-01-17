import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from 'styled-components'

type ThemedGlobalStyledClassProps = {
  theme: DefaultTheme
}

type OptionalProps = {
  [key: string]: string
}

type GlobalStyleProps = ThemedGlobalStyledClassProps & OptionalProps

const GlobalStyle: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme
> = createGlobalStyle`

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    --color: blue;
    --color-alt: #ffb400;
    --color-alt2: #666;
    --color-alt3: #999;
    --bg-color: #111111;
    --bg-color-alt: lightgray;
    --border-style: 1px solid #666;
    --border-style-alt: 1px solid white;
    --fs-xxsm: 0.5rem;
    --fs-xsm: 0.75rem;
    --fs-sm: 1.5rem;
    --fs-med: 4rem;
    --fs-lge: 8rem;
    --media-mobile: 315px;

  }

  body,
  html, input,textarea {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
  }

  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    min-width: 33vw;
    min-height: 100vh;
    color: var(--color);
    background: var(--bg-color);
    font-weight: 700;
    overflow: hidden;
  }
`
export default GlobalStyle
