import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

// Food images

import homeParty from "../../../assets/images/homeParty.webp";
import snacks from "../../../assets/images/snacks.webp";
import biryaniCombo from "../../../assets/images/biryaniCombo.webp";
import DumBiyani from "../../../assets/images/dumbiryani.jpg";
import FishCurry from "../../../assets/images/FishCurry.jpeg";
import DalMakhni from "../../../assets/images/DalMakhni.jpeg";
import paneer from "../../../assets/images/paneer.jpeg";
import vegBiryani from "../../../assets/images/vegBiryani.jpeg";
import chickenbiryani from "../../../assets/images/chickenbiryani.jpg";
import paneertikka from "../../../assets/images/paneer-tikka.jpg";
import butterChicken from "../../../assets/images/butterChicken.jpg";
import VegMomo from "../../../assets/images/veg-momo.jpg";
import burger from "../../../assets/images/burger.jpg";
import chocolateCake from "../../../assets/images/chocolate-lave-cake.jpg";
import IceCream from "../../../assets/images/iceCream.jpg";
import pizza from "../../../assets/images/pizza.jpg";
import CreameToast from "../../../assets/images/creameToast.jpg";
import kashmiriRogan from "../../../assets/images/kashmiriRogan.jpg";
import lunchCombo from "../../../assets/images/lunchCombo.jpg";
import VegThali from "../../../assets/images/vegThali.jpg";
import samosa from "../../../assets/images/samosa.jpg";
import TandooriChicken from "../../../assets/images/tandooriChicken.webp";
import Mocktail from "../../../assets/images/mocktail.jpg";
import cake from "../../../assets/images/cake.jpg";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#111111";

const foodImages = {
  "Paneer Tikka": paneertikka,
  "Tandoori Chicken" : TandooriChicken,
  "Chicken Biryani": chickenbiryani,
  "Royal Dum Biryani": DumBiyani,
  "Veg Momo": VegMomo,
  "Butter Chicken": butterChicken,
  Burger: burger,
  "Chocolate Cake": chocolateCake,
  "Ice Cream": IceCream,
  "Cheese Pizza": pizza,
  "Kashmiri Rogan": kashmiriRogan,
  "Creame Toast": CreameToast,
  "Lunch Combo": lunchCombo,
  "Veg Thali": VegThali,
  "Samosa": samosa,
  "Veg Biryani": vegBiryani,
  "Veg Combo": VegThali,
  "Biryani Combo": biryaniCombo,
  "Spicy Snacks": snacks,
  "Family Feast": lunchCombo,
  "Home Party": homeParty,
  "Royal Mocktail" : Mocktail,
  "Fish Curry": FishCurry,
  "Dal Makhni": DalMakhni,
  "Cake": cake,
};

