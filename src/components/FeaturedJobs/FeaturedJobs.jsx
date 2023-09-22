import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl lg:text-5xl text-center font-bold mb-4">Featured Jobs: {jobs.length}</h2>
            <p className="text-xs md:text-sm lg:text-base text-center text-[#757575 font-medium]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;