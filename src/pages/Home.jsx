import { ShoppingCart } from "iconsax-react";
import Container from "../components/shared/Container";
import Slider from "../components/slider/Slider";
import Faq from "../components/ui/faq/Faq";
import Products from "../components/ui/products/Products";
import Reviews from "../components/ui/reviews/Reviews";
import OrderNow from "../components/ui/ordernow/OrderNow";
import Footer from "../components/shared/Footer";

function Home() {
  return (
    <>
      <Container>
        <Slider />
        <div className="flex items-center justify-center my-5 lg:my-10">
          <button
            className="btn flex items-center gap-1"
            type="button"
            onClick={() =>
              document.getElementById("order-now").scrollIntoView()
            }
          >
            <ShoppingCart
              className="size-5"
              variant="Bold"
              color="currentColor"
            />
            এখনই অর্ডার করুন
          </button>
        </div>
        <Faq />
        <Products />
        <Reviews />
        <div id="order-now">
          <OrderNow />
        </div>
      </Container>
    </>
  );
}

export default Home;
