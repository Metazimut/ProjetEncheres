package sopra.formation.model;

public class Views {
	public static class ViewCommon {}
	
	public static class ViewCompte extends ViewCommon {}
	
	public static class ViewAdmin extends ViewCompte {}

	public static class ViewUtilisateur extends ViewCompte {}
	
	public static class ViewAdresse extends ViewCommon {}

	public static class ViewPublication extends ViewCommon {}
	
	public static class ViewParticipationEnchere extends ViewCommon {}
	
	public static class ViewCategorie extends ViewCommon {}
	
	public static class ViewMessageField extends ViewCommon {}
	
	public static class ViewField extends ViewCommon {}
	
	public static class ViewMessage extends ViewCommon {}
	
	public static class ViewConnetion extends ViewCommon {}

	public static class ViewCommentaire extends ViewCommon {}

	
}