/*! For license information please see 77b8eb20.b757c4d0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(1),c=a(6),r=(a(0),a(121)),l=a(127),b=a(128),o={id:"blink",title:"Blink - Hello World for electronics",sidebar_label:"Blink"},i={id:"get-started/blink",title:"Blink - Hello World for electronics",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/get-started/02-blink.md",permalink:"/shunyainterfaces/docs/get-started/blink",editUrl:"https://github.com/shunyaos/shunyainterfaces/edit/master/docs/website/docs/get-started/02-blink.md",sidebar_label:"Blink"},u=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Step 1: Connect",id:"step-1-connect",children:[]},{value:"Step 2: Code",id:"step-2-code",children:[]},{value:"Step 3 : Compile and Run",id:"step-3--compile-and-run",children:[]}],s={rightToc:u};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Shunya OS ready and Booted up."),Object(r.b)("li",{parentName:"ol"},"LED "),Object(r.b)("li",{parentName:"ol"},"Resistor (220 Ohms)")),Object(r.b)("h2",{id:"step-1-connect"},"Step 1: Connect"),Object(r.b)("p",null,"Connect as per the image given below."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"../assets/blink-001.png",alt:"blink-001"}))),Object(r.b)("h2",{id:"step-2-code"},"Step 2: Code"),Object(r.b)("p",null,"We need to make the LED blink i.e Turn ON for few seconds and then Turn Off\nand Repeat again."),Object(r.b)("p",null,"Coding is simple with Shunya Interfaces "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Skeleton structure of Shunya Interfaces")),Object(r.b)("p",null,"For C shunya interfaces follows the standard C coding structure."),Object(r.b)(l.a,{defaultValue:"c",values:[{label:"C/CPP",value:"c"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"c",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"/*Include this header file into your program */\n#include <shunyaInterfaces.h>\n\n/* Main Function */\nint main(void) {\n        /* initialize the Library*/\n        initLib();\n        return 0;\n}\n"))),Object(r.b)(b.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import shunyaInterfaces \n"))),Object(r.b)(b.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var commingsoon = 1;\n")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"API for Turning on the LED is ")),Object(r.b)(l.a,{defaultValue:"c",values:[{label:"C/CPP",value:"c"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"c",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"/* Add this line to your main function \n * to read data from the sensor */\ndigitalWrite(ledPin, HIGH);\n"))),Object(r.b)(b.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import commingsoon \n"))),Object(r.b)(b.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var commingsoon = 1;\n")))),Object(r.b)("p",null,"We wait for 2 seconds after turning on the led "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"API for waiting 2 seconds ")),Object(r.b)(l.a,{defaultValue:"c",values:[{label:"C/CPP",value:"c"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"c",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"/* Add this line to your main function  */\ndelay (2000);\n"))),Object(r.b)(b.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import commingsoon \n"))),Object(r.b)(b.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var commingsoon = 1;\n")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"API for Turning Off the LED is ")),Object(r.b)(l.a,{defaultValue:"c",values:[{label:"C/CPP",value:"c"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"c",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"/* Add this line to your main function \n * to read data from the sensor */\ndigitalWrite(ledPin, LOW);\n"))),Object(r.b)(b.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import commingsoon \n"))),Object(r.b)(b.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var commingsoon = 1;\n")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For repeating the steps we use ")),Object(r.b)(l.a,{defaultValue:"c",values:[{label:"C/CPP",value:"c"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"c",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"/* Add this line to your main function */\nwhile(1) {\n        /* Write Steps that you want to repeat */\n}\n"))),Object(r.b)(b.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import commingsoon \n"))),Object(r.b)(b.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var commingsoon = 1;\n")))),Object(r.b)("p",null,"Here is the full code."),Object(r.b)(l.a,{defaultValue:"c",values:[{label:"C/CPP",value:"c"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"c",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),"#include <shunyaInterfaces.h>\n\nint main(){\n\n        /*Initialize Shunya Interfaces library*/\n        initLib();\n        \n        /* For Repeating actions */ \n        while (1) {\n                /* Replace ledPin with the Pin number \n                 * where the LED is connected */\n                digitalWrite(ledPin, HIGH);\n                delay(2000); \n                digitalWrite(ledPin, LOW); \n                delay(2000);\n        }\n}\n"))),Object(r.b)(b.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import commingsoon \n"))),Object(r.b)(b.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"var commingsoon = 1;\n")))),Object(r.b)("h2",{id:"step-3--compile-and-run"},"Step 3 : Compile and Run"),Object(r.b)("p",null,"To compile the code, run this command in terminal "),Object(r.b)(l.a,{defaultValue:"c",values:[{label:"C/CPP",value:"c"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"c",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ gcc -o blink blink.c -lshunyaInterfaces -lshunyaInterfaces_core\n$ sudo ./blink  \n"))),Object(r.b)(b.a,{value:"py",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo python3 blink.py\n"))),Object(r.b)(b.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ sudo node blink.js\n")))),Object(r.b)("p",null,"You should see the LED blinking."))}p.isMDXComponent=!0},121:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=u(a),m=n,d=s["".concat(l,".").concat(m)]||s[m]||p[m]||r;return a?c.a.createElement(d,b({ref:t},i,{components:a})):c.a.createElement(d,b({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var i=2;i<r;i++)l[i]=a[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},122:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var l=c.apply(null,n);l&&e.push(l)}else if("object"===r)for(var b in n)a.call(n,b)&&n[b]&&e.push(b)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},127:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(122),l=a.n(r),b=a(85),o=a.n(b);const i=37,u=39;t.a=function(e){const{block:t,children:a,defaultValue:r,values:b}=e,[s,p]=Object(n.useState)(r),m=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>c.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":s===e,className:l()("tab-item",o.a.tabItem,{"tab-item--active":s===e}),key:e,ref:e=>m.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case u:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(m,e.target,e),onFocus:()=>p(e),onClick:()=>p(e)},t))),c.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===s)[0]))}},128:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement("div",null,e.children)}}}]);