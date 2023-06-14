import React, { useContext } from "react"
import { StoryAppearanceManagerContext } from "../storyAppearanceManagerContext"

export const useStoryAppearanceManager = () => {
    return useContext(StoryAppearanceManagerContext)
}
