import * as React from 'react';
import { Input } from '@gio-design/components';
import '@gio-design/components/es/components/input/style/index.css';

export default () => {
  const [inputValue, setInputValue] = React.useState('');
  const [inputValue2, setInputValue2] = React.useState('');
  const [inputValue3, setInputValue3] = React.useState('333');

  return (
    <div>
      <Input.InputHidden
        placeholder="请输入…"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        wrapStyle={{ marginBottom: '20px' }}
      />

      <Input.InputHidden
        placeholder="禁止操作"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
        disabled={true}
        wrapStyle={{ marginBottom: '20px' }}
      />

      <Input.InputHidden value={inputValue3} onChange={(e) => setInputValue3(e.target.value)} errorMsg="错误提示信息" />
    </div>
  );
};
