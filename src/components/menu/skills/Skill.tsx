import { Chart } from "chart.js";
import * as React from 'react';
import "./Skills.css";

class Skill extends React.Component {
    public componentDidMount() {
        const ctx: any = document.getElementById("myChart");
        if (ctx) {
            const myChart = new Chart(ctx.getContext('2d'), {
                data: {
                    datasets: [{
                        data: [20, 10, 4, 2],
                        label : "Front-end"
                    }],
                    labels: ['Angular 2', 'React', 'JQuery', 'TypeScript']

                },
                options : {
                    scales: {
                        display: false
                    }
                },
                type: 'radar'
            });
        }
    }

    public render() {
        return (
            <div>
                <div className="radarChartContainer">
                    <canvas id="myChart" className="radarChart" />
                </div>
            </div>
        );
    }
}
export default Skill;

