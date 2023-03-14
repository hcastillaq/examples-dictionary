import { FC, useEffect, useRef, useState } from "react";
import svg from "./../../assets/search.svg";
import styles from "./Search.module.scss";

interface Props {
	search: (query: string) => void;
}
const Search: FC<Props> = (props) => {
	const [query, setQuery] = useState("");
	const refBtn = useRef<HTMLInputElement>(null);

	useEffect(() => {
		refBtn.current?.focus();
	}, []);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const input = form.elements[0] as HTMLInputElement;
		props.search(input.value);
	};

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.search}>
				<input
					ref={refBtn}
					type="text"
					placeholder="Search"
					value={query}
					onChange={handleInput}
				/>
				<button type="submit" disabled={!query.trim().length}>
					<img src={svg} alt="Search" />
				</button>
			</div>
		</form>
	);
};

export default Search;
