package yamen.com.example.portfolio.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import yamen.com.example.portfolio.Entitys.APIInfo;
import yamen.com.example.portfolio.Service.APIService;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class APIController {

    @Autowired
    private APIService apiService;

    @GetMapping
    public List<APIInfo> getAllApiInfo(){
        return apiService.getAllApiInfo();
    }

    @PostMapping
    public void addNewApiInfo(@RequestBody APIInfo newApi) {
        apiService.addNewApi(newApi);
    }
    /**
     * This Api For Delete APIs Info*/
    @DeleteMapping("/{id}")
    public APIInfo deleteApi(@PathVariable Long id) {
        return apiService.deleteApi(id);

    }

    @PatchMapping("/{id}")
    public APIInfo updateAPIInfo(@PathVariable Long id , @RequestBody APIInfo updatedApi) {
        return apiService.updateApi(id, updatedApi);

    }

}
