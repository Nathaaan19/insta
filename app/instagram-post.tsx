import { Image, StyleSheet, View } from 'react-native';
import { InstagramPostActions } from './instagram-post-actions';
import { InstagramPostCaption } from './instagram-post-caption';
import { InstagramPostHeader } from './instagram-post-header';
import { InstagramPostStats } from './instagram-post-stats';

interface InstagramPostProps {
  textColor: string;
  borderColor: string;
  isDark: boolean;
}

export function InstagramPost({ textColor, borderColor, isDark }: InstagramPostProps) {
  return (
    <View style={styles.post}>
      <InstagramPostHeader textColor={textColor} borderColor={borderColor} />

      <Image
        source={{ uri: 'https://thispersondoesnotexist.com/' }}
        style={styles.postImage}
      />

      <InstagramPostActions textColor={textColor} borderColor={borderColor} />
      <InstagramPostStats textColor={textColor} />
      <InstagramPostCaption textColor={textColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 400,
  },
});
