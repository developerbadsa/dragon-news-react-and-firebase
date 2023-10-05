import Marquee from "react-fast-marquee";


const LastestNews = () => {
    return (
        <div className="flex items-center gap-4">
            <button className="btn bg-[#D72050] hover:bg-[#D72050] rounded-none text-white">Latest</button> <Marquee><span>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</span></Marquee>
        </div>
    );
};

export default LastestNews;