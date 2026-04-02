var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var iCurrentListIndex=0;var iCurrentClipIndex=0;var bUserClicked=false;var bDomLoaded=false;Event.observe(document,"dom:loaded",function(){bDomLoaded=true;if($("dtvfilmstrip_tup")){try{displayPlaylist(0)}catch(b){}var a=0;$("home_video_playlist_tabs").select("ul li a").each(function(c){c.iIndex=a++;c.observe("click",function(){loadPlaylistTabData(this.iIndex)})});initPlaylistHovers();$$("#home_news ul li").each(function(c){c.observe("mouseover",function(){c.addClassName("hover")});c.observe("mouseout",function(){c.removeClassName("hover")
})})}});function initPlaylistHovers(){var a=0;$("home_video_playlist").select("ul").each(function(c){c.iIndex=a++;var b=0;c.select("li").each(function(d){d.iIndex=b++;d.observe("mouseover",function(){d.addClassName("hover")});d.observe("mouseout",function(){d.removeClassName("hover")});d.observe("dtvplaylist:click",function(){removePlaylistClipActiveStates();d.addClassName("active");var e=formatMetaData(d);$("dtvplayer").playClipFromMeta(e);iCurrentListIndex=c.iIndex;iCurrentClipIndex=d.iIndex;if(!bUserClicked){c.scrollTop=d.offsetTop-d.offsetHeight*0.8
}bUserClicked=false;return false});d.observe("click",function(){bUserClicked=true;d.fire("dtvplaylist:click")})})})}function loadPlaylistTabData(a){if(a>0){if($("home_video_playlist_dynamic").className.indexOf("content-loaded")==-1){new Ajax.Updater("home_video_playlist_dynamic","/DTVAPP/home/component/homeVideoPlaylistDynamic.jsp",{method:"get",onSuccess:function(c){var b=setInterval(function(){clearInterval(b);displayPlaylist(a);initPlaylistHovers()},100)},onFailure:function(){}});$("home_video_playlist_dynamic").addClassName("content-loaded")
}else{displayPlaylist(a)}}else{displayPlaylist(a)}}function displayPlaylist(a){$("home_video_playlist_tabs").select("ul li").each(function(b){b.removeClassName("active")});$("home_video_playlist").select("ul").each(function(b){b.removeClassName("active")});$("home_video_playlist_tabs").select("ul li")[a].addClassName("active");$("home_video_playlist").select("ul")[a].addClassName("active")}function removePlaylistClipActiveStates(){$("home_video_playlist").select("ul li").each(function(a){a.removeClassName("active")
})}function formatMetaData(b){var a="";a+="<flv>"+b.select("a")[0].name+"</flv>";a+="<title>"+b.select("h4")[0].innerHTML+"</title>";a+="<linktext>"+b.select("a")[0].title+" </linktext>";a+="<linkurl>"+b.select("a")[0].href+"</linkurl>";a+="<stillframe>"+b.select("img")[0].title+"</stillframe>";return a}function clipFinishedPlaying(){if(iCurrentClipIndex+1>$("home_video_playlist").select("ul")[iCurrentListIndex].select("li").length-1){var a=0}else{var a=iCurrentClipIndex+1}$("home_video_playlist").select("ul")[iCurrentListIndex].select("li")[a].fire("dtvplaylist:click")
}function playFirstClip(){if(bDomLoaded){var b=readCookie("dtv_home_player");if(b){var a=Math.floor($("home_video_playlist").select("ul")[0].select("li").length*Math.random());$("home_video_playlist").select("ul")[0].select("li")[a].fire("dtvplaylist:click")}else{$("home_video_playlist").select("ul")[0].select("li")[0].fire("dtvplaylist:click");createCookie("dtv_home_player","played",0.5)}}else{setTimeout(playFirstClip,50)}}function hitboxLinkFromFlash(d,b,a){try{Reporting.UserActionManager.reportFlashLinkData(d,b,a)
}catch(c){}}swfobject.registerObject("dtvfilmstrip","9.0.115","/resources/flash/swfobject/expressInstall.swf",swfobjCallback);
}

/*
     FILE ARCHIVED ON 14:15:41 Jul 10, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:59:22 Apr 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.54
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.055
  esindex: 0.007
  cdx.remote: 9.533
  LoadShardBlock: 128.794 (3)
  PetaboxLoader3.datanode: 134.774 (4)
  PetaboxLoader3.resolve: 163.311 (2)
  load_resource: 176.4
*/