import { StyleSheet } from "react-native";
import { tema } from "../../Tema";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},

    root: {
        flex: 1,
        backgroundColor: tema.background,
    },
    texto: {
        backgroundColor: '#fff'
    },
    back: {
        alignSelf: 'flex-start',
        marginBottom: 8,
        marginTop:60
    },

})