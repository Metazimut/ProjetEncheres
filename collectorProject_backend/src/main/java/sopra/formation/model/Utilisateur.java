package sopra.formation.model;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;


@Entity
@DiscriminatorValue("user")
public class Utilisateur extends Compte {
	
	@Column(name = "moyenPaiement")
	@JsonView(Views.ViewCommon.class)
	private MoyenPaiement moyenPaiement;
	
	@OneToMany(mappedBy = "auteur")
	private List<Field> fields = new ArrayList<Field>();
	
	@OneToMany(mappedBy = "utilisateur")
	private List<Commentaire> commentaires = new ArrayList<Commentaire>();
	
	@OneToMany(mappedBy = "publicateur")
	private List<Publication> publications = new ArrayList<Publication>();
	
	@OneToMany(mappedBy = "utilisateur")
	private List<ParticipationEnchere> encheres = new ArrayList<ParticipationEnchere>();
	
	@OneToMany(mappedBy = "emetteur")
	private List<Message> envoi = new ArrayList<Message>();	
	
	@OneToMany(mappedBy = "recepteur")
	private List<Message> reçoit = new ArrayList<Message>();

	@OneToMany(mappedBy = "utilisateur")
	private List<Adresse> adresses = new ArrayList<Adresse>();



	
	public Utilisateur() {
		super();
	}

	public MoyenPaiement getMoyenPaiement() {
		return moyenPaiement;
	}

	public void setMoyenPaiement(MoyenPaiement moyenPaiement) {
		this.moyenPaiement = moyenPaiement;
	}

	public List<Field> getFields() {
		return fields;
	}

	public void setFields(List<Field> fields) {
		this.fields = fields;
	}

	public List<Commentaire> getCommentaires() {
		return commentaires;
	}

	public void setCommentaires(List<Commentaire> commentaires) {
		this.commentaires = commentaires;
	}

	public List<Publication> getPublications() {
		return publications;
	}

	public void setPublications(List<Publication> publications) {
		this.publications = publications;
	}

	public List<ParticipationEnchere> getEncheres() {
		return encheres;
	}

	public void setEncheres(List<ParticipationEnchere> encheres) {
		this.encheres = encheres;
	}

	public List<Message> getEnvoi() {
		return envoi;
	}

	public void setEnvoi(List<Message> envoi) {
		this.envoi = envoi;
	}

	public List<Message> getReçoit() {
		return reçoit;
	}

	public void setReçoit(List<Message> reçoit) {
		this.reçoit = reçoit;
	}

	@Override
	public String toString() {
		return "Utilisateur [moyenPaiement=" + moyenPaiement + ", fields=" + fields + ", commentaires=" + commentaires
				+ ", publications=" + publications + ", encheres=" + encheres + ", envoi=" + envoi + ", reçoit="
				+ reçoit + "]";
	}


	

}
