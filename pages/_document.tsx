import Document, { Html, Head, Main, NextScript } from "next/document";

const URL = process.env.URL || "/";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href={`${URL}favicon.svg`} type="image/svg+xml" />
          <link rel="alternate icon" href={`${URL}favicon.png`} type="image/png" />
          
          <meta property="og:title" content="Synx" />

          <meta
            name="description"
            content="We automate Data Science most time consuming processes, allowing Data Engineers and Data Scientists to train, deploy and run models at scale with low friction."
          />
          <meta
            property="og:description"
            content="We automate Data Science most time consuming processes, allowing Data Engineers and Data Scientists to train, deploy and run models at scale with low friction."
          />

          <link rel="canonical" href="https://synx.ai/" />
          <meta property="og:url" content="https://synx.ai/" />

          <meta property="og:image" content="https://synx.ai/assets/opengraph.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <base href={URL} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
