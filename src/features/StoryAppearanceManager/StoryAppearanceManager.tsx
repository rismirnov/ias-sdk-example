import React from "react"
import { StoryAppearanceManagerContext } from "./storyAppearanceManagerContext"
import { useStoryAppearanceManagerConfigurator } from "./hooks/useStoryAppearanceManagerConfigurator"

interface StoryAppearanceManagerProps {
    storyListOptions?: any
    readerOptions?: any
    favoriteReaderOptions?: any
    storyManager?: any
    children: React.ReactNode
}

export const StoryAppearanceManager = ({
    children,
    ...props
}: StoryAppearanceManagerProps) => {
    const { appearanceManager } = useStoryAppearanceManagerConfigurator(props)

    return (
        <StoryAppearanceManagerContext.Provider value={appearanceManager}>
            {children}
        </StoryAppearanceManagerContext.Provider>
    )
}
