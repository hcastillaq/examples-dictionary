import { useState } from "react";
import styles from "./ToggleTheme.module.scss";

const ToggleTheme = () => {
	const [theme, setTheme] = useState("light");
	const handleClick = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		document.documentElement.setAttribute("data-theme", newTheme);
	};

	return (
		<div className={`${styles.toggleBtn} flex justify-end mb3`}>
			<button onClick={handleClick} type="button" className="pointer">
				{theme === "light" ? "☀" : "☪"}
			</button>
		</div>
	);
};

export default ToggleTheme;
