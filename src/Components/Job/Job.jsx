
import PropTypes from 'prop-types';

const Job = ({ job }) => {
    console.log(job);
    return (
        <div>
            <img src={job.logo} alt=""  />
            
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
};

export default Job;