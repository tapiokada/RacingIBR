(()=>{var Ku=0,zl=1,Ju=2;var Kh=1,Qu=2,An=3,Kn=0,Le=1,Oe=2,$n=0,Xi=1,Fs=2,kl=3,Hl=4,ju=5,ui=100,td=101,ed=102,nd=103,id=104,sd=200,rd=201,od=202,ad=203,Da=204,Ua=205,cd=206,ld=207,hd=208,ud=209,dd=210,fd=211,pd=212,md=213,gd=214,Na=0,Fa=1,Oa=2,Zi=3,Ba=4,za=5,ka=6,Ha=7,ol=0,xd=1,_d=2,Zn=0,vd=1,yd=2,Md=3,al=4,Sd=5,bd=6,wd=7;var Jh=300,Ki=301,Ji=302,Va=303,Ga=304,To=306,Os=1e3,fi=1001,Wa=1002,$e=1003,Ed=1004;var lr=1005;var fn=1006,Jo=1007;var pi=1008;var Ln=1009,Qh=1010,jh=1011,Bs=1012,cl=1013,mi=1014,pn=1015,Zs=1016,ll=1017,hl=1018,Qi=1020,tu=35902,eu=1021,nu=1022,an=1023,iu=1024,su=1025,qi=1026,ji=1027,ul=1028,dl=1029,ru=1030,fl=1031;var pl=1033,kr=33776,Hr=33777,Vr=33778,Gr=33779,Xa=35840,qa=35841,Ya=35842,$a=35843,Za=36196,Ka=37492,Ja=37496,Qa=37808,ja=37809,tc=37810,ec=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,cc=37818,lc=37819,hc=37820,uc=37821,Wr=36492,dc=36494,fc=36495,ou=36283,pc=36284,mc=36285,gc=36286;var Xr=2300,xc=2301,Qo=2302,Vl=2400,Gl=2401,Wl=2402;var Td=3200,Ad=3201;var ml=0,Rd=1,qn="",Ie="srgb",ss="srgb-linear",Ao="linear",re="srgb";var wi=7680;var Xl=519,Cd=512,Id=513,Pd=514,au=515,Ld=516,Dd=517,Ud=518,Nd=519,_c=35044;var ql="300 es",Cn=2e3,qr=2001,Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jo=Math.PI/180,vc=180/Math.PI;function In(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Pe(s,t,e){return Math.max(t,Math.min(e,s))}function Fd(s,t){return(s%t+t)%t}function ta(s,t,e){return(1-e)*s+e*t}function dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var lt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],v=i[4],_=i[7],R=i[2],T=i[5],A=i[8];return r[0]=o*x+a*y+c*R,r[3]=o*m+a*v+c*T,r[6]=o*p+a*_+c*A,r[1]=l*x+h*y+d*R,r[4]=l*m+h*v+d*T,r[7]=l*p+h*_+d*A,r[2]=u*x+f*y+g*R,r[5]=u*m+f*v+g*T,r[8]=u*p+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ea.makeScale(t,e)),this}rotate(t){return this.premultiply(ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ea=new Xt;function cu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Od(){let s=Yr("canvas");return s.style.display="block",s}var Yl={};function Is(s){s in Yl||(Yl[s]=!0,console.warn(s))}function Bd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Qt={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Ao:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var $l=[.64,.33,.3,.6,.15,.06],Zl=[.2126,.7152,.0722],Kl=[.3127,.329],Jl=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[ss]:{primaries:$l,whitePoint:Kl,transfer:Ao,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:Zl,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:$l,whitePoint:Kl,transfer:re,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:Zl,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var Ei,yc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Yr("canvas")),Ei.width=t.width,Ei.height=t.height;let n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hd=0,$r=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(na(i[o].image)):r.push(na(i[o]))}else r=na(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vd=0,He=class s extends Jn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=fi,i=fi,r=fn,o=pi,a=an,c=Ln,l=s.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=In(),this.name="",this.source=new $r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Os:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Os:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Jh;He.DEFAULT_ANISOTROPY=1;var ae=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,_=(f+1)/2,R=(p+1)/2,T=(h+u)/4,A=(d+x)/4,I=(g+m)/4;return v>_&&v>R?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=A/n):_>R?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=I/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends Jn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new $r(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zr=class extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sc=class extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==u||l!==f||h!==g){let m=1-a,p=c*u+l*f+h*g+d*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}let _=a*y;if(c=c*m+u*_,l=l*m+f*_,h=h*m+g*_,d=d*m+x*_,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ia.copy(this).projectOnVector(t),this.sub(ia)}reflect(t){return this.sub(ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ia=new L,jl=new mn,Un=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),ur.subVectors(this.max,ys),Ti.subVectors(t.a,ys),Ai.subVectors(t.b,ys),Ri.subVectors(t.c,ys),kn.subVectors(Ai,Ti),Hn.subVectors(Ri,Ai),si.subVectors(Ti,Ri);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-si.z,si.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,si.z,0,-si.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-si.y,si.x,0];return!sa(e,Ti,Ai,Ri,ur)||(e=[1,0,0,0,1,0,0,0,1],!sa(e,Ti,Ai,Ri,ur))?!1:(dr.crossVectors(kn,Hn),e=[dr.x,dr.y,dr.z],sa(e,Ti,Ai,Ri,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Sn=[new L,new L,new L,new L,new L,new L,new L,new L],sn=new L,hr=new Un,Ti=new L,Ai=new L,Ri=new L,kn=new L,Hn=new L,si=new L,ys=new L,ur=new L,dr=new L,ri=new L;function sa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ri.fromArray(s,r);let a=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),c=t.dot(ri),l=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Gd=new Un,Ms=new L,ra=new L,Qn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);let e=Ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(ra)),this.expandByPoint(Ms.copy(t.center).sub(ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},bn=new L,oa=new L,fr=new L,Vn=new L,aa=new L,pr=new L,ca=new L,Kr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){oa.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(oa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=Vn.dot(this.direction),c=-Vn.dot(fr),l=Vn.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(oa).addScaledVector(fr,u),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);let n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,i,r){aa.subVectors(e,t),pr.subVectors(n,t),ca.crossVectors(aa,pr);let o=this.direction.dot(ca),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);let c=a*this.direction.dot(pr.crossVectors(Vn,pr));if(c<0)return null;let l=a*this.direction.dot(aa.cross(Vn));if(l<0||c+l>o)return null;let h=-a*Vn.dot(ca);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class s{constructor(t,e,n,i,r,o,a,c,l,h,d,u,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,u,f,g,x,m)}set(t,e,n,i,r,o,a,c,l,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ci.setFromMatrixColumn(t,0).length(),r=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wd,t,Xd)}lookAt(t,e,n){let i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Gn.crossVectors(n,qe),Gn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Gn.crossVectors(n,qe)),Gn.normalize(),mr.crossVectors(qe,Gn),i[0]=Gn.x,i[4]=mr.x,i[8]=qe.x,i[1]=Gn.y,i[5]=mr.y,i[9]=qe.y,i[2]=Gn.z,i[6]=mr.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],_=n[11],R=n[15],T=i[0],A=i[4],I=i[8],b=i[12],M=i[1],P=i[5],F=i[9],O=i[13],B=i[2],Y=i[6],H=i[10],tt=i[14],X=i[3],rt=i[7],gt=i[11],_t=i[15];return r[0]=o*T+a*M+c*B+l*X,r[4]=o*A+a*P+c*Y+l*rt,r[8]=o*I+a*F+c*H+l*gt,r[12]=o*b+a*O+c*tt+l*_t,r[1]=h*T+d*M+u*B+f*X,r[5]=h*A+d*P+u*Y+f*rt,r[9]=h*I+d*F+u*H+f*gt,r[13]=h*b+d*O+u*tt+f*_t,r[2]=g*T+x*M+m*B+p*X,r[6]=g*A+x*P+m*Y+p*rt,r[10]=g*I+x*F+m*H+p*gt,r[14]=g*b+x*O+m*tt+p*_t,r[3]=y*T+v*M+_*B+R*X,r[7]=y*A+v*P+_*Y+R*rt,r[11]=y*I+v*F+_*H+R*gt,r[15]=y*b+v*O+_*tt+R*_t,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*f-n*c*f)+x*(+e*c*f-e*l*u+r*o*u-i*o*f+i*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=d*m*l-x*u*l+x*c*f-a*m*f-d*c*p+a*u*p,v=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,_=h*x*l-g*d*l+g*a*f-o*x*f-h*a*p+o*d*p,R=g*d*c-h*x*c-g*a*u+o*x*u+h*a*m-o*d*m,T=e*y+n*v+i*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=y*A,t[1]=(x*u*r-d*m*r-x*i*f+n*m*f+d*i*p-n*u*p)*A,t[2]=(a*m*r-x*c*r+x*i*l-n*m*l-a*i*p+n*c*p)*A,t[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*f-n*c*f)*A,t[4]=v*A,t[5]=(h*m*r-g*u*r+g*i*f-e*m*f-h*i*p+e*u*p)*A,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*A,t[7]=(o*u*r-h*c*r+h*i*l-e*u*l-o*i*f+e*c*f)*A,t[8]=_*A,t[9]=(g*d*r-h*x*r-g*n*f+e*x*f+h*n*p-e*d*p)*A,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*A,t[12]=R*A,t[13]=(h*x*i-g*d*i+g*n*u-e*x*u-h*n*m+e*d*m)*A,t[14]=(g*a*i-o*x*i-g*n*c+e*x*c+o*n*m-e*a*m)*A,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,y=c*l,v=c*h,_=c*d,R=n.x,T=n.y,A=n.z;return i[0]=(1-(x+p))*R,i[1]=(f+_)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(f-_)*T,i[5]=(1-(u+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+v)*A,i[9]=(m-y)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ci.set(i[0],i[1],i[2]).length(),o=Ci.set(i[4],i[5],i[6]).length(),a=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],rn.copy(this);let l=1/r,h=1/o,d=1/a;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Cn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,g;if(a===Cn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Cn){let c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*l,f=(n+i)*h,g,x;if(a===Cn)g=(o+r)*d,x=-2*d;else if(a===qr)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ci=new L,rn=new ee,Wd=new L(0,0,0),Xd=new L(1,1,1),Gn=new L,mr=new L,qe=new L,th=new ee,eh=new mn,Ze=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ze.DEFAULT_ORDER="XYZ";var Jr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qd=0,nh=new L,Ii=new mn,wn=new ee,gr=new L,Ss=new L,Yd=new L,$d=new mn,ih=new L(1,0,0),sh=new L(0,1,0),rh=new L(0,0,1),oh={type:"added"},Zd={type:"removed"},Pi={type:"childadded",child:null},la={type:"childremoved",child:null},ye=class s extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Ze,n=new mn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Xt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Ss,gr,this.up):wn.lookAt(gr,Ss,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(wn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zd),la.child=t,this.dispatchEvent(la),la.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,Yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,$d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ye.DEFAULT_UP=new L(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new L,En=new L,ha=new L,Tn=new L,Li=new L,Di=new L,ah=new L,ua=new L,da=new L,fa=new L,pa=new ae,ma=new ae,ga=new ae,Yn=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),on.subVectors(t,e),i.cross(on);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){on.subVectors(i,e),En.subVectors(n,e),ha.subVectors(t,e);let o=on.dot(on),a=on.dot(En),c=on.dot(ha),l=En.dot(En),h=En.dot(ha),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(o,Tn.y),c.addScaledVector(a,Tn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(t,e),ma.fromBufferAttribute(t,n),ga.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(pa,r.x),o.addScaledVector(ma,r.y),o.addScaledVector(ga,r.z),o}static isFrontFacing(t,e,n,i){return on.subVectors(n,e),En.subVectors(t,e),on.cross(En).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),En.subVectors(this.a,this.b),on.cross(En).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Li.subVectors(i,n),Di.subVectors(r,n),ua.subVectors(t,n);let c=Li.dot(ua),l=Di.dot(ua);if(c<=0&&l<=0)return e.copy(n);da.subVectors(t,i);let h=Li.dot(da),d=Di.dot(da);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Li,o);fa.subVectors(t,r);let f=Li.dot(fa),g=Di.dot(fa);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Di,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ah.subVectors(r,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(ah,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Li,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function xa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=Fd(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=xa(o,r,t+1/3),this.g=xa(o,r,t),this.b=xa(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Qt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Pe(Ce.r*255,0,255))*65536+Math.round(Pe(Ce.g*255,0,255))*256+Math.round(Pe(Ce.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ce.copy(this),e);let n=Ce.r,i=Ce.g,r=Ce.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ie){Qt.fromWorkingColorSpace(Ce.copy(this),t);let e=Ce.r,n=Ce.g,i=Ce.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(xr);let n=ta(Wn.h,xr.h,e),i=ta(Wn.s,xr.s,e),r=ta(Wn.l,xr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new Gt;Gt.NAMES=lu;var Kd=0,gn=class extends Jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=In(),this.name="",this.blending=Xi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ua,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ua&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ge=class extends gn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new L,_r=new lt,ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_c&&(t.usage=this.usage),t}};var Qr=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var jr=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Jd=0,je=new ee,_a=new ye,Ui=new L,Ye=new Un,bs=new Un,we=new L,Me=class s extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?jr:Qr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Ye.min,bs.min),Ye.expandByPoint(we),we.addVectors(Ye.max,bs.max),Ye.expandByPoint(we)):(Ye.expandByPoint(bs.min),Ye.expandByPoint(bs.max))}Ye.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)we.fromBufferAttribute(a,l),c&&(Ui.fromBufferAttribute(t,l),we.add(Ui)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;let l=new L,h=new L,d=new L,u=new lt,f=new lt,g=new lt,x=new L,m=new L;function p(I,b,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(x),a[b].add(x),a[M].add(x),c[I].add(m),c[b].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,b=y.length;I<b;++I){let M=y[I],P=M.start,F=M.count;for(let O=P,B=P+F;O<B;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let v=new L,_=new L,R=new L,T=new L;function A(I){R.fromBufferAttribute(i,I),T.copy(R);let b=a[I];v.copy(b),v.sub(R.multiplyScalar(R.dot(b))).normalize(),_.crossVectors(T,b);let P=_.dot(c[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,P)}for(let I=0,b=y.length;I<b;++I){let M=y[I],P=M.start,F=M.count;for(let O=P,B=P+F;O<B;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new ke(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ch=new ee,oi=new Kr,vr=new Qn,lh=new L,yr=new L,Mr=new L,Sr=new L,va=new L,br=new L,hh=new L,wr=new L,pt=class extends ye{constructor(t=new Me,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(va.fromBufferAttribute(d,t),o?br.addScaledVector(va,h):br.addScaledVector(va.sub(e),h))}e.add(br)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),oi.copy(t.ray).recast(t.near),!(vr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(vr,lh)===null||oi.origin.distanceToSquared(lh)>(t.far-t.near)**2))&&(ch.copy(r).invert(),oi.copy(t.ray).applyMatrix4(ch),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,R=v;_<R;_+=3){let T=a.getX(_),A=a.getX(_+1),I=a.getX(_+2);i=Er(this,p,t,n,l,h,d,T,A,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);i=Er(this,o,t,n,l,h,d,y,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,R=v;_<R;_+=3){let T=_,A=_+1,I=_+2;i=Er(this,p,t,n,l,h,d,T,A,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,_=m+2;i=Er(this,o,t,n,l,h,d,y,v,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Qd(s,t,e,n,i,r,o,a){let c;if(t.side===Le?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Kn,a),c===null)return null;wr.copy(a),wr.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(wr);return l<e.near||l>e.far?null:{distance:l,point:wr.clone(),object:s}}function Er(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,yr),s.getVertexPosition(c,Mr),s.getVertexPosition(l,Sr);let h=Qd(s,t,e,n,yr,Mr,Sr,hh);if(h){let d=new L;Yn.getBarycoord(hh,yr,Mr,Sr,d),i&&(h.uv=Yn.getInterpolatedAttribute(i,a,c,l,d,new lt)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,a,c,l,d,new lt)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};Yn.getNormal(yr,Mr,Sr,u.normal),h.face=u,h.barycoord=d}return h}var Yt=class s extends Me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(d,2));function g(x,m,p,y,v,_,R,T,A,I,b){let M=_/A,P=R/I,F=_/2,O=R/2,B=T/2,Y=A+1,H=I+1,tt=0,X=0,rt=new L;for(let gt=0;gt<H;gt++){let _t=gt*P-O;for(let zt=0;zt<Y;zt++){let bt=zt*M-F;rt[x]=bt*y,rt[m]=_t*v,rt[p]=B,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[p]=T>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(zt/A),d.push(1-gt/I),tt+=1}}for(let gt=0;gt<I;gt++)for(let _t=0;_t<A;_t++){let zt=u+_t+Y*gt,bt=u+_t+Y*(gt+1),G=u+(_t+1)+Y*(gt+1),Q=u+(_t+1)+Y*gt;c.push(zt,bt,Q),c.push(bt,G,Q),X+=6}a.addGroup(f,X,b),f+=X,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ts(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(s){let t={};for(let e=0;e<s.length;e++){let n=ts(s[e]);for(let i in n)t[i]=n[i]}return t}function jd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function hu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var tf={clone:ts,merge:Fe},ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends gn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},to=class extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new L,uh=new lt,dh=new lt,Ae=class extends to{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vc*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,uh,dh),e.subVectors(dh,uh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(jo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ni=-90,Fi=1,bc=class extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ae(Ni,Fi,t,e);i.layers=this.layers,this.add(i);let r=new Ae(Ni,Fi,t,e);r.layers=this.layers,this.add(r);let o=new Ae(Ni,Fi,t,e);o.layers=this.layers,this.add(o);let a=new Ae(Ni,Fi,t,e);a.layers=this.layers,this.add(a);let c=new Ae(Ni,Fi,t,e);c.layers=this.layers,this.add(c);let l=new Ae(Ni,Fi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},eo=class extends He{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wc=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new eo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yt(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:$n});r.uniforms.tEquirect.value=e;let o=new pt(i,r),a=e.minFilter;return e.minFilter===pi&&(e.minFilter=fn),new bc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ya=new L,sf=new L,rf=new Xt,Rn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ya.subVectors(n,e).cross(sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||rf.getNormalMatrix(t),i=this.coplanarPoint(ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ai=new Qn,Tr=new L,zs=class{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],y=i[13],v=i[14],_=i[15];if(n[0].setComponents(c-r,u-l,m-f,_-p).normalize(),n[1].setComponents(c+r,u+l,m+f,_+p).normalize(),n[2].setComponents(c+o,u+h,m+g,_+y).normalize(),n[3].setComponents(c-o,u-h,m-g,_-y).normalize(),n[4].setComponents(c-a,u-d,m-x,_-v).normalize(),e===Cn)n[5].setComponents(c+a,u+d,m+x,_+v).normalize();else if(e===qr)n[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(t){return ai.center.set(0,0,0),ai.radius=.7071067811865476,ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Tr.x=i.normal.x>0?t.max.x:t.min.x,Tr.y=i.normal.y>0?t.max.y:t.min.y,Tr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function uu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function of(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Ke=class s extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*u-o;for(let v=0;v<l;v++){let _=v*d-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let v=y+l*p,_=y+l*(p+1),R=y+1+l*(p+1),T=y+1+l*p;f.push(v,_,T),f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
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
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
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
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`#ifdef USE_BATCHING
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
#endif`,gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yf=`#ifdef USE_IRIDESCENCE
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
#endif`,Mf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,If=`#define PI 3.141592653589793
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
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
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
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
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
#endif`,rp=`struct PhysicalMaterial {
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
}`,op=`
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
#endif`,ap=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gp=`#if defined( USE_POINTS_UV )
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
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cp=`#ifdef USE_NORMALMAP
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
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xp=`float getShadowMask() {
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
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
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
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
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
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,pm=`#define DISTANCE
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
}`,mm=`#define DISTANCE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
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
}`,vm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#define LAMBERT
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
}`,bm=`#define LAMBERT
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
}`,wm=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,Tm=`#define NORMAL
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
}`,Am=`#define NORMAL
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
}`,Rm=`#define PHONG
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
}`,Cm=`#define PHONG
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
}`,Im=`#define STANDARD
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
}`,Pm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Dm=`#define TOON
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
}`,Um=`uniform float size;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Om=`uniform vec3 color;
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
}`,Bm=`uniform float rotation;
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
}`,zm=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:af,alphahash_pars_fragment:cf,alphamap_fragment:lf,alphamap_pars_fragment:hf,alphatest_fragment:uf,alphatest_pars_fragment:df,aomap_fragment:ff,aomap_pars_fragment:pf,batching_pars_vertex:mf,batching_vertex:gf,begin_vertex:xf,beginnormal_vertex:_f,bsdfs:vf,iridescence_fragment:yf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Ef,color_fragment:Tf,color_pars_fragment:Af,color_pars_vertex:Rf,color_vertex:Cf,common:If,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Df,displacementmap_vertex:Uf,emissivemap_fragment:Nf,emissivemap_pars_fragment:Ff,colorspace_fragment:Of,colorspace_pars_fragment:Bf,envmap_fragment:zf,envmap_common_pars_fragment:kf,envmap_pars_fragment:Hf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:jf,envmap_vertex:Gf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:qf,fog_pars_fragment:Yf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:Zf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Qf,lights_toon_fragment:tp,lights_toon_pars_fragment:ep,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:sp,lights_physical_pars_fragment:rp,lights_fragment_begin:op,lights_fragment_maps:ap,lights_fragment_end:cp,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:dp,map_fragment:fp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:_p,morphinstance_vertex:vp,morphcolor_vertex:yp,morphnormal_vertex:Mp,morphtarget_pars_vertex:Sp,morphtarget_vertex:bp,normal_fragment_begin:wp,normal_fragment_maps:Ep,normal_pars_fragment:Tp,normal_pars_vertex:Ap,normal_vertex:Rp,normalmap_pars_fragment:Cp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Dp,opaque_fragment:Up,packing:Np,premultiplied_alpha_fragment:Fp,project_vertex:Op,dithering_fragment:Bp,dithering_pars_fragment:zp,roughnessmap_fragment:kp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:$p,skinnormal_vertex:Zp,specularmap_fragment:Kp,specularmap_pars_fragment:Jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:jp,transmission_fragment:tm,transmission_pars_fragment:em,uv_pars_fragment:nm,uv_pars_vertex:im,uv_vertex:sm,worldpos_vertex:rm,background_vert:om,background_frag:am,backgroundCube_vert:cm,backgroundCube_frag:lm,cube_vert:hm,cube_frag:um,depth_vert:dm,depth_frag:fm,distanceRGBA_vert:pm,distanceRGBA_frag:mm,equirect_vert:gm,equirect_frag:xm,linedashed_vert:_m,linedashed_frag:vm,meshbasic_vert:ym,meshbasic_frag:Mm,meshlambert_vert:Sm,meshlambert_frag:bm,meshmatcap_vert:wm,meshmatcap_frag:Em,meshnormal_vert:Tm,meshnormal_frag:Am,meshphong_vert:Rm,meshphong_frag:Cm,meshphysical_vert:Im,meshphysical_frag:Pm,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Um,points_frag:Nm,shadow_vert:Fm,shadow_frag:Om,sprite_vert:Bm,sprite_frag:zm},ft={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},un={basic:{uniforms:Fe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Fe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Fe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Fe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Fe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Fe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Fe([ft.points,ft.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Fe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Fe([ft.common,ft.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Fe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Fe([ft.sprite,ft.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Fe([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Fe([ft.lights,ft.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};un.physical={uniforms:Fe([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Ar={r:0,b:0,g:0},ci=new Ze,km=new ee;function Hm(s,t,e,n,i,r,o){let a=new Gt(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,_=g(y);_===null?p(a,c):_&&_.isColor&&(p(_,1),v=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===To)?(h===void 0&&(h=new pt(new Yt(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ts(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ci.copy(v.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(km.makeRotationFromEuler(ci)),h.material.toneMapped=Qt.getTransfer(_.colorSpace)!==re,(d!==_||u!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new pt(new Ke(2,2),new xn({name:"BackgroundMaterial",uniforms:ts(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==re,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Ar,hu(s)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m}}function Vm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(M,P,F,O,B){let Y=!1,H=d(O,F,P);r!==H&&(r=H,l(r.object)),Y=f(M,O,F,B),Y&&g(M,O,F,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,_(M,P,F,O),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,P,F){let O=F.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let Y=B[P.id];Y===void 0&&(Y={},B[P.id]=Y);let H=Y[O];return H===void 0&&(H=u(c()),Y[O]=H),H}function u(M){let P=[],F=[],O=[];for(let B=0;B<e;B++)P[B]=0,F[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,P,F,O){let B=r.attributes,Y=P.attributes,H=0,tt=F.getAttributes();for(let X in tt)if(tt[X].location>=0){let gt=B[X],_t=Y[X];if(_t===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),gt===void 0||gt.attribute!==_t||_t&&gt.data!==_t.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(M,P,F,O){let B={},Y=P.attributes,H=0,tt=F.getAttributes();for(let X in tt)if(tt[X].location>=0){let gt=Y[X];gt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor));let _t={};_t.attribute=gt,gt&&gt.data&&(_t.data=gt.data),B[X]=_t,H++}r.attributes=B,r.attributesNum=H,r.index=O}function x(){let M=r.newAttributes;for(let P=0,F=M.length;P<F;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let F=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;F[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),B[M]!==P&&(s.vertexAttribDivisor(M,P),B[M]=P)}function y(){let M=r.newAttributes,P=r.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==M[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function v(M,P,F,O,B,Y,H){H===!0?s.vertexAttribIPointer(M,P,F,B,Y):s.vertexAttribPointer(M,P,F,O,B,Y)}function _(M,P,F,O){x();let B=O.attributes,Y=F.getAttributes(),H=P.defaultAttributeValues;for(let tt in Y){let X=Y[tt];if(X.location>=0){let rt=B[tt];if(rt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let gt=rt.normalized,_t=rt.itemSize,zt=t.get(rt);if(zt===void 0)continue;let bt=zt.buffer,G=zt.type,Q=zt.bytesPerElement,ht=G===s.INT||G===s.UNSIGNED_INT||rt.gpuType===cl;if(rt.isInterleavedBufferAttribute){let et=rt.data,Tt=et.stride,Rt=rt.offset;if(et.isInstancedInterleavedBuffer){for(let Lt=0;Lt<X.locationSize;Lt++)p(X.location+Lt,et.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Lt=0;Lt<X.locationSize;Lt++)m(X.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,bt);for(let Lt=0;Lt<X.locationSize;Lt++)v(X.location+Lt,_t/X.locationSize,G,gt,Tt*Q,(Rt+_t/X.locationSize*Lt)*Q,ht)}else{if(rt.isInstancedBufferAttribute){for(let et=0;et<X.locationSize;et++)p(X.location+et,rt.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let et=0;et<X.locationSize;et++)m(X.location+et);s.bindBuffer(s.ARRAY_BUFFER,bt);for(let et=0;et<X.locationSize;et++)v(X.location+et,_t/X.locationSize,G,gt,_t*Q,_t/X.locationSize*et*Q,ht)}}else if(H!==void 0){let gt=H[tt];if(gt!==void 0)switch(gt.length){case 2:s.vertexAttrib2fv(X.location,gt);break;case 3:s.vertexAttrib3fv(X.location,gt);break;case 4:s.vertexAttrib4fv(X.location,gt);break;default:s.vertexAttrib1fv(X.location,gt)}}}}y()}function R(){I();for(let M in n){let P=n[M];for(let F in P){let O=P[F];for(let B in O)h(O[B].object),delete O[B];delete P[F]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let F in P){let O=P[F];for(let B in O)h(O[B].object),delete O[B];delete P[F]}delete n[M.id]}function A(M){for(let P in n){let F=n[P];if(F[M.id]===void 0)continue;let O=F[M.id];for(let B in O)h(O[B].object),delete O[B];delete F[M.id]}}function I(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Gm(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==an&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let I=A===Zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ln&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pn&&!I)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function Xm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Rn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,v=y*4,_=p.clippingState||null;c.value=_,_=h(g,u,v,f);for(let R=0;R!==v;++R)_[R]=e[R];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(d[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function qm(s){let t=new WeakMap;function e(o,a){return a===Va?o.mapping=Ki:a===Ga&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Va||a===Ga)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new wc(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var no=class extends to{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gi=4,fh=[.125,.215,.35,.446,.526,.582],di=20,Ma=new no,ph=new Gt,Sa=null,ba=0,wa=0,Ea=!1,hi=(1+Math.sqrt(5))/2,Oi=1/hi,mh=[new L(-hi,Oi,0),new L(hi,Oi,0),new L(-Oi,0,hi),new L(Oi,0,hi),new L(0,hi,-Oi),new L(0,hi,Oi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],es=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,ba,wa),this._renderer.xr.enabled=Ea,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Zs,format:an,colorSpace:ss,depthBuffer:!1},i=gh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ym(r)),this._blurMaterial=$m(r,t,e)}return i}_compileMaterial(t){let e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,Ma)}_sceneToCubeUV(t,e,n,i){let a=new Ae(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ph),h.toneMapping=Zn,h.autoClear=!1;let f=new ge({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new pt(new Yt,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(ph),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;Rr(i,y*v,p>2?v:0,v,v),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ki||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_h()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Rr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ma)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mh[(i-r-1)%mh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new pt(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*di-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):di;m>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);let p=[],y=0;for(let A=0;A<di;++A){let I=A/x,b=Math.exp(-I*I/2);p.push(b),A===0?y+=b:A<m&&(y+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let _=this._sizeLods[i],R=3*_*(i>v-Gi?i-v+Gi:0),T=4*(this._cubeSize-_);Rr(e,R,T,3*_,2*_),c.setRenderTarget(e),c.render(d,Ma)}};function Ym(s){let t=[],e=[],n=[],i=s,r=s-Gi+1+fh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Gi?c=fh[o-s+Gi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,I=T>2?0:-1,b=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];y.set(b,x*g*T),v.set(u,m*g*T);let M=[T,T,T,T,T,T];_.set(M,p*g*T)}let R=new Me;R.setAttribute("position",new ke(y,x)),R.setAttribute("uv",new ke(v,m)),R.setAttribute("faceIndex",new ke(_,p)),t.push(R),i>Gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gh(s,t,e){let n=new Dn(s,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function $m(s,t,e){let n=new Float32Array(di),i=new L(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function xh(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function _h(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function Zm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Va||c===Ga,h=c===Ki||c===Ji;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new es(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new es(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Km(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Is("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jm(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)t.update(u[g],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let v=0,_=y.length;v<_;v+=3){let R=y[v+0],T=y[v+1],A=y[v+2];u.push(R,T,T,A,A,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let R=v+0,T=v+1,A=v+2;u.push(R,T,T,A,A,R)}}else return;let m=new(cu(u)?jr:Qr)(u,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Qm(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function jm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function t0(s,t,e){let n=new WeakMap,i=new ae;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,R=1;_>t.maxTextureSize&&(R=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*R*4*d),A=new Zr(T,_,R,d);A.type=pn,A.needsUpdate=!0;let I=v*4;for(let M=0;M<d;M++){let P=m[M],F=p[M],O=y[M],B=_*R*4*M;for(let Y=0;Y<P.count;Y++){let H=Y*I;f===!0&&(i.fromBufferAttribute(P,Y),T[B+H+0]=i.x,T[B+H+1]=i.y,T[B+H+2]=i.z,T[B+H+3]=0),g===!0&&(i.fromBufferAttribute(F,Y),T[B+H+4]=i.x,T[B+H+5]=i.y,T[B+H+6]=i.z,T[B+H+7]=0),x===!0&&(i.fromBufferAttribute(O,Y),T[B+H+8]=i.x,T[B+H+9]=i.y,T[B+H+10]=i.z,T[B+H+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:A,size:new lt(_,R)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function e0(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var io=class extends He{constructor(t,e,n,i,r,o,a,c,l,h=qi){if(h!==qi&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qi&&(n=mi),n===void 0&&h===ji&&(n=Qi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=c!==void 0?c:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},du=new He,vh=new io(1,1),fu=new Zr,pu=new Sc,mu=new eo,yh=[],Mh=[],Sh=new Float32Array(16),bh=new Float32Array(9),wh=new Float32Array(4);function rs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=yh[i];if(r===void 0&&(r=new Float32Array(i),yh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ro(s,t){let e=Mh[t];e===void 0&&(e=new Int32Array(t),Mh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function n0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),be(e,t)}}function s0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),be(e,t)}}function r0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),be(e,t)}}function o0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;wh.set(n),s.uniformMatrix2fv(this.addr,!1,wh),be(e,n)}}function a0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;bh.set(n),s.uniformMatrix3fv(this.addr,!1,bh),be(e,n)}}function c0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Se(e,n))return;Sh.set(n),s.uniformMatrix4fv(this.addr,!1,Sh),be(e,n)}}function l0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function h0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),be(e,t)}}function u0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),be(e,t)}}function d0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),be(e,t)}}function f0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),be(e,t)}}function m0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),be(e,t)}}function g0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),be(e,t)}}function x0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vh.compareFunction=au,r=vh):r=du,e.setTexture2D(t||r,i)}function _0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pu,i)}function v0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mu,i)}function y0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||fu,i)}function M0(s){switch(s){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return o0;case 35675:return a0;case 35676:return c0;case 5124:case 35670:return l0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return y0}}function S0(s,t){s.uniform1fv(this.addr,t)}function b0(s,t){let e=rs(t,this.size,2);s.uniform2fv(this.addr,e)}function w0(s,t){let e=rs(t,this.size,3);s.uniform3fv(this.addr,e)}function E0(s,t){let e=rs(t,this.size,4);s.uniform4fv(this.addr,e)}function T0(s,t){let e=rs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function A0(s,t){let e=rs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function R0(s,t){let e=rs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function C0(s,t){s.uniform1iv(this.addr,t)}function I0(s,t){s.uniform2iv(this.addr,t)}function P0(s,t){s.uniform3iv(this.addr,t)}function L0(s,t){s.uniform4iv(this.addr,t)}function D0(s,t){s.uniform1uiv(this.addr,t)}function U0(s,t){s.uniform2uiv(this.addr,t)}function N0(s,t){s.uniform3uiv(this.addr,t)}function F0(s,t){s.uniform4uiv(this.addr,t)}function O0(s,t,e){let n=this.cache,i=t.length,r=Ro(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||du,r[o])}function B0(s,t,e){let n=this.cache,i=t.length,r=Ro(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||pu,r[o])}function z0(s,t,e){let n=this.cache,i=t.length,r=Ro(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||mu,r[o])}function k0(s,t,e){let n=this.cache,i=t.length,r=Ro(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||fu,r[o])}function H0(s){switch(s){case 5126:return S0;case 35664:return b0;case 35665:return w0;case 35666:return E0;case 35674:return T0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return I0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return D0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}var Ec=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M0(e.type)}},Tc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H0(e.type)}},Ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ta=/(\w+)(\])?(\[|\.)?/g;function Eh(s,t){s.seq.push(t),s.map[t.id]=t}function V0(s,t,e){let n=s.name,i=n.length;for(Ta.lastIndex=0;;){let r=Ta.exec(n),o=Ta.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Eh(e,l===void 0?new Ec(a,s,t):new Tc(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Ac(a),Eh(e,d)),e=d}}}var $i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);V0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Th(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var G0=37297,W0=0;function X0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ah=new Xt;function q0(s){Qt._getMatrix(Ah,Qt.workingColorSpace,s);let t=`mat3( ${Ah.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case Ao:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+X0(s.getShaderSource(t),o)}else return i}function Y0(s,t){let e=q0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $0(s,t){let e;switch(t){case vd:e="Linear";break;case yd:e="Reinhard";break;case Md:e="Cineon";break;case al:e="ACESFilmic";break;case bd:e="AgX";break;case wd:e="Neutral";break;case Sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Cr=new L;function Z0(){Qt.getLuminanceCoefficients(Cr);let s=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function J0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ps(s){return s!==""}function Ch(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ih(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(s){return s.replace(j0,eg)}var tg=new Map;function eg(s,t){let e=qt[t];if(e===void 0){let n=tg.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}var ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(s){return s.replace(ng,ig)}function ig(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function sg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function rg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ki:case Ji:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function og(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ji&&(t="ENVMAP_MODE_REFRACTION"),t}function ag(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ol:t="ENVMAP_BLENDING_MULTIPLY";break;case xd:t="ENVMAP_BLENDING_MIX";break;case _d:t="ENVMAP_BLENDING_ADD";break}return t}function cg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=sg(e),l=rg(e),h=og(e),d=ag(e),u=cg(e),f=K0(e),g=J0(r),x=i.createProgram(),m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),p.length>0&&(p+=`
`)):(m=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),p=[Lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?$0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Y0("linearToOutputTexel",e.outputColorSpace),Z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),o=Rc(o),o=Ch(o,e),o=Ih(o,e),a=Rc(a),a=Ch(a,e),a=Ih(a,e),o=Ph(o),a=Ph(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,_=y+p+a,R=Th(i,i.VERTEX_SHADER,v),T=Th(i,i.FRAGMENT_SHADER,_);i.attachShader(x,R),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(P){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(x).trim(),O=i.getShaderInfoLog(R).trim(),B=i.getShaderInfoLog(T).trim(),Y=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,T);else{let tt=Rh(i,R,"vertex"),X=Rh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+tt+`
`+X)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||B==="")&&(H=!1);H&&(P.diagnostics={runnable:Y,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(R),i.deleteShader(T),I=new $i(i,x),b=Q0(i,x)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,G0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=W0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var hg=0,Cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ic(t),e.set(t,n)),n}},Ic=class{constructor(t){this.id=hg++,this.code=t,this.usedTimes=0}};function ug(s,t,e,n,i,r,o){let a=new Jr,c=new Cc,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,P,F,O){let B=F.fog,Y=O.geometry,H=b.isMeshStandardMaterial?F.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),X=tt&&tt.mapping===To?tt.image.height:null,rt=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_t=gt!==void 0?gt.length:0,zt=0;Y.morphAttributes.position!==void 0&&(zt=1),Y.morphAttributes.normal!==void 0&&(zt=2),Y.morphAttributes.color!==void 0&&(zt=3);let bt,G,Q,ht;if(rt){let Jt=un[rt];bt=Jt.vertexShader,G=Jt.fragmentShader}else bt=b.vertexShader,G=b.fragmentShader,c.update(b),Q=c.getVertexShaderID(b),ht=c.getFragmentShaderID(b);let et=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Rt=O.isInstancedMesh===!0,Lt=O.isBatchedMesh===!0,kt=!!b.map,J=!!b.matcap,it=!!tt,C=!!b.aoMap,wt=!!b.lightMap,nt=!!b.bumpMap,Mt=!!b.normalMap,ct=!!b.displacementMap,Ut=!!b.emissiveMap,vt=!!b.metalnessMap,E=!!b.roughnessMap,S=b.anisotropy>0,k=b.clearcoat>0,$=b.dispersion>0,j=b.iridescence>0,Z=b.sheen>0,At=b.transmission>0,dt=S&&!!b.anisotropyMap,St=k&&!!b.clearcoatMap,$t=k&&!!b.clearcoatNormalMap,st=k&&!!b.clearcoatRoughnessMap,Et=j&&!!b.iridescenceMap,Ft=j&&!!b.iridescenceThicknessMap,Bt=Z&&!!b.sheenColorMap,ot=Z&&!!b.sheenRoughnessMap,Ot=!!b.specularMap,Nt=!!b.specularColorMap,Kt=!!b.specularIntensityMap,D=At&&!!b.transmissionMap,ut=At&&!!b.thicknessMap,q=!!b.gradientMap,K=!!b.alphaMap,mt=b.alphaTest>0,xt=!!b.alphaHash,Ht=!!b.extensions,ce=Zn;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ce=s.toneMapping);let _e={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:bt,fragmentShader:G,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:ht,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&O._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&O.instanceColor!==null,instancingMorph:Rt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ss,alphaToCoverage:!!b.alphaToCoverage,map:kt,matcap:J,envMap:it,envMapMode:it&&tt.mapping,envMapCubeUVHeight:X,aoMap:C,lightMap:wt,bumpMap:nt,normalMap:Mt,displacementMap:u&&ct,emissiveMap:Ut,normalMapObjectSpace:Mt&&b.normalMapType===Rd,normalMapTangentSpace:Mt&&b.normalMapType===ml,metalnessMap:vt,roughnessMap:E,anisotropy:S,anisotropyMap:dt,clearcoat:k,clearcoatMap:St,clearcoatNormalMap:$t,clearcoatRoughnessMap:st,dispersion:$,iridescence:j,iridescenceMap:Et,iridescenceThicknessMap:Ft,sheen:Z,sheenColorMap:Bt,sheenRoughnessMap:ot,specularMap:Ot,specularColorMap:Nt,specularIntensityMap:Kt,transmission:At,transmissionMap:D,thicknessMap:ut,gradientMap:q,opaque:b.transparent===!1&&b.blending===Xi&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:mt,alphaHash:xt,combine:b.combine,mapUv:kt&&x(b.map.channel),aoMapUv:C&&x(b.aoMap.channel),lightMapUv:wt&&x(b.lightMap.channel),bumpMapUv:nt&&x(b.bumpMap.channel),normalMapUv:Mt&&x(b.normalMap.channel),displacementMapUv:ct&&x(b.displacementMap.channel),emissiveMapUv:Ut&&x(b.emissiveMap.channel),metalnessMapUv:vt&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:dt&&x(b.anisotropyMap.channel),clearcoatMapUv:St&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:$t&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ot&&x(b.sheenRoughnessMap.channel),specularMapUv:Ot&&x(b.specularMap.channel),specularColorMapUv:Nt&&x(b.specularColorMap.channel),specularIntensityMapUv:Kt&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:ut&&x(b.thicknessMap.channel),alphaMapUv:K&&x(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Mt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(kt||K),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Tt,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:kt&&b.map.isVideoTexture===!0&&Qt.getTransfer(b.map.colorSpace)===re,decodeVideoTextureEmissive:Ut&&b.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(b.emissiveMap.colorSpace)===re,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Oe,flipSided:b.side===Le,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ht&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&b.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(M,b),v(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function v(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=g[b.type],P;if(M){let F=un[M];P=tf.clone(F.uniforms)}else P=b.uniforms;return P}function R(b,M){let P;for(let F=0,O=h.length;F<O;F++){let B=h[F];if(B.cacheKey===M){P=B,++P.usedTimes;break}}return P===void 0&&(P=new lg(s,M,b,r),h.push(P)),P}function T(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function dg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function fg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Dh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Uh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,x,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),t++,p}function a(d,u,f,g,x,m){let p=o(d,u,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,g,x,m){let p=o(d,u,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||fg),n.length>1&&n.sort(u||Dh),i.length>1&&i.sort(u||Dh)}function h(){for(let d=t,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function pg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Uh,s.set(n,[o])):i>=r.length?(o=new Uh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function mg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function gg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var xg=0;function _g(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function vg(s){let t=new mg,e=gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new ee,o=new ee;function a(l){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,v=0,_=0,R=0,T=0,A=0;l.sort(_g);for(let b=0,M=l.length;b<M;b++){let P=l[b],F=P.color,O=P.intensity,B=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*O,d+=F.g*O,u+=F.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],O);A++}else if(P.isDirectionalLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let tt=P.shadow,X=e.get(P);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=H,f++}else if(P.isSpotLight){let H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(O),H.distance=B,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[x]=H;let tt=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,tt.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=tt.matrix,P.castShadow){let X=e.get(P);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Y,_++}x++}else if(P.isRectAreaLight){let H=t.get(P);H.color.copy(F).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){let H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let tt=P.shadow,X=e.get(P);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=H,g++}else if(P.isHemisphereLight){let H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=H,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==v||I.numSpotShadows!==_||I.numSpotMaps!==R||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=v,I.numSpotShadows=_,I.numSpotMaps=R,I.numLightProbes=A,n.version=xg++)}function c(l,h){let d=0,u=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let v=l[p];if(v.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Nh(s){let t=new vg(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function yg(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Nh(s),t.set(i,[a])):r>=o.length?(a=new Nh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Pc=class extends gn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lc=class extends gn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`;function bg(s,t,e){let n=new zs,i=new lt,r=new lt,o=new ae,a=new Pc({depthPacking:Ad}),c=new Lc,l={},h=e.maxTextureSize,d={[Kn]:Le,[Le]:Kn,[Oe]:Oe},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let p=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending($n),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=p!==An&&this.type===An,B=p===An&&this.type!==An;for(let Y=0,H=T.length;Y<H;Y++){let tt=T[Y],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let rt=X.getFrameExtents();if(i.multiply(rt),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,X.mapSize.y=r.y)),X.map===null||O===!0||B===!0){let _t=this.type!==An?{minFilter:$e,magFilter:$e}:{};X.map!==null&&X.map.dispose(),X.map=new Dn(i.x,i.y,_t),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let gt=X.getViewportCount();for(let _t=0;_t<gt;_t++){let zt=X.getViewport(_t);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),F.viewport(o),X.updateMatrices(tt,_t),n=X.getFrustum(),_(A,I,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===An&&y(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,M,P)};function y(T,A){let I=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Dn(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,I,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,I,f,x,null)}function v(T,A,I,b){let M=null,P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let F=M.uuid,O=A.uuid,B=l[F];B===void 0&&(B={},l[F]=B);let Y=B[O];Y===void 0&&(Y=M.clone(),B[O]=Y,A.addEventListener("dispose",R)),M=Y}if(M.visible=A.visible,M.wireframe=A.wireframe,b===An?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=s.properties.get(M);F.light=I}return M}function _(T,A,I,b,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===An)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let O=t.update(T),B=T.material;if(Array.isArray(B)){let Y=O.groups;for(let H=0,tt=Y.length;H<tt;H++){let X=Y[H],rt=B[X.materialIndex];if(rt&&rt.visible){let gt=v(T,rt,b,M);T.onBeforeShadow(s,T,A,I,O,gt,X),s.renderBufferDirect(I,null,O,gt,T,X),T.onAfterShadow(s,T,A,I,O,gt,X)}}}else if(B.visible){let Y=v(T,B,b,M);T.onBeforeShadow(s,T,A,I,O,Y,null),s.renderBufferDirect(I,null,O,Y,T,null),T.onAfterShadow(s,T,A,I,O,Y,null)}}let F=T.children;for(let O=0,B=F.length;O<B;O++)_(F[O],A,I,b,M)}function R(T){T.target.removeEventListener("dispose",R);for(let I in l){let b=l[I],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var wg={[Na]:Fa,[Oa]:ka,[Ba]:Ha,[Zi]:za,[Fa]:Na,[ka]:Oa,[Ha]:Ba,[za]:Zi};function Eg(s,t){function e(){let D=!1,ut=new ae,q=null,K=new ae(0,0,0,0);return{setMask:function(mt){q!==mt&&!D&&(s.colorMask(mt,mt,mt,mt),q=mt)},setLocked:function(mt){D=mt},setClear:function(mt,xt,Ht,ce,_e){_e===!0&&(mt*=ce,xt*=ce,Ht*=ce),ut.set(mt,xt,Ht,ce),K.equals(ut)===!1&&(s.clearColor(mt,xt,Ht,ce),K.copy(ut))},reset:function(){D=!1,q=null,K.set(-1,0,0,0)}}}function n(){let D=!1,ut=!1,q=null,K=null,mt=null;return{setReversed:function(xt){if(ut!==xt){let Ht=t.get("EXT_clip_control");ut?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);let ce=mt;mt=null,this.setClear(ce)}ut=xt},getReversed:function(){return ut},setTest:function(xt){xt?et(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(xt){q!==xt&&!D&&(s.depthMask(xt),q=xt)},setFunc:function(xt){if(ut&&(xt=wg[xt]),K!==xt){switch(xt){case Na:s.depthFunc(s.NEVER);break;case Fa:s.depthFunc(s.ALWAYS);break;case Oa:s.depthFunc(s.LESS);break;case Zi:s.depthFunc(s.LEQUAL);break;case Ba:s.depthFunc(s.EQUAL);break;case za:s.depthFunc(s.GEQUAL);break;case ka:s.depthFunc(s.GREATER);break;case Ha:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=xt}},setLocked:function(xt){D=xt},setClear:function(xt){mt!==xt&&(ut&&(xt=1-xt),s.clearDepth(xt),mt=xt)},reset:function(){D=!1,q=null,K=null,mt=null,ut=!1}}}function i(){let D=!1,ut=null,q=null,K=null,mt=null,xt=null,Ht=null,ce=null,_e=null;return{setTest:function(Jt){D||(Jt?et(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(Jt){ut!==Jt&&!D&&(s.stencilMask(Jt),ut=Jt)},setFunc:function(Jt,ve,Te){(q!==Jt||K!==ve||mt!==Te)&&(s.stencilFunc(Jt,ve,Te),q=Jt,K=ve,mt=Te)},setOp:function(Jt,ve,Te){(xt!==Jt||Ht!==ve||ce!==Te)&&(s.stencilOp(Jt,ve,Te),xt=Jt,Ht=ve,ce=Te)},setLocked:function(Jt){D=Jt},setClear:function(Jt){_e!==Jt&&(s.clearStencil(Jt),_e=Jt)},reset:function(){D=!1,ut=null,q=null,K=null,mt=null,xt=null,Ht=null,ce=null,_e=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,R=null,T=null,A=new Gt(0,0,0),I=0,b=!1,M=null,P=null,F=null,O=null,B=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,tt=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=tt>=2);let rt=null,gt={},_t=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),bt=new ae().fromArray(_t),G=new ae().fromArray(zt);function Q(D,ut,q,K){let mt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(D,xt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<q;Ht++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ut+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return xt}let ht={};ht[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ht[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ht[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(s.DEPTH_TEST),o.setFunc(Zi),nt(!1),Mt(zl),et(s.CULL_FACE),C($n);function et(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Rt(D,ut){return d[D]!==ut?(s.bindFramebuffer(D,ut),d[D]=ut,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ut),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function Lt(D,ut){let q=f,K=!1;if(D){q=u.get(ut),q===void 0&&(q=[],u.set(ut,q));let mt=D.textures;if(q.length!==mt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Ht=mt.length;xt<Ht;xt++)q[xt]=s.COLOR_ATTACHMENT0+xt;q.length=mt.length,K=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,K=!0);K&&s.drawBuffers(q)}function kt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let J={[ui]:s.FUNC_ADD,[td]:s.FUNC_SUBTRACT,[ed]:s.FUNC_REVERSE_SUBTRACT};J[nd]=s.MIN,J[id]=s.MAX;let it={[sd]:s.ZERO,[rd]:s.ONE,[od]:s.SRC_COLOR,[Da]:s.SRC_ALPHA,[dd]:s.SRC_ALPHA_SATURATE,[hd]:s.DST_COLOR,[cd]:s.DST_ALPHA,[ad]:s.ONE_MINUS_SRC_COLOR,[Ua]:s.ONE_MINUS_SRC_ALPHA,[ud]:s.ONE_MINUS_DST_COLOR,[ld]:s.ONE_MINUS_DST_ALPHA,[fd]:s.CONSTANT_COLOR,[pd]:s.ONE_MINUS_CONSTANT_COLOR,[md]:s.CONSTANT_ALPHA,[gd]:s.ONE_MINUS_CONSTANT_ALPHA};function C(D,ut,q,K,mt,xt,Ht,ce,_e,Jt){if(D===$n){x===!0&&(Tt(s.BLEND),x=!1);return}if(x===!1&&(et(s.BLEND),x=!0),D!==ju){if(D!==m||Jt!==b){if((p!==ui||_!==ui)&&(s.blendEquation(s.FUNC_ADD),p=ui,_=ui),Jt)switch(D){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fs:s.blendFunc(s.ONE,s.ONE);break;case kl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case kl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,v=null,R=null,T=null,A.set(0,0,0),I=0,m=D,b=Jt}return}mt=mt||ut,xt=xt||q,Ht=Ht||K,(ut!==p||mt!==_)&&(s.blendEquationSeparate(J[ut],J[mt]),p=ut,_=mt),(q!==y||K!==v||xt!==R||Ht!==T)&&(s.blendFuncSeparate(it[q],it[K],it[xt],it[Ht]),y=q,v=K,R=xt,T=Ht),(ce.equals(A)===!1||_e!==I)&&(s.blendColor(ce.r,ce.g,ce.b,_e),A.copy(ce),I=_e),m=D,b=!1}function wt(D,ut){D.side===Oe?Tt(s.CULL_FACE):et(s.CULL_FACE);let q=D.side===Le;ut&&(q=!q),nt(q),D.blending===Xi&&D.transparent===!1?C($n):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Mt(D){D!==Ku?(et(s.CULL_FACE),D!==P&&(D===zl?s.cullFace(s.BACK):D===Ju?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),P=D}function ct(D){D!==F&&(H&&s.lineWidth(D),F=D)}function Ut(D,ut,q){D?(et(s.POLYGON_OFFSET_FILL),(O!==ut||B!==q)&&(s.polygonOffset(ut,q),O=ut,B=q)):Tt(s.POLYGON_OFFSET_FILL)}function vt(D){D?et(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function E(D){D===void 0&&(D=s.TEXTURE0+Y-1),rt!==D&&(s.activeTexture(D),rt=D)}function S(D,ut,q){q===void 0&&(rt===null?q=s.TEXTURE0+Y-1:q=rt);let K=gt[q];K===void 0&&(K={type:void 0,texture:void 0},gt[q]=K),(K.type!==D||K.texture!==ut)&&(rt!==q&&(s.activeTexture(q),rt=q),s.bindTexture(D,ut||ht[D]),K.type=D,K.texture=ut)}function k(){let D=gt[rt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(D){bt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),bt.copy(D))}function ot(D){G.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function Ot(D,ut){let q=l.get(ut);q===void 0&&(q=new WeakMap,l.set(ut,q));let K=q.get(D);K===void 0&&(K=s.getUniformBlockIndex(ut,D.name),q.set(D,K))}function Nt(D,ut){let K=l.get(ut).get(D);c.get(ut)!==K&&(s.uniformBlockBinding(ut,K,D.__bindingPointIndex),c.set(ut,K))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},rt=null,gt={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,R=null,T=null,A=new Gt(0,0,0),I=0,b=!1,M=null,P=null,F=null,O=null,B=null,bt.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:Tt,bindFramebuffer:Rt,drawBuffers:Lt,useProgram:kt,setBlending:C,setMaterial:wt,setFlipSided:nt,setCullFace:Mt,setLineWidth:ct,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:E,bindTexture:S,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:Et,texImage3D:Ft,updateUBOMapping:Ot,uniformBlockBinding:Nt,texStorage2D:$t,texStorage3D:st,texSubImage2D:Z,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:St,scissor:Bt,viewport:ot,reset:Kt}}function Fh(s,t,e,n){let i=Tg(n);switch(e){case eu:return s*t;case iu:return s*t;case su:return s*t*2;case ul:return s*t/i.components*i.byteLength;case dl:return s*t/i.components*i.byteLength;case ru:return s*t*2/i.components*i.byteLength;case fl:return s*t*2/i.components*i.byteLength;case nu:return s*t*3/i.components*i.byteLength;case an:return s*t*4/i.components*i.byteLength;case pl:return s*t*4/i.components*i.byteLength;case kr:case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qa:case $a:return Math.max(s,16)*Math.max(t,8)/4;case Xa:case Ya:return Math.max(s,8)*Math.max(t,8)/2;case Za:case Ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case tc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ec:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case nc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ic:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case sc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case rc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case oc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case lc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case hc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case uc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Wr:case dc:case fc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ou:case pc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case mc:case gc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tg(s){switch(s){case Ln:case Qh:return{byteLength:1,components:1};case Bs:case jh:case Zs:return{byteLength:2,components:1};case ll:case hl:return{byteLength:2,components:4};case mi:case cl:case pn:return{byteLength:4,components:1};case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ag(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,S){return f?new OffscreenCanvas(E,S):Yr("canvas")}function x(E,S,k){let $=1,j=vt(E);if((j.width>k||j.height>k)&&($=k/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let Z=Math.floor($*j.width),At=Math.floor($*j.height);d===void 0&&(d=g(Z,At));let dt=S?g(Z,At):d;return dt.width=Z,dt.height=At,dt.getContext("2d").drawImage(E,0,0,Z,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+At+")."),dt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(E,S,k,$,j=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=S;if(S===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),S===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),S===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),S===s.RGBA){let At=j?Ao:Qt.getTransfer($);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=At===re?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(E,S){let k;return E?S===null||S===mi||S===Qi?k=s.DEPTH24_STENCIL8:S===pn?k=s.DEPTH32F_STENCIL8:S===Bs&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===mi||S===Qi?k=s.DEPTH_COMPONENT24:S===pn?k=s.DEPTH_COMPONENT32F:S===Bs&&(k=s.DEPTH_COMPONENT16),k}function R(E,S){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==$e&&E.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function T(E){let S=E.target;S.removeEventListener("dispose",T),I(S),S.isVideoTexture&&h.delete(S)}function A(E){let S=E.target;S.removeEventListener("dispose",A),M(S)}function I(E){let S=n.get(E);if(S.__webglInit===void 0)return;let k=E.source,$=u.get(k);if($){let j=$[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(E),Object.keys($).length===0&&u.delete(k)}n.remove(E)}function b(E){let S=n.get(E);s.deleteTexture(S.__webglTexture);let k=E.source,$=u.get(k);delete $[S.__cacheKey],o.memory.textures--}function M(E){let S=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let j=0;j<S.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(S.__webglFramebuffer[$][j]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=E.textures;for(let $=0,j=k.length;$<j;$++){let Z=n.get(k[$]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(E)}let P=0;function F(){P=0}function O(){let E=P;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),P+=1,E}function B(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function Y(E,S){let k=n.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){let $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(k,E,S);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function H(E,S){let k=n.get(E);if(E.version>0&&k.__version!==E.version){G(k,E,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function tt(E,S){let k=n.get(E);if(E.version>0&&k.__version!==E.version){G(k,E,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function X(E,S){let k=n.get(E);if(E.version>0&&k.__version!==E.version){Q(k,E,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}let rt={[Os]:s.REPEAT,[fi]:s.CLAMP_TO_EDGE,[Wa]:s.MIRRORED_REPEAT},gt={[$e]:s.NEAREST,[Ed]:s.NEAREST_MIPMAP_NEAREST,[lr]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[Jo]:s.LINEAR_MIPMAP_NEAREST,[pi]:s.LINEAR_MIPMAP_LINEAR},_t={[Cd]:s.NEVER,[Nd]:s.ALWAYS,[Id]:s.LESS,[au]:s.LEQUAL,[Pd]:s.EQUAL,[Ud]:s.GEQUAL,[Ld]:s.GREATER,[Dd]:s.NOTEQUAL};function zt(E,S){if(S.type===pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===Jo||S.magFilter===lr||S.magFilter===pi||S.minFilter===fn||S.minFilter===Jo||S.minFilter===lr||S.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,rt[S.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,rt[S.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,rt[S.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,gt[S.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,gt[S.minFilter]),S.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$e||S.minFilter!==lr&&S.minFilter!==pi||S.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function bt(E,S){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",T));let $=S.source,j=u.get($);j===void 0&&(j={},u.set($,j));let Z=B(S);if(Z!==E.__cacheKey){j[Z]===void 0&&(j[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[Z].usedTimes++;let At=j[E.__cacheKey];At!==void 0&&(j[E.__cacheKey].usedTimes--,At.usedTimes===0&&b(S)),E.__cacheKey=Z,E.__webglTexture=j[Z].texture}return k}function G(E,S,k){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);let j=bt(E,S),Z=S.source;e.bindTexture($,E.__webglTexture,s.TEXTURE0+k);let At=n.get(Z);if(Z.version!==At.__version||j===!0){e.activeTexture(s.TEXTURE0+k);let dt=Qt.getPrimaries(Qt.workingColorSpace),St=S.colorSpace===qn?null:Qt.getPrimaries(S.colorSpace),$t=S.colorSpace===qn||dt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let st=x(S.image,!1,i.maxTextureSize);st=Ut(S,st);let Et=r.convert(S.format,S.colorSpace),Ft=r.convert(S.type),Bt=v(S.internalFormat,Et,Ft,S.colorSpace,S.isVideoTexture);zt($,S);let ot,Ot=S.mipmaps,Nt=S.isVideoTexture!==!0,Kt=At.__version===void 0||j===!0,D=Z.dataReady,ut=R(S,st);if(S.isDepthTexture)Bt=_(S.format===ji,S.type),Kt&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,Bt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Bt,st.width,st.height,0,Et,Ft,null));else if(S.isDataTexture)if(Ot.length>0){Nt&&Kt&&e.texStorage2D(s.TEXTURE_2D,ut,Bt,Ot[0].width,Ot[0].height);for(let q=0,K=Ot.length;q<K;q++)ot=Ot[q],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,ot.width,ot.height,Et,Ft,ot.data):e.texImage2D(s.TEXTURE_2D,q,Bt,ot.width,ot.height,0,Et,Ft,ot.data);S.generateMipmaps=!1}else Nt?(Kt&&e.texStorage2D(s.TEXTURE_2D,ut,Bt,st.width,st.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,Et,Ft,st.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,st.width,st.height,0,Et,Ft,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Bt,Ot[0].width,Ot[0].height,st.depth);for(let q=0,K=Ot.length;q<K;q++)if(ot=Ot[q],S.format!==an)if(Et!==null)if(Nt){if(D)if(S.layerUpdates.size>0){let mt=Fh(ot.width,ot.height,S.format,S.type);for(let xt of S.layerUpdates){let Ht=ot.data.subarray(xt*mt/ot.data.BYTES_PER_ELEMENT,(xt+1)*mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,xt,ot.width,ot.height,1,Et,Ht)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,ot.width,ot.height,st.depth,Et,ot.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Bt,ot.width,ot.height,st.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,ot.width,ot.height,st.depth,Et,Ft,ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Bt,ot.width,ot.height,st.depth,0,Et,Ft,ot.data)}else{Nt&&Kt&&e.texStorage2D(s.TEXTURE_2D,ut,Bt,Ot[0].width,Ot[0].height);for(let q=0,K=Ot.length;q<K;q++)ot=Ot[q],S.format!==an?Et!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,ot.width,ot.height,Et,ot.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Bt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,ot.width,ot.height,Et,Ft,ot.data):e.texImage2D(s.TEXTURE_2D,q,Bt,ot.width,ot.height,0,Et,Ft,ot.data)}else if(S.isDataArrayTexture)if(Nt){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Bt,st.width,st.height,st.depth),D)if(S.layerUpdates.size>0){let q=Fh(st.width,st.height,S.format,S.type);for(let K of S.layerUpdates){let mt=st.data.subarray(K*q/st.data.BYTES_PER_ELEMENT,(K+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,st.width,st.height,1,Et,Ft,mt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Et,Ft,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,st.width,st.height,st.depth,0,Et,Ft,st.data);else if(S.isData3DTexture)Nt?(Kt&&e.texStorage3D(s.TEXTURE_3D,ut,Bt,st.width,st.height,st.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Et,Ft,st.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,st.width,st.height,st.depth,0,Et,Ft,st.data);else if(S.isFramebufferTexture){if(Kt)if(Nt)e.texStorage2D(s.TEXTURE_2D,ut,Bt,st.width,st.height);else{let q=st.width,K=st.height;for(let mt=0;mt<ut;mt++)e.texImage2D(s.TEXTURE_2D,mt,Bt,q,K,0,Et,Ft,null),q>>=1,K>>=1}}else if(Ot.length>0){if(Nt&&Kt){let q=vt(Ot[0]);e.texStorage2D(s.TEXTURE_2D,ut,Bt,q.width,q.height)}for(let q=0,K=Ot.length;q<K;q++)ot=Ot[q],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Et,Ft,ot):e.texImage2D(s.TEXTURE_2D,q,Bt,Et,Ft,ot);S.generateMipmaps=!1}else if(Nt){if(Kt){let q=vt(st);e.texStorage2D(s.TEXTURE_2D,ut,Bt,q.width,q.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Ft,st)}else e.texImage2D(s.TEXTURE_2D,0,Bt,Et,Ft,st);m(S)&&p($),At.__version=Z.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Q(E,S,k){if(S.image.length!==6)return;let $=bt(E,S),j=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+k);let Z=n.get(j);if(j.version!==Z.__version||$===!0){e.activeTexture(s.TEXTURE0+k);let At=Qt.getPrimaries(Qt.workingColorSpace),dt=S.colorSpace===qn?null:Qt.getPrimaries(S.colorSpace),St=S.colorSpace===qn||At===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let $t=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let K=0;K<6;K++)!$t&&!st?Et[K]=x(S.image[K],!0,i.maxCubemapSize):Et[K]=st?S.image[K].image:S.image[K],Et[K]=Ut(S,Et[K]);let Ft=Et[0],Bt=r.convert(S.format,S.colorSpace),ot=r.convert(S.type),Ot=v(S.internalFormat,Bt,ot,S.colorSpace),Nt=S.isVideoTexture!==!0,Kt=Z.__version===void 0||$===!0,D=j.dataReady,ut=R(S,Ft);zt(s.TEXTURE_CUBE_MAP,S);let q;if($t){Nt&&Kt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ot,Ft.width,Ft.height);for(let K=0;K<6;K++){q=Et[K].mipmaps;for(let mt=0;mt<q.length;mt++){let xt=q[mt];S.format!==an?Bt!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,xt.width,xt.height,Bt,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,Ot,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,xt.width,xt.height,Bt,ot,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,Ot,xt.width,xt.height,0,Bt,ot,xt.data)}}}else{if(q=S.mipmaps,Nt&&Kt){q.length>0&&ut++;let K=vt(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ot,K.width,K.height)}for(let K=0;K<6;K++)if(st){Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et[K].width,Et[K].height,Bt,ot,Et[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,Et[K].width,Et[K].height,0,Bt,ot,Et[K].data);for(let mt=0;mt<q.length;mt++){let Ht=q[mt].image[K].image;Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,Ht.width,Ht.height,Bt,ot,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,Ot,Ht.width,Ht.height,0,Bt,ot,Ht.data)}}else{Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Bt,ot,Et[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ot,Bt,ot,Et[K]);for(let mt=0;mt<q.length;mt++){let xt=q[mt];Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,Bt,ot,xt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,Ot,Bt,ot,xt.image[K])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),Z.__version=j.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ht(E,S,k,$,j,Z){let At=r.convert(k.format,k.colorSpace),dt=r.convert(k.type),St=v(k.internalFormat,At,dt,k.colorSpace),$t=n.get(S),st=n.get(k);if(st.__renderTarget=S,!$t.__hasExternalTextures){let Et=Math.max(1,S.width>>Z),Ft=Math.max(1,S.height>>Z);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,St,Et,Ft,S.depth,0,At,dt,null):e.texImage2D(j,Z,St,Et,Ft,0,At,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Mt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,j,st.__webglTexture,0,nt(S)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,j,st.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function et(E,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,E),S.depthBuffer){let $=S.depthTexture,j=$&&$.isDepthTexture?$.type:null,Z=_(S.stencilBuffer,j),At=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=nt(S);Mt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,Z,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Z,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Z,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,E)}else{let $=S.textures;for(let j=0;j<$.length;j++){let Z=$[j],At=r.convert(Z.format,Z.colorSpace),dt=r.convert(Z.type),St=v(Z.internalFormat,At,dt,Z.colorSpace),$t=nt(S);k&&Mt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,St,S.width,S.height):Mt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,St,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,St,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);let j=$.__webglTexture,Z=nt(S);if(S.depthTexture.format===qi)Mt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(S.depthTexture.format===ji)Mt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Rt(E){let S=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){let $=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=$}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Tt(S.__webglFramebuffer,E)}else if(k){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),et(S.__webglDepthbuffer[$],E,!1);else{let j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),et(S.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(E,S,k){let $=n.get(E);S!==void 0&&ht($.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Rt(E)}function kt(E){let S=E.texture,k=n.get(E),$=n.get(S);E.addEventListener("dispose",A);let j=E.textures,Z=E.isWebGLCubeRenderTarget===!0,At=j.length>1;if(At||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let St=0;St<S.mipmaps.length;St++)k.__webglFramebuffer[dt][St]=s.createFramebuffer()}else k.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)k.__webglFramebuffer[dt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(At)for(let dt=0,St=j.length;dt<St;dt++){let $t=n.get(j[dt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&Mt(E)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<j.length;dt++){let St=j[dt];k.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);let $t=r.convert(St.format,St.colorSpace),st=r.convert(St.type),Et=v(St.internalFormat,$t,st,St.colorSpace,E.isXRRenderTarget===!0),Ft=nt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,Et,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),et(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),zt(s.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)ht(k.__webglFramebuffer[dt][St],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,St);else ht(k.__webglFramebuffer[dt],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,St=j.length;dt<St;dt++){let $t=j[dt],st=n.get($t);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),zt(s.TEXTURE_2D,$t),ht(k.__webglFramebuffer,E,$t,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m($t)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(dt=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),zt(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)ht(k.__webglFramebuffer[St],E,S,s.COLOR_ATTACHMENT0,dt,St);else ht(k.__webglFramebuffer,E,S,s.COLOR_ATTACHMENT0,dt,0);m(S)&&p(dt),e.unbindTexture()}E.depthBuffer&&Rt(E)}function J(E){let S=E.textures;for(let k=0,$=S.length;k<$;k++){let j=S[k];if(m(j)){let Z=y(E),At=n.get(j).__webglTexture;e.bindTexture(Z,At),p(Z),e.unbindTexture()}}}let it=[],C=[];function wt(E){if(E.samples>0){if(Mt(E)===!1){let S=E.textures,k=E.width,$=E.height,j=s.COLOR_BUFFER_BIT,Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(E),dt=S.length>1;if(dt)for(let St=0;St<S.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let St=0;St<S.length;St++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[St]);let $t=n.get(S[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,j,s.NEAREST),c===!0&&(it.length=0,C.length=0,it.push(s.COLOR_ATTACHMENT0+St),E.depthBuffer&&E.resolveDepthBuffer===!1&&(it.push(Z),C.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let St=0;St<S.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,At.__webglColorRenderbuffer[St]);let $t=n.get(S[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let S=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function nt(E){return Math.min(i.maxSamples,E.samples)}function Mt(E){let S=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ct(E){let S=o.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function Ut(E,S){let k=E.colorSpace,$=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==ss&&k!==qn&&(Qt.getTransfer(k)===re?($!==an||j!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=tt,this.setTextureCube=X,this.rebindTextures=Lt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Mt}function Rg(s,t){function e(n,i=qn){let r,o=Qt.getTransfer(i);if(n===Ln)return s.UNSIGNED_BYTE;if(n===ll)return s.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return s.BYTE;if(n===jh)return s.SHORT;if(n===Bs)return s.UNSIGNED_SHORT;if(n===cl)return s.INT;if(n===mi)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===Zs)return s.HALF_FLOAT;if(n===eu)return s.ALPHA;if(n===nu)return s.RGB;if(n===an)return s.RGBA;if(n===iu)return s.LUMINANCE;if(n===su)return s.LUMINANCE_ALPHA;if(n===qi)return s.DEPTH_COMPONENT;if(n===ji)return s.DEPTH_STENCIL;if(n===ul)return s.RED;if(n===dl)return s.RED_INTEGER;if(n===ru)return s.RG;if(n===fl)return s.RG_INTEGER;if(n===pl)return s.RGBA_INTEGER;if(n===kr||n===Hr||n===Vr||n===Gr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===$a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===Ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ka)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===ja||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===dc||n===fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wr)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ou||n===pc||n===mc||n===gc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Dc=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ee=class extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cg={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
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

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new He,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:Ig,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends Jn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,x=new Uc,m=e.getContextAttributes(),p=null,y=null,v=[],_=[],R=new lt,T=null,A=new Ae;A.viewport=new ae;let I=new Ae;I.viewport=new ae;let b=[A,I],M=new Dc,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=v[G];return Q===void 0&&(Q=new Ls,v[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=v[G];return Q===void 0&&(Q=new Ls,v[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=v[G];return Q===void 0&&(Q=new Ls,v[G]=Q),Q.getHandSpace()};function O(G){let Q=_.indexOf(G.inputSource);if(Q===-1)return;let ht=v[Q];ht!==void 0&&(ht.update(G.inputSource,G.frame,l||o),ht.dispatchEvent({type:G.type,data:G.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Y);for(let G=0;G<v.length;G++){let Q=_[G];Q!==null&&(_[G]=null,v[G].disconnect(Q))}P=null,F=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,y=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Dn(f.framebufferWidth,f.framebufferHeight,{format:an,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ht=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?ji:qi,ht=m.stencil?Qi:mi);let Tt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Tt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Dn(u.textureWidth,u.textureHeight,{format:an,type:Ln,depthTexture:new io(u.textureWidth,u.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),bt.setContext(i),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(G){for(let Q=0;Q<G.removed.length;Q++){let ht=G.removed[Q],et=_.indexOf(ht);et>=0&&(_[et]=null,v[et].disconnect(ht))}for(let Q=0;Q<G.added.length;Q++){let ht=G.added[Q],et=_.indexOf(ht);if(et===-1){for(let Rt=0;Rt<v.length;Rt++)if(Rt>=_.length){_.push(ht),et=Rt;break}else if(_[Rt]===null){_[Rt]=ht,et=Rt;break}if(et===-1)break}let Tt=v[et];Tt&&Tt.connect(ht)}}let H=new L,tt=new L;function X(G,Q,ht){H.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(ht.matrixWorld);let et=H.distanceTo(tt),Tt=Q.projectionMatrix.elements,Rt=ht.projectionMatrix.elements,Lt=Tt[14]/(Tt[10]-1),kt=Tt[14]/(Tt[10]+1),J=(Tt[9]+1)/Tt[5],it=(Tt[9]-1)/Tt[5],C=(Tt[8]-1)/Tt[0],wt=(Rt[8]+1)/Rt[0],nt=Lt*C,Mt=Lt*wt,ct=et/(-C+wt),Ut=ct*-C;if(Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ut),G.translateZ(ct),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Tt[10]===-1)G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let vt=Lt+ct,E=kt+ct,S=nt-Ut,k=Mt+(et-Ut),$=J*kt/E*vt,j=it*kt/E*vt;G.projectionMatrix.makePerspective(S,k,$,j,vt,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function rt(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let Q=G.near,ht=G.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ht=x.depthFar)),M.near=I.near=A.near=Q,M.far=I.far=A.far=ht,(P!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,F=M.far),A.layers.mask=G.layers.mask|2,I.layers.mask=G.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;let et=G.parent,Tt=M.cameras;rt(M,et);for(let Rt=0;Rt<Tt.length;Rt++)rt(Tt[Rt],et);Tt.length===2?X(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),gt(G,M,et)};function gt(G,Q,ht){ht===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(ht.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=vc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let _t=null;function zt(G,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let ht=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let et=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,et=!0);for(let Rt=0;Rt<ht.length;Rt++){let Lt=ht[Rt],kt=null;if(f!==null)kt=f.getViewport(Lt);else{let it=d.getViewSubImage(u,Lt);kt=it.viewport,Rt===0&&(t.setRenderTargetTextures(y,it.colorTexture,u.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(y))}let J=b[Rt];J===void 0&&(J=new Ae,J.layers.enable(Rt),J.viewport=new ae,b[Rt]=J),J.matrix.fromArray(Lt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Lt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(kt.x,kt.y,kt.width,kt.height),Rt===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),et===!0&&M.cameras.push(J)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Rt=d.getDepthInformation(ht[0]);Rt&&Rt.isValid&&Rt.texture&&x.init(t,Rt,i.renderState)}}for(let ht=0;ht<v.length;ht++){let et=_[ht],Tt=v[ht];et!==null&&Tt!==void 0&&Tt.update(et,Q,l||o)}_t&&_t(G,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let bt=new uu;bt.setAnimationLoop(zt),this.setAnimationLoop=function(G){_t=G},this.dispose=function(){}}},li=new Ze,Lg=new ee;function Dg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,li.copy(_),li.x*=-1,li.y*=-1,li.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),m.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(li)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ug(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));let R=v.program;n.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(u(y),r[y.id]=T)}function h(y){let v=d();y.__bindingPointIndex=v;let _=s.createBuffer(),R=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let v=i[y.id],_=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,A=_.length;T<A;T++){let I=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,M=I.length;b<M;b++){let P=I[b];if(f(P,T,b,R)===!0){let F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],B=0;for(let Y=0;Y<O.length;Y++){let H=O[Y],tt=x(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,F+B,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,B),B+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,_,R){let T=y.value,A=v+"_"+_;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let I=R[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(y){let v=y.uniforms,_=0,R=16;for(let A=0,I=v.length;A<I;A++){let b=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,P=b.length;M<P;M++){let F=b[M],O=Array.isArray(F.value)?F.value:[F.value];for(let B=0,Y=O.length;B<Y;B++){let H=O[B],tt=x(H),X=_%R,rt=X%tt.boundary,gt=X+rt;_+=rt,gt!==0&&R-gt<tt.storage&&(_+=R-gt),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=tt.storage}}}let T=_%R;return T>0&&(_+=R-T),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var so=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=Zn,this.toneMappingExposure=1;let _=this,R=!1,T=0,A=0,I=null,b=-1,M=null,P=new ae,F=new ae,O=null,B=new Gt(0),Y=0,H=e.width,tt=e.height,X=1,rt=null,gt=null,_t=new ae(0,0,H,tt),zt=new ae(0,0,H,tt),bt=!1,G=new zs,Q=!1,ht=!1,et=new ee,Tt=new ee,Rt=new L,Lt=new ae,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function it(){return I===null?X:1}let C=n;function wt(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),C===null){let U="webgl2";if(C=wt(U,w),C===null)throw wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let nt,Mt,ct,Ut,vt,E,S,k,$,j,Z,At,dt,St,$t,st,Et,Ft,Bt,ot,Ot,Nt,Kt,D;function ut(){nt=new Km(C),nt.init(),Nt=new Rg(C,nt),Mt=new Wm(C,nt,t,Nt),ct=new Eg(C,nt),Mt.reverseDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),Ut=new jm(C),vt=new dg,E=new Ag(C,nt,ct,vt,Mt,Nt,Ut),S=new qm(_),k=new Zm(_),$=new of(C),Kt=new Vm(C,$),j=new Jm(C,$,Ut,Kt),Z=new e0(C,j,$,Ut),Bt=new t0(C,Mt,E),st=new Xm(vt),At=new ug(_,S,k,nt,Mt,Kt,st),dt=new Dg(_,vt),St=new pg,$t=new yg(nt),Ft=new Hm(_,S,k,ct,Z,f,c),Et=new bg(_,Z,Mt),D=new Ug(C,Ut,Mt,ct),ot=new Gm(C,nt,Ut),Ot=new Qm(C,nt,Ut),Ut.programs=At.programs,_.capabilities=Mt,_.extensions=nt,_.properties=vt,_.renderLists=St,_.shadowMap=Et,_.state=ct,_.info=Ut}ut();let q=new Nc(_,C);this.xr=q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(H,tt,!1))},this.getSize=function(w){return w.set(H,tt)},this.setSize=function(w,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,tt=U,e.width=Math.floor(w*X),e.height=Math.floor(U*X),V===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(H*X,tt*X).floor()},this.setDrawingBufferSize=function(w,U,V){H=w,tt=U,X=V,e.width=Math.floor(w*V),e.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(_t)},this.setViewport=function(w,U,V,W){w.isVector4?_t.set(w.x,w.y,w.z,w.w):_t.set(w,U,V,W),ct.viewport(P.copy(_t).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(zt)},this.setScissor=function(w,U,V,W){w.isVector4?zt.set(w.x,w.y,w.z,w.w):zt.set(w,U,V,W),ct.scissor(F.copy(zt).multiplyScalar(X).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(w){ct.setScissorTest(bt=w)},this.setOpaqueSort=function(w){rt=w},this.setTransparentSort=function(w){gt=w},this.getClearColor=function(w){return w.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(w=!0,U=!0,V=!0){let W=0;if(w){let N=!1;if(I!==null){let at=I.texture.format;N=at===pl||at===fl||at===dl}if(N){let at=I.texture.type,yt=at===Ln||at===mi||at===Bs||at===Qi||at===ll||at===hl,Ct=Ft.getClearColor(),It=Ft.getClearAlpha(),Vt=Ct.r,Wt=Ct.g,Pt=Ct.b;yt?(g[0]=Vt,g[1]=Wt,g[2]=Pt,g[3]=It,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Vt,x[1]=Wt,x[2]=Pt,x[3]=It,C.clearBufferiv(C.COLOR,0,x))}else W|=C.COLOR_BUFFER_BIT}U&&(W|=C.DEPTH_BUFFER_BIT),V&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),St.dispose(),$t.dispose(),vt.dispose(),S.dispose(),k.dispose(),Z.dispose(),Kt.dispose(),D.dispose(),At.dispose(),q.dispose(),q.removeEventListener("sessionstart",ei),q.removeEventListener("sessionend",ni),Je.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=Ut.autoReset,U=Et.enabled,V=Et.autoUpdate,W=Et.needsUpdate,N=Et.type;ut(),Ut.autoReset=w,Et.enabled=U,Et.autoUpdate=V,Et.needsUpdate=W,Et.type=N}function xt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ht(w){let U=w.target;U.removeEventListener("dispose",Ht),ce(U)}function ce(w){_e(w),vt.remove(w)}function _e(w){let U=vt.get(w).programs;U!==void 0&&(U.forEach(function(V){At.releaseProgram(V)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,W,N,at){U===null&&(U=kt);let yt=N.isMesh&&N.matrixWorld.determinant()<0,Ct=Yu(w,U,V,W,N);ct.setMaterial(W,yt);let It=V.index,Vt=1;if(W.wireframe===!0){if(It=j.getWireframeAttribute(V),It===void 0)return;Vt=2}let Wt=V.drawRange,Pt=V.attributes.position,jt=Wt.start*Vt,le=(Wt.start+Wt.count)*Vt;at!==null&&(jt=Math.max(jt,at.start*Vt),le=Math.min(le,(at.start+at.count)*Vt)),It!==null?(jt=Math.max(jt,0),le=Math.min(le,It.count)):Pt!=null&&(jt=Math.max(jt,0),le=Math.min(le,Pt.count));let ue=le-jt;if(ue<0||ue===1/0)return;Kt.setup(N,W,Ct,V,It);let ze,ne=ot;if(It!==null&&(ze=$.get(It),ne=Ot,ne.setIndex(ze)),N.isMesh)W.wireframe===!0?(ct.setLineWidth(W.wireframeLinewidth*it()),ne.setMode(C.LINES)):ne.setMode(C.TRIANGLES);else if(N.isLine){let Dt=W.linewidth;Dt===void 0&&(Dt=1),ct.setLineWidth(Dt*it()),N.isLineSegments?ne.setMode(C.LINES):N.isLineLoop?ne.setMode(C.LINE_LOOP):ne.setMode(C.LINE_STRIP)}else N.isPoints?ne.setMode(C.POINTS):N.isSprite&&ne.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Dt=N._multiDrawStarts,Mn=N._multiDrawCounts,ie=N._multiDrawCount,nn=It?$.get(It).bytesPerElement:1,bi=vt.get(W).currentProgram.getUniforms();for(let Xe=0;Xe<ie;Xe++)bi.setValue(C,"_gl_DrawID",Xe),ne.render(Dt[Xe]/nn,Mn[Xe])}else if(N.isInstancedMesh)ne.renderInstances(jt,ue,N.count);else if(V.isInstancedBufferGeometry){let Dt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Mn=Math.min(V.instanceCount,Dt);ne.renderInstances(jt,ue,Mn)}else ne.render(jt,ue)};function Jt(w,U,V){w.transparent===!0&&w.side===Oe&&w.forceSinglePass===!1?(w.side=Le,w.needsUpdate=!0,cr(w,U,V),w.side=Kn,w.needsUpdate=!0,cr(w,U,V),w.side=Oe):cr(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),p=$t.get(V),p.init(U),v.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==V&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let W=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let yt=0;yt<at.length;yt++){let Ct=at[yt];Jt(Ct,V,N),W.add(Ct)}else Jt(at,V,N),W.add(at)}),v.pop(),p=null,W},this.compileAsync=function(w,U,V=null){let W=this.compile(w,U,V);return new Promise(N=>{function at(){if(W.forEach(function(yt){vt.get(yt).currentProgram.isReady()&&W.delete(yt)}),W.size===0){N(w);return}setTimeout(at,10)}nt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ve=null;function Te(w){ve&&ve(w)}function ei(){Je.stop()}function ni(){Je.start()}let Je=new uu;Je.setAnimationLoop(Te),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(w){ve=w,q.setAnimationLoop(w),w===null?Je.stop():Je.start()},q.addEventListener("sessionstart",ei),q.addEventListener("sessionend",ni),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,I),p=$t.get(w,v.length),p.init(U),v.push(p),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(Tt),ht=this.localClippingEnabled,Q=st.init(this.clippingPlanes,ht),m=St.get(w,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){let at=_.xr.getDepthSensingMesh();at!==null&&On(at,U,-1/0,_.sortObjects)}On(w,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(rt,gt),J=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,J&&Ft.addToRenderList(m,w),this.info.render.frame++,Q===!0&&st.beginShadows();let V=p.state.shadowsArray;Et.render(V,w,U),Q===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){let at=U.cameras;if(N.length>0)for(let yt=0,Ct=at.length;yt<Ct;yt++){let It=at[yt];xs(W,N,w,It)}J&&Ft.render(w);for(let yt=0,Ct=at.length;yt<Ct;yt++){let It=at[yt];gs(m,w,It,It.viewport)}}else N.length>0&&xs(W,N,w,U),J&&Ft.render(w),gs(m,w,U);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(_,w,U),Kt.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],Q===!0&&st.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function On(w,U,V,W){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){W&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);let yt=Z.update(w),Ct=w.material;Ct.visible&&m.push(w,yt,Ct,V,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){let yt=Z.update(w),Ct=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Lt.copy(yt.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(Ct)){let It=yt.groups;for(let Vt=0,Wt=It.length;Vt<Wt;Vt++){let Pt=It[Vt],jt=Ct[Pt.materialIndex];jt&&jt.visible&&m.push(w,yt,jt,V,Lt.z,Pt)}}else Ct.visible&&m.push(w,yt,Ct,V,Lt.z,null)}}let at=w.children;for(let yt=0,Ct=at.length;yt<Ct;yt++)On(at[yt],U,V,W)}function gs(w,U,V,W){let N=w.opaque,at=w.transmissive,yt=w.transparent;p.setupLightsView(V),Q===!0&&st.setGlobalState(_.clippingPlanes,V),W&&ct.viewport(P.copy(W)),N.length>0&&ii(N,U,V),at.length>0&&ii(at,U,V),yt.length>0&&ii(yt,U,V),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function xs(w,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Dn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?Zs:Ln,minFilter:pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let at=p.state.transmissionRenderTarget[W.id],yt=W.viewport||P;at.setSize(yt.z,yt.w);let Ct=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(B),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),J&&Ft.render(V);let It=_.toneMapping;_.toneMapping=Zn;let Vt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Q===!0&&st.setGlobalState(_.clippingPlanes,W),ii(w,V,W),E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Pt=0,jt=U.length;Pt<jt;Pt++){let le=U[Pt],ue=le.object,ze=le.geometry,ne=le.material,Dt=le.group;if(ne.side===Oe&&ue.layers.test(W.layers)){let Mn=ne.side;ne.side=Le,ne.needsUpdate=!0,ar(ue,V,W,ze,ne,Dt),ne.side=Mn,ne.needsUpdate=!0,Wt=!0}}Wt===!0&&(E.updateMultisampleRenderTarget(at),E.updateRenderTargetMipmap(at))}_.setRenderTarget(Ct),_.setClearColor(B,Y),Vt!==void 0&&(W.viewport=Vt),_.toneMapping=It}function ii(w,U,V){let W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=w.length;N<at;N++){let yt=w[N],Ct=yt.object,It=yt.geometry,Vt=W===null?yt.material:W,Wt=yt.group;Ct.layers.test(V.layers)&&ar(Ct,U,V,It,Vt,Wt)}}function ar(w,U,V,W,N,at){w.onBeforeRender(_,U,V,W,N,at),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(_,U,V,W,w,at),N.transparent===!0&&N.side===Oe&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,_.renderBufferDirect(V,U,W,N,w,at),N.side=Kn,N.needsUpdate=!0,_.renderBufferDirect(V,U,W,N,w,at),N.side=Oe):_.renderBufferDirect(V,U,W,N,w,at),w.onAfterRender(_,U,V,W,N,at)}function cr(w,U,V){U.isScene!==!0&&(U=kt);let W=vt.get(w),N=p.state.lights,at=p.state.shadowsArray,yt=N.state.version,Ct=At.getParameters(w,N.state,at,U,V),It=At.getProgramCacheKey(Ct),Vt=W.programs;W.environment=w.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(w.isMeshStandardMaterial?k:S).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Vt===void 0&&(w.addEventListener("dispose",Ht),Vt=new Map,W.programs=Vt);let Wt=Vt.get(It);if(Wt!==void 0){if(W.currentProgram===Wt&&W.lightsStateVersion===yt)return Ol(w,Ct),Wt}else Ct.uniforms=At.getUniforms(w),w.onBeforeCompile(Ct,_),Wt=At.acquireProgram(Ct,It),Vt.set(It,Wt),W.uniforms=Ct.uniforms;let Pt=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=st.uniform),Ol(w,Ct),W.needsLights=Zu(w),W.lightsStateVersion=yt,W.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Wt,W.uniformsList=null,Wt}function Fl(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=$i.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Ol(w,U){let V=vt.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Yu(w,U,V,W,N){U.isScene!==!0&&(U=kt),E.resetTextureUnits();let at=U.fog,yt=W.isMeshStandardMaterial?U.environment:null,Ct=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ss,It=(W.isMeshStandardMaterial?k:S).get(W.envMap||yt),Vt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Wt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pt=!!V.morphAttributes.position,jt=!!V.morphAttributes.normal,le=!!V.morphAttributes.color,ue=Zn;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ue=_.toneMapping);let ze=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=ze!==void 0?ze.length:0,Dt=vt.get(W),Mn=p.state.lights;if(Q===!0&&(ht===!0||w!==M)){let Qe=w===M&&W.id===b;st.setState(W,w,Qe)}let ie=!1;W.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Mn.state.version||Dt.outputColorSpace!==Ct||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==It||W.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==st.numPlanes||Dt.numIntersection!==st.numIntersection)||Dt.vertexAlphas!==Vt||Dt.vertexTangents!==Wt||Dt.morphTargets!==Pt||Dt.morphNormals!==jt||Dt.morphColors!==le||Dt.toneMapping!==ue||Dt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Dt.__version=W.version);let nn=Dt.currentProgram;ie===!0&&(nn=cr(W,U,N));let bi=!1,Xe=!1,_s=!1,de=nn.getUniforms(),hn=Dt.uniforms;if(ct.useProgram(nn.program)&&(bi=!0,Xe=!0,_s=!0),W.id!==b&&(b=W.id,Xe=!0),bi||M!==w){ct.buffers.depth.getReversed()?(et.copy(w.projectionMatrix),zd(et),kd(et),de.setValue(C,"projectionMatrix",et)):de.setValue(C,"projectionMatrix",w.projectionMatrix),de.setValue(C,"viewMatrix",w.matrixWorldInverse);let Bn=de.map.cameraPosition;Bn!==void 0&&Bn.setValue(C,Rt.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&de.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&de.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Xe=!0,_s=!0)}if(N.isSkinnedMesh){de.setOptional(C,N,"bindMatrix"),de.setOptional(C,N,"bindMatrixInverse");let Qe=N.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),de.setValue(C,"boneTexture",Qe.boneTexture,E))}N.isBatchedMesh&&(de.setOptional(C,N,"batchingTexture"),de.setValue(C,"batchingTexture",N._matricesTexture,E),de.setOptional(C,N,"batchingIdTexture"),de.setValue(C,"batchingIdTexture",N._indirectTexture,E),de.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&de.setValue(C,"batchingColorTexture",N._colorsTexture,E));let vs=V.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&Bt.update(N,V,nn),(Xe||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,de.setValue(C,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(hn.envMap.value=It,hn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),Xe&&(de.setValue(C,"toneMappingExposure",_.toneMappingExposure),Dt.needsLights&&$u(hn,_s),at&&W.fog===!0&&dt.refreshFogUniforms(hn,at),dt.refreshMaterialUniforms(hn,W,X,tt,p.state.transmissionRenderTarget[w.id]),$i.upload(C,Fl(Dt),hn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($i.upload(C,Fl(Dt),hn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&de.setValue(C,"center",N.center),de.setValue(C,"modelViewMatrix",N.modelViewMatrix),de.setValue(C,"normalMatrix",N.normalMatrix),de.setValue(C,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Qe=W.uniformsGroups;for(let Bn=0,zn=Qe.length;Bn<zn;Bn++){let Bl=Qe[Bn];D.update(Bl,nn),D.bind(Bl,nn)}}return nn}function $u(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Zu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,U,V){vt.get(w.texture).__webglTexture=U,vt.get(w.depthTexture).__webglTexture=V;let W=vt.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let V=vt.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){I=w,T=U,A=V;let W=!0,N=null,at=!1,yt=!1;if(w){let It=vt.get(w);if(It.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(It.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(It.__hasExternalTextures)E.rebindTextures(w,vt.get(w.texture).__webglTexture,vt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Pt=w.depthTexture;if(It.__boundDepthTexture!==Pt){if(Pt!==null&&vt.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(yt=!0);let Wt=vt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[U])?N=Wt[U][V]:N=Wt[U],at=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?N=vt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?N=Wt[V]:N=Wt,P.copy(w.viewport),F.copy(w.scissor),O=w.scissorTest}else P.copy(_t).multiplyScalar(X).floor(),F.copy(zt).multiplyScalar(X).floor(),O=bt;if(ct.bindFramebuffer(C.FRAMEBUFFER,N)&&W&&ct.drawBuffers(w,N),ct.viewport(P),ct.scissor(F),ct.setScissorTest(O),at){let It=vt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,It.__webglTexture,V)}else if(yt){let It=vt.get(w.texture),Vt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,It.__webglTexture,V||0,Vt)}b=-1},this.readRenderTargetPixels=function(w,U,V,W,N,at,yt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){ct.bindFramebuffer(C.FRAMEBUFFER,Ct);try{let It=w.texture,Vt=It.format,Wt=It.type;if(!Mt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-W&&V>=0&&V<=w.height-N&&C.readPixels(U,V,W,N,Nt.convert(Vt),Nt.convert(Wt),at)}finally{let It=I!==null?vt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,W,N,at,yt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=vt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){let It=w.texture,Vt=It.format,Wt=It.type;if(!Mt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-W&&V>=0&&V<=w.height-N){ct.bindFramebuffer(C.FRAMEBUFFER,Ct);let Pt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Pt),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),C.readPixels(U,V,W,N,Nt.convert(Vt),Nt.convert(Wt),0);let jt=I!==null?vt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,jt);let le=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Bd(C,le,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Pt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(Pt),C.deleteSync(le),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,V=0){w.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let W=Math.pow(2,-V),N=Math.floor(w.image.width*W),at=Math.floor(w.image.height*W),yt=U!==null?U.x:0,Ct=U!==null?U.y:0;E.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,yt,Ct,N,at),ct.unbindTexture()},this.copyTextureToTexture=function(w,U,V=null,W=null,N=0){w.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let at,yt,Ct,It,Vt,Wt,Pt,jt,le,ue=w.isCompressedTexture?w.mipmaps[N]:w.image;V!==null?(at=V.max.x-V.min.x,yt=V.max.y-V.min.y,Ct=V.isBox3?V.max.z-V.min.z:1,It=V.min.x,Vt=V.min.y,Wt=V.isBox3?V.min.z:0):(at=ue.width,yt=ue.height,Ct=ue.depth||1,It=0,Vt=0,Wt=0),W!==null?(Pt=W.x,jt=W.y,le=W.z):(Pt=0,jt=0,le=0);let ze=Nt.convert(U.format),ne=Nt.convert(U.type),Dt;U.isData3DTexture?(E.setTexture3D(U,0),Dt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Dt=C.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Dt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);let Mn=C.getParameter(C.UNPACK_ROW_LENGTH),ie=C.getParameter(C.UNPACK_IMAGE_HEIGHT),nn=C.getParameter(C.UNPACK_SKIP_PIXELS),bi=C.getParameter(C.UNPACK_SKIP_ROWS),Xe=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ue.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ue.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,It),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wt);let _s=w.isDataArrayTexture||w.isData3DTexture,de=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let hn=vt.get(w),vs=vt.get(U),Qe=vt.get(hn.__renderTarget),Bn=vt.get(vs.__renderTarget);ct.bindFramebuffer(C.READ_FRAMEBUFFER,Qe.__webglFramebuffer),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let zn=0;zn<Ct;zn++)_s&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.get(w).__webglTexture,N,Wt+zn),w.isDepthTexture?(de&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vt.get(U).__webglTexture,N,le+zn),C.blitFramebuffer(It,Vt,at,yt,Pt,jt,at,yt,C.DEPTH_BUFFER_BIT,C.NEAREST)):de?C.copyTexSubImage3D(Dt,N,Pt,jt,le+zn,It,Vt,at,yt):C.copyTexSubImage2D(Dt,N,Pt,jt,le+zn,It,Vt,at,yt);ct.bindFramebuffer(C.READ_FRAMEBUFFER,null),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else de?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Dt,N,Pt,jt,le,at,yt,Ct,ze,ne,ue.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Dt,N,Pt,jt,le,at,yt,Ct,ze,ue.data):C.texSubImage3D(Dt,N,Pt,jt,le,at,yt,Ct,ze,ne,ue):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Pt,jt,at,yt,ze,ne,ue.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Pt,jt,ue.width,ue.height,ze,ue.data):C.texSubImage2D(C.TEXTURE_2D,N,Pt,jt,at,yt,ze,ne,ue);C.pixelStorei(C.UNPACK_ROW_LENGTH,Mn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ie),C.pixelStorei(C.UNPACK_SKIP_PIXELS,nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,bi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xe),N===0&&U.generateMipmaps&&C.generateMipmap(Dt),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V=null,W=null,N=0){return w.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,V,W,N)},this.initRenderTarget=function(w){vt.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,ct.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var ro=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ns=class extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ne=new L,oo=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ks=class extends gn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bi,ws=new L,zi=new L,ki=new L,Hi=new lt,Es=new lt,gu=new ee,Ir=new L,Ts=new L,Pr=new L,Oh=new lt,Aa=new lt,Bh=new lt,ao=class extends ye{constructor(t=new ks){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fc(e,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new oo(n,3,0,!1)),Bi.setAttribute("uv",new oo(n,2,3,!1))}this.geometry=Bi,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),gu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-ki.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Lr(Ir.set(-.5,-.5,0),ki,o,zi,i,r),Lr(Ts.set(.5,-.5,0),ki,o,zi,i,r),Lr(Pr.set(.5,.5,0),ki,o,zi,i,r),Oh.set(0,0),Aa.set(1,0),Bh.set(1,1);let a=t.ray.intersectTriangle(Ir,Ts,Pr,!1,ws);if(a===null&&(Lr(Ts.set(-.5,.5,0),ki,o,zi,i,r),Aa.set(0,1),a=t.ray.intersectTriangle(Ir,Pr,Ts,!1,ws),a===null))return;let c=t.ray.origin.distanceTo(ws);c<t.near||c>t.far||e.push({distance:c,point:ws.clone(),uv:Yn.getInterpolation(ws,Ir,Ts,Pr,Oh,Aa,Bh,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Lr(s,t,e,n,i,r){Hi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Es.x=r*Hi.x-i*Hi.y,Es.y=i*Hi.x+r*Hi.y):Es.copy(Hi),s.copy(t),s.x+=Es.x,s.y+=Es.y,s.applyMatrix4(gu)}var Oc=class extends He{constructor(t=null,e=1,n=1,i,r,o,a,c,l=$e,h=$e,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var co=class extends ke{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vi=new ee,zh=new ee,Dr=[],kh=new Un,Ng=new ee,As=new pt,Rs=new Qn,gi=class extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new co(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ng)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),kh.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(kh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),Rs.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),t.ray.intersectsSphere(Rs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vi),zh.multiplyMatrices(n,Vi),As.matrixWorld=zh,As.raycast(t,Dr);for(let o=0,a=Dr.length;o<a;o++){let c=Dr[o];c.instanceId=r,c.object=this,e.push(c)}Dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new co(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oc(new Float32Array(i*this.count),i,this.count,ul,pn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Hs=class extends gn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hh=new ee,Bc=new Kr,Ur=new Qn,Nr=new L,lo=class extends ye{constructor(t=new Me,e=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;Hh.copy(i).invert(),Bc.copy(t.ray).applyMatrix4(Hh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let m=l.getX(g);Nr.fromBufferAttribute(d,m),Vh(Nr,m,c,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)Nr.fromBufferAttribute(d,g),Vh(Nr,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vh(s,t,e,n,i,r,o){let a=Bc.distanceSqToPoint(s);if(a<e){let c=new L;Bc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ho=class extends He{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new lt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,i=[],r=[],o=[],a=new L,c=new ee;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Pe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Pe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Vs=class extends tn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},zc=class extends Vs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Fr=new L,Ra=new xl,Ca=new xl,Ia=new xl,kc=class extends tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Fr.subVectors(i[0],i[1]).add(i[0]),l=Fr);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Fr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ra.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,x,m),Ca.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,x,m),Ia.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Ca.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Ia.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Ra.calc(c),Ca.calc(c),Ia.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Fg(s,t){let e=1-s;return e*e*t}function Og(s,t){return 2*(1-s)*s*t}function Bg(s,t){return s*s*t}function Ds(s,t,e,n){return Fg(s,t)+Og(s,e)+Bg(s,n)}function zg(s,t){let e=1-s;return e*e*e*t}function kg(s,t){let e=1-s;return 3*e*e*s*t}function Hg(s,t){return 3*(1-s)*s*s*t}function Vg(s,t){return s*s*s*t}function Us(s,t,e,n,i){return zg(s,t)+kg(s,e)+Hg(s,n)+Vg(s,i)}var uo=class extends tn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Us(t,i.x,r.x,o.x,a.x),Us(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hc=class extends tn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Us(t,i.x,r.x,o.x,a.x),Us(t,i.y,r.y,o.y,a.y),Us(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fo=class extends tn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vc=class extends tn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends tn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ds(t,i.x,r.x,o.x),Ds(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gc=class extends tn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ds(t,i.x,r.x,o.x),Ds(t,i.y,r.y,o.y),Ds(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Gh(a,c.x,l.x,h.x,d.x),Gh(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:kc,CubicBezierCurve:uo,CubicBezierCurve3:Hc,EllipseCurve:Vs,LineCurve:fo,LineCurve3:Vc,QuadraticBezierCurve:po,QuadraticBezierCurve3:Gc,SplineCurve:mo}),Xc=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Wc[i.type]().fromJSON(i))}return this}},go=class extends Xc{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fo(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new po(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new uo(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new mo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new Vs(t,e,n,i,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Gs=class s extends Me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new L,h=new lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},jn=class s extends Me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(d,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(f,2));function y(){let _=new L,R=new L,T=0,A=(e-t)/n;for(let I=0;I<=r;I++){let b=[],M=I/r,P=M*(e-t)+t;for(let F=0;F<=i;F++){let O=F/i,B=O*c+a,Y=Math.sin(B),H=Math.cos(B);R.x=P*Y,R.y=-M*n+m,R.z=P*H,d.push(R.x,R.y,R.z),_.set(Y,A,H).normalize(),u.push(_.x,_.y,_.z),f.push(O,1-M),b.push(g++)}x.push(b)}for(let I=0;I<i;I++)for(let b=0;b<r;b++){let M=x[b][I],P=x[b+1][I],F=x[b+1][I+1],O=x[b][I+1];(t>0||b!==0)&&(h.push(M,P,O),T+=3),(e>0||b!==r-1)&&(h.push(P,F,O),T+=3)}l.addGroup(p,T,0),p+=T}function v(_){let R=g,T=new lt,A=new L,I=0,b=_===!0?t:e,M=_===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;let P=g;for(let F=0;F<=i;F++){let B=F/i*c+a,Y=Math.cos(B),H=Math.sin(B);A.x=b*H,A.y=m*M,A.z=b*Y,d.push(A.x,A.y,A.z),u.push(0,M,0),T.x=Y*.5+.5,T.y=H*.5*M+.5,f.push(T.x,T.y),g++}for(let F=0;F<i;F++){let O=R+F,B=P+F;_===!0?h.push(B,B+1,O):h.push(B+1,B,O),I+=3}l.addGroup(p,I,_===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ws=class extends go{constructor(t){super(t),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new go().fromJSON(i))}return this}},Gg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=xu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(n&&(r=$g(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)d=s[g],u=s[g+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Xs(r,o,e,a,c,f,0),o}};function xu(s,t,e,n,i){let r,o;if(i===rx(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Wh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Wh(r,s[r],s[r+1],o);return o&&Co(o,o.next)&&(Ys(o),o=o.next),o}function xi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Co(e,e.next)||me(e.prev,e,e.next)===0)){if(Ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xs(s,t,e,n,i,r,o){if(!s)return;!o&&r&&jg(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Xg(s,n,i,r):Wg(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Ys(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=qg(xi(s),t,e),Xs(s,t,e,n,i,r,2)):o===2&&Yg(s,t,e,n,i,r):Xs(xi(s),t,e,n,i,r,1);break}}}function Wg(s){let t=s.prev,e=s,n=s.next;if(me(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Wi(i,a,r,c,o,l,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xg(s,t,e,n){let i=s.prev,r=s,o=s.next;if(me(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,p=qc(f,g,t,e,n),y=qc(x,m,t,e,n),v=s.prevZ,_=s.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Wi(a,h,c,d,l,u,v.x,v.y)&&me(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Wi(a,h,c,d,l,u,_.x,_.y)&&me(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Wi(a,h,c,d,l,u,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Wi(a,h,c,d,l,u,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function qg(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Co(i,r)&&_u(i,n,n.next,r)&&qs(i,r)&&qs(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ys(n),Ys(n.next),n=s=r),n=n.next}while(n!==s);return xi(n)}function Yg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nx(o,a)){let c=vu(o,a);o=xi(o,o.next),c=xi(c,c.next),Xs(o,t,e,n,i,r,0),Xs(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function $g(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=xu(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ex(l));for(i.sort(Zg),r=0;r<i.length;r++)e=Kg(i[r],e);return e}function Zg(s,t){return s.x-t.x}function Kg(s,t){let e=Jg(s,t);if(!e)return t;let n=vu(e,s);return xi(n,n.next),xi(e,e.next)}function Jg(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,d;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Wi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),qs(e,s)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&Qg(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function Qg(s,t){return me(s.prev,s,t.prev)<0&&me(t.next,s,s.next)<0}function jg(s,t,e,n){let i=s;do i.z===0&&(i.z=qc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,tx(i)}function tx(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function qc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ex(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Wi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function nx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ix(s,t)&&(qs(s,t)&&qs(t,s)&&sx(s,t)&&(me(s.prev,s,t.prev)||me(s,t.prev,t))||Co(s,t)&&me(s.prev,s,s.next)>0&&me(t.prev,t,t.next)>0)}function me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Co(s,t){return s.x===t.x&&s.y===t.y}function _u(s,t,e,n){let i=Br(me(s,t,e)),r=Br(me(s,t,n)),o=Br(me(e,n,s)),a=Br(me(e,n,t));return!!(i!==r&&o!==a||i===0&&Or(s,e,t)||r===0&&Or(s,n,t)||o===0&&Or(e,s,n)||a===0&&Or(e,t,n))}function Or(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Br(s){return s>0?1:s<0?-1:0}function ix(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&_u(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function qs(s,t){return me(s.prev,s,s.next)<0?me(s,t,s.next)>=0&&me(s,s.prev,t)>=0:me(s,t,s.prev)<0||me(s,s.next,t)<0}function sx(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function vu(s,t){let e=new Yc(s.i,s.x,s.y),n=new Yc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wh(s,t,e,n){let i=new Yc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ys(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Yc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rx(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ns=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Xh(t),qh(n,t);let o=t.length;e.forEach(Xh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,qh(n,e[c]);let a=Gg.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Xh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function qh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var xo=class s extends Me{constructor(t=new Ws([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:ox,v,_=!1,R,T,A,I;p&&(v=p.getSpacedPoints(h),_=!0,u=!1,R=p.computeFrenetFrames(h,!1),T=new L,A=new L,I=new L),u||(m=0,f=0,g=0,x=0);let b=a.extractPoints(l),M=b.shape,P=b.holes;if(!Ns.isClockWise(M)){M=M.reverse();for(let J=0,it=P.length;J<it;J++){let C=P[J];Ns.isClockWise(C)&&(P[J]=C.reverse())}}let O=Ns.triangulateShape(M,P),B=M;for(let J=0,it=P.length;J<it;J++){let C=P[J];M=M.concat(C)}function Y(J,it,C){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(it,C)}let H=M.length,tt=O.length;function X(J,it,C){let wt,nt,Mt,ct=J.x-it.x,Ut=J.y-it.y,vt=C.x-J.x,E=C.y-J.y,S=ct*ct+Ut*Ut,k=ct*E-Ut*vt;if(Math.abs(k)>Number.EPSILON){let $=Math.sqrt(S),j=Math.sqrt(vt*vt+E*E),Z=it.x-Ut/$,At=it.y+ct/$,dt=C.x-E/j,St=C.y+vt/j,$t=((dt-Z)*E-(St-At)*vt)/(ct*E-Ut*vt);wt=Z+ct*$t-J.x,nt=At+Ut*$t-J.y;let st=wt*wt+nt*nt;if(st<=2)return new lt(wt,nt);Mt=Math.sqrt(st/2)}else{let $=!1;ct>Number.EPSILON?vt>Number.EPSILON&&($=!0):ct<-Number.EPSILON?vt<-Number.EPSILON&&($=!0):Math.sign(Ut)===Math.sign(E)&&($=!0),$?(wt=-Ut,nt=ct,Mt=Math.sqrt(S)):(wt=ct,nt=Ut,Mt=Math.sqrt(S/2))}return new lt(wt/Mt,nt/Mt)}let rt=[];for(let J=0,it=B.length,C=it-1,wt=J+1;J<it;J++,C++,wt++)C===it&&(C=0),wt===it&&(wt=0),rt[J]=X(B[J],B[C],B[wt]);let gt=[],_t,zt=rt.concat();for(let J=0,it=P.length;J<it;J++){let C=P[J];_t=[];for(let wt=0,nt=C.length,Mt=nt-1,ct=wt+1;wt<nt;wt++,Mt++,ct++)Mt===nt&&(Mt=0),ct===nt&&(ct=0),_t[wt]=X(C[wt],C[Mt],C[ct]);gt.push(_t),zt=zt.concat(_t)}for(let J=0;J<m;J++){let it=J/m,C=f*Math.cos(it*Math.PI/2),wt=g*Math.sin(it*Math.PI/2)+x;for(let nt=0,Mt=B.length;nt<Mt;nt++){let ct=Y(B[nt],rt[nt],wt);et(ct.x,ct.y,-C)}for(let nt=0,Mt=P.length;nt<Mt;nt++){let ct=P[nt];_t=gt[nt];for(let Ut=0,vt=ct.length;Ut<vt;Ut++){let E=Y(ct[Ut],_t[Ut],wt);et(E.x,E.y,-C)}}}let bt=g+x;for(let J=0;J<H;J++){let it=u?Y(M[J],zt[J],bt):M[J];_?(A.copy(R.normals[0]).multiplyScalar(it.x),T.copy(R.binormals[0]).multiplyScalar(it.y),I.copy(v[0]).add(A).add(T),et(I.x,I.y,I.z)):et(it.x,it.y,0)}for(let J=1;J<=h;J++)for(let it=0;it<H;it++){let C=u?Y(M[it],zt[it],bt):M[it];_?(A.copy(R.normals[J]).multiplyScalar(C.x),T.copy(R.binormals[J]).multiplyScalar(C.y),I.copy(v[J]).add(A).add(T),et(I.x,I.y,I.z)):et(C.x,C.y,d/h*J)}for(let J=m-1;J>=0;J--){let it=J/m,C=f*Math.cos(it*Math.PI/2),wt=g*Math.sin(it*Math.PI/2)+x;for(let nt=0,Mt=B.length;nt<Mt;nt++){let ct=Y(B[nt],rt[nt],wt);et(ct.x,ct.y,d+C)}for(let nt=0,Mt=P.length;nt<Mt;nt++){let ct=P[nt];_t=gt[nt];for(let Ut=0,vt=ct.length;Ut<vt;Ut++){let E=Y(ct[Ut],_t[Ut],wt);_?et(E.x,E.y+v[h-1].y,v[h-1].x+C):et(E.x,E.y,d+C)}}}G(),Q();function G(){let J=i.length/3;if(u){let it=0,C=H*it;for(let wt=0;wt<tt;wt++){let nt=O[wt];Tt(nt[2]+C,nt[1]+C,nt[0]+C)}it=h+m*2,C=H*it;for(let wt=0;wt<tt;wt++){let nt=O[wt];Tt(nt[0]+C,nt[1]+C,nt[2]+C)}}else{for(let it=0;it<tt;it++){let C=O[it];Tt(C[2],C[1],C[0])}for(let it=0;it<tt;it++){let C=O[it];Tt(C[0]+H*h,C[1]+H*h,C[2]+H*h)}}n.addGroup(J,i.length/3-J,0)}function Q(){let J=i.length/3,it=0;ht(B,it),it+=B.length;for(let C=0,wt=P.length;C<wt;C++){let nt=P[C];ht(nt,it),it+=nt.length}n.addGroup(J,i.length/3-J,1)}function ht(J,it){let C=J.length;for(;--C>=0;){let wt=C,nt=C-1;nt<0&&(nt=J.length-1);for(let Mt=0,ct=h+m*2;Mt<ct;Mt++){let Ut=H*Mt,vt=H*(Mt+1),E=it+wt+Ut,S=it+nt+Ut,k=it+nt+vt,$=it+wt+vt;Rt(E,S,k,$)}}}function et(J,it,C){c.push(J),c.push(it),c.push(C)}function Tt(J,it,C){Lt(J),Lt(it),Lt(C);let wt=i.length/3,nt=y.generateTopUV(n,i,wt-3,wt-2,wt-1);kt(nt[0]),kt(nt[1]),kt(nt[2])}function Rt(J,it,C,wt){Lt(J),Lt(it),Lt(wt),Lt(it),Lt(C),Lt(wt);let nt=i.length/3,Mt=y.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);kt(Mt[0]),kt(Mt[1]),kt(Mt[3]),kt(Mt[1]),kt(Mt[2]),kt(Mt[3])}function Lt(J){i.push(c[J*3+0]),i.push(c[J*3+1]),i.push(c[J*3+2])}function kt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ax(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Wc[i.type]().fromJSON(i)),new s(n,t.options)}},ox={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new lt(r,o),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-d),new lt(u,1-g),new lt(x,1-p)]:[new lt(a,1-c),new lt(h,1-d),new lt(f,1-g),new lt(m,1-p)]}};function ax(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _o=class s extends Me{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],d=t,u=(e-t)/i,f=new L,g=new lt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,v=y,_=y+n+1,R=y+n+2,T=y+1;a.push(v,_,T),a.push(_,R,T)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var vo=class s extends Me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){let T=R/e;d.x=-t*Math.cos(i+T*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(i+T*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+_,1-v),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],_=h[p][y],R=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(v,_,T),(p!==n-1||c<Math.PI)&&f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var yo=class s extends Me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var De=class extends gn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ve=class extends gn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function zr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function cx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var is=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$c=class extends is{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gl:r=t,a=2*e-n;break;case Wl:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gl:o=t,c=2*n-e;break;case Wl:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+y*o[l+R]+v*o[c+R]+_*o[d+R];return r}},Zc=class extends is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Kc=class extends is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},cn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $c(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Xr:e=this.InterpolantFactoryMethodDiscrete;break;case xc:e=this.InterpolantFactoryMethodLinear;break;case Qo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return xc;case this.InterpolantFactoryMethodSmooth:return Qo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&cx(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=xc;var _i=class extends cn{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Xr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends cn{};Jc.prototype.ValueTypeName="color";var Qc=class extends cn{};Qc.prototype.ValueTypeName="number";var jc=class extends is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)mn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Mo=class extends cn{InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}};Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends cn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Xr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends cn{};tl.prototype.ValueTypeName="vector";var el=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},lx=new el,nl=class{constructor(t){this.manager=t!==void 0?t:lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};nl.DEFAULT_MATERIAL_NAME="__DEFAULT";var $s=class extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},So=class extends $s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Pa=new ee,Yh=new L,$h=new L,bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Zh=new ee,Cs=new L,La=new L,il=class extends bo{constructor(){super(new Ae(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cs),La.copy(n.position),La.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(La),n.updateMatrixWorld(),i.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Zh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}},wo=class extends $s{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new il}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},sl=class extends bo{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Eo=class extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new sl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var _l="\\[\\]\\.:\\/",hx=new RegExp("["+_l+"]","g"),vl="[^"+_l+"]",ux="[^"+_l.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",vl),fx=/(WCOD+)?/.source.replace("WCOD",ux),px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),gx=new RegExp("^"+dx+fx+px+mx+"$"),xx=["material","materials","bones","map"],rl=class{constructor(t,e,n){let i=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hx,"")}static parseTrackName(t){let e=gx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);xx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=rl;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Px=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Js(s,t){return{x:(t-139.704)*90360*.7,z:(35.734-s)*110950*.7}}var _x={Y0:[35.72805,139.69688],Y_RK:[35.73065,139.6983],Y_KN:[35.733132,139.699497],Y2:[35.73521,139.7006],Y3:[35.73938,139.70538],KUMANO:[35.74139,139.70675],K1:[35.74012,139.70841],AXIA:[35.7386,139.71061],K3:[35.73843,139.71165],K4:[35.7381,139.7126],G1:[35.73714,139.70997],G2:[35.73446,139.70942],G3:[35.73215,139.7088],BUKURO:[35.73162,139.70846],GOSA:[35.73125,139.70826],W_SW:[35.73082,139.70804],G5:[35.72835,139.70666],R441_1:[35.72924,139.70354],R441_2:[35.72865,139.70042],S441:[35.72776,139.70826],EDIT:[35.72744,139.70931],R1:[35.73037,139.69903],R2:[35.73043,139.70004],R3:[35.73074,139.70236],R4:[35.73112,139.70507],TIPTOP:[35.73116,139.70546],RK_E:[35.73175,139.70713],HP:[35.73207,139.70706],QB:[35.73186,139.70663],Q1:[35.73212,139.70584],Q2:[35.73253,139.70499],NIKKEN:[35.73284,139.7039],Q3:[35.73291,139.70329],Q4:[35.73288,139.70081],YUBIN:[35.73305,139.69987],EPOS:[35.73066,139.70882],W_S2:[35.73065,139.70935],W_A:[35.73092,139.70969],W_B:[35.73151,139.71002],W_C:[35.73126,139.71028],HOSEI:[35.73121,139.71084],W_E1:[35.73155,139.71112],W_E2:[35.73163,139.71096],KUREYON:[35.73268,139.71085],W_N:[35.73262,139.70952],MIYAKE:[35.73161,139.70947],W_S1:[35.73068,139.7084],E_EN:[35.7362,139.7116],E1:[35.73407,139.71155],S_MID:[35.73007,139.70935]},he=Object.fromEntries(Object.entries(_x).map(([s,[t,e]])=>[s,Js(t,e)])),_n=[{name:"\u5C71\u624B\u901A\u308A",width:16,nodes:["Y0","Y_RK","Y_KN","Y2","Y3","KUMANO"]},{name:"\u5DDD\u8D8A\u8857\u9053",width:14,nodes:["KUMANO","K1","AXIA","K3","K4"]},{name:"\u5287\u5834\u901A\u308A",width:12,nodes:["AXIA","G1","G2","G3","BUKURO","GOSA","W_SW","G5"]},{name:"\u90FD\u9053441\u53F7",width:12,nodes:["Y0","R441_2","R441_1","G5","S441","EDIT"]},{name:"\u7ACB\u6559\u901A\u308A",width:9,nodes:["Y_RK","R1","R2","R3","R4","TIPTOP","RK_E","GOSA"]},{name:"\u8981\u753A\u901A\u308A",width:11,nodes:["Y_KN","YUBIN","Q4","Q3","NIKKEN","Q2","Q1","QB","HP","RK_E"]},{name:"\u897F\u53E3\u901A\u308A",width:9,nodes:["EPOS","W_S2","W_A","W_B","W_C","HOSEI","W_E1","W_E2","KUREYON","W_N","MIYAKE","BUKURO"]},{name:"\u897F\u53E3\u516C\u5712\u901A\u308A",width:9,nodes:["W_SW","W_S1","EPOS"]},{name:"\u6587\u5316\u901A\u308A",width:10,nodes:["K3","E_EN","E1","KUREYON"]},{name:"\u5357\u53E3\u901A\u308A",width:10,nodes:["W_S2","S_MID","EDIT"]}],yl=[{id:"shop",type:"shop",name:"\u30C9\u30F3\u30FB\u30AD\u30DB\u30FC\u30C6 \u5317\u6C60\u888B\u5E97\uFF08\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30B7\u30E7\u30C3\u30D7\uFF09",short:"TUNE SHOP",node:"K4",offset:[0,0]},{id:"gs",type:"gs",name:"ENEOS \u30BB\u30EB\u30D5\u6C60\u888B\uFF08\u30BB\u30FC\u30D6\u30DD\u30A4\u30F3\u30C8\uFF09",short:"GS / SAVE",node:"E_EN",offset:[0,0]}],Ml=[{id:"speedway",name:"\u897F\u6C60\u888B\u30B9\u30D4\u30FC\u30C9\u30A6\u30A7\u30A4",laps:1,radius:22,nodes:["Y_RK","Y_KN","Y2","Y3","KUMANO","K1","AXIA","G1","G2","G3","BUKURO","GOSA","W_SW","G5","R441_1","R441_2","Y0"],desc:"\u5C71\u624B\u901A\u308A\u30FB\u5DDD\u8D8A\u8857\u9053\u30FB\u5287\u5834\u901A\u308A\u30FB441\u53F7\u3092\u5468\u56DE\u3059\u308B\u9AD8\u901F\u30B3\u30FC\u30B9"},{id:"wgp",name:"\u6C60\u888BWGP",laps:3,radius:7,wide:{W_B:13,W_E2:12},nodes:["EPOS","W_S2","W_A","W_B","W_C","HOSEI","W_E1","W_E2","KUREYON","W_N","MIYAKE","BUKURO","GOSA","W_SW","W_S1"],desc:"\u6C60\u888B\u99C5\u897F\u53E3\u306E\u72ED\u3044\u8DEF\u5730\u3092\u99C6\u3051\u629C\u3051\u308B\u30C6\u30AF\u30CB\u30AB\u30EB\u30B3\u30FC\u30B9"},{id:"rikkyo",name:"\u7ACB\u6559\u901A\u308A\u30B5\u30FC\u30AD\u30C3\u30C8",laps:2,radius:12,wide:{RK_E:13,HP:14},nodes:["R3","R4","TIPTOP","RK_E","HP","QB","Q1","Q2","NIKKEN","Q3","Q4","YUBIN","Y_KN","Y_RK","R1","R2"],desc:"\u7ACB\u6559\u901A\u308A\u3068\u8981\u753A\u901A\u308A\u3092\u7D50\u3076\u3001\u30D8\u30A2\u30D4\u30F3\u304C\u540D\u7269\u306E\u4E2D\u901F\u30B3\u30FC\u30B9"}],Qs=Ml.flatMap(s=>[{key:`${s.id}_f`,course:s,reverse:!1,name:`${s.name}\uFF08\u9806\u8D70\uFF09`},{key:`${s.id}_r`,course:s,reverse:!0,name:`${s.name}\uFF08\u9006\u8D70\uFF09`}]);function yu(s,t){for(let e of _n)for(let n=0;n<e.nodes.length-1;n++)if(e.nodes[n]===s&&e.nodes[n+1]===t||e.nodes[n]===t&&e.nodes[n+1]===s)return e.width;return 10}var Sl={node:"E_EN",heading:Math.PI};var Io=class{constructor(t,e=24){this.segs=t,this.cell=e,this.grid=new Map;for(let n=0;n<t.length;n++){let i=t[n],r=i.hw+8,o=Math.floor((Math.min(i.ax,i.bx)-r)/e),a=Math.floor((Math.max(i.ax,i.bx)+r)/e),c=Math.floor((Math.min(i.az,i.bz)-r)/e),l=Math.floor((Math.max(i.az,i.bz)+r)/e);for(let h=o;h<=a;h++)for(let d=c;d<=l;d++){let u=h*73856093^d*19349663,f=this.grid.get(u);f||this.grid.set(u,f=[]),f.push(n)}}}query(t,e){let n=Math.floor(t/this.cell)*73856093^Math.floor(e/this.cell)*19349663,i=this.grid.get(n),r=1e9,o=0,a=0;if(!i)return{d:50,nx:0,nz:0,far:!0};for(let c of i){let l=this.segs[c],h=l.bx-l.ax,d=l.bz-l.az,u=h*h+d*d,f=u>0?((t-l.ax)*h+(e-l.az)*d)/u:0;f=f<0?0:f>1?1:f;let g=l.ax+h*f,x=l.az+d*f,m=t-g,p=e-x,y=Math.hypot(m,p),v=y-l.hw;v<r&&(r=v,y>1e-6?(o=m/y,a=p/y):(o=0,a=0))}return{d:r,nx:o,nz:a,far:!1}}};function Mu(s,t){let e=0;for(let[n,i]of s.corners()){let r=t.query(n,i);if(r.d>0){if(r.far)continue;e+=s.wallImpulse(n,i,-r.nx,-r.nz,Math.min(r.d,1.5))}}return e}function Su(){let s=[];for(let t of _n)for(let e=0;e<t.nodes.length-1;e++){let n=he[t.nodes[e]],i=he[t.nodes[e+1]];s.push({ax:n.x,az:n.z,bx:i.x,bz:i.z,hw:t.width/2+1,road:t.name})}return new Io(s)}function bu(){let s={};for(let t of _n)for(let e=0;e<t.nodes.length-1;e++){let n=t.nodes[e],i=t.nodes[e+1];(s[n]||(s[n]=[])).push({to:i,w:t.width}),(s[i]||(s[i]=[])).push({to:n,w:t.width})}return s}var Po=class{constructor(t){let e=t.course,n=[...e.nodes];t.reverse&&(n=[n[0],...n.slice(1).reverse()]),this.ids=n,this.name=t.name,this.laps=e.laps;let i=n.length,r=n.map(u=>he[u]),o=n.map((u,f)=>yu(u,n[(f+1)%i])),a=[],c=2,l=[];for(let u=0;u<i;u++){let f=r[(u-1+i)%i],g=r[u],x=r[(u+1)%i],m=g.x-f.x,p=g.z-f.z,y=Math.hypot(m,p),v=x.x-g.x,_=x.z-g.z,R=Math.hypot(v,_),T=[m/y,p/y],A=[v/R,_/R],I=Math.max(-1,Math.min(1,T[0]*A[0]+T[1]*A[1])),b=Math.acos(I);if(u===0||b<.02){l.push({t:0,u1:T,u2:A,th:0});continue}let M=e.radius*Math.tan(b/2);M=Math.min(M,.45*y,.45*R),l.push({t:M,u1:T,u2:A,th:b})}for(let u=0;u<i;u++){let f=r[u],g=r[(u+1)%i],x=l[u],m=l[(u+1)%i],p=o[(u-1+i)%i],y=o[u];if(x.t>0){let b={x:f.x-x.u1[0]*x.t,z:f.z-x.u1[1]*x.t},M={x:f.x+x.u2[0]*x.t,z:f.z+x.u2[1]*x.t},P=x.t*2,F=Math.max(2,Math.ceil(P/c));for(let O=0;O<F;O++){let B=O/F,Y=(1-B)*(1-B)*b.x+2*(1-B)*B*f.x+B*B*M.x,H=(1-B)*(1-B)*b.z+2*(1-B)*B*f.z+B*B*M.z,tt=p+(y-p)*B,X=e.wide?.[n[u]];a.push({x:Y,z:H,w:X?Math.max(tt,tt+(X-tt)*Math.sin(Math.PI*Math.min(1,B*1.4))):tt})}}let v=f.x+x.u2[0]*x.t,_=f.z+x.u2[1]*x.t,R=g.x-m.u1[0]*m.t,T=g.z-m.u1[1]*m.t,A=Math.hypot(R-v,T-_),I=Math.max(1,Math.ceil(A/c));for(let b=0;b<I;b++){let M=b/I;a.push({x:v+(R-v)*M,z:_+(T-_)*M,w:y})}}this.n=a.length,this.x=new Float32Array(this.n),this.z=new Float32Array(this.n),this.hw=new Float32Array(this.n),this.s=new Float32Array(this.n),this.tx=new Float32Array(this.n),this.tz=new Float32Array(this.n);let h=0;for(let u=0;u<this.n;u++)this.x[u]=a[u].x,this.z[u]=a[u].z,this.hw[u]=a[u].w/2,u>0&&(h+=Math.hypot(a[u].x-a[u-1].x,a[u].z-a[u-1].z)),this.s[u]=h;this.length=h+Math.hypot(a[0].x-a[this.n-1].x,a[0].z-a[this.n-1].z);for(let u=0;u<this.n;u++){let f=(u-1+this.n)%this.n,g=(u+1)%this.n,x=this.x[g]-this.x[f],m=this.z[g]-this.z[f],p=Math.hypot(x,m)||1;this.tx[u]=x/p,this.tz[u]=m/p}let d=[];for(let u=0;u<this.n;u++){let f=(u+1)%this.n;d.push({ax:this.x[u],az:this.z[u],bx:this.x[f],bz:this.z[f],hw:Math.min(this.hw[u],this.hw[f])})}this.corridor=new Io(d,20),this.sectors=[0,this.length/3,this.length*2/3],this.buildRacingLine()}normal(t){return[-this.tz[t],this.tx[t]]}project(t,e,n=-1){let i=-1,r=1e18,o=(x,m)=>{for(let p=x;p<=m;p++){let y=(p%this.n+this.n)%this.n,v=t-this.x[y],_=e-this.z[y],R=v*v+_*_;R<r&&(r=R,i=y)}};n>=0?(o(n-30,n+60),Math.sqrt(r)>this.hw[i]+12&&(r=1e18,o(0,this.n-1))):o(0,this.n-1);let a=i,c=t-this.x[a],l=e-this.z[a],h=c*this.tx[a]+l*this.tz[a],[d,u]=this.normal(a),f=c*d+l*u,g=this.s[a]+h;return g<0&&(g+=this.length),g>=this.length&&(g-=this.length),{i:a,s:g,lat:f,dist:Math.sqrt(r)}}posAt(t,e=0){t=(t%this.length+this.length)%this.length;let n=0,i=this.n-1;for(;n<i;){let f=n+i+1>>1;this.s[f]<=t?n=f:i=f-1}let r=n,o=(r+1)%this.n,a=(o===0?this.length:this.s[o])-this.s[r],c=a>0?(t-this.s[r])/a:0,l=this.x[r]+(this.x[o]-this.x[r])*c,h=this.z[r]+(this.z[o]-this.z[r])*c,[d,u]=this.normal(r);return{x:l+d*e,z:h+u*e,h:Math.atan2(this.tx[r],this.tz[r]),i:r}}buildRacingLine(){let t=this.n,e=new Float32Array(t),n=new Float32Array(t),i=new Float32Array(t),r=[];for(let c=0;c<t;c++)r.push(this.normal(c));let o=1.8;for(let c of[12,6,3])for(let l=0;l<120;l++){for(let h=0;h<t;h++)n[h]=this.x[h]+r[h][0]*e[h],i[h]=this.z[h]+r[h][1]*e[h];for(let h=0;h<t;h++){let d=(h-c+t)%t,u=(h+c)%t,f=(n[d]+n[u])/2,g=(i[d]+i[u])/2,x=(f-this.x[h])*r[h][0]+(g-this.z[h])*r[h][1],m=Math.max(0,this.hw[h]-o);e[h]+=(x-e[h])*.5,e[h]=Math.max(-m,Math.min(m,e[h]))}}this.lineOff=e,this.lx=new Float32Array(t),this.lz=new Float32Array(t);for(let c=0;c<t;c++)this.lx[c]=this.x[c]+r[c][0]*e[c],this.lz[c]=this.z[c]+r[c][1]*e[c];this.curv=new Float32Array(t);let a=4;for(let c=0;c<t;c++){let l=(c-a+t)%t,h=(c+a)%t,d=this.lx[c]-this.lx[l],u=this.lz[c]-this.lz[l],f=this.lx[h]-this.lx[c],g=this.lz[h]-this.lz[c],x=Math.hypot(d,u),m=Math.hypot(f,g),p=d*g-u*f,y=Math.asin(Math.max(-1,Math.min(1,p/(x*m||1))));this.curv[c]=y/((x+m)/2||1)}}speedProfile(t,e){let n=this.n,i=new Float32Array(n),r=t.mu*(.78+.2*e),o=.5*1.2*t.area*(t.clF+t.clR)/t.mass;for(let c=0;c<n;c++){let h=Math.abs(this.curv[c])-r*o;i[c]=h<=1e-5?90:Math.min(90,Math.sqrt(r*9.81/h))}let a=r*9.81*(.62+.25*e)*Math.min(1.25,t.brakeTorque/(t.mass*3.4));for(let c=0;c<2;c++)for(let l=n-1;l>=0;l--){let h=l,d=(l+1)%n,u=Math.hypot(this.lx[d]-this.lx[h],this.lz[d]-this.lz[h]);i[h]=Math.min(i[h],Math.sqrt(i[d]*i[d]+2*a*u))}return i}};var Lo=class extends ns{constructor(){super();let t=new Yt;t.deleteAttribute("uv");let e=new De({side:Le}),n=new De,i=new wo(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new pt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new pt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new pt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new pt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new pt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new pt(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new pt(t,os(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let f=new pt(t,os(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new pt(t,os(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new pt(t,os(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new pt(t,os(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new pt(t,os(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function os(s){let t=new ge;return t.color.setScalar(s),t}function wl(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function tr(s,t,e,n=!0){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new ho(i);return n&&(r.wrapS=r.wrapT=Os),r.colorSpace=Ie,r.anisotropy=4,r}function wu(){return tr(256,256,(s,t,e)=>{s.fillStyle="#4a4d55",s.fillRect(0,0,t,e);let n=wl(7);for(let i=0;i<5e3;i++){let r=50+n()*50;s.fillStyle=`rgba(${r},${r},${r+6},${.25+n()*.4})`,s.fillRect(n()*t,n()*e,1+n()*2,1+n()*2)}})}function js(s,t,e,n,i=.1){let r=[],o=[],a=[],c=0;for(let h=0;h<s.length;h++){let d=s[h],u=s[Math.max(0,h-1)],f=s[Math.min(s.length-1,h+1)],g=f.x-u.x,x=f.z-u.z,m=Math.hypot(g,x)||1;g/=m,x/=m;let p=-x,y=g,v=typeof t=="function"?t(h):t;if(h>0&&(c+=Math.hypot(d.x-s[h-1].x,d.z-s[h-1].z)),r.push(d.x-p*v,e,d.z-y*v,d.x+p*v,e,d.z+y*v),o.push(0,c*i,1,c*i),h>0){let _=(h-1)*2;a.push(_,_+1,_+2,_+1,_+3,_+2)}}let l=new Me;return l.setAttribute("position",new te(r,3)),l.setAttribute("uv",new te(o,2)),l.setIndex(a),l.computeVertexNormals(),new pt(l,n)}function vx(s,t,e,n,i=!0){let r=[],o=[],a=[],c=s.length,l=0,h=i?c+1:c;for(let u=0;u<h;u++){let f=u%c,g=s[f],x=s[(f-1+c)%c],m=s[(f+1)%c],p=m.x-x.x,y=m.z-x.z,v=Math.hypot(p,y)||1;p/=v,y/=v;let _=-y,R=p,T=t(f);if(u>0){let b=s[(u-1)%c];l+=Math.hypot(g.x-b.x,g.z-b.z)}let A=g.x+_*T,I=g.z+R*T;if(r.push(A,0,I,A,e,I),o.push(l/4,0,l/4,1),u>0){let b=(u-1)*2;a.push(b,b+2,b+1,b+1,b+2,b+3)}}let d=new Me;return d.setAttribute("position",new te(r,3)),d.setAttribute("uv",new te(o,2)),d.setIndex(a),d.computeVertexNormals(),new pt(d,n)}function bl(){let s=new Ve({color:16777215});return s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        if (vNw.y > 0.5) { diffuseColor.rgb *= 0.55; }`)},s}function Eu(s,t="#fff",e="rgba(0,0,0,0)",n=64,i="#0ff"){return tr(1024,160,(o,a,c)=>{o.fillStyle=e,o.fillRect(0,0,a,c),o.font=`bold ${n}px "Hiragino Sans","Noto Sans JP",sans-serif`,o.textAlign="center",o.textBaseline="middle",o.shadowColor=i,o.shadowBlur=24,o.fillStyle=t,o.fillText(s,a/2,c/2)},!1)}var Do=class{constructor(t){this.scene=new ns,this.scene.background=new Gt(461332),this.scene.fog=new ro(725024,80,820);let e=new es(t);this.scene.environment=e.fromScene(new Lo,.04).texture,this.scene.environmentIntensity=.35,this.corridor=Su(),this.renderer=t,this.courseGroup=null,this.build()}build(){let t=this.scene;t.add(new So(7375040,1710626,.9));let e=new Eo(10466559,.5);e.position.set(-200,300,-100),t.add(e);let n=new pt(new Ke(4e3,4e3),new Ve({color:1052949}));n.rotation.x=-Math.PI/2,t.add(n);let i=wu(),r=new Ve({map:i,color:11580608}),o=new Ve({color:2369068}),a=new ge({color:13619140}),c={};for(let l of _n)for(let h of l.nodes)c[h]=(c[h]||0)+1;for(let l of _n){let h=l.nodes.map(d=>he[d]);for(let d=0;d<h.length-1;d++){let u=[h[d],h[d+1]];t.add(js(u,l.width/2+3.2,.01,o));let f=js(u,l.width/2,.02,r,.08);t.add(f);let g=h[d],x=h[d+1],m=Math.hypot(x.x-g.x,x.z-g.z),p=c[l.nodes[d]]>1?l.width*.7:2,y=c[l.nodes[d+1]]>1?l.width*.7:2,v=l.width>=11?5:3,_=l.width>=11?5:4;for(let R=p;R<m-y-v;R+=v+_){let T={x:g.x+(x.x-g.x)*R/m,z:g.z+(x.z-g.z)*R/m},A={x:g.x+(x.x-g.x)*(R+v)/m,z:g.z+(x.z-g.z)*(R+v)/m};t.add(js([T,A],.08,.035,a))}}for(let d of h){let u=new pt(new Gs(l.width/2,20),r);u.rotation.x=-Math.PI/2,u.position.set(d.x,.021,d.z),t.add(u);let f=new pt(new Gs(l.width/2+3.2,20),o);f.rotation.x=-Math.PI/2,f.position.set(d.x,.011,d.z),t.add(f)}}this.buildBuildings(),this.buildStreetLights(),this.buildPOIs(),this.buildLandmarks(),this.buildStars()}buildBuildings(){let t=wl(42),e=1e9,n=-1e9,i=1e9,r=-1e9;for(let v of Object.values(he))e=Math.min(e,v.x),n=Math.max(n,v.x),i=Math.min(i,v.z),r=Math.max(r,v.z);let o=220,a=[],c=Js(35.7295,139.7109);for(let v=e-o;v<n+o;v+=15)for(let _=i-o;_<r+o;_+=15){let R=v+(t()-.5)*5,T=_+(t()-.5)*5,A=this.corridor.query(R,T),I=A.far?40:A.d;if(I<6.5||yl.some(B=>{let Y=this.poiPos(B);return Math.hypot(Y.x-R,Y.z-T)<34}))continue;let b=Math.min(8,I-3.2),M=b*(1.2+t()*.8),P=b*(1.2+t()*.8),F=Math.max(0,1-Math.hypot(R-(c.x+120),T-c.z)/500),O=6+t()*18+(t()<.12?25:0)+F*(20+t()*45);a.push({px:R,pz:T,w:M,d:P,h:O,rot:(t()-.5)*.2})}let l=new Yt(1,1,1);l.translate(0,.5,0);let h=new gi(l,bl(),a.length),d=new ee,u=new mn,f=new Ze,g=new L,x=new L,m=new Gt;a.forEach((v,_)=>{f.set(0,v.rot,0),u.setFromEuler(f),d.compose(x.set(v.px,0,v.pz),u,g.set(v.w,v.h,v.d)),h.setMatrixAt(_,d);let R=.18+t()*.22;m.setRGB(R*(.9+t()*.2),R,R*(1+t()*.25)),h.setColorAt(_,m)}),this.scene.add(h);let p=[16722541,383464,16369678,8073207,130953],y=new Ke(1,1);for(let v=0;v<90;v++){let _=a[Math.floor(t()*a.length)];if(_.h<10)continue;let R=new ge({color:p[Math.floor(t()*p.length)],side:Oe,fog:!0}),T=new pt(y,R),A=t()<.5;T.scale.set(A?1.2:4+t()*3,A?5+t()*4:1.2,1);let I=Math.floor(t()*4),b=_.rot+I*Math.PI/2,M=(I%2===0?_.d:_.w)/2+.15;T.position.set(_.px+Math.sin(b)*M,4+t()*Math.min(10,_.h-6),_.pz+Math.cos(b)*M),T.rotation.y=b,this.scene.add(T)}}buildStreetLights(){let t=[],e=[];for(let h of _n)for(let d=0;d<h.nodes.length-1;d++){let u=he[h.nodes[d]],f=he[h.nodes[d+1]],g=Math.hypot(f.x-u.x,f.z-u.z),x=(f.x-u.x)/g,m=(f.z-u.z)/g,p=-m,y=x,v=1;for(let _=10;_<g-6;_+=26){let R=(h.width/2+1.4)*v,T=u.x+x*_+p*R,A=u.z+m*_+y*R;t.push({x:T,z:A,side:v,rx:p,rz:y}),e.push({x:T-p*v*3.2,z:A-y*v*3.2}),v=-v}}let n=new jn(.08,.1,7,6);n.translate(0,3.5,0);let i=new gi(n,new Ve({color:5593958}),t.length),r=new Yt(.5,.15,.9),o=new gi(r,new ge({color:16769712}),t.length),a=new ee;t.forEach((h,d)=>{a.makeTranslation(h.x,0,h.z),i.setMatrixAt(d,a),a.makeTranslation(h.x-h.rx*h.side*.9,7,h.z-h.rz*h.side*.9),o.setMatrixAt(d,a)}),this.scene.add(i,o);let c=tr(128,128,(h,d,u)=>{let f=h.createRadialGradient(d/2,u/2,0,d/2,u/2,d/2);f.addColorStop(0,"rgba(255,220,160,0.55)"),f.addColorStop(.5,"rgba(255,200,140,0.18)"),f.addColorStop(1,"rgba(255,200,140,0)"),h.fillStyle=f,h.fillRect(0,0,d,u)},!1),l=new gi(new Ke(14,14).rotateX(-Math.PI/2),new ge({map:c,transparent:!0,depthWrite:!1,blending:Fs,fog:!0}),e.length);e.forEach((h,d)=>{a.makeTranslation(h.x,.05,h.z),l.setMatrixAt(d,a)}),this.scene.add(l)}poiPos(t){let e=he[t.node];return{x:e.x+t.offset[0],z:e.z+t.offset[1]}}buildPOIs(){this.poiMarkers=[];for(let t of yl){let e=this.poiPos(t),n=new Ee;n.position.set(e.x,0,e.z);let i=t.type==="shop"?16726891:3073704,r=new pt(new _o(5,6,40),new ge({color:i,transparent:!0,opacity:.85,side:Oe}));r.rotation.x=-Math.PI/2,r.position.y=.06,n.add(r);let o=new pt(new jn(5.5,5.5,30,24,1,!0),new ge({color:i,transparent:!0,opacity:.08,side:Oe,depthWrite:!1}));o.position.y=15,n.add(o);let a=Eu(t.short,"#ffffff","rgba(10,10,20,0.85)",92,t.type==="shop"?"#ff3b6b":"#2ee6a8"),c=new ao(new ks({map:a,depthWrite:!1}));if(c.scale.set(16,2.5,1),c.position.y=11,n.add(c),t.type==="gs"){let l=new pt(new Yt(16,.8,12),new Ve({color:14540253,emissive:3364164}));l.position.set(16,6,0),n.add(l);for(let[d,u]of[[10,-4],[10,4],[22,-4],[22,4]]){let f=new pt(new Yt(.5,6,.5),new Ve({color:10066329}));f.position.set(d,3,u),n.add(f)}let h=new pt(new Ke(16,12),new ge({color:16774877,transparent:!0,opacity:.18,blending:Fs,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(16,.04,0),n.add(h)}else{let l=new pt(new Yt(22,14,18),new Ve({color:2760752,emissive:2230296}));l.position.set(14,7,0),n.add(l);let h=new pt(new Yt(22.2,1.6,18.2),new ge({color:16726891}));h.position.set(14,12,0),n.add(h)}this.scene.add(n),this.poiMarkers.push({poi:t,group:n,ring:r,x:e.x,z:e.z})}}buildLandmarks(){let t=Js(35.7295,139.7186),e=new pt(new Yt(46,170,30),bl());e.position.set(t.x,85,t.z),e.material.color=new Gt(3159100),this.scene.add(e);let n=new ge({color:16719904});for(let[o,a]of[[-20,-12],[20,-12],[-20,12],[20,12]]){let c=new pt(new vo(.9,8,6),n);c.position.set(t.x+o,171,t.z+a),this.scene.add(c),this.blinkers=this.blinkers||[],this.blinkers.push(c)}let i=Js(35.73,139.7122),r=new pt(new Yt(70,34,150),bl());r.material.color=new Gt(3817289),r.position.set(i.x+40,0,i.z),r.geometry.translate(0,17,0),this.scene.add(r)}buildStars(){let t=wl(9),e=[];for(let i=0;i<600;i++){let r=t()*Math.PI*2,o=t()*.45+.1,a=1500;e.push(Math.cos(r)*Math.cos(o)*a,Math.sin(o)*a,Math.sin(r)*Math.cos(o)*a)}let n=new Me;n.setAttribute("position",new te(e,3)),this.stars=new lo(n,new Hs({color:8952251,size:2,sizeAttenuation:!1,fog:!1})),this.scene.add(this.stars)}setCourse(t){if(this.courseGroup&&(this.scene.remove(this.courseGroup),this.courseGroup=null),!t)return;let e=new Ee,n=[];for(let m=0;m<t.n;m++)n.push({x:t.x[m],z:t.z[m]});let i=wu(),r=js([...n,n[0]],m=>t.hw[m%t.n]+.2,.028,new Ve({map:i,color:11975108}),.08);e.add(r);let o=new ge({color:15263976});for(let m of[-1,1]){let p=[];for(let y=0;y<=t.n;y++){let v=y%t.n,[_,R]=t.normal(v),T=m*(t.hw[v]-.4);p.push({x:t.x[v]+_*T,z:t.z[v]+R*T})}e.add(js(p,.1,.04,o))}let a=tr(256,32,(m,p,y)=>{m.fillStyle="#d8d8d8",m.fillRect(0,0,p,y),m.fillStyle="#c0202a";for(let v=0;v<p;v+=64)m.fillRect(v,0,32,y);m.fillStyle="rgba(0,0,0,0.25)",m.fillRect(0,y*.45,p,3)}),c=new Ve({map:a,side:Oe,emissive:2236962});for(let m of[-1,1])e.add(vx(n,p=>m*(t.hw[p]+.15),.9,c));let l=t.posAt(0,0),h=tr(128,32,(m,p,y)=>{for(let v=0;v<16;v++)for(let _=0;_<4;_++)m.fillStyle=(v+_)%2?"#111":"#eee",m.fillRect(v*8,_*8,8,8)},!1),d=new Ee;d.position.set(l.x,0,l.z),d.rotation.y=l.h;let u=new pt(new Ke(t.hw[0]*2,1.6),new ge({map:h}));u.rotation.x=-Math.PI/2,u.position.y=.05,d.add(u);let f=new Ve({color:3356738,emissive:1118481});for(let m of[-1,1]){let p=new pt(new Yt(.5,7,.5),f);p.position.set(m*(t.hw[0]+.8),3.5,0),d.add(p)}let g=new pt(new Yt(t.hw[0]*2+2,1.4,.4),f);g.position.set(0,7,0),d.add(g);let x=new pt(new Ke(t.hw[0]*2,1.2),new ge({map:Eu("START / FINISH","#fff","#101420",80,"#ff2a6d"),side:Oe}));x.position.set(0,7,-.25),x.rotation.y=Math.PI,d.add(x),e.add(d),this.courseGroup=e,this.scene.add(e)}update(t){if(this.blinkers)for(let e of this.blinkers)e.visible=Math.sin(t*3)>0;if(this.poiMarkers)for(let e of this.poiMarkers)e.ring.material.opacity=.6+.3*Math.sin(t*4)}};var vn={chase:"\u5F8C\u65B9\u8996\u70B9",cockpit:"\u904B\u8EE2\u5E2D\u8996\u70B9",hood:"\u30DC\u30F3\u30CD\u30C3\u30C8\u8996\u70B9",gallery:"\u30AE\u30E3\u30E9\u30EA\u30FC\u8996\u70B9"},Tu=new L,Uo=class{constructor(t){this.camera=new Ae(62,t,.08,2600),this.mirrorCam=new Ae(50,3.2,.3,600),this.mode="chase",this.pos=new L,this.look=new L,this.init=!1,this.galleryIdx=-1,this.gallerySpots=[]}setGallerySpots(t){if(this.gallerySpots=[],!t)return;let e=1;for(let n=20;n<t.length;n+=110){let i=t.posAt(n,0),r=t.hw[i.i],o=t.posAt(n,e*(r+4));this.gallerySpots.push({x:o.x,z:o.z,y:3.5+Math.random()*3,s:n}),e=-e}}reset(){this.init=!1}anchor(t,e){let n=t.userData;if(!n.anchors){n.anchors={};let i=(r,o,a,c)=>{let l=new ye;return l.position.set(r,o,a),l.rotation.y=c,n.body.add(l),l};n.anchors.cockpit=i(-.37,n.belt+.34,n.wsBase-1.05,Math.PI),n.anchors.hood=i(0,n.belt+.32,n.wsBase+.25,Math.PI),n.anchors.mirror=i(0,n.H+.25,n.wsBase-.9,0)}return n.anchors[e]}update(t,e,n){let i=this.camera,r=e.userData;r.cockpit.visible=this.mode==="cockpit";for(let m of r.exterior)m.visible=this.mode!=="cockpit";let o=Math.sin(n.h),a=Math.cos(n.h);if(this.mode==="cockpit"||this.mode==="hood"){e.updateMatrixWorld(!0);let m=this.anchor(e,this.mode);m.getWorldPosition(i.position),m.getWorldQuaternion(i.quaternion),i.fov=this.mode==="cockpit"?70:64,i.updateProjectionMatrix(),this.init=!1;return}if(this.mode==="gallery"&&this.gallerySpots.length){let m=this.galleryIdx,p=1e9;for(let T=0;T<this.gallerySpots.length;T++){let A=this.gallerySpots[T],I=Math.hypot(A.x-n.x,A.z-n.z);I<p&&(p=I,m=T)}this.galleryIdx<0&&(this.galleryIdx=m);let y=this.gallerySpots[this.galleryIdx],v=Math.hypot(y.x-n.x,y.z-n.z);m!==this.galleryIdx&&p<v*.75&&(this.galleryIdx=m);let _=this.gallerySpots[this.galleryIdx];i.position.set(_.x,_.y,_.z),Tu.set(n.x,.8,n.z),i.lookAt(Tu);let R=Math.hypot(_.x-n.x,_.z-n.z);i.fov=Math.max(8,Math.min(60,2*Math.atan(7/Math.max(R,1))*180/Math.PI)),i.updateProjectionMatrix();return}let c=n.speed,l=5.8+Math.min(1.5,c*.02),h=n.x-o*l,d=n.z-a*l,u=2.1,f=n.x+o*3,g=n.z+a*3,x=1;if(!this.init)this.pos.set(h,u,d),this.look.set(f,x,g),this.init=!0;else{let m=1-Math.exp(-t*9);this.pos.x+=(h-this.pos.x)*m,this.pos.y+=(u-this.pos.y)*m,this.pos.z+=(d-this.pos.z)*m;let p=1-Math.exp(-t*14);this.look.x+=(f-this.look.x)*p,this.look.y+=(x-this.look.y)*p,this.look.z+=(g-this.look.z)*p}i.position.copy(this.pos),i.lookAt(this.look),i.fov=60+Math.min(10,c*.12),i.updateProjectionMatrix()}updateMirror(t){t.updateMatrixWorld(!0);let e=this.anchor(t,"mirror");e.getWorldPosition(this.mirrorCam.position),e.getWorldQuaternion(this.mirrorCam.quaternion)}cycle(t){let e=t.indexOf(this.mode);return this.mode=t[(e+1)%t.length],this.galleryIdx=-1,this.init=!1,this.mode}};var Fo=[{id:"throttle",name:"\u30A2\u30AF\u30BB\u30EB",def:"KeyF"},{id:"brake",name:"\u30D6\u30EC\u30FC\u30AD",def:"KeyS"},{id:"shiftUp",name:"\u30B7\u30D5\u30C8\u30A2\u30C3\u30D7",def:"KeyE"},{id:"shiftDown",name:"\u30B7\u30D5\u30C8\u30C0\u30A6\u30F3",def:"KeyD"},{id:"left",name:"\u5DE6\u30CF\u30F3\u30C9\u30EB",def:"KeyJ"},{id:"right",name:"\u53F3\u30CF\u30F3\u30C9\u30EB",def:"KeyL"},{id:"mirror",name:"\u30D0\u30C3\u30AF\u30DF\u30E9\u30FC",def:"KeyK"},{id:"view",name:"\u8996\u70B9\u5207\u308A\u66FF\u3048",def:"KeyI"},{id:"flash",name:"\u30D1\u30C3\u30B7\u30F3\u30B0",def:"KeyH"},{id:"interact",name:"\u6C7A\u5B9A\uFF0F\u5165\u5E97",def:"Enter"}],Au="ibr.settings.v1",er={keys:Object.fromEntries(Fo.map(s=>[s.id,s.def])),bgm:.6,se:.7,transmission:"MT",abs:!0,tcs:!1,mirror:!0};function Ru(){try{let s=localStorage.getItem(Au);if(s){let t=JSON.parse(s);return{...er,...t,keys:{...er.keys,...t.keys||{}}}}}catch{}return structuredClone(er)}function nr(s){try{localStorage.setItem(Au,JSON.stringify(s))}catch{}}function Oo(s){return s?s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):{ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Space:"Space",ShiftLeft:"L-Shift",ShiftRight:"R-Shift",ControlLeft:"L-Ctrl",ControlRight:"R-Ctrl",Enter:"Enter",Semicolon:";",Comma:",",Period:".",Slash:"/"}[s]||s:"-"}var No=class{constructor(t){this.settings=t,this.down=new Set,this.pressed=new Set,this.listeners=[],this.capture=null,window.addEventListener("keydown",e=>{if(this.capture){e.preventDefault();let n=this.capture;this.capture=null,n(e.code);return}this.down.has(e.code)||this.pressed.add(e.code),this.down.add(e.code);for(let n of this.listeners)n(e);["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(e.code)&&e.preventDefault()}),window.addEventListener("keyup",e=>{this.down.delete(e.code)}),window.addEventListener("blur",()=>this.down.clear())}onKey(t){return this.listeners.push(t),()=>{this.listeners=this.listeners.filter(e=>e!==t)}}key(t){return this.settings.keys[t]}held(t){return this.down.has(this.key(t))}hit(t){return this.pressed.has(this.key(t))}hitCode(t){return this.pressed.has(t)}endFrame(){this.pressed.clear()}};var yx={town:"assets/audio/town_midnight_bliss.mp3",battle:"assets/audio/battle.mp3"},Bo=class{constructor(t){this.settings=t,this.ctx=null,this.tracks={},this.current=null,this.engines=[]}unlock(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.applyVolume();let e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let r=0;r<e;r++)i[r]=Math.random()*2-1;this.noise=n}if(this.ctx.state==="suspended"&&this.ctx.resume(),this.pending){let t=this.pending;this.pending=null,this.playBgm(t)}}applyVolume(){this.master&&(this.master.gain.value=this.settings.se);for(let t of Object.values(this.tracks))t.volume=this.current&&this.tracks[this.current]===t?this.settings.bgm:t.volume}playBgm(t){if(this.current===t)return;let e=this.current?this.tracks[this.current]:null;if(this.current=t,e&&this.fade(e,0,900,!0),!t)return;let n=this.tracks[t];n||(n=new Audio(yx[t]),n.loop=!0,n.volume=0,this.tracks[t]=n),n.currentTime=0;let i=n.play();i&&i.catch&&i.catch(()=>{this.pending=t,this.current=null}),this.fade(n,this.settings.bgm,900,!1)}fade(t,e,n,i){let r=t.volume,o=performance.now(),a=()=>{let c=Math.min(1,(performance.now()-o)/n);t.volume=Math.max(0,Math.min(1,r+(e-r)*c)),c<1?requestAnimationFrame(a):i&&t.pause()};a()}setBgmVolume(t){this.settings.bgm=t,this.current&&this.tracks[this.current]&&(this.tracks[this.current].volume=t)}createEngine(t){if(!this.ctx)return null;let e=this.ctx,n=e.createGain();n.gain.value=0;let i=e.createStereoPanner?e.createStereoPanner():null,r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=800,r.Q.value=2;let o=e.createOscillator();o.type="sawtooth";let a=e.createOscillator();a.type="square";let c=e.createOscillator();c.type="triangle";let l=e.createGain();l.gain.value=.5;let h=e.createGain();h.gain.value=.22;let d=e.createGain();d.gain.value=.35,o.connect(l).connect(r),a.connect(h).connect(r),c.connect(d).connect(r),r.connect(n),i?(n.connect(i),i.connect(this.master)):n.connect(this.master);let u=e.createBufferSource();u.buffer=this.noise,u.loop=!0;let f=e.createBiquadFilter();f.type="bandpass",f.frequency.value=1100,f.Q.value=6;let g=e.createGain();g.gain.value=0,u.connect(f).connect(g).connect(this.master);let x=e.createOscillator();x.type="sine",x.frequency.value=3e3;let m=e.createGain();m.gain.value=0,x.connect(m).connect(this.master);let p=e.createBufferSource();p.buffer=this.noise,p.loop=!0;let y=e.createBiquadFilter();y.type="lowpass",y.frequency.value=500;let v=e.createGain();v.gain.value=0,p.connect(y).connect(v).connect(this.master);for(let R of[o,a,c,u,x,p])R.start();let _={spec:t,out:n,lp:r,o1:o,o2:a,o3:c,sqg:g,bp:f,tbg:m,tb:x,wg:v,pan:i,nodes:[o,a,c,u,x,p]};return this.engines.push(_),_}updateEngine(t,e,n=1,i=0){if(!t||!this.ctx)return;let r=this.ctx.currentTime,o=t.spec,a=e.rpm/60*(o.cylinders/2),c=e.input.throttle;t.o1.frequency.setTargetAtTime(a,r,.02),t.o2.frequency.setTargetAtTime(a*.5,r,.02),t.o3.frequency.setTargetAtTime(a*2,r,.02),t.lp.frequency.setTargetAtTime(500+c*2200+o.loud*1500+e.rpm*.15,r,.05),t.out.gain.setTargetAtTime(n*(.1+c*.16+o.loud*.08),r,.05);let l=Math.max(0,Math.min(1,(e.slip-1.05)*1.5))*Math.min(1,e.speed/5);t.sqg.gain.setTargetAtTime(n*l*.18,r,.05),t.bp.frequency.setTargetAtTime(900+Math.min(e.speed,40)*8,r,.1),t.tb.frequency.setTargetAtTime(2500+e.boost*4e3,r,.05),t.tbg.gain.setTargetAtTime(n*Math.min(.025,e.boost*.02),r,.05),t.wg.gain.setTargetAtTime(n*Math.min(.12,e.speed*e.speed*6e-5),r,.1),t.pan&&t.pan.pan.setTargetAtTime(i,r,.05)}destroyEngine(t){if(t){for(let e of t.nodes)try{e.stop()}catch{}try{t.out.disconnect(),t.sqg.disconnect(),t.tbg.disconnect(),t.wg.disconnect()}catch{}this.engines=this.engines.filter(e=>e!==t)}}destroyAllEngines(){for(let t of[...this.engines])this.destroyEngine(t)}beep(t=880,e=.15,n=.3){if(!this.ctx)return;let i=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.value=t,i.type="square",r.gain.value=n,r.gain.setTargetAtTime(0,this.ctx.currentTime+e*.7,.03),i.connect(r).connect(this.master),i.start(),i.stop(this.ctx.currentTime+e+.1)}};function z(s,t={},...e){let n=document.createElement(s);for(let[i,r]of Object.entries(t||{}))i==="class"?n.className=r:i==="style"&&typeof r=="object"?Object.assign(n.style,r):i.startsWith("on")&&typeof r=="function"?n.addEventListener(i.slice(2),r):i==="html"?n.innerHTML=r:r!==!1&&r!=null&&n.setAttribute(i,r);for(let i of e.flat())i==null||i===!1||n.appendChild(typeof i=="string"||typeof i=="number"?document.createTextNode(String(i)):i);return n}var Be=class{constructor(t,e,n={}){this.game=t,this.items=e,this.index=Math.max(0,e.findIndex(i=>!i.disabled)),this.onBack=n.onBack,this.root=z("div",{class:"menu "+(n.className||"")}),this.render(),this.off=t.input.onKey(i=>this.key(i))}render(){this.root.innerHTML="",this.items.forEach((t,e)=>{let n=z("button",{class:"menu-item"+(e===this.index?" sel":"")+(t.disabled?" disabled":""),onclick:()=>{t.disabled||(this.index=e,this.activate())},onmouseenter:()=>{t.disabled||(this.index=e,this.highlight())}},z("span",{class:"label"},t.label),t.sub?z("span",{class:"sub"},t.sub):null);this.root.appendChild(n)})}highlight(){[...this.root.children].forEach((t,e)=>t.classList.toggle("sel",e===this.index))}move(t){let e=this.items.length;for(let n=1;n<=e;n++){let i=(this.index+t*n+e*10)%e;if(!this.items[i].disabled){this.index=i;break}}this.highlight(),this.game.audio.beep(660,.04,.08)}activate(){let t=this.items[this.index];!t||t.disabled||(this.game.audio.beep(990,.06,.1),t.action&&t.action())}key(t){this.root.isConnected&&(t.code==="ArrowUp"||t.code==="ArrowLeft"?this.move(-1):t.code==="ArrowDown"||t.code==="ArrowRight"?this.move(1):t.code==="Enter"||t.code==="Space"?this.activate():(t.code==="Escape"||t.code==="Backspace")&&this.onBack&&(this.game.audio.beep(440,.05,.08),this.onBack()))}destroy(){this.off(),this.root.remove()}};function Ue(s,...t){return z("div",{class:"panel"},s?z("div",{class:"panel-title"},s):null,...t)}var zo=class{constructor(t){this.container=t,this.settings=Ru(),this.renderer=new so({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Ie,this.renderer.toneMapping=al,this.renderer.toneMappingExposure=1.15,t.appendChild(this.renderer.domElement),this.ui=z("div",{class:"ui-root"}),t.appendChild(this.ui),this.overlay=z("div",{class:"fade-overlay"}),t.appendChild(this.overlay),this.input=new No(this.settings),this.audio=new Bo(this.settings),this.world=new Do(this.renderer),this.rig=new Uo(window.innerWidth/window.innerHeight),this.mode=null,this.mirrorOn=!1,this.story=null,this.clock=performance.now(),this.t=0,window.addEventListener("resize",()=>this.resize());let e=()=>this.audio.unlock();window.addEventListener("keydown",e),window.addEventListener("pointerdown",e),requestAnimationFrame(()=>this.loop())}resize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.rig.camera.aspect=window.innerWidth/window.innerHeight,this.rig.camera.updateProjectionMatrix()}setMode(t){this.mode&&this.mode.exit&&this.mode.exit(),this.ui.innerHTML="",this.input.pressed.clear(),this.mirrorOn=!1,this.mode=t,t.enter&&t.enter()}async transition(t,e=350){this.overlay.classList.add("on"),await new Promise(n=>setTimeout(n,e)),await t(),await new Promise(n=>setTimeout(n,60)),this.overlay.classList.remove("on")}loop(){let t=performance.now(),e=Math.min(.05,(t-this.clock)/1e3);this.clock=t,this.t+=e;try{this.mode&&this.mode.update&&this.mode.update(e),this.world.update(this.t),this.render()}catch(n){console.error(n)}this.input.endFrame(),requestAnimationFrame(()=>this.loop())}debugStep(t,e=1/60){for(let n=0;n<t;n+=e)this.mode&&this.mode.update&&this.mode.update(e),this.input.endFrame()}render(){let t=this.renderer,e=window.innerWidth,n=window.innerHeight;if(t.setScissorTest(!1),t.setViewport(0,0,e,n),t.render(this.world.scene,this.rig.camera),this.mirrorOn&&this.mirrorModel){let i=Math.round(e*.3),r=Math.round(i/3.2),o=Math.round((e-i)/2),a=n-r-14;this.rig.updateMirror(this.mirrorModel),this.rig.mirrorCam.aspect=i/r,this.rig.mirrorCam.updateProjectionMatrix();let c=this.mirrorModel.userData.cockpit.visible;this.mirrorModel.userData.cockpit.visible=!1,t.setScissorTest(!0),t.setScissor(o,a,i,r),t.setViewport(o,a,i,r),t.render(this.world.scene,this.rig.mirrorCam),t.setScissorTest(!1),this.mirrorModel.userData.cockpit.visible=c}}};function Cu(s,t){let e=s.settings,n=z("div",{class:"screen settings"}),i=0,r=[],o=(u,f)=>Fo.find(g=>g.id!==f&&e.keys[g.id]===u),a=()=>{n.innerHTML="",r.length=0;let u=z("div",{class:"key-list"});Fo.forEach(p=>{let y=z("button",{class:"key-btn"},Oo(e.keys[p.id])),v=z("div",{class:"key-row"},z("span",{class:"key-name"},p.name),y);y.onclick=()=>l(p,y),r.push({row:v,act:()=>l(p,y)}),u.appendChild(v)});let f=(p,y,v,_)=>{let R=z("button",{class:"key-btn"},y()),T=z("div",{class:"key-row"},z("span",{class:"key-name"},p),R),A=()=>{v(_),R.textContent=y(),nr(e)};R.onclick=A,r.push({row:T,act:A}),u.appendChild(T)},g=(p,y)=>{let v=z("input",{type:"range",min:0,max:1,step:.05,value:e[y]});v.oninput=()=>{e[y]=parseFloat(v.value),y==="bgm"?s.audio.setBgmVolume(e.bgm):s.audio.applyVolume(),nr(e)};let _=z("div",{class:"key-row"},z("span",{class:"key-name"},p),v);r.push({row:_,act:()=>{},left:()=>{v.value=Math.max(0,e[y]-.05),v.oninput()},right:()=>{v.value=Math.min(1,e[y]+.05),v.oninput()}}),u.appendChild(_)};u.appendChild(z("div",{class:"key-sep"},"\u30C9\u30E9\u30A4\u30D3\u30F3\u30B0")),f("\u30C8\u30E9\u30F3\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",()=>e.transmission==="MT"?"MT\uFF08\u30DE\u30CB\u30E5\u30A2\u30EB\uFF09":"AT\uFF08\u30AA\u30FC\u30C8\u30DE\uFF09",()=>{e.transmission=e.transmission==="MT"?"AT":"MT"}),f("ABS",()=>e.abs?"ON":"OFF",()=>{e.abs=!e.abs}),f("\u30C8\u30E9\u30AF\u30B7\u30E7\u30F3\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB",()=>e.tcs?"ON":"OFF",()=>{e.tcs=!e.tcs}),u.appendChild(z("div",{class:"key-sep"},"\u30B5\u30A6\u30F3\u30C9")),g("BGM\u97F3\u91CF","bgm"),g("\u52B9\u679C\u97F3\u30FB\u30A8\u30F3\u30B8\u30F3\u97F3\u91CF","se");let x=z("button",{class:"menu-item small"},"\u30AD\u30FC\u914D\u7F6E\u3092\u521D\u671F\u5316");x.onclick=()=>{e.keys={...er.keys},nr(e),a()},r.push({row:x,act:()=>x.onclick()});let m=z("button",{class:"menu-item small"},"\u623B\u308B");m.onclick=()=>d(),r.push({row:m,act:()=>d()}),n.appendChild(Ue("COMMON SETTING",z("div",{class:"hint"},"\u9805\u76EE\u3092\u9078\u3093\u3067 Enter\uFF08\u307E\u305F\u306F\u30AF\u30EA\u30C3\u30AF\uFF09\u2192 \u5272\u308A\u5F53\u3066\u305F\u3044\u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002Esc\u3067\u623B\u308B"),u,z("div",{class:"row-btns"},x,m))),c()},c=()=>r.forEach((u,f)=>u.row.classList.toggle("sel",f===i)),l=(u,f)=>{f.textContent="\u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u2026",f.classList.add("wait"),s.input.capture=g=>{if(g==="Escape"){a();return}let x=o(g,u.id);x&&(e.keys[x.id]=e.keys[u.id]),e.keys[u.id]=g,nr(e),a()}},h=s.input.onKey(u=>{!n.isConnected||s.input.capture||(u.code==="ArrowDown"?(i=(i+1)%r.length,c()):u.code==="ArrowUp"?(i=(i-1+r.length)%r.length,c()):u.code==="ArrowLeft"?r[i].left?.():u.code==="ArrowRight"?r[i].right?.():u.code==="Enter"?setTimeout(()=>r[i].act(),0):u.code==="Escape"&&d())}),d=()=>{h(),s.input.capture=null,n.remove(),t&&t()};return a(),s.ui.appendChild(n),d}var pe={"86-GR":{id:"86-GR",name:"86-GR",ref:"\u30C8\u30E8\u30BF GR86 RZ (ZN8\u578B 6MT)",drive:"FR",mass:1270,frontWeight:.535,cgHeight:.46,length:4.265,width:1.775,height:1.31,wheelbase:2.575,trackF:1.52,trackR:1.55,tireRadius:.315,cd:.33,area:1.95,steerLock:.56,gears:[3.626,2.188,1.541,1.213,1,.767],reverse:3.437,final:4.1,brakeTorque:4200,brakeBias:.64,rollFront:.55,inertiaK:1,published:"235PS/7000rpm, 250N\xB7m/3700rpm, 1270kg",body:{style:"coupe",hood:.36,cabin:.42,roof:.28,tail:.22,wing:"duck"},stock:{engine:"eng_f4_24",boreup:null,muffler:"muf_stock",intercooler:null,turbo:null,tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"WRX-IMP":{id:"WRX-IMP",name:"WRX-IMP",ref:"\u30B9\u30D0\u30EB \u30A4\u30F3\u30D7\u30EC\u30C3\u30B5 WRX STI (GDB\u578B F\u578B)",drive:"AWD",awdFront:.41,mass:1430,frontWeight:.6,cgHeight:.5,length:4.465,width:1.74,height:1.425,wheelbase:2.54,trackF:1.485,trackR:1.48,tireRadius:.317,cd:.33,area:2.05,steerLock:.55,gears:[3.636,2.375,1.761,1.346,.971,.756],reverse:3.545,final:3.9,brakeTorque:4900,brakeBias:.66,rollFront:.56,inertiaK:1.05,published:"280PS/6400rpm, 422N\xB7m/4400rpm, 1430kg",body:{style:"sedan",hood:.36,cabin:.46,roof:.3,tail:.2,wing:"high",scoop:!0},stock:{engine:"eng_f4_20t",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_mid",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"RS-RS":{id:"RS-RS",name:"RS-RS",ref:"\u30DE\u30C4\u30C0 \u30ED\u30FC\u30C9\u30B9\u30BF\u30FC RS (ND5RC\u578B 2018\u5E74\u301C)",drive:"FR",mass:1020,frontWeight:.5,cgHeight:.44,length:3.915,width:1.735,height:1.235,wheelbase:2.31,trackF:1.495,trackR:1.505,tireRadius:.308,cd:.35,area:1.85,steerLock:.58,gears:[5.087,2.991,2.035,1.594,1.286,1],reverse:4.533,final:2.866,brakeTorque:3500,brakeBias:.62,rollFront:.54,inertiaK:.9,published:"132PS/7000rpm, 152N\xB7m/4500rpm, 1020kg",body:{style:"roadster",hood:.42,cabin:.3,roof:0,tail:.26,wing:"none"},stock:{engine:"eng_s4_15",boreup:null,muffler:"muf_stock",intercooler:null,turbo:null,tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"SWIFT-S":{id:"SWIFT-S",name:"SWIFT-S",ref:"\u30B9\u30BA\u30AD \u30B9\u30A4\u30D5\u30C8\u30B9\u30DD\u30FC\u30C4 (ZC33S\u578B 6MT)",drive:"FF",mass:970,frontWeight:.62,cgHeight:.52,length:3.89,width:1.735,height:1.5,wheelbase:2.45,trackF:1.51,trackR:1.515,tireRadius:.304,cd:.33,area:2.1,steerLock:.58,gears:[3.615,2.047,1.518,1.156,.918,.794],reverse:3.481,final:3.944,brakeTorque:3300,brakeBias:.7,rollFront:.6,inertiaK:.9,published:"140PS/5500rpm, 230N\xB7m/2500-3500rpm, 970kg",body:{style:"hatch",hood:.3,cabin:.55,roof:.42,tail:.1,wing:"roof"},stock:{engine:"eng_s4_14t",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_small",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}},"80-Supra":{id:"80-Supra",name:"80-Supra",ref:"\u30C8\u30E8\u30BF \u30B9\u30FC\u30D7\u30E9 RZ (JZA80\u578B 6MT)",drive:"FR",mass:1510,frontWeight:.53,cgHeight:.5,length:4.52,width:1.81,height:1.275,wheelbase:2.55,trackF:1.52,trackR:1.525,tireRadius:.318,cd:.31,area:2,steerLock:.55,gears:[3.827,2.36,1.685,1.312,1,.793],reverse:3.28,final:3.266,brakeTorque:5200,brakeBias:.64,rollFront:.55,inertiaK:1.1,published:"280PS/5600rpm, 451N\xB7m/3600rpm, 1510kg",body:{style:"gt",hood:.42,cabin:.36,roof:.27,tail:.22,wing:"loop"},stock:{engine:"eng_s6_30",boreup:null,muffler:"muf_stock",intercooler:"ic_stock",turbo:"tb_seq",tire:"tire_street",suspension:"sus_stock",brake:"brk_stock",transmission:"tm_stock",aero:null}}},t_=Object.keys(pe),Ge={name:"\u9ED2\u7895\u30AB\u30B1\u30EB",car:"86-GR",color:14278115};var as=[{id:"engine",name:"\u30A8\u30F3\u30B8\u30F3",required:!0},{id:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7",required:!1},{id:"muffler",name:"\u30DE\u30D5\u30E9\u30FC",required:!0},{id:"intercooler",name:"\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",required:!1},{id:"turbo",name:"\u30BF\u30FC\u30DC",required:!1},{id:"tire",name:"\u30BF\u30A4\u30E4",required:!0},{id:"suspension",name:"\u30B5\u30B9\u30DA\u30F3\u30B7\u30E7\u30F3",required:!0},{id:"brake",name:"\u30D6\u30EC\u30FC\u30AD",required:!0},{id:"transmission",name:"\u30C8\u30E9\u30F3\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",required:!0},{id:"aero",name:"\u30A8\u30A2\u30ED",required:!1}],ir=Object.fromEntries(as.map(s=>[s.id,s.name])),Zt=s=>s,sr=[Zt({id:"eng_f4_24",cat:"engine",name:"F4\u578B2400cc\uFF08\u6C34\u5E73\u5BFE\u5411\uFF09",rank:2,price:null,weight:0,desc:"86-GR\u7D14\u6B63\u3002\u4F4E\u91CD\u5FC3\u306E\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52NA\u3002235PS/7000rpm 250N\xB7m/3700rpm",layout:"\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52",displacement:2387,cylinders:4,idle:800,redline:7500,limiter:7600,inertia:.16,torque:[[800,150],[1500,175],[2500,212],[3e3,232],[3700,250],[4500,238],[5500,240],[6500,244],[7e3,236],[7500,214],[7800,190]]}),Zt({id:"eng_f4_20t",cat:"engine",name:"F4T\u578B2000cc\uFF08\u6C34\u5E73\u5BFE\u5411\u30FB\u904E\u7D66\u524D\u63D0\uFF09",rank:3,price:null,weight:8,desc:"WRX-IMP\u7D14\u6B63\u3002\u30BF\u30FC\u30DC\u524D\u63D0\u306E\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52\u3002\u7D14\u6B63\u30BF\u30FC\u30D3\u30F3\u3067280PS/422N\xB7m",layout:"\u6C34\u5E73\u5BFE\u54114\u6C17\u7B52",displacement:1994,cylinders:4,idle:850,redline:8e3,limiter:8100,inertia:.17,torque:[[800,110],[1500,140],[2e3,160],[3e3,195],[4e3,222],[4400,228],[5e3,205],[5500,188],[6e3,178],[6400,175],[7e3,156],[8e3,126],[8300,110]]}),Zt({id:"eng_s4_15",cat:"engine",name:"S4\u578B1500cc\uFF08\u76F4\u5217\uFF09",rank:1,price:null,weight:-15,desc:"RS-RS\u7D14\u6B63\u3002\u8EFD\u91CF\u306A\u76F4\u52174\u6C17\u7B52NA\u3002132PS/7000rpm 152N\xB7m/4500rpm",layout:"\u76F4\u52174\u6C17\u7B52",displacement:1496,cylinders:4,idle:750,redline:7500,limiter:7600,inertia:.11,torque:[[750,100],[1500,118],[2e3,128],[3e3,140],[4500,152],[5500,148],[6500,140],[7e3,132],[7500,118],[7800,100]]}),Zt({id:"eng_s4_14t",cat:"engine",name:"S4T\u578B1400cc\uFF08\u76F4\u5217\u30FB\u904E\u7D66\u524D\u63D0\uFF09",rank:1,price:null,weight:-18,desc:"SWIFT-S\u7D14\u6B63\u3002\u5C0F\u6392\u6C17\u91CF\u76F4\u5674\u30BF\u30FC\u30DC\u524D\u63D0\u3002\u7D14\u6B63\u30BF\u30FC\u30D3\u30F3\u3067140PS/230N\xB7m",layout:"\u76F4\u52174\u6C17\u7B52",displacement:1371,cylinders:4,idle:750,redline:6200,limiter:6300,inertia:.1,torque:[[750,85],[1500,112],[2e3,128],[2500,137],[3500,137],[4500,129],[5500,118],[6200,106],[6500,95]]}),Zt({id:"eng_s6_30",cat:"engine",name:"S6T\u578B3000cc\uFF08\u76F4\u52176\u6C17\u7B52\uFF09",rank:4,price:null,weight:45,desc:"80-Supra\u7D14\u6B63\u3002\u9811\u4E08\u306A\u76F4\u52176\u6C17\u7B52\u3002\u7D14\u6B63\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u3067280PS/451N\xB7m",layout:"\u76F4\u52176\u6C17\u7B52",displacement:2997,cylinders:6,idle:700,redline:6800,limiter:6900,inertia:.24,torque:[[700,150],[1500,200],[2e3,220],[3e3,245],[3600,250],[4500,232],[5600,194],[6500,166],[7e3,148]]}),Zt({id:"eng_v6_30",cat:"engine",name:"V6\u578B3000cc\uFF08V\u578B\uFF09",rank:4,price:null,weight:30,desc:"\u9AD8\u56DE\u8EE2\u578BV6\u81EA\u7136\u5438\u6C17\u3002\u592A\u3044\u30C8\u30EB\u30AF\u3068\u4F38\u3073\u3002280PS/6800rpm 300N\xB7m/4800rpm",layout:"V\u578B6\u6C17\u7B52",displacement:2987,cylinders:6,idle:750,redline:7400,limiter:7500,inertia:.21,torque:[[750,180],[1500,215],[2500,260],[4e3,290],[4800,300],[6e3,295],[6800,289],[7400,258],[7700,225]]}),Zt({id:"eng_r2_13",cat:"engine",name:"R2\u578B1300cc\uFF08\u30ED\u30FC\u30BF\u30EA\u30FC\uFF09",rank:5,price:null,weight:-25,desc:"\u8D85\u8EFD\u91CF\u30FB\u8D85\u9AD8\u56DE\u8EE2\u30ED\u30FC\u30BF\u30EA\u30FC\u3002250PS/8500rpm 216N\xB7m/5500rpm",layout:"2\u30ED\u30FC\u30BF\u30FC",displacement:1308,cylinders:3,idle:900,redline:9e3,limiter:9200,inertia:.09,torque:[[900,110],[2e3,140],[3e3,168],[4500,205],[5500,216],[7e3,212],[8500,207],[9e3,192],[9400,170]]}),Zt({id:"bore_1",cat:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7\u30AD\u30C3\u30C8 Stage1",rank:1,price:12e4,weight:0,desc:"\u6392\u6C17\u91CF+3%\u76F8\u5F53\u3002\u5168\u57DF\u30C8\u30EB\u30AF+4%",torqueMul:1.04}),Zt({id:"bore_2",cat:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7\u30AD\u30C3\u30C8 Stage2",rank:3,price:null,weight:0,desc:"\u6392\u6C17\u91CF+6%\u76F8\u5F53\u3002\u5168\u57DF\u30C8\u30EB\u30AF+8%",torqueMul:1.08}),Zt({id:"bore_3",cat:"boreup",name:"\u30DC\u30A2\u30A2\u30C3\u30D7\u30AD\u30C3\u30C8 Stage3",rank:4,price:null,weight:1,desc:"\u6392\u6C17\u91CF+10%\u76F8\u5F53\u3002\u5168\u57DF\u30C8\u30EB\u30AF+12%\u3001\u30EC\u30D6-200rpm",torqueMul:1.12,redlineDelta:-200}),Zt({id:"muf_stock",cat:"muffler",name:"\u7D14\u6B63\u30DE\u30D5\u30E9\u30FC",rank:1,price:1e4,weight:0,desc:"\u9759\u304B\u3067\u4F4E\u901F\u30C8\u30EB\u30AF\u91CD\u8996",low:1,high:1,loud:0}),Zt({id:"muf_sport",cat:"muffler",name:"\u30B9\u30DD\u30FC\u30C4\u30DE\u30D5\u30E9\u30FC",rank:2,price:8e4,weight:-4,desc:"\u9AD8\u56DE\u8EE2\u30C8\u30EB\u30AF+4%",low:1.01,high:1.04,loud:.3}),Zt({id:"muf_straight",cat:"muffler",name:"\u30B9\u30C8\u30EC\u30FC\u30C8\u30DE\u30D5\u30E9\u30FC",rank:3,price:null,weight:-7,desc:"\u4F4E\u901F-2% \u9AD8\u56DE\u8EE2+7%\u3002\u97F3\u91CF\u5927",low:.98,high:1.07,loud:.7}),Zt({id:"ic_stock",cat:"intercooler",name:"\u7D14\u6B63\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",rank:1,price:3e4,weight:0,desc:"\u904E\u7D66\u52B9\u738785%\uFF08\u672A\u88C5\u7740\u664270%\uFF09",eff:.85}),Zt({id:"ic_large",cat:"intercooler",name:"\u5927\u5BB9\u91CF\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",rank:2,price:14e4,weight:3,desc:"\u904E\u7D66\u52B9\u738793%",eff:.93}),Zt({id:"ic_front",cat:"intercooler",name:"\u524D\u7F6E\u304D\u5927\u5BB9\u91CF\u30A4\u30F3\u30BF\u30FC\u30AF\u30FC\u30E9\u30FC",rank:4,price:null,weight:6,desc:"\u904E\u7D66\u52B9\u7387100%",eff:1}),Zt({id:"tb_small",cat:"turbo",name:"\u30B7\u30F3\u30B0\u30EB\u30BF\u30FC\u30D3\u30F3\uFF08\u5C0F\uFF09",rank:2,price:22e4,weight:10,desc:"\u30EC\u30B9\u30DD\u30F3\u30B9\u91CD\u8996\u3002\u4F4E\u56DE\u8EE2\u304B\u3089\u904E\u7D66",boost:.8,spool:[1500,2500],fade:[4e3,.35],lag:.25}),Zt({id:"tb_mid",cat:"turbo",name:"\u30B7\u30F3\u30B0\u30EB\u30BF\u30FC\u30D3\u30F3\uFF08\u4E2D\uFF09",rank:3,price:null,weight:12,desc:"\u30D0\u30E9\u30F3\u30B9\u578B\u3002\u4E2D\u56DE\u8EE2\u304B\u3089\u529B\u5F37\u304F\u904E\u7D66",boost:1,spool:[2500,4e3],fade:[5500,.25],lag:.5}),Zt({id:"tb_large",cat:"turbo",name:"\u30B7\u30F3\u30B0\u30EB\u30BF\u30FC\u30D3\u30F3\uFF08\u5927\uFF09",rank:4,price:null,weight:15,desc:"\u30C9\u30C3\u30AB\u30F3\u30BF\u30FC\u30DC\u3002\u9AD8\u56DE\u8EE2\u3067\u7206\u767A\u7684\u30D1\u30EF\u30FC",boost:1.4,spool:[3600,5300],fade:[7e3,.15],lag:.9}),Zt({id:"tb_seq",cat:"turbo",name:"\u30B7\u30FC\u30B1\u30F3\u30B7\u30E3\u30EB\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC",rank:4,price:null,weight:20,desc:"2\u57FA\u3092\u5207\u66FF\u3048\u3002\u4F4E\u56DE\u8EE2\u304B\u3089\u9AD8\u56DE\u8EE2\u307E\u3067\u9014\u5207\u308C\u306A\u3044",boost:.95,spool:[1800,3200],fade:[5600,.15],lag:.3}),Zt({id:"tb_twin",cat:"turbo",name:"\u30D1\u30E9\u30EC\u30EB\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC",rank:4,price:null,weight:18,desc:"\u9AD8\u904E\u7D66\u5727\u306E\u30C4\u30A4\u30F3\u3002\u4E2D\u9AD8\u56DE\u8EE2\u578B",boost:1.15,spool:[2800,4300],fade:[6500,.15],lag:.55}),Zt({id:"tb_sc",cat:"turbo",name:"\u30B9\u30FC\u30D1\u30FC\u30C1\u30E3\u30FC\u30B8\u30E3\u30FC",rank:3,price:null,weight:12,desc:"\u6A5F\u68B0\u5F0F\u904E\u7D66\u3002\u30E9\u30B0\u7121\u3057\u3067\u30EA\u30CB\u30A2",boost:.6,spool:[1e3,3e3],fade:[9e3,0],lag:.04}),Zt({id:"tire_comfort",cat:"tire",name:"\u30B3\u30F3\u30D5\u30A9\u30FC\u30C8\u30BF\u30A4\u30E4",rank:1,price:4e4,weight:0,desc:"\u30B0\u30EA\u30C3\u30D70.95",mu:.95,peakAngle:.15,peakRatio:.12}),Zt({id:"tire_street",cat:"tire",name:"\u30B9\u30C8\u30EA\u30FC\u30C8\u30B9\u30DD\u30FC\u30C4\u30BF\u30A4\u30E4",rank:1,price:8e4,weight:0,desc:"\u30B0\u30EA\u30C3\u30D71.02\uFF08\u591A\u304F\u306E\u8ECA\u306E\u7D14\u6B63\uFF09",mu:1.02,peakAngle:.13,peakRatio:.11}),Zt({id:"tire_high",cat:"tire",name:"\u30CF\u30A4\u30B0\u30EA\u30C3\u30D7\u30BF\u30A4\u30E4",rank:2,price:16e4,weight:0,desc:"\u30B0\u30EA\u30C3\u30D71.12",mu:1.12,peakAngle:.115,peakRatio:.1}),Zt({id:"tire_s",cat:"tire",name:"S\u30BF\u30A4\u30E4\uFF08\u30BB\u30DF\u30B9\u30EA\u30C3\u30AF\uFF09",rank:4,price:null,weight:-2,desc:"\u30B0\u30EA\u30C3\u30D71.22\u3002\u9650\u754C\u304C\u30B7\u30D3\u30A2",mu:1.22,peakAngle:.1,peakRatio:.09}),Zt({id:"sus_stock",cat:"suspension",name:"\u7D14\u6B63\u30B5\u30B9\u30DA\u30F3\u30B7\u30E7\u30F3",rank:1,price:3e4,weight:0,desc:"\u4E57\u308A\u5FC3\u5730\u91CD\u8996",grip:1,cgDrop:0,tau:.12,rollFront:0}),Zt({id:"sus_street",cat:"suspension",name:"\u30B9\u30C8\u30EA\u30FC\u30C8\u8ECA\u9AD8\u8ABF",rank:2,price:15e4,weight:-2,desc:"\u8ECA\u9AD8-20mm\u3002\u30B0\u30EA\u30C3\u30D7+3%\u3001\u5FDC\u7B54\u5411\u4E0A",grip:1.03,cgDrop:.02,tau:.085,rollFront:-.02}),Zt({id:"sus_circuit",cat:"suspension",name:"\u30B5\u30FC\u30AD\u30C3\u30C8\u8ECA\u9AD8\u8ABF",rank:4,price:null,weight:-3,desc:"\u8ECA\u9AD8-35mm\u3002\u30B0\u30EA\u30C3\u30D7+6%\u3001\u92ED\u3044\u5FDC\u7B54",grip:1.06,cgDrop:.035,tau:.06,rollFront:-.04}),Zt({id:"brk_stock",cat:"brake",name:"\u7D14\u6B63\u30D6\u30EC\u30FC\u30AD",rank:1,price:2e4,weight:0,desc:"\u5236\u52D5\u529B100%",torque:1}),Zt({id:"brk_pad",cat:"brake",name:"\u30B9\u30DD\u30FC\u30C4\u30D1\u30C3\u30C9",rank:1,price:5e4,weight:0,desc:"\u5236\u52D5\u529B112%",torque:1.12}),Zt({id:"brk_big",cat:"brake",name:"\u30D3\u30C3\u30B0\u30AD\u30E3\u30EA\u30D1\u30FC\u30AD\u30C3\u30C8",rank:4,price:null,weight:3,desc:"\u5236\u52D5\u529B128%",torque:1.28}),Zt({id:"tm_stock",cat:"transmission",name:"\u7D14\u6B63\u30C8\u30E9\u30F3\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",rank:1,price:3e4,weight:0,desc:"\u8ECA\u7A2E\u7D14\u6B63\u30AE\u30A2\u6BD4",close:1,final:1,shift:.18}),Zt({id:"tm_lowfinal",cat:"transmission",name:"\u30ED\u30FC\u30D5\u30A1\u30A4\u30CA\u30EB\u30AE\u30A2",rank:2,price:9e4,weight:0,desc:"\u30D5\u30A1\u30A4\u30CA\u30EB\xD71.12\u3002\u52A0\u901F\u91CD\u8996",close:1,final:1.12,shift:.18}),Zt({id:"tm_highgear",cat:"transmission",name:"\u30CF\u30A4\u30AE\u30A2\u30FC\u30C9\u30D5\u30A1\u30A4\u30CA\u30EB",rank:2,price:9e4,weight:0,desc:"\u30D5\u30A1\u30A4\u30CA\u30EB\xD70.90\u3002\u6700\u9AD8\u901F\u91CD\u8996",close:1,final:.9,shift:.18}),Zt({id:"tm_close",cat:"transmission",name:"\u30AF\u30ED\u30B9\u30DF\u30C3\u30B7\u30E7\u30F3",rank:4,price:null,weight:2,desc:"\u30AE\u30A2\u9593\u3092\u8A70\u3081\u3001\u30B7\u30D5\u30C8\u3082\u901F\u3044",close:.78,final:1.05,shift:.11}),Zt({id:"aero_lip",cat:"aero",name:"\u30D5\u30ED\u30F3\u30C8\u30EA\u30C3\u30D7\u30B9\u30DD\u30A4\u30E9\u30FC",rank:1,price:6e4,weight:2,desc:"\u30D5\u30ED\u30F3\u30C8\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9\u5C0F",clF:.1,clR:0,cd:.005}),Zt({id:"aero_wing",cat:"aero",name:"GT\u30A6\u30A4\u30F3\u30B0",rank:3,price:null,weight:5,desc:"\u30EA\u30A2\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9\u5927\u3002\u7A7A\u6C17\u62B5\u6297\u5897",clF:0,clR:.38,cd:.03}),Zt({id:"aero_full",cat:"aero",name:"\u30D5\u30EB\u30A8\u30A2\u30ED\u30AD\u30C3\u30C8",rank:4,price:null,weight:8,desc:"\u524D\u5F8C\u30D0\u30E9\u30F3\u30B9\u306E\u53D6\u308C\u305F\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9",clF:.2,clR:.34,cd:.02})],We=Object.fromEntries(sr.map(s=>[s.id,s]));var rr=s=>"\u2605".repeat(s)+"\u2606".repeat(5-s);var Tl="ibr.save.v1",Iu="ibr.records.v1";function Al(){let s={...pe[Ge.car].stock},t={};for(let e of Object.values(s))e&&(t[e]=(t[e]||0)+1);return{version:1,money:3e5,wins:0,losses:0,owned:t,garage:[{carId:Ge.car,color:Ge.color,equipped:s}],active:0,defeated:{},pos:null,playtime:0,savedAt:null}}function Rl(){try{return!!localStorage.getItem(Tl)}catch{return!1}}function Cl(){try{let s=localStorage.getItem(Tl);return s?JSON.parse(s):null}catch{return null}}function Pu(s){s.savedAt=new Date().toISOString();try{return localStorage.setItem(Tl,JSON.stringify(s)),!0}catch{return!1}}function or(s,t){let e=0;for(let n of s.garage)for(let i of as)n.equipped[i.id]===t&&e++;return(s.owned[t]||0)-e}function ko(s,t,e=1){s.owned[t]=(s.owned[t]||0)+e}function cs(s){return s.garage[s.active]}function ls(){try{return JSON.parse(localStorage.getItem(Iu)||"{}")}catch{return{}}}function Lu(s,t){let e=ls(),n=e[s]||[];n.push(t),n.sort((r,o)=>r.best-o.best);let i=n.splice(20);e[s]=n;try{localStorage.setItem(Iu,JSON.stringify(e))}catch{}for(let r of i)Mx(r.id);return n.indexOf(t)}var El=null;function Il(){return El||(El=new Promise((s,t)=>{if(!window.indexedDB){t(new Error("no idb"));return}let e=indexedDB.open("ibr-replays",1);e.onupgradeneeded=()=>e.result.createObjectStore("replays"),e.onsuccess=()=>s(e.result),e.onerror=()=>t(e.error)})),El}async function Du(s,t){try{let e=await Il();return await new Promise((n,i)=>{let r=e.transaction("replays","readwrite");r.objectStore("replays").put(t,s),r.oncomplete=n,r.onerror=()=>i(r.error)}),!0}catch{return!1}}async function Uu(s){try{let t=await Il();return await new Promise((e,n)=>{let i=t.transaction("replays").objectStore("replays").get(s);i.onsuccess=()=>e(i.result||null),i.onerror=()=>n(i.error)})}catch{return null}}async function Mx(s){try{(await Il()).transaction("replays","readwrite").objectStore("replays").delete(s)}catch{}}function se(s){if(s==null||!isFinite(s))return"--:--.---";let t=Math.floor(s/60),e=s-t*60;return`${t}:${e.toFixed(3).padStart(6,"0")}`}function ln(s){return"\xA5"+Math.round(s).toLocaleString("ja-JP")}function Nu(s){return Math.sin(1.4*Math.atan(2.08*s))}var Ho=class{constructor(t,e={}){this.setSpec(t),this.x=0,this.z=0,this.h=0,this.vu=0,this.vv=0,this.w=0,this.steer=0,this.wF=0,this.wR=0,this.rpm=t.idle,this.gear=1,this.shiftTimer=0,this.boost=0,this.axF=0,this.ayF=0,this.axAcc=0,this.ayAcc=0,this.spinF=0,this.spinR=0,this.pitch=0,this.roll=0,this.slip=0,this.slipLong=0,this.input={throttle:0,brake:0,steer:0},this.auto=!!e.auto,this.abs=e.abs!==!1,this.tcs=!!e.tcs,this.limiterHit=0,this.wheelLoads=[0,0,0,0],this.wheelSlip=[0,0,0,0],this.reverseHold=0,this.offRoad=0}setSpec(t){this.spec=t,this.m=t.mass,this.L=t.wheelbase,this.b=this.L*t.frontWeight,this.a=this.L-this.b,this.Iz=t.mass*(t.car.length**2+t.car.width**2)/12*.95,this.Iw=1.1*t.car.inertiaK,this.wheels=[{pu:this.a,pv:-t.trackF/2,front:!0},{pu:this.a,pv:t.trackF/2,front:!0},{pu:-this.b,pv:-t.trackR/2,front:!1},{pu:-this.b,pv:t.trackR/2,front:!1}]}place(t,e,n,i=0){this.x=t,this.z=e,this.h=n,this.vu=i,this.vv=0,this.w=0;let r=this.spec.tireRadius;this.wF=this.wR=i/r,this.gear=i>1?this.bestGear(i):1,this.rpm=Math.max(this.spec.idle,this.wheelRpm()),this.shiftTimer=0}get speed(){return Math.hypot(this.vu,this.vv)}get kmh(){return this.vu*3.6}fwd(){return[Math.sin(this.h),Math.cos(this.h)]}right(){return[-Math.cos(this.h),Math.sin(this.h)]}ratio(t=this.gear){let e=this.spec;return t>0?e.gears[t-1]*e.final:t<0?-e.reverse*e.final:0}drivenOmega(){let t=this.spec.drive;return t==="FF"?this.wF:t==="FR"?this.wR:(this.wF+this.wR)/2}wheelRpm(t=this.gear){return Math.abs(this.drivenOmega()*this.ratio(t)*60/(2*Math.PI))}bestGear(t){let e=this.spec;for(let n=1;n<=e.gears.length;n++)if(t/e.tireRadius*e.gears[n-1]*e.final*60/(2*Math.PI)<e.redline*.75)return n;return e.gears.length}shiftUp(){if(this.gear<this.spec.gears.length){if(this.gear===-1||this.gear===0){this.gear++,this.shiftTimer=.08;return}this.gear++,this.shiftTimer=this.spec.shiftTime}}shiftDown(){this.gear>1?(this.gear--,this.shiftTimer=this.spec.shiftTime):this.gear===1?this.gear=0:this.gear===0&&this.speed<2.5&&(this.gear=-1,this.shiftTimer=.1)}autoShift(t){let e=this.spec,n=this.input;if(this.speed<1&&(n.brake>.5&&n.throttle<.05?(this.reverseHold+=t,this.reverseHold>.45&&this.gear!==-1&&(this.gear=-1)):this.reverseHold=0,n.throttle>.1&&this.gear<=0&&this.vu>-.5&&(this.gear=1)),this.shiftCool=Math.max(0,(this.shiftCool||0)-t),this.gear<1||this.shiftTimer>0)return;let i=this.wheelRpm(),r=Math.min(i,Math.abs(this.vu/e.tireRadius*this.ratio()*60/(2*Math.PI))*1.12);if(i>e.redline-120&&r>e.redline*.8&&this.gear<e.gears.length){this.shiftUp(),this.shiftCool=1;return}if(this.gear>1&&this.shiftCool<=0){let o=r*e.gears[this.gear-2]/e.gears[this.gear-1],a=n.brake>.2?.72:.5;r<e.redline*a&&o<e.redline-700&&this.shiftDown()}}effectiveInputs(){let{throttle:t,brake:e}=this.input;if(this.auto&&this.gear===-1){let n=t;t=e,e=n}return{throttle:t,brake:e}}step(t){let e=this.spec,n=e.tireRadius;this.auto&&this.autoShift(t);let{throttle:i,brake:r}=this.effectiveInputs();this.shiftTimer>0&&(this.shiftTimer-=t);let o=this.shiftTimer>0,a=this.speed,c=this.input.steer,l=Math.atan2(this.vv,Math.max(Math.abs(this.vu),2)),h=Math.min(e.steerLock,this.L*e.mu*9.81/Math.max(a*a,1)+e.peakAngle*1.25);h=Math.max(h,.06);let d=c*h;c!==0&&Math.sign(c)===Math.sign(l)&&(d=c*Math.min(e.steerLock,h+Math.abs(l)*1.1));let u=(c===0?3.2:2.4)*t;this.steer+=Math.max(-u,Math.min(u,d-this.steer));let f=this.steer,g=Math.cos(f),x=Math.sin(f),m=this.vu*this.vu,p=.5*1.2*m,y=p*e.area*e.clF,v=p*e.area*e.clR,_=this.m*9.81,R=e.cgHeight,T=this.m*this.axF*R/this.L,A=this.m*this.ayF*R,I=_*this.b/this.L-T+y,b=_*this.a/this.L+T+v,M=A*e.rollFront/e.trackF,P=A*(1-e.rollFront)/e.trackR,F=this.wheelLoads;F[0]=Math.max(0,I/2+M),F[1]=Math.max(0,I/2-M),F[2]=Math.max(0,b/2+P),F[3]=Math.max(0,b/2-P);let O=_/4,B=this.ratio(),Y=B!==0&&!o,H,tt=this.wheelRpm(),X=!1;if(Y){let ot=e.idle*1.4+i*(e.redline*.5-e.idle);tt<ot&&Math.abs(this.gear)===1?(X=!0,H=this.rpm+(ot-this.rpm)*Math.min(1,t*12)):tt<e.idle*1.2?(X=!0,H=this.rpm+(e.idle*1.2-this.rpm)*Math.min(1,t*12)):H=tt}else{let ot=e.idle+i*(e.limiter-e.idle),Ot=ot>this.rpm?8:3;H=this.rpm+(ot-this.rpm)*Math.min(1,t*Ot)}let rt=e.boostTarget(H)*i,gt=rt>this.boost?Math.max(.02,e.turboLag):.12;this.boost+=(rt-this.boost)*Math.min(1,t/gt);let _t=i;H>=e.limiter&&(_t=0,this.limiterHit=.08),this.limiterHit>0&&(this.limiterHit-=t,_t=0),this.tcs&&this.slipLong>e.peakRatio*1.3&&(_t*=.3);let zt=e.fullTorque(H,this.boost)*_t,bt=e.maxTorque*(.03+.12*(H/e.redline))*(1-_t),G=zt-bt;H<=e.idle*1.02&&G<0&&(G=0),this.rpm=Math.max(e.idle*.9,Math.min(e.limiter+50,H));let Q=0;Y&&(Q=G*B*.92);let ht=e.engineInertia*B*B*(Y&&!X?1:0),et=0,Tt=0,Rt=this.Iw*2,Lt=this.Iw*2;e.drive==="FF"?(et=Q,Rt+=ht):e.drive==="FR"?(Tt=Q,Lt+=ht):(et=Q*e.awdFront,Tt=Q*(1-e.awdFront),Rt+=ht*e.awdFront,Lt+=ht*(1-e.awdFront));let kt=e.brakeTorque*r*e.brakeBias,J=e.brakeTorque*r*(1-e.brakeBias),it=0,C=0,wt=0,nt=0,Mt=0,ct=0,Ut=0,vt=0,E=0,S=e.peakRatio,k=e.peakAngle;for(let ot=0;ot<4;ot++){let Ot=this.wheels[ot],Nt=this.vu-this.w*Ot.pv,Kt=this.vv+this.w*Ot.pu,D,ut;Ot.front?(D=Nt*g+Kt*x,ut=-Nt*x+Kt*g):(D=Nt,ut=Kt);let q=Ot.front?this.wF:this.wR,K=Math.max(Math.abs(D),4),mt=(q*n-D)/K,xt=Math.atan2(ut,Math.max(Math.abs(D),1.5)),Ht=F[ot],ce=e.mu*Math.max(.6,1-.08*(Ht/O-1))*(this.offRoad?.7:1),_e=mt/S,Jt=xt/k,ve=Math.hypot(_e,Jt),Te=0,ei=0,ni=0;if(ve>1e-6){let gs=ce*Ht*Nu(ve);Te=gs*_e/ve,ei=-gs*Jt/ve;let xs=(mt+.01)/S,ii=Math.hypot(xs,Jt),ar=ce*Ht*Nu(ii)*xs/ii;ni=Math.max(0,(ar-Te)/.01)}else ni=ce*Ht*2.08*1.4/S;this.wheelSlip[ot]=ve,ve>vt&&(vt=ve),Math.abs(mt)>E&&(E=Math.abs(mt));let Je,On;Ot.front?(Je=Te*g-ei*x,On=Te*x+ei*g,nt+=Te,ct+=ni*n/K):(Je=Te,On=ei,Mt+=Te,Ut+=ni*n/K),it+=Je,C+=On,wt+=Ot.pu*On-Ot.pv*Je}if(this.slip=vt,this.slipLong=E,this.abs&&r>0){let ot=this.wF*n-this.vu,Ot=this.wR*n-this.vu,Nt=-S*1.1*Math.max(Math.abs(this.vu),4);ot<Nt&&(kt*=.35),Ot<Nt&&(J*=.35)}let $=(ot,Ot,Nt,Kt,D,ut)=>{let q=ot+t*(Ot-n*Nt)/(D+t*n*Kt),K=ut*t/(D+t*n*Kt);return Math.abs(q)<=K?q=0:q-=Math.sign(q)*K,q};if(e.drive==="AWD"&&Y&&!X){let ot=Rt+Lt,Ot=(this.wF+this.wR)/2,Nt=$(Ot,Q,nt+Mt,ct+Ut,ot,kt+J);this.wF=this.wR=Nt}else this.wF=$(this.wF,et,nt,ct,Rt,kt),this.wR=$(this.wR,Tt,Mt,Ut,Lt,J);let j=.5*1.2*e.cd*e.area*a*a;a>.01&&(it-=j*this.vu/a,C-=j*this.vv/a);let Z=.011*_+(this.offRoad?.08*_:0);Math.abs(this.vu)>.05&&(it-=Math.sign(this.vu)*Math.min(Z,Math.abs(this.vu)*this.m/t*.5));let At=it/this.m,dt=C/this.m;if(this.vu+=(At+this.w*this.vv)*t,this.vv+=(dt-this.w*this.vu)*t,this.w+=wt/this.Iz*t,a<1.2&&i<.05&&(r>.05||a<.25)){let ot=Math.exp(-t*(r>.05?10:4));this.vu*=ot,this.vv*=ot,this.w*=ot,r>.05&&(this.wF*=ot,this.wR*=ot)}a<3&&(this.vv*=Math.exp(-t*2));let St=e.loadTau;this.axF+=(At-this.axF)*Math.min(1,t/St),this.ayF+=(dt-this.ayF)*Math.min(1,t/St);let $t=Math.sin(this.h),st=Math.cos(this.h),Et=-st,Ft=$t;this.x+=(this.vu*$t+this.vv*Et)*t,this.z+=(this.vu*st+this.vv*Ft)*t,this.h-=this.w*t,this.spinF+=this.wF*t,this.spinR+=this.wR*t;let Bt=.012*(e.loadTau/.12);this.pitch+=(-this.axF*Bt*.6-this.pitch)*Math.min(1,t*8),this.roll+=(this.ayF*Bt-this.roll)*Math.min(1,t*8)}worldVel(){let t=Math.sin(this.h),e=Math.cos(this.h);return[this.vu*t-this.vv*e,this.vu*e+this.vv*t]}setWorldVel(t,e){let n=Math.sin(this.h),i=Math.cos(this.h);this.vu=t*n+e*i,this.vv=-t*i+e*n}wallImpulse(t,e,n,i,r,o=.15,a=.35){let c=t-this.x,l=e-this.z,[h,d]=this.worldVel(),u=h+this.w*-l,f=d+this.w*c,g=u*n+f*i;if(this.x+=n*r,this.z+=i*r,g>=0)return 0;let x=c*i-l*n,m=-(1+o)*g/(1/this.m+x*x/this.Iz);h+=m*n/this.m,d+=m*i/this.m,this.w+=m*x/this.Iz;let p=-i,y=n,v=u*p+f*y,_=c*y-l*p,R=-v/(1/this.m+_*_/this.Iz);R=Math.max(-a*m,Math.min(a*m,R)),h+=R*p/this.m,d+=R*y/this.m,this.w+=R*_/this.Iz,this.setWorldVel(h,d);let T=this.spec.tireRadius;return this.wF=this.wF*.7+this.vu/T*.3,this.spec.drive!=="FR"&&(this.wR=this.wR*.7+this.vu/T*.3),m}corners(t=0){let e=this.spec.car,n=e.length/2+t,i=e.width/2+t,r=Math.sin(this.h),o=Math.cos(this.h),a=-o,c=r,l=[];for(let[h,d]of[[n,-i],[n,i],[-n,-i],[-n,i],[0,-i],[0,i]])l.push([this.x+r*h+a*d,this.z+o*h+c*d]);return l}};function Ou(s,t){let e=Fu(s),n=Fu(t),i=0;for(let r of e)for(let o of n){let a=r[0]-o[0],c=r[1]-o[1],l=Math.hypot(a,c),h=r[2]+o[2];if(l>=h||l<1e-4)continue;let d=a/l,u=c/l,f=h-l,g=o[0]+d*o[2],x=o[1]+u*o[2];i+=Sx(s,t,g,x,d,u,f)}return i}function Fu(s){let t=s.spec.car,e=t.width/2,n=t.length/2-e,i=Math.sin(s.h),r=Math.cos(s.h);return[[s.x+i*n,s.z+r*n,e],[s.x,s.z,e],[s.x-i*n,s.z-r*n,e]]}function Sx(s,t,e,n,i,r,o){let a=s.m,c=t.m,l=a+c;s.x+=i*o*(c/l),s.z+=r*o*(c/l),t.x-=i*o*(a/l),t.z-=r*o*(a/l);let[h,d]=s.worldVel(),[u,f]=t.worldVel(),g=e-s.x,x=n-s.z,m=e-t.x,p=n-t.z,y=[h-s.w*x,d+s.w*g],v=[u-t.w*p,f+t.w*m],_=(y[0]-v[0])*i+(y[1]-v[1])*r;if(_>=0)return 0;let R=g*r-x*i,T=m*r-p*i,I=-(1+.2)*_/(1/a+1/c+R*R/s.Iz+T*T/t.Iz);return h+=I*i/a,d+=I*r/a,s.w+=I*R/s.Iz,u-=I*i/c,f-=I*r/c,t.w-=I*T/t.Iz,s.setWorldVel(h,d),t.setWorldVel(u,f),I}var bx=(s,t)=>{if(t<=s[0][0])return s[0][1];for(let e=1;e<s.length;e++)if(t<=s[e][0]){let[n,i]=s[e-1],[r,o]=s[e];return i+(o-i)*(t-n)/(r-n)}return s[s.length-1][1]},Bu=(s,t,e)=>{let n=Math.min(1,Math.max(0,(e-s)/(t-s)));return n*n*(3-2*n)};function Nn(s,t){let e=pe[s],n=F=>t[F]?We[t[F]]:null,i=n("engine")||We[e.stock.engine],r=n("boreup"),o=n("muffler")||We.muf_stock,a=n("intercooler"),c=n("turbo"),l=n("tire")||We.tire_street,h=n("suspension")||We.sus_stock,d=n("brake")||We.brk_stock,u=n("transmission")||We.tm_stock,f=n("aero"),g=0;for(let F of[i,r,o,a,c,l,h,d,u,f])F&&(g+=F.weight||0);for(let F of Object.values(e.stock))F&&(g-=We[F].weight||0);let x=i.redline+(r?.redlineDelta||0),m=i.limiter+(r?.redlineDelta||0),p=c?a?a.eff:.7:0,y=e.gears[e.gears.length-1],v=e.gears.map(F=>y*Math.pow(F/y,u.close)),_=e.final*u.final,R=e.mass+g,T=e.frontWeight+(i.weight-(We[e.stock.engine].weight||0))*6e-4,A={car:e,carId:s,equipped:{...t},engine:i,turbo:c,tire:l,sus:h,brakePart:d,trans:u,aero:f,muffler:o,mass:R,frontWeight:Math.min(.66,Math.max(.42,T)),cgHeight:e.cgHeight-h.cgDrop,wheelbase:e.wheelbase,trackF:e.trackF,trackR:e.trackR,tireRadius:e.tireRadius,drive:e.drive,awdFront:e.awdFront||0,gears:v,reverse:e.reverse,final:_,shiftTime:u.shift,idle:i.idle,redline:x,limiter:m,engineInertia:i.inertia,cylinders:i.cylinders,loud:o.loud,mu:l.mu*h.grip,peakAngle:l.peakAngle,peakRatio:l.peakRatio,loadTau:h.tau,rollFront:e.rollFront+h.rollFront,brakeTorque:e.brakeTorque*d.torque,brakeBias:e.brakeBias,cd:e.cd+(f?.cd||0),area:e.area,clF:f?.clF||0,clR:f?.clR||0,steerLock:e.steerLock,boostMax:c?c.boost:0,turboLag:c?c.lag:0,icEff:p,_bore:r?r.torqueMul:1,_mufLow:o.low,_mufHigh:o.high};A.boostTarget=F=>{if(!c)return 0;let O=c.boost*Bu(c.spool[0],c.spool[1],F);return F>c.fade[0]&&(O*=Math.max(.3,1-c.fade[1]*(F-c.fade[0])/2e3)),O},A.naTorque=F=>{let O=bx(i.torque,F)*A._bore,B=Bu(x*.45,x*.75,F);return O*(A._mufLow*(1-B)+A._mufHigh*B)},A.fullTorque=(F,O)=>A.naTorque(F)*(1+O*p);let I=0,b=0,M=0,P=0;for(let F=1e3;F<=x;F+=50){let O=A.fullTorque(F,A.boostTarget(F)),B=O*F*2*Math.PI/60/1e3;O>I&&(I=O,b=F),B>M&&(M=B,P=F)}return A.maxTorque=I,A.maxTorqueRpm=b,A.maxPowerKW=M,A.maxPowerPS=M*1.3596,A.maxPowerRpm=P,A.pwr=R/A.maxPowerPS,A.rating=wx(A),A}function wx(s){let t=s.maxPowerPS/(s.mass/1e3),e=s.mu*(1+(s.clF+s.clR)*.15),n=Math.min(1.3,s.brakeTorque/(s.mass*3.4));return Math.round(t*2.2+e*220+n*60+(s.trans.close<1?15:0))}var zu=new De({color:724758,metalness:.6,roughness:.15}),Ex=new De({color:1118481,roughness:.9}),Tx=new De({color:10133672,metalness:.9,roughness:.3}),yi=new De({color:657930,roughness:.6}),Ax=new De({color:16777215,emissive:16773836,emissiveIntensity:1.6}),Rx=new De({color:15263968,emissive:3355443});function Cx(s){let t=new Ws;t.moveTo(s[0][0],s[0][1]);for(let e=1;e<s.length;e++)t.lineTo(s[e][0],s[e][1]);return t.closePath(),t}function Pl(s,t,e,n=.06){let i=new xo(Cx(s),{depth:t-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n*.8,bevelSegments:2,steps:1});return i.translate(0,0,-(t-n*2)/2),i.rotateY(-Math.PI/2),new pt(i,e)}function Vo(s,t,e={}){let n=new Ee,i=new Ee;n.add(i);let r=s.length,o=s.width,a=s.height,c=s.body,l=new De({color:t,metalness:.25,roughness:.38,envMapIntensity:.8}),h=[],d=r/2,u=a*.56,f=r*c.hood,g=r*c.tail,x=.52,m=[[-d,.22],[d-.08,.22],[d,.34],[d,x-.05],[d-.12,x],[d-f,u],[-d+g,u+.02],[-d+.04,u-.02],[-d,u-.12]],p=Pl(m,o,l);i.add(p);let y=d-f;if(c.style==="roadster"){let bt=Pl([[y,u],[y-.32,u+.38],[y-.38,u+.38],[y-.12,u]],o*.86,zu,.02);i.add(bt);for(let Q of[-.33,.33]){let ht=new pt(new Yt(.34,.32,.12),yi);ht.position.set(Q,u+.16,y-1.25),i.add(ht)}let G=new pt(new Yt(o*.86,.05,1.3),yi);G.position.set(0,u+.02,y-.95),i.add(G)}else{let bt=r*c.roof,G=y-r*.15,Q=G-bt,ht=-d+g;c.style==="hatch"&&(ht=-d+.12);let et=[[y,u],[G,a],[Q,a],[c.style==="hatch"?ht+.08:ht,c.style==="hatch"?u+.1:u]],Tt=Pl(et,o*.84,zu,.04);i.add(Tt);let Rt=new pt(new Yt(o*.78,.05,Math.max(.3,bt-.1)),l);Rt.position.set(0,a+.005,(G+Q)/2),i.add(Rt),h.push(Rt);for(let Lt of[-1,1]){let kt=[[y,u],[G,a]],J=kt[1][0]-kt[0][0],it=kt[1][1]-kt[0][1],C=Math.hypot(J,it),wt=new pt(new Yt(.07,.07,C),l);wt.position.set(Lt*o*.42,(kt[0][1]+kt[1][1])/2,(kt[0][0]+kt[1][0])/2),wt.rotation.x=-Math.atan2(it,Math.abs(J)),i.add(wt),h.push(wt)}}if(c.scoop){let bt=new pt(new Yt(.6,.08,.45),l);bt.position.set(0,u-.02+(x-u)*.35,d-f*.45),i.add(bt)}let v=e.wing||c.wing,_=(bt,G,Q,ht)=>{let et=new Ee,Tt=new pt(new Yt(Q,.04,G),ht);Tt.position.y=bt,et.add(Tt);for(let Rt of[-1,1]){let Lt=new pt(new Yt(.05,bt-u,.12),yi);Lt.position.set(Rt*Q*.32,(bt+u)/2,0),et.add(Lt)}et.position.z=-d+.28,i.add(et)};if(v==="gt")_(u+.32,.3,o*.92,yi);else if(v==="high")_(u+.22,.22,o*.8,l);else if(v==="loop")_(u+.14,.2,o*.86,l);else if(v==="duck"){let bt=new pt(new Yt(o*.8,.05,.12),l);bt.position.set(0,u+.05,-d+.12),i.add(bt)}else if(v==="roof"){let bt=new pt(new Yt(o*.75,.04,.22),l);bt.position.set(0,a+.02,-d+.25),i.add(bt)}if(e.aero==="aero_lip"||e.aero==="aero_full"){let bt=new pt(new Yt(o*.95,.04,.18),yi);bt.position.set(0,.2,d-.05),i.add(bt)}if(e.aero==="aero_full")for(let bt of[-1,1]){let G=new pt(new Yt(.05,.08,r*.5),yi);G.position.set(bt*(o/2-.02),.22,0),i.add(G)}let R=[];for(let bt of[-1,1]){let G=new pt(new Yt(.34,.08,.06),Ax.clone());G.position.set(bt*(o/2-.3),x-.06,d-.06),i.add(G),R.push(G)}let T=new De({color:5570560,emissive:16715792,emissiveIntensity:.6});for(let bt of[-1,1]){let G=new pt(new Yt(.36,.08,.05),T);G.position.set(bt*(o/2-.28),u-.12,-d-.005),i.add(G)}let A=new pt(new Yt(.33,.16,.02),Rx);A.position.set(0,.4,-d-.01),i.add(A);let I=[],b=s.tireRadius,M=new jn(b,b,.22,18);M.rotateZ(Math.PI/2);let P=new jn(b*.66,b*.66,.235,10);P.rotateZ(Math.PI/2);let F=new Yt(.24,b*1.2,.06),O=s.wheelbase/2;for(let[bt,G,Q]of[[1,-1,s.trackF],[1,1,s.trackF],[-1,-1,s.trackR],[-1,1,s.trackR]]){let ht=new Ee;ht.position.set(G*(Q/2),b,bt*O);let et=new Ee;et.add(new pt(M,Ex)),et.add(new pt(P,Tx));let Tt=new pt(F,yi);et.add(Tt);let Rt=Tt.clone();Rt.rotation.x=Math.PI/2,et.add(Rt),ht.add(et),n.add(ht),I.push({pivot:ht,spin:et,front:bt>0})}let B=new pt(new Ke(o*1.15,r*1.05),new ge({color:0,transparent:!0,opacity:.55,depthWrite:!1}));B.rotation.x=-Math.PI/2,B.position.y=.035,n.add(B);let Y=new Ee,H=new De({color:1381914,roughness:.85}),tt=new pt(new Yt(o*.9,.2,.5),H);tt.position.set(0,u+.02,y-.45),Y.add(tt);let X=new pt(new Yt(.5,.1,.22),H);X.position.set(-.37,u+.14,y-.62),Y.add(X);let rt=new Ee,gt=new pt(new yo(.18,.022,8,24),new De({color:789516,roughness:.7}));rt.add(gt);let _t=new pt(new Yt(.34,.03,.02),H);rt.add(_t);let zt=new pt(new Yt(.025,.05,.03),new ge({color:16724016}));if(zt.position.y=.17,rt.add(zt),rt.position.set(-.37,u+.05,y-.78),rt.rotation.x=-.35,Y.add(rt),c.style!=="roadster"){for(let G of[-1,1]){let Q=new pt(new Yt(.07,.6,.07),H);Q.position.set(G*o*.41,u+.27,y-.22),Q.rotation.x=-.75,Y.add(Q)}let bt=new pt(new Yt(o*.84,.06,.25),H);bt.position.set(0,a-.04,y-r*.15-.05),Y.add(bt)}return Y.visible=!1,i.add(Y),n.userData={exterior:h,body:i,wheels:I,lightsFront:R,tailMat:T,cockpit:Y,steeringWheel:rt,paint:l,belt:u,wsBase:y,H:a,L:r,W:o},n}function Go(s,t,e={}){let n=s.userData,i=(t.a-t.b)/2,r=Math.sin(t.h),o=Math.cos(t.h);s.position.set(t.x+r*i,0,t.z+o*i),s.rotation.y=t.h,n.body.rotation.x=t.pitch,n.body.rotation.z=-t.roll;for(let l of n.wheels)l.pivot.rotation.y=l.front?-t.steer:0,l.spin.rotation.x=l.front?t.spinF:t.spinR;n.steeringWheel.rotation.z=t.steer*9;let a=t.input.brake>.05&&t.gear!==-1;n.tailMat.emissiveIntensity=a?2.6:.7;let c=e.flash||0;for(let l of n.lightsFront)l.material.emissiveIntensity=1.4+c*6}var Ll=1/500,ti=class{constructor(t,{corridor:e,path:n=null}){this.game=t,this.corridor=e,this.path=n,this.entries=[],this.player=null,this.acc=0,this.time=0,this.controlsEnabled=!0,this.frozen=!1,this.flash=0}addCar({carId:t,equipped:e,color:n,isPlayer:i=!1,name:r="",ai:o=null}){let a=Nn(t,e),c=this.game.settings,l=new Ho(a,{auto:i?c.transmission==="AT":!0,abs:i?c.abs:!0,tcs:i?c.tcs:!1}),h=Vo(pe[t],n,{aero:e.aero,wing:e.aero==="aero_wing"||e.aero==="aero_full"?"gt":void 0});this.game.world.scene.add(h);let d=this.game.audio.createEngine(a),u={car:l,model:h,engine:d,isPlayer:i,name:r,ai:o,color:n,carId:t,equipped:e,flash:0};return this.entries.push(u),i&&(this.player=u),u}removeCar(t){this.game.world.scene.remove(t.model),this.game.audio.destroyEngine(t.engine),this.entries=this.entries.filter(e=>e!==t)}readPlayerInput(t){let e=this.game.input,n=this.player;if(!n)return;let i=n.car,r=i.input;if(!this.controlsEnabled){i.input={throttle:0,brake:this.frozen?1:0,steer:0};return}let o=e.held("throttle")?1:0,a=e.held("brake")?1:0,c=(e.held("right")?1:0)-(e.held("left")?1:0),l=(h,d,u)=>h+Math.max(-u*t,Math.min(u*t,d-h));i.input={throttle:l(r.throttle,o,o>r.throttle?7:12),brake:l(r.brake,a,10),steer:c},e.hit("shiftUp")&&i.shiftUp(),e.hit("shiftDown")&&i.shiftDown()}update(t){if(this.readPlayerInput(t),this.frozen)for(let i of this.entries)i.car.vu=0,i.car.vv=0,i.car.w=0;let e=i=>this.entries.filter(r=>r!==i).map(r=>r.car);for(let i of this.entries)i.ai&&!this.frozen&&i.ai.update(t,e(i));this.acc+=Math.min(t,.05);let n=0;for(;this.acc>=Ll&&n<40;){this.acc-=Ll,n++;for(let i of this.entries){let r=i.car.speed;i.car.step(Ll),Mu(i.car,this.corridor)>0&&(i.impact=Math.max(i.impact||0,r))}for(let i=0;i<this.entries.length;i++)for(let r=i+1;r<this.entries.length;r++){let o=this.entries[i].car,a=this.entries[r].car;Math.abs(o.x-a.x)<8&&Math.abs(o.z-a.z)<8&&Ou(o,a)}}this.time+=t;for(let i of this.entries){i.flash>0&&(i.flash-=t);let r=i.flash>0&&Math.sin(i.flash*40)>0?1:0;Go(i.model,i.car,{flash:r})}}updateAudio(t){let e=this.game.audio;for(let n of this.entries)if(n===this.player)e.updateEngine(n.engine,n.car,1,0);else{let i=Math.hypot(n.car.x-t.car.x,n.car.z-t.car.z),r=Math.max(0,1-i/120)*.6,[o,a]=t.car.right(),c=Math.max(-1,Math.min(1,((n.car.x-t.car.x)*o+(n.car.z-t.car.z)*a)/30));e.updateEngine(n.engine,n.car,r,c)}}dispose(){for(let t of[...this.entries])this.removeCar(t)}},Ix=15,Wo=class{constructor(t=30){this.rate=t,this.t=0,this.buf=[],this.frames=0}sample(t,e){for(this.t+=t;this.t>=1/this.rate;)this.t-=1/this.rate,this.buf.push(e.x,e.z,e.h,e.pitch,e.roll,e.steer,e.spinF,e.spinR,e.rpm,e.vu,e.gear,e.input.brake,e.input.throttle,e.boost,e.slip),this.frames++}finish(t){return{...t,rate:this.rate,stride:Ix,frames:this.frames,data:new Float32Array(this.buf)}}};var yn=class{constructor(t){this.root=z("div",{class:"hud"}),this.tl=z("div",{class:"hud-tl"}),this.tc=z("div",{class:"hud-tc"}),this.tr=z("div",{class:"hud-tr"}),this.msg=z("div",{class:"hud-msg"}),this.sub=z("div",{class:"hud-submsg"}),this.prompt=z("div",{class:"hud-prompt"}),this.tach=z("canvas",{class:"hud-tach",width:320,height:200}),this.map=z("canvas",{class:"hud-map",width:240,height:240}),this.mirrorFrame=z("div",{class:"hud-mirror"}),this.viewLabel=z("div",{class:"hud-view"}),this.root.append(this.tl,this.tc,this.tr,this.msg,this.sub,this.prompt,this.tach,this.map,this.mirrorFrame,this.viewLabel),t.appendChild(this.root),this.msgT=0,this.mapBounds=null}destroy(){this.root.remove()}flash(t,e=1.5,n=""){this.msg.textContent=t,this.sub.textContent=n,this.msg.classList.remove("pop"),this.msg.offsetWidth,this.msg.classList.add("pop"),this.msgT=e}setView(t){this.viewLabel.textContent=t,this.viewLabel.classList.remove("fade"),this.viewLabel.offsetWidth,this.viewLabel.classList.add("fade")}update(t){this.msgT>0&&(this.msgT-=t,this.msgT<=0&&(this.msg.textContent="",this.sub.textContent=""))}drawTach(t){let e=this.tach.getContext("2d"),n=this.tach.width,i=this.tach.height;e.clearRect(0,0,n,i);let r=t.spec,o=Math.ceil((r.limiter+500)/1e3)*1e3,a=n/2+40,c=i-18,l=150,h=Math.PI*1,d=Math.PI*1.75,u=x=>h+(d-h)*Math.min(1,x/o);e.lineWidth=14,e.strokeStyle="rgba(255,255,255,0.12)",e.beginPath(),e.arc(a,c,l,h,d),e.stroke(),e.strokeStyle="rgba(255,40,70,0.55)",e.beginPath(),e.arc(a,c,l,u(r.redline),d),e.stroke();let f=t.rpm>r.redline-300;e.strokeStyle=f?"#ff2d55":"#33e1ff",e.shadowColor=e.strokeStyle,e.shadowBlur=12,e.beginPath(),e.arc(a,c,l,h,u(t.rpm)),e.stroke(),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.7)",e.font="12px sans-serif",e.textAlign="center";for(let x=0;x<=o;x+=1e3){let m=u(x);e.fillText(String(x/1e3),a+Math.cos(m)*(l-22),c+Math.sin(m)*(l-22)+4)}e.textAlign="right",e.font='bold 58px "Orbitron","Segoe UI",sans-serif',e.fillStyle="#fff",e.fillText(String(Math.round(Math.abs(t.vu)*3.6)),a+60,c-30),e.font="14px sans-serif",e.fillStyle="#9ab",e.fillText("km/h",a+60,c-10),e.textAlign="center",e.font='bold 44px "Orbitron","Segoe UI",sans-serif',e.fillStyle=f?"#ff2d55":"#ffd400";let g=t.gear===-1?"R":t.gear===0?"N":String(t.gear);e.fillText(g,a-70,c-30),t.spec.boostMax>0&&(e.font="12px sans-serif",e.fillStyle="#9ab",e.textAlign="left",e.fillText(`BOOST ${t.boost.toFixed(2)}bar`,a-110,c-2))}setMapCourse(t){this.course=t,this.mapBounds=null}drawMap(t,e=[]){let n=this.map.getContext("2d"),i=this.map.width,r=this.map.height;if(n.clearRect(0,0,i,r),!this.mapBounds){let h=1e9,d=-1e9,u=1e9,f=-1e9,g=this.course?Array.from({length:this.course.n},(m,p)=>({x:this.course.x[p],z:this.course.z[p]})):Object.values(he);for(let m of g)h=Math.min(h,m.x),d=Math.max(d,m.x),u=Math.min(u,m.z),f=Math.max(f,m.z);let x=Math.min((i-30)/(d-h),(r-30)/(f-u));this.mapBounds={sc:x,ox:i/2-(h+d)/2*x,oz:r/2-(u+f)/2*x}}let{sc:o,ox:a,oz:c}=this.mapBounds,l=(h,d)=>[a+h*o,c+d*o];if(n.fillStyle="rgba(5,10,20,0.6)",n.beginPath(),n.roundRect(0,0,i,r,14),n.fill(),n.lineCap="round",n.lineJoin="round",this.course){n.strokeStyle="rgba(200,220,255,0.85)",n.lineWidth=4,n.beginPath();for(let u=0;u<=this.course.n;u++){let f=u%this.course.n,[g,x]=l(this.course.x[f],this.course.z[f]);u?n.lineTo(g,x):n.moveTo(g,x)}n.stroke();let[h,d]=l(this.course.x[0],this.course.z[0]);n.fillStyle="#fff",n.fillRect(h-4,d-4,8,8)}else for(let h of _n)n.strokeStyle="rgba(170,190,230,0.75)",n.lineWidth=Math.max(2,h.width*o*.9),n.beginPath(),h.nodes.forEach((d,u)=>{let[f,g]=l(he[d].x,he[d].z);u?n.lineTo(f,g):n.moveTo(f,g)}),n.stroke();for(let h of e){let[d,u]=l(h.x,h.z);n.fillStyle=h.color,n.beginPath(),n.arc(d,u,6,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font="bold 10px sans-serif",n.textAlign="center",n.fillText(h.label,d,u-9)}for(let h of t){let[d,u]=l(h.x,h.z);n.save(),n.translate(d,u),n.rotate(-h.h+Math.PI),n.fillStyle=h.color,n.beginPath(),n.moveTo(0,-7),n.lineTo(5,5),n.lineTo(-5,5),n.closePath(),n.fill(),n.restore()}}};var en=(s,t)=>({...pe[s].stock,...t}),Dl=[{id:"minato",name:"\u767D\u77F3\u30DF\u30CA\u30C8",team:"\u30EB\u30FC\u30AD\u30FC",car:"SWIFT-S",color:15909903,minWins:0,skill:.8,reward:6e4,parts:en("SWIFT-S",{muffler:"muf_sport"}),lines:{meet:"\u30B9\u30A4\u30B9\u30DD\u8210\u3081\u3093\u306A\u3088\uFF01",win:"\u304F\u3063\u202686\u3063\u3066\u3053\u3093\u306A\u901F\u3044\u306E\u304B\u3088\u3002",lose:"\u8EFD\u3055\u306F\u6B63\u7FA9\u3063\u3066\u306D\uFF01"}},{id:"yuuri",name:"\u67DA\u6728\u30E6\u30A6\u30EA",team:"\u30EB\u30FC\u30AD\u30FC",car:"RS-RS",color:11735579,minWins:0,skill:.82,reward:65e3,parts:en("RS-RS",{suspension:"sus_street",tire:"tire_high"}),lines:{meet:"\u4EBA\u99AC\u4E00\u4F53\u3001\u898B\u305B\u3066\u3042\u3052\u308B\u3002",win:"\u2026\u30B3\u30FC\u30CA\u30FC\u3067\u8A70\u3081\u304D\u308C\u306A\u304B\u3063\u305F\u3002",lose:"\u30D1\u30EF\u30FC\u3060\u3051\u3058\u3083\u66F2\u304C\u308C\u306A\u3044\u3088\uFF1F"}},{id:"souma",name:"\u771F\u58C1\u30BD\u30A6\u30DE",team:"\u897F\u53E3\u30CA\u30A4\u30C4",car:"86-GR",color:16053492,minWins:1,skill:.84,reward:8e4,parts:en("86-GR",{brake:"brk_pad",aero:"aero_lip",muffler:"muf_sport"}),lines:{meet:"\u540C\u305886\u304B\u3002\u8155\u306E\u5DEE\u3001\u30CF\u30C3\u30AD\u30EA\u3055\u305B\u3088\u3046\u305C\u3002",win:"\u540C\u3058\u8ECA\u3067\u3053\u306E\u5DEE\u2026\u8A8D\u3081\u308B\u3088\u3002",lose:"\u51FA\u76F4\u3057\u3066\u304D\u306A\u3002"}},{id:"jin",name:"\u9DF9\u91CE\u30B8\u30F3",team:"\u897F\u53E3\u30CA\u30A4\u30C4",car:"WRX-IMP",color:1916826,minWins:2,skill:.85,reward:1e5,parts:en("WRX-IMP",{tire:"tire_high"}),lines:{meet:"\u56DB\u99C6\u306E\u7ACB\u3061\u4E0A\u304C\u308A\u3001\u3064\u3044\u3066\u3053\u308C\u308B\u304B\uFF1F",win:"\u3084\u308B\u306A\u2026FR\u3067\u4FFA\u3092\u629C\u304F\u3068\u306F\u3002",lose:"\u30C8\u30E9\u30AF\u30B7\u30E7\u30F3\u304C\u9055\u3046\u3093\u3060\u3088\u3002"}},{id:"reina",name:"\u4E5D\u6761\u30EC\u30A4\u30CA",team:"Velvet",car:"SWIFT-S",color:15856113,minWins:3,skill:.87,reward:11e4,parts:en("SWIFT-S",{turbo:"tb_mid",intercooler:"ic_large",tire:"tire_high",suspension:"sus_street",muffler:"muf_sport"}),lines:{meet:"\u305F\u3060\u306E\u30B9\u30A4\u30D5\u30C8\u3060\u3068\u601D\u3063\u305F\uFF1F",win:"\u3075\u30FC\u3093\u3001\u60AA\u304F\u306A\u3044\u3058\u3083\u306A\u3044\u3002",lose:"\u898B\u305F\u76EE\u3067\u5224\u65AD\u3057\u306A\u3044\u3053\u3068\u306D\u3002"}},{id:"gou",name:"\u9ED2\u7530\u30B4\u30A6",team:"\u8981\u753A\u9023\u5408",car:"80-Supra",color:1118740,minWins:3,skill:.85,reward:12e4,parts:en("80-Supra",{muffler:"muf_sport",tire:"tire_high"}),lines:{meet:"\u76F4\u7DDA\u3067\u5168\u90E8\u3072\u3063\u304F\u308A\u8FD4\u3057\u3066\u3084\u308B\u3002",win:"\u66F2\u304C\u308A\u3067\u8CA0\u3051\u305F\u2026\u304B\u3002",lose:"\u3053\u308C\u304C2JZ\u2026\u3058\u3083\u306D\u3047\u3001S6\u306E\u30C8\u30EB\u30AF\u3060\uFF01"}},{id:"kyou",name:"\u6C37\u5BA4\u30AD\u30E7\u30A6",team:"Velvet",car:"RS-RS",color:7041400,minWins:5,skill:.9,reward:16e4,parts:en("RS-RS",{boreup:"bore_2",turbo:"tb_sc",intercooler:"ic_large",tire:"tire_high",suspension:"sus_circuit",aero:"aero_wing",brake:"brk_pad"}),lines:{meet:"\u30B9\u30FC\u30D1\u30FC\u30C1\u30E3\u30FC\u30B8\u30E3\u30FC\u306E\u7ACB\u3061\u4E0A\u304C\u308A\u3001\u5473\u308F\u3048\u3088\u3002",win:"\u307E\u3055\u304B\u2026\u7ACB\u3061\u4E0A\u304C\u308A\u3067\u4E26\u3070\u308C\u308B\u3068\u306F\u3002",lose:"\u8EFD\u3055\u3068\u904E\u7D66\u3001\u6700\u5F37\u306E\u7D44\u307F\u5408\u308F\u305B\u3060\u308D\uFF1F"}},{id:"akira",name:"\u6771\u96F2\u30A2\u30AD\u30E9",team:"\u8981\u753A\u9023\u5408",car:"86-GR",color:15230494,minWins:5,skill:.9,reward:17e4,parts:en("86-GR",{turbo:"tb_twin",intercooler:"ic_front",muffler:"muf_straight",tire:"tire_high",suspension:"sus_street",brake:"brk_big"}),lines:{meet:"\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC\u306E86\u3001\u898B\u305F\u3053\u3068\u3042\u308B\u304B\uFF1F",win:"\u30D1\u30EF\u30FC\u3060\u3051\u3058\u3083\u52DD\u3066\u306D\u3048\u304B\u2026",lose:"\u99AC\u529B\u306F\u6B63\u7FA9\u3060\uFF01"}},{id:"misaki",name:"\u690E\u540D\u30DF\u30B5\u30AD",team:"BLUE STORM",car:"WRX-IMP",color:2777814,minWins:6,skill:.91,reward:19e4,parts:en("WRX-IMP",{turbo:"tb_large",intercooler:"ic_front",boreup:"bore_2",transmission:"tm_close",tire:"tire_high",aero:"aero_full",muffler:"muf_sport"}),lines:{meet:"\u672C\u7269\u306E\u30D3\u30C3\u30B0\u30BF\u30FC\u30D3\u30F3\u3001\u4F53\u611F\u3055\u305B\u3066\u3042\u3052\u308B\u3002",win:"\u2026\u30D6\u30FC\u30B9\u30C8\u304C\u7ACB\u3061\u4E0A\u304C\u308B\u524D\u306B\u9003\u3052\u3089\u308C\u305F\u3002",lose:"\u30D6\u30FC\u30B9\u30C8\u5168\u958B\u3001\u6C17\u6301\u3061\u3044\u3044\u3067\u3057\u3087\uFF1F"}},{id:"masamune",name:"\u85E4\u5802\u30DE\u30B5\u30E0\u30CD",team:"BLUE STORM",car:"80-Supra",color:12172998,minWins:8,skill:.93,reward:24e4,parts:en("80-Supra",{turbo:"tb_large",boreup:"bore_3",muffler:"muf_straight",intercooler:"ic_front",tire:"tire_s",suspension:"sus_circuit",brake:"brk_big",aero:"aero_wing"}),lines:{meet:"\u6C60\u888B\u6700\u901F\u306E\u5EA7\u3001\u307E\u3060\u8B72\u308B\u6C17\u306F\u306A\u3044\u3002",win:"\u6642\u4EE3\u304C\u5909\u308F\u3063\u305F\u304B\u2026",lose:"10\u5E74\u65E9\u3044\u3002"}},{id:"hibiki",name:"\u795E\u697D\u30D2\u30D3\u30AD",team:"\u7121\u6240\u5C5E",car:"RS-RS",color:6958015,minWins:9,skill:.94,reward:26e4,parts:en("RS-RS",{engine:"eng_r2_13",muffler:"muf_straight",tire:"tire_s",suspension:"sus_circuit",aero:"aero_full",transmission:"tm_close",brake:"brk_big"}),lines:{meet:"9000\u56DE\u8EE2\u306E\u6B4C\u3001\u8074\u304B\u305B\u3066\u3042\u3052\u308B\u3002",win:"\u3044\u3044\u97F3\u3060\u3063\u305F\u2026\u3042\u306A\u305F\u306E\u8ECA\u3082\u3002",lose:"\u30ED\u30FC\u30BF\u30EA\u30FC\u306F\u56DE\u3057\u3066\u30CA\u30F3\u30DC\u3002"}},{id:"zero",name:"\u4E0D\u77E5\u706B\u30BC\u30ED",team:"\u6C60\u888B\u306E\u4EA1\u970A",car:"86-GR",color:1710623,minWins:10,skill:.96,reward:4e5,parts:en("86-GR",{engine:"eng_v6_30",turbo:"tb_sc",intercooler:"ic_front",boreup:"bore_3",muffler:"muf_straight",tire:"tire_s",suspension:"sus_circuit",brake:"brk_big",transmission:"tm_close",aero:"aero_full"}),lines:{meet:"\u2026\u2026\u305D\u306E86\u3001\u3069\u3053\u307E\u3067\u884C\u3051\u308B\u3002",win:"\u2026\u2026\u30AB\u30B1\u30EB\u3001\u304B\u3002\u899A\u3048\u3066\u304A\u304F\u3002",lose:"\u2026\u2026\u307E\u3060\u9060\u3044\u3002"}}],M_=Object.fromEntries(Dl.map(s=>[s.id,s]));var hs=(s,t,e)=>s<t?t:s>e?e:s;function ku(s,t,e){let n=t-s.x,i=e-s.z,r=Math.sin(s.h),o=Math.cos(s.h),a=n*r+i*o,c=n*-o+i*r,l=Math.max(4,n*n+i*i),h=2*c/l,d=Math.atan(s.L*h);a<0&&(d=Math.sign(c||1)*s.spec.steerLock);let u=s.speed,f=Math.max(.06,Math.min(s.spec.steerLock,s.L*s.spec.mu*9.81/Math.max(u*u,1)+s.spec.peakAngle*1.25));return hs(d/f,-1,1)}var us=class{constructor(t,e,n=.85){this.car=t,this.path=e,this.skill=n,this.profile=e.speedProfile(t.spec,n),this.hint=-1,this.offset=0,this.offTarget=0,this.stuck=0,this.reverseT=0,this.boost=1}update(t,e=[]){let n=this.car,i=this.path,r=i.project(n.x,n.z,this.hint);this.hint=r.i;let o=i.n,a=n.speed,c=0;for(let T of e){let A=i.project(T.x,T.z,-1),I=A.s-r.s;I<-i.length/2&&(I+=i.length),I>i.length/2&&(I-=i.length);let b=r.lat;if(I>0&&I<18+a*.4&&Math.abs(A.lat-b)<2.6){let M=i.hw[r.i];c=A.lat>0?-Math.min(M-1.5,3):Math.min(M-1.5,3)}}this.offTarget+=(c-this.offTarget)*Math.min(1,t*1.5);let l=Math.round((5+a*.42)/2),h=(r.i+l)%o,[d,u]=i.normal(h),f=Math.max(0,i.hw[h]-1.4),g=hs(this.offTarget,-f-i.lineOff[h],f-i.lineOff[h]),x=i.lx[h]+d*g,m=i.lz[h]+u*g,p=ku(n,x,m),y=1e9;for(let T=1;T<=4;T++)y=Math.min(y,this.profile[(r.i+T)%o]);y*=this.boost;let v=y-a,_=hs(.35+v*.35,0,1),R=hs(-v*.22-.05,0,1);if(R>0&&(_=0),n.slipLong>n.spec.peakRatio*1.4&&(_*=.4),n.slip>1.6&&(_*=.6),Math.abs(r.lat)>i.hw[r.i]-.5&&(_*=.7),this.reverseT>0){this.reverseT-=t,n.input={throttle:0,brake:.8,steer:-p},n.gear!==-1&&n.speed<1&&(n.gear=-1),this.reverseT<=0&&(n.gear=1);return}a<1.5&&this.started?(this.stuck+=t,this.stuck>2.2&&(this.stuck=0,this.reverseT=1.4)):this.stuck=0,n.gear<1&&(n.gear=1),n.input={throttle:_,brake:R,steer:p},this.started=!0}},Xo=class{constructor(t,e,n,i,r=13){this.car=t,this.graph=e,this.a=n,this.b=i,this.c=this.pick(i,n),this.cruise=r,this.lane=2.6,this.paused=!1,this.stuck=0,this.reverseT=0}pick(t,e){let n=(this.graph[t]||[]).map(i=>i.to).filter(i=>i!==e);return n.length?n[Math.floor(Math.random()*n.length)]:e}laneOffsetPt(t,e,n){let i=he[t],r=he[e],o=r.x-i.x,a=r.z-i.z,c=Math.hypot(o,a)||1,l=o/c,h=a/c,d=h,u=-l;return{x:i.x+o*n+d*this.lane,z:i.z+a*n+u*this.lane,len:c,fx:l,fz:h}}update(t,e=[]){let n=this.car;if(this.paused){n.input={throttle:0,brake:1,steer:0};return}let i=he[this.a],r=he[this.b],o=r.x-i.x,a=r.z-i.z,c=o*o+a*a,l=Math.sqrt(c),h=((n.x-i.x)*o+(n.z-i.z)*a)/c,d=(1-h)*l;if(d<9)return this.a=this.b,this.b=this.c,this.c=this.pick(this.b,this.a),this.update(t,e);let u=7+n.speed*.5,f;if(d>u)f=this.laneOffsetPt(this.a,this.b,h+u/l);else{let O=he[this.c],B=he[this.b],Y=Math.hypot(O.x-B.x,O.z-B.z)||1;f=this.laneOffsetPt(this.b,this.c,Math.min(1,(u-d)/Y))}let g=ku(n,f.x,f.z),x=he[this.c],m=o/l,p=a/l,y=x.x-r.x,v=x.z-r.z,_=Math.hypot(y,v)||1,R=(m*y+p*v)/_,T=R<-.5?4:R<.3?7:R<.85?10:this.cruise,A=Math.min(this.cruise,Math.sqrt(T*T+6*Math.max(0,d-8))),I=Math.sin(n.h),b=Math.cos(n.h);for(let O of e){let B=O.x-n.x,Y=O.z-n.z,H=B*I+Y*b,tt=B*-b+Y*I;H>0&&H<22&&Math.abs(tt)<2.6&&(A=Math.min(A,Math.max(0,(H-7)*.6)))}let M=A-n.speed,P=hs(.2+M*.3,0,.75),F=hs(-M*.25,0,1);if(F>.02&&(P=0),this.reverseT>0){this.reverseT-=t,n.gear!==-1&&(n.gear=-1),n.input={throttle:0,brake:.5,steer:-g},this.reverseT<=0&&(n.gear=1);return}A>3&&n.speed<.8?(this.stuck+=t,this.stuck>2.5&&(this.stuck=0,this.reverseT=1.5)):this.stuck=0,n.gear<1&&(n.gear=1),n.input={throttle:P,brake:F,steer:g}}};function Hu(s){return s.price?Math.round(s.price*.5):s.rank*45e3}function Vu(s){return[["\u6700\u9AD8\u51FA\u529B",`${s.maxPowerPS.toFixed(0)} PS / ${s.maxPowerRpm} rpm`],["\u6700\u5927\u30C8\u30EB\u30AF",`${s.maxTorque.toFixed(0)} N\xB7m / ${s.maxTorqueRpm} rpm`],["\u8ECA\u4E21\u91CD\u91CF",`${s.mass.toFixed(0)} kg`],["\u30D1\u30EF\u30FC\u30A6\u30A7\u30A4\u30C8\u30EC\u30B7\u30AA",`${s.pwr.toFixed(2)} kg/PS`],["\u30B0\u30EA\u30C3\u30D7",s.mu.toFixed(2)],["\u30C0\u30A6\u30F3\u30D5\u30A9\u30FC\u30B9\u4FC2\u6570",(s.clF+s.clR).toFixed(2)],["\u30EC\u30D6\u30EA\u30DF\u30C3\u30C8",`${s.redline} rpm`],["\u6226\u95D8\u529B",String(s.rating)]]}function Gu(s,t,e){let n=z("div",{class:"screen shop"}),i="equip",r=0,o=[],a=cs(t),c=g=>{let x=as.find(p=>p.id===g),m=sr.filter(p=>p.cat===g&&(or(t,p.id)>0||a.equipped[g]===p.id)).map(p=>p.id);return x.required||m.unshift(null),m},l=(g,x)=>{let m=z("div",{class:"stats"}),p=Vu(g),y=x?Vu(x):null;return p.forEach(([v,_],R)=>{let T=y&&y[R][1]!==_;m.appendChild(z("div",{class:"stat"+(T?" diff":"")},z("span",{},v),z("b",{},_)))}),m},h=()=>{n.innerHTML="",o=[];let g=Nn(a.carId,a.equipped),x=z("div",{class:"tabs"},...[["equip","\u30D1\u30FC\u30C4\u4EA4\u63DB"],["buy","\u30D1\u30FC\u30C4\u8CFC\u5165"],["sell","\u30D1\u30FC\u30C4\u58F2\u5374"]].map(([y,v])=>z("button",{class:"tab"+(i===y?" on":""),onclick:()=>{i=y,r=0,h()}},v))),m=z("div",{class:"part-list"});if(i==="equip")for(let y of as){let v=c(y.id),_=a.equipped[y.id],R=_?We[_]:null,T=I=>{let b=v.indexOf(_),M=v[(b+I+v.length)%v.length];a.equipped[y.id]=M,s.audio.beep(720,.04,.08),h()},A=z("div",{class:"part-row"},z("span",{class:"cat"},y.name),z("button",{class:"arrow",onclick:()=>T(-1)},"\u25C0"),z("span",{class:"pname"},R?R.name:"\uFF08\u306A\u3057\uFF09",z("small",{},R?`\u3000${rr(R.rank)}\u3000${R.desc}`:"")),z("button",{class:"arrow",onclick:()=>T(1)},"\u25B6"),z("span",{class:"cnt"},`${v.length-(y.required?0:1)}\u7A2E\u6240\u6301`));o.push({row:A,left:()=>T(-1),right:()=>T(1),act:()=>T(1)}),m.appendChild(A)}else if(i==="buy")for(let y of sr.filter(v=>v.price)){let v=t.money>=y.price,_=()=>{if(t.money<y.price){s.audio.beep(220,.12,.1);return}t.money-=y.price,ko(t,y.id),s.audio.beep(1200,.08,.12),h()},R=z("div",{class:"part-row"+(v?"":" dim")},z("span",{class:"cat"},ir[y.cat]),z("span",{class:"pname"},y.name,z("small",{},`\u3000${y.desc}`)),z("span",{class:"cnt"},`\u6240\u6301 ${t.owned[y.id]||0}`),z("button",{class:"buy",onclick:_},ln(y.price)));o.push({row:R,act:_}),m.appendChild(R)}else{let y=sr.filter(v=>or(t,v.id)>0);y.length||m.appendChild(z("div",{class:"hint"},"\u58F2\u5374\u3067\u304D\u308B\uFF08\u672A\u88C5\u7740\u306E\uFF09\u30D1\u30FC\u30C4\u306F\u3042\u308A\u307E\u305B\u3093"));for(let v of y){let _=()=>{or(t,v.id)<=0||(t.owned[v.id]-=1,t.money+=Hu(v),s.audio.beep(900,.08,.12),h())},R=z("div",{class:"part-row"},z("span",{class:"cat"},ir[v.cat]),z("span",{class:"pname"},v.name,z("small",{},`\u3000${rr(v.rank)}`)),z("span",{class:"cnt"},`\u672A\u88C5\u7740 ${or(t,v.id)}`),z("button",{class:"buy",onclick:_},"\u58F2\u5374 "+ln(Hu(v))));o.push({row:R,act:_}),m.appendChild(R)}}let p=z("button",{class:"menu-item small"},"\u30B7\u30E7\u30C3\u30D7\u3092\u51FA\u308B");p.onclick=()=>f(),r=Math.min(r,o.length-1),n.appendChild(Ue(`TUNE SHOP \u2014 ${pe[a.carId].name}`,z("div",{class:"shop-head"},z("span",{},`\u6240\u6301\u91D1 ${ln(t.money)}`),z("span",{class:"hint"},"Tab:\u30BF\u30D6\u5207\u66FF\u3000\u2191\u2193:\u9078\u629E\u3000\u2190\u2192:\u30D1\u30FC\u30C4\u5909\u66F4\u3000Enter:\u8CFC\u5165/\u58F2\u5374\u3000Esc:\u51FA\u308B")),x,z("div",{class:"shop-body"},m,l(g,Nn(a.carId,pe[a.carId].stock))),p)),d()},d=()=>o.forEach((g,x)=>g.row.classList.toggle("sel",x===r)),u=s.input.onKey(g=>{if(n.isConnected)if(g.code==="Tab"){let x=["equip","buy","sell"];i=x[(x.indexOf(i)+1)%3],r=0,h()}else g.code==="ArrowDown"&&o.length?(r=(r+1)%o.length,d(),o[r].row.scrollIntoView({block:"nearest"})):g.code==="ArrowUp"&&o.length?(r=(r-1+o.length)%o.length,d(),o[r].row.scrollIntoView({block:"nearest"})):g.code==="ArrowLeft"?o[r]?.left?.():g.code==="ArrowRight"?o[r]?.right?.():g.code==="Enter"?o[r]?.act?.():g.code==="Escape"&&f()}),f=()=>{u(),n.remove(),e&&e()};h(),s.ui.appendChild(n)}var Mi=class{constructor(t,e=0){this.path=t,this.hint=-1,this.dist=e,this.prevS=null,this.lapStart=0,this.lap=0,this.sector=0,this.sectorStart=0,this.laps=[],this.sectors=[],this.curSectors=[],this.started=!1}update(t,e){let n=this.path,i=n.project(t.x,t.z,this.hint);if(this.hint=i.i,this.lat=i.lat,this.prevS==null)return this.prevS=i.s,null;let r=i.s-this.prevS;if(r<-n.length/2&&(r+=n.length),r>n.length/2&&(r-=n.length),this.prevS=i.s,Math.abs(r)>30&&(r=0),this.dist+=r,!this.started)return null;let o=null,a=n.length,c=this.dist-this.lap*a;if(this.sector<2&&c>=(this.sector+1)*a/3&&(this.curSectors.push(e-this.sectorStart),this.sectorStart=e,this.sector++,o={type:"sector",idx:this.sector,time:this.curSectors[this.curSectors.length-1]}),c>=a){let l=e-this.lapStart;this.curSectors.push(e-this.sectorStart),this.laps.push(l),this.sectors.push(this.curSectors),this.curSectors=[],this.lap++,this.sector=0,this.lapStart=e,this.sectorStart=e,o={type:"lap",lap:this.lap,time:l}}return o}start(t){this.started=!0,this.lapStart=t,this.sectorStart=t}get best(){return this.laps.length?Math.min(...this.laps):null}};var ds=class{constructor(t,e,n){this.game=t,this.hud=e,this.onGo=n,this.t=3.6,this.last=4,this.done=!1}update(t){if(this.done)return;this.t-=t;let e=Math.ceil(this.t);e!==this.last&&e<=3&&e>=1&&(this.hud.flash(String(e),.9),this.game.audio.beep(600,.18,.25)),this.t<=0&&(this.done=!0,this.hud.flash("GO!",1),this.game.audio.beep(1200,.4,.3),this.onGo()),this.last=e}};function qo(s,t,e,n){let i=Ue(t),r=z("div",{class:"screen dialog"},i),o=()=>{s.input.pressed.clear(),a.destroy(),r.remove()},a=new Be(s,e.map(c=>({...c,action:()=>{o(),c.action()}})),{onBack:()=>{o(),n()}});return i.appendChild(a.root),s.ui.appendChild(r),o}var Yo=200,$o=class{constructor(t,e){this.game=t,this.opts=e}enter(){let t=this.game,{rival:e,layout:n}=this.opts,i=Si(n);this.path=i,t.audio.playBgm("battle"),t.world.setCourse(i),t.rig.setGallerySpots(i),this.session=new ti(t,{corridor:i.corridor,path:i});let r=cs(t.story),o=this.session.addCar({carId:r.carId,equipped:r.equipped,color:r.color,isPlayer:!0,name:Ge.name}),a=this.session.addCar({carId:e.car,equipped:e.parts,color:e.color,name:e.name}),c=i.hw[0],l=Math.min(2.4,c-1.4),h=i.posAt(-9,l),d=i.posAt(-9,-l);o.car.place(h.x,h.z,h.h,0),a.car.place(d.x,d.z,d.h,0),a.ai=new us(a.car,i,e.skill),this.P=o,this.R=a,this.tp=new Mi(i,-9),this.tr=new Mi(i,-9),this.laps=n.course.laps,this.total=this.laps*i.length,this.session.frozen=!0,this.session.controlsEnabled=!1,t.mirrorModel=o.model,t.rig.mode=t.rig.mode==="gallery"?"chase":t.rig.mode,t.rig.reset(),this.hud=new yn(t.ui),this.hud.setMapCourse(i),this.t=0,this.raceT=0,this.state="intro",this.result=null,this.introT=2.2,this.hud.flash(`VS ${e.name}`,2.2,`${n.name}\u3000${this.laps}LAP`),this.countdown=new ds(t,this.hud,()=>{this.state="race",this.session.frozen=!1,this.session.controlsEnabled=!0,this.tp.start(this.raceT),this.tr.start(this.raceT)})}update(t){let e=this.game,n=this.session;if(this.paused)return;if(e.input.hitCode("Escape")&&this.state!=="result"){this.pause();return}this.state==="intro"&&(this.introT-=t,this.introT<=0&&(this.state="count")),this.state==="count"&&this.countdown.update(t),(this.state==="race"||this.state==="finish")&&(this.raceT+=t);let i=this.tp.dist-this.tr.dist;if(this.R.ai&&(this.R.ai.boost=i>80?1.03:i<-100?.985:1),n.update(t),this.tp.update(this.P.car,this.raceT),this.tr.update(this.R.car,this.raceT),e.input.hit("view")&&this.hud.setView(vn[e.rig.cycle(["chase","cockpit","hood"])]),e.input.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",e.rig.update(t,this.P.model,this.P.car),n.updateAudio(this.P),this.state==="race"){let c=null;this.tp.dist>=this.total?c={win:!0,how:"finish"}:this.tr.dist>=this.total?c={win:!1,how:"finish"}:i>=Yo?c={win:!0,how:"snap"}:i<=-Yo&&(c={win:!1,how:"snap"}),c&&(this.state="finish",this.result=c,this.finishT=2.5,this.session.controlsEnabled=!1,this.P.car.input={throttle:0,brake:.3,steer:0},this.hud.flash(c.win?"YOU WIN!":"YOU LOSE\u2026",2.5,c.how==="snap"?c.win?"\u30E9\u30A4\u30D0\u30EB\u3092\u5F15\u304D\u96E2\u3057\u305F\uFF01":"\u5F15\u304D\u96E2\u3055\u308C\u305F\u2026":"FINISH"),e.audio.beep(c.win?1320:330,.5,.3))}this.state==="finish"&&(this.finishT-=t,this.finishT<=0&&(this.state="result",this.showResult())),this.hud.update(t),this.hud.drawTach(this.P.car);let r=Math.min(this.laps,Math.max(1,Math.floor(this.tp.dist/this.path.length)+1)),o=i>=0;this.hud.tc.innerHTML=`<div class="lap">LAP <b>${r}</b>/${this.laps}</div><div class="time">${se(this.raceT)}</div>`;let a=Math.max(-1,Math.min(1,i/Yo));this.hud.tr.innerHTML=`<div class="pos ${o?"p1":"p2"}">${o?"1st":"2nd"}</div>
      <div class="gap">${o?"+":"\u2212"}${Math.abs(i).toFixed(0)} m</div>
      <div class="gapbar"><div class="mid"></div><div class="fill" style="left:${50+Math.min(0,a)*50}%;width:${Math.abs(a)*50}%;background:${o?"#33e1ff":"#ff4d6d"}"></div></div>
      <div class="rival">${this.opts.rival.name}\uFF08${pe[this.opts.rival.car].name}\uFF09</div>`,this.hud.tl.innerHTML=`<div class="who">${this.opts.layout.name}</div><div class="hint">${Yo}m\u5F15\u304D\u96E2\u3057\u3067\u52DD\u5229</div>`,this.hud.drawMap([{x:this.R.car.x,z:this.R.car.z,h:this.R.car.h,color:"#ff4d6d"},{x:this.P.car.x,z:this.P.car.z,h:this.P.car.h,color:"#33e1ff"}])}pause(){let t=this.game;this.paused=!0,qo(t,"PAUSE",[{label:"\u518D\u958B",action:()=>{this.paused=!1}},{label:"\u30EA\u30BF\u30A4\u30A2",sub:"\u6557\u5317\u6271\u3044\u3067\u8857\u306B\u623B\u308A\u307E\u3059",action:()=>{this.paused=!1,this.result={win:!1,how:"retire"},this.state="result",this.showResult()}}],()=>{this.paused=!1})}showResult(){let t=this.game,e=t.story,n=this.opts.rival,i=this.result.win;this.session.controlsEnabled=!1,this.session.frozen=!0,i?(e.wins++,e.money+=n.reward,e.defeated[n.id]=(e.defeated[n.id]||0)+1):e.losses++;let r=Ue(i?"BATTLE WIN":"BATTLE LOSE",z("div",{class:"enc-head"},z("span",{class:"enc-team"},n.team),z("span",{class:"enc-name"},n.name)),z("div",{class:"enc-line"},`\u300C${i?n.lines.win:n.lines.lose}\u300D`),z("div",{class:"hint"},`\u30BF\u30A4\u30E0 ${se(this.raceT)}\u3000${this.result.how==="snap"?"\uFF08\u3061\u304E\u308A\u6C7A\u7740\uFF09":this.result.how==="retire"?"\uFF08\u30EA\u30BF\u30A4\u30A2\uFF09":""}`)),o=z("div",{class:"screen dialog result"},r);t.ui.appendChild(o);let a=c=>{t.transition(()=>t.setMode(new fs(t,{returnPos:this.opts.returnPos,message:c})))};if(i){r.appendChild(z("div",{class:"reward"},`\u8CDE\u91D1 ${ln(n.reward)} \u7372\u5F97\uFF01`)),r.appendChild(z("div",{class:"hint"},"\u6226\u5229\u54C1\uFF1A\u30E9\u30A4\u30D0\u30EB\u306E\u30DE\u30B7\u30F3\u304B\u3089\u30D1\u30FC\u30C4\u30921\u3064\u9078\u3093\u3067\u6301\u3061\u5E30\u308C\u307E\u3059"));let c=Object.entries(n.parts).filter(([,h])=>h).map(([h,d])=>({cat:h,p:We[d]})),l=new Be(t,c.map(({cat:h,p:d})=>({label:`${ir[h]}\uFF1A${d.name}`,sub:`${rr(d.rank)}\u3000${d.desc}\u3000\uFF08\u6240\u6301 ${e.owned[d.id]||0}\uFF09`,action:()=>{ko(e,d.id),l.destroy(),a(`${d.name} \u3092\u624B\u306B\u5165\u308C\u305F\uFF01`)}})),{className:"scroll"});r.appendChild(l.root)}else{let c=new Be(t,[{label:"\u8857\u306B\u623B\u308B",action:()=>{c.destroy(),a("\u6B21\u306F\u8CA0\u3051\u306A\u3044\u2026")}}]);r.appendChild(c.root)}}exit(){this.session.dispose(),this.hud.destroy(),this.game.world.setCourse(null),this.game.mirrorModel=null}};var Ul={};function Si(s){return Ul[s.key]||(Ul[s.key]=new Po(s)),Ul[s.key]}var Wu=4,ps=new L,fs=class s{constructor(t,e={}){this.game=t,this.opts=e}enter(){let t=this.game,e=t.story;t.audio.playBgm("town"),t.world.setCourse(null),this.graph=bu(),this.session=new ti(t,{corridor:t.world.corridor});let n=cs(e),i=this.session.addCar({carId:n.carId,equipped:n.equipped,color:n.color,isPlayer:!0,name:Ge.name}),r=this.opts.returnPos||e.pos;if(r)i.car.place(r.x,r.z,r.h,0);else{let o=he[Sl.node];i.car.place(o.x-2.5,o.z+22,Sl.heading,0)}i.color="#33e1ff",t.mirrorModel=i.model,t.rig.mode=this.opts.view||"chase",t.rig.reset(),this.hud=new yn(t.ui),this.hud.setMapCourse(null),this.labels=z("div",{class:"labels"}),t.ui.appendChild(this.labels),this.dialog=null,this.paused=!1,this.spawnT=0,this.encounter=null,this.poiCool=0;for(let o=0;o<Wu;o++)this.spawnRival(!0);this.hud.flash(this.opts.message||"\u897F\u6C60\u888B",2.2,this.opts.message?"":"\u30E9\u30A4\u30D0\u30EB\u306E\u5F8C\u308D\u3067\u30D1\u30C3\u30B7\u30F3\u30B0\uFF08"+Xu(t,"flash")+"\uFF09\u3057\u3066\u30D0\u30C8\u30EB\u3092\u6311\u3081\uFF01")}availableRivals(){let t=this.game.story.wins;return Dl.filter(e=>e.minWins<=t)}spawnRival(t=!1){let e=this.session,n=new Set(e.entries.filter(l=>l.rival).map(l=>l.rival.id)),i=this.availableRivals().filter(l=>!n.has(l.id));if(!i.length)return;let r=this.game.story.defeated;i.sort((l,h)=>(r[l.id]||0)-(r[h.id]||0)+(Math.random()-.5)*.8);let o=i[0],a=e.player.car,c=[];for(let[l,h]of Object.entries(this.graph))for(let d of h)c.push([l,d.to]);for(let l=0;l<40;l++){let[h,d]=c[Math.floor(Math.random()*c.length)],u=he[h],f=he[d],g=.3+Math.random()*.4,x=u.x+(f.x-u.x)*g,m=u.z+(f.z-u.z)*g,p=Math.hypot(x-a.x,m-a.z);if(p<(t?110:170)||p>650||e.entries.some(T=>Math.hypot(T.car.x-x,T.car.z-m)<30))continue;let y=Math.hypot(f.x-u.x,f.z-u.z),v=(f.x-u.x)/y,_=(f.z-u.z)/y,R=e.addCar({carId:o.car,equipped:o.parts,color:o.color,name:o.name});R.car.place(x+_*2.6,m-v*2.6,Math.atan2(v,_),9),R.ai=new Xo(R.car,this.graph,h,d,11+Math.random()*5),R.rival=o,R.rating=Nn(o.car,o.parts).rating,R.mapColor="#ff4d6d",R.label=z("div",{class:"rival-tag"},z("b",{},o.name),z("span",{},`${pe[o.car].name}\u3000\u6226\u95D8\u529B ${R.rating}`)),this.labels.appendChild(R.label);return}}removeRival(t){t.label?.remove(),this.session.removeCar(t)}update(t){let e=this.game,n=this.session,i=e.story,r=e.input;if(this.paused)return;if(i.playtime+=t,r.hitCode("Escape")&&!this.dialog){this.pause();return}n.update(t);let o=n.player;r.hit("view")&&this.hud.setView(vn[e.rig.cycle(["chase","cockpit","hood"])]),r.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",e.rig.update(t,o.model,o.car),n.updateAudio(o),this.spawnT-=t;for(let h of n.entries.filter(d=>d.rival))Math.hypot(h.car.x-o.car.x,h.car.z-o.car.z)>750&&!this.encounter&&this.removeRival(h);if(this.spawnT<=0&&n.entries.filter(h=>h.rival).length<Wu&&(this.spawnRival(),this.spawnT=4),r.hit("flash")&&!this.encounter&&!this.dialog){o.flash=.35;let h=this.findFlashTarget();h&&(this.encounter={e:h,t:.7})}this.encounter&&!this.dialog&&(this.encounter.t-=t,this.encounter.t<=0&&this.openEncounter(this.encounter.e)),this.poiCool-=t;let a=null;for(let h of e.world.poiMarkers)Math.hypot(h.x-o.car.x,h.z-o.car.z)<8&&(a=h);if(a&&!this.dialog){let h=Math.abs(o.car.vu)<4;this.hud.prompt.textContent=h?`${Xu(e,"interact")}\uFF1A${a.poi.type==="shop"?"\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u30B7\u30E7\u30C3\u30D7\u306B\u5165\u308B":"\u30BB\u30FC\u30D6\u3059\u308B\uFF08GS\uFF09"}`:`${a.poi.name}\u3000\u2014 \u505C\u8ECA\u3057\u3066\u304F\u3060\u3055\u3044`,this.hud.prompt.style.display="block",h&&r.hit("interact")&&this.poiCool<=0&&(a.poi.type==="shop"?this.openShop():this.openSave(a))}else this.dialog||(this.hud.prompt.style.display="none");this.hud.update(t),this.hud.drawTach(o.car),this.hud.tl.innerHTML=`<div class="who">${Ge.name}\u3000<span>${pe[o.carId].name}</span></div><div>\u6240\u6301\u91D1 <b>${ln(i.money)}</b></div><div>\u6226\u7E3E <b>${i.wins}</b>\u52DD ${i.losses}\u6557</div>`;let c=n.entries.map(h=>({x:h.car.x,z:h.car.z,h:h.car.h,color:h.isPlayer?"#33e1ff":"#ff4d6d"})),l=e.world.poiMarkers.map(h=>({x:h.x,z:h.z,color:h.poi.type==="shop"?"#ff3b6b":"#2ee6a8",label:h.poi.type==="shop"?"SHOP":"GS"}));this.hud.drawMap(c,l),this.updateLabels()}findFlashTarget(){let t=this.session.player.car,[e,n]=t.fwd(),i=null,r=1e9;for(let o of this.session.entries){if(!o.rival)continue;let a=o.car.x-t.x,c=o.car.z-t.z,l=Math.hypot(a,c);l>75||(a*e+c*n)/(l||1)<.8||l<r&&(r=l,i=o)}return i}updateLabels(){let e=this.game.rig.camera,n=this.session.player.car;for(let i of this.session.entries){if(!i.label)continue;let r=Math.hypot(i.car.x-n.x,i.car.z-n.z);ps.set(i.car.x,2.4,i.car.z).project(e);let o=r<140&&ps.z<1&&Math.abs(ps.x)<1.1&&Math.abs(ps.y)<1.1;i.label.style.display=o?"block":"none",o&&(i.label.style.left=`${(ps.x+1)/2*window.innerWidth}px`,i.label.style.top=`${(1-ps.y)/2*window.innerHeight}px`,i.label.style.opacity=String(Math.max(.3,1-r/140)),i.label.classList.toggle("near",r<75))}}pickLayout(t){let e=null;for(let n of Ml){let i=Qs.find(c=>c.key===`${n.id}_f`),r=Si(i),o=r.project(t.x,t.z,-1),a=o.dist;if(!e||a<e.d){let[c,l]=t.fwd(),h=c*r.tx[o.i]+l*r.tz[o.i];e={d:a,course:n,reverse:h<0}}}return Qs.find(n=>n.key===`${e.course.id}_${e.reverse?"r":"f"}`)}openEncounter(t){let e=this.game,n=this.session;t.flash=1,t.ai.paused=!0,n.controlsEnabled=!1;let i=t.rival,r=this.pickLayout(n.player.car),o=n.player.car.spec,a=Ue(null,z("div",{class:"enc-head"},z("span",{class:"enc-team"},i.team),z("span",{class:"enc-name"},i.name)),z("div",{class:"enc-car"},`${pe[i.car].name}\u3000\uFF08${pe[i.car].ref}\uFF09`),z("div",{class:"enc-line"},`\u300C${i.lines.meet}\u300D`),z("div",{class:"enc-vs"},z("div",{},z("small",{},"YOU"),z("b",{},String(o.rating))),z("div",{class:"vs"},"VS"),z("div",{},z("small",{},"RIVAL"),z("b",{},String(t.rating)))),z("div",{class:"enc-course"},`COURSE\uFF1A${r.name}\u3000${r.course.laps}\u5468`,z("br"),z("small",{},r.course.desc)),z("div",{class:"hint"},"\u5148\u306B\u30B4\u30FC\u30EB\u3059\u308B\u304B\u3001200m\u4EE5\u4E0A\u5F15\u304D\u96E2\u305B\u3070\u52DD\u5229")),c=z("div",{class:"screen dialog encounter"},a),l=()=>{e.input.pressed.clear(),h.destroy(),c.remove(),this.dialog=null,this.encounter=null,n.controlsEnabled=!0,t.ai.paused=!1,this.poiCool=.5},h=new Be(e,[{label:"\u30D0\u30C8\u30EB\u958B\u59CB",action:()=>{l(),this.startBattle(t,r)}},{label:"\u3084\u3081\u3066\u304A\u304F",action:()=>l()}],{onBack:()=>l()});a.appendChild(h.root),e.ui.appendChild(c),this.dialog=c}startBattle(t,e){let n=this.game,i=this.session.player.car,r={x:i.x,z:i.z,h:i.h};n.transition(()=>n.setMode(new $o(n,{rival:t.rival,layout:e,returnPos:r})))}openShop(){let t=this.game;this.session.controlsEnabled=!1,this.session.frozen=!0,this.dialog=!0,this.hud.prompt.style.display="none",Gu(t,t.story,()=>{let e=this.session.player,n={x:e.car.x,z:e.car.z,h:e.car.h};t.setMode(new s(t,{returnPos:n,message:"\u30BB\u30C3\u30C6\u30A3\u30F3\u30B0\u5B8C\u4E86",view:t.rig.mode}))})}openSave(t){let e=this.game,n=this.session;n.controlsEnabled=!1,n.frozen=!0;let i=Ue("GS \u2014 \u30BB\u30FC\u30D6\u30DD\u30A4\u30F3\u30C8",z("div",{class:"hint"},`${t.poi.name}`),z("div",{},"\u73FE\u5728\u306E\u9032\u884C\u72B6\u6CC1\u3092\u30BB\u30FC\u30D6\u3057\u307E\u3059\u304B\uFF1F")),r=z("div",{class:"screen dialog"},i),o=c=>{e.input.pressed.clear(),a.destroy(),r.remove(),this.dialog=null,n.controlsEnabled=!0,n.frozen=!1,this.poiCool=1,c&&this.hud.flash(c,1.6)},a=new Be(e,[{label:"\u30BB\u30FC\u30D6\u3059\u308B",action:()=>{let c=n.player.car;e.story.pos={x:c.x,z:c.z,h:c.h},o(Pu(e.story)?"\u30BB\u30FC\u30D6\u3057\u307E\u3057\u305F":"\u30BB\u30FC\u30D6\u306B\u5931\u6557\u3057\u307E\u3057\u305F")}},{label:"\u3084\u3081\u308B",action:()=>o()}],{onBack:()=>o()});i.appendChild(a.root),e.ui.appendChild(r),this.dialog=r}pause(){let t=this.game;this.paused=!0;let e=t.story,n=Ue("PAUSE",z("div",{class:"hint"},`\u6240\u6301\u91D1 ${ln(e.money)}\u3000/\u3000${e.wins}\u52DD${e.losses}\u6557\u3000/\u3000\u30D7\u30EC\u30A4\u6642\u9593 ${Math.floor(e.playtime/60)}\u5206`),z("div",{class:"hint"},"\u30BB\u30FC\u30D6\u306FGS\uFF08ENEOS\u30BB\u30EB\u30D5\u6C60\u888B\uFF09\u3067\u884C\u3048\u307E\u3059")),i=z("div",{class:"screen dialog"},n),r=()=>{t.input.pressed.clear(),o.destroy(),i.remove(),this.paused=!1},o=new Be(t,[{label:"\u518D\u958B",action:r},{label:"\u30BF\u30A4\u30C8\u30EB\u3078\u623B\u308B",sub:"\u672A\u30BB\u30FC\u30D6\u306E\u9032\u884C\u306F\u5931\u308F\u308C\u307E\u3059",action:()=>{o.destroy(),t.transition(()=>t.setMode(new Fn(t)))}}],{onBack:r});n.appendChild(o.root),t.ui.appendChild(i)}exit(){this.session.dispose(),this.hud.destroy(),this.game.mirrorModel=null}};function Xu(s,t){return(s.settings.keys[t]||"").replace(/^Key/,"").replace(/^Digit/,"")}var qu=["chase","cockpit","hood","gallery"],ms=class{constructor(t,e){this.game=t,this.opts=e}enter(){let t=this.game,{layout:e,replay:n}=this.opts;this.path=Si(e),t.world.setCourse(this.path),t.rig.setGallerySpots(this.path),t.audio.playBgm(null);let i=Nn(n.carId,n.equipped);this.model=Vo(pe[n.carId],n.color,{aero:n.equipped.aero,wing:n.equipped.aero==="aero_wing"||n.equipped.aero==="aero_full"?"gt":void 0}),t.world.scene.add(this.model);let r=i.wheelbase,o=r*i.frontWeight;this.ghost={spec:i,a:r-o,b:o,x:0,z:0,h:0,pitch:0,roll:0,steer:0,spinF:0,spinR:0,rpm:0,vu:0,vv:0,gear:1,boost:0,slip:0,input:{brake:0,throttle:0,steer:0},get speed(){return Math.abs(this.vu)},right(){return[-Math.cos(this.h),Math.sin(this.h)]}},this.engine=t.audio.createEngine(i),this.t=0,this.speed=1,this.playing=!0,this.duration=n.frames/n.rate,t.rig.mode="chase",t.rig.reset(),t.mirrorModel=this.model,this.hud=new yn(t.ui),this.hud.setMapCourse(this.path),this.hud.flash("REPLAY",1.5,e.name),this.hud.setView(vn[t.rig.mode])}frame(t){let e=this.opts.replay,n=Math.min(e.frames-1.001,Math.max(0,t*e.rate)),i=Math.floor(n),r=n-i,o=e.data,a=e.stride,c=i*a,l=(i+1)*a,h=f=>o[c+f]+(o[l+f]-o[c+f])*r,d=this.ghost;d.x=h(0),d.z=h(1);let u=o[l+2]-o[c+2];u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2),d.h=o[c+2]+u*r,d.pitch=h(3),d.roll=h(4),d.steer=h(5),d.spinF=h(6),d.spinR=h(7),d.rpm=h(8),d.vu=h(9),d.gear=o[c+10],d.input.brake=o[c+11],d.input.throttle=o[c+12],d.boost=h(13),d.slip=h(14)}update(t){let e=this.game,n=e.input;if(n.hitCode("Escape")){e.transition(()=>e.setMode(this.opts.back()));return}n.hitCode("Space")&&(this.playing=!this.playing),n.hitCode("ArrowRight")&&(this.t=Math.min(this.duration,this.t+5)),n.hitCode("ArrowLeft")&&(this.t=Math.max(0,this.t-5)),n.hitCode("ArrowUp")&&(this.speed=Math.min(4,this.speed*2)),n.hitCode("ArrowDown")&&(this.speed=Math.max(.25,this.speed/2)),n.hit("view")&&this.hud.setView(vn[e.rig.cycle(qu)]);for(let r=1;r<=4;r++)n.hitCode("Digit"+r)&&(e.rig.mode=qu[r-1],e.rig.reset(),e.rig.galleryIdx=-1,this.hud.setView(vn[e.rig.mode]));n.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",this.playing&&(this.t+=t*this.speed),this.t>=this.duration&&(this.t=0,e.rig.reset()),this.frame(this.t),Go(this.model,this.ghost),e.rig.update(t,this.model,this.ghost),e.audio.updateEngine(this.engine,this.ghost,this.playing?1:0,0),this.hud.update(t),this.hud.drawTach(this.ghost);let i=this.opts.record;this.hud.tc.innerHTML=`<div class="lap">REPLAY ${this.playing?"\u25B6":"\u275A\u275A"} \xD7${this.speed}</div><div class="time">${se(this.t)} / ${se(this.duration)}</div>`,this.hud.tr.innerHTML=i?`<div class="lbl">BEST</div><div class="big">${se(i.best)}</div><div class="laps">${i.laps.map((r,o)=>`<div>L${o+1} ${se(r)}</div>`).join("")}</div>`:"",this.hud.tl.innerHTML=`<div class="who">${this.opts.layout.name}</div><div class="hint">\u8996\u70B9 ${Oo(e.settings.keys.view)} / 1-4\u3000\u4E00\u6642\u505C\u6B62 Space\u3000\u65E9\u9001\u308A/\u5DFB\u623B\u3057 \u2190\u2192\u3000\u901F\u5EA6 \u2191\u2193\u3000\u7D42\u4E86 Esc</div>`,this.hud.drawMap([{x:this.ghost.x,z:this.ghost.z,h:this.ghost.h,color:"#33e1ff"}])}exit(){let t=this.game;t.world.scene.remove(this.model),t.audio.destroyEngine(this.engine),this.hud.destroy(),t.world.setCourse(null),t.mirrorModel=null}};var Zo=3,Ko=class s{constructor(t,e){this.game=t,this.opts=e}enter(){let t=this.game,{layout:e,carId:n,equipped:i,color:r,kind:o}=this.opts;this.ta=o==="ta";let a=Si(e);this.path=a,t.audio.playBgm(this.ta?"battle":"town"),t.world.setCourse(a),t.rig.setGallerySpots(a),this.session=new ti(t,{corridor:a.corridor,path:a});let c=this.session.addCar({carId:n,equipped:i,color:r,isPlayer:!0}),l=a.posAt(-8,0);c.car.place(l.x,l.z,l.h,0),this.P=c,this.tracker=new Mi(a,-8),this.recorder=this.ta?new Wo(30):null,t.mirrorModel=c.model,t.rig.mode==="gallery"&&(t.rig.mode="chase"),t.rig.reset(),this.hud=new yn(t.ui),this.hud.setMapCourse(a),this.t=0,this.state="count",this.session.frozen=!0,this.session.controlsEnabled=!1;let h=ls()[e.key]?.[0];this.recordBest=h?h.best:null,this.lastLap=null,this.sectorFlash="",this.hud.flash(this.ta?"TIME ATTACK":"FREE RUN",1.4,e.name),this.countdown=new ds(t,this.hud,()=>{this.state="run",this.session.frozen=!1,this.session.controlsEnabled=!0,this.tracker.start(this.t)})}update(t){let e=this.game;if(this.paused)return;if(e.input.hitCode("Escape")&&this.state!=="done"){this.pause();return}this.state==="count"&&this.countdown.update(t),this.state==="run"&&(this.t+=t),this.session.update(t),this.recorder&&this.state==="run"&&this.recorder.sample(t,this.P.car);let n=this.tracker.update(this.P.car,this.t);n&&this.state==="run"&&this.onEvent(n),e.input.hit("view")&&this.hud.setView(vn[e.rig.cycle(["chase","cockpit","hood"])]),e.input.hit("mirror")&&(e.mirrorOn=!e.mirrorOn),this.hud.mirrorFrame.style.display=e.mirrorOn?"block":"none",e.rig.update(t,this.P.model,this.P.car),this.session.updateAudio(this.P);let i=this.tracker;this.hud.update(t),this.hud.drawTach(this.P.car);let r=this.state==="run"?this.t-i.lapStart:0,o=this.ta?`LAP <b>${Math.min(Zo,i.lap+1)}</b>/${Zo}`:`LAP <b>${i.lap+1}</b>`;this.hud.tc.innerHTML=`<div class="lap">${o}</div><div class="time">${se(r)}</div><div class="sectors">${this.sectorFlash}</div>`;let a=i.laps.map((c,l)=>`<div class="${c===i.best?"best":""}">L${l+1} ${se(c)}</div>`).slice(-5).join("");this.hud.tr.innerHTML=`<div class="lbl">BEST</div><div class="big">${se(i.best)}</div>${this.ta?`<div class="lbl">RECORD ${se(this.recordBest)}</div>`:""}<div class="laps">${a}</div>`,this.hud.tl.innerHTML=`<div class="who">${this.opts.layout.name}</div><div class="hint">${this.ta?"TIME ATTACK "+Zo+"\u5468":"FREE RUN\u3000Esc\u3067\u30E1\u30CB\u30E5\u30FC"}</div>`,this.hud.drawMap([{x:this.P.car.x,z:this.P.car.z,h:this.P.car.h,color:"#33e1ff"}])}onEvent(t){let e=this.tracker;if(t.type==="sector"){let n=t.idx-1,i=e.sectors.map(a=>a[n]).filter(a=>a!=null),r=i.length?Math.min(...i):null,o=r!=null?t.time-r:null;this.sectorFlash=`S${t.idx} ${se(t.time)} ${o!=null?`<span class="${o<=0?"neg":"pos"}">${o<=0?"\u2212":"+"}${Math.abs(o).toFixed(3)}</span>`:""}`}else if(t.type==="lap"){let n=t.time===e.best;this.sectorFlash=`S3 ${se(e.sectors[e.sectors.length-1][2])}`,this.hud.flash(se(t.time),2,n?"BEST LAP!":`LAP ${t.lap}`),this.ta&&e.lap>=Zo&&this.finishTA()}}async finishTA(){let t=this.game;this.state="done",this.session.controlsEnabled=!1;let e=this.tracker,n=`${this.opts.layout.key}_${Date.now()}`,i={id:n,date:new Date().toISOString(),laps:e.laps,sectors:e.sectors,best:e.best,total:e.laps.reduce((a,c)=>a+c,0),carId:this.opts.carId},r=this.recorder.finish({carId:this.opts.carId,equipped:this.opts.equipped,color:this.opts.color,layoutKey:this.opts.layout.key}),o=Lu(this.opts.layout.key,i);await Du(n,r),setTimeout(()=>this.showResult(i,o,r),1500)}showResult(t,e,n){let i=this.game,r=z("table",{class:"rec-table"},z("tr",{},z("th",{},"LAP"),z("th",{},"S1"),z("th",{},"S2"),z("th",{},"S3"),z("th",{},"TIME")));t.laps.forEach((l,h)=>{let d=t.sectors[h];r.appendChild(z("tr",{class:l===t.best?"best":""},z("td",{},String(h+1)),z("td",{},se(d[0])),z("td",{},se(d[1])),z("td",{},se(d[2])),z("td",{class:"hl"},se(l))))});let o=Ue("TIME ATTACK RESULT",z("div",{class:"reward"},`BEST LAP ${se(t.best)}\u3000${e===0?"\u2605 \u30B3\u30FC\u30B9\u30EC\u30B3\u30FC\u30C9\u66F4\u65B0\uFF01":e>=0?`\uFF08${e+1}\u4F4D\uFF09`:""}`),r,z("div",{class:"hint"},`TOTAL ${se(t.total)}\u3000/\u3000${new Date(t.date).toLocaleString("ja-JP")}`)),a=z("div",{class:"screen dialog result"},o),c=new Be(i,[{label:"\u30EA\u30D7\u30EC\u30A4\u3092\u898B\u308B",action:()=>{c.destroy(),i.transition(()=>i.setMode(new ms(i,{layout:this.opts.layout,replay:n,record:t,back:()=>new s(i,this.opts)})))}},{label:"\u3082\u3046\u4E00\u5EA6\u8D70\u308B",action:()=>{c.destroy(),i.transition(()=>i.setMode(new s(i,this.opts)))}},{label:"PRACTICE\u30E1\u30CB\u30E5\u30FC\u3078",action:()=>{c.destroy(),i.transition(()=>i.setMode(new Fn(i,"practice")))}}]);o.appendChild(c.root),i.ui.appendChild(a)}pause(){let t=this.game;this.paused=!0,qo(t,"PAUSE",[{label:"\u518D\u958B",action:()=>{this.paused=!1}},{label:"\u30EA\u30B9\u30BF\u30FC\u30C8",action:()=>t.transition(()=>t.setMode(new s(t,this.opts)))},{label:"PRACTICE\u30E1\u30CB\u30E5\u30FC\u3078",action:()=>t.transition(()=>t.setMode(new Fn(t,"practice")))}],()=>{this.paused=!1})}exit(){this.session.dispose(),this.hud.destroy(),this.game.world.setCourse(null),this.game.mirrorModel=null}};var Fn=class s{constructor(t,e=null){this.game=t,this.sub=e}enter(){let t=this.game;t.audio.playBgm("town"),t.world.setCourse(null),this.ang=0,this.root=z("div",{class:"screen title"}),this.logo=z("div",{class:"logo"},z("div",{class:"logo-main"},"RACING IBR"),z("div",{class:"logo-sub"},"\u897F\u6C60\u888B\u30CA\u30A4\u30C8\u30EC\u30FC\u30B5\u30FC\u30BA"),z("div",{class:"logo-ver"},"v0.1 \u2014 Encounter Battle Build")),this.menuWrap=z("div",{class:"title-menu"}),this.root.append(this.logo,this.menuWrap,z("div",{class:"title-foot"},"\u2191\u2193 \u9078\u629E\u3000Enter \u6C7A\u5B9A\u3000Esc \u623B\u308B\u3000\uFF5C\u3000\u30AF\u30EA\u30C3\u30AF\u64CD\u4F5C\u3082\u53EF")),t.ui.appendChild(this.root),this.sub==="practice"?this.showPractice():this.showMain()}setMenu(t,e,n){this.menu&&this.menu.destroy(),this.menuWrap.innerHTML="",n&&this.menuWrap.appendChild(z("div",{class:"menu-title"},n)),this.menu=new Be(this.game,t,{onBack:e}),this.menuWrap.appendChild(this.menu.root)}showMain(){this.setMenu([{label:"STORY",sub:"\u30EC\u30FC\u30B7\u30F3\u30B0RPG\u30E2\u30FC\u30C9",action:()=>this.showStory()},{label:"PRACTICE",sub:"\u30BF\u30A4\u30E0\u30A2\u30BF\u30C3\u30AF\uFF0F\u30D5\u30EA\u30FC\u30E9\u30F3",action:()=>this.showPractice()},{label:"COMMON SETTING",sub:"\u30AD\u30FC\u914D\u7F6E\u30FB\u64CD\u4F5C\u8A2D\u5B9A",action:()=>this.showSettings()}])}showStory(){let t=Rl()?Cl():null;this.setMenu([{label:"NEW GAME",sub:"\u9ED2\u7895\u30AB\u30B1\u30EB\u306886-GR\u306E\u7269\u8A9E\u3092\u59CB\u3081\u308B",action:()=>this.newGame(!!t)},{label:"CONTINUE",disabled:!t,sub:t?`${ln(t.money)}\u3000${t.wins}\u52DD\u3000${new Date(t.savedAt).toLocaleString("ja-JP")}`:"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306A\u3057",action:()=>this.startStory(t)},{label:"\u623B\u308B",action:()=>this.showMain()}],()=>this.showMain(),"STORY")}newGame(t){t?this.setMenu([{label:"\u306F\u3044\uFF08\u6700\u521D\u304B\u3089\u59CB\u3081\u308B\uFF09",sub:"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306F\u6B21\u306BGS\u3067\u30BB\u30FC\u30D6\u3059\u308B\u307E\u3067\u6B8B\u308A\u307E\u3059",action:()=>this.startStory(Al())},{label:"\u3044\u3044\u3048",action:()=>this.showStory()}],()=>this.showStory(),"NEW GAME\u3092\u59CB\u3081\u307E\u3059\u304B\uFF1F"):this.startStory(Al())}startStory(t){let e=this.game;e.story=structuredClone(t),e.transition(()=>e.setMode(new fs(e)))}showPractice(){this.setMenu([{label:"TIME ATTACK",sub:"\u30BB\u30AF\u30BF\u30FC\u30BF\u30A4\u30E0\u30FB\u30EA\u30D7\u30EC\u30A4\u3092\u8A18\u9332",action:()=>this.pickLayout("ta")},{label:"FREE RUN",sub:"\u30BF\u30A4\u30E0\u3092\u6C17\u306B\u305B\u305A\u81EA\u7531\u306B\u8D70\u884C",action:()=>this.pickLayout("free")},{label:"RECORDS / REPLAY",sub:"\u8A18\u9332\u306E\u78BA\u8A8D\u3068\u30EA\u30D7\u30EC\u30A4\u518D\u751F",action:()=>this.pickLayout("rec")},{label:"\u623B\u308B",action:()=>this.showMain()}],()=>this.showMain(),"PRACTICE")}pickLayout(t){let e=ls();this.setMenu([...Qs.map(n=>({label:n.name,sub:`${n.course.desc}\u3000BEST ${se(e[n.key]?.[0]?.best)}`,action:()=>t==="rec"?this.showRecords(n):this.pickSetup(t,n)})),{label:"\u623B\u308B",action:()=>this.showPractice()}],()=>this.showPractice(),t==="ta"?"TIME ATTACK \u2014 \u30B3\u30FC\u30B9\u9078\u629E":t==="free"?"FREE RUN \u2014 \u30B3\u30FC\u30B9\u9078\u629E":"RECORDS \u2014 \u30B3\u30FC\u30B9\u9078\u629E")}pickSetup(t,e){let n=Rl()?Cl():null,i=n?n.garage[n.active]:null,r=(o,a)=>{let c=this.game;c.transition(()=>c.setMode(new Ko(c,{layout:e,kind:t,carId:Ge.car,equipped:o,color:a})))};this.setMenu([{label:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u30DE\u30B7\u30F3",disabled:!i,sub:i?"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306E\u30C1\u30E5\u30FC\u30CB\u30F3\u30B0\u72B6\u614B\u3067\u8D70\u884C":"\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306A\u3057",action:()=>r(i.equipped,i.color)},{label:"\u30CE\u30FC\u30DE\u30EB 86-GR",sub:pe[Ge.car].ref+" \u76F8\u5F53",action:()=>r({...pe[Ge.car].stock},Ge.color)},{label:"\u623B\u308B",action:()=>this.pickLayout(t)}],()=>this.pickLayout(t),`${e.name} \u2014 \u30DE\u30B7\u30F3\u9078\u629E`)}showRecords(t){let e=ls()[t.key]||[];this.menu&&this.menu.destroy(),this.menuWrap.innerHTML="";let n=z("table",{class:"rec-table"},z("tr",{},z("th",{},"#"),z("th",{},"BEST LAP"),z("th",{},"S1"),z("th",{},"S2"),z("th",{},"S3"),z("th",{},"TOTAL"),z("th",{},"\u65E5\u6642"),z("th",{},"")));e.forEach((o,a)=>{let c=o.laps.indexOf(o.best),l=o.sectors[c]||[],h=z("button",{class:"mini-btn"},"\u25B6 \u30EA\u30D7\u30EC\u30A4");h.onclick=async()=>{let d=await Uu(o.id);if(!d){h.textContent="\u30C7\u30FC\u30BF\u306A\u3057";return}let u=this.game;u.transition(()=>u.setMode(new ms(u,{layout:t,replay:d,record:o,back:()=>new s(u,"practice")})))},n.appendChild(z("tr",{},z("td",{},String(a+1)),z("td",{class:"hl"},se(o.best)),z("td",{},se(l[0])),z("td",{},se(l[1])),z("td",{},se(l[2])),z("td",{},se(o.total)),z("td",{},new Date(o.date).toLocaleString("ja-JP")),z("td",{},h)))});let i=z("button",{class:"menu-item small"},"\u623B\u308B");i.onclick=()=>{r(),this.pickLayout("rec")};let r=this.game.input.onKey(o=>{o.code==="Escape"&&(r(),this.pickLayout("rec"))});this.menu={destroy:()=>r()},this.menuWrap.appendChild(Ue(`${t.name} \u2014 \u8A18\u9332`,e.length?n:z("div",{class:"hint"},"\u307E\u3060\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093"),i))}showSettings(){this.menu&&this.menu.destroy(),this.menuWrap.innerHTML="",this.root.style.display="none",Cu(this.game,()=>{this.root.style.display="",this.showMain()})}update(t){this.ang+=t*.05;let e=this.game.rig.camera,n=60,i=-40;e.position.set(n+Math.cos(this.ang)*420,150,i+Math.sin(this.ang)*420),e.lookAt(n,0,i),e.fov=55,e.updateProjectionMatrix()}exit(){this.menu&&this.menu.destroy()}};var Nl=new zo(document.getElementById("app"));Nl.setMode(new Fn(Nl));location.search.includes("debug")&&(window.__dbg={game:Nl,RaceAI:us});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
