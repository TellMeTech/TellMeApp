# TellMeApp
        1.本项目采用 cordova+angularJS+ionic 技术框架，在visual studio 2015 下进行开发
        2.模块
        3. 命名规范
            3.1 目录，文件名都采用小写
            3.2 html、js 文件命名方式参考已有的方式
            3.3 模块名命名采用首字母小写第二个以后的单词首字母大写
            3.4 方法变量首字母小写
            3.5 方法内部私有变量采用下划线作为前缀
            3.6 service从后台或者本地获取数据的方法都以load打头
            3.7 保存都已 save打头
            3.9 删除都以 delete打头
            3.10 获取（保存）列表用list后缀，获取单个不加后缀
            3.8 除非业界通用认可，或者本系统预定的以为，单词都不采用缩写
        4.目录划分
            4.1 app以下目录最多两层
            4.2 原则上一个独立的功能一个目录，html，ctrl.js ，service.js 都放在一个目录
        5.css规范
            5.1.不要ionic的css发生冲突
            5.2.本项目自定义css都放在一个文件中，命名为 tellme.css. 不允许自定义过个css文件
