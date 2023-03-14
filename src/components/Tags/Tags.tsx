import { FC } from "react";
import styles from "./Tags.module.scss";

interface Props {
	tags: string[];
	title: string;
}
const Tags: FC<Props> = ({ tags, title }) => {
	return (
		<div className={styles.tags}>
			<span className={styles.title}>{title}</span>
			<div className="flex flex-wrap">
				{tags.map((tag, index) => {
					return (
						<span key={index + tag} className={`${styles.tag} ml2`}>
							{tag + (index < tags.length - 1 ? "," : "")}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default Tags;
