import { Link } from '../Link'

export default function AboutPage() {
    return (
        <div>
            <h1>About</h1>
            <img src='https://pbs.twimg.com/profile_images/1261826769985982465/NDXkGXC0_400x400.jpg' alt='Foto de andres'></img>
            <p>Hola me llamo Andres y estoy creando un clon de React-Router</p>
            <Link to={'/'} >Ir a la Home</Link>
        </div>
    )
}