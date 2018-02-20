import React, { Component, Image } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import SeasonLinesChart from '../Pictures/Lines/MostSpoke Lines7.png';
import SeasonWordsChart from '../Pictures/Words/MostSpoke Words7.png';
import SeasonLinespie from '../Pictures/Lines/MostSpoke Lines7(Pie).png';
import SeasonAss from '../Pictures/Association/ASC7.png';
import Divider from 'material-ui/Divider';

export default class Season7Display extends Component {
    render() {
        return (
            <div>
                <section>
                    <center>
                        <h2>Season 7</h2>
                        <Divider />
                        <img src={SeasonLinesChart} alt='' />
                        <br />
                        <img src={SeasonWordsChart} alt='' /><br />
                        <img src={SeasonLinespie} alt='' /><br/>
                        <Divider />
                        <h3><center>Association Analysis</center></h3>
                        <img src={SeasonAss} alt='' width="900px" />
                    </center>
                </section>
            </div>

        )
    }
}