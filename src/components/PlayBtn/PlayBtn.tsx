import { FC, useContext } from "react";
import { appContext } from "../../context";
import styles from "./PlayBtn.module.scss";

const PlayBtn: FC = () => {
	const { sound } = useContext(appContext);

	const handleClick = () => {
		const audio = new Audio(sound);
		audio.play();
	};
	return sound ? (
		<button type="button" className={styles.play} onClick={handleClick}>
			▶
		</button>
	) : null;
};

export default PlayBtn;
