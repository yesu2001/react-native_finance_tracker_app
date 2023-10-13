import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Button from "../Button";

const ExpenseIncomeForm = () => {
  const [isExpense, setIsExpense] = useState(true);
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("");
  const [category, setcategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {};

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <Button
            title="Expense"
            onPress={() => setIsExpense(true)}
            bgColor={isExpense ? "#06BCEE" : "#F0F0F0"}
            color={isExpense ? "white" : "grey"}
          />
          <Button
            title="Income"
            onPress={() => setIsExpense(false)}
            bgColor={!isExpense ? "#06BCEE" : "#F0F0F0"}
            color={!isExpense ? "white" : "grey"}
          />
        </View>
        <View style={{ flex: 1, gap: 20, marginVertical: 50 }}>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
          {isExpense && (
            <TextInput
              style={styles.input}
              placeholder="Payment Mode"
              value={mode}
              onChange={(text) => setMode(text)}
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Category"
            value={category}
            onChange={(text) => setcategory(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChange={(text) => setDescription(text)}
          />
        </View>

        <Button title="Save" onPress={handleSave} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F3F4F6",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inactiveTab: {
    color: "gray",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
});

export default ExpenseIncomeForm;

// import React, { useState } from "react";
// import { Picker } from "@react-native-picker/picker";
// import {
//   SafeAreaView,
//   StatusBar,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { addRecordStyles } from "./styles";
// import Button from "../Button";
// import ExpenseCategoryList from "../ExpenseCategoryList";

// export default function AddRecord() {
//   const [type, setType] = useState("expense");
//   const [mode, setMode] = useState("upi");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");

//   const renderPaymentBgColor = (item) => {
//     if (item === "UPI") {
//       return "#20bf55";
//     } else if (item === "CASH") {
//       return "#b08968";
//     } else if (item === "CARD") {
//       return "#f77f00";
//     }
//   };

//   const renderTypeBgColor = (item) => {
//     if (item === "Expense") {
//       return "#ef233c";
//     } else if (item === "Income") {
//       return "#3f8efc";
//     }
//   };

//   const onCategorySelect = (item) => {
//     setCategory(item.name);
//   };

//   const handleAddRecord = () => {};

//   return (
//     <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
//       <View style={addRecordStyles.formBox}>
//         <View style={addRecordStyles.options}>
//           {["Expense", "Income"].map((item, index) => (
//             <Text
//               style={[
//                 addRecordStyles.option,
//                 { backgroundColor: renderTypeBgColor(item) },
//               ]}
//               key={index}
//               onPress={() => setType(item)}
//             >
//               {item}
//             </Text>
//           ))}
//         </View>
//         <Text>Payment Mode</Text>
//         <View style={addRecordStyles.options}>
//           {["UPI", "CASH", "CARD"].map((item, index) => (
//             <Text
//               style={[
//                 addRecordStyles.option,
//                 { backgroundColor: renderPaymentBgColor(item) },
//               ]}
//               key={index}
//               onPress={() => setMode(item)}
//             >
//               {item}
//             </Text>
//           ))}
//         </View>
//         <TextInput
//           onChangeText={(newText) => setDescription(newText)}
//           value={description}
//           style={addRecordStyles.multiInput}
//           placeholder="Description ..."
//         />
//         <Text>Category</Text>
//         <ExpenseCategoryList
//           onCategorySelect={onCategorySelect}
//           selected={category}
//         />

//         <TouchableOpacity
//           style={addRecordStyles.saveBtn}
//           onPress={handleAddRecord}
//         >
//           <Text style={addRecordStyles.saveText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }
