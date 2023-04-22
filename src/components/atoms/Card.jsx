import React from "react";
import PropTypes from 'prop-types';

import '../../assets/styles/atoms/Card.css';

export default class Card extends React.Component {
    addOuter(){
        const template = this.props.template || Card.defaultProps.template;
        return (
            <div className={template+" card card__outer"}>
                <div className="card card__alf">
                    {this.addImage()}
                    {this.addTitle()}
                    {this.addInner()}
                </div>
            </div>
        );
    }

    addImage() {
        let result = false;
        const imageAlt = this.props.imageAlt;        
        const imageUrl = this.props.imageUrl;

        if(imageAlt && imageUrl) {
            result = (
                <img 
                    alt={this.props.imageAlt} 
                    className="card__img" 
                    src={this.props.imageUrl}
                />
            );
        }

        return result;
    }

    addTitle() {
        let result = false;
        const title = this.props.title;

        if(title) {
            result = (
                <h1 className="card__title">
                    {this.props.title}
                </h1>
            );
        }

        return result;
    }

    addInner() {
        return (
            <div className="card card__inner">
                {this.addContent()}
                {this.addButton()}
            </div>
        );
    }

    addContent() {
        let result = false;
        const content = this.props.content;

        if(content) {
            result = (
                <p>
                    {this.props.content}
                </p>
            );
        }

        return result;
    }

    addButton() {
        let result = false;
        const buttonAlt = this.props.buttonAlt;
        const buttonUrl = this.props.buttonUrl;
        const buttonContent = this.props.buttonContent;

        if(buttonAlt && buttonUrl && buttonContent) {
            result = (<button className="card__action" alt={this.props.buttonAlt} href={this.props.buttonUrl}>{this.props.buttonContent}</button>);
        }

        return result;
    }

    render() {
        return (
            <>
            {this.addOuter()}
            </>
        ); 
    }
}

Card.propTypes = {
    imageAlt: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    buttonAlt: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonContent: PropTypes.string,
    template: PropTypes.string,
};

Card.defaultProps = {
    template: "Normal",
};