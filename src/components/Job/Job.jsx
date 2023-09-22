import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({job}) => {
    // console.log(job)
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl mt-10">
            <div className="card-body mt-3">
                <img className="text-left w-40 mb-3" src={logo} alt="jobs" />
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border border-[#9873FF] rounded text-[#9873FF] mr-5">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border border-[#9873FF] rounded text-[#9873FF]">{job_type}</button>
                </div>
                <div className="flex gap-4 my-5">
                    <h2 className="flex gap-2 items-center"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
                    <h2 className="flex gap-2 items-center"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;