## WeChat-Menu-Server

### 项目结构

```
|----- WeChat-Menu-Server 
  |----- controller   // 控制层 业务逻辑
  |----- server_modules
     |----- server  // 服务端公共模块  通过 app.js主文件调用启动服务
     |----- connect  // 服务端数据库公共模块 提供增删改查支持
  |----- router  // 路由页面配置  
  |----- app.js  // 主文件
  |----- package.json  
  |----- config.js  // 项目全局对象参数
  |----- asserts // 静态资源
     |----- css
     |----- js
     |----- images
       | ----- favicon.ico
  |----- test.js  // 模块测试文件 无特殊用途、仅用于模块示例测试
```

### modules

```
1. server ( HanChn already claim √ )
2. router ( HanChn already claim √ )
3. dbConnect ( HanChn already claim √ )
```

### 项目启动

```
yarn start 

or 

npm run start
```

### 模块测试用例

```
yarn test 

or 

npm run test
```



