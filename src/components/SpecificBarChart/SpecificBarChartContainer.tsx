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

const barColor = '#6F52ED';

const data = [
  {
    name: 'Questão 1',
    acertos: 45,
    uv: 2780,
    amt: 22,
  },
  {
    name: 'Questão 2',
    acertos: 23,
    uv: 3000,
    amt: 22,
  },
  {
    name: 'Questão 3',
    acertos: 33,
    uv: 2000,
    amt: 12,
  },
  {
    name: 'Questão 4',
    acertos: 22,
    uv: 4000,
    amt: 45,
  },
  {
    name: 'Questão 5',
    acertos: 15,
    uv: 2780,
    amt: 22,
  },
  {
    name: 'Questão 6',
    acertos: 3,
    uv: 3000,
    amt: 22,
  },
  {
    name: 'Questão 7',
    acertos: 43,
    uv: 2000,
    amt: 12,
  },
  {
    name: 'Questão 8',
    acertos: 12,
    uv: 4000,
    amt: 45,
  },
  {
    name: 'Questão 9',
    acertos: 5,
    uv: 2780,
    amt: 22,
  },
  {
    name: 'Questão 10',
    acertos: 23,
    uv: 3000,
    amt: 22,
  },
  {
    name: 'Questão 11',
    acertos: 23,
    uv: 2000,
    amt: 12,
  },
  {
    name: 'Questão 12',
    acertos: 20,
    uv: 4000,
    amt: 45,
  },
  {
    name: 'Questão 13',
    acertos: 7,
    uv: 4000,
    amt: 45,
  },
];

export class SpecificBarChartContainer extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={35 * data.length}>
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
            width={110}
            padding={{ top: 15, bottom: 15 }}
            dx={-100}
            stroke="#CED4DA"
            tick={{ fontSize: 15, textAnchor: 'start' }}
          />
          <XAxis
            type="number"
            tickCount={16}
            interval="preserveStartEnd"
            axisLine={false}
            dy={-5}
            orientation="top"
            tick={{ fontSize: 14 }}
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="1 5" horizontal={false} />
          <Bar
            dataKey="acertos"
            background={{ fill: 'transparent' }}
            fill={barColor}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
