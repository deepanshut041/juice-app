import { StyleSheet } from "react-native";
import { scale, scaleVertical } from "../utils/scale";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center'
    },
    input: {
        marginLeft: scale(15),
        marginRight: scale(15),
        marginTop: scaleVertical(5),
        marginBottom: scaleVertical(5)
    },

    actionButon: {
        borderWidth: 0,
        marginLeft: scale(15),
        marginRight: scale(15),
        paddingTop: scaleVertical(15),
        paddingBottom: scaleVertical(15),
        marginTop: scaleVertical(10),
        marginBottom: scaleVertical(10)
    },

    image: {
        resizeMode: "contain",
        height: 100,
        marginBottom: scaleVertical(30),
    },

    textCenter: {
        textAlign: "center"
    },

    textRight: {
        textAlign: "right",
        marginEnd: scale(15)
    },

    boldText: {
        fontWeight: 'bold'
    },
    buttons: {
        flexDirection: 'row',
        marginBottom: scaleVertical(24),
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 14,
        marginTop: 27.5,
        alignSelf: "center",
        padding: 15,
        borderRadius: 32,
        width: 64,
        height: 64,
        alignItems: 'center',
        justifyContent: 'center'
    }
});