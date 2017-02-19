(function(g){var window=this;var Roa=function(a,b,c,d){var e=a||window.document;return g.Fk(e,b,function(a){var b=g.lf(a.target,function(a){return a===e||d(a)},!0);
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})},W3=function(a,b,c,d){return Roa(a,b,c,function(a){return g.qh(a,d)})},X3=function(a,b){if(/^\d+px?$/.test(b))return(0,window.parseInt)(b,10);
var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e},Y3=function(a){var b=g.Rl(a.g).Ua(),b=new g.zf(0,0,b.width,b.height);
if(a.B.o&&!g.y1(a)){if(g.U(a.g).Nb){var c=g.Z0(a)?69:48;b.top+=c;b.height-=c}a.A&&(b.height-=g.Z0(a.A.A)?72:50)}return b},Soa=function(a,b,c,d){c=(0,g.z)(c,d||a.o);
b=W3(b,"change",c,"iv-card-poll-choice-input");a.g.push(b)},Toa=function(a,b,c){c=(0,g.z)(c,a.o);
b=g.Hk(b,"mouseleave",c);a.g.push(b);return b},Z3=function(a){var b={};
void 0!==a.g?b.trackingParams=a.g:(b.veType=a.A,null!=a.o&&(b.veCounter=a.o));return b},$3=function(a){a.Ra("cardstatechange",g.cm(a)&&g.dm(a)?1:0)},a4=function(a){if(window.document.createEvent){var b=window.document.createEvent("HTMLEvents");
b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=window.document.createEventObject(),a.fireEvent("onclick",b)},c4=function(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;
var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in b4?b4[c]:X3(a,c)},d4=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;
return c?X3(a,c):0},Uoa=function(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.td(d),b.apply(void 0,arguments))},a)},e4=function(a,b){g.Vc.call(this);
this.wi=a;this.wn=b;this[g.wc]=!1},f4=function(a,b){var c=":"+(g.Zv.getInstance().g++).toString(36);
b.setAttribute("result",c);a.appendChild(b);return c},g4=function(a,b,c){var d=window.document.createElementNS("http://www.w3.org/2000/svg",a);
b&&g.Gb(b,function(a,b){d.setAttribute(b,a)});
for(var e=2;e<arguments.length;e++)d.appendChild(arguments[e]);return d},l4=function(a,b,c,d){e4.call(this,a,b);
a=this.wn;b=this.oa();c?(b.setAttribute("stroke",c.g),b.setAttribute("stroke-opacity",c.o),c=c.ub(),g.y(c)&&-1!=c.indexOf("px")?b.setAttribute("stroke-width",(0,window.parseFloat)(c)/Voa(a)):b.setAttribute("stroke-width",c)):b.setAttribute("stroke","none");this.fill=d;c=this.wn;a=this.oa();if(d instanceof h4)a.setAttribute("fill",d.H),a.setAttribute("fill-opacity",d.J);else if(d instanceof i4){b="lg-"+d.C+"-"+d.F+"-"+d.D+"-"+d.G+"-"+d.g+"-"+d.o;var e=b in c.o?c.o[b]:null;if(!e){var e=j4(c,"linearGradient",
{x1:d.C,y1:d.F,x2:d.D,y2:d.G,gradientUnits:"userSpaceOnUse"}),f="stop-color:"+d.g;g.qa(d.A)&&(f+=";stop-opacity:"+d.A);f=j4(c,"stop",{offset:"0%",style:f});e.appendChild(f);f="stop-color:"+d.o;g.qa(d.B)&&(f+=";stop-opacity:"+d.B);d=j4(c,"stop",{offset:"100%",style:f});e.appendChild(d);e=k4(c,b,e)}a.setAttribute("fill","url(#"+e+")")}else a.setAttribute("fill","none")},Woa=function(a,b){return b},Xoa=function(a,b){var c=f4(a,g4("feOffset",{"in":b,
dx:"-7",dy:"-7"})),c=f4(a,g4("feGaussianBlur",{"in":c,stdDeviation:"3"})),c=f4(a,g4("feColorMatrix",{"in":c,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"})),d=f4(a,g4("feColorMatrix",{"in":b,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"})),d=f4(a,g4("feGaussianBlur",{"in":d,stdDeviation:"1"})),c=f4(a,g4("feComposite",{operator:"out","in":c,in2:d}));return f4(a,g4("feComposite",{operator:"over","in":b,in2:c}))},Yoa=function(a,b){var c=f4(a,g4("feGaussianBlur",
{"in":b,
stdDeviation:"1.8"})),c=f4(a,g4("feDiffuseLighting",{"in":c,surfaceScale:"4",diffuseConstant:"1"},g4("feDistantLight",{azimuth:"270",elevation:"15","lighting-color":"white"}))),c=f4(a,g4("feComposite",{"in":c,in2:b,operator:"in"}));return f4(a,g4("feComposite",{in2:c,"in":b,operator:"arithmetic",k2:1,k3:.5,k4:0}))},m4=function(a,b,c,d){l4.call(this,a,b,c,d)},n4=function(a,b){e4.call(this,a,b)},o4=function(){},q4=function(){p4||(p4=new g.Gd(400),p4.start());
return p4},$oa=function(a){var b=[];
Zoa(a,function(a,d){switch(a){case 0:b.push("M");Array.prototype.push.apply(b,d);break;case 1:b.push("L");Array.prototype.push.apply(b,d);break;case 2:b.push("C");Array.prototype.push.apply(b,d);break;case 3:var c=d[3];b.push("A",d[0],d[1],0,180<Math.abs(c)?1:0,0<c?1:0,d[4],d[5]);break;case 4:b.push("Z")}});
return b.join(" ")},r4=function(a,b,c,d){l4.call(this,a,b,c,d)},s4=function(a,b){e4.call(this,a,b)},t4=function(a,b,c,d,e){g.$v.call(this,e);
this.width=a;this.height=b;this.A=c||null;this.O=d||null},Voa=function(a){var b=a.Wg();
return b?b.width/(a.A?new g.ve(a.A,a.O):a.Wg()).width:0},h4=function(a,b){this.H=a;
this.J=null==b?1:b},i4=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=g.p(k)?k:null;this.B=g.p(l)?l:null},u4=function(a,b,c){var d=(c="xy"==c||"yy"==c)?360:640;
return(d+((c?a.height:a.width)-d)*b)/d},v4=function(a,b,c){var d=(c="xx"==c||"xy"==c)?640:360;
return(d+((c?a.width:a.height)-d)*b)/d},w4=function(a){a=a.replace(/^(https?:)?\/\//,"");
a=a.split("/",1);return!a||1>a.length||!a[0]?[]:a[0].toLowerCase().split(".").reverse()},apa=function(a){return(new g.od(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,
_c:{jsl:{h:a.gapiHintParams}},callback:b},d=g.ra(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||g.ac(d,{_c:{jsl:{h:g.ih("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||g.ih("GAPI_HINT_OVERRIDE")){var e=g.Nh(window.document.location.href).gapi_jsh;e&&g.ac(d,{_c:{jsl:{h:e}}})}g.Tt("client",d)}catch(f){g.dh(f)}})).then(function(){})},bpa=function(a){var b={};
a.analyticsChannelData&&(b.analyticsDatas=(0,g.Q)(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}},cpa=function(a){var b=g4("filter",{filterUnits:"userSpaceOnUse"}),c="SourceGraphic";
(0,g.F)(a,function(a){a:{switch(a){case "bevel":a=Yoa;break a;case "dropshadow":a=Xoa;break a}a=Woa}c=a(b,c)});
return b},x4=function(a,b,c,d,e){t4.call(this,a,b,c,d,e);
this.o={};this.N=g.rc&&!g.oc(526);this.J=new g.pv(this)},j4=function(a,b,c){a=a.H.g.createElementNS("http://www.w3.org/2000/svg",b);
c&&y4(a,c);return a},y4=function(a,b){for(var c in b)a.setAttribute(c,b[c])},z4=function(a,b,c,d){b=j4(a,"path",{d:$oa(b)});
c=new r4(b,a,c,d);a.C.oa().appendChild(c.oa())},k4=function(a,b,c){if(b in a.o)return a.o[b];
var d="_svgdef_"+dpa++;c.setAttribute("id",d);a.o[b]=d;a.G.appendChild(c);return d},A4=function(){this.za=[];
this.Ha=[];this.Gd=[]},B4=function(a,b,c){0==g.Va(a.za)?a.Gd.length-=2:(a.za.push(0),a.Ha.push(1));
a.Gd.push(b,c);a.od=a.Be=[b,c]},C4=function(a,b,c,d){var e=a.od[0]-b*Math.cos(d*Math.PI/180)+b*Math.cos((d+90)*Math.PI/180),f=a.od[1]-c*Math.sin(d*Math.PI/180)+c*Math.sin((d+90)*Math.PI/180);
a.za.push(3);a.Ha.push(1);a.Gd.push(b,c,d,90,e,f);a.Zi=!1;a.od=[e,f]},Zoa=function(a,b){for(var c=a.Gd,d=0,e=0,f=a.za.length;e<f;e++){var k=a.za[e],l=epa[k]*a.Ha[e];
b(k,c.slice(d,d+l));d+=l}},D4=function(a,b,c,d,e,f,k,l,m,n,q){this.x=a;
this.y=b;this.dj=c;this.A=d;this.t=e;this.H=f;this.C=k;this.D=l;this.B=m;this.o=n;this.g=q},G4=function(a,b){var c=E4(b,F4(a,new g.zf(a.x,a.y,a.dj,a.A),b.g)),d=b.g,e=c.clone();
d&&!d.contains(c)&&(c.width<d.width?e.left=g.oe(c.left,d.left,d.left+d.width-c.width):(e.left=d.left,e.width=d.width),c.height<d.height?e.top=g.oe(c.top,d.top,d.top+d.height-c.height):(e.top=d.top,e.height=d.height));return e},F4=function(a,b,c){var d=a.C,e=a.D,f=a.g?a.g:"xy",k=v4(c,a.B,f);
a=u4(c,a.o,f);var f=640*b.width*k/100,l=360*b.height*a/100;return new g.zf(0==d?640*b.left*k/100:0<d?d:c.width+d-f,0==e?360*b.top*a/100:0<e?e:c.height+e-l,f,l)},fpa=function(a,b,c,d){this.value=a;
this.target=b;this.showLinkIcon=c;this.g=d},H4=function(a){return a.value?a.value:null},gpa=function(a){if(null==a)return 0;
if("never"==a)return-1;a=a.split(":");if(3<a.length)return 0;var b=0,c=1;(0,g.F)(a,function(a){a=(0,window.parseFloat)(a);0>a&&(c=-c);b=60*b+Math.abs(a)});
return c*b},I4=function(a,b){return g.y(a)?(0,window.parseFloat)(a):b},J4=function(a,b){return"true"==a||"false"==a?"true"==a:b},K4=function(a,b,c){for(var d in b)if(b[d]==a)return a;
return c},L4=function(a){return g.y(a)?a:""},N4=function(a){this.g=a||g.Xp();
M4||(M4=apa(this.g))},hpa=function(a,b,c,d){var e={path:"/youtubei/"+a.g.innertubeApiVersion+"/"+b,
headers:{"X-Goog-Visitor-Id":g.ih("VISITOR_DATA")},method:"POST",body:g.uf(c)},f=(0,g.z)(a.B,a);M4.then(function(){f();g.u("gapi.client.request")(e).execute(d||g.w)})},O4=function(a,b,c){b.eventTimeMs=Math.round((0,g.xl)());
b.lactMs=g.Rk();c&&(b.clientData=bpa(c));g.Bq({endpoint:"log_interaction",Iv:b},a)},ipa=function(a){return g.Xa(a,function(a){return"dropshadow"==a})?new g.yf(0,7,7,0):new g.yf(0,0,0,0)},jpa=function(a){a=(0,g.Ye)(a,function(a){return a in P4});
g.wb(a,function(a,c){return P4[a]-P4[c]});
return a},Q4=function(a,b,c){this.A=a;
this.g=b;this.o=null==c?1:c},R4=function(a,b,c){this.id=a;
this.timestamp=b.timestamp||0;this.type=b.card_type;this.teaserText=b.teaser_text;this.teaserDurationMs=b.teaser_duration_ms;this.startMs=b.start_ms;this.autoOpen=b.auto_open||!1;this.gd=b.session_data||{};this.Kb=c;this.sponsored=b.sponsored||!1;a=b.tracking||{};this.o={OE:a.impression,click:a.click,close:a.close,yK:a.teaser_impression,Wo:a.teaser_click};this.C=new g.Tp(b.tracking_params);this.F=new g.Tp(b.teaser_tracking_params);this.D=new g.Tp(b.icon_tracking_params)},kpa=function(a,b,c,d,e,f,
k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=k;this.B=l},S4=function(a,b,c,d,e,f,k,l,m,n,q,t,v){D4.call(this,a,b,c,d,e,l,m,n,q,t,v);
this.F=f;this.G=k},T4=function(a,b){if(!a)return null;
var c=I4(a.x,0),d=I4(a.y,0),e=I4(a.w,0),f=I4(a.h,0),k=gpa(a.t),l=I4(a.scaleSlope,1);return b(c,d,e,f,k,I4(a.d,0),I4(a.px,0),I4(a.py,0),I4(a.scaleSlopeX,l),I4(a.scaleSlopeY,l),K4(a.scaleDimension,lpa,"xy"))},mpa=function(a,b,c){c=c.replace(/\/(u|b)\/[0-9]+/g,"");
var d=/^[0-9]+$/;a&&d.test(a)&&(c="/b/"+a+c);b&&d.test(b)&&(c="/u/"+b+c);return c},U4=function(a){var b;
(b=a)&&!(b=1<a.length?"/"==a.charAt(0)&&"/"!=a.charAt(1):"/"==a)&&(b=w4(a),b="com"==b[0]&&"youtube"==b[1]||"be"==b[0]&&"youtu"==b[1]);return b?-1==a.indexOf("/redirect?"):!1},V4=function(a){if(!a)return null;
var b=L4(a.value);if(!b)return null;var c=K4(a.target,npa,"current");return null==c?null:new fpa(b,c,J4(a.show_link_icon,!0),null!=a.pause_on_navigation?a.pause_on_navigation:!0)},W4=function(a,b,c,d,e){a=(0,window.parseFloat)(a);
if(null!=a&&!(0,window.isNaN)(a)){if(d)return g.oe(a,b,c);if(a>=b&&a<=c)return a}return e},X4=function(a,b){if(null==a)return b;
var c=(0,window.parseInt)(a,0);if((0,window.isNaN)(c))return b;c=c.toString(16);return"#"+"000000".substring(0,6-c.length)+c},Y4=function(a,b){g.cc.call(this,a);
this.x=b.o[0];this.y=b.o[1];this.z=b.o[2];this.duration=b.duration;this.progress=b.progress;this.fps=b.F;this.state=b.g},Z4=function(a){a=g.ua(a);
delete g.Mv[a];g.Tb(g.Mv)&&g.Kv&&g.Kv.stop()},$4=function(){return g.vm("enable_youtubei_innertube")?g.Iq:N4},a5=function(a){return new g.zf(a.left,a.top,a.right-a.left,a.bottom-a.top)},opa=function(a,b){var c=a.top-b.y,d=b.x-a.left-a.width,e=b.y-a.top-a.height,f=a.left-b.x,k=Math.max(c,d,e,f);
if(0>k)return"i";switch(k){case c:return"t";case d:return"r";case e:return"b";case f:return"l"}return"i"},b5=function(a,b,c){if(c.length&&(b=g.De("g",void 0,b),b.length)){var d=jpa(c);
if(d){c="effects:"+(d?d.join("|"):"");var e=c in a.o?a.o[c]:null;e?a=e:(d=cpa(d),a=0<d.childNodes.length?k4(a,c,d):null)}else a=null;a&&b[0].setAttribute("filter","url(#"+a+")")}},c5=function(a,b){var c=g.Af(a);
c.expand(ipa(b));return a5(c)},d5=function(a,b,c,d){var e=a.G;
e?a=new i4(e.C*b/100,e.F*c/100,e.D*b/100,e.G*c/100,e.g,e.o,e.A,e.B):(b=a.o,a=new h4(a.bgColor,d?Math.max(b,.9):b));return a},e5=function(a,b,c){var d=new A4;
B4(d,a.left+b+c,a.top+c);d.dc(a.left+a.width-b-c,a.top+c);C4(d,b,b,-90);d.dc(a.left+a.width-c,a.top+a.height-b-c);C4(d,b,b,0);d.dc(a.left+b+c,a.top+a.height-c);C4(d,b,b,90);d.dc(a.left+c,a.top+b+c);C4(d,b,b,180);d.close();return d},f5=function(){this.g=!1;
this.C=this.o=null},g5=function(a,b,c){a.o?(a.o.setSize(b,c),a.o.clear()):(b=new x4(b,c,void 0,void 0,void 0),a.o=b,a.o.vk(),a.C=g.M("DIV"),b=a.o.oa(),a.C.appendChild(b));
return a.o},h5=function(a,b){this.start=a<b?a:b;
this.end=a<b?b:a},i5=function(a,b){var c="ivTriggerCondition:"+a;
return b?c+":"+b:c},ppa=function(a){this.merchant=g.D(a.merchant);
this.price=g.D(a.price)},j5=function(a,b,c){R4.call(this,a,b,c);
this.imageUrl=b.image_url;this.displayDomain=b.display_domain;this.showLinkIcon=b.show_link_icon;this.g=b.button_icon_url;this.title=b.title;this.customMessage=b.custom_message;this.url=V4({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url});this.A=null;b.signin_url&&(this.A=V4({target:"current",value:b.signin_url}));this.H=b.signin_title||null;this.G=b.signin_message||null},qpa=function(a,b){this.state=a;
this.g=b},rpa=function(a,b,c,d){this.type=a;
this.o=b;this.g=c;this.A=d},k5=function(a){return a.o&&a.o.length?a.o[0]:a.g&&a.g.length?a.g[0]:a.A&&a.A.length?a.A[0]:null},spa=function(a,b,c,d,e,f,k,l,m,n,q,t,v,x){this.B=a;
this.bgColor=b;this.D=c;this.g=d;this.o=e;this.H=f;this.C=k;this.textAlign=l;this.textSize=m;this.F=n;this.padding=q;this.effects=t;this.A=v;this.G=x},tpa=function(a){if(!a)return null;
var b=I4(a.sx,0),c=I4(a.sy,0);return T4(a,function(a,e,f,k,l,m,n,q,t,v,x){return new S4(a,e,f,k,l,b,c,m,n,q,t,v,x)})},l5=function(a){return a?T4(a,function(a,c,d,e,f,k,l,m,n,q,t){return new D4(a,c,d,e,f,k,l,m,n,q,t)}):null},m5=function(a,b){return b?b:U4(a)?"current":"new"},n5=function(a,b,c,d){(a=H4(a))?U4(a)?d=g.Qh(a,{feature:"iv",
src_vid:c,annotation_id:b}):(a?(b=w4(a),b="com"==b[0]&&"google"==b[1]&&"plus"==b[2]):b=!1,b&&d?(d=g.va(mpa,d.pageId,d.kc),a=new g.jg(a),g.ng(a,d(a.A)),d=a.toString()):d=a):d=null;return d},upa=function(a){function b(a){return(0,g.Ye)(a.split(/ +/),function(a){return""!=a})}
return null==a?[]:b(a)},vpa=function(a){function b(a){return null!=a&&!(0,window.isNaN)(a)}
return(a=a?new g.yf((0,window.parseFloat)(a.top),(0,window.parseFloat)(a.right),(0,window.parseFloat)(a.bottom),(0,window.parseFloat)(a.left)):null)&&b(a.top)&&b(a.right)&&b(a.bottom)&&b(a.left)?a:null},o5=function(a,b){if(null==a)return null;
if(g.oa(a)){var c=[];(0,g.F)(a,function(a){(a=b(a))&&c.push(a)});
return c}var d=b(a);return d?[d]:[]},p5=function(a){var b=/.+/;
return g.y(a)&&null!=b&&null!=a&&a.match(b)?a:""},q5=function(a){return g.na(a)&&a.length?a[0]:a},r5=function(a,b,c,d){g.Nv.call(this);
if(!g.na(a)||!g.na(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.A=a;this.G=b;this.duration=c;this.D=d;this.o=[];this.progress=this.F=0;this.C=null},t5=function(a,b){b<a.startTime&&(a.endTime=b+a.endTime-a.startTime,a.startTime=b);
a.progress=(b-a.startTime)/(a.endTime-a.startTime);1<a.progress&&(a.progress=1);a.F=1E3/(b-a.C);a.C=b;s5(a,a.progress);1==a.progress?(a.g=0,Z4(a),a.fd(),a.Ni()):a.ib()&&a.so()},s5=function(a,b){g.ra(a.D)&&(b=a.D(b));
a.o=Array(a.A.length);for(var c=0;c<a.A.length;c++)a.o[c]=(a.G[c]-a.A[c])*b+a.A[c]},u5=function(a){O4($4(),{click:{csn:g.Kq()||"",
visualElement:Z3(a)}},void 0)},v5=function(a){return"rtl"==g.Zj(a,"direction")},w5=function(){f5.call(this);
this.B=0},x5=function(a,b,c){this.g={};
this.o=!1;this.C="ivTrigger:"+a;this.A=c;wpa(b,function(a,b){var c=i5(b.state,b.g);this.A.subscribe(c,(0,g.z)(this.B,this,c,a));this.g[c]=a},this)},y5=function(a,b,c,d,e){r5.call(this,b,c,d,e);
this.element=a},z5=function(a,b,c){R4.call(this,a,b,c);
this.J=b.image_url;this.B=b.badge_symbol||"";this.priceText=b.price_text||"";this.title=b.title;this.g=b.meta_info;this.G=!!b.is_paygated;this.H=!!b.user_has_entitlement;this.url=V4({target:b.target||"new",value:b.url})},A5=function(a,b,c){R4.call(this,a,b,c);
this.G=b.image_url;this.videoDuration=b.video_duration||null;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.B=!!b.is_live_now;this.url=V4({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},B5=function(a,b,c){j5.call(this,a,b,c);
this.J=b.ypc_item_type;this.B=b.ypc_item_id;this.L=b.ypc_flow_type},C5=function(a,b,c){j5.call(this,a,b,c);
this.offers=[];a=b.offers||[];for(b=0;b<a.length;b++)this.offers.push(new ppa(a[b]))},D5=function(a,b,c){R4.call(this,a,b,c);
this.B=this.id.replace(/[^a-z0-9-]/gi,"-");this.title=b.title;this.choices=b.choices;this.g=b.hasOwnProperty("old_vote")?b.old_vote:null;this.A=null;b.signin_url&&(this.A=V4({target:"current",value:b.signin_url}));this.G=b.hasOwnProperty("xsrf_token")?b.xsrf_token:null},E5=function(a,b,c){R4.call(this,a,b,c);
this.B=b.image_url;this.playlistVideoCount=b.playlist_video_count;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.url=V4({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},F5=function(a,b){return g.l3&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())},G5=function(a,b,c){j5.call(this,a,b,c);
this.J=b.ypc_flow_type;this.B=b.innertube_request_params},H5=function(a,b,c){R4.call(this,a,b,c);
this.channelId=b.channel_id;this.customMessage=b.custom_message;this.profileImageUrl=b.image_url;this.title=b.title;this.g=b.meta_info;this.url=V4({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},xpa=function(a,b,c,d){this.g=a||[];
this.A=b||[];this.B=c;this.o=d;this.value=!1},wpa=function(a,b,c){(0,g.F)(a.g,g.va(b,!1),c);
(0,g.F)(a.A,g.va(b,!0),c)},I5=function(a){if(!a)return null;
var b=K4(a.state,ypa);a=p5(a.ref);return b?new qpa(b,a):null},zpa=function(a,b){this.o=a;
this.g=b},Bpa=function(a){if(!a)return null;
var b=K4(a.type,Apa,"rect"),c=o5(a.rectRegion,l5),d=o5(a.anchoredRegion,tpa);a=o5(a.shapelessRegion,l5);return new rpa(b,c,d,a)},J5=function(a){if(!a)return null;
var b=X4(a.fgColor,"#1A1A1A"),c=X4(a.bgColor,"#FFF"),d=X4(a.borderColor,"#000"),e=W4(a.borderWidth,0,5,!1,0),f=W4(a.bgAlpha,0,1,!1,.8),k=X4(a.highlightFontColor,"#F2F2F2"),l=W4(a.highlightWidth,0,5,!1,3),m=L4(a.textAlign),n=W4(a.textSize,3.3,30.1,!0,3.6107),q=L4(a.fontWeight),t=vpa(a.padding),v=upa(a.effects),x=W4(a.cornerRadius,0,10,!0,0);if(a=q5(a.gradient)){var A=W4(a.x1,0,100,!0,0),G=W4(a.y1,0,100,!0,0),I=W4(a.x2,0,100,!0,100),K=W4(a.y2,0,100,!0,100),Za=X4(a.color1,"#FFF"),tb=X4(a.color2,"#000");
a=new kpa(A,G,I,K,Za,tb,W4(a.opacity1,0,100,!0,100),W4(a.opacity2,0,100,!0,0))}else a=null;return new spa(b,c,d,e,f,k,l,m,n,q,t,v,x,a)},Cpa=function(a,b,c){this.type=a;
this.trigger=b;this.url=c},K5=function(a,b){this.pa=a;
this.context=b;this.lp=!1;this.N=0},L5=function(a,b,c,d,e,f){b=new g.wm(b,c,{id:d});
b.namespace="annotations_module";e&&(b.g||(b.g=new g.Ff)).subscribe("onEnter",e,a);f&&(b.g||(b.g=new g.Ff)).subscribe("onExit",f,a);g.jm(a.context.o,[b])},Dpa=function(a){return(0,g.E)()-a.N},Epa=function(a,b,c,d,e,f,k,l){var m=(0,g.z)(function(){l&&this.context.o.jd();
g.Uu(b,"current"==c?"_top":void 0,d)},a);
"new"==c&&(m(),m=null);var n={};n.interval=Dpa(a);M5(a.context.logger,e,m,n,f,k);U4(b)||(a=d.itct)&&u5(new g.Tp(a))},N5=function(a){var b=g.Kq()||"",c=$4();
a=(0,g.Q)(a,function(a){return Z3(a)});
O4(c,{visibilityUpdate:{csn:b,visualElements:a}})},Ipa=function(a){var b=g.Zj(a,"fontSize"),c;
c=(c=b.match(Fpa))&&c[0]||null;if(b&&"px"==c)return(0,window.parseInt)(b,10);if(g.Ke){if(String(c)in Gpa)return X3(a,b);if(a.parentNode&&1==a.parentNode.nodeType&&String(c)in Hpa)return a=a.parentNode,c=g.Zj(a,"fontSize"),X3(a,b==c?"1em":b)}c=g.M("SPAN",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});a.appendChild(c);b=c.offsetHeight;g.We(c);return b},Kpa=function(a,b){Jpa(a,function(c){return new x5(a.id,c,b)})},O5=function(a,b){return b?new g.zf(a.x+
b.left,a.y+b.top,b.width,b.height):null},P5=function(){w5.call(this)},Q5=function(){f5.call(this)},R5=function(){f5.call(this)},S5=function(a,b,c){K5.call(this,a,b);
this.annotation=c;this.isActive=!1},T5=function(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");
y5.apply(this,arguments)},U5=function(a,b,c){this.g=a;
this.A=b;this.C=c;this.B=new g.tt(null)},Lpa=function(a,b){var c=["ul",
"",{role:"radiogroup"}];(0,g.F)(b.choices,function(a){c.push(["li",b.B+"-"+a.index.toString(),["label","",["input","iv-card-poll-choice-input",{type:"checkbox",role:"radio",name:b.B+a.index.toString(),value:a.index.toString(),"data-poll-choice-index":a.index.toString()}],["span","iv-card-poll-choice-text",["span","iv-card-poll-choice-percent"],V5(this,"span",void 0,a.desc)]],["div","iv-card-poll-result",["div","iv-card-poll-result-bar"]]])},a);
var d={};b.A&&(d["aria-label"]=g.N("YTP_DRAWER_POLL_TITLE_ARIA_LABEL",{POLL_TITLE:b.title}));var e=["iv-card","iv-card-poll"],d=[["div","iv-card-content",V5(a,"h2",d,b.title),["form","",["fieldset","",c]]]];b.A&&(e.push("iv-card-unavailable"),d.push(["div",["iv-card-sign-in"],["h2","",g.N("YTP_DRAWER_POLL_SIGNIN_TITLE")],["a",["iv-card-sign-in-button","iv-button"],{href:H4(b.A)},["span",["iv-button-content"],g.N("YTP_SIGN_IN")]]]));e=new g.V(["div",e].concat(d));d=e.element;W5(b,d);Soa(a.g.g,d,g.va(a.F,
b),a);(0,g.F)(g.Ee("iv-card-poll-choice-input",d),function(a){this.g.g.S(a,"focus",g.va(this.o,!0));this.g.g.S(a,"blur",g.va(this.o,!1))},a);
b.A&&a.A(g.L("iv-card-sign-in-button",d),b.A,b.id,b.gd,b.Kb,b.o.click,5);return e},a6=function(a,b,c,d){var e=X5(a,b.url,b.id),f=b.displayDomain?["div",
"iv-card-image-text",b.displayDomain]:"",k=Y5(a,b),l=["iv-card"];b.A&&l.push("iv-card-unavailable");e=["div",l,["a","iv-click-target",{href:e},Z5(b.imageUrl,f),["div","iv-card-content",V5(a,"h2",void 0,b.title),k]]];b.A&&(e=e.concat([["div",["iv-card-sign-in"],V5(a,"h2",void 0,b.H||""),["p","",b.G],["a",["iv-card-sign-in-button","iv-button"],{href:H4(b.A)},V5(a,"span","iv-button-content",g.N("YTP_SIGN_IN"))]]]));e=new g.V(e);$5(a,e,b,c,d);return e},c6=function(a,b,c){var d=X5(a,b.url,b.id),e=["yt-badge",
"standalone-ypc-badge-renderer-icon",b.H?"standalone-ypc-badge-renderer-icon-purchased":"standalone-ypc-badge-renderer-icon-available"],f={},e=b.G&&b.B?["span",e,f,b.B]:"";c=["div",["iv-card",c],["a","iv-click-target",{href:d},Z5(b.J,e?["div","iv-card-image-text",e,b.priceText]:""),["div","iv-card-content",["h2","iv-card-primary-link",b.title],b6(a,b)]]];c=new g.V(c);$5(a,c,b);return c},d6=function(a,b){return b.customMessage?V5(a,"div","iv-card-message",b.customMessage):""},Z5=function(a,b){var c=
["div",
"iv-card-image",{style:"background-image: url("+a+");"}];b&&c.push(b);return c},b6=function(a,b){if(!b.g||0==b.g.length)return"";
var c=["ul","iv-card-meta-info"];(0,g.F)(b.g,function(a){c.push(V5(this,"li","",a))},a);
return c},V5=function(a,b,c,d){c?g.y(c)?c={"class":c}:g.na(c)&&(c={"class":c.join(" ")}):c={};
c.dir=g.ut(a.B,d);return[b,c,d]},Y5=function(a,b){if(!b.customMessage)return"";
var c=["iv-card-action","iv-card-primary-link"],d={};b.g&&(c.push("iv-card-action-icon"),d.style="background-image: url("+b.g+");");d.dir=g.ut(a.B,b.customMessage);c=["div",c,d,["span","",b.customMessage]];b.showLinkIcon&&(c.push("\u00a0"),c.push(["span","iv-card-link-icon"]));return c},W5=function(a,b){var c=0;
(0,g.F)(a.choices,function(a){c+=a.count});
for(var c=c||1,d=0;d<a.choices.length;d++){var e=a.choices[d],f=g.L(a.B+"-"+e.index.toString(),b),e=e.count/c;null==a.g&&(e=0);g.P(f.getElementsByTagName("label")[0],"iv-card-poll-choice-checked",a.g==d);f.getElementsByTagName("input")[0].checked=a.g==d;g.ef(g.L("iv-card-poll-choice-percent",f),g.N("YTP_DRAWER_POLL_PERCENT",{PERCENT:Math.floor(100*e).toFixed(0)}));g.Vj(g.L("iv-card-poll-result-bar",f),"transform","scaleX("+e.toFixed(2)+")")}g.P(b,"iv-card-poll-voted",null!=a.g);g.P(b,"iv-card-poll-expanded",
null!=a.g&&1<a.choices.length)},e6=function(a,b,c,d){d?(c&&a.g.videoData.o||a.g.o.jd(),a.g.o.isFullscreen()&&g.Tl(a.g.o),M5(a.g.logger,b.Kb,d,void 0,b.o.click,5)):b.url&&a.C(b.url,b.id,b.gd,b.Kb,b.o.click||[],5)},X5=function(a,b,c){return b?n5(b,c,a.g.videoData.videoId,a.g.C):null},$5=function(a,b,c,d,e){c.A&&f6(a,g.Ee("iv-card-sign-in-button",b.element),c,c.A,e);
c.url&&f6(a,g.Ee("iv-click-target",b.element),c,c.url,d)},f6=function(a,b,c,d,e){(0,g.F)(b,function(a){if(e){var b=(0,g.z)(function(a){a.stopPropagation();
a.preventDefault();e();return!1},this);
this.g.g.S(a,"click",b)}else d&&this.A(a,d,c.id,c.gd,c.Kb,c.o.click,5)},a)},g6=function(a,b,c,d,e,f,k,l,m,n,q,t,v,x,A){this.id=a;
this.author=b;this.type=c;this.style=d;this.B=e;this.o=f;this.A=k||[];this.F=l||[];this.g=m;this.D=n;this.C=q;this.htmlBlob=v;this.data=x;this.Kb=A},h6=function(a){return(a=Mpa(a,function(a){return"openUrl"==a.type&&null!=a.url}))?a.url:null},j6=function(a){return i6(a,function(a){return"click"==a.trigger})},i6=function(a,b){return(0,g.Ch)(a.A,b,void 0)},Npa=function(a,b,c){(0,g.F)(a.A,b,c)},Mpa=function(a,b){return g.Xa(a.A,b,void 0)},k6=function(a,b,c){(0,g.F)(a.F,b,c)},Jpa=function(a,b){(0,g.Q)(a.F,
b,void 0)},m6=function(a){return(a=l6(a))?k5(a):null},l6=function(a){a.o?(a=a.o,a=a.g.length?a.g[0]:null):a=null;
return a},n6=function(a,b){var c=m6(a);
return c&&b?u4(b,c.o,c.g?c.g:"xy"):1},Opa=function(a){if(!a)return null;
var b=o5(a.condition,I5),c=o5(a.notCondition,I5),d=J4(a.show_delay,!1);a=J4(a.hide_delay,!1);return b||c?new xpa(b,c,d,a):null},o6=function(a,b){this.g=a;
this.o=b||null},E4=function(a,b){var c;
c=a.o?G4(a.o,new o6(a.g)):a.g;var d=b.clone(),e=c.left;c=c.top;e instanceof g.se?(d.left+=e.x,d.top+=e.y):(d.left+=e,g.qa(c)&&(d.top+=c));return d},Rpa=function(a){if(!a)return null;
var b=K4(a.type,Ppa),c=K4(a.trigger,Qpa),d=V4(q5(a.url));q5(a.subscribeData);return b?new Cpa(b,c,d):null},Spa=function(a){return 3*a*a-2*a*a*a},Tpa=function(a){return Math.pow(a,3)},p6=function(a,b){return(b&8&&v5(a)?b^4:b)&-9},q6=function(a,b,c){var d=$4();
a={csn:a,parentVisualElement:Z3(b),visualElements:(0,g.Q)(c,function(a){return Z3(a)})};
O4(d,{attachChild:a},void 0)},r6=function(a){var b=0;
-1!=a.indexOf("h")&&(a=a.split("h"),b=3600*a[0],a=a[1]);-1!=a.indexOf("m")&&(a=a.split("m"),b=60*a[0]+b,a=a[1]);-1!=a.indexOf("s")?(a=a.split("s"),b=1*a[0]+b):b=1*a+b;return b},s6=function(a,b){b.match(/\sstyle\s*=/);
a.innerHTML=b},t6=function(a,b,c){this.A=a;
this.annotation=b;this.g=c;this.o=null;this.C=this.isVisible=!1;Kpa(b,a)},u6=function(a){g.Gf(a.A,"resize",a.D,a);
g.Gf(a.A,"onVideoAreaChange",a.B,a)},v6=function(a){a.o&&(a.o.stop(),a.o=null)},w6=function(a,b,c,d,e){this.g=a;
this.$=b;this.D=c;this.fa=d;this.da=e;this.N=!1;this.F=new g.Fv(this);this.P=this.C=this.G=this.O=this.o=null;this.ba=!1;this.ca=this.J=this.L=null;this.ro=new g.Xv(this.hN,100,this);this.H=new g.Ld(this.It,500,this);this.V=this.A=this.B=null},Upa=function(a,b){var c=(0,g.z)(function(a,c,f){c=f?x6(this,c,(0,g.z)(f,this)):x6(this,c);
this.F.S(b,a,c)},a);
c("mouseover","d",a.by);c("mouseout","c",a.Lf);c("click","a");c("touchend","a")},Vpa=function(a){if(a.g.C){var b;
i6(a.g,function(a){return"close"==a.type})?b=a.o:(a.B=g.M("DIV","annotation-close-button"),g.R(a.B,!1),g.kh(a.B,"annotation_id",a.g.id),a.o.appendChild(a.B),b=a.B);
var c=function(a){a.stopPropagation()};
a.F.S(b,"click",x6(a,"b",c));a.F.S(b,"touchend",x6(a,"b",c))}},x6=function(a,b,c){return(0,g.z)(function(a){if(this.da)c&&c(a);
else if(a.event.target instanceof window.Element){var d=a.event.target;g.R(d,!1);try{var f=window.document.elementFromPoint(a.event.clientX,a.event.clientY);if(g.nf(f,"annotation")){var k=window.document.createEvent("MouseEvent");k.initMouseEvent(a.event.type,a.event.bubbles,a.event.cancelable,a.event.view,a.event.detail,a.event.screenX,a.event.screenY,a.event.clientX,a.event.clientY,a.event.ctrlKey,a.event.altKey,a.event.shiftKey,a.event.metaKey,a.event.button,a.event.relatedTarget);f.dispatchEvent(k)}}finally{g.R(d,
!0)}}d=g.ok(a.target);a=new g.se(a.clientX,a.clientY);"c"==b&&d.contains(a)||this.fa.Jb(b,this.g)},a)},A6=function(a){if(a.o||a.A){var b=m6(a.g);
if(b){var c=y6(a);if(a.o){var b=G4(b,c),d=g.SY(g.Rl(a.D));g.mk(a.o,b.width,b.height);g.bk(a.o,b.left,b.top);a.O=new g.zf(d.left+b.left,d.top+b.top,b.width,b.height);var e;e=(e=m6(a.g))&&d?v4(d,e.B,e.g?e.g:"xy"):1;var f=n6(a.g,d),d=a.g.g;d.padding?d=d.padding:(d="speech"==a.g.style?1.6:.8,d=new g.yf(d,d,d,d));d=new g.yf(360*d.top*f/100,640*d.right*e/100,360*d.bottom*f/100,640*d.left*e/100);a.C&&(d.right+=1.5*c.g.height/100);a.o.style.padding=d.top+"px "+d.right+"px "+d.bottom+"px "+d.left+"px";"label"==
a.g.style&&a.G&&(a.G.style.padding=a.o.style.padding);var d=c.g,k=!1,l=0,m=0,n;n=g.SY(g.Rl(a.D));var q=Y3(a.D.app.B.J);g.Bf(n,q)?n=null:(q.top+=20,q.height-=40,"player_relative"!=a.g.D&&(q.left-=n.left,q.top-=n.top),n=q);n&&(l=n.top-(b.top+b.height),m=b.top-(n.top+n.height),k=0<l||0<m);if(k&&n){d=n;e=l;var f=m,t;a.C&&(m=z6(a,23,b,e,f),a.B&&(t=43-m.width,0<t&&(b.left+m.left-t>d.left&&(m.left-=t),m.width+=t)),t=m,g.mk(a.C,m.width,m.height),g.bk(a.C,m.left,m.top));a.B&&(t?b=new g.se(t.left+t.width-23-
18,a.ba?t.top+2:t.top+t.height-18-2):(t=z6(a,18,b,e,f),b=new g.se(t.left,t.top),g.mk(a.B,t.width,t.height)),g.bk(a.B,b));a.P=new g.zf(a.O.left+t.left,a.O.top+t.top,t.width,t.height);a.L=a.F.S(g.Rl(a.D),"mousemove",a.BH)}else a.C&&(t=e/f*d.height*4.2/100,t=new g.ve(t,t),"highlight"==a.g.type||"label"==a.g.style?(e=1.5*d.height/100,t=new g.zf(b.width-t.width-e,b.height-t.height-e,t.width,t.height)):t=new g.zf(b.width-t.width-3*d.height/100,(b.height-t.height)/2,t.width,t.height),g.mk(a.C,t.width,t.height),
g.bk(a.C,t.left,t.top)),a.B&&(t=9<=d.left+d.width-(b.left+b.width),e=9<=b.top-d.top,g.bk(a.B,t&&e?new g.se(b.width-9,-9):t?new g.se(b.width-9,45<b.height?9:b.height-9):e?new g.se(45<b.width?b.width-9-18:-9,-9):b.width/d.width>b.height/d.height?new g.se(45<b.width?b.width-9-18:-9,b.height-9):new g.se(-9,45<b.height?9:b.height-9)))}a.A&&a.A.A(a.g,c);if(a.o){c=a.o;b=a.g.g;c.style.color="highlightText"==a.g.style?b.H:b.B;t=g.SY(g.Rl(a.D));c.style.fontSize=360*b.textSize*n6(a.g,t)/100+"px";t=a.g.style;
c.style.textAlign=b.textAlign?b.textAlign:"title"==t||"highlightText"==t?"center":"left";b.F&&(c.style.fontWeight=b.F);a=a.o;c=a.style.overflow;t=(b=g.L("annotation-link-icon",a))?g.qk(b):!1;e=(d=g.L("annotation-close-button",a))?g.qk(d):!1;t&&g.R(b,!1);e&&g.R(d,!1);m=f="";if(l=g.L("inner-text",a))f=l.style.overflow,m=l.style.position,l.style.overflow="visible",l.style.position="static";a.style.overflow="scroll";if(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth){n=k=Ipa(a);for(var q=5,
v=Math.floor(k/2);v;)a.scrollHeight<=a.offsetHeight&&a.scrollWidth<=a.offsetWidth?(q=n,n=Math.min(n+v,k)):n=Math.max(n-v,q),v=Math.floor(v/2),a.style.fontSize=n+"px";n!=q&&(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth)&&(a.style.fontSize=q+"px")}a.style.overflow=c;l&&(l.style.overflow=f,l.style.position=m);e&&g.R(d,!0);t&&g.R(b,!0)}}}},z6=function(a,b,c,d,e){var f=0<e;
b=new g.zf(0,c.height-b,Math.max(c.width,b),b);0<d&&(b.top=c.height,20<d&&(b.height+=d-20),g.O(a.o,"annotation-extend-down"));f&&(b.top=-b.height,20<e&&(c=e-20,b.top-=c,b.height+=c),g.O(a.o,"annotation-extend-up"),a.ba=!0);return b},B6=function(a){return"label"!=a.g.style||a.A.g},y6=function(a){var b;
b=g.SY(g.Rl(a.D));if("player_relative"==a.g.D){var c=g.Rl(a.D).Ua();b=new g.zf(-b.left,-b.top,c.width,c.height)}else b=new g.zf(0,0,b.width,b.height);return new o6(b,a.V?m6(a.V):null)},C6=function(a,b,c){S5.call(this,a,b,c);
this.F=this.B=this.G=!1;this.D=5E3;this.A=null;this.$h=g.M("DIV","iv-promo-contents");this.g=this.o=this.Zc=null;this.C=new g.Ld(function(){this.Zc.setAttribute("aria-hidden",!0);g.R(this.o,!1);g.R(this.g,!0)},700,this)},Wpa=function(a){var b=a.annotation.data,c;
if("cta"==a.annotation.style)c=6;else if("video"==a.annotation.style||"playlist"==a.annotation.style)c=7;a.D=b.collapse_delay_ms||a.D;var d=["iv-promo","iv-promo-inactive"];a.oa().setAttribute("aria-hidden",!0);a.oa().setAttribute("aria-label",g.N("YTP_INVIDEO_PROMOTION_ARIA_LABEL"));a.oa().tabIndex=0;var e=h6(a.annotation),f;if(b.image_url){f=g.M("DIV",["iv-promo-img","iv-click-target"]);var k=g.M("IMG",{src:b.image_url,"aria-hidden":"true"});f.appendChild(k);b.video_duration&&!b.is_live?(k=g.M("SPAN",
"iv-promo-video-duration",b.video_duration),f.appendChild(k)):b.playlist_length&&(k=g.M("SPAN","iv-promo-playlist-length",b.playlist_length.toString()),f.appendChild(k));e&&a.Ah(f,e,a.annotation.id,b.session_data,a.annotation.Kb,void 0,c)}e?a.Zc=g.M("A",{href:H4(e),"class":"iv-promo-txt"}):a.Zc=g.M("DIV","iv-promo-txt");var l,m,n,q;switch(a.annotation.style){case "cta":case "website":l=g.M("P",null,g.M("STRONG",null,b.text_line_1));m=g.M("P",null,g.M("SPAN","iv-promo-link",b.text_line_2));b.text_line_3&&
(d.push("iv-promo-website-card-cta"),n=g.M("P",null,g.M("SPAN","iv-promo-action-text",b.text_line_3)));g.O(a.Zc,"iv-click-target");e&&a.Ah(a.Zc,e,a.annotation.id,b.session_data,a.annotation.Kb,void 0,c);break;case "playlist":case "video":l=g.M("P",null,g.M("SPAN",null,b.text_line_1));m=g.M("P",null,g.M("STRONG",null,b.text_line_2));b.is_live&&(l=m,m=g.M("SPAN",["yt-badge","iv-promo-badge-live"],g.N("YTP_LIVE_NOW")));g.O(a.Zc,"iv-click-target");e&&a.Ah(a.Zc,e,a.annotation.id,b.session_data,a.annotation.Kb,
void 0,c);d.push("iv-promo-video");break;case "vote":l=g.M("P",null,g.M("STRONG",null,b.text_line_1)),m=g.M("P",null,g.M("SPAN",null,b.text_line_2)),q=g.M("DIV","iv-promo-button-container"),c=g.M("BUTTON",["iv-button","iv-promo-button"],g.M("SPAN","iv-button-content",b.button_text)),a.context.g.S(c,"click",function(a){a.stopPropagation();M5(this.context.logger,this.annotation.Kb,null,{contest_vote:"1"},(b.tracking||{}).vote);a=this.annotation.data;this.Zc=g.L("iv-promo-txt",this.$h);var c=g.L("iv-promo-button-container",
this.$h),d=g.M("DIV",["iv-promo-txt","iv-click-target"]),e=g.M("P",null,g.M("STRONG",null,a.text_line_3)),f=g.M("P",null,a.text_line_4);g.Se(d,e,f);g.We(c);g.Xe(d,this.Zc);g.sh(this.oa(),"iv-promo-with-button");(c=h6(this.annotation))&&this.Ah(d,c,this.annotation.id,a.session_data,this.annotation.Kb)},a),q.appendChild(c),d.push("iv-promo-with-button")}l&&a.Zc.appendChild(l);
m&&a.Zc.appendChild(m);n&&a.Zc.appendChild(n);a.$h.appendChild(a.Zc);q&&a.$h.appendChild(q);l=g.M("DIV","iv-promo-actions");a.g=g.M("BUTTON",["iv-promo-expand","ytp-button"]);a.g.title=g.N("YTP_EXPAND");a.context.g.S(a.g,"click",g.va(a.Cn,5E3),a);l.appendChild(a.g);g.R(a.g,!1);a.context.g.S(a.oa(),"mouseover",a.nD,a);a.context.g.S(a.oa(),"mouseout",a.mD,a);a.context.g.S(a.oa(),"touchend",g.va(a.Cn,5E3),a);a.o=g.M("BUTTON",["iv-promo-close","ytp-button"]);a.o.title=g.N("YTP_CLOSE");a.context.g.S(a.o,
"click","cta"==a.annotation.style&&b.text_line_3?a.cD:a.kN,a);l.appendChild(a.o);g.rh(a.oa(),d);f&&g.Re(a.oa(),f);g.Re(a.oa(),a.$h);g.Re(a.oa(),l)},D6=function(a){a.B||a.F||a.A||(g.O(a.oa(),"iv-promo-collapsed"),a.B=!0,a.C.start())},E6=function(a){a.C.stop();
a.B&&(g.th(a.oa(),["iv-promo-collapsed","iv-promo-collapsed-no-delay"]),a.B=!1,a.Zc&&a.Zc.removeAttribute("aria-hidden"),g.R(a.g,!1),g.R(a.o,!0))},Xpa=function(a,b){a.A||(a.A=g.Jd(function(){F6(this);
D6(this)},b,a))},F6=function(a){a.A&&(g.Kd(a.A),a.A=null)},G6=function(a,b,c){S5.call(this,a,b,c);
this.H=b;this.o=null;this.F=!1;this.A=null;this.B=!1;this.G=0;this.g=this.D=this.C=null},H6=function(a,b,c){K5.call(this,b,c);
this.Y=a;this.L=null;this.Ik=this.ga=this.B=this.Sa=!1;this.ka=null;this.Km=new g.Ld(g.w,c.C.useTabletControls?4E3:3E3);this.fa=new g.Ld(g.w);this.C=new U5(c,(0,g.z)(this.Ah,this),(0,g.z)(this.Kk,this));a=["div","iv-drawer",["div","iv-drawer-header",{"aria-role":"heading"},["span","iv-drawer-header-text"],["button",["iv-drawer-close-button","ytp-button"],{"aria-label":g.N("YTP_DRAWER_CLOSE_BUTTON_ARIA_LABEL"),tabindex:"0"}]],["div","iv-drawer-content"]];this.H=new g.V(a);this.D=this.H.element;this.da=
new g.gv(this.H,330);this.na=g.L("iv-drawer-header-text",this.D);this.A=g.L("iv-drawer-content",this.D);a=["iv-drawer-teaser"];a.push("iv-exp-cards-teaser-prominent");a=["div",a,["div","iv-drawer-teaser-box"],["div","iv-drawer-teaser-text"],["button","iv-drawer-open-button",{"aria-label":g.N("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-haspopup":"true"},["span"]]];new g.V(a);this.o=[];this.ca=this.J=this.F=this.O=this.g=null;this.ba=[];L5(this,0,1E3*c.videoData.lengthSeconds,"",this.UB,this.uC);this.G=this.$=
this.P=null},cqa=function(a,b){var c=b&&b.data&&b.data.card_type;
if(c&&Ypa[c]){c=new Ypa[c](b.id,b.data,b.Kb);a.Sa||(g.rh(a.oa(),["html5-stop-propagation","iv-drawer-manager"]),g.pm(a.Y,a.D,6),Zpa(a),a.J=g.L("ytp-cards-button"),a.ca=g.L("iv-drawer-close-button",a.D),a.Sa=!0);$pa(a,c.id);var d=aqa(a,c);if(d){var e={Tb:c,Om:d.element,ou:!1},f=bqa(a,e);g.pb(a.o,f,0,e);d.Ga(a.A,f);a.Oj();c.autoOpen?L5(a,c.startMs,0x8000000000000,c.id,g.va(a.lK,e)):(d=1E3*a.context.o.getCurrentTime(),5E3>d&&d>c.startMs&&a.lw(e),L5(a,c.startMs,c.startMs+1,c.id,g.va(a.lw,e)),I6(a))}}},
dqa=function(a,b){b.data.autoOpenMs&&L5(a,b.data.autoOpenMs,0x8000000000000,"",a.iN);
b.data.autoCloseMs&&L5(a,b.data.autoCloseMs,0x8000000000000,"",a.Uj);var c=b.data.headerText;g.ef(a.na,c);a.J&&a.J.setAttribute("title",c);b.data.eventId&&(a.L=b.data.eventId);a.P=new g.Tp(b.data.trackingParams);a.G=new g.Tp(b.data.closeTrackingParams);a.$=new g.Tp(b.data.iconTrackingParams)},$pa=function(a,b){var c=eqa(a,b);
c&&(c==a.g&&(a.g=null),a.Y.wx(c.Tb.id),g.We(c.Om),g.gb(a.o,c),a.Oj(),I6(a))},L6=function(a,b,c,d){if(!a.B){a.da.show();
a.O=new g.Ld(function(){g.O(this.context.o.getRootNode(),"ytp-iv-drawer-open")},0,a);
a.O.start();a.B=!0;a.N=(0,g.E)();J6(a.context.logger,a.L,7,void 0,d&&d.Tb?d.Tb.Kb:void 0);a.P&&a.G&&N5([a.P,a.G]);var e={TRIGGER_TYPE:b};(0,g.F)(a.o,function(a){a.ou||(a.ou=!0,K6(this.context.logger,a.Tb.Kb,a.Tb.o.OE,e));N5([a.Tb.C])},a);
$3(a.Y);c&&(a.F=new g.Ld(function(){this.V=this.J;this.ca.focus()},330,a),a.F.start())}},Zpa=function(a){a.context.g.S(g.L("iv-drawer-close-button",a.D),"click",a.mC,a);
a.context.g.S(a.A,"touchend",function(){this.Km.start()},a);
a.context.g.S(a.A,"scroll",a.zC,a);a.ka=g.Fk(a.A,"mousewheel",(0,g.z)(a.jN,a));a.context.A.subscribe("onHideControls",function(){this.Ik=!0},a);
a.context.A.subscribe("onShowControls",function(){this.Ik=!1},a);
a.context.A.subscribe("onVideoAreaChange",function(){this.Ik=g.qh(this.Y.getRootNode(),"ytp-autohide")},a);
a.ba.push(g.Hi("iv-teaser-shown",a.hF,a));a.ba.push(g.Hi("iv-teaser-clicked",a.gF,a))},aqa=function(a,b){switch(b.type){case "simple":return a6(a.C,b);
case "collaborator":var c=a.C,d=["div",["iv-card","iv-card-channel"],["a",["iv-click-target","g-hovercard"],{href:X5(c,b.url,b.id),"data-ytid":b.channelId},Z5(b.profileImageUrl),["div","iv-card-content",d6(c,b),["h2","iv-card-primary-link",b.title],b6(c,b)]]],d=new g.V(d);$5(c,d,b);return d;case "donation":return c=a.C,d=(0,g.z)(c.D,c,b),a6(c,b,d,d);case "episode":return c6(a.C,b,"iv-card-episode");case "movie":return c6(a.C,b,"iv-card-movie");case "playlist":return c=a.C,d=["div",["iv-card","iv-card-playlist"],
["a","iv-click-target",{href:X5(c,b.url,b.id)},Z5(b.B,["div","iv-card-image-overlay",["span","iv-card-playlist-video-count",b.playlistVideoCount.toString()]]),["div","iv-card-content",d6(c,b),V5(c,"h2","iv-card-primary-link",b.title),b6(c,b)]]],d=new g.V(d),$5(c,d,b),d;case "poll":return Lpa(a.C,b);case "productListing":var c=a.C,d=X5(c,b.url,b.id),e=!g.cb(b.offers),f=["iv-card"],k="",l=Y5(c,b);e&&(f.push("iv-card-product-listing"),k="iv-card-primary-link",l=b.offers[0],e=["div",null],l.price&&e.push(["div",
"iv-card-offer-price",l.price]),l.merchant&&e.push(["div","iv-card-offer-merchant",l.merchant]),l=e);e=b.sponsored?["div","iv-card-sponsored",g.N("YTP_SPONSORED"),["div","iv-ad-info-container",["div","iv-ad-info","{{adInfo}}"],["div","iv-ad-info-icon-container",["div","iv-ad-info-icon"],["div","iv-ad-info-callout"]]]]:"";d=["div",f,{tabindex:"0"},["a",["iv-card-image","iv-click-target"],{style:"background-image: url("+b.imageUrl+");",href:d,"aria-hidden":"true",tabindex:"-1"}],["div","iv-card-content",
e,["a","iv-click-target",{href:d},V5(c,"h2",k,b.title),l]]];d=new g.V(d);f=g.Pe("span");g.ef(f,g.N("YTP_SPONSORED_PRODUCT_INFO"));d.uc(f,"adInfo");$5(c,d,b);return d;case "tip":return c=a.C,d=(0,g.z)(c.G,c,b),a6(c,b,d,d);case "video":return c=a.C,d=X5(c,b.url,b.id),f=b.videoDuration?["span","iv-card-video-duration",b.videoDuration]:"",k=b.B?["span",["yt-badge","yt-badge-live"],g.N("YTP_LIVE_NOW")]:"",d=["div",["iv-card","iv-card-video"],["a","iv-click-target",{href:d},Z5(b.G,f),["div","iv-card-content",
d6(c,b),V5(c,"h2","iv-card-primary-link",b.title),b6(c,b),k]]],d=new g.V(d),$5(c,d,b),d}return null},bqa=function(a,b){if(0==a.o.length)return 0;
var c=g.Ya(a.o,function(a){return b.Tb.startMs>a.Tb.startMs||b.Tb.startMs==a.Tb.startMs&&b.Tb.timestamp>=a.Tb.timestamp?!0:!1});
return-1==c?0:c+1},fqa=function(a){return a.g?"productListing"==a.g.Tb.type:(0,g.qj)(a.o,function(a){return"productListing"==a.Tb.type})},I6=function(a){g.P(a.Y.getRootNode(),"ytp-cards-shopping-active",fqa(a))},gqa=function(a,b){if(a.H.g){var c=new r5([0,
a.A.scrollTop],[0,b.Om.offsetTop],600,Spa);g.rv(a.context.B,c,"animate",function(a){this.A.scrollTop=a.y},void 0,a);
g.rv(a.context.B,c,"finish",function(a){this.A.scrollTop=a.y},void 0,a);
c.play()}else a.H.Ab(!0),a.A.scrollTop=b.Om.offsetTop,a.H.Ab(!1)},M6=function(a){return a.g&&a.g.Tb?a.g.Tb:a.o[0]&&a.o[0].Tb?a.o[0].Tb:null},eqa=function(a,b){return g.Xa(a.o,function(a){return a.Tb.id==b},a)},jqa=function(a){if(!a)return null;
var b=p5(a.id),c=p5(a.author),d=K4(a.type,hqa),e=K4(a.style,N6),f=L4(q5(a.TEXT)),k=L4(a.data),k=0!=k.length?g.qf(k):{},l;var m=q5(a.segment);m?(p5(m.timeRelative),l=p5(m.spaceRelative),l=(m=o5(m.movingRegion,Bpa))?new zpa(l,m):null):l=null;var m=o5(a.action,Rpa),n=o5(a.trigger,Opa),q=J5(q5(a.appearance));q||(q=J5({}));var t=K4(a.coordinate_system,iqa,"video_relative"),v=J4(a.closeable,!0),x=L4(a.html_blob);a=L4(a.log_data);return b&&d?new g6(b,c,d,e,f,l,m,n,q,t,v,0,x,k,a):null},kqa=function(a,b,c,
d,e,f,k){this.g=a;
this.B=b;this.C=c;this.videoData=d;this.logger=e;this.o=f;this.A=k},lqa=function(a){this.Y=a;
this.g={}},K6=function(a,b,c,d){if(b){var e=O6(a,b);
a.g[b]=e["p-time"];e["iv-event"]=e.link||e["l-class"]||e["link-id"]?2:7;b=P6(a,"cta_annotation_shown",e,c);Q6(a,e,mqa(b,d))}},M5=function(a,b,c,d,e,f){if(b){var k=O6(a,b);
k["iv-event"]=3;k["i-time"]=a.g[b]||"";g.ac(k,d||{});b=P6(a,"cta_annotation_clicked",k,e);Q6(a,k,b,c,f)}},R6=function(a,b){if(b){var c=O6(a,b);
c["iv-event"]=4;c["i-time"]=a.g[b]||"";var d=P6(a,"cta_annotation_closed",c);Q6(a,c,d)}},mqa=function(a,b){return b?(0,g.Q)(a,g.va(function(a,b){return g.Uv(b,a)},b||{})):a},P6=function(a,b,c,d){d=g.kb(d||[]);
if(30==c["a-type"]){a:{c=c["a-id"];a=a.Y.getVideoData();if(a.$k){if((b=a.$k[b])&&g.Ps.test(b)){a=g.Ca("[ANNOTATION_ID]");0<=b.indexOf("[ANNOTATION_ID]")?b=b.replace("[ANNOTATION_ID]",c):0<=b.indexOf(a)&&(b=b.replace(a,c));break a}}else if(a.Ba){b=g.Ph(a.Ba,{label:b,value:"a_id="+c});break a}b=""}b&&d.push(b)}return d},Q6=function(a,b,c,d,e){var f=1,k,l=-1;
if(d){var m=!1;k=function(){f--;f||m||((0,window.clearTimeout)(l),m=!0,d())};
l=(0,window.setTimeout)(function(){m=!0;d()},1E3)}(0,g.F)(c||[],function(a){f++;
g.Si(a,k)});
e&&(f++,0!=e&&a.Y.Dg(e,k));nqa(a,b,k)},O6=function(a,b){var c={};
if(b){var d=new g.qg(b);(0,g.F)(d.sb(),function(a){c[a]=(0,window.escape)(d.get(a,""))})}c["p-time"]=a.Y.getCurrentTime().toFixed(2);
c.ps=g.U(a.Y).o;return c},J6=function(a,b,c,d,e){e=O6(a,e);
e["iv-event"]=c;b&&(e.ei=b);e["a-id"]||(e["a-id"]="card:drawer");e["a-type"]=51;Q6(a,e,d)},S6=function(a,b,c,d){c&&(c=O6(a,c),c["iv-event"]=b,Q6(a,c,d))},nqa=function(a,b,c){g.am(a.Y,"iv",b,c)},oqa=function(a){a=H4(a);
a=a.replace(/https?:\/\//g,"");return U4(a)?(a=g.Nh(a))&&a.v?a.v:null:null},pqa=function(a){a=H4(a);
if(!a)return null;a=a.replace(/https?:\/\//g,"");var b;(b=!U4(a))||(b=g.Uf(g.Tf(a)[5]||null)||"",b=b.split("/"),b="/"+(1<b.length?b[1]:""),b="/watch"!=b);if(b)return null;b=g.Nh(a);if(!b||!b.v)return null;if(b.t)return r6(b.t);a=a.split("#",2);return!a||2>a.length?null:(a=g.Lh(a[1]))&&a.t?r6(a.t):-1},qqa=function(a,b,c,d,e,f,k){a=a.clone();
var l=p6(b,c);c=g.nk(b);k=k?k.clone():c.clone();a=g.yv(a,k,l,d,e,f);if(a.status&496)return a.status;g.bk(b,g.Ef(a.rect));k=g.Df(a.rect);g.we(c,k)||(d=k,f=g.He(g.Be(g.ze(b)).g),!g.Ke||g.oc("10")||f&&g.oc("8")?(b=b.style,g.Rj?b.MozBoxSizing="border-box":g.rc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(d.width,0)+"px",b.height=Math.max(d.height,0)+"px"):(e=b.style,f?(g.Ke?(f=d4(b,"paddingLeft"),c=d4(b,"paddingRight"),k=d4(b,"paddingTop"),l=d4(b,"paddingBottom"),f=new g.yf(k,
c,l,f)):(f=g.Yj(b,"paddingLeft"),c=g.Yj(b,"paddingRight"),k=g.Yj(b,"paddingTop"),l=g.Yj(b,"paddingBottom"),f=new g.yf((0,window.parseFloat)(k),(0,window.parseFloat)(c),(0,window.parseFloat)(l),(0,window.parseFloat)(f))),g.Ke&&!g.pc(9)?(c=c4(b,"borderLeft"),k=c4(b,"borderRight"),l=c4(b,"borderTop"),b=c4(b,"borderBottom"),b=new g.yf(l,k,b,c)):(c=g.Yj(b,"borderLeftWidth"),k=g.Yj(b,"borderRightWidth"),l=g.Yj(b,"borderTopWidth"),b=g.Yj(b,"borderBottomWidth"),b=new g.yf((0,window.parseFloat)(l),(0,window.parseFloat)(k),
(0,window.parseFloat)(b),(0,window.parseFloat)(c))),e.pixelWidth=d.width-b.left-f.left-f.right-b.right,e.pixelHeight=d.height-b.top-f.top-f.bottom-b.bottom):(e.pixelWidth=d.width,e.pixelHeight=d.height)));return a.status},T6=function(a){return"creator-endscreen-editor"===a},rqa=function(a,b){function c(a){return a.baseUrl}
function d(a){if(a&&a.runs)return(0,g.Q)(a.runs,function(a){return a.text}).join("")}
function e(a){var b=[];a.videoId&&b.push("v="+a.videoId);a.playlistId&&b.push("list="+a.playlistId);a.startTimeSeconds&&b.push("t="+a.startTimeSeconds);return"/watch?"+b.join("&")}
var f={};f.startMs=(0,window.parseInt)(a.startMs,10);f.impressionUrls=(0,g.Q)(a.impressionUrls||[],c);f.skip=a.skipEndscreen;f.visualElement=new g.Tp(a.trackingParams);f.elements=(0,g.Q)(a.elements||[],function(f,l){var k=f.endscreenElementRenderer,n={},q=k.style,t=k.endpoint;n.id="element-"+l;n.type=q;n.title=d(k.title);n.metadata=d(k.metadata);n.callToAction=d(k.callToAction);n.$m=k.image;n.Kj=k.animatedImage;n.left=(0,window.parseFloat)(k.left);n.width=(0,window.parseFloat)(k.width);n.top=(0,window.parseFloat)(k.top);
n.aspectRatio=(0,window.parseFloat)(k.aspectRatio);n.startMs=(0,window.parseInt)(k.startMs,10);n.endMs=(0,window.parseInt)(k.endMs,10);n.gd={itct:t.click_tracking_params};n.Th=k.title.accessibility.accessibilityData.label;n.impressionUrls=(0,g.Q)(k.impressionUrls||[],c);n.Jt=(0,g.Q)(k.hovercardShowUrls||[],c);n.clickUrls=(0,g.Q)(t.loggingUrls||[],c);n.visualElement=new g.Tp(a.trackingParams);if("VIDEO"==q)n.targetUrl=e(t.watchEndpoint),n.Gi=!1,n.$i=b,n.videoDuration=d(k.videoDuration);else if("PLAYLIST"==
q)n.targetUrl=e(t.watchEndpoint),n.Gi=!1,n.$i=b,n.playlistLength=d(k.playlistLength);else if("CHANNEL"==q)if(q=t.browseEndpoint.browseId,n.channelId=q,n.targetUrl="/channel/"+q,n.Gi=!1,n.$i="new",n.lo=!!k.hovercardButton,n.lo){n.htmlBlob=k.htmlBlob;var k=k.hovercardButton.subscribeButtonRenderer,v;k.subscribed?(t=d(k.subscriberCountWithUnsubscribeText),v=d(k.subscriberCountText)):(t=d(k.subscriberCountText),v=d(k.subscriberCountWithSubscribeText));q=d(k.unsubscribedButtonText);q.match(/[0-9]/)||"0"!==
t&&(q+=" "+t);t=d(k.unsubscribeButtonText)+" "+v;n.subscribeButton={subscribed:k.subscribed,feature:"endscreen",subscribeText:q,unsubscribeText:t,enabled:k.enabled}}else n.subscribersText=d(k.subscribersText);else"WEBSITE"==q&&(n.targetUrl=t.urlEndpoint.url,n.Gi=!0,n.$i="new",n.Kt=k.icon.thumbnails[0].url);return n});
return f},sqa=function(a){var b={};
b.startMs=a.startMs;b.impressionUrls=a.impressionUrls;b.skip=a.skip||!1;b.visualElement=new g.Tp(a.trackingParams);b.elements=(0,g.Q)(a.elements||[],function(a){var b={};b.id=a.id;b.type=a.type;b.title=a.title;b.metadata=a.metadata;b.callToAction=a.callToAction;b.imageUrl=a.imageUrl;b.$m=a.displayImages;b.Kj=a.animatedDisplayImages;b.Kt=a.iconUrl;b.left=a.left;b.width=a.width;b.top=a.top;b.aspectRatio=a.aspectRatio;b.startMs=a.startMs;b.endMs=a.endMs;b.videoDuration=a.videoDuration;b.playlistLength=
a.playlistLength;b.channelId=a.channelId;b.htmlBlob=a.htmlBlob;b.subscribeButton=a.subscribeButton;b.subscribersText=a.subscribersText;b.lo=a.isSubscribe;b.targetUrl=a.targetUrl;b.Gi="WEBSITE"==b.type;b.gd=a.sessionData||[];b.$i=a.targetTab;b.Th=a.accessibilityStr;b.SE=a.isPlaceholder;b.impressionUrls=a.impressionUrls;b.Jt=a.hoverUrls;b.IW=a.dismissUrls;b.clickUrls=a.clickUrls;b.visualElement=new g.Tp(b.gd.itct);return b});
return b},tqa=function(){var a=g.ih("ROOT_VE_TYPE",void 0);
return a?new g.Tp(void 0,a,void 0):null},wqa=function(a,b,c){if(!(a.nodeName in uqa))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);
else if(a.nodeName in vqa)b.push(vqa[a.nodeName]);else for(a=a.firstChild;a;)wqa(a,b,c),a=a.nextSibling},xqa=function(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||xqa(a,b,c,d))return!0;
a=a.nextSibling}return!1},U6=function(a){g.Vt.call(this,a);
this.G=0;this.A={};this.H={};this.la=new lqa(a);this.D=new g.rn(this);g.J(this,this.D);this.D.U(this.g,"onVideoAreaChange",(0,g.z)(this.aa,this,"onVideoAreaChange"));this.D.U(this.g,"onHideControls",(0,g.z)(this.aa,this,"onHideControls"));this.D.U(this.g,"onShowControls",(0,g.z)(this.aa,this,"onShowControls"));this.D.U(this.g,"resize",(0,g.z)(this.aa,this,"resize"));this.D.U(this.g,"presentingplayerstatechange",(0,g.z)(this.aa,this,"presentingplayerstatechange"));this.subscribe("onHideControls",this.$G,
this);this.subscribe("onShowControls",this.GI,this);this.subscribe("presentingplayerstatechange",this.dI,this);this.subscribe("resize",this.yo,this);this.subscribe("d",this.EM,this);this.subscribe("c",this.Lf,this);this.subscribe("a",this.OF,this);this.subscribe("b",this.oG,this);g.U(this.g).G.subscribe("vast_info_card_add",this.Fv,this);this.g.addEventListener("crn_annotations_module",this.Px,this);this.g.addEventListener("crx_annotations_module",this.Qx,this);this.J=g.M("DIV",["video-legacy-annotations",
"html5-stop-propagation"]);this.O=g.M("DIV","video-custom-annotations");this.B=new g.V(["div",["ytp-player-content","ytp-iv-player-content"]]);g.J(this,this.B);g.pm(this.g,this.B.element,5);this.B.ma();this.C=new g.V(["div",["ytp-iv-video-content"]]);g.J(this,this.C);a=g.M("DIV","video-annotations",this.J,this.O);this.C.element.appendChild(a);this.F=this.o=null;this.L=[];a=g.U(this.g);var b=this.g.getVideoData();(1!=(a.Hg||b.ue)||b.Tq)&&null===a.G.get(b.videoId)||this.load()},yqa=function(a,b){for(var c=
{},d=0;d<b.attributes.length;d++){var e=b.attributes[d];
c[e.name]=e.nodeValue}for(d=0;d<b.childNodes.length;d++)if(e=b.childNodes[d],e.tagName){var f;if(c[e.tagName])f=c[e.tagName];else if("html_blob"==e.tagName||"data"==e.tagName){g.U(a.g).experiments.g("text_content_for_xml_node_value")&&e.textContent?c[e.tagName]=e.textContent.trim():0<e.childNodes.length&&(f=e.childNodes[0].nodeValue,c[e.tagName]="string"==typeof f?f.trim():f);continue}else f=[],c[e.tagName]=f;e&&"TEXT"==e.tagName?1==e.childNodes.length&&3==e.childNodes[0].nodeType?f.push(e.childNodes[0].nodeValue):
f.push(""):e&&f.push(yqa(a,e))}return c},zqa=function(a,b,c){return!(a.loaded&&a.G==b&&a.g.getVideoData().videoId==c)},Bqa=function(a,b){var c=Aqa(a,b);
if(!c&&"marker"!=b.type)return null;k6(b,function(a){a=(0,g.z)(this.dJ,this,b.id,a);this.subscribe("ivTrigger:"+b.id,a)},a);
return new t6(a.ca,b,c)},Cqa=function(a,b){var c=U6.o(),d=null;
switch(b.type){case "branding":if(g.U(a.g).df)break;a.B.element.appendChild(c);d=new G6(c,V6(a),b);break;case "promotion":g.pm(a.g,c,5),d=new C6(c,V6(a),b)}d&&d.tl();return d},Fqa=function(a){var b=a.g.getVideoData();
if(b.ra){var c=g.U(a.g),d=c.G.get(b.videoId);if(d){var e={format:"XML",Ec:{}};c.experiments.g("disable_iv_cors")||(e.method="POST",e.withCredentials=!0);"gaming"==c.o&&(e.Ec.gaming="1");e.fd=(0,g.z)(function(a,b,c){zqa(this,a,b)||(a=g.qi(c)&&c.responseXML?c.responseXML:null)&&W6(this,a)},a,a.G,b.videoId);
g.Zp()&&(e.fd=Dqa(a,e.fd));e.Ub={ic_only:"1"};Eqa(e,d);g.Pi(b.ra,e)}}},Eqa=function(a,b){a.method="POST";
a.Ub=a.Ub||{};b.eg&&(a.Ub.ic_xml=b.eg);b.Eh&&(a.Ub.ic_track=b.Eh)},Gqa=function(a){var b=new g.V(["div"]);
g.R(b.element,!1);var c=new H6(a.g,b.element,V6(a));b.Ga(a.B.element);c.tl();return c},V6=function(a){a.F||(a.F=new kqa(new g.Fv(a),new g.pv(a),g.U(a.g),a.g.getVideoData(),a.la,a.g,a.ca));
return a.F},W6=function(a,b){var c=!1;
Hqa(b);for(var d=b.getElementsByTagName("annotation"),e=0;e<d.length;e++){var f=yqa(a,d[e]),k=null;try{k=jqa(f)}catch(l){}k&&(U6.A(k)?(f=Cqa(a,k))&&(a.H[k.id]=f):U6.B(k)?(a.o||(a.o=Gqa(a)),"card"==k.type?cqa(a.o,k):dqa(a.o,k),c=!0):(f=Bqa(a,k))&&(a.A[k.id]=f))}c&&($3(a.g),a.yo());g.Gb(a.A,function(a){if(a.g){var b=a.annotation;(a=a.g)&&b.o&&b.o.o&&(b=this.A[b.o.o])&&(a.V=b.annotation)}},a)},Hqa=function(a){if((a=a.getElementsByTagName("annotations"))&&!(1>a.length)&&(a=a[0].getAttribute("itct"))){var b=
g.Kq();
if(b){var c=tqa();c&&q6(b,c,[new g.Tp(a)])}}},Jqa=function(a,b,c,d){d?Iqa(a,b,c):X6(a,b,c)},X6=function(a,b,c){if(b=a.A[b])v6(b),c&&c.o?(a=(0,g.z)(a.Gt,a,b),b.o=new g.Ld(a,2E3),b.o.start()):a.Gt(b)},Iqa=function(a,b,c){if(b=a.A[b])v6(b),c&&c.B?(a=(0,g.z)(a.zw,a,b),b.o=new g.Ld(a,2E3),b.o.start()):a.zw(b)},Kqa=function(a,b,c){if("new"==b.target)return!1;
var d=H4(b);if(!d)return!1;d=d.replace(/https?:\/\//g,"");if(!U4(d))return!1;d=g.Nh(d);if(d.list||d.p)return!1;b=oqa(b);if(!b)return!1;if(c==b)return!0;a=g.U(a.g);return a.C&&a.gb?!0:!1},Aqa=function(a,b){if(Lqa(b)){var c=b.C||i6(b,function(a){return"click"==a||"rollOut"==a||"rollOut"==a});
return new w6(b,(0,g.z)(a.J.appendChild,a.J),a.g,a.ca,c)}return null},Lqa=function(a){if("highlight"==a.type||"widget"==a.type)return!0;
if("text"==a.type)for(var b in N6)if(a.style==N6[b])return!0;return!1},Y6=function(a,b,c,d){a.aa(i5(b,d),c,d)},Dqa=function(a,b){return(0,g.z)(function(){if(!this.isDisposed()){var a=Array.prototype.slice.call(arguments,0);
a.unshift(b);b=g.va.apply(window,a);this.L.push(g.$p(b,void 0))}},a)},Z6=function(a,b,c,d,e,f,k){var l,m;
if(l=c.offsetParent){var n="HTML"==l.tagName||"BODY"==l.tagName;n&&"static"==g.Zj(l,"position")||(m=g.fk(l),n||(n=(n=v5(l))&&g.Rj?-l.scrollLeft:!n||g.Es&&g.oc("8")||"visible"==g.Zj(l,"overflowX")?l.scrollLeft:l.scrollWidth-l.clientWidth-l.scrollLeft,m=g.ue(m,new g.se(n,l.scrollTop))))}l=m||new g.se;m=g.ok(a);(n=g.gk(a))&&g.Cf(m,a5(n));var n=g.Be(a),q=g.Be(c);if(n.g!=q.g){var t=n.g.body,q=g.ik(t,g.pf(q)),q=g.ue(q,g.fk(t));!g.Ke||g.pc(9)||g.He(n.g)||(q=g.ue(q,g.Le(n.g)));m.left+=q.x;m.top+=q.y}a=p6(a,
b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new g.se(b,m.top+(a&1?m.height:0));b=g.ue(b,l);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var v;k&&(v=g.gk(c))&&(v.top-=l.y,v.right-=l.x,v.bottom-=l.y,v.left-=l.x);return qqa(b,c,d,f,v,k,void 0)},$6=function(a,b,c,d,e,f,k){this.date=g.qa(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,k||0):new Date(a&&a.getTime?a.getTime():(0,g.E)())},a7=function(a){return(a=g.Ce(a))?g.qk(a)&&!g.qh(a,"hid"):!1},b7=function(a){g.Vt.call(this,a);
this.o=null;this.F=!1;this.B=null;this.A={};this.D={};this.C=null;this.J=!1;this.L=null;this.O=g.U(this.g).experiments.g("enable_creator_endscreen_moving_thumbs_on_hover");this.G=[];this.P=g.U(this.g).experiments.g("enable_creator_endscreen_html5_renderers");a=g.U(a).g;this.N="embedded"==a||"profilepage"==a;this.H=new g.tt(null);this.g.addEventListener("crn_creatorendscreen",this.Rx,this);this.g.addEventListener("crx_creatorendscreen",this.Sx,this);this.load()},c7=function(a,b){g.mm(a.g,"creatorendscreen");
a.C&&(a.C.dispose(),a.C=null);for(var c in a.A){var d=a.A[c];d.dispose()}a.A={};a.D={};0<a.G.length&&(a.G.forEach(function(a){a.dispose()}),a.G.length=0);
if((a.o=b)&&b.elements){Mqa(a);c=[];d=new g.wm(b.startMs,0x7ffffffffffff,{id:"ytp-ce-in-endscreen",namespace:"creatorendscreen"});c.push(d);a.C=new g.V(["div","ytp-ce-shadow"]);g.pm(a.g,a.C.element,5);for(var e=0;e<b.elements.length;++e){var f=b.elements[e],d=Nqa(a,f);a.A[f.id]=d;a.D[f.id]=f;g.pm(a.g,d.element,5);var k=new g.wm(f.startMs,f.endMs,{id:"ytp-ce-element-"+f.id,namespace:"creatorendscreen"});c.push(k);Oqa(a,d,f)}g.jm(a.g,c);a.Jp()}},Mqa=function(a){var b=tqa();
b&&q6(g.Kq()||"",b,[a.o.visualElement])},Nqa=function(a,b){var c=null;
switch(b.type){case "VIDEO":c=["div",["ytp-ce-element","ytp-ce-video"],{tabindex:0,"aria-label":b.Th,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",d7(e7(a,b,!1)),["div","ytp-ce-covering-animated-image",d7(e7(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-video-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.ut(a.H,b.title||"")},b.title],["div","ytp-ce-video-duration",b.videoDuration]]];
c=new g.V(c);break;case "PLAYLIST":c=["div",["ytp-ce-element","ytp-ce-playlist"],{tabindex:0,"aria-label":b.Th,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",d7(e7(a,b,!1)),["div","ytp-ce-covering-animated-image",d7(e7(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-playlist-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.ut(a.H,b.title||"")},b.title],["div","ytp-ce-playlist-count",
["div","ytp-ce-playlist-icon"],["div","ytp-ce-playlist-count-text",b.playlistLength]]]];c=new g.V(c);break;case "CHANNEL":var c=["div",["ytp-ce-element","ytp-ce-channel",b.lo?"ytp-ce-channel-this":"ytp-ce-channel-that"],{tabindex:0,"aria-label":b.Th,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",
["div","ytp-ce-expanding-overlay-body-padding",["a",["ytp-ce-channel-title","ytp-ce-link"],b.title,{href:b.targetUrl,target:"_blank",tabindex:"-1",dir:g.ut(a.H,b.title||"")}],b.htmlBlob||b.subscribeButton?["div","ytp-ce-subscribe-container",["div","ytp-ce-channel-subscribe"]]:"",b.subscribersText?["div","ytp-ce-channel-subscribers-text",b.subscribersText]:"",b.metadata?["div",["ytp-ce-channel-metadata","yt-ui-ellipsis","yt-ui-ellipsis-3"],b.metadata]:""]]]],["div","ytp-ce-expanding-image",d7(e7(a,
b,!1))]],c=new g.V(c),d=g.De("div","ytp-ce-channel-subscribe",c.element)[0];if(b.subscribeButton){g.O(d,"ytp-ce-subscribe-button");var e=new g.eu(b.subscribeButton.subscribeText,b.subscribeButton.unsubscribeText,b.subscribeButton.enabled,b.channelId,!!b.subscribeButton.subscribed,b.subscribeButton.feature,null,a.g);d.appendChild(e.element);a.G.push(e)}else b.htmlBlob&&s6(d,b.htmlBlob);break;case "WEBSITE":c=["div",["ytp-ce-element","ytp-ce-website"],{tabindex:0,"aria-label":b.Th,"aria-hidden":!0},
["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",["div","ytp-ce-expanding-overlay-body-padding",["div","ytp-ce-website-title",{dir:g.ut(a.H,b.title||"")},b.title],["div","ytp-ce-website-metadata",b.metadata],["a",["ytp-ce-website-goto","ytp-ce-link"],b.callToAction,{href:b.targetUrl,target:"_blank",tabindex:"-1"}]]]]],
["div","ytp-ce-expanding-image",d7(e7(a,b,!1))],["div","ytp-ce-expanding-icon",d7(b.Kt)]],c=new g.V(c)}b.SE&&g.O(c.element,"ytp-ce-placeholder");return c},Pqa=function(a,b,c){a.O&&(a=g.L("ytp-ce-covering-animated-image",b.element))&&(a.style.display=c?"block":"none")},d7=function(a){return a?{style:"background-image: url("+a+")"}:{}},e7=function(a,b,c){var d;
b.$m&&(d=b.$m.thumbnails);!T6(g.U(a.g).o)&&a.L&&b.Kj&&b.Kj.thumbnails&&(!a.O||c)&&(d=b.Kj.thumbnails);return d?d[d.length-1].url:null},Oqa=function(a,b,c){b.S("mouseenter",(0,g.z)(a.Ip,a,b,c));
b.S("mouseleave",(0,g.z)(a.Tx,a,b,c));b.S("click",(0,g.z)(function(a){g.O(a.element,"ytp-ce-element-hover")},a,b));
b.S("click",(0,g.z)(a.Yu,a,c));b.S("keypress",(0,g.z)(a.Yu,a,c));b.S("focus",(0,g.z)(function(a,b){g.O(a.element,"ytp-ce-force-expand");this.Ip(a,b)},a,b,c));
b.S("blur",(0,g.z)(function(a,b){g.sh(a.element,"ytp-ce-force-expand");this.Tx(a,b)},a,b,c));
b.S("touchstart",(0,g.z)(a.Ip,a,b,c));var d=g.L("ytp-ce-expanding-overlay-hider",b.element);d&&b.U(d,"touchstart",function(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();g.sh(b.element,"ytp-ce-element-hover");g.sh(b.element,"ytp-ce-force-expand")});
var e=(0,g.z)(function(a,b,c){c=g.Ze(c);(0,g.F)(c,function(c){e(c);g.kf(c)&&(a.U(c,"focus",(0,g.z)(function(a,b){g.O(a.element,"ytp-ce-force-expand");f7(this,b.id,!0)},this,a,b)),a.U(c,"click",(0,g.z)(function(a,b){g.O(a.element,"ytp-ce-force-expand");
f7(this,b.id,!0);this.J=!0},this,a,b)),a.U(c,"blur",(0,g.z)(function(a,b){this.J?(this.J=!1,a.element.focus()):(g.sh(a.element,"ytp-ce-force-expand"),f7(this,b.id,!1))},this,a,b)))},this)},a,b,c);
e(b.element)},f7=function(a,b,c){g.P(a.C.element,"ytp-ce-shadow-show",c);
for(var d in a.A)d!=b&&g.P(a.A[d].element,"ytp-ce-element-shadow-show",c)},g7=function(a,b,c){function d(){k||(f++,f==e.length&&(l.stop(),c&&c()))}
if(!b||T6(g.U(a.g).o))c&&c();else{var e=Qqa(a,b),f=0,k=!1,l=new g.Ld(function(){k=!0;c&&c()},1E3,a);
l.start();for(a=0;a<e.length;a++)g.Si(e[a],d)}},h7=function(a,b,c){g7(a,b.clickUrls,c);
b.Gi&&u5(b.visualElement)},Qqa=function(a,b){for(var c=a.g.getVideoData().clientPlaybackNonce,d=a.g.getCurrentTime().toFixed(2),c={CPN:c,
AD_CPN:c,MT:d},d=[],e=0;e<b.length;e++)d.push(Rqa(b[e],c));return d},Rqa=function(a,b){return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g,function(a){var c=(0,window.unescape)(a),c=c.substring(1,c.length-1);
return b[c]?(0,window.escape)(b[c]):a})},Sqa=function(a,b){var c=new window.Image;
c.onload=(0,g.z)(function(){this.L=0<c.width&&0<c.height;b()},a);
c.onerror=(0,g.z)(function(){this.L=!1;b()},a);
c.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},Tqa=function(){g.P(window.document.body,"hide-players",!1);
(0,g.F)(g.Ee("preserve-players"),function(a){g.sh(a,"preserve-players")})},Uqa=function(a,b){var c=g.De(a,null,b);
return c.length?c[0]:null},i7=function(a,b){a=g.Ce(a);
b=g.Ce(b);return!!g.lf(a,function(a){return a===b},!0,void 0)},j7=function(a){var b=a.__yt_uid_key;
b||(b=(0,g.S2)(),a.__yt_uid_key=b);return b},Vqa=function(a,b,c){g.qh(a,b)&&(g.sh(a,b),g.O(a,c))},k7=function(a,b){a&&(a.dataset?delete a.dataset[g.jh(b)]:a.removeAttribute("data-"+b))},l7=function(a){if(g.Q2&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");
else{var b=[];wqa(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");g.Q2||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a},m7=function(a,b){var c=[];
return xqa(a,b,c,!0)?c[0]:void 0},n7=function(a){g.Up.call(this,1,arguments);
this.g=a},o7=function(a,b,c,d,e){g.Up.call(this,2,arguments);
this.source=e||null},Wqa=function(a,b,c){g.Up.call(this,1,arguments);
this.g=a;this.o=b},p7=function(a,b,c,d,e,f,k){g.Up.call(this,1,arguments);
this.g=d||null;this.source=k||null},q7=function(a,b,c){var d;
switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return g.lf(c,function(a){return g.qh(a,b)},!0,d)},s7=function(a){var b="mouseover"==a.type&&"mouseenter"in r7||"mouseout"==a.type&&"mouseleave"in r7,c=a.type in r7||b;
if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=r7[b],d;for(d in c.o){var e=q7(b,d,a.target);e&&!g.lf(a.relatedTarget,function(a){return a==e},!0)&&c.Jb(d,e,b,a)}}if(b=r7[a.type])for(d in b.o)(e=q7(a.type,d,a.target))&&b.Jb(d,e,a.type,a)}},t7=function(a){this.C=a;
this.F={};this.H=[];this.G=[]},Z=function(a,b){return"yt-uix"+(a.C?"-"+a.C:"")+(b?"-"+b:"")},u7=function(a,b,c){a.H.push(g.Hi(b,c,a))},v7=function(a,b,c){a.G.push(g.tq(b,c,a))},Xqa=function(a,b){g.kh(a,"tooltip-text",b)},w7=function(){t7.call(this,"button");
this.g=null;this.A=[];this.o={}},Yqa=function(a,b,c,d,e){var f=a7(c),k=9==d.keyCode;
k||32==d.keyCode||13==d.keyCode?(d=x7(a,c))?(b=g.af(d),"a"==b.tagName.toLowerCase()?g.Ru(b.href):a4(b)):k&&y7(a,b):f?27==d.keyCode?(x7(a,c),y7(a,b)):e(b,c,d):(a=g.qh(b,Z(a,"reverse"))?38:40,d.keyCode==a&&(a4(b),d.preventDefault()))},x7=function(a,b){var c=Z(a,"menu-item-highlight"),d=g.L(c,b);
d&&g.sh(d,c);return d},Zqa=function(a,b,c){g.O(c,Z(a,"menu-item-highlight"));
var d=c.getAttribute("id");d||(d=Z(a,"item-id-"+g.ua(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)},$qa=function(a,b,c,d){var e=b.length;
a=(0,g.ab)(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a},z7=function(a,b){var c=b.iframeMask;
c||(c=window.document.createElement("iframe"),c.src='javascript:""',c.className=Z(a,"menu-mask"),g.fv(c),b.iframeMask=c);return c},A7=function(a,b,c,d){var e=g.nf(b,Z(a,"group")),f=!!a.va(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,k=8,l=g.ok(b);
if(g.qh(b,Z(a,"reverse"))){f=8;k=9;l=l.top+"px";try{c.style.maxHeight=l}catch(q){}}g.qh(b,"flip")&&(g.qh(b,Z(a,"reverse"))?(f=12,k=13):(f=13,k=12));var m;a.va(b,"button-has-sibling-menu")?m=g.ek(e):a.va(b,"button-menu-root-container")&&(m=ara(a,b));g.Ke&&!g.oc("8")&&(m=null);var n;m&&(n=g.ok(m),n=new g.yf(-n.top,n.left,n.top,-n.left));m=new g.se(0,1);g.qh(b,Z(a,"center-menu"))&&(m.x-=Math.round((g.nk(c).width-g.nk(b).width)/2));d&&(m.y+=g.Le(window.document).y);if(a=z7(a,b))b=g.nk(c),a.style.width=
b.width+"px",a.style.height=b.height+"px",Z6(e,f,a,k,m,n,197),d&&g.Vj(a,"position","fixed");Z6(e,f,c,k,m,n,197)},ara=function(a,b){if(a.va(b,"button-menu-root-container")){var c=a.va(b,"button-menu-root-container");
return g.nf(b,c)}return window.document.body},y7=function(a,b){if(b){var c=B7(a,b);
if(c){a.g=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");g.fv(c);a.Ng(b,"button-menu-action",!1);var d=z7(a,b),e=j7(c).toString();delete a.o[e];g.$g(function(){d&&d.parentNode&&(g.fv(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=g.nf(b,Z(a,"group")),f=[Z(a,"active")];
e&&f.push(Z(a,"group-active"));g.th(b,f);g.Ki("yt-uix-button-menu-hide",b);g.Gk(a.A);a.A.length=0}},bra=function(a,b,c){var d=Z(a,"menu-item-selected");
(0,g.F)(g.Ee(d,b),function(a){g.sh(a,d)});
g.O(c.parentNode,d)},B7=function(a,b){if(!b.widgetMenu){var c=a.va(b,"button-menu-id"),c=c&&g.Ce(c),d=Z(a,"menu");
c?g.rh(c,[d,Z(a,"menu-external")]):c=g.L(d,b);b.widgetMenu=c}return b.widgetMenu},cra=function(a,b){if(a.va(b,"button-toggle")){var c=g.nf(b,Z(a,"group")),d=Z(a,"toggled"),e=g.qh(b,d);
if(c&&a.va(c,"button-toggle-group")){var f=a.va(c,"button-toggle-group");(0,g.F)(g.Ee(Z(a),c),function(a){a!=b||"optional"==f&&e?(g.sh(a,d),a.removeAttribute("aria-pressed")):(g.O(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),g.uh(b,d)}},C7=function(a){a.g&&y7(a,a.g)},D7=function(a){t7.call(this,a);
this.A=null},dra=function(a,b,c){var d=c||b,e=Z(a,"card");
c=a.ac(d);var f=g.Ce(Z(a,"card")+j7(d));if(f)return a=g.L(Z(a,"card-body"),f),g.cf(a,c)||(g.We(c),a.appendChild(c)),f;f=window.document.createElement("div");f.id=Z(a,"card")+j7(d);f.className=e;(d=a.va(d,"card-class"))&&g.rh(f,d.split(/\s+/));d=window.document.createElement("div");d.className=Z(a,"card-border");b=a.va(b,"orientation")||"horizontal";e=window.document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var k=window.document.createElement("div");k.className=
Z(a,"card-body");a=window.document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;g.We(c);k.appendChild(c);d.appendChild(a);d.appendChild(k);f.appendChild(e);f.appendChild(d);window.document.body.appendChild(f);return f},era=function(a,b,c){var d=a.va(b,"orientation")||"horizontal",e=g.L(Z(a,"anchor"),b)||b,f=a.va(b,"position"),k=!!a.va(b,"force-position"),l=a.va(b,"position-fixed"),d="horizontal"==d,m="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==
f,q,t;
n&&m?(t=13,q=8):n&&!m?(t=12,q=9):!n&&m?(t=9,q=12):(t=8,q=13);var v=v5(window.document.body),f=v5(b);v!=f&&(t^=4);var x;d?(f=b.offsetHeight/2-12,x=new g.se(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,x=new g.se(b.offsetWidth+6,-12));var A=g.nk(c),f=Math.min(f,(d?A.height:A.width)-24-6);6>f&&(f=6,d?x.y+=12-b.offsetHeight/2:x.x+=12-b.offsetWidth/2);A=null;k||(A=10);b=Z(a,"card-flip");a=Z(a,"card-reverse");g.P(c,b,n);g.P(c,a,m);A=Z6(e,t,c,q,x,null,A);!k&&A&&(A&48&&(n=!n,t^=4,q^=4),A&192&&(m=!m,t^=1,q^=
1),g.P(c,b,n),g.P(c,a,m),Z6(e,t,c,q,x));l&&(e=(0,window.parseInt)(c.style.top,10),k=g.Le(window.document).y,g.Vj(c,"position","fixed"),g.Vj(c,"top",e-k+"px"));v&&(c.style.right="",e=g.ok(c),e.left=e.left||(0,window.parseInt)(c.style.left,10),k=g.Ie(window),c.style.left="",c.style.right=k.width-e.left-e.width+"px");e=g.L("yt-uix-card-body-arrow",c);k=g.L("yt-uix-card-border-arrow",c);d=d?m?"top":"bottom":!v&&n||v&&!n?"left":"right";e.setAttribute("style","");k.setAttribute("style","");e.style[d]=f+
"px";k.style[d]=f+"px";m=g.L("yt-uix-card-arrow",c);n=g.L("yt-uix-card-arrow-background",c);m&&n&&(c="right"==d?g.nk(c).width-f-13:f+11,f=c/Math.sqrt(2),m.style.left=c+"px",m.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")},E7=function(a){a.A&&a.cf(a.A)},fra=function(a){var b=a.cardMask;
b||(b=window.document.createElement("iframe"),b.src='javascript:""',g.rh(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";window.document.body.appendChild(b)},F7=function(){t7.call(this,"kbd-nav")},gra=function(a,b,c){b&&c&&(g.O(c,Z(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,g.l3&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+
"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))},hra=function(a,b){if(b){var c=g.mf(b,"LI");
c&&(g.O(c,Z(a,"highlight")),G7=g.Fk(b,"blur",(0,g.z)(function(a){g.sh(a,Z(this,"highlight"));g.Gk(G7)},a,c)))}},ira=function(a){if("UL"!=a.tagName.toUpperCase())return[];
a=(0,g.Ye)(g.Ze(a),function(a){return"LI"==a.tagName.toUpperCase()});
return(0,g.Ye)((0,g.Q)(a,function(a){return a7(a)?m7(a,function(a){return g.sa(a)&&1==a.nodeType?g.kf(a):!1}):!1}),function(a){return!!a})},H7=function(){t7.call(this,"menu");
this.o=this.g=null;this.A={};this.D={};this.B=null},I7=function(a){var b=H7.getInstance();
if(g.qh(a,Z(b)))return a;var c=b.yd(a);return c?c:g.nf(a,Z(b,"content"))==b.g?b.o:null},jra=function(a,b,c){var d=J7(a,b);
d&&g.mk(d,g.nk(c));if(c==a.g){var e=9,f=8;g.qh(b,Z(a,"reversed"))&&(e^=1,f^=1);g.qh(b,Z(a,"flipped"))&&(e^=4,f^=4);a=new g.se(0,1);d&&Z6(b,e,d,f,a,null,197);Z6(b,e,c,f,a,null,197)}},lra=function(a,b,c){K7(a,b)&&!c?L7(a,b):(kra(a,b),!a.g||i7(b,a.g)?a.wz(b):Uoa(a.B,(0,g.z)(a.wz,a,b)))},kra=function(a,b){if(b){var c=g.nf(b,Z(a,"content"));
c&&(0,g.F)(g.Ee(Z(a),c),function(a){!i7(a,b)&&K7(this,a)&&M7(this,a)},a)}},L7=function(a,b){if(b){var c=[];
c.push(b);var d=N7(a,b);d&&(d=g.Ee(Z(a),d),d=g.kb(d),c=c.concat(d),(0,g.F)(c,function(a){K7(this,a)&&M7(this,a)},a))}},M7=function(a,b){if(b){var c=N7(a,b);
g.th(O7(a,b),[Z(a,"trigger-selected"),"yt-uix-button-toggled"]);g.O(c,Z(a,"content-hidden"));var d=N7(a,b);d&&g.Ge(d,{"aria-expanded":"false"});(d=J7(a,b))&&d.parentNode&&g.We(d);c&&c==a.g&&(a.o.appendChild(c),a.g=null,a.o=null,a.B&&a.B.Jb("ROOT_MENU_REMOVED"));g.Ki("yt-uix-menu-hide",b);c=g.ua(b).toString();g.Gk(a.A[c]);delete a.A[c]}},mra=function(a,b){var c=N7(a,b);
if(c){(0,g.F)(c.children,function(a){"LI"==a.tagName&&g.Ge(a,{role:"menuitem"})});
g.Ge(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+g.ua(c),c.id=d);(c=O7(a,b))&&g.Ge(c,{"aria-controls":d})}},nra=function(a,b,c){var d=N7(a,b);
d&&g.qh(b,Z(a,"checked"))&&(a=g.mf(c,"LI"))&&(a=g.L("yt-ui-menu-item-checked-hid",a))&&((0,g.F)(g.Ee("yt-ui-menu-item-checked",d),function(a){Vqa(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Vqa(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))},K7=function(a,b){var c=N7(a,b);
return c?!g.qh(c,Z(a,"content-hidden")):!1},ora=function(a){(0,g.F)(g.De("UL",null,a),function(a){a.tabIndex=0;
var b=F7.getInstance();g.rh(a,[Z(b),Z(b,"list")])})},N7=function(a,b){var c=g.lh(b,"menu-content-id");
return c&&(c=g.Ce(c))?(g.rh(c,[Z(a,"content"),Z(a,"content-external")]),c):b==a.o?a.g:g.L(Z(a,"content"),b)},J7=function(a,b){var c=g.ua(b).toString(),d=a.D[c];
if(!d){d=g.Pe("IFRAME");d.src='javascript:""';var e=[Z(a,"mask")];(0,g.F)(g.nh(b),function(a){e.push(a+"-mask")});
g.rh(d,e);a.D[c]=d}return d||null},O7=function(a,b){return g.L(Z(a,"trigger"),b)},pra=function(a,b){return i7(b,a.g)||i7(b,a.o)},P7=function(){D7.call(this,"clickcard");
this.g={};this.o={}},Q7=function(){D7.call(this,"hovercard")},R7=function(a,b,c,d,e,f){this.g=a;
this.F=null;this.A=g.L("yt-dialog-fg",this.g)||this.g;if(a=g.L("yt-dialog-title",this.A)){var k="yt-dialog-title-"+g.ua(this.A);a.setAttribute("id",k);this.A.setAttribute("aria-labelledby",k)}this.A.setAttribute("tabindex","-1");this.J=g.L("yt-dialog-focus-trap",this.g);this.L=!1;this.B=new g.Ff;this.G=[];this.G.push(W3(this.g,"click",(0,g.z)(this.lG,this),"yt-dialog-dismiss"));this.G.push(g.Fk(this.J,"focus",(0,g.z)(this.LC,this),!0));qra(this);this.O=b;this.P=c;this.N=d;this.H=e;this.V=f;this.D=
this.C=null},rra=function(a,b){a.isDisposed()||a.B.subscribe("post-all",b)},qra=function(a){a=g.L("yt-dialog-fg-content",a.g);
var b=[];g.Gb(sra,function(a){b.push("yt-dialog-show-"+a)});
g.th(a,b);g.O(a,"yt-dialog-show-content")},tra=function(){return(0,g.Ch)(g.Ee("yt-dialog"),function(a){return a7(a)})},ura=function(a){var b=g.De("iframe",null,a.g);
(0,g.F)(b,function(a){var b=g.lh(a,"onload");b&&(b=g.u(b))&&g.Fk(a,"load",b);if(b=g.lh(a,"src"))a.src=b},a);
return g.kb(b)},vra=function(a){(0,g.F)(window.document.getElementsByTagName("iframe"),function(b){-1==(0,g.ab)(a,b)&&g.O(b,"iframe-hid")})},wra=function(){(0,g.F)(g.Ee("iframe-hid"),function(a){g.sh(a,"iframe-hid")})},xra=function(a){g.$g((0,g.z)(function(){this.A&&this.A.focus()},a),0)},S7=function(){t7.call(this,"overlay");
this.B=this.o=this.A=this.g=null},zra=function(a){a.B||(a.B=g.Hi("yt-uix-overlay-hide",yra));
a.g&&rra(a.g,function(){var a=S7.getInstance();a.A=null;a.g.dispose();a.g=null})},Ara=function(a){if(a.g){var b=a.A;
a.g.dismiss("overlayhide");b&&a.Ng(b,"overlay-hidden");a.A=null;a.o&&(g.Gk(a.o),a.o=null);a.g=null}},Bra=function(a,b){var c;
if(a)if(c=g.L("yt-dialog",a)){var d=g.Ce("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=g.nf(b,"yt-dialog"));return c},Cra=function(){var a=S7.getInstance();
if(a.A)a=g.L("yt-dialog-fg-content",a.A.overlayContentNode);else a:{if(a=g.Ee("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=g.nf(a[b],"yt-dialog");if(a7(c)){a=a[b];break a}}a=null}return a},yra=function(){Ara(S7.getInstance())},Dra=function(a){a=g.nf(a,"yt-uix-button-subscription-container");
return g.L("yt-dialog",g.L("unsubscribe-confirmation-overlay-container",a))},Era=function(a,b){g.Gk(T7);
T7.length=0;U7[b]||(U7[b]=Dra(a));S7.getInstance().show(U7[b]);var c=Cra();return new g.od(function(a){T7.push(W3(c,"click",function(){a()},"overlay-confirmation-unsubscribe-button"))})},Fra=function(a){var b=window.document.location.protocol+"//"+window.document.domain+"/post_login",b=g.cg(b,"mode","subscribe"),b=g.cg("/signin?context=popup","next",b),b=g.cg(b,"feature","sub_button");
if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=g.Hi("LOGGED_IN",function(b){g.Ii(g.ih("LOGGED_IN_PUBSUB_KEY",void 0));g.hh("LOGGED_IN",!0);a(b)});
g.hh("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((window.screen.width-375)/2,(window.screen.height-440)/2)}},Gra=function(){var a=g.ih("PLAYER_CONFIG");
return a&&a.args&&void 0!==a.args.authuser?!0:!(!g.ih("SESSION_INDEX")&&!g.ih("LOGGED_IN"))},V7=function(){t7.call(this,"tooltip");
this.g=0;this.o={}},Hra=function(a,b,c){Xqa(b,c);
a=a.va(b,"content-id");(a=g.Ce(a))&&g.ef(a,c)},Ira=function(a,b){return a.va(b,"tooltip-text")||b.title},Lra=function(a,b){if(b){var c=Ira(a,b);
if(c){var d=g.Ce(W7(a,b));if(!d){d=window.document.createElement("div");d.id=W7(a,b);d.className=Z(a,"tip");var e=window.document.createElement("div");e.className=Z(a,"tip-body");var f=window.document.createElement("div");f.className=Z(a,"tip-arrow");var k=window.document.createElement("div");k.setAttribute("aria-hidden","true");k.className=Z(a,"tip-content");var l=Jra(a,b),m=W7(a,b,"content");k.id=m;g.kh(b,"content-id",m);e.appendChild(k);l&&d.appendChild(l);d.appendChild(e);d.appendChild(f);var n=
l7(b),m=W7(a,b,"arialabel"),f=window.document.createElement("div");g.O(f,Z(a,"arialabel"));f.id=m;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==window.document.body.getAttribute("dir")?c+" "+n:n+" "+c;g.ef(f,n);b.setAttribute("aria-labelledby",m);m=g.Fh()||window.document.body;m.appendChild(f);m.appendChild(d);Hra(a,b,c);(c=(0,window.parseInt)(a.va(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",g.O(k,Z(a,"normal-wrap")));k=g.qh(b,Z(a,"reverse"));Kra(a,b,d,
e,l,k)||Kra(a,b,d,e,l,!k);var q=Z(a,"tip-visible");g.$g(function(){g.O(d,q)},0)}}}},Kra=function(a,b,c,d,e,f){g.P(c,Z(a,"tip-reverse"),f);
var k=0;f&&(k=1);var l=g.nk(b);f=new g.se((l.width-10)/2,f?l.height:0);var m=g.fk(b);qqa(new g.se(m.x+f.x,m.y+f.y),c,k);var m=g.Ie(window),n=g.jk(c);c=g.nk(d);var q=Math.floor(c.width/2),k=!!(m.height<n.y+l.height),l=!!(n.y<l.height);f=!!(n.x<q);m=!!(m.width<n.x+q);n=(c.width+3)/-2- -5;a=a.va(b,"force-tooltip-direction");if("left"==a||f)n=-5;else if("right"==a||m)n=20-c.width-3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(k||
l)},W7=function(a,b,c){a=Z(a)+j7(b);
c&&(a+="-"+c);return a},Jra=function(a,b){var c=null;
g.I2&&g.qh(b,Z(a,"masked"))&&((c=g.Ce("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),g.ev(c)):(c=window.document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=Z(a,"tip-mask")));return c},Mra=function(a){var b=g.Ce("yt-uix-tooltip-shared-mask"),c=b&&g.lf(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),g.fv(b),window.document.body.appendChild(b))},X7=function(){t7.call(this,"subscription-button")},Nra=function(a,b){if(!a.va(b,"ypc-enabled"))return null;
var c=a.va(b,"ypc-item-type"),d=a.va(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}},Ora=function(a,b){var c=a.va(b,Y7.CB),d=!!a.va(b,"is-subscribed"),c="-"+c,e=Z7.Rz+c;
g.P(b,Z7.Qz+c,!d);g.P(b,e,d);a.va(b,Y7.cA)&&!a.va(b,Y7.bA)&&(c=Z(V7.getInstance()),g.P(b,c,!d),b.title=d?"":a.va(b,Y7.dA));d?g.$g(function(){g.O(b,Z7.lq)},1E3):g.sh(b,Z7.lq)},Pra=function(a,b){return(0,g.Ye)(g.Ee(Z(a)),function(a){return b==this.va(a,"channel-external-id")},a)},Qra=function(a,b){var c=(0,g.z)(function(a){a.discoverable_subscriptions&&g.hh("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);
this.hq(b)},a);
Fra(c)},Rra=function(a,b){if(!a.va(b,"show-unsub-confirm-dialog"))return!1;
var c=a.va(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=(0,window.parseInt)(a.va(b,"subscribed-timestamp"),10),(new $6).getTime()<1E3*(c+600))?!0:!1},b4={thin:2,
medium:4,thick:6},epa=[2,2,6,6,0];g.B(e4,g.Vc);g.h=e4.prototype;g.h.wn=null;g.h.wi=null;g.h.oa=function(){return this.wi};
g.h.addEventListener=function(a,b,c,d){g.Gc(this.wi,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.Pc(this.wi,a,b,c,d)};
g.h.R=function(){e4.M.R.call(this);var a=this.wi;if(a)if(g.xc(a))a.Ld&&g.Dc(a.Ld);else if(a=g.Jc(a)){var b=0,c;for(c in a.g)for(var d=a.g[c].concat(),e=0;e<d.length;++e)g.Qc(d[e])&&++b}};
g.B(l4,e4);l4.prototype.fill=null;var p4;g.B(m4,l4);g.B(n4,e4);var dpa=0;g.B(r4,m4);g.B(s4,n4);s4.prototype.clear=function(){g.Te(this.oa())};
s4.prototype.setSize=function(a,b){y4(this.oa(),{width:a,height:b})};
g.B(t4,g.$v);t4.prototype.C=null;t4.prototype.Wg=function(){return this.ee?g.nk(this.oa()):g.qa(this.width)&&g.qa(this.height)?new g.ve(this.width,this.height):null};
t4.prototype.resume=function(){};
g.B(h4,o4);g.B(i4,o4);var M4=null,P4={bevel:1,dropshadow:2};g.B(x4,t4);g.h=x4.prototype;g.h.vk=function(){var a=j4(this,"svg",{width:this.width,height:this.height,overflow:"hidden"}),b=j4(this,"g");this.G=j4(this,"defs");this.C=new s4(b,this);a.appendChild(this.G);a.appendChild(b);this.g=a;this.A&&(this.oa().setAttribute("preserveAspectRatio","none"),this.N?this.Al():this.oa().setAttribute("viewBox","0 0 "+(this.A?this.A+" "+this.O:"")))};
g.h.Al=function(){if(this.ee){var a=this.Wg();if(0==a.width)this.oa().style.visibility="hidden";else{this.oa().style.visibility="";var b=a.width/this.A,a=a.height/this.O;this.C.oa().setAttribute("transform","scale("+b+" "+a+") translate(0 0)")}}};
g.h.setSize=function(a,b){g.mk(this.oa(),a,b)};
g.h.Wg=function(){if(!g.Rj)return this.ee?g.nk(this.oa()):x4.M.Wg.call(this);var a=this.width,b=this.height,c=g.y(a)&&-1!=a.indexOf("%"),d=g.y(b)&&-1!=b.indexOf("%");if(!this.ee&&(c||d))return null;var e,f;c&&(e=this.oa().parentNode,f=g.nk(e),a=(0,window.parseFloat)(a)*f.width/100);d&&(e=e||this.oa().parentNode,f=f||g.nk(e),b=(0,window.parseFloat)(b)*f.height/100);return new g.ve(a,b)};
g.h.clear=function(){this.C.clear();g.Te(this.G);this.o={}};
g.h.Rg=function(){var a=this.Wg();x4.M.Rg.call(this);a||this.dispatchEvent("resize");if(this.N){var a=this.width,b=this.height;"string"==typeof a&&-1!=a.indexOf("%")&&"string"==typeof b&&-1!=b.indexOf("%")&&this.J.S(q4(),"tick",this.Al);this.Al()}};
g.h.fi=function(){x4.M.fi.call(this);this.N&&this.J.Da(q4(),"tick",this.Al)};
g.h.R=function(){delete this.o;delete this.G;delete this.C;this.J.dispose();delete this.J;x4.M.R.call(this)};
g.h=A4.prototype;g.h.Be=null;g.h.od=null;g.h.Zi=!0;g.h.clear=function(){this.za.length=0;this.Ha.length=0;this.Gd.length=0;delete this.Be;delete this.od;delete this.Zi;return this};
g.h.dc=function(a){var b=g.Va(this.za);if(null==b)throw Error("Path cannot start with lineTo");1!=b&&(this.za.push(1),this.Ha.push(0));for(b=0;b<arguments.length;b+=2){var c=arguments[b],d=arguments[b+1];this.Gd.push(c,d)}this.Ha[this.Ha.length-1]+=b/2;this.od=[c,d]};
g.h.close=function(){var a=g.Va(this.za);if(null==a)throw Error("Path cannot start with close");4!=a&&(this.za.push(4),this.Ha.push(1),this.od=this.Be);return this};
g.h.clone=function(){var a=new this.constructor;a.za=this.za.concat();a.Ha=this.Ha.concat();a.Gd=this.Gd.concat();a.Be=this.Be&&this.Be.concat();a.od=this.od&&this.od.concat();a.Zi=this.Zi;return a};
g.h.transform=function(a){if(!this.Zi)throw Error("Non-simple path");a.transform(this.Gd,0,this.Gd,0,this.Gd.length/2);this.Be&&a.transform(this.Be,0,this.Be,0,1);this.od&&this.Be!=this.od&&a.transform(this.od,0,this.od,0,1);return this};
g.h.isEmpty=function(){return 0==this.za.length};
var lpa={wW:"xx",xW:"xy",AW:"yx",BW:"yy"},npa={QQ:"current",IT:"new"};N4.prototype.B=function(){var a=g.u("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.g.apiaryHost;g.C(g.D(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.g.Em;g.C(g.D(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",g.ih("SESSION_INDEX"));g.u("gapi.client.setApiKey")(this.g.innertubeApiKey)};
N4.prototype.o=function(){return{context:g.Yp(this.g)}};
N4.prototype.A=function(a,b,c){var d,e=!1;0<c.timeout&&(d=g.$g(function(){e||(e=!0,c.Wc&&c.Wc())},c.timeout));
hpa(this,a,b,function(a){if(!e)if(e=!0,d&&g.bh(d),a)c.Cb&&c.Cb(a);else if(c.onError)c.onError()})};
Q4.prototype.ub=function(){return this.A};
g.B(S4,D4);g.B(Y4,g.cc);var Fpa=/[^\d]+$/;f5.prototype.oa=function(){return this.C};
f5.prototype.A=function(){};
h5.prototype.clone=function(){return new h5(this.start,this.end)};
g.B(j5,R4);var ypa={CLOSED:"closed",aU:"playerControlShow",qB:"rollOver",uB:"shown"},Apa={Mz:"anchored",xU:"rect",TU:"shapeless"};g.B(r5,g.Nv);g.h=r5.prototype;
g.h.play=function(a){if(a||0==this.g)this.progress=0,this.o=this.A;else if(this.ib())return!1;Z4(this);this.startTime=a=(0,g.E)();-1==this.g&&(this.startTime-=this.duration*this.progress);this.endTime=this.startTime+this.duration;this.C=this.startTime;this.progress||this.Rk();this.Kd("play");-1==this.g&&this.Kd("resume");this.g=1;var b=g.ua(this);b in g.Mv||(g.Mv[b]=this);g.Lv();t5(this,a);return!0};
g.h.stop=function(a){Z4(this);this.g=0;a&&(this.progress=1);s5(this,this.progress);this.Kd("stop");this.Ni()};
g.h.pause=function(){this.ib()&&(Z4(this),this.g=-1,this.Kd("pause"))};
g.h.R=function(){0==this.g||this.stop(!1);this.Kd("destroy");r5.M.R.call(this)};
g.h.destroy=function(){this.dispose()};
g.h.NF=function(a){t5(this,a)};
g.h.so=function(){this.Kd("animate")};
g.h.Kd=function(a){this.dispatchEvent(new Y4(a,this))};
var Hpa={em:1,ex:1},Gpa={cm:1,"in":1,mm:1,pc:1,pt:1};g.B(w5,f5);
w5.prototype.A=function(a,b){var c=m6(a);if(c){var d=G4(c,b);if(!(0>=d.width||0>=d.height)){var e;if(e=(c=(c=l6(a))&&c.g?c.g:null)&&c.length?c[0]:null){var f=g.Ef(E4(b,F4(e,new g.zf(e.F,e.G,e.dj,e.A),b.g))),k=d.clone(),c=new g.zf(f.x,f.y,1,1),l=Math.max(k.left+k.width,c.left+c.width),m=Math.max(k.top+k.height,c.top+c.height);k.left=Math.min(k.left,c.left);k.top=Math.min(k.top,c.top);k.width=l-k.left;k.height=m-k.top;var c=a.g,k=c5(k,c.effects),l=g5(this,k.width,k.height),m=d5(c,k.width,k.height,this.g),
d=new g.zf(d.left-k.left,d.top-k.top,d.width,d.height),n=new g.se(f.x-k.left,f.y-k.top);this.B=17*u4(b.g,e.o,e.g?e.g:"xy");e=c.A;var f=a.g,q=this.g&&j6(a),t=q?f.g+1:f.g,q=(f=t?new Q4(t,q?f.B:f.D):null)?f.ub()/2:0,t=opa(d,n),v=this.D(d,e,n,t),x=n.x,n=n.y,A=d.width,G=d.height,I=d.left,d=d.top,K=new A4;B4(K,I+e+q,d+q);"t"==t&&(K.dc(v.start,d+q),K.dc(x,n),K.dc(v.end,d+q));K.dc(I+A-e-q,d+q);C4(K,e,e,-90);"r"==t&&(K.dc(I+A-q,v.start),K.dc(x,n),K.dc(I+A-q,v.end));K.dc(I+A-q,d+G-e-q);C4(K,e,e,0);"b"==t&&
(K.dc(v.end,d+G-q),K.dc(x,n),K.dc(v.start,d+G-q));K.dc(I+e+q,d+G-q);C4(K,e,e,90);"l"==t&&(K.dc(I+q,v.end),K.dc(x,n),K.dc(I+q,v.start));K.dc(I+q,d+e+q);C4(K,e,e,180);K.close();z4(l,K,f,m);if(m=this.oa())g.O(m,"annotation-shape"),g.O(m,"annotation-speech-shape"),g.bk(m,k.left,k.top),g.mk(m,k.width,k.height),b5(l,m,c.effects)}}}};
w5.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=g.oe(c-a/2,d+b,d+e-a-b);return new h5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new h5(0,0)};
x5.prototype.B=function(a,b,c,d){this.g[a]=b?!c:c;a=g.Jb(this.g,function(a){return a});
this.o!=a&&(this.o=a,this.A.Jb(this.C,a,d))};
g.B(y5,r5);y5.prototype.B=g.w;y5.prototype.so=function(){this.B();y5.M.so.call(this)};
y5.prototype.Ni=function(){this.B();y5.M.Ni.call(this)};
y5.prototype.Rk=function(){this.B();y5.M.Rk.call(this)};
g.B(z5,R4);g.B(A5,R4);g.B(B5,j5);g.B(C5,j5);g.B(D5,R4);g.B(E5,R4);g.B(G5,j5);g.B(H5,R4);var Qpa={im:"click",CLOSE:"close",cS:"hidden",IU:"rollOut",qB:"rollOver",uB:"shown"},Ppa={CLOSE:"close",QT:"openUrl",DB:"subscribe"};g.h=K5.prototype;g.h.tl=function(){this.context.A.subscribe("resize",this.Oj,this)};
g.h.oa=function(){return this.pa};
g.h.Ah=function(a,b,c,d,e,f,k){this.context.g.S(a,"click",g.va(this.Kk,b,c,d,e,f||[],k||0),this);this.context.g.S(a,"touchstart",g.va(function(){this.lp=!1}),this);
this.context.g.S(a,"touchmove",g.va(function(){this.lp=!0}),this)};
g.h.Kk=function(a,b,c,d,e,f,k){if(this.lp)return!1;k&&(k.stopPropagation(),k.preventDefault());(b=n5(a,b,this.context.videoData.videoId))&&Epa(this,b,m5(b,a.target),c,d,e,f,a.g);return!1};
g.h.show=function(){this.N=(0,g.E)()};
g.h.Wl=function(){};
g.h.destroy=function(){g.We(this.oa())};
g.h.Oj=function(){};
g.B(P5,w5);P5.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=c<=d+e/2?Math.max(d+e/4-a/2,d+b):Math.min(d+3*e/4-a/2,d+e-a-b);return new h5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new h5(0,0)};
g.B(Q5,f5);Q5.prototype.A=function(a,b){var c=m6(a);if(c){var d=G4(c,b);if(!(0>=d.width||0>=d.height)){var c=a.g,e=c5(d,c.effects),f=g5(this,e.width,e.height),k=d5(c,d.width,d.height,this.g),d=new g.zf(0,0,d.width,d.height),l=c.A,m=a.g,n=this.g&&j6(a),q=n?m.g+1:m.g,n=(m=q?new Q4(q,n?m.B:m.D):null)?m.ub()/2+1:0,d=e5(d,l,n);z4(f,d,m,k);if(k=this.oa())g.O(k,"annotation-shape"),g.O(k,"annotation-popup-shape"),g.bk(k,e.left,e.top),g.mk(k,e.width,e.height),b5(f,k,c.effects)}}};
g.B(R5,f5);R5.prototype.A=function(a,b){var c=m6(a);if(c){var d=G4(c,b);if(!(0>=d.width||0>=d.height)){var e=a.g,c=c5(d,e.effects),f=g5(this,c.width,c.height),k=new g.zf(0,0,d.width,d.height),l=e.A,d=new Q4(!e.C&&this.g?1:e.C,e.bgColor),m=new h4("#000",0),n=d?d.ub()/2+1:0,k=e5(k,l,n);z4(f,k,d,m);f=this.oa();g.O(f,"annotation-shape");e=e.o;g.pk(f,this.g?Math.max(e,.9):e);g.bk(f,c.left,c.top);g.mk(f,c.width,c.height)}}};
g.B(S5,K5);S5.prototype.tl=function(){S5.M.tl.call(this);var a=this.annotation.data;"start_ms"in a&&"end_ms"in a&&L5(this,this.annotation.data.start_ms,this.annotation.data.end_ms,this.annotation.id,this.show,this.Wl)};
g.B(T5,y5);T5.prototype.B=function(){this.element.style.left=Math.round(this.o[0])+"px";this.element.style.top=Math.round(this.o[1])+"px"};
var Ypa={collaborator:H5,donation:G5,episode:z5,movie:z5,playlist:E5,poll:D5,productListing:C5,simple:j5,tip:B5,video:A5};U5.prototype.o=function(a,b){var c=g.mf(b.target,"label");c&&g.P(c,"iv-card-poll-choice-focused",a)};
U5.prototype.F=function(a,b){var c=g.nf(b.target,"iv-card-poll");if(c)if(a.A)g.L("iv-card-sign-in-button",c).click();else{var d=(0,window.parseInt)(F5(b.target,"pollChoiceIndex"),10);if(null==a.g)a.choices[d].count++,a.g=d;else if(a.g!=d){var e=a.choices[a.g];e.count=Math.max(e.count-1,0);a.choices[d].count++;a.g=d}else e=a.choices[a.g],e.count=Math.max(e.count-1,0),a.g=null;W5(a,c);g.Qi(this.g.videoData.ra,{Ec:{action_poll_vote:1},Ub:{poll_id:a.id,index:d,session_token:a.G}});c={};c["link-id"]=d;
M5(this.g.logger,a.Kb,void 0,c,a.o.click,5);u5(a.C)}};
U5.prototype.D=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams");b&&(b=g.va(b,a.J,a.B));e6(this,a,!0,b)};
U5.prototype.G=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffers");b&&(b=g.va(b,a.J,a.B,a.L));e6(this,a,!1,b)};
var iqa={hW:"video_relative",bU:"player_relative"},hqa={Pz:"branding",oQ:"card",yR:"drawer",eS:"highlight",ZS:"marker",qU:"promotion",TEXT:"text",sW:"widget"},N6={Mz:"anchored",Pz:"branding",CHANNEL:"channel",OQ:"cta",fS:"highlightText",FS:"label",PLAYLIST:"playlist",lU:"popup",eV:"speech",DB:"subscribe",zV:"title",VIDEO:"video",mW:"vote",pW:"website"};g6.prototype.showLinkIcon=function(){return i6(this,function(a){return null!=a.url&&a.url.showLinkIcon})};
var vqa={IMG:" ",BR:"\n"},uqa={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};t6.prototype.show=function(){this.isVisible=!0;this.g&&(this.g.show(),this.A.subscribe("resize",this.D,this),this.A.subscribe("onVideoAreaChange",this.B,this))};
t6.prototype.destroy=function(){if(this.g){u6(this);var a=this.g;g.Gv(a.F);a.ro.dispose();a.H.dispose();a.o&&g.We(a.o);a.A&&a.A.oa()&&g.We(a.A.oa())}v6(this)};
t6.prototype.B=function(){A6(this.g)};
t6.prototype.D=function(){A6(this.g)};
g.h=w6.prototype;g.h.by=function(){this.N||(this.B&&g.R(this.B,!0),this.C&&g.R(this.C,!0),this.A&&(this.A.g=!0,g.pk(this.o,B6(this)?1:0),this.A.A(this.g,y6(this))),this.H.isActive()&&this.H.stop(),this.N=!0,this.J=Toa(this.F,g.Rl(this.D),function(a){this.ro.stop();this.Lf(a)}))};
g.h.Lf=function(){this.N&&(this.P?this.H.start():this.It(),this.A&&(this.A.g=!1,g.pk(this.o,B6(this)?1:0),this.A.A(this.g,y6(this))),this.N=!1,this.J&&(this.F.Da(this.J),this.J=null))};
g.h.It=function(){this.B&&g.R(this.B,!1);this.C&&g.R(this.C,!1)};
g.h.BH=function(a){this.ca=a;this.ro.Yg()};
g.h.hN=function(){var a=this.ca,b=new g.se(a.clientX,a.clientY),c=g.fk(this.D.getRootNode()),d=O5(c,this.O),c=(this.C&&g.qk(this.C)||this.B&&g.qk(this.B))&&O5(c,this.P);d&&d.contains(b)||c&&c.contains(b)?this.by():this.Lf(a)};
g.h.show=function(){var a=this.g.g,a=(a&&0==a.o||"title"==this.g.style||"highlightText"==this.g.style?!1:!0)&&!this.A,b=!this.o,c="widget"==this.g.type;if(a){var d=y6(this),e=null;"highlight"==this.g.type||"label"==this.g.style?e=new R5:"popup"==this.g.style?e=new Q5:"anchored"==this.g.style?e=new w5:"speech"==this.g.style&&(e=new P5);e&&(e.A(this.g,d),this.A=e,d=e.oa())&&(g.R(d,!1),g.O(d,"annotation-type-"+this.g.type.toLowerCase()),this.$(d))}if(b){d=["annotation"];"highlightText"!=this.g.style||
d.push("annotation-no-mouse");d.push("annotation-type-"+this.g.type.toLowerCase());this.o=g.M("DIV",d);g.R(this.o,!1);this.g.B&&(this.G=g.M("DIV","inner-text"),"label"==this.g.style&&(g.O(this.G,"label-text"),this.G.style.backgroundColor=this.g.g.bgColor),g.ef(this.G,this.g.B),this.o.appendChild(this.G));g.kh(this.o,"annotation_id",this.g.id);this.$(this.o);Upa(this,this.o);if(j6(this.g)&&this.g.showLinkIcon()){if(e=h6(this.g))d=this.o,e=new g.jg(H4(e)),d.title=e.o+e.A;this.C=g.M("SPAN","annotation-link-icon");
g.R(this.C,!1);this.o.appendChild(this.C)}Vpa(this);j6(this.g)||(this.o.style.cursor="default")}c&&("subscribe"==this.g.style?g.L("yt-uix-subscription-button",this.o)||s6(this.o,this.g.htmlBlob):this.g.htmlBlob&&s6(this.o,this.g.htmlBlob));if(a||b){a:{a=this.g.o.g;if(a.length&&(a=k5(a[0]))){a=a.H;break a}a=0}this.o&&(this.o.style.zIndex=a);this.A&&this.A.oa()&&(this.A.oa().style.zIndex=a)}g.R(this.o,!0);g.pk(this.o,B6(this)?1:0);A6(this);this.A&&this.A.oa()&&g.R(this.A.oa(),!0)};
g.B(C6,S5);g.h=C6.prototype;g.h.show=function(){this.isActive||(C6.M.show.call(this),this.G||(Wpa(this),this.G=!0),g.R(this.oa(),!0),this.annotation&&this.annotation.Kb&&K6(this.context.logger,this.annotation.Kb),g.sh(this.oa(),"iv-promo-inactive"),this.oa().removeAttribute("aria-hidden"),this.isActive=!0,F6(this),E6(this),Xpa(this,this.D))};
g.h.Wl=function(){this.isActive&&(g.O(this.oa(),"iv-promo-inactive"),this.isActive=!1,this.oa().setAttribute("aria-hidden",!0))};
g.h.Kk=function(a,b,c,d,e,f,k){return this.B?!1:C6.M.Kk.call(this,a,b,c,d,e,f,k)};
g.h.Cn=function(a,b){b.stopPropagation();E6(this);Xpa(this,a);this.Zc.focus()};
g.h.nD=function(a){this.F=!0;this.Cn(500,a)};
g.h.mD=function(){this.F=!1;D6(this)};
g.h.kN=function(a){a.stopPropagation();this.Wl();R6(this.context.logger,this.annotation.Kb)};
g.h.cD=function(a){a.stopPropagation();F6(this);this.B=!0;g.O(this.oa(),"iv-promo-collapsed-no-delay");this.C.start();R6(this.context.logger,this.annotation.Kb)};
g.h.destroy=function(){this.C.dispose();C6.M.destroy.call(this)};
g.B(G6,S5);g.h=G6.prototype;g.h.uK=function(a,b,c,d){this.A.stop();if(!this.B){var e=g.nk(a);this.g||(g.lk(a,e.width),g.lk(b,e.width));g.bk(c,e.width,e.height-Math.max(Math.min(e.height,d)/2+Math.round(10),20));this.B=!0;g.R(a,!0);this.C=new g.Ld(function(){g.O(this.oa(),"iv-branding-active")},0,this);
this.C.start()}};
g.h.$D=function(a,b){g.sh(this.oa(),"iv-branding-active");this.D=new g.Ld((0,g.z)(function(){g.R(a,!1);this.g||g.lk(b,0)},this),250);
this.D.start();this.B=!1};
g.h.show=function(){if(!this.isActive){G6.M.show.call(this);if(!this.F){g.O(this.oa(),"iv-branding");var a=this.annotation.data;this.G=a.image_width;this.o=g.M("IMG",{src:a.image_url,"class":"branding-img iv-click-target",width:a.image_width,height:a.image_height});g.R(this.o,!1);var b=g.M("DIV","branding-img-container",this.o);this.oa().appendChild(b);var c=g.M("DIV","iv-branding-context-name");g.ef(c,a.channel_name);var d=g.M("DIV","iv-branding-context-subscribe");if(a.use_standalone_subscribe_button){if(b=
a.standalone_subscribe_button_data)this.g=new g.eu(b.subscribeText,b.unsubscribeText,!!b.enabled,a.channel_id,!!b.subscribed,b.feature,a.session_data.itct,this.H.o),this.g.Ga(d)}else this.annotation.htmlBlob?s6(d,this.annotation.htmlBlob):a.num_subscribers&&g.ef(d,a.num_subscribers);b=g.M("DIV","iv-branding-context-subscribe-caret");c=g.M("DIV","branding-context-container-inner",b,c,d);g.R(c,!1);d=g.M("DIV","branding-context-container-outer",c);g.Vj(d,"right",this.G+"px");this.oa().appendChild(d);
var e=h6(this.annotation);e&&this.Ah(this.o,e,this.annotation.id,a.session_data,this.annotation.Kb);this.A=new g.Ld(g.va(this.$D,c,d),500,this);this.context.g.S(this.oa(),"mouseover",(0,g.z)(this.uK,this,c,d,b,a.image_height));this.context.g.S(this.oa(),"mouseout",(0,g.z)(this.A.start,this.A,void 0));this.F=!0}K6(this.context.logger,this.annotation.Kb);g.R(this.oa(),!0);this.isActive=!0;if(this.o){var a=this.o,f,b=g.ok(a).width,c=g.qa(void 0)?void 0:b;f=f||0;g.bk(a,c);f=new T5(a,[c,a.offsetTop],[c-
b-f,a.offsetTop],200,Tpa);this.context.B.S(f,"begin",g.va(g.R,a,!0));f.play()}}};
g.h.Wl=function(){this.isActive&&(g.R(this.oa(),!1),this.isActive=!1)};
g.h.destroy=function(){this.g&&(this.g.dispose(),this.g=null);G6.M.destroy.call(this)};
g.B(H6,K5);g.h=H6.prototype;g.h.isAvailable=function(){var a;if(a=!!this.o.length)(a=this.Y.getRootNode())?(a=g.nk(a),a=177<a.width&&177<a.height):a=!1;return a};
g.h.UB=function(){this.ga&&L6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.uC=function(){(this.ga=this.B)&&this.Uj()};
g.h.iN=function(){L6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.Uj=function(){this.B&&(g.iv(this.da),g.sh(this.context.o.getRootNode(),"ytp-iv-drawer-open"),this.B=!1,$3(this.Y),this.F&&this.F.stop(),this.F=new g.Ld(function(){this.V&&(this.V.focus(),this.V=null)},330,this),this.F.start())};
g.h.Oj=function(){var a=this.isAvailable();g.R(this.oa(),a);g.P(this.context.o.getRootNode(),"ytp-iv-drawer-enabled",a);$3(this.Y)};
g.h.destroy=function(){var a=g.Il(this.Y).o;a&&a.Gp(!1,void 0);this.Y.getRootNode().removeChild(this.D);g.Ii(this.ba);g.Gk(this.ka);this.O&&this.O.dispose();this.F&&this.F.dispose();H6.M.destroy.call(this)};
g.h.jN=function(a){this.Km.start();a.preventDefault();a=a||window.event;var b=0;"MozMousePixelScroll"==a.type?b=0==(a.axis==a.HORIZONTAL_AXIS)?a.detail:0:window.opera?b=a.detail:b=0==a.wheelDelta%120?"WebkitTransform"in window.document.documentElement.style?window.chrome&&0==window.navigator.platform.indexOf("Mac")?a.wheelDeltaY/-30:a.wheelDeltaY/-1.2:a.wheelDelta/-1.6:a.wheelDeltaY/-3;if(a=b)this.A.scrollTop+=a};
g.h.lw=function(a){if(!g.qh(this.Y.getRootNode(),"ytp-cards-teaser-shown")){this.g!=a&&(this.g=a,I6(this));if(g.qk(this.oa())){var b;2==this.context.o.ab()?b=1==((0,window.isNaN)(void 0)?this.context.o.ox():void 0):(b=(0,window.isNaN)(void 0)?this.context.o.jj():void 0,b=1==b||0==b&&0===this.context.o.getCurrentTime());if(b&&a.Tb.teaserDurationMs){b={teaserText:a.Tb.teaserText,durationMs:a.Tb.teaserDurationMs};var c=g.Il(this.Y).o;c&&c.Gp(!0,b)}}this.fa.isActive()||((!this.B||!this.Km.isActive()&&
this.Ik)&&gqa(this,a),this.fa.start(910+a.Tb.teaserDurationMs))}};
g.h.lK=function(a){this.B||(this.g=a,I6(this),gqa(this,a),L6(this,"YOUTUBE_DRAWER_AUTO_OPEN",!1,a))};
g.h.mC=function(){this.B&&(J6(this.context.logger,this.L,4,M6(this).o.close),this.G&&u5(this.G),this.Uj())};
g.h.zC=function(){g.P(this.D,"iv-drawer-scrolled",0<this.A.scrollTop)};
g.h.hF=function(){var a=M6(this);S6(this.context.logger,8,a.Kb,a.o.yK);a&&N5([a.F,a.D])};
g.h.gF=function(a){var b=M6(this);this.g?a?(a=this.context.logger,S6(a,9,b.Kb,b.o.Wo),a.Y.Dg(4,void 0),u5(b.F)):(a=this.context.logger,S6(a,12,b.Kb,b.o.Wo),a.Y.Dg(4,void 0),u5(b.D)):(a=this.context.logger,J6(a,this.L,12,b.o.Wo),a.Y.Dg(4,void 0),this.$&&u5(this.$))};
var Sra=["ytp-ce-top-left-quad","ytp-ce-top-right-quad","ytp-ce-bottom-left-quad","ytp-ce-bottom-right-quad"];g.B(U6,g.Vt);U6.C="AnnotationsModule";U6.A=function(a){switch(a.type){case "branding":case "promotion":return!0}return!1};
U6.B=function(a){return"card"==a.type||"drawer"==a.type};
U6.o=function(){var a=g.M("DIV",["annotation","annotation-type-custom"]);g.R(a,!1);return a};
U6.g=function(a){switch(a){case "annotation-editor":case "live-dashboard":return!0}return!1};
g.h=U6.prototype;g.h.CM=function(a,b){if(!U6.g(g.U(this.g).o))return null;switch(a){case "loadCustomAnnotationsXml":var c=g.Cv(b);c&&W6(this,c);return!0;case "removeCustomAnnotationById":return b&&this.o&&($pa(this.o,b),$3(this.g)),!0}return null};
g.h.DM=function(){return U6.g(g.U(this.g).o)?["loadCustomAnnotationsXml","removeCustomAnnotationById"]:[]};
g.h.yo=function(){if(this.C){var a=g.SY(g.Rl(this.g),!0);g.mk(this.C.element,a.width,a.height);g.bk(this.C.element,a.left,a.top)}if(this.o){var b=Y3(this.g.app.B.J),a=this.o,b=b.width;g.P(a.D,"iv-drawer-small",426>=b);g.P(a.D,"iv-drawer-big",1280<=b)}};
g.h.dI=function(a){g.S(a.state,2)&&(this.pj()&&this.Ox()&&2!=this.g.ab()&&this.Hp(!1),this.Gp(!1))};
g.h.load=function(){U6.M.load.call(this);this.B.show();this.G++;var a=this.g.getVideoData(),b=a.videoId,c=(0,g.z)(this.SG,this,b,this.G);g.Zp()&&(c=Dqa(this,c));c={format:"XML",fd:c,Ec:{}};a.isPharma&&(c.Ec.pharma="1");c.method="POST";c.withCredentials=!0;var d=g.U(this.g);"gaming"==d.o&&(c.Ec.gaming="1");(b=d.G.get(b))&&Eqa(c,b);a.ra&&(b=b&&b.eg,a.Pk&&!b||g.Pi(a.ra,c));g.pm(this.g,this.C.element,5);this.yo()};
g.h.unload=function(){nqa(this.la,{"iv-event":1});g.mm(this.g,"annotations_module");g.Gb(this.A,function(a){a.destroy()});
g.Gb(this.H,function(a){a.destroy()});
this.F=null;this.o&&(this.o.destroy(),this.o=null,$3(this.g));this.A={};this.H={};this.B.ma();U6.M.unload.call(this);this.C.detach()};
g.h.SG=function(a,b,c){if(!zqa(this,b,a)&&(a=g.qi(c)&&c.responseXML?c.responseXML:null)){W6(this,a);g.O(this.g.getRootNode(),"iv-module-loaded");a=[];for(var d in this.A){b=this.A[d].annotation;if(b.o)if(c=b.o,c.g.length)if(c=c.g[0].o||c.g[0].g||c.g[0].A,!c||2>c.length)c=null;else{var e=c.length-1;c=0>=c[0].t&&0>=c[e].t?null:{start:c[0].t,end:c[e].t}}else c=null;else c=null;if(e=c)if(c=1E3*e.start,e=1E3*e.end,0==c&&(c++,e++),!(e<c)){var f={id:d,namespace:"annotations_module"};"marker"==b.type&&(f.style=
"ytp-chapter-marker",f.tooltip=b.B,f.visible=!0);b=new g.wm(c,e,f);a.push(b)}}g.jm(this.g,a)}};
g.h.Fv=function(a){a==this.g.getVideoData().videoId&&(this.loaded?Fqa(this):this.load())};
g.h.Px=function(a){a=a.getId();var b=this.A[a];b&&!b.C&&(b=b.annotation,Iqa(this,a),K6(this.la,b.Kb))};
g.h.Qx=function(a){X6(this,a.getId())};
g.h.Gt=function(a){if(a){a.isVisible=!1;if(a.g){u6(a);var b=a.g;b.o&&g.R(b.o,!1);b.A&&b.A.oa()&&g.R(b.A.oa(),!1);b.L&&(b.F.Da(b.L),b.L=null)}Y6(this,"shown",!1,a.annotation.id);this.Yj(a.annotation,"hidden")}};
g.h.zw=function(a){a&&(a.show(),Y6(this,"shown",!0,a.annotation.id),this.Yj(a.annotation,"shown"))};
g.h.dJ=function(a,b,c){var d=this.A[a];if(d&&b.value!=c){b.value=c;var e=!1;k6(d.annotation,function(a){e|=a.value});
Jqa(this,a,b,e)}};
g.h.OF=function(a){if(a&&a.id){var b=h6(a);if(b){var c=H4(b);if(c){var d=(0,g.z)(this.Yj,this,a,"click"),e=this.g.getVideoData();if("new"==m5(c,b.target)||Kqa(this,b,e.videoId))d(),d=null;M5(this.la,a.Kb,d)}}}};
g.h.Yj=function(a,b){Npa(a,function(c){if(c.trigger==b&&"openUrl"==c.type&&c.url){var d=this.g.getVideoData(),e;if(!(e=!Kqa(this,c.url,d.videoId))){e=oqa(c.url);var f=pqa(c.url);if(e){if(d.videoId==e)this.g.Hc(f||0);else{var k=V6(this).o;g.s2(k.app,e,void 0,void 0,void 0,void 0);f&&g.hm(V6(this).o)&&V6(this).o.Hc(f)}e=!0}else e=!1;e=!e}e&&(d=n5(c.url,a.id,d.videoId,g.U(this.g)))&&(this.g.jd(),e=m5(d,c.url.target),c=d,d="current"==e?"_top":void 0,e=g.Nh(c),f=null,"ei"in e&&(f={ei:e.ei},c=g.hg(c,"ei")),
g.Uu(c,d,f))}},this)};
g.h.$G=function(){Y6(this,"playerControlShow",!1)};
g.h.GI=function(){Y6(this,"playerControlShow",!0)};
g.h.EM=function(a){Y6(this,"rollOver",!0,a.id)};
g.h.Lf=function(a){Y6(this,"rollOver",!1,a.id)};
g.h.oG=function(a){a&&a.id&&(this.A[a.id].C=!0,X6(this,a.id),R6(this.la,a.Kb),this.Yj(a,"close"),Y6(this,"closed",!0,a.id))};
g.h.pj=function(){return!!this.o&&this.o.isAvailable()};
g.h.Ox=function(){this.pj();return!!this.o&&this.o.B};
g.h.Hp=function(a,b,c){this.pj();this.o&&(b=!!b,a?g.p(c)?L6(this.o,c,b):L6(this.o,"YOUTUBE_DRAWER_AUTO_OPEN",b):this.o.Uj())};
g.h.Gp=function(a,b){this.g.Ra(a?"cardsteasershow":"cardsteaserhide",b)};
g.h.R=function(){g.U(this.g).G.Ka("vast_info_card_add",this.Fv,this);this.g.removeEventListener("crn_annotations_module",this.Px,this);this.g.removeEventListener("crx_annotations_module",this.Qx,this);g.sh(this.g.getRootNode(),"ytp-iv-drawer-open");for(var a=this.L,b=0,c=a.length;b<c;b++)g.aq(a[b]);this.L.length=0;U6.M.R.call(this)};
g.B($6,g.nv);g.h=$6.prototype;g.h.getHours=function(){return this.date.getHours()};
g.h.getMinutes=function(){return this.date.getMinutes()};
g.h.getSeconds=function(){return this.date.getSeconds()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.tk=function(a,b){var c=g.nv.prototype.tk.call(this,a);return a?c+" "+g.Ka(this.getHours(),2)+":"+g.Ka(this.getMinutes(),2)+":"+g.Ka(this.getSeconds(),2)+(b?g.ov(this):""):c+"T"+g.Ka(this.getHours(),2)+g.Ka(this.getMinutes(),2)+g.Ka(this.getSeconds(),2)+(b?g.ov(this):"")};
g.h.toString=function(){return this.tk()};
g.h.clone=function(){var a=new $6(this.date);a.ak=this.ak;a.ck=this.ck;return a};
g.B(b7,g.Vt);g.h=b7.prototype;g.h.load=function(){b7.M.load.call(this);this.g.addEventListener("resize",this.Jp,this);var a=T6(g.U(this.g).o)?function(){}:(0,g.z)(this.HC,this);
Sqa(this,a)};
g.h.unload=function(){c7(this,null);this.g.removeEventListener("resize",this.Jp,this);this.B&&(this.B.abort(),this.B=null);b7.M.unload.call(this)};
g.h.FM=function(a,b){if(!T6(g.U(this.g).o))return null;var c;switch(a){case "loadCustomEndscreenRenderer":return c=rqa(b,"new"),c7(this,c),!0;case "loadCustomEndscreenJson":return(c=sqa(b))&&c7(this,c),!0;case "unloadCustomEndscreenJson":return c7(this,null),!0}return null};
g.h.HC=function(){var a=this.g.getVideoData(),b=a.videoId;this.B&&this.B.abort();b={method:"POST",fd:(0,g.z)(this.OG,this,b),Ec:{v:b},withCredentials:!0};this.P&&(b.Ec.r=1);"gaming"==g.U(this.g).o&&(b.Ec.gaming="1");this.N&&(b.Ec.ptype="embedded");var c=this.g.getVideoData().Rw;c&&(b.Ub={ad_tracking:c});if(a=g.gt(a))this.B=g.Pi(a,b)};
g.h.OG=function(a,b){var c=this.B=null;if(200==b.status){var d=b.responseText;")]}"==d.substring(0,3)&&(d=d.substring(3),c=JSON.parse(d),c=this.P?rqa(c,this.N?"new":"current"):sqa(c))}c7(this,c)};
g.h.Jp=function(){if(this.o&&this.o.elements){var a=this.g.Cx(),b=a.width,c=a.height;if(0!=b&&0!=c){var d=b/c,e;e=Y3(this.g.app.B.J).width;for(var f=null,k=-1,l=0;l<g.f3.length;l++){var m=Math.abs(e-g.f3[l]);if(-1==k||f>=m)k=l,f=m}e=g.g3[k];for(f=0;f<this.o.elements.length;++f){var l=this.o.elements[f].id,k=this.A[l],m=this.D[l],n=m.width*d/m.aspectRatio,l=Math.round(n*c),q=a.left+Math.round(m.left*b),t=a.top+Math.round(m.top*c);g.mk(k.element,Math.round(m.width*b),l);g.bk(k.element,q,t);g.th(k.element,
Sra);q=m.left+m.width/2;m=m.top+n/2;g.O(k.element,.5>=q&&.5>=m?"ytp-ce-top-left-quad":.5<q&&.5>=m?"ytp-ce-top-right-quad":.5>=q&&.5<m?"ytp-ce-bottom-left-quad":"ytp-ce-bottom-right-quad");g.th(k.element,g.g3);g.O(k.element,e);(k=g.De("div","ytp-ce-expanding-overlay-body",k.element)[0])&&g.Vj(k,"height",l+"px")}}}};
g.h.Rx=function(a){if(this.o)if("ytp-ce-in-endscreen"==a.getId())this.F=!1,this.o.skip&&1==this.g.jj()?(a=this.g,(a=g.Pl(a.app,a.playerType||1))&&g.AU(a,!0),this.g.Hc(window.Infinity),this.F=!0):(g7(this,this.o.impressionUrls),N5([this.o.visualElement]));else if(!this.F){a=a.getId().substring(15);var b=this.A[a],c=this.D[a];g.O(b.element,"ytp-ce-element-show");b.element.removeAttribute("aria-hidden");g7(this,c.impressionUrls);N5([c.visualElement]);g.U(this.g).ob&&this.g.ya("endscreenelementshown",
a)}};
g.h.Sx=function(a){if("ytp-ce-in-endscreen"!=a.getId()&&!this.F){a=a.getId().substring(15);var b=this.A[a];g.sh(b.element,"ytp-ce-element-show");b.element.setAttribute("aria-hidden",!0);g.U(this.g).ob&&this.g.ya("endscreenelementhidden",a)}};
g.h.Yu=function(a,b){if(a.targetUrl&&(!b||"keypress"!=b.type||13==b.keyCode)){for(var c=b.target;c&&!g.qh(c,"ytp-ce-element");){g.qh(c,"subscribe-label")&&h7(this,a);if(g.qh(c,"ytp-ce-channel-subscribe"))return;c=g.bf(c)}if(!c||g.qh(c,"ytp-ce-element-hover"))b.preventDefault(),b.stopPropagation(),b.ctrlKey||b.metaKey||"new"==a.$i?(h7(this,a),this.bw(),this.g.jd(),g.Uu(a.targetUrl,void 0,a.gd)):(c=(0,g.z)(this.bw,this,g.va(g.Tu,a.targetUrl,a.gd)),h7(this,a,c))}};
g.h.Ip=function(a,b){g.qh(a.element,"ytp-ce-element-hover")||("VIDEO"==b.type||"PLAYLIST"==b.type?g.O(a.element,"ytp-ce-element-hover"):(new g.Ld(function(){g.O(a.element,"ytp-ce-element-hover")},200)).start(),g7(this,b.Jt),f7(this,b.id,!0),Pqa(this,a,!0))};
g.h.Tx=function(a,b){g.sh(a.element,"ytp-ce-element-hover");g.sh(a.element,"ytp-ce-force-expand");f7(this,b.id,!1);Pqa(this,a,!1)};
g.h.bw=function(a){this.g.Dg(17,a)};
g.h.R=function(){this.g.removeEventListener("crn_creatorendscreen",this.Rx,this);this.g.removeEventListener("crx_creatorendscreen",this.Sx,this);b7.M.R.call(this)};g.B(n7,g.Up);g.B(o7,g.Up);g.B(Wqa,g.Up);g.B(p7,g.Up);
var Tra=new g.Vp("subscription-subscribe",o7),Ura=new g.Vp("subscription-subscribe-loading",n7),Vra=new g.Vp("subscription-subscribe-loaded",n7),Wra=new g.Vp("subscription-subscribe-success",Wqa),Xra=new g.Vp("subscription-unsubscribe",p7),Yra=new g.Vp("subscription-unsubscirbe-loading",n7),Zra=new g.Vp("subscription-unsubscribe-loaded",n7),$ra=new g.Vp("subscription-unsubscribe-success",n7),asa=new g.Vp("subscription-enable-ypc",n7),bsa=new g.Vp("subscription-disable-ypc",n7);var r7={},csa="ontouchstart"in window.document;g.Fk(window.document,"blur",s7,!0);g.Fk(window.document,"change",s7,!0);g.Fk(window.document,"click",s7);g.Fk(window.document,"focus",s7,!0);g.Fk(window.document,"mouseover",s7);g.Fk(window.document,"mouseout",s7);g.Fk(window.document,"mousedown",s7);g.Fk(window.document,"keydown",s7);g.Fk(window.document,"keyup",s7);g.Fk(window.document,"keypress",s7);g.Fk(window.document,"cut",s7);g.Fk(window.document,"paste",s7);
csa&&(g.Fk(window.document,"touchstart",s7),g.Fk(window.document,"touchend",s7),g.Fk(window.document,"touchcancel",s7));g.h=t7.prototype;g.h.yd=function(a){return g.nf(a,Z(this))};
g.h.unregister=function(){g.Ii(this.H);this.H.length=0;g.vq(this.G);this.G.length=0};
g.h.init=g.w;g.h.dispose=g.w;g.h.addBehavior=function(a,b,c){c=Z(this,c);var d=(0,g.z)(b,this);a in r7||(r7[a]=new g.Ff);r7[a].subscribe(c,d);this.F[b]=d};
g.h.removeBehavior=function(a,b,c){if(a in r7){var d=r7[a];g.Gf(d,Z(this,c),this.F[b]);0>=d.qc()&&(d.dispose(),delete r7[a])}delete this.F[b]};
g.h.Ng=function(a,b,c){var d=this.va(a,b);if(d&&(d=g.u(d))){var e=g.nb(arguments,2);g.pb(e,0,0,a);d.apply(null,e)}};
g.h.va=function(a,b){return g.lh(a,b)};g.B(w7,t7);g.la(w7);g.h=w7.prototype;g.h.register=function(){this.addBehavior("click",this.qz);this.addBehavior("keydown",this.iu);this.addBehavior("keypress",this.ju);u7(this,"page-scroll",this.qD)};
g.h.unregister=function(){this.removeBehavior("click",this.qz);this.removeBehavior("keydown",this.iu);this.removeBehavior("keypress",this.ju);C7(this);this.o={};w7.M.unregister.call(this)};
g.h.qz=function(a){a&&!a.disabled&&(cra(this,a),this.click(a))};
g.h.iu=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=B7(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=m7(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.qF:"table"==e&&(f=this.pF);f&&Yqa(this,a,b,c,(0,g.z)(f,this))}}};
g.h.qD=function(){var a=this.o;if(0!=g.Kb(a))for(var b in a){var c=a[b],d=g.nf(c.activeButtonNode||c.parentNode,Z(this));if(void 0==d||void 0==c)break;A7(this,d,c,!0)}};
g.h.ju=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=B7(this,a),a7(a)&&c.preventDefault())};
g.h.pF=function(a,b,c){var d=x7(this,b);if(d){var e=Uqa("table",b);b=g.De("td",null,e);d=$qa(d,b,g.De("td",null,Uqa("tr",e)).length,c);-1!=d&&(Zqa(this,a,b[d]),c.preventDefault())}};
g.h.qF=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=x7(this,b);d&&(b=(0,g.Ye)(g.De("li",null,b),a7),Zqa(this,a,b[$qa(d,b,1,c)]),c.preventDefault())}};
g.h.uz=function(a){if(a){var b=B7(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.va(a,"button-has-sibling-menu")?c=a.parentNode:c=ara(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=z7(this,a);d&&c.appendChild(d);(c=!!this.va(a,"button-menu-fixed"))&&(this.o[j7(a).toString()]=b);A7(this,a,b,c);g.Li("yt-uix-button-menu-before-show",a,b);g.ev(b);
d&&g.ev(d);this.Ng(a,"button-menu-action",!0);g.O(a,Z(this,"active"));b=(0,g.z)(this.rz,this,a,!1);d=(0,g.z)(this.rz,this,a,!0);c=(0,g.z)(this.GK,this,a,void 0);this.g&&B7(this,this.g)==B7(this,a)||C7(this);g.Ki("yt-uix-button-menu-show",a);g.Gk(this.A);this.A=[g.Fk(window.document,"click",d),g.Fk(window.document,"contextmenu",b),g.Fk(window,"resize",c)];this.g=a}}};
g.h.GK=function(a,b){var c=B7(this,a);if(c){b&&(b instanceof g.ge?c.innerHTML=g.he(b):g.ef(c,b));var d=!!this.va(a,"button-menu-fixed");A7(this,a,c,d)}};
g.h.Tc=function(a){return g.L(Z(this,"content"),a)};
g.h.rz=function(a,b,c){c=g.Ik(c);var d=g.nf(c,Z(this));if(d){var d=B7(this,d),e=B7(this,a);if(d==e)return}var d=g.nf(c,Z(this,"menu")),e=d==B7(this,a),f=g.qh(c,Z(this,"menu-item")),k=g.qh(c,Z(this,"menu-close"));if(!d||e&&(f||k))y7(this,a),d&&b&&this.va(a,"button-menu-indicate-selected")&&((a=g.L(Z(this,"content"),a))&&g.ef(a,l7(c)),bra(this,d,c))};
g.h.isToggled=function(a){return g.qh(a,Z(this,"toggled"))};
g.h.click=function(a){if(B7(this,a)){var b=B7(this,a);if(b){var c=g.nf(b.activeButtonNode||b.parentNode,Z(this));c&&c!=a?(y7(this,c),g.$g((0,g.z)(this.uz,this,a),1)):a7(b)?y7(this,a):this.uz(a)}a.focus()}this.Ng(a,"button-action")};g.B(D7,t7);g.h=D7.prototype;g.h.yd=function(a){var b=t7.prototype.yd.call(this,a);return b?b:a};
g.h.register=function(){u7(this,"yt-uix-kbd-nav-move-out-done",this.cf)};
g.h.dispose=function(){D7.M.dispose.call(this);E7(this)};
g.h.va=function(a,b){var c=D7.M.va.call(this,a,b);return c?c:(c=D7.M.va.call(this,a,"card-config"))&&(c=g.u(c))&&c[b]?c[b]:null};
g.h.show=function(a){var b=this.yd(a);if(b){g.O(b,Z(this,"active"));var c=dra(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;era(this,a,c);var d=Z(this,"card-visible"),e=this.va(a,"card-delegate-show")&&this.va(b,"card-action");this.Ng(b,"card-action",a);this.A=a;g.fv(c);g.$g((0,g.z)(function(){e||(g.ev(c),g.Ki("yt-uix-card-show",b,a,c));fra(c);g.O(c,d);g.Ki("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
g.h.cf=function(a){if(a=this.yd(a)){var b=g.Ce(Z(this,"card")+j7(a));b&&(g.sh(a,Z(this,"active")),g.sh(b,Z(this,"card-visible")),g.fv(b),this.A=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(g.We(b.cardMask),b.cardMask=null))}};
g.h.FK=function(a,b){var c=this.yd(a);if(c){if(b){var d=this.ac(c);if(!d)return;b instanceof g.ge?d.innerHTML=g.he(b):g.ef(d,b)}g.qh(c,Z(this,"active"))&&(c=dra(this,a,c),era(this,a,c),g.ev(c),fra(c))}};
g.h.isActive=function(a){return(a=this.yd(a))?g.qh(a,Z(this,"active")):!1};
g.h.ac=function(a){var b=a.cardContentNode;if(!b){var c=Z(this,"content"),d=Z(this,"card-content");(b=(b=this.va(a,"card-id"))?g.Ce(b):g.L(c,a))||(b=window.document.createElement("div"));var e=b;g.sh(e,c);g.O(e,d);a.cardContentNode=b}return b};var G7;g.B(F7,t7);g.la(F7);g.h=F7.prototype;g.h.register=function(){this.addBehavior("keydown",this.xt);u7(this,"yt-uix-kbd-nav-move-in",this.Au);u7(this,"yt-uix-kbd-nav-move-in-to",this.uF);u7(this,"yt-uix-kbd-move-next",this.Bu);u7(this,"yt-uix-kbd-nav-move-to",this.dk)};
g.h.unregister=function(){this.removeBehavior("keydown",this.xt);g.Gk(G7)};
g.h.xt=function(a,b,c){var d=c.keyCode;if(a=g.nf(a,Z(this)))switch(d){case 13:case 32:this.Au(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=F5(a,"kbdNavMoveOut");!c;){c=g.nf(a.parentElement,Z(this));if(!c)break a;c=F5(c,"kbdNavMoveOut")}c=g.Ce(c);this.dk(c);g.Ki("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&g.qh(a,Z(this,"list")))switch(d){case 40:this.Bu(b,a);break;case 38:d=window.document.activeElement==a,a=ira(a),b=a.indexOf(b),0>b&&!d||(b=
d?a.length-1:(a.length+b-1)%a.length,a[b].focus(),hra(this,a[b]))}c.preventDefault()}};
g.h.Au=function(a){var b=F5(a,"kbdNavMoveIn"),b=g.Ce(b);gra(this,a,b);this.dk(b)};
g.h.uF=function(a){gra(this,g.of(),a);this.dk(a)};
g.h.dk=function(a){if(a)if(g.kf(a))a.focus();else{var b=m7(a,function(a){return g.sa(a)&&1==a.nodeType?g.kf(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
g.h.Bu=function(a,b){var c=window.document.activeElement==b,d=ira(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),hra(this,d[c]))};g.B(H7,t7);g.la(H7);g.h=H7.prototype;g.h.register=function(){this.addBehavior("click",this.vz);this.addBehavior("mouseenter",this.kD);u7(this,"page-scroll",this.yD);u7(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.yd(a);L7(this,a)});
this.B=new g.Ff};
g.h.unregister=function(){this.removeBehavior("click",this.vz);this.o=this.g=null;g.Gk(g.Cb(g.Mb(this.A)));this.A={};g.Gb(this.D,function(a){g.We(a)},this);
this.D={};g.Eb(this.B);this.B=null;H7.M.unregister.call(this)};
g.h.vz=function(a,b,c){a&&(b=O7(this,a),!b.disabled&&i7(c.target,b)&&lra(this,a))};
g.h.kD=function(a,b,c){a&&g.qh(a,Z(this,"hover"))&&i7(c.target,O7(this,a))&&lra(this,a,!0)};
g.h.yD=function(){this.g&&this.o&&jra(this,this.o,this.g)};
g.h.wz=function(a){if(a){var b=N7(this,a);if(b){g.Li("yt-uix-menu-before-show",a,b);this.g?i7(a,this.g)||L7(this,this.o):(this.o=a,this.g=b,g.qh(a,Z(this,"sibling-content"))||(g.We(b),window.document.body.appendChild(b)),b.style.minWidth=O7(this,a).offsetWidth-2+"px");var c=J7(this,a);c&&g.Ue(c,b);g.sh(b,Z(this,"content-hidden"));jra(this,a,b);g.rh(O7(this,a),[Z(this,"trigger-selected"),"yt-uix-button-toggled"]);g.Ki("yt-uix-menu-show",a);ora(b);mra(this,a);g.Ki("yt-uix-kbd-nav-move-in-to",b);var d=
(0,g.z)(this.aP,this,a),e=(0,g.z)(this.nF,this,a),c=g.ua(a).toString();this.A[c]=[g.Fk(b,"click",e),g.Fk(window.document,"click",d)];g.qh(a,Z(this,"indicate-selected"))&&(d=(0,g.z)(this.oF,this,a),this.A[c].push(g.Fk(b,"click",d)));g.qh(a,Z(this,"hover"))&&(a=(0,g.z)(this.$O,this,a),this.A[c].push(g.Fk(window.document,"mousemove",a)))}}};
g.h.$O=function(a,b){var c=g.Ik(b);c&&(i7(c,O7(this,a))||pra(this,c)||M7(this,a))};
g.h.aP=function(a,b){var c=g.Ik(b);if(c){if(pra(this,c)){var d=g.nf(c,Z(this,"content")),e=g.mf(c,"LI");e&&d&&g.cf(d,e)&&g.Li("yt-uix-menu-item-clicked",c);c=g.nf(c,Z(this,"close-on-select"));if(!c)return;d=I7(c)}L7(this,d||a)}};
g.h.nF=function(a,b){var c=g.Ik(b);c&&nra(this,a,c)};
g.h.oF=function(a,b){var c=g.Ik(b);if(c){var d=O7(this,a);if(d&&(c=g.mf(c,"LI")))if(c=l7(c).trim(),d.hasChildNodes()){var e=w7.getInstance();(d=g.L(Z(e,"content"),d))&&g.ef(d,c)}else g.ef(d,c)}};g.B(P7,D7);g.la(P7);g.h=P7.prototype;g.h.register=function(){P7.M.register.call(this);this.addBehavior("click",this.ds,"target");this.addBehavior("click",this.bs,"close")};
g.h.unregister=function(){P7.M.unregister.call(this);this.removeBehavior("click",this.ds,"target");this.removeBehavior("click",this.bs,"close");for(var a in this.g)g.Gk(this.g[a]);this.g={};for(a in this.o)g.Gk(this.o[a]);this.o={}};
g.h.ds=function(a,b,c){c.preventDefault();b=g.mf(c.target,"button");b&&b.disabled||(a=(b=this.va(a,"card-target"))?g.y(b)?window.document.getElementById(b):b:a,b=this.yd(a),this.va(b,"disabled")||(g.qh(b,Z(this,"active"))?(this.cf(a),g.sh(b,Z(this,"active"))):(this.show(a),g.O(b,Z(this,"active")))))};
g.h.show=function(a){P7.M.show.call(this,a);var b=this.yd(a),c=g.ua(a).toString();if(!g.lh(b,"click-outside-persists")){if(this.g[c])return;var b=g.Fk(window.document,"click",(0,g.z)(this.es,this,a)),d=g.Fk(window,"blur",(0,g.z)(this.es,this,a));this.g[c]=[b,d]}a=g.Fk(window,"resize",(0,g.z)(this.FK,this,a,void 0));this.o[c]=a};
g.h.cf=function(a){P7.M.cf.call(this,a);a=g.ua(a).toString();var b=this.g[a];b&&(g.Gk(b),this.g[a]=null);if(b=this.o[a])g.Gk(b),delete this.o[a]};
g.h.es=function(a,b){var c="yt-uix"+(this.C?"-"+this.C:"")+"-card",d=null;b.target&&(d=g.nf(b.target,c)||g.nf(I7(b.target),c));(d=d||g.nf(window.document.activeElement,c)||g.nf(I7(window.document.activeElement),c))||this.cf(a)};
g.h.bs=function(a){(a=g.nf(a,Z(this,"card")))&&(a=a.cardTargetNode)&&this.cf(a)};g.B(Q7,D7);g.la(Q7);g.h=Q7.prototype;g.h.register=function(){this.addBehavior("mouseenter",this.wu,"target");this.addBehavior("mouseleave",this.yu,"target");this.addBehavior("mouseenter",this.xu,"card");this.addBehavior("mouseleave",this.zu,"card")};
g.h.unregister=function(){this.removeBehavior("mouseenter",this.wu,"target");this.removeBehavior("mouseleave",this.yu,"target");this.removeBehavior("mouseenter",this.xu,"card");this.removeBehavior("mouseleave",this.zu,"card")};
g.h.wu=function(a){if($7!=a){$7&&(this.cf($7),$7=null);var b=(0,g.z)(this.show,this,a),c=(0,window.parseInt)(this.va(a,"delay-show"),10),b=g.$g(b,-1<c?c:200);g.kh(a,"card-timer",b.toString());$7=a;a.alt&&(g.kh(a,"card-alt",a.alt),a.alt="");a.title&&(g.kh(a,"card-title",a.title),a.title="")}};
g.h.yu=function(a){var b=(0,window.parseInt)(this.va(a,"card-timer"),10);g.bh(b);this.yd(a).isCardHidable=!0;b=(0,window.parseInt)(this.va(a,"delay-hide"),10);b=-1<b?b:200;g.$g((0,g.z)(this.aE,this,a),b);if(b=this.va(a,"card-alt"))a.alt=b;if(b=this.va(a,"card-title"))a.title=b};
g.h.aE=function(a){this.yd(a).isCardHidable&&(this.cf(a),$7=null)};
g.h.xu=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
g.h.zu=function(a){a&&this.cf(a.cardTargetNode)};
var $7=null;var sra={LOADING:"loading",aA:"content",tW:"working"};g.h=R7.prototype;
g.h.show=function(){if(!this.isDisposed()){this.F=window.document.activeElement;if(!this.N){this.o||(this.o=g.Ce("yt-dialog-bg"),this.o||(this.o=g.Pe("div"),this.o.id="yt-dialog-bg",this.o.className="yt-dialog-bg",window.document.body.appendChild(this.o)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=g.Ie(b).height,g.He(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,
e=a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.o.style.height=a+"px";g.ev(this.o)}this.Ht();a=ura(this);vra(a);this.C=g.Fk(window.document,"keydown",(0,g.z)(this.YE,this));a=this.g;d=g.Hi("player-added",this.Ht,this);g.kh(a,"player-ready-pubsub-key",d);this.P&&(this.D=g.Fk(window.document,"click",(0,g.z)(this.GJ,this)));g.ev(this.g);this.A.setAttribute("tabindex","0");xra(this);this.H||g.O(window.document.body,"yt-dialog-active");C7(w7.getInstance());E7(P7.getInstance());E7(Q7.getInstance());
g.Ki("yt-ui-dialog-show-complete",this)}};
g.h.Ht=function(){if(!this.V){var a=this.g;g.P(window.document.body,"hide-players",!0);a&&g.P(a,"preserve-players",!0)}};
g.h.lG=function(a){a=a.currentTarget;a.disabled||(a=g.lh(a,"action")||"",this.dismiss(a))};
g.h.dismiss=function(a){if(!this.isDisposed()){this.B.Jb("pre-all");this.B.Jb("pre-"+a);g.fv(this.g);E7(P7.getInstance());E7(Q7.getInstance());this.A.setAttribute("tabindex","-1");tra()||(g.fv(this.o),this.H||g.sh(window.document.body,"yt-dialog-active"),Tqa(),wra());this.C&&(g.Gk(this.C),this.C=null);this.D&&(g.Gk(this.D),this.D=null);var b=this.g;if(b){var c=g.lh(b,"player-ready-pubsub-key");c&&(g.Ii(c),k7(b,"player-ready-pubsub-key"))}this.B.Jb("post-all");g.Ki("yt-ui-dialog-hide-complete",this);
"cancel"==a&&g.Ki("yt-ui-dialog-cancelled",this);this.B&&this.B.Jb("post-"+a);this.F&&this.F.focus()}};
g.h.setTitle=function(a){g.ef(g.L("yt-dialog-title",this.g),a)};
g.h.YE=function(a){g.$g((0,g.z)(function(){this.O||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&g.qh(window.document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
g.h.GJ=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
g.h.isDisposed=function(){return this.L};
g.h.dispose=function(){a7(this.g)&&this.dismiss("dispose");g.Gk(this.G);this.G.length=0;g.$g((0,g.z)(function(){this.F=null},this),0);
this.J=this.A=null;this.B.dispose();this.B=null;this.L=!0};
g.h.LC=function(a){a.stopPropagation();xra(this)};
g.ka("yt.ui.Dialog",R7,void 0);g.B(S7,t7);g.la(S7);g.h=S7.prototype;g.h.register=function(){this.addBehavior("click",this.Ro,"target");this.addBehavior("click",this.xz,"close");zra(this)};
g.h.unregister=function(){S7.M.unregister.call(this);this.removeBehavior("click",this.Ro,"target");this.removeBehavior("click",this.xz,"close");this.B&&(g.Ii(this.B),this.B=null);this.o&&(g.Gk(this.o),this.o=null)};
g.h.Ro=function(a){if(!this.g||!a7(this.g.g)){var b=this.yd(a);a=Bra(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.va(b,"disable-shortcuts")||!1,d=!!this.va(b,"disable-outside-click-dismiss")||!1;this.g=new R7(a,c);this.A=b;var e=g.L("yt-dialog-fg",a);if(e){var f=this.va(b,"overlay-class")||"",k=this.va(b,"overlay-style")||"default",l=this.va(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(Z(this,k));f.push(Z(this,l));g.rh(e,f)}this.g.show();g.Ki("yt-uix-kbd-nav-move-to",e||
a);zra(this);c||d||(c=(0,g.z)(function(a){g.qh(a.target,"yt-dialog-base")&&Ara(this)},this),this.o=g.Fk(g.L("yt-dialog-base",a),"click",c));
this.Ng(b,"overlay-shown");g.Ki("yt-uix-overlay-shown",b)}}};
g.h.ac=function(a){return g.L("yt-dialog-content",a.overlayContentNode||a)};
g.h.xz=function(a){a&&a.disabled||g.Ki("yt-uix-overlay-hide")};
g.h.show=function(a){this.Ro(a)};var U7={},T7=[];g.ka("yt.pubsub.publish",g.Ki,void 0);g.B(V7,t7);g.la(V7);g.h=V7.prototype;g.h.register=function(){this.addBehavior("mouseover",this.Ok);this.addBehavior("mouseout",this.vg);this.addBehavior("focus",this.Ns);this.addBehavior("blur",this.Lr);this.addBehavior("click",this.vg);this.addBehavior("touchstart",this.Iw);this.addBehavior("touchend",this.zl);this.addBehavior("touchcancel",this.zl)};
g.h.unregister=function(){this.removeBehavior("mouseover",this.Ok);this.removeBehavior("mouseout",this.vg);this.removeBehavior("focus",this.Ns);this.removeBehavior("blur",this.Lr);this.removeBehavior("click",this.vg);this.removeBehavior("touchstart",this.Iw);this.removeBehavior("touchend",this.zl);this.removeBehavior("touchcancel",this.zl);this.dispose();V7.M.unregister.call(this)};
g.h.dispose=function(){for(var a in this.o)this.vg(this.o[a]);this.o={}};
g.h.Ok=function(a){if(!(this.g&&1E3>(0,g.E)()-this.g)){var b=(0,window.parseInt)(this.va(a,"tooltip-hide-timer"),10);b&&(k7(a,"tooltip-hide-timer"),g.bh(b));var b=(0,g.z)(function(){Lra(this,a);k7(a,"tooltip-show-timer")},this),c=(0,window.parseInt)(this.va(a,"tooltip-show-delay"),10)||0,b=g.$g(b,c);
g.kh(a,"tooltip-show-timer",b.toString());a.title&&(Xqa(a,Ira(this,a)),a.title="");b=g.ua(a).toString();this.o[b]=a}};
g.h.vg=function(a){var b=(0,window.parseInt)(this.va(a,"tooltip-show-timer"),10);b&&(g.bh(b),k7(a,"tooltip-show-timer"));b=(0,g.z)(function(){if(a){var b=g.Ce(W7(this,a));b&&(Mra(b),g.We(b),k7(a,"content-id"));b=g.Ce(W7(this,a,"arialabel"));g.We(b)}k7(a,"tooltip-hide-timer")},this);
b=g.$g(b,50);g.kh(a,"tooltip-hide-timer",b.toString());if(b=this.va(a,"tooltip-text"))a.title=b;b=g.ua(a).toString();delete this.o[b]};
g.h.Ns=function(a){this.g=0;this.Ok(a)};
g.h.Lr=function(a){this.g=0;this.vg(a)};
g.h.Iw=function(a,b,c){c.changedTouches&&(this.g=0,(a=q7(b,Z(this),c.changedTouches[0].target))&&this.Ok(a))};
g.h.zl=function(a,b,c){c.changedTouches&&(this.g=(0,g.E)(),(a=q7(b,Z(this),c.changedTouches[0].target))&&this.vg(a))};g.B(X7,t7);g.la(X7);X7.prototype.register=function(){this.addBehavior("click",this.hq);v7(this,Ura,this.cv);v7(this,Vra,this.yz);v7(this,Wra,this.QI);v7(this,Yra,this.cv);v7(this,Zra,this.yz);v7(this,$ra,this.eJ);v7(this,asa,this.KG);v7(this,bsa,this.HG)};
X7.prototype.unregister=function(){this.removeBehavior("click",this.hq);X7.M.unregister.call(this)};
var Z7={lq:"hover-enabled",Qz:"yt-uix-button-subscribe",Rz:"yt-uix-button-subscribed",jQ:"ypc-enabled",Zz:"yt-uix-button-subscription-container",$z:"yt-subscription-button-disabled-mask-container"},Y7={zQ:"channel-external-id",bA:"subscriber-count-show-when-subscribed",cA:"subscriber-count-tooltip",dA:"subscriber-count-title",hS:"href",qS:"insecure",Eq:"is-subscribed",XT:"parent-url",SU:"clicktracking",vB:"show-unsub-confirm-dialog",VU:"show-unsub-confirm-time-frame",CB:"style-type",gr:"subscribed-timestamp",
ir:"subscription-id",sV:"target",PB:"ypc-enabled"};g.h=X7.prototype;
g.h.hq=function(a){var b=this.va(a,"href"),c=this.va(a,"insecure"),d=Gra(),c=c&&!0;if(b)a=this.va(a,"target")||"_self",window.open(b,a);else if(!c)if(d){var b=this.va(a,"channel-external-id"),d=this.va(a,"clicktracking"),c=Nra(this,a),e=this.va(a,"parent-url");if(this.va(a,"is-subscribed")){var f=this.va(a,"subscription-id"),k=new p7(b,f,c,a,d,e);Rra(this,a)?Era(a,b).then(function(){g.pq(Xra,k)}):g.pq(Xra,k)}else g.pq(Tra,new o7(b,c,d,e))}else Qra(this,a)};
g.h.cv=function(a){this.Jg(a.g,this.mw,!0)};
g.h.yz=function(a){this.Jg(a.g,this.mw,!1)};
g.h.QI=function(a){this.Jg(a.g,this.tw,!0,a.o)};
g.h.eJ=function(a){this.Jg(a.g,this.tw,!1)};
g.h.KG=function(a){this.Jg(a.g,this.CC)};
g.h.HG=function(a){this.Jg(a.g,this.xC)};
g.h.tw=function(a,b,c){b?(g.kh(a,Y7.Eq,"true"),c&&g.kh(a,Y7.ir,c),this.va(a,Y7.vB)&&(b=new $6,g.kh(a,Y7.gr,(b.getTime()/1E3).toString()))):(k7(a,Y7.Eq),k7(a,Y7.gr),k7(a,Y7.ir));Ora(this,a)};
g.h.mw=function(a,b){var c=g.nf(a,Z7.Zz);g.P(c,Z7.$z,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
g.h.CC=function(a){var b=!!this.va(a,"ypc-item-type"),c=!!this.va(a,"ypc-item-id");!this.va(a,"ypc-enabled")&&b&&c&&(g.O(a,"ypc-enabled"),g.kh(a,Y7.PB,"true"))};
g.h.xC=function(a){this.va(a,"ypc-enabled")&&(g.sh(a,"ypc-enabled"),k7(a,"ypc-enabled"))};
g.h.$B=function(a,b,c){var d=g.nb(arguments,2);(0,g.F)(a,function(a){b.apply(this,g.jb(a,d))},this)};
g.h.Jg=function(a,b,c){var d=Pra(this,a);this.$B.apply(this,g.jb([d],g.nb(arguments,1)))};var a8=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};g.ka("yt.uix.widgets_",a8,void 0);window._exportCheck==g.ya&&(g.ka("ytmod.player.annotations_module",U6,void 0),g.ka("ytmod.player.creatorendscreen",b7,void 0));var b8=X7.getInstance(),c8=Z(b8);c8 in a8||(b8.register(),u7(b8,"yt-uix-init-"+c8,b8.init),u7(b8,"yt-uix-dispose-"+c8,b8.dispose),a8[c8]=b8);})(_yt_player);
