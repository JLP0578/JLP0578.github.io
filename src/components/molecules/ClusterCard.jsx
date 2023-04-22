import React from "react";
import PropTypes from 'prop-types';

import Card from "../atoms/Card";

import '../../assets/styles/molecules/ClusterCard.css';

export default class ClusterCard extends React.Component {
    
    render() {
        return (
            <>
            <br/>
            <ul class="cluster_cards">
                <li><Card 
                    template="bizLT"
                    title="title"
                    content="content"
                    imageAlt="z"
                    imageUrl="https://www.cssscript.com/demo/cyberpunk-2077/img/tile2.jpg"
                 /></li>
                <li><Card 
                    template="bizN"
                    title="title"
                    content="content"
                    imageAlt="z"
                    imageUrl="https://www.cssscript.com/demo/cyberpunk-2077/img/tile2.jpg"
                 /></li>
                <li><Card 
                    template="bizN"
                    title="title"
                    content="content"
                    imageAlt="z"
                    imageUrl="https://www.cssscript.com/demo/cyberpunk-2077/img/tile2.jpg"
                 /></li>
                <li><Card 
                    template="bizN"
                    title="title"
                    content="content"
                    imageAlt="z"
                    imageUrl="https://www.cssscript.com/demo/cyberpunk-2077/img/tile2.jpg"
                 /></li>
                <li><Card 
                    template="bizRB"
                    title="title"
                    content="content"
                    imageAlt="z"
                    imageUrl="https://www.cssscript.com/demo/cyberpunk-2077/img/tile2.jpg"
                 /></li>
            </ul>
            </>
        ); 
    }
}

ClusterCard.propTypes = {
    imageAlt: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    buttonAlt: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonContent: PropTypes.string,
};

ClusterCard.defaultProps = {
};




