/*--------------------------------------------------------------------
 *JAVASCRIPT "fakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT
 *
 *pageLoader Edit by EBo (https://github.com/E-Bo) 2015-12-29
-----------------------------------------------------------------------*/
(function ($) {
    var PageLoader = function(element,options) {

        //Defaults
        this.settings = $.extend({
            timeToHide: null, // Default Time to hide pageLoader
            minTimeToHide: 1200,
            pos:'fixed',// Default Position
            top:'0px',  // Default Top value
            left:'0px', // Default Left value
            width:'100%', // Default width
            height:'100%', // Default Height
            zIndex: '999',  // Default zIndex
            bgColor: '#1d1d1d', // Default background color
            spinner:'spinner2', // Default Spinner
            imagePath:'' // Default Path custom image
        }, options);

        this.spinner = null;
        this.showTime = null;
        this.hideTime = null;

        //Customized Spinners
        this.spinners = {
            spinner1:'<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
            spinner2:'<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',
            spinner3:'<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>',
            spinner4:'<div class="fl spinner4"></div>',
            spinner5:'<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>',
            spinner6:'<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
            spinner7:'<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>',
            img:'<div class="fl"><img src="'+ this.settings.imagePath +'"></div>'

        }

        //The target
        this.el = $(element);

        //Init styles
        this.initStyles = {
            'position':this.settings.pos,
            'width':this.settings.width,
            'height':this.settings.height,
            'top':this.settings.top,
            'left':this.settings.left,
            'backgroundColor':this.settings.bgColor,
            'zIndex':this.settings.zIndex
        };

        //Apply styles
        this.el.css(this.initStyles);
        this.showPageLoader();

        //Time to hide pageLoader
        if(typeof(this.settings.timeToHide) == 'number'){
            setTimeout($.proxy(function(){
                this.hidePageLoader();
            },this), this.settings.timeToHide);
        };

        return this;
    };

    $.extend(PageLoader.prototype,{
        hidePageLoader: function(){
            this.hideTime = new Date().getTime();
            var _timeOut = this.settings.minTimeToHide - this.hideTime + this.showTime;
            if(_timeOut < 0){
                _timeOut = 0;
            }
            setTimeout($.proxy(function(){
                this.el.fadeOut();
            },this), _timeOut);
        },
        showPageLoader: function(){
            if(!this.spinner){
                if (this.settings.imagePath =='' && this.spinners[this.settings.spinner]){
                    this.spinner = this.spinners[this.settings.spinner];
                }else{
                    this.spinner = this.spinners['img'];
                }
                this.el.html(this.spinner);
            }else{
                this.el.fadeIn();
            }
            this.showTime = new Date().getTime();
        }
    });

    $.fn.pageloader = function(options){
        options = options || {};
        this.each(function(){
            var _el = $(this);
            if (!_el.data('pageloader')){
                _el.data('pageloader', new PageLoader(_el, options));
            }
        })
    }

}(jQuery));
