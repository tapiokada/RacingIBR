(()=>{var od=0,ql=1,ad=2;var iu=1,cd=2,An=3,Jn=0,De=1,He=2,Zn=0,Xi=1,Vs=2,Yl=3,$l=4,ld=5,di=100,hd=101,ud=102,dd=103,fd=104,pd=200,md=201,gd=202,xd=203,za=204,Ba=205,_d=206,vd=207,yd=208,Md=209,bd=210,Sd=211,wd=212,Ed=213,Td=214,ka=0,Ha=1,Va=2,Zi=3,Ga=4,Wa=5,Xa=6,qa=7,ul=0,Ad=1,Rd=2,Kn=0,Cd=1,Id=2,Pd=3,dl=4,Ld=5,Dd=6,Ud=7;var su=300,Ki=301,Ji=302,Ya=303,$a=304,Co=306,Gs=1e3,pi=1001,Za=1002,Ze=1003,Nd=1004;var dr=1005;var pn=1006,na=1007;var mi=1008;var Ln=1009,ru=1010,ou=1011,Ws=1012,fl=1013,gi=1014,mn=1015,er=1016,pl=1017,ml=1018,Qi=1020,au=35902,cu=1021,lu=1022,cn=1023,hu=1024,uu=1025,qi=1026,ji=1027,gl=1028,xl=1029,du=1030,_l=1031;var vl=1033,Gr=33776,Wr=33777,Xr=33778,qr=33779,Ka=35840,Ja=35841,Qa=35842,ja=35843,tc=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,cc=37813,lc=37814,hc=37815,uc=37816,dc=37817,fc=37818,pc=37819,mc=37820,gc=37821,Yr=36492,xc=36494,_c=36495,fu=36283,vc=36284,yc=36285,Mc=36286;var $r=2300,bc=2301,ia=2302,Zl=2400,Kl=2401,Jl=2402;var Fd=3200,Od=3201;var yl=0,zd=1,Yn="",Pe="srgb",os="srgb-linear",Io="linear",re="srgb";var wi=7680;var Ql=519,Bd=512,kd=513,Hd=514,pu=515,Vd=516,Gd=517,Wd=518,Xd=519,Sc=35044;var jl="300 es",Cn=2e3,Zr=2001,Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sa=Math.PI/180,Kr=180/Math.PI;function In(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[s&255]+Ce[s>>8&255]+Ce[s>>16&255]+Ce[s>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Le(s,t,e){return Math.max(t,Math.min(e,s))}function qd(s,t){return(s%t+t)%t}function ra(s,t,e){return(1-e)*s+e*t}function fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var lt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],v=i[4],_=i[7],R=i[2],T=i[5],A=i[8];return r[0]=o*x+a*y+c*R,r[3]=o*m+a*v+c*T,r[6]=o*p+a*_+c*A,r[1]=l*x+h*y+u*R,r[4]=l*m+h*v+u*T,r[7]=l*p+h*_+u*A,r[2]=d*x+f*y+g*R,r[5]=d*m+f*v+g*T,r[8]=d*p+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oa=new qt;function mu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yd(){let s=Jr("canvas");return s.style.display="block",s}var th={};function Fs(s){s in th||(th[s]=!0,console.warn(s))}function $d(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:os,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Io:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var eh=[.64,.33,.3,.6,.15,.06],nh=[.2126,.7152,.0722],ih=[.3127,.329],sh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[os]:{primaries:eh,whitePoint:ih,transfer:Io,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:eh,whitePoint:ih,transfer:re,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});var Ei,wc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Jr("canvas")),Ei.width=t.width,Ei.height=t.height;let n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Jr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jd=0,Qr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(aa(i[o].image)):r.push(aa(i[o]))}else r=aa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qd=0,Ge=class s extends Qn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=pi,i=pi,r=pn,o=mi,a=cn,c=Ln,l=s.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=In(),this.name="",this.source=new Qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gs:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gs:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=su;Ge.DEFAULT_ANISOTROPY=1;var ae=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,_=(f+1)/2,R=(p+1)/2,T=(h+d)/4,A=(u+x)/4,P=(g+m)/4;return v>_&&v>R?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=A/n):_>R?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=P/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Ec{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},jr=class extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let _=a*y;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+x*_,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ca=new L,oh=new tn,Un=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),pr.subVectors(this.max,Ts),Ti.subVectors(t.a,Ts),Ai.subVectors(t.b,Ts),Ri.subVectors(t.c,Ts),Hn.subVectors(Ai,Ti),Vn.subVectors(Ri,Ai),ri.subVectors(Ti,Ri);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ri.z,ri.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ri.z,0,-ri.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ri.y,ri.x,0];return!la(e,Ti,Ai,Ri,pr)||(e=[1,0,0,0,1,0,0,0,1],!la(e,Ti,Ai,Ri,pr))?!1:(mr.crossVectors(Hn,Vn),e=[mr.x,mr.y,mr.z],la(e,Ti,Ai,Ri,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bn=[new L,new L,new L,new L,new L,new L,new L,new L],rn=new L,fr=new Un,Ti=new L,Ai=new L,Ri=new L,Hn=new L,Vn=new L,ri=new L,Ts=new L,pr=new L,mr=new L,oi=new L;function la(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){oi.fromArray(s,r);let a=i.x*Math.abs(oi.x)+i.y*Math.abs(oi.y)+i.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var jd=new Un,As=new L,ha=new L,jn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(ha)),this.expandByPoint(As.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new L,ua=new L,gr=new L,Gn=new L,da=new L,xr=new L,fa=new L,to=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ua.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(ua);let r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=Gn.dot(this.direction),c=-Gn.dot(gr),l=Gn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ua).addScaledVector(gr,d),f}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,i,r){da.subVectors(e,t),xr.subVectors(n,t),fa.crossVectors(da,xr);let o=this.direction.dot(fa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,t);let c=a*this.direction.dot(xr.crossVectors(Gn,xr));if(c<0)return null;let l=a*this.direction.dot(da.cross(Gn));if(l<0||c+l>o)return null;let h=-a*Gn.dot(fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class s{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,x,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,n){let i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Wn.crossVectors(n,Ye),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Wn.crossVectors(n,Ye)),Wn.normalize(),_r.crossVectors(Ye,Wn),i[0]=Wn.x,i[4]=_r.x,i[8]=Ye.x,i[1]=Wn.y,i[5]=_r.y,i[9]=Ye.y,i[2]=Wn.z,i[6]=_r.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],_=n[11],R=n[15],T=i[0],A=i[4],P=i[8],S=i[12],M=i[1],I=i[5],F=i[9],O=i[13],B=i[2],V=i[6],H=i[10],tt=i[14],q=i[3],rt=i[7],gt=i[11],_t=i[15];return r[0]=o*T+a*M+c*B+l*q,r[4]=o*A+a*I+c*V+l*rt,r[8]=o*P+a*F+c*H+l*gt,r[12]=o*S+a*O+c*tt+l*_t,r[1]=h*T+u*M+d*B+f*q,r[5]=h*A+u*I+d*V+f*rt,r[9]=h*P+u*F+d*H+f*gt,r[13]=h*S+u*O+d*tt+f*_t,r[2]=g*T+x*M+m*B+p*q,r[6]=g*A+x*I+m*V+p*rt,r[10]=g*P+x*F+m*H+p*gt,r[14]=g*S+x*O+m*tt+p*_t,r[3]=y*T+v*M+_*B+R*q,r[7]=y*A+v*I+_*V+R*rt,r[11]=y*P+v*F+_*H+R*gt,r[15]=y*S+v*O+_*tt+R*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,R=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,T=e*y+n*v+i*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=y*A,t[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*A,t[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*p+n*c*p)*A,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*A,t[4]=v*A,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*A,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*A,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*A,t[8]=_*A,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*A,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*A,t[12]=R*A,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*A,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=c*l,v=c*h,_=c*u,R=n.x,T=n.y,A=n.z;return i[0]=(1-(x+p))*R,i[1]=(f+_)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(d+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+v)*A,i[9]=(m-y)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ci.set(i[0],i[1],i[2]).length(),o=Ci.set(i[4],i[5],i[6]).length(),a=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);let l=1/r,h=1/o,u=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Cn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===Cn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Cn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h,g,x;if(a===Cn)g=(o+r)*u,x=-2*u;else if(a===Zr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ci=new L,on=new jt,tf=new L(0,0,0),ef=new L(1,1,1),Wn=new L,_r=new L,Ye=new L,ah=new jt,ch=new tn,ze=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ze.DEFAULT_ORDER="XYZ";var eo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nf=0,lh=new L,Ii=new tn,wn=new jt,vr=new L,Rs=new L,sf=new L,rf=new tn,hh=new L(1,0,0),uh=new L(0,1,0),dh=new L(0,0,1),fh={type:"added"},of={type:"removed"},Pi={type:"childadded",child:null},pa={type:"childremoved",child:null},ge=class s extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new ze,n=new tn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new qt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(uh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(uh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Rs,vr,this.up):wn.lookAt(vr,Rs,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(wn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fh),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(of),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fh),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ge.DEFAULT_UP=new L(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new L,En=new L,ma=new L,Tn=new L,Li=new L,Di=new L,ph=new L,ga=new L,xa=new L,_a=new L,va=new ae,ya=new ae,Ma=new ae,$n=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),En.subVectors(n,e),ma.subVectors(t,e);let o=an.dot(an),a=an.dot(En),c=an.dot(ma),l=En.dot(En),h=En.dot(ma),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(o,Tn.y),c.addScaledVector(a,Tn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return va.setScalar(0),ya.setScalar(0),Ma.setScalar(0),va.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(ya,r.y),o.addScaledVector(Ma,r.z),o}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),En.subVectors(t,e),an.cross(En).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),En.subVectors(this.a,this.b),an.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Li.subVectors(i,n),Di.subVectors(r,n),ga.subVectors(t,n);let c=Li.dot(ga),l=Di.dot(ga);if(c<=0&&l<=0)return e.copy(n);xa.subVectors(t,i);let h=Li.dot(xa),u=Di.dot(xa);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Li,o);_a.subVectors(t,r);let f=Li.dot(_a),g=Di.dot(_a);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Di,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ph.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(ph,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Li,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},yr={h:0,s:0,l:0};function ba(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=qd(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ba(o,r,t+1/3),this.g=ba(o,r,t),this.b=ba(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Qt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Le(Ie.r*255,0,255))*65536+Math.round(Le(Ie.g*255,0,255))*256+Math.round(Le(Ie.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,i=Ie.g,r=Ie.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Pe){Qt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,i=Ie.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(yr);let n=ra(Xn.h,yr.h,e),i=ra(Xn.s,yr.s,e),r=ra(Xn.l,yr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Gt;Gt.NAMES=gu;var af=0,gn=class extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=In(),this.name="",this.blending=Xi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ba,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xe=class extends gn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ze,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new L,Mr=new lt,Ve=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sc&&(t.usage=this.usage),t}};var no=class extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var io=class extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},cf=0,je=new jt,Sa=new ge,Ui=new L,$e=new Un,Cs=new Un,Ee=new L,Ae=class s extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?io:no)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors($e.min,Cs.min),$e.expandByPoint(Ee),Ee.addVectors($e.max,Cs.max),$e.expandByPoint(Ee)):($e.expandByPoint(Cs.min),$e.expandByPoint(Cs.max))}$e.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ee.fromBufferAttribute(a,l),c&&(Ui.fromBufferAttribute(t,l),Ee.add(Ui)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new L,c[P]=new L;let l=new L,h=new L,u=new L,d=new lt,f=new lt,g=new lt,x=new L,m=new L;function p(P,S,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[P].add(x),a[S].add(x),a[M].add(x),c[P].add(m),c[S].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,S=y.length;P<S;++P){let M=y[P],I=M.start,F=M.count;for(let O=I,B=I+F;O<B;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let v=new L,_=new L,R=new L,T=new L;function A(P){R.fromBufferAttribute(i,P),T.copy(R);let S=a[P];v.copy(S),v.sub(R.multiplyScalar(R.dot(S))).normalize(),_.crossVectors(T,S);let I=_.dot(c[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,I)}for(let P=0,S=y.length;P<S;++P){let M=y[P],I=M.start,F=M.count;for(let O=I,B=I+F;O<B;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mh=new jt,ai=new to,br=new jn,gh=new L,Sr=new L,wr=new L,Er=new L,wa=new L,Tr=new L,xh=new L,Ar=new L,mt=class extends ge{constructor(t=new Ae,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(wa.fromBufferAttribute(u,t),o?Tr.addScaledVector(wa,h):Tr.addScaledVector(wa.sub(e),h))}e.add(Tr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(br.containsPoint(ai.origin)===!1&&(ai.intersectSphere(br,gh)===null||ai.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(r).invert(),ai.copy(t.ray).applyMatrix4(mh),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,R=v;_<R;_+=3){let T=a.getX(_),A=a.getX(_+1),P=a.getX(_+2);i=Rr(this,p,t,n,l,h,u,T,A,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);i=Rr(this,o,t,n,l,h,u,y,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,R=v;_<R;_+=3){let T=_,A=_+1,P=_+2;i=Rr(this,p,t,n,l,h,u,T,A,P),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,_=m+2;i=Rr(this,o,t,n,l,h,u,y,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function lf(s,t,e,n,i,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Jn,a),c===null)return null;Ar.copy(a),Ar.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Ar);return l<e.near||l>e.far?null:{distance:l,point:Ar.clone(),object:s}}function Rr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Sr),s.getVertexPosition(c,wr),s.getVertexPosition(l,Er);let h=lf(s,t,e,n,Sr,wr,Er,xh);if(h){let u=new L;$n.getBarycoord(xh,Sr,wr,Er,u),i&&(h.uv=$n.getInterpolatedAttribute(i,a,c,l,u,new lt)),r&&(h.uv1=$n.getInterpolatedAttribute(r,a,c,l,u,new lt)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};$n.getNormal(Sr,wr,Er,d.normal),h.face=d,h.barycoord=u}return h}var kt=class s extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(x,m,p,y,v,_,R,T,A,P,S){let M=_/A,I=R/P,F=_/2,O=R/2,B=T/2,V=A+1,H=P+1,tt=0,q=0,rt=new L;for(let gt=0;gt<H;gt++){let _t=gt*I-O;for(let Bt=0;Bt<V;Bt++){let St=Bt*M-F;rt[x]=St*y,rt[m]=_t*v,rt[p]=B,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[p]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Bt/A),u.push(1-gt/P),tt+=1}}for(let gt=0;gt<P;gt++)for(let _t=0;_t<A;_t++){let Bt=d+_t+V*gt,St=d+_t+V*(gt+1),W=d+(_t+1)+V*(gt+1),Q=d+(_t+1)+V*gt;c.push(Bt,St,Q),c.push(St,W,Q),q+=6}a.addGroup(f,q,S),f+=q,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ts(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(s){let t={};for(let e=0;e<s.length;e++){let n=ts(s[e]);for(let i in n)t[i]=n[i]}return t}function hf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var uf={clone:ts,merge:Oe},df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends gn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},so=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new L,_h=new lt,vh=new lt,Te=class extends so{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,_h,vh),e.subVectors(vh,_h)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ni=-90,Fi=1,Ac=class extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Te(Ni,Fi,t,e);i.layers=this.layers,this.add(i);let r=new Te(Ni,Fi,t,e);r.layers=this.layers,this.add(r);let o=new Te(Ni,Fi,t,e);o.layers=this.layers,this.add(o);let a=new Te(Ni,Fi,t,e);a.layers=this.layers,this.add(a);let c=new Te(Ni,Fi,t,e);c.layers=this.layers,this.add(c);let l=new Te(Ni,Fi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ro=class extends Ge{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rc=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ro(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new kt(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Zn});r.uniforms.tEquirect.value=e;let o=new mt(i,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=pn),new Ac(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ea=new L,pf=new L,mf=new qt,Rn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ea.subVectors(n,e).cross(pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mf.getNormalMatrix(t),i=this.coplanarPoint(Ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new jn,Cr=new L,Xs=class{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],y=i[13],v=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+y).normalize(),n[3].setComponents(c-o,d-h,m-g,_-y).normalize(),n[4].setComponents(c-a,d-u,m-x,_-v).normalize(),e===Cn)n[5].setComponents(c+a,d+u,m+x,_+v).normalize();else if(e===Zr)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Cr.x=i.normal.x>0?t.max.x:t.min.x,Cr.y=i.normal.y>0?t.max.y:t.min.y,Cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _u(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function gf(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Ke=class s extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let v=0;v<l;v++){let _=v*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let v=y+l*p,_=y+l*(p+1),R=y+1+l*(p+1),T=y+1+l*p;f.push(v,_,T),f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kf=`#define PI 3.141592653589793
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
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
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
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`struct PhysicalMaterial {
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
}`,gp=`
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
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
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
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
}`,Sm=`#if DEPTH_PACKING == 3200
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
}`,wm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#define LAMBERT
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
}`,Dm=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,Om=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Gm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:xf,alphahash_pars_fragment:_f,alphamap_fragment:vf,alphamap_pars_fragment:yf,alphatest_fragment:Mf,alphatest_pars_fragment:bf,aomap_fragment:Sf,aomap_pars_fragment:wf,batching_pars_vertex:Ef,batching_vertex:Tf,begin_vertex:Af,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:If,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Nf,color_fragment:Ff,color_pars_fragment:Of,color_pars_vertex:zf,color_vertex:Bf,common:kf,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,colorspace_fragment:Yf,colorspace_pars_fragment:$f,envmap_fragment:Zf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:Jf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:lp,envmap_vertex:jf,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:op,lights_lambert_pars_fragment:ap,lights_pars_begin:cp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:xp,lights_fragment_end:_p,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:bp,map_fragment:Sp,map_pars_fragment:wp,map_particle_fragment:Ep,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Rp,morphinstance_vertex:Cp,morphcolor_vertex:Ip,morphnormal_vertex:Pp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Dp,normal_fragment_begin:Up,normal_fragment_maps:Np,normal_pars_fragment:Fp,normal_pars_vertex:Op,normal_vertex:zp,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Gp,opaque_fragment:Wp,packing:Xp,premultiplied_alpha_fragment:qp,project_vertex:Yp,dithering_fragment:$p,dithering_pars_fragment:Zp,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:jp,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:am,tonemapping_fragment:cm,tonemapping_pars_fragment:lm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:fm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:xm,backgroundCube_vert:_m,backgroundCube_frag:vm,cube_vert:ym,cube_frag:Mm,depth_vert:bm,depth_frag:Sm,distanceRGBA_vert:wm,distanceRGBA_frag:Em,equirect_vert:Tm,equirect_frag:Am,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Im,meshbasic_frag:Pm,meshlambert_vert:Lm,meshlambert_frag:Dm,meshmatcap_vert:Um,meshmatcap_frag:Nm,meshnormal_vert:Fm,meshnormal_frag:Om,meshphong_vert:zm,meshphong_frag:Bm,meshphysical_vert:km,meshphysical_frag:Hm,meshtoon_vert:Vm,meshtoon_frag:Gm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:$m,sprite_frag:Zm},ft={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},dn={basic:{uniforms:Oe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Oe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Oe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Oe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Oe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Oe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Oe([ft.points,ft.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Oe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Oe([ft.common,ft.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Oe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Oe([ft.sprite,ft.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Oe([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Oe([ft.lights,ft.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};dn.physical={uniforms:Oe([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Ir={r:0,b:0,g:0},li=new ze,Km=new jt;function Jm(s,t,e,n,i,r,o){let a=new Gt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,_=g(y);_===null?p(a,c):_&&_.isColor&&(p(_,1),v=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===Co)?(h===void 0&&(h=new mt(new kt(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ts(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),li.copy(v.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(li)),h.material.toneMapped=Qt.getTransfer(_.colorSpace)!==re,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new mt(new Ke(2,2),new xn({name:"BackgroundMaterial",uniforms:ts(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==re,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Ir,xu(s)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m}}function Qm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(M,I,F,O,B){let V=!1,H=u(O,F,I);r!==H&&(r=H,l(r.object)),V=f(M,O,F,B),V&&g(M,O,F,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(M,I,F,O),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,F){let O=F.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let V=B[I.id];V===void 0&&(V={},B[I.id]=V);let H=V[O];return H===void 0&&(H=d(c()),V[O]=H),H}function d(M){let I=[],F=[],O=[];for(let B=0;B<e;B++)I[B]=0,F[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,I,F,O){let B=r.attributes,V=I.attributes,H=0,tt=F.getAttributes();for(let q in tt)if(tt[q].location>=0){let gt=B[q],_t=V[q];if(_t===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),gt===void 0||gt.attribute!==_t||_t&&gt.data!==_t.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(M,I,F,O){let B={},V=I.attributes,H=0,tt=F.getAttributes();for(let q in tt)if(tt[q].location>=0){let gt=V[q];gt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor));let _t={};_t.attribute=gt,gt&&gt.data&&(_t.data=gt.data),B[q]=_t,H++}r.attributes=B,r.attributesNum=H,r.index=O}function x(){let M=r.newAttributes;for(let I=0,F=M.length;I<F;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let F=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;F[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),B[M]!==I&&(s.vertexAttribDivisor(M,I),B[M]=I)}function y(){let M=r.newAttributes,I=r.enabledAttributes;for(let F=0,O=I.length;F<O;F++)I[F]!==M[F]&&(s.disableVertexAttribArray(F),I[F]=0)}function v(M,I,F,O,B,V,H){H===!0?s.vertexAttribIPointer(M,I,F,B,V):s.vertexAttribPointer(M,I,F,O,B,V)}function _(M,I,F,O){x();let B=O.attributes,V=F.getAttributes(),H=I.defaultAttributeValues;for(let tt in V){let q=V[tt];if(q.location>=0){let rt=B[tt];if(rt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let gt=rt.normalized,_t=rt.itemSize,Bt=t.get(rt);if(Bt===void 0)continue;let St=Bt.buffer,W=Bt.type,Q=Bt.bytesPerElement,ht=W===s.INT||W===s.UNSIGNED_INT||rt.gpuType===fl;if(rt.isInterleavedBufferAttribute){let et=rt.data,Tt=et.stride,Rt=rt.offset;if(et.isInstancedInterleavedBuffer){for(let Lt=0;Lt<q.locationSize;Lt++)p(q.location+Lt,et.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Lt=0;Lt<q.locationSize;Lt++)m(q.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let Lt=0;Lt<q.locationSize;Lt++)v(q.location+Lt,_t/q.locationSize,W,gt,Tt*Q,(Rt+_t/q.locationSize*Lt)*Q,ht)}else{if(rt.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)p(q.location+et,rt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let et=0;et<q.locationSize;et++)m(q.location+et);s.bindBuffer(s.ARRAY_BUFFER,St);for(let et=0;et<q.locationSize;et++)v(q.location+et,_t/q.locationSize,W,gt,_t*Q,_t/q.locationSize*et*Q,ht)}}else if(H!==void 0){let gt=H[tt];if(gt!==void 0)switch(gt.length){case 2:s.vertexAttrib2fv(q.location,gt);break;case 3:s.vertexAttrib3fv(q.location,gt);break;case 4:s.vertexAttrib4fv(q.location,gt);break;default:s.vertexAttrib1fv(q.location,gt)}}}}y()}function R(){P();for(let M in n){let I=n[M];for(let F in I){let O=I[F];for(let B in O)h(O[B].object),delete O[B];delete I[F]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let F in I){let O=I[F];for(let B in O)h(O[B].object),delete O[B];delete I[F]}delete n[M.id]}function A(M){for(let I in n){let F=n[I];if(F[M.id]===void 0)continue;let O=F[M.id];for(let B in O)h(O[B].object),delete O[B];delete F[M.id]}}function P(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function jm(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function t0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==cn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ln&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!P)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function e0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Rn,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,v=y*4,_=p.clippingState||null;c.value=_,_=h(g,d,v,f);for(let R=0;R!==v;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function n0(s){let t=new WeakMap;function e(o,a){return a===Ya?o.mapping=Ki:a===$a&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ya||a===$a)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Rc(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var oo=class extends so{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gi=4,yh=[.125,.215,.35,.446,.526,.582],fi=20,Ta=new oo,Mh=new Gt,Aa=null,Ra=0,Ca=0,Ia=!1,ui=(1+Math.sqrt(5))/2,Oi=1/ui,bh=[new L(-ui,Oi,0),new L(ui,Oi,0),new L(-Oi,0,ui),new L(Oi,0,ui),new L(0,ui,-Oi),new L(0,ui,Oi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],es=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Ia,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:er,format:cn,colorSpace:os,depthBuffer:!1},i=Sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i0(r)),this._blurMaterial=s0(r,t,e)}return i}_compileMaterial(t){let e=new mt(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,n,i){let a=new Te(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Mh),h.toneMapping=Kn,h.autoClear=!1;let f=new xe({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new mt(new kt,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(Mh),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Pr(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ki||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Pr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bh[(i-r-1)%bh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new mt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):fi;m>fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);let p=[],y=0;for(let A=0;A<fi;++A){let P=A/x,S=Math.exp(-P*P/2);p.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let _=this._sizeLods[i],R=3*_*(i>v-Gi?i-v+Gi:0),T=4*(this._cubeSize-_);Pr(e,R,T,3*_,2*_),c.setRenderTarget(e),c.render(u,Ta)}};function i0(s){let t=[],e=[],n=[],i=s,r=s-Gi+1+yh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Gi?c=yh[o-s+Gi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,P=T>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(S,x*g*T),v.set(d,m*g*T);let M=[T,T,T,T,T,T];_.set(M,p*g*T)}let R=new Ae;R.setAttribute("position",new Ve(y,x)),R.setAttribute("uv",new Ve(v,m)),R.setAttribute("faceIndex",new Ve(_,p)),t.push(R),i>Gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sh(s,t,e){let n=new Dn(s,t,e);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function s0(s,t,e){let n=new Float32Array(fi),i=new L(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function wh(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Eh(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ml(){return`

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
	`}function r0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ya||c===$a,h=c===Ki||c===Ji;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new es(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new es(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function o0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function a0(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let v=0,_=y.length;v<_;v+=3){let R=y[v+0],T=y[v+1],A=y[v+2];d.push(R,T,T,A,A,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let R=v+0,T=v+1,A=v+2;d.push(R,T,T,A,A,R)}}else return;let m=new(mu(d)?io:no)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function c0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function l0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function h0(s,t,e){let n=new WeakMap,i=new ae;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,R=1;_>t.maxTextureSize&&(R=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*R*4*u),A=new jr(T,_,R,u);A.type=mn,A.needsUpdate=!0;let P=v*4;for(let M=0;M<u;M++){let I=m[M],F=p[M],O=y[M],B=_*R*4*M;for(let V=0;V<I.count;V++){let H=V*P;f===!0&&(i.fromBufferAttribute(I,V),T[B+H+0]=i.x,T[B+H+1]=i.y,T[B+H+2]=i.z,T[B+H+3]=0),g===!0&&(i.fromBufferAttribute(F,V),T[B+H+4]=i.x,T[B+H+5]=i.y,T[B+H+6]=i.z,T[B+H+7]=0),x===!0&&(i.fromBufferAttribute(O,V),T[B+H+8]=i.x,T[B+H+9]=i.y,T[B+H+10]=i.z,T[B+H+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new lt(_,R)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function u0(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ao=class extends Ge{constructor(t,e,n,i,r,o,a,c,l,h=qi){if(h!==qi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qi&&(n=gi),n===void 0&&h===ji&&(n=Qi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vu=new Ge,Th=new ao(1,1),yu=new jr,Mu=new Tc,bu=new ro,Ah=[],Rh=[],Ch=new Float32Array(16),Ih=new Float32Array(9),Ph=new Float32Array(4);function as(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Ah[i];if(r===void 0&&(r=new Float32Array(i),Ah[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Po(s,t){let e=Rh[t];e===void 0&&(e=new Int32Array(t),Rh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function d0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function f0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function m0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function g0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;Ph.set(n),s.uniformMatrix2fv(this.addr,!1,Ph),Se(e,n)}}function x0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;Ih.set(n),s.uniformMatrix3fv(this.addr,!1,Ih),Se(e,n)}}function _0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(be(e,n))return;Ch.set(n),s.uniformMatrix4fv(this.addr,!1,Ch),Se(e,n)}}function v0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function b0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function S0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function w0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function E0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function T0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function A0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Th.compareFunction=pu,r=Th):r=vu,e.setTexture2D(t||r,i)}function R0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Mu,i)}function C0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bu,i)}function I0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yu,i)}function P0(s){switch(s){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return x0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return y0;case 35668:case 35672:return M0;case 35669:case 35673:return b0;case 5125:return S0;case 36294:return w0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return I0}}function L0(s,t){s.uniform1fv(this.addr,t)}function D0(s,t){let e=as(t,this.size,2);s.uniform2fv(this.addr,e)}function U0(s,t){let e=as(t,this.size,3);s.uniform3fv(this.addr,e)}function N0(s,t){let e=as(t,this.size,4);s.uniform4fv(this.addr,e)}function F0(s,t){let e=as(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function O0(s,t){let e=as(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function z0(s,t){let e=as(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function B0(s,t){s.uniform1iv(this.addr,t)}function k0(s,t){s.uniform2iv(this.addr,t)}function H0(s,t){s.uniform3iv(this.addr,t)}function V0(s,t){s.uniform4iv(this.addr,t)}function G0(s,t){s.uniform1uiv(this.addr,t)}function W0(s,t){s.uniform2uiv(this.addr,t)}function X0(s,t){s.uniform3uiv(this.addr,t)}function q0(s,t){s.uniform4uiv(this.addr,t)}function Y0(s,t,e){let n=this.cache,i=t.length,r=Po(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||vu,r[o])}function $0(s,t,e){let n=this.cache,i=t.length,r=Po(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Mu,r[o])}function Z0(s,t,e){let n=this.cache,i=t.length,r=Po(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||bu,r[o])}function K0(s,t,e){let n=this.cache,i=t.length,r=Po(e,i);be(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||yu,r[o])}function J0(s){switch(s){case 5126:return L0;case 35664:return D0;case 35665:return U0;case 35666:return N0;case 35674:return F0;case 35675:return O0;case 35676:return z0;case 5124:case 35670:return B0;case 35667:case 35671:return k0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return K0}}var Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}},Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J0(e.type)}},Pc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Pa=/(\w+)(\])?(\[|\.)?/g;function Lh(s,t){s.seq.push(t),s.map[t.id]=t}function Q0(s,t,e){let n=s.name,i=n.length;for(Pa.lastIndex=0;;){let r=Pa.exec(n),o=Pa.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Lh(e,l===void 0?new Cc(a,s,t):new Ic(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Pc(a),Lh(e,u)),e=u}}}var $i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Q0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Dh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var j0=37297,tg=0;function eg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Uh=new qt;function ng(s){Qt._getMatrix(Uh,Qt.workingColorSpace,s);let t=`mat3( ${Uh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case Io:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Nh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+eg(s.getShaderSource(t),o)}else return i}function ig(s,t){let e=ng(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sg(s,t){let e;switch(t){case Cd:e="Linear";break;case Id:e="Reinhard";break;case Pd:e="Cineon";break;case dl:e="ACESFilmic";break;case Dd:e="AgX";break;case Ud:e="Neutral";break;case Ld:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lr=new L;function rg(){Qt.getLuminanceCoefficients(Lr);let s=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function ag(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Os(s){return s!==""}function Fh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(s){return s.replace(lg,ug)}var hg=new Map;function ug(s,t){let e=Yt[t];if(e===void 0){let n=hg.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Lc(e)}var dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(s){return s.replace(dg,fg)}function fg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Bh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function pg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function mg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ki:case Ji:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ji&&(t="ENVMAP_MODE_REFRACTION"),t}function xg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Ad:t="ENVMAP_BLENDING_MIX";break;case Rd:t="ENVMAP_BLENDING_ADD";break}return t}function _g(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=pg(e),l=mg(e),h=gg(e),u=xg(e),d=_g(e),f=og(e),g=ag(r),x=i.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,ig("linearToOutputTexel",e.outputColorSpace),rg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=Lc(o),o=Fh(o,e),o=Oh(o,e),a=Lc(a),a=Fh(a,e),a=Oh(a,e),o=zh(o),a=zh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,_=y+p+a,R=Dh(i,i.VERTEX_SHADER,v),T=Dh(i,i.FRAGMENT_SHADER,_);i.attachShader(x,R),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(I){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(x).trim(),O=i.getShaderInfoLog(R).trim(),B=i.getShaderInfoLog(T).trim(),V=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,T);else{let tt=Nh(i,R,"vertex"),q=Nh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+tt+`
`+q)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||B==="")&&(H=!1);H&&(I.diagnostics={runnable:V,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(R),i.deleteShader(T),P=new $i(i,x),S=cg(i,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,j0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var yg=0,Dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uc(t),e.set(t,n)),n}},Uc=class{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}};function Mg(s,t,e,n,i,r,o){let a=new eo,c=new Dc,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,I,F,O){let B=F.fog,V=O.geometry,H=S.isMeshStandardMaterial?F.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),q=tt&&tt.mapping===Co?tt.image.height:null,rt=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=gt!==void 0?gt.length:0,Bt=0;V.morphAttributes.position!==void 0&&(Bt=1),V.morphAttributes.normal!==void 0&&(Bt=2),V.morphAttributes.color!==void 0&&(Bt=3);let St,W,Q,ht;if(rt){let Jt=dn[rt];St=Jt.vertexShader,W=Jt.fragmentShader}else St=S.vertexShader,W=S.fragmentShader,c.update(S),Q=c.getVertexShaderID(S),ht=c.getFragmentShaderID(S);let et=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Rt=O.isInstancedMesh===!0,Lt=O.isBatchedMesh===!0,Ht=!!S.map,J=!!S.matcap,it=!!tt,C=!!S.aoMap,wt=!!S.lightMap,nt=!!S.bumpMap,Mt=!!S.normalMap,ct=!!S.displacementMap,Ut=!!S.emissiveMap,vt=!!S.metalnessMap,E=!!S.roughnessMap,b=S.anisotropy>0,k=S.clearcoat>0,$=S.dispersion>0,j=S.iridescence>0,Z=S.sheen>0,At=S.transmission>0,dt=b&&!!S.anisotropyMap,bt=k&&!!S.clearcoatMap,$t=k&&!!S.clearcoatNormalMap,st=k&&!!S.clearcoatRoughnessMap,Et=j&&!!S.iridescenceMap,Ft=j&&!!S.iridescenceThicknessMap,zt=Z&&!!S.sheenColorMap,ot=Z&&!!S.sheenRoughnessMap,Ot=!!S.specularMap,Nt=!!S.specularColorMap,Kt=!!S.specularIntensityMap,D=At&&!!S.transmissionMap,ut=At&&!!S.thicknessMap,Y=!!S.gradientMap,K=!!S.alphaMap,pt=S.alphaTest>0,xt=!!S.alphaHash,Vt=!!S.extensions,ce=Kn;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ce=s.toneMapping);let ye={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:St,fragmentShader:W,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:ht,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&O._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&O.instanceColor!==null,instancingMorph:Rt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:os,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:J,envMap:it,envMapMode:it&&tt.mapping,envMapCubeUVHeight:q,aoMap:C,lightMap:wt,bumpMap:nt,normalMap:Mt,displacementMap:d&&ct,emissiveMap:Ut,normalMapObjectSpace:Mt&&S.normalMapType===zd,normalMapTangentSpace:Mt&&S.normalMapType===yl,metalnessMap:vt,roughnessMap:E,anisotropy:b,anisotropyMap:dt,clearcoat:k,clearcoatMap:bt,clearcoatNormalMap:$t,clearcoatRoughnessMap:st,dispersion:$,iridescence:j,iridescenceMap:Et,iridescenceThicknessMap:Ft,sheen:Z,sheenColorMap:zt,sheenRoughnessMap:ot,specularMap:Ot,specularColorMap:Nt,specularIntensityMap:Kt,transmission:At,transmissionMap:D,thicknessMap:ut,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Xi&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:pt,alphaHash:xt,combine:S.combine,mapUv:Ht&&x(S.map.channel),aoMapUv:C&&x(S.aoMap.channel),lightMapUv:wt&&x(S.lightMap.channel),bumpMapUv:nt&&x(S.bumpMap.channel),normalMapUv:Mt&&x(S.normalMap.channel),displacementMapUv:ct&&x(S.displacementMap.channel),emissiveMapUv:Ut&&x(S.emissiveMap.channel),metalnessMapUv:vt&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:dt&&x(S.anisotropyMap.channel),clearcoatMapUv:bt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ot&&x(S.sheenRoughnessMap.channel),specularMapUv:Ot&&x(S.specularMap.channel),specularColorMapUv:Nt&&x(S.specularColorMap.channel),specularIntensityMapUv:Kt&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:ut&&x(S.thicknessMap.channel),alphaMapUv:K&&x(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Mt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Ht||K),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Bt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:Ut&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===He,flipSided:S.side===De,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&S.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(y(M,S),v(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let M=g[S.type],I;if(M){let F=dn[M];I=uf.clone(F.uniforms)}else I=S.uniforms;return I}function R(S,M){let I;for(let F=0,O=h.length;F<O;F++){let B=h[F];if(B.cacheKey===M){I=B,++I.usedTimes;break}}return I===void 0&&(I=new vg(s,M,S,r),h.push(I)),I}function T(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function A(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function bg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Sg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function kh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Hh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Sg),n.length>1&&n.sort(d||kh),i.length>1&&i.sort(d||kh)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function wg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Hh,s.set(n,[o])):i>=r.length?(o=new Hh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Eg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Tg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ag=0;function Rg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Cg(s){let t=new Eg,e=Tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new jt,o=new jt;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,v=0,_=0,R=0,T=0,A=0;l.sort(Rg);for(let S=0,M=l.length;S<M;S++){let I=l[S],F=I.color,O=I.intensity,B=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=F.r*O,u+=F.g*O,d+=F.b*O;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],O);A++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,q=e.get(I);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=H,f++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=B,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[x]=H;let tt=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,tt.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[x]=tt.matrix,I.castShadow){let q=e.get(I);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=V,_++}x++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let tt=I.shadow,q=e.get(I);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,q.shadowCameraNear=tt.camera.near,q.shadowCameraFar=tt.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=H,g++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(O),H.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=A,n.version=Ag++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let v=l[p];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Vh(s){let t=new Cg(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ig(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Vh(s),t.set(i,[a])):r>=o.length?(a=new Vh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Nc=class extends gn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fc=class extends gn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lg=`uniform sampler2D shadow_pass;
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
}`;function Dg(s,t,e){let n=new Xs,i=new lt,r=new lt,o=new ae,a=new Nc({depthPacking:Od}),c=new Fc,l={},h=e.maxTextureSize,u={[Jn]:De,[De]:Jn,[He]:He},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Pg,fragmentShader:Lg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ae;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new mt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Zn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=p!==An&&this.type===An,B=p===An&&this.type!==An;for(let V=0,H=T.length;V<H;V++){let tt=T[V],q=tt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let rt=q.getFrameExtents();if(i.multiply(rt),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,q.mapSize.y=r.y)),q.map===null||O===!0||B===!0){let _t=this.type!==An?{minFilter:Ze,magFilter:Ze}:{};q.map!==null&&q.map.dispose(),q.map=new Dn(i.x,i.y,_t),q.map.texture.name=tt.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let gt=q.getViewportCount();for(let _t=0;_t<gt;_t++){let Bt=q.getViewport(_t);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),F.viewport(o),q.updateMatrices(tt,_t),n=q.getFrustum(),_(A,P,q.camera,tt,this.type)}q.isPointLightShadow!==!0&&this.type===An&&y(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,I)};function y(T,A){let P=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Dn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,P,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,P,f,x,null)}function v(T,A,P,S){let M=null,I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let F=M.uuid,O=A.uuid,B=l[F];B===void 0&&(B={},l[F]=B);let V=B[O];V===void 0&&(V=M.clone(),B[O]=V,A.addEventListener("dispose",R)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,S===An?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=s.properties.get(M);F.light=P}return M}function _(T,A,P,S,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===An)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let O=t.update(T),B=T.material;if(Array.isArray(B)){let V=O.groups;for(let H=0,tt=V.length;H<tt;H++){let q=V[H],rt=B[q.materialIndex];if(rt&&rt.visible){let gt=v(T,rt,S,M);T.onBeforeShadow(s,T,A,P,O,gt,q),s.renderBufferDirect(P,null,O,gt,T,q),T.onAfterShadow(s,T,A,P,O,gt,q)}}}else if(B.visible){let V=v(T,B,S,M);T.onBeforeShadow(s,T,A,P,O,V,null),s.renderBufferDirect(P,null,O,V,T,null),T.onAfterShadow(s,T,A,P,O,V,null)}}let F=T.children;for(let O=0,B=F.length;O<B;O++)_(F[O],A,P,S,M)}function R(T){T.target.removeEventListener("dispose",R);for(let P in l){let S=l[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Ug={[ka]:Ha,[Va]:Xa,[Ga]:qa,[Zi]:Wa,[Ha]:ka,[Xa]:Va,[qa]:Ga,[Wa]:Zi};function Ng(s,t){function e(){let D=!1,ut=new ae,Y=null,K=new ae(0,0,0,0);return{setMask:function(pt){Y!==pt&&!D&&(s.colorMask(pt,pt,pt,pt),Y=pt)},setLocked:function(pt){D=pt},setClear:function(pt,xt,Vt,ce,ye){ye===!0&&(pt*=ce,xt*=ce,Vt*=ce),ut.set(pt,xt,Vt,ce),K.equals(ut)===!1&&(s.clearColor(pt,xt,Vt,ce),K.copy(ut))},reset:function(){D=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let D=!1,ut=!1,Y=null,K=null,pt=null;return{setReversed:function(xt){if(ut!==xt){let Vt=t.get("EXT_clip_control");ut?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);let ce=pt;pt=null,this.setClear(ce)}ut=xt},getReversed:function(){return ut},setTest:function(xt){xt?et(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(xt){Y!==xt&&!D&&(s.depthMask(xt),Y=xt)},setFunc:function(xt){if(ut&&(xt=Ug[xt]),K!==xt){switch(xt){case ka:s.depthFunc(s.NEVER);break;case Ha:s.depthFunc(s.ALWAYS);break;case Va:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case Ga:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=xt}},setLocked:function(xt){D=xt},setClear:function(xt){pt!==xt&&(ut&&(xt=1-xt),s.clearDepth(xt),pt=xt)},reset:function(){D=!1,Y=null,K=null,pt=null,ut=!1}}}function i(){let D=!1,ut=null,Y=null,K=null,pt=null,xt=null,Vt=null,ce=null,ye=null;return{setTest:function(Jt){D||(Jt?et(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Jt){ut!==Jt&&!D&&(s.stencilMask(Jt),ut=Jt)},setFunc:function(Jt,Me,Re){(Y!==Jt||K!==Me||pt!==Re)&&(s.stencilFunc(Jt,Me,Re),Y=Jt,K=Me,pt=Re)},setOp:function(Jt,Me,Re){(xt!==Jt||Vt!==Me||ce!==Re)&&(s.stencilOp(Jt,Me,Re),xt=Jt,Vt=Me,ce=Re)},setLocked:function(Jt){D=Jt},setClear:function(Jt){ye!==Jt&&(s.clearStencil(Jt),ye=Jt)},reset:function(){D=!1,ut=null,Y=null,K=null,pt=null,xt=null,Vt=null,ce=null,ye=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,R=null,T=null,A=new Gt(0,0,0),P=0,S=!1,M=null,I=null,F=null,O=null,B=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,tt=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=tt>=1):q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=tt>=2);let rt=null,gt={},_t=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),St=new ae().fromArray(_t),W=new ae().fromArray(Bt);function Q(D,ut,Y,K){let pt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(D,xt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<Y;Vt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ut+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return xt}let ht={};ht[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ht[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ht[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(s.DEPTH_TEST),o.setFunc(Zi),nt(!1),Mt(ql),et(s.CULL_FACE),C(Zn);function et(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Rt(D,ut){return u[D]!==ut?(s.bindFramebuffer(D,ut),u[D]=ut,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ut),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function Lt(D,ut){let Y=f,K=!1;if(D){Y=d.get(ut),Y===void 0&&(Y=[],d.set(ut,Y));let pt=D.textures;if(Y.length!==pt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Vt=pt.length;xt<Vt;xt++)Y[xt]=s.COLOR_ATTACHMENT0+xt;Y.length=pt.length,K=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,K=!0);K&&s.drawBuffers(Y)}function Ht(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let J={[di]:s.FUNC_ADD,[hd]:s.FUNC_SUBTRACT,[ud]:s.FUNC_REVERSE_SUBTRACT};J[dd]=s.MIN,J[fd]=s.MAX;let it={[pd]:s.ZERO,[md]:s.ONE,[gd]:s.SRC_COLOR,[za]:s.SRC_ALPHA,[bd]:s.SRC_ALPHA_SATURATE,[yd]:s.DST_COLOR,[_d]:s.DST_ALPHA,[xd]:s.ONE_MINUS_SRC_COLOR,[Ba]:s.ONE_MINUS_SRC_ALPHA,[Md]:s.ONE_MINUS_DST_COLOR,[vd]:s.ONE_MINUS_DST_ALPHA,[Sd]:s.CONSTANT_COLOR,[wd]:s.ONE_MINUS_CONSTANT_COLOR,[Ed]:s.CONSTANT_ALPHA,[Td]:s.ONE_MINUS_CONSTANT_ALPHA};function C(D,ut,Y,K,pt,xt,Vt,ce,ye,Jt){if(D===Zn){x===!0&&(Tt(s.BLEND),x=!1);return}if(x===!1&&(et(s.BLEND),x=!0),D!==ld){if(D!==m||Jt!==S){if((p!==di||_!==di)&&(s.blendEquation(s.FUNC_ADD),p=di,_=di),Jt)switch(D){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFunc(s.ONE,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $l:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $l:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,v=null,R=null,T=null,A.set(0,0,0),P=0,m=D,S=Jt}return}pt=pt||ut,xt=xt||Y,Vt=Vt||K,(ut!==p||pt!==_)&&(s.blendEquationSeparate(J[ut],J[pt]),p=ut,_=pt),(Y!==y||K!==v||xt!==R||Vt!==T)&&(s.blendFuncSeparate(it[Y],it[K],it[xt],it[Vt]),y=Y,v=K,R=xt,T=Vt),(ce.equals(A)===!1||ye!==P)&&(s.blendColor(ce.r,ce.g,ce.b,ye),A.copy(ce),P=ye),m=D,S=!1}function wt(D,ut){D.side===He?Tt(s.CULL_FACE):et(s.CULL_FACE);let Y=D.side===De;ut&&(Y=!Y),nt(Y),D.blending===Xi&&D.transparent===!1?C(Zn):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Mt(D){D!==od?(et(s.CULL_FACE),D!==I&&(D===ql?s.cullFace(s.BACK):D===ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),I=D}function ct(D){D!==F&&(H&&s.lineWidth(D),F=D)}function Ut(D,ut,Y){D?(et(s.POLYGON_OFFSET_FILL),(O!==ut||B!==Y)&&(s.polygonOffset(ut,Y),O=ut,B=Y)):Tt(s.POLYGON_OFFSET_FILL)}function vt(D){D?et(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function E(D){D===void 0&&(D=s.TEXTURE0+V-1),rt!==D&&(s.activeTexture(D),rt=D)}function b(D,ut,Y){Y===void 0&&(rt===null?Y=s.TEXTURE0+V-1:Y=rt);let K=gt[Y];K===void 0&&(K={type:void 0,texture:void 0},gt[Y]=K),(K.type!==D||K.texture!==ut)&&(rt!==Y&&(s.activeTexture(Y),rt=Y),s.bindTexture(D,ut||ht[D]),K.type=D,K.texture=ut)}function k(){let D=gt[rt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(D){St.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),St.copy(D))}function ot(D){W.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function Ot(D,ut){let Y=l.get(ut);Y===void 0&&(Y=new WeakMap,l.set(ut,Y));let K=Y.get(D);K===void 0&&(K=s.getUniformBlockIndex(ut,D.name),Y.set(D,K))}function Nt(D,ut){let K=l.get(ut).get(D);c.get(ut)!==K&&(s.uniformBlockBinding(ut,K,D.__bindingPointIndex),c.set(ut,K))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,gt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,R=null,T=null,A=new Gt(0,0,0),P=0,S=!1,M=null,I=null,F=null,O=null,B=null,St.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:Tt,bindFramebuffer:Rt,drawBuffers:Lt,useProgram:Ht,setBlending:C,setMaterial:wt,setFlipSided:nt,setCullFace:Mt,setLineWidth:ct,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:E,bindTexture:b,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:Et,texImage3D:Ft,updateUBOMapping:Ot,uniformBlockBinding:Nt,texStorage2D:$t,texStorage3D:st,texSubImage2D:Z,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:bt,scissor:zt,viewport:ot,reset:Kt}}function Gh(s,t,e,n){let i=Fg(n);switch(e){case cu:return s*t;case hu:return s*t;case uu:return s*t*2;case gl:return s*t/i.components*i.byteLength;case xl:return s*t/i.components*i.byteLength;case du:return s*t*2/i.components*i.byteLength;case _l:return s*t*2/i.components*i.byteLength;case lu:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case vl:return s*t*4/i.components*i.byteLength;case Gr:case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ja:case ja:return Math.max(s,16)*Math.max(t,8)/4;case Ka:case Qa:return Math.max(s,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case oc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ac:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case dc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Yr:case xc:case _c:return Math.ceil(s/4)*Math.ceil(t/4)*16;case fu:case vc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case yc:case Mc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fg(s){switch(s){case Ln:case ru:return{byteLength:1,components:1};case Ws:case ou:case er:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case gi:case fl:case mn:return{byteLength:4,components:1};case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Og(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,b){return f?new OffscreenCanvas(E,b):Jr("canvas")}function x(E,b,k){let $=1,j=vt(E);if((j.width>k||j.height>k)&&($=k/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Z=Math.floor($*j.width),At=Math.floor($*j.height);u===void 0&&(u=g(Z,At));let dt=b?g(Z,At):u;return dt.width=Z,dt.height=At,dt.getContext("2d").drawImage(E,0,0,Z,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+At+")."),dt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(E,b,k,$,j=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=b;if(b===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),b===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),b===s.RGBA){let At=j?Io:Qt.getTransfer($);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=At===re?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(E,b){let k;return E?b===null||b===gi||b===Qi?k=s.DEPTH24_STENCIL8:b===mn?k=s.DEPTH32F_STENCIL8:b===Ws&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===gi||b===Qi?k=s.DEPTH_COMPONENT24:b===mn?k=s.DEPTH_COMPONENT32F:b===Ws&&(k=s.DEPTH_COMPONENT16),k}function R(E,b){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ze&&E.minFilter!==pn?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function T(E){let b=E.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&h.delete(b)}function A(E){let b=E.target;b.removeEventListener("dispose",A),M(b)}function P(E){let b=n.get(E);if(b.__webglInit===void 0)return;let k=E.source,$=d.get(k);if($){let j=$[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(E),Object.keys($).length===0&&d.delete(k)}n.remove(E)}function S(E){let b=n.get(E);s.deleteTexture(b.__webglTexture);let k=E.source,$=d.get(k);delete $[b.__cacheKey],o.memory.textures--}function M(E){let b=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let j=0;j<b.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(b.__webglFramebuffer[$][j]);else s.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)s.deleteFramebuffer(b.__webglFramebuffer[$]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=E.textures;for(let $=0,j=k.length;$<j;$++){let Z=n.get(k[$]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(E)}let I=0;function F(){I=0}function O(){let E=I;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),I+=1,E}function B(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function V(E,b){let k=n.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,E,b);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function H(E,b){let k=n.get(E);if(E.version>0&&k.__version!==E.version){W(k,E,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function tt(E,b){let k=n.get(E);if(E.version>0&&k.__version!==E.version){W(k,E,b);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function q(E,b){let k=n.get(E);if(E.version>0&&k.__version!==E.version){Q(k,E,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}let rt={[Gs]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[Za]:s.MIRRORED_REPEAT},gt={[Ze]:s.NEAREST,[Nd]:s.NEAREST_MIPMAP_NEAREST,[dr]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[na]:s.LINEAR_MIPMAP_NEAREST,[mi]:s.LINEAR_MIPMAP_LINEAR},_t={[Bd]:s.NEVER,[Xd]:s.ALWAYS,[kd]:s.LESS,[pu]:s.LEQUAL,[Hd]:s.EQUAL,[Wd]:s.GEQUAL,[Vd]:s.GREATER,[Gd]:s.NOTEQUAL};function Bt(E,b){if(b.type===mn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===pn||b.magFilter===na||b.magFilter===dr||b.magFilter===mi||b.minFilter===pn||b.minFilter===na||b.minFilter===dr||b.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,rt[b.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,rt[b.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,rt[b.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,gt[b.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,gt[b.minFilter]),b.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,_t[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ze||b.minFilter!==dr&&b.minFilter!==mi||b.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function St(E,b){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",T));let $=b.source,j=d.get($);j===void 0&&(j={},d.set($,j));let Z=B(b);if(Z!==E.__cacheKey){j[Z]===void 0&&(j[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[Z].usedTimes++;let At=j[E.__cacheKey];At!==void 0&&(j[E.__cacheKey].usedTimes--,At.usedTimes===0&&S(b)),E.__cacheKey=Z,E.__webglTexture=j[Z].texture}return k}function W(E,b,k){let $=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=s.TEXTURE_3D);let j=St(E,b),Z=b.source;e.bindTexture($,E.__webglTexture,s.TEXTURE0+k);let At=n.get(Z);if(Z.version!==At.__version||j===!0){e.activeTexture(s.TEXTURE0+k);let dt=Qt.getPrimaries(Qt.workingColorSpace),bt=b.colorSpace===Yn?null:Qt.getPrimaries(b.colorSpace),$t=b.colorSpace===Yn||dt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let st=x(b.image,!1,i.maxTextureSize);st=Ut(b,st);let Et=r.convert(b.format,b.colorSpace),Ft=r.convert(b.type),zt=v(b.internalFormat,Et,Ft,b.colorSpace,b.isVideoTexture);Bt($,b);let ot,Ot=b.mipmaps,Nt=b.isVideoTexture!==!0,Kt=At.__version===void 0||j===!0,D=Z.dataReady,ut=R(b,st);if(b.isDepthTexture)zt=_(b.format===ji,b.type),Kt&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,zt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,zt,st.width,st.height,0,Et,Ft,null));else if(b.isDataTexture)if(Ot.length>0){Nt&&Kt&&e.texStorage2D(s.TEXTURE_2D,ut,zt,Ot[0].width,Ot[0].height);for(let Y=0,K=Ot.length;Y<K;Y++)ot=Ot[Y],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ot.width,ot.height,Et,Ft,ot.data):e.texImage2D(s.TEXTURE_2D,Y,zt,ot.width,ot.height,0,Et,Ft,ot.data);b.generateMipmaps=!1}else Nt?(Kt&&e.texStorage2D(s.TEXTURE_2D,ut,zt,st.width,st.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,Et,Ft,st.data)):e.texImage2D(s.TEXTURE_2D,0,zt,st.width,st.height,0,Et,Ft,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Nt&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,zt,Ot[0].width,Ot[0].height,st.depth);for(let Y=0,K=Ot.length;Y<K;Y++)if(ot=Ot[Y],b.format!==cn)if(Et!==null)if(Nt){if(D)if(b.layerUpdates.size>0){let pt=Gh(ot.width,ot.height,b.format,b.type);for(let xt of b.layerUpdates){let Vt=ot.data.subarray(xt*pt/ot.data.BYTES_PER_ELEMENT,(xt+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,xt,ot.width,ot.height,1,Et,Vt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,st.depth,Et,ot.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,zt,ot.width,ot.height,st.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,st.depth,Et,Ft,ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,zt,ot.width,ot.height,st.depth,0,Et,Ft,ot.data)}else{Nt&&Kt&&e.texStorage2D(s.TEXTURE_2D,ut,zt,Ot[0].width,Ot[0].height);for(let Y=0,K=Ot.length;Y<K;Y++)ot=Ot[Y],b.format!==cn?Et!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ot.width,ot.height,Et,ot.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,zt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ot.width,ot.height,Et,Ft,ot.data):e.texImage2D(s.TEXTURE_2D,Y,zt,ot.width,ot.height,0,Et,Ft,ot.data)}else if(b.isDataArrayTexture)if(Nt){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,zt,st.width,st.height,st.depth),D)if(b.layerUpdates.size>0){let Y=Gh(st.width,st.height,b.format,b.type);for(let K of b.layerUpdates){let pt=st.data.subarray(K*Y/st.data.BYTES_PER_ELEMENT,(K+1)*Y/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,st.width,st.height,1,Et,Ft,pt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Et,Ft,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,st.width,st.height,st.depth,0,Et,Ft,st.data);else if(b.isData3DTexture)Nt?(Kt&&e.texStorage3D(s.TEXTURE_3D,ut,zt,st.width,st.height,st.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Et,Ft,st.data)):e.texImage3D(s.TEXTURE_3D,0,zt,st.width,st.height,st.depth,0,Et,Ft,st.data);else if(b.isFramebufferTexture){if(Kt)if(Nt)e.texStorage2D(s.TEXTURE_2D,ut,zt,st.width,st.height);else{let Y=st.width,K=st.height;for(let pt=0;pt<ut;pt++)e.texImage2D(s.TEXTURE_2D,pt,zt,Y,K,0,Et,Ft,null),Y>>=1,K>>=1}}else if(Ot.length>0){if(Nt&&Kt){let Y=vt(Ot[0]);e.texStorage2D(s.TEXTURE_2D,ut,zt,Y.width,Y.height)}for(let Y=0,K=Ot.length;Y<K;Y++)ot=Ot[Y],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,Et,Ft,ot):e.texImage2D(s.TEXTURE_2D,Y,zt,Et,Ft,ot);b.generateMipmaps=!1}else if(Nt){if(Kt){let Y=vt(st);e.texStorage2D(s.TEXTURE_2D,ut,zt,Y.width,Y.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Ft,st)}else e.texImage2D(s.TEXTURE_2D,0,zt,Et,Ft,st);m(b)&&p($),At.__version=Z.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Q(E,b,k){if(b.image.length!==6)return;let $=St(E,b),j=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+k);let Z=n.get(j);if(j.version!==Z.__version||$===!0){e.activeTexture(s.TEXTURE0+k);let At=Qt.getPrimaries(Qt.workingColorSpace),dt=b.colorSpace===Yn?null:Qt.getPrimaries(b.colorSpace),bt=b.colorSpace===Yn||At===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let $t=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let K=0;K<6;K++)!$t&&!st?Et[K]=x(b.image[K],!0,i.maxCubemapSize):Et[K]=st?b.image[K].image:b.image[K],Et[K]=Ut(b,Et[K]);let Ft=Et[0],zt=r.convert(b.format,b.colorSpace),ot=r.convert(b.type),Ot=v(b.internalFormat,zt,ot,b.colorSpace),Nt=b.isVideoTexture!==!0,Kt=Z.__version===void 0||$===!0,D=j.dataReady,ut=R(b,Ft);Bt(s.TEXTURE_CUBE_MAP,b);let Y;if($t){Nt&&Kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ot,Ft.width,Ft.height);for(let K=0;K<6;K++){Y=Et[K].mipmaps;for(let pt=0;pt<Y.length;pt++){let xt=Y[pt];b.format!==cn?zt!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,xt.width,xt.height,zt,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Ot,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,xt.width,xt.height,zt,ot,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Ot,xt.width,xt.height,0,zt,ot,xt.data)}}}else{if(Y=b.mipmaps,Nt&&Kt){Y.length>0&&ut++;let K=vt(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ot,K.width,K.height)}for(let K=0;K<6;K++)if(st){Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et[K].width,Et[K].height,zt,ot,Et[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,Et[K].width,Et[K].height,0,zt,ot,Et[K].data);for(let pt=0;pt<Y.length;pt++){let Vt=Y[pt].image[K].image;Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Vt.width,Vt.height,zt,ot,Vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Ot,Vt.width,Vt.height,0,zt,ot,Vt.data)}}else{Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,zt,ot,Et[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,zt,ot,Et[K]);for(let pt=0;pt<Y.length;pt++){let xt=Y[pt];Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,zt,ot,xt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Ot,zt,ot,xt.image[K])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),Z.__version=j.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ht(E,b,k,$,j,Z){let At=r.convert(k.format,k.colorSpace),dt=r.convert(k.type),bt=v(k.internalFormat,At,dt,k.colorSpace),$t=n.get(b),st=n.get(k);if(st.__renderTarget=b,!$t.__hasExternalTextures){let Et=Math.max(1,b.width>>Z),Ft=Math.max(1,b.height>>Z);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,bt,Et,Ft,b.depth,0,At,dt,null):e.texImage2D(j,Z,bt,Et,Ft,0,At,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Mt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,j,st.__webglTexture,0,nt(b)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,j,st.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(E,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,E),b.depthBuffer){let $=b.depthTexture,j=$&&$.isDepthTexture?$.type:null,Z=_(b.stencilBuffer,j),At=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=nt(b);Mt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Z,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Z,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Z,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,E)}else{let $=b.textures;for(let j=0;j<$.length;j++){let Z=$[j],At=r.convert(Z.format,Z.colorSpace),dt=r.convert(Z.type),bt=v(Z.internalFormat,At,dt,Z.colorSpace),$t=nt(b);k&&Mt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,bt,b.width,b.height):Mt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,bt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,bt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let j=$.__webglTexture,Z=nt(b);if(b.depthTexture.format===qi)Mt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(b.depthTexture.format===ji)Mt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Rt(E){let b=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){let j=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),b.__depthDisposeCallback=j}b.__boundDepthTexture=$}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Tt(b.__webglFramebuffer,E)}else if(k){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=s.createRenderbuffer(),et(b.__webglDepthbuffer[$],E,!1);else{let j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),et(b.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(E,b,k){let $=n.get(E);b!==void 0&&ht($.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Rt(E)}function Ht(E){let b=E.texture,k=n.get(E),$=n.get(b);E.addEventListener("dispose",A);let j=E.textures,Z=E.isWebGLCubeRenderTarget===!0,At=j.length>1;if(At||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=b.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let bt=0;bt<b.mipmaps.length;bt++)k.__webglFramebuffer[dt][bt]=s.createFramebuffer()}else k.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)k.__webglFramebuffer[dt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(At)for(let dt=0,bt=j.length;dt<bt;dt++){let $t=n.get(j[dt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&Mt(E)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<j.length;dt++){let bt=j[dt];k.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);let $t=r.convert(bt.format,bt.colorSpace),st=r.convert(bt.type),Et=v(bt.internalFormat,$t,st,bt.colorSpace,E.isXRRenderTarget===!0),Ft=nt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,Et,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),et(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)ht(k.__webglFramebuffer[dt][bt],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt);else ht(k.__webglFramebuffer[dt],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,bt=j.length;dt<bt;dt++){let $t=j[dt],st=n.get($t);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Bt(s.TEXTURE_2D,$t),ht(k.__webglFramebuffer,E,$t,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m($t)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),Bt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)ht(k.__webglFramebuffer[bt],E,b,s.COLOR_ATTACHMENT0,dt,bt);else ht(k.__webglFramebuffer,E,b,s.COLOR_ATTACHMENT0,dt,0);m(b)&&p(dt),e.unbindTexture()}E.depthBuffer&&Rt(E)}function J(E){let b=E.textures;for(let k=0,$=b.length;k<$;k++){let j=b[k];if(m(j)){let Z=y(E),At=n.get(j).__webglTexture;e.bindTexture(Z,At),p(Z),e.unbindTexture()}}}let it=[],C=[];function wt(E){if(E.samples>0){if(Mt(E)===!1){let b=E.textures,k=E.width,$=E.height,j=s.COLOR_BUFFER_BIT,Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(E),dt=b.length>1;if(dt)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let $t=n.get(b[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,j,s.NEAREST),c===!0&&(it.length=0,C.length=0,it.push(s.COLOR_ATTACHMENT0+bt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(it.push(Z),C.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let $t=n.get(b[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let b=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function nt(E){return Math.min(i.maxSamples,E.samples)}function Mt(E){let b=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ct(E){let b=o.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function Ut(E,b){let k=E.colorSpace,$=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==os&&k!==Yn&&(Qt.getTransfer(k)===re?($!==cn||j!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=tt,this.setTextureCube=q,this.rebindTextures=Lt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Mt}function zg(s,t){function e(n,i=Yn){let r,o=Qt.getTransfer(i);if(n===Ln)return s.UNSIGNED_BYTE;if(n===pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return s.UNSIGNED_SHORT_5_5_5_1;if(n===au)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return s.BYTE;if(n===ou)return s.SHORT;if(n===Ws)return s.UNSIGNED_SHORT;if(n===fl)return s.INT;if(n===gi)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===er)return s.HALF_FLOAT;if(n===cu)return s.ALPHA;if(n===lu)return s.RGB;if(n===cn)return s.RGBA;if(n===hu)return s.LUMINANCE;if(n===uu)return s.LUMINANCE_ALPHA;if(n===qi)return s.DEPTH_COMPONENT;if(n===ji)return s.DEPTH_STENCIL;if(n===gl)return s.RED;if(n===xl)return s.RED_INTEGER;if(n===du)return s.RG;if(n===_l)return s.RG_INTEGER;if(n===vl)return s.RGBA_INTEGER;if(n===Gr||n===Wr||n===Xr||n===qr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Ja||n===Qa||n===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===ec)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===xc||n===_c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===vc||n===yc||n===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Oc=class extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ve=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bg={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
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

}`,zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ge,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:kg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mt(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends Qn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=new zc,m=e.getContextAttributes(),p=null,y=null,v=[],_=[],R=new lt,T=null,A=new Te;A.viewport=new ae;let P=new Te;P.viewport=new ae;let S=[A,P],M=new Oc,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=v[W];return Q===void 0&&(Q=new zs,v[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=v[W];return Q===void 0&&(Q=new zs,v[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=v[W];return Q===void 0&&(Q=new zs,v[W]=Q),Q.getHandSpace()};function O(W){let Q=_.indexOf(W.inputSource);if(Q===-1)return;let ht=v[Q];ht!==void 0&&(ht.update(W.inputSource,W.frame,l||o),ht.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",V);for(let W=0;W<v.length;W++){let Q=_[W];Q!==null&&(_[W]=null,v[W].disconnect(Q))}I=null,F=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Dn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ht=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?ji:qi,ht=m.stencil?Qi:gi);let Tt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Dn(d.textureWidth,d.textureHeight,{format:cn,type:Ln,depthTexture:new ao(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),St.setContext(i),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(W){for(let Q=0;Q<W.removed.length;Q++){let ht=W.removed[Q],et=_.indexOf(ht);et>=0&&(_[et]=null,v[et].disconnect(ht))}for(let Q=0;Q<W.added.length;Q++){let ht=W.added[Q],et=_.indexOf(ht);if(et===-1){for(let Rt=0;Rt<v.length;Rt++)if(Rt>=_.length){_.push(ht),et=Rt;break}else if(_[Rt]===null){_[Rt]=ht,et=Rt;break}if(et===-1)break}let Tt=v[et];Tt&&Tt.connect(ht)}}let H=new L,tt=new L;function q(W,Q,ht){H.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(ht.matrixWorld);let et=H.distanceTo(tt),Tt=Q.projectionMatrix.elements,Rt=ht.projectionMatrix.elements,Lt=Tt[14]/(Tt[10]-1),Ht=Tt[14]/(Tt[10]+1),J=(Tt[9]+1)/Tt[5],it=(Tt[9]-1)/Tt[5],C=(Tt[8]-1)/Tt[0],wt=(Rt[8]+1)/Rt[0],nt=Lt*C,Mt=Lt*wt,ct=et/(-C+wt),Ut=ct*-C;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ut),W.translateZ(ct),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Tt[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let vt=Lt+ct,E=Ht+ct,b=nt-Ut,k=Mt+(et-Ut),$=J*Ht/E*vt,j=it*Ht/E*vt;W.projectionMatrix.makePerspective(b,k,$,j,vt,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function rt(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let Q=W.near,ht=W.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ht=x.depthFar)),M.near=P.near=A.near=Q,M.far=P.far=A.far=ht,(I!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,F=M.far),A.layers.mask=W.layers.mask|2,P.layers.mask=W.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;let et=W.parent,Tt=M.cameras;rt(M,et);for(let Rt=0;Rt<Tt.length;Rt++)rt(Tt[Rt],et);Tt.length===2?q(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),gt(W,M,et)};function gt(W,Q,ht){ht===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(ht.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Kr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let _t=null;function Bt(W,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let et=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,et=!0);for(let Rt=0;Rt<ht.length;Rt++){let Lt=ht[Rt],Ht=null;if(f!==null)Ht=f.getViewport(Lt);else{let it=u.getViewSubImage(d,Lt);Ht=it.viewport,Rt===0&&(t.setRenderTargetTextures(y,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(y))}let J=S[Rt];J===void 0&&(J=new Te,J.layers.enable(Rt),J.viewport=new ae,S[Rt]=J),J.matrix.fromArray(Lt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Lt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Rt===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),et===!0&&M.cameras.push(J)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Rt=u.getDepthInformation(ht[0]);Rt&&Rt.isValid&&Rt.texture&&x.init(t,Rt,i.renderState)}}for(let ht=0;ht<v.length;ht++){let et=_[ht],Tt=v[ht];et!==null&&Tt!==void 0&&Tt.update(et,Q,l||o)}_t&&_t(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let St=new _u;St.setAnimationLoop(Bt),this.setAnimationLoop=function(W){_t=W},this.dispose=function(){}}},hi=new ze,Vg=new jt;function Gg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,hi.copy(_),hi.x*=-1,hi.y*=-1,hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(hi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wg(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));let R=v.program;n.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let v=u();y.__bindingPointIndex=v;let _=s.createBuffer(),R=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=i[y.id],_=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,A=_.length;T<A;T++){let P=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,M=P.length;S<M;S++){let I=P[S];if(f(I,T,S,R)===!0){let F=I.__offset,O=Array.isArray(I.value)?I.value:[I.value],B=0;for(let V=0;V<O.length;V++){let H=O[V],tt=x(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,F+B,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,B),B+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,_,R){let T=y.value,A=v+"_"+_;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let P=R[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){let v=y.uniforms,_=0,R=16;for(let A=0,P=v.length;A<P;A++){let S=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,I=S.length;M<I;M++){let F=S[M],O=Array.isArray(F.value)?F.value:[F.value];for(let B=0,V=O.length;B<V;B++){let H=O[B],tt=x(H),q=_%R,rt=q%tt.boundary,gt=q+rt;_+=rt,gt!==0&&R-gt<tt.storage&&(_+=R-gt),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=tt.storage}}}let T=_%R;return T>0&&(_+=R-T),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var co=class{constructor(t={}){let{canvas:e=Yd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Kn,this.toneMappingExposure=1;let _=this,R=!1,T=0,A=0,P=null,S=-1,M=null,I=new ae,F=new ae,O=null,B=new Gt(0),V=0,H=e.width,tt=e.height,q=1,rt=null,gt=null,_t=new ae(0,0,H,tt),Bt=new ae(0,0,H,tt),St=!1,W=new Xs,Q=!1,ht=!1,et=new jt,Tt=new jt,Rt=new L,Lt=new ae,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function it(){return P===null?q:1}let C=n;function wt(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),C===null){let U="webgl2";if(C=wt(U,w),C===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let nt,Mt,ct,Ut,vt,E,b,k,$,j,Z,At,dt,bt,$t,st,Et,Ft,zt,ot,Ot,Nt,Kt,D;function ut(){nt=new o0(C),nt.init(),Nt=new zg(C,nt),Mt=new t0(C,nt,t,Nt),ct=new Ng(C,nt),Mt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Ut=new l0(C),vt=new bg,E=new Og(C,nt,ct,vt,Mt,Nt,Ut),b=new n0(_),k=new r0(_),$=new gf(C),Kt=new Qm(C,$),j=new a0(C,$,Ut,Kt),Z=new u0(C,j,$,Ut),zt=new h0(C,Mt,E),st=new e0(vt),At=new Mg(_,b,k,nt,Mt,Kt,st),dt=new Gg(_,vt),bt=new wg,$t=new Ig(nt),Ft=new Jm(_,b,k,ct,Z,f,c),Et=new Dg(_,Z,Mt),D=new Wg(C,Ut,Mt,ct),ot=new jm(C,nt,Ut),Ot=new c0(C,nt,Ut),Ut.programs=At.programs,_.capabilities=Mt,_.extensions=nt,_.properties=vt,_.renderLists=bt,_.shadowMap=Et,_.state=ct,_.info=Ut}ut();let Y=new Bc(_,C);this.xr=Y,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(H,tt,!1))},this.getSize=function(w){return w.set(H,tt)},this.setSize=function(w,U,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,tt=U,e.width=Math.floor(w*q),e.height=Math.floor(U*q),G===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(H*q,tt*q).floor()},this.setDrawingBufferSize=function(w,U,G){H=w,tt=U,q=G,e.width=Math.floor(w*G),e.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(_t)},this.setViewport=function(w,U,G,X){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,U,G,X),ct.viewport(I.copy(_t).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,U,G,X){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,U,G,X),ct.scissor(F.copy(Bt).multiplyScalar(q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(w){ct.setScissorTest(St=w)},this.setOpaqueSort=function(w){rt=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(w=!0,U=!0,G=!0){let X=0;if(w){let N=!1;if(P!==null){let at=P.texture.format;N=at===vl||at===_l||at===xl}if(N){let at=P.texture.type,yt=at===Ln||at===gi||at===Ws||at===Qi||at===pl||at===ml,Ct=Ft.getClearColor(),It=Ft.getClearAlpha(),Wt=Ct.r,Xt=Ct.g,Pt=Ct.b;yt?(g[0]=Wt,g[1]=Xt,g[2]=Pt,g[3]=It,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Wt,x[1]=Xt,x[2]=Pt,x[3]=It,C.clearBufferiv(C.COLOR,0,x))}else X|=C.COLOR_BUFFER_BIT}U&&(X|=C.DEPTH_BUFFER_BIT),G&&(X|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),bt.dispose(),$t.dispose(),vt.dispose(),b.dispose(),k.dispose(),Z.dispose(),Kt.dispose(),D.dispose(),At.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ni),Y.removeEventListener("sessionend",ii),Je.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=Ut.autoReset,U=Et.enabled,G=Et.autoUpdate,X=Et.needsUpdate,N=Et.type;ut(),Ut.autoReset=w,Et.enabled=U,Et.autoUpdate=G,Et.needsUpdate=X,Et.type=N}function xt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vt(w){let U=w.target;U.removeEventListener("dispose",Vt),ce(U)}function ce(w){ye(w),vt.remove(w)}function ye(w){let U=vt.get(w).programs;U!==void 0&&(U.forEach(function(G){At.releaseProgram(G)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,X,N,at){U===null&&(U=Ht);let yt=N.isMesh&&N.matrixWorld.determinant()<0,Ct=id(w,U,G,X,N);ct.setMaterial(X,yt);let It=G.index,Wt=1;if(X.wireframe===!0){if(It=j.getWireframeAttribute(G),It===void 0)return;Wt=2}let Xt=G.drawRange,Pt=G.attributes.position,te=Xt.start*Wt,le=(Xt.start+Xt.count)*Wt;at!==null&&(te=Math.max(te,at.start*Wt),le=Math.min(le,(at.start+at.count)*Wt)),It!==null?(te=Math.max(te,0),le=Math.min(le,It.count)):Pt!=null&&(te=Math.max(te,0),le=Math.min(le,Pt.count));let ue=le-te;if(ue<0||ue===1/0)return;Kt.setup(N,X,Ct,G,It);let ke,ee=ot;if(It!==null&&(ke=$.get(It),ee=Ot,ee.setIndex(ke)),N.isMesh)X.wireframe===!0?(ct.setLineWidth(X.wireframeLinewidth*it()),ee.setMode(C.LINES)):ee.setMode(C.TRIANGLES);else if(N.isLine){let Dt=X.linewidth;Dt===void 0&&(Dt=1),ct.setLineWidth(Dt*it()),N.isLineSegments?ee.setMode(C.LINES):N.isLineLoop?ee.setMode(C.LINE_LOOP):ee.setMode(C.LINE_STRIP)}else N.isPoints?ee.setMode(C.POINTS):N.isSprite&&ee.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Dt=N._multiDrawStarts,Mn=N._multiDrawCounts,ne=N._multiDrawCount,sn=It?$.get(It).bytesPerElement:1,Si=vt.get(X).currentProgram.getUniforms();for(let qe=0;qe<ne;qe++)Si.setValue(C,"_gl_DrawID",qe),ee.render(Dt[qe]/sn,Mn[qe])}else if(N.isInstancedMesh)ee.renderInstances(te,ue,N.count);else if(G.isInstancedBufferGeometry){let Dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mn=Math.min(G.instanceCount,Dt);ee.renderInstances(te,ue,Mn)}else ee.render(te,ue)};function Jt(w,U,G){w.transparent===!0&&w.side===He&&w.forceSinglePass===!1?(w.side=De,w.needsUpdate=!0,ur(w,U,G),w.side=Jn,w.needsUpdate=!0,ur(w,U,G),w.side=He):ur(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),p=$t.get(G),p.init(U),v.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==G&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let X=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let yt=0;yt<at.length;yt++){let Ct=at[yt];Jt(Ct,G,N),X.add(Ct)}else Jt(at,G,N),X.add(at)}),v.pop(),p=null,X},this.compileAsync=function(w,U,G=null){let X=this.compile(w,U,G);return new Promise(N=>{function at(){if(X.forEach(function(yt){vt.get(yt).currentProgram.isReady()&&X.delete(yt)}),X.size===0){N(w);return}setTimeout(at,10)}nt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Me=null;function Re(w){Me&&Me(w)}function ni(){Je.stop()}function ii(){Je.start()}let Je=new _u;Je.setAnimationLoop(Re),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(w){Me=w,Y.setAnimationLoop(w),w===null?Je.stop():Je.start()},Y.addEventListener("sessionstart",ni),Y.addEventListener("sessionend",ii),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,P),p=$t.get(w,v.length),p.init(U),v.push(p),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(Tt),ht=this.localClippingEnabled,Q=st.init(this.clippingPlanes,ht),m=bt.get(w,y.length),m.init(),y.push(m),Y.enabled===!0&&Y.isPresenting===!0){let at=_.xr.getDepthSensingMesh();at!==null&&zn(at,U,-1/0,_.sortObjects)}zn(w,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(rt,gt),J=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,J&&Ft.addToRenderList(m,w),this.info.render.frame++,Q===!0&&st.beginShadows();let G=p.state.shadowsArray;Et.render(G,w,U),Q===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){let at=U.cameras;if(N.length>0)for(let yt=0,Ct=at.length;yt<Ct;yt++){let It=at[yt];Ss(X,N,w,It)}J&&Ft.render(w);for(let yt=0,Ct=at.length;yt<Ct;yt++){let It=at[yt];bs(m,w,It,It.viewport)}}else N.length>0&&Ss(X,N,w,U),J&&Ft.render(w),bs(m,w,U);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,U),Kt.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],Q===!0&&st.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function zn(w,U,G,X){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){X&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);let yt=Z.update(w),Ct=w.material;Ct.visible&&m.push(w,yt,Ct,G,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let yt=Z.update(w),Ct=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Lt.copy(yt.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(Ct)){let It=yt.groups;for(let Wt=0,Xt=It.length;Wt<Xt;Wt++){let Pt=It[Wt],te=Ct[Pt.materialIndex];te&&te.visible&&m.push(w,yt,te,G,Lt.z,Pt)}}else Ct.visible&&m.push(w,yt,Ct,G,Lt.z,null)}}let at=w.children;for(let yt=0,Ct=at.length;yt<Ct;yt++)zn(at[yt],U,G,X)}function bs(w,U,G,X){let N=w.opaque,at=w.transmissive,yt=w.transparent;p.setupLightsView(G),Q===!0&&st.setGlobalState(_.clippingPlanes,G),X&&ct.viewport(I.copy(X)),N.length>0&&si(N,U,G),at.length>0&&si(at,U,G),yt.length>0&&si(yt,U,G),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Ss(w,U,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Dn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?er:Ln,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let at=p.state.transmissionRenderTarget[X.id],yt=X.viewport||I;at.setSize(yt.z,yt.w);let Ct=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(B),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),J&&Ft.render(G);let It=_.toneMapping;_.toneMapping=Kn;let Wt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Q===!0&&st.setGlobalState(_.clippingPlanes,X),si(w,G,X),E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Pt=0,te=U.length;Pt<te;Pt++){let le=U[Pt],ue=le.object,ke=le.geometry,ee=le.material,Dt=le.group;if(ee.side===He&&ue.layers.test(X.layers)){let Mn=ee.side;ee.side=De,ee.needsUpdate=!0,hr(ue,G,X,ke,ee,Dt),ee.side=Mn,ee.needsUpdate=!0,Xt=!0}}Xt===!0&&(E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at))}_.setRenderTarget(Ct),_.setClearColor(B,V),Wt!==void 0&&(X.viewport=Wt),_.toneMapping=It}function si(w,U,G){let X=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=w.length;N<at;N++){let yt=w[N],Ct=yt.object,It=yt.geometry,Wt=X===null?yt.material:X,Xt=yt.group;Ct.layers.test(G.layers)&&hr(Ct,U,G,It,Wt,Xt)}}function hr(w,U,G,X,N,at){w.onBeforeRender(_,U,G,X,N,at),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(_,U,G,X,w,at),N.transparent===!0&&N.side===He&&N.forceSinglePass===!1?(N.side=De,N.needsUpdate=!0,_.renderBufferDirect(G,U,X,N,w,at),N.side=Jn,N.needsUpdate=!0,_.renderBufferDirect(G,U,X,N,w,at),N.side=He):_.renderBufferDirect(G,U,X,N,w,at),w.onAfterRender(_,U,G,X,N,at)}function ur(w,U,G){U.isScene!==!0&&(U=Ht);let X=vt.get(w),N=p.state.lights,at=p.state.shadowsArray,yt=N.state.version,Ct=At.getParameters(w,N.state,at,U,G),It=At.getProgramCacheKey(Ct),Wt=X.programs;X.environment=w.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(w.isMeshStandardMaterial?k:b).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",Vt),Wt=new Map,X.programs=Wt);let Xt=Wt.get(It);if(Xt!==void 0){if(X.currentProgram===Xt&&X.lightsStateVersion===yt)return Wl(w,Ct),Xt}else Ct.uniforms=At.getUniforms(w),w.onBeforeCompile(Ct,_),Xt=At.acquireProgram(Ct,It),Wt.set(It,Xt),X.uniforms=Ct.uniforms;let Pt=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=st.uniform),Wl(w,Ct),X.needsLights=rd(w),X.lightsStateVersion=yt,X.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=Xt,X.uniformsList=null,Xt}function Gl(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=$i.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Wl(w,U){let G=vt.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function id(w,U,G,X,N){U.isScene!==!0&&(U=Ht),E.resetTextureUnits();let at=U.fog,yt=X.isMeshStandardMaterial?U.environment:null,Ct=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:os,It=(X.isMeshStandardMaterial?k:b).get(X.envMap||yt),Wt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xt=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,le=!!G.morphAttributes.color,ue=Kn;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ue=_.toneMapping);let ke=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=ke!==void 0?ke.length:0,Dt=vt.get(X),Mn=p.state.lights;if(Q===!0&&(ht===!0||w!==M)){let Qe=w===M&&X.id===S;st.setState(X,w,Qe)}let ne=!1;X.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Mn.state.version||Dt.outputColorSpace!==Ct||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==It||X.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==st.numPlanes||Dt.numIntersection!==st.numIntersection)||Dt.vertexAlphas!==Wt||Dt.vertexTangents!==Xt||Dt.morphTargets!==Pt||Dt.morphNormals!==te||Dt.morphColors!==le||Dt.toneMapping!==ue||Dt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Dt.__version=X.version);let sn=Dt.currentProgram;ne===!0&&(sn=ur(X,U,N));let Si=!1,qe=!1,ws=!1,de=sn.getUniforms(),un=Dt.uniforms;if(ct.useProgram(sn.program)&&(Si=!0,qe=!0,ws=!0),X.id!==S&&(S=X.id,qe=!0),Si||M!==w){ct.buffers.depth.getReversed()?(et.copy(w.projectionMatrix),Zd(et),Kd(et),de.setValue(C,"projectionMatrix",et)):de.setValue(C,"projectionMatrix",w.projectionMatrix),de.setValue(C,"viewMatrix",w.matrixWorldInverse);let Bn=de.map.cameraPosition;Bn!==void 0&&Bn.setValue(C,Rt.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&de.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&de.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,qe=!0,ws=!0)}if(N.isSkinnedMesh){de.setOptional(C,N,"bindMatrix"),de.setOptional(C,N,"bindMatrixInverse");let Qe=N.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),de.setValue(C,"boneTexture",Qe.boneTexture,E))}N.isBatchedMesh&&(de.setOptional(C,N,"batchingTexture"),de.setValue(C,"batchingTexture",N._matricesTexture,E),de.setOptional(C,N,"batchingIdTexture"),de.setValue(C,"batchingIdTexture",N._indirectTexture,E),de.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&de.setValue(C,"batchingColorTexture",N._colorsTexture,E));let Es=G.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0)&&zt.update(N,G,sn),(qe||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,de.setValue(C,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(un.envMap.value=It,un.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),qe&&(de.setValue(C,"toneMappingExposure",_.toneMappingExposure),Dt.needsLights&&sd(un,ws),at&&X.fog===!0&&dt.refreshFogUniforms(un,at),dt.refreshMaterialUniforms(un,X,q,tt,p.state.transmissionRenderTarget[w.id]),$i.upload(C,Gl(Dt),un,E)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&($i.upload(C,Gl(Dt),un,E),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&de.setValue(C,"center",N.center),de.setValue(C,"modelViewMatrix",N.modelViewMatrix),de.setValue(C,"normalMatrix",N.normalMatrix),de.setValue(C,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Qe=X.uniformsGroups;for(let Bn=0,kn=Qe.length;Bn<kn;Bn++){let Xl=Qe[Bn];D.update(Xl,sn),D.bind(Xl,sn)}}return sn}function sd(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function rd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,U,G){vt.get(w.texture).__webglTexture=U,vt.get(w.depthTexture).__webglTexture=G;let X=vt.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let G=vt.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,G=0){P=w,T=U,A=G;let X=!0,N=null,at=!1,yt=!1;if(w){let It=vt.get(w);if(It.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(C.FRAMEBUFFER,null),X=!1;else if(It.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(It.__hasExternalTextures)E.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Pt=w.depthTexture;if(It.__boundDepthTexture!==Pt){if(Pt!==null&&vt.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(yt=!0);let Xt=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?N=Xt[U][G]:N=Xt[U],at=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?N=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?N=Xt[G]:N=Xt,I.copy(w.viewport),F.copy(w.scissor),O=w.scissorTest}else I.copy(_t).multiplyScalar(q).floor(),F.copy(Bt).multiplyScalar(q).floor(),O=St;if(ct.bindFramebuffer(C.FRAMEBUFFER,N)&&X&&ct.drawBuffers(w,N),ct.viewport(I),ct.scissor(F),ct.setScissorTest(O),at){let It=vt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,It.__webglTexture,G)}else if(yt){let It=vt.get(w.texture),Wt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,It.__webglTexture,G||0,Wt)}S=-1},this.readRenderTargetPixels=function(w,U,G,X,N,at,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){ct.bindFramebuffer(C.FRAMEBUFFER,Ct);try{let It=w.texture,Wt=It.format,Xt=It.type;if(!Mt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-X&&G>=0&&G<=w.height-N&&C.readPixels(U,G,X,N,Nt.convert(Wt),Nt.convert(Xt),at)}finally{let It=P!==null?vt.get(P).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,U,G,X,N,at,yt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){let It=w.texture,Wt=It.format,Xt=It.type;if(!Mt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-X&&G>=0&&G<=w.height-N){ct.bindFramebuffer(C.FRAMEBUFFER,Ct);let Pt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Pt),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),C.readPixels(U,G,X,N,Nt.convert(Wt),Nt.convert(Xt),0);let te=P!==null?vt.get(P).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,te);let le=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await $d(C,le,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Pt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(Pt),C.deleteSync(le),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,G=0){w.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let X=Math.pow(2,-G),N=Math.floor(w.image.width*X),at=Math.floor(w.image.height*X),yt=U!==null?U.x:0,Ct=U!==null?U.y:0;E.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,yt,Ct,N,at),ct.unbindTexture()},this.copyTextureToTexture=function(w,U,G=null,X=null,N=0){w.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let at,yt,Ct,It,Wt,Xt,Pt,te,le,ue=w.isCompressedTexture?w.mipmaps[N]:w.image;G!==null?(at=G.max.x-G.min.x,yt=G.max.y-G.min.y,Ct=G.isBox3?G.max.z-G.min.z:1,It=G.min.x,Wt=G.min.y,Xt=G.isBox3?G.min.z:0):(at=ue.width,yt=ue.height,Ct=ue.depth||1,It=0,Wt=0,Xt=0),X!==null?(Pt=X.x,te=X.y,le=X.z):(Pt=0,te=0,le=0);let ke=Nt.convert(U.format),ee=Nt.convert(U.type),Dt;U.isData3DTexture?(E.setTexture3D(U,0),Dt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Dt=C.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Dt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let Mn=C.getParameter(C.UNPACK_ROW_LENGTH),ne=C.getParameter(C.UNPACK_IMAGE_HEIGHT),sn=C.getParameter(C.UNPACK_SKIP_PIXELS),Si=C.getParameter(C.UNPACK_SKIP_ROWS),qe=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ue.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,It),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xt);let ws=w.isDataArrayTexture||w.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let un=vt.get(w),Es=vt.get(U),Qe=vt.get(un.__renderTarget),Bn=vt.get(Es.__renderTarget);ct.bindFramebuffer(C.READ_FRAMEBUFFER,Qe.__webglFramebuffer),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let kn=0;kn<Ct;kn++)ws&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,N,Xt+kn),w.isDepthTexture?(de&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,N,le+kn),C.blitFramebuffer(It,Wt,at,yt,Pt,te,at,yt,C.DEPTH_BUFFER_BIT,C.NEAREST)):de?C.copyTexSubImage3D(Dt,N,Pt,te,le+kn,It,Wt,at,yt):C.copyTexSubImage2D(Dt,N,Pt,te,le+kn,It,Wt,at,yt);ct.bindFramebuffer(C.READ_FRAMEBUFFER,null),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else de?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Dt,N,Pt,te,le,at,yt,Ct,ke,ee,ue.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Dt,N,Pt,te,le,at,yt,Ct,ke,ue.data):C.texSubImage3D(Dt,N,Pt,te,le,at,yt,Ct,ke,ee,ue):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Pt,te,at,yt,ke,ee,ue.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Pt,te,ue.width,ue.height,ke,ue.data):C.texSubImage2D(C.TEXTURE_2D,N,Pt,te,at,yt,ke,ee,ue);C.pixelStorei(C.UNPACK_ROW_LENGTH,Mn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ne),C.pixelStorei(C.UNPACK_SKIP_PIXELS,sn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Si),C.pixelStorei(C.UNPACK_SKIP_IMAGES,qe),N===0&&U.generateMipmaps&&C.generateMipmap(Dt),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,U,G=null,X=null,N=0){return w.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,G,X,N)},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,ct.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var lo=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ns=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ze,this.environmentIntensity=1,this.environmentRotation=new ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},kc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fe=new L,ho=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qs=class extends gn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zi,Is=new L,Bi=new L,ki=new L,Hi=new lt,Ps=new lt,Su=new jt,Dr=new L,Ls=new L,Ur=new L,Wh=new lt,La=new lt,Xh=new lt,uo=class extends ge{constructor(t=new qs){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kc(e,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new ho(n,3,0,!1)),zi.setAttribute("uv",new ho(n,2,3,!1))}this.geometry=zi,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bi.setFromMatrixScale(this.matrixWorld),Su.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-ki.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Nr(Dr.set(-.5,-.5,0),ki,o,Bi,i,r),Nr(Ls.set(.5,-.5,0),ki,o,Bi,i,r),Nr(Ur.set(.5,.5,0),ki,o,Bi,i,r),Wh.set(0,0),La.set(1,0),Xh.set(1,1);let a=t.ray.intersectTriangle(Dr,Ls,Ur,!1,Is);if(a===null&&(Nr(Ls.set(-.5,.5,0),ki,o,Bi,i,r),La.set(0,1),a=t.ray.intersectTriangle(Dr,Ur,Ls,!1,Is),a===null))return;let c=t.ray.origin.distanceTo(Is);c<t.near||c>t.far||e.push({distance:c,point:Is.clone(),uv:$n.getInterpolation(Is,Dr,Ls,Ur,Wh,La,Xh,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Nr(s,t,e,n,i,r){Hi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ps.x=r*Hi.x-i*Hi.y,Ps.y=i*Hi.x+r*Hi.y):Ps.copy(Hi),s.copy(t),s.x+=Ps.x,s.y+=Ps.y,s.applyMatrix4(Su)}var Hc=class extends Ge{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ze,h=Ze,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fo=class extends Ve{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vi=new jt,qh=new jt,Fr=[],Yh=new Un,Xg=new jt,Ds=new mt,Us=new jn,Nn=class extends mt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),Yh.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(Yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),Us.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),t.ray.intersectsSphere(Us)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vi),qh.multiplyMatrices(n,Vi),Ds.matrixWorld=qh,Ds.raycast(t,Fr);for(let o=0,a=Fr.length;o<a;o++){let c=Fr[o];c.instanceId=r,c.object=this,e.push(c)}Fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hc(new Float32Array(i*this.count),i,this.count,gl,mn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ys=class extends gn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$h=new jt,Vc=new to,Or=new jn,zr=new L,po=class extends ge{constructor(t=new Ae,e=new Ys){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;$h.copy(i).invert(),Vc.copy(t.ray).applyMatrix4($h);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);zr.fromBufferAttribute(u,m),Zh(zr,m,c,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)zr.fromBufferAttribute(u,g),Zh(zr,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zh(s,t,e,n,i,r,o){let a=Vc.distanceSqToPoint(s);if(a<e){let c=new L;Vc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var mo=class extends Ge{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new lt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,i=[],r=[],o=[],a=new L,c=new jt;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Le(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Le(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$s=class extends en{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gc=class extends $s{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Br=new L,Da=new bl,Ua=new bl,Na=new bl,Wc=class extends en{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Br.subVectors(i[0],i[1]).add(i[0]),l=Br);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Br.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Br),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Da.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),Ua.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Na.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ua.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Na.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Da.calc(c),Ua.calc(c),Na.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function qg(s,t){let e=1-s;return e*e*t}function Yg(s,t){return 2*(1-s)*s*t}function $g(s,t){return s*s*t}function Bs(s,t,e,n){return qg(s,t)+Yg(s,e)+$g(s,n)}function Zg(s,t){let e=1-s;return e*e*e*t}function Kg(s,t){let e=1-s;return 3*e*e*s*t}function Jg(s,t){return 3*(1-s)*s*s*t}function Qg(s,t){return s*s*s*t}function ks(s,t,e,n,i){return Zg(s,t)+Kg(s,e)+Jg(s,n)+Qg(s,i)}var go=class extends en{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ks(t,i.x,r.x,o.x,a.x),ks(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xc=class extends en{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ks(t,i.x,r.x,o.x,a.x),ks(t,i.y,r.y,o.y,a.y),ks(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xo=class extends en{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qc=class extends en{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_o=class extends en{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,i.x,r.x,o.x),Bs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yc=class extends en{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,i.x,r.x,o.x),Bs(t,i.y,r.y,o.y),Bs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends en{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Kh(a,c.x,l.x,h.x,u.x),Kh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},$c=Object.freeze({__proto__:null,ArcCurve:Gc,CatmullRomCurve3:Wc,CubicBezierCurve:go,CubicBezierCurve3:Xc,EllipseCurve:$s,LineCurve:xo,LineCurve3:qc,QuadraticBezierCurve:_o,QuadraticBezierCurve3:Yc,SplineCurve:vo}),Zc=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $c[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new $c[i.type]().fromJSON(i))}return this}},yo=class extends Zc{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new xo(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new _o(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new go(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new vo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new $s(t,e,n,i,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Zs=class s extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ti=class s extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function y(){let _=new L,R=new L,T=0,A=(e-t)/n;for(let P=0;P<=r;P++){let S=[],M=P/r,I=M*(e-t)+t;for(let F=0;F<=i;F++){let O=F/i,B=O*c+a,V=Math.sin(B),H=Math.cos(B);R.x=I*V,R.y=-M*n+m,R.z=I*H,u.push(R.x,R.y,R.z),_.set(V,A,H).normalize(),d.push(_.x,_.y,_.z),f.push(O,1-M),S.push(g++)}x.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){let M=x[S][P],I=x[S+1][P],F=x[S+1][P+1],O=x[S][P+1];(t>0||S!==0)&&(h.push(M,I,O),T+=3),(e>0||S!==r-1)&&(h.push(I,F,O),T+=3)}l.addGroup(p,T,0),p+=T}function v(_){let R=g,T=new lt,A=new L,P=0,S=_===!0?t:e,M=_===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let I=g;for(let F=0;F<=i;F++){let B=F/i*c+a,V=Math.cos(B),H=Math.sin(B);A.x=S*H,A.y=m*M,A.z=S*V,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=V*.5+.5,T.y=H*.5*M+.5,f.push(T.x,T.y),g++}for(let F=0;F<i;F++){let O=R+F,B=I+F;_===!0?h.push(B,B+1,O):h.push(B+1,B,O),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ks=class extends yo{constructor(t){super(t),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new yo().fromJSON(i))}return this}},jg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=wu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=sx(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Js(r,o,e,a,c,f,0),o}};function wu(s,t,e,n,i){let r,o;if(i===mx(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Jh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Jh(r,s[r],s[r+1],o);return o&&Lo(o,o.next)&&(js(o),o=o.next),o}function xi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Lo(e,e.next)||me(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(s,t,e,n,i,r,o){if(!s)return;!o&&r&&lx(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?ex(s,n,i,r):tx(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),js(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=nx(xi(s),t,e),Js(s,t,e,n,i,r,2)):o===2&&ix(s,t,e,n,i,r):Js(xi(s),t,e,n,i,r,1);break}}}function tx(s){let t=s.prev,e=s,n=s.next;if(me(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Wi(i,a,r,c,o,l,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ex(s,t,e,n){let i=s.prev,r=s,o=s.next;if(me(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Kc(f,g,t,e,n),y=Kc(x,m,t,e,n),v=s.prevZ,_=s.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Wi(a,h,c,u,l,d,v.x,v.y)&&me(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Wi(a,h,c,u,l,d,_.x,_.y)&&me(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Wi(a,h,c,u,l,d,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Wi(a,h,c,u,l,d,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function nx(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Lo(i,r)&&Eu(i,n,n.next,r)&&Qs(i,r)&&Qs(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),js(n),js(n.next),n=s=r),n=n.next}while(n!==s);return xi(n)}function ix(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dx(o,a)){let c=Tu(o,a);o=xi(o,o.next),c=xi(c,c.next),Js(o,t,e,n,i,r,0),Js(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function sx(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=wu(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ux(l));for(i.sort(rx),r=0;r<i.length;r++)e=ox(i[r],e);return e}function rx(s,t){return s.x-t.x}function ox(s,t){let e=ax(s,t);if(!e)return t;let n=Tu(e,s);return xi(n,n.next),xi(e,e.next)}function ax(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Wi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Qs(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&cx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function cx(s,t){return me(s.prev,s,t.prev)<0&&me(t.next,s,s.next)<0}function lx(s,t,e,n){let i=s;do i.z===0&&(i.z=Kc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hx(i)}function hx(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Kc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ux(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Wi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function dx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!fx(s,t)&&(Qs(s,t)&&Qs(t,s)&&px(s,t)&&(me(s.prev,s,t.prev)||me(s,t.prev,t))||Lo(s,t)&&me(s.prev,s,s.next)>0&&me(t.prev,t,t.next)>0)}function me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Lo(s,t){return s.x===t.x&&s.y===t.y}function Eu(s,t,e,n){let i=Hr(me(s,t,e)),r=Hr(me(s,t,n)),o=Hr(me(e,n,s)),a=Hr(me(e,n,t));return!!(i!==r&&o!==a||i===0&&kr(s,e,t)||r===0&&kr(s,n,t)||o===0&&kr(e,s,n)||a===0&&kr(e,t,n))}function kr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Hr(s){return s>0?1:s<0?-1:0}function fx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Eu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Qs(s,t){return me(s.prev,s,s.next)<0?me(s,t,s.next)>=0&&me(s,s.prev,t)>=0:me(s,t,s.prev)<0||me(s,s.next,t)<0}function px(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Tu(s,t){let e=new Jc(s.i,s.x,s.y),n=new Jc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jh(s,t,e,n){let i=new Jc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function js(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Jc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mx(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Hs=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Qh(t),jh(n,t);let o=t.length;e.forEach(Qh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,jh(n,e[c]);let a=jg.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Qh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function jh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Mo=class s extends Ae{constructor(t=new Ks([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ie(i,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:gx,v,_=!1,R,T,A,P;p&&(v=p.getSpacedPoints(h),_=!0,d=!1,R=p.computeFrenetFrames(h,!1),T=new L,A=new L,P=new L),d||(m=0,f=0,g=0,x=0);let S=a.extractPoints(l),M=S.shape,I=S.holes;if(!Hs.isClockWise(M)){M=M.reverse();for(let J=0,it=I.length;J<it;J++){let C=I[J];Hs.isClockWise(C)&&(I[J]=C.reverse())}}let O=Hs.triangulateShape(M,I),B=M;for(let J=0,it=I.length;J<it;J++){let C=I[J];M=M.concat(C)}function V(J,it,C){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(it,C)}let H=M.length,tt=O.length;function q(J,it,C){let wt,nt,Mt,ct=J.x-it.x,Ut=J.y-it.y,vt=C.x-J.x,E=C.y-J.y,b=ct*ct+Ut*Ut,k=ct*E-Ut*vt;if(Math.abs(k)>Number.EPSILON){let $=Math.sqrt(b),j=Math.sqrt(vt*vt+E*E),Z=it.x-Ut/$,At=it.y+ct/$,dt=C.x-E/j,bt=C.y+vt/j,$t=((dt-Z)*E-(bt-At)*vt)/(ct*E-Ut*vt);wt=Z+ct*$t-J.x,nt=At+Ut*$t-J.y;let st=wt*wt+nt*nt;if(st<=2)return new lt(wt,nt);Mt=Math.sqrt(st/2)}else{let $=!1;ct>Number.EPSILON?vt>Number.EPSILON&&($=!0):ct<-Number.EPSILON?vt<-Number.EPSILON&&($=!0):Math.sign(Ut)===Math.sign(E)&&($=!0),$?(wt=-Ut,nt=ct,Mt=Math.sqrt(b)):(wt=ct,nt=Ut,Mt=Math.sqrt(b/2))}return new lt(wt/Mt,nt/Mt)}let rt=[];for(let J=0,it=B.length,C=it-1,wt=J+1;J<it;J++,C++,wt++)C===it&&(C=0),wt===it&&(wt=0),rt[J]=q(B[J],B[C],B[wt]);let gt=[],_t,Bt=rt.concat();for(let J=0,it=I.length;J<it;J++){let C=I[J];_t=[];for(let wt=0,nt=C.length,Mt=nt-1,ct=wt+1;wt<nt;wt++,Mt++,ct++)Mt===nt&&(Mt=0),ct===nt&&(ct=0),_t[wt]=q(C[wt],C[Mt],C[ct]);gt.push(_t),Bt=Bt.concat(_t)}for(let J=0;J<m;J++){let it=J/m,C=f*Math.cos(it*Math.PI/2),wt=g*Math.sin(it*Math.PI/2)+x;for(let nt=0,Mt=B.length;nt<Mt;nt++){let ct=V(B[nt],rt[nt],wt);et(ct.x,ct.y,-C)}for(let nt=0,Mt=I.length;nt<Mt;nt++){let ct=I[nt];_t=gt[nt];for(let Ut=0,vt=ct.length;Ut<vt;Ut++){let E=V(ct[Ut],_t[Ut],wt);et(E.x,E.y,-C)}}}let St=g+x;for(let J=0;J<H;J++){let it=d?V(M[J],Bt[J],St):M[J];_?(A.copy(R.normals[0]).multiplyScalar(it.x),T.copy(R.binormals[0]).multiplyScalar(it.y),P.copy(v[0]).add(A).add(T),et(P.x,P.y,P.z)):et(it.x,it.y,0)}for(let J=1;J<=h;J++)for(let it=0;it<H;it++){let C=d?V(M[it],Bt[it],St):M[it];_?(A.copy(R.normals[J]).multiplyScalar(C.x),T.copy(R.binormals[J]).multiplyScalar(C.y),P.copy(v[J]).add(A).add(T),et(P.x,P.y,P.z)):et(C.x,C.y,u/h*J)}for(let J=m-1;J>=0;J--){let it=J/m,C=f*Math.cos(it*Math.PI/2),wt=g*Math.sin(it*Math.PI/2)+x;for(let nt=0,Mt=B.length;nt<Mt;nt++){let ct=V(B[nt],rt[nt],wt);et(ct.x,ct.y,u+C)}for(let nt=0,Mt=I.length;nt<Mt;nt++){let ct=I[nt];_t=gt[nt];for(let Ut=0,vt=ct.length;Ut<vt;Ut++){let E=V(ct[Ut],_t[Ut],wt);_?et(E.x,E.y+v[h-1].y,v[h-1].x+C):et(E.x,E.y,u+C)}}}W(),Q();function W(){let J=i.length/3;if(d){let it=0,C=H*it;for(let wt=0;wt<tt;wt++){let nt=O[wt];Tt(nt[2]+C,nt[1]+C,nt[0]+C)}it=h+m*2,C=H*it;for(let wt=0;wt<tt;wt++){let nt=O[wt];Tt(nt[0]+C,nt[1]+C,nt[2]+C)}}else{for(let it=0;it<tt;it++){let C=O[it];Tt(C[2],C[1],C[0])}for(let it=0;it<tt;it++){let C=O[it];Tt(C[0]+H*h,C[1]+H*h,C[2]+H*h)}}n.addGroup(J,i.length/3-J,0)}function Q(){let J=i.length/3,it=0;ht(B,it),it+=B.length;for(let C=0,wt=I.length;C<wt;C++){let nt=I[C];ht(nt,it),it+=nt.length}n.addGroup(J,i.length/3-J,1)}function ht(J,it){let C=J.length;for(;--C>=0;){let wt=C,nt=C-1;nt<0&&(nt=J.length-1);for(let Mt=0,ct=h+m*2;Mt<ct;Mt++){let Ut=H*Mt,vt=H*(Mt+1),E=it+wt+Ut,b=it+nt+Ut,k=it+nt+vt,$=it+wt+vt;Rt(E,b,k,$)}}}function et(J,it,C){c.push(J),c.push(it),c.push(C)}function Tt(J,it,C){Lt(J),Lt(it),Lt(C);let wt=i.length/3,nt=y.generateTopUV(n,i,wt-3,wt-2,wt-1);Ht(nt[0]),Ht(nt[1]),Ht(nt[2])}function Rt(J,it,C,wt){Lt(J),Lt(it),Lt(wt),Lt(it),Lt(C),Lt(wt);let nt=i.length/3,Mt=y.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);Ht(Mt[0]),Ht(Mt[1]),Ht(Mt[3]),Ht(Mt[1]),Ht(Mt[2]),Ht(Mt[3])}function Lt(J){i.push(c[J*3+0]),i.push(c[J*3+1]),i.push(c[J*3+2])}function Ht(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new $c[i.type]().fromJSON(i)),new s(n,t.options)}},gx={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new lt(r,o),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-u),new lt(d,1-g),new lt(x,1-p)]:[new lt(a,1-c),new lt(h,1-u),new lt(f,1-g),new lt(m,1-p)]}};function xx(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var bo=class s extends Ae{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/i,f=new L,g=new lt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,v=y,_=y+n+1,R=y+n+2,T=y+1;a.push(v,_,T),a.push(_,R,T)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var So=class s extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,d=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+_,1-v),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],_=h[p][y],R=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(v,_,T),(p!==n-1||c<Math.PI)&&f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var wo=class s extends Ae{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ue=class extends gn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var we=class extends gn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ze,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function _x(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var is=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qc=class extends is{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zl,endingEnd:Zl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kl:r=t,a=2*e-n;break;case Jl:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kl:o=t,c=2*n-e;break;case Jl:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[l+R]+v*o[c+R]+_*o[u+R];return r}},jc=class extends is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},tl=class extends is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case bc:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return bc;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&_x(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=bc;var _i=class extends ln{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=$r;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends ln{};el.prototype.ValueTypeName="color";var nl=class extends ln{};nl.prototype.ValueTypeName="number";var il=class extends is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Eo=class extends ln{InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends ln{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=$r;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends ln{};sl.prototype.ValueTypeName="vector";var rl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},vx=new rl,ol=class{constructor(t){this.manager=t!==void 0?t:vx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ol.DEFAULT_MATERIAL_NAME="__DEFAULT";var ss=class extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},To=class extends ss{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Fa=new jt,tu=new L,eu=new L,tr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),Fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},al=class extends tr{constructor(){super(new Te(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Kr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ao=class extends ss{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new al}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},nu=new jt,Ns=new L,Oa=new L,cl=class extends tr{constructor(){super(new Te(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ns),Oa.copy(n.position),Oa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Oa),n.updateMatrixWorld(),i.makeTranslation(-Ns.x,-Ns.y,-Ns.z),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu)}},rs=class extends ss{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ll=class extends tr{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends ss{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new ll}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Sl="\\[\\]\\.:\\/",yx=new RegExp("["+Sl+"]","g"),wl="[^"+Sl+"]",Mx="[^"+Sl.replace("\\.","")+"]",bx=/((?:WC+[\/:])*)/.source.replace("WC",wl),Sx=/(WCOD+)?/.source.replace("WCOD",Mx),wx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),Ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),Tx=new RegExp("^"+bx+Sx+wx+Ex+"$"),Ax=["material","materials","bones","map"],hl=class{constructor(t,e,n){let i=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yx,"")}static parseTrackName(t){let e=Tx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ax.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=hl;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function nr(s,t){return{x:(t-139.704)*90360*.7,z:(35.734-s)*110950*.7}}var Rx={Y0:[35.72805,139.69688],Y_RK:[35.73065,139.6983],Y_KN:[35.733132,139.699497],Y2:[35.73521,139.7006],Y3:[35.73938,139.70538],KUMANO:[35.74139,139.70675],K1:[35.74012,139.70841],AXIA:[35.7386,139.71061],K3:[35.73843,139.71165],K4:[35.7381,139.7126],G1:[35.73714,139.70997],G2:[35.73446,139.70942],G3:[35.73215,139.7088],BUKURO:[35.73162,139.70846],GOSA:[35.73125,139.70826],W_SW:[35.73082,139.70804],G5:[35.72835,139.70666],R441_1:[35.72924,139.70354],R441_2:[35.72865,139.70042],S441:[35.72776,139.70826],EDIT:[35.72744,139.70931],R1:[35.73037,139.69903],R2:[35.73043,139.70004],R3:[35.73074,139.70236],R4:[35.73112,139.70507],TIPTOP:[35.73116,139.70546],RK_E:[35.73175,139.70713],QB:[35.73186,139.70663],Q1:[35.73212,139.70584],Q2:[35.73253,139.70499],NIKKEN:[35.73284,139.7039],Q3:[35.73291,139.70329],Q4:[35.73288,139.70081],YUBIN:[35.73305,139.69987],EPOS:[35.73066,139.70882],W_S2:[35.73065,139.70935],W_A:[35.73092,139.70969],W_B:[35.73151,139.71002],W_C:[35.73126,139.71028],HOSEI:[35.73121,139.71084],W_E1:[35.73155,139.71112],W_E2:[35.73163,139.71096],KUREYON:[35.73268,139.71085],W_N:[35.73262,139.70952],MIYAKE:[35.73161,139.70947],W_S1:[35.73068,139.7084],E_EN:[35.7362,139.7116],E1:[35.73407,139.71155],S_MID:[35.73007,139.70935]},he=Object.fromEntries(Object.entries(Rx).map(([s,[t,e]])=>[s,nr(t,e)])),_n=[{name:"\u5C71\u624B\u901A\u308A",width:16,nodes:["Y0","Y_RK","Y_KN","Y2","Y3","KUMANO"]},{name:"\u5DDD\u8D8A\u8857\u9053",width:14,nodes:["KUMANO","K1","AXIA","K3","K4"]},{name:"\u5287\u5834\u901A\u308A",width:12,nodes:["AXIA","G1","G2","G3","BUKURO","GOSA","W_SW","G5"]},{name:"\u90FD\u9053441\u53F7",width:12,nodes:["Y0","R441_2","R441_1","G5","S441","EDIT"]},{name:"\u7ACB\u6559\u901A\u308A",width:9,nodes:["Y_RK","R1","R2","R3","R4","TIPTOP","RK_E","GOSA"]},{name:"\u8981\u753A\u901A\u308A",width:11,nodes:["Y_KN","YUBIN","Q4","Q3","NIKKEN","Q2","Q1","QB","RK_E"]},{name:"\u897F\u53E3\u901A\u308A",width:9,nodes:["EPOS","W_S2","W_A","W_B","W_C","HOSEI","W_E1","W_E2","KUREYON","W_N","MIYAKE","BUKURO"]},{name:"\u897F\u53E3\u516C\u5712\u901A\u308A",width:9,nodes:["W_SW","W_S1","EPOS"]},{name:"\u6587\u5316\u901A\u308A",width:10,nodes:["K3","E_EN","E1","KUREYON"]},{name:"\u5357\u53E3\u901A\u308A",width:10,nodes:["W_S2","S_MID","EDIT"]}],El=[{id:"shop",type:"shop",name:"\u30C9\u30F3\u30FB\u30AD\u30DB\u30FC\u30C6 \u5317\u6C60\u888B\u5E97\uFF08\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30B7\u30E7\u30C3\u30D7\uFF09",short:"TUNE SHOP",node:"K4",offset:[0,0]},{id:"gs",type:"gs",name:"ENEOS \u30BB\u30EB\u30D5\u6C60\u888B\uFF08\u30BB\u30FC\u30D6\u30DD\u30A4\u30F3\u30C8\uFF09",short:"GS / SAVE",node:"E_EN",offset:[0,0]}],Tl=[{id:"speedway",name:"\u897F\u6C60\u888B\u30B9\u30D4\u30FC\u30C9\u30A6\u30A7\u30A4",laps:1,radius:22,nodes:["Y_RK","Y_KN","Y2","Y3","KUMANO","K1","AXIA","G1","G2","G3","BUKURO","GOSA","W_SW","G5","R441_1","R441_2","Y0"],desc:"\u5C71\u624B\u901A\u308A\u30FB\u5DDD\u8D8A\u8857\u9053\u30FB\u5287\u5834\u901A\u308A\u30FB441\u53F7\u3092\u5468\u56DE\u3059\u308B\u9AD8\u901F\u30B3\u30FC\u30B9"},{id:"wgp",name:"\u6C60\u888BWGP",laps:3,radius:7,nodes:["EPOS","W_S2","W_A","W_B","W_C","HOSEI","W_E1","W_E2","KUREYON","W_N","MIYAKE","BUKURO","GOSA","W_SW","W_S1"],desc:"\u6C60\u888B\u99C5\u897F\u53E3\u306E\u72ED\u3044\u8DEF\u5730\u3092\u99C6\u3051\u629C\u3051\u308B\u30C6\u30AF\u30CB\u30AB\u30EB\u30B3\u30FC\u30B9"},{id:"rikkyo",name:"\u7ACB\u6559\u901A\u308A\u30B5\u30FC\u30AD\u30C3\u30C8",laps:2,radius:12,nodes:["R3","R4","TIPTOP","RK_E","QB","Q1","Q2","NIKKEN","Q3","Q4","YUBIN","Y_KN","Y_RK","R1","R2"],desc:"\u7ACB\u6559\u901A\u308A\u3068\u8981\u753A\u901A\u308A\u3092\u7D50\u3076\u3001\u30D8\u30A2\u30D4\u30F3\u304C\u540D\u7269\u306E\u4E2D\u901F\u30B3\u30FC\u30B9"}],ir=Tl.flatMap(s=>[{key:`${s.id}_f`,course:s,reverse:!1,name:`${s.name}\uFF08\u9806\u8D70\uFF09`},{key:`${s.id}_r`,course:s,reverse:!0,name:`${s.name}\uFF08\u9006\u8D70\uFF09`}]);function Au(s,t){for(let e of _n)for(let n=0;n<e.nodes.length-1;n++)if(e.nodes[n]===s&&e.nodes[n+1]===t||e.nodes[n]===t&&e.nodes[n+1]===s)return e.width;return 10}var Al={node:"E_EN",heading:Math.PI};var Do=class{constructor(t,e=24){this.segs=t,this.cell=e,this.grid=new Map;for(let n=0;n<t.length;n++){let i=t[n],r=i.hw+8,o=Math.floor((Math.min(i.ax,i.bx)-r)/e),a=Math.floor((Math.max(i.ax,i.bx)+r)/e),c=Math.floor((Math.min(i.az,i.bz)-r)/e),l=Math.floor((Math.max(i.az,i.bz)+r)/e);for(let h=o;h<=a;h++)for(let u=c;u<=l;u++){let d=h*73856093^u*19349663,f=this.grid.get(d);f||this.grid.set(d,f=[]),f.push(n)}}}query(t,e){let n=Math.floor(t/this.cell)*73856093^Math.floor(e/this.cell)*19349663,i=this.grid.get(n),r=1e9,o=0,a=0;if(!i)return{d:50,nx:0,nz:0,far:!0};for(let c of i){let l=this.segs[c],h=l.bx-l.ax,u=l.bz-l.az,d=h*h+u*u,f=d>0?((t-l.ax)*h+(e-l.az)*u)/d:0;f=f<0?0:f>1?1:f;let g=l.ax+h*f,x=l.az+u*f,m=t-g,p=e-x,y=Math.hypot(m,p),v=y-l.hw;v<r&&(r=v,y>1e-6?(o=m/y,a=p/y):(o=0,a=0))}return{d:r,nx:o,nz:a,far:!1}}};function Iu(s,t){let e=0;for(let[n,i]of s.corners()){let r=t.query(n,i);if(r.d>0){if(r.far)continue;e+=s.wallImpulse(n,i,-r.nx,-r.nz,Math.min(r.d,1.5))}}return e}function Pu(){let s=[];for(let t of _n)for(let e=0;e<t.nodes.length-1;e++){let n=he[t.nodes[e]],i=he[t.nodes[e+1]];s.push({ax:n.x,az:n.z,bx:i.x,bz:i.z,hw:t.width/2,road:t.name})}return new Do(s)}function Lu(){let s={};for(let t of _n)for(let e=0;e<t.nodes.length-1;e++){let n=t.nodes[e],i=t.nodes[e+1];(s[n]||(s[n]=[])).push({to:i,w:t.width}),(s[i]||(s[i]=[])).push({to:n,w:t.width})}return s}var Ru=.3,Rl=14,Cu=14,Cx=2,Ix=4.8,Uo=class{constructor(t){let e=t.course,n=[...e.nodes];t.reverse&&(n=[n[0],...n.slice(1).reverse()]),this.ids=n,this.name=t.name,this.laps=e.laps;let i=n.length,r=n.map(f=>he[f]),o=n.map((f,g)=>Au(f,n[(g+1)%i])),a=[],c=2,l=[];for(let f=0;f<i;f++){let g=r[(f-1+i)%i],x=r[f],m=r[(f+1)%i],p=x.x-g.x,y=x.z-g.z,v=Math.hypot(p,y),_=m.x-x.x,R=m.z-x.z,T=Math.hypot(_,R),A=[p/v,y/v],P=[_/T,R/T],S=Math.max(-1,Math.min(1,A[0]*P[0]+A[1]*P[1])),M=Math.acos(S);if(f===0||M<.02){l.push({t:0,u1:A,u2:P,th:0});continue}let I=e.radius*Math.tan(M/2);I=Math.min(I,.48*v,.48*T),l.push({t:I,u1:A,u2:P,th:M,right:A[0]*P[1]-A[1]*P[0]>0,tight:M>Cx&&I/Math.tan(M/2)<6})}for(let f=0;f<i;f++){let g=r[f],x=r[(f+1)%i],m=l[f],p=l[(f+1)%i],y=o[(f-1+i)%i],v=o[f];if(m.t>0){let M={x:g.x-m.u1[0]*m.t,z:g.z-m.u1[1]*m.t},I={x:g.x+m.u2[0]*m.t,z:g.z+m.u2[1]*m.t},F=m.t*2,O=Math.max(2,Math.ceil(F/c),Math.ceil(m.th/.08));for(let B=0;B<O;B++){let V=B/O,H=(1-V)*(1-V)*M.x+2*(1-V)*V*g.x+V*V*I.x,tt=(1-V)*(1-V)*M.z+2*(1-V)*V*g.z+V*V*I.z;a.push({x:H,z:tt,w:y+(v-y)*V,corner:f})}}let _=g.x+m.u2[0]*m.t,R=g.z+m.u2[1]*m.t,T=x.x-p.u1[0]*p.t,A=x.z-p.u1[1]*p.t,P=Math.hypot(T-_,A-R),S=Math.max(1,Math.ceil(P/c));for(let M=0;M<S;M++){let I=M/S;a.push({x:_+(T-_)*I,z:R+(A-R)*I,w:v,corner:M===0&&m.th>0?f:-1})}}this.n=a.length,this.x=new Float32Array(this.n),this.z=new Float32Array(this.n),this.hw=new Float32Array(this.n),this.s=new Float32Array(this.n),this.tx=new Float32Array(this.n),this.tz=new Float32Array(this.n);let h=0;for(let f=0;f<this.n;f++)this.x[f]=a[f].x,this.z[f]=a[f].z,this.hw[f]=a[f].w/2,f>0&&(h+=Math.hypot(a[f].x-a[f-1].x,a[f].z-a[f-1].z)),this.s[f]=h;this.length=h+Math.hypot(a[0].x-a[this.n-1].x,a[0].z-a[this.n-1].z);let u={};for(let f=0;f<this.n;f++){let g=a[f].corner;if(g==null||g<0)continue;let x=l[g].th;if(x<Ru)continue;let m=u[g]||(u[g]={s0:this.s[f],s1:this.s[f],extra:3+2*Math.min(1,(x-Ru)/1.4),th:x,right:l[g].right,tight:l[g].tight});m.s1=this.s[f]}this.corners=Object.values(u),this.extra=new Float32Array(this.n);for(let f=0;f<this.n;f++){let g=0;for(let x of this.corners){let m=0,p=this.s[f],y=x.s0-p,v=p-x.s1;y>0?m=Math.min(y,this.length-y):v>0&&(m=Math.min(v,this.length-v));let _=m<=Rl?1:m>=Rl+Cu?0:.5+.5*Math.cos((m-Rl)/Cu*Math.PI);g=Math.max(g,x.extra*_)}this.extra[f]=g,this.hw[f]+=g/2}for(let f=0;f<this.n;f++){let g=(f-1+this.n)%this.n,x=(f+1)%this.n,m=this.x[x]-this.x[g],p=this.z[x]-this.z[g],y=Math.hypot(m,p)||1;this.tx[f]=m/y,this.tz[f]=p/y}let d=[];for(let f=0;f<this.n;f++){let g=(f+1)%this.n;d.push({ax:this.x[f],az:this.z[f],bx:this.x[g],bz:this.z[g],hw:Math.min(this.hw[f],this.hw[g])})}this.corridor=new Do(d,20),this.sectors=[0,this.length/3,this.length*2/3],this.buildRacingLine()}normal(t){return[-this.tz[t],this.tx[t]]}project(t,e,n=-1){let i=-1,r=1e18,o=(x,m)=>{for(let p=x;p<=m;p++){let y=(p%this.n+this.n)%this.n,v=t-this.x[y],_=e-this.z[y],R=v*v+_*_;R<r&&(r=R,i=y)}};n>=0?(o(n-30,n+60),Math.sqrt(r)>this.hw[i]+12&&(r=1e18,o(0,this.n-1))):o(0,this.n-1);let a=i,c=t-this.x[a],l=e-this.z[a],h=c*this.tx[a]+l*this.tz[a],[u,d]=this.normal(a),f=c*u+l*d,g=this.s[a]+h;return g<0&&(g+=this.length),g>=this.length&&(g-=this.length),{i:a,s:g,lat:f,dist:Math.sqrt(r)}}posAt(t,e=0){t=(t%this.length+this.length)%this.length;let n=0,i=this.n-1;for(;n<i;){let f=n+i+1>>1;this.s[f]<=t?n=f:i=f-1}let r=n,o=(r+1)%this.n,a=(o===0?this.length:this.s[o])-this.s[r],c=a>0?(t-this.s[r])/a:0,l=this.x[r]+(this.x[o]-this.x[r])*c,h=this.z[r]+(this.z[o]-this.z[r])*c,[u,d]=this.normal(r);return{x:l+u*e,z:h+d*e,h:Math.atan2(this.tx[r],this.tz[r]),i:r}}buildRacingLine(){let t=this.n,e=new Float32Array(t),n=new Float32Array(t),i=new Float32Array(t),r=[];for(let c=0;c<t;c++)r.push(this.normal(c));let o=2.2,a=new Uint8Array(t);for(let c of this.corners||[]){if(!c.tight)continue;let l=c.right?-1:1;for(let h=0;h<t;h++){let u=this.s[h];u>=c.s0-8&&u<=c.s1+8&&(a[h]=1,e[h]=l*Math.max(0,this.hw[h]-2.5))}}for(let c of[12,6,3])for(let l=0;l<120;l++){for(let h=0;h<t;h++)n[h]=this.x[h]+r[h][0]*e[h],i[h]=this.z[h]+r[h][1]*e[h];for(let h=0;h<t;h++){if(a[h])continue;let u=(h-c+t)%t,d=(h+c)%t,f=(n[u]+n[d])/2,g=(i[u]+i[d])/2,x=(f-this.x[h])*r[h][0]+(g-this.z[h])*r[h][1],m=Math.max(0,this.hw[h]-o);e[h]+=(x-e[h])*.5,e[h]=Math.max(-m,Math.min(m,e[h]))}}this.lineOff=e,this.lx=new Float32Array(t),this.lz=new Float32Array(t);for(let c=0;c<t;c++)this.lx[c]=this.x[c]+r[c][0]*e[c],this.lz[c]=this.z[c]+r[c][1]*e[c];this.lseg=new Float32Array(t);for(let c=0;c<t;c++){let l=(c+1)%t;this.lseg[c]=Math.hypot(this.lx[l]-this.lx[c],this.lz[l]-this.lz[c])}this.curv=new Float32Array(t);for(let c=0;c<t;c++){let l=c,h=c,u=0,d=0;for(;u<7&&l!==(c+1)%t;)l=(l-1+t)%t,u+=this.lseg[l];for(;d<7&&h!==(c-1+t)%t;)d+=this.lseg[h],h=(h+1)%t;let f=this.lx[c]-this.lx[l],g=this.lz[c]-this.lz[l],x=this.lx[h]-this.lx[c],m=this.lz[h]-this.lz[c],p=Math.hypot(f,g),y=Math.hypot(x,m),v=f*m-g*x,_=Math.atan2(v,f*x+g*m);this.curv[c]=_/((p+y)/2||1)}}speedProfile(t,e){let n=this.n,i=new Float32Array(n),r=t.mu*(.74+.2*e),o=.5*1.2*t.area*(t.clF+t.clR)/t.mass;for(let c=0;c<n;c++){let h=Math.abs(this.curv[c])-r*o;i[c]=h<=1e-5?90:Math.min(90,Math.sqrt(r*9.81/h))}for(let c of this.corners||[]){if(!c.tight)continue;let l=Math.sqrt(r*9.81*Ix);for(let h=0;h<n;h++)this.s[h]>=c.s0-4&&this.s[h]<=c.s1+4&&(i[h]=Math.min(i[h],l))}let a=r*9.81*(.62+.25*e)*Math.min(1.25,t.brakeTorque/(t.mass*3.4));for(let c=0;c<2;c++)for(let l=n-1;l>=0;l--){let h=l,u=(l+1)%n,d=Math.hypot(this.lx[u]-this.lx[h],this.lz[u]-this.lz[h]);i[h]=Math.min(i[h],Math.sqrt(i[u]*i[u]+2*a*d))}return i}};var hs=1.6;function Px(s){let t=[],e=new Set,n=(i,r,o,a)=>{let c=s.query(i+o*.06,r+a*.06);if(c.far||c.d<.02)return;let l=`${Math.round(i/.9)},${Math.round(r/.9)}`;e.has(l)||(e.add(l),t.push({x:i,z:r,nx:o,nz:a}))};for(let i of s.segs){let r=i.bx-i.ax,o=i.bz-i.az,a=Math.hypot(r,o);if(a<.001)continue;let c=r/a,l=o/a,h=-l,u=c,d=Math.max(1,Math.round(a/hs));for(let g=0;g<=d;g++){let x=g/d*a;for(let m of[-1,1])n(i.ax+c*x+h*i.hw*m,i.az+l*x+u*i.hw*m,h*m,u*m)}let f=Math.max(3,Math.ceil(Math.PI*i.hw/hs));for(let[g,x,m]of[[i.ax,i.az,-1],[i.bx,i.bz,1]])for(let p=1;p<f;p++){let y=-Math.PI/2+p/f*Math.PI,v=c*m*Math.cos(y)+h*Math.sin(y),_=l*m*Math.cos(y)+u*Math.sin(y);n(g+v*i.hw,x+_*i.hw,v,_)}}return t}function ls(s,t,e){let n=new Nn(s,t,Math.max(1,e.length)),i=new jt,r=new tn,o=new ze,a=new L,c=new L(1,1,1);return e.forEach((l,h)=>{o.set(0,l.rot,0),r.setFromEuler(o),i.compose(a.set(l.x,l.y||0,l.z),r,c),n.setMatrixAt(h,i),l.color!=null&&n.setColorAt(h,new Gt(l.color))}),n.count=e.length,n}var Du=(s,t)=>{let e=Math.sin(s*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)};function Cl(s,t={}){let e=new ve,n=Px(s),i=[],r=[],o=[],a=[],c=[],l=[],h=0;for(let f of n){let g=Math.atan2(-f.nz,f.nx),x=t.isCorner?t.isCorner(f.x,f.z):!1,m=t.course&&x;i.push({x:f.x+f.nx*.15,z:f.z+f.nz*.15,rot:g,color:m?Math.floor(h/1)%2?14165551:15921906:13225170});let p=f.x+f.nx*.95,y=f.z+f.nz*.95,v=t.course?0:Du(Math.round(f.x/24),Math.round(f.z/24));t.course||v<.55?(r.push({x:p,z:y,y:.62,rot:g,color:t.course?h%4<2?15132390:13642290:15264494}),h%2===0&&o.push({x:p+f.nx*.12,z:y+f.nz*.12,y:.4,rot:g}),h%3===0&&l.push({x:p-f.nx*.06,z:y-f.nz*.06,y:.62,rot:g,color:x?16747008:16765514})):(a.push({x:p+f.nx*.2,z:y+f.nz*.2,y:.22,rot:g}),c.push({x:p+f.nx*.2,z:y+f.nz*.2,y:.7,rot:g,color:Du(f.x,f.z)<.5?3107381:3898682})),h++}let u=new we({color:16777215,emissive:3815994});e.add(ls(new kt(.3,.16,hs+.05).translate(0,.08,0),u,i));let d=new we({color:16777215,emissive:2894892});return e.add(ls(new kt(.06,.34,hs+.05),d,r)),e.add(ls(new kt(.1,.8,.1),new we({color:9212056}),o)),e.add(ls(new kt(.06,.1,.16),new xe({color:16777215}),l)),e.add(ls(new kt(.75,.44,hs),new we({color:8224644,emissive:1710618}),a)),e.add(ls(new kt(.62,.55,hs-.1),new we({color:16777215,emissive:793100}),c)),e.userData.count=n.length,e}var No=class extends ns{constructor(){super();let t=new kt;t.deleteAttribute("uv");let e=new Ue({side:De}),n=new Ue,i=new rs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new mt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new mt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new mt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new mt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new mt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new mt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new mt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new mt(t,us(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new mt(t,us(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new mt(t,us(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new mt(t,us(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new mt(t,us(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new mt(t,us(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function us(s){let t=new xe;return t.color.setScalar(s),t}function Pl(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Oo(s,t,e,n=!0){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new mo(i);return n&&(r.wrapS=r.wrapT=Gs),r.colorSpace=Pe,r.anisotropy=4,r}function Uu(){return Oo(256,256,(s,t,e)=>{s.fillStyle="#4a4d55",s.fillRect(0,0,t,e);let n=Pl(7);for(let i=0;i<5e3;i++){let r=50+n()*50;s.fillStyle=`rgba(${r},${r},${r+6},${.25+n()*.4})`,s.fillRect(n()*t,n()*e,1+n()*2,1+n()*2)}})}function Fo(s,t,e,n,i=.1){let r=[],o=[],a=[],c=0;for(let h=0;h<s.length;h++){let u=s[h],d=s[Math.max(0,h-1)],f=s[Math.min(s.length-1,h+1)],g=f.x-d.x,x=f.z-d.z,m=Math.hypot(g,x)||1;g/=m,x/=m;let p=-x,y=g,v=typeof t=="function"?t(h):t;if(h>0&&(c+=Math.hypot(u.x-s[h-1].x,u.z-s[h-1].z)),r.push(u.x-p*v,e,u.z-y*v,u.x+p*v,e,u.z+y*v),o.push(0,c*i,1,c*i),h>0){let _=(h-1)*2;a.push(_,_+1,_+2,_+1,_+3,_+2)}}let l=new Ae;return l.setAttribute("position",new ie(r,3)),l.setAttribute("uv",new ie(o,2)),l.setIndex(a),l.computeVertexNormals(),new mt(l,n)}function Il(){let s=new we({color:16777215});return s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        if (vNw.y > 0.5) { diffuseColor.rgb *= 0.55; }`)},s}function Nu(s,t="#fff",e="rgba(0,0,0,0)",n=64,i="#0ff"){return Oo(1024,160,(o,a,c)=>{o.fillStyle=e,o.fillRect(0,0,a,c),o.font=`bold ${n}px "Hiragino Sans","Noto Sans JP",sans-serif`,o.textAlign="center",o.textBaseline="middle",o.shadowColor=i,o.shadowBlur=24,o.fillStyle=t,o.fillText(s,a/2,c/2)},!1)}var zo=class{constructor(t){this.scene=new ns,this.scene.background=new Gt(461332),this.scene.fog=new lo(725024,80,820);let e=new es(t);this.scene.environment=e.fromScene(new No,.04).texture,this.scene.environmentIntensity=.35,this.corridor=Pu(),this.renderer=t,this.courseGroup=null,this.build()}build(){let t=this.scene;t.add(new To(9085144,2763316,1.45));let e=new Ro(10466559,.5);e.position.set(-200,300,-100),t.add(e);let n=new mt(new Ke(4e3,4e3),new we({color:1052949}));n.rotation.x=-Math.PI/2,t.add(n);let i=Uu(),r=new we({map:i,color:11580608}),o=new we({color:2369068}),a=new xe({color:13619140}),c={};for(let l of _n)for(let h of l.nodes)c[h]=(c[h]||0)+1;for(let l of _n){let h=l.nodes.map(u=>he[u]);for(let u=0;u<h.length-1;u++){let d=[h[u],h[u+1]];t.add(Fo(d,l.width/2+3.2,.01,o));let f=Fo(d,l.width/2,.02,r,.08);t.add(f);let g=h[u],x=h[u+1],m=Math.hypot(x.x-g.x,x.z-g.z),p=c[l.nodes[u]]>1?l.width*.7:2,y=c[l.nodes[u+1]]>1?l.width*.7:2,v=l.width>=11?5:3,_=l.width>=11?5:4;for(let R=p;R<m-y-v;R+=v+_){let T={x:g.x+(x.x-g.x)*R/m,z:g.z+(x.z-g.z)*R/m},A={x:g.x+(x.x-g.x)*(R+v)/m,z:g.z+(x.z-g.z)*(R+v)/m};t.add(Fo([T,A],.08,.035,a))}}for(let u of h){let d=new mt(new Zs(l.width/2,20),r);d.rotation.x=-Math.PI/2,d.position.set(u.x,.021,u.z),t.add(d);let f=new mt(new Zs(l.width/2+3.2,20),o);f.rotation.x=-Math.PI/2,f.position.set(u.x,.011,u.z),t.add(f)}}this.townEdges=Cl(this.corridor),t.add(this.townEdges),this.buildBuildings(),this.buildStreetLights(),this.buildPOIs(),this.buildLandmarks(),this.buildStars()}buildBuildings(){let t=Pl(42),e=1e9,n=-1e9,i=1e9,r=-1e9;for(let v of Object.values(he))e=Math.min(e,v.x),n=Math.max(n,v.x),i=Math.min(i,v.z),r=Math.max(r,v.z);let o=220,a=[],c=nr(35.7295,139.7109);for(let v=e-o;v<n+o;v+=15)for(let _=i-o;_<r+o;_+=15){let R=v+(t()-.5)*5,T=_+(t()-.5)*5,A=this.corridor.query(R,T),P=A.far?40:A.d;if(P<6.5||El.some(B=>{let V=this.poiPos(B);return Math.hypot(V.x-R,V.z-T)<34}))continue;let S=Math.min(8,P-3.2),M=S*(1.2+t()*.8),I=S*(1.2+t()*.8),F=Math.max(0,1-Math.hypot(R-(c.x+120),T-c.z)/500),O=6+t()*18+(t()<.12?25:0)+F*(20+t()*45);a.push({px:R,pz:T,w:M,d:I,h:O,rot:(t()-.5)*.2})}let l=new kt(1,1,1);l.translate(0,.5,0);let h=new Nn(l,Il(),a.length),u=new jt,d=new tn,f=new ze,g=new L,x=new L,m=new Gt;a.forEach((v,_)=>{f.set(0,v.rot,0),d.setFromEuler(f),u.compose(x.set(v.px,0,v.pz),d,g.set(v.w,v.h,v.d)),h.setMatrixAt(_,u);let R=.18+t()*.22;m.setRGB(R*(.9+t()*.2),R,R*(1+t()*.25)),h.setColorAt(_,m)}),this.scene.add(h);let p=[16722541,383464,16369678,8073207,130953],y=new Ke(1,1);for(let v=0;v<90;v++){let _=a[Math.floor(t()*a.length)];if(_.h<10)continue;let R=new xe({color:p[Math.floor(t()*p.length)],side:He,fog:!0}),T=new mt(y,R),A=t()<.5;T.scale.set(A?1.2:4+t()*3,A?5+t()*4:1.2,1);let P=Math.floor(t()*4),S=_.rot+P*Math.PI/2,M=(P%2===0?_.d:_.w)/2+.15;T.position.set(_.px+Math.sin(S)*M,4+t()*Math.min(10,_.h-6),_.pz+Math.cos(S)*M),T.rotation.y=S,this.scene.add(T)}}buildStreetLights(){let t=[],e=[];for(let h of _n)for(let u=0;u<h.nodes.length-1;u++){let d=he[h.nodes[u]],f=he[h.nodes[u+1]],g=Math.hypot(f.x-d.x,f.z-d.z),x=(f.x-d.x)/g,m=(f.z-d.z)/g,p=-m,y=x,v=1;for(let _=10;_<g-6;_+=26){let R=(h.width/2+2.4)*v,T=d.x+x*_+p*R,A=d.z+m*_+y*R;t.push({x:T,z:A,side:v,rx:p,rz:y}),e.push({x:T-p*v*4.2,z:A-y*v*4.2}),v=-v}}let n=new ti(.08,.1,7,6);n.translate(0,3.5,0);let i=new Nn(n,new we({color:5593958}),t.length),r=new kt(.5,.15,.9),o=new Nn(r,new xe({color:16769712}),t.length),a=new jt;t.forEach((h,u)=>{a.makeTranslation(h.x,0,h.z),i.setMatrixAt(u,a),a.makeTranslation(h.x-h.rx*h.side*.9,7,h.z-h.rz*h.side*.9),o.setMatrixAt(u,a)}),this.scene.add(i,o);let c=Oo(128,128,(h,u,d)=>{let f=h.createRadialGradient(u/2,d/2,0,u/2,d/2,u/2);f.addColorStop(0,"rgba(255,220,160,0.55)"),f.addColorStop(.5,"rgba(255,200,140,0.18)"),f.addColorStop(1,"rgba(255,200,140,0)"),h.fillStyle=f,h.fillRect(0,0,u,d)},!1),l=new Nn(new Ke(14,14).rotateX(-Math.PI/2),new xe({map:c,transparent:!0,depthWrite:!1,blending:Vs,fog:!0}),e.length);e.forEach((h,u)=>{a.makeTranslation(h.x,.05,h.z),l.setMatrixAt(u,a)}),this.scene.add(l)}poiPos(t){let e=he[t.node];return{x:e.x+t.offset[0],z:e.z+t.offset[1]}}buildPOIs(){this.poiMarkers=[];for(let t of El){let e=this.poiPos(t),n=new ve;n.position.set(e.x,0,e.z);let i=t.type==="shop"?16726891:3073704,r=new mt(new bo(5,6,40),new xe({color:i,transparent:!0,opacity:.85,side:He}));r.rotation.x=-Math.PI/2,r.position.y=.06,n.add(r);let o=new mt(new ti(5.5,5.5,30,24,1,!0),new xe({color:i,transparent:!0,opacity:.08,side:He,depthWrite:!1}));o.position.y=15,n.add(o);let a=Nu(t.short,"#ffffff","rgba(10,10,20,0.85)",92,t.type==="shop"?"#ff3b6b":"#2ee6a8"),c=new uo(new qs({map:a,depthWrite:!1}));if(c.scale.set(16,2.5,1),c.position.y=11,n.add(c),t.type==="gs"){let l=new mt(new kt(16,.8,12),new we({color:14540253,emissive:3364164}));l.position.set(16,6,0),n.add(l);for(let[u,d]of[[10,-4],[10,4],[22,-4],[22,4]]){let f=new mt(new kt(.5,6,.5),new we({color:10066329}));f.position.set(u,3,d),n.add(f)}let h=new mt(new Ke(16,12),new xe({color:16774877,transparent:!0,opacity:.18,blending:Vs,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(16,.04,0),n.add(h)}else{let l=new mt(new kt(22,14,18),new we({color:2760752,emissive:2230296}));l.position.set(14,7,0),n.add(l);let h=new mt(new kt(22.2,1.6,18.2),new xe({color:16726891}));h.position.set(14,12,0),n.add(h)}this.scene.add(n),this.poiMarkers.push({poi:t,group:n,ring:r,x:e.x,z:e.z})}}buildLandmarks(){let t=nr(35.7295,139.7186),e=new mt(new kt(46,170,30),Il());e.position.set(t.x,85,t.z),e.material.color=new Gt(3159100),this.scene.add(e);let n=new xe({color:16719904});for(let[o,a]of[[-20,-12],[20,-12],[-20,12],[20,12]]){let c=new mt(new So(.9,8,6),n);c.position.set(t.x+o,171,t.z+a),this.scene.add(c),this.blinkers=this.blinkers||[],this.blinkers.push(c)}let i=nr(35.73,139.7122),r=new mt(new kt(70,34,150),Il());r.material.color=new Gt(3817289),r.position.set(i.x+40,0,i.z),r.geometry.translate(0,17,0),this.scene.add(r)}buildStars(){let t=Pl(9),e=[];for(let i=0;i<600;i++){let r=t()*Math.PI*2,o=t()*.45+.1,a=1500;e.push(Math.cos(r)*Math.cos(o)*a,Math.sin(o)*a,Math.sin(r)*Math.cos(o)*a)}let n=new Ae;n.setAttribute("position",new ie(e,3)),this.stars=new po(n,new Ys({color:8952251,size:2,sizeAttenuation:!1,fog:!1})),this.scene.add(this.stars)}setCourse(t){if(this.courseGroup&&(this.scene.remove(this.courseGroup),this.courseGroup=null),this.townEdges.visible=!t,!t)return;let e=new ve,n=[];for(let g=0;g<t.n;g++)n.push({x:t.x[g],z:t.z[g]});let i=Uu(),r=Fo([...n,n[0]],g=>t.hw[g%t.n]+.2,.028,new we({map:i,color:11975108}),.08);e.add(r);let o=-1;e.add(Cl(t.corridor,{course:!0,isCorner:(g,x)=>{let m=t.project(g,x,o);return o=m.i,t.extra[m.i]>.5}}));let a=t.posAt(0,0),c=Oo(128,32,(g,x,m)=>{for(let p=0;p<16;p++)for(let y=0;y<4;y++)g.fillStyle=(p+y)%2?"#111":"#eee",g.fillRect(p*8,y*8,8,8)},!1),l=new ve;l.position.set(a.x,0,a.z),l.rotation.y=a.h;let h=new mt(new Ke(t.hw[0]*2,1.6),new xe({map:c}));h.rotation.x=-Math.PI/2,h.position.y=.05,l.add(h);let u=new we({color:3356738,emissive:1118481});for(let g of[-1,1]){let x=new mt(new kt(.5,7,.5),u);x.position.set(g*(t.hw[0]+.8),3.5,0),l.add(x)}let d=new mt(new kt(t.hw[0]*2+2,1.4,.4),u);d.position.set(0,7,0),l.add(d);let f=new mt(new Ke(t.hw[0]*2,1.2),new xe({map:Nu("START / FINISH","#fff","#101420",80,"#ff2a6d"),side:He}));f.position.set(0,7,-.25),f.rotation.y=Math.PI,l.add(f),e.add(l),this.courseGroup=e,this.scene.add(e)}update(t){if(this.blinkers)for(let e of this.blinkers)e.visible=Math.sin(t*3)>0;if(this.poiMarkers)for(let e of this.poiMarkers)e.ring.material.opacity=.6+.3*Math.sin(t*4)}};var vn={chase:"\u5F8C\u65B9\u8996\u70B9",cockpit:"\u904B\u8EE2\u5E2D\u8996\u70B9",hood:"\u30DC\u30F3\u30CD\u30C3\u30C8\u8996\u70B9",gallery:"\u30AE\u30E3\u30E9\u30EA\u30FC\u8996\u70B9"},Fu=new L,Bo=class{constructor(t){this.camera=new Te(62,t,.08,2600),this.mirrorCam=new Te(50,3.2,.3,600),this.mode="chase",this.pos=new L,this.look=new L,this.init=!1,this.galleryIdx=-1,this.gallerySpots=[]}setGallerySpots(t){if(this.gallerySpots=[],!t)return;let e=1;for(let n=20;n<t.length;n+=110){let i=t.posAt(n,0),r=t.hw[i.i],o=t.posAt(n,e*(r+4));this.gallerySpots.push({x:o.x,z:o.z,y:3.5+Math.random()*3,s:n}),e=-e}}reset(){this.init=!1}anchor(t,e){let n=t.userData;if(!n.anchors){n.anchors={};let i=(r,o,a,c)=>{let l=new ge;return l.position.set(r,o,a),l.rotation.y=c,n.body.add(l),l};n.anchors.cockpit=i(-.37,n.belt+.34,n.wsBase-1.05,Math.PI),n.anchors.hood=i(0,n.belt+.32,n.wsBase+.25,Math.PI),n.anchors.mirror=i(0,n.H+.25,n.wsBase-.9,0)}return n.anchors[e]}update(t,e,n){let i=this.camera,r=e.userData;r.cockpit.visible=this.mode==="cockpit";for(let m of r.exterior)m.visible=this.mode!=="cockpit";let o=Math.sin(n.h),a=Math.cos(n.h);if(this.mode==="cockpit"||this.mode==="hood"){e.updateMatrixWorld(!0);let m=this.anchor(e,this.mode);m.getWorldPosition(i.position),m.getWorldQuaternion(i.quaternion),i.fov=this.mode==="cockpit"?70:64,i.updateProjectionMatrix(),this.init=!1;return}if(this.mode==="gallery"&&this.gallerySpots.length){let m=this.galleryIdx,p=1e9;for(let T=0;T<this.gallerySpots.length;T++){let A=this.gallerySpots[T],P=Math.hypot(A.x-n.x,A.z-n.z);P<p&&(p=P,m=T)}this.galleryIdx<0&&(this.galleryIdx=m);let y=this.gallerySpots[this.galleryIdx],v=Math.hypot(y.x-n.x,y.z-n.z);m!==this.galleryIdx&&p<v*.75&&(this.galleryIdx=m);let _=this.gallerySpots[this.galleryIdx];i.position.set(_.x,_.y,_.z),Fu.set(n.x,.8,n.z),i.lookAt(Fu);let R=Math.hypot(_.x-n.x,_.z-n.z);i.fov=Math.max(8,Math.min(60,2*Math.atan(7/Math.max(R,1))*180/Math.PI)),i.updateProjectionMatrix();return}let c=n.speed,l=5.8+Math.min(1.5,c*.02),h=n.x-o*l,u=n.z-a*l,d=2.1,f=n.x+o*3,g=n.z+a*3,x=1;if(!this.init)this.pos.set(h,d,u),this.look.set(f,x,g),this.init=!0;else{let m=1-Math.exp(-t*9);this.pos.x+=(h-this.pos.x)*m,this.pos.y+=(d-this.pos.y)*m,this.pos.z+=(u-this.pos.z)*m;let p=1-Math.exp(-t*14);this.look.x+=(f-this.look.x)*p,this.look.y+=(x-this.look.y)*p,this.look.z+=(g-this.look.z)*p}i.position.copy(this.pos),i.lookAt(this.look),i.fov=60+Math.min(10,c*.12),i.updateProjectionMatrix()}updateMirror(t){t.updateMatrixWorld(!0);let e=this.anchor(t,"mirror");e.getWorldPosition(this.mirrorCam.position),e.getWorldQuaternion(this.mirrorCam.quaternion)}cycle(t){let e=t.indexOf(this.mode);return this.mode=t[(e+1)%t.length],this.galleryIdx=-1,this.init=!1,this.mode}};var rr=[{id:"throttle",name:"\u30A2\u30AF\u30BB\u30EB",def:"KeyF"},{id:"brake",name:"\u30D6\u30EC\u30FC\u30AD",def:"KeyS"},{id:"shiftUp",name:"\u30B7\u30D5\u30C8\u30A2\u30C3\u30D7",def:"KeyE"},{id:"shiftDown",name:"\u30B7\u30D5\u30C8\u30C0\u30A6\u30F3",def:"KeyD"},{id:"left",name:"\u5DE6\u30CF\u30F3\u30C9\u30EB",def:"KeyJ"},{id:"right",name:"\u53F3\u30CF\u30F3\u30C9\u30EB",def:"KeyL"},{id:"mirror",name:"\u30D0\u30C3\u30AF\u30DF\u30E9\u30FC",def:"KeyK"},{id:"view",name:"\u8996\u70B9\u5207\u308A\u66FF\u3048",def:"KeyI"},{id:"flash",name:"\u30D1\u30C3\u30B7\u30F3\u30B0",def:"KeyH"},{id:"interact",name:"\u6C7A\u5B9A\uFF0F\u5165\u5E97",def:"Enter"},{id:"reset",name:"\u8ECA\u4E21\u30EA\u30BB\u30C3\u30C8",def:"KeyR"}],Ou="ibr.settings.v1",sr={keys:Object.fromEntries(rr.map(s=>[s.id,s.def])),bgm:.6,se:.7,transmission:"AT",abs:!0,tcs:!0,mirror:!0,defaultsRev:2,brightness:1};function zu(){try{let s=localStorage.getItem(Ou);if(s){let t=JSON.parse(s);(!t.defaultsRev||t.defaultsRev<2)&&(t.transmission="AT",t.tcs=!0,t.defaultsRev=2);let e={...sr.keys,...t.keys||{}};for(let n of rr)!(t.keys||{})[n.id]&&Object.entries(e).some(([i,r])=>i!==n.id&&r===e[n.id])&&(e[n.id]="");return{...sr,...t,keys:e}}}catch{}return structuredClone(sr)}function ds(s){try{localStorage.setItem(Ou,JSON.stringify(s))}catch{}}function Ho(s){return s?s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):{ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Space:"Space",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",Enter:"Enter",Semicolon:";",Comma:",",Period:".",Slash:"/"}[s]||s:"-"}var ko=class{constructor(t){this.settings=t,this.down=new Set,this.pressed=new Set,this.listeners=[],this.capture=null,window.addEventListener("keydown",e=>{if(this.capture){e.preventDefault();let n=this.capture;this.capture=null,n(e.code);return}this.down.has(e.code)||this.pressed.add(e.code),this.down.add(e.code);for(let n of this.listeners)n(e);["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(e.code)&&e.preventDefault()}),window.addEventListener("keyup",e=>{this.down.delete(e.code)}),window.addEventListener("blur",()=>this.down.clear())}onKey(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(e=>e!==t)}}key(t){return this.settings.keys[t]}held(t){return this.down.has(this.key(t))}hit(t){return this.pressed.has(this.key(t))}hitCode(t){return this.pressed.has(t)}endFrame(){this.pressed.clear()}};var Lx={town:"assets/audio/town_midnight_bliss.mp3",battle:"assets/audio/battle.mp3"},Vo=class{constructor(t){this.settings=t,this.ctx=null,this.tracks={},this.current=null,this.engines=[]}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.applyVolume();let e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;this.noise=n}if(this.ctx.state==="suspended"&&this.ctx.resume(),this.pending){let t=this.pending;this.pending=null,this.playBgm(t)}}applyVolume(){this.master&&(this.master.gain.value=this.settings.se);for(let t of Object.values(this.tracks))t.volume=this.current&&this.tracks[this.current]===t?this.settings.bgm:t.volume}playBgm(t){if(this.current===t)return;let e=this.current?this.tracks[this.current]:null;if(this.current=t,e&&this.fade(e,0,900,!0),!t)return;let n=this.tracks[t];n||(n=new Audio(Lx[t]),n.loop=!0,n.volume=0,this.tracks[t]=n),n.currentTime=0;let i=n.play();i&&i.catch&&i.catch(()=>{this.pending=t,this.current=null}),this.fade(n,this.settings.bgm,900,!1)}fade(t,e,n,i){let r=t.volume,o=performance.now(),a=()=>{let c=Math.min(1,(performance.now()-o)/n);t.volume=Math.max(0,Math.min(1,r+(e-r)*c)),c<1?requestAnimationFrame(a):i&&t.pause()};a()}setBgmVolume(t){this.settings.bgm=t,this.current&&this.tracks[this.current]&&(this.tracks[this.current].volume=t)}createEngine(t){if(!this.ctx)return null;let e=this.ctx,n=e.createGain();n.gain.value=0;let i=e.createStereoPanner?e.createStereoPanner():null,r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=800,r.Q.value=2;let o=e.createOscillator();o.type="sawtooth";let a=e.createOscillator();a.type="square";let c=e.createOscillator();c.type="triangle";let l=e.createGain();l.gain.value=.5;let h=e.createGain();h.gain.value=.22;let u=e.createGain();u.gain.value=.35,o.connect(l).connect(r),a.connect(h).connect(r),c.connect(u).connect(r),r.connect(n),i?(n.connect(i),i.connect(this.master)):n.connect(this.master);let d=e.createBufferSource();d.buffer=this.noise,d.loop=!0;let f=e.createBiquadFilter();f.type="bandpass",f.frequency.value=1100,f.Q.value=6;let g=e.createGain();g.gain.value=0,d.connect(f).connect(g).connect(this.master);let x=e.createOscillator();x.type="sine",x.frequency.value=3e3;let m=e.createGain();m.gain.value=0,x.connect(m).connect(this.master);let p=e.createBufferSource();p.buffer=this.noise,p.loop=!0;let y=e.createBiquadFilter();y.type="lowpass",y.frequency.value=500;let v=e.createGain();v.gain.value=0,p.connect(y).connect(v).connect(this.master);for(let R of[o,a,c,d,x,p])R.start();let _={spec:t,out:n,lp:r,o1:o,o2:a,o3:c,sqg:g,bp:f,tbg:m,tb:x,wg:v,pan:i,nodes:[o,a,c,d,x,p]};return this.engines.push(_),_}updateEngine(t,e,n=1,i=0){if(!t||!this.ctx)return;let r=this.ctx.currentTime,o=t.spec,a=e.rpm/60*(o.cylinders/2),c=e.input.throttle;t.o1.frequency.setTargetAtTime(a,r,.02),t.o2.frequency.setTargetAtTime(a*.5,r,.02),t.o3.frequency.setTargetAtTime(a*2,r,.02),t.lp.frequency.setTargetAtTime(500+c*2200+o.loud*1500+e.rpm*.15,r,.05),t.out.gain.setTargetAtTime(n*(.1+c*.16+o.loud*.08),r,.05);let l=Math.max(0,Math.min(1,(e.slip-1.05)*1.5))*Math.min(1,e.speed/5);t.sqg.gain.setTargetAtTime(n*l*.18,r,.05),t.bp.frequency.setTargetAtTime(900+Math.min(e.speed,40)*8,r,.1),t.tb.frequency.setTargetAtTime(2500+e.boost*4e3,r,.05),t.tbg.gain.setTargetAtTime(n*Math.min(.025,e.boost*.02),r,.05),t.wg.gain.setTargetAtTime(n*Math.min(.12,e.speed*e.speed*6e-5),r,.1),t.pan&&t.pan.pan.setTargetAtTime(i,r,.05)}destroyEngine(t){if(t){for(let e of t.nodes)try{e.stop()}catch{}try{t.out.disconnect(),t.sqg.disconnect(),t.tbg.disconnect(),t.wg.disconnect()}catch{}this.engines=this.engines.filter(e=>e!==t)}}destroyAllEngines(){for(let t of[...this.engines])this.destroyEngine(t)}beep(t=880,e=.15,n=.3){if(!this.ctx)return;let i=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.value=t,i.type="square",r.gain.value=n,r.gain.setTargetAtTime(0,this.ctx.currentTime+e*.7,.03),i.connect(r).connect(this.master),i.start(),i.stop(this.ctx.currentTime+e+.1)}};function z(s,t={},...e){let n=document.createElement(s);for(let[i,r]of Object.entries(t||{}))i==="class"?n.className=r:i==="style"&&typeof r=="object"?Object.assign(n.style,r):i.startsWith("on")&&typeof r=="function"?n.addEventListener(i.slice(2),r):i==="html"?n.innerHTML=r:r!==!1&&r!=null&&n.setAttribute(i,r);for(let i of e.flat())i==null||i===!1||n.appendChild(typeof i=="string"||typeof i=="number"?document.createTextNode(String(i)):i);return n}var Be=class{constructor(t,e,n={}){this.game=t,this.items=e,this.index=Math.max(0,e.findIndex(i=>!i.disabled)),this.onBack=n.onBack,this.root=z("div",{class:"menu "+(n.className||"")}),this.render(),this.off=t.input.onKey(i=>this.key(i))}render(){this.root.innerHTML="",this.items.forEach((t,e)=>{let n=z("button",{class:"menu-item"+(e===this.index?" sel":"")+(t.disabled?" disabled":""),onclick:()=>{t.disabled||(this.index=e,this.activate())},onmouseenter:()=>{t.disabled||(this.index=e,this.highlight())}},z("span",{class:"label"},t.label),t.sub?z("span",{class:"sub"},t.sub):null);this.root.appendChild(n)})}highlight(){[...this.root.children].forEach((t,e)=>t.classList.toggle("sel",e===this.index))}move(t){let e=this.items.length;for(let n=1;n<=e;n++){let i=(this.index+t*n+e*10)%e;if(!this.items[i].disabled){this.index=i;break}}this.highlight(),this.game.audio.beep(660,.04,.08)}activate(){let t=this.items[this.index];!t||t.disabled||(this.game.audio.beep(990,.06,.1),t.action&&t.action())}key(t){this.root.isConnected&&(t.code==="ArrowUp"||t.code==="ArrowLeft"?this.move(-1):t.code==="ArrowDown"||t.code==="ArrowRight"?this.move(1):t.code==="Enter"||t.code==="Space"?this.activate():(t.code==="Escape"||t.code==="Backspace")&&this.onBack&&(this.game.audio.beep(440,.05,.08),this.onBack()))}destroy(){this.off(),this.root.remove()}};function Ne(s,...t){return z("div",{class:"panel"},s?z("div",{class:"panel-title"},s):null,...t)}var Go=class{constructor(t){this.container=t,this.settings=zu(),this.renderer=new co({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Pe,this.renderer.toneMapping=dl,this.applyBrightness(),t.appendChild(this.renderer.domElement),this.ui=z("div",{class:"ui-root"}),t.appendChild(this.ui),this.overlay=z("div",{class:"fade-overlay"}),t.appendChild(this.overlay),this.input=new ko(this.settings),this.audio=new Vo(this.settings),this.world=new zo(this.renderer),this.rig=new Bo(window.innerWidth/window.innerHeight),this.mode=null,this.mirrorOn=!1,this.story=null,this.clock=performance.now(),this.t=0,window.addEventListener("resize",()=>this.resize());let e=()=>this.audio.unlock();window.addEventListener("keydown",e),window.addEventListener("pointerdown",e),requestAnimationFrame(()=>this.loop())}applyBrightness(){this.renderer.toneMappingExposure=1.4*(this.settings.brightness||1)}resize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.rig.camera.aspect=window.innerWidth/window.innerHeight,this.rig.camera.updateProjectionMatrix()}setMode(t){this.mode&&this.mode.exit&&this.mode.exit(),this.ui.innerHTML="",this.input.pressed.clear(),this.mirrorOn=!1,this.mode=t,t.enter&&t.enter()}async transition(t,e=350){this.overlay.classList.add("on"),await new Promise(n=>setTimeout(n,e)),await t(),await new Promise(n=>setTimeout(n,60)),this.overlay.classList.remove("on")}loop(){let t=performance.now(),e=Math.min(.05,(t-this.clock)/1e3);this.clock=t,this.t+=e;try{this.mode&&this.mode.update&&this.mode.update(e),this.world.update(this.t),this.render()}catch(n){console.error(n)}this.input.endFrame(),requestAnimationFrame(()=>this.loop())}debugStep(t,e=1/60){for(let n=0;n<t;n+=e)this.mode&&this.mode.update&&this.mode.update(e),this.input.endFrame()}render(){let t=this.renderer,e=window.innerWidth,n=window.innerHeight;if(t.setScissorTest(!1),t.setViewport(0,0,e,n),t.render(this.world.scene,this.rig.camera),this.mirrorOn&&this.mirrorModel){let i=Math.round(e*.3),r=Math.round(i/3.2),o=Math.round((e-i)/2),a=n-r-14;this.rig.updateMirror(this.mirrorModel),this.rig.mirrorCam.aspect=i/r,this.rig.mirrorCam.updateProjectionMatrix();let c=this.mirrorModel.userData.cockpit.visible;this.mirrorModel.userData.cockpit.visible=!1,t.setScissorTest(!0),t.setScissor(o,a,i,r),t.setViewport(o,a,i,r),t.render(this.world.scene,this.rig.mirrorCam),t.setScissorTest(!1),this.mirrorModel.userData.cockpit.visible=c}}};function Bu(s,t){let e=s.settings,n=z("div",{class:"screen settings"}),i=0,r=[],o=(d,f)=>rr.find(g=>g.id!==f&&e.keys[g.id]===d),a=()=>{n.innerHTML="",r.length=0;let d=z("div",{class:"key-list"});rr.forEach(p=>{let y=z("button",{class:"key-btn"},Ho(e.keys[p.id])),v=z("div",{class:"key-row"},z("span",{class:"key-name"},p.name),y);y.onclick=()=>l(p,y),r.push({row:v,act:()=>l(p,y)}),d.appendChild(v)});let f=(p,y,v,_)=>{let R=z("button",{class:"key-btn"},y()),T=z("div",{class:"key-row"},z("span",{class:"key-name"},p),R),A=()=>{v(_),R.textContent=y(),ds(e)};R.onclick=A,r.push({row:T,act:A}),d.appendChild(T)},g=(p,y)=>{let v=z("input",{type:"range",min:0,max:1,step:.05,value:e[y]});v.oninput=()=>{e[y]=parseFloat(v.value),y==="bgm"?s.audio.setBgmVolume(e.bgm):s.audio.applyVolume(),ds(e)};let _=z("div",{class:"key-row"},z("span",{class:"key-name"},p),v);r.push({row:_,act:()=>{},left:()=>{v.value=Math.max(0,e[y]-.05),v.oninput()},right:()=>{v.value=Math.min(1,e[y]+.05),v.oninput()}}),d.appendChild(_)};d.appendChild(z("div",{class:"key-sep"},"\u30C9\u30E9\u30A4\u30D3\u30F3\u30B0")),f("\u30C8\u30E9\u30F3\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",()=>e.transmission==="MT"?"MT\uFF08\u30DE\u30CB\u30E5\u30A2\u30EB\uFF09":"AT\uFF08\u30AA\u30FC\u30C8\u30DE\uFF09",()=>{e.transmission=e.transmission==="MT"?"AT":"MT"}),f("ABS",()=>e.abs?"ON":"OFF",()=>{e.abs=!e.abs}),f("\u30C8\u30E9\u30AF\u30B7\u30E7\u30F3\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB",()=>e.tcs?"ON":"OFF",()=>{e.tcs=!e.tcs}),d.appendChild(z("div",{class:"key-sep"},"\u753B\u9762"));{let p=z("span",{class:"key-val"},`${Math.round(e.brightness*100)}%`),y=z("input",{type:"range",min:.5,max:2,step:.05,value:e.brightness});y.oninput=()=>{e.brightness=parseFloat(y.value),p.textContent=`${Math.round(e.brightness*100)}%`,s.applyBrightness(),ds(e)};let v=z("div",{class:"key-row"},z("span",{class:"key-name"},"\u660E\u308B\u3055"),z("span",{},p," ",y));r.push({row:v,act:()=>{},left:()=>{y.value=Math.max(.5,e.brightness-.05),y.oninput()},right:()=>{y.value=Math.min(2,e.brightness+.05),y.oninput()}}),d.appendChild(v)}d.appendChild(z("div",{class:"key-sep"},"\u30B5\u30A6\u30F3\u30C9")),g("BGM\u97F3\u91CF","bgm"),g("\u52B9\u679C\u97F3\u30FB\u30A8\u30F3\u30B8\u30F3\u97F3\u91CF","se");let x=z("button",{class:"menu-item small"},"\u30AD\u30FC\u914D\u7F6E\u3092\u521D\u671F\u5316");x.onclick=()=>{e.keys={...sr.keys},ds(e),a()},r.push({row:x,act:()=>x.onclick()});let m=z("button",{class:"menu-item small"},"\u623B\u308B");m.onclick=()=>u(),r.push({row:m,act:()=>u()}),n.appendChild(Ne("COMMON SETTING",z("div",{class:"hint"},"\u9805\u76EE\u3092\u9078\u3093\u3067 Enter\uFF08\u307E\u305F\u306F\u30AF\u30EA\u30C3\u30AF\uFF09\u2192 \u5272\u308A\u5F53\u3066\u305F\u3044\u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002Esc\u3067\u623B\u308B"),d,z("div",{class:"row-btns"},x,m))),c()},c=()=>r.forEach((d,f)=>d.row.classList.toggle("sel",f===i)),l=(d,f)=>{f.textContent="\u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u2026",f.classList.add("wait"),s.input.capture=g=>{if(g==="Escape"){a();return}let x=o(g,d.id);x&&(e.keys[x.id]=e.keys[d.id]),e.keys[d.id]=g,ds(e),a()}},h=s.input.onKey(d=>{!n.isConnected||s.input.capture||(d.code==="ArrowDown"?(i=(i+1)%r.length,c()):d.code==="ArrowUp"?(i=(i-1+r.length)%r.length,c()):d.code==="ArrowLeft"?r[i].left?.():d.code==="ArrowRight"?r[i].right?.():d.code==="Enter"?setTimeout(()=>r[i].act(),0):d.code==="Escape"&&u())}),u=()=>{h(),s.input.capture=null,n.remove(),t&&t()};return a(),s.ui.appendChild(n),u}var pe={"86-GR":{id:"86-GR",name:"86-GR",ref:"\u30C8\u30E8\u30BF GR86 RZ (ZN8\u578B 6MT)",drive:"FR",mass:1270,frontWeight:.535,cgHeight:.46,length:4.265,width:1.775,height:1.31,wheelbase:2.575,trackF:1.52,trackR:1.55,tireRadius:.315,cd:.33,area:1.95,steerLock:.56,gears:[3.626,2.188,1.541,1.213,1,.767],reverse:3.437,final:4.1,brakeTorque:4200,brakeBias:.64,rollFront:.55,inertiaK:1,published:"235PS/7000rpm, 250N\xB7m/3700rpm, 1270kg",body:{style:"coupe",hood:.36,cabin:.42,roof:.28,tail:.22,wing:"duck"},stock:{engine:"eng_f4_24",boreup:null,muffler:"muf_stock",intercooler:null,turbo:null,tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"WRX-IMP":{id:"WRX-IMP",name:"WRX-IMP",ref:"\u30B9\u30D0\u30EB \u30A4\u30F3\u30D7\u30EC\u30C3\u30B5 WRX STI (GDB\u578B F\u578B)",drive:"AWD",awdFront:.41,mass:1430,frontWeight:.6,cgHeight:.5,length:4.465,width:1.74,height:1.425,wheelbase:2.54,trackF:1.485,trackR:1.48,tireRadius:.317,cd:.33,area:2.05,steerLock:.55,gears:[3.636,2.375,1.761,1.346,.971,.756],reverse:3.545,final:3.9,brakeTorque:4900,brakeBias:.66,rollFront:.56,inertiaK:1.05,published:"280PS/6400rpm, 422N\xB7m/4400rpm, 1430kg",body:{style:"sedan",hood:.36,cabin:.46,roof:.3,tail:.2,wing:"high",scoop:!0},stock:{engine:"eng_f4_20t",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_mid",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"RS-RS":{id:"RS-RS",name:"RS-RS",ref:"\u30DE\u30C4\u30C0 \u30ED\u30FC\u30C9\u30B9\u30BF\u30FC RS (ND5RC\u578B 2018\u5E74\u301C)",drive:"FR",mass:1020,frontWeight:.5,cgHeight:.44,length:3.915,width:1.735,height:1.235,wheelbase:2.31,trackF:1.495,trackR:1.505,tireRadius:.308,cd:.35,area:1.85,steerLock:.58,gears:[5.087,2.991,2.035,1.594,1.286,1],reverse:4.533,final:2.866,brakeTorque:3500,brakeBias:.62,rollFront:.54,inertiaK:.9,published:"132PS/7000rpm, 152N\xB7m/4500rpm, 1020kg",body:{style:"roadster",hood:.42,cabin:.3,roof:0,tail:.26,wing:"none"},stock:{engine:"eng_s4_15",boreup:null,muffler:"muf_stock",intercooler:null,turbo:null,tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"SWIFT-S":{id:"SWIFT-S",name:"SWIFT-S",ref:"\u30B9\u30BA\u30AD \u30B9\u30A4\u30D5\u30C8\u30B9\u30DD\u30FC\u30C4 (ZC33S\u578B 6MT)",drive:"FF",mass:970,frontWeight:.62,cgHeight:.52,length:3.89,width:1.735,height:1.5,wheelbase:2.45,trackF:1.51,trackR:1.515,tireRadius:.304,cd:.33,area:2.1,steerLock:.58,gears:[3.615,2.047,1.518,1.156,.918,.794],reverse:3.481,final:3.944,brakeTorque:3300,brakeBias:.7,rollFront:.6,inertiaK:.9,published:"140PS/5500rpm, 230N\xB7m/2500-3500rpm, 970kg",body:{style:"hatch",hood:.3,cabin:.55,roof:.42,tail:.1,wing:"roof"},stock:{engine:"eng_s4_14t",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_small",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"80-Supra":{id:"80-Supra",name:"80-Supra",ref:"\u30C8\u30E8\u30BF \u30B9\u30FC\u30D7\u30E9 RZ (JZA80\u578B 6MT)",drive:"FR",mass:1510,frontWeight:.53,cgHeight:.5,length:4.52,width:1.81,height:1.275,wheelbase:2.55,trackF:1.52,trackR:1.525,tireRadius:.318,cd:.31,area:2,steerLock:.55,gears:[3.827,2.36,1.685,1.312,1,.793],reverse:3.28,final:3.266,brakeTorque:5200,brakeBias:.64,rollFront:.55,inertiaK:1.1,published:"280PS/5600rpm, 451N\xB7m/3600rpm, 1510kg",body:{style:"gt",hood:.42,cabin:.36,roof:.27,tail:.22,wing:"loop"},stock:{engine:"eng_s6_30",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_seq",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}}},p_=Object.keys(pe),We={name:"\u9ED2\u7895\u30AB\u30B1\u30EB",car:"86-GR",color:14278115};var fs=[{id:"engine",name:"\u30A8\u30F3\u30B8\u30F3",required:!0},{id:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7",required:!1},{id:"muffler",name:"\u30DE\u30D5\u30E9\u30FC",required:!0},{id:"intercooler",name:"\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",required:!1},{id:"turbo",name:"\u30BF\u30FC\u30DC",required:!1},{id:"tire",name:"\u30BF\u30A4\u30E4",required:!0},{id:"suspension",name:"\u30B5\u30B9\u30DA\u30F3\u30B7\u30E7\u30F3",required:!0},{id:"brake",name:"\u30D6\u30EC\u30FC\u30AD",required:!0},{id:"transmission",name:"\u30C8\u30E9\u30F3\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",required:!0},{id:"aero",name:"\u30A8\u30A2\u30ED",required:!1}],or=Object.fromEntries(fs.map(s=>[s.id,s.name])),Zt=s=>s,ar=[Zt({id:"eng_f4_24",cat:"engine",name:"F4\u578B2400cc\uFF08\u6C34\u5E73\u5BFE\u5411\uFF09",rank:2,price:null,weight:0,desc:"86-GR\u7D14\u6B63\u3002\u4F4E\u91CD\u5FC3\u306E\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52NA\u3002235PS/7000rpm 250N\xB7m/3700rpm",layout:"\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52",displacement:2387,cylinders:4,idle:800,redline:7500,limiter:7600,inertia:.16,torque:[[800,150],[1500,175],[2500,212],[3e3,232],[3700,250],[4500,238],[5500,240],[6500,244],[7e3,236],[7500,214],[7800,190]]}),Zt({id:"eng_f4_20t",cat:"engine",name:"F4T\u578B2000cc\uFF08\u6C34\u5E73\u5BFE\u5411\u30FB\u904E\u7D66\u524D\u63D0\uFF09",rank:3,price:null,weight:8,desc:"WRX-IMP\u7D14\u6B63\u3002\u30BF\u30FC\u30DC\u524D\u63D0\u306E\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52\u3002\u7D14\u6B63\u30BF\u30FC\u30D3\u30F3\u3067280PS/422N\xB7m",layout:"\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52",displacement:1994,cylinders:4,idle:850,redline:8e3,limiter:8100,inertia:.17,torque:[[800,110],[1500,140],[2e3,160],[3e3,195],[4e3,222],[4400,228],[5e3,205],[5500,188],[6e3,178],[6400,175],[7e3,156],[8e3,126],[8300,110]]}),Zt({id:"eng_s4_15",cat:"engine",name:"S4\u578B1500cc\uFF08\u76F4\u5217\uFF09",rank:1,price:null,weight:-15,desc:"RS-RS\u7D14\u6B63\u3002\u8EFD\u91CF\u306A\u76F4\u52174\u6C17\u7B52NA\u3002132PS/7000rpm 152N\xB7m/4500rpm",layout:"\u76F4\u52174\u6C17\u7B52",displacement:1496,cylinders:4,idle:750,redline:7500,limiter:7600,inertia:.11,torque:[[750,100],[1500,118],[2e3,128],[3e3,140],[4500,152],[5500,148],[6500,140],[7e3,132],[7500,118],[7800,100]]}),Zt({id:"eng_s4_14t",cat:"engine",name:"S4T\u578B1400cc\uFF08\u76F4\u5217\u30FB\u904E\u7D66\u524D\u63D0\uFF09",rank:1,price:null,weight:-18,desc:"SWIFT-S\u7D14\u6B63\u3002\u5C0F\u6392\u6C17\u91CF\u76F4\u5674\u30BF\u30FC\u30DC\u524D\u63D0\u3002\u7D14\u6B63\u30BF\u30FC\u30D3\u30F3\u3067140PS/230N\xB7m",layout:"\u76F4\u52174\u6C17\u7B52",displacement:1371,cylinders:4,idle:750,redline:6200,limiter:6300,inertia:.1,torque:[[750,85],[1500,112],[2e3,128],[2500,137],[3500,137],[4500,129],[5500,118],[6200,106],[6500,95]]}),Zt({id:"eng_s6_30",cat:"engine",name:"S6T\u578B3000cc\uFF08\u76F4\u52176\u6C17\u7B52\uFF09",rank:4,price:null,weight:45,desc:"80-Supra\u7D14\u6B63\u3002\u9811\u4E08\u306A\u76F4\u52176\u6C17\u7B52\u3002\u7D14\u6B63\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u3067280PS/451N\xB7m",layout:"\u76F4\u52176\u6C17\u7B52",displacement:2997,cylinders:6,idle:700,redline:6800,limiter:6900,inertia:.24,torque:[[700,150],[1500,200],[2e3,220],[3e3,245],[3600,250],[4500,232],[5600,194],[6500,166],[7e3,148]]}),Zt({id:"eng_v6_30",cat:"engine",name:"V6\u578B3000cc\uFF08V\u578B\uFF09",rank:4,price:null,weight:30,desc:"\u9AD8\u56DE\u8EE2\u578BV6\u81EA\u7136\u5438\u6C17\u3002\u592A\u3044\u30C8\u30EB\u30AF\u3068\u4F38\u3073\u3002280PS/6800rpm 300N\xB7m/4800rpm",layout:"V\u578B6\u6C17\u7B52",displacement:2987,cylinders:6,idle:750,redline:7400,limiter:7500,inertia:.21,torque:[[750,180],[1500,215],[2500,260],[4e3,290],[4800,300],[6e3,295],[6800,289],[7400,258],[7700,225]]}),Zt({id:"eng_r2_13",cat:"engine",name:"R2\u578B1300cc\uFF08\u30ED\u30FC\u30BF\u30EA\u30FC\uFF09",rank:5,price:null,weight:-25,desc:"\u8D85\u8EFD\u91CF\u30FB\u8D85\u9AD8\u56DE\u8EE2\u30ED\u30FC\u30BF\u30EA\u30FC\u3002250PS/8500rpm 216N\xB7m/5500rpm",layout:"2\u30ED\u30FC\u30BF\u30FC",displacement:1308,cylinders:3,idle:900,redline:9e3,limiter:9200,inertia:.09,torque:[[900,110],[2e3,140],[3e3,168],[4500,205],[5500,216],[7e3,212],[8500,207],[9e3,192],[9400,170]]}),Zt({id:"bore_1",cat:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7\u30AD\u30C3\u30C8 Stage1",rank:1,price:12e4,weight:0,desc:"\u6392\u6C17\u91CF+3%\u76F8\u5F53\u3002\u5168\u57DF\u30C8\u30EB\u30AF+4%",torqueMul:1.04}),Zt({id:"bore_2",cat:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7\u30AD\u30C3\u30C8 Stage2",rank:3,price:null,weight:0,desc:"\u6392\u6C17\u91CF+6%\u76F8\u5F53\u3002\u5168\u57DF\u30C8\u30EB\u30AF+8%",torqueMul:1.08}),Zt({id:"bore_3",cat:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7\u30AD\u30C3\u30C8 Stage3",rank:4,price:null,weight:1,desc:"\u6392\u6C17\u91CF+10%\u76F8\u5F53\u3002\u5168\u57DF\u30C8\u30EB\u30AF+12%\u3001\u30EC\u30D6-200rpm",torqueMul:1.12,redlineDelta:-200}),Zt({id:"muf_stock",cat:"muffler",name:"\u7D14\u6B63\u30DE\u30D5\u30E9\u30FC",rank:1,price:1e4,weight:0,desc:"\u9759\u304B\u3067\u4F4E\u901F\u30C8\u30EB\u30AF\u91CD\u8996",low:1,high:1,loud:0}),Zt({id:"muf_sport",cat:"muffler",name:"\u30B9\u30DD\u30FC\u30C4\u30DE\u30D5\u30E9\u30FC",rank:2,price:8e4,weight:-4,desc:"\u9AD8\u56DE\u8EE2\u30C8\u30EB\u30AF+4%",low:1.01,high:1.04,loud:.3}),Zt({id:"muf_straight",cat:"muffler",name:"\u30B9\u30C8\u30EC\u30FC\u30C8\u30DE\u30D5\u30E9\u30FC",rank:3,price:null,weight:-7,desc:"\u4F4E\u901F-2% \u9AD8\u56DE\u8EE2+7%\u3002\u97F3\u91CF\u5927",low:.98,high:1.07,loud:.7}),Zt({id:"ic_stock",cat:"intercooler",name:"\u7D14\u6B63\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",rank:1,price:3e4,weight:0,desc:"\u904E\u7D66\u52B9\u738785%\uFF08\u672A\u88C5\u7740\u664270%\uFF09",eff:.85}),Zt({id:"ic_large",cat:"intercooler",name:"\u5927\u5BB9\u91CF\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",rank:2,price:14e4,weight:3,desc:"\u904E\u7D66\u52B9\u738793%",eff:.93}),Zt({id:"ic_front",cat:"intercooler",name:"\u524D\u7F6E\u304D\u5927\u5BB9\u91CF\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",rank:4,price:null,weight:6,desc:"\u904E\u7D66\u52B9\u7387100%",eff:1}),Zt({id:"tb_small",cat:"turbo",name:"\u30B7\u30F3\u30B0\u30EB\u30BF\u30FC\u30D3\u30F3\uFF08\u5C0F\uFF09",rank:2,price:22e4,weight:10,desc:"\u30EC\u30B9\u30DD\u30F3\u30B9\u91CD\u8996\u3002\u4F4E\u56DE\u8EE2\u304B\u3089\u904E\u7D66",boost:.8,spool:[1500,2500],fade:[4e3,.35],lag:.25}),Zt({id:"tb_mid",cat:"turbo",name:"\u30B7\u30F3\u30B0\u30EB\u30BF\u30FC\u30D3\u30F3\uFF08\u4E2D\uFF09",rank:3,price:null,weight:12,desc:"\u30D0\u30E9\u30F3\u30B9\u578B\u3002\u4E2D\u56DE\u8EE2\u304B\u3089\u529B\u5F37\u304F\u904E\u7D66",boost:1,spool:[2500,4e3],fade:[5500,.25],lag:.5}),Zt({id:"tb_large",cat:"turbo",name:"\u30B7\u30F3\u30B0\u30EB\u30BF\u30FC\u30D3\u30F3\uFF08\u5927\uFF09",rank:4,price:null,weight:15,desc:"\u30C9\u30C3\u30AB\u30F3\u30BF\u30FC\u30DC\u3002\u9AD8\u56DE\u8EE2\u3067\u7206\u767A\u7684\u30D1\u30EF\u30FC",boost:1.4,spool:[3600,5300],fade:[7e3,.15],lag:.9}),Zt({id:"tb_seq",cat:"turbo",name:"\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC",rank:4,price:null,weight:20,desc:"2\u57FA\u3092\u5207\u66FF\u3048\u3002\u4F4E\u56DE\u8EE2\u304B\u3089\u9AD8\u56DE\u8EE2\u307E\u3067\u9014\u5207\u308C\u306A\u3044",boost:.95,spool:[1800,3200],fade:[5600,.15],lag:.3}),Zt({id:"tb_twin",cat:"turbo",name:"\u30D1\u30E9\u30EC\u30EB\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC",rank:4,price:null,weight:18,desc:"\u9AD8\u904E\u7D66\u5727\u306E\u30C4\u30A4\u30F3\u3002\u4E2D\u9AD8\u56DE\u8EE2\u578B",boost:1.15,spool:[2800,4300],fade:[6500,.15],lag:.55}),Zt({id:"tb_sc",cat:"turbo",name:"\u30B9\u30FC\u30D1\u30FC\u30C1\u30E3\u30FC\u30B8\u30E3\u30FC",rank:3,price:null,weight:12,desc:"\u6A5F\u68B0\u5F0F\u904E\u7D66\u3002\u30E9\u30B0\u7121\u3057\u3067\u30EA\u30CB\u30A2",boost:.6,spool:[1e3,3e3],fade:[9e3,0],lag:.04}),Zt({id:"tire_comfort",cat:"tire",name:"\u30B3\u30F3\u30D5\u30A9\u30FC\u30C8\u30BF\u30A4\u30E4",rank:1,price:4e4,weight:0,desc:"\u30B0\u30EA\u30C3\u30D70.95",mu:.95,peakAngle:.15,peakRatio:.12}),Zt({id:"tire_street",cat:"tire",name:"\u30B9\u30C8\u30EA\u30FC\u30C8\u30B9\u30DD\u30FC\u30C4\u30BF\u30A4\u30E4",rank:1,price:8e4,weight:0,desc:"\u30B0\u30EA\u30C3\u30D71.02\uFF08\u591A\u304F\u306E\u8ECA\u306E\u7D14\u6B63\uFF09",mu:1.02,peakAngle:.13,peakRatio:.11}),Zt({id:"tire_high",cat:"tire",name:"\u30CF\u30A4\u30B0\u30EA\u30C3\u30D7\u30BF\u30A4\u30E4",rank:2,price:16e4,weight:0,desc:"\u30B0\u30EA\u30C3\u30D71.12",mu:1.12,peakAngle:.115,peakRatio:.1}),Zt({id:"tire_s",cat:"tire",name:"S\u30BF\u30A4\u30E4\uFF08\u30BB\u30DF\u30B9\u30EA\u30C3\u30AF\uFF09",rank:4,price:null,weight:-2,desc:"\u30B0\u30EA\u30C3\u30D71.22\u3002\u9650\u754C\u304C\u30B7\u30D3\u30A2",mu:1.22,peakAngle:.1,peakRatio:.09}),Zt({id:"sus_stock",cat:"suspension",name:"\u7D14\u6B63\u30B5\u30B9\u30DA\u30F3\u30B7\u30E7\u30F3",rank:1,price:3e4,weight:0,desc:"\u4E57\u308A\u5FC3\u5730\u91CD\u8996",grip:1,cgDrop:0,tau:.12,rollFront:0}),Zt({id:"sus_street",cat:"suspension",name:"\u30B9\u30C8\u30EA\u30FC\u30C8\u8ECA\u9AD8\u8ABF",rank:2,price:15e4,weight:-2,desc:"\u8ECA\u9AD8-20mm\u3002\u30B0\u30EA\u30C3\u30D7+3%\u3001\u5FDC\u7B54\u5411\u4E0A",grip:1.03,cgDrop:.02,tau:.085,rollFront:-.02}),Zt({id:"sus_circuit",cat:"suspension",name:"\u30B5\u30FC\u30AD\u30C3\u30C8\u8ECA\u9AD8\u8ABF",rank:4,price:null,weight:-3,desc:"\u8ECA\u9AD8-35mm\u3002\u30B0\u30EA\u30C3\u30D7+6%\u3001\u92ED\u3044\u5FDC\u7B54",grip:1.06,cgDrop:.035,tau:.06,rollFront:-.04}),Zt({id:"brk_stock",cat:"brake",name:"\u7D14\u6B63\u30D6\u30EC\u30FC\u30AD",rank:1,price:2e4,weight:0,desc:"\u5236\u52D5\u529B100%",torque:1}),Zt({id:"brk_pad",cat:"brake",name:"\u30B9\u30DD\u30FC\u30C4\u30D1\u30C3\u30C9",rank:1,price:5e4,weight:0,desc:"\u5236\u52D5\u529B112%",torque:1.12}),Zt({id:"brk_big",cat:"brake",name:"\u30D3\u30C3\u30B0\u30AD\u30E3\u30EA\u30D1\u30FC\u30AD\u30C3\u30C8",rank:4,price:null,weight:3,desc:"\u5236\u52D5\u529B128%",torque:1.28}),Zt({id:"tm_stock",cat:"transmission",name:"\u7D14\u6B63\u30C8\u30E9\u30F3\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",rank:1,price:3e4,weight:0,desc:"\u8ECA\u7A2E\u7D14\u6B63\u30AE\u30A2\u6BD4",close:1,final:1,shift:.18}),Zt({id:"tm_lowfinal",cat:"transmission",name:"\u30ED\u30FC\u30D5\u30A1\u30A4\u30CA\u30EB\u30AE\u30A2",rank:2,price:9e4,weight:0,desc:"\u30D5\u30A1\u30A4\u30CA\u30EB\xD71.12\u3002\u52A0\u901F\u91CD\u8996",close:1,final:1.12,shift:.18}),Zt({id:"tm_highgear",cat:"transmission",name:"\u30CF\u30A4\u30AE\u30A2\u30FC\u30C9\u30D5\u30A1\u30A4\u30CA\u30EB",rank:2,price:9e4,weight:0,desc:"\u30D5\u30A1\u30A4\u30CA\u30EB\xD70.90\u3002\u6700\u9AD8\u901F\u91CD\u8996",close:1,final:.9,shift:.18}),Zt({id:"tm_close",cat:"transmission",name:"\u30AF\u30ED\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",rank:4,price:null,weight:2,desc:"\u30AE\u30A2\u9593\u3092\u8A70\u3081\u3001\u30B7\u30D5\u30C8\u3082\u901F\u3044",close:.78,final:1.05,shift:.11}),Zt({id:"aero_lip",cat:"aero",name:"\u30D5\u30ED\u30F3\u30C8\u30EA\u30C3\u30D7\u30B9\u30DD\u30A4\u30E9\u30FC",rank:1,price:6e4,weight:2,desc:"\u30D5\u30ED\u30F3\u30C8\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9\u5C0F",clF:.1,clR:0,cd:.005}),Zt({id:"aero_wing",cat:"aero",name:"GT\u30A6\u30A4\u30F3\u30B0",rank:3,price:null,weight:5,desc:"\u30EA\u30A2\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9\u5927\u3002\u7A7A\u6C17\u62B5\u6297\u5897",clF:0,clR:.38,cd:.03}),Zt({id:"aero_full",cat:"aero",name:"\u30D5\u30EB\u30A8\u30A2\u30ED\u30AD\u30C3\u30C8",rank:4,price:null,weight:8,desc:"\u524D\u5F8C\u30D0\u30E9\u30F3\u30B9\u306E\u53D6\u308C\u305F\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9",clF:.2,clR:.34,cd:.02})],Xe=Object.fromEntries(ar.map(s=>[s.id,s]));var cr=s=>"\u2605".repeat(s)+"\u2606".repeat(5-s);var Dl="ibr.save.v1",ku="ibr.records.v1";function Ul(){let s={...pe[We.car].stock},t={};for(let e of Object.values(s))e&&(t[e]=(t[e]||0)+1);return{version:1,money:3e5,wins:0,losses:0,owned:t,garage:[{carId:We.car,color:We.color,equipped:s}],active:0,defeated:{},pos:null,playtime:0,savedAt:null}}function Nl(){try{return!!localStorage.getItem(Dl)}catch{return!1}}function Fl(){try{let s=localStorage.getItem(Dl);return s?JSON.parse(s):null}catch{return null}}function Hu(s){s.savedAt=new Date().toISOString();try{return localStorage.setItem(Dl,JSON.stringify(s)),!0}catch{return!1}}function lr(s,t){let e=0;for(let n of s.garage)for(let i of fs)n.equipped[i.id]===t&&e++;return(s.owned[t]||0)-e}function Wo(s,t,e=1){s.owned[t]=(s.owned[t]||0)+e}function ps(s){return s.garage[s.active]}function ms(){try{return JSON.parse(localStorage.getItem(ku)||"{}")}catch{return{}}}function Vu(s,t){let e=ms(),n=e[s]||[];n.push(t),n.sort((r,o)=>r.best-o.best);let i=n.splice(20);e[s]=n;try{localStorage.setItem(ku,JSON.stringify(e))}catch{}for(let r of i)Dx(r.id);return n.indexOf(t)}var Ll=null;function Ol(){return Ll||(Ll=new Promise((s,t)=>{if(!window.indexedDB){t(new Error("no idb"));return}let e=indexedDB.open("ibr-replays",1);e.onupgradeneeded=()=>e.result.createObjectStore("replays"),e.onsuccess=()=>s(e.result),e.onerror=()=>t(e.error)})),Ll}async function Gu(s,t){try{let e=await Ol();return await new Promise((n,i)=>{let r=e.transaction("replays","readwrite");r.objectStore("replays").put(t,s),r.oncomplete=n,r.onerror=()=>i(r.error)}),!0}catch{return!1}}async function Wu(s){try{let t=await Ol();return await new Promise((e,n)=>{let i=t.transaction("replays").objectStore("replays").get(s);i.onsuccess=()=>e(i.result||null),i.onerror=()=>n(i.error)})}catch{return null}}async function Dx(s){try{(await Ol()).transaction("replays","readwrite").objectStore("replays").delete(s)}catch{}}function se(s){if(s==null||!isFinite(s))return"--:--.---";let t=Math.floor(s/60),e=s-t*60;return`${t}:${e.toFixed(3).padStart(6,"0")}`}function hn(s){return"\xA5"+Math.round(s).toLocaleString("ja-JP")}function Xu(s){return Math.sin(1.4*Math.atan(2.08*s))}var Xo=class{constructor(t,e={}){this.setSpec(t),this.x=0,this.z=0,this.h=0,this.vu=0,this.vv=0,this.w=0,this.steer=0,this.wF=0,this.wR=0,this.rpm=t.idle,this.gear=1,this.shiftTimer=0,this.boost=0,this.axF=0,this.ayF=0,this.axAcc=0,this.ayAcc=0,this.spinF=0,this.spinR=0,this.pitch=0,this.roll=0,this.slip=0,this.slipLong=0,this.input={throttle:0,brake:0,steer:0},this.auto=!!e.auto,this.abs=e.abs!==!1,this.tcs=!!e.tcs,this.limiterHit=0,this.wheelLoads=[0,0,0,0],this.wheelSlip=[0,0,0,0],this.reverseHold=0,this.offRoad=0}setSpec(t){this.spec=t,this.m=t.mass,this.L=t.wheelbase,this.b=this.L*t.frontWeight,this.a=this.L-this.b,this.Iz=t.mass*(t.car.length**2+t.car.width**2)/12*.95,this.Iw=1.1*t.car.inertiaK,this.wheels=[{pu:this.a,pv:-t.trackF/2,front:!0},{pu:this.a,pv:t.trackF/2,front:!0},{pu:-this.b,pv:-t.trackR/2,front:!1},{pu:-this.b,pv:t.trackR/2,front:!1}]}place(t,e,n,i=0){this.x=t,this.z=e,this.h=n,this.vu=i,this.vv=0,this.w=0;let r=this.spec.tireRadius;this.wF=this.wR=i/r,this.gear=i>1?this.bestGear(i):1,this.rpm=Math.max(this.spec.idle,this.wheelRpm()),this.shiftTimer=0}get speed(){return Math.hypot(this.vu,this.vv)}get kmh(){return this.vu*3.6}fwd(){return[Math.sin(this.h),Math.cos(this.h)]}right(){return[-Math.cos(this.h),Math.sin(this.h)]}ratio(t=this.gear){let e=this.spec;return t>0?e.gears[t-1]*e.final:t<0?-e.reverse*e.final:0}drivenOmega(){let t=this.spec.drive;return t==="FF"?this.wF:t==="FR"?this.wR:(this.wF+this.wR)/2}wheelRpm(t=this.gear){return Math.abs(this.drivenOmega()*this.ratio(t)*60/(2*Math.PI))}bestGear(t){let e=this.spec;for(let n=1;n<=e.gears.length;n++)if(t/e.tireRadius*e.gears[n-1]*e.final*60/(2*Math.PI)<e.redline*.75)return n;return e.gears.length}shiftUp(){if(this.gear<this.spec.gears.length){if(this.gear===-1||this.gear===0){this.gear++,this.shiftTimer=.08;return}this.gear++,this.shiftTimer=this.spec.shiftTime}}shiftDown(){this.gear>1?(this.gear--,this.shiftTimer=this.spec.shiftTime):this.gear===1?this.gear=0:this.gear===0&&this.speed<2.5&&(this.gear=-1,this.shiftTimer=.1)}autoShift(t){let e=this.spec,n=this.input;if(this.speed<1&&(n.brake>.5&&n.throttle<.05?(this.reverseHold+=t,this.reverseHold>.45&&this.gear!==-1&&(this.gear=-1)):this.reverseHold=0,n.throttle>.1&&this.gear<=0&&this.vu>-.5&&(this.gear=1)),this.shiftCool=Math.max(0,(this.shiftCool||0)-t),this.gear<1||this.shiftTimer>0)return;let i=this.wheelRpm(),r=Math.min(i,Math.abs(this.vu/e.tireRadius*this.ratio()*60/(2*Math.PI))*1.12);if(i>e.redline-120&&r>e.redline*.8&&this.gear<e.gears.length){this.shiftUp(),this.shiftCool=1;return}if(this.gear>1&&this.shiftCool<=0){let o=r*e.gears[this.gear-2]/e.gears[this.gear-1],a=n.brake>.2?.72:.5;r<e.redline*a&&o<e.redline-700&&this.shiftDown()}}effectiveInputs(){let{throttle:t,brake:e}=this.input;if(this.auto&&this.gear===-1){let n=t;t=e,e=n}return{throttle:t,brake:e}}step(t){let e=this.spec,n=e.tireRadius;this.auto&&this.autoShift(t);let{throttle:i,brake:r}=this.effectiveInputs();this.shiftTimer>0&&(this.shiftTimer-=t);let o=this.shiftTimer>0,a=this.speed,c=this.input.steer,l=Math.atan2(this.vv,Math.max(Math.abs(this.vu),2)),h=Math.min(e.steerLock,this.L*e.mu*9.81/Math.max(a*a,1)+e.peakAngle*1.25);h=Math.max(h,.06);let u=c*h;c!==0&&Math.sign(c)===Math.sign(l)&&(u=c*Math.min(e.steerLock,h+Math.abs(l)*1.1));let d=(c===0?3.2:2.4)*t;this.steer+=Math.max(-d,Math.min(d,u-this.steer));let f=this.steer,g=Math.cos(f),x=Math.sin(f),m=this.vu*this.vu,p=.5*1.2*m,y=p*e.area*e.clF,v=p*e.area*e.clR,_=this.m*9.81,R=e.cgHeight,T=this.m*this.axF*R/this.L,A=this.m*this.ayF*R,P=_*this.b/this.L-T+y,S=_*this.a/this.L+T+v,M=A*e.rollFront/e.trackF,I=A*(1-e.rollFront)/e.trackR,F=this.wheelLoads;F[0]=Math.max(0,P/2+M),F[1]=Math.max(0,P/2-M),F[2]=Math.max(0,S/2+I),F[3]=Math.max(0,S/2-I);let O=_/4,B=this.ratio(),V=B!==0&&!o,H,tt=this.wheelRpm(),q=!1;if(V){let ot=e.idle*1.4+i*(e.redline*.5-e.idle);tt<ot&&Math.abs(this.gear)===1?(q=!0,H=this.rpm+(ot-this.rpm)*Math.min(1,t*12)):tt<e.idle*1.2?(q=!0,H=this.rpm+(e.idle*1.2-this.rpm)*Math.min(1,t*12)):H=tt}else{let ot=e.idle+i*(e.limiter-e.idle),Ot=ot>this.rpm?8:3;H=this.rpm+(ot-this.rpm)*Math.min(1,t*Ot)}let rt=e.boostTarget(H)*i,gt=rt>this.boost?Math.max(.02,e.turboLag):.12;this.boost+=(rt-this.boost)*Math.min(1,t/gt);let _t=i;H>=e.limiter&&(_t=0,this.limiterHit=.08),this.limiterHit>0&&(this.limiterHit-=t,_t=0),this.tcs&&this.slipLong>e.peakRatio*1.3&&(_t*=.3);let Bt=e.fullTorque(H,this.boost)*_t,St=e.maxTorque*(.03+.12*(H/e.redline))*(1-_t),W=Bt-St;H<=e.idle*1.02&&W<0&&(W=0),this.rpm=Math.max(e.idle*.9,Math.min(e.limiter+50,H));let Q=0;V&&(Q=W*B*.92);let ht=e.engineInertia*B*B*(V&&!q?1:0),et=0,Tt=0,Rt=this.Iw*2,Lt=this.Iw*2;e.drive==="FF"?(et=Q,Rt+=ht):e.drive==="FR"?(Tt=Q,Lt+=ht):(et=Q*e.awdFront,Tt=Q*(1-e.awdFront),Rt+=ht*e.awdFront,Lt+=ht*(1-e.awdFront));let Ht=e.brakeTorque*r*e.brakeBias,J=e.brakeTorque*r*(1-e.brakeBias),it=0,C=0,wt=0,nt=0,Mt=0,ct=0,Ut=0,vt=0,E=0,b=e.peakRatio,k=e.peakAngle;for(let ot=0;ot<4;ot++){let Ot=this.wheels[ot],Nt=this.vu-this.w*Ot.pv,Kt=this.vv+this.w*Ot.pu,D,ut;Ot.front?(D=Nt*g+Kt*x,ut=-Nt*x+Kt*g):(D=Nt,ut=Kt);let Y=Ot.front?this.wF:this.wR,K=Math.max(Math.abs(D),4),pt=(Y*n-D)/K,xt=Math.atan2(ut,Math.max(Math.abs(D),1.5)),Vt=F[ot],ce=e.mu*Math.max(.6,1-.08*(Vt/O-1))*(this.offRoad?.7:1),ye=pt/b,Jt=xt/k,Me=Math.hypot(ye,Jt),Re=0,ni=0,ii=0;if(Me>1e-6){let bs=ce*Vt*Xu(Me);Re=bs*ye/Me,ni=-bs*Jt/Me;let Ss=(pt+.01)/b,si=Math.hypot(Ss,Jt),hr=ce*Vt*Xu(si)*Ss/si;ii=Math.max(0,(hr-Re)/.01)}else ii=ce*Vt*2.08*1.4/b;this.wheelSlip[ot]=Me,Me>vt&&(vt=Me),Math.abs(pt)>E&&(E=Math.abs(pt));let Je,zn;Ot.front?(Je=Re*g-ni*x,zn=Re*x+ni*g,nt+=Re,ct+=ii*n/K):(Je=Re,zn=ni,Mt+=Re,Ut+=ii*n/K),it+=Je,C+=zn,wt+=Ot.pu*zn-Ot.pv*Je}if(this.slip=vt,this.slipLong=E,this.abs&&r>0){let ot=this.wF*n-this.vu,Ot=this.wR*n-this.vu,Nt=-b*1.1*Math.max(Math.abs(this.vu),4);ot<Nt&&(Ht*=.35),Ot<Nt&&(J*=.35)}let $=(ot,Ot,Nt,Kt,D,ut)=>{let Y=ot+t*(Ot-n*Nt)/(D+t*n*Kt),K=ut*t/(D+t*n*Kt);return Math.abs(Y)<=K?Y=0:Y-=Math.sign(Y)*K,Y};if(e.drive==="AWD"&&V&&!q){let ot=Rt+Lt,Ot=(this.wF+this.wR)/2,Nt=$(Ot,Q,nt+Mt,ct+Ut,ot,Ht+J);this.wF=this.wR=Nt}else this.wF=$(this.wF,et,nt,ct,Rt,Ht),this.wR=$(this.wR,Tt,Mt,Ut,Lt,J);let j=.5*1.2*e.cd*e.area*a*a;a>.01&&(it-=j*this.vu/a,C-=j*this.vv/a);let Z=.011*_+(this.offRoad?.08*_:0);Math.abs(this.vu)>.05&&(it-=Math.sign(this.vu)*Math.min(Z,Math.abs(this.vu)*this.m/t*.5));let At=it/this.m,dt=C/this.m;if(this.vu+=(At+this.w*this.vv)*t,this.vv+=(dt-this.w*this.vu)*t,this.w+=wt/this.Iz*t,a<1.2&&i<.05&&(r>.05||a<.25)){let ot=Math.exp(-t*(r>.05?10:4));this.vu*=ot,this.vv*=ot,this.w*=ot,r>.05&&(this.wF*=ot,this.wR*=ot)}a<3&&(this.vv*=Math.exp(-t*2));let bt=e.loadTau;this.axF+=(At-this.axF)*Math.min(1,t/bt),this.ayF+=(dt-this.ayF)*Math.min(1,t/bt);let $t=Math.sin(this.h),st=Math.cos(this.h),Et=-st,Ft=$t;this.x+=(this.vu*$t+this.vv*Et)*t,this.z+=(this.vu*st+this.vv*Ft)*t,this.h-=this.w*t,this.spinF+=this.wF*t,this.spinR+=this.wR*t;let zt=.012*(e.loadTau/.12);this.pitch+=(-this.axF*zt*.6-this.pitch)*Math.min(1,t*8),this.roll+=(this.ayF*zt-this.roll)*Math.min(1,t*8)}worldVel(){let t=Math.sin(this.h),e=Math.cos(this.h);return[this.vu*t-this.vv*e,this.vu*e+this.vv*t]}setWorldVel(t,e){let n=Math.sin(this.h),i=Math.cos(this.h);this.vu=t*n+e*i,this.vv=-t*i+e*n}wallImpulse(t,e,n,i,r,o=.15,a=.35){let c=t-this.x,l=e-this.z,[h,u]=this.worldVel(),d=h+this.w*-l,f=u+this.w*c,g=d*n+f*i;if(this.x+=n*r,this.z+=i*r,g>=0)return 0;let x=c*i-l*n,m=-(1+o)*g/(1/this.m+x*x/this.Iz);h+=m*n/this.m,u+=m*i/this.m,this.w+=m*x/this.Iz;let p=-i,y=n,v=d*p+f*y,_=c*y-l*p,R=-v/(1/this.m+_*_/this.Iz);R=Math.max(-a*m,Math.min(a*m,R)),h+=R*p/this.m,u+=R*y/this.m,this.w+=R*_/this.Iz,this.setWorldVel(h,u);let T=this.spec.tireRadius;return this.wF=this.wF*.7+this.vu/T*.3,this.spec.drive!=="FR"&&(this.wR=this.wR*.7+this.vu/T*.3),m}corners(t=0){let e=this.spec.car,n=e.length/2+t,i=e.width/2+t,r=Math.sin(this.h),o=Math.cos(this.h),a=-o,c=r,l=[];for(let[h,u]of[[n,-i],[n,i],[-n,-i],[-n,i],[0,-i],[0,i]])l.push([this.x+r*h+a*u,this.z+o*h+c*u]);return l}};function Yu(s,t){let e=qu(s),n=qu(t),i=0;for(let r of e)for(let o of n){let a=r[0]-o[0],c=r[1]-o[1],l=Math.hypot(a,c),h=r[2]+o[2];if(l>=h||l<1e-4)continue;let u=a/l,d=c/l,f=h-l,g=o[0]+u*o[2],x=o[1]+d*o[2];i+=Ux(s,t,g,x,u,d,f)}return i}function qu(s){let t=s.spec.car,e=t.width/2,n=t.length/2-e,i=Math.sin(s.h),r=Math.cos(s.h);return[[s.x+i*n,s.z+r*n,e],[s.x,s.z,e],[s.x-i*n,s.z-r*n,e]]}function Ux(s,t,e,n,i,r,o){let a=s.m,c=t.m,l=a+c;s.x+=i*o*(c/l),s.z+=r*o*(c/l),t.x-=i*o*(a/l),t.z-=r*o*(a/l);let[h,u]=s.worldVel(),[d,f]=t.worldVel(),g=e-s.x,x=n-s.z,m=e-t.x,p=n-t.z,y=[h-s.w*x,u+s.w*g],v=[d-t.w*p,f+t.w*m],_=(y[0]-v[0])*i+(y[1]-v[1])*r;if(_>=0)return 0;let R=g*r-x*i,T=m*r-p*i,P=-(1+.2)*_/(1/a+1/c+R*R/s.Iz+T*T/t.Iz);return h+=P*i/a,u+=P*r/a,s.w+=P*R/s.Iz,d-=P*i/c,f-=P*r/c,t.w-=P*T/t.Iz,s.setWorldVel(h,u),t.setWorldVel(d,f),P}var Nx=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*(t-n)/(r-n)}return s[s.length-1][1]},$u=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)};function Fn(s,t){let e=pe[s],n=F=>t[F]?Xe[t[F]]:null,i=n("engine")||Xe[e.stock.engine],r=n("boreup"),o=n("muffler")||Xe.muf_stock,a=n("intercooler"),c=n("turbo"),l=n("tire")||Xe.tire_street,h=n("suspension")||Xe.sus_stock,u=n("brake")||Xe.brk_stock,d=n("transmission")||Xe.tm_stock,f=n("aero"),g=0;for(let F of[i,r,o,a,c,l,h,u,d,f])F&&(g+=F.weight||0);for(let F of Object.values(e.stock))F&&(g-=Xe[F].weight||0);let x=i.redline+(r?.redlineDelta||0),m=i.limiter+(r?.redlineDelta||0),p=c?a?a.eff:.7:0,y=e.gears[e.gears.length-1],v=e.gears.map(F=>y*Math.pow(F/y,d.close)),_=e.final*d.final,R=e.mass+g,T=e.frontWeight+(i.weight-(Xe[e.stock.engine].weight||0))*6e-4,A={car:e,carId:s,equipped:{...t},engine:i,turbo:c,tire:l,sus:h,brakePart:u,trans:d,aero:f,muffler:o,mass:R,frontWeight:Math.min(.66,Math.max(.42,T)),cgHeight:e.cgHeight-h.cgDrop,wheelbase:e.wheelbase,trackF:e.trackF,trackR:e.trackR,tireRadius:e.tireRadius,drive:e.drive,awdFront:e.awdFront||0,gears:v,reverse:e.reverse,final:_,shiftTime:d.shift,idle:i.idle,redline:x,limiter:m,engineInertia:i.inertia,cylinders:i.cylinders,loud:o.loud,mu:l.mu*h.grip,peakAngle:l.peakAngle,peakRatio:l.peakRatio,loadTau:h.tau,rollFront:e.rollFront+h.rollFront,brakeTorque:e.brakeTorque*u.torque,brakeBias:e.brakeBias,cd:e.cd+(f?.cd||0),area:e.area,clF:f?.clF||0,clR:f?.clR||0,steerLock:e.steerLock,boostMax:c?c.boost:0,turboLag:c?c.lag:0,icEff:p,_bore:r?r.torqueMul:1,_mufLow:o.low,_mufHigh:o.high};A.boostTarget=F=>{if(!c)return 0;let O=c.boost*$u(c.spool[0],c.spool[1],F);return F>c.fade[0]&&(O*=Math.max(.3,1-c.fade[1]*(F-c.fade[0])/2e3)),O},A.naTorque=F=>{let O=Nx(i.torque,F)*A._bore,B=$u(x*.45,x*.75,F);return O*(A._mufLow*(1-B)+A._mufHigh*B)},A.fullTorque=(F,O)=>A.naTorque(F)*(1+O*p);let P=0,S=0,M=0,I=0;for(let F=1e3;F<=x;F+=50){let O=A.fullTorque(F,A.boostTarget(F)),B=O*F*2*Math.PI/60/1e3;O>P&&(P=O,S=F),B>M&&(M=B,I=F)}return A.maxTorque=P,A.maxTorqueRpm=S,A.maxPowerKW=M,A.maxPowerPS=M*1.3596,A.maxPowerRpm=I,A.pwr=R/A.maxPowerPS,A.rating=Fx(A),A}function Fx(s){let t=s.maxPowerPS/(s.mass/1e3),e=s.mu*(1+(s.clF+s.clR)*.15),n=Math.min(1.3,s.brakeTorque/(s.mass*3.4));return Math.round(t*2.2+e*220+n*60+(s.trans.close<1?15:0))}var Zu=new Ue({color:724758,metalness:.6,roughness:.15}),Ox=new Ue({color:1118481,roughness:.9}),zx=new Ue({color:10133672,metalness:.9,roughness:.3}),yi=new Ue({color:657930,roughness:.6}),Bx=new Ue({color:16777215,emissive:16773836,emissiveIntensity:1.6}),kx=new Ue({color:15263968,emissive:3355443});function Hx(s){let t=new Ks;t.moveTo(s[0][0],s[0][1]);for(let e=1;e<s.length;e++)t.lineTo(s[e][0],s[e][1]);return t.closePath(),t}function zl(s,t,e,n=.06){let i=new Mo(Hx(s),{depth:t-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n*.8,bevelSegments:2,steps:1});return i.translate(0,0,-(t-n*2)/2),i.rotateY(-Math.PI/2),new mt(i,e)}function qo(s,t,e={}){let n=new ve,i=new ve;n.add(i);let r=s.length,o=s.width,a=s.height,c=s.body,l=new Ue({color:t,metalness:.25,roughness:.38,envMapIntensity:.8}),h=[],u=r/2,d=a*.56,f=r*c.hood,g=r*c.tail,x=.52,m=[[-u,.22],[u-.08,.22],[u,.34],[u,x-.05],[u-.12,x],[u-f,d],[-u+g,d+.02],[-u+.04,d-.02],[-u,d-.12]],p=zl(m,o,l);i.add(p);let y=u-f;if(c.style==="roadster"){let St=zl([[y,d],[y-.32,d+.38],[y-.38,d+.38],[y-.12,d]],o*.86,Zu,.02);i.add(St);for(let Q of[-.33,.33]){let ht=new mt(new kt(.34,.32,.12),yi);ht.position.set(Q,d+.16,y-1.25),i.add(ht)}let W=new mt(new kt(o*.86,.05,1.3),yi);W.position.set(0,d+.02,y-.95),i.add(W)}else{let St=r*c.roof,W=y-r*.15,Q=W-St,ht=-u+g;c.style==="hatch"&&(ht=-u+.12);let et=[[y,d],[W,a],[Q,a],[c.style==="hatch"?ht+.08:ht,c.style==="hatch"?d+.1:d]],Tt=zl(et,o*.84,Zu,.04);i.add(Tt);let Rt=new mt(new kt(o*.78,.05,Math.max(.3,St-.1)),l);Rt.position.set(0,a+.005,(W+Q)/2),i.add(Rt),h.push(Rt);for(let Lt of[-1,1]){let Ht=[[y,d],[W,a]],J=Ht[1][0]-Ht[0][0],it=Ht[1][1]-Ht[0][1],C=Math.hypot(J,it),wt=new mt(new kt(.07,.07,C),l);wt.position.set(Lt*o*.42,(Ht[0][1]+Ht[1][1])/2,(Ht[0][0]+Ht[1][0])/2),wt.rotation.x=-Math.atan2(it,Math.abs(J)),i.add(wt),h.push(wt)}}if(c.scoop){let St=new mt(new kt(.6,.08,.45),l);St.position.set(0,d-.02+(x-d)*.35,u-f*.45),i.add(St)}let v=e.wing||c.wing,_=(St,W,Q,ht)=>{let et=new ve,Tt=new mt(new kt(Q,.04,W),ht);Tt.position.y=St,et.add(Tt);for(let Rt of[-1,1]){let Lt=new mt(new kt(.05,St-d,.12),yi);Lt.position.set(Rt*Q*.32,(St+d)/2,0),et.add(Lt)}et.position.z=-u+.28,i.add(et)};if(v==="gt")_(d+.32,.3,o*.92,yi);else if(v==="high")_(d+.22,.22,o*.8,l);else if(v==="loop")_(d+.14,.2,o*.86,l);else if(v==="duck"){let St=new mt(new kt(o*.8,.05,.12),l);St.position.set(0,d+.05,-u+.12),i.add(St)}else if(v==="roof"){let St=new mt(new kt(o*.75,.04,.22),l);St.position.set(0,a+.02,-u+.25),i.add(St)}if(e.aero==="aero_lip"||e.aero==="aero_full"){let St=new mt(new kt(o*.95,.04,.18),yi);St.position.set(0,.2,u-.05),i.add(St)}if(e.aero==="aero_full")for(let St of[-1,1]){let W=new mt(new kt(.05,.08,r*.5),yi);W.position.set(St*(o/2-.02),.22,0),i.add(W)}let R=[];for(let St of[-1,1]){let W=new mt(new kt(.34,.08,.06),Bx.clone());W.position.set(St*(o/2-.3),x-.06,u-.06),i.add(W),R.push(W)}let T=new Ue({color:5570560,emissive:16715792,emissiveIntensity:.6});for(let St of[-1,1]){let W=new mt(new kt(.36,.08,.05),T);W.position.set(St*(o/2-.28),d-.12,-u-.005),i.add(W)}let A=new mt(new kt(.33,.16,.02),kx);A.position.set(0,.4,-u-.01),i.add(A);let P=[],S=s.tireRadius,M=new ti(S,S,.22,18);M.rotateZ(Math.PI/2);let I=new ti(S*.66,S*.66,.235,10);I.rotateZ(Math.PI/2);let F=new kt(.24,S*1.2,.06),O=s.wheelbase/2;for(let[St,W,Q]of[[1,-1,s.trackF],[1,1,s.trackF],[-1,-1,s.trackR],[-1,1,s.trackR]]){let ht=new ve;ht.position.set(W*(Q/2),S,St*O);let et=new ve;et.add(new mt(M,Ox)),et.add(new mt(I,zx));let Tt=new mt(F,yi);et.add(Tt);let Rt=Tt.clone();Rt.rotation.x=Math.PI/2,et.add(Rt),ht.add(et),n.add(ht),P.push({pivot:ht,spin:et,front:St>0})}let B=new mt(new Ke(o*1.15,r*1.05),new xe({color:0,transparent:!0,opacity:.55,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.y=.035,n.add(B);let V=new ve,H=new Ue({color:1381914,roughness:.85}),tt=new mt(new kt(o*.9,.2,.5),H);tt.position.set(0,d+.02,y-.45),V.add(tt);let q=new mt(new kt(.5,.1,.22),H);q.position.set(-.37,d+.14,y-.62),V.add(q);let rt=new ve,gt=new mt(new wo(.18,.022,8,24),new Ue({color:789516,roughness:.7}));rt.add(gt);let _t=new mt(new kt(.34,.03,.02),H);rt.add(_t);let Bt=new mt(new kt(.025,.05,.03),new xe({color:16724016}));if(Bt.position.y=.17,rt.add(Bt),rt.position.set(-.37,d+.05,y-.78),rt.rotation.x=-.35,V.add(rt),c.style!=="roadster"){for(let W of[-1,1]){let Q=new mt(new kt(.07,.6,.07),H);Q.position.set(W*o*.41,d+.27,y-.22),Q.rotation.x=-.75,V.add(Q)}let St=new mt(new kt(o*.84,.06,.25),H);St.position.set(0,a-.04,y-r*.15-.05),V.add(St)}return V.visible=!1,i.add(V),n.userData={exterior:h,body:i,wheels:P,lightsFront:R,tailMat:T,cockpit:V,steeringWheel:rt,paint:l,belt:d,wsBase:y,H:a,L:r,W:o},n}function Yo(s,t,e={}){let n=s.userData,i=(t.a-t.b)/2,r=Math.sin(t.h),o=Math.cos(t.h);s.position.set(t.x+r*i,0,t.z+o*i),s.rotation.y=t.h,n.body.rotation.x=t.pitch,n.body.rotation.z=-t.roll;for(let l of n.wheels)l.pivot.rotation.y=l.front?-t.steer:0,l.spin.rotation.x=l.front?t.spinF:t.spinR;n.steeringWheel.rotation.z=t.steer*9;let a=t.input.brake>.05&&t.gear!==-1;n.tailMat.emissiveIntensity=a?2.6:.7;let c=e.flash||0;for(let l of n.lightsFront)l.material.emissiveIntensity=1.4+c*6}function $o(s){let t=s.userData,e=new Ao(16773590,900,110,.55,.55,2);e.position.set(0,.75,t.L/2-.1);let n=new ge;n.position.set(0,0,t.L/2+22),t.body.add(e,n),e.target=n;let i=new rs(16771272,25,14,2);return i.position.set(0,1.2,t.L/2+3),t.body.add(i),t.headlight=e,e}var Bl=1/500,ei=class{constructor(t,{corridor:e,path:n=null}){this.game=t,this.corridor=e,this.path=n,this.entries=[],this.player=null,this.acc=0,this.time=0,this.controlsEnabled=!0,this.frozen=!1,this.flash=0}addCar({carId:t,equipped:e,color:n,isPlayer:i=!1,name:r="",ai:o=null}){let a=Fn(t,e),c=this.game.settings,l=new Xo(a,{auto:i?c.transmission==="AT":!0,abs:i?c.abs:!0,tcs:i?c.tcs:!1}),h=qo(pe[t],n,{aero:e.aero,wing:e.aero==="aero_wing"||e.aero==="aero_full"?"gt":void 0});this.game.world.scene.add(h),i&&$o(h);let u=this.game.audio.createEngine(a),d={car:l,model:h,engine:u,isPlayer:i,name:r,ai:o,color:n,carId:t,equipped:e,flash:0};return this.entries.push(d),i&&(this.player=d),d}removeCar(t){this.game.world.scene.remove(t.model),this.game.audio.destroyEngine(t.engine),this.entries=this.entries.filter(e=>e!==t)}readPlayerInput(t){let e=this.game.input,n=this.player;if(!n)return;let i=n.car,r=i.input;if(!this.controlsEnabled){i.input={throttle:0,brake:this.frozen?1:0,steer:0};return}let o=e.held("throttle")?1:0,a=e.held("brake")?1:0,c=(e.held("right")?1:0)-(e.held("left")?1:0),l=(h,u,d)=>h+Math.max(-d*t,Math.min(d*t,u-h));if(i.input={throttle:l(r.throttle,o,o>r.throttle?7:12),brake:l(r.brake,a,10),steer:c},e.hit("reset"))if(this.resetRule==="battle")if(Math.abs(i.vu)*3.6>10)this.onResetDenied&&this.onResetDenied();else{this.resetPlayer(-10);return}else{this.resetPlayer();return}e.hit("shiftUp")&&i.shiftUp(),e.hit("shiftDown")&&i.shiftDown()}resetPlayer(t=0){let e=this.player.car,n,i,r;if(this.path){let o=this.path.project(e.x,e.z,-1),a=this.path.posAt(o.s+t,0);n=a.x,i=a.z,r=a.h}else{let o=null,a=1e18;for(let u of this.corridor.segs){let d=u.bx-u.ax,f=u.bz-u.az,g=d*d+f*f,x=Math.max(0,Math.min(1,((e.x-u.ax)*d+(e.z-u.az)*f)/g)),m=u.ax+d*x,p=u.az+f*x,y=(m-e.x)**2+(p-e.z)**2;y<a&&(a=y,o={px:m,pz:p,dx:d,dz:f})}let[c,l]=e.fwd(),h=o.dx*c+o.dz*l>=0?1:-1;n=o.px,i=o.pz,r=Math.atan2(o.dx*h,o.dz*h)}e.place(n,i,r,0),e.input={throttle:0,brake:0,steer:0},e.steer=0,e.gear=1,this.game.rig.reset(),this.onReset&&this.onReset()}update(t){if(this.readPlayerInput(t),this.frozen)for(let i of this.entries)i.car.vu=0,i.car.vv=0,i.car.w=0;let e=i=>this.entries.filter(r=>r!==i).map(r=>r.car);for(let i of this.entries)i.ai&&!this.frozen&&i.ai.update(t,e(i));this.acc+=Math.min(t,.05);let n=0;for(;this.acc>=Bl&&n<40;){this.acc-=Bl,n++;for(let i of this.entries){let r=i.car.speed;i.car.step(Bl),Iu(i.car,this.corridor)>0&&(i.impact=Math.max(i.impact||0,r))}for(let i=0;i<this.entries.length;i++)for(let r=i+1;r<this.entries.length;r++){let o=this.entries[i].car,a=this.entries[r].car;Math.abs(o.x-a.x)<8&&Math.abs(o.z-a.z)<8&&Yu(o,a)}}this.time+=t;for(let i of this.entries){i.flash>0&&(i.flash-=t);let r=i.flash>0&&Math.sin(i.flash*40)>0?1:0;Yo(i.model,i.car,{flash:r})}}updateAudio(t){let e=this.game.audio;for(let n of this.entries)if(n===this.player)e.updateEngine(n.engine,n.car,1,0);else{let i=Math.hypot(n.car.x-t.car.x,n.car.z-t.car.z),r=Math.max(0,1-i/120)*.6,[o,a]=t.car.right(),c=Math.max(-1,Math.min(1,((n.car.x-t.car.x)*o+(n.car.z-t.car.z)*a)/30));e.updateEngine(n.engine,n.car,r,c)}}dispose(){for(let t of[...this.entries])this.removeCar(t)}},Vx=15,Zo=class{constructor(t=30){this.rate=t,this.t=0,this.buf=[],this.frames=0}sample(t,e){for(this.t+=t;this.t>=1/this.rate;)this.t-=1/this.rate,this.buf.push(e.x,e.z,e.h,e.pitch,e.roll,e.steer,e.spinF,e.spinR,e.rpm,e.vu,e.gear,e.input.brake,e.input.throttle,e.boost,e.slip),this.frames++}finish(t){return{...t,rate:this.rate,stride:Vx,frames:this.frames,data:new Float32Array(this.buf)}}};var yn=class{constructor(t){this.root=z("div",{class:"hud"}),this.tl=z("div",{class:"hud-tl"}),this.tc=z("div",{class:"hud-tc"}),this.tr=z("div",{class:"hud-tr"}),this.msg=z("div",{class:"hud-msg"}),this.sub=z("div",{class:"hud-submsg"}),this.prompt=z("div",{class:"hud-prompt"}),this.tach=z("canvas",{class:"hud-tach",width:320,height:200}),this.map=z("canvas",{class:"hud-map",width:240,height:240}),this.mirrorFrame=z("div",{class:"hud-mirror"}),this.viewLabel=z("div",{class:"hud-view"}),this.root.append(this.tl,this.tc,this.tr,this.msg,this.sub,this.prompt,this.tach,this.map,this.mirrorFrame,this.viewLabel),t.appendChild(this.root),this.msgT=0,this.mapBounds=null}destroy(){this.root.remove()}flash(t,e=1.5,n=""){this.msg.textContent=t,this.sub.textContent=n,this.msg.classList.remove("pop"),this.msg.offsetWidth,this.msg.classList.add("pop"),this.msgT=e}setView(t){this.viewLabel.textContent=t,this.viewLabel.classList.remove("fade"),this.viewLabel.offsetWidth,this.viewLabel.classList.add("fade")}update(t){this.msgT>0&&(this.msgT-=t,this.msgT<=0&&(this.msg.textContent="",this.sub.textContent=""))}drawTach(t){let e=this.tach.getContext("2d"),n=this.tach.width,i=this.tach.height;e.clearRect(0,0,n,i);let r=t.spec,o=Math.ceil((r.limiter+500)/1e3)*1e3,a=n/2+40,c=i-18,l=150,h=Math.PI*1,u=Math.PI*1.75,d=x=>h+(u-h)*Math.min(1,x/o);e.lineWidth=14,e.strokeStyle="rgba(255,255,255,0.12)",e.beginPath(),e.arc(a,c,l,h,u),e.stroke(),e.strokeStyle="rgba(255,40,70,0.55)",e.beginPath(),e.arc(a,c,l,d(r.redline),u),e.stroke();let f=t.rpm>r.redline-300;e.strokeStyle=f?"#ff2d55":"#33e1ff",e.shadowColor=e.strokeStyle,e.shadowBlur=12,e.beginPath(),e.arc(a,c,l,h,d(t.rpm)),e.stroke(),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.7)",e.font="12px sans-serif",e.textAlign="center";for(let x=0;x<=o;x+=1e3){let m=d(x);e.fillText(String(x/1e3),a+Math.cos(m)*(l-22),c+Math.sin(m)*(l-22)+4)}e.textAlign="right",e.font='bold 58px "Orbitron","Segoe UI",sans-serif',e.fillStyle="#fff",e.fillText(String(Math.round(Math.abs(t.vu)*3.6)),a+60,c-30),e.font="14px sans-serif",e.fillStyle="#9ab",e.fillText("km/h",a+60,c-10),e.textAlign="center",e.font='bold 44px "Orbitron","Segoe UI",sans-serif',e.fillStyle=f?"#ff2d55":"#ffd400";let g=t.gear===-1?"R":t.gear===0?"N":String(t.gear);e.fillText(g,a-70,c-30),t.spec.boostMax>0&&(e.font="12px sans-serif",e.fillStyle="#9ab",e.textAlign="left",e.fillText(`BOOST ${t.boost.toFixed(2)}bar`,a-110,c-2))}setMapCourse(t){this.course=t,this.mapBounds=null}drawMap(t,e=[]){let n=this.map.getContext("2d"),i=this.map.width,r=this.map.height;if(n.clearRect(0,0,i,r),!this.mapBounds){let h=1e9,u=-1e9,d=1e9,f=-1e9,g=this.course?Array.from({length:this.course.n},(m,p)=>({x:this.course.x[p],z:this.course.z[p]})):Object.values(he);for(let m of g)h=Math.min(h,m.x),u=Math.max(u,m.x),d=Math.min(d,m.z),f=Math.max(f,m.z);let x=Math.min((i-30)/(u-h),(r-30)/(f-d));this.mapBounds={sc:x,ox:i/2-(h+u)/2*x,oz:r/2-(d+f)/2*x}}let{sc:o,ox:a,oz:c}=this.mapBounds,l=(h,u)=>[a+h*o,c+u*o];if(n.fillStyle="rgba(5,10,20,0.6)",n.beginPath(),n.roundRect(0,0,i,r,14),n.fill(),n.lineCap="round",n.lineJoin="round",this.course){n.strokeStyle="rgba(200,220,255,0.85)",n.lineWidth=4,n.beginPath();for(let d=0;d<=this.course.n;d++){let f=d%this.course.n,[g,x]=l(this.course.x[f],this.course.z[f]);d?n.lineTo(g,x):n.moveTo(g,x)}n.stroke();let[h,u]=l(this.course.x[0],this.course.z[0]);n.fillStyle="#fff",n.fillRect(h-4,u-4,8,8)}else for(let h of _n)n.strokeStyle="rgba(170,190,230,0.75)",n.lineWidth=Math.max(2,h.width*o*.9),n.beginPath(),h.nodes.forEach((u,d)=>{let[f,g]=l(he[u].x,he[u].z);d?n.lineTo(f,g):n.moveTo(f,g)}),n.stroke();for(let h of e){let[u,d]=l(h.x,h.z);n.fillStyle=h.color,n.beginPath(),n.arc(u,d,6,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font="bold 10px sans-serif",n.textAlign="center",n.fillText(h.label,u,d-9)}for(let h of t){let[u,d]=l(h.x,h.z);n.save(),n.translate(u,d),n.rotate(-h.h+Math.PI),n.fillStyle=h.color,n.beginPath(),n.moveTo(0,-7),n.lineTo(5,5),n.lineTo(-5,5),n.closePath(),n.fill(),n.restore()}}};var nn=(s,t)=>({...pe[s].stock,...t}),kl=[{id:"minato",name:"\u767D\u77F3\u30DF\u30CA\u30C8",team:"\u30EB\u30FC\u30AD\u30FC",car:"SWIFT-S",color:15909903,minWins:0,skill:.8,reward:6e4,parts:nn("SWIFT-S",{muffler:"muf_sport"}),lines:{meet:"\u30B9\u30A4\u30B9\u30DD\u8210\u3081\u3093\u306A\u3088\uFF01",win:"\u304F\u3063\u202686\u3063\u3066\u3053\u3093\u306A\u901F\u3044\u306E\u304B\u3088\u3002",lose:"\u8EFD\u3055\u306F\u6B63\u7FA9\u3063\u3066\u306D\uFF01"}},{id:"yuuri",name:"\u67DA\u6728\u30E6\u30A6\u30EA",team:"\u30EB\u30FC\u30AD\u30FC",car:"RS-RS",color:11735579,minWins:0,skill:.82,reward:65e3,parts:nn("RS-RS",{suspension:"sus_street",tire:"tire_high"}),lines:{meet:"\u4EBA\u99AC\u4E00\u4F53\u3001\u898B\u305B\u3066\u3042\u3052\u308B\u3002",win:"\u2026\u30B3\u30FC\u30CA\u30FC\u3067\u8A70\u3081\u304D\u308C\u306A\u304B\u3063\u305F\u3002",lose:"\u30D1\u30EF\u30FC\u3060\u3051\u3058\u3083\u66F2\u304C\u308C\u306A\u3044\u3088\uFF1F"}},{id:"souma",name:"\u771F\u58C1\u30BD\u30A6\u30DE",team:"\u897F\u53E3\u30CA\u30A4\u30C4",car:"86-GR",color:16053492,minWins:1,skill:.84,reward:8e4,parts:nn("86-GR",{brake:"brk_pad",aero:"aero_lip",muffler:"muf_sport"}),lines:{meet:"\u540C\u305886\u304B\u3002\u8155\u306E\u5DEE\u3001\u30CF\u30C3\u30AD\u30EA\u3055\u305B\u3088\u3046\u305C\u3002",win:"\u540C\u3058\u8ECA\u3067\u3053\u306E\u5DEE\u2026\u8A8D\u3081\u308B\u3088\u3002",lose:"\u51FA\u76F4\u3057\u3066\u304D\u306A\u3002"}},{id:"jin",name:"\u9DF9\u91CE\u30B8\u30F3",team:"\u897F\u53E3\u30CA\u30A4\u30C4",car:"WRX-IMP",color:1916826,minWins:2,skill:.85,reward:1e5,parts:nn("WRX-IMP",{tire:"tire_high"}),lines:{meet:"\u56DB\u99C6\u306E\u7ACB\u3061\u4E0A\u304C\u308A\u3001\u3064\u3044\u3066\u3053\u308C\u308B\u304B\uFF1F",win:"\u3084\u308B\u306A\u2026FR\u3067\u4FFA\u3092\u629C\u304F\u3068\u306F\u3002",lose:"\u30C8\u30E9\u30AF\u30B7\u30E7\u30F3\u304C\u9055\u3046\u3093\u3060\u3088\u3002"}},{id:"reina",name:"\u4E5D\u6761\u30EC\u30A4\u30CA",team:"Velvet",car:"SWIFT-S",color:15856113,minWins:3,skill:.87,reward:11e4,parts:nn("SWIFT-S",{turbo:"tb_mid",intercooler:"ic_large",tire:"tire_high",suspension:"sus_street",muffler:"muf_sport"}),lines:{meet:"\u305F\u3060\u306E\u30B9\u30A4\u30D5\u30C8\u3060\u3068\u601D\u3063\u305F\uFF1F",win:"\u3075\u30FC\u3093\u3001\u60AA\u304F\u306A\u3044\u3058\u3083\u306A\u3044\u3002",lose:"\u898B\u305F\u76EE\u3067\u5224\u65AD\u3057\u306A\u3044\u3053\u3068\u306D\u3002"}},{id:"gou",name:"\u9ED2\u7530\u30B4\u30A6",team:"\u8981\u753A\u9023\u5408",car:"80-Supra",color:1118740,minWins:3,skill:.85,reward:12e4,parts:nn("80-Supra",{muffler:"muf_sport",tire:"tire_high"}),lines:{meet:"\u76F4\u7DDA\u3067\u5168\u90E8\u3072\u3063\u304F\u308A\u8FD4\u3057\u3066\u3084\u308B\u3002",win:"\u66F2\u304C\u308A\u3067\u8CA0\u3051\u305F\u2026\u304B\u3002",lose:"\u3053\u308C\u304C2JZ\u2026\u3058\u3083\u306D\u3047\u3001S6\u306E\u30C8\u30EB\u30AF\u3060\uFF01"}},{id:"kyou",name:"\u6C37\u5BA4\u30AD\u30E7\u30A6",team:"Velvet",car:"RS-RS",color:7041400,minWins:5,skill:.9,reward:16e4,parts:nn("RS-RS",{boreup:"bore_2",turbo:"tb_sc",intercooler:"ic_large",tire:"tire_high",suspension:"sus_circuit",aero:"aero_wing",brake:"brk_pad"}),lines:{meet:"\u30B9\u30FC\u30D1\u30FC\u30C1\u30E3\u30FC\u30B8\u30E3\u30FC\u306E\u7ACB\u3061\u4E0A\u304C\u308A\u3001\u5473\u308F\u3048\u3088\u3002",win:"\u307E\u3055\u304B\u2026\u7ACB\u3061\u4E0A\u304C\u308A\u3067\u4E26\u3070\u308C\u308B\u3068\u306F\u3002",lose:"\u8EFD\u3055\u3068\u904E\u7D66\u3001\u6700\u5F37\u306E\u7D44\u307F\u5408\u308F\u305B\u3060\u308D\uFF1F"}},{id:"akira",name:"\u6771\u96F2\u30A2\u30AD\u30E9",team:"\u8981\u753A\u9023\u5408",car:"86-GR",color:15230494,minWins:5,skill:.9,reward:17e4,parts:nn("86-GR",{turbo:"tb_twin",intercooler:"ic_front",muffler:"muf_straight",tire:"tire_high",suspension:"sus_street",brake:"brk_big"}),lines:{meet:"\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC\u306E86\u3001\u898B\u305F\u3053\u3068\u3042\u308B\u304B\uFF1F",win:"\u30D1\u30EF\u30FC\u3060\u3051\u3058\u3083\u52DD\u3066\u306D\u3048\u304B\u2026",lose:"\u99AC\u529B\u306F\u6B63\u7FA9\u3060\uFF01"}},{id:"misaki",name:"\u690E\u540D\u30DF\u30B5\u30AD",team:"BLUE STORM",car:"WRX-IMP",color:2777814,minWins:6,skill:.91,reward:19e4,parts:nn("WRX-IMP",{turbo:"tb_large",intercooler:"ic_front",boreup:"bore_2",transmission:"tm_close",tire:"tire_high",aero:"aero_full",muffler:"muf_sport"}),lines:{meet:"\u672C\u7269\u306E\u30D3\u30C3\u30B0\u30BF\u30FC\u30D3\u30F3\u3001\u4F53\u611F\u3055\u305B\u3066\u3042\u3052\u308B\u3002",win:"\u2026\u30D6\u30FC\u30B9\u30C8\u304C\u7ACB\u3061\u4E0A\u304C\u308B\u524D\u306B\u9003\u3052\u3089\u308C\u305F\u3002",lose:"\u30D6\u30FC\u30B9\u30C8\u5168\u958B\u3001\u6C17\u6301\u3061\u3044\u3044\u3067\u3057\u3087\uFF1F"}},{id:"masamune",name:"\u85E4\u5802\u30DE\u30B5\u30E0\u30CD",team:"BLUE STORM",car:"80-Supra",color:12172998,minWins:8,skill:.93,reward:24e4,parts:nn("80-Supra",{turbo:"tb_large",boreup:"bore_3",muffler:"muf_straight",intercooler:"ic_front",tire:"tire_s",suspension:"sus_circuit",brake:"brk_big",aero:"aero_wing"}),lines:{meet:"\u6C60\u888B\u6700\u901F\u306E\u5EA7\u3001\u307E\u3060\u8B72\u308B\u6C17\u306F\u306A\u3044\u3002",win:"\u6642\u4EE3\u304C\u5909\u308F\u3063\u305F\u304B\u2026",lose:"10\u5E74\u65E9\u3044\u3002"}},{id:"hibiki",name:"\u795E\u697D\u30D2\u30D3\u30AD",team:"\u7121\u6240\u5C5E",car:"RS-RS",color:6958015,minWins:9,skill:.94,reward:26e4,parts:nn("RS-RS",{engine:"eng_r2_13",muffler:"muf_straight",tire:"tire_s",suspension:"sus_circuit",aero:"aero_full",transmission:"tm_close",brake:"brk_big"}),lines:{meet:"9000\u56DE\u8EE2\u306E\u6B4C\u3001\u8074\u304B\u305B\u3066\u3042\u3052\u308B\u3002",win:"\u3044\u3044\u97F3\u3060\u3063\u305F\u2026\u3042\u306A\u305F\u306E\u8ECA\u3082\u3002",lose:"\u30ED\u30FC\u30BF\u30EA\u30FC\u306F\u56DE\u3057\u3066\u30CA\u30F3\u30DC\u3002"}},{id:"zero",name:"\u4E0D\u77E5\u706B\u30BC\u30ED",team:"\u6C60\u888B\u306E\u4EA1\u970A",car:"86-GR",color:1710623,minWins:10,skill:.96,reward:4e5,parts:nn("86-GR",{engine:"eng_v6_30",turbo:"tb_sc",intercooler:"ic_front",boreup:"bore_3",muffler:"muf_straight",tire:"tire_s",suspension:"sus_circuit",brake:"brk_big",transmission:"tm_close",aero:"aero_full"}),lines:{meet:"\u2026\u2026\u305D\u306E86\u3001\u3069\u3053\u307E\u3067\u884C\u3051\u308B\u3002",win:"\u2026\u2026\u30AB\u30B1\u30EB\u3001\u304B\u3002\u899A\u3048\u3066\u304A\u304F\u3002",lose:"\u2026\u2026\u307E\u3060\u9060\u3044\u3002"}}],N_=Object.fromEntries(kl.map(s=>[s.id,s]));var gs=(s,t,e)=>s<t?t:s>e?e:s;function Ku(s,t,e){let n=t-s.x,i=e-s.z,r=Math.sin(s.h),o=Math.cos(s.h),a=n*r+i*o,c=n*-o+i*r,l=Math.max(4,n*n+i*i),h=2*c/l,u=Math.atan(s.L*h);a<0&&(u=Math.sign(c||1)*s.spec.steerLock);let d=s.speed,f=Math.max(.06,Math.min(s.spec.steerLock,s.L*s.spec.mu*9.81/Math.max(d*d,1)+s.spec.peakAngle*1.25));return gs(u/f,-1,1)}var xs=class{constructor(t,e,n=.85){this.car=t,this.path=e,this.skill=n,this.profile=e.speedProfile(t.spec,n),this.hint=-1,this.offset=0,this.offTarget=0,this.stuck=0,this.reverseT=0,this.boost=1}update(t,e=[]){let n=this.car,i=this.path,r=i.project(n.x,n.z,this.hint);this.hint=r.i;let o=i.n,a=n.speed,c=0;for(let A of e){let P=i.project(A.x,A.z,-1),S=P.s-r.s;S<-i.length/2&&(S+=i.length),S>i.length/2&&(S-=i.length);let M=r.lat;if(S>0&&S<18+a*.4&&Math.abs(P.lat-M)<2.6){let I=i.hw[r.i];c=P.lat>0?-Math.min(I-1.5,3):Math.min(I-1.5,3)}}this.offTarget+=(c-this.offTarget)*Math.min(1,t*1.5);let l=4+a*.4,h=r.i,u=0;for(;u<l;)u+=i.lseg[h],h=(h+1)%o;let[d,f]=i.normal(h),g=Math.max(0,i.hw[h]-1.4),x=gs(this.offTarget,-g-i.lineOff[h],g-i.lineOff[h]),m=i.lx[h]+d*x,p=i.lz[h]+f*x,y=Ku(n,m,p),v=1e9;for(let A=1,P=0;P<8;A++){let S=(r.i+A)%o;v=Math.min(v,this.profile[S]),P+=i.lseg[S]}v*=this.boost;let _=v-a,R=gs(.35+_*.35,0,1),T=gs(-_*.22-.05,0,1);if(T>0&&(R=0),n.slipLong>n.spec.peakRatio*1.4&&(R*=.4),n.slip>1.6&&(R*=.6),Math.abs(r.lat)>i.hw[r.i]-.5&&(R*=.7),this.reverseT>0){this.reverseT-=t,n.input={throttle:0,brake:.8,steer:-y},n.gear!==-1&&n.speed<1&&(n.gear=-1),this.reverseT<=0&&(n.gear=1);return}a<1.5&&this.started?(this.stuck+=t,this.stuck>2.2&&(this.stuck=0,this.reverseT=1.4)):this.stuck=0,n.gear<1&&(n.gear=1),n.input={throttle:R,brake:T,steer:y},this.started=!0}},Ko=class{constructor(t,e,n,i,r=13){this.car=t,this.graph=e,this.a=n,this.b=i,this.c=this.pick(i,n),this.cruise=r,this.lane=2.6,this.paused=!1,this.stuck=0,this.reverseT=0}pick(t,e){let n=(this.graph[t]||[]).map(i=>i.to).filter(i=>i!==e);return n.length?n[Math.floor(Math.random()*n.length)]:e}laneOffsetPt(t,e,n){let i=he[t],r=he[e],o=r.x-i.x,a=r.z-i.z,c=Math.hypot(o,a)||1,l=o/c,h=a/c,u=h,d=-l;return{x:i.x+o*n+u*this.lane,z:i.z+a*n+d*this.lane,len:c,fx:l,fz:h}}update(t,e=[]){let n=this.car;if(this.paused){n.input={throttle:0,brake:1,steer:0};return}let i=he[this.a],r=he[this.b],o=r.x-i.x,a=r.z-i.z,c=o*o+a*a,l=Math.sqrt(c),h=((n.x-i.x)*o+(n.z-i.z)*a)/c,u=(1-h)*l;if(u<9)return this.a=this.b,this.b=this.c,this.c=this.pick(this.b,this.a),this.update(t,e);let d=7+n.speed*.5,f;if(u>d)f=this.laneOffsetPt(this.a,this.b,h+d/l);else{let O=he[this.c],B=he[this.b],V=Math.hypot(O.x-B.x,O.z-B.z)||1;f=this.laneOffsetPt(this.b,this.c,Math.min(1,(d-u)/V))}let g=Ku(n,f.x,f.z),x=he[this.c],m=o/l,p=a/l,y=x.x-r.x,v=x.z-r.z,_=Math.hypot(y,v)||1,R=(m*y+p*v)/_,T=R<-.5?4:R<.3?7:R<.85?10:this.cruise,A=Math.min(this.cruise,Math.sqrt(T*T+6*Math.max(0,u-8))),P=Math.sin(n.h),S=Math.cos(n.h);for(let O of e){let B=O.x-n.x,V=O.z-n.z,H=B*P+V*S,tt=B*-S+V*P;H>0&&H<22&&Math.abs(tt)<2.6&&(A=Math.min(A,Math.max(0,(H-7)*.6)))}let M=A-n.speed,I=gs(.2+M*.3,0,.75),F=gs(-M*.25,0,1);if(F>.02&&(I=0),this.reverseT>0){this.reverseT-=t,n.gear!==-1&&(n.gear=-1),n.input={throttle:0,brake:.5,steer:-g},this.reverseT<=0&&(n.gear=1);return}A>3&&n.speed<.8?(this.stuck+=t,this.stuck>2.5&&(this.stuck=0,this.reverseT=1.5)):this.stuck=0,n.gear<1&&(n.gear=1),n.input={throttle:I,brake:F,steer:g}}};function Ju(s){return s.price?Math.round(s.price*.5):s.rank*45e3}function Qu(s){return[["\u6700\u9AD8\u51FA\u529B",`${s.maxPowerPS.toFixed(0)} PS / ${s.maxPowerRpm} rpm`],["\u6700\u5927\u30C8\u30EB\u30AF",`${s.maxTorque.toFixed(0)} N\xB7m / ${s.maxTorqueRpm} rpm`],["\u8ECA\u4E21\u91CD\u91CF",`${s.mass.toFixed(0)} kg`],["\u30D1\u30EF\u30FC\u30A6\u30A7\u30A4\u30C8\u30EC\u30B7\u30AA",`${s.pwr.toFixed(2)} kg/PS`],["\u30B0\u30EA\u30C3\u30D7",s.mu.toFixed(2)],["\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9\u4FC2\u6570",(s.clF+s.clR).toFixed(2)],["\u30EC\u30D6\u30EA\u30DF\u30C3\u30C8",`${s.redline} rpm`],["\u6226\u95D8\u529B",String(s.rating)]]}function ju(s,t,e){let n=z("div",{class:"screen shop"}),i="equip",r=0,o=[],a=ps(t),c=g=>{let x=fs.find(p=>p.id===g),m=ar.filter(p=>p.cat===g&&(lr(t,p.id)>0||a.equipped[g]===p.id)).map(p=>p.id);return x.required||m.unshift(null),m},l=(g,x)=>{let m=z("div",{class:"stats"}),p=Qu(g),y=x?Qu(x):null;return p.forEach(([v,_],R)=>{let T=y&&y[R][1]!==_;m.appendChild(z("div",{class:"stat"+(T?" diff":"")},z("span",{},v),z("b",{},_)))}),m},h=()=>{n.innerHTML="",o=[];let g=Fn(a.carId,a.equipped),x=z("div",{class:"tabs"},...[["equip","\u30D1\u30FC\u30C4\u4EA4\u63DB"],["buy","\u30D1\u30FC\u30C4\u8CFC\u5165"],["sell","\u30D1\u30FC\u30C4\u58F2\u5374"]].map(([y,v])=>z("button",{class:"tab"+(i===y?" on":""),onclick:()=>{i=y,r=0,h()}},v))),m=z("div",{class:"part-list"});if(i==="equip")for(let y of fs){let v=c(y.id),_=a.equipped[y.id],R=_?Xe[_]:null,T=P=>{let S=v.indexOf(_),M=v[(S+P+v.length)%v.length];a.equipped[y.id]=M,s.audio.beep(720,.04,.08),h()},A=z("div",{class:"part-row"},z("span",{class:"cat"},y.name),z("button",{class:"arrow",onclick:()=>T(-1)},"\u25C0"),z("span",{class:"pname"},R?R.name:"\uFF08\u306A\u3057\uFF09",z("small",{},R?`\u3000${cr(R.rank)}\u3000${R.desc}`:"")),z("button",{class:"arrow",onclick:()=>T(1)},"\u25B6"),z("span",{class:"cnt"},`${v.length-(y.required?0:1)}\u7A2E\u6240\u6301`));o.push({row:A,left:()=>T(-1),right:()=>T(1),act:()=>T(1)}),m.appendChild(A)}else if(i==="buy")for(let y of ar.filter(v=>v.price)){let v=t.money>=y.price,_=()=>{if(t.money<y.price){s.audio.beep(220,.12,.1);return}t.money-=y.price,Wo(t,y.id),s.audio.beep(1200,.08,.12),h()},R=z("div",{class:"part-row"+(v?"":" dim")},z("span",{class:"cat"},or[y.cat]),z("span",{class:"pname"},y.name,z("small",{},`\u3000${y.desc}`)),z("span",{class:"cnt"},`\u6240\u6301 ${t.owned[y.id]||0}`),z("button",{class:"buy",onclick:_},hn(y.price)));o.push({row:R,act:_}),m.appendChild(R)}else{let y=ar.filter(v=>lr(t,v.id)>0);y.length||m.appendChild(z("div",{class:"hint"},"\u58F2\u5374\u3067\u304D\u308B\uFF08\u672A\u88C5\u7740\u306E\uFF09\u30D1\u30FC\u30C4\u306F\u3042\u308A\u307E\u305B\u3093"));for(let v of y){let _=()=>{lr(t,v.id)<=0||(t.owned[v.id]-=1,t.money+=Ju(v),s.audio.beep(900,.08,.12),h())},R=z("div",{class:"part-row"},z("span",{class:"cat"},or[v.cat]),z("span",{class:"pname"},v.name,z("small",{},`\u3000${cr(v.rank)}`)),z("span",{class:"cnt"},`\u672A\u88C5\u7740 ${lr(t,v.id)}`),z("button",{class:"buy",onclick:_},"\u58F2\u5374 "+hn(Ju(v))));o.push({row:R,act:_}),m.appendChild(R)}}let p=z("button",{class:"menu-item small"},"\u30B7\u30E7\u30C3\u30D7\u3092\u51FA\u308B");p.onclick=()=>f(),r=Math.min(r,o.length-1),n.appendChild(Ne(`TUNE SHOP \u2014 ${pe[a.carId].name}`,z("div",{class:"shop-head"},z("span",{},`\u6240\u6301\u91D1 ${hn(t.money)}`),z("span",{class:"hint"},"Tab:\u30BF\u30D6\u5207\u66FF\u3000\u2191\u2193:\u9078\u629E\u3000\u2190\u2192:\u30D1\u30FC\u30C4\u5909\u66F4\u3000Enter:\u8CFC\u5165/\u58F2\u5374\u3000Esc:\u51FA\u308B")),x,z("div",{class:"shop-body"},m,l(g,Fn(a.carId,pe[a.carId].stock))),p)),u()},u=()=>o.forEach((g,x)=>g.row.classList.toggle("sel",x===r)),d=s.input.onKey(g=>{if(n.isConnected)if(g.code==="Tab"){let x=["equip","buy","sell"];i=x[(x.indexOf(i)+1)%3],r=0,h()}else g.code==="ArrowDown"&&o.length?(r=(r+1)%o.length,u(),o[r].row.scrollIntoView({block:"nearest"})):g.code==="ArrowUp"&&o.length?(r=(r-1+o.length)%o.length,u(),o[r].row.scrollIntoView({block:"nearest"})):g.code==="ArrowLeft"?o[r]?.left?.():g.code==="ArrowRight"?o[r]?.right?.():g.code==="Enter"?o[r]?.act?.():g.code==="Escape"&&f()}),f=()=>{d(),n.remove(),e&&e()};h(),s.ui.appendChild(n)}var Mi=class{constructor(t,e=0){this.path=t,this.hint=-1,this.dist=e,this.prevS=null,this.lapStart=0,this.lap=0,this.sector=0,this.sectorStart=0,this.laps=[],this.sectors=[],this.curSectors=[],this.started=!1}update(t,e){let n=this.path,i=n.project(t.x,t.z,this.hint);if(this.hint=i.i,this.lat=i.lat,this.prevS==null)return this.prevS=i.s,null;let r=i.s-this.prevS;if(r<-n.length/2&&(r+=n.length),r>n.length/2&&(r-=n.length),this.prevS=i.s,Math.abs(r)>30&&(r=0),this.dist+=r,!this.started)return null;let o=null,a=n.length,c=this.dist-this.lap*a;if(this.sector<2&&c>=(this.sector+1)*a/3&&(this.curSectors.push(e-this.sectorStart),this.sectorStart=e,this.sector++,o={type:"sector",idx:this.sector,time:this.curSectors[this.curSectors.length-1]}),c>=a){let l=e-this.lapStart;this.curSectors.push(e-this.sectorStart),this.laps.push(l),this.sectors.push(this.curSectors),this.curSectors=[],this.lap++,this.sector=0,this.lapStart=e,this.sectorStart=e,o={type:"lap",lap:this.lap,time:l}}return o}start(t){this.started=!0,this.lapStart=t,this.sectorStart=t}get best(){return this.laps.length?Math.min(...this.laps):null}};var _s=class{constructor(t,e,n){this.game=t,this.hud=e,this.onGo=n,this.t=3.6,this.last=4,this.done=!1}update(t){if(this.done)return;this.t-=t;let e=Math.ceil(this.t);e!==this.last&&e<=3&&e>=1&&(this.hud.flash(String(e),.9),this.game.audio.beep(600,.18,.25)),this.t<=0&&(this.done=!0,this.hud.flash("GO!",1),this.game.audio.beep(1200,.4,.3),this.onGo()),this.last=e}};function Jo(s,t,e,n){let i=Ne(t),r=z("div",{class:"screen dialog"},i),o=()=>{s.input.pressed.clear(),a.destroy(),r.remove()},a=new Be(s,e.map(c=>({...c,action:()=>{o(),c.action()}})),{onBack:()=>{o(),n()}});return i.appendChild(a.root),s.ui.appendChild(r),o}var Qo=200,jo=class{constructor(t,e){this.game=t,this.opts=e}enter(){let t=this.game,{rival:e,layout:n}=this.opts,i=bi(n);this.path=i,t.audio.playBgm("battle"),t.world.setCourse(i),t.rig.setGallerySpots(i),this.session=new ei(t,{corridor:i.corridor,path:i});let r=ps(t.story),o=this.session.addCar({carId:r.carId,equipped:r.equipped,color:r.color,isPlayer:!0,name:We.name}),a=this.session.addCar({carId:e.car,equipped:e.parts,color:e.color,name:e.name}),c=i.hw[0],l=Math.min(2.4,c-1.4),h=i.posAt(-9,l),u=i.posAt(-9,-l);o.car.place(h.x,h.z,h.h,0),a.car.place(u.x,u.z,u.h,0),a.ai=new xs(a.car,i,e.skill),this.P=o,this.R=a,this.tp=new Mi(i,-9),this.tr=new Mi(i,-9),this.laps=n.course.laps,this.total=this.laps*i.length,this.session.frozen=!0,this.session.controlsEnabled=!1,t.mirrorModel=o.model,t.rig.mode=t.rig.mode==="gallery"?"chase":t.rig.mode,t.rig.reset(),this.hud=new yn(t.ui),this.hud.setMapCourse(i),this.session.resetRule="battle",this.session.onResetDenied=()=>this.hud.flash("",1.2,"\u30EA\u30BB\u30C3\u30C8\u306F10km/h\u4EE5\u4E0B\u3067\u4F7F\u7528\u3067\u304D\u307E\u3059"),this.session.onReset=()=>this.hud.flash("RESET",.8,"10m\u5F8C\u65B9\u304B\u3089\u518D\u30B9\u30BF\u30FC\u30C8"),this.t=0,this.raceT=0,this.state="intro",this.result=null,this.introT=2.2,this.hud.flash(`VS ${e.name}`,2.2,`${n.name}\u3000${this.laps}LAP`),this.countdown=new _s(t,this.hud,()=>{this.state="race",this.session.frozen=!1,this.session.controlsEnabled=!0,this.tp.start(this.raceT),this.tr.start(this.raceT)})}update(t){let e=this.game,n=this.session;if(this.paused)return;if(e.input.hitCode("Escape")&&this.state!=="result"){this.pause();return}this.state==="intro"&&(this.introT-=t,this.introT<=0&&(this.state="count")),this.state==="count"&&this.countdown.update(t),(this.state==="race"||this.state==="finish")&&(this.raceT+=t);let i=this.tp.dist-this.tr.dist;if(this.R.ai&&(this.R.ai.boost=i>80?1.03:i<-100?.985:1),n.update(t),this.tp.update(this.P.car,this.raceT),this.tr.update(this.R.car,this.raceT),e.input.hit("view")&&this.hud.setView(vn[e.rig.cycle(["chase","cockpit","hood"])]),e.input.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",e.rig.update(t,this.P.model,this.P.car),n.updateAudio(this.P),this.state==="race"){let c=null;this.tp.dist>=this.total?c={win:!0,how:"finish"}:this.tr.dist>=this.total?c={win:!1,how:"finish"}:i>=Qo?c={win:!0,how:"snap"}:i<=-Qo&&(c={win:!1,how:"snap"}),c&&(this.state="finish",this.result=c,this.finishT=2.5,this.session.controlsEnabled=!1,this.P.car.input={throttle:0,brake:.3,steer:0},this.hud.flash(c.win?"YOU WIN!":"YOU LOSE\u2026",2.5,c.how==="snap"?c.win?"\u30E9\u30A4\u30D0\u30EB\u3092\u5F15\u304D\u96E2\u3057\u305F\uFF01":"\u5F15\u304D\u96E2\u3055\u308C\u305F\u2026":"FINISH"),e.audio.beep(c.win?1320:330,.5,.3))}this.state==="finish"&&(this.finishT-=t,this.finishT<=0&&(this.state="result",this.showResult())),this.hud.update(t),this.hud.drawTach(this.P.car);let r=Math.min(this.laps,Math.max(1,Math.floor(this.tp.dist/this.path.length)+1)),o=i>=0;this.hud.tc.innerHTML=`<div class="lap">LAP <b>${r}</b>/${this.laps}</div><div class="time">${se(this.raceT)}</div>`;let a=Math.max(-1,Math.min(1,i/Qo));this.hud.tr.innerHTML=`<div class="pos ${o?"p1":"p2"}">${o?"1st":"2nd"}</div>
      <div class="gap">${o?"+":"\u2212"}${Math.abs(i).toFixed(0)} m</div>
      <div class="gapbar"><div class="mid"></div><div class="fill" style="left:${50+Math.min(0,a)*50}%;width:${Math.abs(a)*50}%;background:${o?"#33e1ff":"#ff4d6d"}"></div></div>
      <div class="rival">${this.opts.rival.name}\uFF08${pe[this.opts.rival.car].name}\uFF09</div>`,this.hud.tl.innerHTML=`<div class="who">${this.opts.layout.name}</div><div class="hint">${Qo}m\u5F15\u304D\u96E2\u3057\u3067\u52DD\u5229</div>`,this.hud.drawMap([{x:this.R.car.x,z:this.R.car.z,h:this.R.car.h,color:"#ff4d6d"},{x:this.P.car.x,z:this.P.car.z,h:this.P.car.h,color:"#33e1ff"}])}pause(){let t=this.game;this.paused=!0,Jo(t,"PAUSE",[{label:"\u518D\u958B",action:()=>{this.paused=!1}},{label:"\u30EA\u30BF\u30A4\u30A2",sub:"\u6557\u5317\u6271\u3044\u3067\u8857\u306B\u623B\u308A\u307E\u3059",action:()=>{this.paused=!1,this.result={win:!1,how:"retire"},this.state="result",this.showResult()}}],()=>{this.paused=!1})}showResult(){let t=this.game,e=t.story,n=this.opts.rival,i=this.result.win;this.session.controlsEnabled=!1,this.session.frozen=!0,i?(e.wins++,e.money+=n.reward,e.defeated[n.id]=(e.defeated[n.id]||0)+1):e.losses++;let r=Ne(i?"BATTLE WIN":"BATTLE LOSE",z("div",{class:"enc-head"},z("span",{class:"enc-team"},n.team),z("span",{class:"enc-name"},n.name)),z("div",{class:"enc-line"},`\u300C${i?n.lines.win:n.lines.lose}\u300D`),z("div",{class:"hint"},`\u30BF\u30A4\u30E0 ${se(this.raceT)}\u3000${this.result.how==="snap"?"\uFF08\u3061\u304E\u308A\u6C7A\u7740\uFF09":this.result.how==="retire"?"\uFF08\u30EA\u30BF\u30A4\u30A2\uFF09":""}`)),o=z("div",{class:"screen dialog result"},r);t.ui.appendChild(o);let a=c=>{t.transition(()=>t.setMode(new vs(t,{returnPos:this.opts.returnPos,message:c})))};if(i){r.appendChild(z("div",{class:"reward"},`\u8CDE\u91D1 ${hn(n.reward)} \u7372\u5F97\uFF01`)),r.appendChild(z("div",{class:"hint"},"\u6226\u5229\u54C1\uFF1A\u30E9\u30A4\u30D0\u30EB\u306E\u30DE\u30B7\u30F3\u304B\u3089\u30D1\u30FC\u30C4\u30921\u3064\u9078\u3093\u3067\u6301\u3061\u5E30\u308C\u307E\u3059"));let c=Object.entries(n.parts).filter(([,h])=>h).map(([h,u])=>({cat:h,p:Xe[u]})),l=new Be(t,c.map(({cat:h,p:u})=>({label:`${or[h]}\uFF1A${u.name}`,sub:`${cr(u.rank)}\u3000${u.desc}\u3000\uFF08\u6240\u6301 ${e.owned[u.id]||0}\uFF09`,action:()=>{Wo(e,u.id),l.destroy(),a(`${u.name} \u3092\u624B\u306B\u5165\u308C\u305F\uFF01`)}})),{className:"scroll"});r.appendChild(l.root)}else{let c=new Be(t,[{label:"\u8857\u306B\u623B\u308B",action:()=>{c.destroy(),a("\u6B21\u306F\u8CA0\u3051\u306A\u3044\u2026")}}]);r.appendChild(c.root)}}exit(){this.session.dispose(),this.hud.destroy(),this.game.world.setCourse(null),this.game.mirrorModel=null}};var Hl={};function bi(s){return Hl[s.key]||(Hl[s.key]=new Uo(s)),Hl[s.key]}var td=4,ys=new L,vs=class s{constructor(t,e={}){this.game=t,this.opts=e}enter(){let t=this.game,e=t.story;t.audio.playBgm("town"),t.world.setCourse(null),this.graph=Lu(),this.session=new ei(t,{corridor:t.world.corridor});let n=ps(e),i=this.session.addCar({carId:n.carId,equipped:n.equipped,color:n.color,isPlayer:!0,name:We.name}),r=this.opts.returnPos||e.pos;if(r)i.car.place(r.x,r.z,r.h,0);else{let o=he[Al.node];i.car.place(o.x-2.5,o.z+22,Al.heading,0)}i.color="#33e1ff",t.mirrorModel=i.model,t.rig.mode=this.opts.view||"chase",t.rig.reset(),this.hud=new yn(t.ui),this.hud.setMapCourse(null),this.labels=z("div",{class:"labels"}),t.ui.appendChild(this.labels),this.dialog=null,this.paused=!1,this.spawnT=0,this.encounter=null,this.poiCool=0;for(let o=0;o<td;o++)this.spawnRival(!0);this.hud.flash(this.opts.message||"\u897F\u6C60\u888B",2.2,this.opts.message?"":"\u30E9\u30A4\u30D0\u30EB\u306E\u5F8C\u308D\u3067\u30D1\u30C3\u30B7\u30F3\u30B0\uFF08"+ed(t,"flash")+"\uFF09\u3057\u3066\u30D0\u30C8\u30EB\u3092\u6311\u3081\uFF01")}availableRivals(){let t=this.game.story.wins;return kl.filter(e=>e.minWins<=t)}spawnRival(t=!1){let e=this.session,n=new Set(e.entries.filter(l=>l.rival).map(l=>l.rival.id)),i=this.availableRivals().filter(l=>!n.has(l.id));if(!i.length)return;let r=this.game.story.defeated;i.sort((l,h)=>(r[l.id]||0)-(r[h.id]||0)+(Math.random()-.5)*.8);let o=i[0],a=e.player.car,c=[];for(let[l,h]of Object.entries(this.graph))for(let u of h)c.push([l,u.to]);for(let l=0;l<40;l++){let[h,u]=c[Math.floor(Math.random()*c.length)],d=he[h],f=he[u],g=.3+Math.random()*.4,x=d.x+(f.x-d.x)*g,m=d.z+(f.z-d.z)*g,p=Math.hypot(x-a.x,m-a.z);if(p<(t?110:170)||p>650||e.entries.some(T=>Math.hypot(T.car.x-x,T.car.z-m)<30))continue;let y=Math.hypot(f.x-d.x,f.z-d.z),v=(f.x-d.x)/y,_=(f.z-d.z)/y,R=e.addCar({carId:o.car,equipped:o.parts,color:o.color,name:o.name});R.car.place(x+_*2.6,m-v*2.6,Math.atan2(v,_),9),R.ai=new Ko(R.car,this.graph,h,u,11+Math.random()*5),R.rival=o,R.rating=Fn(o.car,o.parts).rating,R.mapColor="#ff4d6d",R.label=z("div",{class:"rival-tag"},z("b",{},o.name),z("span",{},`${pe[o.car].name}\u3000\u6226\u95D8\u529B ${R.rating}`)),this.labels.appendChild(R.label);return}}removeRival(t){t.label?.remove(),this.session.removeCar(t)}update(t){let e=this.game,n=this.session,i=e.story,r=e.input;if(this.paused)return;if(i.playtime+=t,r.hitCode("Escape")&&!this.dialog){this.pause();return}n.update(t);let o=n.player;r.hit("view")&&this.hud.setView(vn[e.rig.cycle(["chase","cockpit","hood"])]),r.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",e.rig.update(t,o.model,o.car),n.updateAudio(o),this.spawnT-=t;for(let h of n.entries.filter(u=>u.rival))Math.hypot(h.car.x-o.car.x,h.car.z-o.car.z)>750&&!this.encounter&&this.removeRival(h);if(this.spawnT<=0&&n.entries.filter(h=>h.rival).length<td&&(this.spawnRival(),this.spawnT=4),r.hit("flash")&&!this.encounter&&!this.dialog){o.flash=.35;let h=this.findFlashTarget();h&&(this.encounter={e:h,t:.7})}this.encounter&&!this.dialog&&(this.encounter.t-=t,this.encounter.t<=0&&this.openEncounter(this.encounter.e)),this.poiCool-=t;let a=null;for(let h of e.world.poiMarkers)Math.hypot(h.x-o.car.x,h.z-o.car.z)<8&&(a=h);if(a&&!this.dialog){let h=Math.abs(o.car.vu)<4;this.hud.prompt.textContent=h?`${ed(e,"interact")}\uFF1A${a.poi.type==="shop"?"\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30B7\u30E7\u30C3\u30D7\u306B\u5165\u308B":"\u30BB\u30FC\u30D6\u3059\u308B\uFF08GS\uFF09"}`:`${a.poi.name}\u3000\u2014 \u505C\u8ECA\u3057\u3066\u304F\u3060\u3055\u3044`,this.hud.prompt.style.display="block",h&&r.hit("interact")&&this.poiCool<=0&&(a.poi.type==="shop"?this.openShop():this.openSave(a))}else this.dialog||(this.hud.prompt.style.display="none");this.hud.update(t),this.hud.drawTach(o.car),this.hud.tl.innerHTML=`<div class="who">${We.name}\u3000<span>${pe[o.carId].name}</span></div><div>\u6240\u6301\u91D1 <b>${hn(i.money)}</b></div><div>\u6226\u7E3E <b>${i.wins}</b>\u52DD ${i.losses}\u6557</div>`;let c=n.entries.map(h=>({x:h.car.x,z:h.car.z,h:h.car.h,color:h.isPlayer?"#33e1ff":"#ff4d6d"})),l=e.world.poiMarkers.map(h=>({x:h.x,z:h.z,color:h.poi.type==="shop"?"#ff3b6b":"#2ee6a8",label:h.poi.type==="shop"?"SHOP":"GS"}));this.hud.drawMap(c,l),this.updateLabels()}findFlashTarget(){let t=this.session.player.car,[e,n]=t.fwd(),i=null,r=1e9;for(let o of this.session.entries){if(!o.rival)continue;let a=o.car.x-t.x,c=o.car.z-t.z,l=Math.hypot(a,c);l>75||(a*e+c*n)/(l||1)<.8||l<r&&(r=l,i=o)}return i}updateLabels(){let e=this.game.rig.camera,n=this.session.player.car;for(let i of this.session.entries){if(!i.label)continue;let r=Math.hypot(i.car.x-n.x,i.car.z-n.z);ys.set(i.car.x,2.4,i.car.z).project(e);let o=r<140&&ys.z<1&&Math.abs(ys.x)<1.1&&Math.abs(ys.y)<1.1;i.label.style.display=o?"block":"none",o&&(i.label.style.left=`${(ys.x+1)/2*window.innerWidth}px`,i.label.style.top=`${(1-ys.y)/2*window.innerHeight}px`,i.label.style.opacity=String(Math.max(.3,1-r/140)),i.label.classList.toggle("near",r<75))}}pickLayout(t){let e=null;for(let n of Tl){let i=ir.find(c=>c.key===`${n.id}_f`),r=bi(i),o=r.project(t.x,t.z,-1),a=o.dist;if(!e||a<e.d){let[c,l]=t.fwd(),h=c*r.tx[o.i]+l*r.tz[o.i];e={d:a,course:n,reverse:h<0}}}return ir.find(n=>n.key===`${e.course.id}_${e.reverse?"r":"f"}`)}openEncounter(t){let e=this.game,n=this.session;t.flash=1,t.ai.paused=!0,n.controlsEnabled=!1;let i=t.rival,r=this.pickLayout(n.player.car),o=n.player.car.spec,a=Ne(null,z("div",{class:"enc-head"},z("span",{class:"enc-team"},i.team),z("span",{class:"enc-name"},i.name)),z("div",{class:"enc-car"},`${pe[i.car].name}\u3000\uFF08${pe[i.car].ref}\uFF09`),z("div",{class:"enc-line"},`\u300C${i.lines.meet}\u300D`),z("div",{class:"enc-vs"},z("div",{},z("small",{},"YOU"),z("b",{},String(o.rating))),z("div",{class:"vs"},"VS"),z("div",{},z("small",{},"RIVAL"),z("b",{},String(t.rating)))),z("div",{class:"enc-course"},`COURSE\uFF1A${r.name}\u3000${r.course.laps}\u5468`,z("br"),z("small",{},r.course.desc)),z("div",{class:"hint"},"\u5148\u306B\u30B4\u30FC\u30EB\u3059\u308B\u304B\u3001200m\u4EE5\u4E0A\u5F15\u304D\u96E2\u305B\u3070\u52DD\u5229")),c=z("div",{class:"screen dialog encounter"},a),l=()=>{e.input.pressed.clear(),h.destroy(),c.remove(),this.dialog=null,this.encounter=null,n.controlsEnabled=!0,t.ai.paused=!1,this.poiCool=.5},h=new Be(e,[{label:"\u30D0\u30C8\u30EB\u958B\u59CB",action:()=>{l(),this.startBattle(t,r)}},{label:"\u3084\u3081\u3066\u304A\u304F",action:()=>l()}],{onBack:()=>l()});a.appendChild(h.root),e.ui.appendChild(c),this.dialog=c}startBattle(t,e){let n=this.game,i=this.session.player.car,r={x:i.x,z:i.z,h:i.h};n.transition(()=>n.setMode(new jo(n,{rival:t.rival,layout:e,returnPos:r})))}openShop(){let t=this.game;this.session.controlsEnabled=!1,this.session.frozen=!0,this.dialog=!0,this.hud.prompt.style.display="none",ju(t,t.story,()=>{let e=this.session.player,n={x:e.car.x,z:e.car.z,h:e.car.h};t.setMode(new s(t,{returnPos:n,message:"\u30BB\u30C3\u30C6\u30A3\u30F3\u30B0\u5B8C\u4E86",view:t.rig.mode}))})}openSave(t){let e=this.game,n=this.session;n.controlsEnabled=!1,n.frozen=!0;let i=Ne("GS \u2014 \u30BB\u30FC\u30D6\u30DD\u30A4\u30F3\u30C8",z("div",{class:"hint"},`${t.poi.name}`),z("div",{},"\u73FE\u5728\u306E\u9032\u884C\u72B6\u6CC1\u3092\u30BB\u30FC\u30D6\u3057\u307E\u3059\u304B\uFF1F")),r=z("div",{class:"screen dialog"},i),o=c=>{e.input.pressed.clear(),a.destroy(),r.remove(),this.dialog=null,n.controlsEnabled=!0,n.frozen=!1,this.poiCool=1,c&&this.hud.flash(c,1.6)},a=new Be(e,[{label:"\u30BB\u30FC\u30D6\u3059\u308B",action:()=>{let c=n.player.car;e.story.pos={x:c.x,z:c.z,h:c.h},o(Hu(e.story)?"\u30BB\u30FC\u30D6\u3057\u307E\u3057\u305F":"\u30BB\u30FC\u30D6\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}},{label:"\u3084\u3081\u308B",action:()=>o()}],{onBack:()=>o()});i.appendChild(a.root),e.ui.appendChild(r),this.dialog=r}pause(){let t=this.game;this.paused=!0;let e=t.story,n=Ne("PAUSE",z("div",{class:"hint"},`\u6240\u6301\u91D1 ${hn(e.money)}\u3000/\u3000${e.wins}\u52DD${e.losses}\u6557\u3000/\u3000\u30D7\u30EC\u30A4\u6642\u9593 ${Math.floor(e.playtime/60)}\u5206`),z("div",{class:"hint"},"\u30BB\u30FC\u30D6\u306FGS\uFF08ENEOS\u30BB\u30EB\u30D5\u6C60\u888B\uFF09\u3067\u884C\u3048\u307E\u3059")),i=z("div",{class:"screen dialog"},n),r=()=>{t.input.pressed.clear(),o.destroy(),i.remove(),this.paused=!1},o=new Be(t,[{label:"\u518D\u958B",action:r},{label:"\u30BF\u30A4\u30C8\u30EB\u3078\u623B\u308B",sub:"\u672A\u30BB\u30FC\u30D6\u306E\u9032\u884C\u306F\u5931\u308F\u308C\u307E\u3059",action:()=>{o.destroy(),t.transition(()=>t.setMode(new On(t)))}}],{onBack:r});n.appendChild(o.root),t.ui.appendChild(i)}exit(){this.session.dispose(),this.hud.destroy(),this.game.mirrorModel=null}};function ed(s,t){return(s.settings.keys[t]||"").replace(/^Key/,"").replace(/^Digit/,"")}var nd=["chase","cockpit","hood","gallery"],Ms=class{constructor(t,e){this.game=t,this.opts=e}enter(){let t=this.game,{layout:e,replay:n}=this.opts;this.path=bi(e),t.world.setCourse(this.path),t.rig.setGallerySpots(this.path),t.audio.playBgm(null);let i=Fn(n.carId,n.equipped);this.model=qo(pe[n.carId],n.color,{aero:n.equipped.aero,wing:n.equipped.aero==="aero_wing"||n.equipped.aero==="aero_full"?"gt":void 0}),t.world.scene.add(this.model),$o(this.model);let r=i.wheelbase,o=r*i.frontWeight;this.ghost={spec:i,a:r-o,b:o,x:0,z:0,h:0,pitch:0,roll:0,steer:0,spinF:0,spinR:0,rpm:0,vu:0,vv:0,gear:1,boost:0,slip:0,input:{brake:0,throttle:0,steer:0},get speed(){return Math.abs(this.vu)},right(){return[-Math.cos(this.h),Math.sin(this.h)]}},this.engine=t.audio.createEngine(i),this.t=0,this.speed=1,this.playing=!0,this.duration=n.frames/n.rate,t.rig.mode="chase",t.rig.reset(),t.mirrorModel=this.model,this.hud=new yn(t.ui),this.hud.setMapCourse(this.path),this.hud.flash("REPLAY",1.5,e.name),this.hud.setView(vn[t.rig.mode])}frame(t){let e=this.opts.replay,n=Math.min(e.frames-1.001,Math.max(0,t*e.rate)),i=Math.floor(n),r=n-i,o=e.data,a=e.stride,c=i*a,l=(i+1)*a,h=f=>o[c+f]+(o[l+f]-o[c+f])*r,u=this.ghost;u.x=h(0),u.z=h(1);let d=o[l+2]-o[c+2];d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),u.h=o[c+2]+d*r,u.pitch=h(3),u.roll=h(4),u.steer=h(5),u.spinF=h(6),u.spinR=h(7),u.rpm=h(8),u.vu=h(9),u.gear=o[c+10],u.input.brake=o[c+11],u.input.throttle=o[c+12],u.boost=h(13),u.slip=h(14)}update(t){let e=this.game,n=e.input;if(n.hitCode("Escape")){e.transition(()=>e.setMode(this.opts.back()));return}n.hitCode("Space")&&(this.playing=!this.playing),n.hitCode("ArrowRight")&&(this.t=Math.min(this.duration,this.t+5)),n.hitCode("ArrowLeft")&&(this.t=Math.max(0,this.t-5)),n.hitCode("ArrowUp")&&(this.speed=Math.min(4,this.speed*2)),n.hitCode("ArrowDown")&&(this.speed=Math.max(.25,this.speed/2)),n.hit("view")&&this.hud.setView(vn[e.rig.cycle(nd)]);for(let r=1;r<=4;r++)n.hitCode("Digit"+r)&&(e.rig.mode=nd[r-1],e.rig.reset(),e.rig.galleryIdx=-1,this.hud.setView(vn[e.rig.mode]));n.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",this.playing&&(this.t+=t*this.speed),this.t>=this.duration&&(this.t=0,e.rig.reset()),this.frame(this.t),Yo(this.model,this.ghost),e.rig.update(t,this.model,this.ghost),e.audio.updateEngine(this.engine,this.ghost,this.playing?1:0,0),this.hud.update(t),this.hud.drawTach(this.ghost);let i=this.opts.record;this.hud.tc.innerHTML=`<div class="lap">REPLAY ${this.playing?"\u25B6":"\u275A\u275A"} \xD7${this.speed}</div><div class="time">${se(this.t)} / ${se(this.duration)}</div>`,this.hud.tr.innerHTML=i?`<div class="lbl">BEST</div><div class="big">${se(i.best)}</div><div class="laps">${i.laps.map((r,o)=>`<div>L${o+1} ${se(r)}</div>`).join("")}</div>`:"",this.hud.tl.innerHTML=`<div class="who">${this.opts.layout.name}</div><div class="hint">\u8996\u70B9 ${Ho(e.settings.keys.view)} / 1-4\u3000\u4E00\u6642\u505C\u6B62 Space\u3000\u65E9\u9001\u308A/\u5DFB\u623B\u3057 \u2190\u2192\u3000\u901F\u5EA6 \u2191\u2193\u3000\u7D42\u4E86 Esc</div>`,this.hud.drawMap([{x:this.ghost.x,z:this.ghost.z,h:this.ghost.h,color:"#33e1ff"}])}exit(){let t=this.game;t.world.scene.remove(this.model),t.audio.destroyEngine(this.engine),this.hud.destroy(),t.world.setCourse(null),t.mirrorModel=null}};var ta=3,ea=class s{constructor(t,e){this.game=t,this.opts=e}enter(){let t=this.game,{layout:e,carId:n,equipped:i,color:r,kind:o}=this.opts;this.ta=o==="ta";let a=bi(e);this.path=a,t.audio.playBgm(this.ta?"battle":"town"),t.world.setCourse(a),t.rig.setGallerySpots(a),this.session=new ei(t,{corridor:a.corridor,path:a});let c=this.session.addCar({carId:n,equipped:i,color:r,isPlayer:!0}),l=a.posAt(-8,0);c.car.place(l.x,l.z,l.h,0),this.P=c,this.tracker=new Mi(a,-8),this.recorder=this.ta?new Zo(30):null,t.mirrorModel=c.model,t.rig.mode==="gallery"&&(t.rig.mode="chase"),t.rig.reset(),this.hud=new yn(t.ui),this.hud.setMapCourse(a),this.t=0,this.state="count",this.session.frozen=!0,this.session.controlsEnabled=!1;let h=ms()[e.key]?.[0];this.recordBest=h?h.best:null,this.lastLap=null,this.sectorFlash="",this.hud.flash(this.ta?"TIME ATTACK":"FREE RUN",1.4,e.name),this.countdown=new _s(t,this.hud,()=>{this.state="run",this.session.frozen=!1,this.session.controlsEnabled=!0,this.tracker.start(this.t)})}update(t){let e=this.game;if(this.paused)return;if(e.input.hitCode("Escape")&&this.state!=="done"){this.pause();return}this.state==="count"&&this.countdown.update(t),this.state==="run"&&(this.t+=t),this.session.update(t),this.recorder&&this.state==="run"&&this.recorder.sample(t,this.P.car);let n=this.tracker.update(this.P.car,this.t);n&&this.state==="run"&&this.onEvent(n),e.input.hit("view")&&this.hud.setView(vn[e.rig.cycle(["chase","cockpit","hood"])]),e.input.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",e.rig.update(t,this.P.model,this.P.car),this.session.updateAudio(this.P);let i=this.tracker;this.hud.update(t),this.hud.drawTach(this.P.car);let r=this.state==="run"?this.t-i.lapStart:0,o=this.ta?`LAP <b>${Math.min(ta,i.lap+1)}</b>/${ta}`:`LAP <b>${i.lap+1}</b>`;this.hud.tc.innerHTML=`<div class="lap">${o}</div><div class="time">${se(r)}</div><div class="sectors">${this.sectorFlash}</div>`;let a=i.laps.map((c,l)=>`<div class="${c===i.best?"best":""}">L${l+1} ${se(c)}</div>`).slice(-5).join("");this.hud.tr.innerHTML=`<div class="lbl">BEST</div><div class="big">${se(i.best)}</div>${this.ta?`<div class="lbl">RECORD ${se(this.recordBest)}</div>`:""}<div class="laps">${a}</div>`,this.hud.tl.innerHTML=`<div class="who">${this.opts.layout.name}</div><div class="hint">${this.ta?"TIME ATTACK "+ta+"\u5468":"FREE RUN\u3000Esc\u3067\u30E1\u30CB\u30E5\u30FC"}</div>`,this.hud.drawMap([{x:this.P.car.x,z:this.P.car.z,h:this.P.car.h,color:"#33e1ff"}])}onEvent(t){let e=this.tracker;if(t.type==="sector"){let n=t.idx-1,i=e.sectors.map(a=>a[n]).filter(a=>a!=null),r=i.length?Math.min(...i):null,o=r!=null?t.time-r:null;this.sectorFlash=`S${t.idx} ${se(t.time)} ${o!=null?`<span class="${o<=0?"neg":"pos"}">${o<=0?"\u2212":"+"}${Math.abs(o).toFixed(3)}</span>`:""}`}else if(t.type==="lap"){let n=t.time===e.best;this.sectorFlash=`S3 ${se(e.sectors[e.sectors.length-1][2])}`,this.hud.flash(se(t.time),2,n?"BEST LAP!":`LAP ${t.lap}`),this.ta&&e.lap>=ta&&this.finishTA()}}async finishTA(){let t=this.game;this.state="done",this.session.controlsEnabled=!1;let e=this.tracker,n=`${this.opts.layout.key}_${Date.now()}`,i={id:n,date:new Date().toISOString(),laps:e.laps,sectors:e.sectors,best:e.best,total:e.laps.reduce((a,c)=>a+c,0),carId:this.opts.carId},r=this.recorder.finish({carId:this.opts.carId,equipped:this.opts.equipped,color:this.opts.color,layoutKey:this.opts.layout.key}),o=Vu(this.opts.layout.key,i);await Gu(n,r),setTimeout(()=>this.showResult(i,o,r),1500)}showResult(t,e,n){let i=this.game,r=z("table",{class:"rec-table"},z("tr",{},z("th",{},"LAP"),z("th",{},"S1"),z("th",{},"S2"),z("th",{},"S3"),z("th",{},"TIME")));t.laps.forEach((l,h)=>{let u=t.sectors[h];r.appendChild(z("tr",{class:l===t.best?"best":""},z("td",{},String(h+1)),z("td",{},se(u[0])),z("td",{},se(u[1])),z("td",{},se(u[2])),z("td",{class:"hl"},se(l))))});let o=Ne("TIME ATTACK RESULT",z("div",{class:"reward"},`BEST LAP ${se(t.best)}\u3000${e===0?"\u2605 \u30B3\u30FC\u30B9\u30EC\u30B3\u30FC\u30C9\u66F4\u65B0\uFF01":e>=0?`\uFF08${e+1}\u4F4D\uFF09`:""}`),r,z("div",{class:"hint"},`TOTAL ${se(t.total)}\u3000/\u3000${new Date(t.date).toLocaleString("ja-JP")}`)),a=z("div",{class:"screen dialog result"},o),c=new Be(i,[{label:"\u30EA\u30D7\u30EC\u30A4\u3092\u898B\u308B",action:()=>{c.destroy(),i.transition(()=>i.setMode(new Ms(i,{layout:this.opts.layout,replay:n,record:t,back:()=>new s(i,this.opts)})))}},{label:"\u3082\u3046\u4E00\u5EA6\u8D70\u308B",action:()=>{c.destroy(),i.transition(()=>i.setMode(new s(i,this.opts)))}},{label:"PRACTICE\u30E1\u30CB\u30E5\u30FC\u3078",action:()=>{c.destroy(),i.transition(()=>i.setMode(new On(i,"practice")))}}]);o.appendChild(c.root),i.ui.appendChild(a)}pause(){let t=this.game;this.paused=!0,Jo(t,"PAUSE",[{label:"\u518D\u958B",action:()=>{this.paused=!1}},{label:"\u30EA\u30B9\u30BF\u30FC\u30C8",action:()=>t.transition(()=>t.setMode(new s(t,this.opts)))},{label:"PRACTICE\u30E1\u30CB\u30E5\u30FC\u3078",action:()=>t.transition(()=>t.setMode(new On(t,"practice")))}],()=>{this.paused=!1})}exit(){this.session.dispose(),this.hud.destroy(),this.game.world.setCourse(null),this.game.mirrorModel=null}};var On=class s{constructor(t,e=null){this.game=t,this.sub=e}enter(){let t=this.game;t.audio.playBgm("town"),t.world.setCourse(null),this.ang=0,this.root=z("div",{class:"screen title"}),this.logo=z("div",{class:"logo"},z("div",{class:"logo-main"},"RACING IBR"),z("div",{class:"logo-sub"},"\u897F\u6C60\u888B\u30CA\u30A4\u30C8\u30EC\u30FC\u30B5\u30FC\u30BA"),z("div",{class:"logo-ver"},"v0.1 \u2014 Encounter Battle Build")),this.menuWrap=z("div",{class:"title-menu"}),this.root.append(this.logo,this.menuWrap,z("div",{class:"title-foot"},"\u2191\u2193 \u9078\u629E\u3000Enter \u6C7A\u5B9A\u3000Esc \u623B\u308B\u3000\uFF5C\u3000\u30AF\u30EA\u30C3\u30AF\u64CD\u4F5C\u3082\u53EF")),t.ui.appendChild(this.root),this.sub==="practice"?this.showPractice():this.showMain()}setMenu(t,e,n){this.menu&&this.menu.destroy(),this.menuWrap.innerHTML="",n&&this.menuWrap.appendChild(z("div",{class:"menu-title"},n)),this.menu=new Be(this.game,t,{onBack:e}),this.menuWrap.appendChild(this.menu.root)}showMain(){this.setMenu([{label:"STORY",sub:"\u30EC\u30FC\u30B7\u30F3\u30B0RPG\u30E2\u30FC\u30C9",action:()=>this.showStory()},{label:"PRACTICE",sub:"\u30BF\u30A4\u30E0\u30A2\u30BF\u30C3\u30AF\uFF0F\u30D5\u30EA\u30FC\u30E9\u30F3",action:()=>this.showPractice()},{label:"COMMON SETTING",sub:"\u30AD\u30FC\u914D\u7F6E\u30FB\u64CD\u4F5C\u8A2D\u5B9A",action:()=>this.showSettings()}])}showStory(){let t=Nl()?Fl():null;this.setMenu([{label:"NEW GAME",sub:"\u9ED2\u7895\u30AB\u30B1\u30EB\u306886-GR\u306E\u7269\u8A9E\u3092\u59CB\u3081\u308B",action:()=>this.newGame(!!t)},{label:"CONTINUE",disabled:!t,sub:t?`${hn(t.money)}\u3000${t.wins}\u52DD\u3000${new Date(t.savedAt).toLocaleString("ja-JP")}`:"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306A\u3057",action:()=>this.startStory(t)},{label:"\u623B\u308B",action:()=>this.showMain()}],()=>this.showMain(),"STORY")}newGame(t){t?this.setMenu([{label:"\u306F\u3044\uFF08\u6700\u521D\u304B\u3089\u59CB\u3081\u308B\uFF09",sub:"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306F\u6B21\u306BGS\u3067\u30BB\u30FC\u30D6\u3059\u308B\u307E\u3067\u6B8B\u308A\u307E\u3059",action:()=>this.startStory(Ul())},{label:"\u3044\u3044\u3048",action:()=>this.showStory()}],()=>this.showStory(),"NEW GAME\u3092\u59CB\u3081\u307E\u3059\u304B\uFF1F"):this.startStory(Ul())}startStory(t){let e=this.game;e.story=structuredClone(t),e.transition(()=>e.setMode(new vs(e)))}showPractice(){this.setMenu([{label:"TIME ATTACK",sub:"\u30BB\u30AF\u30BF\u30FC\u30BF\u30A4\u30E0\u30FB\u30EA\u30D7\u30EC\u30A4\u3092\u8A18\u9332",action:()=>this.pickLayout("ta")},{label:"FREE RUN",sub:"\u30BF\u30A4\u30E0\u3092\u6C17\u306B\u305B\u305A\u81EA\u7531\u306B\u8D70\u884C",action:()=>this.pickLayout("free")},{label:"RECORDS / REPLAY",sub:"\u8A18\u9332\u306E\u78BA\u8A8D\u3068\u30EA\u30D7\u30EC\u30A4\u518D\u751F",action:()=>this.pickLayout("rec")},{label:"\u623B\u308B",action:()=>this.showMain()}],()=>this.showMain(),"PRACTICE")}pickLayout(t){let e=ms();this.setMenu([...ir.map(n=>({label:n.name,sub:`${n.course.desc}\u3000BEST ${se(e[n.key]?.[0]?.best)}`,action:()=>t==="rec"?this.showRecords(n):this.pickSetup(t,n)})),{label:"\u623B\u308B",action:()=>this.showPractice()}],()=>this.showPractice(),t==="ta"?"TIME ATTACK \u2014 \u30B3\u30FC\u30B9\u9078\u629E":t==="free"?"FREE RUN \u2014 \u30B3\u30FC\u30B9\u9078\u629E":"RECORDS \u2014 \u30B3\u30FC\u30B9\u9078\u629E")}pickSetup(t,e){let n=Nl()?Fl():null,i=n?n.garage[n.active]:null,r=(o,a)=>{let c=this.game;c.transition(()=>c.setMode(new ea(c,{layout:e,kind:t,carId:We.car,equipped:o,color:a})))};this.setMenu([{label:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u30DE\u30B7\u30F3",disabled:!i,sub:i?"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306E\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u72B6\u614B\u3067\u8D70\u884C":"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306A\u3057",action:()=>r(i.equipped,i.color)},{label:"\u30CE\u30FC\u30DE\u30EB 86-GR",sub:pe[We.car].ref+" \u76F8\u5F53",action:()=>r({...pe[We.car].stock},We.color)},{label:"\u623B\u308B",action:()=>this.pickLayout(t)}],()=>this.pickLayout(t),`${e.name} \u2014 \u30DE\u30B7\u30F3\u9078\u629E`)}showRecords(t){let e=ms()[t.key]||[];this.menu&&this.menu.destroy(),this.menuWrap.innerHTML="";let n=z("table",{class:"rec-table"},z("tr",{},z("th",{},"#"),z("th",{},"BEST LAP"),z("th",{},"S1"),z("th",{},"S2"),z("th",{},"S3"),z("th",{},"TOTAL"),z("th",{},"\u65E5\u6642"),z("th",{},"")));e.forEach((o,a)=>{let c=o.laps.indexOf(o.best),l=o.sectors[c]||[],h=z("button",{class:"mini-btn"},"\u25B6 \u30EA\u30D7\u30EC\u30A4");h.onclick=async()=>{let u=await Wu(o.id);if(!u){h.textContent="\u30C7\u30FC\u30BF\u306A\u3057";return}let d=this.game;d.transition(()=>d.setMode(new Ms(d,{layout:t,replay:u,record:o,back:()=>new s(d,"practice")})))},n.appendChild(z("tr",{},z("td",{},String(a+1)),z("td",{class:"hl"},se(o.best)),z("td",{},se(l[0])),z("td",{},se(l[1])),z("td",{},se(l[2])),z("td",{},se(o.total)),z("td",{},new Date(o.date).toLocaleString("ja-JP")),z("td",{},h)))});let i=z("button",{class:"menu-item small"},"\u623B\u308B");i.onclick=()=>{r(),this.pickLayout("rec")};let r=this.game.input.onKey(o=>{o.code==="Escape"&&(r(),this.pickLayout("rec"))});this.menu={destroy:()=>r()},this.menuWrap.appendChild(Ne(`${t.name} \u2014 \u8A18\u9332`,e.length?n:z("div",{class:"hint"},"\u307E\u3060\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093"),i))}showSettings(){this.menu&&this.menu.destroy(),this.menuWrap.innerHTML="",this.root.style.display="none",Bu(this.game,()=>{this.root.style.display="",this.showMain()})}update(t){this.ang+=t*.05;let e=this.game.rig.camera,n=60,i=-40;e.position.set(n+Math.cos(this.ang)*420,150,i+Math.sin(this.ang)*420),e.lookAt(n,0,i),e.fov=55,e.updateProjectionMatrix()}exit(){this.menu&&this.menu.destroy()}};var Vl=new Go(document.getElementById("app"));Vl.setMode(new On(Vl));location.search.includes("debug")&&(window.__dbg={game:Vl,RaceAI:xs});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
