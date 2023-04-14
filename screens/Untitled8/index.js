import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const SharedCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});

  const onDayPress = day => {
    setSelectedDate(day.dateString);
  };

  useEffect(() => {
    // Fetch events for selected date from backend API
    // and update the `events` state
    fetchEvents(selectedDate);
  }, [selectedDate]);

  const fetchEvents = date => {
    // Use your backend API to fetch events for the selected date
    // and update the `events` state
    // This is just an example, you will need to replace this with your own API
    const url = `https://your-api-url.com/events?date=${date}`;
    fetch(url).then(response => response.json()).then(data => {
      setEvents(data);
    }).catch(error => {
      console.error(error);
    });
  };

  return <View style={styles.container}>
      <Calendar onDayPress={onDayPress} />
      {selectedDate && <View style={styles.eventsContainer}>
          <Text style={styles.dateText}>{selectedDate}</Text>
          {
        /* Display events for selected date */
      }
          {events.map(event => <View key={event.id} style={styles.eventItem}>
              <Text>{event.title}</Text>
              <Text>{event.startTime} - {event.endTime}</Text>
            </View>)}
        </View>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  eventsContainer: {
    marginTop: 20
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  eventItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10
  }
});
export default SharedCalendarPage;