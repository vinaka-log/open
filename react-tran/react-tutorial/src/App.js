import { useEffect, useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from './Language';

function App() {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState([]);

  useEffect(() => {
    console.log('App.js:useEffect')
    fetchLanguages();
  }, [])

  const fetchLanguages = async () => {
    const languages = await getLanguages();
    setLangs(languages);
  }

  const addLang = (lang) => {
    console.log(lang);
    setLangs([...langs, lang])
  }

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab('list')}>リスト</li>
          <li onClick={() => setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr />
      {
        tab === 'list' ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );
}
export default App;