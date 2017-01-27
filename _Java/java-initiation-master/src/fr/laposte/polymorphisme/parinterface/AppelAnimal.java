package fr.laposte.polymorphisme.parinterface;

public class AppelAnimal {
	private static Animal personne, rex, felix;

	private static void faireParler(Animal animal) {
		animal.parler();
	}
	
	public static void main(String[] args) {
		personne = new Animal("Sans nom");
		rex	 = new Chien("Rex");
		felix = new Chat("Felix");
		
		faireParler(personne); //Je suis un animal
		faireParler(rex); //je suis le chien Rex, et je dis WOUF WOUF
		faireParler(felix); //Je suis un animal & je suis le chat Felix, et je dis MIAOU
		
		Animal.afficherNombreDAnimaux(); //appel d'une méthode de classe
	}

}
