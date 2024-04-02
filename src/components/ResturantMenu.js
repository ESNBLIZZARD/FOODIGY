import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantMenu = () => {

    const {resId} = useParams();

    const resInfo = useResturantMenu(resId);  // Creating Custom Hook
    const[showIndex, setShowIndex] = useState(null);


    if(resInfo === null) return <Shimmer/>;

    const  {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;
    const{name, city, locality, costForTwoMessage, cuisines, avgRating} = resInfo?.cards[2]?.card?.card?.info;

   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === 
   "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

   //console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{city} - {locality}</p>
            <p className="text-lg font-medium">{costForTwoMessage}</p>
            <p className="text-lg font-medium">{cuisines.join(", ")}</p>
            <p className="text-lg font-medium">{avgRating} ⭐ </p>
            
            {categories.map((category, index) => (
                //controlled component
                <ResturantCategory key={category?.card?.card?.title} data = {category?.card?.card}
                showItems = {index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                />
            )
            )}
            
        </div>
    );
};
export default ResturantMenu;