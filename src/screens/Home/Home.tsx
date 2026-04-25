import { View } from "react-native";
import { styles } from './HomeStyles';
import Rodape from "../../components/Rodape/Rodape";
import { FotoPerfil } from "../../components/FotoPerfil/FotoPerfil";
import CampoTexto from "../../components/CampoTexto/CampoTexto";

export function Home(){
    return(
        <View style={styles.container}>
            <FotoPerfil />
            <CampoTexto texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ullamcorper ipsum ac hendrerit vulputate. Aliquam erat volutpat. Aliquam vel semper diam, vitae interdum orci. Integer venenatis quis odio vel aliquet. Duis metus nibh, fermentum quis lacinia eu, semper sit amet orci. In hac habitasse platea dictumst. Nam molestie tellus in elit sagittis, a eleifend dui tincidunt. In sed nisi tortor. In purus lectus, sodales at facilisis quis, bibendum eu urna. Quisque non magna tincidunt dolor gravida hendrerit. Sed cursus, dolor quis pretium ultricies, magna nibh convallis dui, venenatis consectetur velit magna varius turpis. Nam dapibus metus vel quam porttitor vulputate. Integer quis arcu commodo, lobortis enim quis, blandit nibh. Nullam vel metus non lectus tristique convallis. Nullam ligula elit, fermentum at semper id, semper eget turpis. Nullam porttitor felis eget euismod placerat.!" />
            <Rodape />
        </View>
    )
}