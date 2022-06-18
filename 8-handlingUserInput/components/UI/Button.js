import { Pressable, View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const IconButton = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        (pressed && [styles.pressed, styles.width]) || styles.width
      }
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    paddingHorizontal: 6,
    paddingVertical: 12,
    marginHorizontal: 8,
    marginVertical: 2,
    backgroundColor: GlobalStyles.colors.primary800,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
  width: {
    width: "50%",
  },
  text:{
    color: "white"
  }
});
