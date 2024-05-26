import PropTypes from 'prop-types'
import { useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SingleJob = ({ singleJob }) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleViewDetails = _id =>{
        if(!user){
             Swal.fire({
                icon:'warning',
                title: 'sorry...',
                text:'You have to login first to view details'
            });
            
          
            
            
            
        }
        navigate(`/job/${_id}`);
       
       
    }
    const { _id, title, name, salary, applicants, jobPostingDate, jobDeadline } = singleJob;
    return (
        <div>
            <div className="card rounded-none md:rounded-lg  bg-base-100 shadow-xl">

                <div className="card-body">
                    <h2 className="">Job Title: <span className='font-bold'>{title}</span></h2>
                    <p>Posted By: <span className='font-bold'>{name}</span></p>
                    <p>Posted On: <span className='font-bold'>{jobPostingDate}</span></p>
                    <p>Application Deadline: <span className='font-bold'>{jobDeadline}</span></p>
                    <p>Salary : <span className='font-bold'>{salary}</span></p>
                    <p>Job Applicants Number : <span className='font-bold'>{applicants}</span></p>
                    <div className="card-actions ">
                        <button onClick={()=>handleViewDetails(_id)} className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

SingleJob.propTypes = {
    singleJob: PropTypes.object
}

export default SingleJob;