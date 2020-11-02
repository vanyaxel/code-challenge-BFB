import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import useStyles from "../styles";

function BtnMenu(props) {
	const classes = useStyles();

	return (
		<Button
			onClick={props.click}
			className={classes.btnCollection}
			color="primary"
		>
			<Link to={props.route} className={classes.btnLink}>
				{props.name}
			</Link>
		</Button>
	);
}

export default BtnMenu;
