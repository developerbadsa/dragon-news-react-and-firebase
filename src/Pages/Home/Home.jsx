import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Header/Navbar";
import LastestNews from "../../Components/LastestNews/LastestNews";
import Catagories from "./Catagory/Catagories";
import HomeNews from "./HomeNews/HomeNews";
import LoginWith from "./RightAside/LoginWith";


const Home = () => {
    return (
        <>

            <header>
                <Header></Header>
                <LastestNews></LastestNews>
                <Navbar></Navbar>
            </header>
            <main className="grid grid-cols-4">
                <div>
                    <Catagories></Catagories>
                </div>
                <div className="col-span-2">
                    <HomeNews></HomeNews>
                </div>
                <div>
                    <LoginWith></LoginWith>
                </div>
            </main>

        </>
    );
};

export default Home;