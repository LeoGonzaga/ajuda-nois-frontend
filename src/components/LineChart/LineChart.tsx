import React, { PureComponent } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

type DataProps = {
  name: string;
  Horas: number;
};

type Props = {
  data: Array<DataProps>;
};

export class LineChartContainer extends PureComponent<Props> {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="98%" height="80%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 20]} />
          <Legend />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Horas"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
