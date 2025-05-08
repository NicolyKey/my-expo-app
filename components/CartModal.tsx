import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

export default function CartModal({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            className='justify-end m-0'
            swipeDirection="down"
            onSwipeComplete={onClose}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.3}
        >
            <View className='bg-white p-4 rounded-t-lg min-h-'>
                <Text style={styles.title}>Seu carrinho</Text>
                {/* main */}
                <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                    <Text style={styles.closeText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minHeight: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeBtn: {
        marginTop: 20,
        alignSelf: 'center',
    },
    closeText: {
        color: 'blue',
    },
});
