var wins = 0, cplayer = 1, smove = 0, i, cell1 = 10, cell2 = 10, cmove, winner = 0, score1 = 3, score2 = 3;

/*Variable explanation:
 cplayer stores the number of the current player
 smove determines the maximum number of moves allowed*/

var info_msg, alert_msg, event_msg;
/*This function initialises the array used to store player moves*/
var A = new Array(9);
function init() {
    for (i = 0; i < 9; i++) {
        if (A[i] != 1 && A[i] != 2) {
            A[i] = "e";
        }
    }
}

init();


/* HERE ARE THE FUNCTIONS FOR EACH PLAYER

 // C12 means row 1 column 2

 */
function C_11(player) {
    /*This code is for the first player*/
    if (player == 1) {
        if (smove < 6) {
            if (A[0] == 'e') {
                A[0] = 1;
                cplayer = 2;
                smove++;
                document.game.C11.style = "background:red;";
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
            if (com == 1) {
                info_msg = 'Genious Is Thinking';
                infos.style.display = 'block';
                setTimeout('auto_play();', 1000);
            }
        }
        else
            smove = 7;
    }
    /*Code for the second player*/
    else {
        if (smove < 6) {
            if (A[0] == 'e') {
                cplayer = 1;
                smove++;
                document.game.C11.style = "background:blue";
                A[0] = 2;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }

        }
        else
            smove == 7;
    }
}

function C_12(player) {
    if (player == 1) {
        if (smove < 6) {
            if (A[1] == 'e') {
                smove++;
                document.game.C12.style = "background:red;";
                A[1] = 1;
                cplayer = 2;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
            if (com == 1) {
                info_msg = 'Genious Is Thinking';
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
                document.game.C12.style = "background:blue";
                A[1] = 2;
                cplayer = 1;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }

        }
        else
            smove == 7;
    }
}

function C_13(player) {
    if (player == 1) {
        if (smove < 6) {
            if (A[2] == 'e') {
                smove++;
                document.game.C13.style = "background:red;";
                A[2] = 1;
                cplayer = 2;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
            if (com == 1) {
                info_msg = 'Genious Is Thinking';
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
                document.game.C13.style = "background:blue";
                A[2] = 2;
                cplayer = 1;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
        }
        else
            smove == 7;
    }
}

function C_21(player) {
    if (player == 1) {
        if (smove < 6) {
            if (A[3] == 'e') {
                smove++;
                document.game.C21.style = "background:red;";
                A[3] = 1;
                cplayer = 2;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
            if (com == 1) {
                info_msg = 'Genious Is Thinking';
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
                document.game.C21.style = "background:blue";
                A[3] = 2;
                cplayer = 1;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
        }
        else
            smove == 7;
    }
}

function C_22(player) {
    if (player == 1) {
        if (smove < 6) {
            if (A[4] == 'e') {
                smove++;
                document.game.C22.style = "background:red;";
                A[4] = 1;
                cplayer = 2;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
            if (com == 1) {
                info_msg = 'Genious Is Thinking';
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
                document.game.C22.style = "background:blue";
                A[4] = 2;
                cplayer = 1;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
        }
        else
            smove == 7;
    }
}

function C_23(player) {
    if (player == 1) {
        if (smove < 6) {
            if (A[5] == 'e') {
                smove++;
                document.game.C23.style = "background:red;";
                A[5] = 1;
                cplayer = 2;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
            if (com == 1) {
                info_msg = 'Genious Is Thinking';
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
                document.game.C23.style = "background:blue";
                A[5] = 2;
                cplayer = 1;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
        }
        else
            smove == 7;
    }
}

function C_31(player) {
    if (player == 1) {
        if (smove < 6) {
            if (A[6] == 'e') {
                smove++;
                document.game.C31.style = "background:red;";
                A[6] = 1;
                cplayer = 2;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
            if (com == 1) {
                info_msg = 'Genious Is Thinking';
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
                document.game.C31.style = "background:blue";
                A[6] = 2;
                cplayer = 1;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
        }
        else
            smove == 7;
    }
}

function C_32(player) {
    if (player == 1) {
        if (smove < 6) {
            if (A[7] == 'e') {
                smove++;
                document.game.C32.style = "background:red;";
                A[7] = 1;
                cplayer = 2;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
            if (com == 1) {
                info_msg = 'Genious Is Thinking';
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
                document.game.C32.style = "background:blue";
                A[7] = 2;
                cplayer = 1;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
        }
        else
            smove == 7;
    }
}

function color() {
    if (A[0] == 1) {
        document.game.C11.style = "background:red";
    }
    if (A[0] == 2) {
        document.game.C11.style = "background:blue";
    }
    if (A[0] == 'a') {
        document.game.C11.style = "background:pink";
    }
    if (A[0] == 'e') {
        document.game.C11.style = "background:white";
    }

    if (A[1] == 1) {
        document.game.C12.style = "background:red";
    }
    if (A[1] == 2) {
        document.game.C12.style = "background:blue";
    }
    if (A[1] == 'a') {
        document.game.C12.style = "background:pink";
    }
    if (A[1] == 'e') {
        document.game.C12.style = "background:white";
    }

    if (A[2] == 1) {
        document.game.C13.style = "background:red";
    }
    if (A[2] == 2) {
        document.game.C13.style = "background:blue";
    }
    if (A[2] == 'a') {
        document.game.C13.style = "background:pink";
    }
    if (A[2] == 'e') {
        document.game.C13.style = "background:white";
    }

    if (A[3] == 1) {
        document.game.C21.style = "background:red";
    }
    if (A[3] == 2) {
        document.game.C21.style = "background:blue";
    }
    if (A[3] == 'a') {
        document.game.C21.style = "background:pink";
    }
    if (A[3] == 'e') {
        document.game.C21.style = "background:white";
    }

    if (A[4] == 1) {
        document.game.C22.style = "background:red";
    }
    if (A[4] == 2) {
        document.game.C22.style = "background:blue";
    }
    if (A[4] == 'a') {
        document.game.C22.style = "background:pink";
    }
    if (A[4] == 'e') {
        document.game.C22.style = "background:white";
    }

    if (A[5] == 1) {
        document.game.C23.style = "background:red";
    }
    if (A[5] == 2) {
        document.game.C23.style = "background:blue";
    }
    if (A[5] == 'a') {
        document.game.C23.style = "background:pink";
    }
    if (A[5] == 'e') {
        document.game.C23.style = "background:white";
    }

    if (A[6] == 1) {
        document.game.C31.style = "background:red";
    }
    if (A[6] == 2) {
        document.game.C31.style = "background:blue";
    }
    if (A[6] == 'a') {
        document.game.C31.style = "background:pink";
    }
    if (A[6] == 'e') {
        document.game.C31.style = "background:white";
    }

    if (A[7] == 1) {
        document.game.C32.style = "background:red";
    }
    if (A[7] == 2) {
        document.game.C32.style = "background:blue";
    }
    if (A[7] == 'a') {
        document.game.C32.style = "background:pink";
    }
    if (A[7] == 'e') {
        document.game.C32.style = "background:white";
    }

    if (A[8] == 1) {
        document.game.C33.style = "background:red";
    }
    if (A[8] == 2) {
        document.game.C33.style = "background:blue";
    }
    if (A[8] == 'a') {
        document.game.C33.style = "background:pink";
    }
    if (A[8] == 'e') {
        document.game.C33.style = "background:white";
    }
}
function C_33(player) {
    if (player == 1) {
        if (smove < 6) {

            if (A[8] == 'e') {
                smove++;
                document.game.C33.style = "background:red;";
                A[8] = 1;
                cplayer = 2;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
            if (com == 1) {
                info_msg = 'Genious Is Thinking';
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
                document.game.C33.style = "background:blue";
                A[8] = 2;
                cplayer = 1;
            }
            else {
                alert_msg = 'not allowed';
                alerts.style.display = 'block';
            }
        }
        else
            smove == 7;
    }
}
/*FUNCTIONS END HERE*/


/*This function shows the available moves for a player*/
function amove(position) {
    switch (position) {
        case 0:
            init();


            if (A[1] == "e") {
                document.game.C12.style = "background:pink;";
                A[1] = 'a';
                if (A[2] == "e") {
                    document.game.C13.style = "background:pink;";
                    A[2] = 'a';
                }
            }
            if (A[3] == "e") {
                document.game.C21.style = "background:pink;";
                A[3] = 'a';
                if (A[6] == "e") {
                    document.game.C31.style = "background:pink;";
                    A[6] = 'a';
                }
            }
            if (A[4] == "e") {
                document.game.C22.style = "background:pink;";
                A[4] = 'a';
                if (A[8] == "e") {
                    document.game.C33.style = "background:pink;";
                    A[8] = 'a';
                }
            }


            if (A[5] == "e") {
                document.game.C23.style = "background:none;";
            }
            if (A[7] == "e") {
                document.game.C32.style = "background:none;";
            }
            break;

        case 1:
            init();
            if (A[7] == "e") {
                document.game.C32.style = "background:none;";
            }

            if (A[0] == "e") {
                document.game.C11.style = "background:pink;";
                A[0] = 'a';
            }
            if (A[2] == "e") {
                document.game.C13.style = "background:pink;";
                A[2] = 'a';
            }
            if (A[4] == "e") {
                document.game.C22.style = "background:pink;";
                A[4] = 'a';
                if (A[7] == "e") {
                    document.game.C32.style = "background:pink;";
                    A[7] = 'a';
                }
            }


            if (A[3] == "e") {
                document.game.C21.style = "background:none;";
            }
            if (A[6] == "e") {
                document.game.C31.style = "background:none;";
            }
            if (A[5] == "e") {
                document.game.C23.style = "background:none;";
            }
            if (A[8] == "e") {
                document.game.C33.style = "background:none;";
            }
            break;

        case 2:
            init();

            if (A[0] == "e") {
                document.game.C11.style = "background:none;";
            }
            if (A[8] == "e") {
                document.game.C33.style = "background:none;";
            }
            if (A[6] == "e") {
                document.game.C31.style = "background:none;";
            }

            if (A[1] == "e") {
                document.game.C12.style = "background:pink;";
                A[1] = 'a';
                if (A[0] == "e") {
                    document.game.C11.style = "background:pink;";
                    A[0] = 'a';
                }
            }
            if (A[5] == "e") {
                document.game.C23.style = "background:pink;";
                A[5] = 'a';
                if (A[8] == "e") {
                    document.game.C33.style = "background:pink;";
                    A[8] = 'a';
                }
            }
            if (A[4] == "e") {
                document.game.C22.style = "background:pink;";
                A[4] = 'a';
                if (A[6] == "e") {
                    document.game.C31.style = "background:pink;";
                    A[6] = 'a';
                }
            }


            if (A[3] == "e") {
                document.game.C21.style = "background:none;";
            }
            if (A[7] == "e") {
                document.game.C32.style = "background:none;";
            }
            break;

        case 3:
            init();
            if (A[5] == "e") {
                document.game.C23.style = "background:none;";
            }

            if (A[0] == "e") {
                document.game.C11.style = "background:pink;";
                A[0] = 'a';
            }
            if (A[6] == "e") {
                document.game.C31.style = "background:pink;";
                A[6] = 'a';
            }
            if (A[4] == "e") {
                document.game.C22.style = "background:pink;";
                A[4] = 'a';
                if (A[5] == "e") {
                    document.game.C23.style = "background:pink;";
                    A[5] = 'a';
                }
            }

            if (A[1] == "e") {
                document.game.C12.style = "background:none;";
            }
            if (A[2] == "e") {
                document.game.C13.style = "background:none;";
            }
            if (A[7] == "e") {
                document.game.C32.style = "background:none;";
            }
            if (A[8] == "e") {
                document.game.C33.style = "background:none;";
            }
            break;

        case 4:
            init();
            if (A[1] == "e") {
                document.game.C12.style = "background:pink;";
                A[1] = 'a';
            }
            if (A[7] == "e") {
                document.game.C32.style = "background:pink;";
                A[7] = 'a';
            }
            if (A[3] == "e") {
                document.game.C21.style = "background:pink;";
                A[3] = 'a';
            }
            if (A[5] == "e") {
                document.game.C23.style = "background:pink;";
                A[5] = 'a';
            }

            if (A[0] == "e") {
                document.game.C11.style = "background:pink;";
                A[0] = 'a';
            }
            if (A[2] == "e") {
                document.game.C13.style = "background:pink;";
                A[2] = 'a';
            }
            if (A[6] == "e") {
                document.game.C31.style = "background:pink;";
                A[6] = 'a';
            }
            if (A[8] == "e") {
                document.game.C33.style = "background:pink;";
                A[8] = 'a';
            }
            break;

        case 5:
            init();

            if (A[3] == "e") {
                document.game.C21.style = "background:none;";
            }

            if (A[2] == "e") {
                document.game.C13.style = "background:pink;";
                A[2] = 'a';
            }
            if (A[8] == "e") {
                document.game.C33.style = "background:pink;";
                A[8] = 'a';
            }
            if (A[4] == "e") {
                document.game.C22.style = "background:pink;";
                A[4] = 'a';
                if (A[3] == "e") {
                    document.game.C21.style = "background:pink;";
                    A[3] = 'a';
                }
            }

            if (A[1] == "e") {
                document.game.C12.style = "background:none;";
            }
            if (A[0] == "e") {
                document.game.C11.style = "background:none;";
            }
            if (A[7] == "e") {
                document.game.C32.style = "background:none;";
            }
            if (A[6] == "e") {
                document.game.C31.style = "background:none;";
            }
            break;

        case 6:
            init();

            if (A[7] == "e") {
                document.game.C32.style = "background:pink;";
                A[7] = 'a';
                if (A[8] == "e") {
                    document.game.C33.style = "background:pink;";
                    A[8] = 'a';
                }
            }
            if (A[3] == "e") {
                document.game.C21.style = "background:pink;";
                A[3] = 'a';
                if (A[0] == "e") {
                    document.game.C11.style = "background:pink;";
                    A[0] = 'a';
                }
            }
            if (A[4] == "e") {
                document.game.C22.style = "background:pink;";
                A[4] = 'a';
                if (A[2] == "e") {
                    document.game.C13.style = "background:pink;";
                    A[2] = 'a';
                }
            }


            if (A[5] == "e") {
                document.game.C23.style = "background:none;";
            }
            if (A[1] == "e") {
                document.game.C12.style = "background:none;";
            }
            break;

        case 7:
            init();

            if (A[1] == "e") {
                document.game.C12.style = "background:none;";
            }

            if (A[6] == "e") {
                document.game.C31.style = "background:pink;";
                A[6] = 'a';
            }
            if (A[8] == "e") {
                document.game.C33.style = "background:pink;";
                A[8] = 'a';
            }
            if (A[4] == "e") {
                document.game.C22.style = "background:pink;";
                A[4] = 'a';
                if (A[1] == "e") {
                    document.game.C12.style = "background:pink;";
                    A[1] = 'a';
                }
            }


            if (A[3] == "e") {
                document.game.C21.style = "background:none;";
            }
            if (A[0] == "e") {
                document.game.C11.style = "background:none;";
            }
            if (A[5] == "e") {
                document.game.C23.style = "background:none;";
            }
            if (A[2] == "e") {
                document.game.C13.style = "background:none;";
            }
            break;

        case 8:
            init();
            if (A[6] == "e") {
                document.game.C31.style = "background:none;";
            }
            if (A[2] == "e") {
                document.game.C13.style = "background:none;";
            }
            if (A[6] == "e") {
                document.game.C31.style = "background:none;";
            }

            if (A[7] == "e") {
                document.game.C32.style = "background:pink;";
                A[7] = 'a';
                if (A[6] == "e") {
                    document.game.C31.style = "background:pink;";
                    A[6] = 'a';
                }
            }
            if (A[5] == "e") {
                document.game.C23.style = "background:pink;";
                A[5] = 'a';
                if (A[2] == "e") {
                    document.game.C13.style = "background:pink;";
                    A[2] = 'a';
                }
            }
            if (A[4] == "e") {
                document.game.C22.style = "background:pink;";
                A[4] = 'a';
                if (A[0] == "e") {
                    document.game.C11.style = "background:pink;";
                    A[0] = 'a';
                }
            }


            if (A[3] == "e") {
                document.game.C21.style = "background:none;";
            }
            if (A[1] == "e") {
                document.game.C12.style = "background:none;";
            }
            break;
    }
}

/* FUNCTION amove() ENDS HERE*/

/*Yhis functions resets the color of the board after calling amove()*/
function reset() {
    init();
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
        }

        if (to == 1) {
            if (A[1] == 'a') {
                document.game.C11.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C12.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C12.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                document.game.C11.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C13.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C13.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                document.game.C11.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C21.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C21.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {
                document.game.C11.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C22.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C22.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {
                document.game.C11.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C23.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C23.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                document.game.C11.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C31.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C31.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {
                document.game.C11.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C32.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C32.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                document.game.C11.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C33.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C33.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
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
        }

        if (to == 0) {
            if (A[0] == 'a') {
                document.game.C12.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C11.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C11.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                document.game.C12.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C13.style = "background:red;";
                    A[2] = 1;
                    A[1] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C13.style = "background:blue;";
                    A[2] = 2;
                    A[1] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                document.game.C12.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C21.style = "background:red;";
                    A[3] = 1;
                    A[1] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C21.style = "background:blue;";
                    A[3] = 2;
                    A[1] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {
                document.game.C12.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C22.style = "background:red;";
                    A[4] = 1;
                    A[1] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C22.style = "background:blue;";
                    A[4] = 2;
                    A[1] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {
                document.game.C12.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C23.style = "background:red;";
                    A[5] = 1;
                    A[1] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C23.style = "background:blue;";
                    A[5] = 2;
                    A[1] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                document.game.C12.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C31.style = "background:red;";
                    A[6] = 1;
                    A[1] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C31.style = "background:blue;";
                    A[6] = 2;
                    A[1] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {
                document.game.C12.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C32.style = "background:red;";
                    A[7] = 1;
                    A[1] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C32.style = "background:blue;";
                    A[7] = 2;
                    A[1] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                document.game.C12.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C33.style = "background:red;";
                    A[8] = 1;
                    A[1] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C33.style = "background:blue;";
                    A[8] = 2;
                    A[1] = 'e';
                    score2++;
                    cplayer = 1;
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
        }

        if (to == 1) {
            if (A[1] == 'a') {
                document.game.C13.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C12.style = "background:red;";
                    A[1] = 1;
                    A[2] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C12.style = "background:blue;";
                    A[1] = 2;
                    A[2] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 0) {
            if (A[0] == 'a') {
                document.game.C13.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C11.style = "background:red;";
                    A[0] = 1;
                    A[2] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C11.style = "background:blue;";
                    A[0] = 2;
                    A[2] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                document.game.C13.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C21.style = "background:red;";
                    A[3] = 1;
                    A[2] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C21.style = "background:blue;";
                    A[3] = 2;
                    A[2] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {
                document.game.C13.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C22.style = "background:red;";
                    A[4] = 1;
                    A[2] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C22.style = "background:blue;";
                    A[4] = 2;
                    A[2] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {
                document.game.C13.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C23.style = "background:red;";
                    A[5] = 1;
                    A[2] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C23.style = "background:blue;";
                    A[5] = 2;
                    A[2] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                document.game.C13.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C31.style = "background:red;";
                    A[6] = 1;
                    A[2] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C31.style = "background:blue;";
                    A[6] = 2;
                    A[2] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {
                document.game.C13.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C32.style = "background:red;";
                    A[7] = 1;
                    A[2] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C32.style = "background:blue;";
                    A[7] = 2;
                    A[2] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                document.game.C13.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C33.style = "background:red;";
                    A[8] = 1;
                    A[2] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C33.style = "background:blue;";
                    A[8] = 2;
                    A[2] = 'e';
                    score2++;
                    cplayer = 1;
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
        }

        else {
            if (A[0] == 'a') {
                document.game.C21.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C11.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C11.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 1) {
            if (A[1] == 'a') {
                document.game.C21.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C12.style = "background:red;";
                    A[1] = 1;
                    A[3] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C12.style = "background:blue;";
                    A[1] = 2;
                    A[3] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                document.game.C21.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C13.style = "background:red;";
                    A[2] = 1;
                    A[3] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C13.style = "background:blue;";
                    A[2] = 2;
                    A[3] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }


        if (to == 4) {
            if (A[4] == 'a') {
                document.game.C21.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C22.style = "background:red;";
                    A[4] = 1;
                    A[3] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C22.style = "background:blue;";
                    A[4] = 2;
                    A[3] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {
                document.game.C21.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C23.style = "background:red;";
                    A[5] = 1;
                    A[3] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C23.style = "background:blue;";
                    A[5] = 2;
                    A[3] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                document.game.C21.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C31.style = "background:red;";
                    A[6] = 1;
                    A[3] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C31.style = "background:blue;";
                    A[6] = 2;
                    A[3] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {
                document.game.C21.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C32.style = "background:red;";
                    A[7] = 1;
                    A[3] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C32.style = "background:blue;";
                    A[7] = 2;
                    A[3] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                document.game.C21.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C33.style = "background:red;";
                    A[8] = 1;
                    A[3] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C33.style = "background:blue;";
                    A[8] = 2;
                    A[3] = 'e';
                    score2++;
                    cplayer = 1;
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
        }

        if (to == 1) {
            if (A[1] == 'a') {
                document.game.C22.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C12.style = "background:red;";
                    A[to] = 1;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C12.style = "background:blue;";
                    A[to] = 2;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                document.game.C22.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C13.style = "background:red;";
                    A[to] = 1;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C13.style = "background:blue;";
                    A[to] = 2;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                document.game.C22.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C21.style = "background:red;";
                    A[to] = 1;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C21.style = "background:blue;";
                    A[to] = 2;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 0) {
            if (A[0] == 'a') {
                document.game.C22.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C11.style = "background:red;";
                    A[to] = 1;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C11.style = "background:blue;";
                    A[to] = 2;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {
                document.game.C22.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C23.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C23.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                document.game.C22.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C31.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C31.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {
                document.game.C22.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C32.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C32.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                document.game.C22.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C33.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C33.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
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
        }

        if (to == 1) {
            if (A[1] == 'a') {
                document.game.C23.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C12.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C12.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                document.game.C23.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C13.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C13.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                document.game.C23.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C21.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C21.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {
                document.game.C23.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C22.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C22.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 0) {
            if (A[0] == 'a') {
                document.game.C23.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C11.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C11.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                document.game.C23.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C31.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C31.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {
                document.game.C23.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C32.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C32.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                document.game.C23.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C33.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C33.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
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
        }

        if (to == 1) {
            if (A[1] == 'a') {
                document.game.C31.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C12.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C12.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                document.game.C31.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C13.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C13.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                document.game.C31.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C21.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C21.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {
                document.game.C31.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C22.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C22.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {
                document.game.C31.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C23.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C23.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 0) {
            if (A[0] == 'a') {
                document.game.C31.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C11.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C11.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {
                document.game.C31.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C32.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C32.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                document.game.C31.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C33.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C33.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
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
        }

        if (to == 1) {
            if (A[1] == 'a') {
                document.game.C32.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C12.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C12.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                document.game.C32.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C13.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C13.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                document.game.C32.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C21.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C21.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {
                document.game.C32.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C22.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C22.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {
                document.game.C32.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C23.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C23.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                document.game.C32.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C31.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C31.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 0) {
            if (A[0] == 'a') {
                document.game.C32.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C11.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C11.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 8) {
            if (A[8] == 'a') {
                document.game.C32.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C33.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C33.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
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
        }

        if (to == 1) {
            if (A[1] == 'a') {
                document.game.C33.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C12.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C12.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 2) {
            if (A[2] == 'a') {
                document.game.C33.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C13.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C13.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 3) {
            if (A[3] == 'a') {
                document.game.C33.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C21.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C21.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 4) {
            if (A[4] == 'a') {
                document.game.C33.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C22.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C22.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 5) {
            if (A[5] == 'a') {
                document.game.C33.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C23.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C23.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 6) {
            if (A[6] == 'a') {
                document.game.C33.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C31.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C31.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 7) {
            if (A[7] == 'a') {
                document.game.C33.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C32.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C32.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }

        if (to == 0) {
            if (A[0] == 'a') {
                document.game.C33.style = "background:white;";
                if (cplayer == 1) {
                    document.game.C11.style = "background:red;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score1++;
                    cplayer = 2;
                }
                else {
                    document.game.C11.style = "background:blue;";
                    A[to] = cplayer;
                    A[from] = 'e';
                    score2++;
                    cplayer = 1;
                }
            }
        }
    }
    reset();
    cell1 = 10;
    cell2 = 10;
    if (cplayer == 2) {
        if (com == 1) {
            info_msg = 'Genious Is Thinking';
            infos.style.display = 'block';
            setTimeout('auto_move();', 1000);
        }
    }

}

/* function move() ends here*/

/*this function sets the new location of a seed on the board */
function autoname(cell) {
    if (wins == 0) {
        if (smove == 7) {
            if (cell1 == 10) {
                if (cplayer == 1 && A[cell] == 1) {
                    cell1 = cell;
                    amove(cell1);
                    info_msg = 'cells in pink indicate available moves';
                    infos.style.display = 'block';
                }
                if (cplayer == 2 && A[cell] == 2) {
                    cell1 = cell;
                    amove(cell1);
                    info_msg = 'cells in pink indicate available moves';
                    infos.style.display = 'block';
                }
                if ((cplayer == 1 && A[cell] == 2) || ( cplayer == 2 && A[cell] == 1)) {
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
        document.cookie = "id=" + n + ";expires=24*60*60";
        document.cookie = "score=" + score1 + ";expires=24*60*60";
        if (com == 1 && n == 2)
            event_msg = 'Genius  Wins';
        else
            event_msg = 'Player ' + n + '  Wins';
        events.style.display = 'block';
        smove = 7;
        document.getElementById('score').innerHTML = "<?php echo 'hey';?>"; //not working
        sendRequest();
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

function offence() {
    // --       row 1       --  //
    if (A[0] == 2 && A[1] == 2 && A[2] == 'e' && cplayer == 2) {
        if (A[5] == 2) {
            A[2] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else {
            if (A[8] == 2 && A[5] == 'e') {
                A[2] = 2;
                A[8] = 'e';
                cplayer = 1;
            } else {
                if (A[4] == 2) {
                    A[2] = 2;
                    A[4] = 'e';
                    cplayer = 1;
                } else {
                    if (A[6] == 2 && A[4] == 'e') {
                        A[2] = 2;
                        A[6] = 'e';
                        cplayer = 1;
                    }
                }
            }
        }
    }

    if (A[0] == 2 && A[2] == 2 && A[1] == 'e' && cplayer == 2) {
        if (A[4] == 2) {
            A[1] = 2;
            A[4] = 'e';
            cplayer = 1;
        }
        else {
            if (A[7] == 2 && A[4] == 'e') {
                A[1] = 2;
                A[7] = 'e';
                cplayer = 1;
            }
        }
    }
    if (A[1] == 2 && A[2] == 2 && A[0] == 'e' && cplayer == 2) {
        if (A[3] == 2) {
            A[0] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else {
            if (A[6] == 2 && A[3] == 'e') {
                A[0] = 2;
                A[6] = 'e';
                cplayer = 1;
            } else {
                if (A[4] == 2) {
                    A[0] = 2;
                    A[4] = 'e';
                    cplayer = 1;
                } else {
                    if (A[8] == 2 && A[4] == 'e') {
                        A[0] = 2;
                        A[8] = 'e';
                        cplayer = 1;
                    }
                }
            }
        }
    }
    // --       row 1       --  //

    // --       row 2       --  //
    if (A[3] == 2 && A[4] == 2 && A[5] == 'e' && cplayer == 2) {
        if (A[2] == 2) {
            A[2] = 'e';
            A[5] = 2;
            cplayer = 1
        } else if (A[8] == 2) {
            A[5] = 2;
            A[8] = 'e';
            cplayer = 1;
        }
    }

    if (A[3] == 2 && A[5] == 2 && A[4] == 'e' && cplayer == 2) {
        if (A[0] == 2) {
            A[4] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[1] == 2) {
            A[4] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[2] == 2) {
            A[4] = 2;
            A[2] = 'e';
            cplayer = 1;
        } else if (A[6] == 2) {
            A[4] = 2;
            A[6] = 'e';
            cplayer = 1;
        } else if (A[7] == 2) {
            A[4] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[8] == 2) {
            A[4] = 2;
            A[8] = 'e';
            cplayer = 1;
        }
    }

    if (A[4] == 2 && A[5] == 2 && A[3] == 'e' && cplayer == 2) {
        if (A[0] == 2) {
            A[3] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[6] == 2) {
            A[3] = 2;
            A[6] = 'e';
            cplayer = 1;
        }
    }

    // --       row 2       --  //

    // --       row 3       --  //

    if (A[6] == 2 && A[7] == 2 && A[8] == 'e' && cplayer == 2) {
        if (A[5] == 2) {
            A[8] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[2] == 2 && A[5] == 'e') {
            A[8] = 2;
            A[2] = 'e';
            cplayer = 1;
        } else if (A[4] == 2) {
            A[8] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[4] == 'e') {
            A[8] = 2;
            A[0] = 'e';
            cplayer = 1;
        }
    }

    if (A[6] == 2 && A[8] == 2 && A[7] == 'e' && cplayer == 2) {
        if (A[4] == 2) {
            A[7] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[1] == 2 && A[4] == 'e') {
            A[7] = 2;
            A[1] = 'e';
            cplayer = 1;
        }
    }

    if (A[7] == 2 && A[8] == 2 && A[6] == 'e' && cplayer == 2) {
        if (A[3] == 2) {
            A[6] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[3] == 'e') {
            A[6] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[4] == 2) {
            A[6] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[2] == 2 && A[4] == 'e') {
            A[6] = 2;
            A[2] = 'e';
            cplayer = 1;
        }
    }

    // --       row 3       --  //

    // --       column 1       --  //

    if (A[0] == 2 && A[3] == 2 && A[6] == 'e' && cplayer == 2) {
        if (A[7] == 2) {
            A[6] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else {
            if (A[8] == 2 && A[7] == 'e') {
                A[6] = 2;
                A[8] = 'e';
                cplayer = 1;
            } else {
                if (A[4] == 2) {
                    A[6] = 2;
                    A[4] = 'e';
                    cplayer = 1;
                } else {
                    if (A[2] == 2 && A[4] == 'e') {
                        A[6] = 2;
                        A[2] = 'e';
                        cplayer = 1;
                    }
                }
            }
        }
    }

    if (A[0] == 2 && A[2] == 2 && A[1] == 'e' && cplayer == 2) {
        if (A[4] == 2) {
            A[1] = 2;
            A[4] = 'e';
            cplayer = 1;
        }
        else {
            if (A[7] == 2 && A[4] == 'e') {
                A[1] = 2;
                A[7] = 'e';
                cplayer = 1;
            }
        }
    }
    if (A[1] == 2 && A[2] == 2 && A[0] == 'e' && cplayer == 2) {
        if (A[3] == 2) {
            A[0] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else {
            if (A[6] == 2 && A[3] == 'e') {
                A[0] = 2;
                A[6] = 'e';
                cplayer = 1;
            } else {
                if (A[4] == 2) {
                    A[0] = 2;
                    A[4] = 'e';
                    cplayer = 1;
                } else {
                    if (A[8] == 2 && A[4] == 'e') {
                        A[0] = 2;
                        A[8] = 'e';
                        cplayer = 1;
                    }
                }
            }
        }
    }

    // --       column 1       --  //

    // --       column 2       --  //

    if (A[1] == 2 && A[4] == 2 && A[7] == 'e' && cplayer == 2) {
        if (A[8] == 2) {
            A[8] = 'e';
            A[7] = 2;
            cplayer = 1
        } else if (A[6] == 2) {
            A[7] = 2;
            A[6] = 'e';
            cplayer = 1;
        }
    }

    if (A[1] == 2 && A[7] == 2 && A[4] == 'e' && cplayer == 2) {
        if (A[0] == 2) {
            A[4] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[3] == 2) {
            A[4] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[2] == 2) {
            A[4] = 2;
            A[2] = 'e';
            cplayer = 1;
        } else if (A[6] == 2) {
            A[4] = 2;
            A[6] = 'e';
            cplayer = 1;
        } else if (A[5] == 2) {
            A[4] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[8] == 2) {
            A[4] = 2;
            A[8] = 'e';
            cplayer = 1;
        }
    }

    if (A[4] == 2 && A[7] == 2 && A[1] == 'e' && cplayer == 2) {
        if (A[0] == 2) {
            A[1] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[2] == 2) {
            A[1] = 2;
            A[2] = 'e';
            cplayer = 1;
        }
    }

    // --       column 2       --  //

    // --       column 3       --  //

    if (A[2] == 2 && A[5] == 2 && A[8] == 'e' && cplayer == 2) {
        if (A[7] == 2) {
            A[8] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[6] == 2 && A[7] == 'e') {
            A[8] = 2;
            A[6] = 'e';
            cplayer = 1;
        } else if (A[4] == 2) {
            A[8] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[4] == 'e') {
            A[8] = 2;
            A[0] = 'e';
            cplayer = 1;
        }
    }

    if (A[2] == 2 && A[8] == 2 && A[5] == 'e' && cplayer == 2) {
        if (A[4] == 2) {
            A[5] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[3] == 2 && A[4] == 'e') {
            A[5] = 2;
            A[3] = 'e';
            cplayer = 1;
        }
    }

    if (A[5] == 2 && A[8] == 2 && A[2] == 'e' && cplayer == 2) {
        if (A[1] == 2) {
            A[2] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[1] == 'e') {
            A[2] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[4] == 2) {
            A[2] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[6] == 2 && A[4] == 'e') {
            A[2] = 2;
            A[6] = 'e';
            cplayer = 1;
        }
    }

    // --       column 3       --  //

    // --       diagonal 1       --  //

    if (A[6] == 2 && A[4] == 2 && A[2] == 'e' && cplayer == 2) {
        if (A[1] == 2) {
            A[2] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[1] == 'e') {
            A[0] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else if (A[5] == 2) {
            A[2] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[8] == 2 && A[5] == 'e') {
            A[8] = 'e';
            A[2] = 2;
            cplayer = 1;
        }
    }

    if (A[6] == 2 && A[2] == 2 && A[4] == 'e' && cplayer == 2) {
        if (A[0] == 2) {
            A[4] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[3] == 2) {
            A[4] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[1] == 2) {
            A[4] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[7] == 2) {
            A[4] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[5] == 2) {
            A[4] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[8] == 2) {
            A[4] = 2;
            A[8] = 'e';
            cplayer = 1;
        }
    }

    if (A[4] == 2 && A[2] == 2 && A[6] == 'e' && cplayer == 2) {
        if (A[3] == 2) {
            A[6] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[3] == 'e') {
            A[0] = 'e';
            A[6] = 2;
            cplayer = 1;
        } else if (A[7] == 2) {
            A[6] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[8] == 2 && A[7] == 'e') {
            A[8] = 'e';
            A[6] = 2;
            cplayer = 1;
        }
    }
    // --       diagonal 1       --  //

    // --       diagonal 2       --  //

    if (A[0] == 2 && A[4] == 2 && A[8] == 'e' && cplayer == 2) {
        if (A[7] == 2) {
            A[8] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[6] == 2 && A[7] == 'e') {
            A[6] = 'e';
            A[7] = 2;
            cplayer = 1;
        } else if (A[5] == 2) {
            A[8] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[2] == 2 && A[5] == 'e') {
            A[2] = 'e';
            A[8] = 2;
            cplayer = 1;
        }
    }

    if (A[0] == 2 && A[8] == 2 && A[4] == 'e' && cplayer == 2) {
        if (A[6] == 2) {
            A[4] = 2;
            A[6] = 'e';
            cplayer = 1;
        } else if (A[3] == 2) {
            A[4] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[1] == 2) {
            A[4] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[7] == 2) {
            A[4] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[5] == 2) {
            A[4] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[2] == 2) {
            A[4] = 2;
            A[2] = 'e';
            cplayer = 1;
        }
    }

    if (A[4] == 2 && A[8] == 2 && A[0] == 'e' && cplayer == 2) {
        if (A[1] == 2) {
            A[0] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[2] == 2 && A[1] == 'e') {
            A[2] = 'e';
            A[0] = 2;
            cplayer = 1;
        } else if (A[3] == 2) {
            A[0] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[6] == 2 && A[3] == 'e') {
            A[6] = 'e';
            A[0] = 2;
            cplayer = 1;
        }
    }

    // --       diagonal 2       --  //
}

function defence() {
    // --       row 1       --  //

    if (A[0] == 1 && A[1] == 1 && A[2] == 'e' && cplayer == 2) {
        if (A[5] == 2) {
            A[2] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else {
            if (A[8] == 2 && A[5] == 'e') {
                A[2] = 2;
                A[8] = 'e';
                cplayer = 1;
            } else {
                if (A[4] == 2) {
                    A[2] = 2;
                    A[4] = 'e';
                    cplayer = 1;
                } else {
                    if (A[6] == 2 && A[4] == 'e') {
                        A[2] = 2;
                        A[6] = 'e';
                        cplayer = 1;
                    }
                }
            }
        }
    }

    if (A[0] == 1 && A[2] == 1 && A[1] == 'e' && cplayer == 2) {
        if (A[4] == 2) {
            A[1] = 2;
            A[4] = 'e';
            cplayer = 1;
        }
        else {
            if (A[7] == 2 && A[4] == 'e') {
                A[1] = 2;
                A[7] = 'e';
                cplayer = 1;
            }
        }
    }
    if (A[1] == 1 && A[2] == 1 && A[0] == 'e' && cplayer == 2) {
        if (A[3] == 2) {
            A[0] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else {
            if (A[6] == 2 && A[3] == 'e') {
                A[0] = 2;
                A[6] = 'e';
                cplayer = 1;
            } else {
                if (A[4] == 2) {
                    A[0] = 2;
                    A[4] = 'e';
                    cplayer = 1;
                } else {
                    if (A[8] == 2 && A[4] == 'e') {
                        A[0] = 2;
                        A[8] = 'e';
                        cplayer = 1;
                    }
                }
            }
        }
    }
    // --       row 1       --  //

    // --       row 2       --  //
    if (A[3] == 1 && A[4] == 1 && A[5] == 'e' && cplayer == 2) {
        if (A[2] == 2) {
            A[2] = 'e';
            A[5] = 2;
            cplayer = 1
        } else if (A[8] == 2) {
            A[5] = 2;
            A[8] = 'e';
            cplayer = 1;
        }
    }

    if (A[3] == 1 && A[5] == 1 && A[4] == 'e' && cplayer == 2) {
        if (A[0] == 2) {
            A[4] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[1] == 2) {
            A[4] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[2] == 2) {
            A[4] = 2;
            A[2] = 'e';
            cplayer = 1;
        } else if (A[6] == 2) {
            A[4] = 2;
            A[6] = 'e';
            cplayer = 1;
        } else if (A[7] == 2) {
            A[4] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[8] == 2) {
            A[4] = 2;
            A[8] = 'e';
            cplayer = 1;
        }
    }

    if (A[4] == 1 && A[5] == 1 && A[3] == 'e' && cplayer == 2) {
        if (A[0] == 2) {
            A[3] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[6] == 2) {
            A[3] = 2;
            A[6] = 'e';
            cplayer = 1;
        }
    }

    // --       row 2       --  //

    // --       row 3       --  //

    if (A[6] == 1 && A[7] == 1 && A[8] == 'e' && cplayer == 2) {
        if (A[5] == 2) {
            A[8] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[2] == 2 && A[5] == 'e') {
            A[8] = 2;
            A[2] = 'e';
            cplayer = 1;
        } else if (A[4] == 2) {
            A[8] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[4] == 'e') {
            A[8] = 2;
            A[0] = 'e';
            cplayer = 1;
        }
    }

    if (A[6] == 1 && A[8] == 1 && A[7] == 'e' && cplayer == 2) {
        if (A[4] == 2) {
            A[7] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[1] == 2 && A[4] == 'e') {
            A[7] = 2;
            A[1] = 'e';
            cplayer = 1;
        }
    }

    if (A[7] == 1 && A[8] == 1 && A[6] == 'e' && cplayer == 2) {
        if (A[3] == 2) {
            A[6] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[3] == 'e') {
            A[6] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[4] == 2) {
            A[6] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[2] == 2 && A[4] == 'e') {
            A[6] = 2;
            A[2] = 'e';
            cplayer = 1;
        }
    }

    // --       row 3       --  //

    // --       column 1       --  //

    if (A[0] == 1 && A[3] == 1 && A[6] == 'e' && cplayer == 2) {
        if (A[7] == 2) {
            A[6] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else {
            if (A[8] == 2 && A[7] == 'e') {
                A[6] = 2;
                A[8] = 'e';
                cplayer = 1;
            } else {
                if (A[4] == 2) {
                    A[6] = 2;
                    A[4] = 'e';
                    cplayer = 1;
                } else {
                    if (A[2] == 2 && A[4] == 'e') {
                        A[6] = 2;
                        A[2] = 'e';
                        cplayer = 1;
                    }
                }
            }
        }
    }

    if (A[0] == 1 && A[2] == 1 && A[1] == 'e' && cplayer == 2) {
        if (A[4] == 2) {
            A[1] = 2;
            A[4] = 'e';
            cplayer = 1;
        }
        else {
            if (A[7] == 2 && A[4] == 'e') {
                A[1] = 2;
                A[7] = 'e';
                cplayer = 1;
            }
        }
    }
    if (A[1] == 1 && A[2] == 1 && A[0] == 'e' && cplayer == 2) {
        if (A[3] == 2) {
            A[0] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else {
            if (A[6] == 2 && A[3] == 'e') {
                A[0] = 2;
                A[6] = 'e';
                cplayer = 1;
            } else {
                if (A[4] == 2) {
                    A[0] = 2;
                    A[4] = 'e';
                    cplayer = 1;
                } else {
                    if (A[8] == 2 && A[4] == 'e') {
                        A[0] = 2;
                        A[8] = 'e';
                        cplayer = 1;
                    }
                }
            }
        }
    }

    // --       column 1       --  //

    // --       column 2       --  //

    if (A[1] == 1 && A[4] == 1 && A[7] == 'e' && cplayer == 2) {
        if (A[8] == 2) {
            A[8] = 'e';
            A[7] = 2;
            cplayer = 1
        } else if (A[6] == 2) {
            A[7] = 2;
            A[6] = 'e';
            cplayer = 1;
        }
    }

    if (A[1] == 1 && A[7] == 1 && A[4] == 'e' && cplayer == 2) {
        if (A[0] == 2) {
            A[4] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[3] == 2) {
            A[4] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[2] == 2) {
            A[4] = 2;
            A[2] = 'e';
            cplayer = 1;
        } else if (A[6] == 2) {
            A[4] = 2;
            A[6] = 'e';
            cplayer = 1;
        } else if (A[5] == 2) {
            A[4] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[8] == 2) {
            A[4] = 2;
            A[8] = 'e';
            cplayer = 1;
        }
    }

    if (A[4] == 1 && A[7] == 1 && A[1] == 'e' && cplayer == 2) {
        if (A[0] == 2) {
            A[1] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[2] == 2) {
            A[1] = 2;
            A[2] = 'e';
            cplayer = 1;
        }
    }

    // --       column 2       --  //

    // --       column 3       --  //

    if (A[2] == 1 && A[5] == 1 && A[8] == 'e' && cplayer == 2) {
        if (A[7] == 2) {
            A[8] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[6] == 2 && A[7] == 'e') {
            A[8] = 2;
            A[6] = 'e';
            cplayer = 1;
        } else if (A[4] == 2) {
            A[8] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[4] == 'e') {
            A[8] = 2;
            A[0] = 'e';
            cplayer = 1;
        }
    }

    if (A[2] == 1 && A[8] == 1 && A[5] == 'e' && cplayer == 2) {
        if (A[4] == 2) {
            A[5] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[3] == 2 && A[4] == 'e') {
            A[5] = 2;
            A[3] = 'e';
            cplayer = 1;
        }
    }

    if (A[5] == 1 && A[8] == 1 && A[2] == 'e' && cplayer == 2) {
        if (A[1] == 2) {
            A[2] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[1] == 'e') {
            A[2] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[4] == 2) {
            A[2] = 2;
            A[4] = 'e';
            cplayer = 1;
        } else if (A[6] == 2 && A[4] == 'e') {
            A[2] = 2;
            A[6] = 'e';
            cplayer = 1;
        }
    }

    // --       column 3       --  //

    // --       diagonal 1       --  //

    if (A[6] == 1 && A[4] == 1 && A[2] == 'e' && cplayer == 2) {
        if (A[1] == 2) {
            A[2] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[1] == 'e') {
            A[0] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else if (A[5] == 2) {
            A[2] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[8] == 2 && A[5] == 'e') {
            A[8] = 'e';
            A[2] = 2;
            cplayer = 1;
        }
    }

    if (A[6] == 1 && A[2] == 1 && A[4] == 'e' && cplayer == 2) {
        if (A[0] == 2) {
            A[4] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else if (A[3] == 2) {
            A[4] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[1] == 2) {
            A[4] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[7] == 2) {
            A[4] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[5] == 2) {
            A[4] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[8] == 2) {
            A[4] = 2;
            A[8] = 'e';
            cplayer = 1;
        }
    }

    if (A[4] == 1 && A[2] == 1 && A[6] == 'e' && cplayer == 2) {
        if (A[3] == 2) {
            A[6] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[0] == 2 && A[3] == 'e') {
            A[0] = 'e';
            A[6] = 2;
            cplayer = 1;
        } else if (A[7] == 2) {
            A[6] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[8] == 2 && A[7] == 'e') {
            A[8] = 'e';
            A[6] = 2;
            cplayer = 1;
        }
    }
    // --       diagonal 1       --  //

    // --       diagonal 2       --  //

    if (A[0] == 1 && A[4] == 1 && A[8] == 'e' && cplayer == 2) {
        if (A[7] == 2) {
            A[8] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[6] == 2 && A[7] == 'e') {
            A[6] = 'e';
            A[7] = 2;
            cplayer = 1;
        } else if (A[5] == 2) {
            A[8] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[2] == 2 && A[5] == 'e') {
            A[2] = 'e';
            A[8] = 2;
            cplayer = 1;
        }
    }

    if (A[0] == 1 && A[8] == 1 && A[4] == 'e' && cplayer == 2) {
        if (A[6] == 2) {
            A[4] = 2;
            A[6] = 'e';
            cplayer = 1;
        } else if (A[3] == 2) {
            A[4] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[1] == 2) {
            A[4] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[7] == 2) {
            A[4] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[5] == 2) {
            A[4] = 2;
            A[5] = 'e';
            cplayer = 1;
        } else if (A[2] == 2) {
            A[4] = 2;
            A[2] = 'e';
            cplayer = 1;
        }
    }

    if (A[4] == 1 && A[8] == 1 && A[0] == 'e' && cplayer == 2) {
        if (A[1] == 2) {
            A[0] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else if (A[2] == 2 && A[1] == 'e') {
            A[2] = 'e';
            A[0] = 2;
            cplayer = 1;
        } else if (A[3] == 2) {
            A[0] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else if (A[6] == 2 && A[3] == 'e') {
            A[6] = 'e';
            A[0] = 2;
            cplayer = 1;
        }
    }

    // --       diagonal 2       --  //
}

function neutral(advanced) {
    var k = 1;
    var l = 1;
    var index;
    var auto_move;
    var auto_move1;
    if (cplayer == 2) {
        while (k == 1) {
            if (advanced != 9) {
                auto_move = advanced;
                while (auto_move == advanced) {
                    auto_move = Math.floor(Math.random() * 9);
                }
            }
            else {
                auto_move = Math.floor(Math.random() * 9);
            }

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
}

function advanced_defence() {
    if (A[2] == 1 && A[5] == 1 && A[7] == 1 && A[8] == 2) {
        neutral(8);
    }
    if (A[0] == 1 && A[3] == 1 && A[7] == 1 && A[6] == 2) {
        neutral(6);
    }
    if (A[1] == 1 && A[2] == 1 && A[3] == 1 && A[0] == 2) {
        neutral(0);
    }
    if (A[1] == 1 && A[5] == 1 && A[8] == 1 && A[2] == 2) {
        neutral(2);
    }
    if (A[1] == 1 && A[3] == 1 && A[6] == 1 && A[0] == 2) {
        neutral(0);
    }
    if (A[3] == 1 && A[7] == 1 && A[8] == 1 && A[6] == 2) {
        neutral(6);
    }
    if (A[0] == 1 && A[1] == 1 && A[5] == 1 && A[2] == 2) {
        neutral(2);
    }
    if (A[6] == 1 && A[7] == 1 && A[5] == 1 && A[8] == 2) {
        neutral(8);
    }


    if (A[6] == 1 && A[2] == 1 && A[8] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[6] == 1 && A[2] == 1 && A[0] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[6] == 1 && A[2] == 1 && A[1] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[6] == 1 && A[2] == 1 && A[7] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[6] == 1 && A[2] == 1 && A[3] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[6] == 1 && A[2] == 1 && A[5] == 1 && A[4] == 2) {
        neutral(4);
    }


    if (A[0] == 1 && A[8] == 1 && A[7] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[0] == 1 && A[8] == 1 && A[6] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[0] == 1 && A[8] == 1 && A[2] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[0] == 1 && A[8] == 1 && A[1] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[0] == 1 && A[8] == 1 && A[3] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[0] == 1 && A[8] == 1 && A[5] == 1 && A[4] == 2) {
        neutral(4);
    }


    if (A[1] == 1 && A[7] == 1 && A[5] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[1] == 1 && A[7] == 1 && A[3] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[1] == 1 && A[7] == 1 && A[0] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[1] == 1 && A[7] == 1 && A[8] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[1] == 1 && A[7] == 1 && A[2] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[1] == 1 && A[7] == 1 && A[6] == 1 && A[4] == 2) {
        neutral(4);
    }


    if (A[3] == 1 && A[5] == 1 && A[7] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[3] == 1 && A[5] == 1 && A[1] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[3] == 1 && A[5] == 1 && A[6] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[3] == 1 && A[5] == 1 && A[0] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[3] == 1 && A[5] == 1 && A[2] == 1 && A[4] == 2) {
        neutral(4);
    }
    if (A[3] == 1 && A[5] == 1 && A[8] == 1 && A[4] == 2) {
        neutral(4);
    }


    if (A[0] == 1 && A[4] == 1 && A[5] == 1 && (A[8] == 2 || A[3] == 2) && cplayer == 2) {
        if (A[6] == 2 && A[3] == 'e') {
            A[3] = 2;
            A[6] = 'e';
            cplayer = 1;
        } else if (A[7] == 2 && A[8] == 'e') {
            A[8] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[6] == 2 && A[7] == 'e') {
            A[6] = 'e';
            A[7] = 2;
            cplayer = 1;
        } else if (A[7] == 2 && A[6] == 'e') {
            A[7] = 'e';
            A[6] = 2;
            cplayer = 1;
        } else if (A[1] == 2 && A[2] == 'e') {
            A[1] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else if (A[2] == 2 && A[1] == 'e') {
            A[1] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else {
            neutral(9);
        }
    }

    if (A[0] == 1 && A[4] == 1 && A[7] == 1 && (A[8] == 2 || A[1] == 2) && cplayer == 2) {
        if (A[2] == 2 && A[1] == 'e') {
            A[1] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else if (A[5] == 2 && A[8] == 'e') {
            A[5] = 'e';
            A[8] = 2;
            cplayer = 1;
        } else if (A[6] == 2 && A[3] == 'e') {
            A[3] = 2;
            A[6] = 'e';
            cplayer = 1;
        } else if (A[3] == 2 && A[6] == 'e') {
            A[3] = 'e';
            A[6] = 2;
            cplayer = 1;
        } else if (A[2] == 2 && A[5] == 'e') {
            A[2] = 'e';
            A[5] = 2;
            cplayer = 1;
        } else if (A[5] == 2 && A[2] == 'e') {
            A[5] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else {
            neutral(9);
        }
    }

    if (A[0] == 1 && A[4] == 1 && A[6] == 1 && (A[8] == 2 || A[3] == 2) && cplayer == 2) {
        if (A[1] == 2 && A[2] == 'e') {
            A[1] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else if (A[5] == 2 && A[8] == 'e') {
            A[5] = 'e';
            A[8] = 2;
            cplayer = 1;
        } else if (A[7] == 2 && A[8] == 'e') {
            A[7] = 'e';
            A[8] = 2;
            cplayer = 1;
        } else if (A[2] == 2 && A[1] == 'e') {
            A[1] = 2;
            A[2] = 'e';
            cplayer = 1;
        } else if (A[8] == 2 && A[7] == 'e') {
            A[8] = 'e';
            A[7] = 2;
            cplayer = 1;
        } else {
            neutral(9);
        }
    }


    if (A[0] == 1 && A[4] == 1 && A[2] == 1 && (A[8] == 2 || A[6] == 2) && cplayer == 2) {
        if (A[7] == 2 && A[8] == 'e') {
            A[7] = 'e';
            A[8] = 2;
            cplayer = 1;
        } else if (A[7] == 2 && A[6] == 'e') {
            A[7] = 'e';
            A[6] = 2;
            cplayer = 1;
        } else if (A[5] == 2 && A[8] == 'e') {
            A[5] = 'e';
            A[8] = 2;
            cplayer = 1;
        } else if (A[3] == 2 && A[6] == 'e') {
            A[6] = 2;
            A[3] = 'e';
            cplayer = 1;
        } else {
            neutral(9);
        }
    }


    if (A[6] == 1 && A[4] == 1 && A[5] == 1 && (A[3] == 2 || A[2] == 2) && cplayer == 2) {
        if (A[1] == 2 && A[2] == 'e') {
            A[1] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else if (A[0] == 2 && A[3] == 'e') {
            A[0] = 'e';
            A[3] = 2;
            cplayer = 1;
        } else if (A[1] == 2 && A[0] == 'e') {
            A[1] = 'e';
            A[0] = 2;
            cplayer = 1;
        } else if (A[7] == 2 && A[8] == 'e') {
            A[8] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else if (A[8] == 2 && A[7] == 'e') {
            A[7] = 2;
            A[8] = 'e';
            cplayer = 1;
        } else {
            neutral(9);
        }
    }


    if (A[6] == 1 && A[4] == 1 && A[1] == 1 && (A[7] == 2 || A[2] == 2) && cplayer == 2) {
        if (A[5] == 2 && A[2] == 'e') {
            A[5] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else if (A[8] == 2 && A[7] == 'e') {
            A[8] = 'e';
            A[7] = 2;
            cplayer = 1;
        } else if (A[3] == 2 && A[0] == 'e') {
            A[3] = 'e';
            A[0] = 2;
            cplayer = 1;
        } else if (A[0] == 2 && A[3] == 'e') {
            A[3] = 2;
            A[0] = 'e';
            cplayer = 1;
        } else {
            neutral(9);
        }
    }


    if (A[6] == 1 && A[4] == 1 && A[8] == 1 && (A[0] == 2 || A[2] == 2) && cplayer == 2) {
        if (A[5] == 2 && A[2] == 'e') {
            A[5] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else if (A[1] == 2 && A[0] == 'e') {
            A[1] = 'e';
            A[0] = 2;
            cplayer = 1;
        } else if (A[3] == 2 && A[0] == 'e') {
            A[3] = 'e';
            A[0] = 2;
            cplayer = 1;
        } else if (A[1] == 2 && A[2] == 'e') {
            A[2] = 2;
            A[1] = 'e';
            cplayer = 1;
        } else {
            neutral(9);
        }
    }


    if (A[6] == 1 && A[4] == 1 && A[0] == 1 && (A[2] == 2 || A[8] == 2) && cplayer == 2) {
        if (A[1] == 2 && A[2] == 'e') {
            A[1] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else if (A[5] == 2 && A[2] == 'e') {
            A[5] = 'e';
            A[2] = 2;
            cplayer = 1;
        } else if (A[5] == 2 && A[8] == 'e') {
            A[5] = 'e';
            A[8] = 2;
            cplayer = 1;
        } else if (A[7] == 2 && A[8] == 'e') {
            A[8] = 2;
            A[7] = 'e';
            cplayer = 1;
        } else {
            neutral(9);
        }
    }
}
/*This function enables the computer to make a move*/
function auto_move() {
    if (wins == 0 && cplayer == 2) {

        //  --      Codes for Offence       --  //

        offence();

        //  --      Codes for Offence       --  //
        advanced_defence();
        //  --      Codes for Defence       --  //

        defence();

        //  --      Codes for Defence       --  //



        neutral(9);
        color();
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
