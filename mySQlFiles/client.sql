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

 Date: 11/05/2022 21:45:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for client
-- ----------------------------
DROP TABLE IF EXISTS `client`;
CREATE TABLE `client`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `telnumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of client
-- ----------------------------
INSERT INTO `client` VALUES (1, '赵一', 'vip', '13222335544', '北京路84号');
INSERT INTO `client` VALUES (2, '王三', 'vip', '13222335544', '上海路4号');
INSERT INTO `client` VALUES (3, '李八', 'vip', '15688994477', '广东路1号');
INSERT INTO `client` VALUES (4, '张三', 'com', '15679945453', '文明路11号');
INSERT INTO `client` VALUES (5, '史蒂夫', 'vip', '14899556666', '哈瑞路22号');
INSERT INTO `client` VALUES (6, '吴德发', 'com', '14266337789', '张德路4号');
INSERT INTO `client` VALUES (7, '温小小', 'com', '14255678866', '望江路8号');
INSERT INTO `client` VALUES (8, '陈飞龙', 'vip', '11422555333', '江汉城10号');
INSERT INTO `client` VALUES (9, '黄飞鸿', 'vip', '14255336664', '物雯路3号');
INSERT INTO `client` VALUES (10, '程蝶衣', 'com', '11355443333', '拐子路11号');

SET FOREIGN_KEY_CHECKS = 1;
