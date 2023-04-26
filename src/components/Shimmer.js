// const Shimmer = () => {
//     return(
//         <div className="flex flex-wrap">
//         {/* <div className='res-container'>
//             {Array(20).fill("").map((e,index)=><div index={index} className="shimmer-card"></div>)}
//             <div className="shimmer-card"></div>
    
//         </div>  */}
//         {Array(100).fill("").map((e,index)=>
//         <div index={index} className="w-[200px] p-2 m-2 shadow-lg bg-pink-50 " >
//         {/* <img 
//         src={} alt="" /> */}
//         <img className='res-logo' src=""  alt="" />
//         <h3 className="font-bold text-xl">{`shimmer`}</h3>
//         <h4 className="flex">{`shimmer`}</h4>
//         {/* <h4>{resData.stars}</h4> */}
//         {/* <h4>{user.name}</h4> */}

//     </div>)}


//         </div>
//     )
// }

// export default Shimmer;


// import React from "react";

// const Shimmer = () => {
//   return (
//     <div className="flex flex-col rounded-lg shadow-lg bg-white">
//       <div className="h-64 animate-pulse rounded-t-lg bg-gray-300"></div>
//       <div className="p-6">
//         <div className="h-6 w-2/3 mb-4 animate-pulse bg-gray-300"></div>
//         <div className="h-4 w-1/2 animate-pulse bg-gray-300"></div>
//       </div>
//     </div>
//   );
// };

// export default Shimmer;

import ShimmerForRestaurants from "./ShimmerForRestaurants";
const Shimmer = () => {
    return (
      <div className="grid grid-cols-6 grid-rows-2 gap-4 py-20">
        {[...Array(12)].map((_, index) => (
          <div key={index}>
            <ShimmerForRestaurants />
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
