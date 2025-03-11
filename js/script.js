document.addEventListener("DOMContentLoaded", () => {
    // Form Submission - Home Page
    const submitBtn = document.getElementById("submitBtn");
    if (submitBtn) {
        submitBtn.addEventListener("click", () => {
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const address = document.getElementById("address").value.trim();
            const city = document.getElementById("city").value.trim();
            const province = document.getElementById("province").value.trim();
            const membership = document.querySelector('input[name="membership"]:checked').value;

            if (!firstName || !lastName || !email || !address || !city || !province) {
                alert("Please fill in all fields.");
                return;
            }

            const output = `
                <p>Full Name: ${firstName} ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Address: ${address}, ${city}, ${province}</p>
                <p>Membership: ${membership}</p>
            `;
            document.getElementById("output").innerHTML = output;
        });
    }

    // Excel Functions - Excel Page
    const calculateBtn = document.getElementById("calculateBtn");
    if (calculateBtn) {
        calculateBtn.addEventListener("click", () => {
            let numberStr = document.getElementById("numbers").value.trim();
            if (!numberStr) {
                alert("Please enter numbers separated by spaces.");
                return;
            }

            let numberArr = numberStr.split(" ").filter(num => num.trim() !== "").map(Number);

            if (numberArr.some(isNaN)) {
                alert("Please enter valid numbers separated by spaces.");
                return;
            }

            let result;
            if (document.getElementById("sum").checked) {
                result = numberArr.reduce((a, b) => a + b, 0);
            } else if (document.getElementById("avg").checked) {
                result = numberArr.reduce((a, b) => a + b, 0) / numberArr.length;
            } else if (document.getElementById("max").checked) {
                result = Math.max(...numberArr);
            } else if (document.getElementById("min").checked) {
                result = Math.min(...numberArr);
            }

            document.getElementById("result").textContent = result;
        });
    }
});
 