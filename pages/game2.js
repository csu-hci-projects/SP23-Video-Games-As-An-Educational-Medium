import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from "highcharts/modules/map";
import mapDataAfrica from '../public/mapDataAfrica';
import styles from '@/styles/game.module.css'


if (typeof Highcharts === 'object') {
  highchartsMap(Highcharts);
}


const data = [
	['ug', 1, './public.ao-03.png'], ['ng', 11], ['st', 12], ['tz', 13], ['sl', 14], ['gw', 15],
	['cv', 16], ['sc', 17], ['tn', 18], ['mg', 19], ['ke', 20], ['cd', 21],
	['fr', 22], ['mr', 23], ['dz', 24], ['er', 25], ['gq', 26], ['mu', 27],
	['sn', 28], ['km', 29], ['et', 30], ['ci', 31], ['gh', 32], ['zm', 33],
	['na', 34], ['rw', 35], ['sx', 36], ['so', 37], ['cm', 38], ['cg', 39],
	['eh', 40], ['bj', 41], ['bf', 42], ['tg', 43], ['ne', 44], ['ly', 45],
	['lr', 46], ['mw', 47], ['gm', 48], ['td', 49], ['ga', 50], ['dj', 51],
	['bi', 52], ['ao', 53], ['gn', 54], ['zw', 55], ['za', 56], ['mz', 57],
	['sz', 58], ['ml', 59], ['bw', 60], ['sd', 61], ['ma', 62], ['eg', 63],
	['ls', 64], ['ss', 65], ['cf', 66]
];

const mapOptions = {
	chart: {
		backgroundColor: '#21295c',
		width: 800,
		height: 800,
	},
	title: {
	//   text: 'African countries',
	//   color: '#fff',
	},
	
	tooltip: {
		useHTML: true,
		borderColor: '#aaa',
		headerFormat: '<b>{point.point.name}</b><br>',
		pointFormat: '<img style="width: 150px; height: 100px;" src=\'{point.options.color.pattern.image}\'>'
	  },
  
	series: [
	  {
		mapData: mapDataAfrica,
		name: 'Africa',
		data: data,
		borderColor: '#fff',
		borderWidth: 2,
		color: '#065a82',
		
	  states: {
		hover: {
			borderColor: '#9eb3c2',
			borderWidth: 3,
			color: '#1c7293',
		}
	  },
	  dataLabels: {
		enabled: true,
		format: '{point.name}'
	  },
	}
	],
	mapNavigation: {
		enableMouseWheelZoom: true,
		enableDoubleClickZoomTo: true,
	},
	xAxis: {
		minRange: 3500
	},
	mapView: {
		zoomBy: 1
	}
  };

export default function Game({ Component, pageProps }) {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<HighchartsReact
					options={mapOptions}
					constructorType={'mapChart'}
					highcharts={Highcharts}
				/>
			</div>
		</main>
  	)
}
