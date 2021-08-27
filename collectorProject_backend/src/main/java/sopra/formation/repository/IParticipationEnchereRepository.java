package sopra.formation.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.ParticipationEnchere;
import sopra.formation.model.Publication;
import sopra.formation.model.Utilisateur;

public interface IParticipationEnchereRepository extends JpaRepository<ParticipationEnchere, Long> {
	@Query("select e from ParticipationEnchere e where e.publication = :publication and e.utilisateur = :utilisateur")
	List<ParticipationEnchere> findAllEncheresByPublicationAndUtilisateur(@Param("publication") Publication publication, @Param("utilisateur") Utilisateur utilisateur);
}