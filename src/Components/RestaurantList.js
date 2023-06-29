import {useEffect} from 'react'

function RestaurantList({loadRestaurants, restaurants}) {
    useEffect(() => {
        loadRestaurants()
    }, [loadRestaurants])

    return (
        <ul>
            {restaurants.map(restaurant => (
                <li key={restaurant.id}>{restaurant.name}</li>
            ))}
        </ul>
    )
}

export default RestaurantList