<?php
require_once('../includes/header.php');
unset($_SESSION['game']);
unset($_SESSION['sess_id']);
header('Location: /Tic_Tac_Toe/online/');
?>
