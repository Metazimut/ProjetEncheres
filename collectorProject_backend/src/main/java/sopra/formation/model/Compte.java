package sopra.formation.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "compte")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type")
public class Compte {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	
	@Column(name = "lastName")
	@JsonView(Views.ViewCommon.class)
	private String nom;
	
	@Column(name = "firstName")
	@JsonView(Views.ViewCommon.class)
	private String prenom;
	
	@Column(name = "email")
	@JsonView(Views.ViewCommon.class)
	private String email;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "creationDate")
	@JsonFormat(pattern = "yyyy-MM-dd")
	@JsonView(Views.ViewCommon.class)
	private Date dateCreation;
	
	@Column(name = "username ")
	@JsonView(Views.ViewCommon.class)
	private String identifiant;
	
	@Column(name = "password")
	@JsonView(Views.ViewCommon.class)
	private String mdp;
	
	@Column(name = "profilImg")
	@JsonView(Views.ViewCommon.class)
	private String profilImg;
	
	@Column(name = "pseudo")
	@JsonView(Views.ViewCommon.class)
	private String pseudo;

	@OneToMany(mappedBy = "compte")
	private List<Adresse> adresses = new ArrayList<Adresse>();

	
	public Compte() {
		super();
	}
	
	

	public Compte(String nom, List<Adresse> adresses) {
		super();
		this.nom = nom;
		this.adresses = adresses;
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



	public String getPrenom() {
		return prenom;
	}



	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}


	public Date getDateCreation() {
		return dateCreation;
	}


	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}


	public String getIdentifiant() {
		return identifiant;
	}



	public void setIdentifiant(String identifiant) {
		this.identifiant = identifiant;
	}



	public String getMdp() {
		return mdp;
	}



	public void setMdp(String mdp) {
		this.mdp = mdp;
	}



	public String getProfilImg() {
		return profilImg;
	}



	public void setProfilImg(String profilImg) {
		this.profilImg = profilImg;
	}



	public String getPseudo() {
		return pseudo;
	}



	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}



	public List<Adresse> getAdresses() {
		return adresses;
	}



	public void setAdresses(List<Adresse> adresses) {
		this.adresses = adresses;
	}



	@Override
	public String toString() {
		return "Compte [id=" + id + ", version=" + version + ", nom=" + nom + ", prenom=" + prenom + ", email=" + email
				+ ", dateCreation=" + dateCreation + ", identifiant=" + identifiant + ", mdp=" + mdp + ", profilImg="
				+ profilImg + ", pseudo=" + pseudo + ", adresses=" + adresses + "]";
	}






	

}
