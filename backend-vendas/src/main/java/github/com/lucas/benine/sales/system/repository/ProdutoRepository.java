package github.com.lucas.benine.sales.system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import github.com.lucas.benine.sales.system.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
