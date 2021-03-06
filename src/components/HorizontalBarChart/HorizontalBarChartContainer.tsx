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

type Props = {
  data: any;
  small: boolean;
};

export class HorizontalBarChartContainer extends PureComponent<Props> {
  render() {
    const { data, small } = this.props;

    const barColors = ['#FBBC05', '#00BF20', '#CA1E3C', '#6F52ED'];

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
            width={small ? 90 : 170}
            padding={{ top: 25, bottom: 25 }}
            dx={small ? -89 : -160}
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
            {data?.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={barColors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
