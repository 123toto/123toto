window.onload = function() {                            // empeche l'execution du code avant le chargement complet de la page
    var canvas = document.getElementById("canvas0"); // on recupere l'objet canvas dans la variable canvas, on verifie ensuite que tout s'est bien passe
        if (!canvas){
            alert ("Impossible de récupérer le canvas");
            return;
        }

    var ctx = canvas.getContext("2d");              // on recupere le contexte du canvas, ce sont les methodes de cet objet qu'on utilise pour dessiner sur le canvas
        if (!ctx){
            alert ("Impossible de récupérer le context du canvas");
            return;
        }

    canvas.width = 400;
    canvas.heigth = 400;
    var nombre = 0;
    var intervalle = setInterval(animation, 1000/5);    // boucle qui "envoie" la fonction animation toute les demi-secondes ici

    function animation() {
        nombre++;
        var mon_image = new Image();
        switch(nombre){
            case 1:
                mon_image.src="images/tete400.png";
                ctx.drawImage(mon_image, 0, 0, 400, 400, 0, 0, 400, 400);
                break;
            case 2:
                mon_image.src="images/corps400.png";
                ctx.drawImage(mon_image, 0, 0, 400, 400, 0, 0, 400, 400);
                break;
            case 3:
                mon_image.src="images/brasG400.png";
                ctx.drawImage(mon_image, 0, 0, 400, 400, 0, 0, 400, 400);
                break;
            case 4:
                mon_image.src="images/brasD400.png";
                ctx.drawImage(mon_image, 0, 0, 400, 400, 0, 0, 400, 400);
                break;
            case 5:
                mon_image.src="images/jambeG400.png";
                ctx.drawImage(mon_image, 0, 0, 400, 400, 0, 0, 400, 400);
                break;
            case 6:
                mon_image.src="images/jambeD400.png";
                ctx.drawImage(mon_image, 0, 0, 400, 400, 0, 0, 400, 400);
                break;
            case 7:
                mon_image.src="images/piedG400.png";
                ctx.drawImage(mon_image, 0, 0, 400, 400, 0, 0, 400, 400);
                break;
            case 8:
                mon_image.src="images/piedD400.png";
                ctx.drawImage(mon_image, 0, 0, 400, 400, 0, 0, 400, 400);
                break;
            case 9:
                mon_image.src="images/corde400.png";
                ctx.drawImage(mon_image, 0, 0, 400, 400, 0, 0, 400, 400);
                break;
        }
        if (nombre > 9) {
            clearInterval(intervalle);
        }
    }

}