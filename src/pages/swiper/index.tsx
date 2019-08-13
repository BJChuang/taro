import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, View } from '@tarojs/components'

interface IChildComponentProps extends React.Props<any> {
    name: String
}
export default class SwiperComponent extends Component<IChildComponentProps, any> {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <Swiper
                className='test-h'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                circular
                indicatorDots
                autoplay>
                <SwiperItem>
                    <View className='demo-text-1'>{this.props.name}</View>
                </SwiperItem>
                <SwiperItem>
                    <View className='demo-text-2'>2</View>
                </SwiperItem>
                <SwiperItem>
                    <View className='demo-text-3'>3</View>
                </SwiperItem>
            </Swiper>
        )
    }
} 
