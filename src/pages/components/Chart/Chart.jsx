import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartWaves = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const updateChart = () => {
      if (chartInstance) {
        // Generate new random data
        const newData = Array.from({ length: 12 }, () =>
          Math.floor(Math.random() * 40)
        );

        // Update chart data
        chartInstance.data.datasets[0].data = newData;

        // Update chart
        chartInstance.update();
      }
    };

    const interval = setInterval(updateChart, 2000); // Update every 2 seconds

    var ctx = chartRef.current.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy(); // Destroy previous chart instance
    }

    chartInstance = new Chart(ctx, {
      type: "line", // Changed the type to "line" for wave chart
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "# of Votes",
            data: Array.from({ length: 12 }, () =>
              Math.floor(Math.random() * 40)
            ), // Random initial data
            backgroundColor: [
              "#0575fa",
              "#0575fa",
              "#fffff",
              "#fffff",
              "#fffff",
              "#fffff",
              "#0575fa",
              "#fffff",
              "#fffff",
              "#fffff",
              "#fffff",
              "#fffff",
            ],
            borderWidth: 1, // Set the border width to 1
            borderColor: "#0575fa", // Set the border color
            lineTension: 0.4, // Adjust the line tension to create a wave-like appearance
            fill: false, // Fill the area under the line
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0, // Disable the default line tension
            borderWidth: 2, // Set the line width
            borderColor: "#ffffff", // Set the line color
            borderCapStyle: "rounded", // Set rounded ends for the line
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        scales: {
          x: {
            display: true, // Hide the x-axis
            grid: {
              display: false,
            },
            ticks: {
              color: "#6875b3", // Set the color of y-axis ticks
              fontSize: 20, // Set the font size of x-axis ticks
            },
          },
          y: {
            display: true, // Hide the y-axis
            grid: {
              display: false,
            },
            ticks: {
              color: "#6875b3",
              fontSize: 14, // Set the font size of x-axis ticks
            },
          },
        },
        layout: {
          padding: {
            top: 5,
            bottom: 5,
          },
        },
      },
    });

    return () => {
      clearInterval(interval); // Clear interval on component unmount

      if (chartInstance) {
        chartInstance.destroy(); // Clean up the chart instance on unmount
      }
    };
  }, []);

  return <canvas className="w-[250px] h-[500px]" ref={chartRef} />;
};

export default ChartWaves;
