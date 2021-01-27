# YaSQL简介
YaSQL是MySQL/TiDB的数据库审核执行平台，旨在降低DBA的运维成本，规范线上SQL执行流程。

## 开发组件
* ![](https://img.shields.io/static/v1?label=Python&message=3.7&color=green&?style=for-the-badge)
* ![](https://img.shields.io/static/v1?label=Vue&message=Ant_Design_Vue&color=green&?style=for-the-badge)
* ![](https://img.shields.io/static/v1?label=Django&message=Djangorestframework&color=green&?style=for-the-badge)
* ![](https://img.shields.io/static/v1?label=Jwt&message=Djangorestframework_jwt&color=green&?style=for-the-badge)
* ![](https://img.shields.io/static/v1?label=Celery&message=4&color=green&?style=for-the-badge) 

## 功能简介
* 自定义工单环境
  * 可根据业务场景，自定义工单的环境，比如：测试环境、预发布环境、生产环境等等
* 支持的工单类型
  * DML工单
  * DDL工单
  * 导出工单（支持SELECT语句导出为CSV、XLSX格式）
* 支持的DB类型
  * MySQL（>=5.6， Percona Server & 官方MySQL）
  * TiDB
  * Mariadb（暂不支持Mariadb生成备份）
  * ClickHouse
* 语法规则
  * 集成goInception，语法规则请参考：https://github.com/hanchuanchuan/goInception
  * 支持语法高亮、格式化、注释、补全
* 支持MySQL/TIDB/ClickHouse/Redis查询（DMS查询功能）
  * 支持库表级别授权
  * 支持基于用户/组授权
  * 支持查询审计功能（自动记录用户执行的SQL）
* 消息推送功能
  * 邮件
  * 钉钉
  * 企业微信
* 其他功能
  * 支持钩子功能，工单可以在各个环境内自由hook
  * MySQL DDL ALTER语句自动使用gh-ost改表
  * DML语句执行、支持获取锁定超时、事务封装、自动开启严格模式执行
  * 单个工单最大支持2048条SQL语句
  * MySQL DML语句支持自动生成回滚SQL（真实影响行数小于10W行）
  * 支持执行前台实时展示（基于websocket实现）
  * 支持自定义用户角色、可为每个角色绑定不同的工单权限
  * 支持集成LDAP（若支持LDAP密码修改，请自行实现相关接口）
  * 支持后台创建用户、密码修改（非LDAP模式）、修改头像
 
## 使用文档
- [YaSQL预览](Home)
- YaSQL部署
  - [介绍](介绍)
  - [初始化环境](初始化环境)
  - [克隆项目](克隆项目)
  - [部署前端服务](部署前端服务)
  - [部署后端服务](部署后端服务)
  - [集成goInception](集成goInception)
  - [集成gh-ost](集成gh-ost)
- YaSQL用户管理
  - [集成LDAP](集成LDAP)
  - [用户管理](用户管理)
- YaSQL工单配置和使用
  - [配置工单环境](配置工单环境)
  - [配置审核数据库](配置审核数据库)
  - [工单钩子](工单钩子)
  - [工单流程](工单流程)
- YaSQL查询配置和使用
  - [查询配置](查询配置)
  - [配置权限](配置权限)
  - [配置返回行数](配置返回行数)
  - [配置查询超时](配置查询超时)
- [升级](升级)
 
## WIKI安装部署地址(内有项目截图)
> 点击下面wiki链接（建议翻墙或者查看项目的example_pic目录，截图都在该目录）
https://github.com/lazzyfu/YaSQL/wiki


## QQ讨论群
<img src="https://github.com/lazzyfu/YaSQL/blob/master/example_pic/qq.png" alt="" align=center />
