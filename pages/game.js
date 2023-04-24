import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import mapDataAfrica from "../public/mapDataAfrica";
import styles from "@/styles/game.module.css";
import styled from "styled-components";

const Heading1 = styled.h1`
  color: #fff;
  font-size: 4em;
  font-weight: 900;
  margin-bottom: 2rem;`;

const Heading2 = styled.h2`
  color: #fff;
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 2rem;
`;

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
`;

const StyledText = styled.p`
font-size: 14pt;
`;

const StyledLink = styled.a`
	// padding: 0rem 2rem;
	color: #E6E1FC;
`;

const HeroCol = styled.div`
  padding: 2rem;
`;

const DivLeft = styled(HeroCol)`
`;

const DivRight = styled(HeroCol)`
  
`;

const ColWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

`;

if (typeof Highcharts === "object") {
  highchartsMap(Highcharts);
}

const flagBaseUrl = "https://upload.wikimedia.org/wikipedia/commons/";
const silhouetteBaseUrl = "https://upload.wikimedia.org/wikipedia/commons/";

const mapUrls = {
  ug: "3/30/Flag-map_of_Uganda.svg",
  ng: "Nigeria.svg",
  // Add other flag URLs here
};

const flagUrls = {
  ug: "4/4e/Flag_of_Uganda.svg",
  ng: "thumb/7/79/Flag_of_Nigeria.svg/1600px-Flag_of_Nigeria.svg.png?20190924030125",
  st: "thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/510px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png",
  tz: "thumb/3/38/Flag_of_Tanzania.svg/1920px-Flag_of_Tanzania.svg.png",
  sl: "thumb/1/17/Flag_of_Sierra_Leone.svg/510px-Flag_of_Sierra_Leone.svg.png",
  gw: "thumb/0/01/Flag_of_Guinea-Bissau.svg/250px-Flag_of_Guinea-Bissau.svg.png",
  cv: "thumb/3/38/Flag_of_Cape_Verde.svg/510px-Flag_of_Cape_Verde.svg.png",
  sc: "thumb/f/fc/Flag_of_Seychelles.svg/500px-Flag_of_Seychelles.svg.png",
  tn: "thumb/c/ce/Flag_of_Tunisia.svg/450px-Flag_of_Tunisia.svg.png",
  mg: "thumb/b/bc/Flag_of_Madagascar.svg/250px-Flag_of_Madagascar.svg.png",
  ke: "thumb/4/49/Flag_of_Kenya.svg/510px-Flag_of_Kenya.svg.png",
  cd: "thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/250px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
  fr: "",
  mr: "thumb/4/43/Flag_of_Mauritania.svg/510px-Flag_of_Mauritania.svg.png",
  dz: "thumb/7/77/Flag_of_Algeria.svg/510px-Flag_of_Algeria.svg.png",
  er: "thumb/2/29/Flag_of_Eritrea.svg/510px-Flag_of_Eritrea.svg.png",
  gq: "thumb/3/31/Flag_of_Equatorial_Guinea.svg/250px-Flag_of_Equatorial_Guinea.svg.png",
  mu: "thumb/7/77/Flag_of_Mauritius.svg/510px-Flag_of_Mauritius.svg.png",
  sn: "thumb/f/fd/Flag_of_Senegal.svg/510px-Flag_of_Senegal.svg.png",
  km: "thumb/9/94/Flag_of_the_Comoros.svg/510px-Flag_of_the_Comoros.svg.png",
  et: "thumb/7/71/Flag_of_Ethiopia.svg/1600px-Flag_of_Ethiopia.svg.png?20191111184610",
  ci: "thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/400px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png",
  gh: "thumb/1/19/Flag_of_Ghana.svg/510px-Flag_of_Ghana.svg.png",
  zm: "thumb/0/06/Flag_of_Zambia.svg/510px-Flag_of_Zambia.svg.png",
  na: "thumb/0/00/Flag_of_Namibia.svg/510px-Flag_of_Namibia.svg.png",
  rw: "thumb/1/17/Flag_of_Rwanda.svg/510px-Flag_of_Rwanda.svg.png",
  so: "thumb/a/a0/Flag_of_Somalia.svg/510px-Flag_of_Somalia.svg.png",
  sx: "",
  sd: "thumb/0/01/Flag_of_Sudan.svg/510px-Flag_of_Sudan.svg.png",
  cm: "thumb/4/4f/Flag_of_Cameroon.svg/510px-Flag_of_Cameroon.svg.png",
  cg: "thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/453px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png",
  eh: "thumb/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg/510px-Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg.png",
  bj: "thumb/0/0a/Flag_of_Benin.svg/510px-Flag_of_Benin.svg.png",
  tg: "thumb/6/68/Flag_of_Togo.svg/510px-Flag_of_Togo.svg.png",
  ne: "thumb/f/f4/Flag_of_Niger.svg/397px-Flag_of_Niger.svg.png",
  ly: "thumb/0/04/Flag_of_Libya_%281977%E2%80%932011%29.svg/524px-Flag_of_Libya_%281977%E2%80%932011%29.svg.png",
  lr: "thumb/b/b8/Flag_of_Liberia.svg/510px-Flag_of_Liberia.svg.png",
  mw: "thumb/d/d1/Flag_of_Malawi.svg/510px-Flag_of_Malawi.svg.png",
  gm: "thumb/7/77/Flag_of_The_Gambia.svg/400px-Flag_of_The_Gambia.svg.png",
  td: "thumb/4/4b/Flag_of_Chad.svg/510px-Flag_of_Chad.svg.png",
  ga: "thumb/0/04/Flag_of_Gabon.svg/453px-Flag_of_Gabon.svg.png",
  dj: "thumb/3/34/Flag_of_Djibouti.svg/510px-Flag_of_Djibouti.svg.png",
  bi: "thumb/5/50/Flag_of_Burundi.svg/510px-Flag_of_Burundi.svg.png",
  ao: "thumb/9/9d/Flag_of_Angola.svg/510px-Flag_of_Angola.svg.png",
  gn: "thumb/e/ed/Flag_of_Guinea.svg/510px-Flag_of_Guinea.svg.png",
  zw: "thumb/6/6a/Flag_of_Zimbabwe.svg/510px-Flag_of_Zimbabwe.svg.png",
  za: "thumb/a/af/Flag_of_South_Africa.svg/510px-Flag_of_South_Africa.svg.png",
  mz: "thumb/d/d0/Flag_of_Mozambique.svg/510px-Flag_of_Mozambique.svg.png",
  sz: "thumb/f/fb/Flag_of_Eswatini.svg/510px-Flag_of_Eswatini.svg.png",
  ml: "thumb/9/92/Flag_of_Mali.svg/510px-Flag_of_Mali.svg.png",
  bw: "thumb/f/fa/Flag_of_Botswana.svg/510px-Flag_of_Botswana.svg.png",
  ss: "thumb/7/7a/Flag_of_South_Sudan.svg/510px-Flag_of_South_Sudan.svg.png",
  eg: "thumb/f/fe/Flag_of_Egypt.svg/510px-Flag_of_Egypt.svg.png",
};

