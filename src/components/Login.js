import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogin, twitterLogin } from "../actions/userAction";

class Login extends Component {
    componentWillMount() {
        if (this.props.user !== null) {
            // console.log(this.props.history);
            this.props.history.push("/");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user !== null) {
            nextProps.history.push("/");
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div
                        className="col-sm-12 jumbotron"
                        style={{ marginTop: "-20px" }}
                    >
                        <h1>DIARY | {new Date().getFullYear()}</h1>
                        <h2>
                            <i>
                                Login with your favourite <u>Social Network</u>{" "}
                                to start writing!
                            </i>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <button
                            className="btn btn-danger col-sm-6 col-sm-offset-3 login"
                            onClick={this.props.googleLogin}
                        >
                            Login with Google
                        </button>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col-sm-12 text-center">    
                        <button 
                            className="btn btn-info col-sm-6 col-sm-offset-3 login" 
                            onClick={this.props.twitterLogin}
                        >
                            Login with Twitter
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, onwProps) {
    return {
        user: state.user
    };
}

export default connect(
    mapStateToProps,
    { googleLogin, twitterLogin }
)(Login);
