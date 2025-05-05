import { StatusBar } from 'expo-status-bar'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import Categories from 'components/Categories'

export default function HomeScreen() {

    return (
        <SafeAreaView className='bg-white py-6'>
            <StatusBar barStyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300' >
                    <Feather name="search" size={25} color="gray" />
                    <TextInput placeholder='Restaurants' className='ml-2 flex-1' />
                    <View className='flex-row items-center space-x-1 border-l-2 pl-2 border-l-gray-300' >
                        <Feather name="map-pin" size={20} color="gray" />
                        <Text className='text-gray-600 px-2'>Brasilia, BR</Text>
                    </View>
                </View>
                <View className='p-3 rounded-full bg-primary mx-2'>
                    <Feather name="sliders" size={20} color="white" />
                </View>
            </View>

            {/* Main */}
            <ScrollView showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}>
                <Categories />
            </ScrollView>
        </SafeAreaView>
    )
}
