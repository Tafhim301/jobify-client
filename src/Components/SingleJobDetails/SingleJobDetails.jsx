
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import logo from '../../assets/job-seeker.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import useDynamicTitle from "../../hooks/useDynamicTitle";

import emailjs from '@emailjs/browser';


const SingleJobDetails = () => {
    useDynamicTitle("Jobify | Job Details");
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxios();
    const data = useLoaderData();
    const job = data[0];
    const { _id, picture, title, description, salary, applicants, email, jobDeadline,category } = job;
    
    const sendEmail = () => {
       
        const templateParams = {
          
            to_name: 'Recipient Name',
            reply_to: user.email,
            message: job.title
          
        };

  
        emailjs.send('service_17jg0iw', 'template_7yefh4t', templateParams, 'VFzLmQgXLsJnE00L2')
            .then((response) => {
                console.log('Email sent successfully:', response);
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    };

    console.log(job);
    const handleApplyJob = (id, email, jobDeadline) => {
        const currentDate = new Date();
        const deadlineDate = new Date(jobDeadline);


        if (currentDate > deadlineDate) {
            Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "The deadline for this job has passed."
            });
            return;
        }


        if (user.email === email) {
            return (
                Swal.fire({
                    icon: "error",
                    title: "Sorry...",
                    text: "You Can Not Apply For Your Own Job"

                })
            )
        }

        else {
            Swal.fire({
                input: "textarea",
                inputLabel: "Submit Your CV",
                inputPlaceholder: "Type your CV here...",
                inputAttributes: {
                    "aria-label": "Type your CV here"
                },
                showCancelButton: true,
                confirmButtonText: "Submit",
                cancelButtonText: "Cancel"   
            }).then((result) => {
              
                if (result.isConfirmed && result.value) {
                    const cvText = result.value; 
                    const application ={CV:cvText,applicantEmail:user?.email,jobId:id,category}
                    
                    axiosSecure.post(`/applyToJob`,application)
                    .then(res => {
                        console.log(res.data);
                        
                        
                        Swal.fire({
                            icon: "success",
                            title: "Your CV has been submitted!",
                            text: "A success mail has been sent to your email with additional informations"
                        });
                        sendEmail();
                        
                    })
                    .catch(()=>{
                        Swal.fire({
                            icon: "error",
                            title: "Sorry!",
                            text: "Something Went Wrong"
                        });
                    

                    })
                   
                }
                else{
                    
                    Swal.fire({
                        icon: "error",
                        title: "Sorry!",
                        text: "Please Try Again With Your CV"
                    });

                }
            });
        }






    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:mx-10 rounded-b-lg  mb-10 shadow-xl">
                <img className="w-full" src={picture} alt="" />
                <div className="px-3 py-10  flex justify-between">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">{title}</h2>
                        <p>description: <span className="font-bold">{description}</span></p>
                        <p>Salary: <span className="font-bold">{salary}</span></p>
                        <p>Total Applicants: <span className="font-bold">{applicants}</span></p>
                        <button onClick={() => {
                            handleApplyJob(_id, email, jobDeadline)

                        }} className="btn px-5 btn-primary">Apply</button>
                    </div>
                    <div>
                        <img className="w-16 p-2 rounded-lg shadow-lg  " src={logo} alt="" />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default SingleJobDetails;