import { star } from '../assets/icons'

const PoplarProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full hover:scale-105 transition-all duration-200">
      <img src={imgURL} alt={name} className="size-[280px] hover:shadow-lg transition-all duration-200 cursor-pointer rounded-[20px]"
      />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" className="size-6" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default PoplarProductCard