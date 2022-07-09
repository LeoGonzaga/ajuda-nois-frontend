import React from 'react';

import Text from '@components/Text';
import Title from '@components/Title';

import Achievement from './components/Achievement';
import Level from './components/Level';
import {
  AchievementsContainer,
  Container,
  Content,
  LevelContainer,
} from './styles';
import useAchievements from './useAchievements';
import ToNextLevel from './components/ToNextLevel';

export const Achievements = (): JSX.Element => {
  const { data, loading, enabled } = useAchievements();

  let totalExp = 0;
  const levelProgression = [
    0, 100, 500, 1000, 2000, 3500, 5000, 7500, 10000, 15000,
  ];

  // Ordena o array de data para mostrar as conquistas desbloqueadas primeiro
  // data.sort((a, b) => (a.achieved === b.achieved ? 0 : a.achieved ? -1 : 1));

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
          {data.length > 0 &&
            data?.map(({ _id, name, description, experience, icon }) => {
              totalExp += experience;
              return (
                <Achievement
                  name={name}
                  description={description}
                  exp={experience}
                  achieved={enabled.includes(_id)}
                  key={name}
                  image={icon}
                />
              );
            })}
        </AchievementsContainer>

        <Container>
          <LevelContainer>
            <Level exp={totalExp} progression={levelProgression} />
            <ToNextLevel exp={totalExp} progression={levelProgression} />
          </LevelContainer>
        </Container>
      </Content>
    </Container>
  );
};
