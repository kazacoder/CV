const { createApp } = Vue

createApp ({
    data() {
        return {
            message: 'Hello Vue!',
            count: 0
        }
    }
}).mount('#appVue')