import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Header/Navbar";
import LastestNews from "../../Components/LastestNews/LastestNews";
import Catagories from "./Catagory/Catagories";


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
                    News
                </div>
                <div>
                    social
                </div>
            </main>

        </>
    );
};

export default Home;