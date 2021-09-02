package sopra.formation.rest;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

		
		@PostMapping("/{id}/commentaire")
		@JsonView(Views.ViewAchat.class)
		public Commentaire create(@RequestBody Commentaire comm) {
			comm = commRepo.save(comm);
			return comm;
		}
		
		@PostMapping("/{id}/enchere")
		@JsonView(Views.ViewAchat.class)
		public ParticipationEnchere create(@RequestBody ParticipationEnchere ench) {
			ench = enchereRepo.save(ench);
			return ench;
		}
		
		
		
		@GetMapping("enchere/{id}")
		@JsonView(Views.ViewAchat.class)
		public List<ParticipationEnchere> findAllEnchereByPublicationId(@PathVariable Long id) {
			
			Publication ench= new Publication();
			
			Optional<Publication> optEnch = publicationRepo.findById(id);
			
			if (optEnch.isPresent()) {
				ench=optEnch.get();
			} else {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
			}
			
			List<ParticipationEnchere> encheres = enchereRepo.findAllByPublication(ench); //est-ce que ça peut return Null ?
			
			return encheres;
			
		}
		
		
		
		@PutMapping("/enchere/{id}")
		public Publication update(@RequestBody Publication publication, @PathVariable Long id) {
			if (!publicationRepo.existsById(id)) {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
			}

			publication = publicationRepo.save(publication);

			return publication;
		}
		
		
		@PatchMapping("/enchere/{id}")
		public Publication partialUpdate(@RequestBody Map<String, Object> updates, @PathVariable Long id) {
			if (!publicationRepo.existsById(id)) {
				throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
			}

			Publication publiFind = publicationRepo.findById(id).get();

			if (updates.containsKey("prixActuel")) {
				publiFind.setPrixActuel((Long) updates.get("prixActuel"));
			}

			publiFind = publicationRepo.save(publiFind);

			return publiFind;
		}
		
		
		
		
}
