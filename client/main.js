/**
 * Main entry point for the client application.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-stickynode';

import Menu from './components/Menu.component';
import RSVPForm from './components/RSVPForm.component';
import SecretTooltip from './components/SecretTooltip.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';

const websiteContent = (
  <div>
    <TopicContainer id="brideandgroom" name="celebracation" title="The Celebracation">
      <div className="container">
        <div className="row">
          <p>Instead of getting married at the courthourse and taking you all with us on our honeymoon, we thought the next best thing would be to invite everyone to celebrate with us in Italy! We know that it is a far off destination, but are hoping that by giving you a WHOLE YEAR to get it together, you will be able to make it!  </p>
          <br />
          <p>WHAT: The Celebracation!   Celebra-cation: n. Slang for celebrating Neil and Becca's nuptials while on vacation.</p>
          <p>WHEN: May 23-28ish, 2019</p>
          <p>WHERE: Tuscany, Italy</p>
          <br />
          <h2>Things to think about (ie. pursuade you)</h2>
          <p>We will be holding rooms/apartments in a Tuscan Villa.  Not only do we want to force all of our amazing friends and family to stay on the same property, but this will bring down your accommodation costs!  We are hoping to keep you all there for at least 5 days so we can spend time with everyone who means so much to us.  Our rough estimate for accommodations is around $200 a person for the entire Villa stay.</p>
          <br />
          <p>Over the last year we have found some pretty impressive flight deals to Europe.  We will keep you posted on what pops up from your city.  This means, no heavy lifting for you... unless your credit card weights a few pounds!</p>
          <br />
          <p>Keep in mind, this isn't just about our undying love for each other and proving that to you!  We are encouraging everyone to take a real vacation and get out to explore Sienna, Florence, Rome and the surrounding areas (maybe even other parts of Europe?).  We can't wait for you to share some time with us, BUT what we would enjoy even more is to hear about your adventures before the Celebra-cation and/or learn about where you will be traveling to after.  We are giving you the perfect excuse to take those vacation days so you don't just have to hear about our travel stories, you can be a part of them!</p>
        </div>
      </div>
    </TopicContainer>
    <TopicContainer id="rsvp" title="RSVP">
      <RSVPForm>
      </RSVPForm>
    </TopicContainer>
  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
