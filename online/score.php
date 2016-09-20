<?php
require_once('includes/header.php');
header("Cache-Control: no-cache");
header("Pragma: no-cache");
//$con=mysqli_connect($server,$user,$password);
$winner = $_COOKIE['id'];
if ($winner == 1) {
    $query = "insert into high_score values(null,'{$_SESSION['p1']}',{$_COOKIE['score']})";
} else {
    $query = "insert into high_score values(null,'{$_SESSION['p2']}',{$_COOKIE['score']})";
}

$result = mysqli_query($con, $query);
if (!$result) {
    echo '<br>query failed' . mysqli_error($con);
    die();
}
echo '<table> <tr><td>Name</td><td>Score</td></tr>';
$query = "select name,score from high_score where score<20 order by score asc;";
$result = mysqli_query($con, $query);
$i = 0;
while ($row = $result->fetch_assoc()) {
    if ($i < 10) {
        echo "<tr> <td>{$row['name']}</td><td> {$row['score']}</td></tr>";
        $i++;
        # code...
    }
}
echo '</table>';

?>
