import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utility/LocalStorage";
import AppliedSingleJob from "../AppliedSingleJob/AppliedSingleJob";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const AppliedJob = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredApplication();
        if (storedJobIds.length) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])
    const handleFilter = (type) => {
        if (type == "all") {
            setDisplayJobs(appliedJobs)
        }
        else if (type == "remote") {
            const remoteJobs = appliedJobs.filter((job) => job.remote_or_onsite == "Remote");
            setDisplayJobs(remoteJobs)
        }
        else if (type == "onsite") {
            const onsiteJobs = appliedJobs.filter((job) => job.remote_or_onsite == "Onsite");
            setDisplayJobs(onsiteJobs)
        }
    }
    return (
        <div className="">
            <div className="text-4xl font-extrabold text-center bg-[#FAF8FF] py-14 bg-[url('/src/assets/images/bg1.png')] bg-no-repeat bg-left-bottom">
                <h2>Applied Job</h2>
                
            </div>


            <div className="p-5 flex justify-end">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Filter By <FontAwesomeIcon icon={faAngleDown} /></div>
                    <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-fit p-2 shadow">
                        <li onClick={() => handleFilter("all")}><a>All</a></li>
                        <li onClick={() => handleFilter("remote")}><a>Remote</a></li>
                        <li onClick={() => handleFilter("onsite")}><a>Onsite</a></li>
                    </ul>
                </div>

            </div>

            <div className="p-5 space-y-5">
                {
                    displayJobs.map((job) => <AppliedSingleJob key={job.id} job={job}></AppliedSingleJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;