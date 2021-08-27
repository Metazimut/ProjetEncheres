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

import sopra.formation.model.ParticipationEnchere;
import sopra.formation.model.Views;
import sopra.formation.repository.IParticipationEnchereRepository;

@RestController
@RequestMapping("/participation")
@CrossOrigin("*")
public class ParticipationEnchereRestController {

	@Autowired
	private IParticipationEnchereRepository participationRepo;

	@GetMapping("")
	@JsonView(Views.ViewParticipationEnchere.class)
	public List<ParticipationEnchere> findAll() {
		return participationRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewParticipationEnchere.class)
	public ParticipationEnchere find(@PathVariable Long id) {

		Optional<ParticipationEnchere> optParticipationEnchere = participationRepo.findById(id);

		if (optParticipationEnchere.isPresent()) {
			return (ParticipationEnchere) optParticipationEnchere.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	public ParticipationEnchere create(@RequestBody ParticipationEnchere participation) {
		participation = participationRepo.save(participation);

		return participation;
	}

	@PutMapping("/{id}")
	public ParticipationEnchere update(@RequestBody ParticipationEnchere participation, @PathVariable Long id) {
		if (!participationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		participation = participationRepo.save(participation);

		return participation;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!participationRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		participationRepo.deleteById(id);
	}
}
