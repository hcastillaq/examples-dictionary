import { FC } from "react";
import Divider from "../Divider/Divider";
import styles from "./Title.module.scss";

interface Props {
	title: string;
}
const Title: FC<Props> = ({ title }) => {
	return (
		<div className={styles.title}>
			<span>{title}</span>
			<Divider />
		</div>
	);
};

export default Title;
