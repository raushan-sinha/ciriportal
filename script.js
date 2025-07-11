const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("open");
});

// Mobile dropdown toggle
const mobileDropdownLinks = document.querySelectorAll('.mobile-nav .dropdown a');

mobileDropdownLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const parentLi = this.parentElement;
        // Close other open dropdowns
        document.querySelectorAll('.mobile-nav .dropdown.open').forEach(openLi => {
            if (openLi !== parentLi) {
                openLi.classList.remove('open');
            }
        });
        // Toggle current dropdown
        parentLi.classList.toggle('open');
    });
});


//todo: Select a Country Region  by API -
const countrySelect = document.querySelector('#countrySelect');
async function loadCountriesName() {
    try {
        const data = await fetch('countries.json');
        if (!data.ok) {
            throw new Error(`Your Internet connection is Poor! ${data.status}`);
        }
        const result = await data.json();
        countrySelect.innerHTML = '<option value="">Select Region</option>';
        //? Access each Countries using forEach() -
        result.forEach((country) => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        })
    } catch (error) {
        console.error('Failed to load countries', error);
        countrySelect.innerHTML = '<option value="">Select Region</option>';
    }
}
loadCountriesName();