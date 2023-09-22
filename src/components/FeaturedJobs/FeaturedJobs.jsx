import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div className="mb-10">
            <h2 className="text-3xl lg:text-5xl text-center font-bold mb-4">Featured Jobs</h2>
            <p className="text-xs md:text-sm lg:text-base text-center text-[#757575 font-medium]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={ dataLength === jobs.length && 'hidden'}>
                <div className="text-center">
                    <button 
                    onClick={() => setDataLength(jobs.length)}
                    className="btn btn-primary mt-10">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;