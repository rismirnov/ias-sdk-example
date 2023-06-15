import React, { useRef } from "react"
import { useInAppStorySDK } from "./hooks/useInAppStorySDK"
import { storyManagerConfig } from "./storyManagerConfig"

interface StoryManagerProps {
    children: React.ReactNode
}

export const StoryManager = ({ children }: StoryManagerProps) => {
    const { isLoading, IAS } = useInAppStorySDK()
    const storyManagerRef = useRef<any>()

    const initStoryManager = () => {
        if (isLoading) return
        if (storyManagerRef.current) return
        const storyManager = new window.IAS.StoryManager(storyManagerConfig)
        storyManagerRef.current = storyManager
    }

    initStoryManager()

    if (isLoading) return null
    return <>{children}</>
}
