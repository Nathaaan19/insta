import { StyleSheet, Text, View } from 'react-native';

interface InstagramPostStatsProps {
  textColor: string;
}

export function InstagramPostStats({ textColor }: InstagramPostStatsProps) {
  return (
    <View style={styles.stats}>
      <Text style={[styles.statsText, { color: textColor }]}>
        <Text style={styles.bold}>1.234 curtidas</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stats: {
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  statsText: {
    fontSize: 13,
  },
  bold: {
    fontWeight: '600',
  },
});
