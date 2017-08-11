var wins = 0, win_player = 0, session_player, cplayer = 0, smove = 0, i, cell1 = 10, cell2 = 10, cmove, winner = 0, score1 = 3, score2 = 3;
var active;
var pass = 1; //Gives authority to an xhr request  1=OK ,0=wait
/*Variable explanation:
 cplayer stores the number of the current player
 smove determines the maximum number of moves allowed
*/

if (!navigator.cookieEnabled) {
    window.location='nocookie.html';
}

function timeConverter(unixtime) {
    var a = new Date(unixtime * 1000);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var day = days[a.getDay()];
    var period_of_the_day = " am";
    if (hour > 12) {
        hour = hour - 12;
        period_of_the_day = " pm";
    }
    var time = day + ", " + date + " " + month + " " + year + " at " + hour + ":" + min + period_of_the_day;// + " " + hour + ":" + min + ":" + sec;

    return time;
}


var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP.3.0");
var synch;
document.cookie = "synch=" + 1 + ";expires=24*60*60;path=/";
delCookie("moves");
delCookie("cplayer");
document.cookie = "win=" + win_player + ";expires=24*60*60";
function init() {
    /*while(pass==0){

     }*/
    if (xhr) {
        pass = 0;
        xhr.open("GET", "functions/refresh.php", true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            handleResponse(xhr)
        }

    }

}


function lastSeen() {
    active = getCookie("active");
    if (active == 1) {
        if (!isNaN(getCookie("last_seen")))
            document.getElementById("user_status").innerHTML = "last seen " + timeConverter(getCookie("last_seen")); //Math.round(Date.now() / 1000) + " : " + getCookie("last_seen");
        else
            document.getElementById("user_status").innerHTML = getCookie("last_seen");
    }
}

function sendChatRequest() {
    var output = document.getElementById('score');
    /*while(pass==0){
     }*/
    if (xhr) {
        pass = 0;
        document.getElementById('chat').innerHTML = "Chat is disconnected...";
        xhr.open("GET", "functions/get_chat.php", true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            handleChatResponse(xhr)
        }

    }

}

function handleChatResponse(xhr) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById('chat').innerHTML = xhr.responseText;
        pass = 1;
    }

}

function reinit() {
    if (A[0] != 1 && A[0] != 2) {
        A[0] = "e";
        document.cookie = "A0=" + A[0] + ";expires=24*60*60;path=/";
    }
    if (A[1] != 1 && A[1] != 2) {
        A[1] = "e";
        document.cookie = "A1=" + A[1] + ";expires=24*60*60;path=/";
    }
    if (A[2] != 1 && A[2] != 2) {
        A[2] = "e";
        document.cookie = "A2=" + A[2] + ";expires=24*60*60;path=/";
    }
    if (A[3] != 1 && A[3] != 2) {
        A[3] = "e";
        document.cookie = "A3=" + A[3] + ";expires=24*60*60;path=/";
    }
    if (A[4] != 1 && A[4] != 2) {
        A[4] = "e";
        document.cookie = "A4=" + A[4] + ";expires=24*60*60;path=/";
    }
    if (A[5] != 1 && A[5] != 2) {
        A[5] = "e";
        document.cookie = "A5=" + A[5] + ";expires=24*60*60;path=/";
    }
    if (A[6] != 1 && A[6] != 2) {
        A[6] = "e";
        document.cookie = "A6=" + A[6] + ";expires=24*60*60;path=/";
    }
    if (A[7] != 1 && A[7] != 2) {
        A[7] = "e";
        document.cookie = "A7=" + A[7] + ";expires=24*60*60;path=/";
    }
    if (A[8] != 1 && A[8] != 2) {
        A[8] = "e";
        document.cookie = "A8=" + A[8] + ";expires=24*60*60;path=/";
    }

    sync_amoves();
}

function sync_moves() {
    /* while(pass==0){

     }*/
    if (xhr) {
        pass = 0;
        xhr.open("GET", "functions/moves.php", true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            handleResponse(xhr)
        }

    }

}

function sync_cells() {
    /* while(pass==0){

     }*/
    if (xhr) {
        pass = 0;
        xhr.open("GET", "functions/cells.php", true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            handleResponse(xhr)
        }

    }

}


function sync_amoves() {
    /*while(pass==0){

     }*/
    if (xhr) {
        pass = 0;
        xhr.open("GET", "functions/amove.php", true);
        xhr.send(null);
        xhr.onreadystatechange = function () {
            handleResponse(xhr)
        }

    }

}

function handleResponse(xhr) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        refresh();
        sync();
        pass = 1;
    }

}


var info_msg, alert_msg, event_msg;
info_msg = 'Click on a cell to start playing';
/*This function initialises the array used to store player moves*/
var A = new Array(9);

