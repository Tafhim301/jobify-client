import { useLoaderData } from "react-router-dom";

import Navbar from "../Shared/Navbar/Navbar";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import useDynamicTitle from "../../hooks/useDynamicTitle";



const UpdateMyJob = () => {
    useDynamicTitle("Jobify | Update Job");
    const data = useLoaderData();
    const job = data[0];
    const {_id,picture,category,title,name,salary,applicants,description} = job;
    
   
    const axiosSecure = useAxios();
    const [slectedCategory, setSelectedCategory] = useState('onSite');
    const [postingDate, setPostingDate] = useState(new Date());
    const [deadline, setDeadline] = useState(new Date());


    const onOptionChangeHandler = (event) => {
        setSelectedCategory(event.target.value);
        
    };
 
    const handleUpdateJob = e =>{
        e.preventDefault();
        const form = e.target;
        const newPicture = form.picture.value;
        const newTitle = form.title.value;
        const newName = form.name.value;
        const newSalary = form.salary.value;
        const newApplicants = parseInt(form.applicants.value);
        const newDescription = form.description.value;
        const newCategory = slectedCategory;
        const newJobPostingDate = postingDate;
        const newJobDeadline = deadline;
        
        const newJob = {newPicture,newName,newTitle,newSalary,newApplicants,newDescription,newCategory,newJobPostingDate,newJobDeadline}


       
       axiosSecure.put(`/myJob/${_id}`,newJob)
       .then(res =>{
        console.log(res.data);
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:"Your Job Has Been Updated Successfully"

        });
    })
    
    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl font-bold text-center py-5">Update A Job</h2>
            </div>
            <div className="">
                <div className=" ">

                    <div className="   w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdateJob} className="card-body ">
                            <div className="md:grid  grid-cols-2 gap-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Picture URL of the Job</span>
                                    </label>
                                    <input type="url" defaultValue={picture} name="picture" placeholder="Picture URL of the Job" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Title</span>
                                    </label>
                                    <input type="text" defaultValue={title} name="title" placeholder="Job Title" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="User Name" defaultValue={name} className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Job Category</span>
                                    </label>
                                    <div className="border w-full border-gray-300 rounded-lg">
                                        <select defaultValue={category} onChange={onOptionChangeHandler} className="select " name="category" id="" form="">
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
                                    <input type="text" defaultValue={salary} name="salary" placeholder="Salary Range" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Description</span>
                                    </label>
                                    <input type="text" defaultValue={description} name="description" placeholder="Job Description" className="input input-bordered" required />
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
                                   
                                    <input type="number" name="applicants" defaultValue={applicants} placeholder="Job Applicants Number" className="input input-bordered" readOnly value={applicants} required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Update Job</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

};

export default UpdateMyJob;