import {useEffect} from 'react'
import {connect} from 'react-redux'
import {loadRestaurants} from '../Store/restaurants/actions'

export function RestaurantList({loadRestaurants, restaurants}) {
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

const mapStateToProps = s => ({
    restaurants: s.restaurants.records
})

const mapDispatchToProps = {loadRestaurants}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)
