import React from "react";
import "./Products.css";
// import Product from './Product';
import { Link } from "react-router-dom";
// import { useState } from 'react';

function Products(props) {
  const { products, addToCartCallprop } = props;
  // const [productId, setProductId] = useState(null)
  // const [cartItemId, setCartItemId] = useState(null)
  // const addToCartCall = (id) => {
  //     setCartItemId(id)
  //     console.log(cartItemId)
  //     addToCartCallprop(cartItemId)
  // }
  return (
    <div>
      {/* <h1 className="page-title">Products</h1> */}
      <div className="container justify-content-center align-items-center">
        <div class="row">
          {products.map((product) => (
            <div className="col-6 col-md-4 col-lg-3 my-3 g-3">
              <div
                key={product.id}
                className="card border-light shadow w-100 mb-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-top-img w-100"
                  id="productsImg"
                />
                <div className="card-body">
                  <div className="card-title" id="productTitle">
                    {product.name}
                  </div>

                  <div className="card-text" id="productText">
                    {product.subtitle}
                  </div>

                  <div className="priceText mt-3">
                    <div className="card-text" id="priceOffer">
                      ₹{product.offerprice}
                    </div>

                    <div className="card-text mx-2" id="priceOriginal">
                      ₹{product.originalprice}
                    </div>

                    <div className="" id="discount">
                      {product.discount}% OFF
                    </div>
                  </div>

                  <div className="buttonLinks mt-4 mb-3 text-center justify-content-between">
                    <Link
                      // onClick={() => addToFavCallprop(product.id)}
                      to="/"
                      className="favHover"
                      id="favHover"
                    >
                      <i class="fa fa-heart"></i>
                    </Link>

                    <Link
                      to={`/products/${product.id}`}
                      className="mx-3 mb-2 button rounded-pill"
                      id="button"
                    >
                      Buy Now
                    </Link>

                    <Link
                      onClick={() => addToCartCallprop(product.id)}
                      className="iconHover"
                      id="iconHover"
                    >
                      <i className="fa fa-shopping-cart"></i>
                    </Link>

                    {/* <button onClick={setProductId(id)}>
                            {product.buyButton.text}
                        </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
