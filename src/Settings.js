
import React, { Component } from 'react';
import './Settings.css';
import SettingsImg from './Design/Setting 1.png';
import { Link } from 'react-router-dom';

class Settings extends Component {
    render() {
        return (
            <Link to="/">
                <div className='settings'>
                    <img src={SettingsImg} />
                </div>
            </Link>

        );
    }
}

export default Settings;