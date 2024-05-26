import Navbar from "../../Shared/Navbar/Navbar";
import banner from '../../../assets/banner.jpg'
import { Link } from "react-router-dom";
import CategoryTab from "../categoryTab/categoryTab";
import Footer from "../../Shared/Footer/Footer";
import QnA from "../QnA/QnA";
import FeaturedSkills from "../FeaturedSkills/FeaturedSkills";
import useDynamicTitle from "../../../hooks/useDynamicTitle";





const Home = () => {
    useDynamicTitle("Jobify | Home");

    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:mx-10 md:mx-5 ">
                <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="hero-overlay bg-gradient-to-r from-gray-600"></div>
                    <div className="text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Searching For a Job?</h1>
                            <p className="mb-5">You are at a exact right place. Explore all the jobs from our library</p>
                            <label className="input input-bordered flex w-4/5 mx-auto items-center gap-2">
                                <input type="text" className="grow" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                            <Link to={'/allJobs'}><button className="btn mt-5 btn-primary">See All Jobs</button></Link>
                        </div>
                    </div>
                </div>
                <CategoryTab></CategoryTab>
                <FeaturedSkills></FeaturedSkills>
                <QnA></QnA>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Home;