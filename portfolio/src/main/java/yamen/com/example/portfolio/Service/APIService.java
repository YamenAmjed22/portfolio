package yamen.com.example.portfolio.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import yamen.com.example.portfolio.Entitys.APIInfo;
import yamen.com.example.portfolio.Repos.APIRepo;

import java.util.List;

@Service
public class APIService {

    @Autowired
    private APIRepo apiRepo;

    public List<APIInfo> getAllApiInfo() {
        return apiRepo.findAll();
    }

    public APIInfo addNewApi(APIInfo api) {
        return apiRepo.save(api);
    }

    public APIInfo deleteApi(Long apiId) {
        APIInfo returnApi =  apiRepo.findById(apiId).get();
        apiRepo.deleteById(apiId);
        return returnApi;


    }
    @PatchMapping
    public APIInfo updateApi(@PathVariable Long apiId,@RequestBody APIInfo api) {
        APIInfo updatedApi = apiRepo.findById(apiId).get();
        if (api.getApiName() != null) {
            updatedApi.setApiName(api.getApiName());
        }
        if (api.getDescription() != null) {
            updatedApi.setDescription(api.getDescription());
        }
        if (api.getUrl() != null) {
            updatedApi.setUrl(api.getUrl());
        }
        if (api.getMethodeName() != null) {
            updatedApi.setMethodeName(api.getMethodeName());
        }
        return apiRepo.save(updatedApi);
    }
}
