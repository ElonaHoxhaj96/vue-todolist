const { createApp }= Vue;

createApp({
    data() {
        return {
            newItem: '',
            listItem: [
                'Fare la spesa',
                'Fare il bucato',
                'Passare dalla banca',
                'Portare il cane dal veterinario'
            ],
        }
    },
    methods: {
        addItem() {
            this.listItem.unshift(this.newItem);
        },
    },
    
}).mount('#app')


