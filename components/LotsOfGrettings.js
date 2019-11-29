import React from 'react'
import SaySomething from './SaySomething'
import { View } from 'react-native'

const LotsOfGretting = () => {
    return (
        <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <SaySomething text={'Hello, how are you?'}/>
            <SaySomething text={'Hey man!'}/>
            <SaySomething text={'Good Morning!'}/>
        </View>
    )
}

export default LotsOfGretting