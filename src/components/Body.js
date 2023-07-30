import RestauCard from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTUARANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  let [resList, setResList] = useState([]);
  let [filteredList, setFilteredList] = useState([]);

  let [searchText, setSearchText] = useState("");

  const isOnline = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTUARANTS_URL);

    const json = await data.json();
    setResList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(!isOnline) {
    return (<div>Looks like you're offline, Please check your internect connection!!</div>)
  }

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
        {filteredList?.map((record) => (
          <Link
            key={record?.info?.id}
            to={"/restaurantInfo/" + record?.info?.id}
          >
            <RestauCard resData={record?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
