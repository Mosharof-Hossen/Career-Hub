import { faEnvelope, faLocationDot, faPhone, faSackDollar, faSheetPlastic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { jobId } = useParams()
    const { job_description, job_title, job_responsibility, salary, educational_requirements, experiences, contact_information, } = jobs.find((job) => job.id == jobId);
    console.log(jobs);
    return (
        <div className="p-5 ">
            <div className="text-center my-14">
                <h2 className="text-4xl font-extrabold">Job Details</h2>
            </div>

            <div className="grid md:grid-cols-5 ">
                <div className="md:col-span-3 text-base space-y-6 p-2">
                    <p className="text-justify"><span className="font-extrabold">Job Description: </span><span className="text-primary-color">{job_description}</span></p>
                    <p className="text-justify "><span className="font-extrabold">Job Description: </span><span className="text-primary-color">{job_responsibility}</span></p>

                    <div>
                        <p className="font-extrabold">Education Requirements:</p>
                        <p className="text-primary-color">{educational_requirements}</p>
                    </div>

                    <div>
                        <p className="font-extrabold">Experiences:</p>
                        <p className="text-primary-color">{experiences}</p>
                    </div>
                </div>
                <div className="md:col-span-2 p-2 md:ml-5">
                    <div className="bg-[#f4f2ff] p-6 rounded">
                        <div  className="space-y-4">
                            <h4 className="font-extrabold text-xl">Job Details</h4>
                            <hr className="my-3" />
                            <p className="text-xl"> <FontAwesomeIcon icon={faSackDollar} /> <span className=" font-bold">Salary:</span> <span className="text-primary-color">{salary} (Per Month)</span></p>
                            <p className="text-xl"> <FontAwesomeIcon icon={faSheetPlastic} /> <span className=" font-bold">Job Title:</span> <span className="text-primary-color">{job_title}</span></p>

                        </div>

                        <h4 className="font-extrabold text-xl mt-6">Contact Information</h4>
                        <hr className="my-3" />
                        <div className="space-y-4">
                            <p className="text-xl"> <FontAwesomeIcon icon={faPhone} /> <span className=" font-bold">Phone:</span> <span className="text-primary-color">{contact_information.phone}</span></p>
                            <p className="text-xl"> <FontAwesomeIcon icon={faEnvelope} /> <span className=" font-bold">Email:</span> <span className="text-primary-color">{contact_information.email}</span></p>
                            <p className="text-xl"> <FontAwesomeIcon icon={faLocationDot} /> <span className=" font-bold">Address:</span> <span className="text-primary-color">{contact_information.address}</span></p>

                        </div>
                    </div>

                    <button className="bg-gradient-to-r from-primary-first to-primary-second md:w-full py-2 rounded mt-5 text-white">Apply Now</button>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;