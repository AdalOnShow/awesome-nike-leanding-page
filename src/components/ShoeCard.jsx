const ShoeCard = ({ imgURL, changeBigShowImg, bigShoeImg }) => {

  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShowImg(imgURL.bigShoe)
    }
  }
  return (
    <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1  hover:scale-105 transition-all duration-200 ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"}`} onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:size-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard