import ApexCharts from 'apexcharts';

function languages() {
    const skillCharts = document.querySelectorAll(".chart-language");

    if (skillCharts.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;

                        const chart = new ApexCharts(el, {
                            chart:       {
                                type:       "radialBar",
                                width:      250,
                                height:     250,
                                sparkline:  {
                                    enabled: false,
                                },
                                animations: {
                                    enabled:          true,
                                    easing:           "easeinout",
                                    speed:            2000,
                                    animateGradually: {
                                        enabled: true,
                                        delay:   150,
                                    },
                                    dynamicAnimation: {
                                        enabled: true,
                                        speed:   350,
                                    },
                                },
                            },
                            series:      ["85"],
                            legend:      {
                                show: false,
                            },
                            stroke:      {
                                lineCap: "butt",
                            },
                            colors:      ["#000000"],
                            plotOptions: {
                                radialBar: {
                                    dataLabels: {
                                        value: {
                                            show: false,
                                        },
                                        name:  {
                                            offsetY:  15,
                                            fontSize: "44px",
                                        },
                                    },
                                    hollow:     {
                                        size: "80%",
                                    },
                                },
                            },
                            labels:      ["85%"],
                            grid:        {
                                padding: {
                                    top:    -16,
                                    bottom: -20,
                                },
                            },
                        });

                        chart.render();

                        // Stop observing this element after rendering
                        observer.unobserve(el);
                    }
                });
            },
            {
                threshold: 0.7, // Trigger when at least 10% of the chart is visible
            },
        );

        skillCharts.forEach((el) => {
            observer.observe(el);
        });
    }

    //   branding charts
    const brandingCharts = document.querySelectorAll(".branding-chart");

    if (brandingCharts.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;

                        const chart = new ApexCharts(el, {
                            chart:       {
                                type:       "radialBar",
                                width:      250,
                                height:     250,
                                sparkline:  {
                                    enabled: false,
                                },
                                animations: {
                                    enabled:          true,
                                    easing:           "easeinout",
                                    speed:            2000,
                                    animateGradually: {
                                        enabled: true,
                                        delay:   150,
                                    },
                                    dynamicAnimation: {
                                        enabled: true,
                                        speed:   350,
                                    },
                                },
                            },
                            series:      ["85"],
                            legend:      {
                                show: false,
                            },
                            stroke:      {
                                lineCap: "butt",
                            },
                            colors:      ["#000000"],
                            plotOptions: {
                                radialBar: {
                                    dataLabels: {
                                        value: {
                                            show: false,
                                        },
                                        name:  {
                                            offsetY:  15,
                                            fontSize: "44px",
                                        },
                                    },
                                    hollow:     {
                                        size: "80%",
                                    },
                                },
                            },
                            labels:      ["85%"],
                            grid:        {
                                padding: {
                                    top:    -16,
                                    bottom: -20,
                                },
                            },
                        });

                        chart.render();

                        // Stop observing this element after rendering
                        observer.unobserve(el);
                    }
                });
            },
            {
                threshold: 0.7, // Trigger when at least 10% of the chart is visible
            },
        );

        brandingCharts.forEach((el) => {
            observer.observe(el);
        });
    }

    // ecommerce charts
    const ecommerceCharts = document.querySelectorAll(".ecommerce-chart");

    if (ecommerceCharts.length) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;

                        const chart = new ApexCharts(el, {
                            chart:       {
                                type:       "radialBar",
                                width:      250,
                                height:     250,
                                sparkline:  {
                                    enabled: false,
                                },
                                animations: {
                                    enabled:          true,
                                    easing:           "easeinout",
                                    speed:            2000,
                                    animateGradually: {
                                        enabled: true,
                                        delay:   150,
                                    },
                                    dynamicAnimation: {
                                        enabled: true,
                                        speed:   350,
                                    },
                                },
                            },
                            series:      ["80"],
                            legend:      {
                                show: false,
                            },
                            stroke:      {
                                lineCap: "butt",
                            },
                            colors:      ["#000000"],
                            plotOptions: {
                                radialBar: {
                                    dataLabels: {
                                        value: {
                                            show: false,
                                        },
                                        name:  {
                                            offsetY:  15,
                                            fontSize: "44px",
                                        },
                                    },
                                    hollow:     {
                                        size: "80%",
                                    },
                                },
                            },
                            labels:      ["80%"],
                            grid:        {
                                padding: {
                                    top:    -16,
                                    bottom: -20,
                                },
                            },
                        });

                        chart.render();

                        // Stop observing this element after rendering
                        observer.unobserve(el);
                    }
                });
            },
            {
                threshold: 0.7, // Trigger when at least 10% of the chart is visible
            },
        );

        ecommerceCharts.forEach((el) => {
            observer.observe(el);
        });
    }
}

function skills() {
    const skills = document.querySelectorAll(".skill");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progressBar       = entry.target.querySelector(".progress-bar");
                    const width             = progressBar.getAttribute("data-width");
                    progressBar.style.width = width;
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.5, // Trigger when at least 50% of the element is visible
        },
    );

    skills.forEach((skill) => {
        observer.observe(skill);
    });
}

export default () => document.addEventListener("DOMContentLoaded", () => {
    languages();
    skills();
});
