import Nav from "../components/nav/nav"
import { lazy, useState, Suspense } from "react"

const ContactList = lazy(() => import("../components/contactList/ContactList"));



export default function contact() {

    const [isVisible, setIsVisible] = useState(false)

    function handleToggle() {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <h1>Contact Page</h1>
            <Nav />
            <button onClick={handleToggle}>Toggle visible</button>
            {isVisible ?
                <Suspense fallback = {
                    <div>Loading</div>
                }>
                    <ContactList />
                </Suspense> :
                <div>click toggle to see list</div>
            }
        </div>
    )
}