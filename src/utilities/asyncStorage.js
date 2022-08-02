import AsyncStorage from "@react-native-async-storage/async-storage";

export const set = async (key, value) => {
    console.log("SAVING TO ASYNCSTORAGE ::: ", key, value);
    const serialized = JSON.stringify(value);
    return await AsyncStorage.setItem(key, serialized);
};

export const get = async (key) => {
    console.log("LOADING FROM ASYNCSTORAGE ::: ", key);
    try {
        const raw = await AsyncStorage.getItem(key);
        return JSON.parse(raw);
    } catch (e) {
        return { error: "Failed to save to asyncStorage" };
    }
};
export const clear = async () => {
    console.log("Cleared");
    return await AsyncStorage.clear();
};
