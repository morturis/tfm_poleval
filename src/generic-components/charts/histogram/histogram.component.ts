import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'histogram',
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.scss'],
})
export class HistogramComponent {
  @Input({ required: true }) dataset!: string[];
  @Input({ required: true }) responseOptions!: string[];
  @Input({ required: true }) header!: string;

  barChartData!: ChartConfiguration<'bar'>['data'];
  barChartOptions!: ChartConfiguration<'bar'>['options'];

  ngOnInit() {
    //console.log(this.dataset);
    this.barChartOptions = {
      plugins: {
        legend: {
          display: false, //Hard to translate
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    };

    //Calculo frequencia de las respuestas
    const freqMap: Map<string, number> = new Map<string, number>();
    this.responseOptions.forEach((opt) => freqMap.set(opt, 0));
    this.dataset.forEach((answer) =>
      freqMap.set(answer, (freqMap.get(answer) || 0) + 1)
    );

    const colors = [];
    for (let i = 0; i < this.dataset.length; i++) {
      //colors.push('hsl(' + (360 * i) / this.dataset.length + ', 100%, 80%)'); //Hue, Saturation, Lightness
    }

    this.barChartData = {
      labels: [...freqMap.keys()],
      datasets: [
        {
          data: [...freqMap.values()],
          backgroundColor: colors,
          //borderColor: colors.map((color) => color.replace('80%', '40%')), //less lightness for edges
          borderWidth: 2,
        },
      ],
    };
  }
}
