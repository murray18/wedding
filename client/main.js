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
    <Sticky enabled={true}>
      <Menu id="menu"
        items={[{ label: 'CELEBRATION', href: 'brideandgroom' },
                { label: 'RSVP', href: 'rsvp' },
                { label: 'THE VENUE', href: 'venue' },
                { label: 'TRAVEL', href: 'logistics' },
                { label: 'THINGS TO DO', href: 'thingstodo' },
                { label: 'REGISTRY', href: 'gifts' }]}>
      </Menu>
    </Sticky>
    <br />
    <TopicContainer id="brideandgroom" name="celebracation">
      <div className="container">
        <div className="row">
          <h1>Neil & Becca</h1>
          <h2>September 29th, 2018</h2>
          <h2>Boulder, Colorado</h2>
        </div>
      </div>
    </TopicContainer>

    <TopicContainer id="none">
      <img className="aboutphoto" src="img/discShot.png"></img>
      <p>Neil and Becca met at the launch of the Falcon 9.  Well, it wasn't actually at the launch site, but it was at a brewery known as Upslope.
      The fire between the two was so strong it was almost like a rocket had actually taken off.  The next date, he cooked for her.  He thought for sure
    that would be the last time they saw each other, but the next week she invited him to play disc golf.  He has since become a semi-pro (but he doesn't want to brag....)
  Anyway, they dated for a while. They moved in together mixing their dog and cats.  They started a garden together.  They traveled together.  And on a flight to Europe, he didn't even make it
out of the United States airspace before proposing.  She was thankful that he didn't make a public spectacle of the occasion by announcing it over the intercom. After a push from their friends and family, they have chosen to
not elope and instead celebrate with everyone in their hometown.  They hope you all can be there to witness this once-in-a-lifetime event.
</p>
    </TopicContainer>

    <TopicContainer id="rsvp">
      <h1>Let us Know!</h1>
      <RSVPForm>
      </RSVPForm>
    </TopicContainer>

    <TopicContainer id="venue">
      <h1>The Venue</h1>
      <div className="container">
        <div className="row">
          <p>Fate Brewing Company</p>
          <p><a href="http://www.fatebrewingcompany.com/">www.fatebrewingcompany.com</a></p>
          <p>1600 38th Street, Boulder CO 80301</p>
          <p><img width="70%" src="https://cdn.craftbeer.com/wp-content/uploads/2016/02/18154804/fate_open.jpg"></img></p>
        </div>
      </div>
    </TopicContainer>

    <TopicContainer id="logistics">
      <h1>Travel</h1>
      <div className="container">
        <div className="row">
          <p>There are several great hotels located close to Fate Brewing and downtown Boulder.</p>
          <p><a href="https://www.marriott.com/hotels/travel/denbd-courtyard-boulder/">Courtyard by Marriott Boulder</a> - 4710 Pearl E Cir, Boulder, CO 80301</p>
          <p><a href="https://boulderpearlstreet.place.hyatt.com/en/hotel/home.html">Hyatt Place Boulder/Pearl Street</a> - 2280 Junction Pl, Boulder, CO 80301</p>
          <p><a href="https://www.millenniumhotels.com/en/boulder/">Millenium Harvest House</a> - 1345 28th St, Boulder, CO 80302</p>
          <p><a href="http://hiltongardeninn3.hilton.com/en/hotels/colorado/hilton-garden-inn-boulder-WBUBOGI/index.html">Hilton Garden Inn Boulder</a> - 2701 Canyon Blvd, Boulder, CO 80302</p>
          <p>We travel using <a href="http://www.airbnb.com">Airbnb</a> all the time and there are some great options in Boulder!</p>
          <br/>
          <p>Check out <a href="https://www.google.com/flights">flights.google.com</a> to get some ideas on good flight options.</p>
          <br/>
          <p>You will most likely need a car if you plan to explore more of the area.  There are buses that run from the Denver Airport to Boulder and around the city of Boulder. Lyft, Uber and Ztrip as also available in the city.  </p>
        </div>
      </div>
    </TopicContainer>

    <TopicContainer id="thingstodo">
      <h1>Things To Do</h1>
      <h2>The Day After</h2>
      <div className="container">
        <div className="row">
          <p className='left'>We will be heading to the Royal Gorge for a phenomenol train ride.  More details coming soon!</p>
          <br></br>
          <br></br>
          <h2>In & Around Boulder</h2>
          <p className='left'>Breweries: Avery, Boulder Beer, Upslope (where we had our first date!) and Twisted Pine are some of our favorites and offer brewery tours. </p>
          <p className='left'>Hiking: Chautauqua Park (home of the iconic Flatirons), Mount Sanitas, Eldorado Springs</p>
          <p className='left'>Other Cool Things: Valmont Disc Golf, Dushanbe Teahouse, Pearl Street Mall</p>
          <br></br>
          <br></br>
          <h2>Beyond Boulder</h2>
          <p className='left'>Rocky Mountain National Park, Denver Art Museum, Fall Colors (Aspen, Peak to Peak Highway)</p>
        </div>
      </div>
    </TopicContainer>

    <TopicContainer id="gifts">
      <h1>Registry</h1>
      <div className="container">
        <div className="row">
          <p>We would love to receive something handmade from you! <br/>If you aren't feeling creative, you can also check out our registry by clicking on the image below.<br/><br/>
          <a href="https://www.zola.com/registry/neilandbecca"><img width="30%" src="https://d1tntvpcrzvon2.cloudfront.net/vzassets/1.2.78/images/registryShare/zola-logo-white.jpg"></img></a>
        </p>

        </div>
      </div>
    </TopicContainer>
  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
