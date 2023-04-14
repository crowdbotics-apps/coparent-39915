import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const handleDatePress = date => {
    setSelectedDate(date);
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth + 1);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth - 1);
  };

  const renderCalendar = () => {
    const monthStart = new Date(new Date().getFullYear(), currentMonth, 1).getDay();
    const daysInMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
    const calendar = [];

    for (let i = 0; i < monthStart; i++) {
      calendar.push(<View key={`empty-${i}`} style={styles.emptyDate} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(<TouchableOpacity key={i} onPress={() => handleDatePress(i)} style={styles.date}>
          <Text style={styles.dateText}>{i}</Text>
        </TouchableOpacity>);
    }

    return calendar;
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePrevMonth}>
          <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.month}>{new Date().toLocaleString('default', {
          month: 'long'
        })}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calendar}>{renderCalendar()}</View>
      {selectedDate && <View style={styles.scheduleDetail}>
          <Text style={styles.scheduleDetailText}>{`Schedule detail for ${selectedDate}`}</Text>
        </View>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  month: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  emptyDate: {
    width: '14%',
    height: 40
  },
  date: {
    width: '14%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dateText: {
    fontSize: 18
  },
  scheduleDetail: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10
  },
  scheduleDetailText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default CalendarScreen;