(()=>{var $d=Object.defineProperty;var Kd=(s,t)=>{for(var e in t)$d(s,e,{get:t[e],enumerable:!0})};var Zd=0,Ch=1,Jd=2;var ku=1,Qd=2,Wn=3,Ln=0,Ve=1,Se=2,di=0,gs=1,vs=2,Ih=3,Ph=4,jd=5,Li=100,tf=101,ef=102,nf=103,sf=104,rf=200,of=201,af=202,cf=203,hc=204,uc=205,lf=206,hf=207,uf=208,df=209,ff=210,pf=211,mf=212,gf=213,xf=214,dc=0,fc=1,pc=2,Ms=3,mc=4,gc=5,xc=6,_c=7,Fl=0,_f=1,yf=2,fi=0,vf=1,Mf=2,bf=3,Ol=4,wf=5,Ef=6,Sf=7;var Hu=300,bs=301,ws=302,yc=303,vc=304,Qo=306,zi=1e3,Ni=1001,Mc=1002,rn=1003,Tf=1004;var Br=1005;var In=1006,Ra=1007;var Ui=1008;var Kn=1009,Gu=1010,Vu=1011,xr=1012,Bl=1013,Fi=1014,Pn=1015,Tr=1016,kl=1017,Hl=1018,Es=1020,Wu=35902,Xu=1021,qu=1022,vn=1023,Yu=1024,$u=1025,xs=1026,Ss=1027,Gl=1028,Vl=1029,Ku=1030,Wl=1031;var Xl=1033,xo=33776,_o=33777,yo=33778,vo=33779,bc=35840,wc=35841,Ec=35842,Sc=35843,Tc=36196,Ac=37492,Rc=37496,Cc=37808,Ic=37809,Pc=37810,Lc=37811,Dc=37812,Nc=37813,Uc=37814,zc=37815,Fc=37816,Oc=37817,Bc=37818,kc=37819,Hc=37820,Gc=37821,Mo=36492,Vc=36494,Wc=36495,Zu=36283,Xc=36284,qc=36285,Yc=36286;var bo=2300,$c=2301,Ca=2302,Lh=2400,Dh=2401,Nh=2402;var Af=3200,Rf=3201;var ql=0,Cf=1,hi="",be="srgb",Ns="srgb-linear",jo="linear",le="srgb";var Ki=7680;var Uh=519,If=512,Pf=513,Lf=514,Ju=515,Df=516,Nf=517,Uf=518,zf=519,Kc=35044;var zh="300 es",qn=2e3,wo=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ia=Math.PI/180,Eo=180/Math.PI;function Yn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Ge(s,t,e){return Math.max(t,Math.min(e,s))}function Ff(s,t){return(s%t+t)%t}function Pa(s,t,e){return(1-e)*s+e*t}function Cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function he(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ht=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],_=i[1],v=i[4],y=i[7],E=i[2],A=i[5],S=i[8];return r[0]=o*x+a*_+c*E,r[3]=o*g+a*v+c*A,r[6]=o*p+a*y+c*S,r[1]=l*x+h*_+u*E,r[4]=l*g+h*v+u*A,r[7]=l*p+h*y+u*S,r[2]=d*x+f*_+m*E,r[5]=d*g+f*v+m*A,r[8]=d*p+f*y+m*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(La.makeScale(t,e)),this}rotate(t){return this.premultiply(La.makeRotation(-t)),this}translate(t,e){return this.premultiply(La.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},La=new Zt;function Qu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function So(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Of(){let s=So("canvas");return s.style.display="block",s}var Fh={};function ur(s){s in Fh||(Fh[s]=!0,console.warn(s))}function Bf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kf(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var se={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?jo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Oh=[.64,.33,.3,.6,.15,.06],Bh=[.2126,.7152,.0722],kh=[.3127,.329],Hh=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Ns]:{primaries:Oh,whitePoint:kh,transfer:jo,toXYZ:Hh,fromXYZ:Gh,luminanceCoefficients:Bh,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Oh,whitePoint:kh,transfer:le,toXYZ:Hh,fromXYZ:Gh,luminanceCoefficients:Bh,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});var Zi,Zc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zi===void 0&&(Zi=So("canvas")),Zi.width=t.width,Zi.height=t.height;let n=Zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=So("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gf=0,To=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Da(i[o].image)):r.push(Da(i[o]))}else r=Da(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Zc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vf=0,Qe=class s extends pi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ni,i=Ni,r=In,o=Ui,a=vn,c=Kn,l=s.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Yn(),this.name="",this.source=new To(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Hu;Qe.DEFAULT_ANISOTROPY=1;var ue=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,y=(f+1)/2,E=(p+1)/2,A=(h+d)/4,S=(u+x)/4,C=(m+g)/4;return v>y&&v>E?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=S/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=C/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=S/r,i=C/r),this.set(n,i,r,e),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jc=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new To(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends Jc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ao=class extends Qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qc=class extends Qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var je=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*x,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let E=Math.sqrt(v),A=Math.atan2(E,p*_);g=Math.sin(g*A)/E,a=Math.sin(a*A)/E}let y=a*_;if(c=c*g+d*y,l=l*g+f*y,h=h*g+m*y,u=u*g+x*y,g===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Na=new L,Vh=new je,Mn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),Hr.subVectors(this.max,er),Ji.subVectors(t.a,er),Qi.subVectors(t.b,er),ji.subVectors(t.c,er),si.subVectors(Qi,Ji),ri.subVectors(ji,Qi),Si.subVectors(Ji,ji);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Si.z,Si.y,si.z,0,-si.x,ri.z,0,-ri.x,Si.z,0,-Si.x,-si.y,si.x,0,-ri.y,ri.x,0,-Si.y,Si.x,0];return!Ua(e,Ji,Qi,ji,Hr)||(e=[1,0,0,0,1,0,0,0,1],!Ua(e,Ji,Qi,ji,Hr))?!1:(Gr.crossVectors(si,ri),e=[Gr.x,Gr.y,Gr.z],Ua(e,Ji,Qi,ji,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Bn=[new L,new L,new L,new L,new L,new L,new L,new L],xn=new L,kr=new Mn,Ji=new L,Qi=new L,ji=new L,si=new L,ri=new L,Si=new L,er=new L,Hr=new L,Gr=new L,Ti=new L;function Ua(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ti.fromArray(s,r);let a=i.x*Math.abs(Ti.x)+i.y*Math.abs(Ti.y)+i.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Wf=new Mn,nr=new L,za=new L,mi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(nr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(za)),this.expandByPoint(nr.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new L,Fa=new L,Vr=new L,oi=new L,Oa=new L,Wr=new L,Ba=new L,Ro=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fa.copy(t).add(e).multiplyScalar(.5),Vr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Fa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Vr),a=oi.dot(this.direction),c=-oi.dot(Vr),l=oi.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fa).addScaledVector(Vr,d),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,r){Oa.subVectors(e,t),Wr.subVectors(n,t),Ba.crossVectors(Oa,Wr);let o=this.direction.dot(Ba),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);let c=a*this.direction.dot(Wr.crossVectors(oi,Wr));if(c<0)return null;let l=a*this.direction.dot(Oa.cross(oi));if(l<0||c+l>o)return null;let h=-a*oi.dot(Ba);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,x,g)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,x=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xf,t,qf)}lookAt(t,e,n){let i=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ai.crossVectors(n,nn),ai.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ai.crossVectors(n,nn)),ai.normalize(),Xr.crossVectors(nn,ai),i[0]=ai.x,i[4]=Xr.x,i[8]=nn.x,i[1]=ai.y,i[5]=Xr.y,i[9]=nn.y,i[2]=ai.z,i[6]=Xr.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],_=n[3],v=n[7],y=n[11],E=n[15],A=i[0],S=i[4],C=i[8],b=i[12],M=i[1],I=i[5],N=i[9],F=i[13],B=i[2],G=i[6],k=i[10],tt=i[14],X=i[3],ot=i[7],xt=i[11],pt=i[15];return r[0]=o*A+a*M+c*B+l*X,r[4]=o*S+a*I+c*G+l*ot,r[8]=o*C+a*N+c*k+l*xt,r[12]=o*b+a*F+c*tt+l*pt,r[1]=h*A+u*M+d*B+f*X,r[5]=h*S+u*I+d*G+f*ot,r[9]=h*C+u*N+d*k+f*xt,r[13]=h*b+u*F+d*tt+f*pt,r[2]=m*A+x*M+g*B+p*X,r[6]=m*S+x*I+g*G+p*ot,r[10]=m*C+x*N+g*k+p*xt,r[14]=m*b+x*F+g*tt+p*pt,r[3]=_*A+v*M+y*B+E*X,r[7]=_*S+v*I+y*G+E*ot,r[11]=_*C+v*N+y*k+E*xt,r[15]=_*b+v*F+y*tt+E*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],_=u*g*l-x*d*l+x*c*f-a*g*f-u*c*p+a*d*p,v=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,y=h*x*l-m*u*l+m*a*f-o*x*f-h*a*p+o*u*p,E=m*u*c-h*x*c-m*a*d+o*x*d+h*a*g-o*u*g,A=e*_+n*v+i*y+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/A;return t[0]=_*S,t[1]=(x*d*r-u*g*r-x*i*f+n*g*f+u*i*p-n*d*p)*S,t[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*p+n*c*p)*S,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*S,t[4]=v*S,t[5]=(h*g*r-m*d*r+m*i*f-e*g*f-h*i*p+e*d*p)*S,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*p-e*c*p)*S,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*S,t[8]=y*S,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*S,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*S,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*S,t[12]=E*S,t[13]=(h*x*i-m*u*i+m*n*d-e*x*d-h*n*g+e*u*g)*S,t[14]=(m*a*i-o*x*i-m*n*c+e*x*c+o*n*g-e*a*g)*S,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,_=c*l,v=c*h,y=c*u,E=n.x,A=n.y,S=n.z;return i[0]=(1-(x+p))*E,i[1]=(f+y)*E,i[2]=(m-v)*E,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+p))*A,i[6]=(g+_)*A,i[7]=0,i[8]=(m+v)*S,i[9]=(g-_)*S,i[10]=(1-(d+x))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ts.set(i[0],i[1],i[2]).length(),o=ts.set(i[4],i[5],i[6]).length(),a=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],_n.copy(this);let l=1/r,h=1/o,u=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=qn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,m;if(a===qn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===wo)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=qn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,m,x;if(a===qn)m=(o+r)*u,x=-2*u;else if(a===wo)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ts=new L,_n=new jt,Xf=new L(0,0,0),qf=new L(1,1,1),ai=new L,Xr=new L,nn=new L,Wh=new jt,Xh=new je,Be=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Be.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yf=0,qh=new L,es=new je,Hn=new jt,qr=new L,ir=new L,$f=new L,Kf=new je,Yh=new L(1,0,0),$h=new L(0,1,0),Kh=new L(0,0,1),Zh={type:"added"},Zf={type:"removed"},ns={type:"childadded",child:null},ka={type:"childremoved",child:null},ve=class s extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Be,n=new je,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new Zt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(Kh,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(Kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ir,qr,this.up):Hn.lookAt(qr,ir,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Hn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zh),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zh),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,$f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ve.DEFAULT_UP=new L(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new L,Gn=new L,Ha=new L,Vn=new L,is=new L,ss=new L,Jh=new L,Ga=new L,Va=new L,Wa=new L,Xa=new ue,qa=new ue,Ya=new ue,ui=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){yn.subVectors(i,e),Gn.subVectors(n,e),Ha.subVectors(t,e);let o=yn.dot(yn),a=yn.dot(Gn),c=yn.dot(Ha),l=Gn.dot(Gn),h=Gn.dot(Ha),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Xa,r.x),o.addScaledVector(qa,r.y),o.addScaledVector(Ya,r.z),o}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Gn.subVectors(t,e),yn.cross(Gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;is.subVectors(i,n),ss.subVectors(r,n),Ga.subVectors(t,n);let c=is.dot(Ga),l=ss.dot(Ga);if(c<=0&&l<=0)return e.copy(n);Va.subVectors(t,i);let h=is.dot(Va),u=ss.dot(Va);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(is,o);Wa.subVectors(t,r);let f=is.dot(Wa),m=ss.dot(Wa);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ss,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Jh.subVectors(r,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Jh,a);let p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function $a(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=Ff(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$a(o,r,t+1/3),this.g=$a(o,r,t),this.b=$a(o,r,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return se.fromWorkingColorSpace(He.copy(this),t),Math.round(Ge(He.r*255,0,255))*65536+Math.round(Ge(He.g*255,0,255))*256+Math.round(Ge(He.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(He.copy(this),e);let n=He.r,i=He.g,r=He.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=be){se.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,i=He.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Yr);let n=Pa(ci.h,Yr.h,e),i=Pa(ci.s,Yr.s,e),r=Pa(ci.l,Yr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Ht;Ht.NAMES=ju;var Jf=0,Dn=class extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Yn(),this.name="",this.blending=gs,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wt=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ae=new L,$r=new ht,Je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kc&&(t.usage=this.usage),t}};var Io=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Po=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qf=0,hn=new jt,Ka=new ve,rs=new L,sn=new Mn,sr=new Mn,Ne=new L,we=class s extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?Po:Io)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(sn.min,sr.min),sn.expandByPoint(Ne),Ne.addVectors(sn.max,sr.max),sn.expandByPoint(Ne)):(sn.expandByPoint(sr.min),sn.expandByPoint(sr.max))}sn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(rs.fromBufferAttribute(t,l),Ne.add(rs)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;let l=new L,h=new L,u=new L,d=new ht,f=new ht,m=new ht,x=new L,g=new L;function p(C,b,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(I),a[C].add(x),a[b].add(x),a[M].add(x),c[C].add(g),c[b].add(g),c[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,b=_.length;C<b;++C){let M=_[C],I=M.start,N=M.count;for(let F=I,B=I+N;F<B;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new L,y=new L,E=new L,A=new L;function S(C){E.fromBufferAttribute(i,C),A.copy(E);let b=a[C];v.copy(b),v.sub(E.multiplyScalar(E.dot(b))).normalize(),y.crossVectors(A,b);let I=y.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,b=_.length;C<b;++C){let M=_[C],I=M.start,N=M.count;for(let F=I,B=I+N;F<B;F+=3)S(t.getX(F+0)),S(t.getX(F+1)),S(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qh=new jt,Ai=new Ro,Kr=new mi,jh=new L,Zr=new L,Jr=new L,Qr=new L,Za=new L,jr=new L,tu=new L,to=new L,Y=class extends ve{constructor(t=new we,e=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Za.fromBufferAttribute(u,t),o?jr.addScaledVector(Za,h):jr.addScaledVector(Za.sub(e),h))}e.add(jr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Ai.copy(t.ray).recast(t.near),!(Kr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Kr,jh)===null||Ai.origin.distanceToSquared(jh)>(t.far-t.near)**2))&&(Qh.copy(r).invert(),Ai.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ai)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,E=v;y<E;y+=3){let A=a.getX(y),S=a.getX(y+1),C=a.getX(y+2);i=eo(this,p,t,n,l,h,u,A,S,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);i=eo(this,o,t,n,l,h,u,_,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],_=Math.max(g.start,f.start),v=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=_,E=v;y<E;y+=3){let A=y,S=y+1,C=y+2;i=eo(this,p,t,n,l,h,u,A,S,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let _=g,v=g+1,y=g+2;i=eo(this,o,t,n,l,h,u,_,v,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function jf(s,t,e,n,i,r,o,a){let c;if(t.side===Ve?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Ln,a),c===null)return null;to.copy(a),to.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(to);return l<e.near||l>e.far?null:{distance:l,point:to.clone(),object:s}}function eo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Zr),s.getVertexPosition(c,Jr),s.getVertexPosition(l,Qr);let h=jf(s,t,e,n,Zr,Jr,Qr,tu);if(h){let u=new L;ui.getBarycoord(tu,Zr,Jr,Qr,u),i&&(h.uv=ui.getInterpolatedAttribute(i,a,c,l,u,new ht)),r&&(h.uv1=ui.getInterpolatedAttribute(r,a,c,l,u,new ht)),o&&(h.normal=ui.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};ui.getNormal(Zr,Jr,Qr,d.normal),h.face=d,h.barycoord=u}return h}var ft=class s extends we{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function m(x,g,p,_,v,y,E,A,S,C,b){let M=y/S,I=E/C,N=y/2,F=E/2,B=A/2,G=S+1,k=C+1,tt=0,X=0,ot=new L;for(let xt=0;xt<k;xt++){let pt=xt*I-F;for(let Gt=0;Gt<G;Gt++){let St=Gt*M-N;ot[x]=St*_,ot[g]=pt*v,ot[p]=B,l.push(ot.x,ot.y,ot.z),ot[x]=0,ot[g]=0,ot[p]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Gt/S),u.push(1-xt/C),tt+=1}}for(let xt=0;xt<C;xt++)for(let pt=0;pt<S;pt++){let Gt=d+pt+G*xt,St=d+pt+G*(xt+1),V=d+(pt+1)+G*(xt+1),j=d+(pt+1)+G*xt;c.push(Gt,St,j),c.push(St,V,j),X+=6}a.addGroup(f,X,b),f+=X,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ts(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(s){let t={};for(let e=0;e<s.length;e++){let n=Ts(s[e]);for(let i in n)t[i]=n[i]}return t}function tp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function td(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var ep={clone:Ts,merge:Ye},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Dn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Lo=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new L,eu=new ht,nu=new ht,Ue=class extends Lo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,eu,nu),e.subVectors(nu,eu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ia*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},os=-90,as=1,jc=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ue(os,as,t,e);i.layers=this.layers,this.add(i);let r=new Ue(os,as,t,e);r.layers=this.layers,this.add(r);let o=new Ue(os,as,t,e);o.layers=this.layers,this.add(o);let a=new Ue(os,as,t,e);a.layers=this.layers,this.add(a);let c=new Ue(os,as,t,e);c.layers=this.layers,this.add(c);let l=new Ue(os,as,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Do=class extends Qe{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:bs,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tl=class extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Do(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ft(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:di});r.uniforms.tEquirect.value=e;let o=new Y(i,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=In),new jc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ja=new L,sp=new L,rp=new Zt,Xn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ja.subVectors(n,e).cross(sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ja),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||rp.getNormalMatrix(t),i=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new mi,no=new L,_r=class{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],x=i[10],g=i[11],p=i[12],_=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-r,d-l,g-f,y-p).normalize(),n[1].setComponents(c+r,d+l,g+f,y+p).normalize(),n[2].setComponents(c+o,d+h,g+m,y+_).normalize(),n[3].setComponents(c-o,d-h,g-m,y-_).normalize(),n[4].setComponents(c-a,d-u,g-x,y-v).normalize(),e===qn)n[5].setComponents(c+a,d+u,g+x,y+v).normalize();else if(e===wo)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(no.x=i.normal.x>0?t.max.x:t.min.x,no.y=i.normal.y>0?t.max.y:t.min.y,no.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function op(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var pe=class s extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let _=p*d-o;for(let v=0;v<l;v++){let y=v*u-r;m.push(y,-_,0),x.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let v=_+l*p,y=_+l*(p+1),E=_+1+l*(p+1),A=_+1+l*p;f.push(v,y,A),f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new ee(m,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,o0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,O0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:ap,alphahash_pars_fragment:cp,alphamap_fragment:lp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:xp,beginnormal_vertex:_p,bsdfs:yp,iridescence_fragment:vp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Sp,color_fragment:Tp,color_pars_fragment:Ap,color_pars_vertex:Rp,color_vertex:Cp,common:Ip,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Np,emissivemap_fragment:Up,emissivemap_pars_fragment:zp,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Hp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:jp,envmap_vertex:Vp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:qp,fog_pars_fragment:Yp,gradientmap_pars_fragment:$p,lightmap_pars_fragment:Kp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Qp,lights_toon_fragment:tm,lights_toon_pars_fragment:em,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:sm,lights_physical_pars_fragment:rm,lights_fragment_begin:om,lights_fragment_maps:am,lights_fragment_end:cm,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:_m,morphinstance_vertex:ym,morphcolor_vertex:vm,morphnormal_vertex:Mm,morphtarget_pars_vertex:bm,morphtarget_vertex:wm,normal_fragment_begin:Em,normal_fragment_maps:Sm,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:Rm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Nm,packing:Um,premultiplied_alpha_fragment:zm,project_vertex:Fm,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:$m,skinnormal_vertex:Km,specularmap_fragment:Zm,specularmap_pars_fragment:Jm,tonemapping_fragment:Qm,tonemapping_pars_fragment:jm,transmission_fragment:t0,transmission_pars_fragment:e0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:s0,worldpos_vertex:r0,background_vert:o0,background_frag:a0,backgroundCube_vert:c0,backgroundCube_frag:l0,cube_vert:h0,cube_frag:u0,depth_vert:d0,depth_frag:f0,distanceRGBA_vert:p0,distanceRGBA_frag:m0,equirect_vert:g0,equirect_frag:x0,linedashed_vert:_0,linedashed_frag:y0,meshbasic_vert:v0,meshbasic_frag:M0,meshlambert_vert:b0,meshlambert_frag:w0,meshmatcap_vert:E0,meshmatcap_frag:S0,meshnormal_vert:T0,meshnormal_frag:A0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:I0,meshphysical_frag:P0,meshtoon_vert:L0,meshtoon_frag:D0,points_vert:N0,points_frag:U0,shadow_vert:z0,shadow_frag:F0,sprite_vert:O0,sprite_frag:B0},gt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Rn={basic:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ye([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ye([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ye([gt.points,gt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ye([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ye([gt.common,gt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ye([gt.sprite,gt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ye([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ye([gt.lights,gt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Rn.physical={uniforms:Ye([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var io={r:0,b:0,g:0},Ci=new Be,k0=new jt;function H0(s,t,e,n,i,r,o){let a=new Ht(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1,y=m(_);y===null?p(a,c):y&&y.isColor&&(p(y,1),v=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,v){let y=m(v);y&&(y.isCubeTexture||y.mapping===Qo)?(h===void 0&&(h=new Y(new ft(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ts(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(Ci)),h.material.toneMapped=se.getTransfer(y.colorSpace)!==le,(u!==y||d!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Y(new pe(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ts(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=se.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(io,td(s)),n.buffers.color.setClear(io.r,io.g,io.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:g}}function G0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(M,I,N,F,B){let G=!1,k=u(F,N,I);r!==k&&(r=k,l(r.object)),G=f(M,F,N,B),G&&m(M,F,N,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(M,I,N,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,N){let F=N.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let G=B[I.id];G===void 0&&(G={},B[I.id]=G);let k=G[F];return k===void 0&&(k=d(c()),G[F]=k),k}function d(M){let I=[],N=[],F=[];for(let B=0;B<e;B++)I[B]=0,N[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,I,N,F){let B=r.attributes,G=I.attributes,k=0,tt=N.getAttributes();for(let X in tt)if(tt[X].location>=0){let xt=B[X],pt=G[X];if(pt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(pt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(pt=M.instanceColor)),xt===void 0||xt.attribute!==pt||pt&&xt.data!==pt.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function m(M,I,N,F){let B={},G=I.attributes,k=0,tt=N.getAttributes();for(let X in tt)if(tt[X].location>=0){let xt=G[X];xt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));let pt={};pt.attribute=xt,xt&&xt.data&&(pt.data=xt.data),B[X]=pt,k++}r.attributes=B,r.attributesNum=k,r.index=F}function x(){let M=r.newAttributes;for(let I=0,N=M.length;I<N;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){let N=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;N[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),B[M]!==I&&(s.vertexAttribDivisor(M,I),B[M]=I)}function _(){let M=r.newAttributes,I=r.enabledAttributes;for(let N=0,F=I.length;N<F;N++)I[N]!==M[N]&&(s.disableVertexAttribArray(N),I[N]=0)}function v(M,I,N,F,B,G,k){k===!0?s.vertexAttribIPointer(M,I,N,B,G):s.vertexAttribPointer(M,I,N,F,B,G)}function y(M,I,N,F){x();let B=F.attributes,G=N.getAttributes(),k=I.defaultAttributeValues;for(let tt in G){let X=G[tt];if(X.location>=0){let ot=B[tt];if(ot===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){let xt=ot.normalized,pt=ot.itemSize,Gt=t.get(ot);if(Gt===void 0)continue;let St=Gt.buffer,V=Gt.type,j=Gt.bytesPerElement,ut=V===s.INT||V===s.UNSIGNED_INT||ot.gpuType===Bl;if(ot.isInterleavedBufferAttribute){let nt=ot.data,Rt=nt.stride,It=ot.offset;if(nt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<X.locationSize;Nt++)p(X.location+Nt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Nt=0;Nt<X.locationSize;Nt++)g(X.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Nt=0;Nt<X.locationSize;Nt++)v(X.location+Nt,pt/X.locationSize,V,xt,Rt*j,(It+pt/X.locationSize*Nt)*j,ut)}else{if(ot.isInstancedBufferAttribute){for(let nt=0;nt<X.locationSize;nt++)p(X.location+nt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let nt=0;nt<X.locationSize;nt++)g(X.location+nt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let nt=0;nt<X.locationSize;nt++)v(X.location+nt,pt/X.locationSize,V,xt,pt*j,pt/X.locationSize*nt*j,ut)}}else if(k!==void 0){let xt=k[tt];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(X.location,xt);break;case 3:s.vertexAttrib3fv(X.location,xt);break;case 4:s.vertexAttrib4fv(X.location,xt);break;default:s.vertexAttrib1fv(X.location,xt)}}}}_()}function E(){C();for(let M in n){let I=n[M];for(let N in I){let F=I[N];for(let B in F)h(F[B].object),delete F[B];delete I[N]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let N in I){let F=I[N];for(let B in F)h(F[B].object),delete F[B];delete I[N]}delete n[M.id]}function S(M){for(let I in n){let N=n[I];if(N[M.id]===void 0)continue;let F=N[M.id];for(let B in F)h(F[B].object),delete F[B];delete N[M.id]}}function C(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function V0(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function W0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==vn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let C=S===Tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Kn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Pn&&!C)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:E,maxSamples:A}}function X0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Xn,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let _=r?0:n,v=_*4,y=p.clippingState||null;c.value=y,y=h(m,d,v,f);for(let E=0;E!==v;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,y=f;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function q0(s){let t=new WeakMap;function e(o,a){return a===yc?o.mapping=bs:a===vc&&(o.mapping=ws),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===yc||a===vc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new tl(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var No=class extends Lo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ps=4,iu=[.125,.215,.35,.446,.526,.582],Di=20,Qa=new No,su=new Ht,ja=null,tc=0,ec=0,nc=!1,Pi=(1+Math.sqrt(5))/2,cs=1/Pi,ru=[new L(-Pi,cs,0),new L(Pi,cs,0),new L(-cs,0,Pi),new L(cs,0,Pi),new L(0,Pi,-cs),new L(0,Pi,cs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],As=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ja=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ja,tc,ec),this._renderer.xr.enabled=nc,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ja=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Tr,format:vn,colorSpace:Ns,depthBuffer:!1},i=ou(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(r)),this._blurMaterial=$0(r,t,e)}return i}_compileMaterial(t){let e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,n,i){let a=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(su),h.toneMapping=fi,h.autoClear=!1;let f=new Wt({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new Y(new ft,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(su),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;so(i,_*v,p>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===bs||t.mapping===ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=au());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;so(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ru[(i-r-1)%ru.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Y(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Di;g>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Di}`);let p=[],_=0;for(let S=0;S<Di;++S){let C=S/x,b=Math.exp(-C*C/2);p.push(b),S===0?_+=b:S<g&&(_+=2*b)}for(let S=0;S<p.length;S++)p[S]=p[S]/_;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let y=this._sizeLods[i],E=3*y*(i>v-ps?i-v+ps:0),A=4*(this._cubeSize-y);so(e,E,A,3*y,2*y),c.setRenderTarget(e),c.render(u,Qa)}};function Y0(s){let t=[],e=[],n=[],i=s,r=s-ps+1+iu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-ps?c=iu[o-s+ps-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,_=new Float32Array(x*m*f),v=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let A=0;A<f;A++){let S=A%3*2/3-1,C=A>2?0:-1,b=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];_.set(b,x*m*A),v.set(d,g*m*A);let M=[A,A,A,A,A,A];y.set(M,p*m*A)}let E=new we;E.setAttribute("position",new Je(_,x)),E.setAttribute("uv",new Je(v,g)),E.setAttribute("faceIndex",new Je(y,p)),t.push(E),i>ps&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ou(s,t,e){let n=new Zn(s,t,e);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function $0(s,t,e){let n=new Float32Array(Di),i=new L(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function au(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function cu(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function K0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===yc||c===vc,h=c===bs||c===ws;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new As(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new As(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Z0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function J0(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let v=0,y=_.length;v<y;v+=3){let E=_[v+0],A=_[v+1],S=_[v+2];d.push(E,A,A,S,S,E)}}else if(m!==void 0){let _=m.array;x=m.version;for(let v=0,y=_.length/3-1;v<y;v+=3){let E=v+0,A=v+1,S=v+2;d.push(E,A,A,S,S,E)}}else return;let g=new(Qu(d)?Po:Io)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Q0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let _=0;_<m;_++)p+=f[_]*x[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function j0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tg(s,t,e){let n=new WeakMap,i=new ue;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let y=a.attributes.position.count*v,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*E*4*u),S=new Ao(A,y,E,u);S.type=Pn,S.needsUpdate=!0;let C=v*4;for(let M=0;M<u;M++){let I=g[M],N=p[M],F=_[M],B=y*E*4*M;for(let G=0;G<I.count;G++){let k=G*C;f===!0&&(i.fromBufferAttribute(I,G),A[B+k+0]=i.x,A[B+k+1]=i.y,A[B+k+2]=i.z,A[B+k+3]=0),m===!0&&(i.fromBufferAttribute(N,G),A[B+k+4]=i.x,A[B+k+5]=i.y,A[B+k+6]=i.z,A[B+k+7]=0),x===!0&&(i.fromBufferAttribute(F,G),A[B+k+8]=i.x,A[B+k+9]=i.y,A[B+k+10]=i.z,A[B+k+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:S,size:new ht(y,E)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function eg(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Uo=class extends Qe{constructor(t,e,n,i,r,o,a,c,l,h=xs){if(h!==xs&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xs&&(n=Fi),n===void 0&&h===Ss&&(n=Es),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=c!==void 0?c:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nd=new Qe,lu=new Uo(1,1),id=new Ao,sd=new Qc,rd=new Do,hu=[],uu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function Us(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=hu[i];if(r===void 0&&(r=new Float32Array(i),hu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ie(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ta(s,t){let e=uu[t];e===void 0&&(e=new Int32Array(t),uu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ng(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ig(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function rg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function og(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;pu.set(n),s.uniformMatrix2fv(this.addr,!1,pu),Pe(e,n)}}function ag(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;fu.set(n),s.uniformMatrix3fv(this.addr,!1,fu),Pe(e,n)}}function cg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;du.set(n),s.uniformMatrix4fv(this.addr,!1,du),Pe(e,n)}}function lg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function hg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function ug(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function fg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function mg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function gg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function xg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lu.compareFunction=Ju,r=lu):r=nd,e.setTexture2D(t||r,i)}function _g(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sd,i)}function yg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||rd,i)}function vg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||id,i)}function Mg(s){switch(s){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return og;case 35675:return ag;case 35676:return cg;case 5124:case 35670:return lg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return vg}}function bg(s,t){s.uniform1fv(this.addr,t)}function wg(s,t){let e=Us(t,this.size,2);s.uniform2fv(this.addr,e)}function Eg(s,t){let e=Us(t,this.size,3);s.uniform3fv(this.addr,e)}function Sg(s,t){let e=Us(t,this.size,4);s.uniform4fv(this.addr,e)}function Tg(s,t){let e=Us(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ag(s,t){let e=Us(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Rg(s,t){let e=Us(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Cg(s,t){s.uniform1iv(this.addr,t)}function Ig(s,t){s.uniform2iv(this.addr,t)}function Pg(s,t){s.uniform3iv(this.addr,t)}function Lg(s,t){s.uniform4iv(this.addr,t)}function Dg(s,t){s.uniform1uiv(this.addr,t)}function Ng(s,t){s.uniform2uiv(this.addr,t)}function Ug(s,t){s.uniform3uiv(this.addr,t)}function zg(s,t){s.uniform4uiv(this.addr,t)}function Fg(s,t,e){let n=this.cache,i=t.length,r=ta(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||nd,r[o])}function Og(s,t,e){let n=this.cache,i=t.length,r=ta(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||sd,r[o])}function Bg(s,t,e){let n=this.cache,i=t.length,r=ta(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||rd,r[o])}function kg(s,t,e){let n=this.cache,i=t.length,r=ta(e,i);Ie(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||id,r[o])}function Hg(s){switch(s){case 5126:return bg;case 35664:return wg;case 35665:return Eg;case 35666:return Sg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Ig;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ng;case 36295:return Ug;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}var el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mg(e.type)}},nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hg(e.type)}},il=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ic=/(\w+)(\])?(\[|\.)?/g;function mu(s,t){s.seq.push(t),s.map[t.id]=t}function Gg(s,t,e){let n=s.name,i=n.length;for(ic.lastIndex=0;;){let r=ic.exec(n),o=ic.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){mu(e,l===void 0?new el(a,s,t):new nl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new il(a),mu(e,u)),e=u}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Gg(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function gu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Vg=37297,Wg=0;function Xg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var xu=new Zt;function qg(s){se._getMatrix(xu,se.workingColorSpace,s);let t=`mat3( ${xu.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case jo:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function _u(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Xg(s.getShaderSource(t),o)}else return i}function Yg(s,t){let e=qg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $g(s,t){let e;switch(t){case vf:e="Linear";break;case Mf:e="Reinhard";break;case bf:e="Cineon";break;case Ol:e="ACESFilmic";break;case Ef:e="AgX";break;case Sf:e="Neutral";break;case wf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ro=new L;function Kg(){se.getLuminanceCoefficients(ro);let s=ro.x.toFixed(4),t=ro.y.toFixed(4),e=ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Jg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function dr(s){return s!==""}function yu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(s){return s.replace(jg,ex)}var tx=new Map;function ex(s,t){let e=Jt[t];if(e===void 0){let n=tx.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}var nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(s){return s.replace(nx,ix)}function ix(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function rx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case ws:t="ENVMAP_TYPE_CUBE";break;case Qo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ox(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===ws&&(t="ENVMAP_MODE_REFRACTION"),t}function ax(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fl:t="ENVMAP_BLENDING_MULTIPLY";break;case _f:t="ENVMAP_BLENDING_MIX";break;case yf:t="ENVMAP_BLENDING_ADD";break}return t}function cx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lx(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=sx(e),l=rx(e),h=ox(e),u=ax(e),d=cx(e),f=Zg(e),m=Jg(r),x=i.createProgram(),g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(dr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(g=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==fi?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),Kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(dr).join(`
`)),o=sl(o),o=yu(o,e),o=vu(o,e),a=sl(a),a=yu(a,e),a=vu(a,e),o=Mu(o),a=Mu(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+g+o,y=_+p+a,E=gu(i,i.VERTEX_SHADER,v),A=gu(i,i.FRAGMENT_SHADER,y);i.attachShader(x,E),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function S(I){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(E).trim(),B=i.getShaderInfoLog(A).trim(),G=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,E,A);else{let tt=_u(i,E,"vertex"),X=_u(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+tt+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||B==="")&&(k=!1);k&&(I.diagnostics={runnable:G,programLog:N,vertexShader:{log:F,prefix:g},fragmentShader:{log:B,prefix:p}})}i.deleteShader(E),i.deleteShader(A),C=new ys(i,x),b=Qg(i,x)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,Vg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var hx=0,rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ol(t),e.set(t,n)),n}},ol=class{constructor(t){this.id=hx++,this.code=t,this.usedTimes=0}};function ux(s,t,e,n,i,r,o){let a=new Co,c=new rl,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,I,N,F){let B=N.fog,G=F.geometry,k=b.isMeshStandardMaterial?N.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||k),X=tt&&tt.mapping===Qo?tt.image.height:null,ot=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let xt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=xt!==void 0?xt.length:0,Gt=0;G.morphAttributes.position!==void 0&&(Gt=1),G.morphAttributes.normal!==void 0&&(Gt=2),G.morphAttributes.color!==void 0&&(Gt=3);let St,V,j,ut;if(ot){let ie=Rn[ot];St=ie.vertexShader,V=ie.fragmentShader}else St=b.vertexShader,V=b.fragmentShader,c.update(b),j=c.getVertexShaderID(b),ut=c.getFragmentShaderID(b);let nt=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),It=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,Xt=!!b.map,Q=!!b.matcap,st=!!tt,P=!!b.aoMap,Tt=!!b.lightMap,it=!!b.bumpMap,bt=!!b.normalMap,lt=!!b.displacementMap,zt=!!b.emissiveMap,vt=!!b.metalnessMap,R=!!b.roughnessMap,w=b.anisotropy>0,H=b.clearcoat>0,K=b.dispersion>0,et=b.iridescence>0,Z=b.sheen>0,Ct=b.transmission>0,mt=w&&!!b.anisotropyMap,wt=H&&!!b.clearcoatMap,Qt=H&&!!b.clearcoatNormalMap,rt=H&&!!b.clearcoatRoughnessMap,At=et&&!!b.iridescenceMap,Bt=et&&!!b.iridescenceThicknessMap,Vt=Z&&!!b.sheenColorMap,at=Z&&!!b.sheenRoughnessMap,kt=!!b.specularMap,Ot=!!b.specularColorMap,ne=!!b.specularIntensityMap,D=Ct&&!!b.transmissionMap,dt=Ct&&!!b.thicknessMap,$=!!b.gradientMap,J=!!b.alphaMap,_t=b.alphaTest>0,yt=!!b.alphaHash,qt=!!b.extensions,de=fi;b.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(de=s.toneMapping);let Re={shaderID:ot,shaderType:b.type,shaderName:b.name,vertexShader:St,fragmentShader:V,defines:b.defines,customVertexShaderID:j,customFragmentShaderID:ut,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:It,instancingColor:It&&F.instanceColor!==null,instancingMorph:It&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ns,alphaToCoverage:!!b.alphaToCoverage,map:Xt,matcap:Q,envMap:st,envMapMode:st&&tt.mapping,envMapCubeUVHeight:X,aoMap:P,lightMap:Tt,bumpMap:it,normalMap:bt,displacementMap:d&&lt,emissiveMap:zt,normalMapObjectSpace:bt&&b.normalMapType===Cf,normalMapTangentSpace:bt&&b.normalMapType===ql,metalnessMap:vt,roughnessMap:R,anisotropy:w,anisotropyMap:mt,clearcoat:H,clearcoatMap:wt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:rt,dispersion:K,iridescence:et,iridescenceMap:At,iridescenceThicknessMap:Bt,sheen:Z,sheenColorMap:Vt,sheenRoughnessMap:at,specularMap:kt,specularColorMap:Ot,specularIntensityMap:ne,transmission:Ct,transmissionMap:D,thicknessMap:dt,gradientMap:$,opaque:b.transparent===!1&&b.blending===gs&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:_t,alphaHash:yt,combine:b.combine,mapUv:Xt&&x(b.map.channel),aoMapUv:P&&x(b.aoMap.channel),lightMapUv:Tt&&x(b.lightMap.channel),bumpMapUv:it&&x(b.bumpMap.channel),normalMapUv:bt&&x(b.normalMap.channel),displacementMapUv:lt&&x(b.displacementMap.channel),emissiveMapUv:zt&&x(b.emissiveMap.channel),metalnessMapUv:vt&&x(b.metalnessMap.channel),roughnessMapUv:R&&x(b.roughnessMap.channel),anisotropyMapUv:mt&&x(b.anisotropyMap.channel),clearcoatMapUv:wt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:at&&x(b.sheenRoughnessMap.channel),specularMapUv:kt&&x(b.specularMap.channel),specularColorMapUv:Ot&&x(b.specularColorMap.channel),specularIntensityMapUv:ne&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:dt&&x(b.thicknessMap.channel),alphaMapUv:J&&x(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(bt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Xt||J),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:Gt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:Xt&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===le,decodeVideoTextureEmissive:zt&&b.emissiveMap.isVideoTexture===!0&&se.getTransfer(b.emissiveMap.colorSpace)===le,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Se,flipSided:b.side===Ve,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&b.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(_(M,b),v(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let M=m[b.type],I;if(M){let N=Rn[M];I=ep.clone(N.uniforms)}else I=b.uniforms;return I}function E(b,M){let I;for(let N=0,F=h.length;N<F;N++){let B=h[N];if(B.cacheKey===M){I=B,++I.usedTimes;break}}return I===void 0&&(I=new lx(s,M,b,r),h.push(I)),I}function A(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function S(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:S,programs:h,dispose:C}}function dx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function fx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Eu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,m,x,g){let p=o(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||fx),n.length>1&&n.sort(d||wu),i.length>1&&i.sort(d||wu)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function px(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Eu,s.set(n,[o])):i>=r.length?(o=new Eu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function mx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function gx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var xx=0;function _x(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function yx(s){let t=new mx,e=gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new jt,o=new jt;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,_=0,v=0,y=0,E=0,A=0,S=0;l.sort(_x);for(let b=0,M=l.length;b<M;b++){let I=l[b],N=I.color,F=I.intensity,B=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(I.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(I.sh.coefficients[k],F);S++}else if(I.isDirectionalLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,X=e.get(I);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=k,f++}else if(I.isSpotLight){let k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(N).multiplyScalar(F),k.distance=B,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,n.spot[x]=k;let tt=I.shadow;if(I.map&&(n.spotLightMap[E]=I.map,E++,tt.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[x]=tt.matrix,I.castShadow){let X=e.get(I);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=G,y++}x++}else if(I.isRectAreaLight){let k=t.get(I);k.color.copy(N).multiplyScalar(F),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=k,g++}else if(I.isPointLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){let tt=I.shadow,X=e.get(I);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=I.shadow.matrix,v++}n.point[m]=k,m++}else if(I.isHemisphereLight){let k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(F),k.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==E||C.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=S,C.directionalLength=f,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=E,C.numLightProbes=S,n.version=xx++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let v=l[p];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Su(s){let t=new yx(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function vx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Su(s),t.set(i,[a])):r>=o.length?(a=new Su(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var al=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cl=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wx(s,t,e){let n=new _r,i=new ht,r=new ht,o=new ue,a=new al({depthPacking:Rf}),c=new cl,l={},h=e.maxTextureSize,u={[Ln]:Ve,[Ve]:Ln,[Se]:Se},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Mx,fragmentShader:bx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new we;m.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Y(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let p=this.type;this.render=function(A,S,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let b=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(di),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=p!==Wn&&this.type===Wn,B=p===Wn&&this.type!==Wn;for(let G=0,k=A.length;G<k;G++){let tt=A[G],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let ot=X.getFrameExtents();if(i.multiply(ot),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,X.mapSize.y=r.y)),X.map===null||F===!0||B===!0){let pt=this.type!==Wn?{minFilter:rn,magFilter:rn}:{};X.map!==null&&X.map.dispose(),X.map=new Zn(i.x,i.y,pt),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let xt=X.getViewportCount();for(let pt=0;pt<xt;pt++){let Gt=X.getViewport(pt);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),N.viewport(o),X.updateMatrices(tt,pt),n=X.getFrustum(),y(S,C,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===Wn&&_(X,C),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,M,I)};function _(A,S){let C=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(S,null,C,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(S,null,C,f,x,null)}function v(A,S,C,b){let M=null,I=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?c:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let N=M.uuid,F=S.uuid,B=l[N];B===void 0&&(B={},l[N]=B);let G=B[F];G===void 0&&(G=M.clone(),B[F]=G,S.addEventListener("dispose",E)),M=G}if(M.visible=S.visible,M.wireframe=S.wireframe,b===Wn?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:u[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=s.properties.get(M);N.light=C}return M}function y(A,S,C,b,M){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let F=t.update(A),B=A.material;if(Array.isArray(B)){let G=F.groups;for(let k=0,tt=G.length;k<tt;k++){let X=G[k],ot=B[X.materialIndex];if(ot&&ot.visible){let xt=v(A,ot,b,M);A.onBeforeShadow(s,A,S,C,F,xt,X),s.renderBufferDirect(C,null,F,xt,A,X),A.onAfterShadow(s,A,S,C,F,xt,X)}}}else if(B.visible){let G=v(A,B,b,M);A.onBeforeShadow(s,A,S,C,F,G,null),s.renderBufferDirect(C,null,F,G,A,null),A.onAfterShadow(s,A,S,C,F,G,null)}}let N=A.children;for(let F=0,B=N.length;F<B;F++)y(N[F],S,C,b,M)}function E(A){A.target.removeEventListener("dispose",E);for(let C in l){let b=l[C],M=A.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Ex={[dc]:fc,[pc]:xc,[mc]:_c,[Ms]:gc,[fc]:dc,[xc]:pc,[_c]:mc,[gc]:Ms};function Sx(s,t){function e(){let D=!1,dt=new ue,$=null,J=new ue(0,0,0,0);return{setMask:function(_t){$!==_t&&!D&&(s.colorMask(_t,_t,_t,_t),$=_t)},setLocked:function(_t){D=_t},setClear:function(_t,yt,qt,de,Re){Re===!0&&(_t*=de,yt*=de,qt*=de),dt.set(_t,yt,qt,de),J.equals(dt)===!1&&(s.clearColor(_t,yt,qt,de),J.copy(dt))},reset:function(){D=!1,$=null,J.set(-1,0,0,0)}}}function n(){let D=!1,dt=!1,$=null,J=null,_t=null;return{setReversed:function(yt){if(dt!==yt){let qt=t.get("EXT_clip_control");dt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let de=_t;_t=null,this.setClear(de)}dt=yt},getReversed:function(){return dt},setTest:function(yt){yt?nt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(yt){$!==yt&&!D&&(s.depthMask(yt),$=yt)},setFunc:function(yt){if(dt&&(yt=Ex[yt]),J!==yt){switch(yt){case dc:s.depthFunc(s.NEVER);break;case fc:s.depthFunc(s.ALWAYS);break;case pc:s.depthFunc(s.LESS);break;case Ms:s.depthFunc(s.LEQUAL);break;case mc:s.depthFunc(s.EQUAL);break;case gc:s.depthFunc(s.GEQUAL);break;case xc:s.depthFunc(s.GREATER);break;case _c:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=yt}},setLocked:function(yt){D=yt},setClear:function(yt){_t!==yt&&(dt&&(yt=1-yt),s.clearDepth(yt),_t=yt)},reset:function(){D=!1,$=null,J=null,_t=null,dt=!1}}}function i(){let D=!1,dt=null,$=null,J=null,_t=null,yt=null,qt=null,de=null,Re=null;return{setTest:function(ie){D||(ie?nt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(ie){dt!==ie&&!D&&(s.stencilMask(ie),dt=ie)},setFunc:function(ie,Ce,Oe){($!==ie||J!==Ce||_t!==Oe)&&(s.stencilFunc(ie,Ce,Oe),$=ie,J=Ce,_t=Oe)},setOp:function(ie,Ce,Oe){(yt!==ie||qt!==Ce||de!==Oe)&&(s.stencilOp(ie,Ce,Oe),yt=ie,qt=Ce,de=Oe)},setLocked:function(ie){D=ie},setClear:function(ie){Re!==ie&&(s.clearStencil(ie),Re=ie)},reset:function(){D=!1,dt=null,$=null,J=null,_t=null,yt=null,qt=null,de=null,Re=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,_=null,v=null,y=null,E=null,A=null,S=new Ht(0,0,0),C=0,b=!1,M=null,I=null,N=null,F=null,B=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,tt=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=tt>=2);let ot=null,xt={},pt=s.getParameter(s.SCISSOR_BOX),Gt=s.getParameter(s.VIEWPORT),St=new ue().fromArray(pt),V=new ue().fromArray(Gt);function j(D,dt,$,J){let _t=new Uint8Array(4),yt=s.createTexture();s.bindTexture(D,yt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<$;qt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(dt+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return yt}let ut={};ut[s.TEXTURE_2D]=j(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=j(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=j(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=j(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(Ms),it(!1),bt(Ch),nt(s.CULL_FACE),P(di);function nt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function It(D,dt){return u[D]!==dt?(s.bindFramebuffer(D,dt),u[D]=dt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Nt(D,dt){let $=f,J=!1;if(D){$=d.get(dt),$===void 0&&($=[],d.set(dt,$));let _t=D.textures;if($.length!==_t.length||$[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,qt=_t.length;yt<qt;yt++)$[yt]=s.COLOR_ATTACHMENT0+yt;$.length=_t.length,J=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,J=!0);J&&s.drawBuffers($)}function Xt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let Q={[Li]:s.FUNC_ADD,[tf]:s.FUNC_SUBTRACT,[ef]:s.FUNC_REVERSE_SUBTRACT};Q[nf]=s.MIN,Q[sf]=s.MAX;let st={[rf]:s.ZERO,[of]:s.ONE,[af]:s.SRC_COLOR,[hc]:s.SRC_ALPHA,[ff]:s.SRC_ALPHA_SATURATE,[uf]:s.DST_COLOR,[lf]:s.DST_ALPHA,[cf]:s.ONE_MINUS_SRC_COLOR,[uc]:s.ONE_MINUS_SRC_ALPHA,[df]:s.ONE_MINUS_DST_COLOR,[hf]:s.ONE_MINUS_DST_ALPHA,[pf]:s.CONSTANT_COLOR,[mf]:s.ONE_MINUS_CONSTANT_COLOR,[gf]:s.CONSTANT_ALPHA,[xf]:s.ONE_MINUS_CONSTANT_ALPHA};function P(D,dt,$,J,_t,yt,qt,de,Re,ie){if(D===di){x===!0&&(Rt(s.BLEND),x=!1);return}if(x===!1&&(nt(s.BLEND),x=!0),D!==jd){if(D!==g||ie!==b){if((p!==Li||y!==Li)&&(s.blendEquation(s.FUNC_ADD),p=Li,y=Li),ie)switch(D){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vs:s.blendFunc(s.ONE,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ph:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ph:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,v=null,E=null,A=null,S.set(0,0,0),C=0,g=D,b=ie}return}_t=_t||dt,yt=yt||$,qt=qt||J,(dt!==p||_t!==y)&&(s.blendEquationSeparate(Q[dt],Q[_t]),p=dt,y=_t),($!==_||J!==v||yt!==E||qt!==A)&&(s.blendFuncSeparate(st[$],st[J],st[yt],st[qt]),_=$,v=J,E=yt,A=qt),(de.equals(S)===!1||Re!==C)&&(s.blendColor(de.r,de.g,de.b,Re),S.copy(de),C=Re),g=D,b=!1}function Tt(D,dt){D.side===Se?Rt(s.CULL_FACE):nt(s.CULL_FACE);let $=D.side===Ve;dt&&($=!$),it($),D.blending===gs&&D.transparent===!1?P(di):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),zt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function bt(D){D!==Zd?(nt(s.CULL_FACE),D!==I&&(D===Ch?s.cullFace(s.BACK):D===Jd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),I=D}function lt(D){D!==N&&(k&&s.lineWidth(D),N=D)}function zt(D,dt,$){D?(nt(s.POLYGON_OFFSET_FILL),(F!==dt||B!==$)&&(s.polygonOffset(dt,$),F=dt,B=$)):Rt(s.POLYGON_OFFSET_FILL)}function vt(D){D?nt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+G-1),ot!==D&&(s.activeTexture(D),ot=D)}function w(D,dt,$){$===void 0&&(ot===null?$=s.TEXTURE0+G-1:$=ot);let J=xt[$];J===void 0&&(J={type:void 0,texture:void 0},xt[$]=J),(J.type!==D||J.texture!==dt)&&(ot!==$&&(s.activeTexture($),ot=$),s.bindTexture(D,dt||ut[D]),J.type=D,J.texture=dt)}function H(){let D=xt[ot];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(D){St.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),St.copy(D))}function at(D){V.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),V.copy(D))}function kt(D,dt){let $=l.get(dt);$===void 0&&($=new WeakMap,l.set(dt,$));let J=$.get(D);J===void 0&&(J=s.getUniformBlockIndex(dt,D.name),$.set(D,J))}function Ot(D,dt){let J=l.get(dt).get(D);c.get(dt)!==J&&(s.uniformBlockBinding(dt,J,D.__bindingPointIndex),c.set(dt,J))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ot=null,xt={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,_=null,v=null,y=null,E=null,A=null,S=new Ht(0,0,0),C=0,b=!1,M=null,I=null,N=null,F=null,B=null,St.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:Rt,bindFramebuffer:It,drawBuffers:Nt,useProgram:Xt,setBlending:P,setMaterial:Tt,setFlipSided:it,setCullFace:bt,setLineWidth:lt,setPolygonOffset:zt,setScissorTest:vt,activeTexture:R,bindTexture:w,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:At,texImage3D:Bt,updateUBOMapping:kt,uniformBlockBinding:Ot,texStorage2D:Qt,texStorage3D:rt,texSubImage2D:Z,texSubImage3D:Ct,compressedTexSubImage2D:mt,compressedTexSubImage3D:wt,scissor:Vt,viewport:at,reset:ne}}function Tu(s,t,e,n){let i=Tx(n);switch(e){case Xu:return s*t;case Yu:return s*t;case $u:return s*t*2;case Gl:return s*t/i.components*i.byteLength;case Vl:return s*t/i.components*i.byteLength;case Ku:return s*t*2/i.components*i.byteLength;case Wl:return s*t*2/i.components*i.byteLength;case qu:return s*t*3/i.components*i.byteLength;case vn:return s*t*4/i.components*i.byteLength;case Xl:return s*t*4/i.components*i.byteLength;case xo:case _o:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yo:case vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wc:case Sc:return Math.max(s,16)*Math.max(t,8)/4;case bc:case Ec:return Math.max(s,8)*Math.max(t,8)/2;case Tc:case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case zc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Hc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Mo:case Vc:case Wc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Zu:case Xc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case qc:case Yc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tx(s){switch(s){case Kn:case Gu:return{byteLength:1,components:1};case xr:case Vu:case Tr:return{byteLength:2,components:1};case kl:case Hl:return{byteLength:2,components:4};case Fi:case Bl:case Pn:return{byteLength:4,components:1};case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ax(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,w){return f?new OffscreenCanvas(R,w):So("canvas")}function x(R,w,H){let K=1,et=vt(R);if((et.width>H||et.height>H)&&(K=H/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor(K*et.width),Ct=Math.floor(K*et.height);u===void 0&&(u=m(Z,Ct));let mt=w?m(Z,Ct):u;return mt.width=Z,mt.height=Ct,mt.getContext("2d").drawImage(R,0,0,Z,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Ct+")."),mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,w,H,K,et=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=w;if(w===s.RED&&(H===s.FLOAT&&(Z=s.R32F),H===s.HALF_FLOAT&&(Z=s.R16F),H===s.UNSIGNED_BYTE&&(Z=s.R8)),w===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.R8UI),H===s.UNSIGNED_SHORT&&(Z=s.R16UI),H===s.UNSIGNED_INT&&(Z=s.R32UI),H===s.BYTE&&(Z=s.R8I),H===s.SHORT&&(Z=s.R16I),H===s.INT&&(Z=s.R32I)),w===s.RG&&(H===s.FLOAT&&(Z=s.RG32F),H===s.HALF_FLOAT&&(Z=s.RG16F),H===s.UNSIGNED_BYTE&&(Z=s.RG8)),w===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RG8UI),H===s.UNSIGNED_SHORT&&(Z=s.RG16UI),H===s.UNSIGNED_INT&&(Z=s.RG32UI),H===s.BYTE&&(Z=s.RG8I),H===s.SHORT&&(Z=s.RG16I),H===s.INT&&(Z=s.RG32I)),w===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),H===s.UNSIGNED_INT&&(Z=s.RGB32UI),H===s.BYTE&&(Z=s.RGB8I),H===s.SHORT&&(Z=s.RGB16I),H===s.INT&&(Z=s.RGB32I)),w===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),H===s.UNSIGNED_INT&&(Z=s.RGBA32UI),H===s.BYTE&&(Z=s.RGBA8I),H===s.SHORT&&(Z=s.RGBA16I),H===s.INT&&(Z=s.RGBA32I)),w===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),w===s.RGBA){let Ct=et?jo:se.getTransfer(K);H===s.FLOAT&&(Z=s.RGBA32F),H===s.HALF_FLOAT&&(Z=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Z=Ct===le?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(R,w){let H;return R?w===null||w===Fi||w===Es?H=s.DEPTH24_STENCIL8:w===Pn?H=s.DEPTH32F_STENCIL8:w===xr&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Fi||w===Es?H=s.DEPTH_COMPONENT24:w===Pn?H=s.DEPTH_COMPONENT32F:w===xr&&(H=s.DEPTH_COMPONENT16),H}function E(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==In?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function A(R){let w=R.target;w.removeEventListener("dispose",A),C(w),w.isVideoTexture&&h.delete(w)}function S(R){let w=R.target;w.removeEventListener("dispose",S),M(w)}function C(R){let w=n.get(R);if(w.__webglInit===void 0)return;let H=R.source,K=d.get(H);if(K){let et=K[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(R),Object.keys(K).length===0&&d.delete(H)}n.remove(R)}function b(R){let w=n.get(R);s.deleteTexture(w.__webglTexture);let H=R.source,K=d.get(H);delete K[w.__cacheKey],o.memory.textures--}function M(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let et=0;et<w.__webglFramebuffer[K].length;et++)s.deleteFramebuffer(w.__webglFramebuffer[K][et]);else s.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)s.deleteFramebuffer(w.__webglFramebuffer[K]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let H=R.textures;for(let K=0,et=H.length;K<et;K++){let Z=n.get(H[K]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(R)}let I=0;function N(){I=0}function F(){let R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function B(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function G(R,w){let H=n.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(H,R,w);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+w)}function k(R,w){let H=n.get(R);if(R.version>0&&H.__version!==R.version){V(H,R,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+w)}function tt(R,w){let H=n.get(R);if(R.version>0&&H.__version!==R.version){V(H,R,w);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+w)}function X(R,w){let H=n.get(R);if(R.version>0&&H.__version!==R.version){j(H,R,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+w)}let ot={[zi]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[Mc]:s.MIRRORED_REPEAT},xt={[rn]:s.NEAREST,[Tf]:s.NEAREST_MIPMAP_NEAREST,[Br]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[Ra]:s.LINEAR_MIPMAP_NEAREST,[Ui]:s.LINEAR_MIPMAP_LINEAR},pt={[If]:s.NEVER,[zf]:s.ALWAYS,[Pf]:s.LESS,[Ju]:s.LEQUAL,[Lf]:s.EQUAL,[Uf]:s.GEQUAL,[Df]:s.GREATER,[Nf]:s.NOTEQUAL};function Gt(R,w){if(w.type===Pn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===In||w.magFilter===Ra||w.magFilter===Br||w.magFilter===Ui||w.minFilter===In||w.minFilter===Ra||w.minFilter===Br||w.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ot[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ot[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ot[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,xt[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,xt[w.minFilter]),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,pt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===rn||w.minFilter!==Br&&w.minFilter!==Ui||w.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function St(R,w){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",A));let K=w.source,et=d.get(K);et===void 0&&(et={},d.set(K,et));let Z=B(w);if(Z!==R.__cacheKey){et[Z]===void 0&&(et[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),et[Z].usedTimes++;let Ct=et[R.__cacheKey];Ct!==void 0&&(et[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&b(w)),R.__cacheKey=Z,R.__webglTexture=et[Z].texture}return H}function V(R,w,H){let K=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=s.TEXTURE_3D);let et=St(R,w),Z=w.source;e.bindTexture(K,R.__webglTexture,s.TEXTURE0+H);let Ct=n.get(Z);if(Z.version!==Ct.__version||et===!0){e.activeTexture(s.TEXTURE0+H);let mt=se.getPrimaries(se.workingColorSpace),wt=w.colorSpace===hi?null:se.getPrimaries(w.colorSpace),Qt=w.colorSpace===hi||mt===wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let rt=x(w.image,!1,i.maxTextureSize);rt=zt(w,rt);let At=r.convert(w.format,w.colorSpace),Bt=r.convert(w.type),Vt=v(w.internalFormat,At,Bt,w.colorSpace,w.isVideoTexture);Gt(K,w);let at,kt=w.mipmaps,Ot=w.isVideoTexture!==!0,ne=Ct.__version===void 0||et===!0,D=Z.dataReady,dt=E(w,rt);if(w.isDepthTexture)Vt=y(w.format===Ss,w.type),ne&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,Vt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Vt,rt.width,rt.height,0,At,Bt,null));else if(w.isDataTexture)if(kt.length>0){Ot&&ne&&e.texStorage2D(s.TEXTURE_2D,dt,Vt,kt[0].width,kt[0].height);for(let $=0,J=kt.length;$<J;$++)at=kt[$],Ot?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,at.width,at.height,At,Bt,at.data):e.texImage2D(s.TEXTURE_2D,$,Vt,at.width,at.height,0,At,Bt,at.data);w.generateMipmaps=!1}else Ot?(ne&&e.texStorage2D(s.TEXTURE_2D,dt,Vt,rt.width,rt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt.width,rt.height,At,Bt,rt.data)):e.texImage2D(s.TEXTURE_2D,0,Vt,rt.width,rt.height,0,At,Bt,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ot&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Vt,kt[0].width,kt[0].height,rt.depth);for(let $=0,J=kt.length;$<J;$++)if(at=kt[$],w.format!==vn)if(At!==null)if(Ot){if(D)if(w.layerUpdates.size>0){let _t=Tu(at.width,at.height,w.format,w.type);for(let yt of w.layerUpdates){let qt=at.data.subarray(yt*_t/at.data.BYTES_PER_ELEMENT,(yt+1)*_t/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,yt,at.width,at.height,1,At,qt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,rt.depth,At,at.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,Vt,at.width,at.height,rt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,at.width,at.height,rt.depth,At,Bt,at.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,Vt,at.width,at.height,rt.depth,0,At,Bt,at.data)}else{Ot&&ne&&e.texStorage2D(s.TEXTURE_2D,dt,Vt,kt[0].width,kt[0].height);for(let $=0,J=kt.length;$<J;$++)at=kt[$],w.format!==vn?At!==null?Ot?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,at.width,at.height,At,at.data):e.compressedTexImage2D(s.TEXTURE_2D,$,Vt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,at.width,at.height,At,Bt,at.data):e.texImage2D(s.TEXTURE_2D,$,Vt,at.width,at.height,0,At,Bt,at.data)}else if(w.isDataArrayTexture)if(Ot){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Vt,rt.width,rt.height,rt.depth),D)if(w.layerUpdates.size>0){let $=Tu(rt.width,rt.height,w.format,w.type);for(let J of w.layerUpdates){let _t=rt.data.subarray(J*$/rt.data.BYTES_PER_ELEMENT,(J+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,rt.width,rt.height,1,At,Bt,_t)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,At,Bt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,rt.width,rt.height,rt.depth,0,At,Bt,rt.data);else if(w.isData3DTexture)Ot?(ne&&e.texStorage3D(s.TEXTURE_3D,dt,Vt,rt.width,rt.height,rt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,At,Bt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Vt,rt.width,rt.height,rt.depth,0,At,Bt,rt.data);else if(w.isFramebufferTexture){if(ne)if(Ot)e.texStorage2D(s.TEXTURE_2D,dt,Vt,rt.width,rt.height);else{let $=rt.width,J=rt.height;for(let _t=0;_t<dt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Vt,$,J,0,At,Bt,null),$>>=1,J>>=1}}else if(kt.length>0){if(Ot&&ne){let $=vt(kt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Vt,$.width,$.height)}for(let $=0,J=kt.length;$<J;$++)at=kt[$],Ot?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,At,Bt,at):e.texImage2D(s.TEXTURE_2D,$,Vt,At,Bt,at);w.generateMipmaps=!1}else if(Ot){if(ne){let $=vt(rt);e.texStorage2D(s.TEXTURE_2D,dt,Vt,$.width,$.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,Bt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Vt,At,Bt,rt);g(w)&&p(K),Ct.__version=Z.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function j(R,w,H){if(w.image.length!==6)return;let K=St(R,w),et=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let Z=n.get(et);if(et.version!==Z.__version||K===!0){e.activeTexture(s.TEXTURE0+H);let Ct=se.getPrimaries(se.workingColorSpace),mt=w.colorSpace===hi?null:se.getPrimaries(w.colorSpace),wt=w.colorSpace===hi||Ct===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Qt=w.isCompressedTexture||w.image[0].isCompressedTexture,rt=w.image[0]&&w.image[0].isDataTexture,At=[];for(let J=0;J<6;J++)!Qt&&!rt?At[J]=x(w.image[J],!0,i.maxCubemapSize):At[J]=rt?w.image[J].image:w.image[J],At[J]=zt(w,At[J]);let Bt=At[0],Vt=r.convert(w.format,w.colorSpace),at=r.convert(w.type),kt=v(w.internalFormat,Vt,at,w.colorSpace),Ot=w.isVideoTexture!==!0,ne=Z.__version===void 0||K===!0,D=et.dataReady,dt=E(w,Bt);Gt(s.TEXTURE_CUBE_MAP,w);let $;if(Qt){Ot&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,kt,Bt.width,Bt.height);for(let J=0;J<6;J++){$=At[J].mipmaps;for(let _t=0;_t<$.length;_t++){let yt=$[_t];w.format!==vn?Vt!==null?Ot?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,yt.width,yt.height,Vt,yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,kt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,yt.width,yt.height,Vt,at,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,kt,yt.width,yt.height,0,Vt,at,yt.data)}}}else{if($=w.mipmaps,Ot&&ne){$.length>0&&dt++;let J=vt(At[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,kt,J.width,J.height)}for(let J=0;J<6;J++)if(rt){Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,At[J].width,At[J].height,Vt,at,At[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,At[J].width,At[J].height,0,Vt,at,At[J].data);for(let _t=0;_t<$.length;_t++){let qt=$[_t].image[J].image;Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,qt.width,qt.height,Vt,at,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,kt,qt.width,qt.height,0,Vt,at,qt.data)}}else{Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Vt,at,At[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,kt,Vt,at,At[J]);for(let _t=0;_t<$.length;_t++){let yt=$[_t];Ot?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,Vt,at,yt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,kt,Vt,at,yt.image[J])}}}g(w)&&p(s.TEXTURE_CUBE_MAP),Z.__version=et.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ut(R,w,H,K,et,Z){let Ct=r.convert(H.format,H.colorSpace),mt=r.convert(H.type),wt=v(H.internalFormat,Ct,mt,H.colorSpace),Qt=n.get(w),rt=n.get(H);if(rt.__renderTarget=w,!Qt.__hasExternalTextures){let At=Math.max(1,w.width>>Z),Bt=Math.max(1,w.height>>Z);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,wt,At,Bt,w.depth,0,Ct,mt,null):e.texImage2D(et,Z,wt,At,Bt,0,Ct,mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),bt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,et,rt.__webglTexture,0,it(w)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,et,rt.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(R,w,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer){let K=w.depthTexture,et=K&&K.isDepthTexture?K.type:null,Z=y(w.stencilBuffer,et),Ct=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=it(w);bt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,Z,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,Z,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Z,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,R)}else{let K=w.textures;for(let et=0;et<K.length;et++){let Z=K[et],Ct=r.convert(Z.format,Z.colorSpace),mt=r.convert(Z.type),wt=v(Z.internalFormat,Ct,mt,Z.colorSpace),Qt=it(w);H&&bt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,wt,w.width,w.height):bt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt,wt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,wt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);let et=K.__webglTexture,Z=it(w);if(w.depthTexture.format===xs)bt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(w.depthTexture.format===Ss)bt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function It(R){let w=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=K}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Rt(w.__webglFramebuffer,R)}else if(H){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=s.createRenderbuffer(),nt(w.__webglDepthbuffer[K],R,!1);else{let et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),nt(w.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(R,w,H){let K=n.get(R);w!==void 0&&ut(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&It(R)}function Xt(R){let w=R.texture,H=n.get(R),K=n.get(w);R.addEventListener("dispose",S);let et=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=w.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[mt]=[];for(let wt=0;wt<w.mipmaps.length;wt++)H.__webglFramebuffer[mt][wt]=s.createFramebuffer()}else H.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let mt=0;mt<w.mipmaps.length;mt++)H.__webglFramebuffer[mt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let mt=0,wt=et.length;mt<wt;mt++){let Qt=n.get(et[mt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&bt(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let mt=0;mt<et.length;mt++){let wt=et[mt];H.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[mt]);let Qt=r.convert(wt.format,wt.colorSpace),rt=r.convert(wt.type),At=v(wt.internalFormat,Qt,rt,wt.colorSpace,R.isXRRenderTarget===!0),Bt=it(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,At,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,H.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Gt(s.TEXTURE_CUBE_MAP,w);for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)ut(H.__webglFramebuffer[mt][wt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,wt);else ut(H.__webglFramebuffer[mt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let mt=0,wt=et.length;mt<wt;mt++){let Qt=et[mt],rt=n.get(Qt);e.bindTexture(s.TEXTURE_2D,rt.__webglTexture),Gt(s.TEXTURE_2D,Qt),ut(H.__webglFramebuffer,R,Qt,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,0),g(Qt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let mt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(mt,K.__webglTexture),Gt(mt,w),w.mipmaps&&w.mipmaps.length>0)for(let wt=0;wt<w.mipmaps.length;wt++)ut(H.__webglFramebuffer[wt],R,w,s.COLOR_ATTACHMENT0,mt,wt);else ut(H.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,mt,0);g(w)&&p(mt),e.unbindTexture()}R.depthBuffer&&It(R)}function Q(R){let w=R.textures;for(let H=0,K=w.length;H<K;H++){let et=w[H];if(g(et)){let Z=_(R),Ct=n.get(et).__webglTexture;e.bindTexture(Z,Ct),p(Z),e.unbindTexture()}}}let st=[],P=[];function Tt(R){if(R.samples>0){if(bt(R)===!1){let w=R.textures,H=R.width,K=R.height,et=s.COLOR_BUFFER_BIT,Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(R),mt=w.length>1;if(mt)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[wt]);let Qt=n.get(w[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qt,0)}s.blitFramebuffer(0,0,H,K,0,0,H,K,et,s.NEAREST),c===!0&&(st.length=0,P.length=0,st.push(s.COLOR_ATTACHMENT0+wt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(Z),P.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[wt]);let Qt=n.get(w[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,Qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let w=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function it(R){return Math.min(i.maxSamples,R.samples)}function bt(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function lt(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function zt(R,w){let H=R.colorSpace,K=R.format,et=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Ns&&H!==hi&&(se.getTransfer(H)===le?(K!==vn||et!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=tt,this.setTextureCube=X,this.rebindTextures=Nt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=bt}function Rx(s,t){function e(n,i=hi){let r,o=se.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===kl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gu)return s.BYTE;if(n===Vu)return s.SHORT;if(n===xr)return s.UNSIGNED_SHORT;if(n===Bl)return s.INT;if(n===Fi)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===Tr)return s.HALF_FLOAT;if(n===Xu)return s.ALPHA;if(n===qu)return s.RGB;if(n===vn)return s.RGBA;if(n===Yu)return s.LUMINANCE;if(n===$u)return s.LUMINANCE_ALPHA;if(n===xs)return s.DEPTH_COMPONENT;if(n===Ss)return s.DEPTH_STENCIL;if(n===Gl)return s.RED;if(n===Vl)return s.RED_INTEGER;if(n===Ku)return s.RG;if(n===Wl)return s.RG_INTEGER;if(n===Xl)return s.RGBA_INTEGER;if(n===xo||n===_o||n===yo||n===vo)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===wc||n===Ec||n===Sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===Ac||n===Rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tc||n===Ac)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cc||n===Ic||n===Pc||n===Lc||n===Dc||n===Nc||n===Uc||n===zc||n===Fc||n===Oc||n===Bc||n===kc||n===Hc||n===Gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===Vc||n===Wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zu||n===Xc||n===qc||n===Yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var ll=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cx={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Px=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Qe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Nn({vertexShader:Ix,fragmentShader:Px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ul=class extends pi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new hl,g=e.getContextAttributes(),p=null,_=null,v=[],y=[],E=new ht,A=null,S=new Ue;S.viewport=new ue;let C=new Ue;C.viewport=new ue;let b=[S,C],M=new ll,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=v[V];return j===void 0&&(j=new fr,v[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=v[V];return j===void 0&&(j=new fr,v[V]=j),j.getGripSpace()},this.getHand=function(V){let j=v[V];return j===void 0&&(j=new fr,v[V]=j),j.getHandSpace()};function F(V){let j=y.indexOf(V.inputSource);if(j===-1)return;let ut=v[j];ut!==void 0&&(ut.update(V.inputSource,V.frame,l||o),ut.dispatchEvent({type:V.type,data:V.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",G);for(let V=0;V<v.length;V++){let j=y[V];j!==null&&(y[V]=null,v[V].disconnect(j))}I=null,N=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){let j={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Zn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,ut=null,nt=null;g.depth&&(nt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=g.stencil?Ss:xs,ut=g.stencil?Es:Fi);let Rt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new Zn(d.textureWidth,d.textureHeight,{format:vn,type:Kn,depthTexture:new Uo(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),St.setContext(i),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(V){for(let j=0;j<V.removed.length;j++){let ut=V.removed[j],nt=y.indexOf(ut);nt>=0&&(y[nt]=null,v[nt].disconnect(ut))}for(let j=0;j<V.added.length;j++){let ut=V.added[j],nt=y.indexOf(ut);if(nt===-1){for(let It=0;It<v.length;It++)if(It>=y.length){y.push(ut),nt=It;break}else if(y[It]===null){y[It]=ut,nt=It;break}if(nt===-1)break}let Rt=v[nt];Rt&&Rt.connect(ut)}}let k=new L,tt=new L;function X(V,j,ut){k.setFromMatrixPosition(j.matrixWorld),tt.setFromMatrixPosition(ut.matrixWorld);let nt=k.distanceTo(tt),Rt=j.projectionMatrix.elements,It=ut.projectionMatrix.elements,Nt=Rt[14]/(Rt[10]-1),Xt=Rt[14]/(Rt[10]+1),Q=(Rt[9]+1)/Rt[5],st=(Rt[9]-1)/Rt[5],P=(Rt[8]-1)/Rt[0],Tt=(It[8]+1)/It[0],it=Nt*P,bt=Nt*Tt,lt=nt/(-P+Tt),zt=lt*-P;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(zt),V.translateZ(lt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Rt[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let vt=Nt+lt,R=Xt+lt,w=it-zt,H=bt+(nt-zt),K=Q*Xt/R*vt,et=st*Xt/R*vt;V.projectionMatrix.makePerspective(w,H,K,et,vt,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ot(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let j=V.near,ut=V.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),M.near=C.near=S.near=j,M.far=C.far=S.far=ut,(I!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,N=M.far),S.layers.mask=V.layers.mask|2,C.layers.mask=V.layers.mask|4,M.layers.mask=S.layers.mask|C.layers.mask;let nt=V.parent,Rt=M.cameras;ot(M,nt);for(let It=0;It<Rt.length;It++)ot(Rt[It],nt);Rt.length===2?X(M,S,C):M.projectionMatrix.copy(S.projectionMatrix),xt(V,M,nt)};function xt(V,j,ut){ut===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(ut.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Eo*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let pt=null;function Gt(V,j){if(h=j.getViewerPose(l||o),m=j,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let nt=!1;ut.length!==M.cameras.length&&(M.cameras.length=0,nt=!0);for(let It=0;It<ut.length;It++){let Nt=ut[It],Xt=null;if(f!==null)Xt=f.getViewport(Nt);else{let st=u.getViewSubImage(d,Nt);Xt=st.viewport,It===0&&(t.setRenderTargetTextures(_,st.colorTexture,d.ignoreDepthValues?void 0:st.depthStencilTexture),t.setRenderTarget(_))}let Q=b[It];Q===void 0&&(Q=new Ue,Q.layers.enable(It),Q.viewport=new ue,b[It]=Q),Q.matrix.fromArray(Nt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Nt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),It===0&&(M.matrix.copy(Q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),nt===!0&&M.cameras.push(Q)}let Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let It=u.getDepthInformation(ut[0]);It&&It.isValid&&It.texture&&x.init(t,It,i.renderState)}}for(let ut=0;ut<v.length;ut++){let nt=y[ut],Rt=v[ut];nt!==null&&Rt!==void 0&&Rt.update(nt,j,l||o)}pt&&pt(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let St=new ed;St.setAnimationLoop(Gt),this.setAnimationLoop=function(V){pt=V},this.dispose=function(){}}},Ii=new Be,Lx=new jt;function Dx(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,td(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,_,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,_,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ve&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ve&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _=t.get(p),v=_.envMap,y=_.envMapRotation;v&&(g.envMap.value=v,Ii.copy(y),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.envMapRotation.value.setFromMatrix4(Lx.makeRotationFromEuler(Ii)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,_,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Nx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let y=v.program;n.uniformBlockBinding(_,y)}function l(_,v){let y=i[_.id];y===void 0&&(m(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",g));let E=v.program;n.updateUBOMapping(_,E);let A=t.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function h(_){let v=u();_.__bindingPointIndex=v;let y=s.createBuffer(),E=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=i[_.id],y=_.uniforms,E=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,S=y.length;A<S;A++){let C=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,M=C.length;b<M;b++){let I=C[b];if(f(I,A,b,E)===!0){let N=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],B=0;for(let G=0;G<F.length;G++){let k=F[G],tt=x(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,N+B,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,B),B+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,v,y,E){let A=_.value,S=v+"_"+y;if(E[S]===void 0)return typeof A=="number"||typeof A=="boolean"?E[S]=A:E[S]=A.clone(),!0;{let C=E[S];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[S]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function m(_){let v=_.uniforms,y=0,E=16;for(let S=0,C=v.length;S<C;S++){let b=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,I=b.length;M<I;M++){let N=b[M],F=Array.isArray(N.value)?N.value:[N.value];for(let B=0,G=F.length;B<G;B++){let k=F[B],tt=x(k),X=y%E,ot=X%tt.boundary,xt=X+ot;y+=ot,xt!==0&&E-xt<tt.storage&&(y+=E-xt),N.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=tt.storage}}}let A=y%E;return A>0&&(y+=E-A),_.__size=y,_.__cache={},this}function x(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){let v=_.target;v.removeEventListener("dispose",g);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var zo=class{constructor(t={}){let{canvas:e=Of(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,_=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=fi,this.toneMappingExposure=1;let y=this,E=!1,A=0,S=0,C=null,b=-1,M=null,I=new ue,N=new ue,F=null,B=new Ht(0),G=0,k=e.width,tt=e.height,X=1,ot=null,xt=null,pt=new ue(0,0,k,tt),Gt=new ue(0,0,k,tt),St=!1,V=new _r,j=!1,ut=!1,nt=new jt,Rt=new jt,It=new L,Nt=new ue,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function st(){return C===null?X:1}let P=n;function Tt(T,U){return e.getContext(T,U)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",yt,!1),P===null){let U="webgl2";if(P=Tt(U,T),P===null)throw Tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let it,bt,lt,zt,vt,R,w,H,K,et,Z,Ct,mt,wt,Qt,rt,At,Bt,Vt,at,kt,Ot,ne,D;function dt(){it=new Z0(P),it.init(),Ot=new Rx(P,it),bt=new W0(P,it,t,Ot),lt=new Sx(P,it),bt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),zt=new j0(P),vt=new dx,R=new Ax(P,it,lt,vt,bt,Ot,zt),w=new q0(y),H=new K0(y),K=new op(P),ne=new G0(P,K),et=new J0(P,K,zt,ne),Z=new eg(P,et,K,zt),Vt=new tg(P,bt,R),rt=new X0(vt),Ct=new ux(y,w,H,it,bt,ne,rt),mt=new Dx(y,vt),wt=new px,Qt=new vx(it),Bt=new H0(y,w,H,lt,Z,f,c),At=new wx(y,Z,bt),D=new Nx(P,zt,bt,lt),at=new V0(P,it,zt),kt=new Q0(P,it,zt),zt.programs=Ct.programs,y.capabilities=bt,y.extensions=it,y.properties=vt,y.renderLists=wt,y.shadowMap=At,y.state=lt,y.info=zt}dt();let $=new ul(y,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(k,tt,!1))},this.getSize=function(T){return T.set(k,tt)},this.setSize=function(T,U,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,tt=U,e.width=Math.floor(T*X),e.height=Math.floor(U*X),W===!0&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(k*X,tt*X).floor()},this.setDrawingBufferSize=function(T,U,W){k=T,tt=U,X=W,e.width=Math.floor(T*W),e.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(pt)},this.setViewport=function(T,U,W,q){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,U,W,q),lt.viewport(I.copy(pt).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(Gt)},this.setScissor=function(T,U,W,q){T.isVector4?Gt.set(T.x,T.y,T.z,T.w):Gt.set(T,U,W,q),lt.scissor(N.copy(Gt).multiplyScalar(X).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(T){lt.setScissorTest(St=T)},this.setOpaqueSort=function(T){ot=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(T=!0,U=!0,W=!0){let q=0;if(T){let z=!1;if(C!==null){let ct=C.texture.format;z=ct===Xl||ct===Wl||ct===Vl}if(z){let ct=C.texture.type,Mt=ct===Kn||ct===Fi||ct===xr||ct===Es||ct===kl||ct===Hl,Pt=Bt.getClearColor(),Lt=Bt.getClearAlpha(),Yt=Pt.r,Kt=Pt.g,Dt=Pt.b;Mt?(m[0]=Yt,m[1]=Kt,m[2]=Dt,m[3]=Lt,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Yt,x[1]=Kt,x[2]=Dt,x[3]=Lt,P.clearBufferiv(P.COLOR,0,x))}else q|=P.COLOR_BUFFER_BIT}U&&(q|=P.DEPTH_BUFFER_BIT),W&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),wt.dispose(),Qt.dispose(),vt.dispose(),w.dispose(),H.dispose(),Z.dispose(),ne.dispose(),D.dispose(),Ct.dispose(),$.dispose(),$.removeEventListener("sessionstart",bi),$.removeEventListener("sessionend",wi),cn.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=zt.autoReset,U=At.enabled,W=At.autoUpdate,q=At.needsUpdate,z=At.type;dt(),zt.autoReset=T,At.enabled=U,At.autoUpdate=W,At.needsUpdate=q,At.type=z}function yt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function qt(T){let U=T.target;U.removeEventListener("dispose",qt),de(U)}function de(T){Re(T),vt.remove(T)}function Re(T){let U=vt.get(T).programs;U!==void 0&&(U.forEach(function(W){Ct.releaseProgram(W)}),T.isShaderMaterial&&Ct.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,q,z,ct){U===null&&(U=Xt);let Mt=z.isMesh&&z.matrixWorld.determinant()<0,Pt=Xd(T,U,W,q,z);lt.setMaterial(q,Mt);let Lt=W.index,Yt=1;if(q.wireframe===!0){if(Lt=et.getWireframeAttribute(W),Lt===void 0)return;Yt=2}let Kt=W.drawRange,Dt=W.attributes.position,re=Kt.start*Yt,fe=(Kt.start+Kt.count)*Yt;ct!==null&&(re=Math.max(re,ct.start*Yt),fe=Math.min(fe,(ct.start+ct.count)*Yt)),Lt!==null?(re=Math.max(re,0),fe=Math.min(fe,Lt.count)):Dt!=null&&(re=Math.max(re,0),fe=Math.min(fe,Dt.count));let me=fe-re;if(me<0||me===1/0)return;ne.setup(z,q,Pt,W,Lt);let Ze,oe=at;if(Lt!==null&&(Ze=K.get(Lt),oe=kt,oe.setIndex(Ze)),z.isMesh)q.wireframe===!0?(lt.setLineWidth(q.wireframeLinewidth*st()),oe.setMode(P.LINES)):oe.setMode(P.TRIANGLES);else if(z.isLine){let Ut=q.linewidth;Ut===void 0&&(Ut=1),lt.setLineWidth(Ut*st()),z.isLineSegments?oe.setMode(P.LINES):z.isLineLoop?oe.setMode(P.LINE_LOOP):oe.setMode(P.LINE_STRIP)}else z.isPoints?oe.setMode(P.POINTS):z.isSprite&&oe.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)oe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ut=z._multiDrawStarts,On=z._multiDrawCounts,ae=z._multiDrawCount,gn=Lt?K.get(Lt).bytesPerElement:1,$i=vt.get(q).currentProgram.getUniforms();for(let en=0;en<ae;en++)$i.setValue(P,"_gl_DrawID",en),oe.render(Ut[en]/gn,On[en])}else if(z.isInstancedMesh)oe.renderInstances(re,me,z.count);else if(W.isInstancedBufferGeometry){let Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,On=Math.min(W.instanceCount,Ut);oe.renderInstances(re,me,On)}else oe.render(re,me)};function ie(T,U,W){T.transparent===!0&&T.side===Se&&T.forceSinglePass===!1?(T.side=Ve,T.needsUpdate=!0,Or(T,U,W),T.side=Ln,T.needsUpdate=!0,Or(T,U,W),T.side=Se):Or(T,U,W)}this.compile=function(T,U,W=null){W===null&&(W=T),p=Qt.get(W),p.init(U),v.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==W&&T.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let q=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ct=z.material;if(ct)if(Array.isArray(ct))for(let Mt=0;Mt<ct.length;Mt++){let Pt=ct[Mt];ie(Pt,W,z),q.add(Pt)}else ie(ct,W,z),q.add(ct)}),v.pop(),p=null,q},this.compileAsync=function(T,U,W=null){let q=this.compile(T,U,W);return new Promise(z=>{function ct(){if(q.forEach(function(Mt){vt.get(Mt).currentProgram.isReady()&&q.delete(Mt)}),q.size===0){z(T);return}setTimeout(ct,10)}it.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ce=null;function Oe(T){Ce&&Ce(T)}function bi(){cn.stop()}function wi(){cn.start()}let cn=new ed;cn.setAnimationLoop(Oe),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(T){Ce=T,$.setAnimationLoop(T),T===null?cn.stop():cn.start()},$.addEventListener("sessionstart",bi),$.addEventListener("sessionend",wi),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,U,C),p=Qt.get(T,v.length),p.init(U),v.push(p),Rt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(Rt),ut=this.localClippingEnabled,j=rt.init(this.clippingPlanes,ut),g=wt.get(T,_.length),g.init(),_.push(g),$.enabled===!0&&$.isPresenting===!0){let ct=y.xr.getDepthSensingMesh();ct!==null&&ei(ct,U,-1/0,y.sortObjects)}ei(T,U,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ot,xt),Q=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Q&&Bt.addToRenderList(g,T),this.info.render.frame++,j===!0&&rt.beginShadows();let W=p.state.shadowsArray;At.render(W,T,U),j===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,z=g.transmissive;if(p.setupLights(),U.isArrayCamera){let ct=U.cameras;if(z.length>0)for(let Mt=0,Pt=ct.length;Mt<Pt;Mt++){let Lt=ct[Mt];Qs(q,z,T,Lt)}Q&&Bt.render(T);for(let Mt=0,Pt=ct.length;Mt<Pt;Mt++){let Lt=ct[Mt];Js(g,T,Lt,Lt.viewport)}}else z.length>0&&Qs(q,z,T,U),Q&&Bt.render(T),Js(g,T,U);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,U),ne.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],j===!0&&rt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function ei(T,U,W,q){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){q&&Nt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Rt);let Mt=Z.update(T),Pt=T.material;Pt.visible&&g.push(T,Mt,Pt,W,Nt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){let Mt=Z.update(T),Pt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Nt.copy(T.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Nt.copy(Mt.boundingSphere.center)),Nt.applyMatrix4(T.matrixWorld).applyMatrix4(Rt)),Array.isArray(Pt)){let Lt=Mt.groups;for(let Yt=0,Kt=Lt.length;Yt<Kt;Yt++){let Dt=Lt[Yt],re=Pt[Dt.materialIndex];re&&re.visible&&g.push(T,Mt,re,W,Nt.z,Dt)}}else Pt.visible&&g.push(T,Mt,Pt,W,Nt.z,null)}}let ct=T.children;for(let Mt=0,Pt=ct.length;Mt<Pt;Mt++)ei(ct[Mt],U,W,q)}function Js(T,U,W,q){let z=T.opaque,ct=T.transmissive,Mt=T.transparent;p.setupLightsView(W),j===!0&&rt.setGlobalState(y.clippingPlanes,W),q&&lt.viewport(I.copy(q)),z.length>0&&Ei(z,U,W),ct.length>0&&Ei(ct,U,W),Mt.length>0&&Ei(Mt,U,W),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Qs(T,U,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Zn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Tr:Kn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));let ct=p.state.transmissionRenderTarget[q.id],Mt=q.viewport||I;ct.setSize(Mt.z,Mt.w);let Pt=y.getRenderTarget();y.setRenderTarget(ct),y.getClearColor(B),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Q&&Bt.render(W);let Lt=y.toneMapping;y.toneMapping=fi;let Yt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),j===!0&&rt.setGlobalState(y.clippingPlanes,q),Ei(T,W,q),R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct),it.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Dt=0,re=U.length;Dt<re;Dt++){let fe=U[Dt],me=fe.object,Ze=fe.geometry,oe=fe.material,Ut=fe.group;if(oe.side===Se&&me.layers.test(q.layers)){let On=oe.side;oe.side=Ve,oe.needsUpdate=!0,Fr(me,W,q,Ze,oe,Ut),oe.side=On,oe.needsUpdate=!0,Kt=!0}}Kt===!0&&(R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct))}y.setRenderTarget(Pt),y.setClearColor(B,G),Yt!==void 0&&(q.viewport=Yt),y.toneMapping=Lt}function Ei(T,U,W){let q=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ct=T.length;z<ct;z++){let Mt=T[z],Pt=Mt.object,Lt=Mt.geometry,Yt=q===null?Mt.material:q,Kt=Mt.group;Pt.layers.test(W.layers)&&Fr(Pt,U,W,Lt,Yt,Kt)}}function Fr(T,U,W,q,z,ct){T.onBeforeRender(y,U,W,q,z,ct),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(y,U,W,q,T,ct),z.transparent===!0&&z.side===Se&&z.forceSinglePass===!1?(z.side=Ve,z.needsUpdate=!0,y.renderBufferDirect(W,U,q,z,T,ct),z.side=Ln,z.needsUpdate=!0,y.renderBufferDirect(W,U,q,z,T,ct),z.side=Se):y.renderBufferDirect(W,U,q,z,T,ct),T.onAfterRender(y,U,W,q,z,ct)}function Or(T,U,W){U.isScene!==!0&&(U=Xt);let q=vt.get(T),z=p.state.lights,ct=p.state.shadowsArray,Mt=z.state.version,Pt=Ct.getParameters(T,z.state,ct,U,W),Lt=Ct.getProgramCacheKey(Pt),Yt=q.programs;q.environment=T.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(T.isMeshStandardMaterial?H:w).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",qt),Yt=new Map,q.programs=Yt);let Kt=Yt.get(Lt);if(Kt!==void 0){if(q.currentProgram===Kt&&q.lightsStateVersion===Mt)return Ah(T,Pt),Kt}else Pt.uniforms=Ct.getUniforms(T),T.onBeforeCompile(Pt,y),Kt=Ct.acquireProgram(Pt,Lt),Yt.set(Lt,Kt),q.uniforms=Pt.uniforms;let Dt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=rt.uniform),Ah(T,Pt),q.needsLights=Yd(T),q.lightsStateVersion=Mt,q.needsLights&&(Dt.ambientLightColor.value=z.state.ambient,Dt.lightProbe.value=z.state.probe,Dt.directionalLights.value=z.state.directional,Dt.directionalLightShadows.value=z.state.directionalShadow,Dt.spotLights.value=z.state.spot,Dt.spotLightShadows.value=z.state.spotShadow,Dt.rectAreaLights.value=z.state.rectArea,Dt.ltc_1.value=z.state.rectAreaLTC1,Dt.ltc_2.value=z.state.rectAreaLTC2,Dt.pointLights.value=z.state.point,Dt.pointLightShadows.value=z.state.pointShadow,Dt.hemisphereLights.value=z.state.hemi,Dt.directionalShadowMap.value=z.state.directionalShadowMap,Dt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Dt.spotShadowMap.value=z.state.spotShadowMap,Dt.spotLightMatrix.value=z.state.spotLightMatrix,Dt.spotLightMap.value=z.state.spotLightMap,Dt.pointShadowMap.value=z.state.pointShadowMap,Dt.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Kt,q.uniformsList=null,Kt}function Th(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ys.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Ah(T,U){let W=vt.get(T);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Xd(T,U,W,q,z){U.isScene!==!0&&(U=Xt),R.resetTextureUnits();let ct=U.fog,Mt=q.isMeshStandardMaterial?U.environment:null,Pt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ns,Lt=(q.isMeshStandardMaterial?H:w).get(q.envMap||Mt),Yt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Kt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Dt=!!W.morphAttributes.position,re=!!W.morphAttributes.normal,fe=!!W.morphAttributes.color,me=fi;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(me=y.toneMapping);let Ze=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oe=Ze!==void 0?Ze.length:0,Ut=vt.get(q),On=p.state.lights;if(j===!0&&(ut===!0||T!==M)){let ln=T===M&&q.id===b;rt.setState(q,T,ln)}let ae=!1;q.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==On.state.version||Ut.outputColorSpace!==Pt||z.isBatchedMesh&&Ut.batching===!1||!z.isBatchedMesh&&Ut.batching===!0||z.isBatchedMesh&&Ut.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ut.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ut.instancing===!1||!z.isInstancedMesh&&Ut.instancing===!0||z.isSkinnedMesh&&Ut.skinning===!1||!z.isSkinnedMesh&&Ut.skinning===!0||z.isInstancedMesh&&Ut.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ut.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ut.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ut.instancingMorph===!1&&z.morphTexture!==null||Ut.envMap!==Lt||q.fog===!0&&Ut.fog!==ct||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==rt.numPlanes||Ut.numIntersection!==rt.numIntersection)||Ut.vertexAlphas!==Yt||Ut.vertexTangents!==Kt||Ut.morphTargets!==Dt||Ut.morphNormals!==re||Ut.morphColors!==fe||Ut.toneMapping!==me||Ut.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Ut.__version=q.version);let gn=Ut.currentProgram;ae===!0&&(gn=Or(q,U,z));let $i=!1,en=!1,js=!1,ge=gn.getUniforms(),An=Ut.uniforms;if(lt.useProgram(gn.program)&&($i=!0,en=!0,js=!0),q.id!==b&&(b=q.id,en=!0),$i||M!==T){lt.buffers.depth.getReversed()?(nt.copy(T.projectionMatrix),kf(nt),Hf(nt),ge.setValue(P,"projectionMatrix",nt)):ge.setValue(P,"projectionMatrix",T.projectionMatrix),ge.setValue(P,"viewMatrix",T.matrixWorldInverse);let ni=ge.map.cameraPosition;ni!==void 0&&ni.setValue(P,It.setFromMatrixPosition(T.matrixWorld)),bt.logarithmicDepthBuffer&&ge.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ge.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,en=!0,js=!0)}if(z.isSkinnedMesh){ge.setOptional(P,z,"bindMatrix"),ge.setOptional(P,z,"bindMatrixInverse");let ln=z.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ge.setValue(P,"boneTexture",ln.boneTexture,R))}z.isBatchedMesh&&(ge.setOptional(P,z,"batchingTexture"),ge.setValue(P,"batchingTexture",z._matricesTexture,R),ge.setOptional(P,z,"batchingIdTexture"),ge.setValue(P,"batchingIdTexture",z._indirectTexture,R),ge.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&ge.setValue(P,"batchingColorTexture",z._colorsTexture,R));let tr=W.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&Vt.update(z,W,gn),(en||Ut.receiveShadow!==z.receiveShadow)&&(Ut.receiveShadow=z.receiveShadow,ge.setValue(P,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(An.envMap.value=Lt,An.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),en&&(ge.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ut.needsLights&&qd(An,js),ct&&q.fog===!0&&mt.refreshFogUniforms(An,ct),mt.refreshMaterialUniforms(An,q,X,tt,p.state.transmissionRenderTarget[T.id]),ys.upload(P,Th(Ut),An,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ys.upload(P,Th(Ut),An,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ge.setValue(P,"center",z.center),ge.setValue(P,"modelViewMatrix",z.modelViewMatrix),ge.setValue(P,"normalMatrix",z.normalMatrix),ge.setValue(P,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let ln=q.uniformsGroups;for(let ni=0,ii=ln.length;ni<ii;ni++){let Rh=ln[ni];D.update(Rh,gn),D.bind(Rh,gn)}}return gn}function qd(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Yd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,W){vt.get(T.texture).__webglTexture=U,vt.get(T.depthTexture).__webglTexture=W;let q=vt.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let W=vt.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,W=0){C=T,A=U,S=W;let q=!0,z=null,ct=!1,Mt=!1;if(T){let Lt=vt.get(T);if(Lt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Lt.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Lt.__hasExternalTextures)R.rebindTextures(T,vt.get(T.texture).__webglTexture,vt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Dt=T.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&vt.has(Dt)&&(T.width!==Dt.image.width||T.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let Yt=T.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Mt=!0);let Kt=vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Kt[U])?z=Kt[U][W]:z=Kt[U],ct=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?z=vt.get(T).__webglMultisampledFramebuffer:Array.isArray(Kt)?z=Kt[W]:z=Kt,I.copy(T.viewport),N.copy(T.scissor),F=T.scissorTest}else I.copy(pt).multiplyScalar(X).floor(),N.copy(Gt).multiplyScalar(X).floor(),F=St;if(lt.bindFramebuffer(P.FRAMEBUFFER,z)&&q&&lt.drawBuffers(T,z),lt.viewport(I),lt.scissor(N),lt.setScissorTest(F),ct){let Lt=vt.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Lt.__webglTexture,W)}else if(Mt){let Lt=vt.get(T.texture),Yt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Lt.__webglTexture,W||0,Yt)}b=-1},this.readRenderTargetPixels=function(T,U,W,q,z,ct,Mt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Pt=Pt[Mt]),Pt){lt.bindFramebuffer(P.FRAMEBUFFER,Pt);try{let Lt=T.texture,Yt=Lt.format,Kt=Lt.type;if(!bt.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-q&&W>=0&&W<=T.height-z&&P.readPixels(U,W,q,z,Ot.convert(Yt),Ot.convert(Kt),ct)}finally{let Lt=C!==null?vt.get(C).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(T,U,W,q,z,ct,Mt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Mt!==void 0&&(Pt=Pt[Mt]),Pt){let Lt=T.texture,Yt=Lt.format,Kt=Lt.type;if(!bt.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-q&&W>=0&&W<=T.height-z){lt.bindFramebuffer(P.FRAMEBUFFER,Pt);let Dt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Dt),P.bufferData(P.PIXEL_PACK_BUFFER,ct.byteLength,P.STREAM_READ),P.readPixels(U,W,q,z,Ot.convert(Yt),Ot.convert(Kt),0);let re=C!==null?vt.get(C).__webglFramebuffer:null;lt.bindFramebuffer(P.FRAMEBUFFER,re);let fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bf(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Dt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ct),P.deleteBuffer(Dt),P.deleteSync(fe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,W=0){T.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let q=Math.pow(2,-W),z=Math.floor(T.image.width*q),ct=Math.floor(T.image.height*q),Mt=U!==null?U.x:0,Pt=U!==null?U.y:0;R.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,Mt,Pt,z,ct),lt.unbindTexture()},this.copyTextureToTexture=function(T,U,W=null,q=null,z=0){T.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],U=arguments[2],z=arguments[3]||0,W=null);let ct,Mt,Pt,Lt,Yt,Kt,Dt,re,fe,me=T.isCompressedTexture?T.mipmaps[z]:T.image;W!==null?(ct=W.max.x-W.min.x,Mt=W.max.y-W.min.y,Pt=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Yt=W.min.y,Kt=W.isBox3?W.min.z:0):(ct=me.width,Mt=me.height,Pt=me.depth||1,Lt=0,Yt=0,Kt=0),q!==null?(Dt=q.x,re=q.y,fe=q.z):(Dt=0,re=0,fe=0);let Ze=Ot.convert(U.format),oe=Ot.convert(U.type),Ut;U.isData3DTexture?(R.setTexture3D(U,0),Ut=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Ut=P.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Ut=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);let On=P.getParameter(P.UNPACK_ROW_LENGTH),ae=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gn=P.getParameter(P.UNPACK_SKIP_PIXELS),$i=P.getParameter(P.UNPACK_SKIP_ROWS),en=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Kt);let js=T.isDataArrayTexture||T.isData3DTexture,ge=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let An=vt.get(T),tr=vt.get(U),ln=vt.get(An.__renderTarget),ni=vt.get(tr.__renderTarget);lt.bindFramebuffer(P.READ_FRAMEBUFFER,ln.__webglFramebuffer),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<Pt;ii++)js&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(T).__webglTexture,z,Kt+ii),T.isDepthTexture?(ge&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,z,fe+ii),P.blitFramebuffer(Lt,Yt,ct,Mt,Dt,re,ct,Mt,P.DEPTH_BUFFER_BIT,P.NEAREST)):ge?P.copyTexSubImage3D(Ut,z,Dt,re,fe+ii,Lt,Yt,ct,Mt):P.copyTexSubImage2D(Ut,z,Dt,re,fe+ii,Lt,Yt,ct,Mt);lt.bindFramebuffer(P.READ_FRAMEBUFFER,null),lt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ge?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Ut,z,Dt,re,fe,ct,Mt,Pt,Ze,oe,me.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ut,z,Dt,re,fe,ct,Mt,Pt,Ze,me.data):P.texSubImage3D(Ut,z,Dt,re,fe,ct,Mt,Pt,Ze,oe,me):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,z,Dt,re,ct,Mt,Ze,oe,me.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,z,Dt,re,me.width,me.height,Ze,me.data):P.texSubImage2D(P.TEXTURE_2D,z,Dt,re,ct,Mt,Ze,oe,me);P.pixelStorei(P.UNPACK_ROW_LENGTH,On),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ae),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gn),P.pixelStorei(P.UNPACK_SKIP_ROWS,$i),P.pixelStorei(P.UNPACK_SKIP_IMAGES,en),z===0&&U.generateMipmaps&&P.generateMipmap(Ut),lt.unbindTexture()},this.copyTextureToTexture3D=function(T,U,W=null,q=null,z=0){return T.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,T=arguments[2],U=arguments[3],z=arguments[4]||0),ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,W,q,z)},this.initRenderTarget=function(T){vt.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){A=0,S=0,C=null,lt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Fo=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},dl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qe=new L,Oo=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yr=class extends Dn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ls,rr=new L,hs=new L,us=new L,ds=new ht,or=new ht,od=new jt,oo=new L,ar=new L,ao=new L,Au=new ht,sc=new ht,Ru=new ht,Bo=class extends ve{constructor(t=new yr){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dl(e,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Oo(n,3,0,!1)),ls.setAttribute("uv",new Oo(n,2,3,!1))}this.geometry=ls,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),od.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-us.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;co(oo.set(-.5,-.5,0),us,o,hs,i,r),co(ar.set(.5,-.5,0),us,o,hs,i,r),co(ao.set(.5,.5,0),us,o,hs,i,r),Au.set(0,0),sc.set(1,0),Ru.set(1,1);let a=t.ray.intersectTriangle(oo,ar,ao,!1,rr);if(a===null&&(co(ar.set(-.5,.5,0),us,o,hs,i,r),sc.set(0,1),a=t.ray.intersectTriangle(oo,ao,ar,!1,rr),a===null))return;let c=t.ray.origin.distanceTo(rr);c<t.near||c>t.far||e.push({distance:c,point:rr.clone(),uv:ui.getInterpolation(rr,oo,ar,ao,Au,sc,Ru,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function co(s,t,e,n,i,r){ds.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(or.x=r*ds.x-i*ds.y,or.y=i*ds.x+r*ds.y):or.copy(ds),s.copy(t),s.x+=or.x,s.y+=or.y,s.applyMatrix4(od)}var fl=class extends Qe{constructor(t=null,e=1,n=1,i,r,o,a,c,l=rn,h=rn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ko=class extends Je{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fs=new jt,Cu=new jt,lo=[],Iu=new Mn,Ux=new jt,cr=new Y,lr=new mi,un=class extends Y{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ko(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ux)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),Iu.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(Iu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fs),lr.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fs),Cu.multiplyMatrices(n,fs),cr.matrixWorld=Cu,cr.raycast(t,lo);for(let o=0,a=lo.length;o<a;o++){let c=lo[o];c.instanceId=r,c.object=this,e.push(c)}lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ko(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fl(new Float32Array(i*this.count),i,this.count,Gl,Pn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var vr=class extends Dn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pu=new jt,pl=new Ro,ho=new mi,uo=new L,Ho=class extends ve{constructor(t=new we,e=new vr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=r,t.ray.intersectsSphere(ho)===!1)return;Pu.copy(i).invert(),pl.copy(t.ray).applyMatrix4(Pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);uo.fromBufferAttribute(u,g),Lu(uo,g,c,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,x=f;m<x;m++)uo.fromBufferAttribute(u,m),Lu(uo,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Lu(s,t,e,n,i,r,o){let a=pl.distanceSqToPoint(s);if(a<e){let c=new L;pl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Un=class extends Qe{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ht:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,i=[],r=[],o=[],a=new L,c=new jt;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ge(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ge(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mr=class extends dn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ml=class extends Mr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $l(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var fo=new L,rc=new $l,oc=new $l,ac=new $l,gl=class extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(fo.subVectors(i[0],i[1]).add(i[0]),l=fo);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(fo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),rc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),oc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),ac.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),oc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ac.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(rc.calc(c),oc.calc(c),ac.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Du(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function zx(s,t){let e=1-s;return e*e*t}function Fx(s,t){return 2*(1-s)*s*t}function Ox(s,t){return s*s*t}function pr(s,t,e,n){return zx(s,t)+Fx(s,e)+Ox(s,n)}function Bx(s,t){let e=1-s;return e*e*e*t}function kx(s,t){let e=1-s;return 3*e*e*s*t}function Hx(s,t){return 3*(1-s)*s*s*t}function Gx(s,t){return s*s*s*t}function mr(s,t,e,n,i){return Bx(s,t)+kx(s,e)+Hx(s,n)+Gx(s,i)}var Go=class extends dn{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,i.x,r.x,o.x,a.x),mr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xl=class extends dn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,i.x,r.x,o.x,a.x),mr(t,i.y,r.y,o.y,a.y),mr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vo=class extends dn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends dn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wo=class extends dn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(pr(t,i.x,r.x,o.x),pr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends dn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(pr(t,i.x,r.x,o.x),pr(t,i.y,r.y,o.y),pr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xo=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Du(a,c.x,l.x,h.x,u.x),Du(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ht().fromArray(i))}return this}},vl=Object.freeze({__proto__:null,ArcCurve:ml,CatmullRomCurve3:gl,CubicBezierCurve:Go,CubicBezierCurve3:xl,EllipseCurve:Mr,LineCurve:Vo,LineCurve3:_l,QuadraticBezierCurve:Wo,QuadraticBezierCurve3:yl,SplineCurve:Xo}),Ml=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new vl[i.type]().fromJSON(i))}return this}},qo=class extends Ml{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Vo(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Wo(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Go(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Xo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new Mr(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Jn=class s extends we{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ze=class s extends we{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(f,2));function _(){let y=new L,E=new L,A=0,S=(e-t)/n;for(let C=0;C<=r;C++){let b=[],M=C/r,I=M*(e-t)+t;for(let N=0;N<=i;N++){let F=N/i,B=F*c+a,G=Math.sin(B),k=Math.cos(B);E.x=I*G,E.y=-M*n+g,E.z=I*k,u.push(E.x,E.y,E.z),y.set(G,S,k).normalize(),d.push(y.x,y.y,y.z),f.push(F,1-M),b.push(m++)}x.push(b)}for(let C=0;C<i;C++)for(let b=0;b<r;b++){let M=x[b][C],I=x[b+1][C],N=x[b+1][C+1],F=x[b][C+1];(t>0||b!==0)&&(h.push(M,I,F),A+=3),(e>0||b!==r-1)&&(h.push(I,N,F),A+=3)}l.addGroup(p,A,0),p+=A}function v(y){let E=m,A=new ht,S=new L,C=0,b=y===!0?t:e,M=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;let I=m;for(let N=0;N<=i;N++){let B=N/i*c+a,G=Math.cos(B),k=Math.sin(B);S.x=b*k,S.y=g*M,S.z=b*G,u.push(S.x,S.y,S.z),d.push(0,M,0),A.x=G*.5+.5,A.y=k*.5*M+.5,f.push(A.x,A.y),m++}for(let N=0;N<i;N++){let F=E+N,B=I+N;y===!0?h.push(B,B+1,F):h.push(B+1,B,F),C+=3}l.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Oi=class extends qo{constructor(t){super(t),this.uuid=Yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new qo().fromJSON(i))}return this}},Vx={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=ad(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=$x(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let m=e;m<i;m+=e)u=s[m],d=s[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return br(r,o,e,a,c,f,0),o}};function ad(s,t,e,n,i){let r,o;if(i===r_(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Nu(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Nu(r,s[r],s[r+1],o);return o&&ea(o,o.next)&&(Er(o),o=o.next),o}function Bi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ea(e,e.next)||ye(e.prev,e,e.next)===0)){if(Er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(s,t,e,n,i,r,o){if(!s)return;!o&&r&&jx(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Xx(s,n,i,r):Wx(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Er(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=qx(Bi(s),t,e),br(s,t,e,n,i,r,2)):o===2&&Yx(s,t,e,n,i,r):br(Bi(s),t,e,n,i,r,1);break}}}function Wx(s){let t=s.prev,e=s,n=s.next;if(ye(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ms(i,a,r,c,o,l,m.x,m.y)&&ye(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xx(s,t,e,n){let i=s.prev,r=s,o=s.next;if(ye(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=bl(f,m,t,e,n),_=bl(x,g,t,e,n),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&ms(a,h,c,u,l,d,v.x,v.y)&&ye(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ms(a,h,c,u,l,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&ms(a,h,c,u,l,d,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ms(a,h,c,u,l,d,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function qx(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!ea(i,r)&&cd(i,n,n.next,r)&&wr(i,r)&&wr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Er(n),Er(n.next),n=s=r),n=n.next}while(n!==s);return Bi(n)}function Yx(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&n_(o,a)){let c=ld(o,a);o=Bi(o,o.next),c=Bi(c,c.next),br(o,t,e,n,i,r,0),br(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function $x(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=ad(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(e_(l));for(i.sort(Kx),r=0;r<i.length;r++)e=Zx(i[r],e);return e}function Kx(s,t){return s.x-t.x}function Zx(s,t){let e=Jx(s,t);if(!e)return t;let n=ld(e,s);return Bi(n,n.next),Bi(e,e.next)}function Jx(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&ms(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),wr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Qx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Qx(s,t){return ye(s.prev,s,t.prev)<0&&ye(t.next,s,s.next)<0}function jx(s,t,e,n){let i=s;do i.z===0&&(i.z=bl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,t_(i)}function t_(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function bl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function e_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ms(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function n_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!i_(s,t)&&(wr(s,t)&&wr(t,s)&&s_(s,t)&&(ye(s.prev,s,t.prev)||ye(s,t.prev,t))||ea(s,t)&&ye(s.prev,s,s.next)>0&&ye(t.prev,t,t.next)>0)}function ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ea(s,t){return s.x===t.x&&s.y===t.y}function cd(s,t,e,n){let i=mo(ye(s,t,e)),r=mo(ye(s,t,n)),o=mo(ye(e,n,s)),a=mo(ye(e,n,t));return!!(i!==r&&o!==a||i===0&&po(s,e,t)||r===0&&po(s,n,t)||o===0&&po(e,s,n)||a===0&&po(e,t,n))}function po(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function mo(s){return s>0?1:s<0?-1:0}function i_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&cd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function wr(s,t){return ye(s.prev,s,s.next)<0?ye(s,t,s.next)>=0&&ye(s,s.prev,t)>=0:ye(s,t,s.prev)<0||ye(s,s.next,t)<0}function s_(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ld(s,t){let e=new wl(s.i,s.x,s.y),n=new wl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Nu(s,t,e,n){let i=new wl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Er(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function r_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var gr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Uu(t),zu(n,t);let o=t.length;e.forEach(Uu);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,zu(n,e[c]);let a=Vx.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Uu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function zu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Cs=class s extends we{constructor(t=new Oi([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ee(i,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:o_,v,y=!1,E,A,S,C;p&&(v=p.getSpacedPoints(h),y=!0,d=!1,E=p.computeFrenetFrames(h,!1),A=new L,S=new L,C=new L),d||(g=0,f=0,m=0,x=0);let b=a.extractPoints(l),M=b.shape,I=b.holes;if(!gr.isClockWise(M)){M=M.reverse();for(let Q=0,st=I.length;Q<st;Q++){let P=I[Q];gr.isClockWise(P)&&(I[Q]=P.reverse())}}let F=gr.triangulateShape(M,I),B=M;for(let Q=0,st=I.length;Q<st;Q++){let P=I[Q];M=M.concat(P)}function G(Q,st,P){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(st,P)}let k=M.length,tt=F.length;function X(Q,st,P){let Tt,it,bt,lt=Q.x-st.x,zt=Q.y-st.y,vt=P.x-Q.x,R=P.y-Q.y,w=lt*lt+zt*zt,H=lt*R-zt*vt;if(Math.abs(H)>Number.EPSILON){let K=Math.sqrt(w),et=Math.sqrt(vt*vt+R*R),Z=st.x-zt/K,Ct=st.y+lt/K,mt=P.x-R/et,wt=P.y+vt/et,Qt=((mt-Z)*R-(wt-Ct)*vt)/(lt*R-zt*vt);Tt=Z+lt*Qt-Q.x,it=Ct+zt*Qt-Q.y;let rt=Tt*Tt+it*it;if(rt<=2)return new ht(Tt,it);bt=Math.sqrt(rt/2)}else{let K=!1;lt>Number.EPSILON?vt>Number.EPSILON&&(K=!0):lt<-Number.EPSILON?vt<-Number.EPSILON&&(K=!0):Math.sign(zt)===Math.sign(R)&&(K=!0),K?(Tt=-zt,it=lt,bt=Math.sqrt(w)):(Tt=lt,it=zt,bt=Math.sqrt(w/2))}return new ht(Tt/bt,it/bt)}let ot=[];for(let Q=0,st=B.length,P=st-1,Tt=Q+1;Q<st;Q++,P++,Tt++)P===st&&(P=0),Tt===st&&(Tt=0),ot[Q]=X(B[Q],B[P],B[Tt]);let xt=[],pt,Gt=ot.concat();for(let Q=0,st=I.length;Q<st;Q++){let P=I[Q];pt=[];for(let Tt=0,it=P.length,bt=it-1,lt=Tt+1;Tt<it;Tt++,bt++,lt++)bt===it&&(bt=0),lt===it&&(lt=0),pt[Tt]=X(P[Tt],P[bt],P[lt]);xt.push(pt),Gt=Gt.concat(pt)}for(let Q=0;Q<g;Q++){let st=Q/g,P=f*Math.cos(st*Math.PI/2),Tt=m*Math.sin(st*Math.PI/2)+x;for(let it=0,bt=B.length;it<bt;it++){let lt=G(B[it],ot[it],Tt);nt(lt.x,lt.y,-P)}for(let it=0,bt=I.length;it<bt;it++){let lt=I[it];pt=xt[it];for(let zt=0,vt=lt.length;zt<vt;zt++){let R=G(lt[zt],pt[zt],Tt);nt(R.x,R.y,-P)}}}let St=m+x;for(let Q=0;Q<k;Q++){let st=d?G(M[Q],Gt[Q],St):M[Q];y?(S.copy(E.normals[0]).multiplyScalar(st.x),A.copy(E.binormals[0]).multiplyScalar(st.y),C.copy(v[0]).add(S).add(A),nt(C.x,C.y,C.z)):nt(st.x,st.y,0)}for(let Q=1;Q<=h;Q++)for(let st=0;st<k;st++){let P=d?G(M[st],Gt[st],St):M[st];y?(S.copy(E.normals[Q]).multiplyScalar(P.x),A.copy(E.binormals[Q]).multiplyScalar(P.y),C.copy(v[Q]).add(S).add(A),nt(C.x,C.y,C.z)):nt(P.x,P.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let st=Q/g,P=f*Math.cos(st*Math.PI/2),Tt=m*Math.sin(st*Math.PI/2)+x;for(let it=0,bt=B.length;it<bt;it++){let lt=G(B[it],ot[it],Tt);nt(lt.x,lt.y,u+P)}for(let it=0,bt=I.length;it<bt;it++){let lt=I[it];pt=xt[it];for(let zt=0,vt=lt.length;zt<vt;zt++){let R=G(lt[zt],pt[zt],Tt);y?nt(R.x,R.y+v[h-1].y,v[h-1].x+P):nt(R.x,R.y,u+P)}}}V(),j();function V(){let Q=i.length/3;if(d){let st=0,P=k*st;for(let Tt=0;Tt<tt;Tt++){let it=F[Tt];Rt(it[2]+P,it[1]+P,it[0]+P)}st=h+g*2,P=k*st;for(let Tt=0;Tt<tt;Tt++){let it=F[Tt];Rt(it[0]+P,it[1]+P,it[2]+P)}}else{for(let st=0;st<tt;st++){let P=F[st];Rt(P[2],P[1],P[0])}for(let st=0;st<tt;st++){let P=F[st];Rt(P[0]+k*h,P[1]+k*h,P[2]+k*h)}}n.addGroup(Q,i.length/3-Q,0)}function j(){let Q=i.length/3,st=0;ut(B,st),st+=B.length;for(let P=0,Tt=I.length;P<Tt;P++){let it=I[P];ut(it,st),st+=it.length}n.addGroup(Q,i.length/3-Q,1)}function ut(Q,st){let P=Q.length;for(;--P>=0;){let Tt=P,it=P-1;it<0&&(it=Q.length-1);for(let bt=0,lt=h+g*2;bt<lt;bt++){let zt=k*bt,vt=k*(bt+1),R=st+Tt+zt,w=st+it+zt,H=st+it+vt,K=st+Tt+vt;It(R,w,H,K)}}}function nt(Q,st,P){c.push(Q),c.push(st),c.push(P)}function Rt(Q,st,P){Nt(Q),Nt(st),Nt(P);let Tt=i.length/3,it=_.generateTopUV(n,i,Tt-3,Tt-2,Tt-1);Xt(it[0]),Xt(it[1]),Xt(it[2])}function It(Q,st,P,Tt){Nt(Q),Nt(st),Nt(Tt),Nt(st),Nt(P),Nt(Tt);let it=i.length/3,bt=_.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);Xt(bt[0]),Xt(bt[1]),Xt(bt[3]),Xt(bt[1]),Xt(bt[2]),Xt(bt[3])}function Nt(Q){i.push(c[Q*3+0]),i.push(c[Q*3+1]),i.push(c[Q*3+2])}function Xt(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return a_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new vl[i.type]().fromJSON(i)),new s(n,t.options)}},o_={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ht(r,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-u),new ht(d,1-m),new ht(x,1-p)]:[new ht(a,1-c),new ht(h,1-u),new ht(f,1-m),new ht(g,1-p)]}};function a_(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Yo=class s extends we{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/i,f=new L,m=new ht;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let _=p+g,v=_,y=_+n+1,E=_+n+2,A=_+1;a.push(v,y,A),a.push(y,E,A)}}this.setIndex(a),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var bn=class s extends we{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,d=new L,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let _=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){let A=E/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+y,1-v),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let v=h[p][_+1],y=h[p][_],E=h[p+1][_],A=h[p+1][_+1];(p!==0||o>0)&&f.push(v,y,A),(p!==n-1||c<Math.PI)&&f.push(y,E,A)}this.setIndex(f),this.setAttribute("position",new ee(m,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Is=class s extends we{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let x=m/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,_=(i+1)*f+m;o.push(x,g,_),o.push(g,p,_)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Te=class extends Dn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Et=class extends Dn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function go(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function c_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ps=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends Ps{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dh:r=t,a=2*e-n;break;case Nh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dh:o=t,c=2*n-e;break;case Nh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+_*o[l+E]+v*o[c+E]+y*o[u+E];return r}},Sl=class extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Tl=class extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=go(e,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:go(t.times,Array),values:go(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case bo:e=this.InterpolantFactoryMethodDiscrete;break;case $c:e=this.InterpolantFactoryMethodLinear;break;case Ca:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return $c;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&c_(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=$c;var ki=class extends wn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=bo;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends wn{};Al.prototype.ValueTypeName="color";var Rl=class extends wn{};Rl.prototype.ValueTypeName="number";var Cl=class extends Ps{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)je.slerpFlat(r,0,o,l-a,o,l,c);return r}},$o=class extends wn{InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}};$o.prototype.ValueTypeName="quaternion";$o.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends wn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=bo;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends wn{};Il.prototype.ValueTypeName="vector";var Pl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},l_=new Pl,Ll=class{constructor(t){this.manager=t!==void 0?t:l_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ko=class extends Ls{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},cc=new jt,Fu=new L,Ou=new L,Sr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fu),Ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ou),e.updateMatrixWorld(),cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Dl=class extends Sr{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Eo*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Zo=class extends Ls{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Bu=new jt,hr=new L,lc=new L,Nl=class extends Sr{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(hr),lc.copy(n.position),lc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lc),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),Bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu)}},Ds=class extends Ls{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ul=class extends Sr{constructor(){super(new No(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jo=class extends Ls{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Ul}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Kl="\\[\\]\\.:\\/",h_=new RegExp("["+Kl+"]","g"),Zl="[^"+Kl+"]",u_="[^"+Kl.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",Zl),f_=/(WCOD+)?/.source.replace("WCOD",u_),p_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),g_=new RegExp("^"+d_+f_+p_+m_+"$"),x_=["material","materials","bones","map"],zl=class{constructor(t,e,n){let i=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(h_,"")}static parseTrackName(t){let e=g_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);x_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=zl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var th={};Kd(th,{ALL_ROADS:()=>dd,AREAS:()=>Me,COURSES:()=>Rr,EAST_POIS:()=>ud,EAST_ROADS:()=>jn,LANDMARKS:()=>an,LAYOUTS:()=>gi,MAP_SCALE:()=>Ar,NODES:()=>Ft,POIS:()=>v_,ROADS:()=>y_,START_SPOT:()=>M_,WEST_POIS:()=>Jl,WEST_ROADS:()=>zs,areaOfLayout:()=>fn,areaStart:()=>Vi,arriveSpot:()=>Cr,geo:()=>on,headingTo:()=>fd,laneOffset:()=>Gi,laneSpot:()=>jl,roadPolyline:()=>We,roadWidthBetween:()=>Ql,townRoadBetween:()=>zn});var Ar=.7;function on(s,t){return{x:(t-139.704)*90360*.7,z:(35.734-s)*110950*.7}}var __={Y0:[35.72805,139.69688],Y_RK:[35.73065,139.6983],Y_KN:[35.733132,139.699497],Y2:[35.73521,139.7006],Y3:[35.73938,139.70538],KUMANO:[35.74139,139.70675],K1:[35.74012,139.70841],AXIA:[35.7386,139.71061],K3:[35.73843,139.71165],K4:[35.7381,139.7126],G1:[35.73714,139.70997],G2:[35.73446,139.70942],G3:[35.73215,139.7088],BUKURO:[35.73162,139.70846],GOSA:[35.73125,139.70826],W_SW:[35.73082,139.70804],G5:[35.72835,139.70666],R441_1:[35.72924,139.70354],R441_2:[35.72865,139.70042],S441:[35.72776,139.70826],EDIT:[35.72744,139.70931],R1:[35.73037,139.69903],R2:[35.73043,139.70004],R3:[35.73074,139.70236],R4:[35.73112,139.70507],TIPTOP:[35.73116,139.70546],RK_E:[35.73175,139.70713],QB:[35.73186,139.70663],Q1:[35.73212,139.70584],Q2:[35.73253,139.70499],NIKKEN:[35.73284,139.7039],Q3:[35.73291,139.70329],Q4:[35.73288,139.70081],YUBIN:[35.73305,139.69987],EPOS:[35.73066,139.70882],W_S2:[35.73065,139.70935],W_A:[35.73092,139.70969],W_B:[35.73151,139.71002],W_C:[35.73126,139.71028],HOSEI:[35.73121,139.71084],W_E1:[35.73155,139.71112],W_E2:[35.73163,139.71096],KUREYON:[35.73268,139.71085],W_N:[35.73262,139.70952],MIYAKE:[35.73161,139.70947],W_S1:[35.73068,139.7084],E_EN:[35.7362,139.7116],E1:[35.73407,139.71155],S_MID:[35.73007,139.70935],T441_A:[35.72912,139.70501],T441_B:[35.72902,139.70198],T441_C:[35.72827,139.69858],RT_W:[35.73007,139.70975],RT_A0:[35.73024,139.70975],RT_A1:[35.7304,139.70994],RT_B0:[35.7304,139.71016],RT_B1:[35.73024,139.71035],RT_C0:[35.72981,139.71035],RT_C1:[35.72965,139.71016],RT_D0:[35.72965,139.70994],RT_D1:[35.72981,139.70975],NI_S:[35.73124,139.71054],NI_N:[35.73267,139.71054],DQ_E:[35.74036,139.7081],DQ_P:[35.74074,139.7081],GS_E:[35.73775,139.71163],GS_P:[35.73775,139.71207],K5:[35.73797,139.71305],EDIT_OUT:[35.72731,139.70975],GATE_K:[35.73395,139.7142],GK_OUT:[35.73395,139.7136],V0:[35.73397,139.716],J1:[35.73346,139.71686],KG1:[35.73244,139.71893],EG_E:[35.73079,139.72176],KG2:[35.72913,139.72459],J2:[35.72568,139.73025],SN1:[35.72392,139.73101],ES_E:[35.72277,139.73137],J3:[35.72162,139.73173],SB1:[35.721,139.72938],SB2:[35.72056,139.7272],J4:[35.71959,139.72503],T435_1:[35.72021,139.72394],HELLO:[35.72201,139.72313],T435_2:[35.72392,139.72252],J5:[35.72602,139.71908],J6:[35.72736,139.71686],S60E:[35.729,139.71684],N1:[35.73129,139.7168],MJ_OUT:[35.726,139.7124],MJ_S:[35.72653,139.7123],MJ_1:[35.7286,139.71186],GR0:[35.7296,139.71222],MJ_2:[35.73036,139.71258],MJ_3:[35.73153,139.71252],MJ_4:[35.7329,139.71339],S60M:[35.72985,139.7145],MS1:[35.7255,139.71382],HOSHINO:[35.72461,139.71535],MS2:[35.7243,139.71812],MS3:[35.72361,139.72139],EG_P:[35.73109,139.72202],ES_P:[35.72277,139.73184]},an={dept:[35.7283,139.7106,35.7307,139.7121],park:[35.7295,139.7085,35.7304,139.7092],theatre:[35.7288,139.7076,35.72975,139.7084],plaza:[35.729,139.70845,35.73055,139.7106],seibu:[35.7283,139.7106,35.7306,139.7115],parco:[35.7307,139.7106,35.7316,139.7115],sunshine:[35.7283,139.7178,35.7304,139.7212],eplaza:[35.72975,139.7115,35.73045,139.7121]},Ft=Object.fromEntries(Object.entries(__).map(([s,[t,e]])=>[s,on(t,e)])),hd=[{name:"\u5C71\u624B\u901A\u308A",width:16,nodes:["Y0","Y_RK","Y_KN","Y2","Y3","KUMANO"]},{name:"\u5DDD\u8D8A\u8857\u9053",width:14,nodes:["KUMANO","K1","AXIA","K3","K4"]},{name:"\u5287\u5834\u901A\u308A",width:12,nodes:["AXIA","G1","G2","G3","BUKURO","GOSA","W_SW","G5"]},{name:"\u90FD\u9053441\u53F7",width:12,nodes:["Y0","R441_2","R441_1","G5","S441","EDIT"]},{name:"\u7ACB\u6559\u901A\u308A",width:9,nodes:["Y_RK","R1","R2","R3","R4","TIPTOP","RK_E","GOSA"]},{name:"\u8981\u753A\u901A\u308A",width:11,nodes:["Y_KN","YUBIN","Q4","Q3","NIKKEN","Q2","Q1","QB","RK_E"]},{name:"\u897F\u53E3\u901A\u308A",width:9,nodes:["EPOS","W_S2","W_A","W_B","W_C","HOSEI","W_E1","W_E2","KUREYON","W_N","MIYAKE","BUKURO"]},{name:"\u897F\u53E3\u516C\u5712\u901A\u308A",width:9,nodes:["W_SW","W_S1","EPOS"]},{name:"\u6587\u5316\u901A\u308A",width:10,nodes:["K3","E_EN","E1","KUREYON"]},{name:"\u5357\u53E3\u901A\u308A",width:10,nodes:["W_S2","S_MID","EDIT"]}],zs=[{name:"\u5C71\u624B\u901A\u308A",lanes:2,laneW:3.25,median:2,shoulder:.5,nodes:["Y0","Y_RK","Y_KN","Y2","Y3","KUMANO"]},{name:"\u5DDD\u8D8A\u8857\u9053",lanes:2,laneW:3.25,median:3,shoulder:.5,highway:!0,nodes:["KUMANO","K1","AXIA","K3","K4"]},{name:"\u5287\u5834\u901A\u308A",lanes:2,laneW:3,median:0,shoulder:.5,smooth:!0,nodes:["AXIA","G1","G2","G3","BUKURO","GOSA","W_SW","G5"]},{name:"\u90FD\u9053441\u53F7",lanes:1,laneW:3.25,median:0,shoulder:2.75,smooth:!0,nodes:["Y0","T441_C","R441_2","T441_B","R441_1","T441_A","G5","S441","EDIT"]},{name:"\u7ACB\u6559\u901A\u308A",lanes:1,laneW:3,median:0,shoulder:1.5,smooth:!0,nodes:["Y_RK","R1","R2","R3","R4","TIPTOP","RK_E","GOSA"]},{name:"\u8981\u753A\u901A\u308A",lanes:1,laneW:3.25,median:0,shoulder:2.25,smooth:!0,nodes:["Y_KN","YUBIN","Q4","Q3","NIKKEN","Q2","Q1","QB","RK_E"]},{name:"\u897F\u53E3\u901A\u308A",lanes:1,laneW:3,median:0,shoulder:1.5,nodes:["EPOS","W_S2","W_A","W_B","W_C","HOSEI","W_E1","W_E2","KUREYON","W_N","MIYAKE","BUKURO"]},{name:"\u897F\u53E3\u516C\u5712\u901A\u308A",lanes:1,laneW:3,median:0,shoulder:1.5,nodes:["W_SW","W_S1","EPOS"]},{name:"\u6587\u5316\u901A\u308A",lanes:1,laneW:3,median:0,shoulder:2,nodes:["K3","E_EN","E1","KUREYON"]},{name:"\u5357\u53E3\u901A\u308A",lanes:1,laneW:3,median:0,shoulder:2,nodes:["W_S2","S_MID","EDIT"]},{name:"\u30ED\u30FC\u30BF\u30EA\u30FC\u5165\u53E3",lanes:1,laneW:3.5,median:0,shoulder:1,nodes:["S_MID","RT_W"]},{name:"\u897F\u53E3\u30ED\u30FC\u30BF\u30EA\u30FC",lanes:0,laneW:9,median:0,shoulder:.5,oneway:!0,nodes:["RT_W","RT_A0","RT_A1","RT_B0","RT_B1","RT_C0","RT_C1","RT_D0","RT_D1","RT_W"]},{name:"\u897F\u4E00\u756A\u8857",lanes:0,laneW:5,median:0,shoulder:.5,ai:!1,alley:!0,nodes:["NI_S","NI_N"]},{name:"\u30C9\u30F3\u30FB\u30AD\u30DB\u30FC\u30C6\u99D0\u8ECA\u5834",lanes:0,laneW:8,median:0,shoulder:.5,ai:!1,nodes:["DQ_E","DQ_P"]},{name:"ENEOS\u5165\u53E3",lanes:0,laneW:8,median:0,shoulder:.5,ai:!1,nodes:["GS_E","GS_P"]},{name:"\u5DDD\u8D8A\u8857\u9053\uFF08\u6771\u6C60\u888B\u65B9\u9762\uFF09",lanes:2,laneW:3.25,median:0,shoulder:.5,ai:!1,gate:!0,nodes:["K4","K5"]},{name:"\u30E1\u30C8\u30ED\u30DD\u30EA\u30BF\u30F3\u901A\u308A\uFF08\u6771\u6C60\u888B\u65B9\u9762\uFF09",lanes:1,laneW:3.25,median:0,shoulder:1.5,ai:!1,gate:!0,nodes:["EDIT","EDIT_OUT"]}],jn=[{name:"\u6625\u65E5\u901A\u308A",lanes:2,laneW:3.25,median:1.5,shoulder:.5,nodes:["GATE_K","V0","J1","KG1","EG_E","KG2","J2"]},{name:"\u660E\u6CBB\u901A\u308A",lanes:2,laneW:3,median:0,shoulder:1,smooth:!0,nodes:["MJ_S","MJ_1","GR0","MJ_2","MJ_3","MJ_4","V0"]},{name:"\u9996\u90FD\u9AD8\u4E0B\u306E\u9053\uFF08\u90FD\u9053435\u53F7\uFF09",lanes:2,laneW:3.25,median:3,shoulder:.5,highway:!0,nodes:["J4","T435_1","HELLO","T435_2","J5"]},{name:"\u9996\u90FD\u9AD8\u4E0B\u306E\u9053\uFF08\u5317\uFF09",lanes:2,laneW:3.25,median:3,shoulder:.5,nodes:["J6","S60E","N1","J1"]},{name:"\u4E0D\u5FCD\u901A\u308A",lanes:2,laneW:3,median:0,shoulder:.5,smooth:!0,nodes:["J3","SB1","SB2","J4"]},{name:"\u5927\u585A\u306E\u901A\u308A",lanes:1,laneW:3.25,median:0,shoulder:1.5,nodes:["J2","SN1","ES_E","J3"]},{name:"\u30B0\u30EA\u30FC\u30F3\u5927\u901A\u308A",lanes:2,laneW:3.25,median:4,shoulder:.5,green:!0,nodes:["GR0","J6","J5"]},{name:"\u30B5\u30F3\u30B7\u30E3\u30A4\u30F360\u901A\u308A",lanes:1,laneW:3,median:0,shoulder:1.5,neon:!0,nodes:["MJ_2","S60M","S60E"]},{name:"\u90FD\u96FB\u6CBF\u3044\u306E\u9053\uFF08\u5357\u6C60\u888B\uFF09",lanes:1,laneW:3,median:0,shoulder:1.6,smooth:!0,nodes:["MJ_S","MS1","HOSHINO","MS2","MS3","T435_2"]},{name:"\u30B5\u30FC\u30D3\u30B9\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\u5165\u53E3",lanes:0,laneW:8,median:0,shoulder:.5,ai:!1,nodes:["EG_E","EG_P"]},{name:"\u30B7\u30E7\u30C3\u30D7\u99D0\u8ECA\u5834",lanes:0,laneW:8,median:0,shoulder:.5,ai:!1,nodes:["ES_E","ES_P"]},{name:"\u6625\u65E5\u901A\u308A\uFF08\u897F\u6C60\u888B\u65B9\u9762\uFF09",lanes:2,laneW:3.25,median:0,shoulder:.5,ai:!1,gate:!0,nodes:["GATE_K","GK_OUT"]},{name:"\u660E\u6CBB\u901A\u308A\uFF08\u897F\u6C60\u888B\u65B9\u9762\uFF09",lanes:2,laneW:3,median:0,shoulder:1,ai:!1,gate:!0,nodes:["MJ_S","MJ_OUT"]}];for(let s of[...zs,...jn])s.width=s.lanes>0?s.lanes*2*s.laneW+s.median+s.shoulder*2:s.laneW+s.shoulder*2,s.ai===void 0&&(s.ai=!0);zs.forEach(s=>s.area="west");jn.forEach(s=>s.area="east");var y_=zs;for(let s of jn)!s.gate&&s.ai&&hd.push({name:s.name,width:s.width,nodes:[...s.nodes]});var Jl=[{id:"shop",type:"shop",name:"\u30C9\u30F3\u30FB\u30AD\u30DB\u30FC\u30C6 \u5317\u6C60\u888B\u5E97\uFF08\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30B7\u30E7\u30C3\u30D7\uFF09",short:"TUNE SHOP",node:"DQ_P",from:"DQ_E",offset:[0,0]},{id:"gs",type:"gs",name:"ENEOS \u30BB\u30EB\u30D5\u6C60\u888BSS\uFF08\u30BB\u30FC\u30D6\u30DD\u30A4\u30F3\u30C8\uFF09",short:"GS / SAVE",node:"GS_P",from:"GS_E",offset:[0,0]}],ud=[{id:"shop_e",type:"shop",name:"\u5927\u585A\u30E2\u30FC\u30BF\u30FC\u30B9\uFF08\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30B7\u30E7\u30C3\u30D7\u30FB\u67B6\u7A7A\uFF09",short:"TUNE SHOP",node:"ES_P",from:"ES_E",offset:[0,0]},{id:"gs_e",type:"gs",name:"\u6771\u6C60\u888B\u30B5\u30FC\u30D3\u30B9\u30B9\u30C6\u30FC\u30B7\u30E7\u30F3\uFF08\u30BB\u30FC\u30D6\u30DD\u30A4\u30F3\u30C8\u30FB\u67B6\u7A7A\uFF09",short:"GS / SAVE",node:"EG_P",from:"EG_E",offset:[0,0]}],v_=Jl,Rr=[{id:"speedway",name:"\u897F\u6C60\u888B\u30B9\u30D4\u30FC\u30C9\u30A6\u30A7\u30A4",laps:1,radius:22,nodes:["Y_RK","Y_KN","Y2","Y3","KUMANO","K1","AXIA","G1","G2","G3","BUKURO","GOSA","W_SW","G5","R441_1","R441_2","Y0"],desc:"\u5C71\u624B\u901A\u308A\u30FB\u5DDD\u8D8A\u8857\u9053\u30FB\u5287\u5834\u901A\u308A\u30FB441\u53F7\u3092\u5468\u56DE\u3059\u308B\u9AD8\u901F\u30B3\u30FC\u30B9"},{id:"wgp",name:"\u6C60\u888BWGP",laps:3,radius:7,nodes:["EPOS","W_S2","W_A","W_B","W_C","HOSEI","W_E1","W_E2","KUREYON","W_N","MIYAKE","BUKURO","GOSA","W_SW","W_S1"],desc:"\u6C60\u888B\u99C5\u897F\u53E3\u306E\u72ED\u3044\u8DEF\u5730\u3092\u99C6\u3051\u629C\u3051\u308B\u30C6\u30AF\u30CB\u30AB\u30EB\u30B3\u30FC\u30B9"},{id:"rikkyo",name:"\u7ACB\u6559\u901A\u308A\u30B5\u30FC\u30AD\u30C3\u30C8",laps:2,radius:12,nodes:["R3","R4","TIPTOP","RK_E","QB","Q1","Q2","NIKKEN","Q3","Q4","YUBIN","Y_KN","Y_RK","R1","R2"],desc:"\u7ACB\u6559\u901A\u308A\u3068\u8981\u753A\u901A\u308A\u3092\u7D50\u3076\u3001\u30D8\u30A2\u30D4\u30F3\u304C\u540D\u7269\u306E\u4E2D\u901F\u30B3\u30FC\u30B9"},{id:"higashi",area:"east",name:"\u6771\u6C60\u888B\u30ED\u30F3\u30B0\u30B3\u30FC\u30B9",laps:1,radius:18,nodes:["KG2","J2","SN1","ES_E","J3","SB1","SB2","J4","T435_1","HELLO","T435_2","J5","J6","S60E","N1","J1","KG1","EG_E"],desc:"\u6625\u65E5\u901A\u308A\u30FB\u5927\u585A\u30FB\u4E0D\u5FCD\u901A\u308A\u30FB\u9996\u90FD\u9AD8\u4E0B\u3092\u5DE1\u308B\u6771\u6C60\u888B\u306E\u9AD8\u901F\u30ED\u30F3\u30B0\u30B3\u30FC\u30B9"},{id:"sunshine",area:"east",name:"\u30B5\u30F3\u30B7\u30E3\u30A4\u30F3\u30B5\u30FC\u30AD\u30C3\u30C8",laps:2,radius:9,nodes:["S60M","S60E","J6","GR0","MJ_2"],desc:"\u30B5\u30F3\u30B7\u30E3\u30A4\u30F360\u901A\u308A\u30FB\u9996\u90FD\u9AD8\u4E0B\u30FB\u30B0\u30EA\u30FC\u30F3\u5927\u901A\u308A\u30FB\u6771\u53E3\u306E\u660E\u6CBB\u901A\u308A\u3092\u56DE\u308B\u30B7\u30E7\u30FC\u30C8\u30B3\u30FC\u30B9"},{id:"minami",area:"east",name:"\u5357\u6C60\u888B\u30EB\u30FC\u30D7",laps:2,radius:12,nodes:["MS2","MS3","T435_2","J5","J6","GR0","MJ_1","MJ_S","MS1","HOSHINO"],desc:"\u90FD\u96FB\u6CBF\u3044\u306E\u9053\u304B\u3089\u9996\u90FD\u9AD8\u4E0B\u3001\u30B0\u30EA\u30FC\u30F3\u5927\u901A\u308A\u3001\u660E\u6CBB\u901A\u308A\u3092\u5DE1\u308B\u4E2D\u901F\u30B3\u30FC\u30B9"}];for(let s of Rr)s.area||(s.area="west");var gi=Rr.flatMap(s=>[{key:`${s.id}_f`,course:s,area:s.area,reverse:!1,name:`${s.name}\uFF08\u9806\u8D70\uFF09`},{key:`${s.id}_r`,course:s,area:s.area,reverse:!0,name:`${s.name}\uFF08\u9006\u8D70\uFF09`}]);function Ql(s,t){for(let e of hd)for(let n=0;n<e.nodes.length-1;n++)if(e.nodes[n]===s&&e.nodes[n+1]===t||e.nodes[n]===t&&e.nodes[n+1]===s)return e.width;return 10}var M_={node:"GS_E",heading:Math.PI},Me={west:{id:"west",name:"\u897F\u6C60\u888B",roads:zs,pois:Jl,start:{node:"GS_E",heading:Math.PI,back:16},gates:[{node:"K5",from:"K4",to:"east",label:"\u6771\u6C60\u888B\u30A8\u30EA\u30A2",arrive:{node:"GATE_K",toward:"V0"}},{node:"EDIT_OUT",from:"EDIT",to:"east",label:"\u6771\u6C60\u888B\u30A8\u30EA\u30A2",arrive:{node:"MJ_S",toward:"MJ_1"}}]},east:{id:"east",name:"\u6771\u6C60\u888B",roads:jn,pois:ud,start:{node:"EG_E",heading:0,back:0,toward:"KG1"},gates:[{node:"GK_OUT",from:"GATE_K",to:"west",label:"\u897F\u6C60\u888B\u30A8\u30EA\u30A2",arrive:{node:"K4",toward:"K3"}},{node:"MJ_OUT",from:"MJ_S",to:"west",label:"\u897F\u6C60\u888B\u30A8\u30EA\u30A2",arrive:{node:"EDIT",toward:"S441"}}]}},dd=[...zs,...jn];function fn(s){return s.area||s.course?.area||"west"}function zn(s,t){for(let e of dd)for(let n=0;n<e.nodes.length-1;n++)if(e.nodes[n]===s&&e.nodes[n+1]===t||e.nodes[n]===t&&e.nodes[n+1]===s)return e;return null}function Gi(s){return!s||s.lanes===0?0:s.median/2+s.laneW*(s.lanes-.5)}function We(s){let t=s.nodes.map(i=>Ft[i]);if(!s.smooth||t.length<3)return t.map(i=>({x:i.x,z:i.z}));let e=[];for(let i=0;i<t.length-1;i++){let r=t[Math.max(0,i-1)],o=t[i],a=t[i+1],c=t[Math.min(t.length-1,i+2)],l=(g,p)=>Math.max(.001,Math.sqrt(Math.hypot(p.x-g.x,p.z-g.z))),h=0,u=h+l(r,o),d=u+l(o,a),f=d+l(a,c),m=Math.hypot(a.x-o.x,a.z-o.z),x=Math.max(1,Math.ceil(m/6));for(let g=0;g<x;g++){let p=u+(d-u)*g/x,_=(C,b,M,I)=>({x:(C.x*(I-p)+b.x*(p-M))/(I-M),z:(C.z*(I-p)+b.z*(p-M))/(I-M)}),v=_(r,o,h,u),y=_(o,a,u,d),E=_(a,c,d,f),A=_(v,y,h,d),S=_(y,E,u,f);e.push(_(A,S,u,d))}}let n=t[t.length-1];return e.push({x:n.x,z:n.z}),e}function fd(s,t){let e=Ft[s],n=Ft[t];return Math.atan2(n.x-e.x,n.z-e.z)}function jl(s,t,e=0,n=null){let i=Ft[s],r=n??fd(s,t),o=Math.sin(r),a=Math.cos(r),c=t?zn(s,t):null,l=c?Gi(c):0;return{x:i.x-o*e+Math.cos(r)*l,z:i.z-a*e-Math.sin(r)*l,h:r}}function Vi(s){let t=Me[s].start;if(t.toward)return{...jl(t.node,t.toward,t.back||0),area:s};let e=Ft[t.node],n=Math.sin(t.heading),i=Math.cos(t.heading);return{x:e.x-n*(t.back||0)-2.5*Math.cos(t.heading),z:e.z-i*(t.back||0)+2.5*Math.sin(t.heading),h:t.heading,area:s}}function Cr(s){return{...jl(s.arrive.node,s.arrive.toward,-6),area:s.to}}var Ir=s=>Me[s||"west"].roads,na=class{constructor(t,e=24,n=[]){this.segs=t,this.obs=n,this.cell=e,this.grid=this.makeGrid(t,8),this.ogrid=this.makeGrid(n,2)}makeGrid(t,e){let n=this.cell,i=new Map;for(let r=0;r<t.length;r++){let o=t[r],a=o.hw+e,c=Math.floor((Math.min(o.ax,o.bx)-a)/n),l=Math.floor((Math.max(o.ax,o.bx)+a)/n),h=Math.floor((Math.min(o.az,o.bz)-a)/n),u=Math.floor((Math.max(o.az,o.bz)+a)/n);for(let d=c;d<=l;d++)for(let f=h;f<=u;f++){let m=d*73856093^f*19349663,x=i.get(m);x||i.set(m,x=[]),x.push(r)}}return i}query(t,e){let n=Math.floor(t/this.cell)*73856093^Math.floor(e/this.cell)*19349663,i=this.grid.get(n),r=1e9,o=0,a=0;if(!i)return{d:50,nx:0,nz:0,far:!0};for(let l of i){let h=this.segs[l],u=h.bx-h.ax,d=h.bz-h.az,f=u*u+d*d,m=f>0?((t-h.ax)*u+(e-h.az)*d)/f:0;m=m<0?0:m>1?1:m;let x=h.ax+u*m,g=h.az+d*m,p=t-x,_=e-g,v=Math.hypot(p,_),y=v-h.hw;y<r&&(r=y,v>1e-6?(o=p/v,a=_/v):(o=0,a=0))}let c=this.ogrid.get(n);if(c)for(let l of c){let h=this.obs[l],u=h.bx-h.ax,d=h.bz-h.az,f=u*u+d*d,m=f>0?((t-h.ax)*u+(e-h.az)*d)/f:0;m=m<0?0:m>1?1:m;let x=t-(h.ax+u*m),g=e-(h.az+d*m),p=Math.hypot(x,g),_=h.hw-p;_>r&&p>1e-6&&(r=_,o=-x/p,a=-g/p)}return{d:r,nx:o,nz:a,far:!1}}};function gd(s,t){let e=0;for(let[n,i]of s.corners()){let r=t.query(n,i);if(r.d>0){if(r.far)continue;e+=s.wallImpulse(n,i,-r.nx,-r.nz,Math.min(r.d,1.5))}}return e}function sh(s="west"){let t=Ir(s),e={},n=new Set;for(let i of t)i.nodes.forEach((r,o)=>{e[r]=(e[r]||0)+(o===0||o===i.nodes.length-1?1:2),(o===0||o===i.nodes.length-1)&&n.add(r)});return Object.keys(e).filter(i=>e[i]>=3||n.has(i))}var rh=30;function oh(s="west"){let t=Ir(s),e=sh(s).map(i=>Ft[i]),n=[];for(let i of t){if(!i.median)continue;let r=We(i);for(let o=0;o<r.length-1;o++){let a=r[o],c=r[o+1],l=Math.hypot(c.x-a.x,c.z-a.z),h=Math.max(1,Math.ceil(l/4));for(let u=0;u<h;u++){let d={x:a.x+(c.x-a.x)*u/h,z:a.z+(c.z-a.z)*u/h},f={x:a.x+(c.x-a.x)*(u+1)/h,z:a.z+(c.z-a.z)*(u+1)/h},m=(d.x+f.x)/2,x=(d.z+f.z)/2;e.some(g=>Math.hypot(g.x-m,g.z-x)<rh)||n.push({ax:d.x,az:d.z,bx:f.x,bz:f.z,hw:i.median/2,road:i})}}}return n}function ah(s="west"){let t=Ir(s),e=[];for(let n of t){if(n.width>=12)continue;let i=We(n);for(let r=1;r<i.length-1;r++){let o=i[r-1],a=i[r],c=i[r+1],l=a.x-o.x,h=a.z-o.z,u=c.x-a.x,d=c.z-a.z;(l*u+h*d)/(Math.hypot(l,h)*Math.hypot(u,d)||1)>-.35||e.push({x:a.x,z:a.z,r:n.width/2+2.8})}}return e}function ia(s="west"){let t=Ir(s),e=[];for(let n of ah(s))e.push({ax:n.x,az:n.z,bx:n.x,bz:n.z,hw:n.r,road:"corner"});for(let n of t){let i=We(n);for(let r=0;r<i.length-1;r++)e.push({ax:i[r].x,az:i[r].z,bx:i[r+1].x,bz:i[r+1].z,hw:n.width/2,road:n.name})}return new na(e,24,oh(s))}function xd(s="west"){let t=Ir(s),e={};for(let n of t)if(n.ai)for(let i=0;i<n.nodes.length-1;i++){let r=n.nodes[i],o=n.nodes[i+1];(e[r]||(e[r]=[])).push({to:o,w:n.width}),n.oneway?e[o]||(e[o]=[]):(e[o]||(e[o]=[])).push({to:r,w:n.width})}return e}var pd=.3,eh=14,md=14,b_=2,w_=4.8,ih=class{constructor(t){let e=t.course,n=[...e.nodes];t.reverse&&(n=[n[0],...n.slice(1).reverse()]),this.ids=n,this.name=t.name,this.laps=e.laps;let i=n.length,r=n.map(f=>Ft[f]),o=n.map((f,m)=>Ql(f,n[(m+1)%i])),a=[],c=2,l=[];for(let f=0;f<i;f++){let m=r[(f-1+i)%i],x=r[f],g=r[(f+1)%i],p=x.x-m.x,_=x.z-m.z,v=Math.hypot(p,_),y=g.x-x.x,E=g.z-x.z,A=Math.hypot(y,E),S=[p/v,_/v],C=[y/A,E/A],b=Math.max(-1,Math.min(1,S[0]*C[0]+S[1]*C[1])),M=Math.acos(b);if(f===0||M<.02){l.push({t:0,u1:S,u2:C,th:0});continue}let I=e.radius*Math.tan(M/2);I=Math.min(I,.48*v,.48*A),l.push({t:I,u1:S,u2:C,th:M,right:S[0]*C[1]-S[1]*C[0]>0,tight:M>b_&&I/Math.tan(M/2)<6})}for(let f=0;f<i;f++){let m=r[f],x=r[(f+1)%i],g=l[f],p=l[(f+1)%i],_=o[(f-1+i)%i],v=o[f];if(g.t>0){let M={x:m.x-g.u1[0]*g.t,z:m.z-g.u1[1]*g.t},I={x:m.x+g.u2[0]*g.t,z:m.z+g.u2[1]*g.t},N=g.t*2,F=Math.max(2,Math.ceil(N/c),Math.ceil(g.th/.08));for(let B=0;B<F;B++){let G=B/F,k=(1-G)*(1-G)*M.x+2*(1-G)*G*m.x+G*G*I.x,tt=(1-G)*(1-G)*M.z+2*(1-G)*G*m.z+G*G*I.z;a.push({x:k,z:tt,w:_+(v-_)*G,corner:f})}}let y=m.x+g.u2[0]*g.t,E=m.z+g.u2[1]*g.t,A=x.x-p.u1[0]*p.t,S=x.z-p.u1[1]*p.t,C=Math.hypot(A-y,S-E),b=Math.max(1,Math.ceil(C/c));for(let M=0;M<b;M++){let I=M/b;a.push({x:y+(A-y)*I,z:E+(S-E)*I,w:v,corner:M===0&&g.th>0?f:-1})}}this.n=a.length,this.x=new Float32Array(this.n),this.z=new Float32Array(this.n),this.hw=new Float32Array(this.n),this.s=new Float32Array(this.n),this.tx=new Float32Array(this.n),this.tz=new Float32Array(this.n);let h=0;for(let f=0;f<this.n;f++)this.x[f]=a[f].x,this.z[f]=a[f].z,this.hw[f]=a[f].w/2,f>0&&(h+=Math.hypot(a[f].x-a[f-1].x,a[f].z-a[f-1].z)),this.s[f]=h;this.length=h+Math.hypot(a[0].x-a[this.n-1].x,a[0].z-a[this.n-1].z);let u={};for(let f=0;f<this.n;f++){let m=a[f].corner;if(m==null||m<0)continue;let x=l[m].th;if(x<pd)continue;let g=u[m]||(u[m]={s0:this.s[f],s1:this.s[f],extra:3+2*Math.min(1,(x-pd)/1.4),th:x,right:l[m].right,tight:l[m].tight});g.s1=this.s[f]}this.corners=Object.values(u),this.extra=new Float32Array(this.n);for(let f=0;f<this.n;f++){let m=0;for(let x of this.corners){let g=0,p=this.s[f],_=x.s0-p,v=p-x.s1;_>0?g=Math.min(_,this.length-_):v>0&&(g=Math.min(v,this.length-v));let y=g<=eh?1:g>=eh+md?0:.5+.5*Math.cos((g-eh)/md*Math.PI);m=Math.max(m,x.extra*y)}this.extra[f]=m,this.hw[f]+=m/2}for(let f=0;f<this.n;f++){let m=(f-1+this.n)%this.n,x=(f+1)%this.n,g=this.x[x]-this.x[m],p=this.z[x]-this.z[m],_=Math.hypot(g,p)||1;this.tx[f]=g/_,this.tz[f]=p/_}let d=[];for(let f=0;f<this.n;f++){let m=(f+1)%this.n;d.push({ax:this.x[f],az:this.z[f],bx:this.x[m],bz:this.z[m],hw:Math.min(this.hw[f],this.hw[m])})}this.corridor=new na(d,20),this.sectors=[0,this.length/3,this.length*2/3],this.buildRacingLine()}normal(t){return[-this.tz[t],this.tx[t]]}project(t,e,n=-1){let i=-1,r=1e18,o=(x,g)=>{for(let p=x;p<=g;p++){let _=(p%this.n+this.n)%this.n,v=t-this.x[_],y=e-this.z[_],E=v*v+y*y;E<r&&(r=E,i=_)}};n>=0?(o(n-30,n+60),Math.sqrt(r)>this.hw[i]+12&&(r=1e18,o(0,this.n-1))):o(0,this.n-1);let a=i,c=t-this.x[a],l=e-this.z[a],h=c*this.tx[a]+l*this.tz[a],[u,d]=this.normal(a),f=c*u+l*d,m=this.s[a]+h;return m<0&&(m+=this.length),m>=this.length&&(m-=this.length),{i:a,s:m,lat:f,dist:Math.sqrt(r)}}posAt(t,e=0){t=(t%this.length+this.length)%this.length;let n=0,i=this.n-1;for(;n<i;){let f=n+i+1>>1;this.s[f]<=t?n=f:i=f-1}let r=n,o=(r+1)%this.n,a=(o===0?this.length:this.s[o])-this.s[r],c=a>0?(t-this.s[r])/a:0,l=this.x[r]+(this.x[o]-this.x[r])*c,h=this.z[r]+(this.z[o]-this.z[r])*c,[u,d]=this.normal(r);return{x:l+u*e,z:h+d*e,h:Math.atan2(this.tx[r],this.tz[r]),i:r}}buildRacingLine(){let t=this.n,e=new Float32Array(t),n=new Float32Array(t),i=new Float32Array(t),r=[];for(let c=0;c<t;c++)r.push(this.normal(c));let o=2.2,a=new Uint8Array(t);for(let c of this.corners||[]){if(!c.tight)continue;let l=c.right?-1:1;for(let h=0;h<t;h++){let u=this.s[h];u>=c.s0-8&&u<=c.s1+8&&(a[h]=1,e[h]=l*Math.max(0,this.hw[h]-2.5))}}for(let c of[12,6,3])for(let l=0;l<120;l++){for(let h=0;h<t;h++)n[h]=this.x[h]+r[h][0]*e[h],i[h]=this.z[h]+r[h][1]*e[h];for(let h=0;h<t;h++){if(a[h])continue;let u=(h-c+t)%t,d=(h+c)%t,f=(n[u]+n[d])/2,m=(i[u]+i[d])/2,x=(f-this.x[h])*r[h][0]+(m-this.z[h])*r[h][1],g=Math.max(0,this.hw[h]-o);e[h]+=(x-e[h])*.5,e[h]=Math.max(-g,Math.min(g,e[h]))}}this.lineOff=e,this.lx=new Float32Array(t),this.lz=new Float32Array(t);for(let c=0;c<t;c++)this.lx[c]=this.x[c]+r[c][0]*e[c],this.lz[c]=this.z[c]+r[c][1]*e[c];this.lseg=new Float32Array(t);for(let c=0;c<t;c++){let l=(c+1)%t;this.lseg[c]=Math.hypot(this.lx[l]-this.lx[c],this.lz[l]-this.lz[c])}this.curv=new Float32Array(t);for(let c=0;c<t;c++){let l=c,h=c,u=0,d=0;for(;u<7&&l!==(c+1)%t;)l=(l-1+t)%t,u+=this.lseg[l];for(;d<7&&h!==(c-1+t)%t;)d+=this.lseg[h],h=(h+1)%t;let f=this.lx[c]-this.lx[l],m=this.lz[c]-this.lz[l],x=this.lx[h]-this.lx[c],g=this.lz[h]-this.lz[c],p=Math.hypot(f,m),_=Math.hypot(x,g),v=f*g-m*x,y=Math.atan2(v,f*x+m*g);this.curv[c]=y/((p+_)/2||1)}}speedProfile(t,e){let n=this.n,i=new Float32Array(n),r=t.mu*(.74+.2*e),o=.5*1.2*t.area*(t.clF+t.clR)/t.mass;for(let c=0;c<n;c++){let h=Math.abs(this.curv[c])-r*o;i[c]=h<=1e-5?90:Math.min(90,Math.sqrt(r*9.81/h))}for(let c of this.corners||[]){if(!c.tight)continue;let l=Math.sqrt(r*9.81*w_);for(let h=0;h<n;h++)this.s[h]>=c.s0-4&&this.s[h]<=c.s1+4&&(i[h]=Math.min(i[h],l))}let a=r*9.81*(.62+.25*e)*Math.min(1.25,t.brakeTorque/(t.mass*3.4));for(let c=0;c<2;c++)for(let l=n-1;l>=0;l--){let h=l,u=(l+1)%n,d=Math.hypot(this.lx[u]-this.lx[h],this.lz[u]-this.lz[h]);i[h]=Math.min(i[h],Math.sqrt(i[u]*i[u]+2*a*d))}return i}},nh={};function ch(s){return nh[s.key]||(nh[s.key]=new ih(s)),nh[s.key]}function Fe(s,t,e=null){let n=1e9;for(let i of gi){if(e&&fn(i)!==e)continue;let r=ch(i).corridor.query(s,t);!r.far&&r.d<n&&(n=r.d)}return n}function xi(s,t,e,n,i=0,r=2.5,o=null){let a=Math.cos(i),c=Math.sin(i),l=4;for(let h=0;h<=l;h++)for(let u=0;u<=l;u++){let d=(h/l-.5)*e,f=(u/l-.5)*n,m=s+d*a+f*c,x=t-d*c+f*a;if(Fe(m,x,o)<r)return!1}return!0}var E_={west:{highway:["KUMANO","K1","AXIA","K3","K4"],highwayAvoid:["KUMANO","AXIA","K3","K1"],highwayWidth:17,bridges:[["\u5C71\u624B\u901A\u308A","Y_RK","Y_KN",.5],["\u5287\u5834\u901A\u308A","G1","G2",.55],["\u8981\u753A\u901A\u308A","Q4","Q3",.4]]},east:{highway:["J4","T435_1","HELLO","T435_2","J5","J6","S60E","N1","J1","V0","GATE_K"],highwayAvoid:["J4","T435_2","J5","J6","S60E","J1","V0","GATE_K"],highwayWidth:17,bridges:[["\u6625\u65E5\u901A\u308A","KG1","EG_E",.45],["\u4E0D\u5FCD\u901A\u308A","SB1","SB2",.5],["\u30B0\u30EA\u30FC\u30F3\u5927\u901A\u308A","GR0","J6",.4]]}};function lh(s){let t=[0];for(let e=1;e<s.length;e++)t.push(t[e-1]+Math.hypot(s[e].x-s[e-1].x,s[e].z-s[e-1].z));return t}function _i(s,t,e){e=Math.max(0,Math.min(t[t.length-1],e));let n=0;for(;n<t.length-2&&t[n+1]<e;)n++;let i=s[n],r=s[n+1],o=t[n+1]-t[n]||1,a=(e-t[n])/o,c=(r.x-i.x)/o,l=(r.z-i.z)/o;return{x:i.x+(r.x-i.x)*a,z:i.z+(r.z-i.z)*a,ux:c,uz:l,rx:-l,rz:c}}var yi=class{constructor(){this.pos=[],this.uv=[],this.idx=[]}add(t,e,n,i,r,o,a=.04){let c=-i,l=n,h=r/2,u=o/2,d=this.pos.length/3,f=[[-h,-u,0,0],[h,-u,1,0],[-h,u,0,1],[h,u,1,1]];for(let[m,x,g,p]of f)this.pos.push(t+n*m+c*x,a,e+i*m+l*x),this.uv.push(g,p);this.idx.push(d,d+2,d+1,d+1,d+2,d+3)}mesh(t){let e=new we;return e.setAttribute("position",new ee(this.pos,3)),e.setAttribute("uv",new ee(this.uv,2)),e.setIndex(this.idx),e.computeVertexNormals(),new Y(e,t)}};function _d(s){let t=document.createElement("canvas");t.width=64,t.height=256;let e=t.getContext("2d");e.fillStyle="#fff",e.strokeStyle="#fff",e.lineWidth=12,s==="right"?(e.beginPath(),e.moveTo(26,250),e.lineTo(26,110),e.quadraticCurveTo(26,70,52,62),e.stroke(),e.beginPath(),e.moveTo(64,62),e.lineTo(40,40),e.lineTo(40,84),e.closePath(),e.fill()):(e.beginPath(),e.moveTo(40,250),e.lineTo(40,60),e.stroke(),e.beginPath(),e.moveTo(40,4),e.lineTo(18,62),e.lineTo(62,62),e.closePath(),e.fill(),e.beginPath(),e.moveTo(40,150),e.quadraticCurveTo(14,140,12,100),e.stroke(),e.beginPath(),e.moveTo(12,70),e.lineTo(0,102),e.lineTo(24,102),e.closePath(),e.fill());let n=new Un(t);return n.colorSpace=be,n}var sa=class{constructor(t,e="west"){this.area=e,this.cfg=E_[e];let n=this.roads=Me[e].roads;this.scene=t,this.paint=new te,this.always=new te,this.signals=[],t.add(this.paint,this.always),this.junctions=sh(e),this.jr={};for(let i of this.junctions){let r=0;for(let o of n)o.nodes.includes(i)&&(r=Math.max(r,o.width/2));this.jr[i]=r}this.buildLines(),this.buildMedians(),this.buildApproaches(),this.buildHighway(),this.buildFootbridges()}nearJunction(t,e,n=0){for(let i of this.junctions){let r=Ft[i];if(Math.hypot(r.x-t,r.z-e)<this.jr[i]+n)return i}return null}buildLines(){let t=new yi,e=new yi,n=1;for(let i of this.roads){if(i.lanes===0)continue;let r=We(i),o=lh(r),a=o[o.length-1],c=i.median/2+i.lanes*i.laneW;for(let l=0;l<a;l+=n){let h=_i(r,o,l+n/2);if(this.nearJunction(h.x,h.z,1))continue;let u=i.median>0&&this.withinJ(h.x,h.z,rh+1),d=(f,m,x=.15)=>f.add(h.x+h.rx*m,h.z+h.rz*m,h.ux,h.uz,n+.02,x);d(t,c+.08),d(t,-c-.08),i.median>0?u&&(d(e,.12),d(e,-.12)):i.lanes>=2?(d(e,.12),d(e,-.12)):l%9<5&&d(t,0,.15);for(let f=1;f<i.lanes;f++){let m=i.median/2+i.laneW*f;(u||l%15<6)&&(d(t,m,.12),d(t,-m,.12))}}}this.paint.add(t.mesh(new Wt({color:14605522}))),this.paint.add(e.mesh(new Wt({color:15251242})))}withinJ(t,e,n){return this.junctions.some(i=>Math.hypot(Ft[i].x-t,Ft[i].z-e)<n)}buildMedians(){let t=oh(this.area),e=new ft(1,.22,1).translate(0,.11,0),n=new ft(1,.6,1).translate(0,.52,0),i=new un(e,new Et({color:13225170,emissive:3815994}),t.length),r=new un(n,new Et({color:3107381,emissive:793100}),t.length),o=new jt,a=new je,c=new Be,l=new L,h=new L;t.forEach((u,d)=>{let f=Math.hypot(u.bx-u.ax,u.bz-u.az);c.set(0,Math.atan2(u.bx-u.ax,u.bz-u.az),0),a.setFromEuler(c),o.compose(l.set((u.ax+u.bx)/2,0,(u.az+u.bz)/2),a,h.set(u.hw*2,1,f+.05)),i.setMatrixAt(d,o),o.compose(l,a,h.set(u.hw*2-.5,1,f)),r.setMatrixAt(d,o)}),this.paint.add(i,r)}buildApproaches(){let t=new yi,e=new yi,n=new yi,i=new yi,r=[0,1].map(()=>({g:new Wt({color:801320}),y:new Wt({color:3811848}),r:new Wt({color:3803658})}));this.sigMats=r;let o=new ft(1.3,.42,.3),a=new Jn(.15,14),c=new Et({color:2829875}),l=new Et({color:9080727});for(let h of this.junctions){let u=Ft[h],d=this.jr[h],f=[];for(let p of this.roads){if(p.nodes.indexOf(h)<0)continue;let v=We(p),y=0,E=1e9;v.forEach((A,S)=>{let C=Math.hypot(A.x-u.x,A.z-u.z);C<E&&(E=C,y=S)});for(let A of[-1,1]){let S=y+A;if(S<0||S>=v.length)continue;let C=[];for(let b=y;b>=0&&b<v.length;b+=A)C.push(v[b]);C.length<2||f.push({r:p,sub:C,S:lh(C)})}}let m=f.length,x=m>=3&&f.some(p=>p.r.lanes>0),g=f[0]?_i(f[0].sub,f[0].S,4):null;for(let p of f){let _=p.r;if(_.lanes===0||m<2)continue;let v=p.S[p.S.length-1],y=d+2;if(v<y+8)continue;let E=_i(p.sub,p.S,y),A=_.width/2;for(let M=-A+.6;M<=A-.6;M+=.9)t.add(E.x+E.rx*M,E.z+E.rz*M,E.ux,E.uz,3.2,.45);let S=_i(p.sub,p.S,y+3.4),C=_.median/2,b=_.median/2+_.lanes*_.laneW;e.add(S.x+S.rx*(C+b)/2,S.z+S.rz*(C+b)/2,S.rx,S.rz,b-C,.45);for(let M of[9,20]){if(v<y+M+6)continue;let I=_i(p.sub,p.S,y+M);for(let N=0;N<_.lanes;N++){let F=_.median/2+_.laneW*(N+.5);(_.median>0&&N===0?n:i).add(I.x+I.rx*F,I.z+I.rz*F,-I.ux,-I.uz,5,1.25,.045)}}if(x){let M=g&&Math.abs(E.ux*g.ux+E.uz*g.uz)>.7?0:1,I=r[M],N=u.x-E.ux*(d+1.2),F=u.z-E.uz*(d+1.2),B=A+1.6,G=N+E.rx*B,k=F+E.rz*B,tt=new Y(new ze(.11,.13,6,8).translate(0,3,0),l);tt.position.set(G,0,k);let X=Math.min(B-.5,_.median/2+_.lanes*_.laneW*.6+1.2),ot=new Y(new ft(.1,.1,X),l),xt=Math.atan2(-E.rx,-E.rz);ot.position.set(G-E.rx*X/2,5.6,k-E.rz*X/2),ot.rotation.y=xt;let pt=new te;pt.position.set(G-E.rx*(X-.4),5.6,k-E.rz*(X-.4)),pt.rotation.y=Math.atan2(E.ux,E.uz),pt.add(new Y(o,c)),[["g",-.42],["y",0],["r",.42]].forEach(([Gt,St])=>{let V=new Y(a,I[Gt]);V.position.set(St,0,.16),pt.add(V)}),this.paint.add(tt,ot,pt)}}}this.paint.add(t.mesh(new Wt({color:15131866}))),this.paint.add(e.mesh(new Wt({color:15131866}))),this.paint.add(n.mesh(new Wt({map:_d("right"),transparent:!0,depthWrite:!1}))),this.paint.add(i.mesh(new Wt({map:_d("straight"),transparent:!0,depthWrite:!1})))}buildHighway(){let t={width:this.cfg.highwayWidth},e=this.cfg.highway.map(p=>({x:Ft[p].x,z:Ft[p].z})),n=(p,_,v)=>{let y=Math.hypot(p.x-_.x,p.z-_.z);return{x:p.x+(p.x-_.x)/y*v,z:p.z+(p.z-_.z)/y*v}};e=[n(e[0],e[1],320),...e,n(e[e.length-1],e[e.length-2],320)];let i=lh(e),r=i[i.length-1],o=10,a=7.6,c=[];for(let p=0;p<=r;p+=4)c.push(_i(e,i,p));let l=new Et({color:7172731,side:Se}),h=new Et({color:3882565}),u=(p,_,v)=>{let y=[],E=[];c.forEach((S,C)=>{if(y.push(S.x-S.rx*_,p,S.z-S.rz*_,S.x+S.rx*_,p,S.z+S.rz*_),C>0){let b=(C-1)*2;E.push(b,b+1,b+2,b+1,b+3,b+2)}});let A=new we;return A.setAttribute("position",new ee(y,3)),A.setIndex(E),A.computeVertexNormals(),new Y(A,v)};this.always.add(u(o,a,h),u(o-1.4,a,l));for(let p of[-1,1]){let _=[],v=[];c.forEach((E,A)=>{let S=E.x+E.rx*a*p,C=E.z+E.rz*a*p;if(_.push(S,o-1.4,C,S,o+1.1,C),A>0){let b=(A-1)*2;v.push(b,b+2,b+1,b+1,b+2,b+3)}});let y=new we;y.setAttribute("position",new ee(_,3)),y.setIndex(v),y.computeVertexNormals(),this.always.add(new Y(y,new Et({color:10133672,emissive:1842204,side:Se})))}let d=new ft(1.1,o-1.4,1.1).translate(0,(o-1.4)/2,0),f=new Et({color:9146520}),m=this.cfg.highwayAvoid.map(p=>Ft[p]);for(let p=16;p<r;p+=34){let _=_i(e,i,p);if(m.some(E=>Math.hypot(E.x-_.x,E.z-_.z)<28))continue;let v=t.width/2+2.1;if([-1,1].some(E=>Fe(_.x+_.rx*v*E,_.z+_.rz*v*E,this.area)<1.2))continue;for(let E of[-1,1]){let A=new Y(d,f);A.position.set(_.x+_.rx*v*E,0,_.z+_.rz*v*E),this.always.add(A)}let y=new Y(new ft(v*2+1.2,1.2,1.4),f);y.position.set(_.x,o-2,_.z),y.rotation.y=Math.atan2(-_.rz,_.rx),this.always.add(y)}let x=new ft(.5,.2,1),g=new Wt({color:16757845});for(let p=10;p<r;p+=30){let _=_i(e,i,p);for(let v of[-1,1]){let y=new Y(x,g);y.position.set(_.x+_.rx*(a-.6)*v,o+3.2,_.z+_.rz*(a-.6)*v);let E=new Y(new ze(.06,.06,3.2,6).translate(0,1.6,0),new Et({color:7830403}));E.position.set(_.x+_.rx*(a-.2)*v,o,_.z+_.rz*(a-.2)*v),this.always.add(y,E)}}}buildFootbridges(){let t=this.cfg.bridges,e=new Et({color:6262704,emissive:858660}),n=new Et({color:14212579,emissive:2236962});for(let[i,r,o,a]of t){let c=this.roads.find(S=>S.name===i),l=Ft[r],h=Ft[o],u=Math.hypot(h.x-l.x,h.z-l.z),d=(h.x-l.x)/u,f=(h.z-l.z)/u,m=-f,x=d,g=l.x+(h.x-l.x)*a,p=l.z+(h.z-l.z)*a,_=c.width+6.4,v=5.3;if(![-1,1].every(S=>{let C=S*(_/2-1.1);return xi(g-d*4.5+m*C,p-f*4.5+x*C,2.4,10.4,Math.atan2(d,f),1.5,this.area)}))continue;let E=new te;E.position.set(g,0,p),E.rotation.y=Math.atan2(m,x);let A=new Y(new ft(2.2,.45,_),e);A.position.y=v,E.add(A);for(let S of[-1.05,1.05]){let C=new Y(new ft(.08,1,_),n);C.position.set(S,v+.7,0),E.add(C)}for(let S of[-1,1]){let C=new te;C.position.set(0,0,S*(_/2-1.1));let b=new Y(new ft(9.4,.4,1.8),e);b.position.set(-4.5,v/2,0),b.rotation.z=Math.atan2(v,9),C.add(b);for(let M of[-.3,-8.7]){let I=new Y(new ft(.3,v,.3),e);I.position.set(M,v/2,0),C.add(I)}E.add(C)}this.always.add(E)}}setCourseMode(t){this.paint.visible=!t}update(t){let e=t%30,n=o=>{let a=(e+o*15)%30;return a<10?"g":a<13?"y":"r"},i={g:2555824,y:16761370,r:16722474},r={g:801320,y:3811848,r:3803658};this.sigMats.forEach((o,a)=>{let c=n(a);for(let l of["g","y","r"])o[l].color.setHex(c===l?i[l]:r[l])})}};var ra=.7;function En(s){let t=on(s[0],s[1]),e=on(s[2],s[3]);return{x0:t.x,x1:e.x,z0:e.z,z1:t.z,cx:(t.x+e.x)/2,cz:(t.z+e.z)/2,w:e.x-t.x,d:t.z-e.z}}function vi(s,t,e,n=!1){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new Un(i);return r.colorSpace=be,n&&(r.wrapS=r.wrapT=zi),r.anisotropy=4,r}function Le(s,{fg:t="#fff",bg:e="#c8102e",font:n="bold",vertical:i=!1,glow:r=null,w:o=512,h:a=128}={}){return vi(i?a:o,i?o:a,(c,l,h)=>{c.fillStyle=e,c.fillRect(0,0,l,h),c.fillStyle=t,r&&(c.shadowColor=r,c.shadowBlur=18),c.textAlign="center",c.textBaseline="middle";let u='"Hiragino Sans","Noto Sans JP","Yu Gothic",sans-serif';if(i){let d=s.length,f=Math.min(l*.78,h*.9/d);c.font=`${n} ${f}px ${u}`,[...s].forEach((m,x)=>c.fillText(m,l/2,h*.05+f*(x+.5)))}else{let d=h*.62;for(c.font=`${n} ${d}px ${u}`;c.measureText(s).width>l*.92&&d>10;)d-=2,c.font=`${n} ${d}px ${u}`;c.fillText(s,l/2,h/2+2)}})}function De(s,t,e,n={}){return new Y(new pe(s,t),new Wt({map:e,side:n.double?Se:Ln,transparent:!!n.transparent,fog:!0}))}var oa=class{constructor(t){this.g=new te,t.add(this.g),this.exclude=[En(an.plaza)],this.buildPlaza(),this.buildDept(),this.buildPark(),this.buildTheatre(),this.buildRotaryIsland(),this.buildAlley()}excludes(t,e,n=3){return this.exclude.some(i=>t>i.x0-n&&t<i.x1+n&&e>i.z0-n&&e<i.z1+n)}buildPlaza(){let t=En(an.plaza),e=vi(128,128,(i,r,o)=>{i.fillStyle="#5d5f66",i.fillRect(0,0,r,o),i.fillStyle="#676a72";for(let a=0;a<o;a+=16)for(let c=a/16%2?0:16;c<r;c+=32)i.fillRect(c,a,30,14)},!0);e.repeat.set(t.w/6,t.d/6);let n=new Y(new pe(t.w+30,t.d+10),new Et({map:e}));n.rotation.x=-Math.PI/2,n.position.set(t.cx+10,.004,t.cz),this.g.add(n)}buildDept(){let t=En(an.dept);this.exclude.push(t);let e=60*ra,n=vi(256,512,(m,x,g)=>{m.fillStyle="#d9ccb0",m.fillRect(0,0,x,g);for(let p=30;p<g;p+=44){m.fillStyle="#3d4250",m.fillRect(0,p,x,16);for(let _=6;_<x;_+=22)Math.random()<.55&&(m.fillStyle="rgba(255,226,170,0.95)",m.fillRect(_,p+2,14,12))}m.fillStyle="rgba(0,0,0,0.08)";for(let p=0;p<x;p+=32)m.fillRect(p,0,2,g)},!0);n.repeat.set(t.d/30,1);let i=new Et({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.25}),r=new Y(new ft(t.w,e,t.d),i);r.position.set(t.cx,e/2,t.cz),this.g.add(r);let o=new Y(new ft(t.w*.6,10*ra,t.d*.55),new Et({color:12432284}));o.position.set(t.cx+t.w*.15,e+5*ra,t.cz),this.g.add(o);let a=De(26,6.5,Le("\u6771\u90E8\u30C7\u30D1\u30FC\u30C8",{bg:"#0d2a5c",fg:"#fff",glow:"#7fb3ff"}));a.position.set(t.x0-.3,e-4,t.cz-t.d*.25),a.rotation.y=-Math.PI/2,this.g.add(a);let c=De(3.2,18,Le("\u6771\u90E8\u30C7\u30D1\u30FC\u30C8",{bg:"#0d2a5c",vertical:!0,glow:"#7fb3ff"}));c.position.set(t.x0-.3,e*.55,t.cz+t.d*.3),c.rotation.y=-Math.PI/2,this.g.add(c);let l=new te;l.position.set(t.x0,0,t.cz+4);let h=new Y(new ft(5,.4,26),new Et({color:10133931,emissive:2236962}));h.position.set(-2.4,4.6,0),l.add(h);let u=new Y(new pe(22,3.6),new Wt({color:16773846}));u.position.set(-.05,2,0),u.rotation.y=-Math.PI/2,l.add(u);let d=De(12,1.8,Le("\u6C60\u888B\u99C5  \u897F\u53E3  West Exit",{bg:"#20242c",fg:"#ffe680"}));d.position.set(-4.95,5.4,0),d.rotation.y=-Math.PI/2,l.add(d),this.g.add(l);let f=new Y(new ft(40,8,t.d+60),new Et({color:2764083}));f.position.set(t.x1+22,4,t.cz),this.g.add(f)}buildPark(){let t=En(an.park);this.exclude.push(t);let e=vi(128,128,(m,x,g)=>{m.fillStyle="#8f9196",m.fillRect(0,0,x,g),m.strokeStyle="#7a7c81",m.lineWidth=2;for(let p=0;p<=128;p+=32)m.beginPath(),m.moveTo(p,0),m.lineTo(p,g),m.stroke(),m.beginPath(),m.moveTo(0,p),m.lineTo(x,p),m.stroke()},!0);e.repeat.set(t.w/4,t.d/4);let n=new Y(new pe(t.w,t.d),new Et({map:e}));n.rotation.x=-Math.PI/2,n.position.set(t.cx,.06,t.cz),this.g.add(n);let i=t.cx+t.w*.08,r=t.cz,o=new Y(new ze(7,7.3,.5,40),new Et({color:12172482}));o.position.set(i,.25,r),this.g.add(o),this.ringMat=new Te({color:16777215,emissive:6737151,emissiveIntensity:1.2,metalness:.4,roughness:.4});let a=new Y(new Is(10.5,.75,10,72),this.ringMat);a.rotation.x=Math.PI/2,a.scale.set(1,1,.55),a.position.set(i,7.5,r),this.g.add(a);let c=new Et({color:15132908});for(let m=0;m<6;m++){let x=m/6*Math.PI*2+.3,g=new Y(new ze(.22,.3,7.8,8),c);g.position.set(i+Math.cos(x)*9.6,3.8,r+Math.sin(x)*9.6),g.rotation.z=Math.cos(x)*.12,g.rotation.x=-Math.sin(x)*.12,this.g.add(g)}let l=new Et({color:4864040}),h=new Et({color:2906670,emissive:528904}),u=(m,x,g=1)=>{if(Fe(m,x,"west")<2.5*g)return;let p=new Y(new ze(.15*g,.22*g,3*g,6),l);p.position.set(m,1.5*g,x);let _=new Y(new bn(2*g,10,8),h);_.position.set(m,3.8*g,x),this.g.add(p,_)};for(let m=0;m<=8;m++)u(t.x0+2.5,t.z0+2+m/8*(t.d-4));for(let m=0;m<=6;m++)u(t.x0+2+m/6*(t.w-4),t.z1-2.5,.9);let d=new Wt({color:16773328});for(let m=0;m<6;m++){let x=m/6*Math.PI*2,g=i+Math.cos(x)*15,p=r+Math.sin(x)*15*.7;if(Fe(g,p,"west")<1)continue;let _=new Y(new ze(.06,.08,4,6),new Et({color:5593958}));_.position.set(g,2,p);let v=new Y(new bn(.3,8,6),d);v.position.set(g,4.1,p),this.g.add(_,v)}let f=De(8,1.4,Le("\u897F\u53E3\u516C\u5712",{bg:"#1d3b2a",fg:"#e8f5e9"}),{double:!0});f.position.set(t.x1-1,1.6,t.z0+3),f.rotation.y=Math.PI/2,this.g.add(f)}buildTheatre(){let t=En(an.theatre);this.exclude.push(t);let e=50*ra,n=vi(128,128,(d,f,m)=>{d.fillStyle="#7d4b3b",d.fillRect(0,0,f,m),d.fillStyle="#6b3e31";for(let x=0;x<m;x+=8)for(let g=x/8%2?0:8;g<f;g+=16)d.fillRect(g,x,15,7)},!0);n.repeat.set(t.d/6,e/6);let i=new Y(new ft(t.w*.62,e,t.d),new Et({map:n}));i.position.set(t.x0+t.w*.31,e/2,t.cz),this.g.add(i);let r=t.w*.38,o=new Oi;o.moveTo(0,0),o.lineTo(r,0),o.lineTo(0,e*.85),o.closePath();let a=new Cs(o,{depth:t.d*.9,bevelEnabled:!1});a.translate(0,0,-t.d*.45);let c=new Te({color:10471144,emissive:16763274,emissiveIntensity:.45,transparent:!0,opacity:.7,metalness:.3,roughness:.1}),l=new Y(a,c);l.position.set(t.x0+t.w*.62,0,t.cz),this.g.add(l);let h=new Et({color:4212304});for(let d=-4;d<=4;d++){let f=Math.hypot(r,e*.85),m=new Y(new ft(f,.15,.15),h);m.position.set(t.x0+t.w*.62+r/2,e*.425,t.cz+d/4*t.d*.44),m.rotation.z=-Math.atan2(e*.85,r),this.g.add(m)}let u=De(16,2.4,Le("\u6C60\u888B\u82B8\u8853\u5287\u5834",{bg:"#2a1f1b",fg:"#f6e7c8"}));u.position.set(t.x0+t.w*.62+.1,e-3,t.cz),u.rotation.y=Math.PI/2,this.g.add(u)}buildRotaryIsland(){let t=Ft.RT_W.x+6,e=Ft.RT_B1.x-6,n=Ft.RT_A1.z+6,i=Ft.RT_C1.z-6,r=e-t,o=i-n;if(r<=2||o<=2)return;let a=new Y(new ft(r,.2,o),new Et({color:10132642}));a.position.set((t+e)/2,.1,(n+i)/2),this.g.add(a);let c=new Et({color:3108277,emissive:728115}),l=new Et({color:13620184}),h=new Wt({color:16774368});for(let d=0;d<3;d++){let f=n+(d+.5)/3*o;for(let m of[-1,1]){let x=(t+e)/2+m*(r/2-1.2),g=new Y(new ft(2.2,.15,o/3-1.5),c);g.position.set(x,2.8,f);let p=new Y(new ft(.12,2.8,.12),l);p.position.set(x-m*.8,1.4,f);let _=new Y(new ft(.1,1.6,1),h);_.position.set(x-m*.85,1.2,f+1.2),this.g.add(g,p,_)}}let u=De(6,1.1,Le("\u30D0\u30B9\u306E\u308A\u3070  Bus Stop",{bg:"#1c4f8f"}),{double:!0});u.position.set((t+e)/2,3.6,n-.2),this.g.add(u)}buildAlley(){let t=Ft.NI_S,e=Ft.NI_N,n=t.x,i=t.z,r=e.z;this.exclude.push({x0:n-20,x1:n+20,z0:r+6,z1:i-6});let o=new te;o.position.set(n,0,i-6.5),o.visible=Fe(n-3.9,i-6.5,"west")>.8&&Fe(n+3.9,i-6.5,"west")>.8;let a=new Et({color:10331051,emissive:1710618});for(let g of[-1,1]){let p=new Y(new ft(.4,6.4,.4),a);p.position.set(g*3.9,3.2,0),o.add(p)}let c=Le("\u897F\u4E00\u756A\u8857",{bg:"#b5121b",fg:"#fff",glow:"#ffd0d0"});for(let g of[0,Math.PI]){let p=De(7.2,1.6,c);p.position.set(0,5.8,g?-.21:.21),p.rotation.y=g,o.add(p)}let l=new Y(new ft(8.2,1.8,.4),new Et({color:3805716}));l.position.y=5.8,o.add(l),this.g.add(o);let h=["\u30E9\u30FC\u30E1\u30F3 \u6C60\u864E","\u5C45\u9152\u5C4B \u3075\u304F\u308D\u3046","\u30AB\u30E9\u30AA\u30B1 BIG SONG","\u713C\u8089 \u897F\u4E00\u82D1","\u55AB\u8336 \u706F","\u4E2D\u83EF \u9F8D\u9580","\u4E32\u30AB\u30C4 \u3060\u308B\u307E\u5C4B","\u30D0\u30FC NIGHT OWL","\u7ACB\u3061\u98F2\u307F \u89D2","\u30B2\u30FC\u30E0 ARCADIA","\u725B\u4E3C \u5927\u76DB\u8ED2","\u9903\u5B50 \u4E00\u756A","BAR BLUE","\u3046\u3069\u3093 \u8B83","\u5BFF\u53F8 \u307E\u308B","\u30CD\u30C3\u30C8\u30AB\u30D5\u30A7 MOON"],u=["#ff2a6d","#05d9e8","#f9c80e","#7b2ff7","#01ff89","#ff7a00"],d=0,f=i-r;for(let g of[-1,1])for(let p=r+5;p<i-6;p+=8){let v=8+d*37%15,y=10,E=n+g*(3+1.6+y/2);if(!xi(E,p+7.5/2,y+1.6,7.5,0,2.5,"west"))continue;let A=new Ht().setHSL(d*.13%1,.15,.22+d*7%5*.03),S=new Y(new ft(y,v,7.5-.4),new Et({color:A}));S.position.set(E,v/2,p+7.5/2),this.g.add(S);let C=new Y(new pe(7.5-1,2.8),new Wt({color:new Ht().setHSL(.1,.6,.75)}));C.position.set(E-g*(y/2+.02),1.5,p+7.5/2),C.rotation.y=g>0?-Math.PI/2:Math.PI/2,this.g.add(C);let b=h[d%h.length],M=u[d%u.length],I=De(1.2,5,Le(b,{bg:"#111",fg:M,vertical:!0,glow:M}),{double:!0});I.position.set(E-g*(y/2+.7),5.5,p+1.2),I.rotation.y=0,this.g.add(I),d++}let m=new Wt({color:16730682}),x=new bn(.28,10,8);x.scale(1,1.3,1);for(let g=r+3;g<i-7;g+=3.5)for(let p of[-1,1]){if(Fe(n+p*3.4,g,"west")<1.5)continue;let _=new Y(x,m);_.position.set(n+p*3.4,3.6,g),this.g.add(_)}}update(t){this.ringMat&&this.ringMat.emissive.setHSL(t*.04%1,.8,.55)}};var Mi=.7;function Wi(s,t,e=.55,n=!1){return vi(256,512,(i,r,o)=>{if(i.fillStyle=s,i.fillRect(0,0,r,o),n)for(let a=4;a<r;a+=16){i.fillStyle=t,i.fillRect(a,0,6,o);for(let c=4;c<o;c+=14)Math.random()<e&&(i.fillStyle="rgba(255,228,170,0.9)",i.fillRect(a,c,6,8))}else for(let a=20;a<o;a+=34){i.fillStyle=t,i.fillRect(0,a,r,14);for(let c=4;c<r;c+=18)Math.random()<e&&(i.fillStyle="rgba(255,230,180,0.95)",i.fillRect(c,a+2,12,10))}},!0)}function hh(){let s=new te,t=on(35.72955,139.71935),e=70*Mi,n=40*Mi,i=240*Mi,r=Wi("#565c66","#262a31",.45,!0);r.repeat.set(1.2,2.5);let o=new Et({map:r,emissive:16777215,emissiveMap:r,emissiveIntensity:.22}),a=new Y(new ft(e,i,n),o);a.position.set(t.x,i/2,t.z),s.add(a);let c=new Y(new ft(e*.92,4,n*.9),new Et({color:2895928,emissive:1118481}));c.position.set(t.x,i+2,t.z),s.add(c);let l=new Wt({color:16719904}),h=[];for(let[f,m]of[[-e/2+2,-n/2+2],[e/2-2,-n/2+2],[-e/2+2,n/2-2],[e/2-2,n/2-2]]){let x=new Y(new bn(.9,8,6),l);x.position.set(t.x+f,i+4.6,t.z+m),s.add(x),h.push(x)}let u=De(30,4,Le("SUNRISE 60",{bg:"#101418",fg:"#ffffff",glow:"#7ad0ff"}),{double:!0});u.position.set(t.x,i-6,t.z+n/2+.3),s.add(u);let d=u.clone();return d.position.set(t.x,i-6,t.z-n/2-.3),s.add(d),s.userData.blinkers=h,s}var aa=class{constructor(t){this.g=new te,t.add(this.g),this.corridor=ia("east"),this.exclude=[En(an.eplaza)],this.buildEastExit(),this.buildScreens(),this.buildSunshineCity(),this.buildS60Street(),this.buildGreenTrees(),this.buildStation()}excludes(t,e,n=3){return this.exclude.some(i=>t>i.x0-n&&t<i.x1+n&&e>i.z0-n&&e<i.z1+n)}boxOk(t,e,n,i,r=0,o=2.5){let a=Math.cos(r),c=Math.sin(r);for(let l=0;l<=4;l++)for(let h=0;h<=4;h++){let u=(l/4-.5)*n,d=(h/4-.5)*i,f=t+u*a+d*c,m=e-u*c+d*a,x=this.corridor.query(f,m);if(!x.far&&x.d<o+1.5)return!1}return xi(t,e,n,i,r,o,"east")}addBox(t,e,n,i,r,o,a=0){let c=new Y(new ft(n,r,i),o);return c.position.set(t,r/2,e),c.rotation.y=a,this.g.add(c),c}buildEastExit(){let t=En(an.seibu),e=En(an.parco);this.exclude.push(t,e);let n=Wi("#7a6450","#3a2f28",.5);n.repeat.set(t.d/25,1);let i=48*Mi,r=this.addBox(t.cx,t.cz,t.w,t.d,i,new Et({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.2})),o=De(3.4,20,Le("\u897F\u90E8\u30C7\u30D1\u30FC\u30C8",{bg:"#0c1a3a",vertical:!0,glow:"#8fb8ff"}));o.position.set(t.x1+.3,i*.55,t.cz-t.d*.2),o.rotation.y=Math.PI/2,this.g.add(o);let a=De(24,5,Le("\u897F\u90E8\u30C7\u30D1\u30FC\u30C8",{bg:"#0c1a3a",glow:"#8fb8ff"}));a.position.set(t.x1+.3,i-3.5,t.cz+t.d*.18),a.rotation.y=Math.PI/2,this.g.add(a);let c=new Y(new pe(16,3.2),new Wt({color:16773846}));c.position.set(t.x1+.05,2,t.z0+t.d*.82),c.rotation.y=Math.PI/2,this.g.add(c);let l=De(11,1.8,Le("\u6C60\u888B\u99C5  \u6771\u53E3  East Exit",{bg:"#20242c",fg:"#ffe680"}));l.position.set(t.x1+.1,4.6,t.z0+t.d*.82),l.rotation.y=Math.PI/2,this.g.add(l);let h=Wi("#d9d9d6","#5a5d63",.6);h.repeat.set(e.d/20,1);let u=38*Mi;this.addBox(e.cx,e.cz,e.w,e.d,u,new Et({map:h,emissive:16777215,emissiveMap:h,emissiveIntensity:.18}));let d=De(3,14,Le("PALCS",{bg:"#e6007e",vertical:!0,glow:"#ffd1ea"}));d.position.set(e.x1+.3,u*.6,e.cz),d.rotation.y=Math.PI/2,this.g.add(d);let f=En(an.eplaza),m=vi(64,64,(g,p,_)=>{g.fillStyle="#5b5e66",g.fillRect(0,0,p,_),g.fillStyle="#666a73";for(let v=0;v<_;v+=8)for(let y=v/8%2?0:8;y<p;y+=16)g.fillRect(y,v,15,7)},!0);m.repeat.set(f.w/4,f.d/4);let x=new Y(new pe(f.w,f.d),new Et({map:m}));x.rotation.x=-Math.PI/2,x.position.set(f.cx,.006,f.cz),this.g.add(x)}buildScreens(){this.screens=[];let t=[{lat:35.73085,lon:139.71335,w:26,d:22,h:30,name:"\u30D3\u30C3\u30AF\u30EA\u30AB\u30E1\u30E9",col:"#d4001a"},{lat:35.72925,lon:139.7133,w:24,d:20,h:26,name:"\u30E4\u30DE\u30E2\u30C8\u96FB\u6A5F",col:"#e8380d"},{lat:35.73205,lon:139.7133,w:22,d:20,h:24,name:"\u30AB\u30E9\u30AA\u30B1 BIG SONG",col:"#7b2ff7"}];for(let e of t){let n=on(e.lat,e.lon);if(!this.boxOk(n.x,n.z,e.w,e.d,0,1))continue;this.exclude.push({x0:n.x-e.w/2,x1:n.x+e.w/2,z0:n.z-e.d/2,z1:n.z+e.d/2});let i=Wi("#3b3f47","#20232a",.5);i.repeat.set(2,1),this.addBox(n.x,n.z,e.w,e.d,e.h,new Et({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.2}));let r=document.createElement("canvas");r.width=256,r.height=160;let o=new Un(r);o.colorSpace=be;let a=new Y(new pe(e.d*.8,e.h*.32),new Wt({map:o}));a.position.set(n.x-e.w/2-.2,e.h*.62,n.z),a.rotation.y=-Math.PI/2,this.g.add(a),this.screens.push({canvas:r,tex:o,seed:Math.random()*10});let c=De(e.d*.9,2.6,Le(e.name,{bg:e.col,glow:"#fff"}));c.position.set(n.x-e.w/2-.25,e.h-2,n.z),c.rotation.y=-Math.PI/2,this.g.add(c)}}buildSunshineCity(){let t=En(an.sunshine);this.exclude.push(t);let e=hh();this.g.add(e),this.blinkers=e.userData.blinkers;let n=Wi("#8c8f96","#3a3d44",.7);n.repeat.set(t.w/20,.4),this.addBox(t.cx,t.cz,t.w*.95,t.d*.9,14,new Et({map:n,emissive:16777215,emissiveMap:n,emissiveIntensity:.2}));let i=Wi("#b9b4a8","#575247",.5,!0);i.repeat.set(1,1.5);let r=on(35.72905,139.72045);this.addBox(r.x,r.z,34,20,140*Mi,new Et({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.2}),.5);let o=Wi("#7f8a96","#404750",.6);o.repeat.set(3,1);let a=on(35.7302,139.7202);this.addBox(a.x,a.z,42,30,60*Mi,new Et({map:o,emissive:16777215,emissiveMap:o,emissiveIntensity:.2}));let c=new Y(new bn(9,20,10,0,Math.PI*2,0,Math.PI/2),new Te({color:8377343,emissive:1731232,emissiveIntensity:.6,transparent:!0,opacity:.8}));c.position.set(a.x,60*Mi,a.z),this.g.add(c);let l=De(20,3,Le("SUNRISE CITY",{bg:"#0f2440",fg:"#ffd36b",glow:"#ffd36b"}));l.position.set(t.x0-.3,16,t.cz),l.rotation.y=-Math.PI/2,this.g.add(l)}buildS60Street(){let t=jn.find(f=>f.neon),e=We(t),n=["\u30B7\u30CD\u30DE 60","GAME LAND","\u30E9\u30FC\u30E1\u30F3 \u6771\u6C60","\u30AB\u30E9\u30AA\u30B1 \u6B4C\u5E83","\u725B\u4E3C \u5927\u76DB\u8ED2","BOWLING","\u30AF\u30EC\u30FC\u30D7 \u30DF\u30EB\u30AF","\u56DE\u8EE2\u5BFF\u53F8 \u307E\u308B","MANGA CAFE","\u30B2\u30FC\u30E0 ARCADIA","\u305F\u3044\u713C\u304D \u6771","\u713C\u8089 \u708E"],i=["#ff2a6d","#05d9e8","#f9c80e","#7b2ff7","#01ff89","#ff7a00"],r=0,o=new Wt({color:16769162});for(let f=0;f<e.length-1;f++){let m=e[f],x=e[f+1],g=Math.hypot(x.x-m.x,x.z-m.z),p=(x.x-m.x)/g,_=(x.z-m.z)/g,v=-_,y=p,E=Math.atan2(p,_);for(let A=8;A<g-6;A+=9)for(let S of[-1,1]){let C=t.width/2+3.4+5,b=m.x+p*A+v*C*S,M=m.z+_*A+y*C*S,I=9+r*37%16;if(!this.boxOk(b,M,10,8,E,.5))continue;let N=new Ht().setHSL(r*.17%1,.18,.22+r*5%4*.03);this.addBox(b,M,10,8,I,new Et({color:N}),E),this.exclude.push({x0:b-7,x1:b+7,z0:M-7,z1:M+7});let F=b-v*S*5.05,B=M-y*S*5.05,G=new Y(new pe(7,2.8),new Wt({color:new Ht().setHSL(.11,.6,.72)}));G.position.set(F,1.5,B),G.rotation.y=Math.atan2(-v*S,-y*S),this.g.add(G);let k=i[r%i.length],tt=De(1.3,5.5,Le(n[r%n.length],{bg:"#111",fg:k,vertical:!0,glow:k}),{double:!0});tt.position.set(b-v*S*5.8,5.8,M-y*S*5.8),tt.rotation.y=E,this.g.add(tt),r++}for(let A=4;A<g;A+=6){let S=m.x+p*A,C=m.z+_*A,b=new Y(new bn(.22,8,6),o);b.position.set(S+v*(t.width/2+.6),5.2,C+y*(t.width/2+.6));let M=b.clone();M.position.set(S-v*(t.width/2+.6),5.2,C-y*(t.width/2+.6)),this.g.add(b,M)}}let a=Ft.MJ_2,c=Ft.S60M,l=Math.hypot(c.x-a.x,c.z-a.z),h=(c.x-a.x)/l,u=(c.z-a.z)/l,d={x:a.x+h*14,z:a.z+u*14};if(Fe(d.x-u*(t.width/2+1),d.z+h*(t.width/2+1),"east")>.8&&Fe(d.x+u*(t.width/2+1),d.z-h*(t.width/2+1),"east")>.8){let f=new te;f.position.set(d.x,0,d.z),f.rotation.y=Math.atan2(h,u);let m=new Et({color:10134187,emissive:1710618});for(let g of[-1,1]){let p=new Y(new ft(.4,6.6,.4),m);p.position.set(g*(t.width/2+1),3.3,0),f.add(p)}let x=De(t.width+2.4,1.6,Le("SUNRISE 60 STREET",{bg:"#14223a",fg:"#ffd36b",glow:"#ffd36b"}),{double:!0});x.position.y=6.2,f.add(x),this.g.add(f)}}buildGreenTrees(){let t=jn.find(r=>r.green),e=We(t),n=new Et({color:4864040}),i=new Et({color:3107381,emissive:661002});for(let r=0;r<e.length-1;r++){let o=e[r],a=e[r+1],c=Math.hypot(a.x-o.x,a.z-o.z);for(let l=34;l<c-34;l+=9){let h=o.x+(a.x-o.x)*l/c,u=o.z+(a.z-o.z)*l/c;if(Fe(h,u,"east")<.8)continue;let d=new Y(new ze(.15,.2,3,6),n);d.position.set(h,1.5,u);let f=new Y(new bn(1.7,10,8),i);f.position.set(h,4,u),this.g.add(d,f)}}}buildStation(){let t=Ft.J5,e=De(6,1.2,Le("\u6771\u6C60\u888B\u99C5  \u5730\u4E0B\u9244",{bg:"#00305e",fg:"#fff"}),{double:!0});for(let[n,i]of[[14,-14],[-14,14]]){let r=t.x+n,o=t.z+i;if(Fe(r,o,"east")<2||this.corridor.query(r,o).d<2)continue;let a=this.addBox(r,o,3,5,3,new Et({color:10133930,emissive:2236962})),c=e.clone();c.position.set(r,3.6,o),this.g.add(c)}}update(t){if(this.screens&&(this.frame=(this.frame||0)+1,!(this.frame%6)))for(let e of this.screens){let n=e.canvas.getContext("2d"),i=t*.4+e.seed,r=i*40%360,o=n.createLinearGradient(0,0,256,160);o.addColorStop(0,`hsl(${r},80%,45%)`),o.addColorStop(1,`hsl(${(r+80)%360},80%,25%)`),n.fillStyle=o,n.fillRect(0,0,256,160),n.fillStyle="#fff",n.font="bold 40px sans-serif",n.textAlign="center";let a=["IKEBUKURO","NIGHT RACERS","EAST GATE","SUNRISE 60"];n.fillText(a[Math.floor(i/2)%a.length],128+Math.sin(i*2)*20,95),e.tex.needsUpdate=!0}}};var Os=1.6;function S_(s){let t=[],e=new Set,n=(i,r,o,a)=>{let c=s.query(i+o*.06,r+a*.06);if(c.far||c.d<.02)return;let l=`${Math.round(i/.9)},${Math.round(r/.9)}`;e.has(l)||(e.add(l),t.push({x:i,z:r,nx:o,nz:a}))};for(let i of s.segs){let r=i.bx-i.ax,o=i.bz-i.az,a=Math.hypot(r,o);if(a<.001)continue;let c=r/a,l=o/a,h=-l,u=c,d=Math.max(1,Math.round(a/Os));for(let m=0;m<=d;m++){let x=m/d*a;for(let g of[-1,1])n(i.ax+c*x+h*i.hw*g,i.az+l*x+u*i.hw*g,h*g,u*g)}let f=Math.max(3,Math.ceil(Math.PI*i.hw/Os));for(let[m,x,g]of[[i.ax,i.az,-1],[i.bx,i.bz,1]])for(let p=1;p<f;p++){let _=-Math.PI/2+p/f*Math.PI,v=c*g*Math.cos(_)+h*Math.sin(_),y=l*g*Math.cos(_)+u*Math.sin(_);n(m+v*i.hw,x+y*i.hw,v,y)}}return t}function Fs(s,t,e){let n=new un(s,t,Math.max(1,e.length)),i=new jt,r=new je,o=new Be,a=new L,c=new L(1,1,1);return e.forEach((l,h)=>{o.set(0,l.rot,0),r.setFromEuler(o),i.compose(a.set(l.x,l.y||0,l.z),r,c),n.setMatrixAt(h,i),l.color!=null&&n.setColorAt(h,new Ht(l.color))}),n.count=e.length,n}var yd=(s,t)=>{let e=Math.sin(s*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)};function uh(s,t={}){let e=new te,n=S_(s),i=[],r=[],o=[],a=[],c=[],l=[],h=0;for(let f of n){let m=Math.atan2(-f.nz,f.nx),x=t.isCorner?t.isCorner(f.x,f.z):!1,g=t.course&&x;i.push({x:f.x+f.nx*.15,z:f.z+f.nz*.15,rot:m,color:g?Math.floor(h/1)%2?14165551:15921906:13225170});let p=f.x+f.nx*.95,_=f.z+f.nz*.95,v=t.course?0:yd(Math.round(f.x/24),Math.round(f.z/24));t.course||v<.55?(r.push({x:p,z:_,y:.62,rot:m,color:t.course?h%4<2?15132390:13642290:15264494}),h%2===0&&o.push({x:p+f.nx*.12,z:_+f.nz*.12,y:.4,rot:m}),h%3===0&&l.push({x:p-f.nx*.06,z:_-f.nz*.06,y:.62,rot:m,color:x?16747008:16765514})):(a.push({x:p+f.nx*.2,z:_+f.nz*.2,y:.22,rot:m}),c.push({x:p+f.nx*.2,z:_+f.nz*.2,y:.7,rot:m,color:yd(f.x,f.z)<.5?3107381:3898682})),h++}let u=new Et({color:16777215,emissive:3815994});e.add(Fs(new ft(.3,.16,Os+.05).translate(0,.08,0),u,i));let d=new Et({color:16777215,emissive:2894892});return e.add(Fs(new ft(.06,.34,Os+.05),d,r)),e.add(Fs(new ft(.1,.8,.1),new Et({color:9212056}),o)),e.add(Fs(new ft(.06,.1,.16),new Wt({color:16777215}),l)),e.add(Fs(new ft(.75,.44,Os),new Et({color:8224644,emissive:1710618}),a)),e.add(Fs(new ft(.62,.55,Os-.1),new Et({color:16777215,emissive:793100}),c)),e.userData.count=n.length,e}var ca=class extends Rs{constructor(){super();let t=new ft;t.deleteAttribute("uv");let e=new Te({side:Ve}),n=new Te,i=new Ds(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Y(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Y(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Y(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new Y(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new Y(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new Y(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Y(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Y(t,Bs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Y(t,Bs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new Y(t,Bs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new Y(t,Bs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new Y(t,Bs(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new Y(t,Bs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Bs(s){let t=new Wt;return t.color.setScalar(s),t}function ph(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function la(s,t,e,n=!0){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new Un(i);return n&&(r.wrapS=r.wrapT=zi),r.colorSpace=be,r.anisotropy=4,r}function vd(){return la(256,256,(s,t,e)=>{s.fillStyle="#4a4d55",s.fillRect(0,0,t,e);let n=ph(7);for(let i=0;i<5e3;i++){let r=50+n()*50;s.fillStyle=`rgba(${r},${r},${r+6},${.25+n()*.4})`,s.fillRect(n()*t,n()*e,1+n()*2,1+n()*2)}})}function dh(s,t,e,n,i=.1){let r=[],o=[],a=[],c=0;for(let h=0;h<s.length;h++){let u=s[h],d=s[Math.max(0,h-1)],f=s[Math.min(s.length-1,h+1)],m=f.x-d.x,x=f.z-d.z,g=Math.hypot(m,x)||1;m/=g,x/=g;let p=-x,_=m,v=typeof t=="function"?t(h):t;if(h>0&&(c+=Math.hypot(u.x-s[h-1].x,u.z-s[h-1].z)),r.push(u.x-p*v,e,u.z-_*v,u.x+p*v,e,u.z+_*v),o.push(0,c*i,1,c*i),h>0){let y=(h-1)*2;a.push(y,y+1,y+2,y+1,y+3,y+2)}}let l=new we;return l.setAttribute("position",new ee(r,3)),l.setAttribute("uv",new ee(o,2)),l.setIndex(a),l.computeVertexNormals(),new Y(l,n)}function T_(){let s=new Et({color:16777215});return s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp; varying vec3 vNw;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vec4 wpp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wpp = instanceMatrix * wpp;
        #endif
        wpp = modelMatrix * wpp;
        vWp = wpp.xyz;
        #ifdef USE_INSTANCING
          vNw = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);
        #else
          vNw = normalize(mat3(modelMatrix) * objectNormal);
        #endif`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWp; varying vec3 vNw;
        float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (abs(vNw.y) < 0.5) {
          float u = abs(vNw.x) > 0.5 ? vWp.z : vWp.x;
          vec2 cell = vec2(floor(u / 2.6), floor((vWp.y - 1.0) / 3.2));
          vec2 f = vec2(fract(u / 2.6), fract((vWp.y - 1.0) / 3.2));
          float win = step(0.18, f.x) * step(f.x, 0.82) * step(0.25, f.y) * step(f.y, 0.78);
          float rnd = h21(cell + floor(vWp.xz * 0.013) * 17.0);
          float lit = step(0.58, rnd) * step(1.2, vWp.y);
          vec3 wc = mix(vec3(1.0, 0.78, 0.45), vec3(0.65, 0.85, 1.0), step(0.8, h21(cell.yx + 3.1)));
          totalEmissiveRadiance += win * lit * wc * (0.55 + 0.45 * h21(cell * 1.7));
          diffuseColor.rgb *= mix(1.0, 0.35, win);
        }
        if (vNw.y > 0.5) { diffuseColor.rgb *= 0.55; }`)},s}function fh(s,t="#fff",e="rgba(0,0,0,0)",n=64,i="#0ff"){return la(1024,160,(o,a,c)=>{o.fillStyle=e,o.fillRect(0,0,a,c),o.font=`bold ${n}px "Hiragino Sans","Noto Sans JP",sans-serif`,o.textAlign="center",o.textBaseline="middle",o.shadowColor=i,o.shadowBlur=24,o.fillStyle=t,o.fillText(s,a/2,c/2)},!1)}var ha=class{constructor(t,e="west"){this.area=e,this.areaDef=Me[e],this.scene=new Rs,this.scene.background=new Ht(461332),this.scene.fog=new Fo(725024,80,820);let n=new As(t);this.scene.environment=n.fromScene(new ca,.04).texture,this.scene.environmentIntensity=.35,this.corridor=ia(e),this.renderer=t,this.courseGroup=null,this.build()}build(){let t=this.scene;t.add(new Ko(9085144,2763316,1.45));let e=new Jo(10466559,.5);e.position.set(-200,300,-100),t.add(e);let n=new Y(new pe(4e3,4e3),new Et({color:1052949}));n.rotation.x=-Math.PI/2,t.add(n);let i=vd(),r=new Et({map:i,color:11580608}),o=new Et({color:2369068});for(let a of this.areaDef.roads){let c=We(a);t.add(dh(c,a.width/2+3.2,.01,o)),t.add(dh(c,a.width/2,.02,r,.08)),c.forEach((l,h)=>{if(!(a.nodes.some(m=>Ft[m].x===l.x&&Ft[m].z===l.z)||h===0||h===c.length-1)&&a.smooth)return;let d=new Y(new Jn(a.width/2,24),r);d.rotation.x=-Math.PI/2,d.position.set(l.x,.021,l.z),t.add(d);let f=new Y(new Jn(a.width/2+3.2,24),o);f.rotation.x=-Math.PI/2,f.position.set(l.x,.011,l.z),t.add(f)})}for(let a of ah(this.area)){let c=new Y(new Jn(a.r,28),r);c.rotation.x=-Math.PI/2,c.position.set(a.x,.0205,a.z);let l=new Y(new Jn(a.r+3.2,28),o);l.rotation.x=-Math.PI/2,l.position.set(a.x,.0105,a.z),t.add(c,l)}this.detail=new sa(t,this.area),this.westExit=this.area==="west"?new oa(t):new aa(t),this.townEdges=uh(this.corridor),t.add(this.townEdges),this.buildBuildings(),this.buildStreetLights(),this.buildPOIs(),this.buildGates(),this.buildLandmarks(),this.buildStars()}buildBuildings(){let t=ph(42),e=1e9,n=-1e9,i=1e9,r=-1e9;for(let v of this.areaDef.roads)for(let y of v.nodes){let E=Ft[y];e=Math.min(e,E.x),n=Math.max(n,E.x),i=Math.min(i,E.z),r=Math.max(r,E.z)}let o=220,a=[],c=this.area==="west"?on(35.7295,139.7109):on(35.7295,139.7141);for(let v=e-o;v<n+o;v+=15)for(let y=i-o;y<r+o;y+=15){let E=v+(t()-.5)*5,A=y+(t()-.5)*5,S=this.corridor.query(E,A),C=S.far?40:S.d;if(C<6.5||this.westExit.excludes(E,A,6)||this.areaDef.pois.some(G=>{let k=this.poiPos(G);return Math.hypot(k.x-E,k.z-A)<34}))continue;let b=Math.min(8,C-3.2),M=b*(1.2+t()*.8),I=b*(1.2+t()*.8),N=Math.max(0,1-Math.hypot(E-(c.x+120),A-c.z)/500),F=6+t()*18+(t()<.12?25:0)+N*(10+t()*25),B=(t()-.5)*.2;xi(E,A,M,I,B,3,this.area)&&a.push({px:E,pz:A,w:M,d:I,h:F,rot:B})}let l=new ft(1,1,1);l.translate(0,.5,0);let h=new un(l,T_(),a.length),u=new jt,d=new je,f=new Be,m=new L,x=new L,g=new Ht;a.forEach((v,y)=>{f.set(0,v.rot,0),d.setFromEuler(f),u.compose(x.set(v.px,0,v.pz),d,m.set(v.w,v.h,v.d)),h.setMatrixAt(y,u);let E=.18+t()*.22;g.setRGB(E*(.9+t()*.2),E,E*(1+t()*.25)),h.setColorAt(y,g)}),this.scene.add(h);let p=[16722541,383464,16369678,8073207,130953],_=new pe(1,1);for(let v=0;v<90;v++){let y=a[Math.floor(t()*a.length)];if(y.h<10)continue;let E=new Wt({color:p[Math.floor(t()*p.length)],side:Se,fog:!0}),A=new Y(_,E),S=t()<.5;A.scale.set(S?1.2:4+t()*3,S?5+t()*4:1.2,1);let C=Math.floor(t()*4),b=y.rot+C*Math.PI/2,M=(C%2===0?y.d:y.w)/2+.15;A.position.set(y.px+Math.sin(b)*M,4+t()*Math.min(10,y.h-6),y.pz+Math.cos(b)*M),A.rotation.y=b,this.scene.add(A)}}buildStreetLights(){let t=[],e=[];for(let h of this.areaDef.roads){if(h.alley)continue;let u=We(h),d=1,f=10;for(let m=0;m<u.length-1;m++){let x=u[m],g=u[m+1],p=Math.hypot(g.x-x.x,g.z-x.z),_=(g.x-x.x)/p,v=(g.z-x.z)/p,y=-v,E=_;for(let A=f;A<p;A+=26){f=A+26-p;let S=(h.width/2+2.4)*d,C=x.x+_*A+y*S,b=x.z+v*A+E*S;Fe(C,b,this.area)<1.2||(t.push({x:C,z:b,side:d,rx:y,rz:E}),e.push({x:C-y*d*4.2,z:b-E*d*4.2}),d=-d)}f>=p&&(f-=p)}}let n=new ze(.08,.1,7,6);n.translate(0,3.5,0);let i=new un(n,new Et({color:5593958}),t.length),r=new ft(.5,.15,.9),o=new un(r,new Wt({color:16769712}),t.length),a=new jt;t.forEach((h,u)=>{a.makeTranslation(h.x,0,h.z),i.setMatrixAt(u,a),a.makeTranslation(h.x-h.rx*h.side*.9,7,h.z-h.rz*h.side*.9),o.setMatrixAt(u,a)}),this.scene.add(i,o);let c=la(128,128,(h,u,d)=>{let f=h.createRadialGradient(u/2,d/2,0,u/2,d/2,u/2);f.addColorStop(0,"rgba(255,220,160,0.55)"),f.addColorStop(.5,"rgba(255,200,140,0.18)"),f.addColorStop(1,"rgba(255,200,140,0)"),h.fillStyle=f,h.fillRect(0,0,u,d)},!1),l=new un(new pe(14,14).rotateX(-Math.PI/2),new Wt({map:c,transparent:!0,depthWrite:!1,blending:vs,fog:!0}),e.length);e.forEach((h,u)=>{a.makeTranslation(h.x,.05,h.z),l.setMatrixAt(u,a)}),this.scene.add(l)}poiPos(t){let e=Ft[t.node];return{x:e.x+t.offset[0],z:e.z+t.offset[1]}}buildPOIs(){this.poiMarkers=[];for(let t of this.areaDef.pois){let e=this.poiPos(t),n=new te;n.position.set(e.x,0,e.z);let i=Ft[t.from],r=Ft[t.node];n.rotation.y=Math.atan2(-(r.z-i.z),r.x-i.x);let o=new te;o.rotation.y=-n.rotation.y,n.add(o);let a=t.type==="shop"?16726891:3073704,c=new Y(new Yo(5,6,40),new Wt({color:a,transparent:!0,opacity:.85,side:Se}));c.rotation.x=-Math.PI/2,c.position.y=.06,o.add(c);let l=new Y(new ze(5.5,5.5,30,24,1,!0),new Wt({color:a,transparent:!0,opacity:.08,side:Se,depthWrite:!1}));l.position.y=15,n.add(l);let h=fh(t.short,"#ffffff","rgba(10,10,20,0.85)",92,t.type==="shop"?"#ff3b6b":"#2ee6a8"),u=new Bo(new yr({map:h,depthWrite:!1}));if(u.scale.set(16,2.5,1),u.position.y=11,o.add(u),t.type==="gs"){let d=new Y(new ft(16,.8,12),new Et({color:14540253,emissive:3364164}));d.position.set(13,6,0),n.add(d);for(let[x,g]of[[7,-5],[7,5],[19,-5],[19,5]]){let p=new Y(new ft(.5,6,.5),new Et({color:10066329}));p.position.set(x,3,g),n.add(p)}let f=new Y(new pe(16,12),new Wt({color:16774877,transparent:!0,opacity:.18,blending:vs,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(13,.04,0),n.add(f);let m=new Y(new ft(10,5,9),new Et({color:15263976,emissive:3355443}));m.position.set(26,2.5,0),n.add(m)}else{let d=new Y(new ft(22,14,18),new Et({color:2760752,emissive:2230296}));d.position.set(17,7,0),n.add(d);let f=new Y(new ft(22.2,1.6,18.2),new Wt({color:16726891}));f.position.set(17,12,0),n.add(f)}this.scene.add(n),this.poiMarkers.push({poi:t,group:n,ring:c,x:e.x,z:e.z})}}buildGates(){this.gateMarkers=[];for(let t of this.areaDef.gates){let e=Ft[t.from],n=Ft[t.node],i=Math.hypot(n.x-e.x,n.z-e.z),r=(n.x-e.x)/i,o=(n.z-e.z)/i,c=this.areaDef.roads.find(f=>f.nodes.includes(t.node)).width/2,l=new te;l.position.set(e.x+r*i*.55,0,e.z+o*i*.55),l.rotation.y=Math.atan2(r,o);let h=new Et({color:2841658,emissive:861204});for(let f of[-1,1]){let m=new Y(new ft(.5,7,.5),h);m.position.set(f*(c+1.2),3.5,0),l.add(m)}let u=new Y(new pe(c*2+2,2.2),new Wt({map:fh(`${t.label}  \u2192`,"#ffffff","#1f6b3a",86,"#a6ffbf"),side:Se}));u.position.set(0,6.4,0),u.rotation.y=Math.PI,l.add(u);let d=new Y(new pe(c*2,3),new Wt({color:8257456,transparent:!0,opacity:.25,blending:vs,depthWrite:!1,side:Se}));d.position.set(0,1.5,i*.4),l.add(d),this.scene.add(l),this.gateMarkers.push({gate:t,x:n.x,z:n.z,group:l})}}buildLandmarks(){if(this.area==="west"){let t=hh();this.scene.add(t),this.blinkers=t.userData.blinkers}else this.blinkers=this.westExit.blinkers}buildStars(){let t=ph(9),e=[];for(let i=0;i<600;i++){let r=t()*Math.PI*2,o=t()*.45+.1,a=1500;e.push(Math.cos(r)*Math.cos(o)*a,Math.sin(o)*a,Math.sin(r)*Math.cos(o)*a)}let n=new we;n.setAttribute("position",new ee(e,3)),this.stars=new Ho(n,new vr({color:8952251,size:2,sizeAttenuation:!1,fog:!1})),this.scene.add(this.stars)}setCourse(t){this.courseGroup&&(this.scene.remove(this.courseGroup),this.courseGroup=null),this.townEdges.visible=!t;for(let m of this.gateMarkers||[])m.group.visible=!t;if(this.detail.setCourseMode(!!t),!t)return;let e=new te,n=[];for(let m=0;m<t.n;m++)n.push({x:t.x[m],z:t.z[m]});let i=vd(),r=dh([...n,n[0]],m=>t.hw[m%t.n]+.2,.028,new Et({map:i,color:11975108}),.08);e.add(r);let o=-1;e.add(uh(t.corridor,{course:!0,isCorner:(m,x)=>{let g=t.project(m,x,o);return o=g.i,t.extra[g.i]>.5}}));let a=t.posAt(0,0),c=la(128,32,(m,x,g)=>{for(let p=0;p<16;p++)for(let _=0;_<4;_++)m.fillStyle=(p+_)%2?"#111":"#eee",m.fillRect(p*8,_*8,8,8)},!1),l=new te;l.position.set(a.x,0,a.z),l.rotation.y=a.h;let h=new Y(new pe(t.hw[0]*2,1.6),new Wt({map:c}));h.rotation.x=-Math.PI/2,h.position.y=.05,l.add(h);let u=new Et({color:3356738,emissive:1118481});for(let m of[-1,1]){let x=new Y(new ft(.5,7,.5),u);x.position.set(m*(t.hw[0]+.8),3.5,0),l.add(x)}let d=new Y(new ft(t.hw[0]*2+2,1.4,.4),u);d.position.set(0,7,0),l.add(d);let f=new Y(new pe(t.hw[0]*2,1.2),new Wt({map:fh("START / FINISH","#fff","#101420",80,"#ff2a6d"),side:Se}));f.position.set(0,7,-.25),f.rotation.y=Math.PI,l.add(f),e.add(l),this.courseGroup=e,this.scene.add(e)}update(t){if(this.detail.update(t),this.westExit.update(t),this.blinkers)for(let e of this.blinkers)e.visible=Math.sin(t*3)>0;if(this.poiMarkers)for(let e of this.poiMarkers)e.ring.material.opacity=.6+.3*Math.sin(t*4)}};var pn={chase:"\u5F8C\u65B9\u8996\u70B9",cockpit:"\u904B\u8EE2\u5E2D\u8996\u70B9",hood:"\u30DC\u30F3\u30CD\u30C3\u30C8\u8996\u70B9",gallery:"\u30AE\u30E3\u30E9\u30EA\u30FC\u8996\u70B9"},Md=new L,ua=class{constructor(t){this.camera=new Ue(62,t,.08,2600),this.mirrorCam=new Ue(50,3.2,.3,600),this.mode="chase",this.pos=new L,this.look=new L,this.init=!1,this.galleryIdx=-1,this.gallerySpots=[]}setGallerySpots(t){if(this.gallerySpots=[],!t)return;let e=1;for(let n=20;n<t.length;n+=110){let i=t.posAt(n,0),r=t.hw[i.i],o=t.posAt(n,e*(r+4));this.gallerySpots.push({x:o.x,z:o.z,y:3.5+Math.random()*3,s:n}),e=-e}}reset(){this.init=!1}anchor(t,e){let n=t.userData;if(!n.anchors){n.anchors={};let i=(r,o,a,c)=>{let l=new ve;return l.position.set(r,o,a),l.rotation.y=c,n.body.add(l),l};n.anchors.cockpit=i(-.37,n.belt+.34,n.wsBase-1.05,Math.PI),n.anchors.hood=i(0,n.belt+.32,n.wsBase+.25,Math.PI),n.anchors.mirror=i(0,n.H+.25,n.wsBase-.9,0)}return n.anchors[e]}update(t,e,n){let i=this.camera,r=e.userData;r.cockpit.visible=this.mode==="cockpit";for(let g of r.exterior)g.visible=this.mode!=="cockpit";let o=Math.sin(n.h),a=Math.cos(n.h);if(this.mode==="cockpit"||this.mode==="hood"){e.updateMatrixWorld(!0);let g=this.anchor(e,this.mode);g.getWorldPosition(i.position),g.getWorldQuaternion(i.quaternion),i.fov=this.mode==="cockpit"?70:64,i.updateProjectionMatrix(),this.init=!1;return}if(this.mode==="gallery"&&this.gallerySpots.length){let g=this.galleryIdx,p=1e9;for(let A=0;A<this.gallerySpots.length;A++){let S=this.gallerySpots[A],C=Math.hypot(S.x-n.x,S.z-n.z);C<p&&(p=C,g=A)}this.galleryIdx<0&&(this.galleryIdx=g);let _=this.gallerySpots[this.galleryIdx],v=Math.hypot(_.x-n.x,_.z-n.z);g!==this.galleryIdx&&p<v*.75&&(this.galleryIdx=g);let y=this.gallerySpots[this.galleryIdx];i.position.set(y.x,y.y,y.z),Md.set(n.x,.8,n.z),i.lookAt(Md);let E=Math.hypot(y.x-n.x,y.z-n.z);i.fov=Math.max(8,Math.min(60,2*Math.atan(7/Math.max(E,1))*180/Math.PI)),i.updateProjectionMatrix();return}let c=n.speed,l=5.8+Math.min(1.5,c*.02),h=n.x-o*l,u=n.z-a*l,d=2.1,f=n.x+o*3,m=n.z+a*3,x=1;if(!this.init)this.pos.set(h,d,u),this.look.set(f,x,m),this.init=!0;else{let g=1-Math.exp(-t*9);this.pos.x+=(h-this.pos.x)*g,this.pos.y+=(d-this.pos.y)*g,this.pos.z+=(u-this.pos.z)*g;let p=1-Math.exp(-t*14);this.look.x+=(f-this.look.x)*p,this.look.y+=(x-this.look.y)*p,this.look.z+=(m-this.look.z)*p}i.position.copy(this.pos),i.lookAt(this.look),i.fov=60+Math.min(10,c*.12),i.updateProjectionMatrix()}updateMirror(t){t.updateMatrixWorld(!0);let e=this.anchor(t,"mirror");e.getWorldPosition(this.mirrorCam.position),e.getWorldQuaternion(this.mirrorCam.quaternion)}cycle(t){let e=t.indexOf(this.mode);return this.mode=t[(e+1)%t.length],this.galleryIdx=-1,this.init=!1,this.mode}};var Lr=[{id:"throttle",name:"\u30A2\u30AF\u30BB\u30EB",def:"KeyF"},{id:"brake",name:"\u30D6\u30EC\u30FC\u30AD",def:"KeyS"},{id:"shiftUp",name:"\u30B7\u30D5\u30C8\u30A2\u30C3\u30D7",def:"KeyE"},{id:"shiftDown",name:"\u30B7\u30D5\u30C8\u30C0\u30A6\u30F3",def:"KeyD"},{id:"left",name:"\u5DE6\u30CF\u30F3\u30C9\u30EB",def:"KeyJ"},{id:"right",name:"\u53F3\u30CF\u30F3\u30C9\u30EB",def:"KeyL"},{id:"mirror",name:"\u30D0\u30C3\u30AF\u30DF\u30E9\u30FC",def:"KeyK"},{id:"view",name:"\u8996\u70B9\u5207\u308A\u66FF\u3048",def:"KeyI"},{id:"flash",name:"\u30D1\u30C3\u30B7\u30F3\u30B0",def:"KeyH"},{id:"interact",name:"\u6C7A\u5B9A\uFF0F\u5165\u5E97",def:"Enter"},{id:"reset",name:"\u8ECA\u4E21\u30EA\u30BB\u30C3\u30C8",def:"KeyR"}],bd="ibr.settings.v1",Pr={keys:Object.fromEntries(Lr.map(s=>[s.id,s.def])),bgm:.6,se:.7,transmission:"AT",abs:!0,tcs:!0,mirror:!0,defaultsRev:2,brightness:1};function wd(){try{let s=localStorage.getItem(bd);if(s){let t=JSON.parse(s);(!t.defaultsRev||t.defaultsRev<2)&&(t.transmission="AT",t.tcs=!0,t.defaultsRev=2);let e={...Pr.keys,...t.keys||{}};for(let n of Lr)!(t.keys||{})[n.id]&&Object.entries(e).some(([i,r])=>i!==n.id&&r===e[n.id])&&(e[n.id]="");return{...Pr,...t,keys:e}}}catch{}return structuredClone(Pr)}function ks(s){try{localStorage.setItem(bd,JSON.stringify(s))}catch{}}function fa(s){return s?s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):{ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Space:"Space",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",Enter:"Enter",Semicolon:";",Comma:",",Period:".",Slash:"/"}[s]||s:"-"}var da=class{constructor(t){this.settings=t,this.down=new Set,this.pressed=new Set,this.listeners=[],this.capture=null,window.addEventListener("keydown",e=>{if(this.capture){e.preventDefault();let n=this.capture;this.capture=null,n(e.code);return}this.down.has(e.code)||this.pressed.add(e.code),this.down.add(e.code);for(let n of this.listeners)n(e);["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(e.code)&&e.preventDefault()}),window.addEventListener("keyup",e=>{this.down.delete(e.code)}),window.addEventListener("blur",()=>this.down.clear())}onKey(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(e=>e!==t)}}key(t){return this.settings.keys[t]}held(t){return this.down.has(this.key(t))}hit(t){return this.pressed.has(this.key(t))}hitCode(t){return this.pressed.has(t)}endFrame(){this.pressed.clear()}};var A_={town:"assets/audio/town_midnight_bliss.mp3",battle:"assets/audio/battle.mp3"},pa=class{constructor(t){this.settings=t,this.ctx=null,this.tracks={},this.current=null,this.engines=[]}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.applyVolume();let e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;this.noise=n}if(this.ctx.state==="suspended"&&this.ctx.resume(),this.pending){let t=this.pending;this.pending=null,this.playBgm(t)}}applyVolume(){this.master&&(this.master.gain.value=this.settings.se);for(let t of Object.values(this.tracks))t.volume=this.current&&this.tracks[this.current]===t?this.settings.bgm:t.volume}playBgm(t){if(this.current===t)return;let e=this.current?this.tracks[this.current]:null;if(this.current=t,e&&this.fade(e,0,900,!0),!t)return;let n=this.tracks[t];n||(n=new Audio(A_[t]),n.loop=!0,n.volume=0,this.tracks[t]=n),n.currentTime=0;let i=n.play();i&&i.catch&&i.catch(()=>{this.pending=t,this.current=null}),this.fade(n,this.settings.bgm,900,!1)}fade(t,e,n,i){let r=t.volume,o=performance.now(),a=()=>{let c=Math.min(1,(performance.now()-o)/n);t.volume=Math.max(0,Math.min(1,r+(e-r)*c)),c<1?requestAnimationFrame(a):i&&t.pause()};a()}setBgmVolume(t){this.settings.bgm=t,this.current&&this.tracks[this.current]&&(this.tracks[this.current].volume=t)}createEngine(t){if(!this.ctx)return null;let e=this.ctx,n=e.createGain();n.gain.value=0;let i=e.createStereoPanner?e.createStereoPanner():null,r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=800,r.Q.value=2;let o=e.createOscillator();o.type="sawtooth";let a=e.createOscillator();a.type="square";let c=e.createOscillator();c.type="triangle";let l=e.createGain();l.gain.value=.5;let h=e.createGain();h.gain.value=.22;let u=e.createGain();u.gain.value=.35,o.connect(l).connect(r),a.connect(h).connect(r),c.connect(u).connect(r),r.connect(n),i?(n.connect(i),i.connect(this.master)):n.connect(this.master);let d=e.createBufferSource();d.buffer=this.noise,d.loop=!0;let f=e.createBiquadFilter();f.type="bandpass",f.frequency.value=1100,f.Q.value=6;let m=e.createGain();m.gain.value=0,d.connect(f).connect(m).connect(this.master);let x=e.createOscillator();x.type="sine",x.frequency.value=3e3;let g=e.createGain();g.gain.value=0,x.connect(g).connect(this.master);let p=e.createBufferSource();p.buffer=this.noise,p.loop=!0;let _=e.createBiquadFilter();_.type="lowpass",_.frequency.value=500;let v=e.createGain();v.gain.value=0,p.connect(_).connect(v).connect(this.master);for(let E of[o,a,c,d,x,p])E.start();let y={spec:t,out:n,lp:r,o1:o,o2:a,o3:c,sqg:m,bp:f,tbg:g,tb:x,wg:v,pan:i,nodes:[o,a,c,d,x,p]};return this.engines.push(y),y}updateEngine(t,e,n=1,i=0){if(!t||!this.ctx)return;let r=this.ctx.currentTime,o=t.spec,a=e.rpm/60*(o.cylinders/2),c=e.input.throttle;t.o1.frequency.setTargetAtTime(a,r,.02),t.o2.frequency.setTargetAtTime(a*.5,r,.02),t.o3.frequency.setTargetAtTime(a*2,r,.02),t.lp.frequency.setTargetAtTime(500+c*2200+o.loud*1500+e.rpm*.15,r,.05),t.out.gain.setTargetAtTime(n*(.1+c*.16+o.loud*.08),r,.05);let l=Math.max(0,Math.min(1,(e.slip-1.05)*1.5))*Math.min(1,e.speed/5);t.sqg.gain.setTargetAtTime(n*l*.18,r,.05),t.bp.frequency.setTargetAtTime(900+Math.min(e.speed,40)*8,r,.1),t.tb.frequency.setTargetAtTime(2500+e.boost*4e3,r,.05),t.tbg.gain.setTargetAtTime(n*Math.min(.025,e.boost*.02),r,.05),t.wg.gain.setTargetAtTime(n*Math.min(.12,e.speed*e.speed*6e-5),r,.1),t.pan&&t.pan.pan.setTargetAtTime(i,r,.05)}destroyEngine(t){if(t){for(let e of t.nodes)try{e.stop()}catch{}try{t.out.disconnect(),t.sqg.disconnect(),t.tbg.disconnect(),t.wg.disconnect()}catch{}this.engines=this.engines.filter(e=>e!==t)}}destroyAllEngines(){for(let t of[...this.engines])this.destroyEngine(t)}beep(t=880,e=.15,n=.3){if(!this.ctx)return;let i=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.value=t,i.type="square",r.gain.value=n,r.gain.setTargetAtTime(0,this.ctx.currentTime+e*.7,.03),i.connect(r).connect(this.master),i.start(),i.stop(this.ctx.currentTime+e+.1)}};function O(s,t={},...e){let n=document.createElement(s);for(let[i,r]of Object.entries(t||{}))i==="class"?n.className=r:i==="style"&&typeof r=="object"?Object.assign(n.style,r):i.startsWith("on")&&typeof r=="function"?n.addEventListener(i.slice(2),r):i==="html"?n.innerHTML=r:r!==!1&&r!=null&&n.setAttribute(i,r);for(let i of e.flat())i==null||i===!1||n.appendChild(typeof i=="string"||typeof i=="number"?document.createTextNode(String(i)):i);return n}var $e=class{constructor(t,e,n={}){this.game=t,this.items=e,this.index=Math.max(0,e.findIndex(i=>!i.disabled)),this.onBack=n.onBack,this.root=O("div",{class:"menu "+(n.className||"")}),this.render(),this.off=t.input.onKey(i=>this.key(i))}render(){this.root.innerHTML="",this.items.forEach((t,e)=>{let n=O("button",{class:"menu-item"+(e===this.index?" sel":"")+(t.disabled?" disabled":""),onclick:()=>{t.disabled||(this.index=e,this.activate())},onmouseenter:()=>{t.disabled||(this.index=e,this.highlight())}},O("span",{class:"label"},t.label),t.sub?O("span",{class:"sub"},t.sub):null);this.root.appendChild(n)})}highlight(){[...this.root.children].forEach((t,e)=>t.classList.toggle("sel",e===this.index))}move(t){let e=this.items.length;for(let n=1;n<=e;n++){let i=(this.index+t*n+e*10)%e;if(!this.items[i].disabled){this.index=i;break}}this.highlight(),this.game.audio.beep(660,.04,.08)}activate(){let t=this.items[this.index];!t||t.disabled||(this.game.audio.beep(990,.06,.1),t.action&&t.action())}key(t){this.root.isConnected&&(t.code==="ArrowUp"||t.code==="ArrowLeft"?this.move(-1):t.code==="ArrowDown"||t.code==="ArrowRight"?this.move(1):t.code==="Enter"||t.code==="Space"?this.activate():(t.code==="Escape"||t.code==="Backspace")&&this.onBack&&(this.game.audio.beep(440,.05,.08),this.onBack()))}destroy(){this.off(),this.root.remove()}};function Xe(s,...t){return O("div",{class:"panel"},s?O("div",{class:"panel-title"},s):null,...t)}var ma=class{constructor(t){this.container=t,this.settings=wd(),this.renderer=new zo({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=be,this.renderer.toneMapping=Ol,this.applyBrightness(),t.appendChild(this.renderer.domElement),this.ui=O("div",{class:"ui-root"}),t.appendChild(this.ui),this.overlay=O("div",{class:"fade-overlay"}),t.appendChild(this.overlay),this.input=new da(this.settings),this.audio=new pa(this.settings),this.worlds={},this.setArea("west"),this.rig=new ua(window.innerWidth/window.innerHeight),this.mode=null,this.mirrorOn=!1,this.story=null,this.clock=performance.now(),this.t=0,window.addEventListener("resize",()=>this.resize());let e=()=>this.audio.unlock();window.addEventListener("keydown",e),window.addEventListener("pointerdown",e),requestAnimationFrame(()=>this.loop())}applyBrightness(){this.renderer.toneMappingExposure=1.4*(this.settings.brightness||1)}resize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.rig.camera.aspect=window.innerWidth/window.innerHeight,this.rig.camera.updateProjectionMatrix()}setArea(t){return this.worlds[t]||(this.worlds[t]=new ha(this.renderer,t)),this.world=this.worlds[t],this.area=t,this.world}setMode(t){this.mode&&this.mode.exit&&this.mode.exit(),this.ui.innerHTML="",this.input.pressed.clear(),this.mirrorOn=!1,this.mode=t,t.enter&&t.enter()}async transition(t,e=350){this.overlay.classList.add("on"),await new Promise(n=>setTimeout(n,e)),await t(),await new Promise(n=>setTimeout(n,60)),this.overlay.classList.remove("on")}loop(){let t=performance.now(),e=Math.min(.05,(t-this.clock)/1e3);this.clock=t,this.t+=e;try{this.mode&&this.mode.update&&this.mode.update(e),this.world.update(this.t),this.render()}catch(n){console.error(n)}this.input.endFrame(),requestAnimationFrame(()=>this.loop())}debugStep(t,e=1/60){for(let n=0;n<t;n+=e)this.mode&&this.mode.update&&this.mode.update(e),this.input.endFrame()}render(){let t=this.renderer,e=window.innerWidth,n=window.innerHeight;if(t.setScissorTest(!1),t.setViewport(0,0,e,n),t.render(this.world.scene,this.rig.camera),this.mirrorOn&&this.mirrorModel){let i=Math.round(e*.3),r=Math.round(i/3.2),o=Math.round((e-i)/2),a=n-r-14;this.rig.updateMirror(this.mirrorModel),this.rig.mirrorCam.aspect=i/r,this.rig.mirrorCam.updateProjectionMatrix();let c=this.mirrorModel.userData.cockpit.visible;this.mirrorModel.userData.cockpit.visible=!1,t.setScissorTest(!0),t.setScissor(o,a,i,r),t.setViewport(o,a,i,r),t.render(this.world.scene,this.rig.mirrorCam),t.setScissorTest(!1),this.mirrorModel.userData.cockpit.visible=c}}};function Ed(s,t){let e=s.settings,n=O("div",{class:"screen settings"}),i=0,r=[],o=(d,f)=>Lr.find(m=>m.id!==f&&e.keys[m.id]===d),a=()=>{n.innerHTML="",r.length=0;let d=O("div",{class:"key-list"});Lr.forEach(p=>{let _=O("button",{class:"key-btn"},fa(e.keys[p.id])),v=O("div",{class:"key-row"},O("span",{class:"key-name"},p.name),_);_.onclick=()=>l(p,_),r.push({row:v,act:()=>l(p,_)}),d.appendChild(v)});let f=(p,_,v,y)=>{let E=O("button",{class:"key-btn"},_()),A=O("div",{class:"key-row"},O("span",{class:"key-name"},p),E),S=()=>{v(y),E.textContent=_(),ks(e)};E.onclick=S,r.push({row:A,act:S}),d.appendChild(A)},m=(p,_)=>{let v=O("input",{type:"range",min:0,max:1,step:.05,value:e[_]});v.oninput=()=>{e[_]=parseFloat(v.value),_==="bgm"?s.audio.setBgmVolume(e.bgm):s.audio.applyVolume(),ks(e)};let y=O("div",{class:"key-row"},O("span",{class:"key-name"},p),v);r.push({row:y,act:()=>{},left:()=>{v.value=Math.max(0,e[_]-.05),v.oninput()},right:()=>{v.value=Math.min(1,e[_]+.05),v.oninput()}}),d.appendChild(y)};d.appendChild(O("div",{class:"key-sep"},"\u30C9\u30E9\u30A4\u30D3\u30F3\u30B0")),f("\u30C8\u30E9\u30F3\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",()=>e.transmission==="MT"?"MT\uFF08\u30DE\u30CB\u30E5\u30A2\u30EB\uFF09":"AT\uFF08\u30AA\u30FC\u30C8\u30DE\uFF09",()=>{e.transmission=e.transmission==="MT"?"AT":"MT"}),f("ABS",()=>e.abs?"ON":"OFF",()=>{e.abs=!e.abs}),f("\u30C8\u30E9\u30AF\u30B7\u30E7\u30F3\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB",()=>e.tcs?"ON":"OFF",()=>{e.tcs=!e.tcs}),d.appendChild(O("div",{class:"key-sep"},"\u753B\u9762"));{let p=O("span",{class:"key-val"},`${Math.round(e.brightness*100)}%`),_=O("input",{type:"range",min:.5,max:2,step:.05,value:e.brightness});_.oninput=()=>{e.brightness=parseFloat(_.value),p.textContent=`${Math.round(e.brightness*100)}%`,s.applyBrightness(),ks(e)};let v=O("div",{class:"key-row"},O("span",{class:"key-name"},"\u660E\u308B\u3055"),O("span",{},p," ",_));r.push({row:v,act:()=>{},left:()=>{_.value=Math.max(.5,e.brightness-.05),_.oninput()},right:()=>{_.value=Math.min(2,e.brightness+.05),_.oninput()}}),d.appendChild(v)}d.appendChild(O("div",{class:"key-sep"},"\u30B5\u30A6\u30F3\u30C9")),m("BGM\u97F3\u91CF","bgm"),m("\u52B9\u679C\u97F3\u30FB\u30A8\u30F3\u30B8\u30F3\u97F3\u91CF","se");let x=O("button",{class:"menu-item small"},"\u30AD\u30FC\u914D\u7F6E\u3092\u521D\u671F\u5316");x.onclick=()=>{e.keys={...Pr.keys},ks(e),a()},r.push({row:x,act:()=>x.onclick()});let g=O("button",{class:"menu-item small"},"\u623B\u308B");g.onclick=()=>u(),r.push({row:g,act:()=>u()}),n.appendChild(Xe("COMMON SETTING",O("div",{class:"hint"},"\u9805\u76EE\u3092\u9078\u3093\u3067 Enter\uFF08\u307E\u305F\u306F\u30AF\u30EA\u30C3\u30AF\uFF09\u2192 \u5272\u308A\u5F53\u3066\u305F\u3044\u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002Esc\u3067\u623B\u308B"),d,O("div",{class:"row-btns"},x,g))),c()},c=()=>r.forEach((d,f)=>d.row.classList.toggle("sel",f===i)),l=(d,f)=>{f.textContent="\u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u2026",f.classList.add("wait"),s.input.capture=m=>{if(m==="Escape"){a();return}let x=o(m,d.id);x&&(e.keys[x.id]=e.keys[d.id]),e.keys[d.id]=m,ks(e),a()}},h=s.input.onKey(d=>{!n.isConnected||s.input.capture||(d.code==="ArrowDown"?(i=(i+1)%r.length,c()):d.code==="ArrowUp"?(i=(i-1+r.length)%r.length,c()):d.code==="ArrowLeft"?r[i].left?.():d.code==="ArrowRight"?r[i].right?.():d.code==="Enter"?setTimeout(()=>r[i].act(),0):d.code==="Escape"&&u())}),u=()=>{h(),s.input.capture=null,n.remove(),t&&t()};return a(),s.ui.appendChild(n),u}var _e={"86-GR":{id:"86-GR",name:"86-GR",ref:"\u30C8\u30E8\u30BF GR86 RZ (ZN8\u578B 6MT)",drive:"FR",mass:1270,frontWeight:.535,cgHeight:.46,length:4.265,width:1.775,height:1.31,wheelbase:2.575,trackF:1.52,trackR:1.55,tireRadius:.315,cd:.33,area:1.95,steerLock:.56,gears:[3.626,2.188,1.541,1.213,1,.767],reverse:3.437,final:4.1,brakeTorque:4200,brakeBias:.64,rollFront:.55,inertiaK:1,published:"235PS/7000rpm, 250N\xB7m/3700rpm, 1270kg",body:{style:"coupe",hood:.36,cabin:.42,roof:.28,tail:.22,wing:"duck"},stock:{engine:"eng_f4_24",boreup:null,muffler:"muf_stock",intercooler:null,turbo:null,tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"WRX-IMP":{id:"WRX-IMP",name:"WRX-IMP",ref:"\u30B9\u30D0\u30EB \u30A4\u30F3\u30D7\u30EC\u30C3\u30B5 WRX STI (GDB\u578B F\u578B)",drive:"AWD",awdFront:.41,mass:1430,frontWeight:.6,cgHeight:.5,length:4.465,width:1.74,height:1.425,wheelbase:2.54,trackF:1.485,trackR:1.48,tireRadius:.317,cd:.33,area:2.05,steerLock:.55,gears:[3.636,2.375,1.761,1.346,.971,.756],reverse:3.545,final:3.9,brakeTorque:4900,brakeBias:.66,rollFront:.56,inertiaK:1.05,published:"280PS/6400rpm, 422N\xB7m/4400rpm, 1430kg",body:{style:"sedan",hood:.36,cabin:.46,roof:.3,tail:.2,wing:"high",scoop:!0},stock:{engine:"eng_f4_20t",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_mid",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"RS-RS":{id:"RS-RS",name:"RS-RS",ref:"\u30DE\u30C4\u30C0 \u30ED\u30FC\u30C9\u30B9\u30BF\u30FC RS (ND5RC\u578B 2018\u5E74\u301C)",drive:"FR",mass:1020,frontWeight:.5,cgHeight:.44,length:3.915,width:1.735,height:1.235,wheelbase:2.31,trackF:1.495,trackR:1.505,tireRadius:.308,cd:.35,area:1.85,steerLock:.58,gears:[5.087,2.991,2.035,1.594,1.286,1],reverse:4.533,final:2.866,brakeTorque:3500,brakeBias:.62,rollFront:.54,inertiaK:.9,published:"132PS/7000rpm, 152N\xB7m/4500rpm, 1020kg",body:{style:"roadster",hood:.42,cabin:.3,roof:0,tail:.26,wing:"none"},stock:{engine:"eng_s4_15",boreup:null,muffler:"muf_stock",intercooler:null,turbo:null,tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"SWIFT-S":{id:"SWIFT-S",name:"SWIFT-S",ref:"\u30B9\u30BA\u30AD \u30B9\u30A4\u30D5\u30C8\u30B9\u30DD\u30FC\u30C4 (ZC33S\u578B 6MT)",drive:"FF",mass:970,frontWeight:.62,cgHeight:.52,length:3.89,width:1.735,height:1.5,wheelbase:2.45,trackF:1.51,trackR:1.515,tireRadius:.304,cd:.33,area:2.1,steerLock:.58,gears:[3.615,2.047,1.518,1.156,.918,.794],reverse:3.481,final:3.944,brakeTorque:3300,brakeBias:.7,rollFront:.6,inertiaK:.9,published:"140PS/5500rpm, 230N\xB7m/2500-3500rpm, 970kg",body:{style:"hatch",hood:.3,cabin:.55,roof:.42,tail:.1,wing:"roof"},stock:{engine:"eng_s4_14t",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_small",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"80-Supra":{id:"80-Supra",name:"80-Supra",ref:"\u30C8\u30E8\u30BF \u30B9\u30FC\u30D7\u30E9 RZ (JZA80\u578B 6MT)",drive:"FR",mass:1510,frontWeight:.53,cgHeight:.5,length:4.52,width:1.81,height:1.275,wheelbase:2.55,trackF:1.52,trackR:1.525,tireRadius:.318,cd:.31,area:2,steerLock:.55,gears:[3.827,2.36,1.685,1.312,1,.793],reverse:3.28,final:3.266,brakeTorque:5200,brakeBias:.64,rollFront:.55,inertiaK:1.1,published:"280PS/5600rpm, 451N\xB7m/3600rpm, 1510kg",body:{style:"gt",hood:.42,cabin:.36,roof:.27,tail:.22,wing:"loop"},stock:{engine:"eng_s6_30",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_seq",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"BRZ-ZD":{id:"BRZ-ZD",name:"BRZ-ZD",ref:"\u30B9\u30D0\u30EB BRZ S (ZD8\u578B 6MT)",drive:"FR",mass:1270,frontWeight:.535,cgHeight:.46,length:4.265,width:1.775,height:1.31,wheelbase:2.575,trackF:1.52,trackR:1.55,tireRadius:.315,cd:.33,area:1.95,steerLock:.56,gears:[3.626,2.188,1.541,1.213,1,.767],reverse:3.437,final:4.1,brakeTorque:4200,brakeBias:.64,rollFront:.57,inertiaK:1,published:"235PS/7000rpm, 250N\xB7m/3700rpm, 1270kg",body:{style:"coupe",hood:.37,cabin:.42,roof:.28,tail:.22,wing:"duck"},stock:{engine:"eng_f4_24",boreup:null,muffler:"muf_stock",intercooler:null,turbo:null,tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"S2K-AP":{id:"S2K-AP",name:"S2K-AP",ref:"\u30DB\u30F3\u30C0 S2000 (AP2\u578B)",drive:"FR",mass:1250,frontWeight:.5,cgHeight:.44,length:4.135,width:1.75,height:1.285,wheelbase:2.4,trackF:1.47,trackR:1.51,tireRadius:.314,cd:.34,area:1.85,steerLock:.56,gears:[3.133,2.045,1.481,1.161,.97,.81],reverse:2.8,final:4.1,brakeTorque:3900,brakeBias:.62,rollFront:.55,inertiaK:.95,published:"242PS/7800rpm, 221N\xB7m/6500-7500rpm, 1250kg",body:{style:"roadster",hood:.44,cabin:.3,roof:0,tail:.24,wing:"none"},stock:{engine:"eng_s4_22",boreup:null,muffler:"muf_stock",intercooler:null,turbo:null,tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"EVO-IX":{id:"EVO-IX",name:"EVO-IX",ref:"\u30DF\u30C4\u30D3\u30B7 \u30E9\u30F3\u30B5\u30FC\u30A8\u30DC\u30EA\u30E5\u30FC\u30B7\u30E7\u30F3IX GSR (CT9A\u578B 6MT)",drive:"AWD",awdFront:.5,mass:1400,frontWeight:.6,cgHeight:.52,length:4.49,width:1.77,height:1.45,wheelbase:2.625,trackF:1.515,trackR:1.515,tireRadius:.322,cd:.34,area:2.1,steerLock:.55,gears:[2.909,1.944,1.434,1.1,.868,.693],reverse:3.25,final:4.583,brakeTorque:5e3,brakeBias:.66,rollFront:.56,inertiaK:1.05,published:"280PS/6500rpm, 400N\xB7m/3000rpm, 1400kg",body:{style:"sedan",hood:.34,cabin:.47,roof:.3,tail:.2,wing:"high",scoop:!0},stock:{engine:"eng_s4_20t_evo",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_small",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"Z-32":{id:"Z-32",name:"Z-32",ref:"\u30CB\u30C3\u30B5\u30F3 \u30D5\u30A7\u30A2\u30EC\u30C7\u30A3Z 300ZX \u30C4\u30A4\u30F3\u30BF\u30FC\u30DC (Z32\u578B 5MT)",drive:"FR",mass:1510,frontWeight:.55,cgHeight:.48,length:4.31,width:1.79,height:1.25,wheelbase:2.45,trackF:1.495,trackR:1.535,tireRadius:.316,cd:.31,area:1.95,steerLock:.55,gears:[3.321,1.902,1.308,1,.759],reverse:3.382,final:3.692,brakeTorque:5100,brakeBias:.63,rollFront:.55,inertiaK:1.1,published:"280PS/6400rpm, 388N\xB7m/3600rpm, 1510kg",body:{style:"gt",hood:.4,cabin:.36,roof:.24,tail:.24,wing:"duck"},stock:{engine:"eng_v6_30t",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_twin",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"R34-GTR":{id:"R34-GTR",name:"R34-GTR",ref:"\u30CB\u30C3\u30B5\u30F3 \u30B9\u30AB\u30A4\u30E9\u30A4\u30F3GT-R V\u30B9\u30DA\u30C3\u30AF (BNR34\u578B 6MT)",drive:"AWD",awdFront:.35,mass:1560,frontWeight:.57,cgHeight:.5,length:4.6,width:1.785,height:1.36,wheelbase:2.665,trackF:1.48,trackR:1.49,tireRadius:.327,cd:.33,area:2.15,steerLock:.55,gears:[3.827,2.36,1.685,1.312,1,.793],reverse:3.28,final:3.545,brakeTorque:5600,brakeBias:.62,rollFront:.55,inertiaK:1.12,published:"280PS/6800rpm, 392N\xB7m/4400rpm, 1560kg",body:{style:"sedan",hood:.38,cabin:.4,roof:.28,tail:.22,wing:"high"},stock:{engine:"eng_s6_26t",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_twin",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}}},wy=Object.keys(_e),Ke={name:"\u9ED2\u7895\u30AB\u30B1\u30EB",car:"86-GR",color:14278115};var Hs=[{id:"engine",name:"\u30A8\u30F3\u30B8\u30F3",required:!0},{id:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7",required:!1},{id:"muffler",name:"\u30DE\u30D5\u30E9\u30FC",required:!0},{id:"intercooler",name:"\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",required:!1},{id:"turbo",name:"\u30BF\u30FC\u30DC",required:!1},{id:"tire",name:"\u30BF\u30A4\u30E4",required:!0},{id:"suspension",name:"\u30B5\u30B9\u30DA\u30F3\u30B7\u30E7\u30F3",required:!0},{id:"brake",name:"\u30D6\u30EC\u30FC\u30AD",required:!0},{id:"transmission",name:"\u30C8\u30E9\u30F3\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",required:!0},{id:"aero",name:"\u30A8\u30A2\u30ED",required:!1}],Dr=Object.fromEntries(Hs.map(s=>[s.id,s.name])),$t=s=>s,Nr=[$t({id:"eng_f4_24",cat:"engine",name:"F4\u578B2400cc\uFF08\u6C34\u5E73\u5BFE\u5411\uFF09",rank:2,price:null,weight:0,desc:"86-GR\u7D14\u6B63\u3002\u4F4E\u91CD\u5FC3\u306E\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52NA\u3002235PS/7000rpm 250N\xB7m/3700rpm",layout:"\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52",displacement:2387,cylinders:4,idle:800,redline:7500,limiter:7600,inertia:.16,torque:[[800,150],[1500,175],[2500,212],[3e3,232],[3700,250],[4500,238],[5500,240],[6500,244],[7e3,236],[7500,214],[7800,190]]}),$t({id:"eng_f4_20t",cat:"engine",name:"F4T\u578B2000cc\uFF08\u6C34\u5E73\u5BFE\u5411\u30FB\u904E\u7D66\u524D\u63D0\uFF09",rank:3,price:null,weight:8,desc:"WRX-IMP\u7D14\u6B63\u3002\u30BF\u30FC\u30DC\u524D\u63D0\u306E\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52\u3002\u7D14\u6B63\u30BF\u30FC\u30D3\u30F3\u3067280PS/422N\xB7m",layout:"\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52",displacement:1994,cylinders:4,idle:850,redline:8e3,limiter:8100,inertia:.17,torque:[[800,110],[1500,140],[2e3,160],[3e3,195],[4e3,222],[4400,228],[5e3,205],[5500,188],[6e3,178],[6400,175],[7e3,156],[8e3,126],[8300,110]]}),$t({id:"eng_s4_15",cat:"engine",name:"S4\u578B1500cc\uFF08\u76F4\u5217\uFF09",rank:1,price:null,weight:-15,desc:"RS-RS\u7D14\u6B63\u3002\u8EFD\u91CF\u306A\u76F4\u52174\u6C17\u7B52NA\u3002132PS/7000rpm 152N\xB7m/4500rpm",layout:"\u76F4\u52174\u6C17\u7B52",displacement:1496,cylinders:4,idle:750,redline:7500,limiter:7600,inertia:.11,torque:[[750,100],[1500,118],[2e3,128],[3e3,140],[4500,152],[5500,148],[6500,140],[7e3,132],[7500,118],[7800,100]]}),$t({id:"eng_s4_14t",cat:"engine",name:"S4T\u578B1400cc\uFF08\u76F4\u5217\u30FB\u904E\u7D66\u524D\u63D0\uFF09",rank:1,price:null,weight:-18,desc:"SWIFT-S\u7D14\u6B63\u3002\u5C0F\u6392\u6C17\u91CF\u76F4\u5674\u30BF\u30FC\u30DC\u524D\u63D0\u3002\u7D14\u6B63\u30BF\u30FC\u30D3\u30F3\u3067140PS/230N\xB7m",layout:"\u76F4\u52174\u6C17\u7B52",displacement:1371,cylinders:4,idle:750,redline:6200,limiter:6300,inertia:.1,torque:[[750,85],[1500,112],[2e3,128],[2500,137],[3500,137],[4500,129],[5500,118],[6200,106],[6500,95]]}),$t({id:"eng_s6_30",cat:"engine",name:"S6T\u578B3000cc\uFF08\u76F4\u52176\u6C17\u7B52\uFF09",rank:4,price:null,weight:45,desc:"80-Supra\u7D14\u6B63\u3002\u9811\u4E08\u306A\u76F4\u52176\u6C17\u7B52\u3002\u7D14\u6B63\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u3067280PS/451N\xB7m",layout:"\u76F4\u52176\u6C17\u7B52",displacement:2997,cylinders:6,idle:700,redline:6800,limiter:6900,inertia:.24,torque:[[700,150],[1500,200],[2e3,220],[3e3,245],[3600,250],[4500,232],[5600,194],[6500,166],[7e3,148]]}),$t({id:"eng_v6_30",cat:"engine",name:"V6\u578B3000cc\uFF08V\u578B\uFF09",rank:4,price:null,weight:30,desc:"\u9AD8\u56DE\u8EE2\u578BV6\u81EA\u7136\u5438\u6C17\u3002\u592A\u3044\u30C8\u30EB\u30AF\u3068\u4F38\u3073\u3002280PS/6800rpm 300N\xB7m/4800rpm",layout:"V\u578B6\u6C17\u7B52",displacement:2987,cylinders:6,idle:750,redline:7400,limiter:7500,inertia:.21,torque:[[750,180],[1500,215],[2500,260],[4e3,290],[4800,300],[6e3,295],[6800,289],[7400,258],[7700,225]]}),$t({id:"eng_r2_13",cat:"engine",name:"R2\u578B1300cc\uFF08\u30ED\u30FC\u30BF\u30EA\u30FC\uFF09",rank:5,price:null,weight:-25,desc:"\u8D85\u8EFD\u91CF\u30FB\u8D85\u9AD8\u56DE\u8EE2\u30ED\u30FC\u30BF\u30EA\u30FC\u3002250PS/8500rpm 216N\xB7m/5500rpm",layout:"2\u30ED\u30FC\u30BF\u30FC",displacement:1308,cylinders:3,idle:900,redline:9e3,limiter:9200,inertia:.09,torque:[[900,110],[2e3,140],[3e3,168],[4500,205],[5500,216],[7e3,212],[8500,207],[9e3,192],[9400,170]]}),$t({id:"eng_s4_22",cat:"engine",name:"S4V\u578B2200cc\uFF08\u76F4\u5217\u30FB\u9AD8\u56DE\u8EE2\uFF09",rank:4,price:null,weight:-10,desc:"S2K-AP\u7D14\u6B63\u30029000rpm\u8FD1\u304F\u307E\u3067\u56DE\u308B\u9AD8\u56DE\u8EE2\u578BNA\u3002242PS/7800rpm 221N\xB7m/6500-7500rpm",layout:"\u76F4\u52174\u6C17\u7B52",displacement:2156,cylinders:4,idle:800,redline:8e3,limiter:8200,inertia:.11,torque:[[800,140],[1500,165],[3e3,190],[4500,202],[5500,205],[5900,200],[6500,221],[7500,221],[7800,218],[8200,200],[8500,170]]}),$t({id:"eng_s4_20t_evo",cat:"engine",name:"S4T\u578B2000cc\uFF08\u76F4\u5217\u30FB\u30C4\u30A4\u30F3\u30B9\u30AF\u30ED\u30FC\u30EB\u904E\u7D66\u524D\u63D0\uFF09",rank:4,price:null,weight:5,desc:"EVO-IX\u7D14\u6B63\u3002\u4F4E\u56DE\u8EE2\u304B\u3089\u592A\u3044\u30C8\u30EB\u30AF\u306E\u76F4\u52174\u6C17\u7B52\u30BF\u30FC\u30DC\u524D\u63D0\u3002\u7D14\u6B63\u30BF\u30FC\u30D3\u30F3\u3067280PS/400N\xB7m",layout:"\u76F4\u52174\u6C17\u7B52",displacement:1997,cylinders:4,idle:850,redline:7e3,limiter:7200,inertia:.15,torque:[[800,150],[1050,179],[1300,207],[1550,236],[1800,237],[2050,220],[2300,209],[2550,217],[2800,229],[3050,238],[3550,236],[4050,235],[4550,236],[5050,236],[5550,231],[6050,225],[6550,218],[7050,206],[7300,197]]}),$t({id:"eng_v6_30t",cat:"engine",name:"V6T\u578B3000cc\uFF08V\u578B\u30FB\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC\u524D\u63D0\uFF09",rank:4,price:null,weight:40,desc:"Z-32\u7D14\u6B63\u3002V\u578B6\u6C17\u7B52\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC\u524D\u63D0\u3002\u7D14\u6B63\u30BF\u30FC\u30D3\u30F3\u3067280PS/388N\xB7m",layout:"V\u578B6\u6C17\u7B52",displacement:2960,cylinders:6,idle:700,redline:7e3,limiter:7100,inertia:.22,torque:[[700,150],[950,169],[1200,188],[1450,206],[1700,230],[1950,255],[2200,278],[2450,301],[2700,323],[2950,336],[3200,310],[3450,272],[3700,237],[3950,209],[4200,195],[4700,189],[5200,182],[5700,172],[6200,160],[6700,147],[7200,133]]}),$t({id:"eng_s6_26t",cat:"engine",name:"S6T\u578B2600cc\uFF08\u76F4\u52176\u6C17\u7B52\u30FB\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC\u524D\u63D0\uFF09",rank:5,price:null,weight:50,desc:"R34-GTR\u7D14\u6B63\u3002\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u8010\u6027\u306E\u9AD8\u3044\u76F4\u52176\u6C17\u7B52\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC\u524D\u63D0\u3002\u7D14\u6B63\u30BF\u30FC\u30D3\u30F3\u3067280PS/392N\xB7m",layout:"\u76F4\u52176\u6C17\u7B52",displacement:2568,cylinders:6,idle:800,redline:8e3,limiter:8100,inertia:.2,torque:[[800,140],[1050,154],[1300,169],[1550,184],[1800,204],[2050,225],[2300,247],[2550,270],[2800,292],[3050,293],[3300,265],[3550,236],[3800,215],[4050,203],[4300,197],[4800,192],[5300,185],[5800,171],[6300,158],[6800,148],[7300,138],[7800,126],[8100,118]]}),$t({id:"bore_1",cat:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7\u30AD\u30C3\u30C8 Stage1",rank:1,price:12e4,weight:0,desc:"\u6392\u6C17\u91CF+3%\u76F8\u5F53\u3002\u5168\u57DF\u30C8\u30EB\u30AF+4%",torqueMul:1.04}),$t({id:"bore_2",cat:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7\u30AD\u30C3\u30C8 Stage2",rank:3,price:null,weight:0,desc:"\u6392\u6C17\u91CF+6%\u76F8\u5F53\u3002\u5168\u57DF\u30C8\u30EB\u30AF+8%",torqueMul:1.08}),$t({id:"bore_3",cat:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7\u30AD\u30C3\u30C8 Stage3",rank:4,price:null,weight:1,desc:"\u6392\u6C17\u91CF+10%\u76F8\u5F53\u3002\u5168\u57DF\u30C8\u30EB\u30AF+12%\u3001\u30EC\u30D6-200rpm",torqueMul:1.12,redlineDelta:-200}),$t({id:"muf_stock",cat:"muffler",name:"\u7D14\u6B63\u30DE\u30D5\u30E9\u30FC",rank:1,price:1e4,weight:0,desc:"\u9759\u304B\u3067\u4F4E\u901F\u30C8\u30EB\u30AF\u91CD\u8996",low:1,high:1,loud:0}),$t({id:"muf_sport",cat:"muffler",name:"\u30B9\u30DD\u30FC\u30C4\u30DE\u30D5\u30E9\u30FC",rank:2,price:8e4,weight:-4,desc:"\u9AD8\u56DE\u8EE2\u30C8\u30EB\u30AF+4%",low:1.01,high:1.04,loud:.3}),$t({id:"muf_straight",cat:"muffler",name:"\u30B9\u30C8\u30EC\u30FC\u30C8\u30DE\u30D5\u30E9\u30FC",rank:3,price:null,weight:-7,desc:"\u4F4E\u901F-2% \u9AD8\u56DE\u8EE2+7%\u3002\u97F3\u91CF\u5927",low:.98,high:1.07,loud:.7}),$t({id:"ic_stock",cat:"intercooler",name:"\u7D14\u6B63\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",rank:1,price:3e4,weight:0,desc:"\u904E\u7D66\u52B9\u738785%\uFF08\u672A\u88C5\u7740\u664270%\uFF09",eff:.85}),$t({id:"ic_large",cat:"intercooler",name:"\u5927\u5BB9\u91CF\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",rank:2,price:14e4,weight:3,desc:"\u904E\u7D66\u52B9\u738793%",eff:.93}),$t({id:"ic_front",cat:"intercooler",name:"\u524D\u7F6E\u304D\u5927\u5BB9\u91CF\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",rank:4,price:null,weight:6,desc:"\u904E\u7D66\u52B9\u7387100%",eff:1}),$t({id:"tb_small",cat:"turbo",name:"\u30B7\u30F3\u30B0\u30EB\u30BF\u30FC\u30D3\u30F3\uFF08\u5C0F\uFF09",rank:2,price:22e4,weight:10,desc:"\u30EC\u30B9\u30DD\u30F3\u30B9\u91CD\u8996\u3002\u4F4E\u56DE\u8EE2\u304B\u3089\u904E\u7D66",boost:.8,spool:[1500,2500],fade:[4e3,.35],lag:.25}),$t({id:"tb_mid",cat:"turbo",name:"\u30B7\u30F3\u30B0\u30EB\u30BF\u30FC\u30D3\u30F3\uFF08\u4E2D\uFF09",rank:3,price:null,weight:12,desc:"\u30D0\u30E9\u30F3\u30B9\u578B\u3002\u4E2D\u56DE\u8EE2\u304B\u3089\u529B\u5F37\u304F\u904E\u7D66",boost:1,spool:[2500,4e3],fade:[5500,.25],lag:.5}),$t({id:"tb_large",cat:"turbo",name:"\u30B7\u30F3\u30B0\u30EB\u30BF\u30FC\u30D3\u30F3\uFF08\u5927\uFF09",rank:4,price:null,weight:15,desc:"\u30C9\u30C3\u30AB\u30F3\u30BF\u30FC\u30DC\u3002\u9AD8\u56DE\u8EE2\u3067\u7206\u767A\u7684\u30D1\u30EF\u30FC",boost:1.4,spool:[3600,5300],fade:[7e3,.15],lag:.9}),$t({id:"tb_seq",cat:"turbo",name:"\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC",rank:4,price:null,weight:20,desc:"2\u57FA\u3092\u5207\u66FF\u3048\u3002\u4F4E\u56DE\u8EE2\u304B\u3089\u9AD8\u56DE\u8EE2\u307E\u3067\u9014\u5207\u308C\u306A\u3044",boost:.95,spool:[1800,3200],fade:[5600,.15],lag:.3}),$t({id:"tb_twin",cat:"turbo",name:"\u30D1\u30E9\u30EC\u30EB\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC",rank:4,price:null,weight:18,desc:"\u9AD8\u904E\u7D66\u5727\u306E\u30C4\u30A4\u30F3\u3002\u4E2D\u9AD8\u56DE\u8EE2\u578B",boost:1.15,spool:[2800,4300],fade:[6500,.15],lag:.55}),$t({id:"tb_sc",cat:"turbo",name:"\u30B9\u30FC\u30D1\u30FC\u30C1\u30E3\u30FC\u30B8\u30E3\u30FC",rank:3,price:null,weight:12,desc:"\u6A5F\u68B0\u5F0F\u904E\u7D66\u3002\u30E9\u30B0\u7121\u3057\u3067\u30EA\u30CB\u30A2",boost:.6,spool:[1e3,3e3],fade:[9e3,0],lag:.04}),$t({id:"tire_comfort",cat:"tire",name:"\u30B3\u30F3\u30D5\u30A9\u30FC\u30C8\u30BF\u30A4\u30E4",rank:1,price:4e4,weight:0,desc:"\u30B0\u30EA\u30C3\u30D70.95",mu:.95,peakAngle:.15,peakRatio:.12}),$t({id:"tire_street",cat:"tire",name:"\u30B9\u30C8\u30EA\u30FC\u30C8\u30B9\u30DD\u30FC\u30C4\u30BF\u30A4\u30E4",rank:1,price:8e4,weight:0,desc:"\u30B0\u30EA\u30C3\u30D71.02\uFF08\u591A\u304F\u306E\u8ECA\u306E\u7D14\u6B63\uFF09",mu:1.02,peakAngle:.13,peakRatio:.11}),$t({id:"tire_high",cat:"tire",name:"\u30CF\u30A4\u30B0\u30EA\u30C3\u30D7\u30BF\u30A4\u30E4",rank:2,price:16e4,weight:0,desc:"\u30B0\u30EA\u30C3\u30D71.12",mu:1.12,peakAngle:.115,peakRatio:.1}),$t({id:"tire_s",cat:"tire",name:"S\u30BF\u30A4\u30E4\uFF08\u30BB\u30DF\u30B9\u30EA\u30C3\u30AF\uFF09",rank:4,price:null,weight:-2,desc:"\u30B0\u30EA\u30C3\u30D71.22\u3002\u9650\u754C\u304C\u30B7\u30D3\u30A2",mu:1.22,peakAngle:.1,peakRatio:.09}),$t({id:"sus_stock",cat:"suspension",name:"\u7D14\u6B63\u30B5\u30B9\u30DA\u30F3\u30B7\u30E7\u30F3",rank:1,price:3e4,weight:0,desc:"\u4E57\u308A\u5FC3\u5730\u91CD\u8996",grip:1,cgDrop:0,tau:.12,rollFront:0}),$t({id:"sus_street",cat:"suspension",name:"\u30B9\u30C8\u30EA\u30FC\u30C8\u8ECA\u9AD8\u8ABF",rank:2,price:15e4,weight:-2,desc:"\u8ECA\u9AD8-20mm\u3002\u30B0\u30EA\u30C3\u30D7+3%\u3001\u5FDC\u7B54\u5411\u4E0A",grip:1.03,cgDrop:.02,tau:.085,rollFront:-.02}),$t({id:"sus_circuit",cat:"suspension",name:"\u30B5\u30FC\u30AD\u30C3\u30C8\u8ECA\u9AD8\u8ABF",rank:4,price:null,weight:-3,desc:"\u8ECA\u9AD8-35mm\u3002\u30B0\u30EA\u30C3\u30D7+6%\u3001\u92ED\u3044\u5FDC\u7B54",grip:1.06,cgDrop:.035,tau:.06,rollFront:-.04}),$t({id:"brk_stock",cat:"brake",name:"\u7D14\u6B63\u30D6\u30EC\u30FC\u30AD",rank:1,price:2e4,weight:0,desc:"\u5236\u52D5\u529B100%",torque:1}),$t({id:"brk_pad",cat:"brake",name:"\u30B9\u30DD\u30FC\u30C4\u30D1\u30C3\u30C9",rank:1,price:5e4,weight:0,desc:"\u5236\u52D5\u529B112%",torque:1.12}),$t({id:"brk_big",cat:"brake",name:"\u30D3\u30C3\u30B0\u30AD\u30E3\u30EA\u30D1\u30FC\u30AD\u30C3\u30C8",rank:4,price:null,weight:3,desc:"\u5236\u52D5\u529B128%",torque:1.28}),$t({id:"tm_stock",cat:"transmission",name:"\u7D14\u6B63\u30C8\u30E9\u30F3\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",rank:1,price:3e4,weight:0,desc:"\u8ECA\u7A2E\u7D14\u6B63\u30AE\u30A2\u6BD4",close:1,final:1,shift:.18}),$t({id:"tm_lowfinal",cat:"transmission",name:"\u30ED\u30FC\u30D5\u30A1\u30A4\u30CA\u30EB\u30AE\u30A2",rank:2,price:9e4,weight:0,desc:"\u30D5\u30A1\u30A4\u30CA\u30EB\xD71.12\u3002\u52A0\u901F\u91CD\u8996",close:1,final:1.12,shift:.18}),$t({id:"tm_highgear",cat:"transmission",name:"\u30CF\u30A4\u30AE\u30A2\u30FC\u30C9\u30D5\u30A1\u30A4\u30CA\u30EB",rank:2,price:9e4,weight:0,desc:"\u30D5\u30A1\u30A4\u30CA\u30EB\xD70.90\u3002\u6700\u9AD8\u901F\u91CD\u8996",close:1,final:.9,shift:.18}),$t({id:"tm_close",cat:"transmission",name:"\u30AF\u30ED\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",rank:4,price:null,weight:2,desc:"\u30AE\u30A2\u9593\u3092\u8A70\u3081\u3001\u30B7\u30D5\u30C8\u3082\u901F\u3044",close:.78,final:1.05,shift:.11}),$t({id:"aero_lip",cat:"aero",name:"\u30D5\u30ED\u30F3\u30C8\u30EA\u30C3\u30D7\u30B9\u30DD\u30A4\u30E9\u30FC",rank:1,price:6e4,weight:2,desc:"\u30D5\u30ED\u30F3\u30C8\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9\u5C0F",clF:.1,clR:0,cd:.005}),$t({id:"aero_wing",cat:"aero",name:"GT\u30A6\u30A4\u30F3\u30B0",rank:3,price:null,weight:5,desc:"\u30EA\u30A2\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9\u5927\u3002\u7A7A\u6C17\u62B5\u6297\u5897",clF:0,clR:.38,cd:.03}),$t({id:"aero_full",cat:"aero",name:"\u30D5\u30EB\u30A8\u30A2\u30ED\u30AD\u30C3\u30C8",rank:4,price:null,weight:8,desc:"\u524D\u5F8C\u30D0\u30E9\u30F3\u30B9\u306E\u53D6\u308C\u305F\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9",clF:.2,clR:.34,cd:.02})],tn=Object.fromEntries(Nr.map(s=>[s.id,s]));var Ur=s=>"\u2605".repeat(s)+"\u2606".repeat(5-s);var gh="ibr.save.v1",Sd="ibr.records.v1";function xh(){let s={..._e[Ke.car].stock},t={};for(let e of Object.values(s))e&&(t[e]=(t[e]||0)+1);return{version:1,money:3e5,wins:0,losses:0,owned:t,garage:[{carId:Ke.car,color:Ke.color,equipped:s}],active:0,defeated:{},area:"west",pos:null,playtime:0,savedAt:null}}function _h(){try{return!!localStorage.getItem(gh)}catch{return!1}}function yh(){try{let s=localStorage.getItem(gh);return s?JSON.parse(s):null}catch{return null}}function Td(s){s.savedAt=new Date().toISOString();try{return localStorage.setItem(gh,JSON.stringify(s)),!0}catch{return!1}}function zr(s,t){let e=0;for(let n of s.garage)for(let i of Hs)n.equipped[i.id]===t&&e++;return(s.owned[t]||0)-e}function ga(s,t,e=1){s.owned[t]=(s.owned[t]||0)+e}function Gs(s){return s.garage[s.active]}function Vs(){try{return JSON.parse(localStorage.getItem(Sd)||"{}")}catch{return{}}}function Ad(s,t){let e=Vs(),n=e[s]||[];n.push(t),n.sort((r,o)=>r.best-o.best);let i=n.splice(20);e[s]=n;try{localStorage.setItem(Sd,JSON.stringify(e))}catch{}for(let r of i)R_(r.id);return n.indexOf(t)}var mh=null;function vh(){return mh||(mh=new Promise((s,t)=>{if(!window.indexedDB){t(new Error("no idb"));return}let e=indexedDB.open("ibr-replays",1);e.onupgradeneeded=()=>e.result.createObjectStore("replays"),e.onsuccess=()=>s(e.result),e.onerror=()=>t(e.error)})),mh}async function Rd(s,t){try{let e=await vh();return await new Promise((n,i)=>{let r=e.transaction("replays","readwrite");r.objectStore("replays").put(t,s),r.oncomplete=n,r.onerror=()=>i(r.error)}),!0}catch{return!1}}async function Cd(s){try{let t=await vh();return await new Promise((e,n)=>{let i=t.transaction("replays").objectStore("replays").get(s);i.onsuccess=()=>e(i.result||null),i.onerror=()=>n(i.error)})}catch{return null}}async function R_(s){try{(await vh()).transaction("replays","readwrite").objectStore("replays").delete(s)}catch{}}function ce(s){if(s==null||!isFinite(s))return"--:--.---";let t=Math.floor(s/60),e=s-t*60;return`${t}:${e.toFixed(3).padStart(6,"0")}`}function Sn(s){return"\xA5"+Math.round(s).toLocaleString("ja-JP")}function Id(s){return Math.sin(1.4*Math.atan(2.08*s))}var xa=class{constructor(t,e={}){this.setSpec(t),this.x=0,this.z=0,this.h=0,this.vu=0,this.vv=0,this.w=0,this.steer=0,this.wF=0,this.wR=0,this.rpm=t.idle,this.gear=1,this.shiftTimer=0,this.boost=0,this.axF=0,this.ayF=0,this.axAcc=0,this.ayAcc=0,this.spinF=0,this.spinR=0,this.pitch=0,this.roll=0,this.slip=0,this.slipLong=0,this.input={throttle:0,brake:0,steer:0},this.auto=!!e.auto,this.abs=e.abs!==!1,this.tcs=!!e.tcs,this.limiterHit=0,this.wheelLoads=[0,0,0,0],this.wheelSlip=[0,0,0,0],this.reverseHold=0,this.offRoad=0}setSpec(t){this.spec=t,this.m=t.mass,this.L=t.wheelbase,this.b=this.L*t.frontWeight,this.a=this.L-this.b,this.Iz=t.mass*(t.car.length**2+t.car.width**2)/12*.95,this.Iw=1.1*t.car.inertiaK,this.wheels=[{pu:this.a,pv:-t.trackF/2,front:!0},{pu:this.a,pv:t.trackF/2,front:!0},{pu:-this.b,pv:-t.trackR/2,front:!1},{pu:-this.b,pv:t.trackR/2,front:!1}]}place(t,e,n,i=0){this.x=t,this.z=e,this.h=n,this.vu=i,this.vv=0,this.w=0;let r=this.spec.tireRadius;this.wF=this.wR=i/r,this.gear=i>1?this.bestGear(i):1,this.rpm=Math.max(this.spec.idle,this.wheelRpm()),this.shiftTimer=0}get speed(){return Math.hypot(this.vu,this.vv)}get kmh(){return this.vu*3.6}fwd(){return[Math.sin(this.h),Math.cos(this.h)]}right(){return[-Math.cos(this.h),Math.sin(this.h)]}ratio(t=this.gear){let e=this.spec;return t>0?e.gears[t-1]*e.final:t<0?-e.reverse*e.final:0}drivenOmega(){let t=this.spec.drive;return t==="FF"?this.wF:t==="FR"?this.wR:(this.wF+this.wR)/2}wheelRpm(t=this.gear){return Math.abs(this.drivenOmega()*this.ratio(t)*60/(2*Math.PI))}bestGear(t){let e=this.spec;for(let n=1;n<=e.gears.length;n++)if(t/e.tireRadius*e.gears[n-1]*e.final*60/(2*Math.PI)<e.redline*.75)return n;return e.gears.length}shiftUp(){if(this.gear<this.spec.gears.length){if(this.gear===-1||this.gear===0){this.gear++,this.shiftTimer=.08;return}this.gear++,this.shiftTimer=this.spec.shiftTime}}shiftDown(){this.gear>1?(this.gear--,this.shiftTimer=this.spec.shiftTime):this.gear===1?this.gear=0:this.gear===0&&this.speed<2.5&&(this.gear=-1,this.shiftTimer=.1)}autoShift(t){let e=this.spec,n=this.input;if(this.speed<1&&(n.brake>.5&&n.throttle<.05?(this.reverseHold+=t,this.reverseHold>.45&&this.gear!==-1&&(this.gear=-1)):this.reverseHold=0,n.throttle>.1&&this.gear<=0&&this.vu>-.5&&(this.gear=1)),this.shiftCool=Math.max(0,(this.shiftCool||0)-t),this.gear<1||this.shiftTimer>0)return;let i=this.wheelRpm(),r=Math.min(i,Math.abs(this.vu/e.tireRadius*this.ratio()*60/(2*Math.PI))*1.12);if(i>e.redline-120&&r>e.redline*.8&&this.gear<e.gears.length){this.shiftUp(),this.shiftCool=1;return}if(this.gear>1&&this.shiftCool<=0){let o=r*e.gears[this.gear-2]/e.gears[this.gear-1],a=n.brake>.2?.72:.5;r<e.redline*a&&o<e.redline-700&&this.shiftDown()}}effectiveInputs(){let{throttle:t,brake:e}=this.input;if(this.auto&&this.gear===-1){let n=t;t=e,e=n}return{throttle:t,brake:e}}step(t){let e=this.spec,n=e.tireRadius;this.auto&&this.autoShift(t);let{throttle:i,brake:r}=this.effectiveInputs();this.shiftTimer>0&&(this.shiftTimer-=t);let o=this.shiftTimer>0,a=this.speed,c=this.input.steer,l=Math.atan2(this.vv,Math.max(Math.abs(this.vu),2)),h=Math.min(e.steerLock,this.L*e.mu*9.81/Math.max(a*a,1)+e.peakAngle*1.25);h=Math.max(h,.06);let u=c*h;c!==0&&Math.sign(c)===Math.sign(l)&&(u=c*Math.min(e.steerLock,h+Math.abs(l)*1.1));let d=(c===0?3.2:2.4)*t;this.steer+=Math.max(-d,Math.min(d,u-this.steer));let f=this.steer,m=Math.cos(f),x=Math.sin(f),g=this.vu*this.vu,p=.5*1.2*g,_=p*e.area*e.clF,v=p*e.area*e.clR,y=this.m*9.81,E=e.cgHeight,A=this.m*this.axF*E/this.L,S=this.m*this.ayF*E,C=y*this.b/this.L-A+_,b=y*this.a/this.L+A+v,M=S*e.rollFront/e.trackF,I=S*(1-e.rollFront)/e.trackR,N=this.wheelLoads;N[0]=Math.max(0,C/2+M),N[1]=Math.max(0,C/2-M),N[2]=Math.max(0,b/2+I),N[3]=Math.max(0,b/2-I);let F=y/4,B=this.ratio(),G=B!==0&&!o,k,tt=this.wheelRpm(),X=!1;if(G){let at=e.idle*1.4+i*(e.redline*.5-e.idle);tt<at&&Math.abs(this.gear)===1?(X=!0,k=this.rpm+(at-this.rpm)*Math.min(1,t*12)):tt<e.idle*1.2?(X=!0,k=this.rpm+(e.idle*1.2-this.rpm)*Math.min(1,t*12)):k=tt}else{let at=e.idle+i*(e.limiter-e.idle),kt=at>this.rpm?8:3;k=this.rpm+(at-this.rpm)*Math.min(1,t*kt)}let ot=e.boostTarget(k)*i,xt=ot>this.boost?Math.max(.02,e.turboLag):.12;this.boost+=(ot-this.boost)*Math.min(1,t/xt);let pt=i;k>=e.limiter&&(pt=0,this.limiterHit=.08),this.limiterHit>0&&(this.limiterHit-=t,pt=0),this.tcs&&this.slipLong>e.peakRatio*1.3&&(pt*=.3);let Gt=e.fullTorque(k,this.boost)*pt,St=e.maxTorque*(.03+.12*(k/e.redline))*(1-pt),V=Gt-St;k<=e.idle*1.02&&V<0&&(V=0),this.rpm=Math.max(e.idle*.9,Math.min(e.limiter+50,k));let j=0;G&&(j=V*B*.92);let ut=e.engineInertia*B*B*(G&&!X?1:0),nt=0,Rt=0,It=this.Iw*2,Nt=this.Iw*2;e.drive==="FF"?(nt=j,It+=ut):e.drive==="FR"?(Rt=j,Nt+=ut):(nt=j*e.awdFront,Rt=j*(1-e.awdFront),It+=ut*e.awdFront,Nt+=ut*(1-e.awdFront));let Xt=e.brakeTorque*r*e.brakeBias,Q=e.brakeTorque*r*(1-e.brakeBias),st=0,P=0,Tt=0,it=0,bt=0,lt=0,zt=0,vt=0,R=0,w=e.peakRatio,H=e.peakAngle;for(let at=0;at<4;at++){let kt=this.wheels[at],Ot=this.vu-this.w*kt.pv,ne=this.vv+this.w*kt.pu,D,dt;kt.front?(D=Ot*m+ne*x,dt=-Ot*x+ne*m):(D=Ot,dt=ne);let $=kt.front?this.wF:this.wR,J=Math.max(Math.abs(D),4),_t=($*n-D)/J,yt=Math.atan2(dt,Math.max(Math.abs(D),1.5)),qt=N[at],de=e.mu*Math.max(.6,1-.08*(qt/F-1))*(this.offRoad?.7:1),Re=_t/w,ie=yt/H,Ce=Math.hypot(Re,ie),Oe=0,bi=0,wi=0;if(Ce>1e-6){let Js=de*qt*Id(Ce);Oe=Js*Re/Ce,bi=-Js*ie/Ce;let Qs=(_t+.01)/w,Ei=Math.hypot(Qs,ie),Fr=de*qt*Id(Ei)*Qs/Ei;wi=Math.max(0,(Fr-Oe)/.01)}else wi=de*qt*2.08*1.4/w;this.wheelSlip[at]=Ce,Ce>vt&&(vt=Ce),Math.abs(_t)>R&&(R=Math.abs(_t));let cn,ei;kt.front?(cn=Oe*m-bi*x,ei=Oe*x+bi*m,it+=Oe,lt+=wi*n/J):(cn=Oe,ei=bi,bt+=Oe,zt+=wi*n/J),st+=cn,P+=ei,Tt+=kt.pu*ei-kt.pv*cn}if(this.slip=vt,this.slipLong=R,this.abs&&r>0){let at=this.wF*n-this.vu,kt=this.wR*n-this.vu,Ot=-w*1.1*Math.max(Math.abs(this.vu),4);at<Ot&&(Xt*=.35),kt<Ot&&(Q*=.35)}let K=(at,kt,Ot,ne,D,dt)=>{let $=at+t*(kt-n*Ot)/(D+t*n*ne),J=dt*t/(D+t*n*ne);return Math.abs($)<=J?$=0:$-=Math.sign($)*J,$};if(e.drive==="AWD"&&G&&!X){let at=It+Nt,kt=(this.wF+this.wR)/2,Ot=K(kt,j,it+bt,lt+zt,at,Xt+Q);this.wF=this.wR=Ot}else this.wF=K(this.wF,nt,it,lt,It,Xt),this.wR=K(this.wR,Rt,bt,zt,Nt,Q);let et=.5*1.2*e.cd*e.area*a*a;a>.01&&(st-=et*this.vu/a,P-=et*this.vv/a);let Z=.011*y+(this.offRoad?.08*y:0);Math.abs(this.vu)>.05&&(st-=Math.sign(this.vu)*Math.min(Z,Math.abs(this.vu)*this.m/t*.5));let Ct=st/this.m,mt=P/this.m;if(this.vu+=(Ct+this.w*this.vv)*t,this.vv+=(mt-this.w*this.vu)*t,this.w+=Tt/this.Iz*t,a<1.2&&i<.05&&(r>.05||a<.25)){let at=Math.exp(-t*(r>.05?10:4));this.vu*=at,this.vv*=at,this.w*=at,r>.05&&(this.wF*=at,this.wR*=at)}a<3&&(this.vv*=Math.exp(-t*2));let wt=e.loadTau;this.axF+=(Ct-this.axF)*Math.min(1,t/wt),this.ayF+=(mt-this.ayF)*Math.min(1,t/wt);let Qt=Math.sin(this.h),rt=Math.cos(this.h),At=-rt,Bt=Qt;this.x+=(this.vu*Qt+this.vv*At)*t,this.z+=(this.vu*rt+this.vv*Bt)*t,this.h-=this.w*t,this.spinF+=this.wF*t,this.spinR+=this.wR*t;let Vt=.012*(e.loadTau/.12);this.pitch+=(-this.axF*Vt*.6-this.pitch)*Math.min(1,t*8),this.roll+=(this.ayF*Vt-this.roll)*Math.min(1,t*8)}worldVel(){let t=Math.sin(this.h),e=Math.cos(this.h);return[this.vu*t-this.vv*e,this.vu*e+this.vv*t]}setWorldVel(t,e){let n=Math.sin(this.h),i=Math.cos(this.h);this.vu=t*n+e*i,this.vv=-t*i+e*n}wallImpulse(t,e,n,i,r,o=.15,a=.35){let c=t-this.x,l=e-this.z,[h,u]=this.worldVel(),d=h+this.w*-l,f=u+this.w*c,m=d*n+f*i;if(this.x+=n*r,this.z+=i*r,m>=0)return 0;let x=c*i-l*n,g=-(1+o)*m/(1/this.m+x*x/this.Iz);h+=g*n/this.m,u+=g*i/this.m,this.w+=g*x/this.Iz;let p=-i,_=n,v=d*p+f*_,y=c*_-l*p,E=-v/(1/this.m+y*y/this.Iz);E=Math.max(-a*g,Math.min(a*g,E)),h+=E*p/this.m,u+=E*_/this.m,this.w+=E*y/this.Iz,this.setWorldVel(h,u);let A=this.spec.tireRadius;return this.wF=this.wF*.7+this.vu/A*.3,this.spec.drive!=="FR"&&(this.wR=this.wR*.7+this.vu/A*.3),g}corners(t=0){let e=this.spec.car,n=e.length/2+t,i=e.width/2+t,r=Math.sin(this.h),o=Math.cos(this.h),a=-o,c=r,l=[];for(let[h,u]of[[n,-i],[n,i],[-n,-i],[-n,i],[0,-i],[0,i]])l.push([this.x+r*h+a*u,this.z+o*h+c*u]);return l}};function Ld(s,t){let e=Pd(s),n=Pd(t),i=0;for(let r of e)for(let o of n){let a=r[0]-o[0],c=r[1]-o[1],l=Math.hypot(a,c),h=r[2]+o[2];if(l>=h||l<1e-4)continue;let u=a/l,d=c/l,f=h-l,m=o[0]+u*o[2],x=o[1]+d*o[2];i+=C_(s,t,m,x,u,d,f)}return i}function Pd(s){let t=s.spec.car,e=t.width/2,n=t.length/2-e,i=Math.sin(s.h),r=Math.cos(s.h);return[[s.x+i*n,s.z+r*n,e],[s.x,s.z,e],[s.x-i*n,s.z-r*n,e]]}function C_(s,t,e,n,i,r,o){let a=s.m,c=t.m,l=a+c;s.x+=i*o*(c/l),s.z+=r*o*(c/l),t.x-=i*o*(a/l),t.z-=r*o*(a/l);let[h,u]=s.worldVel(),[d,f]=t.worldVel(),m=e-s.x,x=n-s.z,g=e-t.x,p=n-t.z,_=[h-s.w*x,u+s.w*m],v=[d-t.w*p,f+t.w*g],y=(_[0]-v[0])*i+(_[1]-v[1])*r;if(y>=0)return 0;let E=m*r-x*i,A=g*r-p*i,C=-(1+.2)*y/(1/a+1/c+E*E/s.Iz+A*A/t.Iz);return h+=C*i/a,u+=C*r/a,s.w+=C*E/s.Iz,d-=C*i/c,f-=C*r/c,t.w-=C*A/t.Iz,s.setWorldVel(h,u),t.setWorldVel(d,f),C}var I_=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*(t-n)/(r-n)}return s[s.length-1][1]},Dd=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)};function ti(s,t){let e=_e[s],n=N=>t[N]?tn[t[N]]:null,i=n("engine")||tn[e.stock.engine],r=n("boreup"),o=n("muffler")||tn.muf_stock,a=n("intercooler"),c=n("turbo"),l=n("tire")||tn.tire_street,h=n("suspension")||tn.sus_stock,u=n("brake")||tn.brk_stock,d=n("transmission")||tn.tm_stock,f=n("aero"),m=0;for(let N of[i,r,o,a,c,l,h,u,d,f])N&&(m+=N.weight||0);for(let N of Object.values(e.stock))N&&(m-=tn[N].weight||0);let x=i.redline+(r?.redlineDelta||0),g=i.limiter+(r?.redlineDelta||0),p=c?a?a.eff:.7:0,_=e.gears[e.gears.length-1],v=e.gears.map(N=>_*Math.pow(N/_,d.close)),y=e.final*d.final,E=e.mass+m,A=e.frontWeight+(i.weight-(tn[e.stock.engine].weight||0))*6e-4,S={car:e,carId:s,equipped:{...t},engine:i,turbo:c,tire:l,sus:h,brakePart:u,trans:d,aero:f,muffler:o,mass:E,frontWeight:Math.min(.66,Math.max(.42,A)),cgHeight:e.cgHeight-h.cgDrop,wheelbase:e.wheelbase,trackF:e.trackF,trackR:e.trackR,tireRadius:e.tireRadius,drive:e.drive,awdFront:e.awdFront||0,gears:v,reverse:e.reverse,final:y,shiftTime:d.shift,idle:i.idle,redline:x,limiter:g,engineInertia:i.inertia,cylinders:i.cylinders,loud:o.loud,mu:l.mu*h.grip,peakAngle:l.peakAngle,peakRatio:l.peakRatio,loadTau:h.tau,rollFront:e.rollFront+h.rollFront,brakeTorque:e.brakeTorque*u.torque,brakeBias:e.brakeBias,cd:e.cd+(f?.cd||0),area:e.area,clF:f?.clF||0,clR:f?.clR||0,steerLock:e.steerLock,boostMax:c?c.boost:0,turboLag:c?c.lag:0,icEff:p,_bore:r?r.torqueMul:1,_mufLow:o.low,_mufHigh:o.high};S.boostTarget=N=>{if(!c)return 0;let F=c.boost*Dd(c.spool[0],c.spool[1],N);return N>c.fade[0]&&(F*=Math.max(.3,1-c.fade[1]*(N-c.fade[0])/2e3)),F},S.naTorque=N=>{let F=I_(i.torque,N)*S._bore,B=Dd(x*.45,x*.75,N);return F*(S._mufLow*(1-B)+S._mufHigh*B)},S.fullTorque=(N,F)=>S.naTorque(N)*(1+F*p);let C=0,b=0,M=0,I=0;for(let N=1e3;N<=x;N+=50){let F=S.fullTorque(N,S.boostTarget(N)),B=F*N*2*Math.PI/60/1e3;F>C&&(C=F,b=N),B>M&&(M=B,I=N)}return S.maxTorque=C,S.maxTorqueRpm=b,S.maxPowerKW=M,S.maxPowerPS=M*1.3596,S.maxPowerRpm=I,S.pwr=E/S.maxPowerPS,S.rating=P_(S),S}function P_(s){let t=s.maxPowerPS/(s.mass/1e3),e=s.mu*(1+(s.clF+s.clR)*.15),n=Math.min(1.3,s.brakeTorque/(s.mass*3.4));return Math.round(t*2.2+e*220+n*60+(s.trans.close<1?15:0))}var Nd=new Te({color:724758,metalness:.6,roughness:.15}),L_=new Te({color:1118481,roughness:.9}),D_=new Te({color:10133672,metalness:.9,roughness:.3}),Xi=new Te({color:657930,roughness:.6}),N_=new Te({color:16777215,emissive:16773836,emissiveIntensity:1.6}),U_=new Te({color:15263968,emissive:3355443});function z_(s){let t=new Oi;t.moveTo(s[0][0],s[0][1]);for(let e=1;e<s.length;e++)t.lineTo(s[e][0],s[e][1]);return t.closePath(),t}function Mh(s,t,e,n=.06){let i=new Cs(z_(s),{depth:t-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n*.8,bevelSegments:2,steps:1});return i.translate(0,0,-(t-n*2)/2),i.rotateY(-Math.PI/2),new Y(i,e)}function _a(s,t,e={}){let n=new te,i=new te;n.add(i);let r=s.length,o=s.width,a=s.height,c=s.body,l=new Te({color:t,metalness:.25,roughness:.38,envMapIntensity:.8}),h=[],u=r/2,d=a*.56,f=r*c.hood,m=r*c.tail,x=.52,g=[[-u,.22],[u-.08,.22],[u,.34],[u,x-.05],[u-.12,x],[u-f,d],[-u+m,d+.02],[-u+.04,d-.02],[-u,d-.12]],p=Mh(g,o,l);i.add(p);let _=u-f;if(c.style==="roadster"){let St=Mh([[_,d],[_-.32,d+.38],[_-.38,d+.38],[_-.12,d]],o*.86,Nd,.02);i.add(St);for(let j of[-.33,.33]){let ut=new Y(new ft(.34,.32,.12),Xi);ut.position.set(j,d+.16,_-1.25),i.add(ut)}let V=new Y(new ft(o*.86,.05,1.3),Xi);V.position.set(0,d+.02,_-.95),i.add(V)}else{let St=r*c.roof,V=_-r*.15,j=V-St,ut=-u+m;c.style==="hatch"&&(ut=-u+.12);let nt=[[_,d],[V,a],[j,a],[c.style==="hatch"?ut+.08:ut,c.style==="hatch"?d+.1:d]],Rt=Mh(nt,o*.84,Nd,.04);i.add(Rt);let It=new Y(new ft(o*.78,.05,Math.max(.3,St-.1)),l);It.position.set(0,a+.005,(V+j)/2),i.add(It),h.push(It);for(let Nt of[-1,1]){let Xt=[[_,d],[V,a]],Q=Xt[1][0]-Xt[0][0],st=Xt[1][1]-Xt[0][1],P=Math.hypot(Q,st),Tt=new Y(new ft(.07,.07,P),l);Tt.position.set(Nt*o*.42,(Xt[0][1]+Xt[1][1])/2,(Xt[0][0]+Xt[1][0])/2),Tt.rotation.x=-Math.atan2(st,Math.abs(Q)),i.add(Tt),h.push(Tt)}}if(c.scoop){let St=new Y(new ft(.6,.08,.45),l);St.position.set(0,d-.02+(x-d)*.35,u-f*.45),i.add(St)}let v=e.wing||c.wing,y=(St,V,j,ut)=>{let nt=new te,Rt=new Y(new ft(j,.04,V),ut);Rt.position.y=St,nt.add(Rt);for(let It of[-1,1]){let Nt=new Y(new ft(.05,St-d,.12),Xi);Nt.position.set(It*j*.32,(St+d)/2,0),nt.add(Nt)}nt.position.z=-u+.28,i.add(nt)};if(v==="gt")y(d+.32,.3,o*.92,Xi);else if(v==="high")y(d+.22,.22,o*.8,l);else if(v==="loop")y(d+.14,.2,o*.86,l);else if(v==="duck"){let St=new Y(new ft(o*.8,.05,.12),l);St.position.set(0,d+.05,-u+.12),i.add(St)}else if(v==="roof"){let St=new Y(new ft(o*.75,.04,.22),l);St.position.set(0,a+.02,-u+.25),i.add(St)}if(e.aero==="aero_lip"||e.aero==="aero_full"){let St=new Y(new ft(o*.95,.04,.18),Xi);St.position.set(0,.2,u-.05),i.add(St)}if(e.aero==="aero_full")for(let St of[-1,1]){let V=new Y(new ft(.05,.08,r*.5),Xi);V.position.set(St*(o/2-.02),.22,0),i.add(V)}let E=[];for(let St of[-1,1]){let V=new Y(new ft(.34,.08,.06),N_.clone());V.position.set(St*(o/2-.3),x-.06,u-.06),i.add(V),E.push(V)}let A=new Te({color:5570560,emissive:16715792,emissiveIntensity:.6});for(let St of[-1,1]){let V=new Y(new ft(.36,.08,.05),A);V.position.set(St*(o/2-.28),d-.12,-u-.005),i.add(V)}let S=new Y(new ft(.33,.16,.02),U_);S.position.set(0,.4,-u-.01),i.add(S);let C=[],b=s.tireRadius,M=new ze(b,b,.22,18);M.rotateZ(Math.PI/2);let I=new ze(b*.66,b*.66,.235,10);I.rotateZ(Math.PI/2);let N=new ft(.24,b*1.2,.06),F=s.wheelbase/2;for(let[St,V,j]of[[1,-1,s.trackF],[1,1,s.trackF],[-1,-1,s.trackR],[-1,1,s.trackR]]){let ut=new te;ut.position.set(V*(j/2),b,St*F);let nt=new te;nt.add(new Y(M,L_)),nt.add(new Y(I,D_));let Rt=new Y(N,Xi);nt.add(Rt);let It=Rt.clone();It.rotation.x=Math.PI/2,nt.add(It),ut.add(nt),n.add(ut),C.push({pivot:ut,spin:nt,front:St>0})}let B=new Y(new pe(o*1.15,r*1.05),new Wt({color:0,transparent:!0,opacity:.55,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.y=.035,n.add(B);let G=new te,k=new Te({color:1381914,roughness:.85}),tt=new Y(new ft(o*.9,.2,.5),k);tt.position.set(0,d+.02,_-.45),G.add(tt);let X=new Y(new ft(.5,.1,.22),k);X.position.set(-.37,d+.14,_-.62),G.add(X);let ot=new te,xt=new Y(new Is(.18,.022,8,24),new Te({color:789516,roughness:.7}));ot.add(xt);let pt=new Y(new ft(.34,.03,.02),k);ot.add(pt);let Gt=new Y(new ft(.025,.05,.03),new Wt({color:16724016}));if(Gt.position.y=.17,ot.add(Gt),ot.position.set(-.37,d+.05,_-.78),ot.rotation.x=-.35,G.add(ot),c.style!=="roadster"){for(let V of[-1,1]){let j=new Y(new ft(.07,.6,.07),k);j.position.set(V*o*.41,d+.27,_-.22),j.rotation.x=-.75,G.add(j)}let St=new Y(new ft(o*.84,.06,.25),k);St.position.set(0,a-.04,_-r*.15-.05),G.add(St)}return G.visible=!1,i.add(G),n.userData={exterior:h,body:i,wheels:C,lightsFront:E,tailMat:A,cockpit:G,steeringWheel:ot,paint:l,belt:d,wsBase:_,H:a,L:r,W:o},n}function ya(s,t,e={}){let n=s.userData,i=(t.a-t.b)/2,r=Math.sin(t.h),o=Math.cos(t.h);s.position.set(t.x+r*i,0,t.z+o*i),s.rotation.y=t.h,n.body.rotation.x=t.pitch,n.body.rotation.z=-t.roll;for(let l of n.wheels)l.pivot.rotation.y=l.front?-t.steer:0,l.spin.rotation.x=l.front?t.spinF:t.spinR;n.steeringWheel.rotation.z=t.steer*9;let a=t.input.brake>.05&&t.gear!==-1;n.tailMat.emissiveIntensity=a?2.6:.7;let c=e.flash||0;for(let l of n.lightsFront)l.material.emissiveIntensity=1.4+c*6}function va(s){let t=s.userData,e=new Zo(16773590,900,110,.55,.55,2);e.position.set(0,.75,t.L/2-.1);let n=new ve;n.position.set(0,0,t.L/2+22),t.body.add(e,n),e.target=n;let i=new Ds(16771272,25,14,2);return i.position.set(0,1.2,t.L/2+3),t.body.add(i),t.headlight=e,e}var bh=1/500,Fn=class{constructor(t,{corridor:e,path:n=null}){this.game=t,this.corridor=e,this.path=n,this.entries=[],this.player=null,this.acc=0,this.time=0,this.controlsEnabled=!0,this.frozen=!1,this.flash=0}addCar({carId:t,equipped:e,color:n,isPlayer:i=!1,name:r="",ai:o=null}){let a=ti(t,e),c=this.game.settings,l=new xa(a,{auto:i?c.transmission==="AT":!0,abs:i?c.abs:!0,tcs:i?c.tcs:!1}),h=_a(_e[t],n,{aero:e.aero,wing:e.aero==="aero_wing"||e.aero==="aero_full"?"gt":void 0});this.game.world.scene.add(h),i&&va(h);let u=this.game.audio.createEngine(a),d={car:l,model:h,engine:u,isPlayer:i,name:r,ai:o,color:n,carId:t,equipped:e,flash:0};return this.entries.push(d),i&&(this.player=d),d}removeCar(t){this.game.world.scene.remove(t.model),this.game.audio.destroyEngine(t.engine),this.entries=this.entries.filter(e=>e!==t)}readPlayerInput(t){let e=this.game.input,n=this.player;if(!n)return;let i=n.car,r=i.input;if(!this.controlsEnabled){i.input={throttle:0,brake:this.frozen?1:0,steer:0};return}let o=e.held("throttle")?1:0,a=e.held("brake")?1:0,c=(e.held("right")?1:0)-(e.held("left")?1:0),l=(h,u,d)=>h+Math.max(-d*t,Math.min(d*t,u-h));if(i.input={throttle:l(r.throttle,o,o>r.throttle?7:12),brake:l(r.brake,a,10),steer:c},e.hit("reset"))if(this.resetRule==="battle")if(Math.abs(i.vu)*3.6>10)this.onResetDenied&&this.onResetDenied();else{this.resetPlayer(-10);return}else{this.resetPlayer();return}e.hit("shiftUp")&&i.shiftUp(),e.hit("shiftDown")&&i.shiftDown()}resetPlayer(t=0){let e=this.player.car,n,i,r;if(this.path){let o=this.path.project(e.x,e.z,-1),a=this.path.posAt(o.s+t,0);n=a.x,i=a.z,r=a.h}else{let o=null,a=1e18;for(let u of this.corridor.segs){let d=u.bx-u.ax,f=u.bz-u.az,m=d*d+f*f,x=Math.max(0,Math.min(1,((e.x-u.ax)*d+(e.z-u.az)*f)/m)),g=u.ax+d*x,p=u.az+f*x,_=(g-e.x)**2+(p-e.z)**2;_<a&&(a=_,o={px:g,pz:p,dx:d,dz:f})}let[c,l]=e.fwd(),h=o.dx*c+o.dz*l>=0?1:-1;n=o.px,i=o.pz,r=Math.atan2(o.dx*h,o.dz*h)}e.place(n,i,r,0),e.input={throttle:0,brake:0,steer:0},e.steer=0,e.gear=1,this.game.rig.reset(),this.onReset&&this.onReset()}update(t){if(this.readPlayerInput(t),this.frozen)for(let i of this.entries)i.car.vu=0,i.car.vv=0,i.car.w=0;let e=i=>this.entries.filter(r=>r!==i).map(r=>r.car);for(let i of this.entries)i.ai&&!this.frozen&&i.ai.update(t,e(i));this.acc+=Math.min(t,.05);let n=0;for(;this.acc>=bh&&n<40;){this.acc-=bh,n++;for(let i of this.entries){let r=i.car.speed;i.car.step(bh),gd(i.car,this.corridor)>0&&(i.impact=Math.max(i.impact||0,r))}for(let i=0;i<this.entries.length;i++)for(let r=i+1;r<this.entries.length;r++){let o=this.entries[i].car,a=this.entries[r].car;Math.abs(o.x-a.x)<8&&Math.abs(o.z-a.z)<8&&Ld(o,a)}}this.time+=t;for(let i of this.entries){i.flash>0&&(i.flash-=t);let r=i.flash>0&&Math.sin(i.flash*40)>0?1:0;ya(i.model,i.car,{flash:r})}}updateAudio(t){let e=this.game.audio;for(let n of this.entries)if(n===this.player)e.updateEngine(n.engine,n.car,1,0);else{let i=Math.hypot(n.car.x-t.car.x,n.car.z-t.car.z),r=Math.max(0,1-i/120)*.6,[o,a]=t.car.right(),c=Math.max(-1,Math.min(1,((n.car.x-t.car.x)*o+(n.car.z-t.car.z)*a)/30));e.updateEngine(n.engine,n.car,r,c)}}dispose(){for(let t of[...this.entries])this.removeCar(t)}},F_=15,Ma=class{constructor(t=30){this.rate=t,this.t=0,this.buf=[],this.frames=0}sample(t,e){for(this.t+=t;this.t>=1/this.rate;)this.t-=1/this.rate,this.buf.push(e.x,e.z,e.h,e.pitch,e.roll,e.steer,e.spinF,e.spinR,e.rpm,e.vu,e.gear,e.input.brake,e.input.throttle,e.boost,e.slip),this.frames++}finish(t){return{...t,rate:this.rate,stride:F_,frames:this.frames,data:new Float32Array(this.buf)}}};var mn=class{constructor(t){this.root=O("div",{class:"hud"}),this.tl=O("div",{class:"hud-tl"}),this.tc=O("div",{class:"hud-tc"}),this.tr=O("div",{class:"hud-tr"}),this.msg=O("div",{class:"hud-msg"}),this.sub=O("div",{class:"hud-submsg"}),this.prompt=O("div",{class:"hud-prompt"}),this.tach=O("canvas",{class:"hud-tach",width:320,height:200}),this.map=O("canvas",{class:"hud-map",width:240,height:240}),this.mirrorFrame=O("div",{class:"hud-mirror"}),this.viewLabel=O("div",{class:"hud-view"}),this.root.append(this.tl,this.tc,this.tr,this.msg,this.sub,this.prompt,this.tach,this.map,this.mirrorFrame,this.viewLabel),t.appendChild(this.root),this.msgT=0,this.mapBounds=null}destroy(){this.root.remove()}flash(t,e=1.5,n=""){this.msg.textContent=t,this.sub.textContent=n,this.msg.classList.remove("pop"),this.msg.offsetWidth,this.msg.classList.add("pop"),this.msgT=e}setView(t){this.viewLabel.textContent=t,this.viewLabel.classList.remove("fade"),this.viewLabel.offsetWidth,this.viewLabel.classList.add("fade")}update(t){this.msgT>0&&(this.msgT-=t,this.msgT<=0&&(this.msg.textContent="",this.sub.textContent=""))}drawTach(t){let e=this.tach.getContext("2d"),n=this.tach.width,i=this.tach.height;e.clearRect(0,0,n,i);let r=t.spec,o=Math.ceil((r.limiter+500)/1e3)*1e3,a=n/2+40,c=i-18,l=150,h=Math.PI*1,u=Math.PI*1.75,d=x=>h+(u-h)*Math.min(1,x/o);e.lineWidth=14,e.strokeStyle="rgba(255,255,255,0.12)",e.beginPath(),e.arc(a,c,l,h,u),e.stroke(),e.strokeStyle="rgba(255,40,70,0.55)",e.beginPath(),e.arc(a,c,l,d(r.redline),u),e.stroke();let f=t.rpm>r.redline-300;e.strokeStyle=f?"#ff2d55":"#33e1ff",e.shadowColor=e.strokeStyle,e.shadowBlur=12,e.beginPath(),e.arc(a,c,l,h,d(t.rpm)),e.stroke(),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.7)",e.font="12px sans-serif",e.textAlign="center";for(let x=0;x<=o;x+=1e3){let g=d(x);e.fillText(String(x/1e3),a+Math.cos(g)*(l-22),c+Math.sin(g)*(l-22)+4)}e.textAlign="right",e.font='bold 58px "Orbitron","Segoe UI",sans-serif',e.fillStyle="#fff",e.fillText(String(Math.round(Math.abs(t.vu)*3.6)),a+60,c-30),e.font="14px sans-serif",e.fillStyle="#9ab",e.fillText("km/h",a+60,c-10),e.textAlign="center",e.font='bold 44px "Orbitron","Segoe UI",sans-serif',e.fillStyle=f?"#ff2d55":"#ffd400";let m=t.gear===-1?"R":t.gear===0?"N":String(t.gear);e.fillText(m,a-70,c-30),t.spec.boostMax>0&&(e.font="12px sans-serif",e.fillStyle="#9ab",e.textAlign="left",e.fillText(`BOOST ${t.boost.toFixed(2)}bar`,a-110,c-2))}setMapCourse(t,e="west"){this.course=t,this.roads=Me[e].roads,this.mapBounds=null}drawMap(t,e=[]){let n=this.map.getContext("2d"),i=this.map.width,r=this.map.height;if(n.clearRect(0,0,i,r),!this.mapBounds){let h=1e9,u=-1e9,d=1e9,f=-1e9,m=this.course?Array.from({length:this.course.n},(g,p)=>({x:this.course.x[p],z:this.course.z[p]})):this.roads.flatMap(g=>g.nodes.map(p=>Ft[p]));for(let g of m)h=Math.min(h,g.x),u=Math.max(u,g.x),d=Math.min(d,g.z),f=Math.max(f,g.z);let x=Math.min((i-30)/(u-h),(r-30)/(f-d));this.mapBounds={sc:x,ox:i/2-(h+u)/2*x,oz:r/2-(d+f)/2*x}}let{sc:o,ox:a,oz:c}=this.mapBounds,l=(h,u)=>[a+h*o,c+u*o];if(n.fillStyle="rgba(5,10,20,0.6)",n.beginPath(),n.roundRect(0,0,i,r,14),n.fill(),n.lineCap="round",n.lineJoin="round",this.course){n.strokeStyle="rgba(200,220,255,0.85)",n.lineWidth=4,n.beginPath();for(let d=0;d<=this.course.n;d++){let f=d%this.course.n,[m,x]=l(this.course.x[f],this.course.z[f]);d?n.lineTo(m,x):n.moveTo(m,x)}n.stroke();let[h,u]=l(this.course.x[0],this.course.z[0]);n.fillStyle="#fff",n.fillRect(h-4,u-4,8,8)}else for(let h of this.roads)n.strokeStyle="rgba(170,190,230,0.75)",n.lineWidth=Math.max(2,h.width*o*.9),n.beginPath(),h.nodes.forEach((u,d)=>{let[f,m]=l(Ft[u].x,Ft[u].z);d?n.lineTo(f,m):n.moveTo(f,m)}),n.stroke();for(let h of e){let[u,d]=l(h.x,h.z);n.fillStyle=h.color,n.beginPath(),n.arc(u,d,6,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font="bold 10px sans-serif",n.textAlign="center",n.fillText(h.label,u,d-9)}for(let h of t){let[u,d]=l(h.x,h.z);n.save(),n.translate(u,d),n.rotate(-h.h+Math.PI),n.fillStyle=h.color,n.beginPath(),n.moveTo(0,-7),n.lineTo(5,5),n.lineTo(-5,5),n.closePath(),n.fill(),n.restore()}}};var Ee=(s,t)=>({..._e[s].stock,...t}),Ud=[{id:"minato",name:"\u767D\u77F3\u30DF\u30CA\u30C8",team:"\u30EB\u30FC\u30AD\u30FC",car:"SWIFT-S",color:15909903,minWins:0,skill:.8,reward:6e4,parts:Ee("SWIFT-S",{muffler:"muf_sport"}),lines:{meet:"\u30B9\u30A4\u30B9\u30DD\u8210\u3081\u3093\u306A\u3088\uFF01",win:"\u304F\u3063\u202686\u3063\u3066\u3053\u3093\u306A\u901F\u3044\u306E\u304B\u3088\u3002",lose:"\u8EFD\u3055\u306F\u6B63\u7FA9\u3063\u3066\u306D\uFF01"}},{id:"yuuri",name:"\u67DA\u6728\u30E6\u30A6\u30EA",team:"\u30EB\u30FC\u30AD\u30FC",car:"RS-RS",color:11735579,minWins:0,skill:.82,reward:65e3,parts:Ee("RS-RS",{suspension:"sus_street",tire:"tire_high"}),lines:{meet:"\u4EBA\u99AC\u4E00\u4F53\u3001\u898B\u305B\u3066\u3042\u3052\u308B\u3002",win:"\u2026\u30B3\u30FC\u30CA\u30FC\u3067\u8A70\u3081\u304D\u308C\u306A\u304B\u3063\u305F\u3002",lose:"\u30D1\u30EF\u30FC\u3060\u3051\u3058\u3083\u66F2\u304C\u308C\u306A\u3044\u3088\uFF1F"}},{id:"souma",name:"\u771F\u58C1\u30BD\u30A6\u30DE",team:"\u897F\u53E3\u30CA\u30A4\u30C4",car:"86-GR",color:16053492,minWins:1,skill:.84,reward:8e4,parts:Ee("86-GR",{brake:"brk_pad",aero:"aero_lip",muffler:"muf_sport"}),lines:{meet:"\u540C\u305886\u304B\u3002\u8155\u306E\u5DEE\u3001\u30CF\u30C3\u30AD\u30EA\u3055\u305B\u3088\u3046\u305C\u3002",win:"\u540C\u3058\u8ECA\u3067\u3053\u306E\u5DEE\u2026\u8A8D\u3081\u308B\u3088\u3002",lose:"\u51FA\u76F4\u3057\u3066\u304D\u306A\u3002"}},{id:"jin",name:"\u9DF9\u91CE\u30B8\u30F3",team:"\u897F\u53E3\u30CA\u30A4\u30C4",car:"WRX-IMP",color:1916826,minWins:2,skill:.85,reward:1e5,parts:Ee("WRX-IMP",{tire:"tire_high"}),lines:{meet:"\u56DB\u99C6\u306E\u7ACB\u3061\u4E0A\u304C\u308A\u3001\u3064\u3044\u3066\u3053\u308C\u308B\u304B\uFF1F",win:"\u3084\u308B\u306A\u2026FR\u3067\u4FFA\u3092\u629C\u304F\u3068\u306F\u3002",lose:"\u30C8\u30E9\u30AF\u30B7\u30E7\u30F3\u304C\u9055\u3046\u3093\u3060\u3088\u3002"}},{id:"reina",name:"\u4E5D\u6761\u30EC\u30A4\u30CA",team:"Velvet",car:"SWIFT-S",color:15856113,minWins:3,skill:.87,reward:11e4,parts:Ee("SWIFT-S",{turbo:"tb_mid",intercooler:"ic_large",tire:"tire_high",suspension:"sus_street",muffler:"muf_sport"}),lines:{meet:"\u305F\u3060\u306E\u30B9\u30A4\u30D5\u30C8\u3060\u3068\u601D\u3063\u305F\uFF1F",win:"\u3075\u30FC\u3093\u3001\u60AA\u304F\u306A\u3044\u3058\u3083\u306A\u3044\u3002",lose:"\u898B\u305F\u76EE\u3067\u5224\u65AD\u3057\u306A\u3044\u3053\u3068\u306D\u3002"}},{id:"gou",name:"\u9ED2\u7530\u30B4\u30A6",team:"\u8981\u753A\u9023\u5408",car:"80-Supra",color:1118740,minWins:3,skill:.85,reward:12e4,parts:Ee("80-Supra",{muffler:"muf_sport",tire:"tire_high"}),lines:{meet:"\u76F4\u7DDA\u3067\u5168\u90E8\u3072\u3063\u304F\u308A\u8FD4\u3057\u3066\u3084\u308B\u3002",win:"\u66F2\u304C\u308A\u3067\u8CA0\u3051\u305F\u2026\u304B\u3002",lose:"\u3053\u308C\u304C2JZ\u2026\u3058\u3083\u306D\u3047\u3001S6\u306E\u30C8\u30EB\u30AF\u3060\uFF01"}},{id:"kyou",name:"\u6C37\u5BA4\u30AD\u30E7\u30A6",team:"Velvet",car:"RS-RS",color:7041400,minWins:5,skill:.9,reward:16e4,parts:Ee("RS-RS",{boreup:"bore_2",turbo:"tb_sc",intercooler:"ic_large",tire:"tire_high",suspension:"sus_circuit",aero:"aero_wing",brake:"brk_pad"}),lines:{meet:"\u30B9\u30FC\u30D1\u30FC\u30C1\u30E3\u30FC\u30B8\u30E3\u30FC\u306E\u7ACB\u3061\u4E0A\u304C\u308A\u3001\u5473\u308F\u3048\u3088\u3002",win:"\u307E\u3055\u304B\u2026\u7ACB\u3061\u4E0A\u304C\u308A\u3067\u4E26\u3070\u308C\u308B\u3068\u306F\u3002",lose:"\u8EFD\u3055\u3068\u904E\u7D66\u3001\u6700\u5F37\u306E\u7D44\u307F\u5408\u308F\u305B\u3060\u308D\uFF1F"}},{id:"akira",name:"\u6771\u96F2\u30A2\u30AD\u30E9",team:"\u8981\u753A\u9023\u5408",car:"86-GR",color:15230494,minWins:5,skill:.9,reward:17e4,parts:Ee("86-GR",{turbo:"tb_twin",intercooler:"ic_front",muffler:"muf_straight",tire:"tire_high",suspension:"sus_street",brake:"brk_big"}),lines:{meet:"\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC\u306E86\u3001\u898B\u305F\u3053\u3068\u3042\u308B\u304B\uFF1F",win:"\u30D1\u30EF\u30FC\u3060\u3051\u3058\u3083\u52DD\u3066\u306D\u3048\u304B\u2026",lose:"\u99AC\u529B\u306F\u6B63\u7FA9\u3060\uFF01"}},{id:"misaki",name:"\u690E\u540D\u30DF\u30B5\u30AD",team:"BLUE STORM",car:"WRX-IMP",color:2777814,minWins:6,skill:.91,reward:19e4,parts:Ee("WRX-IMP",{turbo:"tb_large",intercooler:"ic_front",boreup:"bore_2",transmission:"tm_close",tire:"tire_high",aero:"aero_full",muffler:"muf_sport"}),lines:{meet:"\u672C\u7269\u306E\u30D3\u30C3\u30B0\u30BF\u30FC\u30D3\u30F3\u3001\u4F53\u611F\u3055\u305B\u3066\u3042\u3052\u308B\u3002",win:"\u2026\u30D6\u30FC\u30B9\u30C8\u304C\u7ACB\u3061\u4E0A\u304C\u308B\u524D\u306B\u9003\u3052\u3089\u308C\u305F\u3002",lose:"\u30D6\u30FC\u30B9\u30C8\u5168\u958B\u3001\u6C17\u6301\u3061\u3044\u3044\u3067\u3057\u3087\uFF1F"}},{id:"masamune",name:"\u85E4\u5802\u30DE\u30B5\u30E0\u30CD",team:"BLUE STORM",car:"80-Supra",color:12172998,minWins:8,skill:.93,reward:24e4,parts:Ee("80-Supra",{turbo:"tb_large",boreup:"bore_3",muffler:"muf_straight",intercooler:"ic_front",tire:"tire_s",suspension:"sus_circuit",brake:"brk_big",aero:"aero_wing"}),lines:{meet:"\u6C60\u888B\u6700\u901F\u306E\u5EA7\u3001\u307E\u3060\u8B72\u308B\u6C17\u306F\u306A\u3044\u3002",win:"\u6642\u4EE3\u304C\u5909\u308F\u3063\u305F\u304B\u2026",lose:"10\u5E74\u65E9\u3044\u3002"}},{id:"hibiki",name:"\u795E\u697D\u30D2\u30D3\u30AD",team:"\u7121\u6240\u5C5E",car:"RS-RS",color:6958015,minWins:9,skill:.94,reward:26e4,parts:Ee("RS-RS",{engine:"eng_r2_13",muffler:"muf_straight",tire:"tire_s",suspension:"sus_circuit",aero:"aero_full",transmission:"tm_close",brake:"brk_big"}),lines:{meet:"9000\u56DE\u8EE2\u306E\u6B4C\u3001\u8074\u304B\u305B\u3066\u3042\u3052\u308B\u3002",win:"\u3044\u3044\u97F3\u3060\u3063\u305F\u2026\u3042\u306A\u305F\u306E\u8ECA\u3082\u3002",lose:"\u30ED\u30FC\u30BF\u30EA\u30FC\u306F\u56DE\u3057\u3066\u30CA\u30F3\u30DC\u3002"}},{id:"zero",name:"\u4E0D\u77E5\u706B\u30BC\u30ED",team:"\u6C60\u888B\u306E\u4EA1\u970A",car:"86-GR",color:1710623,minWins:10,skill:.96,reward:4e5,parts:Ee("86-GR",{engine:"eng_v6_30",turbo:"tb_sc",intercooler:"ic_front",boreup:"bore_3",muffler:"muf_straight",tire:"tire_s",suspension:"sus_circuit",brake:"brk_big",transmission:"tm_close",aero:"aero_full"}),lines:{meet:"\u2026\u2026\u305D\u306E86\u3001\u3069\u3053\u307E\u3067\u884C\u3051\u308B\u3002",win:"\u2026\u2026\u30AB\u30B1\u30EB\u3001\u304B\u3002\u899A\u3048\u3066\u304A\u304F\u3002",lose:"\u2026\u2026\u307E\u3060\u9060\u3044\u3002"}}],zd=[{id:"riku",name:"\u65E9\u4E59\u5973\u30EA\u30AF",team:"\u516D\u30C4\u53C8\u30DC\u30FC\u30A4\u30BA",car:"BRZ-ZD",color:2052031,minWins:0,skill:.82,reward:7e4,parts:Ee("BRZ-ZD",{muffler:"muf_sport",tire:"tire_high"}),lines:{meet:"86\u4E57\u308A\u304B\u3002\u5144\u5F1F\u5BFE\u6C7A\u3068\u3044\u3053\u3046\u305C\u3002",win:"\u540C\u3058FA\u3067\u3082\u3001\u3053\u3046\u3082\u9055\u3046\u306E\u304B\u2026",lose:"\u6C34\u5E73\u5BFE\u5411\u306F\u4FFA\u306E\u65B9\u304C\u5206\u304B\u3063\u3066\u308B\u3002"}},{id:"kanade",name:"\u4E09\u4E0A\u30AB\u30CA\u30C7",team:"\u516D\u30C4\u53C8\u30DC\u30FC\u30A4\u30BA",car:"S2K-AP",color:14146012,minWins:0,skill:.84,reward:9e4,parts:Ee("S2K-AP",{suspension:"sus_street"}),lines:{meet:"8000\u56DE\u8EE2\u306E\u5411\u3053\u3046\u5074\u3001\u898B\u306B\u884C\u304F\uFF1F",win:"VTEC\u304C\u5165\u308B\u524D\u306B\u7F6E\u3044\u3066\u3044\u304B\u308C\u305F\u2026",lose:"\u30AA\u30FC\u30D7\u30F3\u306E\u98A8\u306F\u6C17\u6301\u3061\u3044\u3044\u3067\u3057\u3087\uFF1F"}},{id:"daichi",name:"\u9727\u5CF6\u30C0\u30A4\u30C1",team:"\u8B77\u56FD\u5BFA\u30E9\u30F3\u30B5\u30FC\u30BA",car:"EVO-IX",color:13111342,minWins:2,skill:.85,reward:11e4,parts:Ee("EVO-IX",{muffler:"muf_sport"}),lines:{meet:"\u9996\u90FD\u9AD8\u4E0B\u306E\u7ACB\u3061\u4E0A\u304C\u308A\u3001\u56DB\u99C6\u306B\u52DD\u3066\u308B\u304B\u306A\u3002",win:"AYC\u304C\u52B9\u304F\u524D\u306B\u629C\u304B\u308C\u305F\u2026",lose:"\u3053\u308C\u304C\u30E9\u30F3\u30A8\u30DC\u306E\u7ACB\u3061\u4E0A\u304C\u308A\u3060\u3002"}},{id:"sakura",name:"\u5BAE\u57CE\u30B5\u30AF\u30E9",team:"SUNRISE GIRLS",car:"BRZ-ZD",color:15967939,minWins:3,skill:.87,reward:12e4,parts:Ee("BRZ-ZD",{turbo:"tb_small",intercooler:"ic_large",tire:"tire_high",suspension:"sus_street",aero:"aero_lip"}),lines:{meet:"\u304B\u308F\u3044\u3044\u8272\u3060\u304B\u3089\u3063\u3066\u6CB9\u65AD\u3057\u305F\uFF1F",win:"\u30BF\u30FC\u30DC\u3067\u3082\u5C4A\u304B\u306A\u3044\u306A\u3093\u3066\u2026",lose:"\u30B5\u30F3\u30B7\u30E3\u30A4\u30F3\u306E\u591C\u666F\u3001\u5F8C\u308D\u304B\u3089\u898B\u3066\u306A\u3055\u3044\u3002"}},{id:"tetsu",name:"\u5927\u9580\u30C6\u30C4",team:"\u6625\u65E5\u901A\u308AGT",car:"Z-32",color:9047830,minWins:4,skill:.86,reward:14e4,parts:Ee("Z-32",{muffler:"muf_sport",tire:"tire_high"}),lines:{meet:"\u6625\u65E5\u901A\u308A\u306E\u76F4\u7DDA\u306FZ\u306E\u5EAD\u3060\u3002",win:"\u53E4\u3044Z\u3058\u3083\u3001\u3082\u3046\u6575\u308F\u306D\u3048\u304B\u2026",lose:"\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC\u306E\u4F38\u3073\u3001\u899A\u3048\u3068\u3051\u3002"}},{id:"rui",name:"\u5929\u57CE\u30EB\u30A4",team:"SUNRISE GIRLS",car:"S2K-AP",color:15909903,minWins:5,skill:.89,reward:16e4,parts:Ee("S2K-AP",{turbo:"tb_sc",intercooler:"ic_large",boreup:"bore_1",tire:"tire_high",suspension:"sus_circuit",aero:"aero_wing"}),lines:{meet:"NA\u306E\u92ED\u3055\u306B\u904E\u7D66\u3092\u8DB3\u3057\u305F\u3089\u3001\u3069\u3046\u306A\u308B\u3068\u601D\u3046\uFF1F",win:"\u2026\u3042\u306A\u305F\u3001\u672C\u7269\u306D\u3002",lose:"\u30B9\u30FC\u30D1\u30FC\u30C1\u30E3\u30FC\u30B8\u30E3\u30FC\u306F\u88CF\u5207\u3089\u306A\u3044\u306E\u3002"}},{id:"kenji",name:"\u7345\u5802\u30B1\u30F3\u30B8",team:"\u6625\u65E5\u901A\u308AGT",car:"R34-GTR",color:2834332,minWins:6,skill:.89,reward:2e5,parts:Ee("R34-GTR",{muffler:"muf_sport",tire:"tire_high",brake:"brk_pad"}),lines:{meet:"GT-R\u306E\u540D\u524D\u3001\u4F0A\u9054\u3058\u3083\u306A\u3044\u305C\u3002",win:"\u30A2\u30C6\u30FC\u30B5\u3067\u3082\u8FFD\u3044\u3064\u3051\u306A\u304B\u3063\u305F\u2026",lose:"\u76F46\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC\u306E\u5486\u54EE\u3001\u8074\u3053\u3048\u305F\u304B\uFF1F"}},{id:"noa",name:"\u767D\u9DFA\u30CE\u30A2",team:"\u8B77\u56FD\u5BFA\u30E9\u30F3\u30B5\u30FC\u30BA",car:"EVO-IX",color:15395562,minWins:7,skill:.91,reward:22e4,parts:Ee("EVO-IX",{turbo:"tb_mid",intercooler:"ic_front",boreup:"bore_2",muffler:"muf_straight",tire:"tire_s",suspension:"sus_circuit",aero:"aero_wing",brake:"brk_big"}),lines:{meet:"\u4E0D\u5FCD\u901A\u308A\u306E\u4E0B\u308A\u3067\u3001\u5168\u90E8\u6C7A\u3081\u308B\u3002",win:"\u30D6\u30EC\u30FC\u30AD\u52DD\u8CA0\u3067\u8CA0\u3051\u308B\u306A\u3093\u3066\u2026",lose:"\u56DB\u99C6\u306E\u672C\u6C17\u3001\u898B\u305F\u3067\u3057\u3087\u3046\uFF1F"}},{id:"sena",name:"\u4E45\u9060\u30BB\u30CA",team:"\u7121\u6240\u5C5E",car:"Z-32",color:4935512,minWins:9,skill:.93,reward:26e4,parts:Ee("Z-32",{turbo:"tb_large",intercooler:"ic_front",boreup:"bore_2",muffler:"muf_straight",tire:"tire_s",suspension:"sus_circuit",transmission:"tm_close",aero:"aero_full",brake:"brk_big"}),lines:{meet:"Z\u306F\u901F\u3044\u3060\u3051\u3058\u3083\u306A\u3044\u3002\u7F8E\u3057\u304F\u901F\u3044\u3093\u3060\u3002",win:"\u2026\u2026\u7F8E\u3057\u3044\u8D70\u308A\u3060\u3063\u305F\u3002",lose:"\u7F8E\u3057\u3055\u304C\u8DB3\u308A\u306A\u3044\u306D\u3002"}},{id:"gai",name:"\u9CF3\u30AC\u30A4",team:"\u6771\u6C60\u888B\u306E\u738B",car:"R34-GTR",color:8028296,minWins:11,skill:.96,reward:45e4,parts:Ee("R34-GTR",{turbo:"tb_large",intercooler:"ic_front",boreup:"bore_3",muffler:"muf_straight",tire:"tire_s",suspension:"sus_circuit",brake:"brk_big",transmission:"tm_close",aero:"aero_full"}),lines:{meet:"\u30B5\u30F3\u30B7\u30E3\u30A4\u30F3\u306E\u4E0B\u3067\u3001\u4FFA\u306B\u6311\u3080\u304B\u3002",win:"\u2026\u2026\u897F\u306E86\u304C\u3001\u3053\u3053\u307E\u3067\u6765\u305F\u304B\u3002",lose:"\u6771\u6C60\u888B\u306F\u3001\u307E\u3060\u304A\u524D\u306E\u8857\u3058\u3083\u306A\u3044\u3002"}}];for(let s of Ud)s.area="west";for(let s of zd)s.area="east";var wh=[...Ud,...zd],Wy=Object.fromEntries(wh.map(s=>[s.id,s]));var Eh=new Map;function O_(s){return Eh.has(s)||Eh.set(s,We(s)),Eh.get(s)}var Ws=(s,t,e)=>s<t?t:s>e?e:s;function Od(s,t,e){let n=t-s.x,i=e-s.z,r=Math.sin(s.h),o=Math.cos(s.h),a=n*r+i*o,c=n*-o+i*r,l=Math.max(4,n*n+i*i),h=2*c/l,u=Math.atan(s.L*h);a<0&&(u=Math.sign(c||1)*s.spec.steerLock);let d=s.speed,f=Math.max(.06,Math.min(s.spec.steerLock,s.L*s.spec.mu*9.81/Math.max(d*d,1)+s.spec.peakAngle*1.25));return Ws(u/f,-1,1)}var Xs=class{constructor(t,e,n=.85){this.car=t,this.path=e,this.skill=n,this.profile=e.speedProfile(t.spec,n),this.hint=-1,this.offset=0,this.offTarget=0,this.stuck=0,this.reverseT=0,this.boost=1}update(t,e=[]){let n=this.car,i=this.path,r=i.project(n.x,n.z,this.hint);this.hint=r.i;let o=i.n,a=n.speed,c=0;for(let S of e){let C=i.project(S.x,S.z,-1),b=C.s-r.s;b<-i.length/2&&(b+=i.length),b>i.length/2&&(b-=i.length);let M=r.lat;if(b>0&&b<18+a*.4&&Math.abs(C.lat-M)<2.6){let I=i.hw[r.i];c=C.lat>0?-Math.min(I-1.5,3):Math.min(I-1.5,3)}}this.offTarget+=(c-this.offTarget)*Math.min(1,t*1.5);let l=4+a*.4,h=r.i,u=0;for(;u<l;)u+=i.lseg[h],h=(h+1)%o;let[d,f]=i.normal(h),m=Math.max(0,i.hw[h]-1.4),x=Ws(this.offTarget,-m-i.lineOff[h],m-i.lineOff[h]),g=i.lx[h]+d*x,p=i.lz[h]+f*x,_=Od(n,g,p),v=1e9;for(let S=1,C=0;C<8;S++){let b=(r.i+S)%o;v=Math.min(v,this.profile[b]),C+=i.lseg[b]}v*=this.boost;let y=v-a,E=Ws(.35+y*.35,0,1),A=Ws(-y*.22-.05,0,1);if(A>0&&(E=0),n.slipLong>n.spec.peakRatio*1.4&&(E*=.4),n.slip>1.6&&(E*=.6),Math.abs(r.lat)>i.hw[r.i]-.5&&(E*=.7),this.reverseT>0){this.reverseT-=t,n.input={throttle:0,brake:.8,steer:-_},n.gear!==-1&&n.speed<1&&(n.gear=-1),this.reverseT<=0&&(n.gear=1);return}a<1.5&&this.started?(this.stuck+=t,this.stuck>2.2&&(this.stuck=0,this.reverseT=1.4)):this.stuck=0,n.gear<1&&(n.gear=1),n.input={throttle:E,brake:A,steer:_},this.started=!0}},Fd=-2.2,ba=class{constructor(t,e,n,i,r=13,o=null){this.car=t,this.graph=e,this.corridor=o,this.a=n,this.b=i,this.c=this.pick(i,n),this.cruise=r,this.paused=!1,this.stuck=0,this.reverseT=0,this.build()}pick(t,e){let n=(this.graph[t]||[]).map(a=>a.to).filter(a=>a!==e);if(!n.length)return e;let i=n.filter(a=>(this.graph[a]||[]).length>1);i.length&&(n=i);let r=Ft[e],o=Ft[t];if(r&&o){let a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=n.filter(u=>{let d=Ft[u],f=d.x-o.x,m=d.z-o.z;return(a*f+c*m)/(l*(Math.hypot(f,m)||1))>-.35});h.length&&(n=h)}return n[Math.floor(Math.random()*n.length)]}laneLine(t,e){let n=zn(t,e),i=Ft[t],r=Ft[e],o=[i,r];if(n&&n.smooth){let d=O_(n),f=g=>{let p=0,_=1e18;return d.forEach((v,y)=>{let E=(v.x-g.x)**2+(v.z-g.z)**2;E<_&&(_=E,p=y)}),p},m=f(i),x=f(r);o=m<=x?d.slice(m,x+1):d.slice(x,m+1).reverse(),o.length<2&&(o=[i,r])}let a=n?n.lanes>=2&&!n.median?n.laneW*.5:Gi(n):0,c=[];for(let d=0;d<o.length;d++){let f=o[Math.max(0,d-1)],m=o[Math.min(o.length-1,d+1)],x=m.x-f.x,g=m.z-f.z,p=Math.hypot(x,g)||1;c.push({x:o[d].x+g/p*a,z:o[d].z-x/p*a})}let l=[0];for(let d=1;d<c.length;d++)l.push(l[d-1]+Math.hypot(c[d].x-c[d-1].x,c[d].z-c[d-1].z));let h=l[l.length-1];return{pts:c,cum:l,len:h,at:d=>{d=Math.max(0,Math.min(h,d));let f=0;for(;f<l.length-2&&l[f+1]<d;)f++;let m=(d-l[f])/(l[f+1]-l[f]||1),x=c[f],g=c[f+1];return{x:x.x+(g.x-x.x)*m,z:x.z+(g.z-x.z)*m,fx:(g.x-x.x)/(l[f+1]-l[f]||1),fz:(g.z-x.z)/(l[f+1]-l[f]||1)}}}}build(){let t=this.laneLine(this.a,this.b),e=this.laneLine(this.b,this.c),n=t.at(t.len),i=e.at(0),r=n.fx*i.fx+n.fz*i.fz,o=Math.min(14+(1-r)*6,t.len*.45,e.len*.45),a=()=>{let E=null;for(let A=o;A>=1.5;A*=.82){let S=this.turnCurve(t,e,A,r),C=Fd;if(this.corridor&&(C=Math.max(Fd,Math.max(this.corridor.query(S.E.x,S.E.z).d,this.corridor.query(S.X.x,S.X.z).d)-.05)),!this.corridor||S.curve.every(b=>this.corridor.query(b.x,b.z).d<C))return{...S,ok:!0};(!E||S.worst<E.worst)&&(E=S)}return E};this.swing=0;let c=zn(this.a,this.b),l=zn(this.b,this.c),u=c&&c===l&&r>.3&&c.nodes.indexOf(this.b)>0&&c.nodes.indexOf(this.b)<c.nodes.length-1?this.turnCurve(t,e,.01,r):a(),d=zn(this.a,this.b),f=zn(this.b,this.c);if(!u.ok&&r<-.3&&d&&f&&!d.median&&!f.median){let E=n.fx*i.fz-n.fz*i.fx,A=Math.min(d.width,f.width)/2,S=Gi(d);this.swing=(E>0?1:-1)*Math.max(0,A-2.1)-S;let C=a();C.ok||C.worst<u.worst?u=C:this.swing=0}let{R:m,E:x,X:g,curve:p}=u,_=[];for(let E=0;E<t.pts.length&&t.cum[E]<t.len-m-(this.swing?10:0);E++)_.push(t.pts[E]);_.push(x);let v=_.length-1;_.push(...p),_.push(g);let y=_.length-1;for(let E=0;E<e.pts.length;E++)e.cum[E]>m&&_.push(e.pts[E]);_.length===y+1&&_.push(e.at(e.len)),this.pts=_,this.cum=[0];for(let E=1;E<_.length;E++)this.cum.push(this.cum[E-1]+Math.hypot(_[E].x-_[E-1].x,_[E].z-_[E-1].z));this.exitS=this.cum[y],this.turnS0=this.cum[v],this.turnCos=r,this.turnLen=this.exitS-this.turnS0,this.turnR=m}turnCurve(t,e,n,i){let r=t.at(t.len-n),o=e.at(n);this.swing&&(r.x+=r.fz*this.swing,r.z-=r.fx*this.swing,o.x+=o.fz*this.swing,o.z-=o.fx*this.swing);let a;if(i<-.9)a={x:(r.x+o.x)/2+r.fx*n*1.2,z:(r.z+o.z)/2+r.fz*n*1.2};else{let h=r.fx*o.fz-r.fz*o.fx;if(Math.abs(h)<.05)a={x:(r.x+o.x)/2,z:(r.z+o.z)/2};else{let u=((o.x-r.x)*o.fz-(o.z-r.z)*o.fx)/h;a={x:r.x+r.fx*u,z:r.z+r.fz*u};let d=(r.x+o.x)/2,f=(r.z+o.z)/2;Math.hypot(a.x-d,a.z-f)>n*2&&(a={x:d,z:f})}}let c=[];for(let h=1;h<12;h++){let u=h/12;c.push({x:(1-u)*(1-u)*r.x+2*(1-u)*u*a.x+u*u*o.x,z:(1-u)*(1-u)*r.z+2*(1-u)*u*a.z+u*u*o.z})}let l=-1e9;if(this.corridor)for(let h of[r,...c,o])l=Math.max(l,this.corridor.query(h.x,h.z).d);return{R:n,E:r,X:o,curve:c,worst:l}}project(t,e){let n=0,i=1e18;for(let r=0;r<this.pts.length-1;r++){let o=this.pts[r],a=this.pts[r+1],c=a.x-o.x,l=a.z-o.z,h=c*c+l*l||1,u=Math.max(0,Math.min(1,((t-o.x)*c+(e-o.z)*l)/h)),d=o.x+c*u,f=o.z+l*u,m=(d-t)**2+(f-e)**2;m<i&&(i=m,n=this.cum[r]+Math.sqrt(h)*u)}return n}pointAt(t){let e=this.cum;if(t>=e[e.length-1]){let a=this.pts[this.pts.length-1];return{x:a.x,z:a.z}}let n=0;for(;n<e.length-2&&e[n+1]<t;)n++;let i=this.pts[n],r=this.pts[n+1],o=(t-e[n])/(e[n+1]-e[n]||1);return{x:i.x+(r.x-i.x)*o,z:i.z+(r.z-i.z)*o}}update(t,e=[]){let n=this.car;if(this.paused){n.input={throttle:0,brake:1,steer:0};return}let i=this.project(n.x,n.z);i>=this.exitS&&(this.a=this.b,this.b=this.c,this.c=this.pick(this.b,this.a),this.build(),i=this.project(n.x,n.z));let r=5+n.speed*.45,o=this.pointAt(i+r),a=Od(n,o.x,o.z),c=this.turnCos,l=this.turnR/Math.max(.3,Math.tan(Math.max(.05,Math.acos(Math.max(-1,Math.min(1,c))))/2)),h=c>.95?this.cruise:Math.max(2.5,Math.min(this.cruise,Math.sqrt(4*Math.max(2,l)))),u=this.turnS0-i,d=this.cruise;i<this.exitS&&(d=Math.min(d,u>0?Math.sqrt(h*h+2*2.2*u):h));let f=this.pointAt(i),m=this.pointAt(i+3),x=Math.atan2(m.x-f.x,m.z-f.z),g=Math.abs((n.h-x+Math.PI*3)%(Math.PI*2)-Math.PI);g>.25&&(d=Math.min(d,Math.max(2.5,9*(1-(g-.25)/.8))));let p=Math.sin(n.h),_=Math.cos(n.h),v=!1;if(this.squeeze>0)this.squeeze-=t;else for(let S of e){let C=S.x-n.x,b=S.z-n.z,M=C*p+b*_,I=C*-_+b*p,N=Math.cos(S.h-n.h)>.3;M>0&&M<22&&Math.abs(I)<2.6&&(N||M<9)&&(d=Math.min(d,Math.max(0,(M-7)*.6)),v=!0)}this.wait=v&&n.speed<1?(this.wait||0)+t:0,this.wait>2.5&&(this.wait=0,this.squeeze=3);let y=d-n.speed,E=Ws(.2+y*.3,0,.75),A=Ws(-y*.25,0,1);if(A>.02&&(E=0),this.reverseT>0){this.reverseT-=t,n.gear!==-1&&(n.gear=-1),n.input={throttle:0,brake:.5,steer:-a},this.reverseT<=0&&(n.gear=1);return}d>3&&n.speed<.8?(this.stuck+=t,this.stuck>2.5&&(this.stuck=0,this.reverseT=1.5)):this.stuck=0,n.gear<1&&(n.gear=1),n.input={throttle:E,brake:A,steer:a}}};function Bd(s){return s.price?Math.round(s.price*.5):s.rank*45e3}function kd(s){return[["\u6700\u9AD8\u51FA\u529B",`${s.maxPowerPS.toFixed(0)} PS / ${s.maxPowerRpm} rpm`],["\u6700\u5927\u30C8\u30EB\u30AF",`${s.maxTorque.toFixed(0)} N\xB7m / ${s.maxTorqueRpm} rpm`],["\u8ECA\u4E21\u91CD\u91CF",`${s.mass.toFixed(0)} kg`],["\u30D1\u30EF\u30FC\u30A6\u30A7\u30A4\u30C8\u30EC\u30B7\u30AA",`${s.pwr.toFixed(2)} kg/PS`],["\u30B0\u30EA\u30C3\u30D7",s.mu.toFixed(2)],["\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9\u4FC2\u6570",(s.clF+s.clR).toFixed(2)],["\u30EC\u30D6\u30EA\u30DF\u30C3\u30C8",`${s.redline} rpm`],["\u6226\u95D8\u529B",String(s.rating)]]}function Hd(s,t,e){let n=O("div",{class:"screen shop"}),i="equip",r=0,o=[],a=Gs(t),c=m=>{let x=Hs.find(p=>p.id===m),g=Nr.filter(p=>p.cat===m&&(zr(t,p.id)>0||a.equipped[m]===p.id)).map(p=>p.id);return x.required||g.unshift(null),g},l=(m,x)=>{let g=O("div",{class:"stats"}),p=kd(m),_=x?kd(x):null;return p.forEach(([v,y],E)=>{let A=_&&_[E][1]!==y;g.appendChild(O("div",{class:"stat"+(A?" diff":"")},O("span",{},v),O("b",{},y)))}),g},h=()=>{n.innerHTML="",o=[];let m=ti(a.carId,a.equipped),x=O("div",{class:"tabs"},...[["equip","\u30D1\u30FC\u30C4\u4EA4\u63DB"],["buy","\u30D1\u30FC\u30C4\u8CFC\u5165"],["sell","\u30D1\u30FC\u30C4\u58F2\u5374"]].map(([_,v])=>O("button",{class:"tab"+(i===_?" on":""),onclick:()=>{i=_,r=0,h()}},v))),g=O("div",{class:"part-list"});if(i==="equip")for(let _ of Hs){let v=c(_.id),y=a.equipped[_.id],E=y?tn[y]:null,A=C=>{let b=v.indexOf(y),M=v[(b+C+v.length)%v.length];a.equipped[_.id]=M,s.audio.beep(720,.04,.08),h()},S=O("div",{class:"part-row"},O("span",{class:"cat"},_.name),O("button",{class:"arrow",onclick:()=>A(-1)},"\u25C0"),O("span",{class:"pname"},E?E.name:"\uFF08\u306A\u3057\uFF09",O("small",{},E?`\u3000${Ur(E.rank)}\u3000${E.desc}`:"")),O("button",{class:"arrow",onclick:()=>A(1)},"\u25B6"),O("span",{class:"cnt"},`${v.length-(_.required?0:1)}\u7A2E\u6240\u6301`));o.push({row:S,left:()=>A(-1),right:()=>A(1),act:()=>A(1)}),g.appendChild(S)}else if(i==="buy")for(let _ of Nr.filter(v=>v.price)){let v=t.money>=_.price,y=()=>{if(t.money<_.price){s.audio.beep(220,.12,.1);return}t.money-=_.price,ga(t,_.id),s.audio.beep(1200,.08,.12),h()},E=O("div",{class:"part-row"+(v?"":" dim")},O("span",{class:"cat"},Dr[_.cat]),O("span",{class:"pname"},_.name,O("small",{},`\u3000${_.desc}`)),O("span",{class:"cnt"},`\u6240\u6301 ${t.owned[_.id]||0}`),O("button",{class:"buy",onclick:y},Sn(_.price)));o.push({row:E,act:y}),g.appendChild(E)}else{let _=Nr.filter(v=>zr(t,v.id)>0);_.length||g.appendChild(O("div",{class:"hint"},"\u58F2\u5374\u3067\u304D\u308B\uFF08\u672A\u88C5\u7740\u306E\uFF09\u30D1\u30FC\u30C4\u306F\u3042\u308A\u307E\u305B\u3093"));for(let v of _){let y=()=>{zr(t,v.id)<=0||(t.owned[v.id]-=1,t.money+=Bd(v),s.audio.beep(900,.08,.12),h())},E=O("div",{class:"part-row"},O("span",{class:"cat"},Dr[v.cat]),O("span",{class:"pname"},v.name,O("small",{},`\u3000${Ur(v.rank)}`)),O("span",{class:"cnt"},`\u672A\u88C5\u7740 ${zr(t,v.id)}`),O("button",{class:"buy",onclick:y},"\u58F2\u5374 "+Sn(Bd(v))));o.push({row:E,act:y}),g.appendChild(E)}}let p=O("button",{class:"menu-item small"},"\u30B7\u30E7\u30C3\u30D7\u3092\u51FA\u308B");p.onclick=()=>f(),r=Math.min(r,o.length-1),n.appendChild(Xe(`TUNE SHOP \u2014 ${_e[a.carId].name}`,O("div",{class:"shop-head"},O("span",{},`\u6240\u6301\u91D1 ${Sn(t.money)}`),O("span",{class:"hint"},"Tab:\u30BF\u30D6\u5207\u66FF\u3000\u2191\u2193:\u9078\u629E\u3000\u2190\u2192:\u30D1\u30FC\u30C4\u5909\u66F4\u3000Enter:\u8CFC\u5165/\u58F2\u5374\u3000Esc:\u51FA\u308B")),x,O("div",{class:"shop-body"},g,l(m,ti(a.carId,_e[a.carId].stock))),p)),u()},u=()=>o.forEach((m,x)=>m.row.classList.toggle("sel",x===r)),d=s.input.onKey(m=>{if(n.isConnected)if(m.code==="Tab"){let x=["equip","buy","sell"];i=x[(x.indexOf(i)+1)%3],r=0,h()}else m.code==="ArrowDown"&&o.length?(r=(r+1)%o.length,u(),o[r].row.scrollIntoView({block:"nearest"})):m.code==="ArrowUp"&&o.length?(r=(r-1+o.length)%o.length,u(),o[r].row.scrollIntoView({block:"nearest"})):m.code==="ArrowLeft"?o[r]?.left?.():m.code==="ArrowRight"?o[r]?.right?.():m.code==="Enter"?o[r]?.act?.():m.code==="Escape"&&f()}),f=()=>{d(),n.remove(),e&&e()};h(),s.ui.appendChild(n)}var qi=class{constructor(t,e=0){this.path=t,this.hint=-1,this.dist=e,this.prevS=null,this.lapStart=0,this.lap=0,this.sector=0,this.sectorStart=0,this.laps=[],this.sectors=[],this.curSectors=[],this.started=!1}update(t,e){let n=this.path,i=n.project(t.x,t.z,this.hint);if(this.hint=i.i,this.lat=i.lat,this.prevS==null)return this.prevS=i.s,null;let r=i.s-this.prevS;if(r<-n.length/2&&(r+=n.length),r>n.length/2&&(r-=n.length),this.prevS=i.s,Math.abs(r)>30&&(r=0),this.dist+=r,!this.started)return null;let o=null,a=n.length,c=this.dist-this.lap*a;if(this.sector<2&&c>=(this.sector+1)*a/3&&(this.curSectors.push(e-this.sectorStart),this.sectorStart=e,this.sector++,o={type:"sector",idx:this.sector,time:this.curSectors[this.curSectors.length-1]}),c>=a){let l=e-this.lapStart;this.curSectors.push(e-this.sectorStart),this.laps.push(l),this.sectors.push(this.curSectors),this.curSectors=[],this.lap++,this.sector=0,this.lapStart=e,this.sectorStart=e,o={type:"lap",lap:this.lap,time:l}}return o}start(t){this.started=!0,this.lapStart=t,this.sectorStart=t}get best(){return this.laps.length?Math.min(...this.laps):null}};var qs=class{constructor(t,e,n){this.game=t,this.hud=e,this.onGo=n,this.t=3.6,this.last=4,this.done=!1}update(t){if(this.done)return;this.t-=t;let e=Math.ceil(this.t);e!==this.last&&e<=3&&e>=1&&(this.hud.flash(String(e),.9),this.game.audio.beep(600,.18,.25)),this.t<=0&&(this.done=!0,this.hud.flash("GO!",1),this.game.audio.beep(1200,.4,.3),this.onGo()),this.last=e}};function Ys(s,t,e,n){let i=Xe(t),r=O("div",{class:"screen dialog"},i),o=()=>{s.input.pressed.clear(),a.destroy(),r.remove()},a=new $e(s,e.map(c=>({...c,action:()=>{o(),c.action()}})),{onBack:()=>{o(),n()}});return i.appendChild(a.root),s.ui.appendChild(r),o}var wa=200,Ea=class{constructor(t,e){this.game=t,this.opts=e}enter(){let t=this.game,{rival:e,layout:n}=this.opts,i=Yi(n);this.path=i,this.area=fn(n),t.setArea(this.area),t.audio.playBgm("battle"),t.world.setCourse(i),t.rig.setGallerySpots(i),this.session=new Fn(t,{corridor:i.corridor,path:i});let r=Gs(t.story),o=this.session.addCar({carId:r.carId,equipped:r.equipped,color:r.color,isPlayer:!0,name:Ke.name}),a=this.session.addCar({carId:e.car,equipped:e.parts,color:e.color,name:e.name}),c=i.hw[0],l=Math.min(2.4,c-1.4),h=i.posAt(-9,l),u=i.posAt(-9,-l);o.car.place(h.x,h.z,h.h,0),a.car.place(u.x,u.z,u.h,0),a.ai=new Xs(a.car,i,e.skill),this.P=o,this.R=a,this.tp=new qi(i,-9),this.tr=new qi(i,-9),this.laps=n.course.laps,this.total=this.laps*i.length,this.session.frozen=!0,this.session.controlsEnabled=!1,t.mirrorModel=o.model,t.rig.mode=t.rig.mode==="gallery"?"chase":t.rig.mode,t.rig.reset(),this.hud=new mn(t.ui),this.hud.setMapCourse(i,this.area),this.session.resetRule="battle",this.session.onResetDenied=()=>this.hud.flash("",1.2,"\u30EA\u30BB\u30C3\u30C8\u306F10km/h\u4EE5\u4E0B\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059"),this.session.onReset=()=>this.hud.flash("RESET",.8,"10m\u5F8C\u65B9\u304B\u3089\u518D\u30B9\u30BF\u30FC\u30C8"),this.t=0,this.raceT=0,this.state="intro",this.result=null,this.introT=2.2,this.hud.flash(`VS ${e.name}`,2.2,`${n.name}\u3000${this.laps}LAP`),this.countdown=new qs(t,this.hud,()=>{this.state="race",this.session.frozen=!1,this.session.controlsEnabled=!0,this.tp.start(this.raceT),this.tr.start(this.raceT)})}update(t){let e=this.game,n=this.session;if(this.paused)return;if(e.input.hitCode("Escape")&&this.state!=="result"){this.pause();return}this.state==="intro"&&(this.introT-=t,this.introT<=0&&(this.state="count")),this.state==="count"&&this.countdown.update(t),(this.state==="race"||this.state==="finish")&&(this.raceT+=t);let i=this.tp.dist-this.tr.dist;if(this.R.ai&&(this.R.ai.boost=i>80?1.03:i<-100?.985:1),n.update(t),this.tp.update(this.P.car,this.raceT),this.tr.update(this.R.car,this.raceT),e.input.hit("view")&&this.hud.setView(pn[e.rig.cycle(["chase","cockpit","hood"])]),e.input.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",e.rig.update(t,this.P.model,this.P.car),n.updateAudio(this.P),this.state==="race"){let c=null;this.tp.dist>=this.total?c={win:!0,how:"finish"}:this.tr.dist>=this.total?c={win:!1,how:"finish"}:i>=wa?c={win:!0,how:"snap"}:i<=-wa&&(c={win:!1,how:"snap"}),c&&(this.state="finish",this.result=c,this.finishT=2.5,this.session.controlsEnabled=!1,this.P.car.input={throttle:0,brake:.3,steer:0},this.hud.flash(c.win?"YOU WIN!":"YOU LOSE\u2026",2.5,c.how==="snap"?c.win?"\u30E9\u30A4\u30D0\u30EB\u3092\u5F15\u304D\u96E2\u3057\u305F\uFF01":"\u5F15\u304D\u96E2\u3055\u308C\u305F\u2026":"FINISH"),e.audio.beep(c.win?1320:330,.5,.3))}this.state==="finish"&&(this.finishT-=t,this.finishT<=0&&(this.state="result",this.showResult())),this.hud.update(t),this.hud.drawTach(this.P.car);let r=Math.min(this.laps,Math.max(1,Math.floor(this.tp.dist/this.path.length)+1)),o=i>=0;this.hud.tc.innerHTML=`<div class="lap">LAP <b>${r}</b>/${this.laps}</div><div class="time">${ce(this.raceT)}</div>`;let a=Math.max(-1,Math.min(1,i/wa));this.hud.tr.innerHTML=`<div class="pos ${o?"p1":"p2"}">${o?"1st":"2nd"}</div>
      <div class="gap">${o?"+":"\u2212"}${Math.abs(i).toFixed(0)} m</div>
      <div class="gapbar"><div class="mid"></div><div class="fill" style="left:${50+Math.min(0,a)*50}%;width:${Math.abs(a)*50}%;background:${o?"#33e1ff":"#ff4d6d"}"></div></div>
      <div class="rival">${this.opts.rival.name}\uFF08${_e[this.opts.rival.car].name}\uFF09</div>`,this.hud.tl.innerHTML=`<div class="who">${this.opts.layout.name}</div><div class="hint">${wa}m\u5F15\u304D\u96E2\u3057\u3067\u52DD\u5229</div>`,this.hud.drawMap([{x:this.R.car.x,z:this.R.car.z,h:this.R.car.h,color:"#ff4d6d"},{x:this.P.car.x,z:this.P.car.z,h:this.P.car.h,color:"#33e1ff"}])}pause(){let t=this.game;this.paused=!0,Ys(t,"PAUSE",[{label:"\u518D\u958B",action:()=>{this.paused=!1}},{label:"\u30EA\u30BF\u30A4\u30A2",sub:"\u6557\u5317\u6271\u3044\u3067\u8857\u306B\u623B\u308A\u307E\u3059",action:()=>{this.paused=!1,this.result={win:!1,how:"retire"},this.state="result",this.showResult()}}],()=>{this.paused=!1})}showResult(){let t=this.game,e=t.story,n=this.opts.rival,i=this.result.win;this.session.controlsEnabled=!1,this.session.frozen=!0,i?(e.wins++,e.money+=n.reward,e.defeated[n.id]=(e.defeated[n.id]||0)+1):e.losses++;let r=Xe(i?"BATTLE WIN":"BATTLE LOSE",O("div",{class:"enc-head"},O("span",{class:"enc-team"},n.team),O("span",{class:"enc-name"},n.name)),O("div",{class:"enc-line"},`\u300C${i?n.lines.win:n.lines.lose}\u300D`),O("div",{class:"hint"},`\u30BF\u30A4\u30E0 ${ce(this.raceT)}\u3000${this.result.how==="snap"?"\uFF08\u3061\u304E\u308A\u6C7A\u7740\uFF09":this.result.how==="retire"?"\uFF08\u30EA\u30BF\u30A4\u30A2\uFF09":""}`)),o=O("div",{class:"screen dialog result"},r);t.ui.appendChild(o);let a=c=>{t.transition(()=>t.setMode(new $s(t,{returnPos:this.opts.returnPos,message:c})))};if(i){r.appendChild(O("div",{class:"reward"},`\u8CDE\u91D1 ${Sn(n.reward)} \u7372\u5F97\uFF01`)),r.appendChild(O("div",{class:"hint"},"\u6226\u5229\u54C1\uFF1A\u30E9\u30A4\u30D0\u30EB\u306E\u30DE\u30B7\u30F3\u304B\u3089\u30D1\u30FC\u30C4\u30921\u3064\u9078\u3093\u3067\u6301\u3061\u5E30\u308C\u307E\u3059"));let c=Object.entries(n.parts).filter(([,h])=>h).map(([h,u])=>({cat:h,p:tn[u]})),l=new $e(t,c.map(({cat:h,p:u})=>({label:`${Dr[h]}\uFF1A${u.name}`,sub:`${Ur(u.rank)}\u3000${u.desc}\u3000\uFF08\u6240\u6301 ${e.owned[u.id]||0}\uFF09`,action:()=>{ga(e,u.id),l.destroy(),a(`${u.name} \u3092\u624B\u306B\u5165\u308C\u305F\uFF01`)}})),{className:"scroll"});r.appendChild(l.root)}else{let c=new $e(t,[{label:"\u8857\u306B\u623B\u308B",action:()=>{c.destroy(),a("\u6B21\u306F\u8CA0\u3051\u306A\u3044\u2026")}}]);r.appendChild(c.root)}}exit(){this.session.dispose(),this.hud.destroy(),this.game.world.setCourse(null),this.game.mirrorModel=null}};function Yi(s){return ch(s)}var Gd=4,Ks=new L,$s=class s{constructor(t,e={}){this.game=t,this.opts=e}enter(){let t=this.game,e=t.story;t.audio.playBgm("town");let n=this.area=this.opts.area||this.opts.returnPos?.area||e.area||"west";e.area=n,t.setArea(n),t.world.setCourse(null),this.graph=xd(n),this.session=new Fn(t,{corridor:t.world.corridor});let i=Gs(e),r=this.session.addCar({carId:i.carId,equipped:i.equipped,color:i.color,isPlayer:!0,name:Ke.name}),o=e.pos&&(e.pos.area||"west")===n?e.pos:null,a=this.opts.returnPos||o||Vi(n);r.car.place(a.x,a.z,a.h,0),r.color="#33e1ff",t.mirrorModel=r.model,t.rig.mode=this.opts.view||"chase",t.rig.reset(),this.hud=new mn(t.ui),this.hud.setMapCourse(null,n),this.labels=O("div",{class:"labels"}),t.ui.appendChild(this.labels),this.dialog=null,this.paused=!1,this.spawnT=0,this.encounter=null,this.poiCool=0;for(let c=0;c<Gd;c++)this.spawnRival(!0);this.hud.flash(this.opts.message||Me[n].name,2.2,this.opts.message?"":"\u30E9\u30A4\u30D0\u30EB\u306E\u5F8C\u308D\u3067\u30D1\u30C3\u30B7\u30F3\u30B0\uFF08"+Vd(t,"flash")+"\uFF09\u3057\u3066\u30D0\u30C8\u30EB\u3092\u6311\u3081\uFF01")}availableRivals(){let t=this.game.story.wins;return wh.filter(e=>e.area===this.area&&e.minWins<=t)}spawnRival(t=!1){let e=this.session,n=new Set(e.entries.filter(l=>l.rival).map(l=>l.rival.id)),i=this.availableRivals().filter(l=>!n.has(l.id));if(!i.length)return;let r=this.game.story.defeated;i.sort((l,h)=>(r[l.id]||0)-(r[h.id]||0)+(Math.random()-.5)*.8);let o=i[0],a=e.player.car,c=[];for(let[l,h]of Object.entries(this.graph))for(let u of h)(this.graph[u.to]||[]).length>1&&c.push([l,u.to]);for(let l=0;l<40;l++){let[h,u]=c[Math.floor(Math.random()*c.length)],d=Ft[h],f=Ft[u],m=.3+Math.random()*.4,x=d.x+(f.x-d.x)*m,g=d.z+(f.z-d.z)*m,p=Math.hypot(x-a.x,g-a.z);if(p<(t?110:170)||p>650||e.entries.some(S=>Math.hypot(S.car.x-x,S.car.z-g)<30))continue;let _=Math.hypot(f.x-d.x,f.z-d.z),v=(f.x-d.x)/_,y=(f.z-d.z)/_,E=e.addCar({carId:o.car,equipped:o.parts,color:o.color,name:o.name}),A=Gi(zn(h,u));E.car.place(x+y*A,g-v*A,Math.atan2(v,y),9),E.ai=new ba(E.car,this.graph,h,u,11+Math.random()*5,this.game.world.corridor),E.rival=o,E.rating=ti(o.car,o.parts).rating,E.mapColor="#ff4d6d",E.label=O("div",{class:"rival-tag"},O("b",{},o.name),O("span",{},`${_e[o.car].name}\u3000\u6226\u95D8\u529B ${E.rating}`)),this.labels.appendChild(E.label);return}}removeRival(t){t.label?.remove(),this.session.removeCar(t)}update(t){let e=this.game,n=this.session,i=e.story,r=e.input;if(this.paused)return;if(i.playtime+=t,r.hitCode("Escape")&&!this.dialog){this.pause();return}n.update(t);let o=n.player;r.hit("view")&&this.hud.setView(pn[e.rig.cycle(["chase","cockpit","hood"])]),r.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",e.rig.update(t,o.model,o.car),n.updateAudio(o),this.spawnT-=t;for(let h of n.entries.filter(u=>u.rival))Math.hypot(h.car.x-o.car.x,h.car.z-o.car.z)>750&&!this.encounter&&this.removeRival(h);if(this.spawnT<=0&&n.entries.filter(h=>h.rival).length<Gd&&(this.spawnRival(),this.spawnT=4),r.hit("flash")&&!this.encounter&&!this.dialog){o.flash=.35;let h=this.findFlashTarget();h&&(this.encounter={e:h,t:.7})}if(this.encounter&&!this.dialog&&(this.encounter.t-=t,this.encounter.t<=0&&this.openEncounter(this.encounter.e)),!this.dialog&&!this.leaving){for(let h of e.world.gateMarkers)if(Math.hypot(h.x-o.car.x,h.z-o.car.z)<9){this.changeArea(h.gate.to,Cr(h.gate));break}}this.poiCool-=t;let a=null;for(let h of e.world.poiMarkers)Math.hypot(h.x-o.car.x,h.z-o.car.z)<8&&(a=h);if(a&&!this.dialog){let h=Math.abs(o.car.vu)<4;this.hud.prompt.textContent=h?`${Vd(e,"interact")}\uFF1A${a.poi.type==="shop"?"\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30B7\u30E7\u30C3\u30D7\u306B\u5165\u308B":"\u30BB\u30FC\u30D6\u3059\u308B\uFF08GS\uFF09"}`:`${a.poi.name}\u3000\u2014 \u505C\u8ECA\u3057\u3066\u304F\u3060\u3055\u3044`,this.hud.prompt.style.display="block",h&&r.hit("interact")&&this.poiCool<=0&&(a.poi.type==="shop"?this.openShop():this.openSave(a))}else this.dialog||(this.hud.prompt.style.display="none");this.hud.update(t),this.hud.drawTach(o.car),this.hud.tl.innerHTML=`<div class="who">${Ke.name}\u3000<span>${_e[o.carId].name}</span></div><div>\u30A8\u30EA\u30A2 <b>${Me[this.area].name}</b></div><div>\u6240\u6301\u91D1 <b>${Sn(i.money)}</b></div><div>\u6226\u7E3E <b>${i.wins}</b>\u52DD ${i.losses}\u6557</div>`;let c=n.entries.map(h=>({x:h.car.x,z:h.car.z,h:h.car.h,color:h.isPlayer?"#33e1ff":"#ff4d6d"})),l=e.world.poiMarkers.map(h=>({x:h.x,z:h.z,color:h.poi.type==="shop"?"#ff3b6b":"#2ee6a8",label:h.poi.type==="shop"?"SHOP":"GS"}));this.hud.drawMap(c,l),this.updateLabels()}findFlashTarget(){let t=this.session.player.car,[e,n]=t.fwd(),i=null,r=1e9;for(let o of this.session.entries){if(!o.rival)continue;let a=o.car.x-t.x,c=o.car.z-t.z,l=Math.hypot(a,c);l>75||(a*e+c*n)/(l||1)<.8||l<r&&(r=l,i=o)}return i}updateLabels(){let e=this.game.rig.camera,n=this.session.player.car;for(let i of this.session.entries){if(!i.label)continue;let r=Math.hypot(i.car.x-n.x,i.car.z-n.z);Ks.set(i.car.x,2.4,i.car.z).project(e);let o=r<140&&Ks.z<1&&Math.abs(Ks.x)<1.1&&Math.abs(Ks.y)<1.1;i.label.style.display=o?"block":"none",o&&(i.label.style.left=`${(Ks.x+1)/2*window.innerWidth}px`,i.label.style.top=`${(1-Ks.y)/2*window.innerHeight}px`,i.label.style.opacity=String(Math.max(.3,1-r/140)),i.label.classList.toggle("near",r<75))}}pickLayout(t){let e=null;for(let n of Rr){if(n.area!==this.area)continue;let i=gi.find(c=>c.key===`${n.id}_f`),r=Yi(i),o=r.project(t.x,t.z,-1),a=o.dist;if(!e||a<e.d){let[c,l]=t.fwd(),h=c*r.tx[o.i]+l*r.tz[o.i];e={d:a,course:n,reverse:h<0}}}return gi.find(n=>n.key===`${e.course.id}_${e.reverse?"r":"f"}`)}openEncounter(t){let e=this.game,n=this.session;t.flash=1,t.ai.paused=!0,n.controlsEnabled=!1;let i=t.rival,r=this.pickLayout(n.player.car),o=n.player.car.spec,a=Xe(null,O("div",{class:"enc-head"},O("span",{class:"enc-team"},i.team),O("span",{class:"enc-name"},i.name)),O("div",{class:"enc-car"},`${_e[i.car].name}\u3000\uFF08${_e[i.car].ref}\uFF09`),O("div",{class:"enc-line"},`\u300C${i.lines.meet}\u300D`),O("div",{class:"enc-vs"},O("div",{},O("small",{},"YOU"),O("b",{},String(o.rating))),O("div",{class:"vs"},"VS"),O("div",{},O("small",{},"RIVAL"),O("b",{},String(t.rating)))),O("div",{class:"enc-course"},`COURSE\uFF1A${r.name}\u3000${r.course.laps}\u5468`,O("br"),O("small",{},r.course.desc)),O("div",{class:"hint"},"\u5148\u306B\u30B4\u30FC\u30EB\u3059\u308B\u304B\u3001200m\u4EE5\u4E0A\u5F15\u304D\u96E2\u305B\u3070\u52DD\u5229")),c=O("div",{class:"screen dialog encounter"},a),l=()=>{e.input.pressed.clear(),h.destroy(),c.remove(),this.dialog=null,this.encounter=null,n.controlsEnabled=!0,t.ai.paused=!1,this.poiCool=.5},h=new $e(e,[{label:"\u30D0\u30C8\u30EB\u958B\u59CB",action:()=>{l(),this.startBattle(t,r)}},{label:"\u3084\u3081\u3066\u304A\u304F",action:()=>l()}],{onBack:()=>l()});a.appendChild(h.root),e.ui.appendChild(c),this.dialog=c}startBattle(t,e){let n=this.game,i=this.session.player.car,r={x:i.x,z:i.z,h:i.h,area:this.area};n.transition(()=>n.setMode(new Ea(n,{rival:t.rival,layout:e,returnPos:r})))}changeArea(t,e){let n=this.game;this.leaving=!0,this.session.controlsEnabled=!1,n.story.area=t,n.transition(()=>n.setMode(new s(n,{area:t,returnPos:e,message:`${Me[t].name}\u30A8\u30EA\u30A2`,view:n.rig.mode})),450)}openShop(){let t=this.game;this.session.controlsEnabled=!1,this.session.frozen=!0,this.dialog=!0,this.hud.prompt.style.display="none",Hd(t,t.story,()=>{let e=this.session.player,n={x:e.car.x,z:e.car.z,h:e.car.h,area:this.area};t.setMode(new s(t,{area:this.area,returnPos:n,message:"\u30BB\u30C3\u30C6\u30A3\u30F3\u30B0\u5B8C\u4E86",view:t.rig.mode}))})}openSave(t){let e=this.game,n=this.session;n.controlsEnabled=!1,n.frozen=!0;let i=Xe("GS \u2014 \u30BB\u30FC\u30D6\u30DD\u30A4\u30F3\u30C8",O("div",{class:"hint"},`${t.poi.name}`),O("div",{},"\u73FE\u5728\u306E\u9032\u884C\u72B6\u6CC1\u3092\u30BB\u30FC\u30D6\u3057\u307E\u3059\u304B\uFF1F")),r=O("div",{class:"screen dialog"},i),o=c=>{e.input.pressed.clear(),a.destroy(),r.remove(),this.dialog=null,n.controlsEnabled=!0,n.frozen=!1,this.poiCool=1,c&&this.hud.flash(c,1.6)},a=new $e(e,[{label:"\u30BB\u30FC\u30D6\u3059\u308B",action:()=>{let c=n.player.car;e.story.pos={x:c.x,z:c.z,h:c.h,area:this.area},e.story.area=this.area,o(Td(e.story)?"\u30BB\u30FC\u30D6\u3057\u307E\u3057\u305F":"\u30BB\u30FC\u30D6\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}},{label:"\u3084\u3081\u308B",action:()=>o()}],{onBack:()=>o()});i.appendChild(a.root),e.ui.appendChild(r),this.dialog=r}pause(){let t=this.game;this.paused=!0;let e=t.story,n=Xe("PAUSE",O("div",{class:"hint"},`\u6240\u6301\u91D1 ${Sn(e.money)}\u3000/\u3000${e.wins}\u52DD${e.losses}\u6557\u3000/\u3000\u30D7\u30EC\u30A4\u6642\u9593 ${Math.floor(e.playtime/60)}\u5206`),O("div",{class:"hint"},`\u73FE\u5728\u5730\uFF1A${Me[this.area].name}\u30A8\u30EA\u30A2\u3000\uFF0F\u3000\u30BB\u30FC\u30D6\u306F\u5404\u30A8\u30EA\u30A2\u306EGS\u3067\u884C\u3048\u307E\u3059`)),i=O("div",{class:"screen dialog"},n),r=()=>{t.input.pressed.clear(),o.destroy(),i.remove(),this.paused=!1},o=new $e(t,[{label:"\u518D\u958B",action:r},...Object.values(Me).filter(a=>a.id!==this.area).map(a=>({label:`\u30A8\u30EA\u30A2\u5207\u308A\u66FF\u3048\uFF1A${a.name}\u3078`,sub:`${a.name}\u30A8\u30EA\u30A2\u306E\u958B\u59CB\u5730\u70B9\uFF08GS\u524D\uFF09\u3078\u79FB\u52D5\u3057\u307E\u3059`,action:()=>{o.destroy(),i.remove(),this.paused=!1,this.changeArea(a.id,Vi(a.id))}})),{label:"\u30BF\u30A4\u30C8\u30EB\u3078\u623B\u308B",sub:"\u672A\u30BB\u30FC\u30D6\u306E\u9032\u884C\u306F\u5931\u308F\u308C\u307E\u3059",action:()=>{o.destroy(),t.transition(()=>t.setMode(new Tn(t)))}}],{onBack:r});n.appendChild(o.root),t.ui.appendChild(i)}exit(){this.session.dispose(),this.hud.destroy(),this.game.mirrorModel=null}};function Vd(s,t){return(s.settings.keys[t]||"").replace(/^Key/,"").replace(/^Digit/,"")}var Wd=["chase","cockpit","hood","gallery"],Zs=class{constructor(t,e){this.game=t,this.opts=e}enter(){let t=this.game,{layout:e,replay:n}=this.opts;t.setArea(fn(e)),this.path=Yi(e),t.world.setCourse(this.path),t.rig.setGallerySpots(this.path),t.audio.playBgm(null);let i=ti(n.carId,n.equipped);this.model=_a(_e[n.carId],n.color,{aero:n.equipped.aero,wing:n.equipped.aero==="aero_wing"||n.equipped.aero==="aero_full"?"gt":void 0}),t.world.scene.add(this.model),va(this.model);let r=i.wheelbase,o=r*i.frontWeight;this.ghost={spec:i,a:r-o,b:o,x:0,z:0,h:0,pitch:0,roll:0,steer:0,spinF:0,spinR:0,rpm:0,vu:0,vv:0,gear:1,boost:0,slip:0,input:{brake:0,throttle:0,steer:0},get speed(){return Math.abs(this.vu)},right(){return[-Math.cos(this.h),Math.sin(this.h)]}},this.engine=t.audio.createEngine(i),this.t=0,this.speed=1,this.playing=!0,this.duration=n.frames/n.rate,t.rig.mode="chase",t.rig.reset(),t.mirrorModel=this.model,this.hud=new mn(t.ui),this.hud.setMapCourse(this.path,fn(e)),this.hud.flash("REPLAY",1.5,e.name),this.hud.setView(pn[t.rig.mode])}frame(t){let e=this.opts.replay,n=Math.min(e.frames-1.001,Math.max(0,t*e.rate)),i=Math.floor(n),r=n-i,o=e.data,a=e.stride,c=i*a,l=(i+1)*a,h=f=>o[c+f]+(o[l+f]-o[c+f])*r,u=this.ghost;u.x=h(0),u.z=h(1);let d=o[l+2]-o[c+2];d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),u.h=o[c+2]+d*r,u.pitch=h(3),u.roll=h(4),u.steer=h(5),u.spinF=h(6),u.spinR=h(7),u.rpm=h(8),u.vu=h(9),u.gear=o[c+10],u.input.brake=o[c+11],u.input.throttle=o[c+12],u.boost=h(13),u.slip=h(14)}update(t){let e=this.game,n=e.input;if(n.hitCode("Escape")){e.transition(()=>e.setMode(this.opts.back()));return}n.hitCode("Space")&&(this.playing=!this.playing),n.hitCode("ArrowRight")&&(this.t=Math.min(this.duration,this.t+5)),n.hitCode("ArrowLeft")&&(this.t=Math.max(0,this.t-5)),n.hitCode("ArrowUp")&&(this.speed=Math.min(4,this.speed*2)),n.hitCode("ArrowDown")&&(this.speed=Math.max(.25,this.speed/2)),n.hit("view")&&this.hud.setView(pn[e.rig.cycle(Wd)]);for(let r=1;r<=4;r++)n.hitCode("Digit"+r)&&(e.rig.mode=Wd[r-1],e.rig.reset(),e.rig.galleryIdx=-1,this.hud.setView(pn[e.rig.mode]));n.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",this.playing&&(this.t+=t*this.speed),this.t>=this.duration&&(this.t=0,e.rig.reset()),this.frame(this.t),ya(this.model,this.ghost),e.rig.update(t,this.model,this.ghost),e.audio.updateEngine(this.engine,this.ghost,this.playing?1:0,0),this.hud.update(t),this.hud.drawTach(this.ghost);let i=this.opts.record;this.hud.tc.innerHTML=`<div class="lap">REPLAY ${this.playing?"\u25B6":"\u275A\u275A"} \xD7${this.speed}</div><div class="time">${ce(this.t)} / ${ce(this.duration)}</div>`,this.hud.tr.innerHTML=i?`<div class="lbl">BEST</div><div class="big">${ce(i.best)}</div><div class="laps">${i.laps.map((r,o)=>`<div>L${o+1} ${ce(r)}</div>`).join("")}</div>`:"",this.hud.tl.innerHTML=`<div class="who">${this.opts.layout.name}</div><div class="hint">\u8996\u70B9 ${fa(e.settings.keys.view)} / 1-4\u3000\u4E00\u6642\u505C\u6B62 Space\u3000\u65E9\u9001\u308A/\u5DFB\u623B\u3057 \u2190\u2192\u3000\u901F\u5EA6 \u2191\u2193\u3000\u7D42\u4E86 Esc</div>`,this.hud.drawMap([{x:this.ghost.x,z:this.ghost.z,h:this.ghost.h,color:"#33e1ff"}])}exit(){let t=this.game;t.world.scene.remove(this.model),t.audio.destroyEngine(this.engine),this.hud.destroy(),t.world.setCourse(null),t.mirrorModel=null}};var Sa=3,Ta=class s{constructor(t,e){this.game=t,this.opts=e}enter(){let t=this.game,{layout:e,carId:n,equipped:i,color:r,kind:o}=this.opts;this.ta=o==="ta";let a=Yi(e);this.path=a,this.area=fn(e),t.setArea(this.area),t.audio.playBgm(this.ta?"battle":"town"),t.world.setCourse(a),t.rig.setGallerySpots(a),this.session=new Fn(t,{corridor:a.corridor,path:a});let c=this.session.addCar({carId:n,equipped:i,color:r,isPlayer:!0}),l=a.posAt(-8,0);c.car.place(l.x,l.z,l.h,0),this.P=c,this.tracker=new qi(a,-8),this.recorder=this.ta?new Ma(30):null,t.mirrorModel=c.model,t.rig.mode==="gallery"&&(t.rig.mode="chase"),t.rig.reset(),this.hud=new mn(t.ui),this.hud.setMapCourse(a,this.area),this.t=0,this.state="count",this.session.frozen=!0,this.session.controlsEnabled=!1;let h=Vs()[e.key]?.[0];this.recordBest=h?h.best:null,this.lastLap=null,this.sectorFlash="",this.hud.flash(this.ta?"TIME ATTACK":"FREE RUN",1.4,e.name),this.countdown=new qs(t,this.hud,()=>{this.state="run",this.session.frozen=!1,this.session.controlsEnabled=!0,this.tracker.start(this.t)})}update(t){let e=this.game;if(this.paused)return;if(e.input.hitCode("Escape")&&this.state!=="done"){this.pause();return}this.state==="count"&&this.countdown.update(t),this.state==="run"&&(this.t+=t),this.session.update(t),this.recorder&&this.state==="run"&&this.recorder.sample(t,this.P.car);let n=this.tracker.update(this.P.car,this.t);n&&this.state==="run"&&this.onEvent(n),e.input.hit("view")&&this.hud.setView(pn[e.rig.cycle(["chase","cockpit","hood"])]),e.input.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",e.rig.update(t,this.P.model,this.P.car),this.session.updateAudio(this.P);let i=this.tracker;this.hud.update(t),this.hud.drawTach(this.P.car);let r=this.state==="run"?this.t-i.lapStart:0,o=this.ta?`LAP <b>${Math.min(Sa,i.lap+1)}</b>/${Sa}`:`LAP <b>${i.lap+1}</b>`;this.hud.tc.innerHTML=`<div class="lap">${o}</div><div class="time">${ce(r)}</div><div class="sectors">${this.sectorFlash}</div>`;let a=i.laps.map((c,l)=>`<div class="${c===i.best?"best":""}">L${l+1} ${ce(c)}</div>`).slice(-5).join("");this.hud.tr.innerHTML=`<div class="lbl">BEST</div><div class="big">${ce(i.best)}</div>${this.ta?`<div class="lbl">RECORD ${ce(this.recordBest)}</div>`:""}<div class="laps">${a}</div>`,this.hud.tl.innerHTML=`<div class="who">${this.opts.layout.name}</div><div class="hint">${this.ta?"TIME ATTACK "+Sa+"\u5468":"FREE RUN\u3000Esc\u3067\u30E1\u30CB\u30E5\u30FC"}</div>`,this.hud.drawMap([{x:this.P.car.x,z:this.P.car.z,h:this.P.car.h,color:"#33e1ff"}])}onEvent(t){let e=this.tracker;if(t.type==="sector"){let n=t.idx-1,i=e.sectors.map(a=>a[n]).filter(a=>a!=null),r=i.length?Math.min(...i):null,o=r!=null?t.time-r:null;this.sectorFlash=`S${t.idx} ${ce(t.time)} ${o!=null?`<span class="${o<=0?"neg":"pos"}">${o<=0?"\u2212":"+"}${Math.abs(o).toFixed(3)}</span>`:""}`}else if(t.type==="lap"){let n=t.time===e.best;this.sectorFlash=`S3 ${ce(e.sectors[e.sectors.length-1][2])}`,this.hud.flash(ce(t.time),2,n?"BEST LAP!":`LAP ${t.lap}`),this.ta&&e.lap>=Sa&&this.finishTA()}}async finishTA(){let t=this.game;this.state="done",this.session.controlsEnabled=!1;let e=this.tracker,n=`${this.opts.layout.key}_${Date.now()}`,i={id:n,date:new Date().toISOString(),laps:e.laps,sectors:e.sectors,best:e.best,total:e.laps.reduce((a,c)=>a+c,0),carId:this.opts.carId},r=this.recorder.finish({carId:this.opts.carId,equipped:this.opts.equipped,color:this.opts.color,layoutKey:this.opts.layout.key}),o=Ad(this.opts.layout.key,i);await Rd(n,r),setTimeout(()=>this.showResult(i,o,r),1500)}showResult(t,e,n){let i=this.game,r=O("table",{class:"rec-table"},O("tr",{},O("th",{},"LAP"),O("th",{},"S1"),O("th",{},"S2"),O("th",{},"S3"),O("th",{},"TIME")));t.laps.forEach((l,h)=>{let u=t.sectors[h];r.appendChild(O("tr",{class:l===t.best?"best":""},O("td",{},String(h+1)),O("td",{},ce(u[0])),O("td",{},ce(u[1])),O("td",{},ce(u[2])),O("td",{class:"hl"},ce(l))))});let o=Xe("TIME ATTACK RESULT",O("div",{class:"reward"},`BEST LAP ${ce(t.best)}\u3000${e===0?"\u2605 \u30B3\u30FC\u30B9\u30EC\u30B3\u30FC\u30C9\u66F4\u65B0\uFF01":e>=0?`\uFF08${e+1}\u4F4D\uFF09`:""}`),r,O("div",{class:"hint"},`TOTAL ${ce(t.total)}\u3000/\u3000${new Date(t.date).toLocaleString("ja-JP")}`)),a=O("div",{class:"screen dialog result"},o),c=new $e(i,[{label:"\u30EA\u30D7\u30EC\u30A4\u3092\u898B\u308B",action:()=>{c.destroy(),i.transition(()=>i.setMode(new Zs(i,{layout:this.opts.layout,replay:n,record:t,back:()=>new s(i,this.opts)})))}},{label:"\u3082\u3046\u4E00\u5EA6\u8D70\u308B",action:()=>{c.destroy(),i.transition(()=>i.setMode(new s(i,this.opts)))}},{label:"PRACTICE\u30E1\u30CB\u30E5\u30FC\u3078",action:()=>{c.destroy(),i.transition(()=>i.setMode(new Tn(i,"practice")))}}]);o.appendChild(c.root),i.ui.appendChild(a)}pause(){let t=this.game;this.paused=!0,Ys(t,"PAUSE",[{label:"\u518D\u958B",action:()=>{this.paused=!1}},{label:"\u30EA\u30B9\u30BF\u30FC\u30C8",action:()=>t.transition(()=>t.setMode(new s(t,this.opts)))},{label:"PRACTICE\u30E1\u30CB\u30E5\u30FC\u3078",action:()=>t.transition(()=>t.setMode(new Tn(t,"practice")))}],()=>{this.paused=!1})}exit(){this.session.dispose(),this.hud.destroy(),this.game.world.setCourse(null),this.game.mirrorModel=null}};var Aa=class s{constructor(t,e){this.game=t,this.opts=e}enter(){let t=this.game,{carId:e,equipped:n,color:i}=this.opts;t.audio.playBgm("town");let r=this.area=this.opts.area||"west";t.setArea(r),t.world.setCourse(null),this.session=new Fn(t,{corridor:t.world.corridor}),this.P=this.session.addCar({carId:e,equipped:n,color:i,isPlayer:!0});let o=this.opts.pos||Vi(r);this.P.car.place(o.x,o.z,o.h,0),t.mirrorModel=this.P.model,t.rig.mode==="gallery"&&(t.rig.mode="chase"),t.rig.reset(),this.hud=new mn(t.ui),this.hud.setMapCourse(null,r),this.session.onReset=()=>this.hud.flash("RESET",.8),this.hud.flash(`${Me[r].name}\u30BF\u30A6\u30F3`,2,"FREE RUN\u3000\u5168\u9053\u8DEF\u3092\u81EA\u7531\u306B\u8D70\u884C\u3067\u304D\u307E\u3059\u3000Esc\u3067\u30E1\u30CB\u30E5\u30FC")}update(t){let e=this.game;if(!this.paused){if(e.input.hitCode("Escape")){this.pause();return}if(this.session.update(t),!this.leaving){for(let n of e.world.gateMarkers)if(Math.hypot(n.x-this.P.car.x,n.z-this.P.car.z)<9){this.changeArea(n.gate.to,Cr(n.gate));break}}e.input.hit("view")&&this.hud.setView(pn[e.rig.cycle(["chase","cockpit","hood"])]),e.input.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",e.rig.update(t,this.P.model,this.P.car),this.session.updateAudio(this.P),this.hud.update(t),this.hud.drawTach(this.P.car),this.hud.tl.innerHTML=`<div class="who">${Me[this.area].name}\u30BF\u30A6\u30F3</div><div class="hint">FREE RUN\u3000R:\u30EA\u30BB\u30C3\u30C8\u3000Esc:\u30E1\u30CB\u30E5\u30FC</div>`,this.hud.drawMap([{x:this.P.car.x,z:this.P.car.z,h:this.P.car.h,color:"#33e1ff"}])}}pause(){let t=this.game;this.paused=!0,Ys(t,"PAUSE",[{label:"\u518D\u958B",action:()=>{this.paused=!1}},{label:"\u30B9\u30BF\u30FC\u30C8\u5730\u70B9\u3078\u623B\u308B",action:()=>t.transition(()=>t.setMode(new s(t,{...this.opts,pos:null})))},...Object.values(Me).filter(e=>e.id!==this.area).map(e=>({label:`\u30A8\u30EA\u30A2\u5207\u308A\u66FF\u3048\uFF1A${e.name}\u3078`,action:()=>this.changeArea(e.id,Vi(e.id))})),{label:"PRACTICE\u30E1\u30CB\u30E5\u30FC\u3078",action:()=>t.transition(()=>t.setMode(new Tn(t,"practice")))}],()=>{this.paused=!1})}changeArea(t,e){let n=this.game;this.leaving=!0,this.session.controlsEnabled=!1,n.transition(()=>n.setMode(new s(n,{...this.opts,area:t,pos:e})),450)}exit(){this.session.dispose(),this.hud.destroy(),this.game.mirrorModel=null}};var Tn=class s{constructor(t,e=null){this.game=t,this.sub=e}enter(){let t=this.game;t.audio.playBgm("town"),t.setArea("west"),t.world.setCourse(null),this.ang=0,this.root=O("div",{class:"screen title"}),this.logo=O("div",{class:"logo"},O("div",{class:"logo-main"},"RACING IBR"),O("div",{class:"logo-sub"},"\u897F\u6C60\u888B\u30CA\u30A4\u30C8\u30EC\u30FC\u30B5\u30FC\u30BA"),O("div",{class:"logo-ver"},"v0.1 \u2014 Encounter Battle Build")),this.menuWrap=O("div",{class:"title-menu"}),this.root.append(this.logo,this.menuWrap,O("div",{class:"title-foot"},"\u2191\u2193 \u9078\u629E\u3000Enter \u6C7A\u5B9A\u3000Esc \u623B\u308B\u3000\uFF5C\u3000\u30AF\u30EA\u30C3\u30AF\u64CD\u4F5C\u3082\u53EF")),t.ui.appendChild(this.root),this.sub==="practice"?this.showPractice():this.showMain()}setMenu(t,e,n){this.menu&&this.menu.destroy(),this.menuWrap.innerHTML="",n&&this.menuWrap.appendChild(O("div",{class:"menu-title"},n)),this.menu=new $e(this.game,t,{onBack:e}),this.menuWrap.appendChild(this.menu.root)}showMain(){this.setMenu([{label:"STORY",sub:"\u30EC\u30FC\u30B7\u30F3\u30B0RPG\u30E2\u30FC\u30C9",action:()=>this.showStory()},{label:"PRACTICE",sub:"\u30BF\u30A4\u30E0\u30A2\u30BF\u30C3\u30AF\uFF0F\u30D5\u30EA\u30FC\u30E9\u30F3",action:()=>this.showPractice()},{label:"COMMON SETTING",sub:"\u30AD\u30FC\u914D\u7F6E\u30FB\u64CD\u4F5C\u8A2D\u5B9A",action:()=>this.showSettings()}])}showStory(){let t=_h()?yh():null;this.setMenu([{label:"NEW GAME",sub:"\u9ED2\u7895\u30AB\u30B1\u30EB\u306886-GR\u306E\u7269\u8A9E\u3092\u59CB\u3081\u308B",action:()=>this.newGame(!!t)},{label:"CONTINUE",disabled:!t,sub:t?`${Sn(t.money)}\u3000${t.wins}\u52DD\u3000${new Date(t.savedAt).toLocaleString("ja-JP")}`:"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306A\u3057",action:()=>this.startStory(t)},{label:"\u623B\u308B",action:()=>this.showMain()}],()=>this.showMain(),"STORY")}newGame(t){t?this.setMenu([{label:"\u306F\u3044\uFF08\u6700\u521D\u304B\u3089\u59CB\u3081\u308B\uFF09",sub:"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306F\u6B21\u306BGS\u3067\u30BB\u30FC\u30D6\u3059\u308B\u307E\u3067\u6B8B\u308A\u307E\u3059",action:()=>this.startStory(xh())},{label:"\u3044\u3044\u3048",action:()=>this.showStory()}],()=>this.showStory(),"NEW GAME\u3092\u59CB\u3081\u307E\u3059\u304B\uFF1F"):this.startStory(xh())}startStory(t){let e=this.game;e.story=structuredClone(t),e.transition(()=>e.setMode(new $s(e)))}showPractice(){this.setMenu([{label:"TIME ATTACK",sub:"\u30BB\u30AF\u30BF\u30FC\u30BF\u30A4\u30E0\u30FB\u30EA\u30D7\u30EC\u30A4\u3092\u8A18\u9332",action:()=>this.pickLayout("ta")},{label:"FREE RUN",sub:"\u30BF\u30A4\u30E0\u3092\u6C17\u306B\u305B\u305A\u81EA\u7531\u306B\u8D70\u884C",action:()=>this.pickLayout("free")},{label:"RECORDS / REPLAY",sub:"\u8A18\u9332\u306E\u78BA\u8A8D\u3068\u30EA\u30D7\u30EC\u30A4\u518D\u751F",action:()=>this.pickLayout("rec")},{label:"\u623B\u308B",action:()=>this.showMain()}],()=>this.showMain(),"PRACTICE")}pickLayout(t){let e=Vs(),n=t==="free"?[{label:"\u897F\u6C60\u888B\u30BF\u30A6\u30F3\uFF08\u5168\u9053\u8DEF\uFF09",sub:"\u6C60\u888B\u99C5\u897F\u53E3\u30FB\u897F\u53E3\u516C\u5712\u30FB\u897F\u4E00\u756A\u8857\u3092\u542B\u3080\u8857\u5168\u4F53\u3092\u81EA\u7531\u306B\u8D70\u884C",action:()=>this.pickSetup("town",null,"west")},{label:"\u6771\u6C60\u888B\u30BF\u30A6\u30F3\uFF08\u5168\u9053\u8DEF\uFF09",sub:"\u6C60\u888B\u99C5\u6771\u53E3\u30FB\u30B5\u30F3\u30B7\u30E3\u30A4\u30F360\u901A\u308A\u30FB\u6625\u65E5\u901A\u308A\u30FB\u9996\u90FD\u9AD8\u4E0B\u3092\u542B\u3080\u8857\u5168\u4F53\u3092\u81EA\u7531\u306B\u8D70\u884C",action:()=>this.pickSetup("town",null,"east")}]:[];this.setMenu([...n,...gi.map(i=>({label:i.name,sub:`\u3010${Me[fn(i)].name}\u3011${i.course.desc}\u3000BEST ${ce(e[i.key]?.[0]?.best)}`,action:()=>t==="rec"?this.showRecords(i):this.pickSetup(t,i)})),{label:"\u623B\u308B",action:()=>this.showPractice()}],()=>this.showPractice(),t==="ta"?"TIME ATTACK \u2014 \u30B3\u30FC\u30B9\u9078\u629E":t==="free"?"FREE RUN \u2014 \u30B3\u30FC\u30B9\u9078\u629E":"RECORDS \u2014 \u30B3\u30FC\u30B9\u9078\u629E")}pickSetup(t,e,n="west"){let i=_h()?yh():null,r=i?i.garage[i.active]:null,o=(a,c)=>{let l=this.game;l.transition(()=>l.setMode(t==="town"?new Aa(l,{carId:Ke.car,equipped:a,color:c,area:n}):new Ta(l,{layout:e,kind:t,carId:Ke.car,equipped:a,color:c})))};this.setMenu([{label:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u30DE\u30B7\u30F3",disabled:!r,sub:r?"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306E\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u72B6\u614B\u3067\u8D70\u884C":"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306A\u3057",action:()=>o(r.equipped,r.color)},{label:"\u30CE\u30FC\u30DE\u30EB 86-GR",sub:_e[Ke.car].ref+" \u76F8\u5F53",action:()=>o({..._e[Ke.car].stock},Ke.color)},{label:"\u623B\u308B",action:()=>this.pickLayout(t==="town"?"free":t)}],()=>this.pickLayout(t==="town"?"free":t),`${e?e.name:Me[n].name+"\u30BF\u30A6\u30F3"} \u2014 \u30DE\u30B7\u30F3\u9078\u629E`)}showRecords(t){let e=Vs()[t.key]||[];this.menu&&this.menu.destroy(),this.menuWrap.innerHTML="";let n=O("table",{class:"rec-table"},O("tr",{},O("th",{},"#"),O("th",{},"BEST LAP"),O("th",{},"S1"),O("th",{},"S2"),O("th",{},"S3"),O("th",{},"TOTAL"),O("th",{},"\u65E5\u6642"),O("th",{},"")));e.forEach((o,a)=>{let c=o.laps.indexOf(o.best),l=o.sectors[c]||[],h=O("button",{class:"mini-btn"},"\u25B6 \u30EA\u30D7\u30EC\u30A4");h.onclick=async()=>{let u=await Cd(o.id);if(!u){h.textContent="\u30C7\u30FC\u30BF\u306A\u3057";return}let d=this.game;d.transition(()=>d.setMode(new Zs(d,{layout:t,replay:u,record:o,back:()=>new s(d,"practice")})))},n.appendChild(O("tr",{},O("td",{},String(a+1)),O("td",{class:"hl"},ce(o.best)),O("td",{},ce(l[0])),O("td",{},ce(l[1])),O("td",{},ce(l[2])),O("td",{},ce(o.total)),O("td",{},new Date(o.date).toLocaleString("ja-JP")),O("td",{},h)))});let i=O("button",{class:"menu-item small"},"\u623B\u308B");i.onclick=()=>{r(),this.pickLayout("rec")};let r=this.game.input.onKey(o=>{o.code==="Escape"&&(r(),this.pickLayout("rec"))});this.menu={destroy:()=>r()},this.menuWrap.appendChild(Xe(`${t.name} \u2014 \u8A18\u9332`,e.length?n:O("div",{class:"hint"},"\u307E\u3060\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093"),i))}showSettings(){this.menu&&this.menu.destroy(),this.menuWrap.innerHTML="",this.root.style.display="none",Ed(this.game,()=>{this.root.style.display="",this.showMain()})}update(t){this.ang+=t*.05;let e=this.game.rig.camera,n=60,i=-40;e.position.set(n+Math.cos(this.ang)*420,150,i+Math.sin(this.ang)*420),e.lookAt(n,0,i),e.fov=55,e.updateProjectionMatrix()}exit(){this.menu&&this.menu.destroy()}};var Sh=new ma(document.getElementById("app"));Sh.setMode(new Tn(Sh));location.search.includes("debug")&&(window.__dbg={game:Sh,RaceAI:Xs},window.__dbgMap=th,window.__dbgTHREE={Box3:Mn,Matrix4:jt,Vector3:L},window.__dbgClear=Fe);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
