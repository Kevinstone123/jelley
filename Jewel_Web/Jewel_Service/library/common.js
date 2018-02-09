/**
 * 生成需要的sql的启示条数*()
 * @param {*Int M} pageNum  第几页 
 * @param {*Int M} pageSize 一页几条
 * return String
 */
module.exports.startNum = function(pageNum=1,pageSize=8)
{
    let startNum = (pageNum-1)*pageSize;
    return startNum
}
/**
 * 去除左右两边空格
 * @param {*String M} 需要去除空格的字符串
 * return String
 */
module.exports.trim = function(str)
{
    if(str === undefined || str === null || str === '')
    {
        return str
    }
    else 
    {
        str = str.toString();
        return str.replace(/(^\s*)|(\s*$)/g,""); 
    }
}

/**
 * 判断是否登陆
 * @param {*String M} token
 * return String
 */
module.exports.islogin = function(theSession)
{
    if(theSession.token === null || theSession.token === undefined || theSession.token === ""){
        
        return false

    }else{

        return true

    }
}

/**
 * 去除所有的html的标签
 * @param {*String M} 需要去除html的标签字符串
 * return String
 */
module.exports.replaceHtml = function(str)
{
    str = str.toString();
    return str.replace(/<[^>]+>/g,"");
}

/**
 * 匹配字符串中是否存在匹配字符串
 * @param {*String M} str 字符串
 * @param {*String M} substr 需要查找的字符串
 * return String
 */
module.exports.isContains = function(str, substr) {
    return str.indexOf(substr) >= 0;
}

/**
 * 匹配字符串中在匹配字符串的位置
 * @param {*String M} str 字符串
 * @param {*String M} substr 需要查找的字符串
 * return String
 */
module.exports.isCPostion = function(str, substr) {
    return str.indexOf(substr);
}

/**
 * 创建一个容量为100的奇数数组-传序号获取值
 * @param {*int M}  index 序号
 * return String
 */
module.exports.isOddNum = function(index) {
    index = index > 100 ? 100 : index
    index = index < 0 ? 1 : index
    let array = [];
    for(let i = 1; i< 200; i++){  
        if(i % 2 !== 0){  
            array.push(i);  
        }  
    }
    return array[index-1]
}

/**
 * int 转 double
 * @param {*int M} int 数值
 * return double
 */
module.exports.isDouble = function(int) {
    int = parseFloat(int).toFixed(2)
    return int;
}

/**
 * 判断设备
 * @param {*int M} int 数值
 * return double
 */
module.exports.isMobile = function(ctx,string) {
    let deviceAgent = ctx.headers['user-agent'].toLowerCase();
    let agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    let headerHost =  ctx.header.host;
    let url = ctx.originalUrl;
    if (string === 'Mobile') {
        if(agentID){
            console.log('指到手机、pad的网页');
            return ''
        }else{
            console.log('指到pc网页');
            if(this.isContains(url,'/mobile')){
                // url =  url.replace( new RegExp('/mobile'),"");
                url = '/'
                // if (url === ''){
                //     url = '/'
                // }
            }
            return url
        }
    } else if (string === 'Pc') {
        if(agentID){
            console.log('指到手机、pad的网页');
            url = '/mobile/';
            return url
        }else{
            console.log('指到pc网页');
            return ''
        }
    } else {
        return ''
    }
}

