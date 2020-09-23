import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </TableRow>
        );
    }
}

// CUSTOMER PROFILE를 따로 구성하여, 이름 / 이미지를 한 그룹으로 구분
class CustomerProfile extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell> <h2>{this.props.name}</h2><p>{this.props.id}</p></TableCell>
            </TableRow>
        );
    }
}

// CUSTOMER INFO를 따로 구성하여, 이름 / 이미지를 한 그룹으로 구분
class CustomerInfo extends React.Component {
    render() {
        return (
            <TableRow>
                 <TableCell><p>{this.props.birthday}</p></TableCell>
                 <TableCell><p>{this.props.gender}</p></TableCell>
                 <TableCell><p>{this.props.job}</p></TableCell>
            </TableRow>
        );
    }
}

// Public Option
export default Customer;