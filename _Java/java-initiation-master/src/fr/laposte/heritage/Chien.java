package fr.laposte.heritage;

public final class Chien extends Animal {
	
	private final int nombreCollier;

	public Chien(String nom) {
		super("chien", nom); 
		this.nombreCollier = 0;
	}
    
	public final void parler() {
		System.out.println("C'est le chien " + this.nom + " qui parle :"); //appel de la propri�t� parente
		System.out.println(this.sAnnoncer()); //appel de la méthode du parent
	}
	
}
