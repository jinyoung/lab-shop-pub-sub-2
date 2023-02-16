package labshoppubsub.external;

import java.util.Date;
import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(
    name = "inventory",
    url = "${api.url.inventory}",
    fallback = InventoryServiceImpl.class
)
public interface InventoryService {
    @GetMapping(path = "/inventories/inventoryinfo")
    public List<Inventory> inventoryinfo(InventoryInfoQuery query);
}
