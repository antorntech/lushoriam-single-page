import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/shared/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrlTopOfPage from "./components/scrlTopOfPage/ScrlTopOfPage";
import OfferModal from "./components/offermodal/OfferModal";
import { Call, ShoppingCart } from "iconsax-react";
import FloatingWhatsappButton from "./components/floatingWhatsappButton/FloatingWhatsappButton";

const API_URL = "https://lushoriam-server-abnd.vercel.app";

function App() {
  const [showOfferModal, setShowOfferModal] = useState(false);

  useEffect(() => {
    setShowOfferModal(false);
  }, []);

  // useEffect(() => {
  //   fetch(`${API_URL}/api/v1/pixel/pageview`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({}),
  //   });
  // }, []);

  useEffect(() => {
    const trackPageView = async () => {
      try {
        const res = await fetch(`${API_URL}/api/v1/pixel/pageview`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });

        const data = await res.json();

        // ✅ Optional: Fire fbq() if available and eventId exists
        if (
          typeof window !== "undefined" &&
          typeof fbq === "function" &&
          data?.eventId
        ) {
          fbq("track", "PageView", {
            eventID: data.eventId, // 🔁 Matches the server-side event
          });
          console.log('Meta Pixel event "PageView" fired!', data.eventId);
        }
      } catch (error) {
        console.error("❌ PageView tracking error:", error);
      }
    };

    trackPageView();
  }, []);

  return (
    <>
      <ScrlTopOfPage />
      <FloatingWhatsappButton
        phoneNumber="8801608081907"
        message="Hi! I need help with your product."
      />
      <header className="max-w-screen-xl px-4 mx-auto bg-primary/10 backdrop-blur rounded-b-lg sticky top-0 h-16 z-[11]">
        <div className="h-full flex justify-center md:justify-between items-center">
          <a href="tel:01608081907" className="hidden lg:inline">
            <button
              type="button"
              className="btn primary flex items-center gap-1 hover:shadow-md"
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
              className="btn primary lg:flex items-center gap-1 hidden hover:shadow-md"
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
