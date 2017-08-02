import React from 'react';
import SettingsGeneral from '../../components/SettingsGeneral/SettingsGeneral';
import SettingsSubscriptions from '../../components/SettingsSubscriptions/SettingsSubscriptions';

const Settings = () => (
  <div>
    <h1>Settings</h1>
    <SettingsGeneral />
    <SettingsSubscriptions />
  </div>
);

export default Settings;
