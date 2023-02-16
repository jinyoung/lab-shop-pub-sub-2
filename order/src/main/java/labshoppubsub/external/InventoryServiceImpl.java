package labshoppubsub.external;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class InventoryServiceImpl implements InventoryService {

    public List<Inventory> inventoryInfo(InventoryInfoQuery query) {
        Inventory inventory = new Inventory();

        List<Inventory> list = new ArrayList<Inventory>();
        list.add(inventory);

        return list;
    }
}
