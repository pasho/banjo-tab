(this["webpackJsonpbanjo-tab"]=this["webpackJsonpbanjo-tab"]||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),m=n(20),c=n.n(m),i=(n(28),n(4)),l=n(9),o=n(8),u=n(2),b=n(1),d=n(14),s=function(e){return Array.from(Array(e).keys())},h=function(e){return s(5).map((function(t){return{stringIndex:t,fret:(null!==e&&void 0!==e?e:[])[t]}})).filter((function(e){var t=e.fret;return void 0!==t&&" "!==t})).map((function(e){var t=e.stringIndex,n=e.fret;if(isNaN(parseInt(n))){var a="abcdefghijklmnopqrst".indexOf(n);if(-1!==a)return{stringIndex:t,fret:(10+a).toString()}}return{stringIndex:t,fret:n}}))},p=function(e){var t,n=h(e);if(0!==n.length)return null===(t=n[0])||void 0===t?void 0:t.stringIndex},E=function(e,t){return Object.keys(e).reduce((function(e,n){return void 0!==t[n]?Object(u.a)(Object(u.a)({},e),Object(d.a)({},n,t[n])):e}),Object(u.a)({},e))},g=function(e,t){return e.split("\n").map((function(e){return e.trim()})).filter((function(e){return e})).map((function(e){return e.split(";").map((function(e){return e.trim()})).reduce((function(e,n,a){if(a%t===0)return[[n]].concat(Object(b.a)(e));var r=Object(i.a)(e,1)[0],m=e.slice(1);return[[].concat(Object(b.a)(r),[n])].concat(Object(b.a)(m))}),[]).reverse()})).reduce((function(e,t){return[].concat(Object(b.a)(e),Object(b.a)(t))}),[]).filter((function(e){return!(1===e.length&&""===e[0])}))},f=function(e,t){return e.split("\n").map((function(e){return e.trim()})).map((function(e){return e.split(";").map((function(e){return e.trim()})).reduce((function(e,n,a){if(a%t===0)return[[n]].concat(Object(b.a)(e));var r=Object(i.a)(e,1)[0],m=e.slice(1);return[[].concat(Object(b.a)(r),[n])].concat(Object(b.a)(m))}),[]).reverse()})).reduce((function(e,t){return[].concat(Object(b.a)(e),Object(b.a)(t))}),[])},v={width:800,lineSpacing:10,sidePaddingEnabled:!0,textCharCentreOffset:{x:-3.5,y:4},noteHorizontalLineAdjustment:.5,showNotes:!1},j=function(e){return 5*e},x=function(e){return 4*e},O=function(e,t){return e?t:0},y=j(10),k=x(10),w=O(!0,y),C={padding:y,staveHeight:k,sidePadding:w,staveHeightWithPadding:k+y,staveWidth:800-2*w},G=a.createContext(Object(u.a)(Object(u.a)({},v),C)),S=function(){return Object(a.useContext)(G)},A=function(e){var t=E(S(),e),n=t.lineSpacing,r=t.sidePaddingEnabled,m=t.width,c=Object(a.useMemo)((function(){return j(n)}),[n]),i=Object(a.useMemo)((function(){return x(n)}),[n]),l=Object(a.useMemo)((function(){return O(r,n)}),[r,n]),o=Object(a.useMemo)((function(){return function(e,t){return e+t}(i,c)}),[i,c]),b=Object(a.useMemo)((function(){return function(e,t){return e-t}(m,l)}),[m,l]);return a.createElement(G.Provider,{value:Object(u.a)(Object(u.a)({},t),{},{padding:c,staveHeight:i,sidePadding:l,staveHeightWithPadding:o,staveWidth:b})},e.children)},D=function(e){var t=e.chord,n=e.noteX,r=e.staveY,m=e.width,c=S(),i=c.lineSpacing,l=c.textCharCentreOffset;if(!t)return null;var o=n+m/2+t.length*l.x,u=r-1.5*i+l.y;return a.createElement("text",{x:o,y:u},t)},M=function(e){var t,n=e.x,r=e.y,m=e.width,c=e.strings,i=Y().tuning,l=S(),o=l.showNotes,u=l.lineSpacing,b=l.staveHeight,d=l.textCharCentreOffset,s=h(c).map((function(e){var t=e.stringIndex,n=e.fret;return o?{stringIndex:t,fret:n+function(e,t,n){var a="a\u266d a b\u266d b c c# d e\u266d e f f# g".split(" "),r=e.toLowerCase().split("").reverse()[t],m=a.indexOf(r),c=a[(m+parseInt(n))%a.length];return null!==c&&void 0!==c?c:""}(i,t,n)}:{stringIndex:t,fret:n}})),p=null!==(t=function(e){var t,n=h(e);if(0!==n.length)return null===(t=n[n.length-1])||void 0===t?void 0:t.stringIndex}(c))&&void 0!==t?t:0,E=r+u*(p+.5),g=r+b+u,f=n+.5*m;return a.createElement(a.Fragment,null,s.map((function(e){var t=e.stringIndex,n=e.fret,m=f+d.x*n.length,c=r+t*u+d.y;return a.createElement("text",{key:t,x:m,y:c},n)})),a.createElement("line",{x1:f,y1:E,x2:f,y2:g,strokeWidth:1,stroke:"black"}))},P=function(e){var t=S(),n=t.staveHeight,r=t.lineSpacing,m=t.noteHorizontalLineAdjustment,c=e.y+n+r,l=e.x+.25*e.width-m,o=e.x+.75*e.width+m,u=e.strings.split(","),b=Object(i.a)(u,2),d=b[0],s=b[1];return a.createElement(a.Fragment,null,a.createElement(M,{strings:d,width:.5*e.width,x:e.x,y:e.y}),a.createElement(M,{strings:s,width:.5*e.width,x:e.x+.5*e.width,y:e.y}),a.createElement("line",{x1:l,y1:c,x2:o,y2:c,strokeWidth:3,stroke:"black"}))},W=function(e){return a.createElement(P,{x:e.x,y:e.y,width:e.width,strings:e.strings+",    0"})},F=function(e){var t,n,r=S(),m=r.lineSpacing,c=r.textCharCentreOffset,l=r.staveHeight,o=e.strings.split(","),u=Object(i.a)(o,2),b=u[0],d=u[1],s=null!==(t=p(b))&&void 0!==t?t:0,h=null!==(n=p(d))&&void 0!==n?n:0,E=e.x+.25*e.width,g=e.x+.75*e.width,f=e.y+(s-.5)*m,v=e.y+(h-.5)*m,j=E+.5*m,x=g-.5*m,O=f-.5*m,y=v-.5*m,k=Math.min(O,y),w=e.label.length,C=e.x+.5*e.width+c.x*w,G=e.y+l+2*m+c.y;return a.createElement(a.Fragment,null,a.createElement(P,{x:e.x,y:e.y,width:e.width,strings:e.strings}),a.createElement("path",{d:"M ".concat(E," ").concat(f," C ").concat(j," ").concat(k,", ").concat(x," ").concat(k,", ").concat(g," ").concat(v),stroke:"black",strokeWidth:1,fill:"transparent"}),a.createElement("text",{x:C,y:G},e.label))},B=function(e){var t=-1===e.strings.indexOf(",")?e.strings.substr(0,e.strings.length-1)+"0,"+e.strings:e.strings;return a.createElement(F,Object(u.a)(Object(u.a)({},e),{strings:t,label:"H"}))},N=function(e){var t=-1===e.strings.indexOf(",")?e.strings+","+e.strings.substr(0,e.strings.length-1)+"0":e.strings;return a.createElement(F,Object(u.a)(Object(u.a)({},e),{strings:t,label:"P"}))},H=function(e){return a.createElement(F,Object.assign({},e,{label:"SL"}))},I=function(e){switch(e.noteType){case"b":return a.createElement(W,e);case"h":return a.createElement(B,e);case"p":return a.createElement(N,e);case"s":return a.createElement(H,e);case"m":return a.createElement(M,e);case"d":return a.createElement(P,e);default:return null}},L=function(e){var t=S();return a.createElement("line",{x1:e.x,y1:e.y,x2:e.x,y2:e.y+t.staveHeight,strokeWidth:1,stroke:"black"})},K=function(e){var t=S().sidePadding;return a.createElement("line",{x1:t,y1:e.y,x2:t+e.width,y2:e.y,strokeWidth:1,stroke:"black"})},R=function(e){var t=S(),n=t.lineSpacing,r=t.sidePadding,m=Y(),c=m.barWidth,i=m.noteWidth,l=c*e.barNotes.length;return a.createElement(a.Fragment,null,s(5).map((function(t){return a.createElement(K,{key:t,y:e.y+t*n,width:l})})),s(e.barNotes.length+1).map((function(t){return a.createElement(L,{key:t,y:e.y,x:r+t*c})})),e.barNotes.map((function(t,n){var m=r+n*c;return t.map((function(t,n){var r=m+n*i,c=t.split(":").map((function(e){return e.trim()})).reduce((function(e,t){if(t[0]){if(t[0]===t[0].toUpperCase())return Object(u.a)(Object(u.a)({},e),{},{chord:t});if(t[0]===t[0].toLowerCase())return Object(u.a)(Object(u.a)({},e),{},{noteType:t[0],strings:t.substr(1)})}return e}),{noteType:"",strings:"",chord:""}),l=c.noteType,o=c.strings,b=c.chord;return a.createElement(a.Fragment,{key:n},a.createElement(D,{chord:b,noteX:r,staveY:e.y,width:i}),a.createElement(I,{noteType:l,strings:o,x:r,y:e.y,width:i}))}))})))},T=a.createContext({tuning:"gDGBd",meter:4,barsPerStave:4,barWidth:0,noteWidth:0}),Y=function(){return Object(a.useContext)(T)},z=function(e){var t=e.notes,n=e.children,r=S(),m=r.width,c=r.padding,l=r.staveHeightWithPadding,o=r.staveWidth,d=E(Y(),e),s=d.barsPerStave,h=d.meter,p=Object(a.useMemo)((function(){return function(e,t){return e/t}(o,s)}),[o,s]),f=Object(a.useMemo)((function(){return function(e,t){return e/t}(p,h)}),[p,h]),v=function(e,t,n){return g(e,t).reduce((function(e,t,a){if(a%n===0)return[[t]].concat(Object(b.a)(e));var r=Object(i.a)(e,1)[0],m=e.slice(1);return[[].concat(Object(b.a)(r),[t])].concat(Object(b.a)(m))}),[]).reverse()}(t,h,s),j=.5*c+l*v.length;return a.createElement(T.Provider,{value:Object(u.a)(Object(u.a)({},d),{},{barWidth:p,noteWidth:f})},a.createElement("svg",{viewBox:"0 0 ".concat(m," ").concat(j),preserveAspectRatio:"xMidYMid meet"},v.map((function(e,t){return a.createElement(R,{key:t,y:.5*c+l*t,barNotes:e})})),n))},J=function(e){var t=e.title,n=e.description,r=e.tuning;return a.createElement(a.Fragment,null,a.createElement("h1",null,t),n&&a.createElement("p",null,n),a.createElement("p",null,r),a.createElement(z,e))},X=function(){return r.a.createElement(J,{title:"Hop High Ladies v1",notes:"\n      G:h  0,  2;h 0, 1;m0;m  0;\n      s  2,  4;b0040;m 0;b0000;\n      h  0,  2;h 0, 1;m0;m  0;\n      D7:h  0,  2;b0120;m  2;b0120;\n      G:h  0,  2;h 0, 1;m0;m  0;\n      m 0;b0000;h 0, 1;m0;\n      C:m2;b2102;h0,2;b2102;\n      G:p 3, 0;m  0;D7:h  0,  2;b0120;\n\n      G:m  0;m5;p2,0;b0000;\n      s  2,  4;b0040;m 0;b0000;\n      m  0;m5;p2,0;b0000;\n      D7:h  0,  2;b0120;m  2;b0120;\n      G:m  0;m5;p2,0;b0000;\n      m 0;b0000;h 0, 1;m0;\n      C:m2;b2102;h0,2;b2102;\n      p 3, 0;m  0;D7:h  0,  2;b0120\n    "})},q=function(){return r.a.createElement(J,{title:"Hop High Ladies v2",notes:"\n        G:h  0,  2;h 0, 1;m0;b  0;\n        s  2,  4;b  4;m 0;b0;\n        h  0,  2;h 0, 1;m0;b  0;\n        D7:h  0,  2;d0, 1;m  2;m   0;\n        G:h  0,  2;h 0, 1;m0;b  0;\n        m 0;b0;h 0, 1;m0;\n        C:m2;d2, 1;h0,2;d2, 1;\n        G:p 3, 0;m  0;D7:h  0,  2;m   0;\n  \n        G:m  0;m5;p2,0;d 0,  0;\n        s  2,  4;b  4;m 0;b0;\n        m  0;m5;p2,0;d 0,  0;\n        D7:h  0,  2;d0, 1;m  2;m   0;\n        G:m  0;m5;p2,0;d 0,  0;\n        m 0;b0;h 0, 1;m0;\n        C:m2;d2, 1;h0,2;d2, 1;\n        p 3, 0;m  0;D7:h  0,  2;m   0\n      "})},U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement(q,null))},$=function(){return r.a.createElement(J,{title:"Worried Man's Blues",notes:"\n      G;;;m   0;\n      m   0;b0000;m   0;m   2;\n      m  0;b0000;b0000;m  0;\n      m 0;b0000;m 0;m  2;\n      m  0;b0000;m  0;m   0;\n      C:m   2;b2102;m  0;m   2;\n      m  0;b2102;m  0;m   2;\n      m  0;b2102;m  0;m   2;\n\n      G:m   0;b0000;b0000;m   0;\n      m   0;b0000;m   0;m   2;\n      m  0;b0000;b0000;m  0;\n      m 0;b0000;m 0;m  2;\n      m  0;b0000;m   4;m  0;\n      D7:m  2;b0120;b0120;m  2;\n      m 0;m  2;m  0;m   4;\n      G:m  0;b0000;m0000;\n    "})},Q=function(){return r.a.createElement(J,{title:"Worried Man's Blues (octave up v.1)",notes:"\n      G;;;m  7;\n      m  7;b987;m  7;m  9;\n      m 8;b987;b987;m 8;\n      m9;b987;m9;m a;\n      m 8;b987;m 8;m  7;\n      C:m  9;ba89;m 8;m  9;\n      m 8;ba89;m 8;m  9;\n      m 8;ba89;m 8;m  9;\n\n      G:m  7;b987;b987;m  7;\n      m  7;b987;m  7;m  9;\n      m 8;b987;b987;m 8;\n      m9;b987;m9;m a;\n      m 8;b987; m 7;m 8;\n      D7:m a;baa7;baa7;m a;\n      G:m9;m a;m 8;m 7;\n      m 8;b987;m987\n    "})},V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(Q,null))},Z=function(){var e=ee().position,t=S(),n=t.padding,r=t.lineSpacing,m=n+(.1+e)*Y().noteWidth,c=.5*n-.5*r,i=c+5*r;return a.createElement("line",{x1:m,y1:c,x2:m,y2:i,strokeWidth:1,stroke:"black"},a.createElement("animate",{attributeName:"visibility",from:"visible",to:"hidden",dur:"1s",repeatCount:"indefinite"}))},_=r.a.createContext({position:0,meter:4}),ee=function(){return Object(a.useContext)(_)},te=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],m=t[1],c=Object(a.useState)(0),l=Object(i.a)(c,2),o=l[0],u=l[1],d=Object(a.useMemo)((function(){return{move:function(e){switch(e){case"left":u(Math.max(0,o-1));break;case"right":u(Math.min(n.length,o+1))}},addNote:function(e){m([].concat(Object(b.a)(n.slice(0,o)),[e],Object(b.a)(n.slice(o)))),u(o+1)},del:function(){o<n.length&&m([].concat(Object(b.a)(n.slice(0,o)),Object(b.a)(n.slice(o+1))))},backspace:function(){m([].concat(Object(b.a)(n.slice(0,Math.max(0,o-1))),Object(b.a)(n.slice(o)))),u(Math.max(0,o-1))}}}),[o,u,n,m]),s=d.move,h=d.addNote,p=d.del,E=d.backspace,g=Object(a.useCallback)((function(e){switch(e.keyCode){case 37:s("left");break;case 39:s("right");break;case 8:E();break;case 46:p();break;case 66:h("b0000")}}),[s,h,E,p]);Object(a.useEffect)((function(){return document.addEventListener("keydown",g),function(){return document.removeEventListener("keydown",g)}}),[g]);return r.a.createElement(_.Provider,{value:{position:o,meter:4}},r.a.createElement(J,{title:"Editor",meter:4,notes:n.join(";")},r.a.createElement(Z,null)))},ne=function(e){var t=e.position,n=S(),r=n.sidePadding,m=n.staveHeightWithPadding,c=Y().noteWidth,i=r+t*c;return a.createElement("rect",Object.assign({x:i,y:0,width:c,height:m},{strokeWidth:1,stroke:"black",fill:"transparent"}))},ae=function(e){var t,n=e.notes,r=e.title,m=e.textPosition,c=Y().meter,i=f(n,c),l=i.length,o=f(n.substr(0,m),c),u=Math.max(0,o.length-1),d=Math.max(0,(null!==(t=o[0])&&void 0!==t?t:[]).length-1),s=n[m-1];""===n[m]&&(void 0===s||"\n"===s||";"===s&&o[u].length===c)&&(i=[].concat(Object(b.a)(i.slice(0,u+1)),[[]],Object(b.a)(i.slice(u+1,l))),u++,d=0);var h=i.slice(Math.max(0,u-1),u+1).map((function(e){return e.join(";")})).join("\n");return a.createElement(J,{title:r,notes:h,barsPerStave:2},a.createElement(ne,{position:d}))},re=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],m=Object(a.useState)(0),c=Object(i.a)(m,2),l=c[0],o=c[1];return a.createElement(a.Fragment,null,a.createElement(A,{sidePaddingEnabled:!1,width:400},a.createElement(ae,Object.assign({title:"Editor"},{textPosition:l,notes:n}))),a.createElement("br",null),a.createElement("textarea",{rows:10,onSelect:function(e){return o(e.target.selectionStart)},onChange:function(e){return r(e.target.value)},value:n}))},me=function(){return r.a.createElement(J,{title:"Rose Tattoo",tuning:"gDGBd",meter:4,notes:"\n  Am:m  2;b2122;m  2;b  0;\n  m  2;b  0;m  2;b 0;\n  C:m 1;b2102;m 1;m0;\n  h0,2;b2102;p2,0;b 1;\n  G:m0;b0000;m0;m 1;\n  b0;b2;b0;b 1;\n  Am:m 1;b2122;m 0;b2022;\n  m  2;b2122;m  2;b2122\n"})},ce=(n(29),function(){return r.a.createElement(J,{title:"Sandy River Belle A",notes:"\n      h   2;h  2;s  2,  4;b0040;\n      p  2;b0000;m2;m0;\n      h   2;h  2;s  2,  4;b0040;\n      p  2;b0000;m   2;m   0;\n\n      h   2;h  2;s  2,  4;b0040;\n      p  2;b0000;m2;m0;\n      d0, 5;d5, 5;d0, 5;d5, 5;\n      d0, 0;s  2,  4;m  0;b0000\n    "})}),ie=function(){return r.a.createElement(J,{title:"Sandy River Belle B",notes:"\n      b0;b5;d 5,  7;b 5;\n      m9;d9, 8;d7, 8;d9, 8;\n      b0;b5;d 5,  7;b 5;\n      d 7,  9;b 7;m7;b7777;\n\n      b0;b5;d 5,  7;b 5;\n      m9;d9, 8;d7, 8;d9, 8;\n      d0, 5;d5, 5;d0, 5;d5, 5;\n      d0, 0;s  2,  4;m  0;b0000\n    "})},le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,null),r.a.createElement(ie,null))},oe=function(){var e="\n    C:b 1;h  2;G:b 0;d   4,   4;\n    Am:b  2;d  0,   5;C:b  0;d   0,   0;\n    Dm:b   2;s   2,   4;F:b   5;p   5,  0;\n    Am:b  2;h 1;G:b0002;d    x,  0;\n    C:b2;d0, 1;G:b0;d 0,  0;\n    Am:b 1;d 0,  2;Em:b 0;d   4,   4;\n    F:b  2;d  0,   5;C:b  0;d   0,   0;\n    C:b 1; d 0,  2;G:p  0, 0;h 1, 3;\n    C:m2;b2100;d0, 1;h 1;\n    G:m0;b0002;p  0, 0;h 1, 3;\n    C:m 1;b2100;d 0,  2;h  2;    \n    G:m 0;b0002;p   4,  0;p  2, 0;\n    C:b 1;p  2, 0;b 1;p  2, 0;\n    b 1;d  2, 1;F:m3;b3120;\n    F:m3;b3120;G:p2;p 1;\n    C:m2;b2100;m 1;b2100;\n    G:m0;b0002;p 1;p  2;\n    Am:m 1;b2120;m  2;b2120;\n    C:b 1;d 0,  2;b  0;d   0,   0;\n  ";return r.a.createElement(J,{title:"Russian National Anthem",description:"clawhammer arrangement",tuning:"gCGBd",barsPerStave:5,notes:"\n      C:m2100;;;d    x,  0;     \n      ".concat(e,"\n      C:b 1;d 0,  2;b  0;d    x,  0;\n      ").concat(e,"\n      G:m  0;m0002;C:m  2;m 0;\n      m2100;\n    ")})},ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null))},be="\nE:b2;h 1;\nb0;p 1;\nAm:m  2;d  2, 1;\nb2;d0, 1;\nE7:b 0;h 1;\nb0;m2;\nAm:b 1;m  2;\nm  2;;\nDm:p3;h3;\nm7;p5,3;\nAm/C:b2;h 1;\nb2;d0, 1;\nE7:b 0;h 1;\nb0;m2;\nAm:b 1;m  2;\nm  2;\n",de="\nE:b2;h 1;\nb0;p 1;\nAm:m  2;d  2, 1;\nb2;d0, 1;\nE7:b 0;h 1;\nb0;m2;\nAm:b 1;m  2;\nm  2;;\nDm:d 6,  7;d0, 6;\nm7;d5, 6;\nAm/C:b 5;s  4,  5;\nb 5;d0,  5;\nE7:b 0;h 1;\nb0;m2;\nAm:b 1;m  2;\nm  2;\n",se=function(){return r.a.createElement(J,{title:"Korobeiniki",description:"travel banjo",tuning:"cGCEg",barsPerStave:10,meter:2,notes:"\n          E:b 0;p   4,  0;\n          b  2;d  0,   4;\n          Am:m   2;p   2,  0;\n          b 0;p  2;\n          E7:b   4;p   4,  0;\n          b  2;m 0;\n          Am:b  0;m   2;\n          m   2;;\n          Dm:d 1,  2;d  2, 1;\n          m2;p 3, 1;\n          Am/C:b 0;p   4,  0;\n          b 0;p  2;\n          E7:b   4;p   4,  0;\n          b  2;m 0;\n          Am:b  0;m   2;\n          m   2;\n        "})},he=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],m=t[1],c=0===n?be:de;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Korobeiniki"),r.a.createElement("p",null,"Second verse variant:\xa0",r.a.createElement("select",{onChange:function(e){return m(parseInt(e.target.value))},value:n},r.a.createElement("option",{value:0},"long travel"),r.a.createElement("option",{value:1},"up the neck"))),r.a.createElement("p",null,"gDGBd"),r.a.createElement(z,{tuning:"gDGBd",barsPerStave:10,meter:2,notes:"\n        ".concat(c,"\n        ").concat(c,"\n        Am:m2;b2122;\n        m 1;b2122;\n        E7:m0;b0012;\n        m 0;b0012;\n        Am:m 1;b2122;\n        m  2;b2122;\n        E:m  1;b2012;\n        m 0;b2012;\n        Am:m2;b2122;\n        m 1;b2122;\n        E7:m0;b0012;\n        m 0;b0012;\n        Am:m 1;m2;\n        m7;m7;\n        E:m6;;\n        d6,    x;;\n        ").concat(c,"\n        ").concat(c,"\n\n\n    ")}))},pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,null),r.a.createElement(se,null))},Ee=function(){return r.a.createElement(J,{title:"Kalinka",description:"lower",tuning:"gCGBd",barsPerStave:9,meter:2,notes:"\n        ;b  2;\n        b  0;h   4,   5;\n        b  0;h   4,   5;\n        b  0;p   5,   4;\n        b   2;d  2,  2;\n        d  0,   5;h   4,   5;\n        b  0;h   4,   5;\n        b  0;p   5,   4;\n        m   2;\n      "})},ge=function(){return r.a.createElement(J,{title:"Kalinka",description:"higher",tuning:"gDGBd",barsPerStave:9,meter:2,notes:"\n        ;b 0;\n        b  2;p   3,  0;\n        b  2;p   3,  0;\n        b  2;d  0,   3;\n        b   2;d 0, 0;\n        p  2;p   3,  0;\n        b  2;p   3,  0;\n        b  2;d  0,   3;\n        m   2;\n      "})},fe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null),r.a.createElement(ge,null))},ve=function(){return r.a.createElement(J,{title:"Mortal Kombat",description:"melody notes",tuning:"gDGBd",barsPerStave:4,meter:4,notes:"\n        d  2,  2;d 1,  2;d0,  2;p2;\n        d  5,  5;d 5,  5;d5,  5;d 5,  5;\n        d  0,  0;d 0,  0;d 1,  0;d0, 1;\n        d   3,   3;d  2,   3;d 1,   3;p 1;\n\n        d  2,  2;d 1,  2;d0,  2;p2;\n        d  5,  5;d 5,  5;d5,  5;d 5,  5;\n        d  0,  0;d 0,  0;d0,  0;d 0,  0;\n        d   3,   3;d  2,   3;d 1,   3;p 1;\n\n        d  2,  2;d 1,  2;d0,  2;p2;\n        d  5,  5;d 5,  5;d5,  5;d 5,  5;\n        d  0,  0;d 0,  0;d0,  0;d 0,  0;\n        d   3,   3;d  2,   3;d 1,   3;p 1\n    "})},je=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,null),r.a.createElement("img",{src:"".concat("/banjo-tab","/mortal-kombat-1.jpg"),alt:"Notes 1"}),r.a.createElement("img",{src:"".concat("/banjo-tab","/mortal-kombat-2.jpg"),alt:"Notes 2"}))},xe=function(){return r.a.createElement(J,{title:"Lambada",description:"melody notes",tuning:"gDGBd",barsPerStave:5,meter:4,notes:"\n      ;;;m   2;\n      m2;d    x,0;p 1;m  2;\n      F:d  2, 1;d 0,  2;G:h  2;p   2;\n      C:m   2;;;m   2;\n      m2;d    x,0;p 1;m  2;\n      F:d  2, 1;d 0,  2;G:h  2;p   2;\n      C:m   2;;;;\n      Dm:m0;d0, 1;m   3;d  2, 1;\n      m2;d0, 1;m   3;d  2, 1;\n      G:m 0;p  2;d  0,  0;p  2;\n      Am:m  2;;;;\n      Dm:m0;d0, 1;m   3;d  2, 1;\n      m2;d0, 1;m   3;d  2, 1;\n      G:m 0;p  2;d  0,  0;p  2;\n      Am:p 1;m  2;;\n    "})},Oe=function(){return r.a.createElement(J,{title:"Lambada",description:"Clawhammer Arrangement",tuning:"gDGBd",barsPerStave:5,meter:4,notes:"\n      Am:;;;m   2;\n      b2;p2;p 1;m  2;\n      F:d  2, 1;d 0,  2;G:h  2;p   2;\n      C:m   2;b2102;h   2;b2102;\n      b2;p2;p 1;m  2;\n      F:d  2, 1;d 0,  2;G:h  2;p   2;\n      C:m   2;b2102;h   2;b2102;\n      Dm:b0;d0, 1;m   3;d  2, 1;\n      b2;d0, 1;m   3;d  2, 1;\n      G:b 0;p  2;d  0,  0;p  2;\n      Am:m  2;b2122;h  2;b2122;\n      Dm:b0;d0, 1;m   3;d  2, 1;\n      b2;d0, 1;m   3;d  2, 1;\n      G:b 0;p  2;d  0,  0;p  2;\n      Am:p 1;m  2;m2122;\n    "})},ye=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,null),r.a.createElement(Oe,null),r.a.createElement("img",{src:"".concat("/banjo-tab","/lambada.png"),alt:"Notes"}))},ke=function(){var e="\n    Em:m  0;m  0;h  2;d  0,   4;\n    C:m   2;;m   2;;\n    D:d   4,   4;h  2;;h  2;\n    G:m 0;m 0;D:d  2,   0;d    x,   0;\n  ";return r.a.createElement(J,{title:"Moonlight Shadow",description:"melody notes",tuning:"gDGBd",barsPerStave:5,meter:4,notes:"\n        ".concat("\n    ;;;h   2,   4;\n  ","\n        ").concat(e,"\n        ").concat(e," \n        ").concat("\n    G:m 0;h 3;p 2;d 0,  0;\n    D:d  2,  2;d 0,  2;;;\n    Em:m 0;d x,  2;C:m  0;d  0,   2;\n    D:d  2,  2;d 0,  2;;h  2;\n    G:m 0;h 3;p 2;d 0,  0;\n    D:d  2,   4;p   2;;h   2,   4;\n    Em:d  0,  0;m   4;C:h   2,   4;m  0;\n    D:m  2;\n  ","       \n      ")})},we=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null))},Ce=function(e){var t=e.path,n=e.title,m=e.children;return Object(a.useEffect)((function(){document.title="Banjo Tab :: "+n})),r.a.createElement(l.b,{path:t},m)},Ge=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],m=t[1];return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"content"},r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",id:"showNotes",checked:n,onChange:function(){return m(!n)}}),r.a.createElement("label",{htmlFor:"showNotes"},"Show Notes"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/worried-man"},"Worried Man's Blues"),"::",r.a.createElement(o.b,{to:"/rose-tattoo"},"Rose Tattoo"),"::",r.a.createElement(o.b,{to:"/russian-anthem"},"Russian Anthem"),"::",r.a.createElement(o.b,{to:"/korobeiniki"},"Korobeiniki"),"::",r.a.createElement(o.b,{to:"/mortal-kombat"},"Mortal Kombat"),"::",r.a.createElement(o.b,{to:"/lambada"},"Lambada"),"::",r.a.createElement(o.b,{to:"/moonlight-shadow"},"Moonlight Shadow")),r.a.createElement(A,{showNotes:n},r.a.createElement(l.d,null,r.a.createElement(Ce,{path:"/worried-man",title:"Worried Man's Blues"},r.a.createElement(V,null)),r.a.createElement(Ce,{path:"/hop-high-ladies",title:"Hop High Ladies"},r.a.createElement(U,null)),r.a.createElement(Ce,{path:"/rose-tattoo",title:"Rose Tattoo"},r.a.createElement(me,null)),r.a.createElement(Ce,{path:"/interactive-editor",title:"Interactive Editor"},r.a.createElement(te,null)),r.a.createElement(Ce,{path:"/text-editor",title:"Text Editor"},r.a.createElement(re,null)),r.a.createElement(Ce,{path:"/sandy-river-belle",title:"Sandy River Belle"},r.a.createElement(le,null)),r.a.createElement(Ce,{path:"/russian-anthem",title:"Russian Anthem"},r.a.createElement(ue,null)),r.a.createElement(Ce,{path:"/korobeiniki",title:"Korobeiniki"},r.a.createElement(pe,null)),r.a.createElement(Ce,{path:"/kalinka",title:"Kalinka"},r.a.createElement(fe,null)),r.a.createElement(Ce,{path:"/mortal-kombat",title:"Mortal Kombat"},r.a.createElement(je,null)),r.a.createElement(Ce,{path:"/lambada",title:"Lambada"},r.a.createElement(ye,null)),r.a.createElement(Ce,{path:"/moonlight-shadow",title:"Moonlight Shadow"},r.a.createElement(we,null)),r.a.createElement(l.b,{path:"/"},r.a.createElement(l.a,{to:"/worried-man"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.f3a577de.chunk.js.map