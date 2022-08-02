import { StyleSheet } from "react-native";

const stylesFn = ({ disabled = false }) => {
    let backgroundColor;
    let color;

    if (disabled) {
        backgroundColor = "grey";
        color = "black";
    } else {
        backgroundColor = "#3771ff";
        color = "white";
    }

    return StyleSheet.create({
        button: {
            width: 160,
            height: 60,
            borderRadius: 30,
            margin: 10,
            backgroundColor: backgroundColor,
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            color: color,
            fontSize: 19,
        },
    });
};

export default stylesFn;
