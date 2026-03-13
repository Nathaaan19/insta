import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

interface InstagramPostActionsProps {
  textColor: string;
  borderColor: string;
}

export function InstagramPostActions({ textColor, borderColor }: InstagramPostActionsProps) {
  return (
    <View style={[styles.actions, { borderBottomColor: borderColor }]}>
      <View style={styles.actionsRow}>
        <TouchableOpacity>
          <Icon name="heart-outline" size={24} style={styles.itens}>
            <Text style={styles.caract}>1.234</Text>
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="chatbubble-outline" size={24} style={styles.itens}>
             <Text style={styles.caract}>30</Text>
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="paper-plane-outline" size={24} style={styles.itens}>
            <Text style={styles.caract}>30</Text>
          </Icon>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons name="bookmark-outline" size={24} style={styles.itens} />
      </TouchableOpacity>
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
  caract: {
    fontSize: 16,
    alignItems: 'center',
  },
  itens: {
    color: '#ffffffff',
    alignItems: 'center',
  },
});
