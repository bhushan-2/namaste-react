import RestauCard from "./Restaurant";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [resList, setResList] = useState(restaurantList);
  return (
    <div className="restaurant-container">
      <div className="filter-restaurant">
        <button
          type="button"
          className="btn"
          onClick={() => {
            resList = resList.filter((record) => record.info.avgRating > 4);
            console.log(resList);
            setResList(resList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-card-container">
        {resList.map((record) => (
          <RestauCard key={record?.info?.id} resData={record?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
