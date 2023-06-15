import { useEffect } from "react"
import { useStoryAppearanceManager } from "../StoryAppearanceManager"
import { useStoryList } from "./hooks/useStoryList"

interface StoryListProps {
    onLoadStart?: (loaderContainer: HTMLElement) => void
    onLoadEnd?: (loaderContainer: HTMLElement, loadedStoriesLength: number) => void
}

export const StoryList = ({ onLoadStart, onLoadEnd }: StoryListProps) => {
    const appearanceManager = useStoryAppearanceManager()
    const { storyList } = useStoryList({
        id: "#stories_widget",
        feed: "onboarding",
        appearanceManager,
    })

    const bindStoryListEvents = (storyList: any) => {
        storyList.on("startLoad", (loaderContainer: HTMLElement) => {
            loaderContainer.style.background = `url("https://inappstory.com/stories/loader.gif") center / 45px auto no-repeat transparent')`
            onLoadStart?.(loaderContainer)
        })

        storyList.on(
            "endLoad",
            (loaderContainer: HTMLElement, loadedStoriesLength: number) => {
                loaderContainer.style.background = "none"
                onLoadEnd?.(loaderContainer, loadedStoriesLength)
            }
        )
    }

    useEffect(() => {
        if (!storyList) return
        bindStoryListEvents(storyList)
    }, [storyList])

    return <div id="stories_widget"></div>
}
