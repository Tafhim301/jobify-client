
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import useDynamicTitle from '../../hooks/useDynamicTitle';



const BlogPage = () => {
    useDynamicTitle("Jobify | Blogs");
    const qaPairs = useLoaderData()
    console.log(qaPairs)



    return (
        <div>
            <Navbar></Navbar>
            <div className="md:mx-10">
                <h2 className="text-4xl font-bold text-center">Read Our Blogs</h2>
                <div className=''>
                    <div className='mt-2'>
                        {
                            qaPairs &&
                            qaPairs.map((pair, index) => (
                                <div key={index} className="collapse rounded-none border collapse-plus bg-base-200">
                                    <input type="radio" name="my-accordion-3" defaultChecked />
                                    <div className="collapse-title text-xl font-medium">
                                        {pair.question}
                                    </div>
                                    <div className="collapse-content">
                                        {pair.answer}
                                    </div>
                                </div>

                            ))}
                    </div>

                </div>
            </div>
            <div className='mt-20 relative -bottom-2' >
                <Footer ></Footer>
            </div>


        </div>

    );
};


export default BlogPage;
