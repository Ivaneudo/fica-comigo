import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { SosHeader } from '../components/SosHeader';
import { BreathingGuide } from '../components/BreathingGuide';
import { colors } from '../theme/colors';

const GROUNDING_STEPS = [
  { step: '5', label: 'Coisas que você consegue VER ao seu redor agora.' },
  { step: '4', label: 'Coisas que você pode TOCAR fisicamente.' },
  { step: '3', label: 'Sons que você consegue OUVIR perto ou longe.' },
  { step: '2', label: 'Cheiros que você consegue SENTIR ou lembrar.' },
  { step: '1', label: 'Uma coisa boa sobre VOCÊ neste instante.' },
];

export const RegulationScreen = ({ route, navigation }: any) => {
  const [mode, setMode] = useState<'breathe' | 'grounding'>(route.params?.mode || 'breathe');
  const [activeGroundingStep, setActiveGroundingStep] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <SosHeader />
      <View style={styles.container}>
        {/* Toggle superior suave */}
        <View style={styles.toggleBar}>
          <TouchableOpacity 
            style={[styles.toggleBtn, mode === 'breathe' && styles.toggleBtnActive]}
            onPress={() => setMode('breathe')}
          >
            <Text style={[styles.toggleText, mode === 'breathe' && styles.toggleTextActive]}>Respiração 4-7-8</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.toggleBtn, mode === 'grounding' && styles.toggleBtnActive]}
            onPress={() => setMode('grounding')}
          >
            <Text style={[styles.toggleText, mode === 'grounding' && styles.toggleTextActive]}>Aterramento 5-4-3-2-1</Text>
          </TouchableOpacity>
        </View>

        {mode === 'breathe' ? (
          <View style={styles.exerciseArea}>
            <BreathingGuide />
            <Text style={styles.infoGuide}>
              Apenas siga o círculo. Este ciclo acalma seu sistema nervoso simpático.
            </Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.groundingArea}>
            <Text style={styles.stepTitle}>Foque os sentidos no presente:</Text>
            {GROUNDING_STEPS.map((item, index) => {
              const isCurrent = index === activeGroundingStep;
              return (
                <TouchableOpacity 
                  key={index} 
                  style={[styles.stepCard, isCurrent && styles.activeStepCard]}
                  onPress={() => setActiveGroundingStep(index)}
                  activeOpacity={0.8}
                >
                  <View style={[styles.badge, isCurrent && styles.badgeActive]}>
                    <Text style={styles.badgeText}>{item.step}</Text>
                  </View>
                  <Text style={[styles.stepDesc, isCurrent && styles.stepDescActive]}>{item.label}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}

        <TouchableOpacity 
          style={styles.nextButton}
          onPress={() => navigation.navigate('NextSteps')}
        >
          <Text style={styles.nextButtonText}>Concluir os 10 minutos →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1, padding: 20, justifyContent: 'space-between' },
  toggleBar: { flexDirection: 'row', backgroundColor: colors.cardBackground, borderRadius: 12, padding: 4 },
  toggleBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 8 },
  toggleBtnActive: { backgroundColor: colors.surface },
  toggleText: { color: colors.textSecondary, fontWeight: '600', fontSize: 13 },
  toggleTextActive: { color: colors.textPrimary },
  exerciseArea: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  infoGuide: { color: colors.textSecondary, textAlign: 'center', fontSize: 14, marginTop: 16, paddingHorizontal: 20 },
  groundingArea: { paddingVertical: 16, gap: 10 },
  stepTitle: { color: colors.textPrimary, fontSize: 16, fontWeight: '600', marginBottom: 6 },
  stepCard: {
    backgroundColor: colors.cardBackground,
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderColor: '#263456',
  },
  activeStepCard: { borderColor: colors.accentTeal, backgroundColor: '#203052' },
  badge: { width: 34, height: 34, borderRadius: 17, backgroundColor: colors.surface, justifyContent: 'center', alignItems: 'center' },
  badgeActive: { backgroundColor: colors.accentTeal },
  badgeText: { color: colors.textPrimary, fontWeight: '700' },
  stepDesc: { color: colors.textSecondary, flex: 1, fontSize: 14 },
  stepDescActive: { color: colors.textPrimary, fontWeight: '500' },
  nextButton: {
    backgroundColor: colors.accentTeal,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  nextButtonText: { color: '#0F172A', fontWeight: '700', fontSize: 16 },
});