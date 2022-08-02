import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";
import styles from "./styles";

const CustomerDetails = () => {
    const { navigate } = useNavigation();
    const route = useRoute();
    const selectedCustomer = route.params.customer;
    return (
        <View style={styles.container}>
            <Text> {"First Name"} </Text>
            <View style={styles.cardContainer}>
                <Text> {selectedCustomer.firstName} </Text>
            </View>
            <Text style={styles.cardText}> {"Last Name"} </Text>
            <View style={styles.cardContainer}>
                <Text> {selectedCustomer.lastName} </Text>
            </View>
            <Text style={styles.cardText}> {"Phone Number"} </Text>
            <View style={styles.cardContainer}>
                <Text> {selectedCustomer.phoneNum} </Text>
            </View>
            <Text style={styles.cardText}> {"Region"} </Text>
            <View style={styles.cardContainer}>
                <Text> {selectedCustomer.region} </Text>
            </View>
            <Text style={styles.cardText}> {"Active"} </Text>
            <View style={styles.cardContainer}>
                <Text> {selectedCustomer.active ? "Yes" : "No"} </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    text={"Edit"}
                    onPress={() => navigate("CustomerEdit", { selectedCustomer })}
                />
            </View>
        </View>
    );
};

export default CustomerDetails;
