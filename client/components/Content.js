app.component('content', {
    props:{
        authorized: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: Array,
            required: true,
        },
    },
    template: 
    /* HTML */
    `
    <div v-if="this.authorized" class="content-block">
        <h1 class="header">
            {{title}}
        </h1>
        <ul>
            <li v-for="p in content"> {{ p }}</li>
        </ul>
    </div>
    `,
})