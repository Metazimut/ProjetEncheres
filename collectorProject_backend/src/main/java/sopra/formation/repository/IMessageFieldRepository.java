package sopra.formation.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.formation.model.Field;
import sopra.formation.model.MessageField;

public interface IMessageFieldRepository extends JpaRepository<MessageField, Long>{
	List<MessageField> findAllByField(Field field);
}
