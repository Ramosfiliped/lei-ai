import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { LawCard } from '../../components/LawCard';
import { useRouter } from 'expo-router';

type LawStatus = 'Em Tramitação' | 'Aprovada' | 'Vetada';
type DeputyVote = 'Sim' | 'Não' | 'Abstenção';

interface Law {
  id: string;
  title: string;
  description: string;
  status: LawStatus;
  date: string;
  deputyVote: DeputyVote;
}

// Dados mockados para exemplo
const mockLaws: Law[] = [
  {
    id: '1',
    title: 'PL 1234/2023 - Reforma da Previdência',
    description: 'Proposta de reforma do sistema previdenciário com alterações nos requisitos para aposentadoria.',
    status: 'Em Tramitação',
    date: '15/03/2024',
    deputyVote: 'Sim',
  },
  {
    id: '2',
    title: 'PL 5678/2023 - Lei de Proteção de Dados',
    description: 'Regulamentação sobre o tratamento e proteção de dados pessoais no setor público.',
    status: 'Aprovada',
    date: '10/03/2024',
    deputyVote: 'Sim',
  },
  {
    id: '3',
    title: 'PL 9012/2023 - Incentivos Fiscais',
    description: 'Proposta de incentivos fiscais para empresas que investirem em tecnologia verde.',
    status: 'Vetada',
    date: '05/03/2024',
    deputyVote: 'Não',
  },
  {
    id: '4',
    title: 'PL 3456/2023 - Educação Digital',
    description: 'Programa de inclusão digital nas escolas públicas.',
    status: 'Em Tramitação',
    date: '01/03/2024',
    deputyVote: 'Abstenção',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  const handleLawPress = (lawId: string) => {
    // Aqui você pode implementar a navegação para a tela de detalhes da lei
    console.log('Lei selecionada:', lawId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Leis e Votações</Text>
        <Text style={styles.subtitle}>Acompanhe as leis em tramitação e seus votos</Text>
      </View>
      
      <FlatList
        data={mockLaws}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LawCard
            title={item.title}
            description={item.description}
            status={item.status}
            date={item.date}
            deputyVote={item.deputyVote}
            onPress={() => handleLawPress(item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  listContent: {
    paddingVertical: 8,
  },
});
