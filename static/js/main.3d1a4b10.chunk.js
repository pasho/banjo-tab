(this["webpackJsonpbanjo-tab"]=this["webpackJsonpbanjo-tab"]||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(20),c=n.n(i),m=(n(28),n(4)),l=n(6),o=n(10),s=n(7),u=function(e){return Array.from(Array(e).keys())},d=function(e){return u(5).map((function(t){return{stringIndex:t,fret:(null!==e&&void 0!==e?e:[])[t]}})).filter((function(e){var t=e.fret;return void 0!==t&&" "!==t})).map((function(e){var t=e.stringIndex,n=e.fret;if(isNaN(parseInt(n))){var r="abcdefghijklmnopqrst".indexOf(n);if(-1!==r)return{stringIndex:t,fret:(10+r).toString()}}return{stringIndex:t,fret:n}}))},b=function(e){var t,n=d(e);if(0!==n.length)return null===(t=n[0])||void 0===t?void 0:t.stringIndex},h=n(14),g={width:800,lineSpacing:10,sidePaddingEnabled:!0,barsPerStave:4,textCharCentreOffset:{x:-3.5,y:4},noteHorizontalLineAdjustment:.5,showNotes:!1},f=r.createContext(g),p=function(e){var t=e.width,n=e.lineSpacing,r=5*n,a=4*n,i=e.sidePaddingEnabled?r:0;return{padding:r,staveHeight:a,sidePadding:i,staveHeightWithPadding:a+r,staveWidth:t-2*i}},E=r.createContext(Object(s.a)({},g,{},p(g))),v=function(){return Object(r.useContext)(E)},x=function(e){var t=Object(r.useContext)(f),n=Object.keys(g).reduce((function(t,n){return void 0!==e[n]?Object(s.a)({},t,{},Object(h.a)({},n,e[n])):t}),Object(s.a)({},t)),a=n.width,i=n.lineSpacing,c=n.sidePaddingEnabled,m=Object(r.useMemo)((function(){return p({width:a,lineSpacing:i,sidePaddingEnabled:c})}),[a,i,c]),l=Object(s.a)({},n,{},m);return r.createElement(f.Provider,{value:n},r.createElement(E.Provider,{value:l},e.children))},y=function(e){var t=e.chord,n=e.noteX,a=e.staveY,i=e.width,c=v();if(!t)return null;var m=n+i/2+t.length*c.textCharCentreOffset.x,l=a-1.5*c.lineSpacing+c.textCharCentreOffset.y;return r.createElement("text",{x:m,y:l},t)},w=function(e){var t,n=e.x,a=e.y,i=e.width,c=e.strings,m=D().tuning,l=v(),o=d(c).map((function(e){var t=e.stringIndex,n=e.fret;return l.showNotes?{stringIndex:t,fret:n+function(e,t,n){var r="a\u266d a b\u266d b c c# d e\u266d e f f# g".split(" "),a=e.toLowerCase().split("").reverse()[t],i=r.indexOf(a);return r[(i+parseInt(n))%r.length]}(m,t,n)}:{stringIndex:t,fret:n}})),s=null!==(t=function(e){var t,n=d(e);if(0!==n.length)return null===(t=n[n.length-1])||void 0===t?void 0:t.stringIndex}(c))&&void 0!==t?t:0,u=a+l.lineSpacing*(s+.5),b=a+l.staveHeight+l.lineSpacing,h=n+.5*i;return r.createElement(r.Fragment,null,o.map((function(e){var t=e.stringIndex,n=e.fret,i=h+l.textCharCentreOffset.x*n.length,c=a+t*l.lineSpacing+l.textCharCentreOffset.y;return r.createElement("text",{key:t,x:i,y:c},n)})),r.createElement("line",{x1:h,y1:u,x2:h,y2:b,strokeWidth:1,stroke:"black"}))},O=function(e){var t=v(),n=e.y+t.staveHeight+t.lineSpacing,a=e.x+.25*e.width-t.noteHorizontalLineAdjustment,i=e.x+.75*e.width+t.noteHorizontalLineAdjustment,c=e.strings.split(","),l=Object(m.a)(c,2),o=l[0],s=l[1];return r.createElement(r.Fragment,null,r.createElement(w,{strings:o,width:.5*e.width,x:e.x,y:e.y}),r.createElement(w,{strings:s,width:.5*e.width,x:e.x+.5*e.width,y:e.y}),r.createElement("line",{x1:a,y1:n,x2:i,y2:n,strokeWidth:3,stroke:"black"}))},j=function(e){return r.createElement(O,{x:e.x,y:e.y,width:e.width,strings:e.strings+",    0"})},k=function(e){var t,n,a=v(),i=e.strings.split(","),c=Object(m.a)(i,2),l=c[0],o=c[1],s=null!==(t=b(l))&&void 0!==t?t:0,u=null!==(n=b(o))&&void 0!==n?n:0,d=e.x+.25*e.width,h=e.x+.75*e.width,g=e.y+(s-.5)*a.lineSpacing,f=e.y+(u-.5)*a.lineSpacing,p=d+.5*a.lineSpacing,E=h-.5*a.lineSpacing,x=g-.5*a.lineSpacing,y=f-.5*a.lineSpacing,w=Math.min(x,y),j=e.label.length,k=e.x+.5*e.width+a.textCharCentreOffset.x*j,C=e.y+a.staveHeight+2*a.lineSpacing+a.textCharCentreOffset.y;return r.createElement(r.Fragment,null,r.createElement(O,{x:e.x,y:e.y,width:e.width,strings:e.strings}),r.createElement("path",{d:"M ".concat(d," ").concat(g," C ").concat(p," ").concat(w,", ").concat(E," ").concat(w,", ").concat(h," ").concat(f),stroke:"black",strokeWidth:1,fill:"transparent"}),r.createElement("text",{x:k,y:C},e.label))},C=function(e){return r.createElement(k,Object.assign({},e,{label:"H"}))},S=function(e){return r.createElement(k,Object.assign({},e,{label:"P"}))},P=function(e){return r.createElement(k,Object.assign({},e,{label:"SL"}))},H=function(e){switch(e.noteType){case"b":return r.createElement(j,e);case"h":return r.createElement(C,e);case"p":return r.createElement(S,e);case"s":return r.createElement(P,e);case"m":return r.createElement(w,e);case"d":return r.createElement(O,e);default:return null}},W=function(e){var t=v();return r.createElement("line",{x1:e.x,y1:e.y,x2:e.x,y2:e.y+t.staveHeight,strokeWidth:1,stroke:"black"})},G=function(e){var t=v();return r.createElement("line",{x1:t.sidePadding,y1:e.y,x2:t.sidePadding+e.width,y2:e.y,strokeWidth:1,stroke:"black"})},M=function(e){var t=v(),n=D().meter,a=t.staveWidth/t.barsPerStave,i=a/n,c=a*e.barNotes.length;return r.createElement(r.Fragment,null,u(5).map((function(n){return r.createElement(G,{key:n,y:e.y+n*t.lineSpacing,width:c})})),u(e.barNotes.length+1).map((function(n){return r.createElement(W,{key:n,y:e.y,x:t.sidePadding+n*a})})),e.barNotes.map((function(n,c){var m=t.sidePadding+c*a;return n.map((function(t,n){var a=m+n*i,c=t.split(":").map((function(e){return e.trim()})).reduce((function(e,t){if(t[0]){if(t[0]===t[0].toUpperCase())return Object(s.a)({},e,{chord:t});if(t[0]===t[0].toLowerCase())return Object(s.a)({},e,{noteType:t[0],strings:t.substr(1)})}return e}),{noteType:"",strings:"",chord:""}),l=c.noteType,o=c.strings,u=c.chord;return r.createElement(r.Fragment,{key:n},r.createElement(y,{chord:u,noteX:a,staveY:e.y,width:i}),r.createElement(H,Object.assign({noteType:l},{noteType:l,strings:o,x:a,y:e.y,width:i})))}))})))},N={tuning:"gDGBd",meter:4},I=r.createContext(N),D=function(){return Object(r.useContext)(I)},L=function(e){var t=e.tuning,n=e.meter,a=e.title,i=e.children,c=v(),m=e.notes.split(";").map((function(e){return e.trim()})),l={tuning:null!==t&&void 0!==t?t:N.tuning,meter:null!==n&&void 0!==n?n:N.meter},o=m.reduce((function(e,t,n){var r=Math.floor(n/l.meter),a=n%l.meter,i=Math.floor(r/c.barsPerStave),m=r%c.barsPerStave;return e[i]||(e[i]=[]),e[i][m]||(e[i][m]=[]),e[i][m][a]=t,e}),[]),s=.5*c.padding+c.staveHeightWithPadding*o.length;return r.createElement(I.Provider,{value:l},r.createElement("h1",null,a),r.createElement("p",null,t),r.createElement("svg",{viewBox:"0 0 ".concat(c.width," ").concat(s),preserveAspectRatio:"xMidYMid meet"},o.map((function(e,t){return r.createElement(M,{key:t,y:.5*c.padding+c.staveHeightWithPadding*t,barNotes:e})})),i))},T=function(){return a.a.createElement(L,{title:"Hop High Ladies v1",notes:"\n      G:h  0,  2;h 0, 1;m0;m  0;\n      s  2,  4;b0040;m 0;b0000;\n      h  0,  2;h 0, 1;m0;m  0;\n      D7:h  0,  2;b0120;m  2;b0120;\n      G:h  0,  2;h 0, 1;m0;m  0;\n      m 0;b0000;h 0, 1;m0;\n      C:m2;b2102;h0,2;b2102;\n      G:p 3, 0;m  0;D7:h  0,  2;b0120;\n\n      G:m  0;m5;p2,0;b0000;\n      s  2,  4;b0040;m 0;b0000;\n      m  0;m5;p2,0;b0000;\n      D7:h  0,  2;b0120;m  2;b0120;\n      G:m  0;m5;p2,0;b0000;\n      m 0;b0000;h 0, 1;m0;\n      C:m2;b2102;h0,2;b2102;\n      p 3, 0;m  0;D7:h  0,  2;b0120\n    "})},B=function(){return a.a.createElement(L,{title:"Hop High Ladies v2",notes:"\n        G:h  0,  2;h 0, 1;m0;b  0;\n        s  2,  4;b  4;m 0;b0;\n        h  0,  2;h 0, 1;m0;b  0;\n        D7:h  0,  2;d0, 1;m  2;m   0;\n        G:h  0,  2;h 0, 1;m0;b  0;\n        m 0;b0;h 0, 1;m0;\n        C:m2;d2, 1;h0,2;d2, 1;\n        G:p 3, 0;m  0;D7:h  0,  2;m   0;\n  \n        G:m  0;m5;p2,0;d 0,  0;\n        s  2,  4;b  4;m 0;b0;\n        m  0;m5;p2,0;d 0,  0;\n        D7:h  0,  2;d0, 1;m  2;m   0;\n        G:m  0;m5;p2,0;d 0,  0;\n        m 0;b0;h 0, 1;m0;\n        C:m2;d2, 1;h0,2;d2, 1;\n        p 3, 0;m  0;D7:h  0,  2;m   0\n      "})},A=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null),a.a.createElement(B,null))},F=function(){return a.a.createElement(L,{title:"Worried Man's Blues",notes:"\n      G;;;m   0;\n      m   0;b0000;m   0;m   2;\n      m  0;b0000;b0000;m  0;\n      m 0;b0000;m 0;m  2;\n      m  0;b0000;m  0;m   0;\n      C:m   2;b2102;m  0;m   2;\n      m  0;b2102;m  0;m   2;\n      m  0;b2102;m  0;m   2;\n\n      G:m   0;b0000;b0000;m   0;\n      m   0;b0000;m   0;m   2;\n      m  0;b0000;b0000;m  0;\n      m 0;b0000;m 0;m  2;\n      m  0;b0000;m   4;m  0;\n      D7:m  2;b0120;b0120;m  2;\n      m 0;m  2;m  0;m   4;\n      G:m  0;b0000;m0000;\n    "})},R=function(){return a.a.createElement(L,{title:"Worried Man's Blues (octave up v.1)",notes:"\n      G;;;m  7;\n      m  7;b987;m  7;m  9;\n      m 8;b987;b987;m 8;\n      m9;b987;m9;m a;\n      m 8;b987;m 8;m  7;\n      C:m  9;ba89;m 8;m  9;\n      m 8;ba89;m 8;m  9;\n      m 8;ba89;m 8;m  9;\n\n      G:m  7;b987;b987;m  7;\n      m  7;b987;m  7;m  9;\n      m 8;b987;b987;m 8;\n      m9;b987;m9;m a;\n      m 8;b987; m 7;m 8;\n      D7:m a;baa7;baa7;m a;\n      G:m9;m a;m 8;m 7;\n      m 8;b987;m987\n    "})},z=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,null),a.a.createElement(R,null))},Y=n(9),J=function(){var e=q(),t=e.position,n=e.meter,a=v(),i=a.staveWidth/a.barsPerStave/n,c=a.padding+(.1+t)*i,m=5*a.lineSpacing,l=.5*a.padding-.5*a.lineSpacing,o=l+m;return r.createElement("line",{x1:c,y1:l,x2:c,y2:o,strokeWidth:1,stroke:"black"},r.createElement("animate",{attributeName:"visibility",from:"visible",to:"hidden",dur:"1s",repeatCount:"indefinite"}))},X=a.a.createContext({position:0,meter:4}),q=function(){return Object(r.useContext)(X)},U=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(0),l=Object(m.a)(c,2),o=l[0],s=l[1],u=Object(r.useMemo)((function(){return{move:function(e){switch(e){case"left":s(Math.max(0,o-1));break;case"right":s(Math.min(n.length,o+1))}},addNote:function(e){i([].concat(Object(Y.a)(n.slice(0,o)),[e],Object(Y.a)(n.slice(o)))),s(o+1)},del:function(){o<n.length&&i([].concat(Object(Y.a)(n.slice(0,o)),Object(Y.a)(n.slice(o+1))))},backspace:function(){i([].concat(Object(Y.a)(n.slice(0,Math.max(0,o-1))),Object(Y.a)(n.slice(o)))),s(Math.max(0,o-1))}}}),[o,s,n,i]),d=u.move,b=u.addNote,h=u.del,g=u.backspace,f=Object(r.useCallback)((function(e){switch(e.keyCode){case 37:d("left");break;case 39:d("right");break;case 8:g();break;case 46:h();break;case 66:b("b0000")}}),[d,b,g,h]);Object(r.useEffect)((function(){return document.addEventListener("keydown",f),function(){return document.removeEventListener("keydown",f)}}),[f]);return a.a.createElement(X.Provider,{value:{position:o,meter:4}},a.a.createElement(L,{title:"Editor",meter:4,notes:n.join(";")},a.a.createElement(J,null)))},$=function(){var e=Q(),t=e.position,n=e.meter,a=v(),i=a.staveWidth/a.barsPerStave/n,c=i,m=a.sidePadding+t*i,l=a.staveHeightWithPadding;return r.createElement("rect",Object.assign({x:m,y:0,width:c,height:l},{strokeWidth:1,stroke:"black",fill:"transparent"}))},K=r.createContext({position:0,meter:4}),Q=function(){return Object(r.useContext)(K)},V=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(0),c=Object(m.a)(i,2),l=c[0],o=c[1],s=n.substr(0,l).split(";").length-1;return r.createElement(K.Provider,{value:{position:s,meter:4}},r.createElement(x,{sidePaddingEnabled:!1,width:400,barsPerStave:2},r.createElement(L,{title:"Editor",notes:n},r.createElement($,null))),r.createElement("br",null),r.createElement("textarea",{rows:10,onSelect:function(e){return o(e.target.selectionStart)},onChange:function(e){return a(e.target.value)},value:n}))},Z=function(){return a.a.createElement(L,{title:"Rose Tattoo",tuning:"gDGBd",meter:4,notes:"\n  Am:m  2;b2122;m  2;b  0;\n  m  2;b  0;m  2;b 0;\n  C:m 1;b2102;m 1;m0;\n  h0,2;b2102;p2,0;b 1;\n  G:m0;b0000;m0;m 1;\n  b0;b2;b0;b 1;\n  Am:m 1;b2122;m 0;b2022;\n  m  2;b2122;m 2;b2122\n"})},_=(n(29),function(e){var t=e.path,n=e.title,i=e.children;return Object(r.useEffect)((function(){document.title="Banjo Tab :: "+n})),a.a.createElement(l.b,{path:t},i)}),ee=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),n=t[0],i=t[1];return a.a.createElement(o.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"content"},a.a.createElement("span",null,a.a.createElement("input",{type:"checkbox",id:"showNotes",checked:n,onChange:function(){return i(!n)}}),a.a.createElement("label",{htmlFor:"showNotes"},"Show Notes"),a.a.createElement("br",null),a.a.createElement(o.b,{to:"/worried-man"},"Worried Man's Blues"),"::",a.a.createElement(o.b,{to:"/hop-high-ladies"},"Hop High Ladies"),"::",a.a.createElement(o.b,{to:"/rose-tattoo"},"Rose Tattoo"),"::",a.a.createElement(o.b,{to:"/text-editor"},"Text Editor")),a.a.createElement(x,{showNotes:n},a.a.createElement(l.d,null,a.a.createElement(_,{path:"/worried-man",title:"Worried Man's Blues"},a.a.createElement(z,null)),a.a.createElement(_,{path:"/hop-high-ladies",title:"Hop High Ladies"},a.a.createElement(A,null)),a.a.createElement(_,{path:"/rose-tattoo",title:"Rose Tattoo"},a.a.createElement(Z,null)),a.a.createElement(_,{path:"/interactive-editor",title:"Interactive Editor"},a.a.createElement(U,null)),a.a.createElement(_,{path:"/text-editor",title:"Text Editor"},a.a.createElement(V,null)),a.a.createElement(l.b,{path:"/"},a.a.createElement(l.a,{to:"/worried-man"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.3d1a4b10.chunk.js.map