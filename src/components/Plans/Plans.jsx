import { GiHeartPlus } from "react-icons/gi";
import "./Plans.css";
import whiteTick from '../../assets/whiteTick.png'
import { FaCrown } from "react-icons/fa";
import { IoBarbellSharp } from "react-icons/io5";
const Plans = () => {
    return (
        <div className="Plans-container">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header">
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITHUS</span>
            </div>
            {/* Plans Card */}
            <div className="plans" id="plans">
                <div className="plan">
                    <GiHeartPlus />
                    <span>BASIC PLAN</span>
                    <span>$ 25</span>
                    <div className="features">
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span>2 hours of excercises</span>
                        </div>
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span>Free consultaion to coaches</span>
                        </div>
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                                <span>Access to The Community</span>
                        </div>
                    </div>
                    <div>
                        <span>See more benefits -&gt;</span>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
                <div className="plan">
                    <FaCrown />
                    <span>PREMIUM PLAN</span>
                    <span>$ 30</span>
                    <div className="features">
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span>5 hours of excercises</span>
                        </div>
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span>Free consultaion of Coaches</span>
                        </div>
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                                <span>Access minibar</span>
                        </div>
                    </div>
                    <div>
                        <span>See more benefits -&gt;</span>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
                <div className="plan">
                <IoBarbellSharp />
                    <span>PRO PLAN</span>
                    <span>$ 45</span>
                    <div className="features">
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span>8 hours of excercises</span>
                        </div>
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                            <span>Consultation of Private Coach</span>
                        </div>
                        <div className="feature">
                            <img src={whiteTick} alt="" />
                                <span>Free Fitness Merchandises</span>
                        </div>
                    </div>
                    <div>
                        <span>See more benefits -&gt;</span>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default Plans;
