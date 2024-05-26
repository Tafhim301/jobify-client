import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";


const Layout = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className="flex justify-center items-center mt-10 ">
                <h2 className='loading  loading-spinner  text-center '></h2>
            </div>

        )

    }
    return (
        <div>
            <div className="">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Layout;