import { StyleSheet } from 'react-native';
import { tema } from '../../Tema';

export const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10        
    },

    primaryBtn: {
        backgroundColor: tema.accent,
        borderRadius: 8,
        paddingVertical: 14,
        marginTop: 12,
        alignItems: 'center',
    },

    primaryLabel: {
        color: tema.textOnAccent,
        fontSize: 16,
        fontWeight: '600',
    },

    pressed: {
        opacity: 0.9,
    }
});