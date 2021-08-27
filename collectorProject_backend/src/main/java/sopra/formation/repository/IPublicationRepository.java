package sopra.formation.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Categorie;
import sopra.formation.model.Compte;
import sopra.formation.model.ParticipationEnchere;
import sopra.formation.model.Publication;

public interface IPublicationRepository extends JpaRepository<Publication, Long>{
	List<Publication> findAllByCategorie(Categorie categorie);
	List<Publication> findAllByPublicateur(Compte compte);
	Publication findByEncheres(ParticipationEnchere enchere);
	

}
