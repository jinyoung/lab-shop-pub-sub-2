package labshoppubsub.external;

import org.springframework.stereotype.Service;

@Service
public class InventoryServiceImpl implements InventoryService {

    public Inventory inventoryinfo(InventoryInfoQuery query) {
        Inventory inventory = new Inventory();
        return inventory;
    }
}
