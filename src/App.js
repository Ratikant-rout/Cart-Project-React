import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import React, { useState } from "react";
import Footer from "./Footer";
import AddItem from "./components/AddItem";

function App() {
  // Initial product list state
  const products = [
    {
      price: 59999,
      name: "Laptop",
      Quantity: 0,
    },
    {
      price: 49999,
      name: "Redmi Note Nine",
      Quantity: 0,
    },
    {
      price: 59999,
      name: "Iphone 12",
      Quantity: 0,
    },
  ];

  // State variables to manage product list and total amount
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  // Function to increment product quantity
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].Quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  // Function to decrement product quantity
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    if (newProductList[index].Quantity > 0) {
      newProductList[index].Quantity--;
      let newTotalAmount = totalAmount - newProductList[index].price;
      setProductList(newProductList);
      setTotalAmount(newTotalAmount);
    }
  };

  // Function to reset product data
  const resetdata = () => {
    let newProductList = productList.map((product) => ({
      ...product,
      Quantity: 0,
    }));
    setProductList(newProductList);
    setTotalAmount(0);
  };

  // Function to remove a product
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount =
      totalAmount -
      newProductList[index].Quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  // Function to add a new product
  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      Quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem} // Changed from removeicon to removeItem
        />
      </main>
      <Footer totalAmount={totalAmount} resetdata={resetdata} />
    </>
  );
}

export default App;
