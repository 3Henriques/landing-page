import { StyleSheet } from "react-native";
import { tema } from "../../Tema";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
    },

    root: {
        flex: 1,
        backgroundColor: tema.background,
    },
  
    scroll: {
        paddingHorizontal: tema.paddingHorizontal,
        paddingBottom: 32,
    },
})