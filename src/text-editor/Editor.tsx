import * as React from 'react';
import { Sheet } from '../components/Sheet';
import { useState } from 'react';

export default () => {
  const [notes, setNotes] = useState("");
  return (
    <>
      <Sheet title="Editor" notes={notes}/>
      <textarea onChange={e => setNotes(e.target.value)} value={notes}></textarea>
    </>
  )
}
