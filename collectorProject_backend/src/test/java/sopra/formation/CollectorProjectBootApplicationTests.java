package sopra.formation;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import sopra.formation.model.Adresse;
import sopra.formation.model.Categorie;
import sopra.formation.model.Compte;
import sopra.formation.model.ParticipationEnchere;
import sopra.formation.model.Publication;
import sopra.formation.model.Utilisateur;
import sopra.formation.repository.IAdresseRepository;
import sopra.formation.repository.ICategorieRepository;
import sopra.formation.repository.ICompteRepository;
import sopra.formation.repository.IParticipationEnchereRepository;
import sopra.formation.repository.IPublicationRepository;

@SpringBootTest
class CollectorProjectBootApplicationTests {

	@Autowired
	private IPublicationRepository publicationRepo;
	@Autowired
	private ICompteRepository compteRepo;
	@Autowired
	private ICategorieRepository categorieRepo;
	@Autowired
	private IParticipationEnchereRepository participationEnchereRepo;
	@Autowired
	private IAdresseRepository adresseRepo;


//	@Test
//	public void findAllByCategorie() {
//		System.out.println("testFindAllByCategorie Début ###################");
//
//		Categorie cat1 = new Categorie();
//		cat1.setCategorieNom("Console");;
//		cat1 = categorieRepo.save(cat1);
//
//		Categorie cat2 = new Categorie();
//		cat2.setCategorieNom("Carte");
//		cat2 = categorieRepo.save(cat2);
//
//		int sizeStart = publicationRepo.findAllByCategorie(cat1).size();
//
//		Publication pub1 = new Publication();
//		pub1.setNom("pub1");
//		pub1.setCategorie(cat1);
//
//		pub1 = publicationRepo.save(pub1);
//
//
//		Publication pub2 = new Publication();
//		pub2.setNom("pub2");
//		pub2.setCategorie(cat2);
//
//		pub2 = publicationRepo.save(pub2);
//
//
//		int sizeEnd = publicationRepo.findAllByCategorie(cat1).size();
//
//		assertEquals(1, sizeEnd - sizeStart);
//
//		System.out.println("testFindAllByCategorie Fin ###################");
//	}
//
//	@Test
//	public void findAllByPublicateur() {
//		System.out.println("testFindAllByPublicateur Début ###################");
//
//		Utilisateur ut1 = new Utilisateur();
//		ut1.setNom("mat");
//		ut1 = compteRepo.save(ut1);
//
//		Utilisateur ut2 = new Utilisateur();
//		ut2.setNom("aure");
//		ut2 = compteRepo.save(ut2);
//
//		int sizeStart = publicationRepo.findAllByPublicateur(ut1).size();
//
//		Publication pub1 = new Publication();
//		pub1.setNom("pub1");
//		pub1.setPublicateur(ut1);
//
//		pub1 = publicationRepo.save(pub1);
//
//
//		Publication pub2 = new Publication();
//		pub2.setNom("pub2");
//		pub2.setPublicateur(ut2);
//
//		pub2 = publicationRepo.save(pub2);
//
//
//		int sizeEnd = publicationRepo.findAllByPublicateur(ut1).size();
//
//		assertEquals(1, sizeEnd - sizeStart);
//
//		System.out.println("testFindAllByPublicateur Fin ###################");
//	}
//
//	@Test
//	public void findByEncheres() {
//		System.out.println("testfindByEncheres Début ###################");
//		Publication pub1 = new Publication();
//		pub1.setNom("pubWithPart");
//		pub1 = publicationRepo.save(pub1);
//		
//		ParticipationEnchere part1 = new ParticipationEnchere();
//		part1.setPrixProposition(6L);;
//		part1.setPublication(pub1);
//		part1 = participationEnchereRepo.save(part1);
//
//
//
//		Publication pub1Find = publicationRepo.findByEncheres(part1);
//
//		assertEquals("pubWithPart", pub1Find.getNom());
//
//
//		System.out.println("testfindByEncheres Fin ###################");
//	}
	
	@Test
	public void ICompteRepo() {
		Utilisateur ut1 = new Utilisateur();
		ut1.setNom("mat");
		ut1.setPrenom("wui");
		ut1.setEmail("w.mat@gmail.com");
		ut1.setPseudo("meta");
		ut1 = compteRepo.save(ut1);
		
		Adresse adr1 = new Adresse();
		adr1.setRue("acacias");
		adr1.setVille("dunkerque");
		adr1.setCodePostal("59640");
		adr1.setPays("france");
		adr1.setCompte(ut1);
		adr1 = adresseRepo.save(adr1);
		
		Adresse adr2 = new Adresse();
		adr2.setRue("Ogiers");
		adr2.setVille("Croix");
		adr2.setCodePostal("59170");
		adr2.setPays("france");
		adr2.setCompte(ut1);
		adr2 = adresseRepo.save(adr2);

		
		findAllByVille();
		findAllByCodePostal();
		findAllByCompteId();
	}
	
	public void findAllByCompteId() {
		System.out.println("testfindAllByCompte Début ###################");
		
		List<Adresse> adresses = adresseRepo.findAllByCompteId(1L);

		assertEquals("acacias", adresses.get(0).getRue());

		System.out.println("testfindAllByCompte Fin ###################");
	}
	
	public void findAllByVille() {
		System.out.println("testfindAllByVille Début ###################");
		
		List<Compte> comptes = compteRepo.findAllByVille("dunkerque","france");

		assertEquals("mat", comptes.get(0).getNom());

		System.out.println("testfindByEncheres Fin ###################");
	}
	
	public void findAllByCodePostal() {
		System.out.println("testfindAllByCodePostal Début ###################");
		
		List<Compte> comptes = compteRepo.findAllByCodePostal("59640","france");

		assertEquals("mat", comptes.get(0).getNom());

		System.out.println("testfindAllByCodePostal Fin ###################");
	}
	
}
