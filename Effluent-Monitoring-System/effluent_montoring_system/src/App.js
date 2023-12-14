import Mainpage from "./component/mainpage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Unit from "./component/unittable";
import Location2 from "./component/location2";
import Location3 from "./component/location3";
import Location4 from "./component/location4";
import Navbar from "./component/navbar";
import { Voilations } from "./component/voilations";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/home" element={<Mainpage/>}/>
          <Route path="/location1" element={<Unit/>}/>
          <Route path="/location2" element={<Location2/>}/>
          <Route path="/location3" element={<Location3/>}/>
          <Route path="/location4" element={<Location4/>}/>
          <Route path="/all" element={<Mainpage/>}/>
          <Route path="/voilations" element={<Voilations/>}/>
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
