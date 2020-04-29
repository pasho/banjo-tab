import * as React from "react";
import { Sheet } from "../components/Sheet";
import { useState, useContext } from "react";
import Cursor from "./Cursor";
import Settings from "../components/Settings";
import { range } from "../utils";

const EditorContext = React.createContext<{
  position: number;
  meter: number;
}>({
  position: 0,
  meter: 4,
});

export const useTextEditor = () => useContext(EditorContext);

const VirtualSheet: React.FunctionComponent<{
  notes: string;
  title: string;
}> = ({ notes, title, children }) => {
  const notesArray = notes.split(";");
  const visibleNotes = notesArray.slice(
    Math.max(0, notesArray.length - 8),
    notesArray.length
  );
  const blanks = range(Math.max(0, 8 - notesArray.length)).map((_) => "");
  const visibleNotesWithBlanks = [...visibleNotes, ...blanks].join(";");
  console.log(visibleNotesWithBlanks);
  return (
    <Sheet
      {...{ title, notes: visibleNotesWithBlanks }}
      notes={visibleNotesWithBlanks}
    >
      {children}
    </Sheet>
  );
};

export default () => {
  const [notes, setNotes] = useState("");
  const [textPosition, setTextPosition] = useState(0);
  const truePosition = notes.substr(0, textPosition).split(";").length - 1;
  const notesCount = notes.split(";").length;
  const positionAdjustment = Math.max(0, notesCount - 8);
  const position = truePosition - positionAdjustment;
  const meter = 4;
  return (
    <EditorContext.Provider value={{ position, meter }}>
      <Settings {...{ sidePaddingEnabled: false, width: 400, barsPerStave: 2 }}>
        <VirtualSheet title="Editor" notes={notes}>
          <Cursor />
        </VirtualSheet>
      </Settings>
      <br />
      <textarea
        rows={10}
        onSelect={(e) =>
          setTextPosition((e.target as HTMLTextAreaElement).selectionStart)
        }
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
      />
    </EditorContext.Provider>
  );
};
