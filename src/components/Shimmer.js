const Shimmer = () => {
    return(
        <>
        <div className='res-container'>
            {Array(20).fill("").map((e,index)=><div index={index} className="shimmer-card"></div>)}
            <div className="shimmer-card"></div>
    
        </div> 
        </>
    )
}

export default Shimmer;