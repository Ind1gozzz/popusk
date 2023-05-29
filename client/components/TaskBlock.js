app.component('task-block', {
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
      answers: {
        type: Array,
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
    template:
    /* HTML */
    `
    <div v-if="this.authorized" class="task-block">
      <h3> Вопрос </h3>
      <p> {{description}}</p>

      <template v-if="!this.complete">
        <form @submit.prevent="checkAnswer">
          <p><b> {{task}}</b></p>
          <p v-for="answer in answers">
            <input name="task" type="radio" :value="answer.id" id="answer.id" v-model="picked"> {{answer.message}} 
          </p>
          <input class="button" type="submit" value="Submit">  
        </form>
      </template>


      <template v-if="this.isCorrect && this.showAnswer">
        <h4> {{answers[picked-1].message}} </h4>
        <h4> Это правильный ответ </h4>
        <h4> Можете переходить к следующему уроку </h4>
      </template>
      
      <template v-else-if="this.showAnswer && !this.isCorrect" >
        <h4> Вы ввели неверный ответ </h4>
        <button @click="this.reset()"> Попробовать еще раз </button>
      </template>
      
    </div>    
    `, 
    methods: {
      checkAnswer() {
        const answ = this.picked-1;
        this.isCorrect = this.answers[answ].right;
        this.showAnswer = true;
        this.complete = this.isCorrect;
        if (this.complete) {
          this.$emit('complete-lesson', this.chapter, this.id);
        }
      },

      reset() {
        this.picked = 0;
        this.isCorrect = false;
        this.showAnswer = false;
      }
    },
    data() {
      return {
        picked: 0,
        isCorrect: false,
        showAnswer: false,
        complete: false,
      }
    }
  }
)