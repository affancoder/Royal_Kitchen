import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const GOLD = "#D4AF00";
const BLACK = "#000000";
const DARK = "#171717";

export default function ForgetPassword() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSendOTP = () => {
    if (!email.trim()) {
      Alert.alert("Required", "Please enter your registered email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    // Connect your OTP API here.
    setStep(2);
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      Alert.alert("Invalid OTP", "Please enter the 6-digit OTP.");
      return;
    }

    // Connect your OTP verification API here.
    setStep(3);
  };

  const handleResetPassword = () => {
    if (!password || !confirmPassword) {
      Alert.alert("Required", "Please fill in both password fields.");
      return;
    }

    if (password.length < 8) {
      Alert.alert(
        "Weak Password",
        "Password must contain at least 8 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Your passwords do not match.");
      return;
    }

    // Connect your reset password API here.
    Alert.alert(
      "Password Reset",
      "Your password reset flow is complete.",
      [
        {
          text: "Continue to Login",
          onPress: () => router.replace("/auth/login"),
        },
      ]
    );
  };

  const handleResendOTP = () => {
    // Connect your resend OTP API here.
    Alert.alert("OTP", "Connect your resend OTP API to send a new code.");
  };

  const renderHeader = () => (
    <>
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Ionicons name="lock-closed-outline" size={34} color={GOLD} />
        </View>
      </View>

      <Text style={styles.brandTitle}>THE ROYAL KITCHEN & CATERER</Text>

      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Ionicons name="diamond" size={12} color={GOLD} />
        <View style={styles.dividerLine} />
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={BLACK} />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              if (step > 1) {
                setStep(step - 1);
              } else {
                router.replace("/auth/login");
              }
            }}
          >
            <Ionicons name="arrow-back" size={22} color={GOLD} />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          {renderHeader()}

          <View style={styles.card}>
            <View style={styles.stepContainer}>
              {[1, 2, 3].map((item) => (
                <React.Fragment key={item}>
                  <View
                    style={[
                      styles.stepCircle,
                      step >= item && styles.activeStepCircle,
                    ]}
                  >
                    {step > item ? (
                      <Ionicons name="checkmark" size={16} color={BLACK} />
                    ) : (
                      <Text
                        style={[
                          styles.stepNumber,
                          step >= item && styles.activeStepNumber,
                        ]}
                      >
                        {item}
                      </Text>
                    )}
                  </View>

                  {item !== 3 && (
                    <View
                      style={[
                        styles.stepLine,
                        step > item && styles.activeStepLine,
                      ]}
                    />
                  )}
                </React.Fragment>
              ))}
            </View>

            {step === 1 && (
              <>
                <Text style={styles.heading}>Forgot Password?</Text>
                <Text style={styles.description}>
                  Don't worry! Enter your registered email address and we'll
                  help you reset your password.
                </Text>

                <Text style={styles.label}>EMAIL ADDRESS</Text>

                <View style={styles.inputContainer}>
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={GOLD}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    placeholderTextColor="#777"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={handleSendOTP}
                >
                  <Text style={styles.primaryButtonText}>SEND OTP</Text>
                  <Ionicons name="arrow-forward" size={18} color={BLACK} />
                </TouchableOpacity>
              </>
            )}

            {step === 2 && (
              <>
                <Text style={styles.heading}>Verify OTP</Text>
                <Text style={styles.description}>
                  Enter the 6-digit verification code sent to{" "}
                  <Text style={styles.highlightText}>{email}</Text>
                </Text>

                <Text style={styles.label}>VERIFICATION CODE</Text>

                <View style={styles.inputContainer}>
                  <Ionicons
                    name="keypad-outline"
                    size={20}
                    color={GOLD}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter 6-digit OTP"
                    placeholderTextColor="#777"
                    value={otp}
                    onChangeText={(value) =>
                      setOtp(value.replace(/[^0-9]/g, "").slice(0, 6))
                    }
                    keyboardType="number-pad"
                    maxLength={6}
                  />
                </View>

                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={handleVerifyOTP}
                >
                  <Text style={styles.primaryButtonText}>VERIFY OTP</Text>
                  <Ionicons name="arrow-forward" size={18} color={BLACK} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.resendButton}
                  onPress={handleResendOTP}
                >
                  <Text style={styles.resendText}>
                    Didn't receive the code?{" "}
                    <Text style={styles.highlightText}>Resend OTP</Text>
                  </Text>
                </TouchableOpacity>
              </>
            )}

            {step === 3 && (
              <>
                <Text style={styles.heading}>Create New Password</Text>
                <Text style={styles.description}>
                  Create a strong password for your Royal Kitchen account.
                </Text>

                <Text style={styles.label}>NEW PASSWORD</Text>

                <View style={styles.inputContainer}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={GOLD}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter new password"
                    placeholderTextColor="#777"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off-outline" : "eye-outline"}
                      size={20}
                      color="#999"
                    />
                  </TouchableOpacity>
                </View>

                <Text style={styles.label}>CONFIRM PASSWORD</Text>

                <View style={styles.inputContainer}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={GOLD}
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm new password"
                    placeholderTextColor="#777"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showConfirmPassword}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    <Ionicons
                      name={
                        showConfirmPassword
                          ? "eye-off-outline"
                          : "eye-outline"
                      }
                      size={20}
                      color="#999"
                    />
                  </TouchableOpacity>
                </View>

                <Text style={styles.passwordHint}>
                  Password must contain at least 8 characters.
                </Text>

                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={handleResetPassword}
                >
                  <Text style={styles.primaryButtonText}>RESET PASSWORD</Text>
                  <Ionicons name="checkmark-circle" size={19} color={BLACK} />
                </TouchableOpacity>
              </>
            )}
          </View>

          <TouchableOpacity
            style={styles.loginLink}
            onPress={() => router.replace("/auth/login")}
          >
            <Ionicons name="arrow-back" size={16} color={GOLD} />
            <Text style={styles.loginLinkText}> Back to Login</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            © THE ROYAL KITCHEN & CATERER
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BLACK,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 30,
    justifyContent: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 25,
    gap: 8,
  },
  backText: {
    color: GOLD,
    fontSize: 15,
    fontWeight: "500",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
  logoCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 1.5,
    borderColor: GOLD,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: DARK,
  },
  brandTitle: {
    color: GOLD,
    fontSize: 21,
    fontFamily: "Georgia",
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 1.5,
  },
  brandSubtitle: {
    color: "#FFFFFF",
    fontSize: 12,
    letterSpacing: 4,
    textAlign: "center",
    marginTop: 4,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 22,
    gap: 12,
  },
  dividerLine: {
    width: 65,
    height: 1,
    backgroundColor: GOLD,
    opacity: 0.6,
  },
  card: {
    backgroundColor: DARK,
    borderWidth: 1,
    borderColor: "#39321A",
    borderRadius: 18,
    padding: 22,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  stepCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#666",
    alignItems: "center",
    justifyContent: "center",
  },
  activeStepCircle: {
    backgroundColor: GOLD,
    borderColor: GOLD,
  },
  stepNumber: {
    color: "#AAA",
    fontSize: 13,
    fontWeight: "bold",
  },
  activeStepNumber: {
    color: BLACK,
  },
  stepLine: {
    width: 45,
    height: 1,
    backgroundColor: "#555",
    marginHorizontal: 7,
  },
  activeStepLine: {
    backgroundColor: GOLD,
  },
  heading: {
    color: GOLD,
    fontSize: 25,
    fontFamily: "Georgia",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    color: "#AAA",
    fontSize: 13,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 28,
  },
  highlightText: {
    color: GOLD,
    fontWeight: "bold",
  },
  label: {
    color: "#DDD",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1.2,
    marginBottom: 10,
    marginTop: 8,
  },
  inputContainer: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: BLACK,
    borderWidth: 1,
    borderColor: "#393939",
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 18,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    height: "100%",
  },
  primaryButton: {
    height: 54,
    backgroundColor: GOLD,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginTop: 12,
  },
  primaryButtonText: {
    color: BLACK,
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  resendButton: {
    alignItems: "center",
    marginTop: 22,
  },
  resendText: {
    color: "#AAA",
    fontSize: 13,
  },
  passwordHint: {
    color: "#888",
    fontSize: 11,
    marginTop: -8,
    marginBottom: 8,
  },
  loginLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  loginLinkText: {
    color: "#DDD",
    fontSize: 14,
  },
  footerText: {
    color: "#666",
    fontSize: 10,
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 30,
  },
});
