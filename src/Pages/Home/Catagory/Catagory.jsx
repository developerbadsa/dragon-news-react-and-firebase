import { Link } from "react-router-dom";


const Catagory = ({ catagory }) => {
    console.log(catagory)

    return (
        <Link>
            <button className="btn my-2">
                {
                    catagory.name
                }
            </button>
        </Link>
    );
};

export default Catagory;