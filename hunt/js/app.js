var geocoder;var map;function getLocation(){$(".guess").append("<div class='overlay'><div class='wait'></div></div>");navigator.geolocation.getCurrentPosition(getCoords)}
function getCoords(position){var lat=position.coords.latitude;var lng=position.coords.longitude;geocoder=new google.maps.Geocoder;var latlng=new google.maps.LatLng(lat,lng);geocoder.geocode({"latLng":latlng},function(results,status){$(".guess .overlay").remove();if(status==google.maps.GeocoderStatus.OK){if(results)$("#location-guess").val(results[0].formatted_address)}else alert("Geocoder failed due to: "+status)})}
$(function(){if(localStorage.getItem("instructions-shown")==null)$("body").addClass("show-instructions");$(".instructions").on("click","button",function(e){e.preventDefault();$("body").removeClass("show-instructions");localStorage.setItem("instructions-shown",1)});$("li").on("click","button",function(e){e.preventDefault();showForm(this)}).on("touchstart","button",_touchStartHandler).on("touchend","button",_touchEndHandler);$("aside").on("touchstart",_touchStartHandler).on("touchend",_touchEndHandler);
$("main").on("click","button",function(e){e.preventDefault();$this=$(this);if($this.is(".save")){$(".entry-form").show();setTimeout(function(){$("body").addClass("show-entry-form")},50)}}).on("click","h1",function(e){$("body").addClass("show-instructions")});$("aside").on("click","button",function(e){e.preventDefault();$this=$(this);if($this.is(".save")){localStorage.setItem("location"+$this.attr("data-location-id"),$("#location-guess").val());hideForm()}else if($this.is(".location"))getLocation();
else hideForm()});$(".entry-form").on("click","button",function(e){e.preventDefault();$this=$(this);if($this.is(".save")){$("#mce-MMERGE5").val(localStorage.getItem("location1"));$("#mce-MMERGE6").val(localStorage.getItem("location2"));$("#mce-MMERGE7").val(localStorage.getItem("location3"));$("#mce-MMERGE8").val(localStorage.getItem("location4"));$("#mce-MMERGE9").val(localStorage.getItem("location5"));$("#mce-MMERGE10").val(localStorage.getItem("location6"));$("#mce-MMERGE11").val(localStorage.getItem("location7"));
$("#mce-MMERGE12").val(localStorage.getItem("location8"));$("#mce-MMERGE13").val(localStorage.getItem("location9"));$("#mce-MMERGE14").val(localStorage.getItem("location10"));$this.closest(".entry-form").find("form").submit()}else{$("body").removeClass("show-entry-form");setTimeout(function(){$(".entry-form").hide()},400)}});$("input, select").on("blur",function(e){window.scrollTo(0,1)})});
var _touchStartHandler=function(evt){var $that=$(this);$that.data("touchstartXorg",evt.originalEvent.targetTouches[0].pageX);$that.data("touchstartYorg",evt.originalEvent.targetTouches[0].pageY)};
var _touchEndHandler=function(evt){if($(window).width()>=600)return;var $that=$(this);var CALLBACK;var deltaX=$that.data("touchstartXorg")-evt.originalEvent.changedTouches[0].pageX;if(deltaX>150)CALLBACK="NEXT";else if(deltaX<-150)CALLBACK="PREV";else;if(CALLBACK==="NEXT")$that.trigger("click");else if(CALLBACK==="PREV")if($that.is("aside"))hideForm()};
function hideAddressBar(){if(!window.location.hash)if(document.height<=window.outerHeight+10){document.body.style.height=window.outerHeight+50+"px";setTimeout(function(){window.scrollTo(0,1)},50)}else setTimeout(function(){window.scrollTo(0,1)},0)}
function showForm(button){$this=$(button);$aside=$("aside");locationId=$this.attr("data-location-id");$aside.find("h1").text("Location #"+locationId);$aside.find(".save").attr("data-location-id",locationId);$aside.find("img").attr("src",$this.find("img").attr("src"));$("#location-guess").val(localStorage.getItem("location"+locationId));$this.closest("body").addClass("show-form");$("body").addClass("show-form");window.scrollTo(0,1)}
function hideForm(){$("#location-guess").val("");$("body").removeClass("show-form");showAnswers()}function showAnswers(){$("main button").each(function(){$this=$(this).removeClass("has-answer");answer=localStorage.getItem("location"+$this.attr("data-location-id"));if(answer){$this.find(".answer").text(answer);$this.addClass("has-answer")}})}showAnswers();window.addEventListener("load",hideAddressBar);window.addEventListener("orientationchange",hideAddressBar);