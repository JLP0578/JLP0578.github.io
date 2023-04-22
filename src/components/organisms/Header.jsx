import React from "react";

import '../../assets/styles/organismes/Header.css';

export default class Header extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <header>
                <h1 class="displayNone">Devloppeur Web</h1>
                <i className="state state__low"></i>
            </header>
        );
    }
}