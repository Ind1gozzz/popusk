app.component('lessons-list', {
    props:{
        authorized: {
            type: Boolean,
            required: true
        },
        lessons: {
            type: Array,
            required: true
        }
    },
    template:
    /* HTML */
    `
        <div v-if="this.authorized" class="lessons-block">
            <ul class="chapters-list">
                <li v-for="l in lessons">
                    <chapter v-bind:title=l.title></chapter>
                    <ul class="lessons-list" v-if="l.additionalLessons" v-for="al in l.additionalLessons">
                        <lesson v-bind:title=al.title :url=al.url @open-lesson="openLesson"></lesson>
                        <p v-if="al.complete"> Завершен </p>
                        <p v-else> НЕ завершен </p>
                    </ul>
                </li>
            </ul>
        </div>        
    `,    
    methods: {
        openLesson(url) {
            this.$emit('open-lesson', url);
        }
    }
})