import PropTypes from 'prop-types';
import {  useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';
const AllJob = ({ job }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleViewDetails = _id => {
        if (!user) {
            Swal.fire({
                icon: 'warning',
                title: 'sorry...',
                text: 'You have to login first to view details'
            });





        }
        navigate(`/job/${_id}`);
    }

    const { _id, title, name, salary, jobPostingDate, jobDeadline } = job;
    return (
        <motion.tr
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <td>{name}</td>
            <td>{title}</td>
            <td>{jobPostingDate}</td>
            <td>{jobDeadline}</td>
            <td>{salary}</td>
            <td>

                <button onClick={() => handleViewDetails(_id)} className="btn btn-primary">Details</button>

            </td>
        </motion.tr>
    );
};

AllJob.propTypes = {
    job: PropTypes.object.isRequired,
};

export default AllJob;
