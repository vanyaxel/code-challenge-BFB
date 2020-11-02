import React from "react";

import { Grid, Typography } from "@material-ui/core";

import CardCollection from "./CardCollection";
import Menu from "../Layout/Menu";

import "../styles.css";

function Collection() {
	return (
		<div className="dashboard">
			<Grid container direction="column">
				<Menu />
				<Grid item container direction="column" className="collection-view">
					<Grid item>
						<Typography variant="h2" color="primary">
							mi colección
						</Typography>
					</Grid>
					<CardCollection />
				</Grid>
			</Grid>
		</div>
	);
}

export default Collection;
