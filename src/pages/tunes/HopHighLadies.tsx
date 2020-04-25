import React from 'react';
import { Sheet } from '../../components/Sheet';

export const HopHighLadies1 = () =>
  <Sheet
    title="Hop High Ladies v1"
    notes={`
      G:h  0,  2;h 0, 1;m0;m  0;
      s  2,  4;b0040;m 0;b0000;
      h  0,  2;h 0, 1;m0;m  0;
      D7:h  0,  2;b0120;m  2;b0120;
      G:h  0,  2;h 0, 1;m0;m  0;
      m 0;b0000;h 0, 1;m0;
      C:m2;b2102;h0,2;b2102;
      G:p 3, 0;m  0;D7:h  0,  2;b0120;

      G:m  0;m5;p2,0;b0000;
      s  2,  4;b0040;m 0;b0000;
      m  0;m5;p2,0;b0000;
      D7:h  0,  2;b0120;m  2;b0120;
      G:m  0;m5;p2,0;b0000;
      m 0;b0000;h 0, 1;m0;
      C:m2;b2102;h0,2;b2102;
      p 3, 0;m  0;D7:h  0,  2;b0120
    `} />;

export const HopHighLadies2 = () =>
  <Sheet
    title="Hop High Ladies v2"
    notes={`
        G:h  0,  2;h 0, 1;m0;b  0;
        s  2,  4;b  4;m 0;b0;
        h  0,  2;h 0, 1;m0;b  0;
        D7:h  0,  2;d0, 1;m  2;m   0;
        G:h  0,  2;h 0, 1;m0;b  0;
        m 0;b0;h 0, 1;m0;
        C:m2;d2, 1;h0,2;d2, 1;
        G:p 3, 0;m  0;D7:h  0,  2;m   0;
  
        G:m  0;m5;p2,0;d 0,  0;
        s  2,  4;b  4;m 0;b0;
        m  0;m5;p2,0;d 0,  0;
        D7:h  0,  2;d0, 1;m  2;m   0;
        G:m  0;m5;p2,0;d 0,  0;
        m 0;b0;h 0, 1;m0;
        C:m2;d2, 1;h0,2;d2, 1;
        p 3, 0;m  0;D7:h  0,  2;m   0
      `} />;

export default () => (
  <>
    <HopHighLadies1 />
    <HopHighLadies2 />
  </>
);