package sopra.formation.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonFormat;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "Commentaire")
public class Commentaire {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;

	@Version
	@JsonView(Views.ViewCommon.class)
    private int version;
	
	@Column(name = "message")
	@JsonView(Views.ViewCommon.class)
	private String message;
	
	@Temporal(TemporalType.TIMESTAMP)
	@JsonView(Views.ViewCommon.class)
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
	private Date dateCreation;
	
	@ManyToOne
	@JoinColumn(name = "utilisateur_id")
	@JsonView(Views.ViewCommentaire.class)
	private Utilisateur utilisateur ;
	
	@ManyToOne
	@JoinColumn(name = "publication_id")
	@JsonView(Views.ViewCommentaire.class)
	private Publication publication ;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public Publication getPublication() {
		return publication;
	}

	public void setPublication(Publication publication) {
		this.publication = publication;
	}

	@Override
	public String toString() {
		return "Commentaire [id=" + id + ", version=" + version + ", message=" + message + ", dateCreation="
				+ dateCreation + ", utilisateur=" + utilisateur + ", publication=" + publication + "]";
	}
	
	
}
