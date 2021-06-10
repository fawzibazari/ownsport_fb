-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 10 juin 2021 à 21:19
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ownsport`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `nom`, `prenom`, `email`, `password`) VALUES
(1, 'fawzi', 'fouzizi', 'tt@tt.ss', '$2b$10$4eXY.Rd50isnT0e0dhG9SO7KF.IyQvd9iKms1IH6gOBPcMRkpE.DO'),
(2, '', '', '', '$2b$10$84Pq/Si2ESgut9Zl.6Ss/.s4SfFSMaIOovWRUcwnNO3X79dbEhyhu'),
(3, 'fawzi', 'prenom', 'aa@aa.aa', '$2b$10$eJKE7mBEaCIQDyarYgQwUeT2.u7AHP3Xcs1zdvQC9bSHQX123fDZe'),
(5, 'fawzi', 'prenom', 'aa@aa.aa', '$2b$10$yYqeW7Xp9mf31k419j3vuOJ9qJnolLE5mKTSuBC1PULLWiZ55ZRnK'),
(6, '', 'prenom', 'aa@aa.aa', '$2b$10$nf0uAQHxOuLaXGUrkgVmc.uJ0aTdJXWrfodLmz8f/F39eLCUFVWGO'),
(7, 'fawzi', 'llll', 'llll@ll.l', '$2b$10$wL6KEYRHBNKQurPI7laI9uBBWFPFHPzbLefNyz1Gt2/SWo1Lu..ay'),
(8, 'aa', 'aa', 'aa@aa', '$2b$10$kMuPnyKCxykIPo1eQmvv7.z74vaOibh6J.xotQgSSwb66Cmd12jmm');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