export default function ViewDetails() {
  const { id, name, description, price, mode } = useLocalSearchParams();

  const [quantity, setQuantity] = useState(1);

  const foodName = name || "Food Details";
  const foodDescription =
    description || "Freshly prepared with delicious ingredients.";
  const foodPrice = Number(String(price || "0").replace(/[^0-9.]/g, ""));

  const imageSource = foodImages[foodName];

  const totalPrice = foodPrice * quantity;

  const isVeg = String(mode).toLowerCase() === "veg";

  const increaseQuantity = () => {
    setQuantity((previous) => previous + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previous) => Math.max(1, previous - 1));
  };

  const handleOrder = () => {
    router.push({
      pathname: "/pages/orderproceed",
      params: {
        id: String(id || ""),
        name: String(foodName),
        description: String(foodDescription),
        price: String(foodPrice),
        mode: String(mode || ""),
        quantity: String(quantity),
      },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.8}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={23} color={GOLD} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>FOOD DETAILS</Text>

          <View style={{ width: 42 }} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* FOOD IMAGE */}
          <View style={styles.imageContainer}>
            {imageSource ? (
              <Image
                source={imageSource}
                style={styles.foodImage}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Ionicons name="restaurant-outline" size={55} color={GOLD} />
              </View>
            )}

            <View style={styles.imageBadge}>
              <View
                style={[
                  styles.foodTypeIcon,
                  {
                    borderColor: isVeg ? "#22C55E" : "#EF4444",
                  },
                ]}
              >
                <View
                  style={[
                    styles.foodTypeDot,
                    {
                      backgroundColor: isVeg ? "#22C55E" : "#EF4444",
                    },
                  ]}
                />
              </View>

              <Text style={styles.imageBadgeText}>
                {isVeg ? "VEGETARIAN" : "NON-VEGETARIAN"}
              </Text>
            </View>
          </View>

          {/* FOOD INFORMATION */}
          <View style={styles.detailsContainer}>
            <Text style={styles.foodName}>{foodName}</Text>

            <Text style={styles.foodDescription}>{foodDescription}</Text>

            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.foodPrice}>₹{foodPrice}</Text>
            </View>

            <View style={styles.divider} />

            {/* QUANTITY */}
            <View style={styles.quantityContent}>
              <Text style={styles.sectionTitle}>Select Quantity</Text>

              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  activeOpacity={0.8}
                  onPress={decreaseQuantity}
                >
                  <Ionicons name="remove" size={20} color={GOLD} />
                </TouchableOpacity>

                <Text style={styles.quantityText}>{quantity}</Text>

                <TouchableOpacity
                  style={styles.quantityButton}
                  activeOpacity={0.8}
                  onPress={increaseQuantity}
                >
                  <Ionicons name="add" size={20} color={GOLD} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.divider} />

            {/* ORDER SUMMARY */}
            <View style={styles.summaryContainer}>
              <Text style={styles.sectionTitle}>Order Summary</Text>

              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Item</Text>
                <Text style={styles.summaryValue}>{foodName}</Text>
              </View>

              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Quantity</Text>
                <Text style={styles.summaryValue}>{quantity}</Text>
              </View>

              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Price per item</Text>
                <Text style={styles.summaryValue}>₹{foodPrice}</Text>
              </View>

              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total Amount</Text>

                <Text style={styles.totalPrice}>₹{totalPrice}</Text>
              </View>
            </View>

            {/* BUTTONS */}
            <TouchableOpacity
              style={styles.orderButton}
              activeOpacity={0.85}
              onPress={handleOrder}
            >
              <Text style={styles.orderButtonText}>ORDER NOW</Text>

              <Ionicons name="arrow-forward" size={19} color={BLACK} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.continueButton}
              activeOpacity={0.8}
              onPress={() => router.back()}
            >
              <Text style={styles.continueButtonText}>Continue Exploring</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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

  header: {
    height: 58,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#252525",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: CARD,
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    color: GOLD,
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 2,
  },

  scrollContent: {
    paddingBottom: 35,
  },

  imageContainer: {
    width: "100%",
    height: 275,
    backgroundColor: CARD,
    position: "relative",
    borderWidth: 2,
    borderColor: "#cca402",
    borderRadius: 12,
  },

  foodImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },

  imagePlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imageBadge: {
    position: "absolute",
    bottom: 15,
    left: 16,
    backgroundColor: "#000000DD",
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  foodTypeIcon: {
    width: 15,
    height: 15,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },

  foodTypeDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
  },

  imageBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },

  detailsContainer: {
    paddingHorizontal: 20,
    paddingTop: 23,
  },

  foodName: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  foodDescription: {
    color: "#AAAAAA",
    fontSize: 18,
    lineHeight: 22,
    marginTop: 4,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },

  priceLabel: {
    color: "#BBBBBB",
    fontSize: 18,
  },

  foodPrice: {
    color: GOLD,
    fontSize: 28,
    fontWeight: "800",
  },

  divider: {
    height: 1,
    backgroundColor: "#292929",
    marginVertical: 20,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },

  quantityContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: CARD,
    borderRadius: 10,
    padding: 6,
    gap: 20,
  },

  quantityButton: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: "#202020",
    alignItems: "center",
    justifyContent: "center",
  },

  quantityText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    minWidth: 18,
    textAlign: "center",
  },

  summaryContainer: {
    backgroundColor: CARD,
    borderRadius: 13,
    padding: 17,
    borderColor: "#cca402",
    borderWidth: 1,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical:12,
  },

  summaryLabel: {
    color: "#AAAAAA",
    fontSize: 16,
  },

  summaryValue: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    maxWidth: "60%",
    textAlign: "right",
  },

  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "#333333",
    paddingTop: 15,
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalLabel: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "700",
  },

  totalPrice: {
    color: GOLD,
    fontSize: 23,
    fontWeight: "800",
  },

  orderButton: {
    height: 53,
    backgroundColor: GOLD,
    borderRadius: 10,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  orderButtonText: {
    color: BLACK,
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 1.2,
  },

  continueButton: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  continueButtonText: {
    color: "#AAAAAA",
    fontSize: 14,
    fontWeight: "600",
  },
});
