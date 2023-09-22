import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {jobId} = useParams();
    const jobIdInt = parseInt(jobId);
    const job = jobs.find(job => job.id === jobIdInt)
    console.log(job);
    const {job_title, job_description, job_responsibility, educational_requirements, experiences, salary, contact_information} = job;

    return (
        <div className="my-14 px-4 md:px-0">
            <div className="grid md:grid-cols-4 gap-4">
                <div className=" md:col-span-3">
                    <p className="md:text-base mb-6"><span className="font-bold text-[#1A1919]">Job Description:</span> {job_description}</p>
                    <p className="md:text-base mb-6"><span className="font-bold text-[#1A1919]">Job Responsibility:</span> {job_responsibility}</p>
                    <p className="md:text-base mb-6"><span className="font-bold text-[#1A1919]">Educational Requirements:</span></p>
                    <p className="md:text-base mb-6"> {educational_requirements}</p>
                    <p className="md:text-base mb-6"><span className="font-bold text-[#1A1919]">Experiences:</span></p>
                    <p className="md:text-base mb-6"> {experiences}</p>
                </div>
                <div className="">
                    <div className="p-2 md:p-4 bg-[#bba3ff25] rounded-lg mb-5">
                        <div>
                            <h2 className="text-xl text-[#1A1919] font-bold mb-3">Job Details</h2>
                            <hr />
                            <p className="flex gap-1 mt-3">
                                <i className='bx bx-dollar-circle pt-1 md:text-base text-[#7E90FE] font-medium md:pt-[1px]'></i> 
                                <div>
                                    <span className="font-bold text-xs">Salary :</span> <span className="md:text-xs text-[#474747]">{salary}</span>
                                </div> 
                            </p>
                            <p className="flex gap-1">
                                <i className='bx bx-dollar-circle pt-1 md:text-base text-[#7E90FE] font-medium md:pt-[1px]'></i> 
                                <div>
                                    <span className="font-bold text-xs">Job Title :</span> <span className="md:text-xs text-[#474747]">{job_title}</span>
                                </div> 
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#1A1919] font-bold mb-3 mt-3">Contact Information</h2>
                            <hr />
                            <p className="flex gap-1 mt-3">
                                <i className='bx bx-dollar-circle pt-1 md:text-base text-[#7E90FE] font-medium md:pt-[1px]'></i> 
                                <div>
                                    <span className="font-bold text-sm md:text-xs">Phone :</span> <span className="md:text-xs text-[#474747]">{contact_information.phone}</span>
                                </div> 
                            </p>
                            <p className="flex gap-1">
                                <i className='bx bx-dollar-circle pt-1 md:text-base text-[#7E90FE] font-medium md:pt-[1px]'></i> 
                                <div>
                                    <span className="font-bold text-sm md:text-xs">Email :</span> <span className="md:text-xs text-[#474747]">{contact_information.email}</span>
                                </div> 
                            </p>
                            <p className="flex gap-1">
                                <i className='bx bx-dollar-circle pt-1 md:text-base text-[#7E90FE] font-medium md:pt-[1px]'></i> 
                                <div>
                                    <span className="font-bold text-sm md:text-xs">Address :</span> <span className="md:text-xs text-[#474747]">{contact_information.address}</span>
                                </div> 
                            </p>
                        </div>
                    </div>
                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;