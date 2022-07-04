import React from 'react';

import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';

import { Container, ImageContainer, NoHeightFlex, Wrapper } from './styles';

type AchievementProps = {
  name: string;
  description: string;
  exp: number;
  achieved: boolean;
  image: string;
};

export const Achievement = ({
  name,
  description,
  exp,
  achieved,
  image,
}: AchievementProps): JSX.Element => {
  return (
    <Container achieved={achieved}>
      <Flex direction="row">
        <Wrapper>
          <ImageContainer achieved={achieved}>
            {<img src={image} alt="imagem" />}
          </ImageContainer>
        </Wrapper>
        <Flex direction="column" justify="center">
          <NoHeightFlex>
            <Text size={25} bold color={COLORS.QUATERNARY}>
              {name}
            </Text>
            {!!achieved && (
              <Text size={14} color={COLORS.TEXT}>
                + {exp} exp
              </Text>
            )}
          </NoHeightFlex>
          <Text size={14} color={COLORS.QUATERNARY}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};
