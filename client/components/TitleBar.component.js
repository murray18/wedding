/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

'use strict';

import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="bride-name">Neil</span>
                <span className="bride-name">&nbsp;
                    <span>&amp;</span> Becca
                </span>
                <div className="wedding-date">31<sup>st</sup> AUGUST, 2018</div>
            </header>
        );
    }
}

export default TitleBar;
