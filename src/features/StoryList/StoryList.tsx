import { useEffect, useRef } from "react"
import { useStoryAppearanceManager } from "../StoryAppearanceManager"

interface StoryListProps {
    onLoadStart?: (loaderContainer: HTMLElement) => void
    onLoadEnd?: (loaderContainer: HTMLElement, loadedStoriesLength: number) => void
}

export const StoryList = ({ onLoadStart, onLoadEnd }: StoryListProps) => {
    const storyAppearanceManager = useStoryAppearanceManager()
    const storyManager = window.IAS.StoryManager.getInstance()
    const storyListRef = useRef<any>()

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

    const initStoryList = () => {
        if (storyListRef.current) return
        const storyList = new storyManager.StoriesList(
            "#stories_widget",
            storyAppearanceManager,
            { feed: "onboarding" }
        )
        bindStoryListEvents(storyList)
        storyListRef.current = storyList
    }

    initStoryList()

    return <div id="stories_widget"></div>
}
