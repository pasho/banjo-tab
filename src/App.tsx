import React from 'react';
import './App.css';
import { settings } from 'cluster';

const range = (length: number) => Array.from(Array(length).keys());

const Settings = {
  width: 800,
  height: 600,
  padding: 50,
  lineSpacing: 10,
  staveHeight: () => Settings.lineSpacing * 5,
  staveHeightWithPadding: () => Settings.staveHeight() + Settings.padding
}

const Line = (props: {  
  y: number
}) => <line x1={Settings.padding} y1={props.y} x2={Settings.width - Settings.padding} y2={props.y} className="tab-line" />

function App() {
  return (
    <div className="App">
      <svg height={Settings.height} width={Settings.width}>
        {range(5).map(i => {
          return range(5).map(j => {
            const y = Settings.padding + Settings.staveHeightWithPadding() * i + j * Settings.lineSpacing;                   
            return (
              <Line key={j} y={y} />
            )
          })
        })}
        
      </svg>
    </div>
  );
}

export default App;
