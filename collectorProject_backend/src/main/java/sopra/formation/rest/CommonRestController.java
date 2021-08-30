package sopra.formation.rest;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Compte;
import sopra.formation.model.MoyenPaiement;
import sopra.formation.model.Views;
import sopra.formation.repository.ICompteRepository;
import sopra.formation.rest.dto.UserDTO;

@RestController
@CrossOrigin("*")
public class CommonRestController {

	@Autowired
	private ICompteRepository utilisateurRepo;

	@PostMapping("/authentification")
	@JsonView(Views.ViewConnetion.class)
	public UserDTO utilisateur(@RequestBody UserDTO userDto) {
		Optional<Compte> utilisateur = utilisateurRepo.findByEmailAndMotDePasse(userDto.getLogin(),
				userDto.getPassword());

		if (utilisateur.isPresent()) {
			userDto.setUtilisateur(utilisateur.get());
			userDto.setType(utilisateur.get().getClass().getSimpleName());

			return userDto;
		} else {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Login/password introuvable");
		}
	}

	@GetMapping("/moyenPaiement")
	public MoyenPaiement[] moyenPaiements() {
		return MoyenPaiement.values();
	}
}
