import React, { useState } from "react";
import data from "./data";
function App() {
	const [index, setIndex] = useState(0);
	const [paragraphs, setParagraphs] = useState([]);

	const handleChange = (e) => {
		const value = e.target.value;
		const intValue = parseInt(value);
		setIndex(intValue);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		index < 0
			? setParagraphs(data.slice(0, 1))
			: setParagraphs(data.slice(0, index));
		// const subArray = data.slice(0, index);
	};

	return (
		<section className="section-center">
			<h3>tired of boring lorem ipsum?</h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">paragraphs:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={index}
					onChange={handleChange}
				/>
				<button className="btn" type="submit">
					generate
				</button>
			</form>
			<article className="lorem-text">
				{paragraphs.map((paragraph) => {
					return <p>{paragraph}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
