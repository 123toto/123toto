package fr.laposte.encapsulation;

public class Client extends Personne {
	
	private int numeroClient;

	public Client(String nom, String prenom, int age, boolean enCours) {
		super(nom, prenom, age, enCours);

	}
	
	

	@Override
	public String toString() {
		return "Client [numeroClient=" + numeroClient + ", nom=" + nom + ", prenom=" + prenom + ", age=" + age
				+ ", enCours=" + enCours + "]";
	}



	public int getNumeroClient() {
		return numeroClient;
	}

	public void setNumeroClient(int numeroClient) {
		this.numeroClient = numeroClient;
	}

	
}
