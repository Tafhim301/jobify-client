import PropTypes from 'prop-types'
import MyJob from './MyJob';

const MyJobsTable = ({jobs}) => {
    return (
        <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>

                            <th>Posted By</th>
                            <th>Job Title</th>
                            <th>Posted On</th>
                            <th>Application Deadline</th>
                            <th>Salary Range</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs ? jobs.map(job => <MyJob key={job._id} job={job}></MyJob>) : ""
                        }


                    </tbody>

                </table>
            </div>
    );
};

MyJobsTable.propTypes={
    jobs: PropTypes.array,
}
export default MyJobsTable;