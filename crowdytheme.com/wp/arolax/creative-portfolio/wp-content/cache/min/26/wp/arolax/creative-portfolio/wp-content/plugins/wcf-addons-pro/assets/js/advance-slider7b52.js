!function(e){var t=function(e,t){var r=t(t(".advance_slider",e)[0]),n=t(".advance_slider_wrapper",e).attr("slider-type")||!1,s=t(t(".advance_slider_wrapper",e)[0]).data("settings")||{};s.handleElementorBreakpoints=!0,"shaders"===n&&(s.modules=[SwiperGL]),"slicer"===n&&(s.modules=[EffectSlicer]),"shutters"===n&&(s.modules=[EffectShutters]),"fashion"===n&&(s.modules=[EffectFashion]),"spring"===n&&(s.modules=[EffectSpring]),"carousel"===n&&(s.modules=[EffectCarousel]),"posters"===n&&(s.modules=[EffectPoster]),"material"===n&&(s.modules=[EffectMaterial]),new elementorFrontend.utils.swiper(r,s).then((function(e){return e}))};e(window).on("elementor/frontend/init",(function(){elementorFrontend.hooks.addAction("frontend/element_ready/wcf--advance-slider.default",t)}))}(jQuery)