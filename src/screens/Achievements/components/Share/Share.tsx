import { useState } from 'react';
import { IoMdCopy } from 'react-icons/io';

import Flex from '@components/Flex';
import Text from '@components/Text';
import { COLORS } from '@themes/colors';
import { useRouter } from 'next/router';

import { EmailShare } from './icons/EmailShare';
import { FacebookShare } from './icons/FacebookShare';
import { LinkedinShare } from './icons/LinkedinShare';
import { TelegramShare } from './icons/TelegramShare';
import { TwitterShare } from './icons/TwitterShare';
import { WhatsappShare } from './icons/WhatsappShare';
import { Container, NoHeightFlex } from './styles';

type Props = {
  url: string;
};

export const Share = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const { pathname } = useRouter();
  const url = `http://localhost:3000${pathname}`;

  const copyToClipBoard = async ({ url }: Props) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopySuccess('Copiado!');
    } catch (err) {
      setCopySuccess('Erro ao copiar!');
    }
  };

  return (
    <Container>
      <Text size={14} bold color={COLORS.TEXT}>
        Compartilhar com
      </Text>

      {/* Ícones */}
      <span>
        <Flex direction="row" justify="space-around">
          <FacebookShare url={url} />
          <TelegramShare url={url} />
          <TwitterShare url={url} />
          <WhatsappShare url={url} />
          <LinkedinShare url={url} />
          <EmailShare url={url} />
        </Flex>
      </span>

      <Flex direction="column">
        <Text size={12} color={COLORS.TEXT} center>
          Ou compartilhe com um link
        </Text>
        <button onClick={() => copyToClipBoard({ url })}>
          <Text size={14} color={COLORS.TEXT}>
            {url}
          </Text>
          <IoMdCopy size={22} className="active" />
        </button>
      </Flex>
    </Container>
  );
};
