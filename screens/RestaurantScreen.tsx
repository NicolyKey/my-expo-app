import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { RootStackParamList } from '../types';
import DishRow from 'components/DishRow';
import CartIcon from 'components/CartIcon';

type RestaurantRouteProp = RouteProp<RootStackParamList, 'Restaurant'>;

export default function Restaurant() {
    const route = useRoute<RestaurantRouteProp>();
    const navigation = useNavigation();
    const item = route.params;

    return (
        <View>
            <CartIcon />
            <ScrollView>
                <View className='relative'>
                    <Image className='w-full h-72' source={item.image} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'
                    >
                        <AntDesign name="arrowleft" size={16} color="#f97316" />
                    </TouchableOpacity>
                </View>
                <View
                    className='bg-white -mt-12 pt-6 rounded-t-lg'
                >
                    <View className='px-5'>

                        <View className='flex-row items-center space-x-1'>
                            <Text className='text-3xl font-bold px-2'>{item.name}</Text>
                            <View className='flex-row'>
                                <AntDesign name="star" size={16} color="#F3C623" />
                                <AntDesign name="star" size={16} color="#F3C623" />
                                <AntDesign name="star" size={16} color="#F3C623" />
                                <AntDesign name="staro" size={16} color="#F3C623" />
                                <AntDesign name="staro" size={16} color="#F3C623" />
                            </View>
                        </View>
                        <View className='flex-row space-x-2 my-1'>
                            <View className='flex-row'>
                                <Text className='px-2 font-semibold'>{item.category}</Text>
                                <Entypo name="location-pin" size={18} color="#EC5228" />
                                <Text className=''> Nearby {item.address}</Text>
                            </View>
                        </View>
                        <Text className='pt-4'>{item.description}</Text>
                    </View>
                </View>
                <View className='pb-36 bg-white'>
                    <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
                    {
                        item.dishes.map((dish, index) => <DishRow item={{ ...dish }} key={index} />)
                    }
                </View>
            </ScrollView>
        </View>
    );
}
