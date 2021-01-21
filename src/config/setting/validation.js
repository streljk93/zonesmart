// lib
import {extend} from 'vee-validate'
import {required} from 'vee-validate/dist/rules'

// validations
extend('required', {
    ...required,
    message: 'Это поле обязательно к заполнению',
})
