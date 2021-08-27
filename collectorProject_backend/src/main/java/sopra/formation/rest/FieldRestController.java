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
import sopra.formation.model.Field;
import sopra.formation.model.Publication;
import sopra.formation.model.Utilisateur;
import sopra.formation.model.Views;
import sopra.formation.repository.IFieldRepository;

@RestController
@RequestMapping("/field")
@CrossOrigin("*")
public class FieldRestController {
	@Autowired
	private IFieldRepository fieldRepo;

	@GetMapping("")
	@JsonView(Views.ViewField.class)
	public List<Field> findAll() {
		return fieldRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewField.class)
	public Field find(@PathVariable Long id) {

		Optional<Field> optField = fieldRepo.findById(id);

		if (optField.isPresent()) {
			return optField.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping("/{id}/auteur")
	@JsonView(Views.ViewField.class)
	public List<Field> findAllByAuteur(@PathVariable Utilisateur auteur) {
		return fieldRepo.findAllByAuteur(auteur);
	}

	@PostMapping("")
	@JsonView(Views.ViewField.class)
	public Field create( @RequestBody Field field) {
		
		field = fieldRepo.save(field);

		return field;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewField.class)
	public Field update(@RequestBody Field field, @PathVariable Long id) {
		if (!fieldRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		field = fieldRepo.save(field);

		return field;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!fieldRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		fieldRepo.deleteById(id);
	}
}
