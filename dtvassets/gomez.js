var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var gomez=gomez?gomez:{};gomez.h3=function(c,a){for(var b in a){c[b]=a[b]}return c};gomez.h3(gomez,{b3:function(a){if(a<=0){return false}return Math.random()<=a&&a},b0:function(d){var b=document.cookie;var a=b.match(new RegExp(";[ ]*"+d+"=([^;]*)"));if(!a){a=b.match(new RegExp(d+"=([^;]*)"))}if(a){return unescape(a[1])}return""},c2:function(f,k,g,b,h,m){try{var l=this,j=location.hostname;var i=f+"="+escape(k)+(g?";expires="+g.toGMTString():"")+(b?";path="+b:";path=/")+(h?";domain="+h:";domain="+j)+(m?";secure":"");
document.cookie=i}catch(g){}},z0:function(d){var b=this;if(d){var c=b.b0("__g_c");if(!c){return""}var a=c.match(new RegExp(d+":([^|]*)"));if(a){return unescape(a[1])}return""}else{return""}},z1:function(d,a){var b=this;if(d){var c=b.b0("__g_c");if(c){if(c.indexOf(d+":")!=-1){c=c.replace(new RegExp("("+d+":[^|]*)"),d+":"+a)}else{c=c==" "?d+":"+a:c+"|"+d+":"+a}b.c2("__g_c",c)}else{b.c2("__g_c",d+":"+a)}}}});if(gomez.wrate){gomez.i0=gomez.z0("w");if(gomez.i0){gomez.runFlg=parseInt(gomez.i0)>0?true:false
}else{if(gomez.b3(parseFloat(gomez.wrate))){gomez.runFlg=true;gomez.z1("w",1)}else{gomez.runFlg=false;gomez.z1("w",0)}}}else{if(gomez.wrate==undefined){gomez.runFlg=true;gomez.z1("w",1)}else{gomez.runFlg=false;gomez.z1("w",0)}}if(gomez.runFlg){gomez.h1=function(a,b){return a?a:b};gomez.gs=gomez.h1(gomez.gs,new Date().getTime());gomez.acctId=gomez.h1(gomez.acctId,"");gomez.pgId=gomez.h1(gomez.pgId,"");gomez.grpId=gomez.h1(gomez.grpId,"");gomez.E=function(a){this.s=a};gomez.E.prototype={g1:function(c){var b=gomez,a=b.g6(c);
if(a){a.e=b.b5()}}};gomez.L=function(a){this.a=a};gomez.L.prototype={g2:function(c){var j=gomez,b=j.b5();var k=document.getElementsByTagName(c);var g=j.k;if(c=="script"){g=j.j}if(c=="iframe"){g=j.l}if(k){var d=k.length;for(var f=0;f<d;f++){var h=k[f].src||k[f].href;if(h&&!g[h]){var a=new gomez.E(g);j.grm[h]=a;g[h]=new j.c7(h,b);if(j.gIE&&c=="script"){j.e2(k[f],"readystatechange",j.d2,false)}else{j.e2(k[f],"load",a.g1,false)}}}}}};gomez.L.m=new Object;gomez.L.m.link=new gomez.L();gomez.L.m.iframe=new gomez.L();
gomez.S=function(){var a=this,b=gomez.acctId+".r.axf8.net";a.x=location.protocol+"//"+b+"/mr/b.gif?";a.y=location.protocol+"//"+b+"/mr/a.gif?"};gomez.h2=function(){var a=this;a.gIE=false;a.f=new Object;a._h=0;a.j=new Object;a.k=new Object;a.l=new Object;a.m=location.href;a.p=-1;a.q=-1;a.t=new Array;a.u=new Array;a._w=false;a.gSfr=/KHTML|WebKit/i.test(navigator.userAgent);a.gc={n:"c"};a.grm=new Object;a.b;a.a=0;a.d=false;a.x=false;a.s=new gomez.S;a._a=false;a.h6=false;a.n1=0};gomez.h3(gomez,{h5:function(a){try{var b=document.createElement("script");
b.src=a;b.type="text/javascript";if(document.body){document.body.appendChild(b)}else{if(document.documentElement.getElementsByTagName("head")[0]){document.documentElement.getElementsByTagName("head")[0].appendChild(b)}}}catch(c){}},a9:function(){var b=gomez,a=b.z0("a"),f=b.b0("__g_u"),d=b.z0("h");b.gc.h=b.z0("b");if(d){b.n1=parseInt(d)}if(!b.gc.h){b.gc.h=1}b.z1("b",parseInt(b.gc.h)+1);if(a){b.a=parseInt(a);if(b.a==1){b._w=true}else{if(b.a==3){b.x=true;b._w=true}}b.d=true;b.gc.c=b.z0("c");b.gc.d=b.z0("d");
b.gc.i=b.z0("e");b.gc.j=b.z0("f");if(b._w&&!b._a){b.h7();b._a=true}}else{if(!b.gc.a){return}var c="v=1";b.c2("__g_u","1",new Date(b.gt()+1000));if(b.b0("__g_u")&&f&&f!="1"&&f.indexOf("NaN")==-1&&f.indexOf("undefined")==-1){c="v=0";var e=f.split("_");b.b2(parseInt(e[0]),parseInt(e[1])+1);if(e[4]&&e[4]!="0"&&b.gt()<parseInt(e[5])&&e[2]&&e[2]!="0"){b.b1(parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4]),parseInt(e[5]));if(e[6]){b.n0(parseInt(e[6]))}return}}b.h6=true;c=b.s.y+"a="+b.gc.a+"&"+c;if(b.gSfr){document.write("<script src='"+c+"'><\/script>")
}else{b.h5(c)}}b.b=b.z0("g")},h7:function(){var b=gomez,a=b.tloc?b.tloc:location.protocol+"//"+b.acctId+".t.axf8.net/js/gtag5.js";if(b.gSfr){document.write("<script src='"+a+"'><\/script>")}else{b.h5(a)}},n0:function(b){var a=gomez,e=new Date(a.gt()+946080000000),d=a.b0("__g_u");a.n1=b;a.z1("h",b);if(d&&d!="1"&&d.indexOf("NaN")==-1&&d.indexOf("undefined")==-1){var c=d.split("_");d=""+c[0]+"_"+c[1]+"_"+c[2]+"_"+c[3]+"_"+c[4]+"_"+c[5]+"_"+b;a.c2("__g_u",d,e)}},b1:function(a,c,e,d){var b=this;if(b._a){return
}if(b.b3(a)){b._w=true;b.a=1;var g=parseFloat(c/a);if(b.b3(g)){b.x=true;b.a=3}}b.d=true;b.z1("a",b.a);b.z1("e",a);b.z1("f",c);b.gc.i=a;b.gc.j=c;b.h4(a,c,e,d);if(b._w){b.h7();b._a=true}},b2:function(a,c){var b=this,e=new Date(b.gt()+946080000000),d=""+a+"_"+c;if(b._a){return}b.c2("__g_u",d,e);b.gc.c=a;b.gc.d=c;b.z1("c",a);b.z1("d",c)},h4:function(e,c,b,j){var k=this,i=new Date(k.gt()+946080000000),h=k.b0("__g_u");if(h&&h!="1"&&h.indexOf("NaN")==-1&&h.indexOf("undefined")==-1){var a=h.split("_"),l;
if(j){l=j}else{if(b&&b>=0){l=new Date(k.gt()+parseInt(b*86400000)).getTime()}else{b=5;l=new Date(k.gt()+432000000).getTime()}}h=""+a[0]+"_"+a[1]+"_"+e+"_"+c+"_"+b+"_"+l;k.c2("__g_u",h,i)}},gt:function(){return new Date().getTime()},b5:function(){return new Date().getTime()-gomez.gs},b6:function(){var a=gomez;a.p=a.b5()},f8:function(){var a=this;if(a.pollId1){clearInterval(a.pollId1)}if(a.pollId2){clearInterval(a.pollId2)}if(a.pollId3){clearInterval(a.pollId3)}if(a.pollId4){clearInterval(a.pollId4)
}},b7:function(){var a=gomez;a.f8();a.q=a.b5()},c7:function(a,c){var b=this;b.m=a;b.s=c},c8:function(){var d=gomez,f=d.b5(),a=document.images.length;if(a>d._h){for(var c=d._h;c<a;++c){var b=document.images[c].src;if(b){var e=new gomez.E(d.f);d.grm[b]=e;d.f[b]=new d.c7(b,f);d.e2(document.images[c],"load",d.c4,false);d.e2(document.images[c],"error",d.c5,false);d.e2(document.images[c],"abort",d.c6,false)}}}d._h=a},c4:function(c){var b=gomez,a=b.g6(c);if(a){a.e=b.b5()}},c5:function(c){var b=gomez,a=b.g6(c);
if(a){a.e=b.b5();a.b=1}},c6:function(c){var b=gomez,a=b.g6(c);if(a){a.a=b.b5()}},g6:function(f){var d=gomez,f=window.event?window.event:f,b=d.d8(f),c;if(d.grm[b.src||b.href]&&d.grm[b.src||b.href].s){c=d.grm[b.src||b.href].s[b.src||b.href]}return c},d2:function(){var a=gomez;var c=window.event?window.event:c,b=a.d8(c);if(b.readyState=="loaded"||b.readyState=="complete"){var d=a.j[b.src];if(d){d.e=a.b5()}}},setPair:function(a,c){var b=this;b.t[b.t.length]={n:"p",a:a,b:c}},nameEvent:function(b){var a=this;
a.f6(b,1)},startInterval:function(b){var a=this;a.f6(b,2,1)},endInterval:function(b){var a=this;a.f6(b,2,2)},f6:function(g,e,a){if(g&&g.length>20){g=g.substring(0,20)}var c=this,d=c.u;if(e==3){d[d.length]={n:"a",a:g,b:a,e:e,f:undefined}}else{d[d.length]={n:"a",a:g,b:c.b5(),e:e,f:a}}},customValue:function(c,a){var b=this;if(typeof(a)!="number"){return}b.f6(c,3,a)},d8:function(a){if(gomez.gIE){return a.srcElement||{}}else{return a.currentTarget||a.target||{}}},e2:function(g,d,b,i){var h="on"+d;if(g.addEventListener){g.addEventListener(d,b,i)
}else{if(g.attachEvent){g.attachEvent(h,b)}else{var a=g[h];if(typeof g[h]!="function"){g[h]=b}else{g[h]=function(c){a(c);b(c)}}}}},i1:function(){var c=window.document,a=false,b=function(){if(!a){a=true;gomez.b6();gomez.a9()}};(function(){try{c.documentElement.doScroll("left")}catch(d){setTimeout(arguments.callee,50);return}b()})();c.onreadystatechange=function(){if(c.readyState=="complete"){c.onreadystatechange=null;b()}}},g7:function(){try{var t=gomez;t.gc.a=t.acctId;
/*@cc_on t.gIE=true;@*/
if(t.gIE){t.i1();
window.attachEvent("onload",t.b7)}else{if(t.gSfr){var m=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(m);delete m;t.b6();t.b7()}},10)}else{if(window.addEventListener){window.addEventListener("DOMContentLoaded",t.b6,false);window.addEventListener("load",t.b7,false)}else{return}}}t.c8();t.pollId1=setInterval(t.c8,10);gomez.L.m.link.g2("link");t.pollId3=setInterval("gomez.L.m['link'].g2('link')",10);gomez.L.m.iframe.g2("iframe");t.pollId4=setInterval("gomez.L.m['iframe'].g2('iframe')",10);
if(!t.gIE){t.a9()}}catch(e){return}}});gomez.h2();gomez.g7()};
}

/*
     FILE ARCHIVED ON 14:15:46 Jul 10, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:59:28 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.754
  exclusion.robots: 0.06
  exclusion.robots.policy: 0.049
  esindex: 0.012
  cdx.remote: 28.309
  LoadShardBlock: 6304.631 (3)
  PetaboxLoader3.datanode: 6259.899 (4)
  PetaboxLoader3.resolve: 236.881 (2)
  load_resource: 236.163
*/