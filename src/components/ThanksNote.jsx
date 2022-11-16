/** @format */
import { Link } from "react-router-dom";
import "../css/ThanksNote.css";

const ThanksNote = () => {
  return (
    <div className="content">
      <div className="wrapper-1">
        <div className="wrapper-2">
          <h1>Thank you !</h1>
          <p>Thanks for subscribing Music World </p>
          <p>You will receive a confirmation email soon.</p>
          <Link to="/">
            <button className="go-home">go home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThanksNote;
