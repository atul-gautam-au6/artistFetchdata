import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
  },
  gape: {
    margin: "8px",
  },
}));

export default function MeadiaCard({ card }) {
  const classes = useStyles();
  console.log(card.results);

  return (
    <div className={classes.paper}>
      {card.results.map((i) => (
        <Paper className={classes.gape} elevation={3} key={i.trackTimeMillis}>
          <Card className={classes.root}>
            <CardActionArea>
              {!i.artworkUrl100 ? (
                <div>Loading...</div>
              ) : (
                <CardMedia
                  className={classes.media}
                  image={i.artworkUrl100}
                  title="Contemplative Reptile"
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {i.artistName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                {i.primaryGenreName} ({i.kind && i.kind})
              </Button>
            </CardActions>
          </Card>
        </Paper>
      ))}
    </div>
  );
}
