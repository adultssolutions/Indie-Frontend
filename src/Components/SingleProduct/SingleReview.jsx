/* eslint-disable react/prop-types */
import { useState } from 'react';
import ClientReviewCard from "./ClientReviewCard";

export default function SingleReview({ className,reviews }) {
  const [showAll, setShowAll] = useState(false);

  // const reviews = [
  //   {
  //     username: "Holden Caulfield",
  //     usertext: "Synth chartreuse iPhone lomo cray raw denim",
  //   },
  //   {
  //     username: "Holden Caulfield",
  //     usertext: "Synth chartreuse iPhone lomo cray raw denim",
  //   },
  //   {
  //     username: "Holden Caulfield",
  //     usertext: "Synth chartreuse iPhone lomo cray raw denim",
  //   },
  //   {
  //     username: "Holden Caulfield",
  //     usertext: "Synth chartreuse iPhone lomo cray raw denim",
  //   },
  //   {
  //     username: "Holden Caulfield",
  //     usertext: "Synth chartreuse iPhone lomo cray raw denim",
  //   },
  //   {
  //     username: "Holden Caulfield",
  //     usertext: "Synth chartreuse iPhone lomo cray raw denim",
  //   }
  // ];

  return (
    <>
      <div className="container px-5 pb-12 mx-auto ">
        <h1 className="text-3xl my-12 tracking-widest font-mono space-x-1 title-font text-pink-400 mb-4 text-center">
        -Reviews For Our Products-
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto gap-4">
          {reviews?.length > 0 && reviews.slice(0, showAll ? reviews.length : 3).map((review, index) => (
            <ClientReviewCard
              key={index}
              username={review.name}
              usertext={review.description}
              title={review.title}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {showAll ? (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowAll(false)}
            >
              Hide Reviews
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowAll(true)}
            >
              Read More Reviews
            </button>
          )}
        </div>
      </div>
    </>
  );
}