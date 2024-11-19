const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full
      ${backgroundColor ? `${backgroundColor} ${textColor} border ${borderColor}` : `bg-coral-red text-white border border-coral-red`} ${fullWidth && 'w-full'}`}>
      {label}

      {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full size-5" />}
    </button>
  )
}

export default Button