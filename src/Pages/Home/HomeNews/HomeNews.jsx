import { useEffect, useState } from "react";
import SingleNews from "./SingleNews";


const HomeNews = () => {
    const [News, setNews] = useState([])
    useEffect(
        () => {

            fetch('/public/news.json')
                .then(res => res.json())
                .then(data => setNews(data))

        }

        , [])

    return (
        <div>
            <h3 className="text-xl font-semibold text-slate-600 my-8">All Caterogy</h3>
            <div>
                {
                    News.map(news => <SingleNews key={news._id} news={news} ></SingleNews>)
                }
            </div>
        </div>
    );
};

export default HomeNews;