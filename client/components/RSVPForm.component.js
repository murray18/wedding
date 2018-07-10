/**
 * Implements the reservation form wizard and interaction with the server.
 *
 * id (string): Identifier for the element
 */

'use strict';

import APIClient from '../api/api-client';
import isEmail from 'validator/lib/isEmail';
import React from 'react';

// For compatibility with older Internet Explorer browsers
require('es6-object-assign').polyfill();

/**
 * Implements the RSVP form.
 */
class RSVPForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            guestInfo: {},
            guestPlusOneInfo: {},
            submitStatus: null,
        };
    }

    render() {
        var self = this;

        const guestInfo = this.state.guestInfo;
        const guestPlusOneInfo = this.state.guestPlusOneInfo;

        return (
            <div id={this.props.id} className="wizard-form">
                <p>Please complete the form below by August 15th to let us know if you will be joining us for our celebration. We know it may seem last minute, but would you expect anything less from us?!</p>
                <br />

                <h2>Your Information</h2>
                {this.renderTextInput('name', 'Name(s)', guestInfo)}
                {this.renderTextInput('email', 'Email:', guestInfo)}
                {this.renderTextInput('address', 'Address, State, Zip, Country:', guestInfo)}
                <br />
                {this.renderTextInput('comment', 'Let us know about any plus ones, amazing things to say or song requests!', guestInfo)}
                {this.renderRadioInput(
                  'attendance',
                  'Attendance*:',
                  [
                    { label: 'Yes, we will see you there!', value: 'yes' },
                    { label: 'No, give me more notice next time!', value: 'no' }
                  ],
                  guestInfo)
                }
                <br />
                {(guestInfo.attendance === 'yes') &&
                <div>
                  <p><i>Hooray! We can't wait to spend time with you!</i></p>
                </div>
                }
                {(guestInfo.attendance === 'no') &&
                <div>
                  <p><i>Sorry you can't make it! No worries. There will always be our 2038 vow renewal ceremony in Antartica!</i></p>
                </div>
                }
                <br />
                {this.state.submitStatus &&
                    <div className={this.state.submitStatus.isError ? 'alert-error' : 'alert-success'}>
                        <span className="alert-closebtn"
                            onClick={() => { self.state.submitStatus = null; self.setState(self.state); }}>&times;</span>
                        {this.state.submitStatus.message}
                    </div>
                }
                <br />
            <div className="centered">
                <button onClick={this.submitRSVP.bind(this)}>Submit</button>
              </div>
            </div>
        );
    }

    /**
     * Validates that the form can be submitted and returns null on success or a string message with
     * the validation error otherwise.
     */
    validate() {

        const guestInfo = this.state.guestInfo;

        if (!guestInfo.name || guestInfo.name.trim().empty)
            return 'Please give us your name';

        if (!guestInfo.attendance)
            return 'Please specify whether you will be joining us';

        if (guestInfo.attendance === 'no')
            return null;

        if (!guestInfo.address)
            return 'Please let us know a valid address where you recieve mail.';

        if (!guestInfo.email || guestInfo.email.trim().empty || !isEmail(guestInfo.email))
            return 'Please give us your valid email';

        const guestPlusOneInfo = this.state.guestPlusOneInfo;


        if (guestPlusOneInfo.attendance === true) {
          if (!guestPlusOneInfo.plusOneName || guestPlusOneInfo.plusOneName.trim().empty)
            return 'The plus one name field cannot be left empty';
          if (!guestPlusOneInfo.plusOneEmail || guestPlusOneInfo.plusOneEmail.trim().empty || !isEmail(guestPlusOneInfo.plusOneEmail))
              return 'Please give us a valid email for your plus one guest.';
        }
    }

    /**
     * Renders a text input with a label. Gets its state and updates the specified @stateObj.
     */
    renderTextInput(name, label, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                <input type="text"
                    name={name}
                    value={self.state[name]}
                    onChange={onChange} />
            </div>
        );
    }

    /**
     * Renders a text input with a label and the specified set of options. Gets its state and
     * updates the specified @stateObj.
     *
     * The format of the options is an array of JSON objects with the following properties:
     *  label - Label of the option
     *  value - Value of the option to be set on the @stateObj
     */
    renderRadioInput(name, label, options, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
            stateObj[name] = event.target.value;
            self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                {
                    options.map(function (option) {
                        return (
                            <div key={option.value}>
                                <input type="radio"
                                    value={option.value}
                                    checked={value === option.value}
                                    onChange={onChange} />
                                <label>{option.label}</label>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    /**
     * Renders a text input with a label and the specified set of options. Gets its state and
     * updates the specified @stateObj.
     *
     * The format of the options is an array of JSON objects with the following properties:
     *  label - Label of the option
     *  value - Value of the option to be set on the @stateObj
     */
    renderCheckboxInput(name, label, options, stateObj) {
        const self = this;
        const value = stateObj[name];

        function onChange(event) {
          const target = event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          stateObj[name] = value;

          self.setState(self.state);
        }

        return (
            <div className="rsvp-section">
                <label>{label}</label>
                {
                    options.map(function (option) {
                        return (
                            <div key={option.value}>
                                <input type="checkbox"
                                    value={option.value}
                                    checked={value === true}
                                    onChange={onChange} />
                                <label>{option.label}</label>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    /**
     * Retrieves the client for the web service API.
     */
    getAPIClient() {
        return new APIClient(document.location.protocol + '//' + document.location.host + '/api/rsvp');
    }

    /**
     * Takes the collected wizard input across all forms and submits it to the database.
     */
    submitRSVP() {
        const self = this;
        const state = this.state;

        if (this.validate()) {
            self.state.submitStatus = { isError: true, message: this.validate() };
            self.setState(self.state);
            return;
        }

        var guestInfo = Object.assign({}, state.guestInfo);
        var guestPlusOneInfo = Object.assign({}, state.guestPlusOneInfo);

        const willAttend = guestInfo.attendance;
        delete guestInfo['attendance'];

        if (guestPlusOneInfo.attendance === true) {
            delete guestPlusOneInfo['attendance'];
        }
        else {
            guestPlusOneInfo = undefined;
        }

        this.getAPIClient().rsvp(guestInfo, willAttend, guestPlusOneInfo, function (errorMsg, successMsg) {
            if (errorMsg) {
                self.state.submitStatus = { isError: true, message: errorMsg };
                self.setState(self.state);
            } else {
                self.state.submitStatus = {
                    isError: false, message: 'Your response was recorded successfully. Thank you!'
                };
                self.setState(self.state);
            }
        });
    }
}

export default RSVPForm;
