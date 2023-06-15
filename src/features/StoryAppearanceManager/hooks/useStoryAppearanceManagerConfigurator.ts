import React, { useRef } from "react"

interface UseStoryAppearanceManagerConfiguratorProps {
    storyManager?: any
    storyListOptions?: any
    readerOptions?: any
    favoriteReaderOptions?: any
}

interface UseStoryAppearanceManagerConfiguratorResult {
    appearanceManager?: any
}

export const useStoryAppearanceManagerConfigurator = ({
    storyManager,
    storyListOptions,
    readerOptions,
    favoriteReaderOptions,
}: UseStoryAppearanceManagerConfiguratorProps): UseStoryAppearanceManagerConfiguratorResult => {
    const appearanceManagerRef = useRef<any>()

    const initAppearanceManager = () => {
        if (appearanceManagerRef.current) return
        if (!storyManager) return

        const appearanceManager = new window.IAS.AppearanceManager()
        appearanceManagerRef.current = appearanceManager

        if (storyListOptions) appearanceManager.setStoriesListOptions(storyListOptions)
        if (readerOptions) appearanceManager.setStoryReaderOptions(readerOptions)
        if (favoriteReaderOptions)
            appearanceManager.setStoryFavoriteReaderOptions(favoriteReaderOptions)
    }

    initAppearanceManager()

    return {
        appearanceManager: appearanceManagerRef.current,
    }
}
