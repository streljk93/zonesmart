// Libs
import Vue from 'vue'
import moment from 'moment'

Vue.filter('simple_date', (value) => {
    return moment(value).format('DD.MM.YYYY')
})
