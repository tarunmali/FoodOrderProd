
const RestaurantCard = (props) => {
const {resData}=props;
    console.log(resData.data);
    return(    
    <div className="res-card" style={{
        backgroundColor:"#CCF381",
    }}>
        {/* <img className='res-logo'
        src={resData.imageSrc} alt="" /> */}
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines}</h4>
        {/* <h4>{resData.stars}</h4> */}

    </div>
)}

export default RestaurantCard;