import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen text-center items-center flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-black mb-3">Oops !!!</h1>
            <p className="mb-2">This page not found</p>
            <Link to='/' className="bg-red-500 py-2 px-5 rounded-lg text-white">Back Home</Link>
        </div>
    );
};

export default ErrorPage;