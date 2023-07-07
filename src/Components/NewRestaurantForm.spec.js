import {render, screen, act} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {NewRestaurantForm} from './NewRestaurantForm'
import flushPromises from 'flush-promises'

describe('NewRestaurant', () => {
    const restaurantName = 'Sushi Place'

    let createRestaurant

    function renderComponent() {
        createRestaurant = jest.fn().mockName('createRestaurant')
        render(<NewRestaurantForm createRestaurant={createRestaurant} />)
    }

    describe('when filled in', () => {
        async function fillInForm() {
            renderComponent()
            createRestaurant.mockResolvedValue()
            await userEvent.type(
                screen.getByPlaceholderText('Add Restaurant'),
                restaurantName
            )
            userEvent.click(screen.getByText('Add'))
            return act(flushPromises)
        }

        it('calls createRestaurant with the name', async () => {
            await fillInForm()
            expect(createRestaurant).toHaveBeenCalledWith(restaurantName)
        })
        
        it('clears the name', async () => {
            await fillInForm()
            expect(screen.getByPlaceholderText('Add Restaurant').value).toEqual('')
        })
    })
})