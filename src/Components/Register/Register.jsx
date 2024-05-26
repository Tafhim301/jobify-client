import { Link, useNavigate } from "react-router-dom";
import loginImg from '../../assets/Login.jpg'
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useDynamicTitle from "../../hooks/useDynamicTitle";
import Footer from "../Shared/Footer/Footer";


const Register = () => {
    useDynamicTitle("Jobify | Register");
    const { signUp, setProfile, googleContinue } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        signUp(email, password)
            .then(result => {
                const user = result.user;
                setProfile(name, photo)
                    .then(() => {

                    })
                    .catch(() => {

                    })

                Swal.fire({
                    title: "Good job!",
                    text: "Login Successful",
                    icon: "success"
                });
                navigate(location.state ? location?.state : '/');

                console.log(user)


            })

            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
                return Swal.fire({
                    title: "Oops...",
                    text: `${error.message}`,
                    icon: "error"
                });
            });


    }


    const handleContinueGoogle = () => {
        googleContinue()
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "Login Successful",
                    icon: "success"
                });
                navigate(location?.state ? location?.state : '/');

                console.log(res.user)
            })
            .catch(error => {
                Swal.fire({
                    title: "Oops...",
                    text: `${error.message}`,
                    icon: "error"
                });
            })

    }

    return (
        <div >
            <Navbar></Navbar>

            <div className=' p-5 '>

                <div className='text-center py-10'>
                    <h2 className="text-4xl  font-bold">Register Now</h2>
                </div>

                <div className=" min-h-screen flex  justify-center">



                    <div className="">



                        <div className="flex p-5 rounded-lg flex-col md:flex-row  w-full  shadow-2xl bg-base-100">
                            <div className='w-1/2 hidden md:block '>
                                <img className='' src={loginImg} alt="" />
                            </div>
                            <div className='md:border-l p-2 md:w-1/2'>
                                <form onSubmit={handleRegister} className="  card-body">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register</button>
                                    </div>

                                </form>
                                <div className='text-center -mt-5 mb-5'><p className='font-medium text-lg'>Already have an Acount?<Link to={'/login'} className='text-blue-600'>Login </Link></p>
                                    <h2 className="text-lg -mt-2 font-bold text-center">or</h2>
                                    <p className='font-medium text-lg'>Continue With <button className='text-blue-600' onClick={handleContinueGoogle}>Google</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;