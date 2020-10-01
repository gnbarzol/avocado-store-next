import { AppProps } from "next/app";
import Layout from "@componets/Layout/Layout.component";

function MyApp({ Component, pageProps }: AppProps) {
  //En el archivo _app podemos inyectarle anábolicos (providers,
  //themes, props, o cualquier cosa que necesitemos) a toda nuestra aplicación.

  //Layout

  return (
    <div>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
