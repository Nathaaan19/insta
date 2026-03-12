import { StyleSheet, Text, View } from 'react-native';

interface InstagramPostCaptionProps {
  textColor: string;
}

export function InstagramPostCaption({ textColor }: InstagramPostCaptionProps) {
  return (
    <View style={styles.caption}>
      <Text style={[styles.captionText, { color: textColor }]}>
        <Text style={styles.bold}>usuario_insta </Text>
        Uma foto incrível do dia! 🌅✨
      </Text>
      <Text style={styles.timestamp}>há 2 horas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  caption: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  captionText: {
    fontSize: 13,
    lineHeight: 18,
  },
  bold: {
    fontWeight: '600',
  },
  timestamp: {
    color: '#65676b',
    fontSize: 11,
    marginTop: 4,
  },
});
