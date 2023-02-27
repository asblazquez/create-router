

export default function SearchPage({ routeParams }) {

    return (
        <div>
            <h1 className="textCenter">Has Buscado {routeParams.query}</h1>
        </div>
    )
}