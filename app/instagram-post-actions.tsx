import EvilIcons from '@react-native-vector-icons/evil-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface InstagramPostActionsProps {
  textColor: string;
  borderColor: string;
}

export function InstagramPostActions({ textColor, borderColor }: InstagramPostActionsProps) {
  return (
    <View style={[styles.actions, { borderBottomColor: borderColor }]}>
      <View style={styles.actionsRow}>
        <TouchableOpacity>
          <EvilIcons name="heart" size={24} color={textColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <EvilIcons name="comment" size={24} color={textColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 16,
  },
});
