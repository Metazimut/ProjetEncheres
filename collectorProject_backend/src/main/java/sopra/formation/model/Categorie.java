package sopra.formation.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "categorie")
public class Categorie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@JsonView(Views.ViewCommon.class)
	private String categorieNom;
	@JsonView(Views.ViewCommon.class)
	private String imgCat;
	@OneToMany(mappedBy = "categorie")
	@JsonView(Views.ViewCategorieWithPublication.class)
	private List<Publication> publications;

	
	public Categorie() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getCategorieNom() {
		return categorieNom;
	}

	public void setCategorieNom(String categorieNom) {
		this.categorieNom = categorieNom;
	}

	public String getImgCat() {
		return imgCat;
	}

	public void setImgCat(String imgCat) {
		this.imgCat = imgCat;
	}

	@Override
	public String toString() {
		return "Categorie [id=" + id + ", version=" + version + ", categorieNom=" + categorieNom + ", imgCat=" + imgCat
				+ "]";
	}
	
}
