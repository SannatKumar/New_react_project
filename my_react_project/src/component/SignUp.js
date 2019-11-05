import React from 'react';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please input your name'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('The name is inputted'+ this.state.value);
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <label>
                    UserName: 
                    <textarea value={this.state.value} onChange = {this.handleChange} />
                </label>
                <input type="submit" value="Submit" placeholder="Mobile Number or email"/>
            </form>
        );    
    }
}

export default SignUp;