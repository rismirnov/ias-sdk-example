import React, { useRef } from "react"

interface UseStoryListProps {
    id: string
    feed: string
    appearanceManager?: any
}

interface UseStoryListResult {
    storyList: any
}

export const useStoryList = ({
    id,
    feed,
    appearanceManager,
}: UseStoryListProps): UseStoryListResult => {
    const storyListRef = useRef<any>()

    const initStoryList = () => {
        if (storyListRef.current) return
        if (!appearanceManager) return

        const storyManager = window.IAS.StoryManager.getInstance()

        const storyList = new storyManager.StoriesList(id, appearanceManager, { feed })
        storyListRef.current = storyList
    }

    initStoryList()

    return {
        storyList: storyListRef.current,
    }
}
