-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2017 at 09:43 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tour_mining`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_name` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `prefecture_name` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `interest` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- --------------------------------------------------------

--
-- Table structure for table `interest`
--

CREATE TABLE `interest` (
  `id` int(255) NOT NULL,
  `city_name` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `food` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- --------------------------------------------------------

--
-- Table structure for table `prefecture`
--

CREATE TABLE `prefecture` (
  `name` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `prefecture`
--

INSERT INTO `prefecture` (`name`) VALUES
('Aichi'),
('Akita'),
('Aomori'),
('Chiba'),
('Ehime'),
('Fukui'),
('Fukuoka'),
('Fukushima'),
('Gifu'),
('Gunma'),
('Hiroshima'),
('Hokkaidō'),
('Hyōgo'),
('Ibaraki'),
('Ishikawa'),
('Iwate'),
('Kagawa'),
('Kagoshima'),
('Kanagawa'),
('Kōchi'),
('Kumamoto'),
('Kyōto'),
('Mie'),
('Miyagi'),
('Miyazaki'),
('Nagano'),
('Nagasaki'),
('Nara'),
('Niigata'),
('Ōita'),
('Okayama'),
('Okinawa'),
('Ōsaka'),
('Saga'),
('Saitama'),
('Shiga'),
('Shimane'),
('Shizuoka'),
('Tochigi'),
('Tokushima'),
('Tōkyō'),
('Tottori'),
('Toyama'),
('Wakayama'),
('Yamagata'),
('Yamaguchi'),
('Yamanashi'),
('三重県'),
('京都府'),
('佐賀県'),
('兵庫県'),
('北海道'),
('千葉県'),
('和歌山県'),
('埼玉県'),
('大分県'),
('大阪府'),
('奈良県'),
('宮城県'),
('宮崎県'),
('富山県'),
('山口県'),
('山形県'),
('山梨県'),
('岐阜県'),
('岡山県'),
('岩手県'),
('島根県'),
('広島県'),
('徳島県'),
('愛媛県'),
('愛知県'),
('新潟県'),
('東京都'),
('栃木県'),
('沖縄県'),
('滋賀県'),
('熊本県'),
('石川県'),
('神奈川県'),
('福井県'),
('福岡県'),
('福島県'),
('秋田県'),
('群馬県'),
('茨城県'),
('長崎県'),
('長野県'),
('青森県'),
('静岡県'),
('香川県'),
('高知県'),
('鳥取県'),
('鹿児島県');

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `id` int(255) NOT NULL,
  `user_id` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `record_number` int(255) NOT NULL,
  `prefecture_from` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `prefecture_to` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `record`
--

INSERT INTO `record` (`id`, `user_id`, `record_number`, `prefecture_from`, `prefecture_to`) VALUES
(4, '1718261749', 0, 'Tōkyō', 'Kyōto'),
(5, '1333006866', 2, 'Hokkaidō', 'Miyagi'),
(6, '1333006866', 2, 'Miyagi', 'Chiba'),
(7, '91798848', 4, 'Kanagawa', 'Tōkyō'),
(8, '313287772', 5, 'Wakayama', 'Ōsaka'),
(9, '313287772', 5, 'Ōsaka', 'Hyōgo'),
(10, '1941428065', 6, 'Chiba', 'Tōkyō'),
(11, '412853724', 7, 'Kanagawa', 'Kagawa'),
(12, '6810372', 9, 'Ōsaka', 'Hyōgo'),
(13, '906460261', 10, 'Miyazaki', 'Ōita'),
(14, '906460261', 10, 'Ōita', 'Yamaguchi'),
(15, '906460261', 10, 'Yamaguchi', 'Fukuoka'),
(16, '223054006', 11, 'Gunma', 'Tōkyō'),
(17, '3123358392', 13, 'Tōkyō', 'Kanagawa'),
(18, '996115633', 14, 'Kanagawa', 'Tōkyō'),
(19, '996115633', 14, 'Tōkyō', 'Fukushima'),
(20, '996115633', 14, 'Fukushima', 'Miyagi'),
(21, '996115633', 14, 'Miyagi', 'Iwate'),
(22, '996115633', 14, 'Iwate', 'Akita'),
(23, '996115633', 14, 'Akita', '秋田県'),
(24, '996115633', 14, '秋田県', 'Saitama'),
(25, '93165660', 15, 'Ōsaka', 'Hyōgo'),
(26, '14190355', 16, 'Fukuoka', 'Kagoshima'),
(27, '83350104', 20, 'Hiroshima', 'Hokkaidō'),
(28, '83350104', 20, 'Hokkaidō', 'Hyōgo'),
(29, '115332213', 22, 'Fukui', 'Ōsaka'),
(30, '17989476', 23, 'Tōkyō', 'Shizuoka'),
(31, '17989476', 23, 'Shizuoka', 'Chiba'),
(32, '17989476', 23, 'Chiba', 'Saitama'),
(33, '553466099', 24, 'Shizuoka', 'Aichi'),
(34, '553466099', 24, 'Aichi', 'Hokkaidō'),
(35, '553466099', 24, 'Hokkaidō', '北海道'),
(36, '553466099', 24, '北海道', 'Hyōgo'),
(37, '305547192', 25, 'Saitama', 'Tōkyō'),
(38, '305547192', 25, 'Tōkyō', 'Ōsaka'),
(39, '305547192', 25, 'Ōsaka', 'Hyōgo'),
(40, '892260289', 26, 'Ibaraki', 'Tōkyō'),
(41, '892260289', 26, 'Tōkyō', 'Ōsaka'),
(42, '892260289', 26, 'Ōsaka', 'Niigata'),
(43, '892260289', 26, 'Niigata', 'Chiba'),
(44, '892260289', 26, 'Chiba', '千葉県'),
(45, '107655719', 28, 'Yamagata', '山形県'),
(46, '53863986', 29, 'Tōkyō', 'Ōsaka'),
(47, '53863986', 29, 'Ōsaka', 'Hyōgo'),
(48, '135325773', 31, 'Nara', 'Kyōto'),
(49, '135325773', 31, 'Kyōto', 'Shiga'),
(50, '135325773', 31, 'Shiga', 'Shizuoka'),
(51, '135325773', 31, 'Shizuoka', 'Tōkyō'),
(52, '135325773', 31, 'Tōkyō', 'Aichi'),
(53, '627274725', 33, 'Tōkyō', 'Kanagawa'),
(54, '627274725', 33, 'Kanagawa', 'Gunma'),
(55, '120454513', 35, 'Tottori', 'Hyōgo'),
(56, '120454513', 35, 'Hyōgo', 'Ōsaka'),
(57, '129211944', 39, 'Tōkyō', 'Shiga'),
(58, '128485069', 40, 'Kōchi', 'Ōsaka'),
(59, '128485069', 40, 'Ōsaka', 'Hiroshima'),
(60, '128485069', 40, 'Hiroshima', 'Okayama'),
(61, '128485069', 40, 'Okayama', 'Ehime'),
(62, '119329596', 42, 'Kanagawa', 'Kumamoto'),
(63, '2533007911', 43, '京都府', 'Ōsaka'),
(64, '218077695', 44, 'Kanagawa', 'Fukuoka'),
(65, '128877853', 45, 'Tōkyō', 'Ōita'),
(66, '128877853', 45, 'Ōita', 'Fukuoka'),
(67, '450593621', 47, 'Shiga', 'Nagano'),
(68, '297699100', 51, '愛知県', 'Aichi'),
(69, '1143806035', 52, 'Hyōgo', 'Shiga'),
(70, '1143806035', 52, 'Shiga', 'Shizuoka'),
(71, '1143806035', 52, 'Shizuoka', 'Kanagawa'),
(72, '1143806035', 52, 'Kanagawa', 'Saga'),
(73, '1143806035', 52, 'Saga', 'Tōkyō'),
(74, '1143806035', 52, 'Tōkyō', 'Nara'),
(75, '91731124', 75, 'Chiba', 'Chiba'),
(76, '91731124', 75, 'Chiba', 'Kagawa'),
(77, '2700267289', 76, 'Kanagawa', 'Aichi'),
(78, '2700267289', 76, 'Aichi', 'Gifu'),
(79, '2700267289', 76, 'Gifu', 'Kanagawa'),
(80, '2700267289', 76, 'Kanagawa', 'Tōkyō'),
(81, '2700267289', 76, 'Tōkyō', 'Kanagawa'),
(82, '2700267289', 76, 'Kanagawa', 'Tōkyō'),
(83, '2700267289', 76, 'Tōkyō', 'Ehime'),
(84, '2473653858', 78, 'Nagasaki', 'Fukuoka'),
(85, '2473653858', 78, 'Fukuoka', 'Chiba'),
(86, '2473653858', 78, 'Chiba', 'Tōkyō'),
(87, '2473653858', 78, 'Tōkyō', 'Ōsaka'),
(88, '2473653858', 78, 'Ōsaka', 'Nagasaki'),
(89, '2473653858', 78, 'Nagasaki', 'Fukuoka'),
(90, '54718006', 79, 'Kanagawa', 'Tōkyō'),
(91, '54718006', 79, 'Tōkyō', 'Fukuoka'),
(92, '231333956', 81, 'Yamaguchi', 'Hiroshima'),
(93, '231333956', 81, 'Hiroshima', 'Yamaguchi'),
(94, '4831583926', 83, 'Chiba', 'Tōkyō'),
(95, '4831583926', 83, 'Tōkyō', 'Chiba'),
(96, '89694800', 84, 'Tōkyō', 'Chiba'),
(97, '163611236', 85, 'Aichi', 'Shizuoka'),
(98, '232624247', 86, 'Aichi', 'Chiba'),
(99, '232624247', 86, 'Chiba', 'Aichi'),
(100, '232624247', 86, 'Aichi', 'Tōkyō'),
(101, '232624247', 86, 'Tōkyō', 'Chiba'),
(102, '232624247', 86, 'Chiba', 'Tōkyō'),
(103, '232624247', 86, 'Tōkyō', 'Aichi'),
(104, '232624247', 86, 'Aichi', 'Kyōto'),
(105, '232624247', 86, 'Kyōto', 'Aichi'),
(106, '1962497762', 88, 'Tōkyō', 'Kanagawa'),
(107, '1962497762', 88, 'Kanagawa', 'Tōkyō'),
(108, '1962497762', 88, 'Tōkyō', 'Kanagawa'),
(109, '1962497762', 88, 'Kanagawa', 'Tōkyō'),
(110, '1962497762', 88, 'Tōkyō', 'Kanagawa'),
(111, '1962497762', 88, 'Kanagawa', 'Tōkyō'),
(112, '2808820982', 90, 'Tōkyō', 'Saitama'),
(113, '2808820982', 90, 'Saitama', 'Tōkyō'),
(114, '367703646', 91, 'Chiba', 'Tōkyō'),
(115, '367703646', 91, 'Tōkyō', 'Chiba'),
(116, '2205054823', 93, 'Ōsaka', 'Hyōgo'),
(117, '2205054823', 93, 'Hyōgo', 'Ōsaka'),
(118, '89591633', 95, 'Kanagawa', 'Saitama'),
(119, '89591633', 95, 'Saitama', 'Kanagawa'),
(120, '183269094', 96, 'Tōkyō', 'Miyagi'),
(121, '183269094', 96, 'Miyagi', 'Tōkyō'),
(122, '1603825117', 97, 'Ōsaka', 'Tōkyō'),
(123, '1603825117', 97, 'Tōkyō', 'Kanagawa'),
(124, '1603825117', 97, 'Kanagawa', 'Yamanashi'),
(125, '105793846', 100, 'Kanagawa', 'Miyagi'),
(126, '105793846', 100, 'Miyagi', 'Tōkyō'),
(127, '856286880', 101, 'Aichi', 'Tōkyō'),
(128, '702142957969780736', 102, 'Aichi', 'Tōkyō'),
(129, '702142957969780736', 102, 'Tōkyō', 'Chiba'),
(130, '702142957969780736', 102, 'Chiba', 'Tōkyō'),
(131, '702142957969780736', 102, 'Tōkyō', 'Aichi'),
(132, '3571830252', 103, 'Ōsaka', 'Tōkyō'),
(133, '3571830252', 103, 'Tōkyō', 'Ōsaka'),
(134, '1570478323', 104, 'Fukuoka', 'Tōkyō'),
(135, '113637045', 105, 'Fukushima', 'Miyagi'),
(136, '113637045', 105, 'Miyagi', 'Fukushima'),
(137, '113637045', 105, 'Fukushima', 'Tochigi'),
(138, '325542585', 107, 'Aichi', 'Fukuoka'),
(139, '325542585', 107, 'Fukuoka', 'Kumamoto'),
(140, '325542585', 107, 'Kumamoto', 'Fukuoka'),
(141, '325542585', 107, 'Fukuoka', 'Aichi'),
(142, '6855912', 108, 'Mie', 'Aichi'),
(143, '6855912', 108, 'Aichi', 'Tōkyō'),
(144, '169419556', 109, 'Fukuoka', 'Tōkyō'),
(145, '169419556', 109, 'Tōkyō', 'Fukushima'),
(146, '169419556', 109, 'Fukushima', 'Tōkyō'),
(147, '5532582', 110, 'Kanagawa', 'Tōkyō'),
(148, '5532582', 110, 'Tōkyō', 'Kanagawa'),
(149, '321178065', 117, 'Tōkyō', 'Kanagawa'),
(150, '321178065', 117, 'Kanagawa', 'Tōkyō'),
(151, '321178065', 117, 'Tōkyō', 'Fukuoka'),
(152, '321178065', 117, 'Fukuoka', 'Tōkyō'),
(153, '321178065', 117, 'Tōkyō', 'Kanagawa'),
(154, '82134463', 118, 'Kyōto', 'Tōkyō'),
(155, '82134463', 118, 'Tōkyō', 'Kyōto'),
(156, '1444295947', 119, 'Ōsaka', 'Shiga'),
(157, '1444295947', 119, 'Shiga', 'Kyōto'),
(158, '1444295947', 119, 'Kyōto', 'Ōsaka'),
(159, '4592026340', 121, 'Miyagi', 'Yamagata'),
(160, '4592026340', 121, 'Yamagata', 'Miyagi'),
(161, '1167608762', 123, 'Tōkyō', 'Chiba'),
(162, '1167608762', 123, 'Chiba', 'Tōkyō'),
(163, '956913193', 124, 'Chiba', 'Tōkyō'),
(164, '281336680', 125, 'Kōchi', 'Ehime'),
(165, '281336680', 125, 'Ehime', 'Miyazaki'),
(166, '281336680', 125, 'Miyazaki', 'Ehime'),
(167, '281336680', 125, 'Ehime', 'Kōchi'),
(168, '397365248', 126, 'Hyōgo', 'Ōsaka'),
(169, '239470473', 127, 'Shizuoka', 'Aichi'),
(170, '239470473', 127, 'Aichi', 'Kanagawa'),
(171, '239470473', 127, 'Kanagawa', 'Shizuoka'),
(172, '137011868', 129, 'Tōkyō', 'Saitama'),
(173, '137011868', 129, 'Saitama', 'Tōkyō'),
(174, '137011868', 129, 'Tōkyō', 'Saitama'),
(175, '137011868', 129, 'Saitama', 'Tōkyō'),
(176, '137011868', 129, 'Tōkyō', 'Saitama'),
(177, '137011868', 129, 'Saitama', 'Tōkyō'),
(178, '1709511818', 130, 'Chiba', 'Tōkyō'),
(179, '11425382', 131, 'Saitama', 'Miyagi'),
(180, '11425382', 131, 'Miyagi', 'Chiba'),
(181, '11425382', 131, 'Chiba', 'Miyagi'),
(182, '11425382', 131, 'Miyagi', 'Saitama'),
(183, '86655270', 132, 'Shizuoka', 'Tōkyō'),
(184, '86655270', 132, 'Tōkyō', 'Chiba'),
(185, '86655270', 132, 'Chiba', 'Tōkyō'),
(186, '86655270', 132, 'Tōkyō', 'Shizuoka'),
(187, '633800329', 133, 'Saitama', 'Ishikawa'),
(188, '633800329', 133, 'Ishikawa', 'Saitama'),
(189, '2988445567', 134, 'Kanagawa', 'Tōkyō'),
(190, '2988445567', 134, 'Tōkyō', 'Kanagawa'),
(191, '3164730510', 135, 'Tochigi', 'Fukuoka'),
(192, '308919708', 137, 'Aichi', 'Tōkyō'),
(193, '308919708', 137, 'Tōkyō', 'Chiba'),
(194, '308919708', 137, 'Chiba', 'Tōkyō'),
(195, '308919708', 137, 'Tōkyō', 'Aichi'),
(196, '308919708', 137, 'Aichi', 'Gifu'),
(197, '308919708', 137, 'Gifu', 'Aichi'),
(198, '308919708', 137, 'Aichi', 'Gifu'),
(199, '308919708', 137, 'Gifu', 'Aichi'),
(200, '601478856', 138, 'Tottori', 'Hyōgo'),
(201, '601478856', 138, 'Hyōgo', 'Ōsaka'),
(202, '601478856', 138, 'Ōsaka', 'Aichi'),
(203, '409135429', 140, 'Tōkyō', 'Kanagawa'),
(204, '409135429', 140, 'Kanagawa', 'Shizuoka'),
(205, '409135429', 140, 'Shizuoka', 'Yamanashi'),
(206, '409135429', 140, 'Yamanashi', 'Tōkyō'),
(207, '409135429', 140, 'Tōkyō', 'Ibaraki'),
(208, '72203810', 141, 'Toyama', 'Ishikawa'),
(209, '72203810', 141, 'Ishikawa', 'Toyama'),
(210, '72203810', 141, 'Toyama', 'Ishikawa'),
(211, '477812070', 146, 'Fukuoka', 'Aichi'),
(212, '75494988', 149, 'Kanagawa', 'Tōkyō'),
(213, '75494988', 149, 'Tōkyō', 'Fukuoka'),
(214, '75494988', 149, 'Fukuoka', 'Ōita'),
(215, '75494988', 149, 'Ōita', 'Tōkyō'),
(216, '75494988', 149, 'Tōkyō', 'Aichi'),
(217, '191716799', 150, 'Tōkyō', 'Shiga'),
(218, '191716799', 150, 'Shiga', 'Tōkyō'),
(219, '191716799', 150, 'Tōkyō', 'Shimane'),
(220, '350569612', 151, 'Ōsaka', 'Okayama'),
(221, '350569612', 151, 'Okayama', 'Shimane'),
(222, '452237712', 153, 'Shiga', 'Tōkyō'),
(223, '63460948', 154, 'Kanagawa', 'Tōkyō'),
(224, '153663216', 155, 'Aichi', 'Gifu'),
(225, '153663216', 155, 'Gifu', 'Aichi'),
(226, '153663216', 155, 'Aichi', 'Gifu'),
(227, '153663216', 155, 'Gifu', 'Tōkyō'),
(228, '153663216', 155, 'Tōkyō', 'Miyagi'),
(229, '140360334', 156, 'Okayama', 'Ōsaka'),
(230, '140360334', 156, 'Ōsaka', 'Aichi'),
(231, '140360334', 156, 'Aichi', 'Tōkyō'),
(232, '140360334', 156, 'Tōkyō', 'Chiba'),
(233, '140360334', 156, 'Chiba', 'Okayama'),
(234, '237631231', 157, 'Ōsaka', 'Chiba'),
(235, '237631231', 157, 'Chiba', 'Ōsaka'),
(236, '237631231', 157, 'Ōsaka', 'Fukui'),
(237, '237631231', 157, 'Fukui', 'Ōsaka'),
(238, '2445544891', 158, 'Fukushima', 'Tōkyō'),
(239, '2445544891', 158, 'Tōkyō', 'Kōchi'),
(240, '2348548940', 160, 'Fukui', 'Nagano'),
(241, '2348548940', 160, 'Nagano', 'Gifu'),
(242, '2348548940', 160, 'Gifu', 'Fukui'),
(243, '157229476', 161, 'Saitama', 'Kanagawa'),
(244, '157229476', 161, 'Kanagawa', 'Saitama'),
(245, '157229476', 161, 'Saitama', 'Tōkyō'),
(246, '157229476', 161, 'Tōkyō', 'Ōsaka'),
(247, '157229476', 161, 'Ōsaka', 'Mie'),
(248, '157229476', 161, 'Mie', 'Shiga'),
(249, '157229476', 161, 'Shiga', 'Mie'),
(250, '157229476', 161, 'Mie', 'Wakayama'),
(251, '5660332', 162, 'Aichi', 'Mie'),
(252, '5660332', 162, 'Mie', 'Wakayama'),
(253, '5660332', 162, 'Wakayama', 'Mie'),
(254, '5660332', 162, 'Mie', 'Aichi'),
(255, '5660332', 162, 'Aichi', 'Mie'),
(256, '5660332', 162, 'Mie', 'Ōsaka'),
(257, '116414348', 165, 'Fukuoka', 'Yamaguchi'),
(258, '116414348', 165, 'Yamaguchi', 'Shimane'),
(259, '116414348', 165, 'Shimane', 'Yamaguchi'),
(260, '116414348', 165, 'Yamaguchi', 'Fukuoka'),
(261, '116414348', 165, 'Fukuoka', 'Nagasaki'),
(262, '220195558', 166, 'Kyōto', 'Tōkyō'),
(263, '197965264', 167, 'Saitama', 'Chiba'),
(264, '6025742', 168, 'Tochigi', 'Tōkyō'),
(265, '310686458', 169, 'Chiba', 'Tōkyō'),
(266, '313699454', 172, 'Tōkyō', 'Ōsaka'),
(267, '2750981791', 173, 'Chiba', 'Tōkyō'),
(268, '60598210', 174, 'Saitama', 'Tōkyō'),
(269, '60598210', 174, 'Tōkyō', 'Saitama'),
(270, '60598210', 174, 'Saitama', 'Tōkyō'),
(271, '60598210', 174, 'Tōkyō', 'Saitama'),
(272, '2790632523', 176, 'Chiba', 'Nara'),
(273, '2790632523', 176, 'Nara', 'Chiba'),
(274, '2790632523', 176, 'Chiba', 'Tōkyō'),
(275, '2790632523', 176, 'Tōkyō', 'Chiba'),
(276, '406969276', 179, 'Fukuoka', 'Tōkyō'),
(277, '406969276', 179, 'Tōkyō', 'Fukuoka'),
(278, '25598200', 181, 'Kagawa', 'Okayama'),
(279, '42860422', 182, 'Tōkyō', 'Fukuoka'),
(280, '42860422', 182, 'Fukuoka', 'Tōkyō'),
(281, '136015339', 183, 'Chiba', 'Tōkyō'),
(282, '136015339', 183, 'Tōkyō', 'Hiroshima'),
(283, '136015339', 183, 'Hiroshima', 'Tōkyō'),
(284, '837876335619919872', 184, 'Fukuoka', 'Tōkyō'),
(285, '128472070', 185, 'Aichi', 'Gifu'),
(286, '114066499', 186, 'Aichi', 'Gifu'),
(287, '114066499', 186, 'Gifu', 'Aichi'),
(288, '114066499', 186, 'Aichi', 'Kanagawa'),
(289, '404758103', 191, 'Okinawa', 'Chiba'),
(290, '404758103', 191, 'Chiba', 'Okinawa'),
(291, '184711180', 192, 'Hyōgo', 'Aichi'),
(292, '127760213', 193, 'Tōkyō', 'Chiba'),
(293, '577776708', 196, 'Chiba', 'Tōkyō'),
(294, '577776708', 196, 'Tōkyō', 'Ōsaka'),
(295, '95768981', 198, 'Tōkyō', 'Chiba'),
(296, '95768981', 198, 'Chiba', 'Tōkyō'),
(297, '95768981', 198, 'Tōkyō', 'Hyōgo'),
(298, '95768981', 198, 'Hyōgo', 'Ōsaka'),
(299, '95768981', 198, 'Ōsaka', 'Tōkyō'),
(300, '2415732289', 199, 'Aichi', 'Shiga'),
(301, '2415732289', 199, 'Shiga', 'Aichi'),
(302, '2415732289', 199, 'Aichi', 'Shiga'),
(303, '2415732289', 199, 'Shiga', 'Aichi'),
(304, '160700425', 200, 'Fukuoka', 'Tōkyō'),
(305, '160700425', 200, 'Tōkyō', 'Chiba'),
(306, '160700425', 200, 'Chiba', 'Kumamoto'),
(307, '410028512', 203, 'Aichi', 'Gifu'),
(308, '410028512', 203, 'Gifu', 'Shizuoka'),
(309, '410028512', 203, 'Shizuoka', 'Tōkyō'),
(310, '2795956424', 208, 'Niigata', 'Tōkyō'),
(311, '237687277', 209, 'Aichi', 'Mie'),
(312, '237687277', 209, 'Mie', 'Aichi'),
(313, '237687277', 209, 'Aichi', 'Shizuoka'),
(314, '91556664', 210, 'Hyōgo', 'Ōsaka'),
(315, '91556664', 210, 'Ōsaka', 'Shizuoka'),
(316, '91556664', 210, 'Shizuoka', 'Aichi'),
(317, '91556664', 210, 'Aichi', 'Gifu'),
(318, '91556664', 210, 'Gifu', 'Shiga'),
(319, '91556664', 210, 'Shiga', 'Kyōto'),
(320, '91556664', 210, 'Kyōto', 'Hyōgo'),
(321, '91556664', 210, 'Hyōgo', 'Ōsaka'),
(322, '2317011618', 211, 'Shizuoka', 'Kanagawa'),
(323, '2317011618', 211, 'Kanagawa', 'Tōkyō'),
(324, '2317011618', 211, 'Tōkyō', 'Saitama'),
(325, '2317011618', 211, 'Saitama', 'Tōkyō'),
(326, '2317011618', 211, 'Tōkyō', 'Kanagawa'),
(327, '2317011618', 211, 'Kanagawa', 'Shizuoka'),
(328, '2317011618', 211, 'Shizuoka', 'Kanagawa'),
(329, '2317011618', 211, 'Kanagawa', 'Tōkyō'),
(330, '2317011618', 211, 'Tōkyō', 'Hyōgo'),
(331, '2317011618', 211, 'Hyōgo', 'Nagasaki'),
(332, '552290631', 213, 'Ōsaka', 'Hyōgo'),
(333, '552290631', 213, 'Hyōgo', 'Ōsaka'),
(334, '552290631', 213, 'Ōsaka', 'Hyōgo'),
(335, '619182875', 215, 'Chiba', 'Tōkyō'),
(336, '619182875', 215, 'Tōkyō', 'Miyagi'),
(337, '619182875', 215, 'Miyagi', 'Iwate'),
(338, '619182875', 215, 'Iwate', 'Miyagi'),
(339, '700122320', 218, 'Kanagawa', 'Chiba'),
(340, '53118903', 219, 'Ishikawa', 'Tōkyō'),
(341, '53118903', 219, 'Tōkyō', 'Ishikawa'),
(342, '53118903', 219, 'Ishikawa', 'Tōkyō'),
(343, '53118903', 219, 'Tōkyō', 'Ishikawa'),
(344, '53118903', 219, 'Ishikawa', 'Tōkyō'),
(345, '53118903', 219, 'Tōkyō', 'Ishikawa'),
(346, '53118903', 219, 'Ishikawa', 'Tōkyō'),
(347, '53118903', 219, 'Tōkyō', 'Ishikawa'),
(348, '53118903', 219, 'Ishikawa', 'Tōkyō'),
(349, '53118903', 219, 'Tōkyō', 'Ishikawa'),
(350, '53118903', 219, 'Ishikawa', 'Tōkyō'),
(351, '53118903', 219, 'Tōkyō', 'Ōsaka'),
(352, '53118903', 219, 'Ōsaka', 'Hyōgo'),
(353, '53118903', 219, 'Hyōgo', 'Ōsaka'),
(354, '2658047323', 220, 'Tōkyō', 'Tochigi'),
(355, '2658047323', 220, 'Tochigi', 'Miyagi'),
(356, '2658047323', 220, 'Miyagi', 'Fukushima'),
(357, '2658047323', 220, 'Fukushima', 'Tōkyō'),
(358, '115408096', 221, 'Chiba', 'Ōsaka'),
(359, '115408096', 221, 'Ōsaka', 'Wakayama'),
(360, '115408096', 221, 'Wakayama', 'Ōsaka'),
(361, '115408096', 221, 'Ōsaka', 'Shiga'),
(362, '115408096', 221, 'Shiga', 'Gifu'),
(363, '115408096', 221, 'Gifu', 'Mie'),
(364, '115408096', 221, 'Mie', 'Aichi'),
(365, '115408096', 221, 'Aichi', 'Gifu'),
(366, '115408096', 221, 'Gifu', 'Yamanashi'),
(367, '115408096', 221, 'Yamanashi', 'Tōkyō'),
(368, '2870979654', 223, 'Tōkyō', 'Kanagawa'),
(369, '2870979654', 223, 'Kanagawa', 'Shizuoka'),
(370, '3188856398', 224, 'Chiba', 'Tōkyō'),
(371, '3188856398', 224, 'Tōkyō', 'Fukuoka'),
(372, '3188856398', 224, 'Fukuoka', 'Aichi'),
(373, '144727961', 225, 'Chiba', 'Tōkyō'),
(374, '144727961', 225, 'Tōkyō', 'Chiba'),
(375, '144727961', 225, 'Chiba', 'Tōkyō'),
(376, '144727961', 225, 'Tōkyō', 'Chiba'),
(377, '144727961', 225, 'Chiba', 'Tōkyō'),
(378, '144727961', 225, 'Tōkyō', 'Chiba'),
(379, '144727961', 225, 'Chiba', 'Tōkyō'),
(380, '144727961', 225, 'Tōkyō', 'Chiba'),
(381, '144727961', 225, 'Chiba', 'Tōkyō'),
(382, '144727961', 225, 'Tōkyō', 'Ōsaka'),
(383, '144727961', 225, 'Ōsaka', 'Hyōgo'),
(384, '144727961', 225, 'Hyōgo', 'Ōsaka'),
(385, '144727961', 225, 'Ōsaka', 'Tōkyō'),
(386, '144727961', 225, 'Tōkyō', 'Chiba'),
(387, '144727961', 225, 'Chiba', 'Tōkyō'),
(388, '144727961', 225, 'Tōkyō', 'Chiba'),
(389, '144727961', 225, 'Chiba', 'Tōkyō'),
(390, '144727961', 225, 'Tōkyō', 'Chiba'),
(391, '144727961', 225, 'Chiba', 'Tōkyō'),
(392, '727479921996484608', 226, 'Kanagawa', 'Tōkyō'),
(393, '727479921996484608', 226, 'Tōkyō', 'Kanagawa'),
(394, '727479921996484608', 226, 'Kanagawa', 'Tōkyō'),
(395, '727479921996484608', 226, 'Tōkyō', 'Chiba'),
(396, '727479921996484608', 226, 'Chiba', 'Tōkyō'),
(397, '2989851860', 227, 'Kanagawa', 'Tōkyō'),
(398, '89871673', 228, 'Gifu', 'Yamanashi'),
(399, '89871673', 228, 'Yamanashi', 'Nagano'),
(400, '89871673', 228, 'Nagano', 'Chiba'),
(401, '89871673', 228, 'Chiba', 'Tōkyō'),
(402, '89871673', 228, 'Tōkyō', 'Chiba'),
(403, '89871673', 228, 'Chiba', 'Tōkyō');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` varchar(100) COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_name`(20));

--
-- Indexes for table `interest`
--
ALTER TABLE `interest`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prefecture`
--
ALTER TABLE `prefecture`
  ADD PRIMARY KEY (`name`(50)),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prefecture_from` (`prefecture_from`),
  ADD KEY `prefecture_to` (`prefecture_to`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `interest`
--
ALTER TABLE `interest`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `record`
--
ALTER TABLE `record`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=404;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `record`
--
ALTER TABLE `record`
  ADD CONSTRAINT `record_ibfk_1` FOREIGN KEY (`prefecture_from`) REFERENCES `prefecture` (`name`),
  ADD CONSTRAINT `record_ibfk_2` FOREIGN KEY (`prefecture_to`) REFERENCES `prefecture` (`name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
