!function(e){"use strict";e.fn.desoSlide=function(n){var a,t,i,o,r,s,d,l,c={main:{container:!1,cssClass:"",insertion:"append"},auto:{load:!0,start:!1},first:0,interval:3e3,effect:"fade",overlay:"always",caption:!1,controls:{enable:!0,keys:!0},events:{thumbClick:!1,prev:!1,pause:!1,play:!1,next:!1,completed:!1}},p=e.extend(!0,{},c,n),f=(a=0,function(e,n){clearTimeout(a),a=setTimeout(e,n)}),u=this,m=u.find("li"),h=m.length,v=p.first,g=e(p.main.container).find(".desoSlide-overlay"),y=p.interval<1500?1500:p.interval,w=!1,k=!1,b={checks:function(){u.length||b.resultHandler("error",u.selector+" doesn't exist."),p.main.container?e(p.main.container).length||b.resultHandler("error",e(p.main.container).selector+" doesn't exist."):b.resultHandler("error",'You must specify the "main.container" option. Check out the documentation.');-1===["always","hover","none"].indexOf(p.overlay)&&b.resultHandler("error",'Incorrect value for the "overlay" option. Check out the documentation.'),v>=h&&(0===h?b.resultHandler("error","You must have at least 1 thumbnail."):b.resultHandler("error",'The "first" option must be between 0 and '+(h-1)+"."))},checkData:function(){!p.caption||void 0!==o&&""!==o||b.resultHandler("warning","The captions are enabled and the data-desoslide-caption attribute is missing on a thumb. Add it or disable captions. Check out the documention."),void 0!==i&&""!==i||b.resultHandler("warning","The alt attribute is missing on a thumb, it's mandatory on <img> tags.")},init:function(){b.checks(),b.loadImages(),b.effectHandler(),b.addWrapper(),b.displayImg(),b.events()},loadImages:function(){p.auto.load&&m.find("a").each(function(n,a){e("<img>",{src:a.href,alt:""}).hide().appendTo("body")})},effectHandler:function(){(d={fade:{in:"fadeIn",out:"fadeOut"},sideFade:{in:"fadeInLeft",out:"fadeOutRight"},sideFadeBig:{in:"fadeInLeftBig",out:"fadeOutRightBig"},flip:{in:"flipInX",out:"flipOutX"},light:{in:"lightSpeedIn",out:"lightSpeedOut"},roll:{in:"rollIn",out:"rollOut"},rotate:{in:"rotateIn",out:"rotateOut"}}).hasOwnProperty(p.effect)||(p.effect=c.effect,b.resultHandler("error",'Incorrect value for the "effect" option. Default value is used. Check out the documentation.'))},outEffect:function(){e(p.main.container).find("img").removeClass("animated "+d[p.effect].in).addClass("animated "+d[p.effect].out),setTimeout(function(){b.displayImg()},900)},addWrapper:function(){var n=e("<div>",{class:"desoSlide-wrapper"}),a=e("<img>").addClass(p.main.cssClass).css("opacity",0);switch(p.main.insertion){case"prepend":a.prependTo(e(p.main.container)).wrap(n);break;case"append":a.appendTo(e(p.main.container)).wrap(n);break;case"replace":e(p.main.container).html(a).wrapInner(n);break;default:b.resultHandler("error",'Incorrect value for the "insertion" option. Check out the documentation.')}},addSpinner:function(){l=e("<div>").addClass("desoSlide-spinner"),e(p.main.container).css("text-align","center").prepend(l)},removeSpinner:function(){l.length&&l.remove()},displayImg:function(){b.resultHandler(),t=0,v<0&&(v=h-1),v>=h&&(v=0),t=v;var n=m.find("a").eq(t).attr("href");i=m.find("img").eq(t).attr("alt"),o=m.find("img").eq(t).data("desoslide-caption"),r=m.find("img").eq(t).data("desoslide-href"),b.checkData(),e(p.main.container).find("img").attr({src:n,alt:i,"data-desoslide-caption":o}).one("load",function(){e(this).removeClass("animated "+d[p.effect].out).addClass("animated "+d[p.effect].in).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){b.addOverlay()}),p.auto.start&&(v++,w=setTimeout(function(){b.outEffect()},y))})},addOverlay:function(){if("none"!==p.overlay){if(p.caption||p.controls.enable){var n=e(p.main.container).find("img").position(),a=parseInt(e(p.main.container).find("img").css("border-left-width"),10),t=e(p.main.container).find("img").width()+a,i=e(p.main.container).find("img").height()+a;0===e(p.main.container).find(".desoSlide-overlay").length&&e("<div>",{class:"desoSlide-overlay"}).appendTo(e(p.main.container).find(".desoSlide-wrapper")),g=e(p.main.container).find(".desoSlide-overlay");var o=parseInt(g.css("padding-top").replace("px",""),10),r=parseInt(g.css("padding-bottom").replace("px",""),10),s=parseInt(g.css("padding-left").replace("px",""),10),d=parseInt(g.css("padding-right").replace("px",""),10),l=parseInt(g.css("height").replace("px",""),10)-(s+d);l=parseInt(i,10)-l-(o+r);var c=n.top+l,f=n.left;g.css({left:f+"px",top:c+"px",width:t+"px"}),"always"===p.overlay&&g.animate({opacity:.7},500),p.caption&&(b.updateCaption(),b.addLink())}else b.addLink();p.controls.enable&&b.addControls()}},updateCaption:function(){g.html(o)},addLink:function(){var n=e(p.main.container).find("a.desoslide-link").length>0,a=void 0!==r&&""!==r,t=e("<a>",{class:"desoslide-link",href:r,target:"_blank"});n&&a?e(p.main.container).find("a.desoslide-link").attr("href",r):n&&!a?e(p.main.container).find("a.desoslide-link").replaceWith(t):!n&&a&&e(p.main.container).find(".desoSlide-wrapper").append(t)},addControls:function(){e(p.main.container).find(".desoSlide-controls-wrapper").remove();var n=e("<div>",{class:"desoSlide-controls-wrapper"}).append('<a href="#prev"><span class="desoSlide-controls prev"></span></a><a href="#pause"><span class="desoSlide-controls pause"></span></a><a href="#play"><span class="desoSlide-controls play"></span></a><a href="#next"><span class="desoSlide-controls next"></span></a>');n.css({width:g.css("width"),left:g.css("left")}),e(p.main.container).find("a.desoslide-link").length>0?n.appendTo(e(p.main.container).find("a.desoslide-link")):n.appendTo(e(p.main.container).find(".desoSlide-wrapper")),(s=e(p.main.container).find(".desoSlide-controls-wrapper")).length&&(p.auto.start?s.find('a[href="#play"]').hide().parent().find('a[href="#pause"]').show():s.find('a[href="#pause"]').hide().parent().find('a[href="#play"]').show())},pause:function(){p.auto.start&&w&&(p.auto.start=!1,clearTimeout(w),v--,s&&s.find('a[href="#pause"]').hide().parent().find('a[href="#play"]').show())},play:function(){p.auto.start||(p.auto.start=!0,t===v&&v++,b.outEffect(),s&&s.find('a[href="#play"]').hide().parent().find('a[href="#pause"]').show())},resultHandler:function(e,n){if(!k)switch(e){case"error":void 0!==console&&console.error("desoSlide: "+n),p.events.completed&&p.events.completed("error"),k=e;break;case"warning":p.events.completed&&p.events.completed("warning");break;default:p.events.completed&&p.events.completed("success")}},events:function(){m.find("a").on("click",function(n){n.preventDefault();var a=e(this).parent("li").index();a!==v&&(g.animate({opacity:0}),v=a,b.outEffect(),b.pause()),p.events.thumbClick&&p.events.thumbClick()}),m.find("img").on({mouseover:function(){e(this).stop(!0,!0).animate({opacity:.7},"normal")},mouseout:function(){e(this).stop(!0,!0).animate({opacity:1},"fast")}}),"hover"===p.overlay&&e(p.main.container).on({mouseover:function(){g.stop().animate({opacity:.7},400)},mouseleave:function(){g.stop().animate({opacity:0},400)}}),p.controls.enable&&p.controls.keys&&e(document).on("keydown",function(n){switch(n.which){case 37:e(p.main.container).trigger("prev.desoslide");break;case 39:e(p.main.container).trigger("next.desoslide");break;case 32:n.preventDefault(),e(p.main.container).trigger(p.auto.start?"pause.desoslide":"play")}}),e(p.main.container).on("click",".desoSlide-controls-wrapper a",e(p.main.container),function(n){switch(n.preventDefault(),e(this).attr("href")){case"#prev":e(p.main.container).trigger("prev.desoslide");break;case"#pause":e(p.main.container).trigger("pause.desoslide");break;case"#play":e(p.main.container).trigger("play.desoslide");break;case"#next":e(p.main.container).trigger("next.desoslide")}}),e(p.main.container).on("prev.desoslide",function(){b.pause(),v--,b.outEffect(),p.events.prev&&p.events.prev()}),e(p.main.container).on("pause.desoslide",function(){b.pause(),p.events.pause&&p.events.pause()}),e(p.main.container).on("play.desoslide",function(){b.play(),p.events.play&&p.events.play()}),e(p.main.container).on("next.desoslide",function(){b.pause(),v++,b.outEffect(),p.events.next&&p.events.next()}),"none"!==p.overlay&&e(window).bind("resize",function(){f(function(){b.addOverlay()},100)})}};return b.addSpinner(),e(window).load(function(){b.removeSpinner(),b.init()}),this}}(jQuery);