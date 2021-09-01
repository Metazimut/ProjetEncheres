package sopra.formation.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Adresse;
import sopra.formation.model.Compte;
import sopra.formation.model.Utilisateur;
import sopra.formation.model.Views;
import sopra.formation.repository.IAdresseRepository;
import sopra.formation.repository.ICompteRepository;


@RestController
@RequestMapping("/utilisateur")
@CrossOrigin("*")
public class UtilisateurRestController {
	@Autowired
	private ICompteRepository utilisateurRepo;
	@Autowired
	private IAdresseRepository adresseRepo;

	@GetMapping("")
	@JsonView(Views.ViewUtilisateur.class)
	public List<Utilisateur> findAll() {
		return utilisateurRepo.findAllUtilisateur();
	}
	

	@GetMapping("/{id}")
	@JsonView(Views.ViewUtilisateur.class)
	public Utilisateur find(@PathVariable Long id) {

		Optional<Utilisateur> optUtilisateur = utilisateurRepo.findUtilisateurById(id);
	
		if (optUtilisateur.isPresent()) {
			return optUtilisateur.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	@GetMapping("/email/{email}")
	@JsonView(Views.ViewUtilisateur.class)
	public List<Utilisateur> findAllUtilisateurByEmail(@PathVariable String email) {
		return utilisateurRepo.findAllUtilisateurByEmail(email);
	}

	
	@GetMapping("/{id}/adresses")
	@JsonView(Views.ViewUtilisateur.class)
	public List<Adresse> findAllByCompteId(@PathVariable Long id) {
		List<Adresse> adresses = adresseRepo.findAllByUtilisateurId(id);
		return adresses;
	}
	
	@GetMapping("/pays/{pays}/ville/{ville}")
	@JsonView(Views.ViewUtilisateur.class)
	public List<Compte> findByVille(@PathVariable String pays,@PathVariable String ville) {
		List<Compte> utilisateurs = utilisateurRepo.findAllByVille(ville,pays);
		return utilisateurs;
	}

	@GetMapping("/pays/{pays}/code/{code}")
	@JsonView(Views.ViewUtilisateur.class)
	public List<Compte> findByCodePostal(@PathVariable String pays,@PathVariable String code) {
		List<Compte> utilisateurs = utilisateurRepo.findAllByCodePostal(code,pays);
		return utilisateurs;
	}
	

	@PostMapping("")
	@JsonView(Views.ViewUtilisateur.class)
	public Utilisateur create(@RequestBody Utilisateur utilisateur) {
		utilisateur = utilisateurRepo.save(utilisateur);

		return utilisateur;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewUtilisateur.class)
	public Utilisateur update(@RequestBody Utilisateur utilisateur, @PathVariable Long id) {
		if (!utilisateurRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		utilisateur = utilisateurRepo.save(utilisateur);

		return utilisateur;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!utilisateurRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		utilisateurRepo.deleteById(id);
	}
}
