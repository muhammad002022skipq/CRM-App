import { FlatList, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import styles from "./styles";

const ListCustomers = () => {
    const { navigate } = useNavigation();
    const route = useRoute();
    const selectedRegion = route.params.region.name;
    const selectedCustomers = useSelector(
        (state) => state.customers.list.customers
    ).filter((customer) => customer.region === selectedRegion);

    return (
        <View style={styles.container}>
            {selectedCustomers.length === 0 ? (
                <Text style={styles.userText}>{"No user Found"}</Text>
            ) : (
                <View>
                    <FlatList
                        data={selectedCustomers}
                        renderItem={({ item }) => (
                            <Pressable
                                style={styles.pressableCard}
                                onPress={() => navigate("CustomerDetails", { customer: item })}
                            >
                                <Text> {`${item.firstName}  ${item.lastName} `} </Text>
                                <Text>
                                    {`Active : `} {item.active ? "Yes" : "No"}
                                </Text>
                            </Pressable>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default ListCustomers;
