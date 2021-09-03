import {
  List,
  ListItem,
  Container,
  Paper,
  makeStyles,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { Tune } from "./tunes";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));

export const TunesList = ({ tunes }: { tunes: Tune[] }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" component={Paper} className={classes.container}>
      <List>
        {tunes.map((tune) => (
          <ListItem button key={tune.title} component={Link} to={tune.path}>
            <ListItemText>{tune.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
