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

    <TitleBar id="titlebar">
    </TitleBar>

    <div style={{ height: '200px' }}></div>

    <Sticky enabled={true}>
      <Menu id="menu"
        items={[{ label: 'THE BRIDE & GROOM', href: 'brideandgroom' },
                { label: 'THE WEDDING', href: 'wedding' },
                { label: 'RSVP', href: 'rsvp' },
                { label: 'LOGISTICS', href: 'logistics' },
                { label: 'THINGS TO DO', href: 'thingstodo' },
                { label: 'GIFTS', href: 'gifts' }]}>
      </Menu>
    </Sticky>

    <TopicContainer id="brideandgroom" name="brideandgroom" title="The Bride and Groom">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <p>
              <a href="img/jocelyn-baby.jpg"><img className="thumbnail" src="img/becca_1.jpg" alt="Becca" /></a>
              Becca is the best!
            </p>
          </div>

          <div className="one-half column">
            <p>
              <a href="img/kal-baby.jpg"><img className="thumbnail" src="img/neil_1.jpg" alt="Neil" /></a>
              Neil is the luckiest!
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>
        <img className="large-image" src="img/proposal.jpg" alt="Kal Proposing To Jocelyn" />
      </p>

      <h2>OUR STORY</h2>
      <p>
      As unlikely as it sounds we first met 10 meters underwater.  Having both heard about the legend of Sir Francis Drake''s illustrious,
      little known and long missing belly button jewelry, we''d set sail for Panama to find it.  Chance was good to us that day.  Not only did us put
      us in the same place at the same time in such an unlikely setting but it brought us together then and for the rest of our lives.  Becca wears
      that belly button button jewelry to this day.
      </p>
    </TopicContainer>

    <TopicContainer id="wedding" title="Wedding">
      <div className="container">
        <div className="one-half column">
          <h2>Details to come</h2>
        </div>
        <div className="one-half column">
          <h2>Details to come</h2>
        </div>
      </div>

      <hr />

      <h2>ON THE WEDDING DAY</h2>
      <p>The ceremony will start at 17:00 at the Sveti Marak church courtyard. Please arrive 10 to 15 minutes before so everybody can get
         seated and so we can start on time.
      </p>
      <p>After the ceremony we will raise a glass of champagne and someone will lead you to the reception where drinks and appetizers will
         be served.
      </p>
      <p>
        Wedding attire is summer formal. Gentlemen, please wear a light suit with which you will be comfortable with the heat. And ladies,
        you look pretty as you are, in your formal summer dresses :)
      </p>

      <hr />

      <h2>DAY BEFORE THE WEDDING (30 August)</h2>
      <p>Welcome cocktails will be held on the terrace of <a href="https://goo.gl/Vd3ZJd">Restaurant Park Hvar</a> from 18:30 to 23:30.
      </p>
      <p>
         Cocktail night attire is dressy-casual.
      </p>

      <hr />

      <h2>DAY AFTER THE WEDDING (1 September)</h2>
      <p>Farewell brunch will be held at 11:00 at the&nbsp;
         <a href="http://www.suncanihvar.com/amfora-hvar-grand-beach-resort/maestral-balkan-grill.html">Maestral Restaurant</a>. It is located
         just a few meters on the path that takes you to the <a href="https://goo.gl/r9TFHt">wedding venue</a>.
      </p>
      <p>
         Brunch attire is wear anything you want :)
      </p>
    </TopicContainer>

    <TopicContainer id="rsvp" title="RSVP">
      <RSVPForm>
      </RSVPForm>
    </TopicContainer>

    <TopicContainer id="logistics" title="Logistics">
      <h1>This is a topic container.  We will put content in here</h1>
      <p>More Text here</p>
    </TopicContainer>

    <TopicContainer id="thingstodo" title="Things to do in Croatia">
      <h1>Another topic container</h1>
      <p>Text goes here</p>
    </TopicContainer>

  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
