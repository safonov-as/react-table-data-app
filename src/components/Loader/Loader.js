import React from "react";

import "./Loader.css";

const Loader = () => {
  return (
<div className="lds-css ng-scope">
<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loader;