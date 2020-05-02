import * as React from "react";
import { Sheet, useSheetInfo } from "../components/Sheet";
import { useState } from "react";
import SettingsContext, { useSettings } from "../components/SettingsContext";
import { range } from "../utils";

const Cursor = (props: { position: number }) => {
  const { position } = props;
  const { sidePadding, staveHeightWithPadding } = useSettings();
  const { noteWidth } = useSheetInfo();

  const x = sidePadding + position * noteWidth;
  const y = 0;

  return (
    <rect
      {...{
        x,
        y,
        width: noteWidth,
        height: staveHeightWithPadding,
      }}
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
}> = ({ notes, title, position }) => {
  const notesArray = notes.split(";");
  const notesCount = notesArray.length;
  const barsPerStave = 2;

  const { meter } = useSheetInfo();
  const previewSize = meter * barsPerStave;

  let start = Math.max(0, notesArray.length - previewSize);
  let end = notesCount;

  if (position < start) {
    const adjustment = start - position;
    start = position;
    end -= adjustment;
  }

  const visibleNotes = notesArray.slice(start, end);
  const blanksToAdd = Math.max(0, previewSize - notesArray.length);
  const blanks = range(blanksToAdd).map((_) => "");
  const visibleNotesWithBlanks = [...visibleNotes, ...blanks].join(";");

  const adjustedPosition = position - start;

  return (
    <Sheet
      {...{ title, notes: visibleNotesWithBlanks, barsPerStave }}
      notes={visibleNotesWithBlanks}
    >
      <Cursor position={adjustedPosition} />
    </Sheet>
  );
};

export default () => {
  const [notes, setNotes] = useState("");
  const [textPosition, setTextPosition] = useState(0);
  const position = notes.substr(0, textPosition).split(";").length - 1;

  return (
    <>
      <SettingsContext {...{ sidePaddingEnabled: false, width: 400 }}>
        <VirtualSheet title="Editor" {...{ position, notes }} />
      </SettingsContext>
      <br />
      <textarea
        rows={10}
        onSelect={(e) =>
          setTextPosition((e.target as HTMLTextAreaElement).selectionStart)
        }
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
      />
    </>
  );
};
