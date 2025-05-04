import { ShoppingCart } from "iconsax-react";
import Container from "../components/shared/Container";
import Slider from "../components/slider/Slider";
import Faq from "../components/ui/faq/Faq";
import Products from "../components/ui/products/Products";
import Reviews from "../components/ui/reviews/Reviews";
import OrderNow from "../components/ui/ordernow/OrderNow";
import Footer from "../components/shared/Footer";
import Hero from "../components/slider/Hero";

function Home() {
  return (
    <>
      <Container>
        {/* <Slider /> */}
        <Hero />
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
