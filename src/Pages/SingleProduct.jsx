import { useNavigate, useParams } from "react-router";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";

import VegIcon from "../assets/Veg.png";
import CardDefault from "../Components/GlobalComponents/CardDefault";
import SingleReview from "../Components/SingleProduct/SingleReview";
import UsesSection from "../Components/SingleProduct/userSection";
import axios from "axios";
import { useDispatch } from "react-redux";
import ShoppingCartDialog from "../Components/GlobalComponents/ShoppingCartDialog";
import { addItem, clearCart } from "../service/CartSlice";
import coshondel from "../assets/cash-on-delivery.png";
import shippinngLogo from "../assets/delivery.png";
import { apiString } from "../service/apicalls";
import { usersocialMediaLinks } from "../constants/index";
import UserTestimonials from "../Components/SingleProduct/ClientTestimonials";
import startupindia from "../assets/startupindia.png";
import makeinindia from "../assets/makeinindia.png";
import hand from "../assets/hand.png";
import handmade from "../assets/handmade.png";
import ProductShare from "../Components/SingleProduct/ProductShare";
import noPreservative from "../assets/Nopreservative.png";
import noArtifical from "../assets/Noartificialflavour.png";
import chemicalFree from "../assets/Chemicalfree.png";
import natural from "../assets/100NAtural.png";
import emailjs from "@emailjs/browser";
import { Select, Option, IconButton } from "@material-tailwind/react";
export default function SingleProduct() {
  const [shopData, setShopData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(1);
  const [size, setSize] = useState(null);
  const [weight, setWeight] = useState(null);
  const [price, setPrice] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const handleOpen = (value) => setSize(value);
  const params = useParams();
  const [productQuantity, setProductQuantity] = useState(1);
  const navigate = useNavigate();
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_59m479e", "template_jj0be1m", form.current, {
        publicKey: "kdpklC7lX0o-ipC4I",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Review sent");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    setFormData({
      user_name: "",
      user_email: "",
      user_message: "",
    });
  };

  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  const [activeAccordion, setActiveAccordion] = useState(null); // State variable for active accordion

  const toggleAccordion = (value) => {
    // Renamed function
    setActiveAccordion(activeAccordion === value ? null : value); // Updated to use new state variable
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiString}/shop/${params.id}`);

        setShopData(response.data);
        setWeight(response.data?.sizes[0].size);
        setPrice(response.data?.sizes[0].price);
        setDiscountPrice(response.data?.sizes[0].discountPrice);
        setActiveIndex(response.data.imageUrl[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);
  const dispatch = useDispatch();

  const handleAddToCart = (
    productId,
    quantity,
    name,
    discountprice,
    imageUrl,
    weight
  ) => {
    // const { productId, quantity, name, price, imageUrl } = product;
    console.log("weight selected", weight);
    dispatch(
      addItem({
        productId,
        quantity,
        name,
        discountprice,
        imageUrl,
        size: weight,
      })
    );
    handleOpen("xl");
  };

  const increment = () => {
    setProductQuantity(productQuantity + 1);
  };

  const decrement = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const buyNow = (
    productId,
    quantity,
    name,
    discountprice,
    imageUrl,
    weight
  ) => {
    console.log(weight, " of product");
    dispatch(clearCart());
    dispatch(
      addItem({
        productId,
        quantity,
        name,
        discountprice,
        imageUrl,
        size: weight,
      })
    );
    navigate("/checkout");
  };

  const handleWeightChange = (value) => {
    const selectedSize = shopData?.sizes.find((item) => item.size === value);
    if (selectedSize) {
      setWeight(selectedSize.size);
      setPrice(selectedSize.price);
      setDiscountPrice(selectedSize.discountPrice);
    }
  };

  const memoizedShopData = useMemo(() => shopData, [shopData]);

  console.log("shio", shopData?.sizes);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Spinner className="h-10 w-10" />;
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        There was an error {error.message}
      </div>
    );
  }

  const pageUrl = (window.location.href);
  const pageTitle = (document.title);

  const handleShare = (platform) => {
    ProductShare(pageUrl, pageTitle, platform);
  };

  // const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const videoEmbedUrl = shopData.video1.replace("watch?v=", "embed/");

  return (
    <div className="bg-white">
      <div className="w-full lg:flex my-4">
        <div className="sm:w-full md:w-full lg:w-1/2 mx-auto">
          <div className="w-full grid gap-4 mx-auto px-4 md:px-8 lg:pl-24">
            <div className="sm:mt-0 md:mt-8">
              <Carousel
                className="h-auto w-full max-w-full rounded-lg object-cover
              object-center md:h-[480px]"
              >
                {shopData.imageUrl.map((src, index) => (
                  <img
                    key={index} // Each image needs a unique key
                    src={src}
                    alt={`image ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                ))}
              </Carousel>
            </div>
            <div className="hidden md:grid grid-cols-5 gap-4">
              {shopData.imageUrl.map((imgsource, index) => (
                <div key={index}>
                  <img
                    src={imgsource}
                    className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                    alt="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:w-full px-6 md:w-full lg:w-1/2 py-8 sm:mx-auto lg:mx-auto lg:px-20">
          <div className="flex items-center mb-2">
            <p className="text-gray-600">Indie Stori</p>
          </div>

          <h1 className="text-2xl font-sans font-semibold">{shopData.name}</h1>
          <p className="font-serif font-bold mt-4 text-xl">
            {shopData.description}
          </p>
          <p className="text-yellow-800 text-2xl py-2 lg:py-4">
            ★ ★ ★ ★ ★{" "}
            <span className="text-black opacity-60 text-lg lg:mx-4">
              (4.9/5 stars)
            </span>
            <br />
            <a
              href={shopData.sku}
              target="__blank"
              className="text-blue-400 cursor-pointer text-base my-4"
            >
              Read reviews on Amazon
            </a>
          </p>
          <div className="flex justify-between my-2 sm:w-full lg:my-4 space-x-1">
            <div className="flex flex-col justify-center items-center p-1 w-1/4 h-full">
              <img
                className="lg:w-16 lg:h-16 sm:h-24 sm:w-24 max-h-20 max-w-20 h-full w-full"
                src={noPreservative}
              />
              <p className="text-xs py-2 sm:text-lg text-center">
                No Preservatives
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-1 w-1/4 h-full">
              <img
                className="lg:w-16 lg:h-16 sm:h-24 sm:w-24 max-h-20 max-w-20 h-full w-full"
                src={noArtifical}
              />
              <p className="text-xs py-2 sm:text-lg text-center">
                No Artificial Color
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-1 w-1/4 h-full">
              <img
                className="lg:w-16 lg:h-16 sm:h-24 sm:w-24 max-h-20 max-w-20 h-full w-full"
                src={chemicalFree}
              />
              <p className="text-xs py-2 sm:text-lg text-center">
                Chemical Free
              </p>
            </div>
            <div className="flex flex-col justify-between items-center p-1 w-1/4 h-full">
              <img
                className="lg:w-16 lg:h-16 sm:h-24 sm:w-24 max-h-20 max-w-20 h-full w-full"
                src={natural}
              />
              <p className="text-xs py-2 sm:text-lg text-center">
                100% Natural
              </p>
            </div>
          </div>

          {/* <h2 className="text-pink-400 text-lg">
            {shopData.sku ? (
              <span className="text-black">SKU: {shopData.sku}</span>
            ) : null}
          </h2> */}
          <h2 className="text-pink-400 text-l py-2">
            Category: <span className="text-black">{shopData.category}</span>
          </h2>

          {/* <div className="flex mb-4">
            <p className="text-xl font-medium line-through opacity-60">
              {" "}
              Rs. {price}{" "}
            </p>
            <h1 className="text-3xl  font-semibold mb-2 text-right w-4/5">
              Rs. <span className="text-pink-400">{discountPrice}</span>
            </h1>
          </div> */}
          <div className="flex w-full justify-between items-center mb-4">
            <p className="text-xl font-medium line-through opacity-60">
              Rs. {price}
            </p>
            <h1 className="text-3xl font-semibold text-right">
              Rs. <span className="text-pink-400">{discountPrice}</span>
            </h1>
          </div>

          {isValidUrl(shopData.video2) && (
            <div className="bg-black px-4 py-2 w-max rounded-lg uppercase my-2 text-xs sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base">
              <a
                className="text-white animate-pulseOpacity"
                href={shopData.video2}
                target="_blank" // Corrected target attribute (use "_blank" instead of "__blank")
                rel="noopener noreferrer" // Added for security reasons
              >
                Watch home test for purity
              </a>
            </div>
          )}

          <div className="flex flex-col gap-4 my-4 text-xl">
            {/* <div className="flex gap-2">
              <p>Weight:</p>
              <div className="max-w-[250px]">
                <Select
                  label="Select weight"
                  value={weight}
                  onChange={(e) => handleWeightChange(e)}
                >
                  {shopData?.sizes.map((item, index) => (
                    <Option key={index} value={item.size}>
                      {item.size}
                    </Option>
                  ))}
                </Select>
              </div>
            </div> */}
            <div className="">
              <p>Quantity:</p>
              <div className="flex w-max gap-4 my-4">
                <IconButton onClick={decrement} ripple={true}>
                  <i className="fas fa-minus" />
                </IconButton>
                <p className="py-1">{productQuantity}</p>
                <IconButton onClick={increment} ripple={false}>
                  <i className="fas fa-plus" />
                </IconButton>
              </div>
            </div>
          </div>

          <div className="lg:flex pb-4 font-semibold items-center">
            <div className="flex items-center">
              <img className="h-8 w-8 mr-2" src={shippinngLogo} />
              <p className="my-2">Free shipping on any 2 or more items</p>
              <div className="h-12 w-[3px] bg-black mx-4 hidden lg:block"></div>
            </div>
            <div className="flex items-center">
              <img className="h-8 w-8 mr-2" src={coshondel} />
              <p className="sm:my-4">Cash on delivery available</p>
            </div>
          </div>
          <div className="flex mb-4">
            <button
              onClick={() =>
                buyNow(
                  shopData.id,
                  productQuantity,
                  shopData.name,
                  discountPrice,
                  shopData.imageUrl[0],
                  weight
                )
              }
              className="mx-2 py-2 font-semibold px-6 hover:bg-white border-4 rounded-lg hover:border-blue-400 hover:text-blue-400 shadow-none bg-blue-400 border-blue-400 text-white hover:shadow-lg"
            >
              Buy Now
            </button>
            <button
              onClick={() =>
                handleAddToCart(
                  shopData.id,
                  productQuantity,
                  shopData.name,
                  discountPrice,
                  shopData.imageUrl[0],
                  weight
                )
              }
              className="mx-2 py-2 font-semibold px-6 hover:bg-white border-4 rounded-lg hover:border-pink-400 hover:text-pink-400 shadow-none bg-pink-400 border-pink-400 text-white hover:shadow-lg"
            >
              Add to cart
            </button>
          </div>
          <a href="/returnpolicy" className="my-4 text-blue-700">
            Return Policy
          </a>

          <div className="flex items-center pt-4">
            <img className="w-8 h-8" src={VegIcon} />
            <p className="px-4">100% Veg</p>
          </div>
          <div className="socialLogo flex justify-start pl-1 pt-4 items-center">
            <p className="pr-2">Share on :</p>
            {usersocialMediaLinks.map((social, index) => (
              <button
                key={index}
                onClick={() => handleShare(social.platform)}
                //onClick={handleShare}
                className={`flex items-center justify-center md:justify-start size-8 text-md md:text-xl rounded-sm transform transition-transform duration-300 ease-in-out hover:scale-125 text-${social.color}`}
              >
                <i className={social.iconClass}></i>
              </button>
            ))}
          </div>
        </div>
      </div>
      <UsesSection
        originDescription={shopData.origin}
        benefitsDescription={shopData.benefits}
        UsesDescription={shopData.uses}
        IngredientsDescription={shopData.ingredients}
        safetyDescription={shopData.safetyInformation}
        originimage={shopData.bannerUrl}
      />
      <div className=" grid grid-cols-4 py-6 mx-auto md:gap-2">
        <div className="flex flex-col gap-2 items-center ">
          <img
            className="lg:w-48 lg:w-54 w-20 object-cover lg:px-8 px-2"
            src={startupindia}
          />
          <p className="w-3/4 text-center text-xs md:text-lg">Start Up India</p>
        </div>
        <div className="flex flex-col pb-6 lg:pt-6 gap-2 items-center">
          <img
            className="lg:w-48 lg:w-54 w-20  object-cover lg:px-8 "
            src={makeinindia}
          />
          <p className="w-3/4 text-center text-xs md:text-lg">Make In India</p>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <img
            className="lg:w-48 lg:w-54 w-20  object-cover lg:px-8 px-2"
            src={handmade}
          />
          <p className="w-3/4 text-center text-xs md:text-lg">Hand-Made</p>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <img
            className="lg:w-48 lg:w-54 w-20 object-cover lg:px-8 px-2"
            src={hand}
          />
          <p className="w-3/4 text-center text-xs object-cover md:text-lg">
            Made in small batches
          </p>
        </div>
      </div>
      <section className="text-gray-600 body-font w-full">
        <div className="mx-auto flex py-6 items-center justify-center w-full flex-col">
          <iframe
            className="w-full h-56 sm:h-96 md:h-screen"
            src={`${videoEmbedUrl}?autoplay=1`}
            // src={`${videoEmbedUrl}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <UserTestimonials />

      <div className=" p-6 md:px-8 lg:px-12 ">
        <h3>Add a Review</h3>
        <form ref={form} className="space-y-4 mt-4">
          <div className="flex items-center space-x-4">
            <label className="font-bold">Rate this product?</label>
            {/* {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fa-solid fa-star cursor-default ${
                  // Remove newReview.rating reference
                  "text-gray-400"
                }`}
              ></i>
            ))} */}
          </div>
          <textarea
            name="user_message"
            placeholder="Write a message"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.user_message}
            onChange={handleChange}
            rows="4"
          ></textarea>
          <div className="flex space-x-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="w-1/2 p-2 border border-gray-300 rounded"
              value={formData.user_name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              className="w-1/2 p-2 border border-gray-300 rounded"
              value={formData.user_email}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="font-bold bg-pink-300 text-white px-4 py-2 rounded-sm "
          >
            SUBMIT REVIEW
          </button>
        </form>
      </div>
      {/* Best Seller */}
      <div className="text-center py-2 md:pt-8 ">
        <p className="text-lg font-semibold md:text-2xl md:py-2 uppercase">
          You may also like
        </p>
      </div>
      {/* <Card/> */}
      <div className="py-4">
        <CardDefault />
      </div>
      <div className="mx-auto w-4/5 pb-12">
        <Accordion open={activeAccordion === 1}>
          <AccordionHeader onClick={() => toggleAccordion(1)}>
            {" "}
            {/* Updated function name */}
            1. What are Indigenous products?
          </AccordionHeader>
          <AccordionBody>
            Indigenous products are the products that are directly sourced from
            the native communities. They are produced in very small batches and
            made specifically by keeping health in mind. They are grown
            separately and away from farms and hence are not "farm grown."
          </AccordionBody>
        </Accordion>
        <Accordion open={activeAccordion === 2}>
          <AccordionHeader onClick={() => toggleAccordion(2)}>
            {" "}
            {/* Updated function name */}
            2. Are indigenous products better than organic products?
          </AccordionHeader>
          <AccordionBody>
            Yes, indigenous products are better than organic products. Organic
            products can be produced anywhere hence they are not far away from
            pollution. The nutritional elements of indigenous products is also
            greater than organic products. For eg, our premium Himalayan
            turmeric has 8 times more curcumin than any other organic turmeric
            and can only be compared to Lakadong turmeric.
          </AccordionBody>
        </Accordion>
        <Accordion open={activeAccordion === 3}>
          <AccordionHeader onClick={() => toggleAccordion(3)}>
            {" "}
            {/* Updated function name */}
            3. Is farm honey better than forest honey?
          </AccordionHeader>
          <AccordionBody>
            No, farm honey is never better than raw forest honey. Forest honey
            is procured by the help of native communities present near the
            forest with special access only. Our Jim Corbett National Park honey
            is pollution free, is all natural and does not involve forced
            breeding for greater amount hence it is limited.
          </AccordionBody>
        </Accordion>
        <Accordion open={activeAccordion === 4}>
          <AccordionHeader onClick={() => toggleAccordion(4)}>
            {" "}
            {/* Updated function name */}
            4. What is the difference between flavoured pahadi salt and table
            salt?
          </AccordionHeader>
          <AccordionBody>
            Flavoured pahadi salt has 84 traces of minerals and is made using
            rock salt. It is hand ground by the women of Uttarakhand and
            processed by them for 2 months before it is available for you.
            Unlike table salt, it is unprocessed, has multiple uses and has
            great utility.
          </AccordionBody>
        </Accordion>
        <Accordion open={activeAccordion === 5}>
          <AccordionHeader onClick={() => toggleAccordion(5)}>
            {" "}
            {/* Updated function name */}
            5. When can I expect my order to be delivered to me after I have
            placed my order?
          </AccordionHeader>
          <AccordionBody>
            You can expect your premium indigenous products to be delivered to
            you within 7-10 business days. For more information you can also get
            in touch with us on <br />
            Whatsapp- +91-9289605017
          </AccordionBody>
        </Accordion>
      </div>
      <ShoppingCartDialog size={size} handleOpen={handleOpen} />
    </div>
  );
}
