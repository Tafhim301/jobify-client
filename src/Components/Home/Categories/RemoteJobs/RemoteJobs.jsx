import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import SingleJob from "../SingleJob/SingleJob";


const RemoteJobs = () => {
    const [categoryJobs,setCategoryJobs] = useState([]);
    const axiosSecure = useAxios();
    useEffect(()=>{
        axiosSecure('/jobs/remote')
        .then(res=>setCategoryJobs(res.data));

    },[axiosSecure])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
               categoryJobs.length > 0 ?categoryJobs.map((singleJob,idx) => <SingleJob key={idx} singleJob={singleJob}></SingleJob>):''
            }
            
        </div>
    );
};

export default RemoteJobs;