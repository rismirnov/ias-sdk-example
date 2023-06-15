import React, { useEffect, useState } from "react"
import { useInAppStorySDK } from "./hooks/useInAppStorySDK"

interface StoryManagerProps {
    children: React.ReactNode
}

export const StoryManager = ({ children }: StoryManagerProps) => {
    const { isLoading, IAS } = useInAppStorySDK()
    const [storyManager, setStoryManager] = useState(null)

    useEffect(() => {
        if (isLoading) return

        const storyManagerConfig = {
            apiKey: process.env.REACT_APP_INAPPSTORY_API_KEY!,
            userId: process.env.REACT_APP_INAPPSTORY_USER_ID!,
            tags: [],
            placeholders: {
                user: "Guest",
            },
            imagePlaceholders: {
                userAvatar: "image_url",
            },
            lang: "ru",
        }

        const storyManager = new window.IAS.StoryManager(storyManagerConfig)
        setStoryManager(storyManager)
    }, [isLoading])

    if (isLoading || !storyManager) return null
    return <>{children}</>
}
