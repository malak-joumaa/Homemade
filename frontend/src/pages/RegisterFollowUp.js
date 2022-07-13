import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterFollowUp = () => {
  const [stateNb, setStateNb] = useState(1);

  return (
    <div>
      <div className="follow-up-div">
        {/* Links to Skip or move to the next page */}
        <Link to="/opening-hours" className="skip">
          Skip
        </Link>
        <Link to="/opening-hours" className="next">
          Next -{">"}
        </Link>
      </div>
    </div>
  );
};

export default RegisterFollowUp;
