drop database if exists biology;
create database biology charset=utf8;
use biology;
create table t_user(
uid int primary key auto_increment,
uname varchar(20),
upwd varchar(20),
uemail varchar(30),
utime BIGINT
);

insert into t_user values(null,'nhc','201108','2471814041@qq.com',1495537195195);
insert into t_user values(null,'nhc','201108','2471814041@qq.com',1495537195195);
insert into t_user values(null,'nhc','201108','2471814041@qq.com',1495537195195);
insert into t_user values(null,'nhc','201108','2471814041@qq.com',1495537195195);

CREATE TABLE msg(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(64),
  content VARCHAR(1024),
  pubTime BIGINT
);
INSERT INTO msg VALUES
(NULL, 'NHC', '蛋白质检测最好的方法是什么',1495537195195),
(NULL, 'NHC', '蛋白质检测最好的方法是什么',1495537195195),
(NULL, 'NHC', '蛋白质检测最好的方法是什么',1495537195195),
(NULL, 'NHC', '蛋白质检测最好的方法是什么',1495537195195);
