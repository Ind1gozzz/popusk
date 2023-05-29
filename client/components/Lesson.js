app.component('lesson', {
    props: {
        title: {
            required: true,
            type: String,
        },
        url: {
            required: true,
            type: String,
        }
    },
    template:
    /*html*/    
    `
        <div class="lesson">
            <button class="lesson-text-button" @click="this.openLesson()"> {{title}} </button>
        </div>
    `,
    methods: {
        openLesson() {
            this.$emit('open-lesson', this.url);
        }
    }
})