const {createApp} = Vue

createApp({
    data() {
        return {
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2'],
            message: 'Hello Vue!',
            count: 0,
            placeHolderVue: 'Введите текст'
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            console.log('doubleCountComputed')
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
            console.log('input Value changed' ,value)
        }
    }
}).mount('#appVueInput')

