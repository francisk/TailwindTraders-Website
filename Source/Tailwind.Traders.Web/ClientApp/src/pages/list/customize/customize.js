import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

class Customize extends Component {
    render() {
        return (
            <div>
              Customize your garden
            </div>
          );
    }
}

const mapStateToProps = state => state.login;

export default connect(mapStateToProps)(Customize);