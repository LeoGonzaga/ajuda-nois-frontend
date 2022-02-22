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
  Cell,
} from 'recharts';

const barColors = ['#6F52ED', '#00BF20', '#CA1E3C', '#FBBC05'];

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
          barSize={30}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 40, right: 40 }}
          />
          <YAxis type="number" domain={[0, 45]} />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
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
