import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, FlatList, 
  StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform 
} from 'react-native';
import { SosHeader } from '../components/SosHeader';
import { colors } from '../theme/colors';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'volunteer';
  timestamp: string;
}

const MOCK_VOLUNTEER_REPLIES = [
  "Estou aqui com você. Não precisa ter pressa para falar nada.",
  "Estou apenas te fazendo companhia nestes 10 minutos. Você não está só.",
  "Respira fundo no seu tempo. Quer apenas que eu continue aqui do outro lado?",
  "Obrigado por ter a coragem de apertar o botão hoje. Você deu o primeiro passo.",
];

export const ChatScreen = ({ navigation }: any) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou um voluntário de acolhimento. Estou aqui com você pelos próximos minutos. Como posso te apoiar agora?',
      sender: 'volunteer',
      timestamp: 'Agora',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (textToSend?: string) => {
    const content = textToSend || inputText;
    if (!content.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: content,
      sender: 'user',
      timestamp: 'Agora',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Mock do voluntário respondendo com delay humanizado
    setTimeout(() => {
      const nextReply = MOCK_VOLUNTEER_REPLIES[Math.floor(Math.random() * MOCK_VOLUNTEER_REPLIES.length)];
      const volunteerMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: nextReply,
        sender: 'volunteer',
        timestamp: 'Agora',
      };
      setMessages((prev) => [...prev, volunteerMsg]);
      setIsTyping(false);
    }, 1800);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <SosHeader />
      <KeyboardAvoidingView 
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.volunteerBanner}>
          <View style={styles.statusDot} />
          <Text style={styles.bannerText}>Voluntário acolhedor conectado (Sem julgamentos)</Text>
          <TouchableOpacity 
            style={styles.finishBtn} 
            onPress={() => navigation.navigate('NextSteps')}
          >
            <Text style={styles.finishBtnText}>Concluir</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.chatArea}
          renderItem={({ item }) => (
            <View style={[
              styles.bubble,
              item.sender === 'user' ? styles.userBubble : styles.volunteerBubble
            ]}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
        />

        {isTyping && (
          <Text style={styles.typingIndicator}>Voluntário está digitando...</Text>
        )}

        {/* Respostas rápidas sem digitação */}
        <View style={styles.quickChips}>
          <TouchableOpacity style={styles.chip} onPress={() => sendMessage("Só preciso de companhia silenciosa")}>
            <Text style={styles.chipText}>Silêncio acolhedor 🤫</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip} onPress={() => sendMessage("Não sei o que falar")}>
            <Text style={styles.chipText}>Não sei o que falar 😶</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Se quiser, escreva aqui..."
            placeholderTextColor={colors.textSecondary}
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity 
            style={[styles.sendButton, !inputText.trim() && { opacity: 0.5 }]} 
            onPress={() => sendMessage()}
            disabled={!inputText.trim()}
          >
            <Text style={styles.sendText}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  keyboardContainer: { flex: 1 },
  volunteerBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16203A',
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 8,
  },
  statusDot: { 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: colors.accentGreen 
  },
  bannerText: { 
    color: colors.textSecondary, 
    fontSize: 12, 
    flex: 1 
  },
  finishBtn: { 
    backgroundColor: colors.surface, 
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: 8 
  },
  finishBtnText: { 
    color: colors.textPrimary, 
    fontSize: 12, 
    fontWeight: '600' 
  },
  chatArea: { 
    padding: 16, 
    gap: 12 
  },
  bubble: {
    maxWidth: '80%', 
    padding: 14, 
    borderRadius: 18 
  },
  userBubble: { 
    alignSelf: 'flex-end', 
    backgroundColor: colors.userBubble, 
    borderBottomRightRadius: 4 
  },
  volunteerBubble: { 
    alignSelf: 'flex-start', 
    backgroundColor: colors.volunteerBubble, 
    borderBottomLeftRadius: 4 
  },
  messageText: { 
    color: colors.textPrimary, 
    fontSize: 15, 
    lineHeight: 21 
  },
  typingIndicator: { 
    paddingHorizontal: 16, 
    color: colors.accentTeal, 
    fontSize: 12, 
    fontStyle: 'italic', 
    marginBottom: 4 
  },
  quickChips: { 
    flexDirection: 'row', 
    paddingHorizontal: 12, 
    gap: 8, 
    marginBottom: 8 
  },
  chip: { 
    backgroundColor: colors.cardBackground, 
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    borderRadius: 16 
  },
  chipText: { 
    color: colors.textSecondary, 
    fontSize: 12 
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#070D1F',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    color: colors.textPrimary,
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 10,
    fontSize: 15,
  },
  sendButton: {
    backgroundColor: colors.accentTeal,
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: { color: '#0F172A', fontSize: 16, fontWeight: 'bold' },
});