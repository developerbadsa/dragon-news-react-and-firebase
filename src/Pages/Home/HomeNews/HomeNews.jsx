import { useEffect, useState } from "react";


const HomeNews = () => {
    const [News, setNews] = useState([])
    useEffect(
    ()=>{

        fetch('/public/news.json')
        .then(res=>res.json())
        .then(data=>setNews(data))

    }
        
        ,[])

console.log(News);

    return (
        <div>
            <h3 className="text-xl font-semibold text-slate-600 my-8">All Caterogy</h3>

        </div>
    );
};

export default HomeNews;