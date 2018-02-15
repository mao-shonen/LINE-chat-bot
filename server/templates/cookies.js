var default_expiredays = 1000 * 60 * 60 * 24 * 7

//设置cookie
Vue.prototype.setCookie = (c_name, value, expiredays=default_expiredays) => {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

//获取cookie
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg))
        return (arr[2])
    else
        return null
}
Vue.prototype.getCookie = getCookie

//删除cookie
Vue.prototype.delCookie =(name) => {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = getCookie(name)
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
}
