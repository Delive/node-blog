const queryString = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

//处理postData
const getPostdata = (req) => {
    const promise = new Promise((resolve,reject) => {
        if(req.method !== 'POST' || req.headers['content-type'] !== 'application/json'){
            resolve({})
            return;
        }
        let postData = '';
        req.on('data',chunk => {
            postData += chunk.toString()
        })
        
        req.on('end',_=>{
            if(!postData){
                resolve({})
                return;
            }
            resolve(
                JSON.parse(postData)
            )
            console.log(postData)
        })
    })

    return promise;
}

const serverHandle = (req,res) => {
    res.setHeader('Content-type','applition/json');
    req.path = req.url.split('?')[0];
    req.query = queryString.parse(req.url.split('?')[1]);
    getPostdata(req).then(postData=>{
        req.body = postData;
        const blogData = handleBlogRouter(req,res);
        const userData = handleUserRouter(req,res);
        
        if(blogData){
            res.end(JSON.stringify(blogData));
            return;
        }else if(userData){
            res.end(JSON.stringify(userData));
            return;
        }else{
            res.end('{message:404}')
        }
    })
}

module.exports = serverHandle;