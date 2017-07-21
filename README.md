# 产品脚手架
	
	git clone git@192.168.1.34:tueasy/tueasy-start.git tueasy-xxxx     //xxx为新项目名称
	cd tueasy-xxxx
	git remote remove origin 
	git remote add origin 新项目git地址
	 
# Blog

    暂无

### 前言

后端：koa2 + co + mysql + ...  
前端：react + redux + react-router + es6 + ...


### 准备

安装 nodejs(>=5)

### 运行
    
    git clone git@192.168.1.34:tueasy/xxxx.git
    cd xxxx && npm install  // 安装依赖
    npm run build-libs // 打包依赖文件
    npm run pro-server // 生产模式运行
    npm run dev-server // 开发模式运行
   
    
### 说明

1.访问地址

    http://localhost:3301  // 前台地址
    
      
2.几个config文件
    /config/index.js    //项目引用配置文件
    /config/development.js //开发模式的配置
    /config/production.js  //生产模式的配置

    .babelrc   //babel 配置文件
    .eslintrc.json //代码格式文件
    .eslintignore  //格式化忽略文件
    .gitignore //git 忽略文件

3. git 使用规范
    1、开发人员在服务器上建立自己的分支，禁止将代码直接推送Dev  master分支
    2、确定代码没问题后，在服务器上请求合并到Dev分支，由管理员确定后合并

    以下为hhq用户开发用例：
        1、生成ssh添加到服务器

            创建私钥
                cd ~/.ssh
                ssh-keygen -t rsa -C "youremail@yourcompany.com"
                enter file  输入 id_rsa_gitlab

            添加私钥
                ssh-add ~/.ssh/id_rsa_gitlab

            查看公钥
                cat ~/.ssh/id_rsa_gitlab.pub
            
            将公钥添加到服务器
                浏览器打开192.168.1.34,输入帐号密码
                点击右上角用户头像，选择Settings
                选择菜单栏 SSH Keys 然后在key栏目填入生成的公钥字符串
        
        2、创建分支，下载代码
            登陆服务器，点击 bdp 项目,点击项目下方的 ＋ 号，选择  new branch ， 在 branch name 输入自己名字的首字母小写。
            在本机下载代码
                进入工作目录 (如 E:/work )
                cd E:/work
                git clone git@192.168.1.34:tueasy/zhihui110.git
            建立本地分支 (本地分支名称为 local, 远程分支名称为hhq)
                cd E:/work/bdp
                git checkout -b local origin/hhq
                
            设置不忽略文件大小写
                cd E:/work/bdp/.git
                vi config
                设置 ignorecase = false

            
            提交代码
                git status   //查看代码状态
                git add -A  //保存本地的变更状态(增、删、改)
                git commit -m '修改的日志文件'    //将变更提交到本地分支
                git push  origin local:hhq   //将本地local 分支的代码提交到远程hhq分支上

                提交的代码已经是一个完整可运行的功能后， 可以到服务器上请求合并代码

            拉取代码，并合并
                git pull  origin Dev  // 拉去Dev上的代码合并到本地

    

### 更新日志

**0.0.1（2017-05-17）**  
    整体框架搭建
