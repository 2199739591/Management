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

 Date: 11/05/2022 21:46:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for druginfo
-- ----------------------------
DROP TABLE IF EXISTS `druginfo`;
CREATE TABLE `druginfo`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `functions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `adreaction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `taboo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `prescription` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `specification` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of druginfo
-- ----------------------------
INSERT INTO `druginfo` VALUES (7, '阿莫西林', '本品为治疗中耳炎的第一线用药，也可用于治疗链球菌性咽炎、肺炎、蜂窝性组织炎、泌尿道感染等症状。与克拉维酸合并用药，可有效减弱病菌的抗药性', '恶心和红疹，另也可能增加罹患念珠菌症的风险等', '与克拉维酸合并用药（即阿莫西林克拉维酸钾），则有腹泻的副作用', '是', '成人一次0.5g，每6～8小时1次。');
INSERT INTO `druginfo` VALUES (8, '吗丁啉', '由胃排空延缓、胃食道反流、食道炎引起的消化不良症。-上腹部胀闷感、腹胀、上腹疼痛；-暧气、肠胃胀气；-恶心、呕吐；-口中带有或不带有反流胃内容物的胃烧灼感', '偶见头痛、头晕、嗜睡、倦怠、神经过敏等', '无', '否', '20片');
INSERT INTO `druginfo` VALUES (9, '健胃消食片', '具有健胃消食之功效。主治脾胃虚弱所致的食积，症见不思饮食，嗳腐酸臭，脘腹胀满；消化不良见上述证候者', '尚未明确', '无', '否', '片剂，每片重（1）0.8克或（2）0.5克');
INSERT INTO `druginfo` VALUES (10, '999感冒灵颗粒', '解热镇痛功效，用于因感冒引起的头痛，发热，鼻塞，流涕，咽痛等症状', '偶见皮疹、荨麻疹、药热及粒细胞减少等', '无', '否', '开水冲服，一次1袋，一日3次');
INSERT INTO `druginfo` VALUES (11, '诺氟沙星', '适用于敏感菌所致的尿路感染、淋病、前列腺炎、肠道感染和伤寒及其他沙门菌感染', '胃肠道反应：较为常见，可表现为腹部不适或疼痛、腹泻、恶心或呕吐。', '对本品及氟喹诺酮类药过敏的患者禁用。', '否', '一次0.4g(4粒)，一日2次');
INSERT INTO `druginfo` VALUES (12, '牛黄解毒片', '具有清热解毒之功效。用于火热内盛，咽喉肿痛，牙龈肿痛，口舌生疮，目赤肿痛', '尚不明确', '孕妇禁用', '否', '口服。一次3片，一日2次～3次。');
INSERT INTO `druginfo` VALUES (13, '头孢拉定', '临床主要用于呼吸道、泌尿道、皮肤和软组织等的感染，如支气管炎、肺炎、肾盂肾炎，膀胱炎，耳鼻咽喉感染、肠炎及痢疾等', '1.主要为皮疹、药物热等，偶见过敏性休克。 2.消化系统：恶心、呕吐、腹泻和腹部不适等症状较为多见，偶见假膜性肠炎。 3.血液系统:少数患者用药后可出现嗜酸粒细胞增多、白细胞总数或中性粒细胞减少等。 4.肾毒性：少数患者用药后可出现暂时性尿素氮升高，但尚无严重肾脏毒性反应的报道。 5.肝毒性：少数患者用药后可出现碱性磷酸酶、血清丙氨酸氨基转移氨基转移酶和天门冬氨酸氨基转移酶一过性升高。 6.其他：头孢拉定肌注部位疼痛较明显，静脉注射后有发生静脉炎的报道。', '尚未明确', '否', '口服1～2g，分3～4次服用');
INSERT INTO `druginfo` VALUES (14, '去痛片', '适应症为用于发热及轻、中度的疼痛', '本复方所含氨基比林和非那西丁均有明显不良反应。服用氨基比林可有呕吐、皮疹、发热、大量出汗及发生口腔炎等，少数可致中性粒细胞缺乏、再生障碍性贫血、渗出性红斑、剥脱性皮炎、龟头糜烂等。长期服用非那西丁可引起肾乳头坏死、间质性肾炎并发生急性肾功能衰竭，甚至可能诱发肾盂癌和膀胱癌，还可造成对药物的依赖性。非那西丁还易使血红蛋白形成高铁血红蛋白，使血液的携氧能力下降，导致紫绀，还可引起溶血、肝脏损害，并对视网膜有一定毒性', '1.已知对本品过敏的患者。 2.服用阿司匹林或其他非甾体类抗炎药后诱发哮喘、荨麻疹或过敏反应的患者。 3.禁用于冠状动脉搭桥手术（CABG）围手术期疼痛的治疗。 4.有应用非甾体抗炎药后发生胃肠道出血或穿孔病史的患者。 5.有活动性消化道溃疡/出血，或者既往曾复发溃疡/出血的患者。 6.重度心力衰竭患者。', '否', '口服。需要时服用，一次1-2片，一日1-3次。');
INSERT INTO `druginfo` VALUES (15, '塞来昔布', '用于治疗骨关节炎、类风湿性关节炎、急性疼痛、痛经[1]，以及减少家族性腺瘤性息肉病患者的结肠和直肠息肉数量', '胃肠道系统：便秘、憩室炎、吞咽困难、打嗝、食道炎、胃炎、胃肠炎、胃食管反流、痔疮、裂孔疝、黑粪症、口干、口腔炎、里急后重、牙齿不适、呕吐。', '本品禁用于对塞来昔布过敏者。 本品不可用于已知对磺胺过敏者。 本品不可用于服用阿司匹林或其他非甾体类抗炎药后诱发哮喘、荨麻疹或过敏反应的患者。在这些患者中已有非甾体类抗炎药诱发的严重的（极少是致命的）过敏反应报道（见[注意事项] -警告-过敏反应和[注意事项] -注意事项-伴有哮喘）。 本品禁用于冠状动脉搭桥手术（CABG）围手术期疼痛的治疗（见[注意事项]-警告）。 本品禁用于有活动性消化道溃疡/出血的患者。 本品禁用于重度心力衰竭患者。', '否', '每日一次口服或100mg 每日两次口服');
INSERT INTO `druginfo` VALUES (16, '洛索洛芬钠片', '下述疾患及症状的消炎和镇痛类风湿性关节炎、骨性关节炎、腰痛症、肩关节周围炎、颈肩腕综合征。②手术后，外伤后及拔牙后的镇痛和消炎', '(1) 休克：可能发生休克，故应注意观察，若出现异常应速停药并适当处置。 (2) 溶血性贫血，白细胞减少，血小板减少可能发生，故应进行血液检查等注意观察，若出现异常应速停药并给予适当处置。', '1. 有活动性消化溃疡/出血，或者既往曾发溃疡/出血的患者（因抑制前列腺素的生物合成，减少胃血流量，会使消化性溃疡恶化）。（参照【注意事项】项）。 2. 严重血液学异常的患者（有可能引起血小板功能障碍，并使其恶化）。 3. 严重肝功能损害者（有肝损害的不良反应报告，并有可能使其恶化）。严重肾功能损害患者（会出现急性肾功能不全、肾病综合征等不良反应）。 4. 严重心功能不全患者（因抑制肾前列腺素生物合成，引起浮肿，循环体液量增加，增加心脏工作量，有可能使症状恶化）。', '否', '成人1次口服洛索洛芬钠（以无水物计）60mg，一日3次');
INSERT INTO `druginfo` VALUES (17, '感冒片', '12', '123', '123', '是', '123');
INSERT INTO `druginfo` VALUES (19, '我的文档', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `druginfo` VALUES (21, '板蓝根', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `druginfo` VALUES (22, '999', NULL, NULL, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
