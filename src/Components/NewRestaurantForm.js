import { useState } from "react";
import { connect } from "react-redux";
import { TextField } from "@mui/material/";
import Button from "@mui/material/Button";
import { act } from "react-dom/test-utils";
import { createRestaurant } from "../Store/restaurants/actions";

export function NewRestaurantForm({createRestaurant}) {
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        createRestaurant(name)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                value={name}
                onChange={e => {
                    act(()=> {
                        setName(e.target.value)
                    })
                }}
                placeholder="Add Restaurant"
                fullWidth
                variant="filled"
            />
            <Button type="submit" variant="contained" color="primary">
                Add
            </Button>
        </form>
    )
}

const mapStateToProps = null
const mapDispatchToProps = {createRestaurant}

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantForm)