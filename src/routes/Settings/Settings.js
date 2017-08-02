import React from 'react';
import SettingsGeneral from '../../components/SettingsGeneral/SettingsGeneral';
import SettingsSubscriptions from '../../components/SettingsSubscriptions/SettingsSubscriptions';

const Settings = () => (
  <div>
    <h2>Settings</h2>
    <SettingsGeneral />
    <SettingsSubscriptions />
  </div>
);

export default Settings;
