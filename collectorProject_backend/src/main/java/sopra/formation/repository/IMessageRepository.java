package sopra.formation.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Message;
import sopra.formation.model.Utilisateur;

public interface IMessageRepository extends JpaRepository<Message, Long> {
	List<Message> findAllByEmetteur(Utilisateur emetteur);
	List<Message> findAllByRecepteur(Utilisateur recepteur);
	
	@Query("select m from Message m where m.emetteur.id = :id or m.recepteur.id = :id")
	List<Message> findAllMessageRelatedToUser(@Param("id") Long id);
}
