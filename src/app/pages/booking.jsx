import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#111111";

const occasions = [
  "Birthday",
  "Anniversary",
  "Business",
  "Family Dinner",
  "Other",
];

const timeSlots = [
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
];

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [selectedTime, setSelectedTime] = useState("07:00 PM");
  const [occasion, setOccasion] = useState("Family Dinner");
  const [requests, setRequests] = useState("");

  const handleBooking = () => {
    if (!name.trim() || !phone.trim() || !date.trim()) {
      Alert.alert(
        "Missing Details",
        "Please enter your name, phone number and booking date.",
      );
      return;
    }

    if (!/^[0-9]{10}$/.test(phone.trim())) {
      Alert.alert(
        "Invalid Phone",
        "Please enter a valid 10-digit phone number.",
      );
      return;
    }

    Alert.alert(
      "Booking Submitted!",
      `Thank you ${name}. Your table booking request has been prepared.`,
      [
        {
          text: "OK",
          onPress: () => {
            setName("");
            setPhone("");
            setDate("");
            setGuests(2);
            setRequests("");
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={BLACK} barStyle="light-content" />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Heading */}
          <View style={styles.heading}>
            <Text style={styles.smallTitle}>THE ROYAL KITCHEN & CATERER</Text>
            <Text style={styles.title}>Table Reservation</Text>
            <View style={styles.goldLine} />
            <Text style={styles.subtitle}>
              Reserve your place for an unforgettable dining experience.
            </Text>
          </View>

          {/* Booking Banner */}
          <View style={styles.banner}>
            <Ionicons name="calendar-outline" size={34} color={GOLD} />
            <Text style={styles.bannerTitle}>A Royal Dining Experience</Text>
            <Text style={styles.bannerDescription}>
              Celebrate special moments with exceptional food and hospitality.
            </Text>
          </View>

          {/* Form */}
          <View style={styles.formCard}>
            <Text style={styles.formTitle}>Book Your Table</Text>
            <Text style={styles.formSubtitle}>
              Please provide your reservation details
            </Text>

            {/* Name */}
            <Text style={styles.label}>Full Name *</Text>
            <View style={styles.inputBox}>
              <Ionicons name="person-outline" size={18} color={GOLD} />
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#777777"
                value={name}
                onChangeText={setName}
              />
            </View>

            {/* Phone */}
            <Text style={styles.label}>Phone Number *</Text>
            <View style={styles.inputBox}>
              <Ionicons name="call-outline" size={18} color={GOLD} />
              <TextInput
                style={styles.input}
                placeholder="Enter 10-digit phone number"
                placeholderTextColor="#777777"
                keyboardType="phone-pad"
                maxLength={10}
                value={phone}
                onChangeText={setPhone}
              />
            </View>

            {/* Date */}
            <Text style={styles.label}>Booking Date *</Text>
            <View style={styles.inputBox}>
              <Ionicons name="calendar-outline" size={18} color={GOLD} />
              <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="#777777"
                value={date}
                onChangeText={setDate}
              />
            </View>

            {/* Guests */}
            <Text style={styles.label}>Number of Guests</Text>
            <View style={styles.guestBox}>
              <View style={styles.guestInfo}>
                <Ionicons name="people-outline" size={21} color={GOLD} />
                <Text style={styles.guestText}>Guests</Text>
              </View>

              <View style={styles.counter}>
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={() => setGuests(Math.max(1, guests - 1))}
                >
                  <Ionicons name="remove" size={18} color={GOLD} />
                </TouchableOpacity>

                <Text style={styles.guestNumber}>{guests}</Text>

                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={() => setGuests(Math.min(20, guests + 1))}
                >
                  <Ionicons name="add" size={18} color={GOLD} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Time */}
            <Text style={styles.label}>Preferred Time</Text>
            <View style={styles.timeGrid}>
              {timeSlots.map((time) => (
                <TouchableOpacity
                  key={time}
                  style={[
                    styles.timeButton,
                    selectedTime === time && styles.selectedTime,
                  ]}
                  onPress={() => setSelectedTime(time)}
                >
                  <Text
                    style={[
                      styles.timeText,
                      selectedTime === time && styles.selectedTimeText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Occasion */}
            <Text style={styles.label}>Special Occasion</Text>
            <View style={styles.occasionContainer}>
              {occasions.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.occasionButton,
                    occasion === item && styles.selectedOccasion,
                  ]}
                  onPress={() => setOccasion(item)}
                >
                  <Text
                    style={[
                      styles.occasionText,
                      occasion === item && styles.selectedOccasionText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Requests */}
            <Text style={styles.label}>Special Requests</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Any special requirements? (Optional)"
              placeholderTextColor="#777777"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              value={requests}
              onChangeText={setRequests}
            />

            {/* Submit */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleBooking}
            >
              <Text style={styles.submitText}>Confirm Reservation</Text>
              <Ionicons name="arrow-forward" size={18} color={BLACK} />
            </TouchableOpacity>
          </View>

          {/* Contact Information */}
          <View style={styles.contactCard}>
            <Ionicons name="headset-outline" size={28} color={GOLD} />
            <Text style={styles.contactTitle}>Need Assistance?</Text>
            <Text style={styles.contactDescription}>
              Contact our team for help with your reservation.
            </Text>
            <TouchableOpacity onPress={() => router.push("/pages/contact")}>
              <Text style={styles.contactLink}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Fixed Bottom Navigation */}
        <View style={styles.bottomNav}>
          <NavItem
            icon="home"
            label="Home"
            onPress={() => router.replace("/pages/homescreen")}
          />
          <NavItem
            icon="restaurant"
            label="Menu"
            onPress={() => router.push("/pages/menu")}
          />
          <NavItem
            icon="calendar"
            label="Booking"
            active
            onPress={() => router.replace("/pages/booking")}
          />
          <NavItem
            icon="briefcase"
            label="Services"
            onPress={() => router.push("/pages/services")}
          />
          <NavItem
            icon="person"
            label="Profile"
            onPress={() => router.push("/pages/profile")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

function NavItem({ icon, label, active, onPress }) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Ionicons name={icon} size={21} color={GOLD} />
      <Text style={[styles.navLabel, active && styles.activeNavLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
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
    marginTop: StatusBar.currentHeight || 0,
  },
  scrollContent: {
    paddingBottom: 25,
  },
  heading: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 22,
    alignItems: "center",
  },
  smallTitle: {
    color: GOLD,
    fontSize: 14,
    fontWeight: "700",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  goldLine: {
    width: 58,
    height: 2,
    backgroundColor: GOLD,
    marginTop: 6,
  },
  subtitle: {
    color: "#AAAAAA",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
    lineHeight: 19,
  },
  banner: {
    marginHorizontal: 18,
    padding: 22,
    backgroundColor: CARD,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#292929",
  },
  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
    textAlign: "center",
  },
  bannerDescription: {
    color: "#999999",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 19,
    marginTop: 8,
  },
  formCard: {
    marginHorizontal: 18,
    marginTop: 22,
    padding: 17,
    backgroundColor: CARD,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#292929",
  },
  formTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
  },
  formSubtitle: {
    color: "#888888",
    fontSize: 11,
    marginTop: 6,
    marginBottom: 18,
  },
  label: {
    color: "#DDDDDD",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 17,
    marginBottom: 9,
  },
  inputBox: {
    height: 48,
    borderWidth: 1,
    borderColor: "#393939",
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 10,
    backgroundColor: BLACK,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 12,
  },
  guestBox: {
    height: 52,
    backgroundColor: BLACK,
    borderWidth: 1,
    borderColor: "#393939",
    borderRadius: 7,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  guestInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  guestText: {
    color: "#DDDDDD",
    fontSize: 12,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  counterButton: {
    width: 29,
    height: 29,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
  },
  guestNumber: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
  timeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },
  timeButton: {
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  selectedTime: {
    backgroundColor: GOLD,
    borderColor: GOLD,
  },
  timeText: {
    color: "#CCCCCC",
    fontSize: 11,
  },
  selectedTimeText: {
    color: BLACK,
    fontWeight: "bold",
  },
  occasionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 9,
  },
  occasionButton: {
    borderWidth: 1,
    borderColor: "#444444",
    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 13,
  },
  selectedOccasion: {
    backgroundColor: GOLD,
    borderColor: GOLD,
  },
  occasionText: {
    color: "#CCCCCC",
    fontSize: 10,
  },
  selectedOccasionText: {
    color: BLACK,
    fontWeight: "bold",
  },
  textArea: {
    minHeight: 95,
    backgroundColor: BLACK,
    borderWidth: 1,
    borderColor: "#393939",
    borderRadius: 7,
    color: "#FFFFFF",
    fontSize: 12,
    padding: 12,
  },
  submitButton: {
    height: 49,
    backgroundColor: GOLD,
    borderRadius: 7,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  submitText: {
    color: BLACK,
    fontSize: 13,
    fontWeight: "bold",
  },
  contactCard: {
    marginHorizontal: 18,
    marginTop: 20,
    padding: 22,
    backgroundColor: CARD,
    borderRadius: 12,
    alignItems: "center",
  },
  contactTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
  },
  contactDescription: {
    color: "#999999",
    fontSize: 11,
    textAlign: "center",
    marginTop: 7,
  },
  contactLink: {
    color: GOLD,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 12,
  },
  bottomNav: {
    height: 57,
    backgroundColor: BLACK,
    borderTopWidth: 1,
    borderTopColor: GOLD,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  navLabel: {
    color: GOLD,
    fontSize: 8,
  },
  activeNavLabel: {
    fontWeight: "bold",
  },
});
