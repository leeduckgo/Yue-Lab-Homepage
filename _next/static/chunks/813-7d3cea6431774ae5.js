(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[813],{296:function(t){function debounce(t,e,i){function later(){var r=Date.now()-n;r<e&&r>=0?s=setTimeout(later,e-r):(s=null,i||(h=t.apply(a,o),a=o=null))}null==e&&(e=100);var s,o,a,n,h,debounced=function(){a=this,o=arguments,n=Date.now();var r=i&&!s;return s||(s=setTimeout(later,e)),r&&(h=t.apply(a,o),a=o=null),h};return debounced.clear=function(){s&&(clearTimeout(s),s=null)},debounced.flush=function(){s&&(h=t.apply(a,o),a=o=null,clearTimeout(s),s=null)},debounced}debounce.debounce=debounce,t.exports=debounce},6905:function(t){t.exports=function(t,e,i,s,o){for(e=e.split?e.split("."):e,s=0;s<e.length;s++)t=t?t[e[s]]:o;return t===o?i:t}},4241:function(t){var e=String,create=function(){return{isColorSupported:!1,reset:e,bold:e,dim:e,italic:e,underline:e,inverse:e,hidden:e,strikethrough:e,black:e,red:e,green:e,yellow:e,blue:e,magenta:e,cyan:e,white:e,gray:e,bgBlack:e,bgRed:e,bgGreen:e,bgYellow:e,bgBlue:e,bgMagenta:e,bgCyan:e,bgWhite:e,blackBright:e,redBright:e,greenBright:e,yellowBright:e,blueBright:e,magentaBright:e,cyanBright:e,whiteBright:e,bgBlackBright:e,bgRedBright:e,bgGreenBright:e,bgYellowBright:e,bgBlueBright:e,bgMagentaBright:e,bgCyanBright:e,bgWhiteBright:e}};t.exports=create(),t.exports.createColors=create},2247:function(){},9808:function(t,e,i){let s=i(4921);t.exports=(s.__esModule?s:{default:s}).default},4921:function(t,e,i){"use strict";var s;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a}});let o=(s=i(1679))&&s.__esModule?s:{default:s};function warn({version:t,from:e,to:i}){o.default.warn(`${e}-color-renamed`,[`As of Tailwind CSS ${t}, \`${e}\` has been renamed to \`${i}\`.`,"Update your configuration file to silence this warning."])}let a={inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12",950:"#431407"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f",950:"#451a03"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12",950:"#422006"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314",950:"#1a2e05"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d",950:"#052e16"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b",950:"#022c22"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a",950:"#042f2e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63",950:"#083344"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e",950:"#082f49"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a",950:"#172554"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81",950:"#1e1b4b"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95",950:"#2e1065"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87",950:"#3b0764"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75",950:"#4a044e"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843",950:"#500724"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337",950:"#4c0519"},get lightBlue(){return warn({version:"v2.2",from:"lightBlue",to:"sky"}),this.sky},get warmGray(){return warn({version:"v3.0",from:"warmGray",to:"stone"}),this.stone},get trueGray(){return warn({version:"v3.0",from:"trueGray",to:"neutral"}),this.neutral},get coolGray(){return warn({version:"v3.0",from:"coolGray",to:"gray"}),this.gray},get blueGray(){return warn({version:"v3.0",from:"blueGray",to:"slate"}),this.slate}}},1679:function(t,e,i){"use strict";var s,o=i(3454);Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var i in e)Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}(e,{dim:function(){return dim},default:function(){return h}});let a=(s=i(4241))&&s.__esModule?s:{default:s},n=new Set;function log(t,e,i){(void 0===o||!o.env.JEST_WORKER_ID)&&(i&&n.has(i)||(i&&n.add(i),console.warn(""),e.forEach(e=>console.warn(t,"-",e))))}function dim(t){return a.default.dim(t)}let h={info(t,e){log(a.default.bold(a.default.cyan("info")),...Array.isArray(t)?[t]:[e,t])},warn(t,e){log(a.default.bold(a.default.yellow("warn")),...Array.isArray(t)?[t]:[e,t])},risk(t,e){log(a.default.bold(a.default.magenta("risk")),...Array.isArray(t)?[t]:[e,t])}}},9365:function(t,e,i){"use strict";i.d(e,{z:function(){return OrbitControls}});var s=i(9477);let o={type:"change"},a={type:"start"},n={type:"end"},h=new s.zHn,r=new s.JOQ,l=Math.cos(70*s.M8C.DEG2RAD),c=new s.Pa4,d=2*Math.PI,p={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let OrbitControls=class OrbitControls extends s.ZXd{constructor(t,e=null){super(t,e),this.state=p.NONE,this.enabled=!0,this.target=new s.Pa4,this.cursor=new s.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:s.RsA.ROTATE,MIDDLE:s.RsA.DOLLY,RIGHT:s.RsA.PAN},this.touches={ONE:s.QmN.ROTATE,TWO:s.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new s.Pa4,this._lastQuaternion=new s._fP,this._lastTargetPosition=new s.Pa4,this._quat=new s._fP().setFromUnitVectors(t.up,new s.Pa4(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new s.$V,this._sphericalDelta=new s.$V,this._scale=1,this._panOffset=new s.Pa4,this._rotateStart=new s.FM8,this._rotateEnd=new s.FM8,this._rotateDelta=new s.FM8,this._panStart=new s.FM8,this._panEnd=new s.FM8,this._panDelta=new s.FM8,this._dollyStart=new s.FM8,this._dollyEnd=new s.FM8,this._dollyDelta=new s.FM8,this._dollyDirection=new s.Pa4,this._mouse=new s.FM8,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=onPointerMove.bind(this),this._onPointerDown=onPointerDown.bind(this),this._onPointerUp=onPointerUp.bind(this),this._onContextMenu=onContextMenu.bind(this),this._onMouseWheel=onMouseWheel.bind(this),this._onKeyDown=onKeyDown.bind(this),this._onTouchStart=onTouchStart.bind(this),this._onTouchMove=onTouchMove.bind(this),this._onMouseDown=onMouseDown.bind(this),this._onMouseMove=onMouseMove.bind(this),this._interceptControlDown=interceptControlDown.bind(this),this._interceptControlUp=interceptControlUp.bind(this),null!==this.domElement&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1});let t=this.domElement.getRootNode();t.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){null!==this._domElementKeyEvents&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(o),this.update(),this.state=p.NONE}update(t=null){let e=this.object.position;c.copy(e).sub(this.target),c.applyQuaternion(this._quat),this._spherical.setFromVector3(c),this.autoRotate&&this.state===p.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=d:i>Math.PI&&(i-=d),a<-Math.PI?a+=d:a>Math.PI&&(a-=d),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),!0===this.enableDamping?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let n=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let t=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),n=t!=this._spherical.radius}if(c.setFromSpherical(this._spherical),c.applyQuaternion(this._quatInverse),e.copy(this.target).add(c),this.object.lookAt(this.target),!0===this.enableDamping?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let t=null;if(this.object.isPerspectiveCamera){let e=c.length();t=this._clampDistance(e*this._scale);let i=e-t;this.object.position.addScaledVector(this._dollyDirection,i),this.object.updateMatrixWorld(),n=!!i}else if(this.object.isOrthographicCamera){let e=new s.Pa4(this._mouse.x,this._mouse.y,0);e.unproject(this.object);let i=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),n=i!==this.object.zoom;let o=new s.Pa4(this._mouse.x,this._mouse.y,0);o.unproject(this.object),this.object.position.sub(o).add(e),this.object.updateMatrixWorld(),t=c.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;null!==t&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(t).add(this.object.position):(h.origin.copy(this.object.position),h.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(h.direction))<l?this.object.lookAt(this.target):(r.setFromNormalAndCoplanarPoint(this.object.up,this.target),h.intersectPlane(r,this.target))))}else if(this.object.isOrthographicCamera){let t=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),t!==this.object.zoom&&(this.object.updateProjectionMatrix(),n=!0)}return this._scale=1,this._performCursorZoom=!1,!!(n||this._lastPosition.distanceToSquared(this.object.position)>1e-6||8*(1-this._lastQuaternion.dot(this.object.quaternion))>1e-6||this._lastTargetPosition.distanceToSquared(this.target)>1e-6)&&(this.dispatchEvent(o),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0)}_getAutoRotationAngle(t){return null!==t?d/60*this.autoRotateSpeed*t:d/60/60*this.autoRotateSpeed}_getZoomScale(t){return Math.pow(.95,this.zoomSpeed*Math.abs(.01*t))}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){c.setFromMatrixColumn(e,0),c.multiplyScalar(-t),this._panOffset.add(c)}_panUp(t,e){!0===this.screenSpacePanning?c.setFromMatrixColumn(e,1):(c.setFromMatrixColumn(e,0),c.crossVectors(this.object.up,c)),c.multiplyScalar(t),this._panOffset.add(c)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;c.copy(s).sub(this.target);let o=c.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,a=i.width,n=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(2*(o/n))+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(d*this._rotateDelta.x/e.clientHeight),this._rotateUp(d*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(d*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-d*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(d*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-d*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(1===this._pointers.length)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(1===this._pointers.length)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y;this._dollyStart.set(0,Math.sqrt(i*i+s*s))}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(1==this._pointers.length)this._rotateEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(d*this._rotateDelta.x/e.clientHeight),this._rotateUp(d*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(1===this._pointers.length)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y;this._dollyEnd.set(0,Math.sqrt(i*i+s*s)),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];void 0===e&&(e=new s.FM8,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function onPointerDown(t){!1!==this.enabled&&(0===this._pointers.length&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._isTrackingPointer(t)||(this._addPointer(t),"touch"===t.pointerType?this._onTouchStart(t):this._onMouseDown(t)))}function onPointerMove(t){!1!==this.enabled&&("touch"===t.pointerType?this._onTouchMove(t):this._onMouseMove(t))}function onPointerUp(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(n),this.state=p.NONE;break;case 1:let e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y})}}function onMouseDown(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case s.RsA.DOLLY:if(!1===this.enableZoom)return;this._handleMouseDownDolly(t),this.state=p.DOLLY;break;case s.RsA.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===this.enablePan)return;this._handleMouseDownPan(t),this.state=p.PAN}else{if(!1===this.enableRotate)return;this._handleMouseDownRotate(t),this.state=p.ROTATE}break;case s.RsA.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===this.enableRotate)return;this._handleMouseDownRotate(t),this.state=p.ROTATE}else{if(!1===this.enablePan)return;this._handleMouseDownPan(t),this.state=p.PAN}break;default:this.state=p.NONE}this.state!==p.NONE&&this.dispatchEvent(a)}function onMouseMove(t){switch(this.state){case p.ROTATE:if(!1===this.enableRotate)return;this._handleMouseMoveRotate(t);break;case p.DOLLY:if(!1===this.enableZoom)return;this._handleMouseMoveDolly(t);break;case p.PAN:if(!1===this.enablePan)return;this._handleMouseMovePan(t)}}function onMouseWheel(t){!1!==this.enabled&&!1!==this.enableZoom&&this.state===p.NONE&&(t.preventDefault(),this.dispatchEvent(a),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(n))}function onKeyDown(t){!1!==this.enabled&&!1!==this.enablePan&&this._handleKeyDown(t)}function onTouchStart(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case s.QmN.ROTATE:if(!1===this.enableRotate)return;this._handleTouchStartRotate(t),this.state=p.TOUCH_ROTATE;break;case s.QmN.PAN:if(!1===this.enablePan)return;this._handleTouchStartPan(t),this.state=p.TOUCH_PAN;break;default:this.state=p.NONE}break;case 2:switch(this.touches.TWO){case s.QmN.DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this._handleTouchStartDollyPan(t),this.state=p.TOUCH_DOLLY_PAN;break;case s.QmN.DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this._handleTouchStartDollyRotate(t),this.state=p.TOUCH_DOLLY_ROTATE;break;default:this.state=p.NONE}break;default:this.state=p.NONE}this.state!==p.NONE&&this.dispatchEvent(a)}function onTouchMove(t){switch(this._trackPointer(t),this.state){case p.TOUCH_ROTATE:if(!1===this.enableRotate)return;this._handleTouchMoveRotate(t),this.update();break;case p.TOUCH_PAN:if(!1===this.enablePan)return;this._handleTouchMovePan(t),this.update();break;case p.TOUCH_DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this._handleTouchMoveDollyPan(t),this.update();break;case p.TOUCH_DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=p.NONE}}function onContextMenu(t){!1!==this.enabled&&t.preventDefault()}function interceptControlDown(t){if("Control"===t.key){this._controlActive=!0;let t=this.domElement.getRootNode();t.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}}function interceptControlUp(t){if("Control"===t.key){this._controlActive=!1;let t=this.domElement.getRootNode();t.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}}}}]);