import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<div className="base">
			<SecondsCounter seconds={3434} />
		</div>
	);
};

export default Home;
