import './App.css';
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

// Sample chart data
const pdata = [
	{
		name: '28.09',
		AssetTVL: 11,
		time: 120
	},
	{
		name: '29.09',
		AssetTVL: 15,
		time: 12
	},
	{
		name: '30.09',
		AssetTVL: 5,
		time: 10
	},
	{
		name: '01.10',
		AssetTVL: 10,
		time: 5
	},
	{
		name: '01.10',
		AssetTVL: 9,
		time: 4
	},
	{
		name: '01.10',
		AssetTVL: 10,
		time: 8
	},
];

function App() {
	return (
		<>
			<h1 className="text-heading">
				Convex : steth
			</h1>
			<ResponsiveContainer width="80%" aspect={3}>
				<LineChart data={pdata} margin={{ right: 200 }}>
					<CartesianGrid />
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="AssetTVL"
						stroke="black" activeDot={{ r: 8 }} />
					<Line dataKey="time"
						stroke="red" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>

		</>
	);
}

export default App;

