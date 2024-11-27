import { useState } from "react";
import Data from "../../assets/data/categories.json";

import { RightArrow } from "../../components/svgcomponent/svgComponent";

function Categories() {
  const [category, setCategory] = useState(null);
  console.log(category)


  return (
    <div className={` w-[18%] bg-stone-200 p-4 cursor-pointer select-none rounded-md duration-500`}>
      {Data.map((cat) => {
        
        return  <div key={cat._id} className="category">
        <div onClick={() =>setCategory(prev=>prev?.includes(cat._id)?null:cat._id) }  className={` flex justify-start gap-2 items-start w-full`}>
          <h1 className="w-[40%]">{cat.name}</h1>
         <RightArrow className={`duration-300 h-[20px] w-[20px] ${category?.includes(cat._id)?'rotate-90 ':''}`}/>
        </div>
        <div className="max-h-[1000px]">
        <div
            className={`ml-3 overflow-hidden transition-all duration-500  ease-in-out ${
                category?.includes(cat._id) ? 'max-h-[70px]' : 'max-h-0'
            }`}
>
          {cat.subcategories.map((subcategory) => (
            <ul key={subcategory._id}>
              <li className={`${category?.includes(subcategory._id)?'text-orange-600':''}`} onClick={(e)=>{
                  e.stopPropagation();
                  setCategory(prev=>prev.split(':')[0]+':'+subcategory._id)
              }}>{subcategory.name}</li>
            </ul>
          ))}
        </div>
        </div>
      </div>
      })}
    </div>
  );
}

export default Categories;
