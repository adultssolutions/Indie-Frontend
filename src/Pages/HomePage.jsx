import { Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Testimonials from "../Components/GlobalComponents/Testimonials";
import CircleHover from "../Components/GlobalComponents/CircleHover";
import CountUp from "../Components/GlobalComponents/CountUp";
import ProductSection from "../Components/GlobalComponents/ProductSection";
import CarouselDefault from "../Components/GlobalComponents/CarouselDefault";
import {
  testimonials,
  metricsData,
  cardsData,
  products,
  categories,
} from "../constants";
import amazonlogo from "../assets/amazon.png";
import HomeAboutUs from "../assets/us.png";
import HomeAboutUs2 from "../assets/us2.png";
import Shop from "./Shop";
import { Carousel } from "@material-tailwind/react";
import { partnerhome } from "../constants";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center">
          <CarouselDefault />
      </div>

      {/* ABOUT US  */}

      <div className="flex flex-col md:flex-row items-center flex-wrap md:p-2 lg:space-x-0 my-8">
        <div className="p-2 w-full lg:w-1/2 lg:p-0 animate-slideInLeft">
          <img
            className="w-full rounded-xl object-cover h-full mx-auto md:max-w-sm lg:max-w-lg"
            src={HomeAboutUs2}
            alt="About us"
          />
        </div>

        <div className="p-4 lg:p-10 mx-auto text-justify lg:w-1/2 py-4 animate-slideInRight">
          {/* <h3 className="font-semibold text-xl py-2 md:text-3xl md:py-3">
            About us
          </h3> */}
          <p className="text-lg py-1 font-semibold md:text-2xl md:py-2">
            We are Indie Stori. A seed in the forest on our way to becoming a
            tree.
          </p>
          <p className="text-customBrown py-2 text-md md:text-lg">
            Imagine a situation where you nurture a mango tree for years but
            when it starts bearing fruits someone else plucks it all away
            leaving nothing for you or your family. Instead, you are handed over
            the leftovers. How would that make you feel? This was our experience
            and here began the journey of Indie Stori.
          </p>

          <div className="text-base py-2 space-y-4 md:space-x-6 lg:space-y-0 flex flex-col md:flex-row md:text-lg lg:py-4">
            <div></div>
            {/* <div>
              <h2 className="font-semibold">Why Organic?</h2>
              <p>We're making room for self care today with plan.</p>
            </div> */}
          </div>

          <Link to="/ourstori">
            <Button
              size="lg"
              className="bg-blue-600 text-white py-4 px-8 rounded hover:bg-blue-700"
            >
              Our Stori
            </Button>
          </Link>
        </div>
      </div>

      {/* CountUp 5000+ Customers */}

      <div className="p-4 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 border-y-4 bg-green-100 bg-opacity-50 border-green-500">
        {metricsData.map((metric) => (
          <div
            key={metric.id}
            className="flex flex-col p-2 items-center sm:space-y-2 justify-start relative lg:py-2"
          >
            <img
              src={metric.imageSrc}
              className="h-28 w-28 rounded-xl sm:h-24 sm:w-24 md:h-36 md:w-36"
              alt="Metric Icon"
            />
            <div className="text-center  w-full">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold my-4">
                <CountUp
                  end={metric.endValue}
                  start={metric.startValue}
                  timer={metric.timer}
                />
              </div>
              <p className="font-sans text-base sm:text-lg md:text-2xl font-semibold my-4">
                {metric.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="my-4 md:my-8">
        <div className="text-center py-4">
          {/* <h3 className="font-semibold text-xl py-2 md:text-3xl md:py-3">
            Products
          </h3> */}
          <h1 className="text-3xl py-2 md:text-4xl font-bold md:py-3 lg:text-4xl">
            Go Native | Go Indie
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-2 sm:p-6 justify-center sm:mt-4">
          {cardsData.map((card, index) => (
            <ProductSection
              key={index}
              bgColor={card.bgColor}
              textColor={card.textColor}
              buttonColor={card.buttonColor}
              title={card.title}
              description={card.description}
              backgroundImage={card.backgroundImage}
              redLink={card.Redlink}
            />
          ))}
        </div>
      </div>

      <div className="flex w-max mx-auto sm:my-8 pb-8 -mt-10">
        <h3 className="text-2xl mt-16 lg:mt-2">Also available on</h3>
        <img className="h-8 w-20 mx-4 mt-16 lg:mt-2" src={amazonlogo} />
      </div>

      <section className="text-gray-600 body-font w-full">
        <div className="mx-auto flex py-6 items-center justify-center w-full flex-col">
          <iframe
            className="w-full h-56 sm:h-96 md:h-screen"
            src="https://www.youtube.com/embed/geyYhCGAEC4?si=Kf5N1L84B76UAg4X"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* corporate clients */}

      <div className="m-2 -mt-4">
        <h2 className="text-3xl text-pink-400 md:text-4xl font-semibold text-center my-6">
          -Corporate Clients-
        </h2>
        <Carousel
          loop={true}
          autoplay={true}
          transition={{ duration: 2 }}
          className=" rounded-xl py-4"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {partnerhome.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center h-full justify-center px-16"
            >
              <img
                src={partner.href}
                alt={partner.name}
                className="rounded-xl h-full w-full max-h-96 object-contain object-center"
              />
              <p className="text-center py-4 text-xl md:text-3xl">
                {partner.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Testimonials */}

      <div className="my-4  space-y-4 sm:p-6 sm:space-y-8 xl:my-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center my-8 lg:my-12">
          -People Love Us-
        </h2>
        <Testimonials
          autoSlide={true}
          autoSlideInterval={9000}
          testimonials={testimonials}
        />
      </div>

      {/* Shop By Category  */}

      <div className="p-4 bg-pink-100 bg-opacity-50 border-y-4 border-pink-500 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-8">
          Shop By Category
        </h2>
        <div className="flex flex-wrap justify-center gap-4 p-6 lg:justify-around">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex justify-center w-full sm:w-auto sm:text-lg"
            >
              <a href={`/shop/${category.productID}`}>
                <CircleHover category={category} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Best Seller */}
      {/* <div className="text-center pt-8 ">
        <h1 className=" text-3xl py-2 md:text-4xl font-bold md:py-3 lg:text-4xl ">
          Our Best Sellers
        </h1>
      </div> */}

      {/* <Card/> */}
      <div className="py-6">
        <h2 className="text-xl text-center py-6 text-pink-400">
          ~ Products People Love ~
        </h2>
        <Shop />
      </div>

      {/* Why Choose us?  */}

      <div className=" flex flex-col md:flex-row items-center flex-wrap md:p-2 lg:space-x-0 my-8">
        <div className="p-2 w-full lg:w-1/2 lg:p-0 ">
          <img
            className="w-full rounded-xl
            object-fit 
         h-96 mx-auto lg:w-full md:max-w-sm lg:p-0 lg:max-w-lg object-fit "
            //src={"https://picsum.photos/1280/720"}
            src={HomeAboutUs}
            alt="About us"
          />
        </div>

        <div className="p-4 lg:p-10 mx-auto text-justify lg:w-1/2 py-4 ">
          <h3 className="font-semibold text-xl py-2 md:text-3xl md:py-3 ">
            Why Choose us?
          </h3>
          <h1 className=" text-3xl py-2 md:text-4xl font-bold md:py-3 lg:text-4xl">
            Purpose over profits
          </h1>
          <p className="text-customBrown py-2 text-md md:text-lg">
            Bringing the finest produce from different parts of India directly
            to your homes, our vision is to enhance the life of every farmer and
            artisan we meet along the way. Our products are carefully made using
            ancient sustainable techniques by skilled humans. We envision a
            future in which the whole world would one day see the beauty of
            India.
          </p>
        </div>
      </div>

      {/* What We Are Cooking */}

      {/* <div className="bg-customYellow p-4 my-16">
        <h2 className=" text-3xl p-4 text-center md:text-3xl font-bold md:py-8 lg:text-4xl py-12">
          What We Are Cooking
        </h2>
        <h3 className="text-customBrown text-center mx-auto py-6 px-4 max-w-4xl text-md md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <div className="md:p-4 py-8">
          <div className="flex flex-wrap justify-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2" // Adjusted widths for different screen sizes
              >
                <ResponsiveCard
                  title={card.title}
                  subtitle={card.subtitle}
                  image={card.image}
                  href={card.href}
                  avatar={card.avatar}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Products  */}

      {/* <div className="overflow-hidden text-center p-2 sm:py-4 md:py-6 ">
        <h2 className="text-xl text-center pt-6">~ Products ~</h2>
        <h1 className="text-2xl sm:text-3xl font-bold pb-4">
          All of our products are organic & fresh.
        </h1>
        {/* <div className="py-4">
            <ProductDefault/>
          </div> *
      </div> */}

      {/* NEWS */}
      {/* <div className="overflow-hidden space-y-4 p-4">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-pink-500">Latest</span> News & Blog
        </h1>
        <p className="text-center w-full sm:w-1/2 lg:w-1/3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex sm:flex-row flex-wrap justify-center gap-8 p-6">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              title={blog.title}
              link={blog.link}
            />
          ))}
        </div>
      </div> */}
    </>
  );
}
