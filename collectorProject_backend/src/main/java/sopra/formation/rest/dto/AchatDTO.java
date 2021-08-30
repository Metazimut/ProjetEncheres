package sopra.formation.rest.dto;

import sopra.formation.model.Publication;
import sopra.formation.model.Views;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Commentaire;
import sopra.formation.model.ParticipationEnchere;

public class AchatDTO {
	
	@JsonView(Views.ViewAchat.class)
	private Publication publication;
	@JsonView(Views.ViewAchat.class)
	private List<Commentaire> commentaires;
	@JsonView(Views.ViewAchat.class)
	private List<ParticipationEnchere> encheres;
	
	
	public AchatDTO() {
		super();
	}


	public AchatDTO(Publication publication, List<Commentaire> commentaires, List<ParticipationEnchere> encheres) {
		super();
		this.publication = publication;
		this.commentaires = commentaires;
		this.encheres = encheres;
	}


	public Publication getPublication() {
		return publication;
	}


	public void setPublication(Publication publication) {
		this.publication = publication;
	}


	public List<Commentaire> getCommentaires() {
		return commentaires;
	}


	public void setCommentaires(List<Commentaire> commentaires) {
		this.commentaires = commentaires;
	}


	public List<ParticipationEnchere> getEncheres() {
		return encheres;
	}


	public void setEncheres(List<ParticipationEnchere> encheres) {
		this.encheres = encheres;
	}
	
	
	
	

}
