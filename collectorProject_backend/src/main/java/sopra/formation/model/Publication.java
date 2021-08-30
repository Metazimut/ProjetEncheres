package sopra.formation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "publication")
public class Publication {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Column(name = "nom")
	@JsonView(Views.ViewCommon.class)
	private String nom;
	@Column(name = "description")
	@JsonView(Views.ViewCommon.class)
	private String description;
	@Column(name = "img")
	@JsonView(Views.ViewCommon.class)
	private String img;
	@Column(name = "prixDepart")
	@JsonView(Views.ViewCommon.class)
	private Long prixDepart;
	@Column(name = "prixActuel")
	@JsonView(Views.ViewCommon.class)
	private Long prixActuel;
	@Column(name = "dateEcheance")
	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
	@JsonView(Views.ViewCommon.class)
	private Date dateEcheance;
	@ManyToOne
	@JoinColumn(name = "publicateur_id")
	@JsonView(Views.ViewPublication.class)
	private Utilisateur publicateur;
	@ManyToOne
	@JoinColumn(name = "categorie_id")
	@JsonView(Views.ViewPublication.class)
	private Categorie categorie;
	@OneToMany(mappedBy = "publication")
	@JsonIgnore
	private List<ParticipationEnchere> encheres = new ArrayList<ParticipationEnchere>();
	@OneToMany(mappedBy = "publication")
	@JsonIgnore
	private List<Commentaire> commentaires = new ArrayList<Commentaire>();
	
	public Publication() {
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

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public Long getPrixDepart() {
		return prixDepart;
	}

	public void setPrixDepart(Long prixDepart) {
		this.prixDepart = prixDepart;
	}

	public Long getPrixActuel() {
		return prixActuel;
	}

	public void setPrixActuel(Long prixActuel) {
		this.prixActuel = prixActuel;
	}

	public Date getDuree() {
		return dateEcheance;
	}

	public void setDuree(Date duree) {
		this.dateEcheance = duree;
	}

	public Utilisateur getPublicateur() {
		return publicateur;
	}

	public void setPublicateur(Utilisateur publicateur) {
		this.publicateur = publicateur;
	}

	public Categorie getCategorie() {
		return categorie;
	}

	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}

	public List<ParticipationEnchere> getEncheres() {
		return encheres;
	}

	public void setEncheres(List<ParticipationEnchere> encheres) {
		this.encheres = encheres;
	}

	public List<Commentaire> getCommentaires() {
		return commentaires;
	}

	public void setCommentaires(List<Commentaire> commentaires) {
		this.commentaires = commentaires;
	}

	@Override
	public String toString() {
		return "Publication [id=" + id + ", version=" + version + ", nom=" + nom + ", description=" + description
				+ ", img=" + img + ", prixDepart=" + prixDepart + ", prixActuel=" + prixActuel + ", duree=" + dateEcheance
				+ ", categorie=" + categorie + ", encheres=" + encheres + "]";
	}
	
}
