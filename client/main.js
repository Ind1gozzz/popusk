const app = Vue.createApp({
    data() {
        return {
            authorized: false,
            log: false,
            reg: true,
            contentBlock: {},
            taskBlock: {},
            lessons: [],
        }
    },    
    methods: {
        login() {
            this.log = true;
            this.reg = false;
        },

        getLessons() {
            axios.get('http://localhost:5000/').then(res => {
                this.lessons = res.data.lessons.map(lesson=> {
                    lesson.additionalLessons = lesson.additionalLessons.map(ad => {
                        ad.complete = false;
                        return ad;
                    });
                    return lesson;                
                });
                console.log('lessons');
            });   
        },

        register() {
            this.reg = true;
            this.log = false;
        },

        authorization() {
            this.authorized = true
            this.reg = false;
            this.log = false;
            this.getLessons();
            this.getNewContent('http://localhost:5000/');
        },

        getNewContent(url) {
            axios.get(url).then(res => {
                this.contentBlock.content = res.data.content;
                this.contentBlock.title = res.data.title;
                this.taskBlock.description = res.data.description;
                this.taskBlock.task = res.data.task;
                this.taskBlock.answers = res.data.answers;
                this.textTask = res.data.textTask;
                this.taskBlock.url = res.data.textTaskUrl;
                this.taskBlock.chapter = res.data.chapter;
                this.taskBlock.id = res.data.id;
                console.log(this.taskBlock)
            });
        },

        completeLesson(chapter, id) {
            this.lessons[chapter].additionalLessons[id].complete = true;
        }
    },
})
