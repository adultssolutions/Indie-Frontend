import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ShoppingCartDialog from "../GlobalComponents/ShoppingCartDialog";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../../service/CartSlice";

export default function ProductDefault({ productData }) {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
  };
  const dispatch = useDispatch();



  const handleAddToCart = (
    productId,
    quantity,
    name,
    discountprice,
    imageUrl,
    size
  ) => {
    // const { productId, quantity, name, price, imageUrl } = product;
    console.log(productId, quantity, name, discountprice, imageUrl);
    dispatch(addItem({ productId, quantity, name, discountprice, imageUrl , size}));
    handleOpen("xl");
  };

  const buyNow = (productId, quantity, name, discountprice, imageUrl ,size) => {
    dispatch(clearCart());
    dispatch(addItem({ productId, quantity, name, discountprice, imageUrl ,size }));
    navigate("/checkout");
  };

  return (
    <div className="w-full grid bg-gray grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-4 p-2 gap-x-2 gap-y-2 md:gap-4 lg:gap-3">
      {productData.map((card, index) => {
        const minDiscountPrice = Math.min(
          ...card.sizes.map((size) => size.discountPrice)
        );
        const minPrice = Math.min(
          ...card.sizes.map((size) => size.price)
        );
        return (
          <Card
            key={card.productId}
            className="flex flex-col w-full shadow-md max-w-80 mx-auto md:transition-transform md:transform md:hover:scale-105"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="h-32 m-3 md:m-4 sm:h-48 overflow-hidden relative"
            >
              <img
                src={card.imageUrl[0]}
                alt="card-image"
                className="h-full w-full object-cover transition-transform transform hover:cursor-pointer"
                onClick={() => handleProductClick(card.id)}
              />
            </CardHeader>
            <CardBody className="p-1 md:p-4 grow">
              <div className="mb-2 flex flex-col xl:flex-row items-center justify-between">
                <Typography
                  color="blue-gray"
                  className="xl:w-3/4 text-sm sm:text-lg font-medium xl:text-left "
                >
                  {card.name}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="text-sm sm:text-lg font-medium xl:w-1/4 w-48 mt-2 md:mt-0 xl:text-right"
                >
                  <span className="line-through opacity-40 pr-2 xl:pr-0 ">
                    RS. {minPrice}{" "}
                  </span>
                  <span className="hidden xl:flex h-0">
                    <br />
                  </span>
                  RS. {minDiscountPrice}
                </Typography>
              </div>
              <p className="w-full text-left sm:text-left">{}</p>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"
              >
                {card.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-2 px-3 md:px-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
              <Button
                ripple={false}
                className="w-full p-1 h-10 md:w-1/2 bg-white border-4 hover:border-blue-400 hover:bg-white shadow-none bg-blue-400 border-blue-400 hover:text-blue-400 hover:shadow-lg"
                onClick={() =>
                  handleAddToCart(
                    card.id,
                    1,
                    card.name,
                    minDiscountPrice,
                    card.imageUrl[0],
                      card.sizes[0].size
                  )
                }
              >
                Add to Cart
              </Button>
              <Button
                ripple={false}
                className="w-full h-10 p-1 md:p-1 md:w-1/2 hover:bg-white border-4 hover:border-pink-400 hover:text-pink-400 shadow-none bg-pink-400 border-pink-400 text-white hover:shadow-lg"
                onClick={() =>
                  buyNow(
                    card.id,
                    1,
                    card.name,
                    minDiscountPrice,
                    card.imageUrl[0],
                      card.sizes[0].size
                  )
                }
              >
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        );
      })}
      <ShoppingCartDialog size={size} handleOpen={handleOpen} />
    </div>
  );
}
