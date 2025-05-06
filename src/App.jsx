import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/shared/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrlTopOfPage from "./components/scrlTopOfPage/ScrlTopOfPage";
import OfferModal from "./components/offermodal/OfferModal";
import { Call, ShoppingCart } from "iconsax-react";

function App() {
  const [showOfferModal, setShowOfferModal] = useState(false);

  useEffect(() => {
    setShowOfferModal(false);
  }, []);

  return (
    <>
      <ScrlTopOfPage />
      <header className="max-w-screen-xl px-4 mx-auto bg-white/90 backdrop-blur sticky top-0 h-16 z-[11]">
        <div className="h-full flex justify-between items-center">
          <a href="tel:01608081907" className="hidden lg:inline">
            <button
              type="button"
              className="btn primary flex items-center gap-1"
            >
              <Call color="currentColor" variant="Bold" className="size-5" />
              <span className="whitespace-nowrap">কল করুন</span>
            </button>
          </a>
          <div className="text-xl font-bold h-full">
            <a href="/">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-full object-contain w-[180px] md:w-[200px] max-w-[200px]"
              />
            </a>
          </div>
          <div>
            <a
              href="#order-now"
              className="btn primary flex items-center gap-1"
            >
              <ShoppingCart
                color="currentColor"
                variant="Bold"
                className="size-5"
              />
              অর্ডার করুন
            </a>
          </div>
        </div>
      </header>

      <AppRoutes />
      <Footer />
      {showOfferModal && (
        <OfferModal onClose={() => setShowOfferModal(false)} />
      )}
    </>
  );
}

export default App;
