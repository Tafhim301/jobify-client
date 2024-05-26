import PropTypes from 'prop-types'
import { useContext, } from 'react';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <span className='felx justify-center items-center loading-spinner loading'></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location?.pathname} to={'/login'}></Navigate>
        
    )

};


PrivateRoutes.propTypes =
{
    children : PropTypes.node,
}
export default PrivateRoutes;