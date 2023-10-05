import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Header/Navbar";
import LastestNews from "../../Components/LastestNews/LastestNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <LastestNews></LastestNews>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;