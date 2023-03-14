import styles from "./NotFound.module.scss";

const NotFound = () => {
	return (
		<div className={`${styles.notFound} flex justify-center mt3 `}>
			<p>
				Not found <strong className="text-primary">word</strong>, please intent
				later.
			</p>
		</div>
	);
};

export default NotFound;
