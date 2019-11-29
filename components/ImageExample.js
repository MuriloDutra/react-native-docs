import React from 'react'
import { Image } from 'react-native'

const ImageExample = () => {
    let pic = { uri: 'https://m.media-amazon.com/images/M/MV5BODlhOGM4MGMtYjBjMi00MWQ2LTk4OWUtYzQ2YzE0NWZkODlkXkEyXkFqcGdeQW1yb3NzZXI@._V1_CR251,0,1419,798_AL_UY268_CR84,0,477,268_AL_.jpg'}
    return (
        <Image source={ pic } style={{width: 193, height: 193, marginTop: 100, left: 90 }}/>
    )
}

export default ImageExample