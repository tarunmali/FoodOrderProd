const Shimmer = () => {
    return(
        <div className="flex flex-wrap">
        {/* <div className='res-container'>
            {Array(20).fill("").map((e,index)=><div index={index} className="shimmer-card"></div>)}
            <div className="shimmer-card"></div>
    
        </div>  */}
        {Array(100).fill("").map((e,index)=>
        <div index={index} className="w-[200px] p-2 m-2 shadow-lg bg-pink-50 " >
        {/* <img 
        src={} alt="" /> */}
        <img className='res-logo' src=""  alt="" />
        <h3 className="font-bold text-xl">{`shimmer`}</h3>
        <h4 className="flex">{`shimmer`}</h4>
        {/* <h4>{resData.stars}</h4> */}
        {/* <h4>{user.name}</h4> */}

    </div>)}


        </div>
    )
}

export default Shimmer;