const getUrl = (baseUrl, urls, code) => {
  const url = urls[code];
  return url ? `${baseUrl}${url}` : "";
};

const getFlagUrl = (code) => {
  return getUrl(flagBaseUrl, flagUrls, code);
};

const getSilhouetteUrl = (code) => {
  return getUrl(silhouetteBaseUrl, mapUrls, code);
};

const data = [
  ["ug", 1, getFlagUrl("ug"), getSilhouetteUrl("ug")],
  ["ng", 11, getFlagUrl("ng")],
  ["st", 12, getFlagUrl("st")],
  ["tz", 13, getFlagUrl("tz")],
  ["sl", 14, getFlagUrl("sl")],
  ["gw", 15, getFlagUrl("gw")],
  ["cv", 16, getFlagUrl("cv")],
  ["sc", 17, getFlagUrl("sc")],
  ["tn", 18, getFlagUrl("tn")],
  ["mg", 19, getFlagUrl("mg")],
  ["ke", 20, getFlagUrl("ke")],
  ["cd", 21, getFlagUrl("cd")],
  ["fr", 22, getFlagUrl("fr")],
  ["mr", 23, getFlagUrl("mr")],
  ["dz", 24, getFlagUrl("dz")],
  ["er", 25, getFlagUrl("er")],
  ["gq", 26, getFlagUrl("gq")],
  ["mu", 27, getFlagUrl("mu")],
  ["sn", 28, getFlagUrl("sn")],
  ["km", 29, getFlagUrl("km")],
  ["et", 30, getFlagUrl("et")],
  ["ci", 31, getFlagUrl("ci")],
  ["gh", 32, getFlagUrl("gh")],
  ["zm", 33, getFlagUrl("zm")],
  ["na", 34, getFlagUrl("na")],
  ["rw", 35, getFlagUrl("rw")],
  ["sx", 36, getFlagUrl("sx")],
  ["so", 37, getFlagUrl("so")],
  ["cm", 38, getFlagUrl("cm")],
  ["cg", 39, getFlagUrl("cg")],
  ["eh", 40, getFlagUrl("eh")],
  ["bj", 41, getFlagUrl("bj")],
  ["bf", 42, getFlagUrl("bf")],
  ["tg", 43, getFlagUrl("tg")],
  ["ne", 44, getFlagUrl("ne")],
  ["ly", 45, getFlagUrl("ly")],
  ["lr", 46, getFlagUrl("lr")],
  ["mw", 47, getFlagUrl("mw")],
  ["gm", 48, getFlagUrl("gm")],
  ["td", 49, getFlagUrl("td")],
  ["ga", 50, getFlagUrl("ga")],
  ["dj", 51, getFlagUrl("dj")],
  ["bi", 52, getFlagUrl("bi")],
  ["ao", 53, getFlagUrl("ao")],
  ["gn", 54, getFlagUrl("gn")],
  ["zw", 55, getFlagUrl("zw")],
  ["za", 56, getFlagUrl("za")],
  ["mz", 57, getFlagUrl("mz")],
  ["sz", 58, getFlagUrl("sz")],
  ["ml", 59, getFlagUrl("ml")],
  ["bw", 60, getFlagUrl("bw")],
  ["sd", 61, getFlagUrl("sd")],
  ["ma", 62, getFlagUrl("ma")],
  ["eg", 63, getFlagUrl("eg")],
  ["ls", 64, getFlagUrl("ls")],
  ["ss", 65, getFlagUrl("ss")],
  ["cf", 66, getFlagUrl("cf")],
];

