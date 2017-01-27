package fr.laposte.polymorphisme.parinterface;

import java.util.ArrayList;

public class Proprietaire {

	private Oie monOie;
	private Pingouin monPingouin;
	private Voiture maVoiture;
	private Dresseur monDresseur;
	
	public Proprietaire() {
		this.monOie = new Oie("Gertrude");
		this.monPingouin = new Pingouin("Jasper");
		this.maVoiture = new Voiture();
		this.monDresseur = new Dresseur();
	}
	
	public void bougerMesPossesions() {
		ArrayList<IMouvement> cEstAMoi = new ArrayList<IMouvement>();
		cEstAMoi.add(this.monPingouin);
		cEstAMoi.add(monOie);
		cEstAMoi.add(this.maVoiture);
		this.monDresseur.bouger(cEstAMoi);
	}
}
