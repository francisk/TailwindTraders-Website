import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

class Customize extends Component {
    render() {
        const { shoppingCart, loading, isPulling } = this.state
        return (
            <NamespacesConsumer>
                {t => (
                    <Fragment>
                        {loading && isPulling ? <LoadingSpinner /> : <Fragment>
                            <h2>Customize</h2>
                            <div className="shopping-card__grid">
                                This is new page
                            </div>
                        </Fragment>}
                    </Fragment>
                )}
            </NamespacesConsumer>
        );
    }
}



const mapStateToProps = state => state.login;

export default connect(mapStateToProps)(Customize);