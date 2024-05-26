
import { useContext, useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import useAxios from "../../hooks/useAxios";

import AppliedJobTable from "./AppliedJobTable";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const AppliedJobs = () => {
    useDynamicTitle("Jobify | Applied Jobs");
    const [data, setData] = useState([]);
    const [matchedData, setMatchedData] = useState([]);
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxios();
    useEffect(() => {
        axiosSecure.get(`/appliedJobs?email=${user?.email}`)
            .then(res => {
                setData(res.data);
                setMatchedData(res.data)
                console.log(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [axiosSecure, user?.email]);
    

    const onOptionChangeHandler = (event) => {
        const selectedCategory = event.target.value.toLowerCase();
        console.log(selectedCategory)
        if (selectedCategory === 'all') {
            setMatchedData(data);

        } 
        else {
          
            setMatchedData(data.filter(job => job.category.toLowerCase().includes(selectedCategory)));
        }
    };
    return (
        <div>
            <Navbar></Navbar>

            <div className="my-1">
                <label className=" mx-auto w-4/5 border-2 rounded-lg flex items-center gap-2">
                    <select onChange={onOptionChangeHandler} className="select w-full " name="category" id="" form="">
                        <option selected value='all'>All Category</option>
                        <option value="onSite">On Site</option>
                        <option value="remote">Remote</option>
                        <option value="partTime">Part Time</option>
                        <option value="hybrid">Hybrid</option>

                    </select>
                   
                </label>

            </div>
            <div>
                {data.length > 0 &&
                    <AppliedJobTable jobs={matchedData}></AppliedJobTable>

                }
                
                {matchedData.length === 0 &&
                    <div>
                        <h2 className="text-4xl font-bold text-center">No data found about selected category</h2>
                    </div>

                }



            </div>
            <div className="mb-0 mt-96">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default AppliedJobs;