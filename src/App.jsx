//import Header from "./components/Header/Header"
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/Home/Home";
import Detail from "./pages/listing-detail/Detail";
import CreateListing from "./pages/create-listing/CreateListing";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
       <Router>
      <div >
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/create" element={<CreateListing />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
