import { useParams } from "react-router";
import { blogs } from "../constants";
export default function SingleBlogPage(){
    const {id} = useParams()
    return(
        <div className="px-4  lg:w-1/2 lg:mx-auto md:px-12 py-4">
    <div className="text-pink-500 text-left py-4 pt-12">
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-sans">
            {blogs[id].title}
        </h1>
    </div>
    <img
        className="w-full sm:w-full md:w-3/4 lg:w-full mx-auto h-auto object-cover rounded-lg shadow-md"
        src={blogs[id].image}
        alt="Blog image"
    />
    <p className="py-4 text-lg sm:text-base lg:text-xl text-black text-justify">
        {blogs[id].excerpt}
    </p>
</div>
    );
}