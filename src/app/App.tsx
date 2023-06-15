import { StoryList } from "../features/StoryList/StoryList"
import { StoryManager } from "../features/StoryManager"
import { StoryAppearanceManager } from "../features/StoryAppearanceManager"
import { Container } from "./Container"
import {
    favoriteReaderOptions,
    readerOptions,
    storyListOptions,
} from "./story-appearance-options"

function App() {
    return (
        <Container>
            <StoryManager>
                <StoryAppearanceManager
                    storyListOptions={storyListOptions}
                    readerOptions={readerOptions}
                    favoriteReaderOptions={favoriteReaderOptions}
                >
                    <StoryList />
                </StoryAppearanceManager>
            </StoryManager>
        </Container>
    )
}

export default App
