const { SuccessModel, ErrorModel } = require('../model/resModel')
const { loginCheck } = require('../controller/user')
const handleUserRouter =(req,res)=>{
    const method = req.method;
    const path = req.path;

    if(method === 'POST' && path === '/api/blog/login'){
        const { userName, password } = req.body;
        const result = loginCheck(userName, password);
        if(result){
            return new SuccessModel('登陆成功')
        }else{
            return new ErrorModel('登陆失败')
        }
    }
}

module.exports = handleUserRouter;