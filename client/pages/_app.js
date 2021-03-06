import App from "next/app";
import delve from "dlv";
import ErrorPage from "next/error";
import { QueryClient, QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";
import { getStrapiURL, handleRedirection } from "../utils";
import { getLocalizedParams } from "../utils/localize";
import styles from  '../styles/styles.scss'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  if (global === null) {
    return <ErrorPage statusCode={404} />;
  }
  console.log('pageProps',pageProps)
  return (
    <>
      <QueryClientProvider className={styles} client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { locale } = getLocalizedParams(appContext.ctx.query);

  const appProps = await App.getInitialProps(appContext);

  try {
    const res = await fetch(
      getStrapiURL(
        `/global?populate[navigation][populate]=*&populate[footer][populate][footerColumns][populate]=*&populate[contact][populate]=*`
      ),
    );
    const globalData = await res.json();
    const globalDataAttributes = globalData.data.attributes;
    return { ...appProps, pageProps: { global: globalDataAttributes } };
  } catch (error) {
    return { ...appProps };
  }
};

export default MyApp;
