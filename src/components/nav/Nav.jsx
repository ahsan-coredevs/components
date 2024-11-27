import Electronics from "../electronics/Electronics"
import Furniture from "../furniture/Furniture"

function Nav() {
  return (
    <div>
        <div className="h-auto w-[25%]">
            <Furniture />
            <Electronics />
        </div>
    </div>
  )
}

export default Nav