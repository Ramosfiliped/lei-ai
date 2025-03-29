import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface LawCardProps {
  title: string;
  description: string;
  status: 'Em Tramitação' | 'Aprovada' | 'Vetada';
  date: string;
  deputyVote?: 'Sim' | 'Não' | 'Abstenção';
  onPress: () => void;
}

export const LawCard: React.FC<LawCardProps> = ({
  title,
  description,
  status,
  date,
  deputyVote,
  onPress,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Em Tramitação':
        return '#FFA500';
      case 'Aprovada':
        return '#4CAF50';
      case 'Vetada':
        return '#F44336';
      default:
        return '#757575';
    }
  };

  const getVoteColor = () => {
    switch (deputyVote) {
      case 'Sim':
        return '#4CAF50';
      case 'Não':
        return '#F44336';
      case 'Abstenção':
        return '#FFA500';
      default:
        return '#757575';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      </View>
      
      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>
      
      <View style={styles.footer}>
        <Text style={styles.date}>{date}</Text>
        {deputyVote && (
          <View style={[styles.voteBadge, { backgroundColor: getVoteColor() }]}>
            <Text style={styles.voteText}>Voto: {deputyVote}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  voteBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  voteText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
}); 