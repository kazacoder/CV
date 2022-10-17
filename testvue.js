const { createApp } = Vue

createApp ({
    data() {
        return {
            message: 'Hello Vue!',
            count: 0,
            plaсeHolderVue: 'Введите текст'
        }
    }
}).mount('#appVue')