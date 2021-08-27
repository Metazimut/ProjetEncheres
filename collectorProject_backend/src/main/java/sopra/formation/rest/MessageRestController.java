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

import sopra.formation.model.Message;
import sopra.formation.model.Views;
import sopra.formation.repository.IMessageRepository;

@RestController
@RequestMapping("/message")
@CrossOrigin("*")
public class MessageRestController {
	@Autowired
	private IMessageRepository messageRepo;

	@GetMapping("")
	@JsonView(Views.ViewMessage.class)
	public List<Message> findAll() {
		return messageRepo.findAll();
	}

	@GetMapping("/{id}")
	@JsonView(Views.ViewMessage.class)
	public Message find(@PathVariable Long id) {

		Optional<Message> optMessage = messageRepo.findById(id);

		if (optMessage.isPresent()) {
			return optMessage.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	@JsonView(Views.ViewMessage.class)
	public Message create(@RequestBody Message message) {
			
			
		message = messageRepo.save(message);

			return message;
		}


	@PutMapping("/{id}")
	@JsonView(Views.ViewMessage.class)
	public Message update(@RequestBody Message message, @PathVariable Long id) {
		if (!messageRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		message = messageRepo.save(message);

		return message;
	}


	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!messageRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
		
		messageRepo.deleteById(id);
	}
}
