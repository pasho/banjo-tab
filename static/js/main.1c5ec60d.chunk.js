(this["webpackJsonpbanjo-tab"]=this["webpackJsonpbanjo-tab"]||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),m=n(20),i=n.n(m),c=(n(28),n(5)),l=n(9),o=n(8),s=n(1),u=n(14),b=function(e){return Array.from(Array(e).keys())},d=function(e){return b(5).map((function(t){return{stringIndex:t,fret:(null!==e&&void 0!==e?e:[])[t]}})).filter((function(e){var t=e.fret;return void 0!==t&&" "!==t})).map((function(e){var t=e.stringIndex,n=e.fret;if(isNaN(parseInt(n))){var r="abcdefghijklmnopqrst".indexOf(n);if(-1!==r)return{stringIndex:t,fret:(10+r).toString()}}return{stringIndex:t,fret:n}}))},h=function(e){var t,n=d(e);if(0!==n.length)return null===(t=n[0])||void 0===t?void 0:t.stringIndex},f=function(e,t){return Object.keys(e).reduce((function(e,n){return void 0!==t[n]?Object(s.a)(Object(s.a)({},e),Object(u.a)({},n,t[n])):e}),Object(s.a)({},e))},E={width:800,lineSpacing:10,sidePaddingEnabled:!0,textCharCentreOffset:{x:-3.5,y:4},noteHorizontalLineAdjustment:.5,showNotes:!1},g=function(e){return 5*e},p=function(e){return 4*e},v=function(e,t){return e?t:0},x=g(10),y=p(10),j=v(!0,x),O={padding:x,staveHeight:y,sidePadding:j,staveHeightWithPadding:y+x,staveWidth:800-2*j},k=r.createContext(Object(s.a)(Object(s.a)({},E),O)),C=function(){return Object(r.useContext)(k)},w=function(e){var t=f(C(),e),n=t.lineSpacing,a=t.sidePaddingEnabled,m=t.width,i=Object(r.useMemo)((function(){return g(n)}),[n]),c=Object(r.useMemo)((function(){return p(n)}),[n]),l=Object(r.useMemo)((function(){return v(a,n)}),[a,n]),o=Object(r.useMemo)((function(){return function(e,t){return e+t}(c,i)}),[c,i]),u=Object(r.useMemo)((function(){return function(e,t){return e-t}(m,l)}),[m,l]);return r.createElement(k.Provider,{value:Object(s.a)(Object(s.a)({},t),{},{padding:i,staveHeight:c,sidePadding:l,staveHeightWithPadding:o,staveWidth:u})},e.children)},A=function(e){var t=e.chord,n=e.noteX,a=e.staveY,m=e.width,i=C(),c=i.lineSpacing,l=i.textCharCentreOffset;if(!t)return null;var o=n+m/2+t.length*l.x,s=a-1.5*c+l.y;return r.createElement("text",{x:o,y:s},t)},G=function(e){var t,n=e.x,a=e.y,m=e.width,i=e.strings,c=T().tuning,l=C(),o=l.showNotes,s=l.lineSpacing,u=l.staveHeight,b=l.textCharCentreOffset,h=d(i).map((function(e){var t=e.stringIndex,n=e.fret;return o?{stringIndex:t,fret:n+function(e,t,n){var r="a\u266d a b\u266d b c c# d e\u266d e f f# g".split(" "),a=e.toLowerCase().split("").reverse()[t],m=r.indexOf(a);return r[(m+parseInt(n))%r.length]}(c,t,n)}:{stringIndex:t,fret:n}})),f=null!==(t=function(e){var t,n=d(e);if(0!==n.length)return null===(t=n[n.length-1])||void 0===t?void 0:t.stringIndex}(i))&&void 0!==t?t:0,E=a+s*(f+.5),g=a+u+s,p=n+.5*m;return r.createElement(r.Fragment,null,h.map((function(e){var t=e.stringIndex,n=e.fret,m=p+b.x*n.length,i=a+t*s+b.y;return r.createElement("text",{key:t,x:m,y:i},n)})),r.createElement("line",{x1:p,y1:E,x2:p,y2:g,strokeWidth:1,stroke:"black"}))},S=function(e){var t=C(),n=t.staveHeight,a=t.lineSpacing,m=t.noteHorizontalLineAdjustment,i=e.y+n+a,l=e.x+.25*e.width-m,o=e.x+.75*e.width+m,s=e.strings.split(","),u=Object(c.a)(s,2),b=u[0],d=u[1];return r.createElement(r.Fragment,null,r.createElement(G,{strings:b,width:.5*e.width,x:e.x,y:e.y}),r.createElement(G,{strings:d,width:.5*e.width,x:e.x+.5*e.width,y:e.y}),r.createElement("line",{x1:l,y1:i,x2:o,y2:i,strokeWidth:3,stroke:"black"}))},W=function(e){return r.createElement(S,{x:e.x,y:e.y,width:e.width,strings:e.strings+",    0"})},M=function(e){var t,n,a=C(),m=a.lineSpacing,i=a.textCharCentreOffset,l=a.staveHeight,o=e.strings.split(","),s=Object(c.a)(o,2),u=s[0],b=s[1],d=null!==(t=h(u))&&void 0!==t?t:0,f=null!==(n=h(b))&&void 0!==n?n:0,E=e.x+.25*e.width,g=e.x+.75*e.width,p=e.y+(d-.5)*m,v=e.y+(f-.5)*m,x=E+.5*m,y=g-.5*m,j=p-.5*m,O=v-.5*m,k=Math.min(j,O),w=e.label.length,A=e.x+.5*e.width+i.x*w,G=e.y+l+2*m+i.y;return r.createElement(r.Fragment,null,r.createElement(S,{x:e.x,y:e.y,width:e.width,strings:e.strings}),r.createElement("path",{d:"M ".concat(E," ").concat(p," C ").concat(x," ").concat(k,", ").concat(y," ").concat(k,", ").concat(g," ").concat(v),stroke:"black",strokeWidth:1,fill:"transparent"}),r.createElement("text",{x:A,y:G},e.label))},P=function(e){var t=-1===e.strings.indexOf(",")?e.strings.substr(0,e.strings.length-1)+"0,"+e.strings:e.strings;return r.createElement(M,Object(s.a)(Object(s.a)({},e),{strings:t,label:"H"}))},H=function(e){var t=-1===e.strings.indexOf(",")?e.strings+","+e.strings.substr(0,e.strings.length-1)+"0":e.strings;return r.createElement(M,Object(s.a)(Object(s.a)({},e),{strings:t,label:"P"}))},B=function(e){return r.createElement(M,Object.assign({},e,{label:"SL"}))},N=function(e){switch(e.noteType){case"b":return r.createElement(W,e);case"h":return r.createElement(P,e);case"p":return r.createElement(H,e);case"s":return r.createElement(B,e);case"m":return r.createElement(G,e);case"d":return r.createElement(S,e);default:return null}},D=function(e){var t=C();return r.createElement("line",{x1:e.x,y1:e.y,x2:e.x,y2:e.y+t.staveHeight,strokeWidth:1,stroke:"black"})},F=function(e){var t=C().sidePadding;return r.createElement("line",{x1:t,y1:e.y,x2:t+e.width,y2:e.y,strokeWidth:1,stroke:"black"})},I=function(e){var t=C(),n=t.lineSpacing,a=t.sidePadding,m=T(),i=m.barWidth,c=m.noteWidth,l=i*e.barNotes.length;return r.createElement(r.Fragment,null,b(5).map((function(t){return r.createElement(F,{key:t,y:e.y+t*n,width:l})})),b(e.barNotes.length+1).map((function(t){return r.createElement(D,{key:t,y:e.y,x:a+t*i})})),e.barNotes.map((function(t,n){var m=a+n*i;return t.map((function(t,n){var a=m+n*c,i=t.split(":").map((function(e){return e.trim()})).reduce((function(e,t){if(t[0]){if(t[0]===t[0].toUpperCase())return Object(s.a)(Object(s.a)({},e),{},{chord:t});if(t[0]===t[0].toLowerCase())return Object(s.a)(Object(s.a)({},e),{},{noteType:t[0],strings:t.substr(1)})}return e}),{noteType:"",strings:"",chord:""}),l=i.noteType,o=i.strings,u=i.chord;return r.createElement(r.Fragment,{key:n},r.createElement(A,{chord:u,noteX:a,staveY:e.y,width:c}),r.createElement(N,{noteType:l,strings:o,x:a,y:e.y,width:c}))}))})))},L=r.createContext({tuning:"gDGBd",meter:4,barsPerStave:4,barWidth:0,noteWidth:0}),T=function(){return Object(r.useContext)(L)},R=function(e){var t=e.notes,n=e.title,a=e.children,m=C(),i=m.width,c=m.padding,l=m.staveHeightWithPadding,o=m.staveWidth,u=f(T(),e),b=u.barsPerStave,d=u.tuning,h=u.meter,E=Object(r.useMemo)((function(){return function(e,t){return e/t}(o,b)}),[o,b]),g=Object(r.useMemo)((function(){return function(e,t){return e/t}(E,h)}),[E,h]),p=t.split(";").map((function(e){return e.trim()})).reduce((function(e,t,n){var r=Math.floor(n/u.meter),a=n%u.meter,m=Math.floor(r/b),i=r%b;return e[m]||(e[m]=[]),e[m][i]||(e[m][i]=[]),e[m][i][a]=t,e}),[]),v=.5*c+l*p.length;return r.createElement(L.Provider,{value:Object(s.a)(Object(s.a)({},u),{},{barWidth:E,noteWidth:g})},r.createElement("h1",null,n),r.createElement("p",null,d),r.createElement("svg",{viewBox:"0 0 ".concat(i," ").concat(v),preserveAspectRatio:"xMidYMid meet"},p.map((function(e,t){return r.createElement(I,{key:t,y:.5*c+l*t,barNotes:e})})),a))},K=function(){return a.a.createElement(R,{title:"Hop High Ladies v1",notes:"\n      G:h  0,  2;h 0, 1;m0;m  0;\n      s  2,  4;b0040;m 0;b0000;\n      h  0,  2;h 0, 1;m0;m  0;\n      D7:h  0,  2;b0120;m  2;b0120;\n      G:h  0,  2;h 0, 1;m0;m  0;\n      m 0;b0000;h 0, 1;m0;\n      C:m2;b2102;h0,2;b2102;\n      G:p 3, 0;m  0;D7:h  0,  2;b0120;\n\n      G:m  0;m5;p2,0;b0000;\n      s  2,  4;b0040;m 0;b0000;\n      m  0;m5;p2,0;b0000;\n      D7:h  0,  2;b0120;m  2;b0120;\n      G:m  0;m5;p2,0;b0000;\n      m 0;b0000;h 0, 1;m0;\n      C:m2;b2102;h0,2;b2102;\n      p 3, 0;m  0;D7:h  0,  2;b0120\n    "})},Y=function(){return a.a.createElement(R,{title:"Hop High Ladies v2",notes:"\n        G:h  0,  2;h 0, 1;m0;b  0;\n        s  2,  4;b  4;m 0;b0;\n        h  0,  2;h 0, 1;m0;b  0;\n        D7:h  0,  2;d0, 1;m  2;m   0;\n        G:h  0,  2;h 0, 1;m0;b  0;\n        m 0;b0;h 0, 1;m0;\n        C:m2;d2, 1;h0,2;d2, 1;\n        G:p 3, 0;m  0;D7:h  0,  2;m   0;\n  \n        G:m  0;m5;p2,0;d 0,  0;\n        s  2,  4;b  4;m 0;b0;\n        m  0;m5;p2,0;d 0,  0;\n        D7:h  0,  2;d0, 1;m  2;m   0;\n        G:m  0;m5;p2,0;d 0,  0;\n        m 0;b0;h 0, 1;m0;\n        C:m2;d2, 1;h0,2;d2, 1;\n        p 3, 0;m  0;D7:h  0,  2;m   0\n      "})},z=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,null),a.a.createElement(Y,null))},J=function(){return a.a.createElement(R,{title:"Worried Man's Blues",notes:"\n      G;;;m   0;\n      m   0;b0000;m   0;m   2;\n      m  0;b0000;b0000;m  0;\n      m 0;b0000;m 0;m  2;\n      m  0;b0000;m  0;m   0;\n      C:m   2;b2102;m  0;m   2;\n      m  0;b2102;m  0;m   2;\n      m  0;b2102;m  0;m   2;\n\n      G:m   0;b0000;b0000;m   0;\n      m   0;b0000;m   0;m   2;\n      m  0;b0000;b0000;m  0;\n      m 0;b0000;m 0;m  2;\n      m  0;b0000;m   4;m  0;\n      D7:m  2;b0120;b0120;m  2;\n      m 0;m  2;m  0;m   4;\n      G:m  0;b0000;m0000;\n    "})},X=function(){return a.a.createElement(R,{title:"Worried Man's Blues (octave up v.1)",notes:"\n      G;;;m  7;\n      m  7;b987;m  7;m  9;\n      m 8;b987;b987;m 8;\n      m9;b987;m9;m a;\n      m 8;b987;m 8;m  7;\n      C:m  9;ba89;m 8;m  9;\n      m 8;ba89;m 8;m  9;\n      m 8;ba89;m 8;m  9;\n\n      G:m  7;b987;b987;m  7;\n      m  7;b987;m  7;m  9;\n      m 8;b987;b987;m 8;\n      m9;b987;m9;m a;\n      m 8;b987; m 7;m 8;\n      D7:m a;baa7;baa7;m a;\n      G:m9;m a;m 8;m 7;\n      m 8;b987;m987\n    "})},q=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(J,null),a.a.createElement(X,null))},U=n(7),$=function(){var e=V().position,t=C(),n=t.padding,a=t.lineSpacing,m=n+(.1+e)*T().noteWidth,i=.5*n-.5*a,c=i+5*a;return r.createElement("line",{x1:m,y1:i,x2:m,y2:c,strokeWidth:1,stroke:"black"},r.createElement("animate",{attributeName:"visibility",from:"visible",to:"hidden",dur:"1s",repeatCount:"indefinite"}))},Q=a.a.createContext({position:0,meter:4}),V=function(){return Object(r.useContext)(Q)},Z=function(){var e=Object(r.useState)([]),t=Object(c.a)(e,2),n=t[0],m=t[1],i=Object(r.useState)(0),l=Object(c.a)(i,2),o=l[0],s=l[1],u=Object(r.useMemo)((function(){return{move:function(e){switch(e){case"left":s(Math.max(0,o-1));break;case"right":s(Math.min(n.length,o+1))}},addNote:function(e){m([].concat(Object(U.a)(n.slice(0,o)),[e],Object(U.a)(n.slice(o)))),s(o+1)},del:function(){o<n.length&&m([].concat(Object(U.a)(n.slice(0,o)),Object(U.a)(n.slice(o+1))))},backspace:function(){m([].concat(Object(U.a)(n.slice(0,Math.max(0,o-1))),Object(U.a)(n.slice(o)))),s(Math.max(0,o-1))}}}),[o,s,n,m]),b=u.move,d=u.addNote,h=u.del,f=u.backspace,E=Object(r.useCallback)((function(e){switch(e.keyCode){case 37:b("left");break;case 39:b("right");break;case 8:f();break;case 46:h();break;case 66:d("b0000")}}),[b,d,f,h]);Object(r.useEffect)((function(){return document.addEventListener("keydown",E),function(){return document.removeEventListener("keydown",E)}}),[E]);return a.a.createElement(Q.Provider,{value:{position:o,meter:4}},a.a.createElement(R,{title:"Editor",meter:4,notes:n.join(";")},a.a.createElement($,null)))},_=function(e){var t=e.position,n=C(),a=n.sidePadding,m=n.staveHeightWithPadding,i=T().noteWidth,c=a+t*i;return r.createElement("rect",Object.assign({x:c,y:0,width:i,height:m},{strokeWidth:1,stroke:"black",fill:"transparent"}))},ee=function(e){var t=e.notes,n=e.title,a=e.position,m=t.split(";"),i=m.length,c=2*T().meter,l=Math.max(0,m.length-c),o=i;if(a<l){var s=l-a;l=a,o-=s}var u=m.slice(l,o),d=Math.max(0,c-m.length),h=b(d).map((function(e){return""})),f=[].concat(Object(U.a)(u),Object(U.a)(h)).join(";"),E=a-l;return r.createElement(R,Object.assign({title:n,notes:f,barsPerStave:2},{notes:f}),r.createElement(_,{position:E}))},te=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],m=Object(r.useState)(0),i=Object(c.a)(m,2),l=i[0],o=i[1],s=n.substr(0,l).split(";").length-1;return r.createElement(r.Fragment,null,r.createElement(w,{sidePaddingEnabled:!1,width:400},r.createElement(ee,Object.assign({title:"Editor"},{position:s,notes:n}))),r.createElement("br",null),r.createElement("textarea",{rows:10,onSelect:function(e){return o(e.target.selectionStart)},onChange:function(e){return a(e.target.value)},value:n}))},ne=function(){return a.a.createElement(R,{title:"Rose Tattoo",tuning:"gDGBd",meter:4,notes:"\n  Am:m  2;b2122;m  2;b  0;\n  m  2;b  0;m  2;b 0;\n  C:m 1;b2102;m 1;m0;\n  h0,2;b2102;p2,0;b 1;\n  G:m0;b0000;m0;m 1;\n  b0;b2;b0;b 1;\n  Am:m 1;b2122;m 0;b2022;\n  m  2;b2122;m  2;b2122\n"})},re=(n(29),function(){return a.a.createElement(R,{title:"Sandy River Belle A",notes:"\n      h   2;h  2;s  2,  4;b0040;\n      p  2;b0000;m2;m0;\n      h   2;h  2;s  2,  4;b0040;\n      p  2;b0000;m   2;m   0;\n\n      h   2;h  2;s  2,  4;b0040;\n      p  2;b0000;m2;m0;\n      d0, 5;d5, 5;d0, 5;d5, 5;\n      d0, 0;s  2,  4;m  0;b0000\n    "})}),ae=function(){return a.a.createElement(R,{title:"Sandy River Belle B",notes:"\n      b0;b5;d 5,  7;b 5;\n      m9;d9, 8;d7, 8;d9, 8;\n      b0;b5;d 5,  7;b 5;\n      d 7,  9;b 7;m7;b7777;\n\n      b0;b5;d 5,  7;b 5;\n      m9;d9, 8;d7, 8;d9, 8;\n      d0, 5;d5, 5;d0, 5;d5, 5;\n      d0, 0;s  2,  4;m  0;b0000\n    "})},me=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null),a.a.createElement(ae,null))},ie=function(){return a.a.createElement(R,{title:"Russian National Anthem (short)",tuning:"gCGBd",barsPerStave:5,notes:"\n      C:;;;d    x,  0;\n      C:b 1;h  2;G:b 0;d   4,   4;\n      Am:b  2;d  0,   5;C:b  0;d   0,   0;\n      Dm:b   2;s   2,   4;F:b   5;p   5,  0;\n      Am:b  2;h 1;G:m0;d    x,  0;\n      C:b2;d0, 1;G:b0;d 0,  0;\n      Am:b 1;d 0,  2;Em:b 0;d   4,   4;\n      F:b  2;d  0,   5;C:b  0;d   0,   0;\n      C:b 1; d 0,  2;m  0\n    "})},ce=function(){var e="\n    C:b 1;h  2;G:b 0;d   4,   4;\n    Am:b  2;d  0,   5;C:b  0;d   0,   0;\n    Dm:b   2;s   2,   4;F:b   5;p   5,  0;\n    Am:b  2;h 1;G:b0002;d    x,  0;\n    C:b2;d0, 1;G:b0;d 0,  0;\n    Am:b 1;d 0,  2;Em:b 0;d   4,   4;\n    F:b  2;d  0,   5;C:b  0;d   0,   0;\n    C:b 1; d 0,  2;G:p  0, 0;h 1, 3;\n    C:m2;b2100;d0, 1;h 1;\n    G:m0;b0002;p  0, 0;h 1, 3;\n    C:m 1;b2100;d 0,  2;h  2;    \n    G:m 0;b0002;p   4,  0;p  2, 0;\n    C:b 1;p  2, 0;b 1;p  2, 0;\n    b 1;p  2, 1;F:m3;b3120;\n    F:m3;b3120;G:p2;p 1;\n    C:m2;b2100;m 1;b2100;\n    G:m0;b0002;p 1;p  2;\n    Am:m 1;b2120;m  2;b2120;\n    C:b 1;d 0,  2;b  0;d   0,   0;\n  ";return a.a.createElement(R,{title:"Russian National Anthem (full)",tuning:"gCGBd",barsPerStave:5,notes:"\n      C:m2100;;;d    x,  0;     \n      ".concat(e,"\n      C:b 1;d 0,  2;b  0;d    x,  0;\n      ").concat(e,"\n      G:m  0;m000;C:m  2;m 0;\n      m2100;\n    ")})},le=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ie,null),a.a.createElement(ce,null))},oe=function(){var e="\n    E:m2;h 1;\n    m0;p 1;\n    Am:m  2;d  2, 1;\n    m2;d0, 1;\n    E7:m 0;d    x, 1;\n    m0;m2;\n    Am:m 1;m  2;\n    m  2;;\n    Dm:d    x,0;d    x,3;\n    m7;p5,3;\n    Am/C:m2;d    x, 1;\n    m2;d0, 1;\n    E7:m 0;h 1;\n    m0;m2;\n    Am:m 1;m  2;\n    m  2;\n  ";return a.a.createElement(R,{title:"Korobeiniki (original)",tuning:"gDGBd",barsPerStave:10,meter:2,notes:"\n        ".concat(e,";\n        ").concat(e,";\n        Am:m2;;\n        m 1;;\n        E:m0;;\n        m 0;;\n        Am:m 1;;\n        m  2;;\n        E:m  1;;\n        m 0;;\n        Am:m2;;\n        m 1;;\n        E:m0;;\n        m 0;;\n        Am:m 1;m2;\n        m7;m7;\n        E:m6;;\n        ;;\n        ").concat(e,";\n        ").concat(e,"\n\n\n    ")})},se=function(){var e="\n    E:b2;h 1;\n    b0;p 1;\n    Am:m  2;d  2, 1;\n    b2;d0, 1;\n    E7:b 0;h 1;\n    b0;m2;\n    Am:b 1;m  2;\n    m  2;;\n    Dm:p3;h3;\n    b7;p5,3;\n    Am/C:b2;h 1;\n    b2;d0, 1;\n    E7:b 0;h 1;\n    b0;m2;\n    Am:b 1;m  2;\n    m  2;\n  ";return a.a.createElement(R,{title:"Korobeiniki (clawhammer)",tuning:"gDGBd",barsPerStave:10,meter:2,notes:"\n        ".concat(e,";\n        ").concat(e,";\n        Am:m2;;\n        m 1;;\n        E:m0;;\n        m 0;;\n        Am:m 1;;\n        m  2;;\n        E:m  1;;\n        m 0;;\n        Am:m2;;\n        m 1;;\n        E:m0;;\n        m 0;;\n        Am:m 1;m2;\n        m7;m7;\n        E:m6;;\n        ;;\n        ").concat(e,";\n        ").concat(e,"\n\n\n    ")})},ue=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(oe,null),a.a.createElement(se,null))},be=function(e){var t=e.path,n=e.title,m=e.children;return Object(r.useEffect)((function(){document.title="Banjo Tab :: "+n})),a.a.createElement(l.b,{path:t},m)},de=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],m=t[1];return a.a.createElement(o.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"content"},a.a.createElement("span",null,a.a.createElement("input",{type:"checkbox",id:"showNotes",checked:n,onChange:function(){return m(!n)}}),a.a.createElement("label",{htmlFor:"showNotes"},"Show Notes"),a.a.createElement("br",null),a.a.createElement(o.b,{to:"/worried-man"},"Worried Man's Blues"),"::",a.a.createElement(o.b,{to:"/hop-high-ladies"},"Hop High Ladies"),"::",a.a.createElement(o.b,{to:"/rose-tattoo"},"Rose Tattoo"),"::",a.a.createElement(o.b,{to:"/sandy-river-belle"},"Sandy River Belle"),"::",a.a.createElement(o.b,{to:"/anthems"},"Anthems"),"::",a.a.createElement(o.b,{to:"/korobeiniki"},"Korobeiniki"),"::",a.a.createElement(o.b,{to:"/text-editor"},"Text Editor")),a.a.createElement(w,{showNotes:n},a.a.createElement(l.d,null,a.a.createElement(be,{path:"/worried-man",title:"Worried Man's Blues"},a.a.createElement(q,null)),a.a.createElement(be,{path:"/hop-high-ladies",title:"Hop High Ladies"},a.a.createElement(z,null)),a.a.createElement(be,{path:"/rose-tattoo",title:"Rose Tattoo"},a.a.createElement(ne,null)),a.a.createElement(be,{path:"/interactive-editor",title:"Interactive Editor"},a.a.createElement(Z,null)),a.a.createElement(be,{path:"/text-editor",title:"Text Editor"},a.a.createElement(te,null)),a.a.createElement(be,{path:"/sandy-river-belle",title:"Sandy River Belle"},a.a.createElement(me,null)),a.a.createElement(be,{path:"/anthems",title:"Anthems"},a.a.createElement(le,null)),a.a.createElement(be,{path:"/korobeiniki",title:"Korobeiniki"},a.a.createElement(ue,null)),a.a.createElement(l.b,{path:"/"},a.a.createElement(l.a,{to:"/worried-man"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.1c5ec60d.chunk.js.map