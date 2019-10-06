
CREATE SCHEMA calendar;
USE calendar;

CREATE TABLE `calendar_projects` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` int(11) DEFAULT NULL,
  `schid` int(11) NOT NULL,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `name_UNIQUE` (`name`)
);

CREATE TABLE `calendar_sub_projects` (
  `file` varchar(1000) DEFAULT NULL,
  `pid` int(11) NOT NULL,
  `schid` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  UNIQUE KEY `name_UNIQUE` (`name`)
);

CREATE TABLE `calendar_users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(1000) NOT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uid_UNIQUE` (`uid`),
  UNIQUE KEY `name_UNIQUE` (`name`)
);