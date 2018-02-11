import React from 'react';
import SettingsConfig from '../../components/SettingsConfig/index';
import SettingsSubscriptions from '../../components/SettingsSubscriptions/index';

const Settings = () => (
  <div className="settings">
    <h1>Settings</h1>
    <SettingsConfig />
    <hr />
    <SettingsSubscriptions />
  </div>
);

export default Settings;
