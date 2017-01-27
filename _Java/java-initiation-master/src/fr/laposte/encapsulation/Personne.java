package fr.laposte.encapsulation;

public class Personne {
	protected String nom;
	protected String prenom;
	protected int age;
	protected boolean enCours;
	/**
	 * @param nom
	 * @param prenom
	 * @param age
	 * @param enCours
	 */
	public Personne(String nom, String prenom, int age, boolean enCours) {
		super();
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.enCours = enCours;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public boolean isEnCours() {
		return enCours;
	}
	public void setEnCours(boolean enCours) {
		this.enCours = enCours;
	}
}
