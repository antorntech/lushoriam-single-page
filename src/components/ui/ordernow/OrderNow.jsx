import { useState } from "react";
import Container from "../../shared/Container";
import useGetData from "../../../utils/useGetData";

const API_URL = "https://lushoriam-server-abnd.vercel.app";

const OrderNow = () => {
  const products = useGetData("products");
  const [orderId, setOrderId] = useState("");

  const activeProduct = products?.find(
    (product) => product.status === "Active"
  );

  const productPrice = activeProduct?.price;
  const productName = activeProduct?.title;
  const productImage = activeProduct?.banner;

  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    delivery: "inside",
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const deliveryCharges = {
    inside: 0,
    outside: 0,
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

  const handleOrder = async () => {
    setLoading(true);
    const orderData = {
      name: formData.name,
      address: formData.address,
      mobile: formData.mobile,
      delivery: formData.delivery,
      productId: activeProduct._id,
      productName: productName,
      productImage: productImage,
      quantity,
      price: productPrice,
      totalAmount: totalAmount,
      status: "pending",
    };

    try {
      const response = await fetch(`${API_URL}/api/v1/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Order failed. Please try again.");
      }

      const data = await response.json();
      setOrderId(data?.order?.orderId);
      setShowModal(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrder();
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
        অর্ডার করতে আপনার সঠিক তথ্য দিয়ে নিচের ফর্মটি পূরণ করুন।
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12"
      >
        <div className="space-y-2 md:space-y-4">
          <h3 className="text-md md:text-xl font-semibold mb-2 md:mb-4">
            কাস্টমার তথ্য
          </h3>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm md:text-md">
              আপনার নাম লিখুন <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="নাম..."
              value={formData.name}
              onChange={handleChange}
              required
              title="Don't use special characters or numbers"
              pattern="^[A-Za-z\s]+$"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="text-sm md:text-md">
              আপনার ঠিকানা লিখুন <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="ঠিকানা..."
              value={formData.address}
              onChange={handleChange}
              required
              title="Please enter a valid address"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="mobile" className="text-sm md:text-md">
              আপনার মোবাইল নাম্বারটি লিখুন
              <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="মোবাইল..."
              value={formData.mobile}
              onChange={handleChange}
              required
              title="Please enter a valid phone number (01608-088888)"
              pattern="[0-9]{11}"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 mt-4 md:mt-0">
              ডেলিভারি
            </h3>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="delivery"
                  value="inside"
                  checked={formData.delivery === "inside"}
                  onChange={handleChange}
                />{" "}
                ঢাকার ভিতরে:{" "}
                <span className="line-through text-gray-600">৳ ৮0.00</span>{" "}
                <span className="font-semibold px-2">৳ 00.00</span>
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="delivery"
                  value="outside"
                  checked={formData.delivery === "outside"}
                  onChange={handleChange}
                />{" "}
                ঢাকার বাহিরে:{" "}
                <span className="line-through text-gray-600">৳ ১৪0.00</span>
                <span className="font-semibold px-2">৳ 00.00</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={productImage}
              alt={productName}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="spayce-y-2 md:space-y-4">
              <h3 className="text-lg font-semibold capitalize">
                {productName}
              </h3>
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
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold my-5">
                Total: {totalAmount} TK
              </p>
            </div>
            <div className="text-lg font-semibold my-5">
              {activeProduct?.quantity > 0 ? (
                <span className="bg-green-500 text-white rounded px-2 py-1">
                  In stock
                </span>
              ) : (
                <span className="bg-red-500 text-white rounded px-2 py-1">
                  Out of stock
                </span>
              )}
            </div>
          </div>
          <div className="mb-5 p-2 md:p-4 bg-primary/10 rounded">
            {/* <h2>ক্যাশ অন ডেলিভারি</h2> */}
            <h2 className="text-xl font-bold text-primary">বিশেষ বিজ্ঞপ্তি</h2>

            <div className="my-2 md:my-4 bg-primary/20 p-2 md:p-5 rounded-md">
              {/* <p>পণ্য হাতে পেয়ে ডেলিভারি ম্যানকে পেমেন্ট করতে পারবেন।</p> */}
              <p>
                যেহেতু ডেলিভারি চার্জ ফ্রি তাই ডেলিভারি ম্যানকে শুধুমাত্র
                প্রোডাক্টের টাকা ছাড়া কোনো প্রকার এক্সট্রা টাকা দিবেন না।
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="w-full btn text-white py-2"
            disabled={loading}
          >
            {loading ? "Processing..." : "Place Order Now"}
          </button>
        </div>
      </form>
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-bold mt-8 md:mt-14 text-center text-primary">
          সরাসরি অর্ডার করতে অথবা ফ্রি কনসাল্টেশন পেতে কল করুনঃ 01608-081907
        </h2>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm z-[99999] p-2">
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2 lg:w-1/3 h-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
              অভিনন্দন!
            </h2>
            <p className="text-md md:text-lg mb-5">
              আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে। 🎉
            </p>
            <div className="p-4 border rounded-lg shadow-sm text-left space-y-2">
              <p className="text-sm md:text-lg">
                <strong>প্রোডাক্ট:</strong> {productName}
              </p>
              <p className="text-sm md:text-lg">
                <strong>নাম:</strong> {formData.name}
              </p>
              <p className="text-sm md:text-lg">
                <strong>ঠিকানা:</strong> {formData.address}
              </p>
              <p className="text-sm md:text-lg">
                <strong>মোবাইল:</strong> {formData.mobile}
              </p>
              <p className="text-lg md:text-lg font-semibold mt-4">
                <strong>মোট পরিমাণ:</strong> {quantity} pcs
              </p>
              <p className="text-lg md:text-lg font-semibold mt-4">
                মোট মূল্য: {totalAmount} টাকা
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm md:text-lg italic">
                নোট: অবশ্যই এই অর্ডার আইডিটি{" "}
                <span className="font-bold text-green-500 px-1">{orderId}</span>{" "}
                সংরক্ষণ করে রাখবেন।
              </p>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md"
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
