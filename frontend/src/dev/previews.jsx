import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import HomeScreen from "../screens/HomeScreen";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/HomeScreen">
                <HomeScreen/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews