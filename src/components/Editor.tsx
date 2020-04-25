import React, { useEffect, useCallback, useState, useContext, useMemo } from 'react';
import { Sheet } from './Sheet';
import Cursor from './Cursor';

const EditorContext = React.createContext<{
  position: number;
}>({
  position: 0
});

export const useEditor = () => useContext(EditorContext);

const Editor = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [position, setPosition] = useState(0);

  const { move, addNote, del, backspace } = useMemo(() => ({
    move: (direction: "left" | "right") => {
      switch (direction) {
        case "left":
          setPosition(Math.max(0, position - 1));
          break;
        case "right":
          setPosition(Math.min(notes.length, position + 1));
          break;
      }
    },
    addNote: (note: string) => {
      setNotes(
        [
          ...notes.slice(0, position),
          note,
          ...notes.slice(position)
        ]
      );
      setPosition(position + 1);
    },
    del: () => {
      if (position < notes.length) {
        setNotes(
          [
            ...notes.slice(0, position),
            ...notes.slice(position + 1)
          ]);
      }
    },
    backspace: () => {
      setNotes(
        [
          ...notes.slice(0, Math.max(0, position - 1)),
          ...notes.slice(position)
        ]);
      setPosition(Math.max(0, position - 1));
    }
  }
  ), [position, setPosition, notes, setNotes]);

  const onKey = useCallback(({ keyCode }: KeyboardEvent) => {
    switch (keyCode) {
      case 37:
        move("left");
        break;
      case 39:
        move("right");
        break;
      case 8:
        backspace();
        break;
      case 46:
        del();
        break;
      case 66:
        addNote("b0000");
        break;
    }
  }, [move, addNote, backspace, del]);

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  return (
    <EditorContext.Provider value={{ position }}>
      <Sheet title="Editor" notes={notes.join(";")}>
        <Cursor />
      </Sheet>
    </EditorContext.Provider>
  )
}

export default Editor;