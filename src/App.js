
import React, { Component } from 'react';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';
import { AppBar, Tabs, Tab } from 'material-ui'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import scrollToComponent from 'react-scroll-to-component';
import Season1Display from './Components/Season1Display';
import Season2Display from './Components/Season2Display';
import Season3Display from './Components/Season3Display';
import Season4Display from './Components/Season4Display';
import Season5Display from './Components/Season5Display';
import Season6Display from './Components/Season6Display';
import Season7Display from './Components/Season7Display';
import Season8Display from './Components/Season8Display';
import Season9Display from './Components/Season9Display';

// import scrollToComponent from 'react-scroll-to-component';

// injectTapEventPlugin();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, index, value) {
    this.setState({ value })
  }
  render() {

    const muiTheme = getMuiTheme({
      appBar: {
        height: 100,
        color: 'white',
        textColor: "black",
      },
    });//#333333
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div>
          <AppBar
            style={{ position: "fixed", top: 0 }}
            iconElementLeft={<IconMenu
              iconButtonElement={
                <IconButton tooltip="Navigate">
                 <FontIcon className="material-icons">Search</FontIcon>
                </IconButton>
              }
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <MenuItem onClick={(e) => {
                scrollToComponent(this.Season1, { offset: -100, align: 'top', duration: 1500 })
              }} primaryText="Season 1" ></MenuItem>

              <MenuItem onClick={(e) => {
                scrollToComponent(this.Season2, { offset: -100, align: 'top', duration: 750 })
              }} primaryText="Season 2" ></MenuItem>

              <MenuItem onClick={(e) => {
                scrollToComponent(this.Season3, { offset: -100, align: 'top', duration: 750 })
              }} primaryText="Season 3" ></MenuItem>
              <MenuItem onClick={() => {
                scrollToComponent(this.Season4, { offset: -100, align: 'top', duration: 750 })
              }} primaryText="Season 4" />
              <MenuItem onClick={() => {
                scrollToComponent(this.Season5, { offset: -100, align: 'top', duration: 750 })
              }} primaryText="Season 5" />
              <MenuItem onClick={() => {
                scrollToComponent(this.Season6, { offset: -100, align: 'top', duration: 750 })
              }} primaryText="Season 6" />
              <MenuItem onClick={() => {
                scrollToComponent(this.Season7, { offset: -100, align: 'top', duration: 750 })
              }} primaryText="Season 7" />
              <MenuItem onClick={() => {
                scrollToComponent(this.Season8, { offset: -100, align: 'top', duration: 750 })
              }} primaryText="Season 8" />
              <MenuItem onClick={() => {
                scrollToComponent(this.Season9, { offset: -100, align: 'top', duration: 750 })
              }} primaryText="Season 9" />
            </IconMenu>}
            title="Office Analysis"
            titleStyle={{ textAlign: "center", fontFamily: 'Montserrat', letterSpacing: '2px' }}
          />

          <Season1Display ref={(section) => { this.Season1 = section; }} />
          <Divider style={{height: "40px"}}/>
          <Season2Display ref={(section) => { this.Season2 = section; }} />
           <Divider style={{height: "40px"}}/>
          <Season3Display ref={(section) => { this.Season3 = section; }} />
           <Divider style={{height: "40px"}}/>
          <Season4Display ref={(section) => { this.Season4 = section; }} />
           <Divider style={{height: "40px"}}/>
          <Season5Display ref={(section) => { this.Season5 = section; }} />
           <Divider style={{height: "40px"}}/>
          <Season6Display ref={(section) => { this.Season6 = section; }} />
           <Divider style={{height: "40px"}}/>
          <Season7Display ref={(section) => { this.Season7 = section; }} />
           <Divider style={{height: "40px"}}/>
          <Season8Display ref={(section) => { this.Season8 = section; }} />
           <Divider style={{height: "40px"}}/>
          <Season9Display ref={(section) => { this.Season9 = section; }} />


        </div>

      </MuiThemeProvider >
    )

  }
}