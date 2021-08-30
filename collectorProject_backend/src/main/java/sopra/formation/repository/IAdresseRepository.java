package sopra.formation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Adresse;
import sopra.formation.model.Compte;

public interface IAdresseRepository extends JpaRepository<Adresse, Long> {
	List<Adresse> findAllByUtilisateurId(Long id);
}
