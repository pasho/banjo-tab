import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, HashRouter, Link } from "react-router-dom";
import {
  AppBar,
  Switch as Toggle,
  createStyles,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import SettingsContext from "./components/SettingsContext";
import tunes from "./tunes";

import "./App.css";

type TitleRouteProps = {
  path: string;
  title: string;
};

const TitleRoute: React.FunctionComponent<TitleRouteProps> = ({
  path,
  title,
  children,
}) => {
  useEffect(() => {
    document.title = "Banjo Tab :: " + title;
  });
  return <Route {...{ path }}>{children}</Route>;
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const App = () => {
  const [showNotes, setShowNotes] = useState(false);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HashRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {tunes.map((tune) => (
                <MenuItem onClick={handleClose} component={Link} to={tune.path}>
                  {tune.title}
                </MenuItem>
              ))}
            </Menu>
            <Typography variant="h6" className={classes.title}>
              Banjo Tabs
            </Typography>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Toggle
                    checked={showNotes}
                    onChange={(e) => setShowNotes(e.target.checked)}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Show Notes"
              />
            </FormGroup>
          </Toolbar>
        </AppBar>
      </div>
      <div className="App">
        <div className="content">
          <SettingsContext {...{ showNotes }}>
            <Switch>
              {tunes.map((tune) => {
                return (
                  <TitleRoute path={tune.path} title={tune.title}>
                    {tune.component}
                  </TitleRoute>
                );
              })}
              <Route exact path="/"></Route>
            </Switch>
          </SettingsContext>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
