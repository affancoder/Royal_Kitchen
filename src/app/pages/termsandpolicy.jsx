import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#171717";

const policies = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using Royal Kitchen services, you agree to follow these Terms & Conditions. If you do not agree with these terms, please do not use our services.",
  },
  {
    title: "2. Reservations & Bookings",
    content:
      "Reservations are subject to availability. Please provide accurate booking details and arrive at your scheduled time. Changes or cancellations should be made in advance.",
  },
  {
    title: "3. Orders & Payments",
    content:
      "All orders and payments must be completed through the available payment methods. Prices and menu availability may change without prior notice.",
  },
  {
    title: "4. User Responsibilities",
    content:
      "You agree to provide correct information, maintain the security of your account, and use our services respectfully and lawfully.",
  },
  {
    title: "5. Cancellation Policy",
    content:
      "Booking cancellation and refund eligibility depend on the applicable reservation or order conditions. Any applicable charges will be communicated during the booking process.",
  },
  {
    title: "6. Changes to Services",
    content:
      "Royal Kitchen may update, modify, or discontinue any part of its services, menu, features, or offers when necessary.",
  },
  {
    title: "7. Contact & Support",
    content:
      "For questions about these terms, please contact the Royal Kitchen support team through the Contact Us section of the application.",
  },
];

const privacySections = [
  {
    title: "1. Information We Collect",
    content:
      "We may collect information such as your name, email address, phone number, booking details, and information you provide while using the application.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information may be used to manage reservations, process orders, provide customer support, improve our services, and communicate important updates.",
  },
  {
    title: "3. Information Security",
    content:
      "We take reasonable steps to protect your information against unauthorized access, misuse, or disclosure.",
  },
  {
    title: "4. Sharing of Information",
    content:
      "Your personal information is not shared except where necessary to provide services, comply with legal obligations, or protect our rights.",
  },
  {
    title: "5. Cookies & App Data",
    content:
      "The application may use essential technologies or device information to support functionality and improve the user experience.",
  },
  {
    title: "6. Your Privacy Choices",
    content:
      "You may contact us to request information about your personal data or ask for corrections, subject to applicable laws and service requirements.",
  },
  {
    title: "7. Policy Updates",
    content:
      "This Privacy Policy may be updated from time to time. Any revised version will be made available through the application.",
  },
];

export default function TermsAndPolicy() {
  const [activeTab, setActiveTab] = useState("terms");
  const [expanded, setExpanded] = useState({});

  const sections = activeTab === "terms" ? policies : privacySections;

  const toggleSection = (index) => {
    setExpanded((previous) => ({
      ...previous,
      [`${activeTab}-${index}`]: !previous[`${activeTab}-${index}`],
    }));
  };

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

          <Text style={styles.headerTitle}>Terms & Policy</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Introduction */}
        <View style={styles.hero}>
          <View style={styles.heroIcon}>
            <Ionicons name="document-text-outline" size={38} color={GOLD} />
          </View>

          <Text style={styles.heroTitle}>Your Trust Matters</Text>
          <Text style={styles.heroDescription}>
            Please read our terms and privacy information to understand how
            Royal Kitchen services work and how your information is handled.
          </Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "terms" && styles.activeTab]}
            onPress={() => setActiveTab("terms")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "terms" && styles.activeTabText,
              ]}
            >
              Terms & Conditions
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === "privacy" && styles.activeTab]}
            onPress={() => setActiveTab("privacy")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "privacy" && styles.activeTabText,
              ]}
            >
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>

        {/* Policy Content */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionHeading}>
            {activeTab === "terms" ? "Terms & Conditions" : "Privacy Policy"}
          </Text>

          <Text style={styles.updatedText}>
            General information for Royal Kitchen app users
          </Text>

          {sections.map((item, index) => {
            const isExpanded = !!expanded[`${activeTab}-${index}`];

            return (
              <TouchableOpacity
                key={`${activeTab}-${index}`}
                style={styles.policyCard}
                activeOpacity={0.8}
                onPress={() => toggleSection(index)}
              >
                <View style={styles.policyHeader}>
                  <Text style={styles.policyTitle}>{item.title}</Text>
                  <Ionicons
                    name={isExpanded ? "chevron-up" : "chevron-down"}
                    size={19}
                    color={GOLD}
                  />
                </View>

                {isExpanded && (
                  <Text style={styles.policyContent}>{item.content}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Ionicons name="shield-checkmark-outline" size={25} color={GOLD} />
          <Text style={styles.footerTitle}>Thank You for Choosing Us</Text>
          <Text style={styles.footerText}>
            We appreciate your trust in Royal Kitchen and look forward to
            serving you.
          </Text>
        </View>

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
    fontSize: 20,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  hero: {
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 27,
    paddingBottom: 24,
  },
  heroIcon: {
    width: 78,
    height: 78,
    borderRadius: 40,
    backgroundColor: "#211D0B",
    borderWidth: 1,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  heroTitle: {
    color: GOLD,
    fontFamily: "Georgia",
    fontSize: 24,
    fontWeight: "bold",
  },
  heroDescription: {
    color: "#AAAAAA",
    fontSize: 13,
    textAlign: "center",
    marginTop: 4,
  },
  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 18,
    backgroundColor: CARD,
    borderRadius: 9,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 7,
  },
  activeTab: {
    backgroundColor: GOLD,
  },
  tabText: {
    color: "#AAAAAA",
    fontSize: 14,
    fontWeight: "600",
  },
  activeTabText: {
    color: BLACK,
    fontWeight: "bold",
  },
  contentSection: {
    marginHorizontal: 18,
    marginTop: 25,
  },
  sectionHeading: {
    color: GOLD,
    fontSize: 20,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  updatedText: {
    color: "#888888",
    fontSize: 11,
    marginBottom: 13,
  },
  policyCard: {
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#303030",
    borderRadius: 9,
    padding: 15,
    marginBottom: 10,
  },
  policyHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  policyTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginRight: 10,
  },
  policyContent: {
    color: "#AAAAAA",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 12,
  },
  footer: {
    alignItems: "center",
    marginHorizontal: 18,
    marginTop: 22,
    padding: 22,
    backgroundColor: "#171717",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#514400",
  },
  footerTitle: {
    color: GOLD,
    fontSize: 20,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginTop: 12,
  },
  footerText: {
    color: "#AAAAAA",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    marginTop: 4,
  },
});
