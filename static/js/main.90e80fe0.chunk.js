(this["webpackJsonpbanjo-tab"]=this["webpackJsonpbanjo-tab"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),m=n(16),i=n.n(m),c=(n(24),n(6)),o=n(5),l=n(10),u=-3.5,s=4,b=n(9),d=function(e){return Array.from(Array(e).keys())},h=function(e){return d(5).map((function(t){return{stringIndex:t,fret:(null!==e&&void 0!==e?e:[])[t]}})).filter((function(e){var t=e.fret;return void 0!==t&&" "!==t})).map((function(e){var t=e.stringIndex,n=e.fret;if(isNaN(parseInt(n))){var r="abcdefghijklmnopqrst".indexOf(n);if(-1!==r)return{stringIndex:t,fret:(10+r).toString()}}return{stringIndex:t,fret:n}}))},f=function(e){var t,n=h(e);if(0!==n.length)return null===(t=n[0])||void 0===t?void 0:t.stringIndex},E=function(e){var t=e.chord,n=e.noteX,a=e.staveY,m=e.width;if(!t)return null;var i=n+m/2+t.length*u,c=a-15+s;return r.createElement("text",{x:i,y:c},t)},p={barsPerStave:4,showNotes:!1},g=r.createContext(p),v=function(){return Object(r.useContext)(g)},y=function(e){return r.createElement(g.Provider,{value:Object(b.a)({},p,{},e)},e.children)},x=function(e){var t,n=e.x,a=e.y,m=e.width,i=e.strings,c=B().tuning,o=v().showNotes,l=h(i).map((function(e){var t=e.stringIndex,n=e.fret;return o?{stringIndex:t,fret:n+function(e,t,n){var r="a\u266d a b\u266d b c c# d e\u266d e f f# g".split(" "),a=e.toLowerCase().split("").reverse()[t],m=r.indexOf(a);return r[(m+parseInt(n))%r.length]}(c,t,n)}:{stringIndex:t,fret:n}})),b=null!==(t=function(e){var t,n=h(e);if(0!==n.length)return null===(t=n[n.length-1])||void 0===t?void 0:t.stringIndex}(i))&&void 0!==t?t:0,d=a+10*(b+.5),f=a+40+10,E=n+.5*m;return r.createElement(r.Fragment,null,l.map((function(e){var t=e.stringIndex,n=e.fret,m=E+u*n.length,i=a+10*t+s;return r.createElement("text",{key:t,x:m,y:i},n)})),r.createElement("line",{x1:E,y1:d,x2:E,y2:f,strokeWidth:1,stroke:"black"}))},w=function(e){var t=e.y+40+10,n=e.x+.25*e.width-.5,a=e.x+.75*e.width+.5,m=e.strings.split(","),i=Object(c.a)(m,2),o=i[0],l=i[1];return r.createElement(r.Fragment,null,r.createElement(x,{strings:o,width:.5*e.width,x:e.x,y:e.y}),r.createElement(x,{strings:l,width:.5*e.width,x:e.x+.5*e.width,y:e.y}),r.createElement("line",{x1:n,y1:t,x2:a,y2:t,strokeWidth:3,stroke:"black"}))},k=function(e){return r.createElement(w,{x:e.x,y:e.y,width:e.width,strings:e.strings+",    0"})},j=function(e){var t,n,a=e.strings.split(","),m=Object(c.a)(a,2),i=m[0],o=m[1],l=null!==(t=f(i))&&void 0!==t?t:0,b=null!==(n=f(o))&&void 0!==n?n:0,d=e.x+.25*e.width,h=e.x+.75*e.width,E=e.y+10*(l-.5),p=e.y+10*(b-.5),g=d+5,v=h-5,y=E-5,x=p-5,k=Math.min(y,x),j=e.label.length,O=e.x+.5*e.width+u*j,C=e.y+40+20+s;return r.createElement(r.Fragment,null,r.createElement(w,{x:e.x,y:e.y,width:e.width,strings:e.strings}),r.createElement("path",{d:"M ".concat(d," ").concat(E," C ").concat(g," ").concat(k,", ").concat(v," ").concat(k,", ").concat(h," ").concat(p),stroke:"black",strokeWidth:1,fill:"transparent"}),r.createElement("text",{x:O,y:C},e.label))},O=function(e){return r.createElement(j,Object.assign({},e,{label:"H"}))},C=function(e){return r.createElement(j,Object.assign({},e,{label:"P"}))},G=function(e){return r.createElement(j,Object.assign({},e,{label:"SL"}))},N=function(e){switch(e.noteType){case"b":return r.createElement(k,e);case"h":return r.createElement(O,e);case"p":return r.createElement(C,e);case"s":return r.createElement(G,e);case"m":return r.createElement(x,e);case"d":return r.createElement(w,e);default:return null}},I=function(e){return r.createElement("line",{x1:e.x,y1:e.y,x2:e.x,y2:e.y+40,strokeWidth:1,stroke:"black"})},W=function(e){return r.createElement("line",{x1:50,y1:e.y,x2:50+e.width,y2:e.y,strokeWidth:1,stroke:"black"})},M=function(e){var t=v().barsPerStave,n=B().meter,a=function(){return 700/t},m=a()/n,i=a()*e.barNotes.length;return r.createElement(r.Fragment,null,d(5).map((function(t){return r.createElement(W,{key:t,y:e.y+10*t,width:i})})),d(e.barNotes.length+1).map((function(t){return r.createElement(I,{key:t,y:e.y,x:50+t*a()})})),e.barNotes.map((function(t,n){var i=50+n*a();return t.map((function(t,n){var a=i+n*m,c=t.split(":").map((function(e){return e.trim()})).reduce((function(e,t){if(t[0]){if(t[0]===t[0].toUpperCase())return Object(b.a)({},e,{chord:t});if(t[0]===t[0].toLowerCase())return Object(b.a)({},e,{noteType:t[0],strings:t.substr(1)})}return e}),{noteType:"",strings:"",chord:""}),o=c.noteType,l=c.strings,u=c.chord;return r.createElement(r.Fragment,{key:n},r.createElement(E,{chord:u,noteX:a,staveY:e.y,width:m}),r.createElement(N,Object.assign({noteType:o},{noteType:o,strings:l,x:a,y:e.y,width:m})))}))})))},D={tuning:"gDGBd",meter:4},S=r.createContext(D),B=function(){return Object(r.useContext)(S)},F=function(e){var t=e.title,n=e.tuning,a=e.notes,m=e.meter,i=e.children,c=v().barsPerStave,o={tuning:null!==n&&void 0!==n?n:D.tuning,meter:null!==m&&void 0!==m?m:D.meter},l=a.split(";").map((function(e){return e.trim()})).reduce((function(e,t,n){var r=Math.floor(n/o.meter),a=n%o.meter,m=Math.floor(r/c),i=r%c;return e[m]||(e[m]=[]),e[m][i]||(e[m][i]=[]),e[m][i][a]=t,e}),[]),u=25+90*l.length;return r.createElement(S.Provider,{value:o},r.createElement("h1",null,t),r.createElement("p",null,n),r.createElement("svg",{viewBox:"0 0 ".concat(800," ").concat(u),preserveAspectRatio:"xMidYMid meet",style:{maxWidth:"".concat(800,"px")}},l.map((function(e,t){return r.createElement(M,{key:t,y:25+90*t,barNotes:e})})),i))},H=function(){return a.a.createElement(F,{title:"Hop High Ladies v1",notes:"\n      G:h  0,  2;h 0, 1;m0;m  0;\n      s  2,  4;b0040;m 0;b0000;\n      h  0,  2;h 0, 1;m0;m  0;\n      D7:h  0,  2;b0120;m  2;b0120;\n      G:h  0,  2;h 0, 1;m0;m  0;\n      m 0;b0000;h 0, 1;m0;\n      C:m2;b2102;h0,2;b2102;\n      G:p 3, 0;m  0;D7:h  0,  2;b0120;\n\n      G:m  0;m5;p2,0;b0000;\n      s  2,  4;b0040;m 0;b0000;\n      m  0;m5;p2,0;b0000;\n      D7:h  0,  2;b0120;m  2;b0120;\n      G:m  0;m5;p2,0;b0000;\n      m 0;b0000;h 0, 1;m0;\n      C:m2;b2102;h0,2;b2102;\n      p 3, 0;m  0;D7:h  0,  2;b0120\n    "})},L=function(){return a.a.createElement(F,{title:"Hop High Ladies v2",notes:"\n        G:h  0,  2;h 0, 1;m0;b  0;\n        s  2,  4;b  4;m 0;b0;\n        h  0,  2;h 0, 1;m0;b  0;\n        D7:h  0,  2;d0, 1;m  2;m   0;\n        G:h  0,  2;h 0, 1;m0;b  0;\n        m 0;b0;h 0, 1;m0;\n        C:m2;d2, 1;h0,2;d2, 1;\n        G:p 3, 0;m  0;D7:h  0,  2;m   0;\n  \n        G:m  0;m5;p2,0;d 0,  0;\n        s  2,  4;b  4;m 0;b0;\n        m  0;m5;p2,0;d 0,  0;\n        D7:h  0,  2;d0, 1;m  2;m   0;\n        G:m  0;m5;p2,0;d 0,  0;\n        m 0;b0;h 0, 1;m0;\n        C:m2;d2, 1;h0,2;d2, 1;\n        p 3, 0;m  0;D7:h  0,  2;m   0\n      "})},P=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null),a.a.createElement(L,null))},T=function(){return a.a.createElement(F,{title:"Worried Man's Blues",notes:"\n      G;;;m   0;\n      m   0;b0000;m   0;m   2;\n      m  0;b0000;b0000;m  0;\n      m 0;b0000;m 0;m  2;\n      m  0;b0000;m  0;m   0;\n      C:m   2;b2102;m  0;m   2;\n      m  0;b2102;m  0;m   2;\n      m  0;b2102;m  0;m   2;\n\n      G:m   0;b0000;b0000;m   0;\n      m   0;b0000;m   0;m   2;\n      m  0;b0000;b0000;m  0;\n      m 0;b0000;m 0;m  2;\n      m  0;b0000;m   4;m  0;\n      D7:m  2;b0120;b0120;m  2;\n      m 0;m  2;m  0;m   4;\n      G:m  0;b0000;m0000;\n    "})},A=function(){return a.a.createElement(F,{title:"Worried Man's Blues (octave up v.1)",notes:"\n      G;;;m  7;\n      m  7;b987;m  7;m  9;\n      m 8;b987;b987;m 8;\n      m9;b987;m9;m a;\n      m 8;b987;m 8;m  7;\n      C:m  9;ba89;m 8;m  9;\n      m 8;ba89;m 8;m  9;\n      m 8;ba89;m 8;m  9;\n\n      G:m  7;b987;b987;m  7;\n      m  7;b987;m  7;m  9;\n      m 8;b987;b987;m 8;\n      m9;b987;m9;m a;\n      m 8;b987; m 7;m 8;\n      D7:m a;baa7;baa7;m a;\n      G:m9;m a;m 8;m 7;\n      m 8;b987;m987\n    "})},Y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null),a.a.createElement(A,null))},J=(n(25),function(e){var t=Object(r.useState)(e.position),n=Object(c.a)(t,2),m=n[0],i=n[1],o=function(e){switch(e.keyCode){case 37:i((function(e){return Math.max(0,e-1)}));break;case 39:i((function(e){return e+1}))}};Object(r.useEffect)((function(){return document.addEventListener("keydown",o),function(){return document.removeEventListener("keydown",o)}}),[]);var l=B().meter,u=50+(.1+m)*(800/v().barsPerStave/l);return a.a.createElement("line",{x1:u,y1:20,x2:u,y2:70,strokeWidth:1,stroke:"black"},a.a.createElement("animate",{attributeName:"visibility",from:"visible",to:"hidden",dur:"1s",repeatCount:"indefinite"}))}),X=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,{title:"Editor",notes:""},a.a.createElement(J,{position:0})))},q=function(e){var t=e.path,n=e.title,m=e.children;return Object(r.useEffect)((function(){document.title="Banjo Tab :: "+n})),a.a.createElement(o.b,{path:t},m)},R=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],m=t[1];return a.a.createElement(l.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("span",null,a.a.createElement("input",{type:"checkbox",id:"showNotes",checked:n,onChange:function(){return m(!n)}}),a.a.createElement("label",{htmlFor:"showNotes"},"Show Notes"),a.a.createElement("br",null),a.a.createElement(l.b,{to:"/worried-man"},"Worried Man's Blues"),"::",a.a.createElement(l.b,{to:"/hop-high-ladies"},"Hop High Ladies"),"::",a.a.createElement(l.b,{to:"/editor"},"Editor")),a.a.createElement(y,{showNotes:n},a.a.createElement(o.d,null,a.a.createElement(q,{path:"/worried-man",title:"Worried Man's Blues"},a.a.createElement(Y,null)),a.a.createElement(q,{path:"/hop-high-ladies",title:"Hop High Ladies"},a.a.createElement(P,null)),a.a.createElement(q,{path:"/editor",title:"Editor"},a.a.createElement(X,null)),a.a.createElement(o.b,{path:"/"},a.a.createElement(o.a,{to:"/worried-man"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.90e80fe0.chunk.js.map