import { mount } from '@vue/test-utils';
import Calculator from '../components/Calculator';

describe('Calculator input test', () => {
    //ввод в первый операнд
    it('Test operand1', () => {
        const wrapper = mount(Calculator);
        const operand1Input = wrapper.find('input[name=operand1]');
        operand1Input.setValue('1');
        expect(wrapper.vm.operand1).toBe(1);
    });
    //ввод в первый операнд
    it('Test operand2', () => {
        const wrapper = mount(Calculator);
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('5');
        expect(wrapper.vm.operand2).toBe(5);
    });
    //тест суммы
    it('sum operation', () => {
        const wrapper = mount(Calculator);
        const operand1Input = wrapper.find('input[name=operand1]');
        operand1Input.setValue('1');
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('5');
        const operationButton = wrapper.find('button[name="+"]');
        operationButton.trigger('click');
        expect(wrapper.vm.result).toBe(6);
    });
    //тест разности
    it('sub operation', () => {
        const wrapper = mount(Calculator);
        const operand1Input = wrapper.find('input[name=operand1]');
        operand1Input.setValue('10');
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('3');
        const operationButton = wrapper.find('button[name="-"]');
        operationButton.trigger('click');
        expect(wrapper.vm.result).toBe(7);
    });
    //тест умножения
    it('mul operation', () => {
        const wrapper = mount(Calculator);
        const operand1Input = wrapper.find('input[name=operand1]');
        operand1Input.setValue('5');
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('10');
        const operationButton = wrapper.find('button[name="*"]');
        operationButton.trigger('click');
        expect(wrapper.vm.result).toBe(50);
    });
    //тест деления
    it('div operation', () => {
        const wrapper = mount(Calculator);
        const operand1Input = wrapper.find('input[name=operand1]');
        operand1Input.setValue('10');
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('5');
        const operationButton = wrapper.find('button[name="/"]');
        operationButton.trigger('click');
        expect(wrapper.vm.result).toBe(2);
    });
    //тест целочисленного деления
    it('int div operation', () => {
        const wrapper = mount(Calculator);
        const operand1Input = wrapper.find('input[name=operand1]');
        operand1Input.setValue('10');
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('3');
        const operationButton = wrapper.find('button[name="int /"]');
        operationButton.trigger('click');
        expect(wrapper.vm.result).toBe(3);
    });
    //тест возведения в степень
    it('pow operation', () => {
        const wrapper = mount(Calculator);
        const operand1Input = wrapper.find('input[name=operand1]');
        operand1Input.setValue('2');
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('4');
        const operationButton = wrapper.find('button[name="^"]');
        operationButton.trigger('click');
        expect(wrapper.vm.result).toBe(16);
    });
    //тест деления на 0
    it('div zero operation', () => {
        const wrapper = mount(Calculator);
        const operand1Input = wrapper.find('input[name=operand1]');
        operand1Input.setValue('10');
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('0');
        const operationButton = wrapper.find('button[name="/"]');
        operationButton.trigger('click');
        expect(wrapper.vm.error).toEqual('На 0 делить нельзя!');
    });
    //тест деления на 0 целочисленное
    it('int div zero operation', () => {
        const wrapper = mount(Calculator);
        const operand1Input = wrapper.find('input[name=operand1]');
        operand1Input.setValue('10');
        const operand2Input = wrapper.find('input[name=operand2]');
        operand2Input.setValue('0');
        const operationButton = wrapper.find('button[name="int /"]');
        operationButton.trigger('click');
        expect(wrapper.vm.error).toEqual('На 0 делить нельзя!');
    });
    //тест клавиатуры
    it('keyboard test1', () => {
        const wrapper = mount(Calculator);
        
        const operationButton = wrapper.find('button[name="2"]');
        operationButton.trigger('click');
        expect(wrapper.vm.operand1).toBe(2);
    });
    //тест клавиатуры
    it('keyboard test2', () => {
        const wrapper = mount(Calculator);

        let operationButton = wrapper.find('button[name="5"]');
        operationButton.trigger('click');
        operationButton.trigger('click');
        operationButton.trigger('click');
        operationButton = wrapper.find('button[name="←"]');
        operationButton.trigger('click');
        expect(wrapper.vm.operand1).toBe(55);
    });
    //тест клавиатуры
    it('keyboard test3', () => {
        const wrapper = mount(Calculator);

        let operationButton = wrapper.find('button[name="7"]');
        operationButton.trigger('click');
        operationButton.trigger('click');
        operationButton.trigger('click');
        operationButton = wrapper.find('button[name="C"]');
        operationButton.trigger('click');
        expect(wrapper.vm.operand1).toBe(0);
    });
})