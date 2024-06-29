import './Programs.css'
import Arrow from '../../assets/rightArrow.png'
import { IoBarbell } from 'react-icons/io5'
import { FaFireFlameCurved, FaPersonRunning } from 'react-icons/fa6'
import { LuHeartPulse } from 'react-icons/lu'

const Programs = () => {
    return (
        <div className='Programs' id='programs'>
            <div className="programs-header">
                <span className="stroke-text">Explore our</span>
                <span>Programs</span>
                <span className="stroke-text">to shape you</span>
            </div>

            <div className="program-categories">
                    <div className="category">
                        <IoBarbell />
                        <span>Strength Training</span>
                        <span>In this program, you are trained to improve your strength through many exercises.</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="category">
                        <FaPersonRunning />
                        <span>Cardio Training</span>
                        <span>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="category">
                        <FaFireFlameCurved />
                        <span>Fat Burning</span>
                        <span>This program is suitable for you who wants to get rid of your fat and lose their weight.</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className="category">
                        <LuHeartPulse />
                        <span>Health Fitness</span>
                        <span>This programs is designed for those who exercises only for their body fitness not body building.</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default Programs
