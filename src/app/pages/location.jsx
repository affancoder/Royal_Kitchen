
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const DARK = "#171717";

// Replace these sample details with your actual restaurant information.
const RESTAURANT = {
  name: "THE ROYAL KITCHEN & CATERER",
  address: "Add your complete restaurant address here",
  city: "West Bengal, India",
  phone: "+91XXXXXXXXXX",
  email: "your-email@example.com",
  hours: [
    { day: "Monday - Friday", time: "10:00 AM - 10:00 PM" },
    { day: "Saturday", time: "10:00 AM - 10:00 PM" },
    { day: "Sunday", time: "10:00 AM - 10:00 PM" },
  ],
};

export default function Location() {
  const openMaps = () => {
    const query = encodeURIComponent(
      `${RESTAURANT.name}, ${RESTAURANT.address}, ${RESTAURANT.city}`
    );

    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`)
      .catch(() => Alert.alert("Error", "Unable to open Google Maps."));
  };

  const callRestaurant = () => {
    Linking.openURL(`tel:${RESTAURANT.phone}`).catch(() =>
      Alert.alert("Error", "Unable to make a phone call.")
    );
  };

  const emailRestaurant = () => {
    Linking.openURL(`mailto:${RESTAURANT.email}`).catch(() =>
      Alert.alert("Error", "Unable to open your email application.")
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Our Location</Text>
            <Text style={styles.headerSubtitle}>
              Find us and visit Royal Kitchen
            </Text>
          </View>

          <View style={styles.headerIcon}>
            <Ionicons name="location-outline" size={25} color={GOLD} />
          </View>
        </View>

        {/* Map Preview */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.mapContainer}
          onPress={openMaps}
        >
          <View style={styles.mapBackground}>
            <Ionicons name="map-outline" size={65} color="#66551A" />
            <View style={styles.mapPin}>
              <Ionicons name="location" size={35} color={GOLD} />
            </View>
            <Text style={styles.mapLabel}>THE ROYAL KITCHEN</Text>
            <Text style={styles.mapSubLabel}>Tap to open Google Maps</Text>
          </View>

          <View style={styles.mapButton}>
            <Ionicons name="navigate-outline" size={18} color={BLACK} />
            <Text style={styles.mapButtonText}>GET DIRECTIONS</Text>
          </View>
        </TouchableOpacity>

        {/* Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Find Us</Text>

          <View style={styles.infoCard}>
            <View style={styles.infoIcon}>
              <Ionicons name="location-outline" size={23} color={GOLD} />
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Restaurant Address</Text>
              <Text style={styles.infoText}>{RESTAURANT.address}</Text>
              <Text style={styles.infoText}>{RESTAURANT.city}</Text>
            </View>
          </View>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>

          <TouchableOpacity
            style={styles.infoCard}
            onPress={callRestaurant}
            activeOpacity={0.8}
          >
            <View style={styles.infoIcon}>
              <Ionicons name="call-outline" size={22} color={GOLD} />
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Phone Number</Text>
              <Text style={styles.infoText}>{RESTAURANT.phone}</Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color="#777" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.infoCard}
            onPress={emailRestaurant}
            activeOpacity={0.8}
          >
            <View style={styles.infoIcon}>
              <Ionicons name="mail-outline" size={22} color={GOLD} />
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>Email Address</Text>
              <Text style={styles.infoText}>{RESTAURANT.email}</Text>
            </View>

            <Ionicons name="chevron-forward" size={18} color="#777" />
          </TouchableOpacity>
        </View>

        {/* Opening Hours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Opening Hours</Text>

          <View style={styles.hoursCard}>
            <View style={styles.hoursHeader}>
              <Ionicons name="time-outline" size={23} color={GOLD} />
              <Text style={styles.hoursHeading}>Business Hours</Text>
            </View>

            {RESTAURANT.hours.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.hoursRow,
                  index === RESTAURANT.hours.length - 1 &&
                    styles.lastHoursRow,
                ]}
              >
                <Text style={styles.dayText}>{item.day}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Directions Button */}
        <TouchableOpacity
          style={styles.directionButton}
          onPress={openMaps}
          activeOpacity={0.85}
        >
          <Ionicons name="navigate" size={20} color={BLACK} />
          <Text style={styles.directionButtonText}>
            OPEN LOCATION IN GOOGLE MAPS
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Ionicons name="restaurant-outline" size={24} color={GOLD} />
          <Text style={styles.footerTitle}>THE ROYAL KITCHEN & CATERER</Text>
          <Text style={styles.footerText}>
            We look forward to welcoming you!
          </Text>
        </View>
      </ScrollView>

      <Navbar active="location" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BLACK,
  },
  scrollContent: {
    paddingBottom: 25,
  },
  header: {
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    color: GOLD,
    fontSize: 25,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#999",
    fontSize: 12,
    marginTop: 6,
  },
  headerIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: DARK,
    borderWidth: 1,
    borderColor: "#514314",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    marginHorizontal: 22,
    marginBottom: 25,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#514314",
    backgroundColor: DARK,
  },
  mapBackground: {
    height: 190,
    backgroundColor: "#201E16",
    alignItems: "center",
    justifyContent: "center",
  },
  mapPin: {
    position: "absolute",
    top: 48,
  },
  mapLabel: {
    color: GOLD,
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 12,
    letterSpacing: 1,
  },
  mapSubLabel: {
    color: "#999",
    fontSize: 10,
    marginTop: 5,
  },
  mapButton: {
    height: 48,
    backgroundColor: GOLD,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 9,
  },
  mapButtonText: {
    color: BLACK,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  section: {
    paddingHorizontal: 22,
    marginBottom: 25,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: 15,
  },
  infoCard: {
    backgroundColor: DARK,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#303030",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },
  infoIcon: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#29230D",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 6,
  },
  infoText: {
    color: "#AAA",
    fontSize: 12,
    lineHeight: 19,
  },
  hoursCard: {
    backgroundColor: DARK,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#303030",
    padding: 17,
  },
  hoursHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 16,
  },
  hoursHeading: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  hoursRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  lastHoursRow: {
    borderBottomWidth: 0,
  },
  dayText: {
    color: "#AAA",
    fontSize: 11,
    flex: 1,
  },
  timeText: {
    color: GOLD,
    fontSize: 11,
    fontWeight: "600",
  },
  directionButton: {
    marginHorizontal: 22,
    height: 53,
    borderRadius: 10,
    backgroundColor: GOLD,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  directionButtonText: {
    color: BLACK,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  footer: {
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  footerTitle: {
    color: GOLD,
    fontSize: 13,
    fontFamily: "Georgia",
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: 10,
  },
  footerText: {
    color: "#777",
    fontSize: 11,
    marginTop: 7,
  },
});
