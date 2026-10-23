import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { colors } from '../theme/colors';

export const BreathingGuide = () => {
  const [instruction, setInstruction] = useState('Inspire...');
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let isMounted = true;

    const runCycle = () => {
      if (!isMounted) return;

      // 1. Inspiração (4 segundos) -> Cresce
      setInstruction('Inspire pelo nariz (4s)...');
      Animated.timing(scale, {
        toValue: 2.2,
        duration: 4000,
        useNativeDriver: true,
      }).start(() => {
        if (!isMounted) return;

        // 2. Segurar (7 segundos) -> Mantém
        setInstruction('Segure o ar (7s)...');
        setTimeout(() => {
          if (!isMounted) return;

          // 3. Expiração (8 segundos) -> Encolhe
          setInstruction('Solte o ar devagar pela boca (8s)...');
          Animated.timing(scale, {
            toValue: 1,
            duration: 8000,
            useNativeDriver: true,
          }).start(() => {
            if (isMounted) runCycle();
          });
        }, 7000);
      });
    };

    runCycle();
    return () => {
      isMounted = false;
    };
  }, [scale]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ scale }] }]} />
      <Text style={styles.instructionText}>{instruction}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.accentTeal,
    opacity: 0.4,
    position: 'absolute',
  },
  instructionText: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    maxWidth: 240,
    lineHeight: 26,
  },
});