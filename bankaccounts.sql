-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2023 at 08:02 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bankaccounts`
--
CREATE DATABASE IF NOT EXISTS `bankaccounts` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bankaccounts`;

-- --------------------------------------------------------

--
-- Table structure for table `accountoperations`
--

CREATE TABLE `accountoperations` (
  `objectId` int(20) NOT NULL,
  `accountNumber` int(20) NOT NULL,
  `operationTypeId` int(100) NOT NULL,
  `operationDate` date NOT NULL,
  `amount` int(11) NOT NULL,
  `interest` int(100) DEFAULT NULL,
  `payments` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accountoperations`
--

INSERT INTO `accountoperations` (`objectId`, `accountNumber`, `operationTypeId`, `operationDate`, `amount`, `interest`, `payments`) VALUES
(21, 1234, 1, '2023-01-04', 100, NULL, NULL),
(22, 1234, 2, '2023-01-04', 300, NULL, NULL),
(23, 1234, 3, '2023-01-04', 10000, 30, 20),
(24, 2222, 1, '2023-01-04', 350, NULL, NULL),
(27, 2222, 2, '2023-01-04', 500, NULL, NULL),
(28, 2222, 3, '2023-01-04', 6500, 10, 10);

-- --------------------------------------------------------

--
-- Table structure for table `operationdetails`
--

CREATE TABLE `operationdetails` (
  `operationTypeId` int(100) NOT NULL,
  `operationTypeName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `operationdetails`
--

INSERT INTO `operationdetails` (`operationTypeId`, `operationTypeName`) VALUES
(1, 'deposit'),
(2, 'withdrawal'),
(3, 'loan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accountoperations`
--
ALTER TABLE `accountoperations`
  ADD PRIMARY KEY (`objectId`),
  ADD KEY `operationType` (`operationTypeId`);

--
-- Indexes for table `operationdetails`
--
ALTER TABLE `operationdetails`
  ADD PRIMARY KEY (`operationTypeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accountoperations`
--
ALTER TABLE `accountoperations`
  MODIFY `objectId` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `operationdetails`
--
ALTER TABLE `operationdetails`
  MODIFY `operationTypeId` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accountoperations`
--
ALTER TABLE `accountoperations`
  ADD CONSTRAINT `accountoperations_ibfk_1` FOREIGN KEY (`operationTypeId`) REFERENCES `operationdetails` (`operationTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
