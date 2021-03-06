import { Chart } from "chart.js";
import * as React from "react";
import { ISkill } from "./ISkill";
import "./SkillChart.css";

class SkillChart extends React.Component<ISkill> {
  constructor(props: ISkill) {
    super(props);
  }

  public componentDidMount() {
    const ctx: any = document.getElementById(this.props.id);
    if (ctx) {
      const radarChart = new Chart(ctx.getContext("2d"), {
        data: {
          datasets: [
            {
              data: this.props.level.map((level) => {
                return level;
              }),
              label: this.props.title,
            },
          ],
          labels: this.props.skill.map((skill) => {
            return skill;
          }),
        },
        options: {
          responsive: true,
          scale: {
            ticks: {
              display: false,
              beginAtZero: true,
              min: 0,
              max: 10,
            },
          },
        },
        type: "radar",
      });
    }
  }

  public render() {
    return (
      <div>
        <div className="radarChartContainer">
          <canvas id={this.props.id} className="radarChart" />
        </div>
      </div>
    );
  }
}
export default SkillChart;
