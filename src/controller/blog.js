//只做数据处理
const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1546610491112,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1546610491113,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    return {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1546610491113,
            author: 'lisi'
        }
}

const newBlog = (blogData) =>{
    //blogData 是一个博客对象，包含title content 属性
    return {
        id: 3
    }
}

const updateBlog = (blogData) =>{
    //blogData 是一个博客对象，包含title content 属性
    return {
        blogData
    }
}

const deleteBlog = (id) =>{
    if(id) return true;
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    deleteBlog,
    updateBlog
}