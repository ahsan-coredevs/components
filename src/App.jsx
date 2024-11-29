import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Categories from "./components/catagories/Categories";
import Card from "./components/card/Card";
import CardItems from "./assets/data/cardItems";
import {
  Blog,
  Course,
  Order,
  Teacher,
  User,
} from "./components/svgcomponent/svgComponent";
import DeliveryStatus from "./components/deliveryStatus/DeliveryStatus";
import Review from "./components/review/Review";
import Timer from "./components/useRef/Timer";
import PreviousValue from "./components/useRef/PreviousValue";
import Toggle from "./components/useRef/Toggle";
import LifecycleComponent from "./components/useRef/LifecycleComponent";
import AnimationComponent from "./components/useRef/AnimationComponent.jsx";

function App() {
  const icon = [ Course, Blog, Teacher, User, Order];
  return (
    <>
      <div className="h-screen w-full bg-slate-100 p-10">
        <Router>
          <Routes>
            <Route path="/" element={<Categories />}>
              <Route path="/home" element={<Categories />} />
            </Route>
          </Routes>
        </Router>

        <div className="w-full h-auto grid grid-cols-5 gap-4 text-slate-100 mt-8">
          {CardItems.map((Item,index) => (
            <Card
              key={Item._id}
              bg={Item.bg}
              name={Item.name}
              value={Item.value}
              Icon={icon[index]}
            />
          ))}
        </div>
        <DeliveryStatus />
       <Review />
       <Timer />

       <PreviousValue/>
       <Toggle />
       <LifecycleComponent />
       <AnimationComponent />
      </div>
    </>
  );
}

export default App;
