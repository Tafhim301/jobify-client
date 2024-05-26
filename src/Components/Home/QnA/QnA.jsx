import { useEffect, useState } from "react";
import faqImg from '../../../assets/faq.jpg';


const QnA = () => {
    const [qaPairs, setQaPairs] = useState([])
    useEffect(() => {
        fetch('faq.json')
            .then(res => res.json())
            .then(data =>

                setQaPairs(data))
    }, [])
    return (
        <div className="">
            <div>
                <h2 className="text-4xl font-bold text-center">FAQ About Us</h2>
            </div>

            <div className='flex '>
                <div className='my-10 lg:w-1/2'>
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
                <div className="hidden lg:block md:w-1/2 ">
                    <img src={faqImg} alt="" />
                </div>
            </div>


        </div>
    );
};

export default QnA;