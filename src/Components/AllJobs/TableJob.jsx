
import PropTypes from "prop-types";
import AllJob from "./AllJob";


const TableJob = ({jobs}) => {
    return (
        <div className="overflow-x-auto">
                <table className="table table-xs md:table-lg ">
                    <thead>
                        <tr>

                            <th>Posted By</th>
                            <th>Job Title</th>
                            <th>Posted On</th>
                            <th>Application Deadline</th>
                            <th>Salary Range</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs ? jobs.map(job => <AllJob key={job._id} job={job}></AllJob>) : ""
                        }


                    </tbody>

                </table>
            </div>
    );
};

TableJob.propTypes ={
    jobs: PropTypes.array,
}

export default TableJob;