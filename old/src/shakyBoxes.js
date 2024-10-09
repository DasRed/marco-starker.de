export default () => document.addEventListener("mousemove", function (event) {
    const numberOutlineOne = document.querySelectorAll(".number-outline-one");
    const numberOutlineTwo = document.querySelectorAll(".number-outline-two");
    const offsetX          = (event.clientX - window.innerWidth / 2) * 0.01;
    const offsetY          = (event.clientY - window.innerHeight / 2) * 0.01;

    numberOutlineOne.forEach((element) => {
        element.style.transform = `translate(${offsetX / 2}px, ${offsetY / 2}px)`;
    });

    numberOutlineTwo.forEach((element) => {
        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});