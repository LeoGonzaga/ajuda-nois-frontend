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

type DataProps = {
  name: string;
  acertos: number;
  uv: number;
  amt: number;
};

type Props = {
  data: Array<DataProps>;
  smal: boolean;
};

export class SpecificBarChartContainer extends PureComponent<Props> {
  render() {
    const { data, small } = this.props;

    const barColor = '#6F52ED';

    return (
      <ResponsiveContainer width="100%" height={35 * data?.length}>
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
            width={small ? 60 : 110}
            padding={{ top: 15, bottom: 15 }}
            dx={small ? -50 : -100}
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
            // domain={[0, 100]}
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
