<?php
require_once('../includes/header.php');
unset($_SESSION['game']);
unset($_SESSION['sess_id']);
echo "<script>window.location='../';</script>";
?>
