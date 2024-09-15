import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { apiString } from "../../service/apicalls";
import ShoppingCartDialog from "../GlobalComponents/ShoppingCartDialog";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../../service/CartSlice";
import { useParams } from "react-router";

export default function CardDefault() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
  };
  const [shopData, setShopData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    dispatch(
      addItem({ productId, quantity, name, discountprice, imageUrl, size })
    );
    handleOpen("xl");
  };

  const buyNow = (productId, quantity, name, discountprice, imageUrl, size) => {
    dispatch(clearCart());
    dispatch(
      addItem({ productId, quantity, name, discountprice, imageUrl, size })
    );
    navigate("/checkout");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(apiString + "/shop/");
        setShopData(data); // Set the fetched data
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full grid bg-gray grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-4 p-2 gap-x-2 gap-y-2 md:gap-4 lg:gap-3">
      {shopData.data.slice(0, 4).map((card, index) => {
        const minDiscountPrice = Math.min(
          ...card.sizes.map((size) => size.discountPrice)
        );
        const minPrice = Math.min(...card.sizes.map((size) => size.price));
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
                onClick={() => handleProductClick(card.id)}
                src={card.imageUrl[0]}
                alt="card-image"
                className="h-full w-full object-cover transition-transform transform hover:cursor-pointer"
              />
            </CardHeader>
            <CardBody className="p-1 md:p-4 flex flex-col grow">
              <Typography
                color="blue-gray"
                className="text-sm sm:text-lg font-medium mb-2"
              >
                {card.name}
              </Typography>
              {/* Ensure the price section stays at the bottom */}
              <Typography
                id="price"
                color="blue-gray"
                className="text-sm sm:text-lg 
                flex flex-row justify-center
                font-medium mt-auto w-full text-right"
              >
                <span className="line-through opacity-40 pr-2">
                  RS. {minPrice}
                </span>
                RS. {minDiscountPrice}
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
