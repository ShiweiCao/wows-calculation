import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

class Userlist extends Component {
        
    render(){
        return (
            <div>
                <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>First Name</TableHeaderColumn>
                        <TableHeaderColumn>Last Name</TableHeaderColumn>
                        <TableHeaderColumn>Sex</TableHeaderColumn>
                        <TableHeaderColumn>Age</TableHeaderColumn>
                        <TableHeaderColumn>Edit</TableHeaderColumn>
                        <TableHeaderColumn>Delete</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                        {
                            this.props.users.map((element, index) => (
                                
                                <TableRow>
                                    <TableRowColumn>{element.fname}</TableRowColumn>
                                    <TableRowColumn>{element.lname}</TableRowColumn>
                                    <TableRowColumn>{element.sex}</TableRowColumn>
                                    <TableRowColumn>{element.age}</TableRowColumn>
                                    <TableRowColumn>
                                        <RaisedButton label="Edit" primary={true} />
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        <RaisedButton label="Delete" secondary={true} />
                                    </TableRowColumn>
                                </TableRow>
                            ))
                        }
                </TableBody>
                </Table>
                <Link to='/addNew'><FlatButton label="Add New User" primary={true} fullWidth={true} /></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users : state.userR,

    }
  };
  
  const mapDispatchToProps = (dispatch) => {
      return ;
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Userlist);