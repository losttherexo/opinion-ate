import {useEffect} from 'react'
import {connect} from 'react-redux'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import {loadRestaurants} from '../Store/restaurants/actions'

export function RestaurantList({loadRestaurants, restaurants}) {
    useEffect(() => {
        loadRestaurants()
    }, [loadRestaurants])
    
    return (
        <List>
            {restaurants.map(r => (
                <ListItem key={r.id}>
                    <ListItemText>{r.name}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
}

const mapStateToProps = s => ({
    restaurants: s.restaurants.records
})

const mapDispatchToProps = {loadRestaurants}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)
