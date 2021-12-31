import React, { useState } from "react";

const Question = (props) => {
	const { title, info } = props;
	// add a state variable here
	const [visible, setVisible] = useState(false);

	function showInfo() {
		setVisible((oldValue) => !oldValue);
	}

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				{visible ? (
					<button className="btn" onClick={showInfo}>
						-
					</button>
				) : (
					<button className="btn" onClick={showInfo}>
						+
					</button>
				)}
			</header>
			{/* make this render conditionally */}
			{visible ? <p>{info}</p> : null}
		</article>
	);
};

export default Question;
