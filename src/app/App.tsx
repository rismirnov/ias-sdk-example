import { StoryList } from "../features/StoryList/StoryList"
import { StoryAppearanceManager } from "../features/StoryAppearanceManager"
import { Container } from "./Container"
import {
    favoriteReaderOptions,
    readerOptions,
    storyListOptions,
} from "./story-appearance-options"
import { useStoryManager } from "../features/StoryManager"

function App() {
    const { storyManager, isLoading } = useStoryManager()

    return (
        <Container>
            <StoryAppearanceManager
                storyManager={storyManager}
                storyListOptions={storyListOptions}
                readerOptions={readerOptions}
                favoriteReaderOptions={favoriteReaderOptions}
            >
                <StoryList />
            </StoryAppearanceManager>
        </Container>
    )
}

export default App
