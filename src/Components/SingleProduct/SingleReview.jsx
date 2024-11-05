import { useState } from 'react';
import ClientReviewCard from "./ClientReviewCard";

export default function SingleReview({ className }) {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    {
      username: "Lakshay Bishnoi",
      usertext: "Since last 3 days I feel very energized. Now I understand how important it is for us to have curcumin in our daily diets.",
    },
    {
      username: "Avinash Paul",
      usertext: " Beautiful, creative and attractive product packaging. This turmeric powder is really strong and flavourful, better than many known brand names that have been tried at my home. My mother really liked cooking with it and all of us at home can feel the difference in flavours",
    },
    {
      username: "Anjali",
      usertext: "Pure and Beneficial, I would say that this turmeric powder would be my all time favourite companion with my daily cup of milk at night.😊.... this is pure and the best part is I can also give a little gratitude towards the Indiestori concept. 👍,,,.. great initiative",
    },
    {
      username: "Akash Mishra",
      usertext: "Its actually as per its name, himalayan product.... the richness and the pure turmeric aroma is just worth experiencing 😍... must try 👍🏻",
    },
    {
      username: "Sidharth",
      usertext: "Great product. The colour and texture of the turmeric is very authentic and it helped cure my throat issues. Thanks!",
    },
    {
      username: "Rahul",
      usertext: "Found it authentic and highly usable especially in this weather to boost our immunity and overall health. Must try it.",
    },
  ];

  return (
    <>
      <div className="container px-5 pb-12 mx-auto ">
      <h1 className="text-3xl my-12 tracking-widest font-mono space-x-1 title-font text-pink-400 mb-4 text-center">
            -Reviews For Our Products-
          </h1>
        <div className="grid mt-4 lg:grid-cols-3 sm:grid-cols-1 mx-auto gap-4">
          {reviews.slice(0, showAll ? reviews.length : 3).map((review, index) => (
            <ClientReviewCard
              key={index}
              username={review.username}
              usertext={review.usertext}
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