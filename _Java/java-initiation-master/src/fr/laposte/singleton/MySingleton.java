package fr.laposte.singleton;

public class MySingleton {
	private static MySingleton singleton = null;
    protected String name;
    
    public static MySingleton getInstance() {
        if(singleton == null) {
        	singleton = new MySingleton();  
        }
        return singleton;
    }
    
	public String getName() {
		if (singleton == null) {
			
		}
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
