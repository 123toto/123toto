package fr.laposte.polymorphisme.paroverload;

public class Oiseau {
	public Oiseau() {
	}

	public void voler() {
		this.voler("avec mes ailes");
	}
	
	public void voler(String complement) {
		System.out.println("je vole " + complement);
		
	}
	
	public void voler(int nombreCompagnon) {
		System.out.println("je décolle avec " + nombreCompagnon + " compagnons !!!!");
	}
}
