import { PiSpeedometerFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
function ChallengesLeaderBoard() {
  return (
    <div className="additional-container">
      <h2>Recommended Challenges</h2>

      {/* Three Inner Containers */}
      <div className="three-inner-containers">
        <div className="inner-container">
          <h3> <PiSpeedometerFill  color="red" size={20} />Vue.js State Management</h3>
          <p>Master Vuex and Pinia.</p>
          <button className="button"><NavLink>View Details </NavLink></button>
        </div>
        <div className="inner-container">
          <h3> <PiSpeedometerFill  color="orange" size={20} />GraphQL API Design</h3>
          <p>Build Efficient APIs.</p>
          <button className="button">
            <NavLink>View Details </NavLink></button>
        </div>
        <div className="inner-container">
          <h3>  <PiSpeedometerFill  color="green" size={20} />Next.js Routing</h3>
          <p>Learn app routing.</p>
          <button className="button"><NavLink>View Details </NavLink></button>
        </div>
      </div>
    </div>
  );
}
export default ChallengesLeaderBoard;

