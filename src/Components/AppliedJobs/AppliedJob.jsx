import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';


const AppliedJob = ({ appliedJob }) => {
    const { jobId } = appliedJob;
    const axiosSecure = useAxios()
    const [job, setJob] = useState({});
    useEffect(() => {
        axiosSecure.get(`/job/${jobId}`)
            .then(res => setJob(res.data[0]))
    }, [axiosSecure,jobId])
    const { picture, title, name, salary, category, jobPostingDate, jobDeadline,  } = job;
    console.log(job);

    return (
        <tr>

            <td><img className='w-16 h-10 rounded-md' src={picture} alt="" /></td>
            <td>{name}</td>
            <td>{title}</td>
            <td>{jobPostingDate}</td>
            <td>{jobDeadline}</td>
            <td>{category}</td>
            <td>{salary}</td>
           
            
        </tr>
    );
};

AppliedJob.propTypes = {
    appliedJob: PropTypes.object
}

export default AppliedJob;