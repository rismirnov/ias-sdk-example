import React, { useEffect } from "react"
import { useInAppStorySDK } from "./hooks/useInAppStorySDK"

interface StoryManagerProps {
    children: React.ReactNode
}

export const StoryManager = ({ children }: StoryManagerProps) => {
    const { isLoading, IAS } = useInAppStorySDK()

    useEffect(() => {
        if (!isLoading) return

        const storyManagerConfig = {
            apiKey: process.env.INAPPSTORY_API_KEY!,
            userId: process.env.INAPPSTORY_USER_ID!,
            tags: [],
            placeholders: {
                user: "Guest",
            },
            imagePlaceholders: {
                userAvatar: "image_url",
            },
            lang: "ru",
        }

        new window.IAS.StoryManager(storyManagerConfig)
    }, [isLoading])

    if (isLoading) return null
    return children
}
