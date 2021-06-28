<template>
  <div>
    <div class="display">
      <input type="number" v-model.number="operand1">
      <input type="number" v-model.number="operand2">
      = {{result}}
    </div>
    <div class="keyboard">
      <button @click="add">+</button>
      <button @click="sub">-</button>
      <button @click="mul">*</button>
      <button @click="div">/</button>
      <button @click="pow">^</button>
      <button @click="intDiv">int /</button>
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
      result: 0
    }
  },
  methods: {
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