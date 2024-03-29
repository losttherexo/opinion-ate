import axios from "axios"

const client = axios.create({
    baseURL: 'https://api.outsidein.dev/CCzrWbbPjJptr0ym79Ln2Fumbk3jnImi',
})

const api = {
    async loadRestaurants() {
        const r = await client.get('/restaurants')
        return r.data
    },
    async createRestaurant(name) {
        const r = await client.post('/restaurants', {name})
        return r.data
    },
}

export default api