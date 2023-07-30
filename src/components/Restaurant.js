import { CDN_URL } from "../utils/constants";

const RestauCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props?.resData;
  return (
    <div className="res-card p-4 m-4 w-52 bg-gray-100 rounded-lg min-h-max">
      <img src={CDN_URL + cloudinaryImageId} className="rounded-lg"/>
      <h2 className="text-lg font-medium py-4">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestauCard;
