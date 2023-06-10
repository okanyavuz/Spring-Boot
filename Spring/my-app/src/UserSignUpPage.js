import React from "react";

class UserSignUpPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
    }

    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    /*onChangeUserName = (event) => {
        this.setState({
            username: event.target.value,
        });
    }
    onChangeDisplayName = (event) => {
        this.setState({
            displayName: event.target.value,
        });
    }
    onChangePassowrd = (event) => {
        this.setState({
            password: event.target.value,
        });
    }
    onChangePassowrdRepeat = (event) => {
        this.setState({
            passwordRepeat: event.target.value,
        });
    }*/

    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label>Username</label>
                    <input name="username" onChange={this.onChange}></input>
                </div>
                <div>
                    <label>Display Name</label>
                    <input name="displayName" onChange={this.onChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.onChange}></input>
                </div>
                <div>
                    <label>Password Repeat</label>
                    <input name="passwordRepeat" type="password" onChange={this.onChange}></input>
                </div>
                <button>Sign Up</button>
            </form>

        )
    }
}

export default UserSignUpPage;