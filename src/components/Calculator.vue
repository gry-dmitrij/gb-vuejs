<template>
  <div>
    <div class="display">
      <input type="number" v-model.number="operand1">
      <input type="number" v-model.number="operand2">
      = {{result}}
    </div>
    <div class="buttons">
      <button v-for="btn in buttons" :key="btn" @click="calculate(btn)">{{ btn }}</button>
    </div>
    <div class="error" v-show="error">
      Ошибка: {{ error }}
    </div>

  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
      error: '',
      buttons: ['+', '-', '*', '/', '^', 'int /']
    }
  },
  methods: {
    calculate(op = '+') {
      this.error = '';
      switch (op) {
        case '+':
          this.add();
          break;
        case '-':
          this.sub();
          break;
        case '/':
          this.div();
          break;
        case '*':
          this.mul();
          break;
        case 'int /':
          this.intDiv();
          break;
        case '^':
          this.pow();
          break;
      }
    },
    add() {
      this.result =  this.operand1 + this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    mul() {
      this.result = this.operand1 * this.operand2;
    },
    div() {
      if (this.operand2 === 0) {
        this.error = 'На 0 делить нельзя!'
        return;
      }
      this.result = this.operand1 / this.operand2;
    },
    pow() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    intDiv() {
      this.result = Math.round(this.operand1 / this.operand2);
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>