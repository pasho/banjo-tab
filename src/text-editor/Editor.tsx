import * as React from "react";
import { Sheet } from "../components/Sheet";
import { useState, useContext } from "react";
import Settings, { useSettings } from "../components/Settings";
import { range } from "../utils";

const EditorContext = React.createContext<{
  position: number;
  meter: number;
}>({
  position: 0,
  meter: 4,
});

export const useTextEditor = () => useContext(EditorContext);

const Cursor = (props: { position: number; meter: number }) => {
  const { position, meter } = props;
  const settings = useSettings();
  const noteWidth = settings.staveWidth / settings.barsPerStave / meter;
  const width = noteWidth;
  const x = settings.sidePadding + position * noteWidth;
  const height = settings.staveHeightWithPadding;
  const y = 0;

  return (
    <rect
      {...{ x, y, width, height }}
      strokeWidth={1}
      stroke="black"
      fill="transparent"
    ></rect>
  );
};

const VirtualSheet: React.FunctionComponent<{
  notes: string;
  title: string;
  position: number;
  meter: number;
}> = ({ notes, title, position, meter }) => {
  const notesArray = notes.split(";");
  const notesCount = notesArray.length;

  let start = Math.max(0, notesArray.length - 8);
  let end = notesCount;

  if (position < start) {
    const adjustment = start - position;
    start = position;
    end -= adjustment;
  }

  const visibleNotes = notesArray.slice(start, end);
  const blanks = range(Math.max(0, 8 - notesArray.length)).map((_) => "");
  const visibleNotesWithBlanks = [...visibleNotes, ...blanks].join(";");

  const adjustedPosition = position - start;

  return (
    <Sheet
      {...{ title, notes: visibleNotesWithBlanks }}
      notes={visibleNotesWithBlanks}
    >
      <Cursor position={adjustedPosition} {...{ meter }} />
    </Sheet>
  );
};

export default () => {
  const [notes, setNotes] = useState("");
  const [textPosition, setTextPosition] = useState(0);
  const position = notes.substr(0, textPosition).split(";").length - 1;
  const meter = 4;
  return (
    <EditorContext.Provider value={{ position, meter }}>
      <Settings {...{ sidePaddingEnabled: false, width: 400, barsPerStave: 2 }}>
        <VirtualSheet title="Editor" {...{ position, notes, meter }} />
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
