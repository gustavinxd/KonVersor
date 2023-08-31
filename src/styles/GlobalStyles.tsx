import { StyleSheet} from 'react-native';
import { myColors } from './Colors';

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        borderWidth: 20,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    btnDark: {
        width: 82,
        height: 72,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    btnGray: {
        width: 82,
        height: 72,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    btnGray2: {
        width: 82,
        height: 72,
        borderRadius: 24,
        justifyContent: 'center',
        borderColor: myColors.blue,
        borderWidth: 2,
        alignItems: 'center',
        margin: 8,
    },
    btnBluee: {
        width: 82,
        height: 72,
        borderRadius: 24,
        borderWidth: 20,
        borderColor: myColors.blue, // Defina a cor da borda como azul
        backgroundColor: myColors.light, // Ajuste a cor de fundo, se necessário
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    smallTextBlue: {
        fontSize: 32,
        color: myColors.blue,
    },
    //teclado
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: 'flex-end',
    }



});
