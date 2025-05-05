import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'

interface Props {
    title: string,
    description: string,
    restaurants: any[]
}

export default function FeaturedRow({ title, description, restaurants }: Props) {
    return (
        <View>
            <View className='flex-row justify-between items-center px-4'>
                <View>
                    <Text className='font-bold text-lg pt-4'>{title}</Text>
                    <Text className='text-gray-500 text-xs pb-2'>{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text className='text-primary font-semibold'>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className='overflow-visible'
            >
                {
                    restaurants.map((restaurant: any, index: any) => {
                        return (
                            <RestaurantCard
                                item={restaurant}
                                key={index}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}