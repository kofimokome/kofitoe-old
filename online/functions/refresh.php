<?php
require_once('../includes/header.php');
header("Cache-Control: no-cache");
header("Pragma: no-cache");
//print "<message>hi</message>";

$id=$_SESSION['sess_id'];
$table=$_SESSION['table'];
$player=$_SESSION['player_id'];

$last_seen;
$opponent=$_SESSION['opponent'];
$query = "select last_seen from players where id={$opponent}";
$result = mysqli_query($con, $query);
if (!$result) {
    echo 'connection failed' . mysqli_error($con);
    die();
}
while ($row = $result->fetch_assoc()) {
    $last_seen=$row['last_seen'];
}

if(time()-strtotime($last_seen)<60){
    setcookie("last_seen", "online", time() + (86400 * 30),"/");
}
else {
   //date('j F Y',$last_seen);
    setcookie("last_seen",strtotime($last_seen) , time() + (86400 * 30),"/");
}


$query="select moves,active,player from sessions where id={$id}";
$result = mysqli_query($con, $query);
if(!$result){
    echo 'Query failed'.mysqli_error($con);
    die();
}

while ($row = $result->fetch_assoc()) {
    unset($_COOKIE['moves']);
    setcookie("moves", $row['moves'], time() + (86400 * 30),"/");
    //setcookie("moves", $row['moves'], time() + (86400 * 30),"/Tic_Tac_Toe/online");
    setcookie("active", $row['active'], time() + (86400 * 30), "/");
    setcookie("cplayer", $row['player'], time() + (86400 * 30), "/");
}

$query = "select * from {$table} where row=1";
$result = mysqli_query($con, $query);
if(!$result){
    echo 'Query failed'.mysqli_error($con);
    die();
}

while ($row = $result->fetch_assoc()) {
    setcookie("A0", $row['col_1'], time() + (86400 * 30), "/");
    setcookie("A1", $row['col_2'], time() + (86400 * 30), "/");
    setcookie("A2", $row['col_3'], time() + (86400 * 30), "/");
}

$query = "select * from {$table} where row=2";
$result = mysqli_query($con, $query);
if(!$result){
    echo 'Query failed'.mysqli_error($con);
    die();
}

while ($row = $result->fetch_assoc()) {
    setcookie("A3", $row['col_1'], time() + (86400 * 30), "/");
    setcookie("A4", $row['col_2'], time() + (86400 * 30), "/");
    setcookie("A5", $row['col_3'], time() + (86400 * 30), "/");
}

$query = "select * from {$table} where row=3";
$result = mysqli_query($con, $query);
if(!$result){
    echo 'Query failed'.mysqli_error($con);
    die();
}
while ($row = $result->fetch_assoc()) {
    setcookie("A6", $row['col_1'], time() + (86400 * 30), "/");  /* expire in 1 hour */
    setcookie("A7", $row['col_2'], time() + (86400 * 30), "/");
    setcookie("A8", $row['col_3'], time() + (86400 * 30), "/");
}
$date=date('Y-m-d H:i:s',time());
$query = "update players set last_seen='{$date}' where id={$player};";
$result = mysqli_query($con, $query);
if(!$result){
    echo 'Query failed'.mysqli_error($con);
    die();
}

?>
