import React, { Component, Image } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Season1LinesChart from '../Pictures/Lines/MostSpoke Lines1.png';
import Season1WordsChart from '../Pictures/Words/MostSpoke Words1.png';
import Season1Linespie from '../Pictures/Lines/MostSpoke Lines1(Pie).png';
import SeasonAss from '../Pictures/Association/ASC1.png';
import Divider from 'material-ui/Divider';

export default class Season1Display extends Component {
    render() {
        return (
            <div style={{ display: "block", justifyContent: "center", marginTop: 100 }}>
                <section>
                    <center>
                        <h2>Season 1</h2>
                        <Divider />
                        <img src={Season1LinesChart} alt='' />
                        <br />
                        <img src={Season1WordsChart} alt='' /><br />
                        <img src={Season1Linespie} alt='' /><br/>
                        <Divider />
                        <h3><center>Association Analysis</center></h3>
                        <img src={SeasonAss} alt='' width="900px" />
                    </center>
                </section>
            </div>

        )
    }
}