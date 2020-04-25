import React, { useState, useEffect } from 'react';
import { Sheet, useSheet } from '../components/Sheet';
import * as Settings from "../settings";
import { useStyle } from '../components/StyleProvider';

const Cursor = (props: { position: number }) => {
  const [position, setPosition] = useState(props.position);
  const onKey = ({ keyCode }: KeyboardEvent) => {
    switch (keyCode) {
      case 37:
        setPosition(position => Math.max(0, position - 1))
        break;
      case 39:
        setPosition(position => position + 1)
        break;
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  const { meter } = useSheet()

  const { barsPerStave } = useStyle();
  const noteWidth = Settings.width / barsPerStave / meter;
  const x = Settings.padding() + (.1 + position) * noteWidth;
  const height = Settings.lineSpacing * 5;
  const y1 = .5 * Settings.padding() - .5 * Settings.lineSpacing;
  const y2 = y1 + height;

  return (
    <line 
      x1={x} y1={y1} x2={x} y2={y2} 
      strokeWidth={1} stroke="black">
      <animate attributeName="visibility" from="visible" to="hidden" dur="1s" repeatCount="indefinite" />
    </line>
  )
}

export default () => {
  return (
    <>
      <Sheet title="Editor" notes="">
        <Cursor position={0} />
      </Sheet>
    </>
  )

}
