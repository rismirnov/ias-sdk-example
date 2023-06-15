import React, { useRef } from "react"
import { StoryAppearanceManagerContext } from "./storyAppearanceManagerContext"

interface StoryAppearanceManagerProps {
    storyListOptions?: any
    readerOptions?: any
    favoriteReaderOptions?: any
    children: React.ReactNode
}

export const StoryAppearanceManager = ({
    storyListOptions,
    readerOptions,
    favoriteReaderOptions,
    children,
}: StoryAppearanceManagerProps) => {
    const appearanceManagerRef = useRef<any>()

    const initAppearanceManager = () => {
        if (appearanceManagerRef.current) return
        const appearanceManager = new window.IAS.AppearanceManager()
        appearanceManagerRef.current = appearanceManager

        if (storyListOptions) appearanceManager.setStoriesListOptions(storyListOptions)
        if (readerOptions) appearanceManager.setStoryReaderOptions(readerOptions)
        if (favoriteReaderOptions)
            appearanceManager.setStoryFavoriteReaderOptions(favoriteReaderOptions)
    }

    initAppearanceManager()

    return (
        <StoryAppearanceManagerContext.Provider value={appearanceManagerRef.current}>
            {children}
        </StoryAppearanceManagerContext.Provider>
    )
}
