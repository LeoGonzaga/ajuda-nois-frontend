import React, { PureComponent } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Janeiro',
    uv: 400,
    pv: 240,
  },
  {
    name: 'Fevereiro',
    uv: 300,
    pv: 198,
  },
  {
    name: 'Março',
    uv: 200,
    pv: 900,
  },
  {
    name: 'Abril',
    uv: 80,
    pv: 108,
  },
  {
    name: 'Maio',
    uv: 190,
    pv: 200,
  },
  {
    name: 'Junho',
    uv: 290,
    pv: 300,
  },
  {
    name: 'Julho',
    uv: 490,
    pv: 300,
  },
];

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
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
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
