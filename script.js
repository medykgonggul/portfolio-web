
console.log("Portfolio berhasil dibuka!");

const elemenReveal = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elemenReveal.forEach(function (elemen) {
        observer.observe(elemen);
    });
} else {
    elemenReveal.forEach(function (elemen) {
        elemen.classList.add("active");
    });
}
