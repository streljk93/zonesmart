// lib
import axios from 'axios'

// app
import config from '@/config'

axios.defaults.baseURL = config.api;
axios.defaults.headers.post['Content-Type'] = 'application/json';
