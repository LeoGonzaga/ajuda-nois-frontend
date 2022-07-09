import React, { PureComponent } from 'react';

import { COLORS } from '@themes/colors';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

type DataProps = {
  name: string;
  value: number;
};

type Props = {
  data: Array<DataProps>;
};

const barColors = ['#6F52ED', '#FBBC05', '#CA1E3C', '#00BF20'];

export default class PieGraph extends PureComponent<Props> {
  render() {
    const { data } = this.props;

    return (
      <PieChart width={280} height={200}>
        <Pie
          data={data}
          cx={140}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
