package fr.laposte.polymorphisme.parinterface;

import java.util.ArrayList;

public class Dresseur {

	public Dresseur() {
	}
	
	public void bouger(ArrayList<IMouvement> possesions) {
		for (IMouvement possesion : possesions) {
			possesion.bouger();
		}
	}
}
