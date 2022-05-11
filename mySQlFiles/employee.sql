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

 Date: 11/05/2022 21:46:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `telnumber` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `salary` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES (1, '侯嘉伟', '17607796173', 99999);
INSERT INTO `employee` VALUES (11, '张三', '14566332242', 10000);
INSERT INTO `employee` VALUES (12, '李四', '13152013614', 12000);
INSERT INTO `employee` VALUES (13, '王五', '15988556641', 6000);
INSERT INTO `employee` VALUES (14, '赵六', '18577999496', 5000);
INSERT INTO `employee` VALUES (15, '吴八', '16988554467', 3000);
INSERT INTO `employee` VALUES (16, '李九', '12355669977', 5500);
INSERT INTO `employee` VALUES (17, '钱十', '14522001122', 4000);
INSERT INTO `employee` VALUES (18, '温十三', '15934857799', 1200);
INSERT INTO `employee` VALUES (21, '张家豪', '13545674567', 1500);

SET FOREIGN_KEY_CHECKS = 1;
