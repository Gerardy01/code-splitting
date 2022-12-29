import style from "./contactList.module.css"



export default function ContactList() {
    return (
        <div className={style.contactList}>
            <ul>
                <li>Contact 1</li>
                <li>Contact 2</li>
                <li>Contact 3</li>
                <li>Contact 4</li>
                <li>Contact 5</li>
            </ul>
        </div>
    )
}