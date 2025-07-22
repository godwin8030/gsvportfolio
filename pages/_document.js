import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script id="gs-sdk" src="https://web-widget.gupshup.io/v3/demo/static/js/sdk.js" appId="fb50ed50-9384-40c1-a6e3-d51607e783c6" ref="ar"></script>
      </body>
    </Html>
  )
}
