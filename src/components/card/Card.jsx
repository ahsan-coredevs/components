function Card({ bg, name, value, Icon }) {
  return (
    <div className="w-full relative">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, ${bg}80, ${bg})`,
        }}
        className="py-2 h-[80px] text-2xl rounded-md overflow-hidden px-2 bg-opacity-70 bg-red-600 relative "
      >
        <div className="w-full h-full flex items-end z-30">{name}</div>
        <span className="absolute top-0 right-0 text-slate-200  pr-2 rounded-l-full rounded-b-full font-bold text-3xl drop-shadow-2xl z-50">
          {value}
        </span>
        <div className="absolute top-0 right-0 w-[50%] h-full ">
          {<Icon className="h-full w-full p-1 opacity-25" />}
        </div>
      </div>
    </div>
  );
}

export default Card;
