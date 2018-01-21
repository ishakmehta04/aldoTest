import React from 'react';
import Switch from '../containers/toggleSwitch';

const Header = () => (
    <div className="text-center">
        <nav className="navbar navbar-default">
            <h2 className="active">Donald Trump</h2>
            <Switch isChecked={ false } />
            <h2 className="active">Hillary Clinton</h2>
        </nav>
    </div>
);

export default Header;