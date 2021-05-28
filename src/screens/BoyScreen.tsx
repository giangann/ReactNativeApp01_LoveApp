import * as React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const Page = styled(View)`
    padding: 40px 40px 40px 40px
`

const BoyScreen: React.FC = () => {
  return (
    <View>
        <Header
            centerComponent={{ text: 'Cho bạn Nam', style: { color: '#fff' } }}
        />
        <Page>
          <Text>Cho bạn Nam</Text>
        </Page>

    </View>
  )
}

export default BoyScreen
