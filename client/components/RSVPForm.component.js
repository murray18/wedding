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
                <p>Please complete the form below before <font color="red">MAY 18th</font> to let us know if you will be joining us in Italy. We know it is early and it is ok to be "not sure."  Everyone is welcome at the Celebracation, we just may not have room for you at the estate if you decide later.</p>
                <p>Your RSVP is to help us get numbers so we can start planning too!</p>
                <br />

                <h2>Your Information</h2>
                {this.renderTextInput('name', 'Who is RSVPing: inlcude yourself, your spouse/partner and children', guestInfo)}
                {this.renderTextInput('email', 'Email:', guestInfo)}
                {this.renderTextInput('address', 'Address, State, Zip, Country:', guestInfo)}
                <br />
                {this.renderRadioInput(
                  'attendance',
                  'Attendance*:',
                  [
                    { label: 'Yes, I will definitely be there and would love to stay in the villa.', value: 'yes' },
                    { label: 'Not sure.  It is too soon to decide but I will be considering it.', value: 'maybe' },
                    { label: 'No way José!  Destination weddings are sooo 2018.', value: 'no' }
                  ],
                  guestInfo)
                }
                <br />

                {/*
                  We removed the guest plus one

                  {(guestInfo.attendance === 'yes' || guestInfo.attendance === 'yesnovilla') &&
                  <div>
                  {this.renderCheckboxInput(
                    'attendance',
                    '',
                    [
                      { label: ' Add a plus one', value: 'yes' },
                    ],
                    guestPlusOneInfo)
                  }

                  <br />

                  {guestPlusOneInfo.attendance === true &&
                    <div>
                      <h2>Plus One Information</h2>
                      {this.renderTextInput('plusOneName', 'Name:', guestPlusOneInfo)}
                      {this.renderTextInput('plusOneEmail', 'Email:', guestPlusOneInfo)}
                      <br />
                    </div>
                  }
                </div>
              } */}
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
