import React, { PureComponent } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const barColors = ['#6F52ED', '#00BF20', '#CA1E3C', '#FBBC05'];

const data = [
  {
    name: '≤5',
    uv: 4000,
    acertos: 22,
    amt: 45,
  },
  {
    name: '≤10',
    uv: 3000,
    acertos: 1,
    amt: 22,
  },
  {
    name: '≤15',
    uv: 2000,
    acertos: 19,
    amt: 12,
  },
  {
    name: '≤20',
    uv: 2780,
    acertos: 2,
    amt: 22,
  },
  {
    name: '≤25',
    uv: 4000,
    acertos: 5,
    amt: 45,
  },
  {
    name: '≤30',
    uv: 3000,
    acertos: 13,
    amt: 22,
  },
  {
    name: '≤35',
    uv: 2000,
    acertos: 27,
    amt: 12,
  },
  {
    name: '≤40',
    uv: 2780,
    acertos: 15,
    amt: 22,
  },
  {
    name: '≤45',
    uv: 2780,
    acertos: 11,
    amt: 22,
  },
];

export class SpecificBarChartContainer extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: -30,
            bottom: 20,
          }}
          barSize={10}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            type="number"
            domain={[0, 30]}
            tickCount={7}
            interval="preserveStartEnd"
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Bar
            dataKey="acertos"
            background={{ fill: 'transparent' }}
            fill={barColors[0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
