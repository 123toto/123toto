package fr.laposte.heritage;

public class Appel {
	private static Chien rex;

	public static void main(String[] args) {
		rex	 = new Chien("Rex");
		rex.parler();
	}
}