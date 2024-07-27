import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { jobId } = useParams()
    const job = jobs.find((job)=>job.id == jobId);
    console.log(job);
    return (
        <div>
            JobDetail
        </div>
    );
};

export default JobDetails;