import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CartModal from './CartModal'; // ajuste o caminho se necessário

export default function CartIcon() {
    const [showCart, setShowCart] = useState(false);

    return (
        <>
            <View className='absolute bottom-5 w-full z-50'>
                <TouchableOpacity
                    onPress={() => setShowCart(true)}
                    className='flex-row justify-between bg-primary items-center mx-5 rounded-full p-4 py-3 shadow-lg'
                >
                    <View className='p-2 px-4 rounded-full  bg-white/50'>
                        <Text className='font-extrabold text-white text-lg'>3</Text>
                    </View>
                    <Text className='flex-1 text-center font-extrabold text-white text-lg'>
                        View cart
                    </Text>
                    <Text className='font-semibold text-white font text-base'>
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(23)}
                    </Text>
                </TouchableOpacity>
            </View>
            <CartModal isVisible={showCart} onClose={() => setShowCart(false)} />
        </>
    );
}
