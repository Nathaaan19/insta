import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { InstagramPost } from './instagram-post';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const bgColor = isDark ? '#000' : '#fff';
  const textColor = isDark ? '#fff' : '#000';
  const borderColor = isDark ? '#262626' : '#e5e5e5';

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ScrollView style={[styles.container, { backgroundColor: bgColor }]}>
        <InstagramPost textColor={textColor} borderColor={borderColor} isDark={isDark} />
      </ScrollView>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
