<?php
require_once('../includes/header.php');
$session = $_SESSION['sess_id'];

$name = '';
$name1 = '';
//  --      Getting the oppnent's user id       --  //
$query = "select user_id from players where id={$_SESSION['opponent']}";
$result = mysqli_query($con, $query);
if (!$result) {
    echo 'connectin failed' . mysqli_error($con);
}
while ($row = $result->fetch_assoc()) {
    $query = "select first_name from users where id={$row['user_id']}";
    $result1 = mysqli_query($con, $query);
    if (!$result1) {
        echo 'connectin failed' . mysqli_error($con);
    }
    while ($row1 = $result1->fetch_assoc()) {
        $name1 = $row1['first_name'];
    }
}
//  --      Getting the oppnent's user id       --  //


//  --      Getting the current user's id       --  //

$query = "select first_name from users where id={$_SESSION['login']}";
$result = mysqli_query($con, $query);
if (!$result) {
    echo 'connectin failed' . mysqli_error($con);
}
while ($row = $result->fetch_assoc()) {
    $name = $row['first_name'];
}

//  --      Getting the current user's id       --  //

$query = "select player,message from chats where session_id={$session} order by id desc";
$result = mysqli_query($con, $query);
if (!$result) {
    echo 'connectin failed' . mysqli_error($con);
} else {
    $count = mysqli_affected_rows($con);
    $i = 0;
    while ($row = $result->fetch_assoc()) {
        if ($i < 18) {
            if ($row['player'] == $_SESSION['opponent_status'])
                echo " <p>{$name1}:  {$row['message']}</p>";
            else
                echo " <p>{$name}:  {$row['message']}</p>";
            $i++;
            # code...
        }
    }
}