init();
document.cookie = "change_player=1;expires=24*60*60;path=/";
sync_cells();
document.cookie = "change_player=0;expires=24*60*60;path=/";
win(1);
win(2);

function getinit() {
    synch = getCookie("synch");
    if (pass == 1 && synch == 1) {
        init();
    }
}
setInterval("getinit();lastSeen();", 300);
setInterval("if(pass==1){sendChatRequest()};", 2000);

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return " cookie not found";
}

function delCookie(cookieName) {
    document.cookie = cookieName + "="
        + "; expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

function refresh() {
    var cook;
    cook = getCookie("A0");
    A[0] = cook;
    cook = getCookie("A1");
    A[1] = cook;
    cook = getCookie("A2");
    A[2] = cook;
    cook = getCookie("A3");
    A[3] = cook;
    cook = getCookie("A4");
    A[4] = cook;
    cook = getCookie("A5");
    A[5] = cook;
    cook = getCookie("A6");
    A[6] = cook;
    cook = getCookie("A7");
    A[7] = cook;
    cook = getCookie("A8");
    A[8] = cook;

    smove = getCookie("moves");
    cplayer = getCookie("cplayer");
    win_player = getCookie("win");
    session_player = getCookie("current_player");

}
/* HERE ARE THE FUNCTIONS FOR EACH PLAYER

 // C12 means row 1 column 2

 */
function C_11(player) {
    /*This code is for the first player*/
    if (player == session_player) {
        if (player == 1) {
            if (smove < 6) {
                if (A[0] == 'e') {
                    A[0] = 1;
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 0;expires=24*60*60";
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    sync_moves();
                    document.game.C11.style = "background:red;";
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
                if (com == 1) {
                    info_msg = 'Computer Is Thinking';
                    infos.style.display = 'block';
                    setTimeout('auto_play();', 1000);
                }
            }
            else {
                smove = 7;
                document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
            }
        }
        /*Code for the second player*/
        else {
            if (smove < 6) {
                if (A[0] == 'e') {
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 0;expires=24*60*60";
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    sync_moves();
                    document.game.C11.style = "background:blue";
                    A[0] = 2;
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }

            }
            else
                smove = 7;
        }
    }
}


function C_12(player) {
    if (player == session_player) {
        if (player == 1) {
            if (smove < 6) {
                if (A[1] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C12.style = "background:red;";
                    A[1] = 1;
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 1;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
                if (com == 1) {
                    info_msg = 'Computer Is Thinking';
                    infos.style.display = 'block';
                    setTimeout('auto_play();', 1000);
                }
            }
            else
                smove = 7;
        }
        else {
            if (smove < 6) {

                if (A[1] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C12.style = "background:blue";
                    A[1] = 2;
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60;";
                    document.cookie = "cell= 1;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }

            }
            else
                smove = 7;
        }
    }
}

function C_13(player) {
    if (player == session_player) {
        if (player == 1) {
            if (smove < 6) {
                if (A[2] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C13.style = "background:red;";
                    A[2] = 1;
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 2;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
                if (com == 1) {
                    info_msg = 'Computer Is Thinking';
                    infos.style.display = 'block';
                    setTimeout('auto_play();', 1000);
                }
            }
            else
                smove = 7;
        }
        else {
            if (smove < 6) {

                if (A[2] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C13.style = "background:blue";
                    A[2] = 2;
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 2;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
            }
            else
                smove = 7;
        }
    }
}

function C_21(player) {
    if (player == session_player) {
        if (player == 1) {
            if (smove < 6) {
                if (A[3] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C21.style = "background:red;";
                    A[3] = 1;
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 3;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
                if (com == 1) {
                    info_msg = 'Computer Is Thinking';
                    infos.style.display = 'block';
                    setTimeout('auto_play();', 1000);
                }
            }
            else
                smove = 7;
        }
        else {
            if (smove < 6) {

                if (A[3] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C21.style = "background:blue";
                    A[3] = 2;
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 3;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
            }
            else
                smove = 7;
        }
    }
}

function C_22(player) {
    if (player == session_player) {
        if (player == 1) {
            if (smove < 6) {
                if (A[4] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C22.style = "background:red;";
                    A[4] = 1;
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 4;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
                if (com == 1) {
                    info_msg = 'Computer Is Thinking';
                    infos.style.display = 'block';
                    setTimeout('auto_play();', 1000);
                }
            }
            else
                smove = 7;
        }
        else {
            if (smove < 6) {

                if (A[4] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C22.style = "background:blue";
                    A[4] = 2;
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 4;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
            }
            else
                smove = 7;
        }
    }
}

function C_23(player) {
    if (player == session_player) {
        if (player == 1) {
            if (smove < 6) {
                if (A[5] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C23.style = "background:red;";
                    A[5] = 1;
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 5;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
                if (com == 1) {
                    info_msg = 'Computer Is Thinking';
                    infos.style.display = 'block';
                    setTimeout('auto_play();', 1000);
                }
            }
            else
                smove = 7;
        }
        else {
            if (smove < 6) {

                if (A[5] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C23.style = "background:blue";
                    A[5] = 2;
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 5;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
            }
            else
                smove = 7;
        }
    }
}

function C_31(player) {
    if (player == session_player) {
        if (player == 1) {
            if (smove < 6) {
                if (A[6] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C31.style = "background:red;";
                    A[6] = 1;
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 6;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
                if (com == 1) {
                    info_msg = 'Computer Is Thinking';
                    infos.style.display = 'block';
                    setTimeout('auto_play();', 1000);
                }
            }
            else
                smove = 7;
        }
        else {
            if (smove < 6) {

                if (A[6] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C31.style = "background:blue";
                    A[6] = 2;
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 6;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
            }
            else
                smove = 7;
        }
    }
}

function C_32(player) {
    if (player == session_player) {
        if (player == 1) {
            if (smove < 6) {
                if (A[7] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C32.style = "background:red;";
                    A[7] = 1;
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 7;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
                if (com == 1) {
                    info_msg = 'Computer Is Thinking';
                    infos.style.display = 'block';
                    setTimeout('auto_play();', 1000);
                }
            }
            else
                smove = 7;
        }
        else {
            if (smove < 6) {

                if (A[7] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C32.style = "background:blue";
                    A[7] = 2;
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 7s;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
            }
            else
                smove = 7;
        }
    }
}

function C_33(player) {
    if (player == session_player) {
        if (player == 1) {
            if (smove < 6) {

                if (A[8] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C33.style = "background:red;";
                    A[8] = 1;
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 8;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
                if (com == 1) {
                    info_msg = 'Computer Is Thinking';
                    infos.style.display = 'block';
                    setTimeout('auto_play();', 1000);
                }
            }
            else
                smove = 7;
        }
        else {
            if (smove < 6) {

                if (A[8] == 'e') {
                    smove++;
                    document.cookie = "moves=" + smove + ";expires=24*60*60;path=/";
                    document.game.C33.style = "background:blue";
                    A[8] = 2;
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    document.cookie = "cell= 8;expires=24*60*60";
                    sync_moves();
                }
                else {
                    alert_msg = 'not allowed';
                    alerts.style.display = 'block';
                }
            }
            else
                smove = 7;
        }
    }
}

/*FUNCTIONS END HERE*/


/*This function shows the available moves for a player*/
function amove(position) {
    if (cplayer == session_player) {
        // synch = 0;
        document.cookie = "synch=" + 0 + ";expires=24*60*60;path=/";
        switch (position) {
            case 0:
                reinit();


                if (A[1] == "e") {
                    document.game.C12.style = "background:pink;";
                    A[1] = 'a';
                    document.cookie = "A1=" + A[1] + ";expires=24*60*60;path=/";

                    if (A[2] == "e") {
                        A[2] = 'a';
                        document.game.C13.style = "background:pink;";
                        document.cookie = "A2=" + A[2] + ";expires=24*60*60;path=/";
                    }
                }
                if (A[3] == "e") {
                    document.game.C21.style = "background:pink;";
                    A[3] = 'a';
                    document.cookie = "A3=" + A[3] + ";expires=24*60*60;path=/";
                    if (A[6] == "e") {
                        document.game.C31.style = "background:pink;";
                        A[6] = 'a';
                        document.cookie = "A6=" + A[6] + ";expires=24*60*60;path=/";
                    }
                }
                if (A[4] == "e") {
                    document.game.C22.style = "background:pink;";
                    A[4] = 'a';
                    document.cookie = "A4=" + A[4] + ";expires=24*60*60;path=/";
                    if (A[8] == "e") {
                        document.game.C22.style = "background:pink;";
                        A[8] = 'a';
                        document.cookie = "A8=" + A[8] + ";expires=24*60*60;path=/";
                    }
                }

                sync_amoves();
                break;

            case 1:
                reinit();

                if (A[0] == "e") {
                    document.game.C11.style = "background:pink;";
                    A[0] = 'a';
                    document.cookie = "A0=" + A[0] + ";expires=24*60*60;path=/";
                }
                if (A[2] == "e") {
                    document.game.C13.style = "background:pink;";
                    A[2] = 'a';
                    document.cookie = "A2=" + A[2] + ";expires=24*60*60;path=/";
                }
                if (A[4] == "e") {
                    document.game.C22.style = "background:pink;";
                    A[4] = 'a';
                    document.cookie = "A4=" + A[4] + ";expires=24*60*60;path=/";
                    if (A[7] == "e") {
                        document.game.C32.style = "background:pink;";
                        A[7] = 'a';
                        document.cookie = "A7=" + A[7] + ";expires=24*60*60;path=/";
                    }
                }

                sync_amoves();
                break;

            case 2:
                reinit();

                if (A[1] == "e") {
                    document.game.C12.style = "background:pink;";
                    A[1] = 'a';
                    document.cookie = "A1=" + A[1] + ";expires=24*60*60;path=/";
                    if (A[0] == "e") {
                        document.game.C11.style = "background:pink;";
                        A[0] = 'a';
                        document.cookie = "A0=" + A[0] + ";expires=24*60*60;path=/";
                    }
                }
                if (A[5] == "e") {
                    document.game.C23.style = "background:pink;";
                    A[5] = 'a';
                    document.cookie = "A5=" + A[5] + ";expires=24*60*60;path=/";
                    if (A[8] == "e") {
                        document.game.C33.style = "background:pink;";
                        A[8] = 'a';
                        document.cookie = "A8=" + A[8] + ";expires=24*60*60;path=/";
                    }
                }
                if (A[4] == "e") {
                    document.game.C22.style = "background:pink;";
                    A[4] = 'a';
                    document.cookie = "A4=" + A[4] + ";expires=24*60*60;path=/";
                    if (A[6] == "e") {
                        document.game.C31.style = "background:pink;";
                        A[6] = 'a';
                        document.cookie = "A6=" + A[6] + ";expires=24*60*60;path=/";
                    }
                }


                sync_amoves();
                break;

            case 3:
                reinit();

                if (A[0] == "e") {
                    document.game.C11.style = "background:pink;";
                    A[0] = 'a';
                    document.cookie = "A0=" + A[0] + ";expires=24*60*60;path=/";
                }
                if (A[6] == "e") {
                    document.game.C31.style = "background:pink;";
                    A[6] = 'a';
                    document.cookie = "A6=" + A[6] + ";expires=24*60*60;path=/";
                }
                if (A[4] == "e") {
                    document.game.C22.style = "background:pink;";
                    A[4] = 'a';
                    document.cookie = "A4=" + A[4] + ";expires=24*60*60;path=/";
                    if (A[5] == "e") {
                        A[5] = 'a';
                        document.game.C23.style = "background:pink;";
                        document.cookie = "A5=" + A[5] + ";expires=24*60*60;path=/";
                    }
                }

                sync_amoves();
                break;

            case 4:
                reinit();
                if (A[1] == "e") {
                    document.game.C12.style = "background:pink;";
                    A[1] = 'a';
                    document.cookie = "A1=" + A[1] + ";expires=24*60*60;path=/";
                }
                if (A[7] == "e") {
                    document.game.C32.style = "background:pink;";
                    A[7] = 'a';
                    document.cookie = "A7=" + A[7] + ";expires=24*60*60;path=/";
                }
                if (A[3] == "e") {
                    document.game.C21.style = "background:pink;";
                    A[3] = 'a';
                    document.cookie = "A3=" + A[3] + ";expires=24*60*60;path=/";
                }
                if (A[5] == "e") {
                    document.game.C23.style = "background:pink;";
                    A[5] = 'a';
                    document.cookie = "A5=" + A[5] + ";expires=24*60*60;path=/";
                }

                if (A[0] == "e") {
                    document.game.C11.style = "background:pink;";
                    A[0] = 'a';
                    document.cookie = "A0=" + A[0] + ";expires=24*60*60;path=/";
                }
                if (A[2] == "e") {
                    document.game.C13.style = "background:pink;";
                    A[2] = 'a';
                    document.cookie = "A2=" + A[2] + ";expires=24*60*60;path=/";
                }
                if (A[6] == "e") {
                    document.game.C31.style = "background:pink;";
                    A[6] = 'a';
                    document.cookie = "A6=" + A[6] + ";expires=24*60*60;path=/";
                }
                if (A[8] == "e") {
                    document.game.C33.style = "background:pink;";
                    A[8] = 'a';
                    document.cookie = "A8=" + A[8] + ";expires=24*60*60;path=/";
                }

                sync_amoves();
                break;

            case 5:
                reinit();

                if (A[2] == "e") {
                    document.game.C13.style = "background:pink;";
                    A[2] = 'a';
                    document.cookie = "A2=" + A[2] + ";expires=24*60*60;path=/";
                }
                if (A[8] == "e") {
                    document.game.C33.style = "background:pink;";
                    A[8] = 'a';
                    document.cookie = "A8=" + A[8] + ";expires=24*60*60;path=/";
                }
                if (A[4] == "e") {
                    document.game.C22.style = "background:pink;";
                    A[4] = 'a';
                    document.cookie = "A4=" + A[4] + ";expires=24*60*60;path=/";
                    if (A[3] == "e") {
                        document.game.C21.style = "background:pink;";
                        A[3] = 'a';
                        document.cookie = "A3=" + A[3] + ";expires=24*60*60;path=/";
                    }
                }

                sync_amoves();
                break;

            case 6:
                reinit();

                if (A[7] == "e") {
                    document.game.C32.style = "background:pink;";
                    A[7] = 'a';
                    document.cookie = "A7=" + A[7] + ";expires=24*60*60;path=/";
                    if (A[8] == "e") {
                        document.game.C33.style = "background:pink;";
                        A[8] = 'a';
                        document.cookie = "A8=" + A[8] + ";expires=24*60*60;path=/";
                    }
                }
                if (A[3] == "e") {
                    document.game.C21.style = "background:pink;";
                    A[3] = 'a';
                    document.cookie = "A3=" + A[3] + ";expires=24*60*60;path=/";
                    if (A[0] == "e") {
                        document.game.C11.style = "background:pink;";
                        A[0] = 'a';
                        document.cookie = "A0=" + A[0] + ";expires=24*60*60;path=/";
                    }
                }
                if (A[4] == "e") {
                    document.game.C22.style = "background:pink;";
                    A[4] = 'a';
                    document.cookie = "A4=" + A[4] + ";expires=24*60*60;path=/";
                    if (A[2] == "e") {
                        document.game.C13.style = "background:pink;";
                        A[2] = 'a';
                        document.cookie = "A2=" + A[2] + ";expires=24*60*60;path=/";
                    }
                }


                sync_amoves();
                break;

            case 7:
                reinit();


                if (A[6] == "e") {
                    document.game.C31.style = "background:pink;";
                    A[6] = 'a';
                    document.cookie = "A6=" + A[6] + ";expires=24*60*60;path=/";
                }
                if (A[8] == "e") {
                    document.game.C33.style = "background:pink;";
                    A[8] = 'a';
                    document.cookie = "A8=" + A[8] + ";expires=24*60*60;path=/";
                }
                if (A[4] == "e") {
                    document.game.C22.style = "background:pink;";
                    A[4] = 'a';
                    document.cookie = "A4=" + A[4] + ";expires=24*60*60;path=/";
                    if (A[1] == "e") {
                        document.game.C12.style = "background:pink;";
                        A[1] = 'a';
                        document.cookie = "A1=" + A[1] + ";expires=24*60*60;path=/";
                    }
                }


                sync_amoves();
                break;

            case 8:
                reinit();

                if (A[7] == "e") {
                    document.game.C32.style = "background:pink;";
                    A[7] = 'a';
                    document.cookie = "A7=" + A[7] + ";expires=24*60*60;path=/";
                    if (A[6] == "e") {
                        document.game.C31.style = "background:pink;";
                        A[6] = 'a';
                        document.cookie = "A6=" + A[6] + ";expires=24*60*60;path=/";
                    }
                }
                if (A[5] == "e") {
                    document.game.C23.style = "background:pink;";
                    A[5] = 'a';
                    document.cookie = "A5=" + A[5] + ";expires=24*60*60;path=/";
                    if (A[2] == "e") {
                        document.game.C13.style = "background:pink;";
                        A[2] = 'a';
                        document.cookie = "A2=" + A[2] + ";expires=24*60*60;path=/";
                    }
                }
                if (A[4] == "e") {
                    document.game.C22.style = "background:pink;";
                    A[4] = 'a';
                    document.cookie = "A4=" + A[4] + ";expires=24*60*60;path=/";
                    if (A[0] == "e") {
                        document.game.C11.style = "background:pink;";
                        A[0] = 'a';
                        document.cookie = "A0=" + A[0] + ";expires=24*60*60;path=/";
                    }
                }


                sync_amoves();
                break;
        }
    }
}

/* FUNCTION amove() ENDS HERE*/

/*Yhis functions resets the color of the board after calling amove()*/
function reset() {
    //init();
    if (A[0] == "e") {
        document.game.C11.style = "background:white;";
    }
    if (A[1] == "e") {
        document.game.C12.style = "background:white;";
    }
    if (A[2] == "e") {
        document.game.C13.style = "background:white;";
    }
    if (A[3] == "e") {
        document.game.C21.style = "background:white;";
    }
    if (A[4] == "e") {
        document.game.C22.style = "background:white;";
    }
    if (A[5] == "e") {
        document.game.C23.style = "background:white;";
    }
    if (A[6] == "e") {
        document.game.C31.style = "background:white;";
    }
    if (A[7] == "e") {
        document.game.C32.style = "background:white;";
    }
    if (A[8] == "e") {
        document.game.C33.style = "background:white;";
    }
}

/* FUNCTION reset() ENDS HERE*/

/*This function moves a seed to another location*/

function move(from, to) {
    //for C11
    if (from == 0) {
        amove(0);
        if (to == from) {
            info_msg = 'Move Cancelled';
            infos.style.display = 'block';
            document.cookie = "synch=1;expires=24*60*60;path=/";
        }

        if (to == 1) {
            if (A[1] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';

                    //delCookie("A1");
                    //delCookie("A0");

                    document.cookie = "A1=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;
                    // alert(getCookie("A1"));
                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A1=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                    score2++;
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A3=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    document.game.C21.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A3=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A0=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }
    }


    // For cell C12
    if (from == 1) {
        amove(1);
        if (to == from) {
            info_msg = 'Move Cancelled';
            infos.style.display = 'block';
            document.cookie = "synch=1;expires=24*60*60;path=/";
        }

        if (to == 0) {
            if (A[0] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A1=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    document.game.C11.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A1=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A1=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    document.game.C13.style = "background:blue;";
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A1=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }


        if (to == 4) {
            if (A[4] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A1=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A1=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }


        if (to == 7) {
            if (A[7] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A7=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A1=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A7=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A1=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

    }

    //for C13
    if (from == 2) {
        amove(2);
        if (to == from) {
            info_msg = 'Move Cancelled';
            infos.style.display = 'block';
            document.cookie = "synch=1;expires=24*60*60;path=/";
        }

        if (to == 1) {
            if (A[1] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A1=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A1=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 0) {
            if (A[0] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }


        if (to == 4) {
            if (A[4] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[4] = 2;
                    A[2] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {

                if (cplayer == 1) {

                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A5=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A5=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {

                if (cplayer == 1) {

                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[6] = 2;
                    A[2] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {

                if (cplayer == 1) {

                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A2=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }
    }

    //for C21
    if (from == 3) {
        amove(3);
        if (to == from) {
            info_msg = 'Move Cancelled';
            infos.style.display = 'block';
            document.cookie = "synch=1;expires=24*60*60;path=/";
        }

        if (to == 0) {
            if (A[0] == 'a') {

                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A3=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A3=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }


        if (to == 4) {
            if (A[4] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A3=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A3=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A5=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A3=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A5=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A3=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A3=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A3=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }


    }

    // for C22
    if (from == 4) {
        amove(4);
        if (to == from) {
            info_msg = 'Move Cancelled';
            infos.style.display = 'block';
            document.cookie = "synch=1;expires=24*60*60;path=/";
        }

        if (to == 1) {
            if (A[1] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A1=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A1=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A3=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A3=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 0) {
            if (A[0] == 'a') {
                if (cplayer == 1) {
                    A[to] = 1;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = 2;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A5=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A5=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A7=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A7=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A4=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }
    }

    //for C23
    if (from == 5) {
        amove(5);
        if (to == from) {
            info_msg = 'Move Cancelled';
            infos.style.display = 'block';
            document.cookie = "synch=1;expires=24*60*60;path=/";
        }


        if (to == 2) {
            if (A[2] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A5=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A5=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A3=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A5=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A3=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A5=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A5=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A5=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A5=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A5=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }
    }

    //for C31
    if (from == 6) {
        amove(6);
        if (to == from) {
            info_msg = 'Move Cancelled';
            infos.style.display = 'block';
            document.cookie = "synch=1;expires=24*60*60;path=/";
        }


        if (to == 2) {
            if (A[2] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A3=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A3=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }


        if (to == 0) {
            if (A[0] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A7=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A7=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                if (cplayer == 1) {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {
                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A6=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }
    }

    //for C32
    if (from == 7) {
        amove(7);
        if (to == from) {
            info_msg = 'Move Cancelled';
            infos.style.display = 'block';
            document.cookie = "synch=1;expires=24*60*60;path=/";
        }

        if (to == 1) {
            if (A[1] == 'a') {

                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A1=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A7=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A1=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A7=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }


        if (to == 4) {
            if (A[4] == 'a') {
                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A7=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A7=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }


        if (to == 6) {
            if (A[6] == 'a') {

                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A7=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A7=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }


        if (to == 8) {
            if (A[8] == 'a') {

                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A7=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A8=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A7=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }
    }
    //for C33
    if (from == 8) {
        amove(8);
        if (to == from) {
            info_msg = 'Move Cancelled';
            infos.style.display = 'block';
            document.cookie = "synch=1;expires=24*60*60;path=/";
        }


        if (to == 2) {
            if (A[2] == 'a') {

                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A2=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {

                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A4=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {

                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A5=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A5=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {

                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A6=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {

                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A7=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A7=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }

        if (to == 0) {
            if (A[0] == 'a') {

                if (cplayer == 1) {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 2;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
                else {

                    A[to] = cplayer;
                    A[from] = 'e';
                    document.cookie = "A0=" + A[to] + ";expires=24*60*60;path=/";
                    document.cookie = "A8=" + A[from] + ";expires=24*60*60;path=/";
                    score1++;

                    sync_amoves();
                    cplayer = 1;
                    document.cookie = "player=" + cplayer + ";expires=24*60*60";
                    setTimeout("sync_cells();", 300);
                    setTimeout("init();", 800);
                }
            }
        }
    }

    reset();
    cell1 = 10;
    cell2 = 10;

}

/* function move() ends here*/

/*this function sets the new location of a seed on the board */
function autoname(cell) {
    if (wins == 0) {
        if (smove == 7) {
            if (cell1 == 10) {
                if (cplayer == 1 && A[cell] == 1 && cplayer == session_player) {
                    cell1 = cell;
                    amove(cell1);
                    info_msg = 'cells in pink indicate available moves';
                    infos.style.display = 'block';
                }
                if (cplayer == 2 && A[cell] == 2 && cplayer == session_player) {
                    cell1 = cell;
                    amove(cell1);
                    info_msg = 'cells in pink indicate available moves';
                    infos.style.display = 'block';
                }
                if ((cplayer == 1 && A[cell] == 2 && cplayer == session_player) || ( cplayer == 2 && A[cell] == 1 && cplayer == session_player)) {
                    alerts.style.display = 'block';
                    alert_msg = '!! Not Allowed !!';
                }

            }
            else {
                cell2 = cell;
                main();
            }
        }
    }
}

/*function autoname() ends here*/

/*This function calls the move() function if*/
function main() {
    if (smove == 7 && cell2 != 10) {
        move(cell1, cell2);
    }
}

/*function main() ends here*/


/*This function checks if a player has won*/
function win(n) {
    if (A[0] == n && A[1] == n && A[2] == n) {
        wins = 1;
    }
    if (A[0] == n && A[3] == n && A[6] == n) {
        wins = 1;
    }
    if (A[0] == n && A[4] == n && A[8] == n) {
        wins = 1;
    }
    if (A[1] == n && A[4] == n && A[7] == n) {
        wins = 1;
    }
    if (A[2] == n && A[5] == n && A[8] == n) {
        wins = 1;
    }
    if (A[3] == n && A[4] == n && A[5] == n) {
        wins = 1;
    }
    if (A[6] == n && A[7] == n && A[8] == n) {
        wins = 1;
    }
    if (A[2] == n && A[4] == n && A[6] == n) {
        wins = 1;
    }
    if (wins == 1) {
        gameover();
        document.cookie = "win=" + n + ";expires=24*60*60";
        document.cookie = "score=" + score1 + ";expires=24*60*60";
        event_msg = 'Player ' + n + '  Wins. <a href="functions/new.php">NEW GAME</a>';
        events.style.display = 'block';
        smove = 7;
        //sendRequest(); //used to sync high scores
    }

}

/*function win ends here*/

/*This function prevents game play after a player wins*/
function gameover() {
    for (i = 0; i < 9; i++) {
        if (A[i] != 1 && A[i] != 2) {
            A[i] = "o";
        }
    }
}

/*Checks if there is a winner*/
function check() {
    if (wins == 0) {
        if (cplayer == 2)
            win(1);
        else {
            win(2);
        }
    }
}

/*function to start the game*/
function start() {
    document.getElementById('registration').style.display = 'none';
    document.getElementById('game_area').style.display = 'block';

}

/*This function enables the computer to make a move*/
function auto_move() {
    var k = 1;
    var l = 1;
    var index;
    var auto_move;
    var auto_move1;

    if (wins == 0 && cplayer == 2) {
        while (k == 1) {
            auto_move = Math.floor(Math.random() * 9);

            if (A[auto_move] == 2) {
                cell1 = auto_move;
                amove(cell1);
                auto_move1 = Math.floor(Math.random() * 9);
                if (cell1 != auto_move1) {
                    for (index = 0; index < 9; index++) {
                        if (A[index] == 'a' && index == auto_move1) {
                            cell2 = auto_move1;
                            //cplayer = 2;
                            k = 0;
                            l = 0;
                        }
                    }
                }


            }
        }
        main();
    }
    else {
        info_msg = 'You Will Not Win Next Time';
        infos.style.display = 'block';
    }
}

/* This functions enables the computer to play*/
function auto_play() {
    var k = 1;
    if (wins == 0) {
        while (k == 1) {
            var auto_move = Math.floor(Math.random() * 9);

            if (A[auto_move] == 'e') {
                A[auto_move] = 2;
                cplayer = 1;
                smove++;
                k = 0;
            }
        }
    }
    else {
        info_msg = 'You Will Not Win Next Time';
        infos.style.display = 'block';
    }

    k = 1;
    if (auto_move == 0) {
        document.game.C11.style = "background:blue";
    }
    if (auto_move == 1) {
        document.game.C12.style = "background:blue";
    }
    if (auto_move == 2) {
        document.game.C13.style = "background:blue";
    }
    if (auto_move == 3) {
        document.game.C21.style = "background:blue";
    }
    if (auto_move == 4) {
        document.game.C22.style = "background:blue";
    }
    if (auto_move == 5) {
        document.game.C23.style = "background:blue";
    }
    if (auto_move == 6) {
        document.game.C31.style = "background:blue";
    }
    if (auto_move == 7) {
        document.game.C32.style = "background:blue";
    }
    if (auto_move == 8) {
        document.game.C33.style = "background:blue";
    }
}

function sync() {
    var i;
    for (i = 0; i < 9; i++) {
        if (A[i] == 2) {
            if (i == 0) {
                //document.game.C11.style = "background:blue";
                document.getElementById("11").style = "background:blue";


            }
            if (i == 1) {

                document.getElementById("12").style = "background:blue";

            }
            if (i == 2) {
                document.getElementById("13").style = "background:blue";

            }
            if (i == 3) {
                document.getElementById("21").style = "background:blue";

            }
            if (i == 4) {

                document.game.C22.style = "background:blue";

            }
            if (i == 5) {
                document.game.C23.style = "background:blue";

            }
            if (i == 6) {

                document.game.C31.style = "background:blue";

            }
            if (i == 7) {

                document.game.C32.style = "background:blue";

            }
            if (i == 8) {
                document.game.C33.style = "background:blue";

            }

        }
        if (A[i] == 1) {
            if (i == 0) {
                document.game.C11.style = "background:red";

            }
            if (i == 1) {

                document.game.C12.style = "background:red";

            }
            if (i == 2) {
                document.game.C13.style = "background:red";

            }
            if (i == 3) {
                document.game.C21.style = "background:red";

            }
            if (i == 4) {

                document.game.C22.style = "background:red";

            }
            if (i == 5) {
                document.game.C23.style = "background:red";

            }
            if (i == 6) {

                document.game.C31.style = "background:red";

            }
            if (i == 7) {

                document.game.C32.style = "background:red";

            }
            if (i == 8) {
                document.game.C33.style = "background:red";

            }

        }
        if (A[i] == 'e') {
            if (i == 0) {
                document.game.C11.style = "background:white";
            }
            if (i == 1) {
                document.game.C12.style = "background:white";
            }
            if (i == 2) {
                document.game.C13.style = "background:white";
            }
            if (i == 3) {
                document.game.C21.style = "background:white";
            }
            if (i == 4) {
                document.game.C22.style = "background:white";
            }
            if (i == 5) {
                document.game.C23.style = "background:white";
            }
            if (i == 6) {
                document.game.C31.style = "background:white";
            }
            if (i == 7) {
                document.game.C32.style = "background:white";
            }
            if (i == 8) {
                document.game.C33.style = "background:white";
            }
        }

        // if (A[i] == 'a') {
        //     if (i == 0) {
        //         document.game.C11.style = "background:pink";
        //     }
        //     if (i == 1) {
        //         document.game.C12.style = "background:pink";
        //     }
        //     if (i == 2) {
        //         document.game.C13.style = "background:pink";
        //     }
        //     if (i == 3) {
        //         document.game.C21.style = "background:pink";
        //     }
        //     if (i == 4) {
        //         document.game.C22.style = "background:pink";
        //     }
        //     if (i == 5) {
        //         document.game.C23.style = "background:pink";
        //     }
        //     if (i == 6) {
        //         document.game.C31.style = "background:pink";
        //     }
        //     if (i == 7) {
        //         document.game.C32.style = "background:pink";
        //     }
        //     if (i == 8) {
        //         document.game.C33.style = "background:pink";
        //     }
        // }
    }

    if (win_player == 1 || win_player == 2) {
        if (win_player == session_player) {
            event_msg = 'You Win <a href="functions/new.php">NEW GAME</a>';
        }
        else {
            event_msg = 'Player ' + win_player + '  Wins <a href="functions/new.php">NEW GAME</a>';
        }
        events.style.display = 'block';
    }
}


var infos = document.getElementById('info');
var events = document.getElementById('success');
var alerts = document.getElementById('error');
setInterval("check(); infos.innerHTML=info_msg;", 100);
setInterval("alerts.innerHTML=alert_msg;", 100);
setInterval("events.innerHTML=event_msg;", 100);
setInterval("alerts.style.display='none';infos.style.display='none';", 4100);
setInterval("if(wins==0){if(session_player==cplayer){document.getElementById('player').innerHTML='Your Turn';}else{document.getElementById('player').innerHTML=getCookie('cplayer_name')+ ' s turn';}}", 100);
setInterval("if(wins==1){document.getElementById('player').innerHTML='';}", 100);
setInterval("document.getElementById('stats').innerHTML=''+score1+'    '+score2;", 100);

//    function sendRequest() {
//        var output=document.getElementById('score');
//        if(xhr){
//          document.getElementById('score').innerHTML="ok we are waiting for some text";
//            xhr.open("GET","score.php",true);
//            xhr.send(null);
//            xhr.onreadystatechange=function () {handleResponse(xhr)}
//
//            }
//
//        }
//
//    function handleResponse(xhr) {
//        if(xhr.readyState==4 && xhr.status==200){
//            document.getElementById('score').innerHTML="<h3>High Scores</h3>"+xhr.responseText;
//        }
//
//    }
