import axios from "axios";
import { useEffect, useState } from "react";
import ProductDefault from "../Components/GlobalComponents/ProductDefault";
import { apiString } from "../service/apicalls";
import { Spinner } from "@material-tailwind/react";

export default function Shop() {
  const [shopData, setShopData] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Spinner className="h-10 w-10" />;
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div className="text-center py-6">
        <h1 className="text-2xl md:text-4xl pb-3 px-3 md:px-0 md:pb-6 font-bold">
          Indigenous products from source to your homes!
        </h1>
        <div className="w-full ">
          <ProductDefault productData={shopData.data} />
        </div>
      </div>
    </>
  );
}
