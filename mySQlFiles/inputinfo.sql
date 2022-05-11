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

 Date: 11/05/2022 21:46:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for inputinfo
-- ----------------------------
DROP TABLE IF EXISTS `inputinfo`;
CREATE TABLE `inputinfo`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` datetime NOT NULL,
  `count` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of inputinfo
-- ----------------------------
INSERT INTO `inputinfo` VALUES (1, '风油精', '2022-04-01 15:36:58', 999);
INSERT INTO `inputinfo` VALUES (2, '风油精', '2022-04-01 15:38:52', 30);
INSERT INTO `inputinfo` VALUES (3, '风油精', '2022-04-01 15:39:34', 30);
INSERT INTO `inputinfo` VALUES (4, '风油精', '2022-04-01 15:39:42', 30);
INSERT INTO `inputinfo` VALUES (5, '阿莫西林', '2022-04-01 15:42:16', 30);
INSERT INTO `inputinfo` VALUES (6, '阿莫西林', '2022-04-01 15:42:20', 30);
INSERT INTO `inputinfo` VALUES (7, '阿莫西林', '2022-04-01 15:44:01', 30);
INSERT INTO `inputinfo` VALUES (8, '吗丁啉', '2022-04-01 15:44:19', 100);
INSERT INTO `inputinfo` VALUES (9, '塞来昔布', '2022-04-01 15:45:21', 123);
INSERT INTO `inputinfo` VALUES (10, '阿莫西林', '2022-04-01 16:10:59', 20);
INSERT INTO `inputinfo` VALUES (11, '阿莫西林', '2022-04-02 17:13:18', 60);
INSERT INTO `inputinfo` VALUES (12, '阿莫西林', '2022-04-04 17:50:36', 10);
INSERT INTO `inputinfo` VALUES (13, '阿莫西林', '2022-04-04 17:50:42', 10);
INSERT INTO `inputinfo` VALUES (14, '阿莫西林', '2022-04-04 17:50:48', 10);
INSERT INTO `inputinfo` VALUES (15, '阿莫西林', '2022-04-04 17:50:53', 10);
INSERT INTO `inputinfo` VALUES (16, '阿莫西林', '2022-04-04 17:51:02', 10);
INSERT INTO `inputinfo` VALUES (17, '阿莫西林', '2022-04-04 17:51:07', 51);
INSERT INTO `inputinfo` VALUES (18, '阿莫西林', '2022-04-04 17:51:13', 15);
INSERT INTO `inputinfo` VALUES (19, '阿莫西林', '2022-04-04 17:51:17', 55);
INSERT INTO `inputinfo` VALUES (20, '阿莫西林', '2022-04-04 17:51:21', 10);
INSERT INTO `inputinfo` VALUES (21, '阿莫西林', '2022-04-04 17:51:26', 52);
INSERT INTO `inputinfo` VALUES (22, '莫可比片', '2022-04-04 22:41:44', 200);
INSERT INTO `inputinfo` VALUES (23, '阿莫西林', '2022-04-05 15:04:30', 500);
INSERT INTO `inputinfo` VALUES (24, '吗丁啉', '2022-04-05 15:05:09', 500);
INSERT INTO `inputinfo` VALUES (25, '阿莫西林', '2022-04-06 09:48:44', 100);
INSERT INTO `inputinfo` VALUES (26, '塞来昔布', '2022-04-06 09:48:53', 500);
INSERT INTO `inputinfo` VALUES (27, '999感冒灵颗粒', '2022-04-06 09:49:13', 400);
INSERT INTO `inputinfo` VALUES (28, '洛索洛芬钠片', '2022-04-06 09:49:28', 500);
INSERT INTO `inputinfo` VALUES (29, '健胃消食片', '2022-04-06 09:49:42', 100);
INSERT INTO `inputinfo` VALUES (30, '牛黄解毒片', '2022-04-06 09:49:51', 100);
INSERT INTO `inputinfo` VALUES (31, '头孢拉定', '2022-04-06 09:49:59', 300);
INSERT INTO `inputinfo` VALUES (32, '诺氟沙星', '2022-04-06 09:50:13', 400);
INSERT INTO `inputinfo` VALUES (33, '诺氟沙星', '2022-04-06 09:50:17', 100);
INSERT INTO `inputinfo` VALUES (34, '塞来昔布', '2022-04-06 12:17:17', 50);
INSERT INTO `inputinfo` VALUES (35, '吗丁啉', '2022-04-06 12:17:53', 100);
INSERT INTO `inputinfo` VALUES (36, '感冒片', '2022-04-06 12:18:25', 400);
INSERT INTO `inputinfo` VALUES (37, '阿莫西林', '2022-04-06 18:08:52', 500);
INSERT INTO `inputinfo` VALUES (38, '我的文档', '2022-04-06 18:09:08', 100);
INSERT INTO `inputinfo` VALUES (39, '板蓝根', '2022-04-07 08:42:59', 100);
INSERT INTO `inputinfo` VALUES (40, '板蓝根', '2022-04-07 08:43:36', 100);
INSERT INTO `inputinfo` VALUES (41, '板蓝根', '2022-04-07 08:43:48', 100);
INSERT INTO `inputinfo` VALUES (42, '999', '2022-04-07 08:46:07', 100);

SET FOREIGN_KEY_CHECKS = 1;
