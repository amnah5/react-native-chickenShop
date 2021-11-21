import styles from "./styles";
import { useState } from "react";

function Sign() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
  };

  const Signin = ({navigation}) => {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signin</Text>
        <TextInput
          onChangeText={(username) => setUser({ ...user, username })}
          style={styles.authTextInput}
          placeholder="Username"
        />
        <TextInput
          onChangeText={(password) => setUser({ ...user, password })}
          style={styles.authTextInput}
          placeholder="Password"
        />
        <Button onPress={handleSubmit}>Login</Button>
      </View>
    );
  };
}
export default Sign;
