package sopra.formation.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import sopra.formation.model.Field;
import sopra.formation.model.Utilisateur;

public interface IFieldRepository extends JpaRepository<Field, Long> {
	List<Field> findAllByAuteur(Utilisateur auteur);
}
