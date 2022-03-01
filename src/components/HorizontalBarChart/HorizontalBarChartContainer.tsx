import React, { PureComponent } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const barColors = ['#FBBC05', '#00BF20', '#CA1E3C', '#6F52ED'];

const data = [
  {
    name: 'Ciências Humanas e suas Tecnologias',
    acertos: 45,
    uv: 2780,
    amt: 22,
  },
  {
    name: 'Ciências da Natureza e suas Tecnologias',
    acertos: 23,
    uv: 3000,
    amt: 22,
  },
  {
    name: 'Linguagens, Códigos e suas Tecnologias',
    acertos: 33,
    uv: 2000,
    amt: 12,
  },
  {
    name: 'Matemática e suas Tecnologias',
    acertos: 22,
    uv: 4000,
    amt: 45,
  },
];

export class HorizontalBarChartContainer extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          barSize={20}
          layout="vertical"
          margin={{
            top: 0,
            right: 5,
            left: 5,
            bottom: 20,
          }}
        >
          <YAxis
            type="category"
            dataKey="name"
            scale="point"
            width={170}
            padding={{ top: 25, bottom: 25 }}
            dx={-160}
            stroke="#CED4DA"
            tick={{ fontSize: 15, textAnchor: 'start' }}
          />
          <XAxis
            type="number"
            domain={[0, 45]}
            tickCount={16}
            interval="preserveStartEnd"
            axisLine={false}
            dy={-5}
            orientation="top"
            tick={{ fontSize: 14 }}
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="1 5" horizontal={false} />
          <Bar dataKey="acertos" background={{ fill: 'transparent' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
