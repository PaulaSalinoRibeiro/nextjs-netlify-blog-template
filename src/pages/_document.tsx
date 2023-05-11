import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript  } from 'next/document';
 
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
 
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head lang='pt-BR'>
          <title>Paula Ribeiro | Blog</title>
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
 
export default MyDocument;
 
  
