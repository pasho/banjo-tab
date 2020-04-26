import * as React from 'react';
import { Sheet } from '../components/Sheet';
import { useState, useContext } from 'react';
import Cursor from './Cursor';

const EditorContext = React.createContext<{
  position: number;
  meter: number;
}>({
  position: 0,
  meter: 4
});

export const useTextEditor = () => useContext(EditorContext);

export default () => {
  const [notes, setNotes] = useState("");
  const [textPosition, setTextPosition] = useState(0);
  const position = notes.substr(0, textPosition).split(";").length - 1;
  const meter = 4;
  return (
    <EditorContext.Provider value={{position, meter}}>
      <Sheet title="Editor" notes={notes}>
        <Cursor/>
      </Sheet>
      <br/>
      <textarea 
        rows={4}
        cols={50}
        onSelect={e => setTextPosition((e.target as HTMLTextAreaElement).selectionStart)}
        onChange={e => setNotes(e.target.value)} 
        value={notes}/>
    </EditorContext.Provider>
  )
}
