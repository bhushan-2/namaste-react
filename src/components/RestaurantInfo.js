import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCatergory";
import {useState} from "react";

const RestaurantInfo = () => {
//   const [resDetails, setResDetails] = useState(null);
  const [showIndex, setShowItemIndex] = useState(0);

  const { id } = useParams();

  const resDetails = useRestaurantInfo(id);

  if (resDetails === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines } =
    resDetails?.cards?.[0]?.card?.card?.info;

  const itemCards =
    resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((record) => {
      return record?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    });

  return (
    <div className="text-center m-2 p-2">
      <h1 className="font-bold my-2 text-lg">{name}</h1>
      <h3 className="font-bold text-sm">
        {cuisines.join(" ,")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards?.map((record, index) => {
            console.log(record?.card?.card);
          return (
            <RestaurantCategory key={record?.card?.card?.title} data={record?.card?.card} 
            showItem={showIndex === index ? true: false } 
            setShowItemIndex={() => setShowItemIndex(index)}/>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantInfo;
