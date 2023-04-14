import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SetupPage = () => {
  const [parent1FirstName, setParent1FirstName] = useState('');
  const [parent1Address, setParent1Address] = useState('');
  const [parent1PhoneNumber, setParent1PhoneNumber] = useState('');
  const [parent1WorkPhoneNumber, setParent1WorkPhoneNumber] = useState('');
  const [parent2FirstName, setParent2FirstName] = useState('');
  const [parent2Address, setParent2Address] = useState('');
  const [parent2PhoneNumber, setParent2PhoneNumber] = useState('');
  const [parent2WorkPhoneNumber, setParent2WorkPhoneNumber] = useState('');
  return <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileLabel}>Parent #1</Text>
        <TextInput style={styles.input} placeholder="First Name" value={parent1FirstName} onChangeText={setParent1FirstName} />
        <TextInput style={styles.input} placeholder="Address" value={parent1Address} onChangeText={setParent1Address} />
        <TextInput style={styles.input} placeholder="Phone Number" value={parent1PhoneNumber} onChangeText={setParent1PhoneNumber} />
        <TextInput style={styles.input} placeholder="Work Phone Number" value={parent1WorkPhoneNumber} onChangeText={setParent1WorkPhoneNumber} />
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.profileLabel}>Parent #2</Text>
        <TextInput style={styles.input} placeholder="First Name" value={parent2FirstName} onChangeText={setParent2FirstName} />
        <TextInput style={styles.input} placeholder="Address" value={parent2Address} onChangeText={setParent2Address} />
        <TextInput style={styles.input} placeholder="Phone Number" value={parent2PhoneNumber} onChangeText={setParent2PhoneNumber} />
        <TextInput style={styles.input} placeholder="Work Phone Number" value={parent2WorkPhoneNumber} onChangeText={setParent2WorkPhoneNumber} />
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  profileContainer: {
    marginBottom: 20
  },
  profileLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});
export default SetupPage;