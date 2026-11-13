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
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#111111";

const images = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900",
  food: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000",
};

const eventServices = [
  {
    icon: "restaurant-outline",
    title: "Private Chef & Table Reservations",
    description:
      "Personalized dining experiences with exceptional culinary service.",
    button: "Reserve Your Table",
  },
  {
    icon: "calendar-outline",
    title: "Grand Wedding & Event Catering",
    description:
      "Make every celebration memorable with our premium catering.",
    button: "Plan Your Event",
  },
  {
    icon: "business-outline",
    title: "Corporate Banquets & Special Occasions",
    description:
      "Elegant dining arrangements for business and special occasions.",
    button: "Explore Services",
  },
];

const excellenceFeatures = [
  {
    icon: "restaurant-outline",
    title: "Exceptional Ingredients",
    description:
      "We carefully select quality ingredients to create remarkable dishes.",
  },
  {
    icon: "people-outline",
    title: "Expert Culinary Team",
    description:
      "Our experienced chefs bring creativity and passion to every plate.",
  },
  {
    icon: "star-outline",
    title: "Premium Hospitality",
    description:
      "Personalized service that makes every guest feel special.",
  },
  {
    icon: "heart-outline",
    title: "Unforgettable Experiences",
    description:
      "Every occasion is thoughtfully crafted into a lasting memory.",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* HEADER */}
          <View style={styles.header}>
          </View>

          {/* SECTION 1 - HERO */}
          <ImageBackground
            source={{ uri: images.hero }}
            style={styles.hero}
            imageStyle={styles.heroImage}
          >
            <View style={styles.heroOverlay}>
              <Text style={styles.eyebrow}>
                WELCOME TO ROYAL KITCHEN
              </Text>

              <Text style={styles.heroTitle}>
                Indulge in a{" "}
                <Text style={styles.gold}>Royal Dining</Text>
                {"\n"}Experience
              </Text>

              <Text style={styles.heroDescription}>
                Experience exceptional flavours, elegant hospitality and
                unforgettable culinary moments.
              </Text>

              <TouchableOpacity
                style={styles.goldButton}
                onPress={() => router.push("/pages/menu")}
              >
                <Text style={styles.goldButtonText}>Explore Our Menu</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* SECTION 2 - CRAFTING CULINARY ROYALTY */}
          <View style={styles.craftingSection}>
            <View style={styles.sectionTag}>
              <Text style={styles.tagText}>OUR STORY</Text>
            </View>

            <Text style={styles.sectionTitle}>
              Crafting Culinary{"\n"}
              <Text style={styles.gold}>Royalty Since 2012</Text>
            </Text>

            <Text style={styles.paragraph}>
              At Royal Kitchen, we believe every meal deserves a royal
              touch. Our passion for exceptional food and hospitality
              brings together carefully selected ingredients,
              experienced chefs and unforgettable dining experiences.
            </Text>

            <Text style={styles.paragraph}>
              From intimate dining to grand celebrations, we deliver
              excellence in every detail.
            </Text>

            <TouchableOpacity
              style={styles.outlineButton}
              onPress={() => router.push("/pages/about")}
            >
              <Text style={styles.outlineButtonText}>Discover Our Story</Text>
            </TouchableOpacity>

            <Image
              source={{ uri: images.chef }}
              style={styles.craftingImage}
              resizeMode="cover"
            />
          </View>

          {/* SECTION 3 - GRAND EVENTS */}
          <View style={styles.eventsSection}>
            <Text style={styles.smallGoldHeading}>
              UNRIVALLED HOSPITALITY
            </Text>

            <Text style={styles.eventsTitle}>
              Tailored Culinary Royalty{"\n"}For Your Grand Events
            </Text>

            <Text style={styles.paragraphCenter}>
              Exceptional culinary services designed for your special
              occasions and celebrations.
            </Text>

            <View style={styles.eventCards}>
              {eventServices.map((item, index) => (
                <View style={styles.eventCard} key={index}>
                  <Ionicons
                    name={item.icon}
                    size={20}
                    color={GOLD}
                  />

                  <Text style={styles.eventCardTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.eventCardDescription}>
                    {item.description}
                  </Text>

                  <TouchableOpacity
                    style={styles.miniButton}
                    onPress={() => router.push("/pages/services")}
                  >
                    <Text style={styles.miniButtonText}>
                      {item.button}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          {/* SECTION 4 - ON EVERY PLATE */}
          <View style={styles.plateSection}>
            <ImageBackground
              source={{ uri: images.food }}
              style={styles.plateBanner}
              imageStyle={styles.plateBannerImage}
            >
              <View style={styles.plateOverlay}>
                <Text style={styles.smallGoldHeading}>
                  THE ART OF FINE DINING
                </Text>

                <Text style={styles.plateTitle}>
                  Crafting Culinary{"\n"}
                  <Text style={styles.gold}>Royalty On Every Plate</Text>
                </Text>

                <Text style={styles.plateDescription}>
                  Every dish tells a story of passion, creativity and
                  culinary excellence.
                </Text>

                <TouchableOpacity
                  style={styles.goldButton}
                  onPress={() => router.push("/pages/menu")}
                >
                  <Text style={styles.goldButtonText}>Discover Our Creations</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>

            <View style={styles.plateContent}>
              <Image
                source={{ uri: images.chef }}
                style={styles.plateImage}
                resizeMode="cover"
              />

              <View style={styles.plateTextContent}>
                <Text style={styles.plateHeading}>
                  A Passion for Culinary Art
                </Text>

                <Text style={styles.paragraph}>
                  Our culinary team combines traditional inspiration
                  with modern techniques to create extraordinary
                  flavours and memorable dishes.
                </Text>

                <TouchableOpacity
                  style={styles.outlineButton}
                  onPress={() => router.push("/pages/about")}
                >
                  <Text style={styles.outlineButtonText}>
                    Meet Our Culinary Team
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* SECTION 5 - CULINARY EXCELLENCE */}
          <View style={styles.excellenceSection}>
            <Text style={styles.smallGoldHeading}>
              OUR COMMITMENT
            </Text>

            <Text style={styles.excellenceTitle}>
              A Legacy of Royal Dining &{"\n"}
              <Text style={styles.gold}>Culinary Excellence</Text>
            </Text>

            <Text style={styles.paragraphCenter}>
              Our values define every experience we create, from the
              first ingredient to the final presentation.
            </Text>

            <View style={styles.excellenceGrid}>
              {excellenceFeatures.map((item, index) => (
                <View style={styles.excellenceCard} key={index}>
                  <Ionicons
                    name={item.icon}
                    size={20}
                    color={GOLD}
                  />

                  <Text style={styles.excellenceCardTitle}>
                    {item.title}
                  </Text>

                  <Text style={styles.excellenceCardDescription}>
                    {item.description}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>

        {/* FIXED BOTTOM NAVIGATION */}
        {/* <View style={styles.bottomNav}>
          <NavItem
            icon="home"
            label="Home"
            active
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
            onPress={() => {}}
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
        </View> */}

        <Navbar active="home" />

      </View>
    </SafeAreaView>
  );
}

function NavItem({ icon, label, active, onPress }) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Ionicons
        name={icon}
        size={21}
        color={GOLD}
      />
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
    paddingBottom: 12,
  },
  // Hero
  hero: {
    height: 200,
    justifyContent: "center",
  },
  heroImage: {
    resizeMode: "cover",
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  eyebrow: {
    color: GOLD,
    fontSize:10,
    letterSpacing: 1.5,
    fontWeight: "bold",
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 30,
  },
  gold: {
    color: GOLD,
  },
  heroDescription: {
    color: "#E0E0E0",
    fontSize: 10,
    textAlign: "center",
    lineHeight: 16,
    marginTop: 2,
    maxWidth: 240,
  },
  goldButton: {
    backgroundColor: GOLD,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 13,
  },
  goldButtonText: {
    color: BLACK,
    fontSize: 10,
    fontWeight: "bold",
  },

  // Crafting section
  craftingSection: {
    paddingHorizontal: 17,
    paddingTop: 25,
    paddingBottom: 22,
  },
  sectionTag: {
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: "center",
    marginBottom: 10,
  },
  tagText: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 29,
    marginBottom: 12,
    alignSelf: "center",
    textAlign: "center",
  },
  paragraph: {
    color: "#BDBDBD",
    fontSize: 10,
    lineHeight: 17,
    marginBottom: 9,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 7,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  outlineButtonText: {
    color: GOLD,
    fontSize: 9,
    fontWeight: "600",
  },
  craftingImage: {
    width: "100%",
    height: 190,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#665500",
  },

  // Events section
  eventsSection: {
    paddingHorizontal: 13,
    paddingTop: 15,
    paddingBottom: 25,
  },
  smallGoldHeading: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.2,
    textAlign: "center",
    marginBottom: 8,
  },
  eventsTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 25,
  },
  paragraphCenter: {
    color: "#AAAAAA",
    fontSize: 9,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 9,
    marginBottom: 15,
    paddingHorizontal: 8,
  },
  eventCards: {
    flexDirection: "row",
    gap: 7,
  },
  eventCard: {
    flex: 1,
    minHeight: 160,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 7,
    padding: 8,
  },
  eventCardTitle: {
    color: GOLD,
    fontSize: 9,
    fontWeight: "bold",
    lineHeight: 13,
    marginTop: 8,
    minHeight: 37,
  },
  eventCardDescription: {
    color: "#AAAAAA",
    fontSize: 7,
    lineHeight: 11,
    marginTop: 5,
    flex: 1,
  },
  miniButton: {
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 3,
    alignItems: "center",
    marginTop: 9,
  },
  miniButtonText: {
    color: GOLD,
    fontSize: 7,
    textAlign: "center",
  },

  // Crafting on every plate
  plateSection: {
    paddingTop: 8,
  },
  plateBanner: {
    height: 210,
    justifyContent: "center",
  },
  plateBannerImage: {
    resizeMode: "cover",
  },
  plateOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.72)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  plateTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 28,
  },
  plateDescription: {
    color: "#DDDDDD",
    fontSize: 9,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 9,
  },
  plateContent: {
    padding: 16,
  },
  plateImage: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#665500",
  },
  plateTextContent: {
    paddingTop: 15,
  },
  plateHeading: {
    color: GOLD,
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginBottom: 9,
  },

  // Culinary excellence
  excellenceSection: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },
  excellenceTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontFamily: "Georgia",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 26,
  },
  excellenceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 9,
  },
  excellenceCard: {
    width: "48%",
    minHeight: 125,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 7,
    padding: 10,
  },
  excellenceCardTitle: {
    color: GOLD,
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 5,
  },
  excellenceCardDescription: {
    color: "#AAAAAA",
    fontSize: 8,
    lineHeight: 13,
  },

  bottomSpace: {
    height: 10,
  },

  // Fixed bottom navigation
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
  navLabel: {
    color: GOLD,
    fontSize: 8,
  },
  activeNavLabel: {
    fontWeight: "bold",
  },
});
