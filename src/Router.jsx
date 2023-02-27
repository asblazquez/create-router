import { EVENTS } from "./Consts"
import { useState, useEffect, Children } from "react"
import { match } from "path-to-regexp"
import { getCurrentPath } from "./Utils"

export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(getCurrentPath())

    useEffect(() => {
        const onLocationChnage = () => {
            setCurrentPath(getCurrentPath)
        }

        window.addEventListener(EVENTS.PUSHSTATE, onLocationChnage)
        window.addEventListener(EVENTS.POPSTATE, onLocationChnage)

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChnage)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChnage)
        }
    }, [])

    let routeParams = {}

    const routesFromChildren = Children.map(children, ({ props, type }) => {
        const { name } = type
        const isRoute = name === 'Route'
        return isRoute ? props : null
    })

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

    const Page = routesToUse.find(({ path }) => {
        if (path === currentPath) return true

        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if (!matched) return false

        routeParams = matched.params
        return true

    })?.Component

    return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
