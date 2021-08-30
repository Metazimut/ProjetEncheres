package sopra.formation.rest.dto;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Compte;
import sopra.formation.model.Views;


public class UserDTO {
	@JsonView(Views.ViewCommon.class)
	private String login;
	@JsonView(Views.ViewCommon.class)
	private String password;
	@JsonView(Views.ViewConnetion.class)
	private Compte utilisateur;
	@JsonView(Views.ViewConnetion.class)
	private String type;

	public UserDTO() {
		super();
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Compte getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Compte utilisateur) {
		this.utilisateur = utilisateur;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
}
