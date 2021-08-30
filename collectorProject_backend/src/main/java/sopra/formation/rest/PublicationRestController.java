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

import sopra.formation.model.Publication;
import sopra.formation.model.Views;
import sopra.formation.repository.IPublicationRepository;

@RestController
@RequestMapping("/publication")
@CrossOrigin("*")
public class PublicationRestController {

	@Autowired
	private IPublicationRepository publicationRepo;

	@GetMapping("")
	@JsonView(Views.ViewPublication.class)
	public List<Publication> findAll() {
		return publicationRepo.findAll();
	}
	
	@GetMapping("/nom/{nom}")
	@JsonView(Views.ViewPublication.class)
	public List<Publication> findAllPublicationByNom(@PathVariable String nom) {
		return publicationRepo.findAllPublicationByNom(nom);
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewPublication.class)
	public Publication find(@PathVariable Long id) {

		Optional<Publication> optPublication = publicationRepo.findById(id);

		if (optPublication.isPresent()) {
			return (Publication) optPublication.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	

	@PostMapping("")
	public Publication create(@RequestBody Publication publication) {
		publication = publicationRepo.save(publication);

		return publication;
	}

	@PutMapping("/{id}")
	public Publication update(@RequestBody Publication publication, @PathVariable Long id) {
		if (!publicationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		publication = publicationRepo.save(publication);

		return publication;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!publicationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		publicationRepo.deleteById(id);
	}
}