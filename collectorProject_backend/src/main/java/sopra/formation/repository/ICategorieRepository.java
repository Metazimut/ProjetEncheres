package sopra.formation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Categorie;

public interface ICategorieRepository extends JpaRepository<Categorie, Long> {
	@Query("select c from Categorie c where c.categorieNom = :categorieNom")
	List<Categorie> findAllCategorieByNom(@Param("categorieNom") String categorieNom);
}
