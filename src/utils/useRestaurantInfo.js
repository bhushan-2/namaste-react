import { MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    console.log('fetching');
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantInfo;
