import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
//import resList from "../utils/mockData";
import Shimmer from "../Shimmer";


const Body = () => {

    const [listOfResturant, setlistOfResturant] = useState([]); //state variable declaration
    const [filteredResturants, setFilteredResturants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => { 
        fetchData(); 
    }, []); 

    const fetchData = async () => {
         const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
         );
         const json = await data.json();

        setlistOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };



    return listOfResturant.length === 0 ? <Shimmer/> : ( 
    <div className="body">
        <div className="filter">
           <div className="search">
               <input type="text" className="search-box" value = {searchText} 
               onChange={(e) => {
                setSearchText(e.target.value);
               }}/>
               <button className="searchBtn" onClick={() => {
                const filteredResturants = listOfResturant.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) || res?.info?.cuisines?.includes(searchText));
                setFilteredResturants(filteredResturants);
               }}>Search</button>
           </div>
             <button className="filterBtn" 
             onClick={() => {
                const filteredList = listOfResturant.filter(
                    (res) => res?.info?.avgRating > 4.0
                    );
                setFilteredResturants(filteredList);
             }}> Top rated... </button>
        </div>

        <div className="res-container">
            {  
                filteredResturants.map((resturant) => (
                <ResturantCard key ={resturant?.info?.id} resData = {resturant}/>
                ))
            };
        </div>
    </div>
    );
};

export default Body;