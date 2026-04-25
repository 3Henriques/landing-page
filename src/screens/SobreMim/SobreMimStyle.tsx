import { StyleSheet } from "react-native";
import { tema } from "../../Tema";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

    root: {
        flex: 1,
        backgroundColor: tema.background,
    },
    texto: {
        backgroundColor: '#fff'
    }

})