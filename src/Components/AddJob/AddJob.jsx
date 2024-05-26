import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import Footer from "../Shared/Footer/Footer";
import useDynamicTitle from "../../hooks/useDynamicTitle";


const AddJob = () => {
    useDynamicTitle("Jobify | Applied Job");
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxios();
    const [slectedCategory, setSelectedCategory] = useState(null);
    const [postingDate, setPostingDate] = useState(new Date());
    const [deadline, setDeadline] = useState(new Date());


 
    const handleAddJob = e =>{
        e.preventDefault();
        const form = e.target;
        const picture = form.picture.value;
        const title = form.title.value;
        const name = form.name.value;
        const salary = form.salary.value;
        const applicants = parseInt(form.applicants.value);
        const description = form.description.value;
        const category = slectedCategory;
        const jobPostingDate = postingDate;
        const jobDeadline = deadline;
        const email = user?.email;
        const job = {picture,title,name,salary,category,applicants,jobPostingDate,jobDeadline,description,email}


       
       axiosSecure.post('/addJob',job)
       .then(res =>{
        console.log(res.data);
        Swal.fire({
            icon: 'success',
            title: 'Good Job!',
            text:"Your Job Has Been Added Successfully"

        });
    })
    
    }


    const onOptionChangeHandler = (event) => {
        setSelectedCategory(event.target.value);
        
    };
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl font-bold text-center py-5">Add A Job</h2>
            </div>
            <div className="">
                <div className=" ">

                    <div className="   w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleAddJob} className="card-body ">
                            <div className="md:grid  grid-cols-2 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL of the Job</span>
                                    </label>
                                    <input type="url" name="picture" placeholder="Picture URL of the Job" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Title</span>
                                    </label>
                                    <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="User Name" defaultValue={user?.displayName} className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Job Category</span>
                                    </label>
                                    <div className="border w-full border-gray-300 rounded-lg">
                                        <select onChange={onOptionChangeHandler} className="select " name="category" id="" form="">
                                            <option disabled selected>Select Job Category</option>
                                            <option value="onSite">On Site</option>
                                            <option value="remote">Remote</option>
                                            <option value="partTime">Part Time</option>
                                            <option value="hybrid">Hybrid</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Salary Range</span>
                                    </label>
                                    <input type="text" name="salary" placeholder="Salary Range" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="Job Description" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Posting Date</span>
                                    </label> 
                                  
                                    <DatePicker className="border w-full text-gray-400 border-gray-300 py-3 px-5 rounded-lg" selected={postingDate} onChange={(date) => setPostingDate(date)} />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Application Deadline</span>
                                    </label>
                                   
                                    <DatePicker className="border w-full text-gray-400 border-gray-300 py-3 px-5 rounded-lg" selected={deadline} onChange={(date) => setDeadline(date)} />
                                </div>
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text">Job Applicants Number</span>
                                    </label>
                                   
                                    <input type="number" name="applicants" placeholder="Job Applicants Number" className="input input-bordered" readOnly value={0} required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Add Job</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddJob;