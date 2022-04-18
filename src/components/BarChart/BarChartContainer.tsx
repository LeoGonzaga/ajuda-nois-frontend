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

type DataProps = {
  name: string;
  acertos: number;
  uv: number;
  amt: number;
};

type Props = {
  data: Array<DataProps>;
};

export class BarChartContainer extends PureComponent<Props> {
  render() {
    const barColors = ['#6F52ED', '#00BF20', '#CA1E3C', '#FBBC05'];

    const { data } = this.props;
    return (
      <ResponsiveContainer width={400} height={300}>
        <BarChart
          width={400}
          height={350}
          data={data}
          margin={{
            top: 15,
            right: 0,
            left: -30,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 45, right: 45 }}
            tickCount={4}
            interval="preserveStartEnd"
            tick={{ fontSize: 16 }}
            stroke="#CED4DA90"
          />
          <YAxis
            type="number"
            domain={[0, 45]}
            interval="preserveStartEnd"
            stroke="#CED4DA90"
          />
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
