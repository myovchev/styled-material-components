
          window.__NEXT_REGISTER_PAGE('/drawer', function() {
            var comp = module.exports=webpackJsonp([7],{105:function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=o},106:function(e,t,n){"use strict";var r=n(55),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}};e.exports=o},107:function(e,t,n){"use strict";function r(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}e.exports=r},108:function(e,t,n){"use strict";function r(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}function o(e,t){if(r(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=0;a<n.length;a++)if(!i.call(t,n[a])||!r(e[n[a]],t[n[a]]))return!1;return!0}var i=Object.prototype.hasOwnProperty;e.exports=o},109:function(e,t,n){"use strict";function r(e,t){return!(!e||!t)&&(e===t||!o(e)&&(o(t)?r(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}var o=n(57);e.exports=r},110:function(e,t,n){"use strict";function r(e){try{e.focus()}catch(e){}}e.exports=r},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=void 0;var r=n(140);t.Portal=r.Portal},140:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Portal=void 0;var o=n(9),i=r(o),a=n(5),s=r(a),l=n(6),u=r(l),c=n(10),f=r(c),d=n(11),p=r(d),m=n(0),h=r(m),y=n(56),v=n(141),g=n(142),b=void 0;t.Portal=function(e){function t(){var e,n,r,o;(0,s.default)(this,t);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return n=r=(0,f.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(l))),r.defaultProps={shift:!1,direction:"left"},r.state={portalMounted:!1},o=n,(0,f.default)(r,o)}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){b||(b=document.createElement("div"),b.id="smc-portal",b.className="smc-portal",document.body.appendChild(b)),this.el=document.createElement("div"),this.el.className="smc-portal-instance",b.appendChild(this.el),this.setState({portalMounted:!0})}},{key:"componentWillUnmount",value:function(){b.removeChild(this.el)}},{key:"render",value:function(){if(!this.state.portalMounted)return null;var e=this.props.shift?g.Shift:v.Overlay;return(0,y.createPortal)(h.default.createElement(e,{direction:this.props.attachment,open:this.props.open,onClick:this.props.onRequestClose},this.props.renderContents()),this.el)}}]),t}(m.Component)},141:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=t.BaseOverlay=void 0;var o=n(2),i=r(o),a=n(0),s=r(a),l=n(1),u=r(l),c=(0,i.default)(["\n  background: rgba(0, 0, 0, .6);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  opacity: ",";\n  transition: opacity 0.3s 0ms cubic-bezier(0, 0, .2, 1);\n  will-change: opacity;\n  pointer-events: ",";\n  contain: strict;\n  overflow: hidden;\n  z-index: 4;\n"],["\n  background: rgba(0, 0, 0, .6);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  opacity: ",";\n  transition: opacity 0.3s 0ms cubic-bezier(0, 0, .2, 1);\n  will-change: opacity;\n  pointer-events: ",";\n  contain: strict;\n  overflow: hidden;\n  z-index: 4;\n"]),f=function(e){return e.stopPropagation()},d=t.BaseOverlay=function(e){return s.default.createElement("div",{className:e.className+" smc-overlay",onClick:e.onClick},s.default.createElement("div",{className:"smc-portal-content",onClick:f},e.children))};t.Overlay=(0,u.default)(d)(c,function(e){return e.open?1:0},function(e){return e.open?"inherit":"none"})},142:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Shift=void 0;var o=n(9),i=r(o),a=n(5),s=r(a),l=n(6),u=r(l),c=n(10),f=r(c),d=n(11),p=r(d),m=n(0),h=r(m);t.Shift=function(e){function t(){return(0,s.default)(this,t),(0,f.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.body.classList.add("shift")}},{key:"componentWillReceiveProps",value:function(e){e.open&&!this.props.open?document.body.classList.add(this.props.direction):!e.open&&this.props.open&&document.body.classList.remove(this.props.direction)}},{key:"componentWillUnmount",value:function(){document.body.classList.remove("shift")}},{key:"render",value:function(){return h.default.createElement("div",{className:this.props.className},this.props.children)}}]),t}(m.Component)},263:function(e,t,n){e.exports=n(264)},264:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),i=r(o),a=n(5),s=r(a),l=n(6),u=r(l),c=n(10),f=r(c),d=n(11),p=r(d),m=n(2),h=r(m),y=n(0),v=r(y),g=n(1),b=r(g),_=n(37),x=r(_),w=n(265),E=n(101),L=r(E),O=(0,h.default)(["\n  padding: 10px;\n"],["\n  padding: 10px;\n"]),P=b.default.div(O),C=function(e){function t(){var e,n,r,o;(0,s.default)(this,t);for(var a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return n=r=(0,f.default)(this,(e=t.__proto__||(0,i.default)(t)).call.apply(e,[this].concat(l))),r.state={temporaryLeft:!1,temporaryRight:!1,persistentLeft:!1,persistentRight:!1},r.toggleTemporaryLeft=function(){return r.setState(function(e){return{temporaryLeft:!e.temporaryLeft}})},r.toggleTemporaryRight=function(){return r.setState(function(e){return{temporaryLeft:!e.temporaryRight}})},r.togglePersistentLeft=function(){return r.setState(function(e){return{persistentLeft:!e.persistentLeft,persistentRight:!1}})},r.togglePersistentRight=function(){return r.setState(function(e){return{persistentRight:!e.persistentRight,persistentLeft:!1}})},o=n,(0,f.default)(r,o)}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){return v.default.createElement(x.default,{theme:{primary:"#03A9F4"}},v.default.createElement(P,null,v.default.createElement("h1",null,"Temporary Drawers!"),v.default.createElement(w.Drawer,{temporary:!0,attachment:"left",open:this.state.temporaryLeft,handleRequestClose:this.toggleTemporaryLeft},v.default.createElement("p",null,"Hi, im a temporary left attached drawer")),v.default.createElement(w.Drawer,{temporary:!0,attachment:"right",open:this.state.temporaryRight,handleRequestClose:this.toggleTemporaryRight},v.default.createElement("p",null,"Hi, im a temporary right attached drawer")),v.default.createElement(L.default,{raised:!0,primary:!0,onClick:this.toggleTemporaryRight},"Right Temporary"),v.default.createElement(L.default,{raised:!0,accent:!0,onClick:this.toggleTemporaryLeft},"Left Temporary"),v.default.createElement("h1",null,"Persistent Drawers!"),v.default.createElement(w.Drawer,{attachment:"left",open:this.state.persistentLeft,handleRequestClose:this.togglePersistentLeft},v.default.createElement("p",null,"Hi, im a persistent left attached drawer")),v.default.createElement(w.Drawer,{attachment:"right",open:this.state.persistentRight,handleRequestClose:this.togglePersistentRight},v.default.createElement("p",null,"Hi, im a persistent right attached drawer")),v.default.createElement(L.default,{raised:!0,primary:!0,onClick:this.togglePersistentRight},"Right Persistent"),v.default.createElement(L.default,{raised:!0,accent:!0,onClick:this.togglePersistentLeft},"Left Persistent")))}}]),t}(y.Component);t.default=C},265:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Drawer=void 0;var o=n(266),i=r(o),a=n(2),s=r(a),l=n(0),u=r(l),c=n(1),f=r(c),d=n(267),p=r(d),m=n(116),h=r(m),y=n(139),v=(0,s.default)(["\n  width: calc(100% - 56px);\n  max-width: 280px;\n  @media (min-width: 600px) {\n    width: calc(100% - 64px);\n    max-width: 320px;\n  }\n"],["\n  width: calc(100% - 56px);\n  max-width: 280px;\n  @media (min-width: 600px) {\n    width: calc(100% - 64px);\n    max-width: 320px;\n  }\n"]),g=(0,s.default)(['\n  body {\n    &.shift {\n      &.right {\n        &:after {\n          content: "";\n          ','\n          display: inline-flex;\n          box-sizing: border-box;\n        }\n      }\n      &.left {\n        &:before {\n          content: "";\n          ',"\n          display: inline-flex;\n          box-sizing: border-box;\n        }\n      }\n    }\n  }\n"],['\n  body {\n    &.shift {\n      &.right {\n        &:after {\n          content: "";\n          ','\n          display: inline-flex;\n          box-sizing: border-box;\n        }\n      }\n      &.left {\n        &:before {\n          content: "";\n          ',"\n          display: inline-flex;\n          box-sizing: border-box;\n        }\n      }\n    }\n  }\n"]),b=(0,s.default)(["\n  background-color: white;\n  ","\n  bottom: 0;\n  top: 0;\n  overflow: hidden;\n  position: absolute;\n  transition: transform .195s;\n  ","\n  will-change: transform;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  touch-action: none;\n  ","\n\n  &.left {\n    left: 0;\n    transform: translateX(-107%);\n    ","\n  }\n\n  &.right {\n    right: 0;\n    transform: translateX(107%);\n    ","\n  }\n\n  &.open {\n    transition: transform .225s;\n    transform: none;\n  }\n"],["\n  background-color: white;\n  ","\n  bottom: 0;\n  top: 0;\n  overflow: hidden;\n  position: absolute;\n  transition: transform .195s;\n  ","\n  will-change: transform;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  touch-action: none;\n  ","\n\n  &.left {\n    left: 0;\n    transform: translateX(-107%);\n    ","\n  }\n\n  &.right {\n    right: 0;\n    transform: translateX(107%);\n    ","\n  }\n\n  &.open {\n    transition: transform .225s;\n    transform: none;\n  }\n"]),_=(0,c.css)(v);(0,c.injectGlobal)(g,_,_);var x=function(e){var t,n=(0,p.default)((t={},(0,i.default)(t,e.className,!0),(0,i.default)(t,"open",e.open),(0,i.default)(t,"left","left"===e.attachment),(0,i.default)(t,"right","right"===e.attachment),(0,i.default)(t,"smc-drawer",!0),t));return u.default.createElement("aside",{className:n},e.children)},w=(0,f.default)(x)(b,function(e){return e.temporary&&(0,h.default)(16)},_,function(e){return e.temporary&&"z-index: 5"},function(e){return!e.temporary&&"border-right: 1px solid rgba(0,0,0,0.35);"},function(e){return!e.temporary&&"border-left: 1px solid rgba(0,0,0,0.35);"});(t.Drawer=function(e){var t=e.open,n=e.children,r=e.handleRequestClose,o=e.temporary,i=e.attachment;return u.default.createElement(y.Portal,{open:t,mode:o?"overlay":"shift",attachment:i,onRequestClose:r,renderContents:function(){return u.default.createElement(w,{attachment:i,open:t},n)}})}).defaultProps={temporary:!1,open:!1,attachment:"left",handleRequestClose:function(){}}},266:function(e,t,n){"use strict";t.__esModule=!0;var r=n(111),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e,t,n){return t in e?(0,o.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},267:function(e,t,n){var r,o;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var a in r)i.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},56:function(e,t,n){"use strict";function r(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}r(),e.exports=n(104)},57:function(e,t,n){"use strict";function r(e){return o(e)&&3==e.nodeType}var o=n(58);e.exports=r},58:function(e,t,n){"use strict";function r(e){var t=e?e.ownerDocument||e:document,n=t.defaultView||window;return!(!e||!("function"==typeof n.Node?e instanceof n.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}e.exports=r}},[263]);
            return { page: comp.default }
          })
        