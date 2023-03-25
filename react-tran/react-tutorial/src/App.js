import { useState } from 'react';
import Form from './Form';
import { List } from './List';

function App() {
  const [tab, setTab] = useState('list');


  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      {tab === 'list' ? < List /> : <Form />}
      <Form />
    </div >
  );
}

export default App;
