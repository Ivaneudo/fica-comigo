import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Linking } from 'react-native';
import { SosHeader } from '../components/SosHeader';
import { colors } from '../theme/colors';

export const NextStepsScreen = ({ navigation }: any) => {
  const triggerWhatsAppAlert = () => {
    const text = encodeURIComponent(
      "Oi. Não estou num momento bom agora e lembrei de você. Pode falar comigo quando puder?"
    );
    // Abre a lista de contatos do WhatsApp com o texto pré-pronto
    Linking.openURL(`whatsapp://send?text=${text}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <SosHeader />
      <View style={styles.content}>
        <View>
          <Text style={styles.headline}>Você atravessou este momento.</Text>
          <Text style={styles.subheadline}>
            Os primeiros 10 minutos passaram. Como você prefere continuar a se cuidar agora?
          </Text>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity 
            style={[styles.actionCard, styles.whatsappCard]}
            onPress={triggerWhatsAppAlert}
            activeOpacity={0.8}
          >
            <Text style={styles.cardEmoji}>💚</Text>
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Avisar alguém de confiança</Text>
              <Text style={styles.cardDesc}>Dispara um WhatsApp já pré-escrito ("Preciso de você")</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionCard}
            onPress={() => Linking.openURL('https://cvv.org.br/')}
            activeOpacity={0.8}
          >
            <Text style={styles.cardEmoji}>🌐</Text>
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Conhecer mais do CVV</Text>
              <Text style={styles.cardDesc}>Acesse o site oficial com chat online gratuito</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.footerButtons}>
          <TouchableOpacity 
            style={styles.restartButton}
            onPress={() => navigation.reset({ index: 0, routes: [{ name: 'CheckIn' }] })}
          >
            <Text style={styles.restartText}>↻ Começar mais 10 minutos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: colors.background 
  },
  content: { 
    flex: 1, 
    padding: 24, 
    justifyContent: 'space-between' 
  },
  headline: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: colors.textPrimary, 
    marginTop: 12 
  },
  subheadline: { 
    fontSize: 15, 
    color: colors.textSecondary, 
    marginTop: 8, 
    lineHeight: 22 
  },
  cardContainer: { gap: 14 },
  actionCard: {
    backgroundColor: colors.cardBackground,
    padding: 18,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: '#263456',
  },
  whatsappCard: {
    borderColor: '#25D366',
    backgroundColor: 'rgba(37, 211, 102, 0.08)',
  },
  cardEmoji: { fontSize: 24 },
  cardDetails: { flex: 1 },
  cardTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: colors.textPrimary 
  },
  cardDesc: { 
    fontSize: 13, 
    color: colors.textSecondary, 
    marginTop: 2 
  },
  footerButtons: { gap: 12 },
  restartButton: {
    backgroundColor: colors.surface,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  restartText: { 
    color: colors.textPrimary, 
    fontWeight: '600', 
    fontSize: 15 
  },
});