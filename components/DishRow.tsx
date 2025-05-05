import { View, Image, Text, TouchableOpacity } from 'react-native'
import { ImageSourcePropType } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

interface Dishes {
    id: number;
    name: string;
    description: string;
    price: number;
    image: ImageSourcePropType;
}

interface Props {
    item: Dishes
}

export default function DishRow({ item }: Props) {
    const [counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleRemove = () => {
        if (counter > 0)
            setCounter(counter - 1);
    }
    return (
        <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
            <Image className='rounded-3xl h-24 w-24' source={item.image} />
            <View className='flex flex-1 space-y-1'>
                <View className='pl-3'>
                    <Text className='text-xl'>{item.name}</Text>
                    <Text className='text-gray-700'>{item.description}</Text>
                </View>
                <View className='flex-row justify-between pl-3 items-center'>
                    <Text className='text-gray-700 text-lg font-bold'>
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(item.price)}
                    </Text>
                    <View className='flex-row items-center'>
                        <TouchableOpacity
                            onPress={handleRemove}
                            className='p-1 rounded-full bg-primary'
                        >
                            <AntDesign name="minus" size={24} color="white" />
                        </TouchableOpacity>
                        <Text className='px-3'>{counter}</Text>
                        <TouchableOpacity
                            onPress={handleAdd}
                            className='p-1 rounded-full bg-primary'
                        >
                            <AntDesign name="plus" size={24} color="white" />
                        </TouchableOpacity>


                    </View>

                </View>
            </View>
        </View>
    )
}