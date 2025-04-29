import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/shared/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrlTopOfPage from "./components/scrlTopOfPage/ScrlTopOfPage";
import OfferModal from "./components/offermodal/OfferModal";

function App() {
  const [showOfferModal, setShowOfferModal] = useState(false);

  useEffect(() => {
    setShowOfferModal(true);
  }, []);

  return (
    <>
      <ScrlTopOfPage />
      <div className="flex items-center justify-center my-3">
        <Link to="/">
          <img src="/logo.svg" className="logo" alt="Lushoriam logo" />
        </Link>
      </div>
      <AppRoutes />
      <Footer />
      {showOfferModal && (
        <OfferModal onClose={() => setShowOfferModal(false)} />
      )}
    </>
  );
}

export default App;
