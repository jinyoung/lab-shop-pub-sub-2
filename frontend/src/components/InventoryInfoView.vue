<template>

    <v-data-table
        :headers="headers"
        :items="inventoryInfo"
        :items-per-page="5"
        class="elevation-1"
    ></v-data-table>

</template>

<script>
    const axios = require('axios').default;

    export default {
        name: 'InventoryInfoView',
        props: {
            value: Object,
            editMode: Boolean,
            isNew: Boolean
        },
        data: () => ({
            headers: [
                { text: "id", value: "id" },
            ],
            inventoryInfo : [],
        }),
          async created() {
            var temp = await axios.get(axios.fixUrl('/inventoryInfos'))

            temp.data._embedded.inventoryInfos.map(obj => obj.id=obj._links.self.href.split("/")[obj._links.self.href.split("/").length - 1])

            this.inventoryInfo = temp.data._embedded.inventoryInfos;
        },
        methods: {
        }
    }
</script>

