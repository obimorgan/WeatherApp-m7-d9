import { useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setWeatherToCityAction } from "../redux/actions"


export const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch()

    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(setWeatherToCityAction((searchInput)))
    }

    return (
        <>
            <Form className="search_bar" onSubmit={handlesubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="search_header">
                        Enter your city
                    </Form.Label>
                    <Form.Control
                        type="text"
                        value={searchInput}
                        onChange={e => { setSearchInput(e.target.value); console.log("Im typing:", e.target.value) }}
                    />
                    <Form.Text className="text-muted">
                        The weather man never lies.
                    </Form.Text>
                </Form.Group>
            </Form>
        </>
    )
}