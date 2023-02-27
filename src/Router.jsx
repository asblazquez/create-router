import { EVENTS } from "./Consts"
import { useState, useEffect } from "react"
import { match } from "path-to-regexp"

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChnage = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener(EVENTS.PUSHSTATE, onLocationChnage)
        window.addEventListener(EVENTS.POPSTATE, onLocationChnage)

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChnage)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChnage)
        }
    }, [])

    let routeParams = {}

    const Page = routes.find(({ path }) => {
        if (path === currentPath) return true

        const matcherUrl = match(path, { decode: decodeURIComponent })
        const matched = matcherUrl(currentPath)
        if (!matched) return false

        routeParams = matched.params
        return true

    })?.Component

    return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
