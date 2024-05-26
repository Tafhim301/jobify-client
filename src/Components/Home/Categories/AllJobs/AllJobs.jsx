import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import SingleJob from "../SingleJob/SingleJob";


const AllJobs = () => {
    const [allJobs,setAllJobs] = useState([]);
    const axiosSecure = useAxios();
    useEffect(() =>{
        axiosSecure.get('/allJobs')
        .then(res =>{ 
            setAllJobs(res.data)
            console.log(res.data)
        });
  
    },[axiosSecure])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                allJobs.length > 0?allJobs.map((singleJob,idx) => <SingleJob key={idx} singleJob={singleJob}></SingleJob>):""
            }

            
        </div>
    );
};

export default AllJobs;