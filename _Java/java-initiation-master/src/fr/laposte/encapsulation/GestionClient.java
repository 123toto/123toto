package fr.laposte.encapsulation;

public class GestionClient {

	public GestionClient() {
		// TODO Auto-generated constructor stub
	}
	public static void main(String[] args) {
		Client client = new Client("Dupont", "Jean", 52, true);
		client.setNumeroClient(56842);
		System.out.println(client.toString());
	}
}
