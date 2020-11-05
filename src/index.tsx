import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input'

ReactDOM.render(
  (
    <div>
      <Input addonBefore="https" addonAfter=".com" />
      <Input />
    </div>
  
  ),
  document.getElementById('root')
);

