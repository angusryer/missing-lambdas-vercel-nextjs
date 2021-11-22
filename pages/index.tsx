import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const [endpoint, setEndpoint] = useState("");
	const [endpointResponse, setEndpointResponse] = useState("");

	useEffect(() => {
		if (endpoint !== "") {
			fetch(`/api/${endpoint}`).then((res) => setEndpointResponse(res.url));
		}
	}, [endpoint]);

	return (
		<div className={styles.container}>
			<h1>
				Response from {endpoint}: {endpointResponse}
			</h1>
			<button onClick={() => setEndpoint("mock")}>mock</button>
			<button onClick={() => setEndpoint("mock/index")}>mock/index</button>
			<button onClick={() => setEndpoint("mock/mock-inner")}>mock-inner</button>
		</div>
	);
};

export default Home;
