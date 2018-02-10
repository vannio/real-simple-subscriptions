import React from 'react';
import SettingsConfig from '../components/SettingsConfig';
import SettingsSubscriptions from '../components/SettingsSubscriptions';

const Settings = () => (
  <div className="settings">
    <h1>Settings</h1>
    <SettingsConfig />
    <hr />
    <SettingsSubscriptions />
  </div>
);

export default Settings;
