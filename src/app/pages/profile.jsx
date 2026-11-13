import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const DARK = "#292929";
const BORDER = "#806900";

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    {
      title: "Book a Table",
      icon: "calendar",
      type: "ion",
      action: "booking",
    },
    {
      title: "Manage Reservation",
      icon: "card",
      type: "ion",
      action: "reservation",
    },
    {
      title: "Booking History",
      icon: "time",
      type: "ion",
      action: "history",
    },
    {
      title: "Refer a Friend",
      icon: "person",
      type: "ion",
      action: "refer",
    },
    {
      title: "Terms & policy",
      icon: "file-document-outline",
      type: "material",
      action: "terms",
    },
    {
      title: "Settings",
      icon: "settings",
      type: "ion",
      action: "settings",
    },
  ];

  const handleMenuPress = (action) => {
    switch (action) {
      case "booking":
        Alert.alert("Book a Table", "Reservation screen coming soon.");
        break;
      case "reservation":
        Alert.alert("Manage Reservation", "Coming soon.");
        break;
      case "history":
        Alert.alert("Booking History", "Coming soon.");
        break;
      case "refer":
        Alert.alert("Refer a Friend", "Coming soon.");
        break;
      case "terms":
        Alert.alert("Terms & Policy", "Coming soon.");
        break;
      case "settings":
        Alert.alert("Settings", "Coming soon.");
        break;
      default:
        break;
    }
  };

  const renderMenuIcon = (item) => {
    if (item.type === "material") {
      return (
        <MaterialCommunityIcons
          name={item.icon}
          size={23}
          color={GOLD}
        />
      );
    }

    return (
      <Ionicons
        name={item.icon}
        size={23}
        color={GOLD}
      />
    );
  };

  const handleLogout = () => {
    router.replace("/auth/login");
  };

  const navigateTo = (route) => {
    router.push(route);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <View style={styles.container}>

        {/* Profile Content */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          {/* User Information */}
          <View style={styles.profileHeader}>

            {/* Profile Avatar */}
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AD</Text>
            </View>

            {/* User Details */}
            <View style={styles.userDetails}>
              <Text style={styles.userName}>Alex Dadrio</Text>
              <Text style={styles.userEmail}>
                alexdadrio@gmail.com
              </Text>
            </View>

          </View>

          {/* Statistics */}
          <View style={styles.statsContainer}>

            {/* Reward Points */}
            <View style={styles.statCard}>
              <Text style={styles.statTitle}>
                Reward Points
              </Text>
              <Text style={styles.statValue}>
                40,582
              </Text>
            </View>

            {/* Bookings */}
            <View style={styles.statCard}>
              <Text style={styles.statTitle}>
                Bookings
              </Text>
              <Text style={styles.statValue}>
                4 <Text style={styles.activeText}>Active</Text>
              </Text>
            </View>

          </View>

          {/* Profile Menu */}
          <View style={styles.menuContainer}>

            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuButton}
                activeOpacity={0.7}
                onPress={() => handleMenuPress(item.action)}
              >
                <View style={styles.menuIcon}>
                  {renderMenuIcon(item)}
                </View>

                <Text style={styles.menuTitle}>
                  {item.title}
                </Text>

                <Ionicons
                  name="chevron-forward"
                  size={15}
                  color="#888888"
                />
              </TouchableOpacity>
            ))}

            {/* Logout */}
            <TouchableOpacity
              style={styles.menuButton}
              activeOpacity={0.7}
              onPress={handleLogout}
            >
              <View style={styles.menuIcon}>
                <Ionicons
                  name="log-out-outline"
                  size={24}
                  color={GOLD}
                />
              </View>

              <Text style={styles.menuTitle}>
                logout
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateTo("/pages/homescreen")}
          >
            <Ionicons name="home" size={21} color={GOLD} />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateTo("/pages/menu")}
          >
            <MaterialCommunityIcons
              name="food"
              size={22}
              color={GOLD}
            />
            <Text style={styles.navText}>Menu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() =>
              Alert.alert("Booking", "Booking screen coming soon.")
            }
          >
            <Ionicons
              name="calendar"
              size={21}
              color={GOLD}
            />
            <Text style={styles.navText}>Booking</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigateTo("/pages/services")}
          >
            <Ionicons
              name="briefcase"
              size={21}
              color={GOLD}
            />
            <Text style={styles.navText}>Services</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navItem}
          >
            <Ionicons
              name="person"
              size={21}
              color={GOLD}
            />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BLACK,
  },

  container: {
    flex: 1,
    backgroundColor: BLACK,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 25,
  },

  // Profile Header
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 27,
    paddingHorizontal: 2,
  },

  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: GOLD,
    backgroundColor: DARK,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: GOLD,
    fontSize: 23,
    fontWeight: "bold",
  },

  userDetails: {
    flex: 1,
    marginLeft: 12,
  },

  userName: {
    color: GOLD,
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "serif",
    marginBottom: 3,
  },

  userEmail: {
    color: "#777777",
    fontSize: 11,
  },

  // Statistics
  statsContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },

  statCard: {
    flex: 1,
    height: 67,
    backgroundColor: DARK,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 9,
    justifyContent: "center",
  },

  statTitle: {
    color: GOLD,
    fontSize: 12,
    marginBottom: 4,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },

  activeText: {
    color: "#FFFFFF",
    fontSize: 10,
  },

  // Menu
  menuContainer: {
    marginTop: 0,
  },

  menuButton: {
    height: 48,
    width: "100%",
    backgroundColor: DARK,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 7,
  },

  menuIcon: {
    width: 29,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  menuTitle: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "serif",
    marginLeft: 5,
  },

  // Bottom Navigation
  bottomNav: {
    height: 55,
    backgroundColor: BLACK,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 5,
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },

  navText: {
    color: GOLD,
    fontSize: 9,
    fontWeight: "500",
  },
});
