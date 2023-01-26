import React, { useState } from "react";
import Footer from "../elems/Footer";
import Header from "../elems/Header";
import PaymentModal from "../elems/PaymentModal";
import products from "../elems/products";

export default function Shop() {
  const [coins, setCoins] = useState(false);
  const [price, setPrice] = useState(false);

  function toggle() {
    setCoins(false);
    setPrice(false);
  }

  function ProductList() {
    return (
      <section className="py-4">
        <ul className="flex flex-col lg:flex-row md:flex-row w-full justify-center items-center content-center gap-8">
          {products.map((product) => (
            <li
              className="bg-[url('/src/image/product-bg.png')] w-[190px] h-[190px] bg-cover transition-all ease-out duration-500 hover:scale-110 hover:drop-shadow-2xl"
              key={product.name}
            >
              <button
                onClick={(e) => {
                  setCoins(product.coins);
                  setPrice(product.price);
                }}
                className="flex flex-col items-center content-center justify-end w-full h-full"
              >
                <img className="h-24" src={product.image} />
                <span className="pb-3 text-lg">{product.name}</span>
                <span className="pb-3 text-xl font-bold">
                  {product.price} SEK
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <Header />
      <ProductList />
      <PaymentModal coins={coins} price={price} toggle={toggle} />
      <Footer />
    </>
  );
}
