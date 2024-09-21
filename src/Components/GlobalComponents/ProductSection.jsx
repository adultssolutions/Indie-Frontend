// const ProductSection = ({ bgColor, buttonColor, title,textColor,description }) => {
//   return(
//   <div className={`flex flex-col border-4 border-pink-400  items-center justify-between bg-${bgColor} p-6 text-${textColor} sm:p-8 w-full rounded-md group transition-all duration-700 ease-in-out hover:shadow-2xl`}>
//     <div>
//       <h2 className="text-xl py-2 font-medium md:text-2xl">{title}</h2>
//       <p className="md:text-lg">{description}</p>
//     </div>
//     <div className="w-full">
//       {textColor === "white"?
//       <button className={`px-4 py-1 mt-4 text-pink-500 text-md sm:mt-6 sm:px-6 sm:text-lg rounded-full relative transition-all duration-300 ease-in-out bg-${buttonColor} group-hover:pr-8`}>
//       Shop Now
//       <i className="fa-solid fa-arrow-right absolute  text-pink-500  right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></i>
//       </button>:
//       <button className={`px-4 py-1 mt-4 text-white text-md sm:mt-6 sm:px-6 sm:text-lg rounded-full relative transition-all duration-300 ease-in-out bg-${buttonColor} group-hover:pr-8`}>
//       Shop Now
//       <i className="fa-solid fa-arrow-right absolute text-white right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></i>
//       </button>
//     }
//     </div>

//   </div>
//   );
// };
// export default ProductSection;

// const ProductSection = ({
//   bgColor,
//   buttonColor,
//   title,
//   textColor,
//   description,
//   backgroundImage,
// }) => {
//   return (
//     <div
//       className={`flex h-[400px]flex-col items-center justify-center p-8 text-${textColor} sm:p-10 w-full rounded-md group transition-all duration-700 ease-in-out bg-cover bg-center`}
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         border: "4px solid #FF69B4", // Pink border color
//       }}
//     >
//       <div className="hidden">
//         <h2 className="text-xl py-2 font-medium md:text-2xl">{title}</h2>
//         <p className="md:text-lg">{description}</p>
//       </div>
//       <div className="w-full">
//         <button
//           className={`px-4 py-1 mt-4 text-white text-md sm:mt-6 sm:px-6 sm:text-lg rounded-full relative transition-all duration-300 ease-in-out bg-${buttonColor} group-hover:pr-8`}
//         >
//           Shop Now
//           <i className="fa-solid fa-arrow-right absolute text-white right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductSection;

const ProductSection = ({ buttonColor, textColor, backgroundImage }) => {
  return (
    // <div
    //   className={`flex h-[300px] flex-col items-center justify-between p-8 text-${textColor} w-full rounded-md group transition-all duration-700 ease-in-out bg-cover  bg-center`}
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`, // Use the passed background image
    //     border: "4px solid #FF69B4", // Pink border color
    //   }}
    // >
    //   <div className="flex-grow" />{" "}
    //   {/* This empty div takes up space to push the button down */}
    //   <div className="w-full">
    //     <button
    //       className={`px-4 py-1 mt-4 text-${textColor} text-md rounded-full relative transition-all duration-300 ease-in-out bg-${buttonColor} group-hover:pr-8`}
    //     >
    //       Shop Now
    //       <i
    //         className={`fa-solid fa-arrow-right absolute text-${textColor} right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100`}
    //       ></i>
    //     </button>
    //   </div>
    // </div>

    <div
      className={`flex flex-col items-center justify-between p-8 w-full rounded-md group transition-all duration-700 ease-in-out bg-cover bg-center `}
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the passed background image
        border: "3px solid #FF69B4", // Pink border color
        height: "0", // Set height to 0 to use padding for aspect ratio
        paddingBottom: "40%", // Maintain aspect ratio (300px height / 600px width = 0.5)
        position: "relative", // Ensure the child elements are positioned correctly
      }}
    >
      <div className="flex-grow" />
      {/* This empty div takes up space to push the button down */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button
          className={`px-4 py-1 mt-4 text-${textColor} text-md rounded-full relative transition-all duration-300 ease-in-out bg-${buttonColor} group-hover:pr-8`}
        >
          Shop Now
          <i
            className={`fa-solid fa-arrow-right absolute text-${textColor} right-2 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
