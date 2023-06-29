import {useEffect} from 'react'

function RestaurantList({loadRestaurants}) {
    useEffect(() => {
        loadRestaurants()
    }, [loadRestaurants])

    return <div>Restaurant List</div>
}

export default RestaurantList
