const ShimmerForRestaurants = () => {
return (<div>
    <div className="flex flex-col rounded-lg shadow-lg bg-white">
      <div className="h-44 animate-pulse rounded-t-lg bg-gray-300"></div>
      <div className="p-6">
        <div className="h-6 w-2/3 mb-4 animate-pulse bg-gray-300"></div>
        <div className="h-4 w-1/2 animate-pulse bg-gray-300"></div>
      </div>
    </div>
</div>)
}

export default ShimmerForRestaurants