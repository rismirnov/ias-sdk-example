import React, { useEffect, useState } from "react"

declare global {
    var IAS: any
    var IASReady: any
}

interface UseInAppStorySDKResult {
    isLoading: boolean
    IAS?: any
}

export const useInAppStorySDK = (): UseInAppStorySDKResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [instance, setInstance] = useState<any>()

    useEffect(() => {
        window.IASReady = (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0],
                st = window.IASReady || {}
            if (d.getElementById(id)) return st
            js = d.createElement(s) as HTMLScriptElement
            js.id = id
            js.src = process.env.INAPPSTORY_SDK_SRC!
            js.async = true
            fjs.parentNode?.insertBefore(js, fjs)
            st._e = []
            st.ready = function (f: () => void) {
                st._e.push(f)
            }
            return st
        })(document, "script", "ias-wjs")

        window.IASReady.ready(() => {
            setIsLoading(true)
            setInstance(window.IAS)
        })
    }, [])

    return { isLoading, IAS: instance }
}
