import { Rating } from "@mui/material";
import { FaBookmark, FaShare, FaEye } from "react-icons/fa6";

const SingleNews = ({ news }) => {


    const { author, image_url, rating
        , thumbnail_url
        , title, total_view
        , details
    } = news;

    const { name, published_date, img } = author;




    console.log();


    return (

        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center px-6 py-2">
                {/* Author */}
                <div className="flex">
                    <img className="w-14 rounded-full mx-2" src={img} alt={name} />

                    <div>
                        <h4 className="text-base font-semibold ">{name}</h4>
                        <span className="text-sm text-slate-500">{published_date}</span>
                    </div>
                </div>
                {/* Share and bookmark part */}
                <div className="flex gap-4">
                    <FaBookmark></FaBookmark>
                    <FaShare></FaShare>
                </div>
            </div>




            <a >
                <img className="rounded-t-lg" src={image_url} alt="" />
            </a>
            <div className="p-5">
                <a >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    {details.length < 200 ?


                        details

                        :
                        <p className="">
                            {details.slice(0, 200)}
                            <br />
                            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-4">
                                Read more
                                <svg
                                    className="w-3.5 h-3.5 ml-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </button>
                        </p>


                    }
                </p>


            </div>
            <div className="flex justify-between px-8 mb-5">
                <div>
                    <Rating name="read-only" value={parseInt(rating.number)} readOnly />
                </div>
                <div className="flex gap-2 items-center">
                    <FaEye></FaEye> <span>{total_view}</span>
                </div>
            </div>
        </div>


    );
};

export default SingleNews;