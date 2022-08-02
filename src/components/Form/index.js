import {
    TouchableHighlight,
    Text,
    Switch,
    TextInput,
    View,
} from "react-native";
import styles from "./styles";
import Button from "../Button";
import { useUpdateFields } from "../../features/customer/hooks";
import { useNavigation } from "@react-navigation/native";
import { PENDING, INPROGRESS } from "../../utilities/helper";
import { useSelector } from "react-redux";

const Form = ({ customer, onSubmit, status }) => {
    const { navigate } = useNavigation();
    if (customer === null) {
        var customerID = null;
    } else {
        var customerID = customer.id;
    }

    const { fields, setFormField } = useUpdateFields(customerID);
    const { firstName, lastName, active, phoneNum, region } = fields;

    const allRegions = useSelector((state) => state.customers.list.regions);

    const handleSubmit = () => {
        onSubmit();
        navigate("Welcome");
    };

    return (
        <View style={styles.container}>
            <TextInput
                key={"firstName"}
                placeholder={firstName || "First Name"}
                value={firstName || ""}
                onChangeText={(v) => setFormField("firstName", v.trim())}
                style={styles.inputField}
            />
            <TextInput
                key={"lastName"}
                placeholder={lastName || "Last Name"}
                value={lastName || ""}
                onChangeText={(v) => setFormField("lastName", v.trim())}
                style={styles.inputField}
            />
            <TextInput
                key={"phoneNum"}
                placeholder={phoneNum || "Phone Number"}
                value={phoneNum || ""}
                onChangeText={(v) => setFormField("phoneNum", v.trim())}
                style={styles.inputField}
            />
            <View>
                <Text>
                    {"Inactive"}
                    <Switch
                        key={"active"}
                        value={active || false}
                        onChange={() => setFormField("active", !active)}
                    />
                    <Text>{"Active"}</Text>
                </Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Text>Select a Region</Text>
                </View>
                {allRegions.map((region) => (
                    <View key={region.id}>
                        <TouchableHighlight
                            style={styles.pressableCard}
                            underlayColor={"grey"}
                            onPress={() => setFormField("region", region.name)}
                        >
                            <Text> {region.name} </Text>
                        </TouchableHighlight>
                    </View>
                ))}
            </View>
            <View style={styles.submitButton} />
            <Button
                onPress={handleSubmit}
                text={"Submit"}
                disabled={
                    (status !== PENDING && status !== INPROGRESS) ||
                    firstName === null ||
                    firstName === "" ||
                    lastName === null ||
                    lastName === "" ||
                    phoneNum === null ||
                    phoneNum === "" ||
                    region === null
                }
            />
        </View>
    );
};
export default Form;
