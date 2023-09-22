import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70";
const img2 =
  "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70";

  const img3 =
  "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70";
const img4 =
  "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/8/z/w/iphone-13-mlph3hn-a-apple-original-imag6vzzhrxgazsg.jpeg?q=70";
  

const Home = () => {
  const productList = [
    {
      name: "APPLE iPhone 12 (Blue, 64 GB)",
      price: 52499,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "APPLE iPhone 13 (Midnight, 128 GB)",
      price: 52499,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfd",
    },
    {
      name: "APPLE iPhone 14 Pro (Deep Purple, 128 GB)",
      price: 119900,
      imgSrc: img3,
      id: "asdhajsdbhjabhsjdfv",
    },
    {
      name: "APPLE iPhone 13 (Midnight, 128 GB)",
      price: 52499,
      imgSrc: img4,
      id: "sdjfdlaajsdbabhsjdfdfv",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>₹{price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;