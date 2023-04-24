import React from 'react';
import PropTypes from 'prop-types';

require('../../assets/styles/pages/Loading.css');

export default class Loading extends React.Component {
    render() {
        return (
        <>
            <section id="preloader">
                <fieldset className="loading-container">
                    <legend className="title" data-content="Loading resources">Loading resources</legend>
                        <div className="loading-bar">
                            <p className="perc"></p>
                        </div>
                </fieldset>
            </section>
            <div id="crt"></div>
            <div id="scan-line"></div>
        </>
        );
    }
}

Loading.propTypes = {
    isLoaded: PropTypes.bool
};

Loading.defaultProps = {
    isLoaded: false
};