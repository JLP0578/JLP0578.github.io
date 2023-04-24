import React from "react";
import PropTypes from 'prop-types';

require('../../assets/styles/atoms/Icons.css');

export default class Icons extends React.Component {

    addHigh(template) {
        return (
            <span className={"icons icons_"+template}>+</span>
        );
    }
    addNeutral(template) {
        return (
            <span className={"icons icons_"+template}>~</span>
        );
    }
    addLow(template) {
        return (
            <span className={"icons icons_"+template}>-</span>
        );
    }

    render() {
        const template = this.props.template || Icons.defaultProps.template;

        let result;
        switch (template) {
            case "high":
                result = this.addHigh(template);
                break;

            default:
            case "neutral":
                result = this.addNeutral(template);
                break;

            case "low":
                result = this.addLow(template);
                break;
        }

        return result;
    }

}

Icons.propTypes = {
    template: PropTypes.string,
};

Icons.defaultProps = {
    template: "neural",
};