import { useContext, useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
import MyJobsTable from "./MyJobsTable";
import Footer from "../Shared/Footer/Footer";
import useDynamicTitle from "../../hooks/useDynamicTitle";



const MyJobs = () => {
    useDynamicTitle("Jobify | My Jobs");
    const axiosSecure = useAxios();
    const { user } = useContext(AuthContext);
    const [myJobs, setMyJobs] = useState([])
    useEffect(() => {
        axiosSecure.get(`/myJobs?email=${user?.email}`)
            .then(res => setMyJobs(res.data))
    }, [user?.email, axiosSecure])

    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    myJobs.length > 0 ?

                        <MyJobsTable jobs={myJobs}></MyJobsTable>
                        :
                        <div>
                            <h2 className="text-4xl text-center  font-bold">Sorry You Have Not Added Any Job Yet</h2>
                        </div>
                }

            </div>

            <div className='mt-96 mb-0'>
                <Footer></Footer>

            </div>

        </div>
    );
};

export default MyJobs;