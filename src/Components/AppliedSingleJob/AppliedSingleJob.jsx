
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AppliedSingleJob = ({ job }) => {
    const {id, logo, company_name, job_title, job_type, remote_or_onsite, location, salary } = job;
    console.log(job);
    return (
        <div className=''>

            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                <figure className='md:w-52 w-full mx-auto bg-slate-100 p-5'>
                    <img
                        src={logo}
                        alt="Album" />
                </figure>
                <div className="card-body flex justify-between md:flex-row items-center">
                    <div>
                        <div className="space-y-3">
                            <h2 className="text-2xl font-extrabold">{job_title}</h2>
                            <p className='text-primary-color font-semibold text-xl'>{company_name}</p>
                            <div className='space-x-2'>

                                <button className='border border-primary-first text-primary-first px-3 py-1 rounded text-base font-semibold ' disabled="disabled">{remote_or_onsite}</button>
                                <button className='border border-primary-first text-primary-first px-3 py-1 rounded text-base font-semibold' disabled="disabled">{job_type}</button>

                            </div>

                            <div className='text-primary-color'>
                                <p><FontAwesomeIcon icon={faLocationDot} /> {location} <span className='ml-3'><FontAwesomeIcon icon={faSackDollar} /> Salary:{salary}</span></p>
                            </div>

                        </div>
                    </div>
                    <div className="">
                    <Link to={`/job-details/${id}`}> <button className="bg-gradient-to-r from-primary-first to-primary-second px-3 py-1 rounded text-white">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

AppliedSingleJob.propTypes = {
    job: PropTypes.object.isRequired
};

export default AppliedSingleJob;