import RestauCard from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [resList, setResList] = useState([]);
  let [filteredList, setFilteredList] = useState([]);

  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (resList?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-container">
      <div className="filter-restaurant">
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let list = resList.filter((record) =>
                record?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredList(list);
            }}
          >
            Search
          </button>
        </div>
        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            resList = resList.filter((record) => record.info.avgRating > 4);
            setResList(resList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-card-container">
        {filteredList.map((record) => (
          <RestauCard key={record?.info?.id} resData={record?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
