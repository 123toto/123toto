package fr.laposte.singleton;

public class AppelSingleton {
	static MySingleton single, single2;
	public static void main(String[] args) {

		single = MySingleton.getInstance();
		single.setName("Arthur");
		System.out.println(single.getName()); // Arthur

		single2 = MySingleton.getInstance();
		System.out.println(single2.getName()); // Arthur

	}
}
