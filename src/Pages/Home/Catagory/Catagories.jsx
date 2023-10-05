import { useEffect, useState } from "react";
import Catagory from "./Catagory";


const Catagories = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('/public/categories.json')
            .then((res => res.json()))
            .then(data => setCatagories(data))
    }
        , [])

    return (
        <div className="">
            <h3 className="text-xl font-semibold text-slate-600 my-8">All Caterogy</h3>
            <div className="grid gap-3">
                {
                    catagories.map((catagory) => <Catagory key={catagory.id} catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;