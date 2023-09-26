import React from "react";

require('../../assets/styles/organisms/Temp.css');

export default class Temp extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <>
                <div className="temporaire">
                    <div>
                        <h1>Portfolio de Julie LP</h1>
                        <p>Ce site est actuellement en cours de construction.</p>
                    </div>
                </div>
            </>
        );
    }
}