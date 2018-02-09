/**
 * 需要同时加载loading_dom组件
 * 和jquery.js / 
 * 和用到了cookie.js 中setcookie() 方法
 */
var pageLoading = function(d, w) {

    var MIN_LOADING_TIME = 2000,
        DISPLAY_TEXT_TIME = 5000,
        loadingPageStartTime;

    var setLoadingStartTime = function() {
        
        loadingPageStartTime = new Date().getTime()

        // 5秒后显示加载提示
        setTimeout(function () {
            var text = d.getElementById('j_startup_desp_text');
            if (text != null) {
                text.style.display = 'block';
            }
        }, DISPLAY_TEXT_TIME);
    }

    var stopLoading = function(an) {
        if (loadingPageStartTime == 0) {
            return;
        }
        var timeDiff = new Date().getTime() - loadingPageStartTime;
        if (timeDiff > MIN_LOADING_TIME) {
            removeLoadingPage(an);
            return;
        }
        setTimeout(function() {
            removeLoadingPage(an);
        }, (MIN_LOADING_TIME - timeDiff));
    }

    var removeLoadingPage = function(an) {
        var wrapper = d.getElementById('startup-page-wrapper');
        var pageDom = d.getElementById('startup-page');
        if (wrapper != null) {
            if (an != undefined){
                pageDom.setAttribute("class", an);
                setTimeout(function() {
                    wrapper.parentNode.removeChild(wrapper);
                }, (2000)); 
            } else {
                wrapper.parentNode.removeChild(wrapper);
            }
        }
    }

    var orientationChange = function(d, w) {
        var html = d.documentElement, eventName = "orientationchange" in window ? "orientationchange"
                : "resize";

        if (d.addEventListener) {
            w.addEventListener(eventName,setFontSize, !1);
        }
    }

    // 通过屏幕大小获取字体
    var setFontSize = function() {
        var html = d.documentElement,
        width = html.clientWidth;
        width && ( html.style.fontSize = 100 * (width / 360) + "px" );
    }

    return {
        setLoadingStartTime : setLoadingStartTime,
        stopLoading : stopLoading,
        setFontSize : setFontSize
    }
    
}(document, window);