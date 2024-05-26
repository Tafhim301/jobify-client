import { useEffect, useState } from "react";
import FeaturedSkill from "./FeaturedSkill";


const FeaturedSkills = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data =>

                {
                    setSkills(data);
                    console.log(data)
                })
    }, [])
    return (
        <div className="my-10 p-5">
            <div>
                <h2 className="text-3xl text-center font-bold">Featured Skills</h2>
                <p className="text-center">Let us discuss about most demanded skills in our site</p>

            </div>
           <div className="md:grid my-2 md:grid-cols-2 gap-5 lg:grid-cols-4">
           {
                skills.length > 0 &&
                skills.map(skill => <FeaturedSkill skill={skill} key={skill.id}></FeaturedSkill>)
            }
           </div>

        </div>
    );
};

export default FeaturedSkills;