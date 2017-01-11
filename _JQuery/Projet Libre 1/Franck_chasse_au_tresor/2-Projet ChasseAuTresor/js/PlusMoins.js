function comparerNombre() {
    while (INTERVAL > 0) {
        while (nombreSaisi !== nombreATrouver) {
        // cas ou on est au dessus 
            if (nombreSaisi > nombreATrouver) {
                alert ("Tu es au dessus");
                essaiUtilisateur = prompt("Choisis un nombre entre 1 et 10");
            }
        //cas ou on est en dessous
            else if (nombreSaisi < nombreATrouver) {
                nbreEssai -= 1;
                alert ("Tu es en dessous");
                essaiUtilisateur = prompt("Choisis un nombre entre 1 et 10");
            }
        }      
        //en cas de gain
        alert ("tu as trouvé");
        niveau += 1;
        clearInterval(INTERVAL);
        return true;
        };
        alert ("tu as trouvé");
        niveau += 1;
        clearInterval(INTERVAL);
    }