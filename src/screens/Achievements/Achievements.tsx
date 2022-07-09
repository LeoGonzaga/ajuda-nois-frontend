import React from 'react';

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

export const Achievements = (): JSX.Element => {
  const { data, enabled } = useAchievements();

  let totalExp = 0;

  return (
    <Container>
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
            <Level exp={totalExp} />
          </LevelContainer>
        </Container>
      </Content>
    </Container>
  );
};
