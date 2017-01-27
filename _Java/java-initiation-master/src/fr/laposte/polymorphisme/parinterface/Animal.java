package fr.laposte.polymorphisme.parinterface;

/**
 * Classe Animal
 * @author simplon
 *
 */
public class Animal {
	
	//propriété de la classe
	private static int totalAnimal = 0;
	 
	//propriété de l'objet
	protected String nom; 
	private int nombreDePatte;
	
	//constructeur
	public Animal(String nom) {
		super(); //appel du constructeur parent
		this.nom = nom;
		totalAnimal++;
	}
	
	//une methode de l'objet
	private String formulerMonNom() {
		return "Je m'appelle " + this.nom; //appel de la propri�t� nom
	}

	//une methode de l'objet
	public void parler() {
		System.out.println(this.formulerMonNom()); //appel d'une m�thode de l'objet
		System.out.println("Je suis un animal");			
	}
	
	//une methode de la classe
	public static void afficherNombreDAnimaux() {
		System.out.println("Il y a " + totalAnimal + " animaux");
		
	}

}
