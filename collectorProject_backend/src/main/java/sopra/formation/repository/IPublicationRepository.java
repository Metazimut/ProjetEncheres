package sopra.formation.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Categorie;
import sopra.formation.model.Compte;
import sopra.formation.model.ParticipationEnchere;
import sopra.formation.model.Publication;


public interface IPublicationRepository extends JpaRepository<Publication, Long>{
	List<Publication> findAllByCategorie(Categorie categorie);
	List<Publication> findAllByPublicateur(Compte compte);
	Publication findByEncheres(ParticipationEnchere enchere);
	
	@Query("select p from Publication p where p.nom = :nom")
	List<Publication> findAllPublicationByNom(@Param("nom") String nom);

	@Query("select p from Publication p where p.id = :id")
	Optional<Publication> findById(@Param("id") Long id);
	
}
