import React, { PureComponent } from 'react';

import { COLORS } from '@themes/colors';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORSR = [COLORS.GREEN, COLORS.SUBJECT_BLUE, COLORS.RED, COLORS.YELLOW];

export default class PieGraph extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          cx={160}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORSR[index % COLORSR.length]}
            />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
