window.onload = function() {
    var canvas = document.getElementById("canvas1");
        if (!canvas){
            alert ("Impossible de récupérer le canvas");
            return;
        }

    var ctx = canvas.getContext("2d");
        if (!ctx){
            alert ("Impossible de récupérer le context du canvas");
            return;
        }
    var z = 0;
    var nombre = 0;
    ctx.fillStyle = "red";
    ctx.font="22px Arial";
    ctx.fillText("P", 26, 33);
    var intervalle = setInterval(function(){
        z = z + 13;
        switch(nombre){
            case 1:
                ctx.textAmign="center";
                ctx.fillText("r", z+15, 33);
                break;
            case 2:
                ctx.textAmign="center";
                ctx.fillText("e", z+10, 33);
                break;
            case 3:
                ctx.textAmign="center";
                ctx.fillText("m", z+10, 33);
                break;
            case 4:
                ctx.textAmign="center";
                ctx.fillText("i", z+17, 33);
                break;
            case 5:
                ctx.textAmign="center";
                ctx.fillText("e", z+10, 33);
                break;
            case 6:
                ctx.textAmign="center";
                ctx.fillText("r", z+10, 33);
                break;
            case 7:
                ctx.textAmign="center";
                ctx.fillText(" ", z, 33);
                break;
            case 8:
                ctx.textAmign="center";
                ctx.fillText("j", z+7, 33);
                break;
            case 9:
                ctx.textAmign="center";
                ctx.fillText("o", z, 33);
                break;
            case 10:
                ctx.textAmign="center";
                ctx.fillText("u", z, 33);
                break;
            case 11:
                ctx.textAmign="center";
                ctx.fillText("e", z, 33);
                break;
            case 12:
                ctx.textAmign="center";
                ctx.fillText("u", z, 33);
                break;
            case 13:
                ctx.textAmign="center";
                ctx.fillText("r", z, 33);
                break;
            case 14:
                ctx.textAmign="center";
                ctx.fillText(":", z, 33);
                break;
            case 15:
                ctx.textAmign="center";
                ctx.fillText("E", z+5, 33);
                break;
            case 16:
                ctx.textAmign="center";
                ctx.fillText("n", z+8, 33);
                break;
            case 17:
                ctx.textAmign="center";
                ctx.fillText("t", z+9, 33);
                break;
            case 18:
                ctx.textAmign="center";
                ctx.fillText("r", z+4, 33);
                break;
            case 19:
                ctx.textAmign="center";
                ctx.fillText("e", z, 33);
                break;
            case 20:
                ctx.textAmign="center";
                ctx.fillText("z", z, 33);
                break;
            case 21:
                ctx.textAmign="center";
                ctx.fillText(" ", z, 33);
                break;
            case 22:
                ctx.textAmign="center";
                ctx.fillText("u", z, 33);
                break;
            case 23:
                ctx.textAmign="center";
                ctx.fillText("n", z, 33);
                break;
            case 24:
                ctx.textAmign="center";
                ctx.fillText(" ", z, 33);
                break;
            case 25:
                ctx.textAmign="center";
                ctx.fillText("m", z-5, 33);
                break;
            case 26:
                ctx.textAmign="center";
                ctx.fillText("o", z, 33);
                break;
            case 27:
                ctx.textAmign="center";
                ctx.fillText("t", z, 33);
                break;
                case 28:
                ctx.textAmign="center";
                ctx.fillText(":", z, 33);
                break;
            }
            nombre++;
            if (nombre > 28) {
                    clearInterval(intervalle);
            }
        }, 20);
    }  
