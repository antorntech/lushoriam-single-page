import { useState } from "react";
import Container from "../../shared/Container";

const OrderNow = () => {
  const productPrice = 600;
  const productName = "Printed Sunny Umbrella";
  const productImage = "/assets/images/product1.jpg";

  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    delivery: "inside",
  });

  const [showModal, setShowModal] = useState(false);

  const deliveryCharges = {
    inside: 80,
    outside: 140,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalAmount =
    quantity * productPrice + deliveryCharges[formData.delivery];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      address: "",
      mobile: "",
      delivery: "inside",
    });
    setQuantity(1);
  };

  return (
    <Container className="w-full my-5 md:my-10 p-5 md:p-10 border border-gray-500 rounded-md">
      <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-12 text-center">
        অর্ডার করতে আপনার সঠিক তথ্য দিয়ে নিচের ফর্মটি সম্পূর্ণ পূরন করুন।
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12"
      >
        {/* Customer Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">কাস্টমার তথ্য</h3>
          <div className="space-y-2">
            <label htmlFor="name">
              আপনার নাম লিখুন <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="address">
              আপনার ঠিকানা লিখুন <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="mobile">
              আপনার মোবাইল নাম্বারটি লিখুন{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">ডেলিভারি</h3>
            <label className="mr-4">
              <input
                type="radio"
                name="delivery"
                value="inside"
                checked={formData.delivery === "inside"}
                onChange={handleChange}
              />{" "}
              ঢাকার ভিতরে: ৳ ৮0.00
            </label>
            <label>
              <input
                type="radio"
                name="delivery"
                value="outside"
                checked={formData.delivery === "outside"}
                onChange={handleChange}
              />{" "}
              ঢাকার বাহিরে: ৳ ১২0.00
            </label>
          </div>
        </div>

        {/* Product Information */}
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={productImage}
              alt={productName}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{productName}</h3>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  -
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <p className="text-lg font-semibold my-5">Total: {totalAmount} TK</p>
          <div className="mb-5 p-4 bg-primary/10 rounded">
            <h2>ক্যাশ অন ডেলিভারি</h2>

            <div className="my-4 bg-primary/20 p-5">
              <p>পণ্য হাতে পেয়ে ডেলিভারি ম্যানকে পেমেন্ট করতে পারবেন।</p>
            </div>
          </div>
          <button type="submit" className="w-full btn text-white py-2">
            Place Order Now
          </button>
        </div>
      </form>

      {/* Congratulations Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm z-[99999]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 h-[40vh] text-center ">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              অভিনন্দন!
            </h2>
            <p className="text-lg mb-5">
              আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে। 🎉
            </p>
            <div className="p-4 border rounded-lg shadow-sm text-left space-y-2">
              <p>
                <strong>প্রোডাক্ট:</strong> {productName}
              </p>
              <p>
                <strong>নাম:</strong> {formData.name}
              </p>
              <p>
                <strong>ঠিকানা:</strong> {formData.address}
              </p>
              <p>
                <strong>মোবাইল:</strong> {formData.mobile}
              </p>
              <p className="text-xl font-semibold mt-4">
                মোট পরিমাণ: {totalAmount} TK
              </p>
            </div>
            <button
              onClick={closeModal}
              className="mt-5 px-6 py-2 bg-green-600 text-white rounded-md"
            >
              ঠিক আছে
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default OrderNow;
