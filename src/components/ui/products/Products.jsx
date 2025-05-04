import React from "react";
import Container from "../../shared/Container";

const Products = () => {
  const products = [
    "/assets/images/products/1.jpeg",
    "/assets/images/products/2.jpeg",
    "/assets/images/products/3.jpeg",
  ];
  return (
    <Container className="w-full mt-5 md:mt-10 py-5 md:py-10">
      <h1 className="text-xl md:text-2xl font-bold text-primary text-center">
        পণ্য সামগ্রী
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:mt-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full h-[55vh] border border-primary rounded-md p-2 md:p-5"
          >
            <img
              src={product}
              alt=""
              className="w-full h-full object-cover  rounded-md"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
