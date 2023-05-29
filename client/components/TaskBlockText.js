app.component('task-block-text', {
    props:{
      authorized: {
          type: Boolean,
          required: true
      },
      description: {
          type: String,
          required: true,
      },
      task: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      chapter: {
        type: Number,
        required: true,
      },
      id: {
        type: Number,
        required: true,
      }
    },

    data() {
      return {
        isCorrect: false,
        showAnswer: false,
        complete: false,
        answer: ``,
      }
    },

    template:
    /* HTML */
    `
    <div v-if="this.authorized" class="task-block">
      <h3> Вопрос </h3>
      <p> {{description}}</p>

      <template v-if="!this.complete">
        <form @submit.prevent="sendAnswer">
          <p><b> {{task}}</b></p>        
          <label for="answer">Напишите Код: </label>
          <div>
              <input type="text" v-model="this.answer" placeholder="some SQL code" />
          </div>
          <input class="button" type="submit" value="Submit">  
        </form>
      </template>
      <template v-else>
        <h4> {{answer}} </h4>
        <h4> Это верный ответ </h4>
      </template>
      
    
      <h4 v-if="this.isCorrect && this.showAnswer"> Можете переходить к следующему уроку </h4>
      <template v-else-if="this.showAnswer && !this.isCorrect" >
        <h4> Вы ввели неверный ответ </h4>
        <button @click="this.reset()"> Попробовать еще раз </button>
      </template>
      
      
    </div>    
    `, 
    methods: {
      sendAnswer() {
        axios.post(this.url, {answer: this.answer}).then(res => {
          this.isCorrect = res.data.success ? true : false;
          this.showAnswer = true;
          this.complete = this.isCorrect;
          if (this.complete) {
            this.$emit('complete-lesson', this.chapter, this.id);
          }
        })
      },
      
      reset() {
        this.isCorrect = false;
        this.showAnswer = false;
      }
    },
  }
)