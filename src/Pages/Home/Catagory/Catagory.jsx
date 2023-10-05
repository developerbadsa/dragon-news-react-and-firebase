import { Link } from "react-router-dom";


const Catagory = ({ catagory }) => {
    console.log(catagory)

    return (
        <Link>
            <button className="btn text-[#9F9F9F] active:text-[#9F9F9F] my-2">
                {
                    catagory.name
                }
            </button>
        </Link>
    );
};

export default Catagory;