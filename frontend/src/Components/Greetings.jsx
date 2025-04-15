import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Greetings(props) {
  const welcomeMessage = (
    <div className="flex justify-center items-center bg-slate-900 h-12">
      <p className=" text-2xl text-white tracking-wider">
        Welcome {props.username}
      </p>
    </div>
  );

  const loginPrompt = (
    <div className="flex justify-center items-center bg-slate-900 h-12  ">
      <p className="text-2xl text-white tracking-wider">
        Please
        <Link to="/signuplogin">
          <span className=" text-blue-500 underline"> Log in </span>
        </Link>
        to continue
      </p>
    </div>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

Greetings.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default Greetings;
