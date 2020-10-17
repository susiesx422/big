$(function(){

    // 点击去注册链接显示注册页面，同时隐藏登录页面
    $('#link_reg').on('click', function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })

    // 点击去登录链接显示登录页面，同时隐藏注册页面
    $('#link_login').on('click', function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })
})