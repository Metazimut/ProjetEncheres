package sopra.formation.model;

import java.util.ArrayList;
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
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;


@Entity
@Table(name = "Field")
public class Field {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;

	@Version
	@JsonView(Views.ViewCommon.class)
    private int version;
	
	@Column(name = "categorie", length = 100)
	@JsonView(Views.ViewCommon.class)
	private String categorie;

	@ManyToOne
	@JoinColumn(name = "auteur_id")
	@JsonView(Views.ViewField.class)
	private Utilisateur auteur ;

	@OneToMany(mappedBy = "field")
	private List<MessageField> messages = new ArrayList<MessageField>();


	public Field() {
		super();
	}

	public Field(Long id, String categorie, Utilisateur auteur, List<MessageField> messages) {
		super();
		this.id = id;
		this.categorie = categorie;
		this.auteur = auteur;
		this.messages = messages;
	}


	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getCategorie() {
		return categorie;
	}


	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public Utilisateur getAuteur() {
		return auteur;
	}

	public void setAuteur(Utilisateur auteur) {
		this.auteur = auteur;
	}

	public List<MessageField> getMessages() {
		return messages;
	}


	public void setMessages(List<MessageField> messages) {
		this.messages = messages;
	}

	@Override
	public String toString() {
		return "Field [id=" + id + ", version=" + version + ", categorie=" + categorie + ", auteur=" + auteur
				+ ", messages=" + messages + "]";
	}


}
