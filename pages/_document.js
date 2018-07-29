import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
        <meta name="viewport" content="width=device-width"/>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Prata" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic" rel="stylesheet"/>        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}