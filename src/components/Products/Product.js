import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsData } from "./ProductData";
import "./Product.css";

const Product = () => {
  const { productId } = useParams();
  // const { productName, productImage, productPrice } = props;
  // const {fetchedDetails} = props
  const [productDetails, setProductDetails] = useState([]);

  // const getProductDetailsById = (productId) => {
  //   const clickProduct = productsData.find((item) => item.id === parseInt(productId));
  //   return clickProduct ? { name: clickProduct.name, price: clickProduct.price } : null;
  // };
  // console.log(getProductDetailsById)
  // console.log(productName, productPrice)
  useEffect(() => {
    const clickProduct = productsData.find(
      (item) => item.id === parseInt(productId)
    );
    console.log("Component mounted or updated with productId:", productId);
    setProductDetails(clickProduct);
  }, [productId]);
  // console.log(productDetails)

  return (
    // <div>
    //     <h2>{fetchedDetails.name}</h2>
    //     <p>Price {fetchedDetails.price}</p>
    // </div>
    // <div>
    //     <h2>{productDetails.name}</h2>
    //     <img src={productDetails.image} alt={productDetails.name} />
    //     <p>Product {productId}</p>
    //     <p>Price {productDetails.price} </p>
    // </div>
    <div className="container mt-5 mb-3 productbg row">
      <div className="col-12 col-lg-6">
        <div className="row">
          <div className="col-12 col-lg-2 my-2 order-2 order-lg-1">
            <div className="productSideContainer d-flex justify-content-start justify-content-lg-center">
              <div className="saveToFav text-center mt-3">
                <a
                  // onClick={() => addToFavCallprop(product.id)}
                  href="/"
                  className=""
                  id="favHover2"
                >
                  <i className="fa-regular fa-bookmark"></i>
                </a>
                <div className="mt-2 mb-lg-3" id="favText">
                  Add to
                  <br />
                  Favourites
                </div>
              </div>

              <div className="productImgs">this is imgs selection div</div>
            </div>
          </div>
          <div className="col-12 col-lg-10 order-1 order-lg-2">
            <div className="productImgContainer me-lg-2">
              <div className="productImg border-light">
                <img
                  id="mainImage"
                  src={productDetails.image}
                  className="img-fluid w-100 rounded"
                  alt={productDetails.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="productRightContainer mx-lg-2 text-left align-items-center">
          <div className="productCardContent">
            <div className="productCardTextContent" id="border">
              <div className="productCardTitle mt-2">{productDetails.name}</div>
              <div className="productCardText mt-2 mb-2 mb-lg-3">
                {productDetails.subtitle}
              </div>
            </div>

            <div className="productCardPriceDetails my-3" id="border">
              <div className="productCardDiscount mt-1">
                {productDetails.discount}% OFF
              </div>
              <div className="productCardPricings mt-1">
                <div className="productCardOriginalPrice">
                  ₹{productDetails.originalprice}
                </div>
                <div className="productCardOfferPrice mx-2">
                  ₹{productDetails.offerprice}
                </div>
              </div>

              <div className="productCardPriceText mb-3">
                Inclusive of all taxes <br />
                <b>EMI</b> starts at
                <span id="emiPerMonth" className="mx-1">
                  ₹{productDetails.emipermonth}
                </span>
                per month.
                <Link to="/" id="aLink" className="ms-1">
                  EMI Options
                </Link>
                <br />
                <Link to="/" id="aLink" className="me-1">
                  Use Digital Payment
                </Link>
                and
                <b className="mx-1">
                  save up to
                  <span id="saveUpTo" className="ms-1">
                    {productDetails.saveupto}%
                  </span>
                </b>
                today.
              </div>
            </div>
            <div className="availableOffers mt-1">
              <div id="availableOffersTitle">Available Offers</div>
              <ul className="availableOffersList mt-2 mb-lg-4">
                <li>
                  {productDetails.availableoffer?.offer1}
                  <Link to="/" id="aLink" className="ms-2">
                    T&C
                  </Link>
                </li>
                <li>
                  {productDetails.availableoffer?.offer2}
                  <Link to="/" id="aLink" className="ms-2">
                    T&C
                  </Link>
                </li>
                <li>
                  {productDetails.availableoffer?.offer3}
                  <Link to="/" id="aLink" className="ms-2">
                    T&C
                  </Link>
                </li>
                <li>
                  {productDetails.availableoffer?.offer4}
                  <Link to="/" id="aLink" className="ms-2">
                    T&C
                  </Link>
                </li>
              </ul>
            </div>
            <div className="productServices mt-3 mb-4">
              <div
                className="productServicesIcons text-center mx-3"
                id="productServicesIconsHover"
              >
                <div className="productServicesIcon">
                  <i className="fa-regular fa-calendar-check"></i>
                </div>
                <div className="productServicesIconText">
                  7 Days
                  <br />
                  Replacement
                </div>
              </div>
              <div
                className="productServicesIcons text-center mx-3"
                id="productServicesIconsHover"
              >
                <div className="productServicesIcon">
                  <i className="fa-solid fa-truck"></i>
                </div>
                <div className="productServicesIconText">
                  Free
                  <br />
                  Delivery
                </div>
              </div>
              <div
                className="productServicesIcons text-center mx-3"
                id="productServicesIconsHover"
              >
                <div className="productServicesIcon">
                  <i className="fa-solid fa-shield"></i>
                </div>
                <div className="productServicesIconText">
                  1 Year
                  <br />
                  Warranty
                </div>
              </div>
              <div
                className="productServicesIcons text-center mx-3"
                id="productServicesIconsHover"
              >
                <div className="productServicesIcon">
                  <i className="fa-regular fa-money-bill-1"></i>
                </div>
                <div className="productServicesIconText">
                  Pay on
                  <br />
                  Delivery
                </div>
              </div>
            </div>
            <div className="productLinks text-center mt-5">
              <Link
                to="/"
                className="mx-3 mt-2 w-75 rounded-pill"
                id="button3"
                style={{
                  padding: "1rem 1.5rem;",
                  fontSize: "1rem;",
                }}
              >
                Buy Now
              </Link>

              <Link
                to="/"
                // onClick={() => addToCartCallprop()}
                className="mx-3 my-2 w-75 rounded-pill"
                id="button2"
                style={{
                  padding: "1rem 1.5rem;",
                  fontSize: "1rem;",
                }}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
