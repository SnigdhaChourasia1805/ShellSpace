
import { NavLink } from "react-router-dom";
import Graph from "./GraphLeaderBoard";
// import ContainerItem from "./LeaderBoardAchievements";
import { IoStar } from "react-icons/io5";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaMedal } from "react-icons/fa6";
import ChallengesLeaderBoard from "./ChallengesLeaderBoard";
import "../LeaderBoard/App.css"

function GraphLeaderBoard() {
    return (
        <>

            <div className="page-container">
                {/* Left Side */}
                <div className="left-side-leaderboard">
                    <div className="name">
                        <h1>John Doe</h1>
                        <p>Developer</p>
                        <p>React Enthusiast</p>
                        <button className="action-button button">
                            <NavLink />Edit Profile
                        </button>
                    </div>
                    <div className="three-containers">
                        <div className="container-leaderboard"> Challenges Completed
                            <p>22</p>
                        </div>
                        <div className="container-leaderboard"> Current Streak
                            <p>222</p>
                        </div>
                        <div className="container-leaderboard"> Global Rank
                            <p>2222</p>
                        </div>
                    </div>
                    <Graph />
                </div>

                {/* Right Side */}
                <div className="right-side-leaderboard">
                    <div className="achievement">
                    <div className="container-items--leaderboard">
                        <p className="achievement-logo"><IoStar size={30} /></p>
                        <p>First Win</p>
                    </div>
                    <div className="container-items--leaderboard">
                        <p className="achievement-logo"><HiMiniTrophy size={30} /></p>
                        <p> Top 500</p>
                    </div>
                    <div className="container-items--leaderboard">
                        <p className="achievement-logo"><FaMedal size={30} /></p>
                        <p>Expert</p>
                    </div>
                    </div>
                   
                    <div className="challengeleaderboard">
                        <ChallengesLeaderBoard />
                    </div>

                </div>

            </div>

        </>

    );
}

export default GraphLeaderBoard;
