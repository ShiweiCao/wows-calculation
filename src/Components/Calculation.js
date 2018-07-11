import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from "@material-ui/core/FormControl";



export default class Calculation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            baseExp : "",
            preminum : false,
            signals: [],
        }
    }

    handleChangeEXP = (e) => {
        this.setState({
            baseExp : e.target.value
        })
    }

    handleChangePre = () => {
        this.setState({
            preminum: !this.state.preminum
        })
    }

    signalsChange = e => {
        this.setState({
            signals: e.target.value
        })
    }

    render() {
        const ecosignals = [
            'Zulu Hotel',
            'Papa Papa',
            'Equal Speed Charlie London',
            'Dragon Flag',
            'Red Dragon',
            'Ouroboros',
            'Hydra'
        ];

        return (
            <div className="container">
                <div className="tittle"><h1> WoWs Calculation </h1></div>
                <div className="form">
                    <div className="Item">
                        <TextField label="Base EXP" value={this.state.baseExp} onChange={this.handleChangeEXP}/>
                    </div>

                    <div className="Item">
                        Preminum: <Switch 
                            checked = {this.state.preminum}
                            onChange={this.handleChangePre}
                        />
                    </div>

                    <div className="Item">
                        <InputLabel> Signals: </InputLabel>
                        <Select
                            multiple
                            value={this.state.signals}  
                            onChange={this.signalsChange}  
                            input={<Input style={{width: "200px"}}/>}
                            renderValue={selected => selected.join(", ")}                     
                        >
                            {
                                ecosignals.map(signal => (                                        
                                    <MenuItem key={signal} value={signal}>
                                        <Checkbox checked={this.state.signals.indexOf(signal) > -1} />
                                        <ListItemText primary={signal} />
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </div>

                    <div className="Item">

                    </div>


                </div>
            </div>
        )
    }
}