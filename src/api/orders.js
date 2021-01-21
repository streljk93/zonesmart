import axios from 'axios'

export const fetchZonesmartOrders = ({limit, offset, search}) => {
    const params = {}
    if (limit) params.limit = limit
    if (offset) params.offset = offset
    if (search) params.search = search

    return axios.get('/zonesmart/order/', {params})
}
