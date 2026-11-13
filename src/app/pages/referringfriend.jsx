
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  Share,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../components/navbar";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const CARD = "#171717";

export default function ReferringFriend() {
  const referralCode = "ROYAL2026";
  const referralLink = "https://royalkitchen.com/referral/ROYAL2026";

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const Clipboard = require("expo-clipboard");
      await Clipboard.setStringAsync(referralCode);
      setCopied(true);
      Alert.alert("Copied!", "Your referral code has been copied.");
    } catch (error) {
      Alert.alert("Referral Code", referralCode);
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Enjoy a royal dining experience at Royal Kitchen! Use my referral code ${referralCode} when you join.\n\n${referralLink}`,
      });
    } catch (error) {
      Alert.alert("Error", "Unable to share referral link.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => require("expo-router").router.back()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={22} color={GOLD} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Refer a Friend</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <View style={styles.giftCircle}>
            <Ionicons name="gift" size={48} color={GOLD} />
          </View>

          <Text style={styles.heroTitle}>Share the Royal Experience!</Text>
          <Text style={styles.heroDescription}>
            Invite your friends to Royal Kitchen and share the joy of
            exceptional dining together.
          </Text>
        </View>

        {/* Reward Card */}
        <View style={styles.rewardCard}>
          <Text style={styles.rewardLabel}>REFER & EARN</Text>

          <View style={styles.rewardRow}>
            <View style={styles.rewardItem}>
              <Ionicons name="person-add-outline" size={27} color={GOLD} />
              <Text style={styles.rewardNumber}>You</Text>
              <Text style={styles.rewardText}>Earn Rewards</Text>
            </View>

            <Ionicons name="arrow-forward" size={23} color={GOLD} />

            <View style={styles.rewardItem}>
              <Ionicons name="people-outline" size={27} color={GOLD} />
              <Text style={styles.rewardNumber}>Friend</Text>
              <Text style={styles.rewardText}>Gets a Welcome Gift</Text>
            </View>
          </View>
        </View>

        {/* Referral Code */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Referral Code</Text>
          <Text style={styles.sectionDescription}>
            Share this unique code with your friends.
          </Text>

          <View style={styles.codeBox}>
            <Text style={styles.codeText}>{referralCode}</Text>

            <TouchableOpacity
              style={styles.copyButton}
              onPress={handleCopy}
            >
              <Ionicons
                name={copied ? "checkmark" : "copy-outline"}
                size={19}
                color={BLACK}
              />
              <Text style={styles.copyText}>
                {copied ? "Copied" : "Copy"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Share Button */}
        <TouchableOpacity
          style={styles.shareButton}
          onPress={handleShare}
          activeOpacity={0.8}
        >
          <Ionicons name="share-social-outline" size={21} color={BLACK} />
          <Text style={styles.shareButtonText}>Share with Friends</Text>
        </TouchableOpacity>

        {/* How it Works */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>

          <View style={styles.stepCard}>
            <View style={styles.stepIcon}>
              <Ionicons name="share-outline" size={22} color={GOLD} />
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>1. Share Your Code</Text>
              <Text style={styles.stepDescription}>
                Send your referral code to friends and family.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={styles.stepIcon}>
              <Ionicons name="person-add-outline" size={22} color={GOLD} />
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>2. Friend Joins</Text>
              <Text style={styles.stepDescription}>
                Your friend signs up using your referral code.
              </Text>
            </View>
          </View>

          <View style={styles.stepCard}>
            <View style={styles.stepIcon}>
              <Ionicons name="trophy-outline" size={22} color={GOLD} />
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>3. Enjoy Rewards</Text>
              <Text style={styles.stepDescription}>
                Earn rewards when your friend completes the qualifying action.
              </Text>
            </View>
          </View>
        </View>

        {/* Terms */}
        <View style={styles.termsBox}>
          <Ionicons
            name="information-circle-outline"
            size={19}
            color={GOLD}
          />
          <Text style={styles.termsText}>
            Referral rewards and eligibility are subject to Royal Kitchen's
            referral programme terms and conditions.
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
    fontSize: 19,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  hero: {
    alignItems: "center",
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 25,
  },
  giftCircle: {
    width: 105,
    height: 105,
    borderRadius: 55,
    borderWidth: 1.5,
    borderColor: GOLD,
    backgroundColor: "#211D0B",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  heroTitle: {
    color: GOLD,
    fontSize: 23,
    fontFamily: "Georgia",
    fontWeight: "bold",
    textAlign: "center",
  },
  heroDescription: {
    color: "#BDBDBD",
    fontSize: 13,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 10,
  },
  rewardCard: {
    backgroundColor: CARD,
    marginHorizontal: 18,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#514400",
    padding: 20,
  },
  rewardLabel: {
    color: GOLD,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 22,
  },
  rewardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  rewardItem: {
    alignItems: "center",
    flex: 1,
  },
  rewardNumber: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 9,
  },
  rewardText: {
    color: "#AAAAAA",
    fontSize: 11,
    marginTop: 5,
    textAlign: "center",
  },
  section: {
    marginHorizontal: 18,
    marginTop: 28,
  },
  sectionTitle: {
    color: GOLD,
    fontSize: 19,
    fontFamily: "Georgia",
    fontWeight: "bold",
  },
  sectionDescription: {
    color: "#AAAAAA",
    fontSize: 12,
    marginTop: 7,
    marginBottom: 14,
  },
  codeBox: {
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: GOLD,
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  codeText: {
    color: GOLD,
    fontSize: 21,
    fontWeight: "bold",
    letterSpacing: 3,
  },
  copyButton: {
    backgroundColor: GOLD,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  copyText: {
    color: BLACK,
    fontWeight: "bold",
    fontSize: 12,
  },
  shareButton: {
    backgroundColor: GOLD,
    marginHorizontal: 18,
    marginTop: 20,
    height: 51,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  shareButtonText: {
    color: BLACK,
    fontSize: 15,
    fontWeight: "bold",
  },
  stepCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CARD,
    padding: 15,
    borderRadius: 10,
    marginTop: 12,
  },
  stepIcon: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#29240D",
    borderWidth: 1,
    borderColor: "#665500",
    alignItems: "center",
    justifyContent: "center",
  },
  stepContent: {
    flex: 1,
    marginLeft: 13,
  },
  stepTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  stepDescription: {
    color: "#AAAAAA",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },
  termsBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: 20,
    marginTop: 24,
    gap: 8,
  },
  termsText: {
    color: "#888888",
    fontSize: 10,
    lineHeight: 16,
    flex: 1,
  },
});
