import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Divider from "./components/Divider/Divider";
import List from "./components/List/List";
import NotFound from "./components/NotFound/NotFound";
import Phonetic from "./components/Phonetic/Phonetic";
import PlayBtn from "./components/PlayBtn/PlayBtn";
import Search from "./components/Search/Search";
import Tags from "./components/Tags/Tags";
import Title from "./components/Title/Title";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import { appContext } from "./context";
import { Meaning } from "./interfaces";
import { service } from "./service";

function App() {
	const [notFound, setNotFound] = useState(false);
	const [query, setQuery] = useState("computer");
	const [sound, setSound] = useState<string | undefined>(undefined);
	const [phonetic, setPhonetic] = useState<string>("");
	const [loading, setLoading] = useState(true);

	const [data, setData] = useState({
		meanings: [],
		sources: [],
	});

	const handleSearch = (query: string) => {
		setQuery(query);
		getData(query);
	};

	const getData = async (query: string) => {
		setNotFound(false);
		setLoading(true);
		try {
			const result = await service.get(query);
			let sound = result.phonetics.filter(
				(item: { audio: string }) =>
					item.audio.length && item.audio.includes("us"),
			)[0]?.audio;

			setSound(sound);
			setPhonetic(result.phonetic);
			setData({
				meanings: result.meanings,
				sources: result.sourceUrls,
			});
		} catch (error) {
			setNotFound(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		getData(query);
	}, []);

	const Content = () => {
		return (
			<>
				<div className="flex justify-between items-center">
					<Phonetic />
					<PlayBtn />
				</div>
				{data.meanings.map((item: Meaning, index: number) => {
					return (
						<div key={index + item.partOfSpeech}>
							<div className={index > 0 ? "mt4" : ""}>
								<Title title={item.partOfSpeech} />
							</div>
							<List title="Meaning" items={item.definitions} />
							{item.synonyms.length > 0 ? (
								<Tags title="Synonyms" tags={item.synonyms} />
							) : null}
							{item.antonyms.length > 0 ? (
								<Tags title="Antonyms" tags={item.antonyms} />
							) : null}
						</div>
					);
				})}
				<div>
					<Divider />
					<div className="mt3 mb4 ">
						<small>sources</small>
						<div className="flex flex-wrap mt2">
							{data.sources.map((item: string, index: number) => {
								return (
									<a
										href={item}
										target="_blank"
										rel="noreferrer"
										key={index + new Date().getTime()}
										className="mr2 text-gray"
									>
										<small>{item}</small>
									</a>
								);
							})}
						</div>
					</div>
				</div>
			</>
		);
	};

	return (
		<Container>
			<appContext.Provider value={{ query, sound, phonetic }}>
				<div className="flex  items-center justify-between mb3">
					<small>
						<a
							href="https://github.com/hcastillaq/examples-dictionary"
							target="_blank"
							rel="noreferrer"
						>
							github
						</a>
					</small>
					<ToggleTheme />
				</div>
				<Search search={handleSearch} />
				{notFound && !loading ? <NotFound /> : null}
				{!(loading || notFound) ? <Content /> : null}
				{!notFound && loading ? (
					<div className="flex justify-center mt3">loading...</div>
				) : null}
			</appContext.Provider>
		</Container>
	);
}

export default App;
