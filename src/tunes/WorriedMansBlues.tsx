import React from 'react';
import { Sheet } from '../components/Sheet';
import { StyleProvider } from '../components/StyleProvider';

export const WorriedMansBluesOriginal = () =>
  <Sheet
    title="Worried Man's Blues"
    notes={`
      G;;;m   0;
      m   0;b0000;m   0;m   2;
      m  0;b0000;b0000;m  0;
      m 0;b0000;m 0;m  2;
      m  0;b0000;m  0;m   0;
      C:m   2;b2102;m  0;m   2;
      m  0;b2102;m  0;m   2;
      m  0;b2102;m  0;m   2;

      G:m   0;b0000;b0000;m   0;
      m   0;b0000;m   0;m   2;
      m  0;b0000;b0000;m  0;
      m 0;b0000;m 0;m  2;
      m  0;b0000;m   4;m  0;
      D7:m  2;b0120;b0120;m  2;
      m 0;m  2;m  0;m   4;
      G:m  0;b0000;m0000;
    `} />;

export const WorriedMansBluesOctaveUpV1 = () =>
  <Sheet
    title="Worried Man's Blues (octave up v.1)"
    notes={`
      G;;;m  7;
      m  7;b987;m  7;m  9;
      m 8;b987;b987;m 8;
      m9;b987;m9;m a;
      m 8;b987;m 8;m  7;
      C:m  9;ba89;m 8;m  9;
      m 8;ba89;m 8;m  9;
      m 8;ba89;m 8;m  9;

      G:m  7;b987;b987;m  7;
      m  7;b987;m  7;m  9;
      m 8;b987;b987;m 8;
      m9;b987;m9;m a;
      m 8;b987; m 7;m 8;
      D7:m a;baa7;baa7;m a;
      G:m9;m a;m 8;m 7;
      m 8;b987;m987
    `} />;

export default () => (
  <>
    <StyleProvider {...{showNotes: false}}>
      <WorriedMansBluesOriginal/>
      <WorriedMansBluesOctaveUpV1/>
    </StyleProvider>
  </>
)