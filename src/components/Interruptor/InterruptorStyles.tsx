import { StyleSheet } from 'react-native';
import { tema } from '../../Tema';

export const styles = StyleSheet.create({
    topBlock: {
        paddingTop: 16,
        paddingHorizontal: tema.paddingHorizontal,
    },
    heading: {
        color: tema.text,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    switchLabel: {
        color: tema.text,
        fontSize: 15,
        fontWeight: '400',
    },
});