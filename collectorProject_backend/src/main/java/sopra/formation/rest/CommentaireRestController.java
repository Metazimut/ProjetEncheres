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

import sopra.formation.model.Commentaire;
import sopra.formation.model.Publication;
import sopra.formation.model.Utilisateur;
import sopra.formation.model.Views;
import sopra.formation.repository.ICommentaireRepository;

@RestController
@RequestMapping("/commentaire")
@CrossOrigin("*")
public class CommentaireRestController {
	@Autowired
	private ICommentaireRepository commentaireRepo;

	@GetMapping("")
	@JsonView(Views.ViewCommentaire.class)
	public List<Commentaire> findAll() {
		return commentaireRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewCommentaire.class)
	public Commentaire find(@PathVariable Long id) {

		Optional<Commentaire> optCommentaire = commentaireRepo.findById(id);

		if (optCommentaire.isPresent()) {
			return optCommentaire.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping("/{id}/utilisateur")
	@JsonView(Views.ViewUtilisateur.class)
	public List<Commentaire> findAllByUtilisateur(@PathVariable Utilisateur utilisateur) {
		return commentaireRepo.findAllByUtilisateur(utilisateur);
	}
	
	@GetMapping("/{id}/publication")
	@JsonView(Views.ViewPublication.class)
	public List<Commentaire> findAllByPublication(@PathVariable Publication publication) {
		return commentaireRepo.findAllByPublication(publication);
	}

	@PostMapping("")
	@JsonView(Views.ViewCommentaire.class)
	public Commentaire create(@RequestBody Commentaire commentaire) {
		
		
		commentaire = commentaireRepo.save(commentaire);

		return commentaire;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewCommentaire.class)
	public Commentaire update(@RequestBody Commentaire commentaire, @PathVariable Long id) {
		if (!commentaireRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		commentaire = commentaireRepo.save(commentaire);

		return commentaire;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!commentaireRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		commentaireRepo.deleteById(id);
	}
}
