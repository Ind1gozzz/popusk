app.component('chapter', {
    props: {
        title: {
            required: true,
            type: String,
        }
    },
    template:
    /*html*/    
    `
        <div class="chapter">
            <button class="chapter-text-button"> {{title}} </button>
        </div>
    `
})