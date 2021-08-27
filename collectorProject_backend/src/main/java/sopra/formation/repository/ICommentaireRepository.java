package sopra.formation.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import sopra.formation.model.Commentaire;
import sopra.formation.model.Publication;
import sopra.formation.model.Utilisateur;

public interface ICommentaireRepository extends JpaRepository<Commentaire, Long> {
	List<Commentaire> findAllByUtilisateur(Utilisateur utilisateur);
	List<Commentaire> findAllByPublication(Publication publication);
}
