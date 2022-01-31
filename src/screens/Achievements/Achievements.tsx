import React from 'react';

import Title from '@components/Title';

import Achievement from './components/Achievement';
import Level from './components/Level';
import Share from './components/Share';
import {
  AchievementsContainer,
  Container,
  Content,
  LevelContainer,
  ShareContainer,
} from './styles';

export const Achievements: React.FC = () => {
  const data = [
    {
      name: 'Parabéns',
      description: 'Você conseguiu resolver todos os exercícios essa semana!',
      exp: 1000,
      achieved: true,
      image:
        'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-achievement-professional-mentorship-inipagistudio-mixed-inipagistudio.png',
    },
    {
      name: 'Teste',
      description: 'Este é um teste',
      exp: 2000,
      achieved: true,
      image:
        'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-achievement-professional-mentorship-inipagistudio-mixed-inipagistudio.png',
    },
    {
      name: 'Ainda não',
      description: 'Esse ainda não aparece',
      exp: 1000,
      achieved: false,
      image:
        'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-achievement-professional-mentorship-inipagistudio-mixed-inipagistudio.png',
    },
    {
      name: 'Secreto',
      description: 'Essa conquista é secreta até mesmo para os devs',
      exp: 10000,
      achieved: false,
      image:
        'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-achievement-professional-mentorship-inipagistudio-mixed-inipagistudio.png',
    },
    {
      name: 'Texto Curto',
      description: 'POG',
      exp: 600,
      achieved: true,
      image:
        'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-achievement-professional-mentorship-inipagistudio-mixed-inipagistudio.png',
    },
    {
      name: 'Texto Longo',
      description:
        'Esse é um texto mais longo só pra ver até onde o texto deveria ir e ver se o texto não vai quebrar o layout',
      exp: 666,
      achieved: false,
      image:
        'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-achievement-professional-mentorship-inipagistudio-mixed-inipagistudio.png',
    },
    {
      name: 'Pikachu',
      description: 'Use choque do trovão!',
      exp: 100,
      achieved: true,
      image:
        'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-achievement-professional-mentorship-inipagistudio-mixed-inipagistudio.png',
    },
    {
      name: 'Front end',
      description: 'É melhor que back-end',
      exp: 100,
      achieved: true,
      image:
        'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-achievement-professional-mentorship-inipagistudio-mixed-inipagistudio.png',
    },
    {
      name: '???',
      description: '???',
      exp: 1000,
      achieved: false,
      image:
        'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-achievement-professional-mentorship-inipagistudio-mixed-inipagistudio.png',
    },
    {
      name: 'Lorem Ipsum',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beentandard dummy text ever sin',
      exp: 10000,
      achieved: false,
      image:
        'https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/344/external-achievement-professional-mentorship-inipagistudio-mixed-inipagistudio.png',
    },
  ];
  let totalExp = 0;

  // Ordena o array de data para mostrar as conquistas desbloqueadas primeiro
  data.sort((a, b) => (a.achieved === b.achieved ? 0 : a.achieved ? -1 : 1));

  return (
    <Container>
      {/* Screen title */}
      <Title
        text="Suas"
        contrast="conquistas"
        subText="A cada tarefa cumprida ou meta batida, você libera uma medalha
                 e ganha experiência para ir para o próximo nivel"
      />

      <Content>
        <AchievementsContainer>
          {data?.map(
            ({ name, description, exp, achieved, image }) => (
              achieved ? (totalExp += exp) : (totalExp += 0),
              (
                <Achievement
                  name={name}
                  description={description}
                  exp={exp}
                  achieved={achieved}
                  key={name}
                  image={image}
                />
              )
            )
          )}
        </AchievementsContainer>

        <Container>
          <LevelContainer>
            <Level exp={totalExp} />
          </LevelContainer>
          <ShareContainer>
            <Share />
          </ShareContainer>
        </Container>
      </Content>
    </Container>
  );
};
