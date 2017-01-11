function limiterMotDePasse() {
    if (nombreSaisi.length == niveau) {
        console.log (nombreSaisi);
        $(".btn").attr('disabled', 'disabled');
    }
}