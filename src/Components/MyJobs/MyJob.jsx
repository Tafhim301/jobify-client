import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";


const MyJob =  ({job}) => {
   const axiosSecure = useAxios()
    const {_id,title,name,salary,jobPostingDate,jobDeadline,} = job;
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
                axiosSecure.delete(`/myJob/${id}`)
                .then(res=>{

                    console.log(res.data)
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        location.reload();
                    }
                    else{
                        Swal.fire({
                            icon:"error",
                            title:"Opps!..",
                            text: "Sorry Something Went Wrong. Please Try Again"
                        })
        
                    }
                    
                })
            }
          });

    }
     return (
         <tr>
 
             <td>{name}</td>
             <td>{title}</td>
             <td>{jobPostingDate}</td>
             <td>{jobDeadline}</td>
             <td>{salary}</td>
             <td><Link to={`/updateJob/${_id}`}><button className="btn text-white btn-accent">Update</button></Link></td>
             <td><button onClick={() =>handleDelete(_id)} className="btn btn-error text-white">Delete</button></td>
         </tr>
     );
 };
 
 MyJob.propTypes ={
     job: PropTypes.object,
 }

export default MyJob;