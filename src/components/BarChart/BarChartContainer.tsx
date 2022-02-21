import React, { PureComponent } from 'react';

import { COLORS } from '@themes/colors';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Exatas',
    uv: 4000,
    acertos: 45,
    amt: 45,
  },
  {
    name: 'Natureza',
    uv: 3000,
    acertos: 23,
    amt: 22,
  },
  {
    name: 'Linguagem',
    uv: 2000,
    acertos: 33,
    amt: 12,
  },
  {
    name: 'Humanas',
    uv: 2780,
    acertos: 22,
    amt: 22,
  },
];

export class BarChartContainer extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="acertos"
            fill={COLORS.SECONDARY}
            background={{ fill: '#eee' }}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
