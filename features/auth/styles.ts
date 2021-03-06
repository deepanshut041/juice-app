import { StyleSheet } from "react-native";
import { scale, scaleVertical } from "../utils/scale";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column"
    },
    input: {
        marginLeft: scale(15),
        marginRight: scale(15),
        marginTop: scaleVertical(5),
        marginBottom: scaleVertical(5)
    },
    actionButon: {
        marginLeft: scale(15),
        marginRight: scale(15),
        paddingTop: scaleVertical(15),
        paddingBottom: scaleVertical(15),
        marginTop: scaleVertical(10),
        marginBottom: scaleVertical(10)
    },
    image: {
        resizeMode: "contain",
        height: 80,
        marginBottom: scaleVertical(50),
        marginTop: scaleVertical(50),
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
    }, loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
});