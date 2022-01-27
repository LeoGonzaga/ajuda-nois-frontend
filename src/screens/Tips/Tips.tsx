import React from 'react';

import Spacing from '@components/Spacing';
import Title from '@components/Title';

import Card from './components/Card';
import SelectSubject from './components/SelectSubject';
import { Container, WrapperCards } from './styles';

export const Tips: React.FC = () => {
  return (
    <Container>
      <Title text="Buscar" contrast="dicas" />
      <Spacing vertical={10} />
      <SelectSubject />
      <Spacing vertical={10} />
      <WrapperCards>
        <Card
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

"
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
        <Card
          text="lonate: If you use this site regularly and would like to help keep the site on the Internet, 
        please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated 
        - click here to donate using PayPal. Thank you for your support."
        />
      </WrapperCards>
    </Container>
  );
};
