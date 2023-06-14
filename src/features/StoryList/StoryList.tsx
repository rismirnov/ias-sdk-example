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

    const initStoryList = () => {
        const storyList = new storyManager.StoriesList(
            "#stories_widget",
            storyAppearanceManager,
            { feed: "default" }
        )
        storyListRef.current = storyList
    }

    if (!storyListRef.current) initStoryList()

    useEffect(() => {
        storyListRef.current.on("startLoad", (loaderContainer: HTMLElement) => {
            loaderContainer.style.background = `url("https://inappstory.com/stories/loader.gif") center / 45px auto no-repeat transparent')`
            onLoadStart?.(loaderContainer)
        })

        storyListRef.current.on(
            "endLoad",
            (loaderContainer: HTMLElement, loadedStoriesLength: number) => {
                loaderContainer.style.background = "none"
                onLoadEnd?.(loaderContainer, loadedStoriesLength)
            }
        )

        return () => {
            // storyListRef.current.off
        }
    }, [])

    return <div id="stories_widget"></div>
}
