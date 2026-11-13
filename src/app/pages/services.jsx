import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";

const services = [
  {
    title: "Wedding Celebrations",
    description:
      "Make your special day unforgettable with royal dining and elegant catering.",
    icon: "heart-outline",
  },
  {
    title: "Corporate Events",
    description:
      "Premium dining experiences for business meetings and corporate gatherings.",
    icon: "briefcase-outline",
  },
  {
    title: "Private Parties",
    description:
      "Celebrate birthdays, anniversaries and special moments with us.",
    icon: "people-outline",
  },
  {
    title: "Special Catering",
    description:
      "Enjoy carefully prepared menus and professional catering services.",
    icon: "restaurant-outline",
  },
];

export default function Services() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.topLabel}>ROYAL KITCHEN</Text>

        <Text style={styles.heading}>Our Services</Text>

        <Text style={styles.subtitle}>
          Tailored Culinary Royalty For Your Grand Events
        </Text>

        <View style={styles.goldLine} />

        <Text style={styles.intro}>
          From intimate gatherings to grand celebrations, we bring
          exceptional food and royal hospitality to every occasion.
        </Text>

        {services.map((service, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.iconContainer}>
              <Ionicons
                name={service.icon}
                size={27}
                color={GOLD}
              />
            </View>

            <Text style={styles.cardTitle}>
              {service.title}
            </Text>

            <Text style={styles.cardDescription}>
              {service.description}
            </Text>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>
                Explore Service
              </Text>

              <Ionicons
                name="arrow-forward"
                size={16}
                color="#000000"
              />
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.bottomSection}>
          <Text style={styles.bottomTitle}>
            Make Your Event Royal
          </Text>

          <Text style={styles.bottomText}>
            Let us create a memorable dining experience for
            your special occasion.
          </Text>
        </View>
      </ScrollView>

      <Navbar active="services" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 25,
  },

  topLabel: {
    color: GOLD,
    fontSize: 11,
    letterSpacing: 3,
    textAlign: "center",
    marginBottom: 12,
  },

  heading: {
    color: GOLD,
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 12,
    lineHeight: 24,
  },

  goldLine: {
    width: 65,
    height: 2,
    backgroundColor: GOLD,
    alignSelf: "center",
    marginVertical: 20,
  },

  intro: {
    color: "#AAAAAA",
    fontSize: 13,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#171717",
    borderWidth: 1,
    borderColor: "#383000",
    borderRadius: 15,
    padding: 20,
    marginBottom: 17,
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#292400",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  cardTitle: {
    color: GOLD,
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 9,
  },

  cardDescription: {
    color: "#BBBBBB",
    fontSize: 13,
    lineHeight: 21,
    marginBottom: 18,
  },

  button: {
    backgroundColor: GOLD,
    borderRadius: 25,
    paddingVertical: 11,
    paddingHorizontal: 17,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 8,
  },

  buttonText: {
    color: "#000000",
    fontSize: 12,
    fontWeight: "bold",
  },

  bottomSection: {
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 10,
  },

  bottomTitle: {
    color: GOLD,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  bottomText: {
    color: "#AAAAAA",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 21,
  },
});
