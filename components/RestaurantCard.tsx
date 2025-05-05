import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;


export default function RestaurantCard({ item }: any) {
    const navigation = useNavigation<NavigationProps>();
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Restaurant', { ...item })}
        >
            <View className='mr-6 bg-white rounded-3xl shadow-lg'>
                <Image className='h-36 w-64 rounded-t-3xl' source={item.image} />
                <View className='px-3 pb-4 space-y-2'>
                    <Text className='text-lg font-bold pt-2' >{item.name}</Text>
                    <View className='flex-row items-center space-x-1'>
                        <AntDesign name="star" size={16} color="#F3C623" />
                        <AntDesign name="star" size={16} color="#F3C623" />
                        <AntDesign name="star" size={16} color="#F3C623" />
                        <AntDesign name="staro" size={16} color="#F3C623" />
                        <AntDesign name="staro" size={16} color="#F3C623" />
                        <Text className='px-2 font-semibold'>{item.category}</Text>
                    </View>
                    <View className='flex-row'>
                        <Entypo name="location-pin" size={18} color="#EC5228" />
                        <Text className='px-1'>Nearby {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}