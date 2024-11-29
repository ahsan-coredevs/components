import Rating from "../rating/Rating"
import { Person } from "../svgcomponent/svgComponent"

function Review() {
  return (
    <div className="w-full bg-slate-100 flex p-4 gap-4 rounded-lg shadow-lg">
      <div className="bg-green-800 w-12 h-12 rounded-full overflow-hidden">
        <Person className="w-full h-full scale-150 mt-2 p-2 text-slate-300" />
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-lg font-semibold">User Name</h1>
          <p className="text-sm text-gray-500">A month ago</p>
        </div>
        
        <div className="flex items-start mt-2 gap-1"> 
          
          <p className="text-sm text-gray-700 leading-relaxed relative  " style={{ textIndent: '110px'}}>
         <div className=" absolute top-0 left-0 "> <Rating rating={4} /></div>
           {/* &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
           I can not say enough good things about my experience with Zerorez! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, culpa? Recusandae pariatur consequatur voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ipsa! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eaque explicabo ut natus distinctio itaque nam vero, aspernatur blanditiis. Exercitationem?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Review
