import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(jobs => setJobs(jobs))
    }, [])
    console.log(jobs);
    return (
        <div className="space-y-4">
            <div className="text-center space-y-5">
                <h2 className="text-5xl font-extrabold">Featured Jobs</h2>
                <p className="text-base text-primary-color">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5 p-5">
                {
                    jobs.map((job,i)=><Job key={i} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;