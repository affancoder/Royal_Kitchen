
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  TextInput,
  Alert,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const DARK = "#111111";
const BORDER = "#806900";

export default function ContactScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      Alert.alert("Missing Details", "Please complete all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    Alert.alert(
      "Message Submitted",
      "Thank you for contacting Royal Kitchen. We will get back to you soon."
    );

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(() => {
      Alert.alert("Unable to Open", "Please try again later.");
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >

          {/* Page Heading */}
          <View style={styles.heading}>
            <Text style={styles.smallTitle}>THE ROYAL KITCHEN & CATERER</Text>
            <Text style={styles.title}>Contact Us</Text>
            <View style={styles.goldLine} />
            <Text style={styles.subtitle}>
              We'd love to hear from you. Get in touch with our team.
            </Text>
          </View>

          {/* Welcome Banner */}
          <View style={styles.banner}>
            <Ionicons
              name="chatbubbles-outline"
              size={35}
              color={GOLD}
            />
            <Text style={styles.bannerTitle}>
              Let's Start a Conversation
            </Text>
            <Text style={styles.bannerDescription}>
              Have a question, feedback or special request? We're here
              to help make your experience memorable.
            </Text>
          </View>

          {/* Contact Information */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Get In Touch</Text>
            <Text style={styles.sectionSubtitle}>
              Reach out to us through the following details
            </Text>

            {/* Address */}
            <TouchableOpacity
              style={styles.contactCard}
              activeOpacity={0.7}
              onPress={() =>
                openLink("https://www.google.com/maps/search/?api=1&query=restaurant")
              }
            >
              <View style={styles.contactIcon}>
                <Ionicons
                  name="location-outline"
                  size={23}
                  color={GOLD}
                />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Our Location</Text>
                <Text style={styles.contactValue}>
                  Visit Royal Kitchen Restaurant
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={17}
                color="#777777"
              />
            </TouchableOpacity>

            {/* Phone */}
            <TouchableOpacity
              style={styles.contactCard}
              activeOpacity={0.7}
              onPress={() => openLink("tel:+910000000000")}
            >
              <View style={styles.contactIcon}>
                <Ionicons
                  name="call-outline"
                  size={23}
                  color={GOLD}
                />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Phone Number</Text>
                <Text style={styles.contactValue}>
                  +91 00000 00000
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={17}
                color="#777777"
              />
            </TouchableOpacity>

            {/* Email */}
            <TouchableOpacity
              style={styles.contactCard}
              activeOpacity={0.7}
              onPress={() =>
                openLink("mailto:info@royalkitchen.com")
              }
            >
              <View style={styles.contactIcon}>
                <Ionicons
                  name="mail-outline"
                  size={23}
                  color={GOLD}
                />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Email Address</Text>
                <Text style={styles.contactValue}>
                  info@royalkitchen.com
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={17}
                color="#777777"
              />
            </TouchableOpacity>

            {/* Opening Hours */}
            <View style={styles.contactCard}>
              <View style={styles.contactIcon}>
                <Ionicons
                  name="time-outline"
                  size={23}
                  color={GOLD}
                />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Opening Hours</Text>
                <Text style={styles.contactValue}>
                  Monday - Sunday
                </Text>
                <Text style={styles.contactSubValue}>
                  12:00 PM - 11:00 PM
                </Text>
              </View>
            </View>
          </View>

          {/* Contact Form */}
          <View style={styles.formCard}>
            <Text style={styles.sectionTitle}>Send Us a Message</Text>
            <Text style={styles.sectionSubtitle}>
              Fill in the form and our team will contact you
            </Text>

            <Text style={styles.label}>Full Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#777777"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>Email Address *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#777777"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#777777"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />

            <Text style={styles.label}>Subject *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter subject"
              placeholderTextColor="#777777"
              value={subject}
              onChangeText={setSubject}
            />

            <Text style={styles.label}>Your Message *</Text>
            <TextInput
              style={styles.messageInput}
              placeholder="Write your message here..."
              placeholderTextColor="#777777"
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              value={message}
              onChangeText={setMessage}
            />

            <TouchableOpacity
              style={styles.submitButton}
              activeOpacity={0.8}
              onPress={handleSubmit}
            >
              <Text style={styles.submitText}>Send Message</Text>
              <Ionicons
                name="send"
                size={16}
                color={BLACK}
              />
            </TouchableOpacity>

            <Text style={styles.note}>
              * Required fields
            </Text>
          </View>

          {/* Social Media */}
          <View style={styles.socialCard}>
            <Text style={styles.socialTitle}>Follow Us</Text>
            <Text style={styles.socialDescription}>
              Stay connected with Royal Kitchen
            </Text>

            <View style={styles.socialIcons}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => openLink("https://www.instagram.com/")}
              >
                <Ionicons name="logo-instagram" size={23} color={GOLD} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => openLink("https://www.facebook.com/")}
              >
                <Ionicons name="logo-facebook" size={23} color={GOLD} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => openLink("https://www.youtube.com/")}
              >
                <Ionicons name="logo-youtube" size={23} color={GOLD} />
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>

        <Navbar />

      </View>
    </SafeAreaView>
  );
}

