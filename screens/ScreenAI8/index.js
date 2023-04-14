import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

const ScheduleScreen = () => {
  const [scheduleType, setScheduleType] = useState('');
  const [startDay, setStartDay] = useState('');
  return <View style={styles.container}>
      <Text style={styles.title}>Schedule</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Schedule Type</Text>
        <Picker selectedValue={scheduleType} onValueChange={itemValue => setScheduleType(itemValue)} style={styles.input}>
          <Picker.Item label="Week on/Week off" value="weekOnOff" />
          <Picker.Item label="2-2-5-5" value="twoTwoFiveFive" />
          <Picker.Item label="Every other weekend" value="everyOtherWeekend" />
          <Picker.Item label="Every weekend" value="everyWeekend" />
        </Picker>
        <Text style={styles.label}>Start Day</Text>
        <Picker selectedValue={startDay} onValueChange={itemValue => setStartDay(itemValue)} style={styles.input}>
          <Picker.Item label="Monday" value="monday" />
          <Picker.Item label="Tuesday" value="tuesday" />
          <Picker.Item label="Wednesday" value="wednesday" />
          <Picker.Item label="Thursday" value="thursday" />
          <Picker.Item label="Friday" value="friday" />
          <Picker.Item label="Saturday" value="saturday" />
          <Picker.Item label="Sunday" value="sunday" />
        </Picker>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  form: {
    width: '80%'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10
  }
});
export default ScheduleScreen;