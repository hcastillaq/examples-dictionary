import { FC } from "react";
import { Definition } from "../../interfaces";
import styles from "./List.module.scss";
interface Props {
	title: string;
	items: Definition[];
}
const List: FC<Props> = ({ title, items }) => {
	return (
		<div className={styles.list}>
			<h3>{title}</h3>
			<ul>
				{items.map((item, index) => {
					return (
						<li key={index + new Date().getTime()}>
							<div className="flex flex-column">
								<span className="mb2">{item.definition}</span>
								{item.example && (
									<span className={styles.example}>{item.example}</span>
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
