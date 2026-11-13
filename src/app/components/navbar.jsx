
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const GOLD = "#D4AF00";
const BLACK = "#000000";

const navItems = [
  { name: "home", label: "Home", icon: "home", route: "/pages/homescreen" },
  { name: "menu", label: "Menu", icon: "restaurant", route: "/pages/menu" },
  { name: "booking", label: "Booking", icon: "calendar", route: "/pages/booking" },
  { name: "services", label: "Services", icon: "briefcase", route: "/pages/services" },
  { name: "profile", label: "Profile", icon: "person", route: "/pages/profile" },
];

export default function Navbar({ active }) {
  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => {
        const selected = active === item.name;

        return (
          <TouchableOpacity
            key={item.name}
            style={styles.navItem}
            onPress={() => router.push(item.route)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconBox, selected && styles.activeIconBox]}>
              <Ionicons
                name={item.icon}
                size={21}
                color={selected ? BLACK : GOLD}
              />
            </View>

            <Text style={[styles.navLabel, selected && styles.activeNavLabel]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    height: 57,
    backgroundColor: BLACK,
    borderTopWidth: 1,
    borderTopColor: "#665500",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  iconBox: {
    width: 43,
    height: 29,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  activeIconBox: {
    backgroundColor: GOLD,
  },
  navLabel: {
    color: GOLD,
    fontSize: 8,
  },
  activeNavLabel: {
    fontWeight: "bold",
  },
});
