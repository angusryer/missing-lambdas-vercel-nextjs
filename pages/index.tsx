import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const [endpoint, setEndpoint] = useState("");
	const [endpointResponse, setEndpointResponse] = useState("");

	useEffect(() => {
		if (endpoint !== "") {
			fetch(`/api${endpoint}`).then((res) => {
				setEndpointResponse(res.status.toString());
			});
		}
	}, [endpoint]);

	return (
		<div className={styles.container}>
			<h3>Endpoint clicked: {endpoint}:</h3>
			<h2>Response status: {endpointResponse}</h2>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/")}
				>
					/index
				</button>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/mock1")}
				>
					mock1/index
				</button>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/mock1/mock1-endpoint")}
				>
					mock1/mock1-endpoint
				</button>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/mock2")}
				>
					mock2/index
				</button>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/mock2/mock2-endpoint")}
				>
					mock2/mock2-endpoint
				</button>
			</div>
		</div>
	);
};

export default Home;
