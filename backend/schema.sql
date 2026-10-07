-- ============================================================
-- 枪战每一天 (Don't Stop) —— 数据库建表脚本
-- 根据后端 PHP 代码中实际使用的字段反推整理
-- MySQL / MariaDB
-- ============================================================

CREATE DATABASE IF NOT EXISTS `che`
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE `che`;

-- ------------------------------------------------------------
-- 账号表
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `user` (
  `ID`   INT          NOT NULL AUTO_INCREMENT COMMENT '玩家ID，注册后由数据库分配',
  `NAME` VARCHAR(50)  NOT NULL                COMMENT '昵称',
  `PSW`  VARCHAR(50)  NOT NULL                COMMENT '密码（注册时由 enroll.php 随机生成 8 位数字）',
  `ICON` INT          NOT NULL DEFAULT 3      COMMENT '头像编号',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `uk_name` (`NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='玩家账号';

-- ------------------------------------------------------------
-- 游戏数据表
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `userdate` (
  `ID`           INT NOT NULL COMMENT '玩家ID，对应 user.ID',
  `JINBI`        INT NOT NULL DEFAULT 10  COMMENT '金币',
  `JY`           INT NOT NULL DEFAULT 0   COMMENT '经验值',
  `LEVEL`        INT NOT NULL DEFAULT 1   COMMENT '等级（升级公式：经验 >= 等级² × 20）',
  `HIGHEST KILL` INT NOT NULL DEFAULT 0   COMMENT '最高击杀数',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='玩家游戏数据';

-- ------------------------------------------------------------
-- 示例数据（可选）
-- ------------------------------------------------------------
INSERT INTO `user` (`NAME`, `PSW`, `ICON`) VALUES ('test01', '00000000', 3)
  ON DUPLICATE KEY UPDATE `NAME` = `NAME`;

INSERT INTO `userdate` (`ID`, `JINBI`, `JY`, `LEVEL`, `HIGHEST KILL`)
SELECT `ID`, 100, 0, 1, 0 FROM `user` WHERE `NAME` = 'test01'
  ON DUPLICATE KEY UPDATE `ID` = `ID`;
