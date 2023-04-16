import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from "highcharts/modules/map";
import mapDataAfrica from '../public/mapDataAfrica';
import styles from '@/styles/game.module.css'
import styled from 'styled-components'



const Heading1 = styled.h1`
  color: #fff;
  font-size: 4em;
  font-weight: 900;
  margin-bottom: 2rem;`

const Heading2 = styled.h2`
  color: #fff;
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 2rem;
`

const HeroButton = styled.button`
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: .1em;
  background-color: rgba(0,0,0,0.0);
  border-radius: 100px;
  border: 3px solid #40F2FE;
  margin-right: 2em;
  margin-top: 1em;
  height: 60px;
  width: 200px;
  transition: all .3s;
  box-shadow: 0px 0px 20px rgba(202,152,254,0.5);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 20px rgba(202,152,254,1);
  }
`

const StyledText = styled.p`
font-size: 14pt;
`

const StyledLink = styled.a`
	// padding: 0rem 2rem;
	color: #E6E1FC;
`

const HeroCol = styled.div`
  padding: 2rem;
`

const DivLeft = styled(HeroCol)`
`

const DivRight = styled(HeroCol)`
  
`

const ColWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

`


if (typeof Highcharts === 'object') {
  highchartsMap(Highcharts);
}

const data = [
	['ug', 1, 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'], ['ng', 11], ['st', 12], ['tz', 13], ['sl', 14], ['gw', 15],
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

// const data = [
// 	{ 
// 		name: 'ug',
// 		number: 1,
// 		image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'
// 	}
// ]

const mapOptions = {
	chart: {
		backgroundColor: '#21295c',
		width: 800,
		height: 800,
	},
	title: {
	  text: '',
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
		borderColor: '#fff',
		borderWidth: 2,
		color: '#065a82',
		data: data,
		
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
			<DivLeft>
			<Heading1>African countries</Heading1>
			<Heading2>Interactive map</Heading2>
			<StyledText>For this exercise, please spend at least 10 minutes interacting with the map to the right. Hover over each country and try to memorize the shape of the country and its name. You can zoom in and out of the map with your mousewheel, navigate the map by clicking and dragging your cursor, and each country can be hovered over for more information.
       When you are finished, please click 'Next' below.</StyledText>
       <br/>
       <StyledLink href="/test"><HeroButton>Next</HeroButton></StyledLink>
			</DivLeft>

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
