package sopra.formation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sopra.formation.model.Categorie;

public interface ICategorieRepository extends JpaRepository<Categorie, Long> {

}
