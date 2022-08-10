import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
  		data => {
  			this.data = data;
  			this.init();
  		});
  }

  /**
   * Inicializa a API de gráficos com delay de 1 segundo,
   * o que permite a integração da API com o Angular.
   *
   * @return void
   */
   init(): void {
      if(typeof(google) !== 'undefined') {
        google.charts.load('current', {'packages':['corechart']});
        setTimeout(() => {
          google.charts.setOnLoadCallback(this.showGraphics());
        }, 1000);
      }
    }

    /**
   * Método chamado assim que a API de gráficos é inicializada.
   * Reponsável por chamar os métodos geradores dos gráficos.
   *
   * @return void
   */
  showGraphics(): void {
  	this.showPieChart();
  	this.show3dPieChart();
  	this.showBarChart();
  	this.showLineChart();
  	this.showColumnChart();
  	this.showDonutChart();
  }

  /**
   * Exibe o gráfico Pie Chart.
   *
   * @return void
   */
  showPieChart(): void {
  	const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.getDataTable(), this.getOptions());
  }

  /**
   * Exibe o gráfico Pie Chart em 3D. 
   *
   * @return void
   */
  show3dPieChart(): void {
  	const el = document.getElementById('3d_pie_chart');
  	const chart = new google.visualization.PieChart(el);
	const opcoes = this.getOptions();

    opcoes['is3D'] = true;
    chart.draw(this.getDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Donut Chart.
   *
   * @return void
   */
  showDonutChart(): void {
  	const el = document.getElementById('donut_chart');
  	const chart = new google.visualization.PieChart(el);
    const opcoes = this.getOptions();

    opcoes['pieHole'] = 0.4;
    chart.draw(this.getDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Bar Chart.
   *
   * @return void
   */
  showBarChart(): void {
  	const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    chart.draw(this.getDataTable(), this.getOptions());
  }

  /**
   * Exibe o gráfico Line Chart.
   *
   * @return void
   */
  showLineChart(): void {
  	const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);
    
    chart.draw(this.getDataTable(), this.getOptions());
  }

  /**
   * Exibe o gráfico Column Chart.
   *
   * @return void
   */
  showColumnChart(): void {
  	const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);
    
    chart.draw(this.getDataTable(), this.getOptions());
  }

  /**
   * Cria e retorna o objeto DataTable da API de gráficos,
   * responsável por definir os dados do gráfico.
   *
   * @return any
   */
  getDataTable(): any {
  	const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.data);

    return data;
  }

  /**
   * Retorna as opções do gráfico, que incluem o título
   * e tamanho do gráfico.
   *
   * @return any
   */
  getOptions(): any {
  	return {
    	'title': 'Quantidade de cadastros primeiro semestre',
        'width': 400,
        'height': 300
    };
  }
}
