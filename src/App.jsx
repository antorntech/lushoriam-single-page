import { Link } from "react-router-dom";
import Footer from "./components/shared/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrlTopOfPage from "./components/scrlTopOfPage/ScrlTopOfPage";

function App() {
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
    </>
  );
}

export default App;
