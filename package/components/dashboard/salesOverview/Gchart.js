import { defineComponent, h } from "vue";
import { GChart } from "vue-google-charts";

export const type = "ColumnChart";
export const data = [
  ["Sales", "Flexy", "MaterialPro"],
  ["2017", 817, 700],
  ["2018", 379, 269],
  ["2019", 269, 189],
  ["2020", 209, 95],
  ["2021", 152, 251],
  ["2022", 512, 451],
];

export const options = {
  chartArea: { width: "90%" },
  hAxis: {
    minValue: 0,
  },
  bar: {
    groupWidth: 30,
  },

  legend: { position: "bottom", maxLines: 5 },
  series: {
    0: { color: "#1e88e5" },
    1: { color: "#0cb9c5" },
  },
  vAxis: {},
  width: "100%",
  height: 430,
};

export default defineComponent({
  name: "GoogleChart",
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
      });
  },
});
