import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Keyboard,
} from "react-native";
import * as Speech from "expo-speech";
import * as GoogleGenerativeAI from "@google/generative-ai";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from "expo-router";
import { backNavigationOption } from "@/utils/BackNavigation";
import { Colors } from "@/constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loader from "@/components/common/Loader";

type Message = {
  text: string;
  user: boolean;
};

const GeminiChat = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions(backNavigationOption("Chat box"));
  }, []);

  const inputRef = useRef<any>(null);
  const listRef = useRef<FlatList>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showStopIcon, setShowStopIcon] = useState(false);

  const API_KEY = "AIzaSyBthSuYk980BLPhEejT0OrMXhJGd9ogNME";

  useEffect(() => {
    const startChat = async () => {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt =
        "Xin chào tôi có thể giúp ích gì cho kỳ nghỉ của bạn không?";
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      console.log(text);
      showMessage({
        message: "Welcome to Gemini Chat 🤖",
        description: text,
        type: "info",
        icon: "info",
        duration: 2000,
      });
      setMessages([
        {
          text,
          user: false,
        },
      ]);
      setLoading(false);
    };
    startChat();
  }, []);

  // load message
  useEffect(() => {
    setTimeout(() => {
      listRef.current?.scrollToEnd({ animated: true });
    }, 300);
  }, [messages]);

  const sendMessage = async () => {
    const userMessage = { text: userInput, user: true };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = userMessage.text;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    setMessages((prevMessages) => [...prevMessages, { text, user: false }]);
    setUserInput("");

    if (text && !isSpeaking) {
      setShowStopIcon(true);
    }
    Keyboard.dismiss();
  };

  const ClearMessage = () => {
    setMessages([]);
    setIsSpeaking(false);
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View
      style={[
        styles.messageContainer,
        item.user ? styles.userMessageContainer : styles.botMessageContainer,
      ]}
    >
      <Text style={[styles.messageText]}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Loader isLoading={loading} setIsLoading={setLoading} />
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#F8F5EA" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 105}
      >
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.text}
          ref={listRef}
        />
        <View style={styles.inputContainer}>
          <TextInput
            ref={inputRef}
            placeholder="Hãy nhập tin nhắn của bạn..."
            onChangeText={setUserInput}
            value={userInput}
            style={styles.input}
            placeholderTextColor="#ccc"
          />
          <TouchableOpacity style={styles.button}>
            <AntDesign name="plus" size={16} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                paddingHorizontal: 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
            onPress={sendMessage}
          >
            <FontAwesome name="send-o" size={24} color="white" />
          </TouchableOpacity>

          {/* {showStopIcon && (
            <TouchableOpacity style={styles.stopIcon} onPress={ClearMessage}>
              <Entypo name="controller-stop" size={24} color="white" />
            </TouchableOpacity>
          )}
          {loading && <ActivityIndicator size="large" color="#4CAF50" />} */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  messageContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 0,
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    flexWrap: "wrap",
    color: Colors.light.white,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.light.text_secondary,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  micIcon: {
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  stopIcon: {
    padding: 10,
    backgroundColor: "#131314",
    borderRadius: 25,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 3,
  },
  userMessageContainer: {
    backgroundColor: "#791363",
    alignSelf: "flex-end",
  },
  botMessageContainer: {
    backgroundColor: "#191299",
    alignSelf: "flex-start",
  },
  timestamp: {
    fontSize: 12,
    color: "#ccc",
    alignSelf: "flex-end",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#EEA217",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
});

export default GeminiChat;
