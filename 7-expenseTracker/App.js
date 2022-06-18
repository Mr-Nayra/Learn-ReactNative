import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ExpensesContextProvider from "./store/expenses-context";

import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import IconButton from "./components/UI/IconButton";
import { GlobalStyles } from "./constants/styles";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary50 },
        headerTintColor: GlobalStyles.colors.primary800,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary50 },
        tabBarInactiveTintColor: GlobalStyles.colors.primary500,
        tabBarActiveTintColor: GlobalStyles.colors.primary800,
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate("ManageExpenses");
              }}
            />
          );
        },
      })}
    >
      <BottomTabs.Screen
        name="RecentExpences"
        component={RecentExpenses}
        options={{
          title: "Recent Expences",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" size={size} color={color} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="All Expences"
        component={AllExpenses}
        options={{
          title: "All Expences",
          tabBarLabel: "Expences",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" size={size} color={color} />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Expensesoverwiew"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpenses"
              component={ManageExpense}
              options={{ presentation: "modal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
