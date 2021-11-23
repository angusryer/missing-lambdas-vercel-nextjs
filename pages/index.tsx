import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const [endpoint, setEndpoint] = useState("");
	const [endpointResponse, setEndpointResponse] = useState("");
	const [dynamicEndpoint, setDynamicEndpoint] = useState("");

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
				<h4>Static endpoints:</h4>
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
				<hr />
				<h4>Dynamic endpoints:</h4>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/mock1/001")}
				>
					mock1/001
				</button>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/mock1/002")}
				>
					mock1/002
				</button>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/mock1/003")}
				>
					mock1/003
				</button>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/mock2/001")}
				>
					mock2/001
				</button>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/mock2/002")}
				>
					mock2/002
				</button>
				<button
					style={{ margin: "5px", width: "260px", textAlign: "left" }}
					onClick={() => setEndpoint("/mock2/003")}
				>
					mock2/003
				</button>
				<hr />
			</div>
		</div>
	);
};

export default Home;
