import Header from "../../components/Header/Header";
import Listing from "../../components/listing/Listing";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";



const Home = () => {
  return (
    <>
       <div>
            <Header />
            <div className="home-page">
                <Listing />
                <Sidebar />
            </div>
        </div>
    </>
  )
}

export default Home
