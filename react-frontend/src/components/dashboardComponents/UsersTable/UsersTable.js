import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';
import Heart from '../../content/Heart';

// import { getInitials } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const UsersTable = props => {
  const { className, users, ...rest } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10000);
  //important!!!!!!!!!!!!!!!!! this determines how many are on a page - hardcoded to 10k
  const [page, setPage] = useState(0);
  console.log(users.length);


  const handleSelectAll = event => {
    const { users } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = users.map(user => user.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    {/* <Checkbox
                      checked={selectedUsers.length === users.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < users.length
                      }
                      onChange={handleSelectAll}
                    /> */}
                  </TableCell>
                  <TableCell>College Name</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>RD Deadline</TableCell>
                  <TableCell>In-state Tuition</TableCell>
                  <TableCell>Out-of-State Tuition</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user.id}
                    selected={selectedUsers.indexOf(user.id) !== -1}
                  >
                    <TableCell>
                      {/* <div style={{ marginLeft: "calc(2.75vw)", marginTop: "calc(4vh)"}}>
                        <Heart collegeName={user.college_name} key={user.college_name} />
                      </div> */}
                    </TableCell>

                    <TableCell>
                      <Link style={{ textDecoration: 'none', color: 'black' }} to={`/loginhome/page/${user.college_name}`}> <div className={classes.nameContainer}>
                        {/* <Avatar src={ucsd}
                          className={classes.avatar}
                          // src={user.avatarUrl}
                        >
                        </Avatar> */}
                        <Typography variant="body1">{user.college_name}</Typography>
                      </div>
                      </Link>
                    </TableCell>
                    <TableCell><Link style={{ textDecoration: 'none', color: 'black' }} to={`/loginhome/page/${user.college_name}`}>{user.state}</Link></TableCell>
                    <TableCell><Link style={{ textDecoration: 'none', color: 'black' }} to={`/loginhome/page/${user.college_name}`}>{user.regular_decison}</Link></TableCell>
                    <TableCell><Link style={{ textDecoration: 'none', color: 'black' }} to={`/loginhome/page/${user.college_name}`}>{user.tuition_normal}</Link></TableCell>
                    <TableCell><Link style={{ textDecoration: 'none', color: 'black' }} to={`/loginhome/page/${user.college_name}`}>{user.tuition_oos}</Link> </TableCell>
                  </TableRow>

                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        {/* <TablePagination
          component="div"
          count={users.length}
          page={page}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          //rowsPerPageOptions={[users.length]}

        /> */}
      </CardActions>
    </Card>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default UsersTable;