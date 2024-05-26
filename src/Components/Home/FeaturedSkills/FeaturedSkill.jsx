import PropTypes from 'prop-types'
const FeaturedSkill = ({ skill }) => {
    const { name, icon, description, level } = skill;
    return (
        <div className='shadow-lg  rounded-lg'>
            <img className='w-full border-b  h-2/3 rounded-t-lg' src={icon} alt="" />
            <div className='flex justify-between'>
                <div className='p-2 '>
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p>{description}</p>
                </div>
                <div className='p-2'>
                    <button className="btn">{level}</button>
                </div>
            </div>

        </div>
    );
};


FeaturedSkill.propTypes = {
    skill: PropTypes.object
}
export default FeaturedSkill;