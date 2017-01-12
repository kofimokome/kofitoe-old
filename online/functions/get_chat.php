<?php
require_once('../includes/header.php');
$session=$_SESSION['sess_id'];
$query="select player,message from chats where session_id={$session} order by id desc";
$result=mysqli_query($con, $query);
if(!$result){
    echo 'connectin failed'.mysqli_error($con);
}
else {
    $i = 0;
    while ($row = $result->fetch_assoc()) {
        if ($i < 8) {
            echo " <p>Player {$row['player']}:  {$row['message']}</p>";
            $i++;
            # code...
        }
    }
}