const Card = () => {
    return (
        <div className="res-card">
            <img className="res-logo"/>
            <h3 className="shimmer-card-cont"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3>
            <p className="shimmer-card-cont"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
            <h4 className="shimmer-card-cont"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h4>
            <h5 className="shimmer-card-cont"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h5>
            <h5 className="shimmer-card-cont"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h5>
        </div>
    );
};



const Shimmer = () => {
    return (
        <div className="body">
        <div className="filter">
             <div className="search">
                 <input type="text" className="search-box"/>
                 <button className="searchBtn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
             </div>
             <button className="filterBtn"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div>
        <div className="res-container">
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
            {<Card/>};
        </div>
    </div>
    );
};

export default Shimmer;