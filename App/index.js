import { createStackNavigator, createAppContainer } from "react-navigation";

import Quiz from "./screens/Quiz";
import QuizIndex from "./screens/QuizIndex";
import Login from "./screens/Login";

const MainStack = createStackNavigator({
  Login: {
    screen: Login
  },
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Екзамен ПДР"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  }
});

export default createAppContainer(MainStack);
