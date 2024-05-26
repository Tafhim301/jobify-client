import { Link } from 'react-router-dom';
import errorImg from '../../assets/Error_Img.jpg'
import useDynamicTitle from '../../hooks/useDynamicTitle';

const ErrorPage = () => {
    useDynamicTitle("Jobify | Error");
    return (
        <div className='relative'>
            <img className='h-screen  w-screen' src={errorImg} alt="" />
            <div className='text-center -mt-12 mb-5'>
            <Link to={'/'}><button className="btn text-lg btn-neutral">Back To Home</button></Link>
            </div>

        </div>
    );
};

export default ErrorPage;