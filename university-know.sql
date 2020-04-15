/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50645
Source Host           : localhost:3306
Source Database       : university-know

Target Server Type    : MYSQL
Target Server Version : 50645
File Encoding         : 65001

Date: 2020-04-08 00:28:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `collection`
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection` (
  `collect_id` int(11) NOT NULL AUTO_INCREMENT,
  `tid` int(11) NOT NULL,
  `Title` varchar(255) NOT NULL,
  `Collector` varchar(255) NOT NULL,
  PRIMARY KEY (`collect_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collection
-- ----------------------------
INSERT INTO `collection` VALUES ('4', '7', '测试发帖时间', '用户1');
INSERT INTO `collection` VALUES ('5', '12', '打算到哪上到哪你叫啊是短款女', '用户4');
INSERT INTO `collection` VALUES ('8', '11', '测试按钮是否固定在右下角', '用户4');
INSERT INTO `collection` VALUES ('10', '13', '我爱cmx', '用户4');
INSERT INTO `collection` VALUES ('12', '14', '第二次发帖', '用户4');
INSERT INTO `collection` VALUES ('14', '14', '中山大学新华学院的住宿条件怎么样？', 'R_x');

-- ----------------------------
-- Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `tid` int(11) NOT NULL,
  `Comment` varchar(255) NOT NULL,
  `Reviewer` varchar(255) NOT NULL,
  `addcomment_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '5', '测试回复', 'qqq', '2020-02-03 01:55:07');
INSERT INTO `comment` VALUES ('2', '6', '111', '用户1', '2020-02-04 20:16:14');
INSERT INTO `comment` VALUES ('3', '7', '发帖回复', '用户1', '2020-02-04 20:22:25');
INSERT INTO `comment` VALUES ('4', '7', '倒序回复', '用户1', '2020-02-04 20:48:03');
INSERT INTO `comment` VALUES ('5', '7', '111', 'qqq', '2020-03-03 21:49:24');
INSERT INTO `comment` VALUES ('6', '10', '按钮固定', 'qqq', '2020-03-04 21:59:29');
INSERT INTO `comment` VALUES ('7', '6', '111', '用户4', '2020-03-06 22:45:08');
INSERT INTO `comment` VALUES ('9', '6', '333', '用户4', '2020-03-06 22:45:16');
INSERT INTO `comment` VALUES ('10', '6', '4444', '用户4', '2020-03-06 22:49:06');
INSERT INTO `comment` VALUES ('27', '6', '5555', '用户4', '2020-03-07 14:50:22');
INSERT INTO `comment` VALUES ('28', '14', '住宿条件很不错，宿舍是四人间，上床下桌', 'R_x', '2020-03-17 23:03:23');
INSERT INTO `comment` VALUES ('29', '15', '啊萨达萨达', '用户1', '2020-04-07 22:27:03');

-- ----------------------------
-- Table structure for `topic`
-- ----------------------------
DROP TABLE IF EXISTS `topic`;
CREATE TABLE `topic` (
  `tid` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(255) NOT NULL,
  `Artical` varchar(255) NOT NULL,
  `Publisher` varchar(255) NOT NULL,
  `createtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of topic
-- ----------------------------
INSERT INTO `topic` VALUES ('1', '1111', '222', '6666', '2020-02-04 19:16:48');
INSERT INTO `topic` VALUES ('2', '测试发帖11', '666', 'qqq', '2020-03-03 22:10:03');
INSERT INTO `topic` VALUES ('3', '测试发帖2222', '112313asd', 'qqq', '2020-03-03 22:10:08');
INSERT INTO `topic` VALUES ('4', '测试测试', '222', 'qqq', '2020-02-04 19:16:48');
INSERT INTO `topic` VALUES ('5', '测试评论', '111111', '用户2', '2020-03-05 21:27:51');
INSERT INTO `topic` VALUES ('6', '测试发帖按钮 ', '萨达', 'qqq', '2020-02-04 19:16:48');
INSERT INTO `topic` VALUES ('7', '测试发帖', '发帖成功', '用户1', '2020-03-05 21:26:56');
INSERT INTO `topic` VALUES ('8', '测试发帖时间', '111', '用户3', '2020-03-05 22:07:19');
INSERT INTO `topic` VALUES ('9', '中山大学新华学院的师资力量如何？', '1111', '用户2', '2020-03-17 22:56:12');
INSERT INTO `topic` VALUES ('10', '中山大学新华学院的男女比例是多少？', '回复成功', '用户1', '2020-03-17 22:55:41');
INSERT INTO `topic` VALUES ('11', '中山大学新华学院转专业难吗？', '111', '用户1', '2020-03-17 22:55:06');
INSERT INTO `topic` VALUES ('14', '中山大学新华学院的住宿条件怎么样？', '请问中大新华的住宿条件如何，宿舍是几人间？', '用户4', '2020-03-17 23:00:55');
INSERT INTO `topic` VALUES ('15', '11111', '111', '用户1', '2020-04-07 22:26:16');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `userPwd` varchar(255) NOT NULL,
  `sex` int(11) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '111', '111', '1');
INSERT INTO `user` VALUES ('2', '用户4', '111', '0');
INSERT INTO `user` VALUES ('3', '用户1', '111', '0');
