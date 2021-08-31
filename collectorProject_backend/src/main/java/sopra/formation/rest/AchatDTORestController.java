package sopra.formation.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Categorie;
import sopra.formation.model.Commentaire;
import sopra.formation.model.ParticipationEnchere;
import sopra.formation.model.Publication;
import sopra.formation.model.Views;
import sopra.formation.repository.ICategorieRepository;
import sopra.formation.repository.ICommentaireRepository;
import sopra.formation.repository.IParticipationEnchereRepository;
import sopra.formation.repository.IPublicationRepository;
import sopra.formation.rest.dto.AchatDTO;

@RestController
@RequestMapping("/achat")
@CrossOrigin("*")
public class AchatDTORestController {

		@Autowired
		private IPublicationRepository publicationRepo;
		@Autowired
		private ICommentaireRepository commRepo;
		@Autowired
		private IParticipationEnchereRepository enchereRepo;
		@Autowired
		private ICategorieRepository categorieRepo;
		
		
		@GetMapping("/{id}")
		@JsonView(Views.ViewAchat.class)
		public AchatDTO findAchatById(@PathVariable Long id) {
			
			AchatDTO achat = new AchatDTO();

			Optional<Publication> optPublication = publicationRepo.findById(id);

			if (optPublication.isPresent()) {
				achat.setPublication((Publication) optPublication.get());
			} else {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
			}
			
			List<Commentaire> comm = commRepo.findAllByPublication(achat.getPublication());
			achat.setCommentaires(comm);
			
			List<ParticipationEnchere> encheres = enchereRepo.findAllByPublication(achat.getPublication());
			achat.setEncheres(encheres);
			
			
			return achat;
		}
		
		@GetMapping("categorie/{id}")
		@JsonView(Views.ViewAchat.class)
		public List<Publication> findAllByCategorieId(@PathVariable Long id) {
			
			Categorie cate= new Categorie();
			
			Optional<Categorie> optCate = categorieRepo.findById(id);
			
			if (optCate.isPresent()) {
				cate=optCate.get();
			} else {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
			}
			
			List<Publication> publis = publicationRepo.findAllByCategorie(cate);
			
			return publis;
			
			
			
			
		}

}
