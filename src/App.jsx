
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Categories from "./components/catagories/Categories";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-green-100">
      <Router>
        <Routes>
          <Route path="/" element={<Categories />}>
            <Route path="/home" element={<Categories />} />
          </Route>
        </Routes>

       
      </Router>
      </div>
    </>
  );
}

export default App;
