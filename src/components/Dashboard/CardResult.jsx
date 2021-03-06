import React from "react";

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, } from "@material-ui/core";

import Detail from "./Detail";
import useStyles from "../styles";

function CardResult({ result }) {
	const classes = useStyles();

	return (
		<Card className={classes.cardResult}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={result.cover_image}
					title={result.title}
				/>
				<CardContent className={classes.content}>
					<Typography variant="body1" color="textSecondary">
						{result.title}
					</Typography>
					{result.year ? (
						<Typography variant="body2" color="textSecondary">
							<strong> Año:</strong> {result.year}
						</Typography>
					) : (
							<Typography variant="body2" color="textSecondary">
								<strong> Año:</strong> No hay información
							</Typography>
						)}
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.cardFooter}>
				<Detail result={result} />
			</CardActions>
		</Card>
	);
}

export default CardResult;
