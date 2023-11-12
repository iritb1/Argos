import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {

    const data = [
        {
          name: '1/11',
          Tira: 4000,
          Aman: 2400,
          Zayad: 3000,
          amt: 2400,
        },
        {
          name: '2/11',
          Tira: 3000,
          Aman: 1398,
          Zayad: 3560,
          amt: 2210,
        },
        {
          name: '3/11',
          Tira: 2000,
          Aman: 9800,
          Zayad: 1560,
          amt: 2290,
        },
        {
          name: '4/11',
          Tira: 2780,
          Aman: 3908,
          Zayad: 2660,
          amt: 2000,
        },
        {
          name: '5/11',
          Tira: 1890,
          Aman: 4800,
          Zayad: 7560,
          amt: 2181,
        },
        {
          name: '6/11',
          Tira: 2390,
          Aman: 3800,
          Zayad: 4560,
          amt: 2500,
        },
        {
          name: '7/11',
          Tira: 3490,
          Aman: 4300,
          Zayad: 6860,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Tira - Updates in...</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>---</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Tira - Updates in...</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>---</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Zayad - Updates in...</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>---</h1> 
                {/* work in progress timer will be implemented here */}
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>16</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
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
                <Legend />
                <Bar dataKey="Tira" fill="#8884d8" />
                <Bar dataKey="Aman" fill="#82ca9d" />
                <Bar dataKey="Zayad" fill="#FFF4BD" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
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
                <Legend />
                <Line type="monotone" dataKey="Tira" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Aman" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Zayad" stroke="#FFF4BD" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home