/*
 Navicat Premium Data Transfer

 Source Server         : admin
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : my_db_01

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 11/05/2022 21:45:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for drugcount
-- ----------------------------
DROP TABLE IF EXISTS `drugcount`;
CREATE TABLE `drugcount`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `inDate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `count` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `name`(`name`) USING BTREE,
  CONSTRAINT `drugcount_ibfk_1` FOREIGN KEY (`name`) REFERENCES `druginfo` (`name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of drugcount
-- ----------------------------
INSERT INTO `drugcount` VALUES (7, '阿莫西林', '2022-04-06 09:48:44', 100);
INSERT INTO `drugcount` VALUES (8, '塞来昔布', '2022-04-06 09:48:53', 500);
INSERT INTO `drugcount` VALUES (9, '999感冒灵颗粒', '2022-04-06 09:49:13', 40);
INSERT INTO `drugcount` VALUES (10, '洛索洛芬钠片', '2022-04-06 09:49:28', 500);
INSERT INTO `drugcount` VALUES (11, '健胃消食片', '2022-04-06 09:49:42', 100);
INSERT INTO `drugcount` VALUES (12, '牛黄解毒片', '2022-04-06 09:49:51', 100);
INSERT INTO `drugcount` VALUES (13, '头孢拉定', '2022-04-06 09:49:59', 300);
INSERT INTO `drugcount` VALUES (14, '诺氟沙星', '2022-04-06 09:50:13', 400);
INSERT INTO `drugcount` VALUES (15, '诺氟沙星', '2022-04-06 09:50:17', 100);
INSERT INTO `drugcount` VALUES (16, '塞来昔布', '2022-04-06 12:17:17', 50);
INSERT INTO `drugcount` VALUES (17, '吗丁啉', '2022-04-06 12:17:53', 100);
INSERT INTO `drugcount` VALUES (18, '感冒片', '2022-04-06 12:18:25', 400);
INSERT INTO `drugcount` VALUES (19, '阿莫西林', '2022-04-06 18:08:52', 500);
INSERT INTO `drugcount` VALUES (20, '我的文档', '2022-04-06 18:09:08', 100);
INSERT INTO `drugcount` VALUES (21, '板蓝根', '2022-04-07 08:42:59', 100);
INSERT INTO `drugcount` VALUES (22, '板蓝根', '2022-04-07 08:43:36', 100);
INSERT INTO `drugcount` VALUES (23, '板蓝根', '2022-04-07 08:43:48', 100);
INSERT INTO `drugcount` VALUES (24, '999', '2022-04-07 08:46:07', 100);

-- ----------------------------
-- Triggers structure for table drugcount
-- ----------------------------
DROP TRIGGER IF EXISTS `add_info`;
delimiter ;;
CREATE TRIGGER `add_info` AFTER INSERT ON `drugcount` FOR EACH ROW begin
insert into inputinfo(`name`,`count`,`date`) VALUES(new.name,new.count,NOW());#生成入库记录
end
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
