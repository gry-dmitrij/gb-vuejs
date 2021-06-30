<template>
  <div>
    <div class="display">
      <input type="number" v-model.number="operand1" @focus="operandNum = 'operand1'">
      <input type="number" v-model.number="operand2" @focus="operandNum = 'operand2'">
      = {{result}}
    </div>
    <div class="buttons">
      <button v-for="btn in buttons" :key="btn" @click="calculate(btn)">{{ btn }}</button>
    </div>
    <div class="error" v-show="error">
      Ошибка: {{ error }}
    </div>
    <div class="keyboard">
      <input type="checkbox" id="keyboard" v-model="keyboardShow">
      <label for="keyboard">Отобразить экранную клавиатуру</label>
      <div class="keys" v-show="keyboardShow">
        <button v-for="key in keys" :key="key" @click="activeKey(key)">{{ key }}</button>
        <br>
        <input type="radio" id="op1" name="operands" value="operand1" v-model="operandNum"
               :checked="operandNum === 'operand1'">
        <label for="op1">Операнд 1</label>
        <input type="radio" id="op2" name="operands" value="operand2" v-model="operandNum"
               :checked="operandNum === 'operand1'">
        <label for="op2">Операнд 2</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      operandNum: 'operand1',
      operand1: 0,
      operand2: 0,
      result: 0,
      error: '',
      buttons: ['+', '-', '*', '/', '^', 'int /'],
      keys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '←', 'C'],
      keyboardShow: false
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
      if (this.operand2 === 0) {
        this.error = 'На 0 делить нельзя!'
        return;
      }
      this.result = Math.round(this.operand1 / this.operand2);
    },
    activeKey(key) {
      const num = +key;
      if (isFinite(num)) {
        this.numberActive(num);
        return;
      }
      switch (key) {
        case '←':
          this.backspace();
          break;
        case 'C':
          this.clear();
          break;
      }
    },
    numberActive(num) {
      const operand = this.operandNum;
      if (this[operand] !== 0) {
        this[operand] = +(this[operand].toString() + num);
      } else {
        this[operand] = num;
      }
    },
    backspace() {
      const operand = this.operandNum;
      if (this[operand] !== 0) {
        this[operand] = +this[operand].toString().slice(0, -1);
      }
    },
    clear() {
      this.operand1 = 0;
      this.operand2 = 0;
      this.result = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>