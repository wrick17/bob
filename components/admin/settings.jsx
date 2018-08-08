import React from 'react';
import Text from '../../segments/admin/text';

const Settings = ({ data, onChange }) => {
  const { name = '', route = '' } = data || {};
  return (
    <div>
      <div className="group">
        <label>Name: </label>
        <Text data={name} onChange={e => onChange({ prop: 'name', value: e.target.value })} />
      </div>
      <div className="group">
        <label>Route: </label>
        <Text data={route} route onChange={e => onChange({ prop: 'route', value: e.target.value })} />
      </div>
      <style jsx>{`
      label {
        font-size: 14px;
        color: #AAA;
        margin-bottom: 10px;
        display: block;
      }
    `}</style>
    </div>
  )
};

export default Settings;