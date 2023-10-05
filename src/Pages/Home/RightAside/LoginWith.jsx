import { FaGithub, FaGoogle } from "react-icons/fa6";


const LoginWith = () => {
    return (
        <div className="grid gap-5 p-5">
            <button className="btn btn-sm w-full border-[black] hover:border-[#2929ce] hover:text-[#2929ce]"><FaGoogle></FaGoogle> Log in with Google</button>
            <button className="btn btn-sm w-full border-[black] hover:border-[#2929ce] hover:text-[#2929ce]"><FaGithub></FaGithub> Log in with Github</button>
        </div>
    );
};

export default LoginWith;