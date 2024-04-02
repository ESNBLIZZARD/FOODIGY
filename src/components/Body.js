import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
//import resList from "../utils/mockData";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


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

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Sorry, you're OFFLINE !! Please check your internet connenction</h1>



    return listOfResturant.length === 0 ? <Shimmer/> : ( 
    <div className="body">
        <div className="flex items-center">
           <div className="search m-2 p-4 mr-0">
               <input type="text" className="w-[250px] p-4 h-7 border bg-slate-200 border-black border-solid rounded-lg hover:bg-slate-300 font-semibold" value = {searchText} 
               onChange={(e) => {
                setSearchText(e.target.value);
               }}/>
            </div>
            <div className="mr-10">
               <button className="h-7 w-16 bg-green-200 shadow-black shadow-lg border rounded-lg border-black border-solid transition-all duration-500 animate-pulse hover:bg-green-300" 
               onClick={() => {
                const filteredResturants = listOfResturant.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()) || res?.info?.cuisines?.includes(searchText));
                setFilteredResturants(filteredResturants);
               }}>Search</button>
           </div>
           <div>
             <button className="h-7 w-35 px-4 bg-gray-200 shadow-black shadow-lg border rounded-lg border-black border-solid transition-all font-semibold duration-500 hover:bg-gray-300" 
             onClick={() => {
                const filteredList = listOfResturant.filter(
                    (res) => res?.info?.avgRating > 4.0
                    );
                setFilteredResturants(filteredList);
             }}> TOP RATED... </button>
             </div>
        </div>

        <div className="px-[10%] flex flex-wrap">
            {  
                filteredResturants.map((resturant) => (
                <Link key ={resturant.info.id} to = {"/resturant/" + resturant.info.id}><ResturantCard resData = {resturant}/></Link>
                ))
            };
        </div>
    </div>
    );
};

export default Body;