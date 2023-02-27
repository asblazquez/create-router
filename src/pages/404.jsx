import { Link } from "../Link";

export default function Page404() {
    return (
        <div>
            <h1 className="textCenter">This is NOT fine</h1>
            <img src='https://th.bing.com/th/id/R.ad3b151202adcc82aa1ca2dafa760a4f?rik=u%2fH3ZaH49A3K%2bA&riu=http%3a%2f%2fwww.eurostamp1.it%2ferrore%2f404.gif&ehk=p878VDrglsixOehzQVWN90t9dR5paE0KnmXyP8Lf64U%3d&risl=&pid=ImgRaw&r=0' alt="Gif perro this is fine" />
            <div className="textCenter mt">
                <Link to='/'>Volver a la Home</Link>
            </div>
        </div>
    )
}