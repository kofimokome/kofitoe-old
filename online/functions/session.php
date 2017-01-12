<?php
require_once('../includes/header.php');

if ($_POST['type'] == 'create') {
    $id = 'a';
    $player = $_POST['name'];
    if($player==''){
        die('Enter a name');
    }
    $name = 'game';
    $pass = $_POST['password'];
    $query = "insert into sessions values(null,'{$name}','{$pass}',1,0,0)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    $query = "select id from sessions where name='{$name}'";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    while ($row = $result->fetch_assoc()) {
        $id = $row['id'];
    }
    $name = $name . $id;
    $query = "update sessions set name='{$name}' where id={$id}";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }

    $query = "create table if not exists {$name}(row integer ,col_1 varchar(1),col_2 varchar(10),col_3 varchar(1))";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed table' . mysqli_error($con);
        die();
    }
    $query = "ALTER TABLE {$name} ADD PRIMARY KEY(row)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }

    $query = "insert into {$name}(row) values(1)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    $query = "insert into {$name}(row) values(2)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    $query = "insert into {$name}(row) values(3)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }
    $query = "update {$name} set col_1='e',col_2='e',col_3='e'";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }

    $query = "insert into players values(null,{$id},'{$player}',1)";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
        die();
    }

    $_SESSION['sess_id'] = $id;
    $_SESSION['table'] = $name;
    setcookie("current_player", 1, time() + (86400 * 30), "/");
    echo " your session has been created Give the information to your friend. <br> Session name: {$name} <br>Session key:{$pass} <br> <a href='../../online'>Start Game</a>";

}
if ($_POST['type'] == 'join') {
    $id = 'a';
    $name = $_POST['name'];
    if($name==''){
        die("enter a name");
    }
    $pass = $_POST['password'];
    $query = "select id from sessions where name='{$name}'";
    $result = mysqli_query($con, $query);
    if (!$result) {
        die('connection failed n');
    }
    while ($row = $result->fetch_assoc()) {
        $id = $row['id'];
    }

    if ($id > 0) {
        $query = "select pass from sessions where id={$id}";
        $result = mysqli_query($con, $query);
        if (!$result) {
            echo 'connection failed p' . mysqli_error($con);
            die();
        }
        while ($row = $result->fetch_assoc()) {
            if ($pass == $row['pass']) {
                $_SESSION['game'] = $id;
                $_SESSION['table'] = $name;
                header('Location: /Tic_Tac_Toe/online/');
            } else {
                die('password incorrect');
            }

        }
    } else {
        die("session not found");
    }


}
if ($_POST['type'] == 'start') {
    $id = 'a';
    $active = 'a';
    $name = $_POST['name'];
    if($name==''){
        die("enter a name");
    }
    $query = "select id from players where name='{$name}' and session_id={$_SESSION['game']}";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
    }
    while ($row = $result->fetch_assoc()) {
        $id = $row['id'];
    }

    $query = "select active from sessions where id='{$_SESSION['game']}'";
    $result = mysqli_query($con, $query);
    if (!$result) {
        echo 'connection failed' . mysqli_error($con);
    }
    while ($row = $result->fetch_assoc()) {
        $active = $row['active'];
    }

    if ($active == 0) {
        if ($id > 0) {
            $_SESSION['sess_id'] = $_SESSION['game'];
            header('Location: /Tic_Tac_Toe/online/');
        } else {
            $query = "insert into players values(null,{$_SESSION['game']},'{$name}',2,now())";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            $query = "update sessions set active=1 where id={$_SESSION['game']}";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            $id = 'a';
            $query = "select id from players where name='{$name}' and session_id={$_SESSION['game']} ";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            while ($row = $result->fetch_assoc()) {
                $id = $row['id'];
            }
            $query = "select status from players where id={$id} ";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            while ($row = $result->fetch_assoc()) {
                setcookie("current_player", $row['status'], time() + (86400 * 30), "/");
            }

            $_SESSION['sess_id'] = $_SESSION['game'];
            header('Location: /Tic_Tac_Toe/online/');
        }
    }

    if ($active == 1) {
        $id = 'a';
        $opponent;
        $query = "select id from players where name='{$name}' and session_id={$_SESSION['game']}";
        $result = mysqli_query($con, $query);
        if (!$result) {
            echo 'connection failed' . mysqli_error($con);
            die();
        }
        while ($row = $result->fetch_assoc()) {
            $id = $row['id'];
        }
        if ($id > 0) {
            $query = "select status from players where id={$id} ";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            while ($row = $result->fetch_assoc()) {
                setcookie("current_player", $row['status'], time() + (86400 * 30), "/");
                $opponent=$row['status'];
            }
            if($opponent==1)
                $opponent=2;
            else
                $opponent=1;

            $_SESSION['opponent_status']=$opponent;

            $query = "select id from players where status='{$opponent}' and session_id={$_SESSION['game']}";
            $result = mysqli_query($con, $query);
            if (!$result) {
                echo 'connection failed' . mysqli_error($con);
                die();
            }
            while ($row = $result->fetch_assoc()) {
                $opponent=$row['id'];
            }
            $_SESSION['sess_id'] = $_SESSION['game'];
            $_SESSION['player_id']=$id;
            $_SESSION['opponent']=$opponent;
            header('Location: /Tic_Tac_Toe/online/');
        } else {
            echo 'Session is already full can not add a new user. Please enter your user name for this session again';
        }
    }

}
?>
