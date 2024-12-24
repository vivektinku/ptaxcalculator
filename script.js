const taxData = {
    "Salary and Wage Earners": {
        "Up to Rs.10,000/month": 0,
        "More than Rs.10,000 but less than Rs.15,000/month": 150,
        "Rs.15,000 or more but less than Rs.25,000/month": 180,
        "Rs.25,000 and more/month": 208
    },
    "Legal Practitioners, Medical Professionals, Consultants, etc.": {
        "Up to Rs.1,20,000/year": 0,
        "More than Rs.1,20,000 but less than Rs.1,80,000/year": 1800,
        "Rs.1,80,000 or more but less than Rs.3,00,000/year": 2160,
        "Rs.3,00,000 and more/year": 2500
    },
    "Members of Recognized Associations": {
        "Flat Rate": 2500
    },
    "Estate Agents, Brokers, Building Contractors": {
        "Flat Rate": 2500
    },
    "Directors (non-Government-nominated)": {
        "Flat Rate": 2500
    },
    "Dealers (Sales Turnover)": {
        "Up to Rs.4,00,000/year": 0,
        "Rs.4,00,000 - Rs.7,00,000/year": 1000,
        "Rs.7,00,000 - Rs.10,00,000/year": 1500,
        "More than Rs.10,00,000/year": 2500
    },
    "Factory Occupiers (Workers Count)": {
        "Up to 5 workers": 350,
        "5-15 workers": 2000,
        "More than 15 workers": 2500
    },
    "Employers of Shops and Establishments": {
        "No employees": 0,
        "Up to 5 employees": 300,
        "6-10 employees": 1500,
        "More than 10 employees": 2500
    },
    "Petrol/Diesel Filling Station Owners": {
        "Flat Rate": 2500
    },
    "Licensed Liquor Vendors, Cinema/Theatre Owners": {
        "Flat Rate": 2500
    },
    "Permit Holders for Transport Vehicles": {
        "Each Taxi/Small Vehicle": 500,
        "Each Truck/Bus": 2500,
        "Max Payable per Person": 2500
    },
    "Money Lenders, Chit Fund Operators": {
        "Flat Rate": 2500
    },
    "Banks": {
        "Scheduled Banks": 2500,
        "Other Banks": 2500
    },
    "Companies": {
        "Flat Rate": 2500
    },
    "Firms": {
        "Flat Rate": 2500
    },
    "Nursing Homes, Labs, Hospitals": {
        "Flat Rate": 2500
    },
    "Dry Cleaners, Decorators, Parlours": {
        "Flat Rate": 2500
    },
    "Film Distributors, Travel Agents": {
        "Flat Rate": 2000
    },
    "Motion Picture Industry": {
        "Directors/Actors/Cameramen etc.": 2000,
        "Junior Artists/Assistants": 700
    
    },
    "Self-employed in Mobile Theatre Group": {
        "Flat Rate": 0
    }
};

function populateCategories() {
    const categorySelect = document.getElementById("category");
    categorySelect.innerHTML = "<option value=''>--Select Category--</option>";

    Object.keys(taxData).forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

function updateIncomeSlab() {
    const category = document.getElementById("category").value;
    const incomeSlab = document.getElementById("incomeSlab");
    incomeSlab.innerHTML = "<option value=''>--Select Income Slab--</option>";

    if (category) {
        const slabs = Object.keys(taxData[category]);
        slabs.forEach(slab => {
            const option = document.createElement("option");
            option.value = slab;
            option.textContent = slab;
            incomeSlab.appendChild(option);
        });
    }
}

function calculateTax() {
    const category = document.getElementById("category").value;
    const incomeSlab = document.getElementById("incomeSlab").value;
    const result = document.getElementById("result");

    if (category && incomeSlab) {
        const tax = taxData[category][incomeSlab];
        result.textContent = `Applicable Professional Tax: Rs.${tax}`;
    } else {
        result.textContent = "Please select both category and income slab.";
    }
}

window.onload = populateCategories; // Populate categories on page load
