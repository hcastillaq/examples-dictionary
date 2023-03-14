import { FC, useContext } from "react";
import { appContext } from "../../context";
import styles from "./Phonetic.module.scss";

const Phonetic: FC = () => {
	const { query, phonetic } = useContext(appContext);
	return (
		<div className={styles.query}>
			<div>
				<h1>{query.toLocaleLowerCase()}</h1>
				<p>{phonetic}</p>
			</div>
		</div>
	);
};

export default Phonetic;