const mappedData = data.map(([code, value, flag, silhouette]) => ({
  "hc-key": code,
  value,
  flag,
  silhouette,
}));

const mapOptions = {
  chart: {
    backgroundColor: "#21295c",
    width: 800,
    height: 800,
    events: {
      load() {
        const chart = this;
        chart.container.addEventListener("mouseleave", () => {
          chart.tooltip.hide();
          chart.silhouette.hide();
        });

        // Add the silhouette image using renderer
        chart.silhouette = chart.renderer
          .image("", 50, chart.chartHeight - 300, 200, 200)
          .add()
          .hide();
      },
    },
  },
  title: {
    text: "",
  },
  tooltip: {
    useHTML: true,
    borderColor: "#aaa",
    headerFormat: "<b>{point.point.name}</b><br>",
    pointFormat:
      '{point.name}<br><img style="width: 150px; height: 100px;" src="{point.options.flag}">',
    animation: {
      duration: 200,
      easing: "ease-in-out",
    },
  },
  series: [
    {
      mapData: mapDataAfrica,
      name: "Africa",
      borderColor: "#fff",
      borderWidth: 2,
      color: "#065a82",
      data: mappedData,
      states: {
        hover: {
          borderColor: "#9eb3c2",
          borderWidth: 5,
          color: "#00869e",
          animation: {
            duration: 200,
            easing: "ease-in-out",
          },
        },
        select: {
          color: "#00a4c2",
          animation: {
            duration: 200,
            easing: "ease-in-out",
          },
        },
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
      },
      point: {
        events: {
          mouseOver() {
            const chart = this.series.chart;

            // Update the silhouette image source
            chart.silhouette.attr({
              href: this.silhouette,
              opacity: 0,
            });

            chart.silhouette.show();

            // Add transition effect to the silhouette
            chart.silhouette.animate(
              {
                opacity: 1,
              },
              {
                duration: 200,
                easing: "ease-in-out",
              }
            );

            this.select(true, true);
          },
        },
      },
    },
  ],
  mapNavigation: {
    enableMouseWheelZoom: true,
    enableDoubleClickZoomTo: true,
  },
  xAxis: {
    minRange: 3500,
  },
  mapView: {
    zoomBy: 1,
  },
};

export default function Game({ Component, pageProps }) {
  return (
    <main className={styles.main}>
      <DivLeft>
        <Heading1>African countries</Heading1>
        <Heading2>Interactive map</Heading2>
        <StyledText>
          For this exercise, please spend at least 10 minutes interacting with
          the map to the right. Hover over each country and try to memorize the
          shape of the country and its name. You can zoom in and out of the map
          with your mousewheel, navigate the map by clicking and dragging your
          cursor, and each country can be hovered over for more information.
          When you are finished, please click 'Next' below.
        </StyledText>
        <br />

        <StyledLink href="/test">
          <HeroButton>Next</HeroButton>
        </StyledLink>
      </DivLeft>

      <div className={styles.container}>
        <HighchartsReact
          options={mapOptions}
          constructorType={"mapChart"}
          highcharts={Highcharts}
        />
      </div>
    </main>
  );
}
