import { View, Text, TouchableOpacity } from 'react-native'
import { featured } from '../constants';

export default function Cart() {
    const restaurant = featured.restaurants[0];

    return (
        <View className='bg-white flex-1'>
            <View className='realtive py-4 shadow-sm'>
                <TouchableOpacity
                    className='bg-primary absolute z-10'
                >

                </TouchableOpacity>
            </View>
        </View>
    )
}