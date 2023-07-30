import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantInfo = () => {
//   const [resDetails, setResDetails] = useState(null);

  const { id } = useParams();

  const resDetails = useRestaurantInfo(id);

  if (resDetails === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines } =
    resDetails?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(" ,")} - {costForTwoMessage}
      </h3>
      <h4>{avgRating}</h4>
      <h4>Menu</h4>
      <ul>
        {itemCards?.map((record) => {
          return (
            <li key={record?.card?.info?.id}>
              {record?.card?.info?.name} - Rs.{record?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantInfo;
