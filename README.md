# hello-world

### 新建项目之后做了如下改动
    1. package.json:
        "private": false,// 改为false, 
        "main": "plugin/index.js", // 即暴露组件的js路径
    2. vue.config.js:
        "entry" :""  // 打包时写暴露组件的js路径
    3. plugin/index.js：    
       在网上看到好多使用window.Vue 做判断，不知道这个是在哪绑到window上的，我改成Vue了

### 在本地测试
    1.先打包 dist ; // npm run build      
    2.npm pack ; // 从包中创建一个 tarball
    3.cnpm install ... // 路径即上一步打出包的路径 ，比如： cnpm install /f/projectSummary/ALLDEMO/hello-world/hello-world-0.1.0.tgz

### 发布包到npm
    1. npm adduser //注册账号
    2. 如果是新注册的账号，一定要登录到 npm验证一下邮箱（搞了我几天的地方），要不直接发布会一直报  publish Failed PUT 403 Forbidden : XXXX(发布的包名)
    3. 本地测试通过了 运行 npm publish 发布    


