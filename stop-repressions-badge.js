!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="./",e(e.s=61)}({61:function(t,n){!function(){var t="http://localhost:3000",n=document,e=n.head,r=n.body,o=n.getElementById("stop-repressions"),a=document.createElement("a"),s=["stop-r"],i=o.getAttribute("data-position-x"),p=o.getAttribute("data-position-y"),c=o.getAttribute("data-color"),d=o.getAttribute("data-type"),l=o.getAttribute("data-size-badge");i=void 0===i||-1===["left","right"].indexOf(i)?"left":i,p=void 0===p||-1===["top","bottom","middle"].indexOf(p)?"top":p,c=void 0===c||-1===["light","dark"].indexOf(c)?"dark":c,d=void 0===d||-1===["ribbon","badge"].indexOf(d)?"badge":d,l=void 0===l||-1===["small","large"].indexOf(l)?"large":l;var b=document.createElement("style"),u='\n            .stop-r {\n                position: absolute;\n                background-size: contain;\n                background-repeat: no-repeat;\n                -webkit-transition: -webkit-transform .3s ease;transition: -webkit-transform .3s ease;-o-transition: transform .3s ease;transition: transform .3s ease;transition: transform .3s ease, -webkit-transform .3s ease;\n                background-image: url("'.concat(t,"/image/").concat(d,"/").concat("ribbon"==d?i:l,"-").concat(c,'.png");\n            }\n\n            @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { \n                .stop-r {\n                    background-image: url("').concat(t,"/image/").concat(d,"/").concat("ribbon"==d?i:l,"-").concat(c,'@2x.png");\n                }\n            }\n\n            .stop-r__x--left {\n                left: 0px;\n                -webkit-transform: translateX(-4px);-ms-transform: translateX(-4px);transform: translateX(-4px);\n                background-position: 0% 50%;\n            }\n            .stop-r__x--left.stop-r__t--badge {\n                left: 30px;\n            }\n            .stop-r__x--right {\n                right: 0px;\n                -webkit-transform: translateX(4px);-ms-transform: translateX(4px);transform: translateX(4px);\n                background-position: 100% 50%;\n            }\n            .stop-r__x--right.stop-r__t--badge {\n                right: 30px;\n            }\n            .stop-r__y--top {\n                top: 150px;\n            }\n            .stop-r__y--top.stop-r__t--badge {\n                top: 30px;\n            }\n            .stop-r__y--middle {\n                top: 50%;\n            }\n            .stop-r__y--bottom {\n                bottom: 150px;\n            }\n            .stop-r__y--bottom.stop-r__t--badge {\n                top: 30px;\n            }\n            .stop-r:hover {\n                -webkit-transform: translateX(0px);-ms-transform: translateX(0px);transform: translateX(0px);\n            }\n            .stop-r__t--ribbon {\n                height: ').concat(146,"px;\n                width: ").concat(103,"px;\n            }\n            .stop-r__t--ribbon.stop-r__y--middle {\n                margin-top: -").concat(73,"px;\n            }\n            .stop-r__t--badge {\n                height: ").concat(35,"px;\n                width: ").concat(37,"px;\n                -webkit-transform: translateX(0px);-ms-transform: translateX(0px);transform: translateX(0px);\n            }\n            .stop-r__t--badge:hover {\n                -webkit-transform: translateY(-3px);-ms-transform: translateY(-3px);transform: translateY(-3px);\n            }\n            .stop-r__t--badge--large {\n                width: ").concat(112,"px;\n            }\n            .stop-r__t--badge.stop-r__y--middle {\n                margin-top: -").concat(17.5,"px;\n            }\n        ");b.setAttribute("type","text/css"),b.styleSheet?b.styleSheet.styles=u:b.appendChild(n.createTextNode(u)),s.push("stop-r__x--".concat(i)),s.push("stop-r__y--".concat(p)),s.push("stop-r__c--".concat(c)),s.push("stop-r__t--".concat(d)),"badge"==d&&s.push("stop-r__t--".concat(d,"--").concat(l)),a.setAttribute("class",s.join(" ")),a.setAttribute("href","#"),a.setAttribute("target","_blank"),e.append(b),r.appendChild(a),o.remove()}()}});