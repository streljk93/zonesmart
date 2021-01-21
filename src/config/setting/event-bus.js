import Vue from 'vue'

export const EventBus = new Vue();
Object.defineProperty(Vue.prototype, '$EventBus', {value: EventBus});
