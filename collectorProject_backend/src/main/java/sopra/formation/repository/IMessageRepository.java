package sopra.formation.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Message;
import sopra.formation.model.Utilisateur;

public interface IMessageRepository extends JpaRepository<Message, Long> {
	List<Message> findAllByEmetteur(Utilisateur emetteur);
	List<Message> findAllByRecepteur(Utilisateur recepteur);
}
