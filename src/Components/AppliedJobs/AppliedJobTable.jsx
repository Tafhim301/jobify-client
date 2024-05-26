import PropTypes from "prop-types";
import AppliedJob from "./AppliedJob";

const AppliedJobTable = ({ jobs }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>

                        <th>Picture</th>
                        <th>Posted By</th>
                        <th>Job Title</th>
                        <th>Posted On</th>
                        <th>Application Deadline</th>
                        <th>Category</th>
                        <th>Salary Range</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                    jobs.length > 0 &&
                        jobs.map((datam, idx) => <AppliedJob key={idx} appliedJob={datam}></AppliedJob>)

                    }


                </tbody>

            </table>
        </div>
    );
};

AppliedJobTable.propTypes = {
    jobs: PropTypes.array,
}

export default AppliedJobTable;