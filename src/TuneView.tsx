import {
  Box,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Tune } from "./tunes";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));

export const TuneView = ({ tune }: { tune: Tune }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" component={Paper} className={classes.container}>
      <Typography variant="h6" align="center">
        {tune.title}
      </Typography>
      <Box display="flex" flexDirection="row">
        <Typography variant="subtitle1">{tune.subTitle}</Typography>
        <Box flexGrow={1}></Box>
        <Typography variant="subtitle1">{tune.tuning}</Typography>
      </Box>
      {tune.component()}
    </Container>
  );
};
