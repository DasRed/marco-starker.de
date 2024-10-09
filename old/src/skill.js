import ApexCharts from 'apexcharts';

function chartCircleRender() {
    const elements = document.querySelectorAll('.chart-circle');

    const observer = new IntersectionObserver(
        (entries) => entries.filter(({isIntersecting}) => isIntersecting).forEach((entry) => {
            const element = entry.target;

            const chart = new ApexCharts(element, {
                chart:       {
                    type:       'radialBar',
                    width:      250,
                    height:     250,
                    sparkline:  {
                        enabled: false,
                    },
                    animations: {
                        enabled:          true,
                        easing:           'easeinout',
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
                series:      [element.getAttribute('data-level')],
                legend:      {
                    show: false,
                },
                stroke:      {
                    lineCap: 'butt',
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
                                fontSize: '44px',
                            },
                        },
                        hollow:     {
                            size: '80%',
                        },
                    },
                },
                labels:      [element.getAttribute('data-level') + '%'],
                grid:        {
                    padding: {
                        top:    -16,
                        bottom: -20,
                    },
                },
            });

            chart.render();

            // Stop observing this element after rendering
            observer.unobserve(element);
        }),
        {
            threshold: 0.7, // Trigger when at least 10% of the chart is visible
        },
    );

    elements.forEach((element) => observer.observe(element));
}

function chartProgressRender() {
    const skills = document.querySelectorAll('.skill');

    const observer = new IntersectionObserver(
        (entries) => entries.filter(({isIntersecting}) => isIntersecting).forEach((entry) => {
            const progressBar       = entry.target.querySelector('.progress-bar');
            progressBar.style.width = progressBar.getAttribute('data-width');
            observer.unobserve(entry.target);
        }),
        {
            threshold: 0.5, // Trigger when at least 50% of the element is visible
        },
    );

    skills.forEach((skill) => observer.observe(skill));
}

export default () => document.addEventListener('DOMContentLoaded', () => {
    chartCircleRender();
    chartProgressRender();
});