function NavItem({ icon, label, onPress }) {
  return (
    <TouchableOpacity
      style={styles.navItem}
      onPress={onPress}
    >
      <Ionicons name={icon} size={21} color={GOLD} />
      <Text style={styles.navText}>{label}</Text>
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
  },

  scrollContent: {
    paddingHorizontal: 18,
    paddingBottom: 25,
  },

  // Heading
  heading: {
    paddingTop: 24,
    paddingBottom: 22,
    alignItems: "center",
  },

  smallTitle: {
    color: GOLD,
    fontSize: 14,
    fontWeight: "bold",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 2,
  },

  goldLine: {
    width: 48,
    height: 2,
    backgroundColor: GOLD,
    marginTop: 6,
  },

  subtitle: {
    color: "#999999",
    fontSize: 12,
    textAlign: "center",
    marginTop: 12,
    lineHeight: 19,
  },

  // Banner
  banner: {
    backgroundColor: DARK,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 22,
    alignItems: "center",
  },

  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
  },

  bannerDescription: {
    color: "#999999",
    fontSize: 11,
    textAlign: "center",
    lineHeight: 19,
    marginTop: 8,
  },

  // Sections
  section: {
    marginTop: 27,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  sectionSubtitle: {
    color: "#888888",
    fontSize: 11,
    marginTop: 6,
    marginBottom: 14,
    lineHeight: 17,
  },

  // Contact Cards
  contactCard: {
    minHeight: 70,
    backgroundColor: DARK,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 9,
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  contactIcon: {
    width: 42,
    height: 42,
    backgroundColor: BLACK,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  contactInfo: {
    flex: 1,
    marginLeft: 12,
  },

  contactLabel: {
    color: GOLD,
    fontSize: 11,
    fontWeight: "600",
    marginBottom: 5,
  },

  contactValue: {
    color: "#FFFFFF",
    fontSize: 12,
  },

  contactSubValue: {
    color: "#999999",
    fontSize: 10,
    marginTop: 4,
  },

  // Form
  formCard: {
    backgroundColor: DARK,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 17,
    marginTop: 18,
  },

  label: {
    color: "#DDDDDD",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 17,
    marginBottom: 8,
  },

  input: {
    height: 47,
    backgroundColor: BLACK,
    borderWidth: 1,
    borderColor: "#494949",
    borderRadius: 7,
    paddingHorizontal: 12,
    color: "#FFFFFF",
    fontSize: 12,
  },

  messageInput: {
    minHeight: 110,
    backgroundColor: BLACK,
    borderWidth: 1,
    borderColor: "#494949",
    borderRadius: 7,
    padding: 12,
    color: "#FFFFFF",
    fontSize: 12,
  },

  submitButton: {
    height: 49,
    backgroundColor: GOLD,
    borderRadius: 7,
    marginTop: 22,
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

  note: {
    color: "#777777",
    fontSize: 9,
    marginTop: 10,
    textAlign: "center",
  },

  // Social
  socialCard: {
    backgroundColor: DARK,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 12,
    marginTop: 18,
    padding: 22,
    alignItems: "center",
  },

  socialTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  socialDescription: {
    color: "#999999",
    fontSize: 11,
    marginTop: 6,
  },

  socialIcons: {
    flexDirection: "row",
    gap: 18,
    marginTop: 18,
  },

  socialButton: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: BLACK,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: "center",
    justifyContent: "center",
  },

  // Bottom Navigation
  bottomNav: {
    height: 57,
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
