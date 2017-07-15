! function (e) {
    "use strict";
    e(window).on("load", function () {
        e("#preloader").delay(300).fadeOut("slow", function () {
            e(this).remove()
        })
    }), e(document).ready(function () {
        function o() {
            var e = {
                    center: a,
                    scrollwheel: !1,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                },
                o = new google.maps.Map(document.getElementById("contactgoogleMap"), e),
                t = new google.maps.Marker({
                    position: a,
                    animation: google.maps.Animation.BOUNCE,
                    icon: "assets/img/map-marker.png",
                    map: o
                }),
                n = [{
                    stylers: [{
                        hue: "#c5c5c5"
                    }, {
                        saturation: -100
                    }]
                }];
            o.setOptions({
                styles: n
            }), t.setMap(o)
        }
        e(window).on("scroll", function () {
            var o = e(".menu-area");
            e(window).scrollTop() > 0 ? o.addClass("sticky-menu") : o.removeClass("sticky-menu")
        }), e(document).on("click", ".navbar-collapse.in", function (o) {
            e(o.target).is("a") && "dropdown-toggle" != e(o.target).attr("class") && e(this).collapse("hide")
        }), e("body").scrollspy({
            target: ".navbar-collapse",
            offset: 195
        }), e("a.smooth_scroll").on("click", function (o) {
            o.preventDefault();
            var a = e(this);
            e("html, body").stop().animate({
                scrollTop: e(a.attr("href")).offset().top - 50
            }, 1e3)
        }), e(".portfolio").mixItUp(), e(".work-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0
            },
            zoom: {
                enabled: !0,
                duration: 300,
                opener: function (e) {
                    return e.find("img")
                }
            }
        }), e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        });
        var a = new google.maps.LatLng((-33.01719444), (-68.87166667));
        google.maps.event.addDomListener(window, "load", o), e("#contact").submit(function (o) {
            o.preventDefault();
            var a = {
                name: e("#name").val(),
                subject: e("#subject").val(),
                email: e("#email").val(),
                message: e("#message").val()
            };
            e.ajax({
                method: "POST",
                data: a,
                url: "assets/libs/mailer.php",
                success: function (o) {
                    e("#contact")[0].reset(), e(".error").fadeOut("slow"), e(".success").fadeIn("slow")
                },
                error: function (o) {
                    e(".success").fadeOut("slow"), e(".error").fadeIn("slow")
                }
            })
        })
    })
}(jQuery);