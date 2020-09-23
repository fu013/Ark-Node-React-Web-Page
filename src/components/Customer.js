import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        );
    }
}

// CUSTOMER PROFILE를 따로 구성하여, 이름 / 이미지를 한 그룹으로 구분
class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}</h2>
                <p>{this.props.id}</p>
            </div>
        );
    }
}

// CUSTOMER INFO를 따로 구성하여, 이름 / 이미지를 한 그룹으로 구분
class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        );
    }
}

// Public Option
export default Customer;