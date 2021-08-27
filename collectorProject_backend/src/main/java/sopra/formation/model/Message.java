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
@Table(name = "message")
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	
	@Column(name = "messageTxt")
	@JsonView(Views.ViewCommon.class)
	private String messageTxt;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "creationDate")
	@JsonView(Views.ViewCommon.class)
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
	private Date dateCreation;
	
	@ManyToOne
	@JoinColumn(name = "envoyeur_id")
	@JsonView(Views.ViewMessage.class)
	private Utilisateur envoyeur;
	
	@ManyToOne
	@JoinColumn(name = "recepteur_id")
	@JsonView(Views.ViewMessage.class)
	private Utilisateur recepteur;

	public Message() {
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


	public String getMessageTxt() {
		return messageTxt;
	}


	public void setMessageTxt(String messageTxt) {
		this.messageTxt = messageTxt;
	}


	public Date getDateCreation() {
		return dateCreation;
	}


	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}


	public Utilisateur getEnvoyeur() {
		return envoyeur;
	}


	public void setEnvoyeur(Utilisateur envoyeur) {
		this.envoyeur = envoyeur;
	}


	public Utilisateur getRecepteur() {
		return recepteur;
	}


	public void setRecepteur(Utilisateur recepteur) {
		this.recepteur = recepteur;
	}


	@Override
	public String toString() {
		return "Message [id=" + id + ", version=" + version + ", messageTxt=" + messageTxt + ", dateCreation="
				+ dateCreation + ", envoyeur=" + envoyeur + ", recepteur=" + recepteur + "]";
	}


	

	
}
