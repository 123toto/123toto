package fr.laposte.statique;

public class AppelAnimal {
	public static void main(String[] args) {
		Animal animal = new Animal("titi",2); //creation animal
		
		animal.parler(); //appel d'une m�thode d'instance
	
		Animal.afficherNombreDAnimaux(); //appel d'une m�thode de classe
	}
}
