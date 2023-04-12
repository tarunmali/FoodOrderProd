const RestaurantCard = (props) => {
    const {resName, cuisine} = props;
    
    
    // console.log('props', props);
    return(    
    <div className="res-card" style={{
        backgroundColor:"yellow",
    }}>
        <img className='res-logo'
        src="https://filmymantra.com/wp-content/uploads/2019/01/maggi1.jpg" alt="" />
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>4.4 Stars</h4>
        <h4>38 minutes</h4>
    </div>
)}

export default RestaurantCard;