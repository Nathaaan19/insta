import FontAwesomeIcon from '@react-native-vector-icons/fontawesome-free-solid';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface InstagramPostHeaderProps {
  textColor: string;
  borderColor: string;
}

export function InstagramPostHeader({ textColor, borderColor }: InstagramPostHeaderProps) {
  return (
    <View style={[styles.postHeader, { borderBottomColor: borderColor }]}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: 'https://thispersondoesnotexist.com/' }}
          style={styles.avatar}
        />
        <View>
          <Text style={[styles.username, { color: textColor }]}>usuario_insta</Text>
          <Text style={styles.location}>São Paulo, Brasil</Text>
        </View>
      </View>
      <TouchableOpacity>
        <FontAwesomeIcon name="ellipsis-v" size={24} color={textColor} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  userInfo: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    fontSize: 14,
    fontWeight: '600',
  },
  location: {
    fontSize: 12,
    color: '#65676b',
  },
});
