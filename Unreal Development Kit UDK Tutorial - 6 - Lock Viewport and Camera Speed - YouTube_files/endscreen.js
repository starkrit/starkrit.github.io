(function(g){var window=this;var Qsa=function(a,b){g.U(a).experiments.g("player_gel_logging")&&a.app.V.Jb("onLogToGel",{payload_name:"thumbnailLoaded",payload:b})},Rsa=function(a,b,c,d){var e=b.Sb();
g.P(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.Hh();d=b.ed(c,d?d:"mqdefault.jpg");var k=b instanceof g.Ls?g.Wu(b.lengthSeconds):null,l=!!f,f=l&&"RD"==g.it(f).type;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.N("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.sk(c),is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.lt&&(c.playlist_length=b.B);a.update(c)},P8=function(a){var b=
g.U(a),c=b.experiments.g("video_wall_moving_thumbnails_hover"),c=b.experiments.g("video_wall_moving_thumbnails_autoplay")||c;
this.C=b.C&&!b.J;var d=g.yi||g.tc?{style:"will-change: opacity"}:null,e=["ytp-videowall-still"];b.experiments.g("video_wall_show_text")&&e.push("ytp-show-text");b={K:"img",Z:"ytp-videowall-moving-thumbnail",X:{src:"{{moving_thumbnail}}"}};g.V.call(this,{K:"a",ea:e,X:{href:"{{url}}",target:this.C?"_blank":null,"aria-label":"{{watch}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},T:[{K:"div",Z:"ytp-videowall-still-image",X:{style:"{{background}}"}},c?b:null,{K:"span",Z:"ytp-videowall-still-info",
T:[{K:"span",Z:"ytp-videowall-still-info-bg",T:[{K:"span",Z:"ytp-videowall-still-info-content",X:d,T:[{K:"span",Z:"ytp-videowall-still-info-title",T:["{{title}}"]},{K:"span",Z:"ytp-videowall-still-info-author",T:["{{author_and_views}}"]},{K:"span",Z:"ytp-videowall-still-info-duration",T:["{{duration}}"]}]}]}]},{K:"span",ea:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],T:[{K:"span",Z:"ytp-videowall-still-listlabel-icon"},g.N("YTP_PLAYLIST"),{K:"span",Z:"ytp-videowall-still-listlabel-length",
T:[" (",{K:"span",T:["{{playlist_length}}"]},")"]}]},{K:"span",ea:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],T:[{K:"span",Z:"ytp-videowall-still-listlabel-mix-icon"},g.N("YTP_MIX"),{K:"span",Z:"ytp-videowall-still-listlabel-length",T:[" (50+)"]}]}]});this.o=a;this.A=null;this.D=0;this.S("click",this.cN);this.S("keypress",this.dN);c&&this.U(this.ua["ytp-videowall-moving-thumbnail"],"load",this.fN);g.U(a).experiments.g("player_interaction_logging")&&(a=a.app.ba,g.eb(a.B,this),
b=String(a.G++),this.element.setAttribute("data-visual-id",b),g.Db(this,(0,g.z)(a.D,a,this)))},Ssa=function(a){if(5E5<g.sr(g.U(a.o).F)){var b=a.A.lk();
b&&(a.D=(0,g.xl)(),a.update({moving_thumbnail:b}))}},Q8=function(a){g.jv.call(this,a,{K:"div",
ea:["ytp-thumbnail-overlay","ytp-channel-overlay"],T:[{K:"div",Z:"ytp-thumbnail-overlay-image",X:{style:"{{background}}"}},{K:"div",Z:"ytp-thumbnail-overlay-curtain"}]})},R8=function(a){var b=g.U(a).experiments.g("moving_thumbnails_autonav"),c={K:"img",
Z:"ytp-upnext-moving-thumbnail",X:{src:"{{moving_thumbnail}}"}},c={K:"div",Z:"ytp-upnext",X:{"aria-label":"{{watch}}"},T:[{K:"div",Z:"ytp-thumbnail-overlay-image",X:{style:"{{background}}"}},b?c:null,{K:"div",Z:"ytp-thumbnail-overlay-curtain"},{K:"span",Z:"ytp-upnext-top",T:[{K:"span",Z:"ytp-upnext-header",T:[g.N("YTP_PLAYLIST_UP_NEXT")]},{K:"span",Z:"ytp-upnext-title",T:["{{title}}"]},{K:"span",Z:"ytp-upnext-author",T:["{{author}}"]}]},{K:"a",Z:"ytp-upnext-autoplay-icon",X:{href:"{{url}}"},T:[{K:"svg",
X:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},T:[{K:"circle",Z:"ytp-svg-autoplay-circle",X:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{K:"circle",Z:"ytp-svg-autoplay-ring",X:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{K:"polygon",Z:"ytp-svg-autoplay-triangle",X:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{K:"span",Z:"ytp-upnext-bottom",T:[{K:"span",
Z:"ytp-upnext-cancel"},{K:"span",Z:"ytp-upnext-paused",T:[g.N("YTP_AUTOPLAY_PAUSED_2")]}]},{K:"span",Z:"ytp-upnext-close"}]};g.V.call(this,c);this.D=null;var d=this.ua["ytp-upnext-cancel"],c=this.ua["ytp-upnext-close"];this.D=new g.V({K:"button",ea:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:0,"aria-label":g.N("YTP_AUTOPLAY_CANCEL")},T:[g.N("YTP_CANCEL")]});g.J(this,this.D);this.D.S("click",this.Ru,this);this.D.Ga(d);d=new g.V({K:"button",ea:["ytp-upnext-close-button","ytp-button"]});g.J(this,
d);d.S("click",this.Ru,this);d.Ga(c);this.o=a;this.L=this.ua["ytp-svg-autoplay-ring"];this.F=this.C=this.A=this.B=null;this.G=new g.Ld(this.Vj,5E3,this);g.J(this,this.G);this.H=0;this.U(this.ua["ytp-upnext-autoplay-icon"],"click",this.WH);this.Ou();this.U(a,"autonavvisibility",this.Ou);this.U(a,"mdxnowautoplaying",this.oH);this.U(a,"mdxautoplaycanceled",this.pH);this.U(a,"mdxautoplayupnext",this.Mw);3==this.o.ab()&&(a=(a=g.Ol(g.Il(this.o)))?a.VC():null)&&this.Mw(a);b&&(this.J=0,this.U(this.ua["ytp-upnext-moving-thumbnail"],
"load",this.UO))},Tsa=function(a,b){a.B=b;
Rsa(a,b,g.U(a.o),"hqdefault.jpg");g.sh(a.element,"ytp-moving-thumbnail-loaded");a.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});if(5E5<g.sr(g.U(a.o).F)){var c=a.B.lk();c&&(a.J=(0,g.xl)(),a.update({moving_thumbnail:c}))}},S8=function(a,b){a.A||(g.Ki("a11y-announce",g.N("YTP_PLAYLIST_UP_NEXT")+" "+a.B.title),a.H=(0,g.xl)(),a.A=new g.Ld((0,g.z)(a.Dm,a,b),25),a.Dm(b));
g.sh(a.element,"ytp-upnext-autoplay-paused")},U8=function(a){T8(a);
a.H=(0,g.xl)();a.Dm();g.O(a.element,"ytp-upnext-autoplay-paused")},T8=function(a){a.A&&(a.A.dispose(),a.A=null)},V8=function(a,b){g.Vu.call(this,{K:"div",
ea:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.o=a;this.V=!1},Usa=function(a){a=g.U(a);
return a.Zb&&!a.Ba},W8=function(a,b){V8.call(this,a,"videowall-endscreen");
this.ca=a;this.ba=b;this.G=0;this.A=[];this.H=this.D=this.C=null;this.J=this.$=!1;this.F=new g.rn(this);g.J(this,this.F);this.N=new g.Ld(g.va(g.O,this.element,"ytp-show-tiles"),0);g.J(this,this.N);var c=new g.V({K:"button",ea:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":g.N("YTP_PREVIOUS")},T:[g.Eg()]});g.J(this,c);c.Ga(this.element);c.S("click",this.aN,this);this.P=new g.Xt({K:"div",Z:"ytp-endscreen-content"});g.J(this,this.P);this.P.Ga(this.element);c=new g.V({K:"button",ea:["ytp-button",
"ytp-endscreen-next"],X:{"aria-label":g.N("YTP_NEXT")},T:[g.Fg()]});g.J(this,c);c.Ga(this.element);c.S("click",this.$M,this);this.B=new R8(a);g.J(this,this.B);g.pm(this.o,this.B.element,5);this.ma()},Vsa=function(a){return(0,g.Q)(a.N,function(a){return g.Yu(a)})},Wsa=function(a,b,c){return 0==b&&a.C.length&&(b=c/W8.g,2<=c/W8.g&&2<=b&&g.U(a.o).experiments.g("video_wall_emphasize_first"))?2*W8.g:W8.g},X8=function(a){var b=a.ba.Kp();
b!=a.$&&(a.$=b,a.o.Ra("autonavvisibility"))},Y8=function(a){V8.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.A=new Q8(a);g.J(this,this.A);g.pm(this.o,this.A.element,5);this.B=new g.V(["div","ytp-subscribe-card",["img","ytp-author-image",{src:b.profilePicture}],["div","ytp-subscribe-card-right",["div","ytp-author-name",b.author],["div","html5-subscribe-button-container"]]]);g.J(this,this.B);this.B.Ga(this.element);this.C=new g.eu(g.N("YTP_SUBSCRIBE"),g.N("YTP_UNSUBSCRIBE"),!0,b.Sq,b.subscribed,"trailer-endscreen",null,a);g.J(this,this.C);this.C.Ga(this.B.ua["html5-subscribe-button-container"]);
this.ma()},Z8=function(a){g.Vt.call(this,a);
g.gh({});this.o=null;this.isAvailable=!0;this.A=new g.rn(this);g.J(this,this.A);this.B=g.U(a);Usa(a)?this.o=new W8(this.g,this):this.B.Ba?this.o=new Y8(this.g):this.o=new V8(this.g);g.J(this,this.o);g.pm(this.g,this.o.element,5);this.Uv();this.A.U(a,"videodatachange",this.Uv,this);this.A.U(a,"crn_endscreen",this.GM,this);this.A.U(a,"crx_endscreen",this.HM,this)};
g.B(P8,g.V);g.h=P8.prototype;g.h.wh=function(){var a=this.A.Sb().videoId;g.s2(this.o.app,a,this.A.gd,this.A.Hh(),void 0,void 0)};
g.h.cN=function(a){g.tm(this.o,this);g.$u(a,this.o,!this.o.isFullscreen()&&this.C,this.A.gd||void 0)&&this.wh()};
g.h.eN=function(){this.Da(this.B);this.B=null;Ssa(this)};
g.h.dN=function(a){switch(a.keyCode){case 13:case 32:g.Nk(a)||(this.wh(),g.Mk(a))}};
g.h.fN=function(a){120<g.Ik(a).naturalWidth&&(g.O(this.element,"ytp-videowall-moving-thumbnail-loaded"),this.A.videoId&&Qsa(this.o,{isMovingThumbnail:!0,durationLoadingMs:(0,g.xl)()-this.D,videoId:this.A.videoId}))};
g.B(Q8,g.jv);Q8.prototype.Ab=function(a){a?this.B.show():g.iv(this.B)};
g.B(R8,g.V);g.h=R8.prototype;g.h.Vj=function(){this.C&&(this.G.stop(),this.Da(this.F),this.F=null,this.C.close(),this.C=null)};
g.h.Ou=function(){this.Ab(g.Jl(this.o))};
g.h.MH=function(){window.focus();this.Vj()};
g.h.Dm=function(a){a=a||g.U(this.o).experiments.o("autoplay_time")||1E4;var b=Math.min((0,g.xl)()-this.H,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.o.ab()?this.select(!0):this.A&&this.A.start()};
g.h.select=function(a){var b=g.U(this.o);if(b.experiments.g("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.am(this.o,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.B.Sb(),this.Vj(),this.C=new window.Notification(g.N("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.ed(b)}),this.F=this.U(this.C,"click",this.MH),this.G.start())}T8(this);this.o.nextVideo(!1,
a)};
g.h.WH=function(a){!g.cf(this.D.element,g.Ik(a))&&g.$u(a,this.o)&&this.select()};
g.h.Ru=function(){g.bm(this.o,"autonavcancel");g.Ml(this.o,!0)};
g.h.UO=function(a){120<g.Ik(a).naturalWidth&&(g.O(this.element,"ytp-moving-thumbnail-loaded"),Qsa(this.o,{isMovingThumbnail:!0,durationLoadingMs:(0,g.xl)()-this.J,videoId:this.B.Sb().videoId}))};
g.h.oH=function(a){this.show();S8(this,a)};
g.h.Mw=function(a){this.B&&this.B.Sb().videoId==a.Sb().videoId||Tsa(this,a)};
g.h.pH=function(){T8(this);this.ma()};
g.h.R=function(){T8(this);this.Vj();R8.M.R.call(this)};
g.B(V8,g.Vu);V8.prototype.create=function(){this.V=!0};
V8.prototype.destroy=function(){this.V=!1};
V8.prototype.Im=function(){return!1};
g.B(W8,V8);W8.g=2;g.h=W8.prototype;g.h.create=function(){W8.M.create.call(this);var a=this.o.getVideoData();a&&(this.C=Vsa(a),this.D=a);this.Yf();this.F.U(this.o,"appresize",this.Yf);this.F.U(this.o,"videodatachange",this.bN);this.F.U(this.o,"autonavchange",this.$x);this.F.U(this.o,"autonavcancel",this.ZM);this.F.U(this.element,"transitionend",this.ZI)};
g.h.destroy=function(){g.tn(this.F);g.Fb(this.A);this.A=[];this.C=null;W8.M.destroy.call(this);g.sh(this.element,"ytp-show-tiles");this.N.stop()};
g.h.Im=function(){return 1!=this.D.autonavState};
g.h.Xi=function(){return g.qm(this.o)&&this.Im()&&!this.H};
g.h.show=function(){W8.M.show.call(this);g.sh(this.element,"ytp-show-tiles");g.U(this.o).isMobile?g.Md(this.N):this.N.start();(this.J||this.H&&this.H!=this.D.clientPlaybackNonce)&&g.Ml(this.o,!1);var a=this.Xi();g.qm(this.o)&&g.U(this.o).experiments.g("ui_logging")&&this.ba.log({cancelButtonShow:a?"1":"0",state:this.Im()?"enabled":"disabled"});a?(X8(this),2==this.D.autonavState?g.U(this.o).experiments.g("fast_autonav_in_background")&&3==this.o.Dx()?this.B.select(!0):S8(this.B):3==this.D.autonavState&&
U8(this.B)):(g.Ml(this.o,!0),X8(this))};
g.h.ma=function(){W8.M.ma.call(this);U8(this.B);X8(this)};
g.h.ZI=function(a){g.Ik(a)==this.element&&this.Yf()};
g.h.Yf=function(){if(this.C&&this.C.length){var a=g.U(this.o).experiments.g("video_wall_moving_thumbnails_hover");g.O(this.element,"ytp-endscreen-paginate");var b=g.nk(this.element),c=b.width/b.height,d=96/54,e=W8.g,f=W8.g,k=Math.max(b.width/96,2),l=Math.max(b.height/54,2),m=this.C.length,n=Math.pow(W8.g,2),q,t=Wsa(this,0,l),v=Wsa(this,1,l);q=m*n+(Math.pow(t,2)-n);q+=Math.pow(v,2)-n;for(q-=n;0<q&&(e<k||f<l);){var x=e/W8.g,A=f/W8.g,G=e<=k-W8.g&&q>=A*n,I=f<=l-W8.g&&q>=x*n;if((x+1)/A*d/c>c/(x/(A+1)*
d)&&I)q-=x*n,f+=W8.g;else if(G)q-=A*n,e+=W8.g;else if(I)q-=x*n,f+=W8.g;else break}d=!1;k=W8.g+t;q>=3*n&&6>=m*n-q&&(f>=k||e>=k)&&v<=W8.g&&(d=!0);q=96*e;n=54*f;c=q/n<c?b.height/n:b.width/q;c=Math.min(c,2);q*=c;n*=c;q*=g.oe(b.width/q||1,1,1.21);n*=g.oe(b.height/n||1,1,1.21);q=Math.floor(Math.min(b.width,q));n=Math.floor(Math.min(b.height,n));b=this.P.element;g.mk(b,q,n);g.Vj(b,{marginLeft:q/-2+"px",marginTop:n/-2+"px"});Tsa(this.B,this.C[0]);g.P(this.element,"ytp-endscreen-takeover",this.Xi());X8(this);
c=q+4;q=n+4;n=0;k=!this.Xi();l=!1;for(x=0;x<e;x++)for(A=0;A<f;A++){var I=v>W8.g&&1<=n&&!l?n+1:n,K=0;d&&x>=e-W8.g&&A>=f-W8.g?K=1:0==A%W8.g&&0==x%W8.g&&(A<t&&x<t?0==A&&0==x&&(K=t):v>W8.g&&A>=f-v&&x>=e-v?A==f-v&&x==e-v&&(l=!0,I=1,K=v):K=W8.g);I=g.pe(I+this.G,m);if(0!=K){G=this.A[n];G||(G=new P8(this.o),this.A[n]=G,b.appendChild(G.element));var Za=Math.floor(q*A/f),tb=Math.floor(c*x/e),ob=Math.floor(q*(A+K)/f)-Za-4,Hd=Math.floor(c*(x+K)/e)-tb-4;g.bk(G.element,tb,Za);g.mk(G.element,Hd,ob);g.Vj(G.element,
"transitionDelay",(A+x)/20+"s");g.P(G.element,"ytp-videowall-still-mini",1==K);g.P(G.element,"ytp-videowall-still-large",2<K);I=this.C[I];K=k&&!a;G.A=I;Za=g.U(G.o);Rsa(G,I,Za,g.qh(G.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");g.sh(G.element,"ytp-videowall-moving-thumbnail-loaded");G.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});K?(g.O(G.element,"ytp-videowall-active"),Ssa(G)):Za.experiments.g("video_wall_moving_thumbnails_hover")&&
!G.B&&(G.B=G.S("mouseover",G.eN));K=I.gd;I=G.o;g.U(I).experiments.g("player_interaction_logging")&&(I=I.app.ba,K=K&&K.itct,G=G.element.getAttribute("data-visual-id"),g.rm(I,"onLogServerVeCreated",{id:G,tracking_params:K}));n++}}g.P(this.element,"ytp-endscreen-paginate",n<m);for(a=this.A.length-1;a>=n;a--)G=this.A[a],g.We(G.element),g.Eb(G);this.A.length=n}};
W8.A=2;W8.o=1.21;g.h=W8.prototype;g.h.bN=function(){var a=this.o.getVideoData();this.D!=a&&(this.G=0,this.C=Vsa(a),this.D=a,this.Yf())};
g.h.$M=function(){this.G+=this.A.length;this.Yf()};
g.h.aN=function(){this.G-=this.A.length;this.Yf()};
g.h.UE=function(){return!!this.B.A};
g.h.$x=function(a){1==a?(this.J=!1,this.H=this.D.clientPlaybackNonce,T8(this.B),this.g&&this.Yf()):(this.J=!0,this.g&&this.Xi()&&(2==a?S8(this.B):3==a&&U8(this.B)))};
g.h.ZM=function(a){if(a){for(a=0;a<this.A.length;a++)g.um(this.ca,this.A[a],!0);this.$x(1)}else this.H=null,this.J=!1;this.Yf()};
g.B(Y8,V8);Y8.prototype.show=function(){Y8.M.show.call(this);this.A.Ab(!0)};
Y8.prototype.ma=function(){Y8.M.ma.call(this);this.A.Ab(!1)};
g.B(Z8,g.Vt);g.h=Z8.prototype;g.h.Ux=function(){var a=this.g.getVideoData(),b=!Usa(this.g)||!(!a.N||!a.N.length),a=g.Kl(a,"ypc_module"),c=g.ZZ(this.g.app);return(b||!1)&&!a&&!c};
g.h.Kp=function(){return(this.o instanceof W8||!1)&&this.o.g&&this.o.Xi()};
g.h.RE=function(){return this.Kp()?this.o.UE():!1};
g.h.R=function(){g.mm(this.g,"endscreen");Z8.M.R.call(this)};
g.h.load=function(){Z8.M.load.call(this);this.o.show();g.U(this.g).Ba&&.01>Math.random()&&this.log({trailerEndscreenShow:1})};
g.h.log=function(a){g.am(this.g,"end",a)};
g.h.unload=function(){Z8.M.unload.call(this);this.o.ma();this.o.destroy();this.isAvailable=!1};
g.h.GM=function(a){this.Ux()&&(this.o.V||this.o.create(),"load"==a.getId()&&this.load())};
g.h.HM=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.Uv=function(){g.mm(this.g,"endscreen");var a=Math.max(1E3*(this.g.getVideoData().lengthSeconds-10),0),a=new g.wm(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.wm(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.jm(this.g,[a,b])};
window._exportCheck==g.ya&&g.ka("ytmod.player.endscreen",Z8,void 0);})(_yt_player);
