package fr.laposte.exemple;
	
public interface IInstrumentMusique {
	enum Note{DO, RE, MI, FA, SOL, LA, SI}; // static & final
	void jouer(); // automatiquement public
	void ajuster();
	void faireUneNote(Note note);
}
