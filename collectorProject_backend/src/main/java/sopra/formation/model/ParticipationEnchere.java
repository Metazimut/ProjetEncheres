package sopra.formation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "participatienEnchere")
public class ParticipationEnchere {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Column(name = "prixProposition")
	@JsonView(Views.ViewCommon.class)
	private Long prixProposition;
	@Column(name = "placeNb")
	@JsonView(Views.ViewCommon.class)
	private Integer placeNb;
	@ManyToOne
	@JoinColumn(name = "utilisateur_id")
	@JsonView({Views.ViewParticipationEnchere.class,Views.ViewAchat.class})
	private Utilisateur utilisateur;
	@ManyToOne
	@JoinColumn(name = "publication_id")
	@JsonView(Views.ViewParticipationEnchere.class)
	private Publication publication;
	
	public ParticipationEnchere() {
		super();
	}

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

	public Long getPrixProposition() {
		return prixProposition;
	}

	public void setPrixProposition(Long prixProposition) {
		this.prixProposition = prixProposition;
	}

	public int getPlaceNb() {
		return placeNb;
	}

	public void setPlaceNb(int placeNb) {
		this.placeNb = placeNb;
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
		return "ParticipationEnchere [id=" + id + ", version=" + version + ", prixProposition=" + prixProposition
				+ ", placeNb=" + placeNb + ", publication=" + publication + "]";
	}
	
}
