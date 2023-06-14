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
        appearanceManagerRef.current = new window.IAS.AppearanceManager()
        const appearanceManager = appearanceManagerRef.current

        if (storyListOptions) appearanceManager.setStoriesListOptions(storyListOptions)
        if (readerOptions) appearanceManager.setStoryReaderOptions(readerOptions)
        if (favoriteReaderOptions)
            appearanceManager.setStoryFavoriteReaderOptions(favoriteReaderOptions)
    }

    if (!appearanceManagerRef.current) initAppearanceManager()

    return (
        <StoryAppearanceManagerContext.Provider value={appearanceManagerRef.current}>
            {children}
        </StoryAppearanceManagerContext.Provider>
    )
}
