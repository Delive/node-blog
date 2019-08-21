//只做路由处理
const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel.js')
const handleBlogRouter =(req,res)=>{
    const method = req.method;
    const path = req.path;

    if(method === 'GET' && path == '/api/blog/list'){
        const author = req.query.author;
        const keyword = req.query.keyword;
        const listData = getList(author, keyword);
        return new SuccessModel(listData)
    }
    else if(method === "GET" && path === '/api/blog/detail'){
        const detailData = getDetail(req.query.id);
        return new SuccessModel(detailData)
    }
    else if(method === 'POST' && path === '/api/blog/add'){
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }
    else if(method === "POST" && path === '/api/blog/update'){
        const result = updateBlog(req.body)
        if(result){
            return new SuccessModel('更新博客成功');
        }else{
            return new ErrorModel('更新博客失败');
        }
    }else if (method === "GET" && path === '/api/blog/delete'){
        const result = deleteBlog(req.query.id)
        if(result){
            return new SuccessModel('删除博客成功');
        }else{
            return new ErrorModel('删除博客失败');
        }
    }
}

module.exports = handleBlogRouter;