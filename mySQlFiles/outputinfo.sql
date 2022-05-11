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

 Date: 11/05/2022 21:46:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for outputinfo
-- ----------------------------
DROP TABLE IF EXISTS `outputinfo`;
CREATE TABLE `outputinfo`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` datetime NOT NULL,
  `count` int NOT NULL,
  `place` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of outputinfo
-- ----------------------------
INSERT INTO `outputinfo` VALUES (1, '风油精', '2022-04-02 15:48:27', 45, '人民医院');
INSERT INTO `outputinfo` VALUES (2, '风油精', '2022-04-02 16:15:16', 45, '人民医院');
INSERT INTO `outputinfo` VALUES (3, '阿莫西林', '2022-04-01 16:16:48', 20, '人民医院');
INSERT INTO `outputinfo` VALUES (4, '阿莫西林', '2022-04-01 16:18:14', 30, '人民医院');
INSERT INTO `outputinfo` VALUES (5, '阿莫西林', '2022-04-01 16:18:31', 30, '人民医院');
INSERT INTO `outputinfo` VALUES (6, '阿莫西林', '2022-04-01 16:20:02', 30, '人民医院');
INSERT INTO `outputinfo` VALUES (7, '阿莫西林', '2022-04-01 16:21:56', 30, '人民医院');
INSERT INTO `outputinfo` VALUES (8, '阿莫西林', '2022-04-01 16:23:19', 1, '人民医院');
INSERT INTO `outputinfo` VALUES (9, '阿莫西林', '2022-04-01 16:23:57', 1, '人民医院');
INSERT INTO `outputinfo` VALUES (10, '阿莫西林', '2022-04-01 16:27:03', 10, '中山大医院');
INSERT INTO `outputinfo` VALUES (11, '莫科比片', '2022-04-04 22:40:16', 200, '人民大会堂');
INSERT INTO `outputinfo` VALUES (12, '999感冒灵颗粒', '2022-04-06 11:04:24', 200, '无');
INSERT INTO `outputinfo` VALUES (13, '999感冒灵颗粒', '2022-04-06 12:19:18', 100, '中山三院');
INSERT INTO `outputinfo` VALUES (14, '999感冒灵颗粒', '2022-04-06 18:09:55', 30, '人民医院');
INSERT INTO `outputinfo` VALUES (15, '999感冒灵颗粒', '2022-04-07 08:44:59', 30, '华南农业大学');

SET FOREIGN_KEY_CHECKS = 1;
