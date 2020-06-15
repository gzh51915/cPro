## Git Commit 注释规范
* type 用于指定提交的 commit 的类别，下面只允许以下几个动词原语。
    * add - 新增加的功能等描述。
    * fix - 修复某个 bug 的描述。
    * update - 在原有的基础上更新代码的描述。
    * change - 类似 update，唯一区别是 change 是重写了代码（带有颠覆性）。
    * docs - 更新/新增文档时的描述。
    * test - 增加/修改测试示例代码。
    * release - 发布新的版本时使用。
    * merge - 在解决代码冲突，合并分支时使用。
    * chore - 构建过程或辅助工具的变动。
    * create - 初次创建项目时使用。
    * remove - 移除文件、代码时使用。
* 正确的示例：
    * fix: 修复登录邮箱格式验证错误的问题。
    * update: 优化 Button 组件样式。
    * test: 添加搜索模块的单元测完。
    * release: 发布 v0.1.12 版本。
    * remove: 移除多余的 console.log 代码。