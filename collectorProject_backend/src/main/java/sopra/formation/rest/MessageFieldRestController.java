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


import sopra.formation.model.MessageField;
import sopra.formation.model.Views;
import sopra.formation.repository.IMessageFieldRepository;


@RestController
@RequestMapping("/messageField")
@CrossOrigin("*")
public class MessageFieldRestController {
	@Autowired
	private IMessageFieldRepository messageFieldRepo;

	@GetMapping("")
	@JsonView(Views.ViewMessageField.class)
	public List<MessageField> findAll() {
		return messageFieldRepo.findAll();
	}
	

	@GetMapping("/{id}")
	@JsonView(Views.ViewMessageField.class)
	public MessageField find(@PathVariable Long id) {

		Optional<MessageField> optMessageField = messageFieldRepo.findById(id);
	
		if (optMessageField.isPresent()) {
			return optMessageField.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	

	@PostMapping("")
	@JsonView(Views.ViewMessageField.class)
	public MessageField create(@RequestBody MessageField messageField) {
		messageField = messageFieldRepo.save(messageField);

		return messageField;
	}

	@PutMapping("/{id}")
	@JsonView(Views.ViewMessageField.class)
	public MessageField update(@RequestBody MessageField messageField, @PathVariable Long id) {
		if (!messageFieldRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		messageField = messageFieldRepo.save(messageField);

		return messageField;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!messageFieldRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		messageFieldRepo.deleteById(id);
	}
}
