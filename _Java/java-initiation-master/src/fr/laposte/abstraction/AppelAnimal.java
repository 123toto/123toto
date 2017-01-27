package fr.laposte.abstraction;

public class AppelAnimal {
	private static Animal personne, rex;

	private static void faireParler(Animal animal) {
		animal.parler();
	}
	
	public static void main(String[] args) {
		
		/* impossible car classe abstraite
		personne = new Animal("Sans nom");
		faireParler(personne); //Je suis un animal
		*/
		
		rex	 = new Chien("Rex");
		faireParler(rex); //je suis le chien Rex, et je dis WOUF WOUF
	}

}
