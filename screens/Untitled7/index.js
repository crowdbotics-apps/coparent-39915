import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';

const Calendar = () => {
  const [month, setMonth] = useState(new Date());
  const [day, setDay] = useState(new Date());
  const [schedule, setSchedule] = useState({});
  useEffect(() => {
    const today = new Date();
    setMonth(today);
    setDay(today);
  }, []);

  const handleMonthChange = event => {
    const newMonth = new Date(event.target.value);
    setMonth(newMonth);
  };

  const handleDayChange = event => {
    const newDay = new Date(event.target.value);
    setDay(newDay);
  };

  const handleScheduleChange = event => {
    setSchedule(event.target.value);
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calendar</Text>
        <Button title="Previous Month" onPress={() => setMonth(month.getMonth() - 1)} />
        <Text style={styles.month}>{month.toLocaleString('en-US', {
          month: 'long'
        })}</Text>
        <Button title="Next Month" onPress={() => setMonth(month.getMonth() + 1)} />
      </View>
      <ScrollView>
        <View style={styles.days}>
          {Array(31).fill(0).map((_, day) => <View key={day} style={styles.day}>
              <Text style={styles.dayNumber}>{day + 1}</Text>
              <Button title="Schedule" onPress={() => setSchedule({
            day,
            month
          })} />
            </View>)}
        </View>
        <View style={styles.schedule}>
          {schedule && <View>
              <Text style={styles.scheduleTitle}>Schedule for {month.toLocaleString('en-US', {
              month: 'long'
            })}</Text>
              <ScrollView>
                {Array(24).fill(0).map((_, hour) => <View key={hour} style={styles.hour}>
                    <Text style={styles.hourNumber}>{hour}</Text>
                    <Text style={styles.hourEvent}>{schedule[hour]}</Text>
                  </View>)}
              </ScrollView>
            </View>}
        </View>
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  month: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  days: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  day: {
    width: 100,
    height: 50,
    padding: 10
  },
  dayNumber: {
    fontSize: 16
  },
  schedule: {
    flex: 1
  },
  scheduleTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  hour: {
    width: 100,
    height: 50,
    padding: 10
  },
  hourNumber: {
    fontSize: 16
  },
  hourEvent: {
    fontSize: 16
  }
});
export default Calendar;