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
@Table(name = "adress")
public class Adresse {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Column(name="street", length = 255)
	@JsonView(Views.ViewCommon.class)
	private String rue;
	@Column(name="addtionnal_details", length = 255)
	@JsonView(Views.ViewCommon.class)
	private String complement;
	@Column(name="zipcode", length = 10)
	@JsonView(Views.ViewCommon.class)
	private String codePostal;
	@Column(name="city", length = 255)
	@JsonView(Views.ViewCommon.class)
	private String ville;
	@Column(name="country", length = 255)
	@JsonView(Views.ViewCommon.class)
	private String pays;
	
	@ManyToOne
	@JoinColumn(name = "utilisateur_id")
	@JsonView(Views.ViewAdresse.class)
	private Utilisateur utilisateur;


	public Adresse() {
		super();
	}

	public Adresse(String rue, String complement, String codePostal, String ville, String pays) {
		super();
		this.rue = rue;
		this.complement = complement;
		this.codePostal = codePostal;
		this.ville = ville;
		this.pays = pays;
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


	public String getRue() {
		return rue;
	}


	public void setRue(String rue) {
		this.rue = rue;
	}


	public String getComplement() {
		return complement;
	}


	public void setComplement(String complement) {
		this.complement = complement;
	}


	public String getCodePostal() {
		return codePostal;
	}


	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}


	public String getVille() {
		return ville;
	}


	public void setVille(String ville) {
		this.ville = ville;
	}


	public String getPays() {
		return pays;
	}


	public void setPays(String pays) {
		this.pays = pays;
	}


	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	@Override
	public String toString() {
		return "Adresse [rue=" + rue + ", complement=" + complement
				+ ", codePostal=" + codePostal + ", ville=" + ville + ", pays=" + pays + "]";
	}

	
}
