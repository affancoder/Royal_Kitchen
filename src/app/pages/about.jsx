import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#292929";

const images = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
  story: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000",
  dining: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1000",
};

const coreValues = [
  {
    icon: "leaf-outline",
    title: "Quality",
    description:
      "We believe in using carefully selected ingredients and maintaining exceptional standards in every dish.",
  },
  {
    icon: "heart-outline",
    title: "Passion",
    description:
      "Our love for food and creativity inspires everything we prepare and every experience we create.",
  },
  {
    icon: "people-outline",
    title: "Hospitality",
    description:
      "Every guest deserves warm, thoughtful and personalized service.",
  },
  {
    icon: "shield-checkmark-outline",
    title: "Trust",
    description:
      "We build lasting relationships through consistency, care and commitment to excellence.",
  },
];

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >

          {/* SECTION 1 - HERO */}
          <ImageBackground
            source={{ uri: images.hero }}
            style={styles.hero}
            imageStyle={styles.heroImage}
          >
            <View style={styles.heroOverlay}>
              <Text style={styles.eyebrow}>DISCOVER OUR STORY</Text>

              <Text style={styles.heroTitle}>
                CRAFTING{"\n"}
                <Text style={styles.gold}>CULINARY ROYALTY</Text>
              </Text>

              <View style={styles.goldLine} />

              <Text style={styles.heroDescription}>
                A journey of exceptional flavours, timeless elegance
                and unforgettable hospitality.
              </Text>

              <TouchableOpacity
                style={styles.goldButton}
                onPress={() => router.push("/pages/booking")}
              >
                <Text style={styles.goldButtonText}>BOOK A TABLE</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* SECTION 2 - OUR STORY */}
          <View style={styles.storySection}>
            <Text style={styles.smallHeading}>OUR STORY</Text>

            <Text style={styles.sectionTitle}>
              A Tradition of{"\n"}
              <Text style={styles.gold}>Culinary Excellence</Text>
            </Text>

            <Text style={styles.paragraph}>
              Since 2012, Royal Kitchen has been dedicated to creating
              memorable dining experiences through exceptional food,
              thoughtful service and a passion for culinary artistry.
            </Text>

            <Text style={styles.paragraph}>
              What makes us special is our commitment to bringing
              together quality ingredients, creative presentation
              and warm hospitality in every experience.
            </Text>

            <Image
              source={{ uri: images.story }}
              style={styles.storyImage}
              resizeMode="cover"
            />

            <View style={styles.sinceBox}>
              <Text style={styles.sinceNumber}>2012</Text>
              <Text style={styles.sinceText}>
                OUR JOURNEY OF EXCELLENCE
              </Text>
            </View>
          </View>

          {/* SECTION 3 - MISSION & VISION */}
          <View style={styles.missionSection}>
            <Text style={styles.smallHeading}>WHAT DRIVES US</Text>

            <Text style={styles.sectionTitle}>
              Our Mission &{" "}
              <Text style={styles.gold}>Vision</Text>
            </Text>

            <View style={styles.missionCard}>
              <View style={styles.iconCircle}>
                <Ionicons name="flag-outline" size={24} color={GOLD} />
              </View>

              <Text style={styles.cardTitle}>OUR MISSION</Text>

              <Text style={styles.cardDescription}>
                To deliver exceptional dining experiences through
                outstanding cuisine, genuine hospitality and
                attention to every detail.
              </Text>
            </View>

            <View style={styles.missionCard}>
              <View style={styles.iconCircle}>
                <Ionicons name="eye-outline" size={24} color={GOLD} />
              </View>

              <Text style={styles.cardTitle}>OUR VISION</Text>

              <Text style={styles.cardDescription}>
                To become a destination for memorable culinary
                experiences, where every guest discovers the true
                meaning of royal dining.
              </Text>
            </View>
          </View>

          {/* SECTION 4 - ART OF FINE DINING */}
          <View style={styles.diningSection}>
            <ImageBackground
              source={{ uri: images.dining }}
              style={styles.diningBanner}
              imageStyle={styles.diningImage}
            >
              <View style={styles.diningOverlay}>
                <Text style={styles.smallHeading}>
                  OUR PHILOSOPHY
                </Text>

                <Text style={styles.diningTitle}>
                  THE ART OF{"\n"}
                  <Text style={styles.gold}>FINE DINING</Text>
                </Text>

                <Text style={styles.diningDescription}>
                  More than just a meal. It is a celebration of
                  flavour, presentation and hospitality.
                </Text>
              </View>
            </ImageBackground>

            <View style={styles.diningContent}>
              <Image
                source={{ uri: images.chef }}
                style={styles.chefImage}
                resizeMode="cover"
              />

              <Text style={styles.subTitle}>
                Every Detail Matters
              </Text>

              <Text style={styles.paragraph}>
                From the first ingredient to the final presentation,
                our approach to fine dining is guided by creativity,
                dedication and attention to detail.
              </Text>

              <View style={styles.philosophyPoint}>
                <Ionicons name="checkmark-circle" size={18} color={GOLD} />
                <Text style={styles.pointText}>
                  Carefully selected ingredients
                </Text>
              </View>

              <View style={styles.philosophyPoint}>
                <Ionicons name="checkmark-circle" size={18} color={GOLD} />
                <Text style={styles.pointText}>
                  Thoughtfully prepared cuisine
                </Text>
              </View>

              <View style={styles.philosophyPoint}>
                <Ionicons name="checkmark-circle" size={18} color={GOLD} />
                <Text style={styles.pointText}>
                  Elegant presentation and service
                </Text>
              </View>
            </View>
          </View>

          {/* SECTION 5 - CORE VALUES */}
          <View style={styles.valuesSection}>
            <Text style={styles.smallHeading}>WHAT WE BELIEVE IN</Text>

            <Text style={styles.sectionTitle}>
              Our Core{" "}
              <Text style={styles.gold}>Values</Text>
            </Text>

            <Text style={styles.centerParagraph}>
              The principles that guide our passion and define
              every Royal Kitchen experience.
            </Text>

            <View style={styles.valuesGrid}>
              {coreValues.map((item, index) => (
                <View style={styles.valueCard} key={index}>
                  <Ionicons
                    name={item.icon}
                    size={25}
                    color={GOLD}
                  />

                  <Text style={styles.valueTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.valueDescription}>
                    {item.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* SECTION 6 - CLOSING BANNER */}
          <ImageBackground
            source={{ uri: images.hero }}
            style={styles.closingBanner}
            imageStyle={styles.closingImage}
          >
            <View style={styles.closingOverlay}>
              <Text style={styles.smallHeading}>
                EXPERIENCE ROYAL DINING
              </Text>

              <Text style={styles.closingTitle}>
                YOUR TABLE{"\n"}
                <Text style={styles.gold}>AWAITS</Text>
              </Text>

              <Text style={styles.closingDescription}>
                Make your next dining experience truly unforgettable.
              </Text>

              <TouchableOpacity
                style={styles.goldButton}
                onPress={() => router.push("/pages/booking")}
              >
                <Text style={styles.goldButtonText}>BOOK A TABLE</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.outlineButton}
                onPress={() => router.push("/pages/contact")}
              >
                <Text style={styles.outlineButtonText}>CONTACT US</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={styles.bottomSpace} />

        </ScrollView>

        {/* SHARED BOTTOM NAVIGATION */}
        <Navbar />
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
    marginTop: StatusBar.currentHeight || 0,
  },

  scrollContent: {
    paddingBottom: 12,
  },

  gold: {
    color: GOLD,
  },

  // HERO
  hero: {
    height: 200,
    justifyContent: "center",
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.72)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 10,
    fontWeight: "bold",
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
  },

  goldLine: {
    width: 55,
    height: 2,
    backgroundColor: GOLD,
    marginTop: 2,
    marginBottom: 2,
  },

  heroDescription: {
    color: "#DDDDDD",
    fontSize: 10,
    textAlign: "center",
    lineHeight: 14,
    maxWidth: 290,
  },

  goldButton: {
    backgroundColor: GOLD,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginTop: 12,
  },

  goldButtonText: {
    color: BLACK,
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 0.7,
  },

  // COMMON TEXT
  smallHeading: {
    color: GOLD,
    fontSize: 9,
    letterSpacing: 1.5,
    textAlign: "center",
    marginBottom: 10,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 32,
    textAlign: "center",
    marginBottom: 14,
  },

  paragraph: {
    color: "#BBBBBB",
    fontSize: 10,
    lineHeight: 18,
    marginBottom: 10,
  },

  centerParagraph: {
    color: "#AAAAAA",
    fontSize: 10,
    lineHeight: 17,
    textAlign: "center",
    marginBottom: 18,
  },

  // STORY
  storySection: {
    paddingHorizontal: 18,
    paddingTop: 30,
    paddingBottom: 25,
  },

  storyImage: {
    width: "100%",
    height: 190,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#665500",
    marginTop: 10,
  },

  sinceBox: {
    backgroundColor: CARD,
    borderLeftWidth: 3,
    borderLeftColor: GOLD,
    padding: 13,
    marginTop: 12,
    alignItems: "center",
  },

  sinceNumber: {
    color: GOLD,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Georgia",
  },

  sinceText: {
    color: "#FFFFFF",
    fontSize: 8,
    letterSpacing: 1.2,
    marginTop: 4,
  },

  // MISSION AND VISION
  missionSection: {
    paddingHorizontal: 17,
    paddingTop: 25,
    paddingBottom: 25,
  },

  missionCard: {
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#665500",
    borderRadius: 9,
    alignItems: "center",
    padding: 19,
    marginBottom: 13,
  },

  iconCircle: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  cardTitle: {
    color: GOLD,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 9,
  },

  cardDescription: {
    color: "#BBBBBB",
    fontSize: 10,
    lineHeight: 17,
    textAlign: "center",
  },

  // FINE DINING
  diningSection: {
    paddingTop: 8,
    paddingBottom: 22,
  },

  diningBanner: {
    height: 210,
    justifyContent: "center",
  },

  diningImage: {
    resizeMode: "cover",
  },

  diningOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.72)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  diningTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 34,
  },

  diningDescription: {
    color: "#DDDDDD",
    fontSize: 10,
    textAlign: "center",
    lineHeight: 17,
    marginTop: 12,
    maxWidth: 270,
  },

  diningContent: {
    paddingHorizontal: 17,
    paddingTop: 18,
  },

  chefImage: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#665500",
    marginBottom: 17,
  },

  subTitle: {
    color: GOLD,
    fontSize: 17,
    fontFamily: "Georgia",
    fontWeight: "bold",
    marginBottom: 10,
  },

  philosophyPoint: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 9,
    gap: 9,
  },

  pointText: {
    color: "#CCCCCC",
    fontSize: 10,
  },

  // CORE VALUES
  valuesSection: {
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 28,
  },

  valuesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  valueCard: {
    width: "48%",
    minHeight: 145,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#665500",
    borderRadius: 8,
    padding: 12,
  },

  valueTitle: {
    color: GOLD,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 7,
  },

  valueDescription: {
    color: "#BBBBBB",
    fontSize: 9,
    lineHeight: 15,
  },

  // CLOSING BANNER
  closingBanner: {
    height: 235,
    justifyContent: "center",
  },

  closingImage: {
    resizeMode: "cover",
  },

  closingOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.78)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  closingTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 37,
  },

  closingDescription: {
    color: "#DDDDDD",
    fontSize: 10,
    textAlign: "center",
    marginTop: 10,
  },

  outlineButton: {
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginTop: 10,
  },

  outlineButtonText: {
    color: GOLD,
    fontSize: 9,
    fontWeight: "bold",
    letterSpacing: 0.7,
  },

  bottomSpace: {
    height: 12,
  },
});
