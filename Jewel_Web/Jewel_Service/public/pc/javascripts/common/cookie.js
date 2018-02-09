/**
 * cookie 存取
 * @param {*} document
 * @param {*} windwo
 */
var globalCookie = function (d, w) {

    var  cookieKey  = {
        STATIC_VERSION : 'STATIC_VERSION'
    }

    var COOKIE_MAX_TIME = 1;
            
    var setCookie = function(c_name,value,expiretime) {
        var exdate=new Date();
        exdate.setTime(exdate.getTime()+(expiretime*60*1000));
        document.cookie = c_name + "=" +escape(value) + 
        ((expiretime==null) ? "" : ";expires=" + exdate.toGMTString())+";path=/";
    }

    var getCookie = function(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        }else {
            return null;
        }
    }

    return {
        setCookie : setCookie,
        getCookie: getCookie,
        cookieKey: cookieKey,
        COOKIE_MAX_TIME: COOKIE_MAX_TIME
    }

} (document, window)
