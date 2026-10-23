import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SosHeader } from '../components/SosHeader';
import { colors } from '../theme/colors';

export const CheckInScreen = ({ navigation }: any) => {
  useEffect(() => {
    console.log('[Auth] Usuário anônimo autenticado.');
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <SosHeader />
      <View style={styles.content}>
        <View style={styles.headerBox}>
          <Text style={styles.title}>Estamos aqui com você.</Text>
          <Text style={styles.subtitle}>
            Não precisa explicar nada agora. O que você sente que te ajudaria mais?
          </Text>
        </View>

        {/* marginVertical: 'auto' removido para evitar o crash */}
        <View style={styles.buttonList}>
          <TouchableOpacity 
            style={styles.cardButton} 
            onPress={() => navigation.navigate('Regulation', { mode: 'breathe' })}
            activeOpacity={0.8}
          >
            <Text style={styles.icon}>🍃</Text>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Quero ajuda para me acalmar</Text>
              <Text style={styles.cardSubtitle}>Exercícios guiados simples de respiração</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.cardButton} 
            onPress={() => navigation.navigate('Chat')}
            activeOpacity={0.8}
          >
            <Text style={styles.icon}>💬</Text>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Quero companhia silenciosa</Text>
              <Text style={styles.cardSubtitle}>Chat anônimo com alguém pronto para ouvir</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.cardButton} 
            onPress={() => navigation.navigate('Regulation', { mode: 'grounding' })}
            activeOpacity={0.8}
          >
            <Text style={styles.icon}>👣</Text>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>Sinto meus pensamentos fugindo</Text>
              <Text style={styles.cardSubtitle}>Técnica de aterramento (5-4-3-2-1)</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.cardButton, styles.urgentButton]} 
            onPress={() => Linking.openURL('tel:188')}
            activeOpacity={0.8}
          >
            <Text style={styles.icon}>🚨</Text>
            <View style={styles.cardTextContainer}>
              <Text style={[styles.cardTitle, styles.urgentTitle]}>Preciso de ajuda urgente</Text>
              <Text style={styles.cardSubtitle}>Conexão imediata com o CVV (188)</Text>
            </View>
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
    padding: 20, 
    justifyContent: 'space-around' 
  },
  headerBox: { 
    marginTop: 8 
  },
  title: { 
    fontSize: 24, 
    fontWeight: '700', 
    color: colors.textPrimary, 
    marginBottom: 8 
  },
  subtitle: { 
    fontSize: 15, 
    color: colors.textSecondary, 
    lineHeight: 22 
  },
  buttonList: { 
    gap: 12 
  },
  cardButton: {
    backgroundColor: colors.cardBackground,
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2D3A5F',
    minHeight: 74,
  },
  cardTextContainer: {
    flex: 1,
    marginLeft: 14,
  },
  urgentButton: {
    backgroundColor: 'rgba(239, 68, 68, 0.12)',
    borderColor: colors.dangerRed,
  },
  icon: { 
    fontSize: 26 
  },
  cardTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: colors.textPrimary 
  },
  urgentTitle: { 
    color: '#FCA5A5' 
  },
  cardSubtitle: { 
    fontSize: 13, 
    color: colors.textSecondary, 
    marginTop: 2 
  },
});