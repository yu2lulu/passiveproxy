function sensive_check(strs){ 
// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
    var reg = /(\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x))/; 
    if(reg.test(strs) === true) { 
        return true
        // return false; 
    } 
    var reg=/1(3|4|5|6|7|8|9)\d{9}$/;
    if(reg.test(strs) === true){ 
        return true
        // return false; 
    } 

    return false;

}

module.exports={sensive_check};