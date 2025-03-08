import { IoTerminal } from "react-icons/io5";
import { TbGraphFilled } from "react-icons/tb";
import { HiBookmarkSquare } from "react-icons/hi2";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
// import "./../../../COMPONENTS/UI/Home Page/App.css"

export const Features = () => {
    return (
        <div className="container-home-feature">
            <p>Features</p>
            <h1 className="main-heading">Our Amazing Features</h1>

            <div className="feature-container" >
                {/* Feature 1 */}
                <div className="feature" data-aos="fade-up" data-aos-delay="300">
                    <div className="logo">
                        <IoTerminal />

                    </div>
                    <div className="feature-description">
                        <h3 className="feature-heading"> Interactive Terminal</h3>
                        <p className="feature-para">
                            Practice commands in a real terminal environment with instant feedback.
                        </p>
                        <NavLink className="feature-button"> < BsArrowRightSquareFill size={35} /></NavLink>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="feature" data-aos="fade-up">
                    <div className="logo">
                        <HiBookmarkSquare />
                    </div>
                    <div className="feature-description">
                        <h3 className="feature-heading"> Challenge Library</h3>
                        <p className="feature-para">
                            Access hundreds of curated challenges across different difficulty levels.
                        </p>

                        <NavLink className="feature-button"> <BsArrowRightSquareFill size={35}/></NavLink>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="feature" data-aos="fade-up">
                    <div className="logo">
                        <TbGraphFilled />
                    </div>
                    <div className="feature-description">
                        <h3 className="feature-heading">Progress Tracking</h3>
                        <p className="feature-para">
                            Monitor your learning journey with detailed statistics and achievements.
                        </p>
                        <NavLink className="feature-button"> <BsArrowRightSquareFill size={35}/></NavLink>
                    </div>
                </div>
            </div>
        </div>

    );
};




