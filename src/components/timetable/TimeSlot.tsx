import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface TimeSlotProps {
  time: string;
}

const { height } = Dimensions.get('window');
const slotHeight = height / 10;  // Adjust divisor to suit your requirements

export const TimeSlot = ({ time }: TimeSlotProps) => {
  return (
    <View style={[styles.container, { height: slotHeight }]}>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    paddingLeft: 8,
  },
  text: {
    color: '#666',
    fontSize: 12,
  },
});
