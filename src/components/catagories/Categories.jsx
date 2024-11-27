import { useState } from "react";
import Data from "../../assets/data/categories.json";

import { RightArrow } from "../../components/svgcomponent/svgComponent";

function Categories() {


  const [category, setCategory] = useState(null);
  console.log(category)


  return (
    <div className="h-auto w-[25%] bg-stone-200 p-4 cursor-pointer select-none">
      {Data.map((cat) => (
        <div key={cat._id} className="category">
          <div onClick={() =>setCategory(prev=>prev?.includes(cat._id)?null:cat._id) }  className={` flex gap-2 items-center`}>
            <h1>{cat.name}</h1>
           <RightArrow className={`duration-300 h-[20px] w-[20px] ${category?.includes(cat._id)?'rotate-90 ':''}`}/>
          </div>
          <div className={`${category?.includes(cat._id)? "ml-3" : "hidden"}`}>
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
      ))}
    </div>
  );
}

export default Categories;
