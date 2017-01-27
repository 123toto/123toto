package fr.laposte.exemple;

public class Violon implements IInstrumentMusique{
	
	@Override
	public void jouer() {
		System.out.println("Violon.jouer");
		for (Note note : Note.values()) {
			faireUneNote(note);
		}
		
	}

	@Override
	public void ajuster() {
		System.out.println("Violon.ajuster");
		faireUneNote(Note.RE);
		
	}

	@Override
	public void faireUneNote(Note note) {
		System.out.println(note);
	}

}
