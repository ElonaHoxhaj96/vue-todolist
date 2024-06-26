const { createApp }= Vue;

createApp({
    data() {
        return {
            done: false,
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
        remuveItem(index) {
            this.done(listItem[index]) = !this.done(listItem[index]);
        }
        
    },
}).mount('#app')


