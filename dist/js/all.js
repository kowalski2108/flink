$(".flink-vc.form").each(function(){const t=$(this);t.find(":input").on("input",function(){var t=$(this).attr("name"),t=$("span.input-error#"+t);t.length&&(t.remove(),$(this).removeClass("error"))}),t.find("button.cancel").click(function(){window.location=window.location.href.split("?")[0]}),t.submit(function(t){t.preventDefault();var e=!0;$(this).find("[data-required]").each(function(){var t;$(this).val()||(t=$(this).attr("name"),$("span.input-error#"+t).length||($("<span class='input-error' id='"+t+"'>Bitte füllen Sie dieses Feld aus</span>").insertAfter(this),$(this).addClass("error")),e=!1)}),$(this).find("[data-type=email]").each(function(){var t=$(this).val();String(t).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||(e=!1,t=$(this).attr("name"),$("span.input-error#"+t).length||($("<span class='input-error' id='"+t+"'>Geben Sie eine gültige E-Mail Adresse an</span>").insertAfter("input[name=email]"),$(this).addClass("error")))}),$(this).find("[data-type=phone]").each(function(){var t=$(this).val();t&&(t=t.replace(/ /g,""),String(t).toLowerCase().match(/(\+|00)(297|93|244|1264|358|355|376|971|54|374|1684|1268|61|43|994|257|32|229|226|880|359|973|1242|387|590|375|501|1441|591|55|1246|673|975|267|236|1|61|41|56|86|225|237|243|242|682|57|269|238|506|53|5999|61|1345|357|420|49|253|1767|45|1809|1829|1849|213|593|20|291|212|34|372|251|358|679|500|33|298|691|241|44|995|44|233|350|224|590|220|245|240|30|1473|299|502|594|1671|592|852|504|385|509|36|62|44|91|246|353|98|964|354|972|39|1876|44|962|81|76|77|254|996|855|686|1869|82|383|965|856|961|231|218|1758|423|94|266|370|352|371|853|590|212|377|373|261|960|52|692|389|223|356|95|382|976|1670|258|222|1664|596|230|265|60|262|264|687|227|672|234|505|683|31|47|977|674|64|968|92|507|64|51|63|680|675|48|1787|1939|850|351|595|970|689|974|262|40|7|250|966|249|221|65|500|4779|677|232|503|378|252|508|381|211|239|597|421|386|46|268|1721|248|963|1649|235|228|66|992|690|993|670|676|1868|216|90|688|886|255|256|380|598|1|998|3906698|379|1784|58|1284|1340|84|678|681|685|967|27|260|263)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/)||(e=!1,t=$(this).attr("name"),$("span.input-error#"+t).length||($("<span class='input-error' id='"+t+"'>Geben Sie eine gültige Nummer im folgenden Format an: +49 152 12345678</span>").insertAfter("input[name=phone]"),$(this).addClass("error"))))}),e&&$(this).unbind("submit").submit()})});class Toast{toast;autoCloseValue;visibleSince;progressInterval;closeTimeout;constructor(t){this.toast=document.createElement("div"),$(this.toast).addClass("flink-vc"),$(this.toast).addClass("toast");var e=document.createElement("p"),n=document.createElement("h1"),a=document.createElement("div");$(e).addClass("message"),$(n).addClass("title"),$(a).addClass("bar"),this.toast.append(a),this.toast.append(n),this.toast.append(e),$(this.toast).click(()=>{this.remove()}),requestAnimationFrame(()=>{$(this.toast).addClass("visible")}),this.visibleSince=new Date,this.toast.style.setProperty("--progress",1),this.progressInterval=setInterval(()=>{var t=new Date-this.visibleSince;this.toast.style.setProperty("--progress",1-t/this.autoCloseValue)},10),Object.entries(t).forEach(([t,e])=>{this[t]=e})}set position(t){const e=$('div.flink-vc.toast-container[data-position="'+t+'"]')[0]||createContainer(t);e.append(this.toast)}set autoClose(t){(this.autoCloseValue=t)&&"-1"!==t&&setTimeout(()=>this.remove(),t)}set type(t){$(this.toast).attr("data-type",t)}set title(t){$(this.toast).find("h1.title").html(t)}set message(t){$(this.toast).find("p.message").html(t)}remove(){clearTimeout(this.closeTimeout),clearInterval(this.progressInterval);const t=$(this.toast).parent();$(this.toast).removeClass("visible"),$(this.toast).on("transitionend",()=>{$(this.toast).remove(),0===t.children().length&&t.remove()})}}function createContainer(t){var e=document.createElement("div");return $(e).addClass("flink-vc"),$(e).addClass("toast-container"),$(e).attr("data-position",t),$("body").append(e),e}$(".flink-vc.video").each(function(){const e=$(this),n=e.find("video"),a=e.find("div.timeline-wrapper"),t=e.find("button.play-pause"),s=e.find("button.fullscreen"),i=e.find("button.mute-unmute"),o=e.find("button.speed"),r=e.find("input.volume-slider"),l=e.find("div.current-time"),u=e.find("div.total-time");let d=!1,c;function m(t){var e=a[0].getBoundingClientRect(),e=Math.min(Math.max(0,t.pageX-e.x),e.width)/e.width;(d=1==(1&t.buttons))?(c=n[0].paused,n[0].pause()):(n[0].currentTime=e*n[0].duration,c||n[0].play()),h(t)}function h(t){var e=a[0].getBoundingClientRect(),e=Math.min(Math.max(0,t.pageX-e.x),e.width)/e.width;a[0].style.setProperty("--preview-position",e),d&&(t.preventDefault(),a[0].style.setProperty("--progress-position",e))}function p(){"false"!==n[0].attr("data-pausable")&&(n[0].paused?n[0].play():n[0].pause())}a.on("mousemove",h),a.on("mousedown",m),$(document).on("mouseup",function(t){d&&m(t)}),$(document).on("mousemove",function(t){d&&h(t)}),t.click(p),n.click(p),n.on("play",function(){e.removeClass("paused")}),n.on("pause",function(){e.addClass("paused")}),i.click(function(){n[0].muted=!n[0].muted}),r.on("input",function(t){n[0].volume=$(this).val(),n.muted=0===$(this).val()}),n.on("volumechange",function(){r.val(n[0].volume);let t;t=n[0].muted||0===n[0].volume?(r.val(0),"muted"):.5<=n[0].volume?"high":"low",e.attr("data-volume-level",t)});const f=new Intl.NumberFormat(void 0,{minimumIntegerDigits:2});function v(t){var e=Math.floor(t%60),n=Math.floor(t/60)%60,t=Math.floor(t/3600);return 0===t?n+":"+f.format(e):t+":"+f.format(n)+":"+f.format(e)}function g(){"false"!==n[0].attr("data-fullscreenable")&&(null==document.fullscreenElement?e[0].requestFullscreen():document.exitFullscreen())}n.on("loadeddata",function(){u.html(v(n[0].duration))}),n.on("timeupdate",function(){l.html(v(n[0].currentTime)),a[0].style.setProperty("--progress-position",n[0].currentTime/n[0].duration)}),o.click(function(){let t=n[0].playbackRate+.5;2<t&&(t=.5),n[0].playbackRate=t,o.html(t+"x")}),s.click(g),n.dblclick(g),$(document).on("fullscreenchange",function(){e.toggleClass("fullscreen",null!==document.fullscreenElement)})});