import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const UsersToolbar = props => {
  const { className, selectedColleges, setRerender, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>
        <Button
          color="primary"
          variant="contained"
          onClick={e => {
            selectedColleges.map(colleges => {
              fetch("/removecollege", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  CollegeName: colleges.college_name
                })
              }).then(response => {
                return response.json();
              }).then(data => { })
            }).then(setRerender(false))
          }}
        >
          Remove College
        </Button>
      </div>
      {/* <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        />
      </div> */}
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;