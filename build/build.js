!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(){var b,c,d={height:j.innerHeight,width:j.innerWidth};return d.height||(b=i.compatMode,(b||!a.support.boxModel)&&(c="CSS1Compat"===b?k:i.body,d={height:c.clientHeight,width:c.clientWidth})),d}function c(){return{top:j.pageYOffset||k.scrollTop||i.body.scrollTop,left:j.pageXOffset||k.scrollLeft||i.body.scrollLeft}}function d(){if(h.length){var d=0,g=a.map(h,function(a){var b=a.data.selector,c=a.$element;return b?c.find(b):c});for(e=e||b(),f=f||c();d<h.length;d++)if(a.contains(k,g[d][0])){var i=a(g[d]),j={height:i[0].offsetHeight,width:i[0].offsetWidth},l=i.offset(),m=i.data("inview");if(!f||!e)return;l.top+j.height>f.top&&l.top<f.top+e.height&&l.left+j.width>f.left&&l.left<f.left+e.width?m||i.data("inview",!0).trigger("inview",[!0]):m&&i.data("inview",!1).trigger("inview",[!1])}}}var e,f,g,h=[],i=document,j=window,k=i.documentElement;a.event.special.inview={add:function(b){h.push({data:b,$element:a(this),element:this}),!g&&h.length&&(g=setInterval(d,250))},remove:function(a){for(var b=0;b<h.length;b++){var c=h[b];if(c.element===this&&c.data.guid===a.guid){h.splice(b,1);break}}h.length||(clearInterval(g),g=null)}},a(j).on("scroll resize scrollstop",function(){e=f=null}),!k.addEventListener&&k.attachEvent&&k.attachEvent("onfocusin",function(){f=null})}),function(a){function b(b,c,d,e){var f=b.text(),g=f.split(c),h="";g.length&&(a(g).each(function(a,b){h+='<span class="'+d+(a+1)+'" aria-hidden="true">'+b+"</span>"+e}),b.attr("aria-label",f).empty().append(h))}var c={init:function(){return this.each(function(){b(a(this),"","char","")})},words:function(){return this.each(function(){b(a(this)," ","word"," ")})},lines:function(){return this.each(function(){var c="eefec303079ad17405c889e092e105b0";b(a(this).children("br").replaceWith(c).end(),c,"line","")})}};a.fn.lettering=function(b){return b&&c[b]?c[b].apply(this,[].slice.call(arguments,1)):"letters"!==b&&b?(a.error("Method "+b+" does not exist on jQuery.lettering"),this):c.init.apply(this,[].slice.call(arguments,0))}}(jQuery),function(a){"use strict";function b(b){return/In/.test(b)||a.inArray(b,a.fn.textillate.defaults.inEffects)>=0}function c(b){return/Out/.test(b)||a.inArray(b,a.fn.textillate.defaults.outEffects)>=0}function d(a){return"true"!==a&&"false"!==a?a:"true"===a}function e(b){var c=b.attributes||[],e={};return c.length?(a.each(c,function(a,b){var c=b.nodeName.replace(/delayscale/,"delayScale");/^data-in-*/.test(c)?(e["in"]=e["in"]||{},e["in"][c.replace(/data-in-/,"")]=d(b.nodeValue)):/^data-out-*/.test(c)?(e.out=e.out||{},e.out[c.replace(/data-out-/,"")]=d(b.nodeValue)):/^data-*/.test(c)&&(e[c.replace(/data-/,"")]=d(b.nodeValue))}),e):e}function f(a){for(var b,c,d=a.length;d;b=parseInt(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}function g(a,b,c){a.addClass("animated "+b).css("visibility","visible").show(),a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){a.removeClass("animated "+b),c&&c()})}function h(d,e,h){var i=d.length;return i?(e.shuffle&&(d=f(d)),e.reverse&&(d=d.toArray().reverse()),void a.each(d,function(d,f){function j(){b(e.effect)?k.css("visibility","visible"):c(e.effect)&&k.css("visibility","hidden"),i-=1,!i&&h&&h()}var k=a(f),l=e.sync?e.delay:e.delay*d*e.delayScale;k.text()?setTimeout(function(){g(k,e.effect,j)},l):j()})):void(h&&h())}var i=function(d,f){var g=this,i=a(d);g.init=function(){g.$texts=i.find(f.selector),g.$texts.length||(g.$texts=a('<ul class="texts"><li>'+i.html()+"</li></ul>"),i.html(g.$texts)),g.$texts.hide(),g.$current=a("<span>").html(g.$texts.find(":first-child").html()).prependTo(i),b(f["in"].effect)?g.$current.css("visibility","hidden"):c(f.out.effect)&&g.$current.css("visibility","visible"),g.setOptions(f),g.timeoutRun=null,setTimeout(function(){g.options.autoStart&&g.start()},g.options.initialDelay)},g.setOptions=function(a){g.options=a},g.triggerEvent=function(b){var c=a.Event(b+".tlt");return i.trigger(c,g),c},g["in"]=function(d,f){d=d||0;var i,j=g.$texts.find(":nth-child("+((d||0)+1)+")"),k=a.extend(!0,{},g.options,j.length?e(j[0]):{});j.addClass("current"),g.triggerEvent("inAnimationBegin"),g.$current.html(j.html()).lettering("words"),"char"==g.options.type&&g.$current.find('[class^="word"]').css({display:"inline-block","-webkit-transform":"translate3d(0,0,0)","-moz-transform":"translate3d(0,0,0)","-o-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}).each(function(){a(this).lettering()}),i=g.$current.find('[class^="'+g.options.type+'"]').css("display","inline-block"),b(k["in"].effect)?i.css("visibility","hidden"):c(k["in"].effect)&&i.css("visibility","visible"),g.currentIndex=d,h(i,k["in"],function(){g.triggerEvent("inAnimationEnd"),k["in"].callback&&k["in"].callback(),f&&f(g)})},g.out=function(b){var c=g.$texts.find(":nth-child("+((g.currentIndex||0)+1)+")"),d=g.$current.find('[class^="'+g.options.type+'"]'),f=a.extend(!0,{},g.options,c.length?e(c[0]):{});g.triggerEvent("outAnimationBegin"),h(d,f.out,function(){c.removeClass("current"),g.triggerEvent("outAnimationEnd"),f.out.callback&&f.out.callback(),b&&b(g)})},g.start=function(a){setTimeout(function(){g.triggerEvent("start"),function b(a){g["in"](a,function(){var c=g.$texts.children().length;a+=1,!g.options.loop&&a>=c?(g.options.callback&&g.options.callback(),g.triggerEvent("end")):(a%=c,g.timeoutRun=setTimeout(function(){g.out(function(){b(a)})},g.options.minDisplayTime))})}(a||0)},g.options.initialDelay)},g.stop=function(){g.timeoutRun&&(clearInterval(g.timeoutRun),g.timeoutRun=null)},g.init()};a.fn.textillate=function(b,c){return this.each(function(){var d=a(this),f=d.data("textillate"),g=a.extend(!0,{},a.fn.textillate.defaults,e(this),"object"==typeof b&&b);f?"string"==typeof b?f[b].apply(f,[].concat(c)):f.setOptions.call(f,g):d.data("textillate",f=new i(this,g))})},a.fn.textillate.defaults={selector:".texts",loop:!1,minDisplayTime:2e3,initialDelay:0,"in":{effect:"fadeInLeftBig",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},out:{effect:"hinge",delayScale:1.5,delay:50,sync:!1,reverse:!1,shuffle:!1,callback:function(){}},autoStart:!0,inEffects:[],outEffects:["hinge"],callback:function(){},type:"char"}}(jQuery),$(document).ready(function(){const a='<svg class="bigTriangleColor caption-triangle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 101" preserveAspectRatio="none"><path d="M0 100 L75 0 L100 100 Z" /></svg>';$(".caption").prepend(a);const b=$(".pic-div");b.on("click",function(){var a=$(this).children().children().eq(1),b=$(this).is(":hover");a.css({top:"115px",opacity:"0"}),b&&($(this).addClass("pic-div-clicked"),$(this).children().children().first().addClass("pic-clicked"))});const c=$(".tlt");Modernizr.cssanimations?c.on("inview",function(a,b){b&&c.textillate({initialDelay:100,"in":{effect:"fadeInUp",delay:90},type:"word"})}):c.css("opacity","1"),$(".arrows-link").click(function(a){if(console.log("clicked"),a.preventDefault(),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=$(this.hash);if(b=b.length?b:$("[name="+this.hash.slice(1)+"]"),b.length)return $("html, .main").animate({scrollTop:b.offset().top},1e3),!1}})});