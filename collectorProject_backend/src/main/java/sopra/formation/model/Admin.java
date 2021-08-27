package sopra.formation.model;




import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;



@Entity
@DiscriminatorValue("admin")
public class Admin extends Compte {
	
	
	public Admin() {
		super();
	}


}
