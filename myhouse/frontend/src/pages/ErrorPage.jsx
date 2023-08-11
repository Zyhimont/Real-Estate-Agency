import { useRouteError } from "react-router-dom";
import Error from "../components/Error/Error";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page-wrapper footer-fixator">
      <Header />   
      <Error error={error} />
      <Footer />
    </div>
  );  
}