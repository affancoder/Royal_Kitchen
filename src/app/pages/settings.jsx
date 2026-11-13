import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Switch,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#171717";

export default function Settings() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [bookingUpdates, setBookingUpdates] = useState(true);
  const [promotionalOffers, setPromotionalOffers] = useState(false);

  const showMessage = (title) => {
    Alert.alert(title, "This setting will be available soon.");
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => router.replace("/auth/login"),
        },
      ]
    );
  };

  const SettingRow = ({ icon, title, subtitle, onPress }) => (
    <TouchableOpacity
      style={styles.settingRow}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.settingIcon}>
        <Ionicons name={icon} size={20} color={GOLD} />
      </View>

      <View style={styles.settingInfo}>
        <Text style={styles.settingTitle}>{title}</Text>
        {subtitle ? (
          <Text style={styles.settingSubtitle}>{subtitle}</Text>
        ) : null}
      </View>

      <Ionicons name="chevron-forward" size={18} color="#777777" />
    </TouchableOpacity>
  );

  const ToggleRow = ({ icon, title, subtitle, value, onValueChange }) => (
    <View style={styles.settingRow}>
      <View style={styles.settingIcon}>
        <Ionicons name={icon} size={20} color={GOLD} />
      </View>

      <View style={styles.settingInfo}>
        <Text style={styles.settingTitle}>{title}</Text>
        {subtitle ? (
          <Text style={styles.settingSubtitle}>{subtitle}</Text>
        ) : null}
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#555555", true: "#806A00" }}
        thumbColor={value ? GOLD : "#CCCCCC"}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={22} color={GOLD} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Profile */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={30} color={GOLD} />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Alex Dadrio</Text>
            <Text style={styles.profileEmail}>alexdadrio@gmail.com</Text>
            <Text style={styles.profileLabel}>Manage your account</Text>
          </View>

          <TouchableOpacity onPress={() => router.push("/pages/profile")}>
            <Ionicons name="create-outline" size={22} color={GOLD} />
          </TouchableOpacity>
        </View>

        {/* Notifications */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.sectionCard}>
          <ToggleRow
            icon="notifications-outline"
            title="Push Notifications"
            subtitle="Receive updates on your device"
            value={pushNotifications}
            onValueChange={setPushNotifications}
          />

          <View style={styles.separator} />

          <ToggleRow
            icon="mail-outline"
            title="Email Notifications"
            subtitle="Receive updates through email"
            value={emailNotifications}
            onValueChange={setEmailNotifications}
          />

          <View style={styles.separator} />

          <ToggleRow
            icon="calendar-outline"
            title="Booking Updates"
            subtitle="Get reservation confirmations and reminders"
            value={bookingUpdates}
            onValueChange={setBookingUpdates}
          />

          <View style={styles.separator} />

          <ToggleRow
            icon="pricetag-outline"
            title="Promotional Offers"
            subtitle="Receive special deals and offers"
            value={promotionalOffers}
            onValueChange={setPromotionalOffers}
          />
        </View>

        {/* Account */}
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.sectionCard}>
          <SettingRow
            icon="person-outline"
            title="Edit Profile"
            subtitle="Update your personal information"
            onPress={() => router.push("/pages/profile")}
          />

          <View style={styles.separator} />

          <SettingRow
            icon="lock-closed-outline"
            title="Change Password"
            subtitle="Update your account password"
            onPress={() => showMessage("Change Password")}
          />

          <View style={styles.separator} />

          <SettingRow
            icon="location-outline"
            title="Saved Addresses"
            subtitle="Manage your delivery addresses"
            onPress={() => showMessage("Saved Addresses")}
          />
        </View>

        {/* Preferences */}
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.sectionCard}>
          <SettingRow
            icon="language-outline"
            title="Language"
            subtitle="English"
            onPress={() => showMessage("Language")}
          />

          <View style={styles.separator} />

          <SettingRow
            icon="moon-outline"
            title="Appearance"
            subtitle="Dark Theme"
            onPress={() => showMessage("Appearance")}
          />
        </View>

        {/* Support */}
        <Text style={styles.sectionTitle}>Support & Information</Text>
        <View style={styles.sectionCard}>
          <SettingRow
            icon="help-circle-outline"
            title="Help & Support"
            onPress={() => router.push("/pages/contact")}
          />

          <View style={styles.separator} />

          <SettingRow
            icon="document-text-outline"
            title="Terms & Policy"
            onPress={() => router.push("/pages/termsandpolicy")}
          />

          <View style={styles.separator} />

          <SettingRow
            icon="information-circle-outline"
            title="About Royal Kitchen"
            onPress={() => router.push("/pages/about")}
          />
        </View>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Ionicons name="log-out-outline" size={20} color="#E35D5D" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>ROYAL KITCHEN • Version 1.0.0</Text>

        <View style={{ height: 25 }} />
      </ScrollView>

      <Navbar active="profile" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK,
  },
  header: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#292929",
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  headerTitle: {
    color: GOLD,
    fontSize: 19,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
    marginTop: 22,
    marginBottom: 10,
    padding: 17,
    backgroundColor: CARD,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#514400",
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: "#29240D",
    borderWidth: 1,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
  },
  profileInfo: {
    flex: 1,
    marginLeft: 14,
  },
  profileName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileEmail: {
    color: "#AAAAAA",
    fontSize: 11,
    marginTop: 4,
  },
  profileLabel: {
    color: GOLD,
    fontSize: 10,
    marginTop: 5,
  },
  sectionTitle: {
    color: GOLD,
    fontSize: 16,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 23,
    marginBottom: 11,
  },
  sectionCard: {
    marginHorizontal: 18,
    backgroundColor: CARD,
    borderRadius: 11,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: "#292929",
  },
  settingRow: {
    minHeight: 67,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
  },
  settingIcon: {
    width: 39,
    height: 39,
    borderRadius: 9,
    backgroundColor: "#29240D",
    alignItems: "center",
    justifyContent: "center",
  },
  settingInfo: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  settingTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  settingSubtitle: {
    color: "#888888",
    fontSize: 10,
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: "#303030",
    marginLeft: 51,
  },
  logoutButton: {
    height: 50,
    marginHorizontal: 18,
    marginTop: 27,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#713333",
    backgroundColor: "#211313",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },
  logoutText: {
    color: "#E35D5D",
    fontSize: 14,
    fontWeight: "bold",
  },
  versionText: {
    color: "#666666",
    fontSize: 9,
    textAlign: "center",
    letterSpacing: 1.5,
    marginTop: 18,
  },
});
