import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';
import { colors } from '../theme/colors';

export const SosHeader = () => {
  const dialEmergency = (number: string, serviceName: string) => {
    Alert.alert(
      `Ligar para o ${serviceName}`,
      `Deseja iniciar uma ligação gratuita para o ${number}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Ligar Agora', onPress: () => Linking.openURL(`tel:${number}`) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.supportLabel}>Ajuda emergencial 24h:</Text>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity 
          style={[styles.sosButton, styles.cvvButton]}
          onPress={() => dialEmergency('188', 'CVV (Apoio Emocional)')}
          accessibilityLabel="Ligue para o CVV no 188"
          accessibilityRole="button"
        >
          <Text style={styles.buttonEmoji}>💛</Text>
          <Text style={styles.buttonText}>CVV 188</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.sosButton, styles.samuButton]}
          onPress={() => dialEmergency('192', 'SAMU (Emergência Médica)')}
          accessibilityLabel="Ligue para o SAMU no 192"
          accessibilityRole="button"
        >
          <Text style={styles.buttonEmoji}>📞</Text>
          <Text style={styles.buttonText}>SAMU 192</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070D1F',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  supportLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '500',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: 8,
  },
  sosButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    minHeight: 40,
  },
  cvvButton: {
    backgroundColor: 'rgba(251, 191, 36, 0.15)',
    borderWidth: 1,
    borderColor: colors.warningYellow,
  },
  samuButton: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    borderWidth: 1,
    borderColor: colors.dangerRed,
  },
  buttonEmoji: {
    fontSize: 12,
    marginRight: 4,
  },
  buttonText: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 12,
  },
});