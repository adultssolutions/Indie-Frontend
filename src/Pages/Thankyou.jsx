import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [timeoutTimer, settimeoutTimer] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  setInterval(() => {
    settimeoutTimer(timeoutTimer - 1);
  }, 1000);

  return (
    <div className="flex items-center px-4 justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-28 w-28 text-green-600 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-4xl font-bold text-gray-800">Thank You!</h1>
        <p className="mt-2 text-gray-600">
          Your order has been placed successfully at IndieStorie.
        </p>
        <p className="mt-4 text-gray-500">
          You will be redirected to the home page in {timeoutTimer} seconds...
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
