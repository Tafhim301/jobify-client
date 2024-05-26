import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/job-seeker.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovering, SetIsHovering] = useState(false);
    const handleMouseHover = () => {
        SetIsHovering(true);
    }
    const handleMouseOut = () => {
        SetIsHovering(false);
    }
    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(() => {

            })
    }
    

    const navLinks =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/allJobs'}>All Jobs</NavLink></li>
            {
                user ?
                    <>
                        <li><NavLink to={'/addJob'}>Add Job</NavLink></li>
                        <li><NavLink to={'/appliedJobs'}>Applied Jobs</NavLink></li>
                        <li><NavLink to={'/myJobs'}>My Jobs</NavLink></li>

                    </>
                    :
                    ''
            }

            <li><NavLink to={'/blogs'}>Blogs</NavLink></li>


        </>
    return (
        <div className="navbar sticky z-10 top-0 bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52">
                        {
                            navLinks

                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className='w-8' src={logo} alt="" />Jobify</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }

                </ul>
            </div>
            <div className='navbar-end'>
                {
                    user ?
                        <div className='flex gap-2'>
                            <div className='flex justify-center items-center'>
                                {
                                    isHovering &&
                                    <div className=''>
                                        <p className="text-xl  font-bold">{user?.displayName}</p>
                                    </div>

                                }
                            </div>


                            <img  onMouseOut={handleMouseOut} onMouseOver={handleMouseHover} className={`w-12 rounded-full hidden md:flex`} src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut} className='btn'>Log Out</button>


                        </div>

                        : <div className="">
                            <Link to={'/login'}><button className='btn '>Login</button></Link>
                        </div>}
            </div>
        </div>
    );
};

export default Navbar;