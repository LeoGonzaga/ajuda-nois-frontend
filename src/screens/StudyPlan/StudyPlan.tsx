import React from 'react';

import Title from '@components/Title';

import Card from './components/Card';
import Sidebar from './components/Sidebar';
import Weekday from './components/Weekday';
import { Container } from './styles';

export const StudyPlan: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Title
          text="Cronograma de"
          contrast="estudos"
          subText="Selecione um dia para filtrar"
        />
        <Weekday />
        <div className="cards">
          <Card
            status="idle"
            startTime="10:00"
            endTime="15:30"
            subject="Matemática"
            topic="Trigonometria"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat ornare tincidunt. Ut eleifend eros ac mauris sagittis sollicitudin. Nam varius mi arcu. Nulla placerat erat quam, vitae ultricies nunc auctor et. Nam maximus non lorem et euismod."
          />
          <Card
            status="completed"
            startTime="10:00"
            endTime="15:30"
            subject="Matemática"
            topic="Trigonometria"
            text="Fusce id vehicula mauris, vel accumsan neque. Curabitur quis dui aliquam, aliquam metus eget, consequat quam. Vivamus ut mollis orci. Nullam iaculis, eros vitae vehicula venenatis, turpis turpis vulputate tortor, in porta mi nisi a lacus. Sed finibus vulputate sapien quis fringilla."
          />
          <Card
            status="failed"
            startTime="10:00"
            endTime="15:30"
            subject="Matemática"
            topic="Trigonometria"
            text="Quisque volutpat placerat scelerisque. Ut et pretium odio, vel viverra purus."
          />
        </div>
      </div>
      <Sidebar />
    </Container>
  );
};
