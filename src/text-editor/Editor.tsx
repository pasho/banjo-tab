import * as React from "react";
import { SheetTemplate, useSheetInfo } from "../components/Sheet";
import { useState } from "react";
import SettingsContext, { useSettings } from "../components/SettingsContext";
import { getBarNotesForEditor } from "../utils";

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
  textPosition: number;
}> = ({ notes, title, textPosition }) => {
  const barsPerStave = 2;
  const { meter } = useSheetInfo();

  let bars = getBarNotesForEditor(notes, meter);
  const barsCount = bars.length;

  const subsetBars = getBarNotesForEditor(notes.substr(0, textPosition), meter);
  let currentBarIndex = Math.max(0, subsetBars.length - 1);

  let currentNoteIndexInBar = Math.max(0, (subsetBars[0] ?? []).length - 1);

  const previousSymbol = notes[textPosition - 1];
  const isNewBarStart =
    notes[textPosition] === "" &&
    (previousSymbol === undefined ||
      previousSymbol === "\n" ||
      (previousSymbol === ";" && subsetBars[currentBarIndex].length === meter));

  if (isNewBarStart) {
    bars = [
      ...bars.slice(0, currentBarIndex + 1),
      [],
      ...bars.slice(currentBarIndex + 1, barsCount),
    ];
    currentBarIndex++;
    currentNoteIndexInBar = 0;
  }

  const barsToShow = bars.slice(
    Math.max(0, currentBarIndex - 1),
    currentBarIndex + 1
  );

  const virtualNotes = barsToShow.map((notes) => notes.join(";")).join("\n");

  return (
    <SheetTemplate {...{ title, notes: virtualNotes, barsPerStave }}>
      <Cursor position={currentNoteIndexInBar} />
    </SheetTemplate>
  );
};

export default () => {
  const [notes, setNotes] = useState("");
  const [textPosition, setTextPosition] = useState(0);

  return (
    <>
      <SettingsContext {...{ sidePaddingEnabled: false, width: 400 }}>
        <VirtualSheet title="Editor" {...{ textPosition, notes }} />
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
