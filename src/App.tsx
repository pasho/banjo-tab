import React from 'react';
import './App.css';

const range = (length: number) => Array.from(Array(length).keys());

const Settings = {
  width: 800,
  height: 600,
  padding: 50,
  lineSpacing: 10,
  staveHeight: () => Settings.lineSpacing * 4,
  staveHeightWithPadding: () => Settings.staveHeight() + Settings.padding,
  staveWidth: () => Settings.width - Settings.padding * 2,
  barsPerStave: 7,
  barWidth: () => Settings.staveWidth() / Settings.barsPerStave,
  noteDigitCentreOffset: {
    x: -4,
    y: 4
  }  
}

const BarLine = (props: {
  x: number;
  y: number;
}) => <line x1={props.x} y1={props.y} x2={props.x} y2={props.y + Settings.staveHeight()} className="tab-line" />

const StaveLine = (props: {
  y: number
}) => <line x1={Settings.padding} y1={props.y} x2={Settings.width - Settings.padding} y2={props.y} className="tab-line" />

const Stave = (props: {
  y: number
}) => (
    <>
      {range(5).map(i => <StaveLine key={i} y={props.y + i * Settings.lineSpacing} />)}
      {range(Settings.barsPerStave + 1).map(i => <BarLine key={i} y={props.y} x={Settings.padding + i * Settings.barWidth()} />)}
      {/* Dummy notes */}
      {range(Settings.barsPerStave).map(barIndex => {
        // 4/4
        const noteSpaceWidth = Settings.barWidth() / 4;   
        const barX = Settings.padding + barIndex * Settings.barWidth()      
        return range(4).map(noteIndex => {
          const noteX = barX + noteIndex * noteSpaceWidth + noteSpaceWidth / 2 + Settings.noteDigitCentreOffset.x;
          const noteY = props.y + (3 - 1) * Settings.lineSpacing + Settings.noteDigitCentreOffset.y;
          return <text x={noteX} y={noteY} className="note">0</text>
        })
      })}
    </>
  )

function App() {  
  return (
    <div className="App">
      <svg height={Settings.height} width={Settings.width}>
        {range(5).map(i => <Stave key={i} y={Settings.padding + Settings.staveHeightWithPadding() * i} />)}
      </svg>
    </div>
  );
}

export default App;
