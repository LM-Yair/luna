import ContainerPage from "components/ContainerPage/ContainerPage";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContainerPage>
      <Component {...pageProps} />
    </ContainerPage>
  );
}

export default MyApp;
