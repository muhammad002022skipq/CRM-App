import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useListCustomer } from "../customer/hooks";
import styles from "./styles";
import Button from "../../components/Button";
const Regions = () => {
    const { navigate } = useNavigation();
    const regions = useSelector((state) => state.customers.list.regions);
    useListCustomer();

    return (
        <View style={styles.container}>
            <View>
                <Button
                    text={"Create User"}
                    onPress={() => navigate("CustomerCreate")}
                />
            </View>
            <Text style={styles.regionContainer}>{"List of Regions"}</Text>
            {regions.map((region) => (
                <View key={region.id}>
                    <Button
                        onPress={() => navigate("ListCustomers", { region })}
                        text={region.name}
                    />
                </View>
            ))}
        </View>
    );
};

export default Regions;
