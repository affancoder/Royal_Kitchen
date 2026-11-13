
// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { router } from "expo-router";

// const GOLD = "#D4AF00";

// const navItems = [
//   {
//     name: "services",
//     label: "Services",
//     icon: "briefcase-outline",
//     route: "/pages/services",
//   },
//   {
//     name: "menu",
//     label: "Menu",
//     icon: "restaurant-outline",
//     route: "/pages/menu",
//   },
//   {
//     name: "profile",
//     label: "Profile",
//     icon: "person-outline",
//     route: "/pages/profile",
//   },
//   {
//     name: "reservation",
//     label: "Reservation",
//     icon: "calendar-outline",
//     route: "/pages/reservation",
//   },
//   {
//     name: "booking",
//     label: "Booking",
//     icon: "clipboard-outline",
//     route: "/pages/booking",
//   },
// ];

// export default function Navbar({ active }) {
//   return (
//     <View style={styles.navbar}>
//       {navItems.map((item) => {
//         const selected = active === item.name;

//         return (
//           <TouchableOpacity
//             key={item.name}
//             style={styles.navItem}
//             onPress={() => router.push(item.route)}
//             activeOpacity={0.7}
//           >
//             <Ionicons
//               name={item.icon}
//               size={21}
//               color={GOLD}
//               style={{ opacity: selected ? 1 : 0.65 }}
//             />

//             <Text
//               style={[
//                 styles.navText,
//                 selected && styles.activeText,
//               ]}
//             >
//               {item.label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   navbar: {
//     height: 60,
//     backgroundColor: "#000000",
//     borderTopWidth: 1,
//     borderTopColor: "#665500",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//   },

//   navItem: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 4,
//   },

//   navText: {
//     color: GOLD,
//     fontSize: 8,
//   },

//   activeText: {
//     fontWeight: "bold",
//   },
// });
