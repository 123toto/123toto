window.onclick = function() {
    var canvas = document.getElementById("canvas2");
        if (!canvas){
            alert ("Impossible de récupérer le canvas");
            return;
        }

    var ctx = canvas.getContext("2d");
        if (!ctx){
            alert ("Impossible de récupérer le context du canvas");
            return;
        }
    var z = 17;
    var nombre = 0;
        ctx.fillStyle = "red";
        ctx.font="22px Arial";
        ctx.fillText("D", 26, 30);
        var intervalle = setInterval(function(){
            z = z + 13;
            switch(nombre){
                case 1:
                    ctx.textAmign="center";
                    ctx.fillText("e", z, 30);
                    break;
                case 2:
                    ctx.textAmign="center";
                    ctx.fillText("u", z, 30);
                    break;
                case 3:
                    ctx.textAmign="center";
                    ctx.fillText("x", z, 30);
                    break;
                case 4:
                    ctx.textAmign="center";
                    ctx.fillText("i", z, 30);
                    break;
                case 5:
                    ctx.textAmign="center";
                    ctx.fillText("è", z-6, 30);
                    break;
                case 6:
                    ctx.textAmign="center";
                    ctx.fillText("m", z-5, 30);
                    break;
                case 7:
                    ctx.textAmign="center";
                    ctx.fillText("e", z, 30);
                    break;
                case 8:
                    ctx.textAmign="center";
                    ctx.fillText(" ", z, 30);
                    break;
                case 9:
                    ctx.textAmign="center";
                    ctx.fillText("j", z+7, 30);
                    break;
                case 10:
                    ctx.textAmign="center";
                    ctx.fillText("o", z, 30);
                    break;
                case 11:
                    ctx.textAmign="center";
                    ctx.fillText("u", z, 30);
                    break;
                case 12:
                    ctx.textAmign="center";
                    ctx.fillText("e", z, 30);
                    break;
                case 13:
                    ctx.textAmign="center";
                    ctx.fillText("u", z, 30);
                    break;
                case 14:
                    ctx.textAmign="center";
                    ctx.fillText("r", z, 30);
                    break;
                case 15:
                    ctx.textAmign="center";
                    ctx.fillText(":", z, 30);
                    break;
                case 16:
                    ctx.textAmign="center";
                    ctx.fillText("E", z+5, 30);
                    break;
                case 17:
                    ctx.textAmign="center";
                    ctx.fillText("n", z+8, 30);
                    break;
                case 18:
                    ctx.textAmign="center";
                    ctx.fillText("t", z+9, 30);
                    break;
                case 19:
                    ctx.textAmign="center";
                    ctx.fillText("r", z+4, 30);
                    break;
                case 20:
                    ctx.textAmign="center";
                    ctx.fillText("e", z, 30);
                    break;
                case 21:
                    ctx.textAmign="center";
                    ctx.fillText("z", z, 30);
                    break;
                case 22:
                    ctx.textAmign="center";
                    ctx.fillText(" ", z, 30);
                    break;
                case 23:
                    ctx.textAmign="center";
                    ctx.fillText("u", z, 30);
                    break;
                case 24:
                    ctx.textAmign="center";
                    ctx.fillText("n", z, 30);
                    break;
                case 25:
                    ctx.textAmign="center";
                    ctx.fillText("e", z, 30);
                    break;
                case 26:
                    ctx.textAmign="center";
                    ctx.fillText(" ", z-5, 30);
                    break;
                case 27:
                    ctx.textAmign="center";
                    ctx.fillText("l", z, 30);
                    break;
                case 28:
                    ctx.textAmign="center";
                    ctx.fillText("e", z-2, 30);
                    break;
                 case 29:
                    ctx.textAmign="center";
                    ctx.fillText("t", z, 30);
                    break;
                case 30:
                    ctx.textAmign="center";
                    ctx.fillText("t", z, 30);
                    break;
                case 31:
                    ctx.textAmign="center";
                    ctx.fillText("r", z, 30);
                    break;
                case 32:
                    ctx.textAmign="center";
                    ctx.fillText("e", z, 30);
                 case 33:
                    ctx.textAmign="center";
                    ctx.fillText(":", z, 30);
                    break;
            }
            nombre++;
            if (nombre > 33) {
                    clearInterval(intervalle);
            }
        }, 20);
    }  
