import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utility/LocalStorage";
import AppliedSingleJob from "../AppliedSingleJob/AppliedSingleJob";


const AppliedJob = () => {

    const jobs = useLoaderData();
    const [appliedJobs,setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredApplication();
        if (storedJobIds.length) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied);
        }
    }, [jobs])

    console.log(appliedJobs);
    return (
        <div>
            <div className="text-4xl font-extrabold text-center my-14">
                <h2>Applied Job</h2>
            </div>

            <div className="p-5 space-y-5">
                {
                    appliedJobs.map((job)=><AppliedSingleJob key={job.id} job={job}></AppliedSingleJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;