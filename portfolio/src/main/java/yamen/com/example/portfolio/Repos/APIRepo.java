package yamen.com.example.portfolio.Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import yamen.com.example.portfolio.Entitys.APIInfo;

@Repository
public interface APIRepo extends JpaRepository<APIInfo, Long> {
}
