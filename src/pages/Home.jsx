import { Link } from '../Link'

export default function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <p>Esta es una pagina de ejemplo para crear react-router desde cero</p>
            <Link to={'/about'}>Ir a Sobre nosotros</Link>
        </div>
    )
}