import React, { useEffect, useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label }) => {

    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);


return (
	<div className="container">
	<div className="toggle-switch">
		<input type="checkbox" className="checkbox"
			name={label} id={label} />
		<label className="label" htmlFor={label}  onClick={toggleTheme}>
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>
	</div>
);
};

export default ToggleSwitch;
