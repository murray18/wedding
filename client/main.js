/**
 * Main entry point for the client application.
 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from 'react-stickynode';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Parallax, Background } from 'react-parallax';

import Menu from './components/Menu.component';
import RSVPForm from './components/RSVPForm.component';
import SecretTooltip from './components/SecretTooltip.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';

const websiteContent = (
  <div>

  // <Parallax strength={600} bgWidth={'100%'}>
  //   <Background>
  //     <img src="../img/ruins.jpg"/>
  //   <div style={{
  //       //backgroundSize: 'cover',
  //       width: '100%',
  //       height: 300,
  //       paddingTop: 50,
  //       backgroundColor: 'black'
  //   }}></div>
  //   <img src="../img/bgimage.jpg"/>
  //   </Background>


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
              The lovelies
            </p>
          </div>

          <div className="one-half column">
            <p>
              <a href="img/kal-baby.jpg"><img className="thumbnail" src="img/neil_1.jpg" alt="Neil" /></a>
              The curious developer with a passion for life, food, travel and most of all Becca!
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
      <h1>More to come!</h1>
      <p>This is THE go to source for Becca & Neil wedding info.</p>
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
//</Parallax>
  </div>
);

ReactDOM.render(websiteContent, document.getElementById('content'));
