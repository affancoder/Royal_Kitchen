
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
import { router, useLocalSearchParams } from "expo-router";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#111111";

const images = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
  wedding:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
  privateDining:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  corporate:
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
  catering:
    "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
  chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900",
  restaurant:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  buffet:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
  event:
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
  hospitality:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
};

const services = [
  {
    icon: "restaurant-outline",
    title: "Restaurant Dining",
    description:
      "Enjoy delicious cuisine, elegant surroundings and exceptional dining experiences with family and friends.",
    image: images.restaurant,
  },
  {
    icon: "heart-outline",
    title: "Grand Wedding & Events",
    description:
      "Make your special celebrations unforgettable with royal dining and premium catering services.",
    image: images.wedding,
  },
  {
    icon: "restaurant-outline",
    title: "Private Chef & Fine Dining",
    description:
      "Enjoy personalized dining experiences prepared by our expert culinary team.",
    image: images.privateDining,
  },
  {
    icon: "business-outline",
    title: "Corporate Banquets",
    description:
      "Elegant dining arrangements for corporate meetings, conferences and business occasions.",
    image: images.corporate,
  },
  {
    icon: "calendar-outline",
    title: "Luxury Catering",
    description:
      "Exceptional food, presentation and hospitality for every special occasion.",
    image: images.catering,
  },
  {
    icon: "fast-food-outline",
    title: "Buffet Services",
    description:
      "Delight your guests with beautifully presented buffet arrangements and diverse menu options.",
    image: images.buffet,
  },
  {
    icon: "people-outline",
    title: "Event Catering",
    description:
      "Professional food and hospitality arrangements for private parties and large gatherings.",
    image: images.event,
  },
  {
    icon: "star-outline",
    title: "Premium Hospitality",
    description:
      "Experience personalized attention, elegant service and memorable moments for every guest.",
    image: images.hospitality,
  },
];

