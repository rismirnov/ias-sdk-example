import React, { useRef } from "react"
import { useInAppStorySDK } from "./useInAppStorySDK"
import { storyManagerConfig } from "../storyManagerConfig"

interface UseStoryManagerResult {
    storyManager: any
    isLoading: boolean
}

export const useStoryManager = (): UseStoryManagerResult => {
    const { isLoading, IAS } = useInAppStorySDK()
    const storyManagerRef = useRef<any>()

    const initStoryManager = () => {
        if (isLoading) return
        if (storyManagerRef.current) return
        const storyManager = new window.IAS.StoryManager(storyManagerConfig)
        storyManagerRef.current = storyManager
    }

    initStoryManager()

    return {
        storyManager: storyManagerRef.current,
        isLoading,
    }
}
