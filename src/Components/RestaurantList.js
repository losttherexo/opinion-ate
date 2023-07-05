import {useEffect} from 'react'
import {connect} from 'react-redux'
import { Alert } from '@mui/material/'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import {loadRestaurants} from '../Store/restaurants/actions'

export function RestaurantList({loadRestaurants, restaurants, loading}) {
    useEffect(() => {
        loadRestaurants()
    }, [loadRestaurants])

    return (
        <>
            {loading && <CircularProgress />}
            <Alert severity='error'>Restaurants could not be loaded.</Alert>
            <List>
                {restaurants.map(r => (
                    <ListItem key={r.id}>
                        <ListItemText>{r.name}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

const mapStateToProps = s => ({
    restaurants: s.restaurants.records,
    loading: s.restaurants.loading
})

const mapDispatchToProps = {loadRestaurants}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)