export default function Services() {
  const { guests } = useLocalSearchParams();

  const selectedGuests = Array.isArray(guests) ? guests[0] : guests;

  const openContact = (service = "") => {
    router.push({
      pathname: "/pages/contact",
      params: {
        service,
        guests: selectedGuests || "",
      },
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
          {/* PAGE HEADING */}
          <View style={styles.heading}>
            <Text style={styles.smallTitle}>
              THE ROYAL KITCHEN & CATERER
            </Text>

            <Text style={styles.title}>Our Services</Text>

            <View style={styles.goldLine} />

            <Text style={styles.subtitle}>
              Explore our premium catering services and royal hospitality.
            </Text>
          </View>

          {/* SECTION 1 - COMPACT MOBILE HERO BANNER */}
          <View style={styles.heroWrapper}>
            <ImageBackground
              source={{ uri: images.hero }}
              style={styles.hero}
              imageStyle={styles.heroImage}
            >
              <View style={styles.heroOverlay}>
                <Text style={styles.eyebrow}>
                  ROYAL KITCHEN SERVICES
                </Text>

                <Text style={styles.heroTitle}>
                  Our Regal <Text style={styles.gold}>Culinary</Text>
                  {"\n"}Services
                </Text>

                <Text style={styles.heroDescription}>
                  Discover exceptional culinary experiences, royal hospitality
                  and personalized services for every special occasion.
                </Text>

                <TouchableOpacity
                  style={styles.goldButton}
                  activeOpacity={0.85}
                  onPress={() => openContact()}
                >
                  <Text style={styles.goldButtonText}>Enquire Now</Text>
                  <Ionicons name="arrow-forward" size={13} color={BLACK} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* SECTION 2 - INTRODUCTION */}
          <View style={styles.introSection}>
            <View style={styles.guestInfo}>
              <Ionicons name="people-outline" size={13} color={GOLD} />
              <Text style={styles.expectedGuests}>
                Expected Guests: {selectedGuests || "Not selected"}
              </Text>
            </View>

            <Text style={styles.smallGoldHeading}>
              OUR EXCLUSIVE SERVICES
            </Text>

            <Text style={styles.sectionTitle}>
              Explore Our Luxury & Royal{"\n"}
              <Text style={styles.gold}>Culinary Services</Text>
            </Text>

            <Text style={styles.paragraphCenter}>
              From grand celebrations to intimate dining, we bring exceptional
              food, elegant presentation and unforgettable hospitality to every
              event.
            </Text>
          </View>

          {/* SECTION 3 - SERVICE CARDS */}
          <View style={styles.servicesSection}>
            <View style={styles.servicesHeading}>
              <Text style={styles.smallGoldHeading}>
                WHAT WE OFFER
              </Text>

              <Text style={styles.servicesTitle}>
                Our Premium Services
              </Text>
            </View>

            <View style={styles.servicesGrid}>
              {services.map((item, index) => (
                <View style={styles.serviceCard} key={index}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.serviceImage}
                    resizeMode="cover"
                  />

                  <View style={styles.serviceContent}>
                    <Ionicons
                      name={item.icon}
                      size={21}
                      color={GOLD}
                    />

                    <Text style={styles.serviceTitle}>
                      {item.title}
                    </Text>

                    <Text style={styles.serviceDescription}>
                      {item.description}
                    </Text>

                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.miniButton}
                      onPress={() => openContact(item.title)}
                    >
                      <Text style={styles.miniButtonText}>
                        Enquire Now
                      </Text>
                      <Ionicons
                        name="arrow-forward"
                        size={11}
                        color={GOLD}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* SECTION 4 - CULINARY EXPERIENCE */}
          <View style={styles.experienceSection}>
            <ImageBackground
              source={{ uri: images.chef }}
              style={styles.experienceBanner}
              imageStyle={styles.experienceImage}
            >
              <View style={styles.experienceOverlay}>
                <Text style={styles.smallGoldHeading}>
                  THE ROYAL EXPERIENCE
                </Text>

                <Text style={styles.experienceTitle}>
                  Excellence in Every{"\n"}
                  <Text style={styles.gold}>Culinary Detail</Text>
                </Text>

                <Text style={styles.experienceDescription}>
                  Our expert chefs and dedicated hospitality team make every
                  occasion truly special.
                </Text>

                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.goldButton}
                  onPress={() => openContact()}
                >
                  <Text style={styles.goldButtonText}>
                    Contact Our Team
                  </Text>
                  <Ionicons
                    name="arrow-forward"
                    size={14}
                    color={BLACK}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          {/* SECTION 5 - WHY CHOOSE US */}
          <View style={styles.whySection}>
            <Text style={styles.smallGoldHeading}>
              WHY CHOOSE ROYAL KITCHEN
            </Text>

            <Text style={styles.whyTitle}>
              Creating Memorable{"\n"}
              <Text style={styles.gold}>Dining Experiences</Text>
            </Text>

            <View style={styles.featureGrid}>
              <View style={styles.featureCard}>
                <Ionicons
                  name="restaurant-outline"
                  size={22}
                  color={GOLD}
                />
                <Text style={styles.featureTitle}>Quality Cuisine</Text>
                <Text style={styles.featureDescription}>
                  Carefully selected ingredients and exceptional flavours.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Ionicons
                  name="people-outline"
                  size={22}
                  color={GOLD}
                />
                <Text style={styles.featureTitle}>Expert Team</Text>
                <Text style={styles.featureDescription}>
                  Experienced chefs and dedicated hospitality professionals.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Ionicons
                  name="star-outline"
                  size={22}
                  color={GOLD}
                />
                <Text style={styles.featureTitle}>Premium Service</Text>
                <Text style={styles.featureDescription}>
                  Personalized attention for every guest and occasion.
                </Text>
              </View>

              <View style={styles.featureCard}>
                <Ionicons
                  name="heart-outline"
                  size={22}
                  color={GOLD}
                />
                <Text style={styles.featureTitle}>Royal Experience</Text>
                <Text style={styles.featureDescription}>
                  Memorable celebrations with elegant dining experiences.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomSpace} />
        </ScrollView>

        <Navbar active="services" />
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

  // PAGE HEADING
  heading: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },

  smallTitle: {
    color: GOLD,
    fontSize: 14,
    letterSpacing: 3,
    fontWeight: "700",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },

  goldLine: {
    width: 48,
    height: 2,
    backgroundColor: GOLD,
    marginTop: 4,
  },

  subtitle: {
    color: "#AAAAAA",
    fontSize: 13,
    textAlign: "center",
    marginTop: 4,
  },

  // HERO BANNER
  heroWrapper: {
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#806900",
    borderRadius: 12,
    overflow: "hidden",
  },

  hero: {
    height: 205,
    width: "100%",
    justifyContent: "center",
  },

  heroImage: {
    resizeMode: "cover",
  },

  heroOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.68)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
  },

  eyebrow: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.7,
    marginBottom: 9,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 31,
  },

  gold: {
    color: GOLD,
  },

  heroDescription: {
    color: "#E0E0E0",
    fontSize: 9,
    textAlign: "center",
    lineHeight: 14,
    maxWidth: 280,
    marginTop: 8,
  },

  goldButton: {
    backgroundColor: GOLD,
    borderRadius: 20,
    paddingHorizontal: 17,
    paddingVertical: 8,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },

  goldButtonText: {
    color: BLACK,
    fontSize: 9,
    fontWeight: "bold",
  },

  // INTRODUCTION
  introSection: {
    paddingHorizontal: 17,
    paddingTop: 25,
    paddingBottom: 18,
  },

  guestInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginBottom: 18,
  },

  expectedGuests: {
    color: "#AAAAAA",
    fontSize: 10,
    textAlign: "center",
  },

  smallGoldHeading: {
    color: GOLD,
    fontSize: 8,
    letterSpacing: 1.2,
    textAlign: "center",
    marginBottom: 8,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 21,
    lineHeight: 28,
    textAlign: "center",
  },

  paragraphCenter: {
    color: "#AAAAAA",
    fontSize: 9,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 10,
    paddingHorizontal: 8,
  },

  // SERVICE CARDS
  servicesSection: {
    paddingHorizontal: 13,
    paddingTop: 8,
    paddingBottom: 20,
  },

  servicesHeading: {
    marginBottom: 15,
  },

  servicesTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
  },

  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },

  serviceCard: {
    width: "48.5%",
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 8,
    overflow: "hidden",
  },

  serviceImage: {
    width: "100%",
    height: 110,
  },

  serviceContent: {
    padding: 9,
  },

  serviceTitle: {
    color: GOLD,
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 14,
    marginTop: 8,
    minHeight: 29,
  },

  serviceDescription: {
    color: "#AAAAAA",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 5,
    minHeight: 48,
  },

  miniButton: {
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    marginTop: 9,
  },

  miniButtonText: {
    color: GOLD,
    fontSize: 8,
    textAlign: "center",
  },

  // EXPERIENCE BANNER
  experienceSection: {
    paddingTop: 8,
  },

  experienceBanner: {
    height: 215,
    justifyContent: "center",
  },

  experienceImage: {
    resizeMode: "cover",
  },

  experienceOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.72)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  experienceTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    lineHeight: 28,
  },

  experienceDescription: {
    color: "#DDDDDD",
    fontSize: 9,
    textAlign: "center",
    lineHeight: 15,
    marginTop: 9,
  },

  // WHY CHOOSE US
  whySection: {
    paddingHorizontal: 15,
    paddingTop: 24,
    paddingBottom: 20,
  },

  whyTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Georgia",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 27,
    marginBottom: 17,
  },

  featureGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },

  featureCard: {
    width: "48%",
    minHeight: 115,
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: "#554700",
    borderRadius: 7,
    padding: 10,
  },

  featureTitle: {
    color: GOLD,
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 5,
  },

  featureDescription: {
    color: "#AAAAAA",
    fontSize: 8,
    lineHeight: 13,
  },

  bottomSpace: {
    height: 10,
  },
});
