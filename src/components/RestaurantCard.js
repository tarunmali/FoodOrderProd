
const RestaurantCard = (props) => {
    const {resData} = props;
    
    

    return(    
    <div className="res-card" style={{
        backgroundColor:"yellow",
    }}>
        <img className='res-logo'
        src={resData.imageSrc} alt="" />
        <h3>{resData.resName}</h3>
        <h4>{resData.cuisine}</h4>
        <h4>{resData.stars}</h4>

    </div>
)}

export default RestaurantCard;