import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Switch,
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

import { Tune } from "./tunes";

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

export const TopBar = ({
  tunes,
  showNotes,
  setShowNotes,
}: {
  tunes: Tune[];
  showNotes: boolean;
  setShowNotes: (showNotes: boolean) => void;
}) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
              <MenuItem
                key={tune.path}
                onClick={handleClose}
                component={Link}
                to={tune.path}
              >
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
                <Switch
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
  );
};
