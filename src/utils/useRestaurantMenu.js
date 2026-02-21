import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () =>  {
    try {
      const data = await fetch(MENU_API + resId);
    
      const json = await data.json();
    
      setResInfo(json.data);
    } catch (error) {
      console.log("Fetch failed:", error.message);
      setResInfo({});
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
