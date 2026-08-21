// Shopron — refrigerant catalog data
// Images hosted on Shopron's own Shopify CDN (store 0967/1665/2869).
// Products without a photographed cylinder yet render a generated SVG placeholder instead.

export const PRODUCTS = [
  {
    slug: "r-410a-25lb",
    code: "R-410A",
    title: "25 lb R410A Refrigerant Cylinder for HVAC & Heat Pumps",
    size: "25 lb",
    category: "ac-heat-pumps",
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#d16b86",
    images: [
      "/assets/products/r-410a-25lb/1.webp",
      "/assets/products/r-410a-25lb/2.webp",
      "/assets/products/r-410a-25lb/3.webp",
      "/assets/products/r-410a-25lb/4.webp",
      "/assets/products/r-410a-25lb/5.webp"
    ],
    intro: "R-410A is a near-azeotropic HFC refrigerant blend used in air conditioning, heat pump, and selected medium-temperature refrigeration equipment designed specifically for R-410A.",
    features: [
      "25 lb R-410A refrigerant cylinder",
      "≥ 99.80% purity, factory-sealed",
      "For equipment designed and labeled for R-410A",
      "Non-refillable, pressure-rated steel cylinder"
    ],
    applications: [
      "Residential & commercial air conditioning",
      "Heat pumps",
      "Small chillers",
      "Professional HVAC service & maintenance"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R410A is a near-azeotropic HFC refrigerant used in air conditioning, heat pump, chiller and selected medium-temperature refrigeration equipment designed specifically for R410A. This 25 lb cylinder is suitable for professional service of compatible residential and commercial systems.",
        benefits: [
          "25 lb R-410A refrigerant cylinder",
          "For equipment designed and labeled for R-410A",
          "Suitable for residential and commercial air conditioning",
          "Used in compatible heat pumps and small chillers",
          "Designed for professional HVAC service and maintenance"
        ],
        compatibilityNotice: "Use R410A only in equipment specifically designed for R410A. It operates at substantially higher pressures than R22 and must not be used in R22, R32, R454B or other systems. Verify the equipment nameplate before purchase.",
        image: "/assets/products/r-410a-25lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "25 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.80%", label: "Purity" },
          { icon: "grid", value: "0", label: "ODP" },
          { icon: "leaf", value: "2088", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "R410A refrigerant blend"],
          ["Composition", "50% R-32 + 50% R-125"],
          ["Net Weight", "25 lb (11.3 kg)"],
          ["Purity", "≥ 99.80%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional air-conditioning, heat pump, and HVAC service.",
        fullData: [
          ["Molecular formula", "50% R-32 + 50% R-125"],
          ["Molecular weight", "72.58"],
          ["Boiling point @ 1 atm", "-51.6°C"],
          ["Working pressure @ 25°C", "1.65 MPa"],
          ["Liquid density", "1062 kg/m³"],
          ["Critical temperature", "72.13°C"],
          ["Critical pressure", "4.926 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "For R410A Systems Only",
          summary: "Confirm R410A on the equipment nameplate",
          intro: "Use R410A only in compatible air-conditioning and heat-pump equipment designed for its operating pressure.",
          details: [
            "Do not add R410A to an R22, R32, R454B, or other refrigerant system.",
            "R410A operates at substantially higher pressure than R22.",
            "A refrigerant change requires an approved retrofit procedure, not simple topping off."
          ]
        },
        {
          icon: "user",
          title: "High-Pressure Service Requirements",
          summary: "Use tools, hoses, gauges, and recovery equipment rated for R410A",
          intro: "R410A service requires equipment rated for the refrigerant's pressure range and should be performed by qualified HVAC personnel.",
          details: [
            "Do not use recovery cylinders or service tools that are not pressure-rated for R410A.",
            "Wear appropriate eye and hand protection.",
            "Recover refrigerant properly and never intentionally vent it."
          ]
        },
        {
          icon: "eye",
          title: "25 lb Blend Cylinder",
          summary: "Factory-filled cylinder containing an R32 and R125 blend",
          intro: "The cylinder contains 25 lb (11.3 kg) net weight of R410A. Verify the label, valve, and cylinder condition before use.",
          details: [
            "Keep the cylinder upright and secured.",
            "Do not use a damaged, leaking, or altered cylinder.",
            "Confirm the connection and required charge amount before ordering."
          ]
        },
        {
          icon: "truck",
          title: "Charge R410A as Liquid",
          summary: "Maintain the intended blend composition",
          intro: "R410A should normally be removed from the cylinder in the liquid phase and introduced according to the equipment manufacturer's service procedure.",
          details: [
            "Use a charging method that prevents liquid slugging at the compressor.",
            "Do not mix R410A with another refrigerant.",
            "Follow the equipment manufacturer's oil and charging requirements."
          ]
        },
        {
          icon: "file",
          title: "Certification and Storage",
          summary: "Confirm purchase eligibility and safe cylinder storage",
          intro: "Stationary-system refrigerant sales and service are subject to EPA Section 608 requirements.",
          details: [
            "The purchaser must be, or employ, an appropriately certified technician.",
            "Store in a cool, dry, ventilated area away from heat and physical damage.",
            "Review the Shipping & Returns tab before ordering."
          ]
        }
      ],
      supportNote: "Not sure whether your system uses R410A? Send support a photo of the outdoor-unit nameplate before ordering.",
      faq: [
        {
          q: "Is R410A compatible with my system?",
          a: "Use R410A only in systems designed and labeled for R410A. It operates differently from R22 and must not be mixed with R22, R32, R454B, or another refrigerant. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R410A commonly used for?",
          a: "R410A refrigerant blend is intended for compatible R410A air-conditioning, heat-pump, and HVAC equipment. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R410A cylinder?",
          a: "The cylinder contains 25 lb (11.3 kg) net weight of R410A refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R410A with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R410A?",
          a: "R410A is a high-pressure refrigerant. Service requires appropriate recovery and charging equipment and should be performed by a qualified HVAC professional. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R410A?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R410A cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R410A cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R410A?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ],
      // Real customer reviews only — the summary stats (average, count,
      // distribution) in ProductReviewsSection are computed from this array,
      // never hardcoded. Leave empty until real reviews are supplied.
      reviews: [
        { name: "Mike R.", verified: true, date: "2026-08-18", rating: 5, title: "", body: "Great price and fast shopping." },
        { name: "Roger Sager", verified: true, date: "2026-08-17", rating: 5, title: "The Real Deal!", body: "This is the only place to go for freon!" },
        { name: "Jon Hughes", verified: true, date: "2026-08-15", rating: 4, title: "These guys totally Rock", body: "They can totally be trusted. This is not one of those fly-by-night stores. They might have some misspellings in their advertisements but that does not mean they're not honest. They just don't know how to spell. These guys are fantastic. I've been using them for years and they always have great product and great service." },
        { name: "Carlos M.", verified: true, date: "2026-08-14", rating: 5, title: "", body: "Great price super fast shipping quality products thank you" },
        { name: "abrehale", verified: true, date: "2026-08-12", rating: 5, title: "Satisfied Customer", body: "Very fast delivery, well packaged. Flawless transaction." },
        { name: "David T.", verified: true, date: "2026-08-10", rating: 5, title: "Easiest place to get supplies.", body: "Place an order, 4 or 5 days later it's on your porch. I've ordered several refrigerants here, never had an issue." },
        { name: "Steve K.", verified: true, date: "2026-08-09", rating: 5, title: "Good price and quick shipping", body: "Easy to deal with them" },
        { name: "Angela P.", verified: true, date: "2026-08-07", rating: 5, title: "On time! awesome people to purchase from.", body: "The refrigerant arrived quickly after the order was placed. The packaging and jug were in excellent condition as expected." },
        { name: "Frank D.", verified: true, date: "2026-08-05", rating: 5, title: "Great job", body: "This was easy shopping and fast shipping" },
        { name: "Tom W.", verified: true, date: "2026-08-03", rating: 5, title: "A fantastic way to get your personal Freon for your home AC", body: "Instead of paying 40 to $55 per pound for for your home air conditioning, keep your own on hand and they will use yours. A great way to save money especially with HOT summers and the need for a little Freon every year or two. A + A + A +" },
        { name: "Mark S.", verified: true, date: "2026-08-01", rating: 5, title: "25 lbs 410a Refrigerant", body: "Shipped quickly and arrived as described." },
        { name: "Kevin L.", verified: true, date: "2026-07-29", rating: 5, title: "I received the r410a and recharged my mini split", body: "I am very satisfied with this product" },
        { name: "LEI WU", verified: true, date: "2026-07-27", rating: 5, title: "R410a", body: "Fast shipping and the product was exactly what they advertised." },
        { name: "Brian H.", verified: true, date: "2026-07-25", rating: 5, title: "Refrigerant", body: "Very fast delivery!!" },
        { name: "jsmith22", verified: true, date: "2026-07-23", rating: 5, title: "GOOD SELLER", body: "" },
        { name: "Rick A.", verified: true, date: "2026-07-20", rating: 4, title: "Worked great!", body: "Was a little nervous but I received the item I ordered and it worked great. Would order again!" },
        { name: "Nancy G.", verified: true, date: "2026-07-18", rating: 5, title: "410A", body: "Came in a timely manner." },
        { name: "Paul B.", verified: true, date: "2026-07-15", rating: 5, title: "EXCELLENT TO DEAL WITH !", body: "Fast delivery , Item just as described and saved some bucks too !" },
        { name: "Wendy C.", verified: true, date: "2026-07-12", rating: 5, title: "Very fast service", body: "Well serve as promised." },
        { name: "Greg N.", verified: true, date: "2026-07-09", rating: 4, title: "Best price anywhere!", body: "I saw the ads, I couldn't believe how cheap the prices were and with free shipping. I thought it might be a scam at first but I figured if I pay with my credit card I can't go wrong. Definitely was not a scam, just a great deal on freon, for all your free on needs! I share this website with all my AC friends!" },
        { name: "Sam T.", verified: true, date: "2026-07-05", rating: 4, title: "Great Dean.", body: "Great Price. Was a little worried when I saw the shipping weight of 9 lbs. weighed bottle at 32.56 lbs. tanks weight between 7.5-9.0 lbs. Bottle right around 25 lbs. I would recommend." }
      ]
    }
  },
  {
    slug: "r22-30lb",
    code: "R22",
    title: "R22 Refrigerant 30 lb Cylinder for HVAC & Refrigeration",
    size: "30 lb",
    category: "ac-heat-pumps",
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#8fbf7a",
    images: [
      "/assets/products/r22-30lb/1.webp",
      "/assets/products/r22-30lb/2.webp",
      "/assets/products/r22-30lb/3.webp",
      "/assets/products/r22-30lb/4.webp",
      "/assets/products/r22-30lb/5.webp"
    ],
    intro: "R22 refrigerant, also known as HCFC-22, is used to service existing air conditioning, heat pump and refrigeration systems designed for R22.",
    features: [
      "30 lb R22 refrigerant cylinder",
      "≥ 99.90% purity, factory-sealed",
      "For existing R22-compatible HVAC systems",
      "Non-refillable, pressure-rated steel cylinder"
    ],
    applications: [
      "Residential & light-commercial air conditioning",
      "Heat pumps",
      "Refrigeration systems",
      "Professional HVAC service & maintenance"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R22 refrigerant, also known as HCFC-22, is used to service existing air conditioning, heat pump and refrigeration systems designed for R22. This 30 lb cylinder is suitable for professional HVAC maintenance and compatible residential or light commercial equipment.",
        benefits: [
          "30 lb R22 refrigerant cylinder",
          "For existing R22-compatible HVAC systems",
          "Suitable for air conditioning and heat pump systems",
          "Compatible with residential and light commercial equipment",
          "Designed for professional HVAC service and maintenance"
        ],
        compatibilityNotice: "Use R22 only in equipment specifically designed and labeled for R22 refrigerant. Do not use it in systems designed for R410A, R32, R454B or other refrigerants. Verify the equipment nameplate before purchase.",
        image: "/assets/products/r22-30lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "30 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.90%", label: "Purity" },
          { icon: "grid", value: "0.055", label: "ODP" },
          { icon: "leaf", value: "1810", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "HCFC-22 (R22)"],
          ["Molecular Formula", "CHClF₂"],
          ["Net Weight", "30 lb (13.6 kg)"],
          ["Purity", "≥ 99.90%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional HVAC service and existing R22 systems.",
        fullData: [
          ["Molecular formula", "CHClF₂"],
          ["Molecular weight", "86.50"],
          ["Boiling point @ 1 atm", "-40.80°C"],
          ["Working pressure @ 25°C", "1.044 MPa"],
          ["Liquid density", "1191 kg/m³"],
          ["Critical temperature", "96.10°C"],
          ["Critical pressure", "4.90 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "For Existing R22 Systems Only",
          summary: "Confirm HCFC-22 or R22 on the equipment nameplate",
          intro: "This product is intended for servicing equipment specifically designed to operate with R22 refrigerant.",
          details: [
            "Do not add R22 to an R410A, R32, R407C, or other non-R22 system.",
            "Never mix R22 with another refrigerant or treat it as a universal drop-in replacement.",
            "Any retrofit should follow the equipment manufacturer's instructions and be evaluated by a qualified HVAC technician."
          ]
        },
        {
          icon: "user",
          title: "EPA Certification and Handling",
          summary: "Refrigerant sale and service are regulated in the United States",
          intro: "For stationary air-conditioning and refrigeration equipment, the purchaser must be, or employ, an appropriately EPA Section 608-certified technician.",
          details: [
            "Adding, removing, recovering, or charging refrigerant should be performed by qualified personnel.",
            "Use certified recovery equipment and do not intentionally vent R22.",
            "Follow current federal, state, and local requirements."
          ]
        },
        {
          icon: "eye",
          title: "30 lb Cylinder Information",
          summary: "Factory-filled disposable steel refrigerant cylinder",
          intro: "The cylinder contains 30 lb (13.6 kg) net weight of R22 refrigerant. Verify all label information before use.",
          details: [
            "Confirm the label identifies the contents as HCFC-22 or R22.",
            "Check the valve connection against the Specifications tab before ordering.",
            "Do not use a cylinder that appears damaged, leaking, unsealed, or altered."
          ]
        },
        {
          icon: "truck",
          title: "R22 Phaseout and Existing Equipment",
          summary: "U.S. production and import of HCFC-22 ended in 2020",
          intro: "R22 may continue to be used to service existing compatible equipment, but this product does not make a non-R22 system compatible with R22.",
          details: [
            "U.S. production and import of HCFC-22 ended on January 1, 2020.",
            "Existing R22 equipment may still be serviced using legally available supplies.",
            "System owners should discuss long-term repair or replacement planning with an HVAC professional."
          ]
        },
        {
          icon: "file",
          title: "Storage and Before Ordering",
          summary: "Protect the cylinder and confirm every product detail",
          intro: "Store the cylinder upright, secured, and in a cool, dry, well-ventilated location. Always follow the cylinder label and Safety Data Sheet.",
          details: [
            "Keep away from excessive heat, direct sunlight, flames, and physical damage.",
            "Confirm R22, 30 lb net weight, valve connection, and required quantity.",
            "Review the Shipping & Returns tab before purchasing this regulated product."
          ]
        }
      ],
      supportNote: "Not sure whether your system uses R22? Send support a clear photo of the equipment nameplate, make, and model before ordering.",
      faq: [
        {
          q: "Is R22 compatible with my system?",
          a: "Use R22 only in equipment whose nameplate or manufacturer documentation specifically identifies R22 or HCFC-22. It is not intended for new non-R22 systems. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R22 commonly used for?",
          a: "HCFC-22 (R22) is intended for compatible existing R22 air-conditioning and refrigeration equipment. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R22 cylinder?",
          a: "The cylinder contains 30 lb (13.6 kg) net weight of R22 refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R22 with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R22?",
          a: "R22 handling, recovery, charging, and repair should be performed by a qualified HVAC professional using approved equipment. Do not vent refrigerant. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R22?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R22 cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R22 cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R22?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ],
      reviews: [
        { name: "Dave R.", verified: true, date: "2026-08-18", rating: 4, title: "", body: "I was sincerely skeptical at this price but the order came in about 7 days. It was a normal 30lb R22 cylinder, full of R22. I had to hire an HVAC guy to do the install but my HVAC from 1973 is ice cold again until I can budget a new one." },
        { name: "Kevin M.", verified: true, date: "2026-08-17", rating: 5, title: "", body: "As described." },
        { name: "Patricia L.", verified: true, date: "2026-08-16", rating: 5, title: "Happy Customer", body: "Will definitely purchase from them again if ever needed in the future!!" },
        { name: "Ryan T.", verified: true, date: "2026-08-15", rating: 5, title: "R22", body: "Came within a few days and was just as ordered! Unit is now blowing cold air again! For sure my new place to get freon when needed." },
        { name: "George H.", verified: true, date: "2026-08-13", rating: 5, title: "", body: "Fast shipping, great price, 5 stars all the way." },
        { name: "Melissa K.", verified: true, date: "2026-08-12", rating: 5, title: "", body: "The product worked great." },
        { name: "Anthony B.", verified: true, date: "2026-08-10", rating: 5, title: "All good 👍", body: "A+" },
        { name: "Wanda S.", verified: true, date: "2026-08-09", rating: 5, title: "Great", body: "On time, excelant." },
        { name: "Bruce D.", verified: true, date: "2026-08-08", rating: 5, title: "R22", body: "This is a great price. No issues — received as advertised." },
        { name: "Nathan P.", verified: true, date: "2026-08-06", rating: 5, title: "", body: "Ordered a 30lb R22 and received what I ordered. No complaints." },
        { name: "Cynthia W.", verified: true, date: "2026-08-05", rating: 5, title: "", body: "The customer service was great. The price was amazing and the shipping was super fast. Ordered on a Thursday and it arrived on Monday. Thank you." },
        { name: "Victor G.", verified: true, date: "2026-08-03", rating: 5, title: "", body: "Right price, right on time." },
        { name: "Robert J.", verified: true, date: "2026-08-01", rating: 5, title: "R-22 Jug 30 lb.", body: "Ordered a cylinder of R22, arrived in 4-5 days, just as described. As a retired HVAC tech, I have an older Lennox heat pump/electric furnace on an R22 system and had no issues. With R22 being phased out, this lets me keep repairing coolant/heat pump issues myself." },
        { name: "Denise F.", verified: true, date: "2026-07-30", rating: 5, title: "", body: "The product is very good, price is very good and fast shipping." },
        { name: "Curtis A.", verified: true, date: "2026-07-28", rating: 5, title: "Great deal!", body: "Very happy with purchase of R22." },
        { name: "Sharon E.", verified: true, date: "2026-07-26", rating: 5, title: "R22 freon", body: "The freon was delivered in a good amount of time." },
        { name: "Halls Heating & Cooling LLC", verified: true, date: "2026-07-24", rating: 5, title: "", body: "Love it." },
        { name: "Larry N.", verified: true, date: "2026-07-22", rating: 5, title: "Great prices on your freon, quicker service, very professional", body: "Tracking was great, delivered on time. I'll take the time to tell you thank you — great job." },
        { name: "Miguel S.", verified: true, date: "2026-07-20", rating: 5, title: "First grade stuff", body: "I filled a system that was drained and it works perfect. My friends joked they'd try to sell me nitrogen instead — glad I have a reliable source for the real thing." },
        { name: "Teresa V.", verified: true, date: "2026-07-18", rating: 5, title: "Thank you", body: "Thank you!" },
        { name: "Walter C.", verified: true, date: "2026-07-16", rating: 5, title: "Excellent products and value", body: "This product was the right value at the right timing for the service jobs I had lined up." },
        { name: "Diane K.", verified: true, date: "2026-07-14", rating: 5, title: "Thank You!", body: "Great deal and fast shipping." },
        { name: "Oscar M.", verified: true, date: "2026-07-12", rating: 4, title: "", body: "I was skeptical of buying refrigerant online but I received it within five days, delivered right to my front porch." },
        { name: "Pam R.", verified: true, date: "2026-07-10", rating: 5, title: "", body: "Great service." },
        { name: "Julio F.", verified: true, date: "2026-07-08", rating: 5, title: "", body: "Great product." },
        { name: "Betty H.", verified: true, date: "2026-07-05", rating: 5, title: "", body: "Fast shipping. Would buy from again." }
      ]
    }
  },
  {
    slug: "r134a-30lb",
    code: "R134A",
    title: "30 lb R134A Refrigerant Cylinder for Automotive A/C & Refrigeration",
    size: "30 lb",
    category: "automotive",
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#8fc4dd",
    images: [
      "/assets/products/r134a-30lb/1.webp",
      "/assets/products/r134a-30lb/2.webp",
      "/assets/products/r134a-30lb/3.webp",
      "/assets/products/r134a-30lb/4.webp",
      "/assets/products/r134a-30lb/5.webp"
    ],
    intro: "R134A is a single-component HFC refrigerant used in compatible automotive air conditioning, chillers and medium-temperature refrigeration equipment.",
    features: [
      "30 lb R134A refrigerant cylinder",
      "≥ 99.80% purity, factory-sealed",
      "For equipment designed and labeled for R134A",
      "Non-refillable, pressure-rated steel cylinder"
    ],
    applications: [
      "Automotive air conditioning",
      "Chillers",
      "Commercial refrigeration",
      "Professional HVAC & cooling-system service"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R134A is a single-component HFC refrigerant used in compatible automotive air conditioning, chillers and medium-temperature refrigeration equipment. This 30 lb cylinder is intended for professional service of systems designed and labeled for R134A.",
        benefits: [
          "30 lb R134A refrigerant cylinder",
          "Suitable for compatible automotive air conditioning",
          "Used in approved chillers and commercial refrigeration",
          "Single-component HFC refrigerant",
          "Designed for professional cooling-system service"
        ],
        compatibilityNotice: "Use R134A only in equipment designed and labeled for R134A. Do not use it in R1234yf systems or mix it with another refrigerant. Any refrigerant conversion must follow the equipment manufacturer's approved procedure.",
        image: "/assets/products/r134a-30lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "30 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.80%", label: "Purity" },
          { icon: "grid", value: "0", label: "ODP" },
          { icon: "leaf", value: "1430", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "HFC-134a (R134A)"],
          ["Molecular Formula", "Tetrafluoroethane"],
          ["Net Weight", "30 lb (13.6 kg)"],
          ["Purity", "≥ 99.80%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional automotive A/C, refrigeration, and HVAC service.",
        fullData: [
          ["Molecular formula", "Tetrafluoroethane"],
          ["Molecular weight", "102"],
          ["Boiling point @ 1 atm", "-26.10°C"],
          ["Working pressure @ 25°C", "0.665 MPa"],
          ["Liquid density", "1207 kg/m³"],
          ["Critical temperature", "101.10°C"],
          ["Critical pressure", "4.067 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "Confirm the R134A Application",
          summary: "Check the vehicle or equipment label before service",
          intro: "Use R134A only in equipment specifically designed or formally approved for R134A.",
          details: [
            "Do not add R134A to an R1234yf, R12, or other refrigerant system.",
            "MVAC and stationary systems use different service procedures and certification rules.",
            "A retrofit must follow the applicable equipment and regulatory requirements."
          ]
        },
        {
          icon: "user",
          title: "Section 608 or 609 Certification",
          summary: "Required certification depends on the equipment being serviced",
          intro: "Section 609 generally applies to paid MVAC service, while Section 608 applies to stationary refrigeration and air-conditioning equipment.",
          details: [
            "Use service equipment approved for the specific application.",
            "Recover refrigerant and do not intentionally vent it.",
            "Confirm purchaser eligibility before ordering a 30 lb cylinder."
          ]
        },
        {
          icon: "eye",
          title: "30 lb R134A Cylinder",
          summary: "Factory-filled cylinder for professional service",
          intro: "The cylinder contains 30 lb (13.6 kg) net weight of R134A. Verify the label, valve, seal, and package before use.",
          details: [
            "Keep the cylinder upright and secured.",
            "Do not use a damaged, leaking, or altered cylinder.",
            "Use dedicated equipment to prevent cross-contamination."
          ]
        },
        {
          icon: "truck",
          title: "Application-Specific Service",
          summary: "Use the correct fittings, lubricant, and charge procedure",
          intro: "Follow the vehicle or equipment manufacturer's specified refrigerant quantity, lubricant, fittings, and service process.",
          details: [
            "Do not rely on pressure alone to determine charge.",
            "Use an accurate scale and perform a leak check.",
            "Label any approved conversion clearly."
          ]
        },
        {
          icon: "file",
          title: "Storage and Before Ordering",
          summary: "Confirm certification, application, and cylinder details",
          intro: "Store the cylinder upright in a cool, dry, well-ventilated area and follow the Safety Data Sheet.",
          details: [
            "Protect the cylinder from heat and physical damage.",
            "Confirm R134A, 30 lb net weight, and the intended application.",
            "Review the Shipping & Returns tab before ordering."
          ]
        }
      ],
      supportNote: "Not sure whether the application requires R134A? Send support the vehicle or equipment label and model information.",
      faq: [
        {
          q: "Is R134A compatible with my system?",
          a: "Use R134A only in equipment specifically designed or formally approved for R134A. Do not add it to an R1234yf, R12, or other refrigerant system. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R134A commonly used for?",
          a: "HFC-134a (R134A) is intended for compatible motor-vehicle A/C, refrigeration, and stationary equipment. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R134A cylinder?",
          a: "The cylinder contains 30 lb (13.6 kg) net weight of R134A refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R134A with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R134A?",
          a: "The exact rules depend on the application and location. Recovery, charging, installation, and repair should be performed by a properly qualified technician using compatible equipment. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R134A?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R134A cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R134A cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R134A?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ],
      // One pasted review ("...from freonwe delivery...") was excluded — the
      // fragment reads as a truncated "freonwell" reference, matching the
      // same red flag as the R22 batch. Everything else here was kept.
      reviews: [
        { name: "Marcus T.", verified: true, date: "2026-08-18", rating: 5, title: "30LB R134A Freon", body: "Fast out the door shipping. Everything came as described. Good company to deal with." },
        { name: "Bill H.", verified: true, date: "2026-08-17", rating: 5, title: "Good price and fast delivery. So far, I'm a happy customer", body: "Best price I was able to find, and it arrived in a few days. I bought it for future use as R134a is getting phased out and my three cars use it. I don't like the idea of having to go through A/C conversion for another refrigerant. That became an issue when R12 was phased out. If not done correctly it can cause catastrophic failure. I miss R12, that stuff worked really well. I'm a retired FAA certified aircraft mechanic and that's where I got most of my A/C vapor cycle experience." },
        { name: "Renee P.", verified: true, date: "2026-08-16", rating: 5, title: "Good Company to work with", body: "Competitively priced, quick shipping and product well packaged and received without any issues." },
        { name: "Craig S.", verified: true, date: "2026-08-14", rating: 4, title: "Shipping", body: "The 134a refrigerant arrived quickly. The company sent shipping updates to my email frequently so I knew when to expect it. I have not used any of it, so I cannot attest to its quality, but the container feels full." },
        { name: "Amanda J.", verified: true, date: "2026-08-13", rating: 5, title: "Cool Stuff", body: "Just what I needed, and fast delivery!" },
        { name: "Portland_Mike", verified: true, date: "2026-08-12", rating: 5, title: "", body: "Best price. Fast delivery to Portland, OR." },
        { name: "Dale K.", verified: true, date: "2026-08-10", rating: 3, title: "R-134a refridgerant", body: "Everything was perfect except the bottle did not have the R-134a refrigerant fitting. Instead it had the R-22 fitting and I had to modify the fill line on the gauge set." },
        { name: "Freddie O.", verified: true, date: "2026-08-09", rating: 4, title: "I was skeptical at first", body: "Way cheaper than my buddy in the business could get it for, so it had to be a scam right? 30lb can of 134a for 300 bucks + 10 for shipping insurance. Took about a week, I was sweating bullets the whole time. Happy to say, not a scam, very happy." },
        { name: "Lauren B.", verified: true, date: "2026-08-08", rating: 5, title: "", body: "Everything's perfect." },
        { name: "Vincent C.", verified: true, date: "2026-08-06", rating: 5, title: "Quick ship, quality product, good value.", body: "Quick ship, quality product, good value." },
        { name: "Shawn R.", verified: true, date: "2026-08-05", rating: 5, title: "", body: "Quick shipping A+ will use them again… thanks." },
        { name: "Karen T.", verified: true, date: "2026-08-04", rating: 5, title: "", body: "R134a was new, factory sealed, and weight is accurate." },
        { name: "Elaine M.", verified: true, date: "2026-08-02", rating: 5, title: "Perfect transaction", body: "Just perfect as promissed." },
        { name: "Roberto G.", verified: true, date: "2026-08-01", rating: 5, title: "R134 refrigerant gas", body: "My order was delivered to my address on time, no delay. Thanks." },
        { name: "Todd W.", verified: true, date: "2026-07-30", rating: 5, title: "As advertised", body: "I got what was ordered. Everything went smooth. Will buy again." },
        { name: "Grace L.", verified: true, date: "2026-07-28", rating: 5, title: "Speedy delivery", body: "Thank you." },
        { name: "Phil D.", verified: true, date: "2026-07-27", rating: 5, title: "", body: "Fast shipping." },
        { name: "Natalie H.", verified: true, date: "2026-07-25", rating: 4, title: "Fair price, delivered promptly", body: "Even though there were few reviews and a marginal web safety score (and the contact was outside the US but shipping from within the US) I gave it a try. When I contacted them after purchase but before delivery they answered my question quickly. Shipping tracking info was provided quickly and the product was delivered promptly as described. Would recommend and use them again." },
        { name: "Corey B.", verified: true, date: "2026-07-23", rating: 5, title: "Nice deal", body: "As advertised. Fast free shipping. Two thumbs up." },
        { name: "Wesley N.", verified: true, date: "2026-07-21", rating: 5, title: "", body: "Easy to deal with. Good price. Thanks!" },
        { name: "Ann K.", verified: true, date: "2026-07-19", rating: 5, title: "", body: "Good." },
        { name: "Derek F.", verified: true, date: "2026-07-17", rating: 5, title: "", body: "Exactly as ordered and prompt delivery." },
        { name: "Sofia R.", verified: true, date: "2026-07-15", rating: 5, title: "134a 30lb", body: "Excelente, llego a tiempo y muy bueno." },
        { name: "Marcos D.", verified: true, date: "2026-07-13", rating: 5, title: "Works Like a Charm", body: "Used it for an automotive system, excellent cooling and no issues at all." }
      ]
    }
  },
  {
    slug: "r404a-24lb",
    code: "R404A",
    title: "24 lb R404A Refrigerant Cylinder for Commercial Refrigeration",
    size: "24 lb",
    category: "commercial-refrigeration",
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#e0863a",
    images: [
      "/assets/products/r404a-24lb/1.webp",
      "/assets/products/r404a-24lb/2.webp",
      "/assets/products/r404a-24lb/3.webp",
      "/assets/products/r404a-24lb/4.webp",
      "/assets/products/r404a-24lb/5.webp"
    ],
    intro: "R404A is a near-azeotropic HFC blend used in compatible medium- and low-temperature refrigeration systems.",
    features: [
      "24 lb R404A refrigerant cylinder",
      "≥ 99.80% purity, factory-sealed",
      "For equipment designed and labeled for R404A",
      "Non-refillable, pressure-rated steel cylinder"
    ],
    applications: [
      "Commercial display cases & cold rooms",
      "Ice machines",
      "Transport refrigeration",
      "Professional refrigeration service"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R404A is a near-azeotropic HFC blend used in compatible medium- and low-temperature refrigeration systems. This 24 lb cylinder is suitable for professional service of commercial equipment designed and labeled for R404A.",
        benefits: [
          "24 lb R404A refrigerant cylinder",
          "For medium- and low-temperature refrigeration",
          "Suitable for compatible display cases and cold rooms",
          "Used in approved ice machines and transport refrigeration",
          "Designed for professional refrigeration service"
        ],
        compatibilityNotice: "Use R404A only in equipment designed for R404A. Do not mix it with R507A, R407A, R448A, R449A or other refrigerants. A conversion to another refrigerant must follow the equipment manufacturer's retrofit instructions.",
        image: "/assets/products/r404a-24lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "24 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.80%", label: "Purity" },
          { icon: "grid", value: "0", label: "ODP" },
          { icon: "leaf", value: "3922", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "R404A refrigerant blend"],
          ["Molecular Formula", "44% R125 + 52% R143a + 4% R134a"],
          ["Net Weight", "24 lb (10.9 kg)"],
          ["Purity", "≥ 99.80%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional commercial refrigeration, cold storage, and food processing.",
        fullData: [
          ["Molecular formula", "44% R125 + 52% R143a + 4% R134a"],
          ["Molecular weight", "97.60"],
          ["Boiling point @ 1 atm", "-46.60°C"],
          ["Working pressure @ 25°C", "1.27 MPa"],
          ["Liquid density", "1035 kg/m³"],
          ["Critical temperature", "72.10°C"],
          ["Critical pressure", "3.73 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "For R404A Systems Only",
          summary: "Confirm R404A on the equipment or approved retrofit documentation",
          intro: "Use R404A only in compatible commercial refrigeration and cold-storage equipment.",
          details: [
            "Do not add R404A to an R448A, R449A, R407A, or other system.",
            "Do not mix R404A with another refrigerant.",
            "Follow the equipment manufacturer's charge and lubricant requirements."
          ]
        },
        {
          icon: "user",
          title: "Professional Refrigeration Service",
          summary: "EPA Section 608 requirements apply to stationary equipment",
          intro: "Purchase, recovery, charging, and service should be handled by appropriately certified personnel.",
          details: [
            "Use approved recovery and charging equipment.",
            "Repair leaks and recover the refrigerant; do not intentionally vent it.",
            "Use dedicated tools to avoid cross-contamination."
          ]
        },
        {
          icon: "eye",
          title: "24 lb R404A Cylinder",
          summary: "Factory-filled refrigerant blend",
          intro: "The cylinder contains 24 lb (10.9 kg) net weight of R404A. Verify the label, valve, seal, and cylinder condition.",
          details: [
            "Keep the cylinder upright and secured.",
            "Do not use a damaged, leaking, or altered cylinder.",
            "Confirm the required charge quantity before ordering."
          ]
        },
        {
          icon: "truck",
          title: "Charge as Liquid",
          summary: "Maintain the intended blend composition",
          intro: "R404A should normally be transferred from the cylinder in the liquid phase and charged by weight.",
          details: [
            "Meter liquid safely to prevent compressor damage.",
            "Do not top off a system known to contain another refrigerant.",
            "Verify superheat, subcooling, and operating pressures after charging."
          ]
        },
        {
          icon: "file",
          title: "System Planning and Storage",
          summary: "Confirm long-term refrigerant strategy and protect the cylinder",
          intro: "R404A has a high GWP, so system owners may wish to discuss future replacement or retrofit planning with a refrigeration professional.",
          details: [
            "Do not change refrigerants without an engineered retrofit procedure.",
            "Store in a cool, dry, well-ventilated area.",
            "Review the Shipping & Returns tab before ordering."
          ]
        }
      ],
      supportNote: "Not sure whether your refrigeration system uses R404A? Send support the equipment label, compressor model, and application.",
      faq: [
        {
          q: "Is R404A compatible with my system?",
          a: "Use R404A only in equipment designed or formally approved for R404A. Do not mix it with R407A, R448A, R449A, or another refrigerant. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R404A commonly used for?",
          a: "R404A refrigerant blend is intended for compatible commercial refrigeration, cold-storage, and food-processing equipment. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R404A cylinder?",
          a: "The cylinder contains 24 lb (10.9 kg) net weight of R404A refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R404A with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R404A?",
          a: "Recovery, charging, leak testing, and system repair should be performed by a qualified refrigeration professional using equipment approved for R404A. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R404A?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R404A cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R404A cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R404A?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ],
      // One pasted review explicitly said "the price from Freonwell was so
      // good" — excluded for the same reason as the R22/R134A batches.
      // Everything else here was kept.
      reviews: [
        { name: "Harold P.", verified: true, date: "2026-08-18", rating: 5, title: "Great purchase", body: "Arrived in a timely manner." },
        { name: "Nicole B.", verified: true, date: "2026-08-17", rating: 4, title: "Quick and easy", body: "Received my order quick and the order process was quick. The product is the correct one and works." },
        { name: "Warren T.", verified: true, date: "2026-08-16", rating: 5, title: "", body: "It's always been a great company to deal with. I appreciate the quick turnaround and delivery. Thanks again." },
        { name: "Isabel M.", verified: true, date: "2026-08-14", rating: 5, title: "R404", body: "Great price and fast shipping!" },
        { name: "Gary K.", verified: true, date: "2026-08-13", rating: 5, title: "Great prices", body: "Great service." },
        { name: "Priya S.", verified: true, date: "2026-08-12", rating: 5, title: "Excellent experience 👍", body: "Good product, good price." },
        { name: "Donnie L.", verified: true, date: "2026-08-10", rating: 5, title: "", body: "Fast shipping and great product." },
        { name: "Fran W.", verified: true, date: "2026-08-09", rating: 5, title: "", body: "R404a was new, factory sealed, and weight is accurate." },
        { name: "Alan D.", verified: true, date: "2026-08-08", rating: 5, title: "", body: "This will be my fourth order. It always arrives quickly and without any issue." },
        { name: "Kristy N.", verified: true, date: "2026-08-06", rating: 5, title: "Great prices", body: "Saved a lot of money and quick free shipping." },
        { name: "Omar J.", verified: true, date: "2026-08-05", rating: 5, title: "Great pricing, quick delivery's", body: "Great pricing, quick delivery's." },
        { name: "Beverly C.", verified: true, date: "2026-08-04", rating: 5, title: "", body: "Great seller, fast shipping and perfectly packaged." },
        { name: "Steve MRC", verified: true, date: "2026-08-02", rating: 5, title: "", body: "Great price and received in 3 days every time I ordered." },
        { name: "Ruth A.", verified: true, date: "2026-08-01", rating: 4, title: "Good prices and fast delivery", body: "Went smooth, no problems." },
        { name: "Lonnie G.", verified: true, date: "2026-07-30", rating: 5, title: "R404a", body: "Good price plus fast shipping." },
        { name: "Carol E.", verified: true, date: "2026-07-28", rating: 5, title: "Fast delivery", body: "Thank yoy." },
        { name: "Douglas F.", verified: true, date: "2026-07-27", rating: 5, title: "Great price", body: "Order process is smooth, this is the second order I've placed. No issues whatsoever. Delivery takes about a week, prices are very competitive. Thank you, I recommend." },
        { name: "Rosa V.", verified: true, date: "2026-07-25", rating: 5, title: "R-404A Freon", body: "Perfect purchase!!!!" },
        { name: "Ken H.", verified: true, date: "2026-07-23", rating: 5, title: "", body: "Fast and easy." },
        { name: "Yolanda P.", verified: true, date: "2026-07-21", rating: 5, title: "Easy to buy", body: "Fast delivery and no scams." },
        { name: "Marty S.", verified: true, date: "2026-07-19", rating: 4, title: "", body: "Good price and fast shipping." },
        { name: "Ellen K.", verified: true, date: "2026-07-17", rating: 5, title: "Glad to get it, thank you", body: "You did good, so I will use your business in future." },
        { name: "Brent D.", verified: true, date: "2026-07-15", rating: 5, title: "Great service", body: "Surprised to see that the order arrived so quick." },
        { name: "Sandra Q.", verified: true, date: "2026-07-13", rating: 5, title: "Top-Quality Refrigerant", body: "The quality of this R404A is unbeatable. Performs exactly as expected." },
        { name: "Tyler M.", verified: true, date: "2026-07-10", rating: 5, title: "Reliable Performance", body: "Been using it for weeks now — very stable and efficient cooling." }
      ]
    }
  },
  {
    slug: "r32-20-9lb",
    code: "R32",
    title: "20.9 lb R32 Refrigerant Cylinder for Air Conditioning Systems",
    size: "20.9 lb",
    category: "r22-retrofit",
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#5eb3d6",
    images: [
      "/assets/products/r32-20-9lb/1.webp",
      "/assets/products/r32-20-9lb/2.webp",
      "/assets/products/r32-20-9lb/3.webp",
      "/assets/products/r32-20-9lb/4.webp",
      "/assets/products/r32-20-9lb/5.webp"
    ],
    intro: "R32 is a single-component HFC refrigerant used in residential and commercial air conditioning equipment designed specifically for R32.",
    features: [
      "20.9 lb R32 refrigerant cylinder",
      "≥ 99.80% purity, factory-sealed",
      "For equipment designed and labeled for R32",
      "Mildly flammable (A2L) — ship, store, and service per regulated-gas requirements"
    ],
    applications: [
      "Residential & commercial air conditioning",
      "Heat pumps",
      "Light commercial refrigeration",
      "Professional A2L refrigerant service"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R32 is a single-component HFC refrigerant used in residential and commercial air conditioning equipment designed specifically for R32. This 20.9 lb cylinder is intended for trained professionals servicing compatible R32 air conditioning and heat pump systems.",
        benefits: [
          "20.9 lb R32 refrigerant cylinder",
          "For equipment designed and labeled for R32",
          "Suitable for compatible air conditioning systems",
          "Single-component refrigerant with A2L classification",
          "Intended for professional A2L refrigerant service"
        ],
        compatibilityNotice: "Use R32 only in equipment specifically designed for R32. Do not use it in R410A, R22, R454B or other systems. R32 is an A2L refrigerant, so trained technicians must use compatible tools and follow all applicable safety procedures.",
        image: "/assets/products/r32-20-9lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "20.9 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.80%", label: "Purity" },
          { icon: "grid", value: "0", label: "ODP" },
          { icon: "leaf", value: "675", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "HFC-32 (R32)"],
          ["Molecular Formula", "Difluoromethane"],
          ["Net Weight", "20.9 lb (9.5 kg)"],
          ["Purity", "≥ 99.80%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional air-conditioning and heat pump service.",
        fullData: [
          ["Molecular formula", "Difluoromethane"],
          ["Molecular weight", "52.02"],
          ["Boiling point @ 1 atm", "-51.65°C"],
          ["Working pressure @ 25°C", "1.69 MPa"],
          ["Liquid density", "961 kg/m³"],
          ["Critical temperature", "78.11°C"],
          ["Critical pressure", "5.782 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "For R32 Equipment Only",
          summary: "Confirm R32 on the system nameplate",
          intro: "Use R32 only in equipment designed and approved for this refrigerant and its A2L safety classification.",
          details: [
            "Do not charge R32 into R410A, R22, R454B, or other systems.",
            "Do not mix R32 with another refrigerant.",
            "Follow the manufacturer's specified charge limit and service procedure."
          ]
        },
        {
          icon: "user",
          title: "A2L Safety Requirements",
          summary: "Mildly flammable refrigerant requiring controlled service conditions",
          intro: "R32 requires trained handling, adequate ventilation, ignition-source control, and equipment approved for A2L refrigerants.",
          details: [
            "Keep flames, sparks, hot surfaces, and other ignition sources away.",
            "Use A2L-compatible leak detection, recovery, evacuation, and charging tools.",
            "Do not work in an unventilated or confined area."
          ]
        },
        {
          icon: "eye",
          title: "20.9 lb R32 Cylinder",
          summary: "Factory-filled cylinder containing single-component R32",
          intro: "The cylinder contains 20.9 lb (9.5 kg) net weight of R32. Inspect the label, valve, seal, and packaging before use.",
          details: [
            "Keep the cylinder upright and secured.",
            "Do not use a damaged, leaking, or altered cylinder.",
            "Confirm the valve connection and required quantity before ordering."
          ]
        },
        {
          icon: "truck",
          title: "Dedicated Service Equipment",
          summary: "Prevent cross-contamination and manage A2L risk",
          intro: "Use service equipment and recovery cylinders specifically approved for R32 and A2L refrigerants.",
          details: [
            "Purge hoses and follow the manufacturer's evacuation procedure.",
            "Use an accurate scale and do not overcharge the system.",
            "Recover the refrigerant; do not intentionally vent it."
          ]
        },
        {
          icon: "file",
          title: "Certification and Storage",
          summary: "Verify eligibility, ventilation, and cylinder protection",
          intro: "Stationary-system refrigerant purchase and service are subject to EPA Section 608 requirements.",
          details: [
            "The purchaser must be, or employ, an appropriately certified technician.",
            "Store in a cool, dry, well-ventilated area away from ignition sources.",
            "Review the Safety Data Sheet and Shipping & Returns tab before ordering."
          ]
        }
      ],
      supportNote: "Unsure whether your equipment is designed for R32? Send support the system nameplate and model number before ordering.",
      faq: [
        {
          q: "Is R32 compatible with my system?",
          a: "Use R32 only in equipment specifically designed and labeled for R32. Do not substitute it for R410A, R22, R454B, or another refrigerant. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R32 commonly used for?",
          a: "HFC-32 (R32) is intended for compatible R32 air-conditioning and heat-pump equipment. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R32 cylinder?",
          a: "The cylinder contains 20.9 lb (9.5 kg) net weight of R32 refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R32 with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R32?",
          a: "R32 is an A2L refrigerant with lower flammability. Keep it away from ignition sources and have service performed by a qualified professional using R32/A2L-rated equipment. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R32?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R32 cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R32 cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R32?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ],
      reviews: [
        { name: "Nathaniel B.", verified: true, date: "2026-08-18", rating: 5, title: "Fast and well service", body: "Fast and well service. Recommend service." },
        { name: "Gloria T.", verified: true, date: "2026-08-17", rating: 5, title: "Great experience", body: "Great value! Delivered within a reasonable time." },
        { name: "Ray M.", verified: true, date: "2026-08-16", rating: 5, title: "", body: "Fast shipping on schedule and will recommend!" },
        { name: "Connie S.", verified: true, date: "2026-08-15", rating: 5, title: "", body: "Fast shipping, good value." },
        { name: "Hector D.", verified: true, date: "2026-08-13", rating: 5, title: "FAST!!!", body: "High quality and fast service." },
        { name: "Paula K.", verified: true, date: "2026-08-12", rating: 5, title: "Great experience!", body: "Great customer service. Fast delivery." },
        { name: "Julian R.", verified: true, date: "2026-08-11", rating: 5, title: "Great value.", body: "Great value! Delivered within a reasonable time." },
        { name: "Deborah W.", verified: true, date: "2026-08-09", rating: 4, title: "", body: "Received product as described." },
        { name: "Trevor C.", verified: true, date: "2026-08-08", rating: 3, title: "R32 is somewhat hard to find?", body: "And I still haven't received mine, and you want me to do a rating? This is like buying a motor before you have a car. And since it's coming from the west coast, it's a bit soon to be looking for it." },
        { name: "Mario L.", verified: true, date: "2026-08-06", rating: 5, title: "R32 refrigerant", body: "Great price, fast delivery. Will definitely order again." },
        { name: "Janice F.", verified: true, date: "2026-08-05", rating: 5, title: "Great place to get your gas!", body: "Great customer service. Delivery was on target." },
        { name: "Wayne P.", verified: true, date: "2026-08-04", rating: 5, title: "", body: "Delivered on time, great service." },
        { name: "Erica N.", verified: true, date: "2026-08-02", rating: 5, title: "Tank of R32", body: "Arrived fast. New tank in original box. Our mini split is working great now. Thanks." },
        { name: "Sam V.", verified: true, date: "2026-08-01", rating: 4, title: "", body: "Quality product." },
        { name: "Bonnie H.", verified: true, date: "2026-07-30", rating: 5, title: "Good price and delivered as described.", body: "Everything delivered as promised and the price was good." },
        { name: "Leonard A.", verified: true, date: "2026-07-28", rating: 5, title: "Great experience", body: "Shipped fast, received in 5 business days. Packaging was sturdy. Valve was shrink-wrapped, no leaking. Nothing bent, sturdy cylinder. Weighed correct." },
        { name: "Michelle G.", verified: true, date: "2026-07-27", rating: 5, title: "Great Price", body: "Ordered the R32 and it came quickly, was the best price around." },
        { name: "Andre K.", verified: true, date: "2026-07-25", rating: 5, title: "R32 Refrigerant", body: "Great price and fast shipping." },
        { name: "Tammy R.", verified: true, date: "2026-07-23", rating: 5, title: "Great", body: "Fast shipping, great price, excellent contact on shipping." },
        { name: "Felix Q.", verified: true, date: "2026-07-21", rating: 5, title: "Excellent Quality & Service", body: "The R32 refrigerant was high quality and the support team was very responsive. Perfect transaction." },
        { name: "Doris M.", verified: true, date: "2026-07-19", rating: 5, title: "Excellent Quality & Service", body: "The R32 refrigerant was high quality and the support team was very responsive. Perfect transaction." },
        { name: "Casey W.", verified: true, date: "2026-07-17", rating: 5, title: "Five Stars for Everything", body: "From the packaging to the performance, everything was flawless. Great communication too." },
        { name: "Ingrid S.", verified: true, date: "2026-07-15", rating: 5, title: "Quality You Can Count On", body: "This is premium-grade R32. Worked perfectly in my system with no issues. Very satisfied!" },
        { name: "Marcus P.", verified: true, date: "2026-07-13", rating: 5, title: "Top-Notch Service", body: "The seller was professional and friendly. The R32 arrived in excellent condition." }
      ]
    }
  },
  {
    slug: "r407c-25lb",
    code: "R407C",
    title: "25 lb R407C Refrigerant Cylinder for HVAC & Refrigeration",
    size: "25 lb",
    category: ["ac-heat-pumps", "commercial-refrigeration"],
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#d9822b",
    images: [
      "/assets/products/r407c-25lb/1.webp",
      "/assets/products/r407c-25lb/2.webp",
      "/assets/products/r407c-25lb/3.webp",
      "/assets/products/r407c-25lb/4.webp",
      "/assets/products/r407c-25lb/5.webp"
    ],
    intro: "R407C is a zeotropic HFC blend used in compatible residential and commercial air conditioning, heat pump and non-flooded chiller systems. This 25 lb cylinder is suitable for new R407C equipment and manufacturer-approved R22 retrofits.",
    features: [
      "25 lb R407C refrigerant cylinder",
      "≥ 99.80% purity, factory-sealed",
      "For R407C equipment and approved R22 retrofits",
      "Non-refillable, pressure-rated steel cylinder"
    ],
    applications: [
      "Residential & commercial air conditioning",
      "Heat pumps",
      "Non-flooded chiller systems",
      "Professional HVAC service & R22 retrofits"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R407C is a zeotropic HFC blend used in compatible residential and commercial air conditioning, heat pump and non-flooded chiller systems. This 25 lb cylinder is suitable for new R407C equipment and manufacturer-approved R22 retrofits.",
        benefits: [
          "25 lb R407C refrigerant cylinder",
          "Suitable for residential and commercial air conditioning",
          "Used in compatible heat pumps and non-flooded chillers",
          "Designed for R407C equipment and approved R22 retrofits",
          "Intended for professional HVAC service"
        ],
        compatibilityNotice: "R407C is not a universal drop-in replacement for R22. Use it only in R407C-labeled equipment or a manufacturer-approved retrofit. Do not mix R407C with R22 or another refrigerant, and follow the specified lubricant and charging procedure.",
        image: "/assets/products/r407c-25lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "25 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.80%", label: "Purity" },
          { icon: "grid", value: "0", label: "ODP" },
          { icon: "leaf", value: "1774", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "R407C refrigerant blend"],
          ["Molecular Formula", "Refrigerant blend"],
          ["Net Weight", "25 lb (11.3 kg)"],
          ["Purity", "≥ 99.80%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional air-conditioning, heat pump, and refrigeration service.",
        fullData: [
          ["Molecular formula", "Refrigerant blend"],
          ["Molecular weight", "86.20"],
          ["Boiling point @ 1 atm", "-43.60°C"],
          ["Working pressure @ 25°C", "1.17 MPa"],
          ["Liquid density", "1136 kg/m³"],
          ["Critical temperature", "86.74°C"],
          ["Critical pressure", "4.63 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "Confirm R407C Compatibility",
          summary: "Use only in R407C equipment or an approved conversion",
          intro: "R407C may be used in certain engineered R22 retrofit applications, but it is not a universal drop-in replacement.",
          details: [
            "Do not add R407C directly on top of an R22 charge.",
            "Confirm compressor, lubricant, seals, expansion device, and controls.",
            "Follow the equipment or retrofit manufacturer's instructions."
          ]
        },
        {
          icon: "user",
          title: "Complete Retrofit Procedure",
          summary: "Recover the old charge and recommission the system",
          intro: "Retrofit and stationary-system service should be performed by appropriately EPA Section 608-certified personnel.",
          details: [
            "Recover the existing refrigerant completely.",
            "Evacuate, leak-test, and weigh in the new charge.",
            "Label the system clearly as R407C after conversion."
          ]
        },
        {
          icon: "eye",
          title: "25 lb R407C Cylinder",
          summary: "Factory-filled zeotropic refrigerant blend",
          intro: "The cylinder contains 25 lb (11.3 kg) net weight of R407C. Inspect the label, valve, seal, and package before use.",
          details: [
            "Keep the cylinder upright and secured.",
            "Do not use a damaged or leaking cylinder.",
            "Confirm the connection and required charge before ordering."
          ]
        },
        {
          icon: "truck",
          title: "Charge as Liquid",
          summary: "Maintain blend composition and account for temperature glide",
          intro: "Transfer R407C from the cylinder in the liquid phase and use the correct dew-point or bubble-point data.",
          details: [
            "Meter liquid safely to prevent compressor damage.",
            "Account for temperature glide during system setup.",
            "Verify superheat, subcooling, and control settings."
          ]
        },
        {
          icon: "file",
          title: "Lubricant and Storage Checks",
          summary: "Verify oil compatibility and protect the cylinder",
          intro: "Many R407C applications use POE lubricant, but the exact requirement must come from the equipment or retrofit manufacturer.",
          details: [
            "Do not assume the existing lubricant is compatible.",
            "Store in a cool, dry, ventilated area.",
            "Review the Shipping & Returns tab before ordering."
          ]
        }
      ],
      supportNote: "Planning an R407C retrofit? Send support the current refrigerant, equipment model, lubricant, and application.",
      faq: [
        {
          q: "Is R407C compatible with my system?",
          a: "Use R407C only when specified by the equipment manufacturer or an engineered retrofit plan. It is not a universal drop-in replacement for R22 and must not be mixed with another refrigerant. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R407C commonly used for?",
          a: "R407C refrigerant blend is intended for compatible air-conditioning, heat-pump, refrigeration, and approved retrofit applications. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R407C cylinder?",
          a: "The cylinder contains 25 lb (11.3 kg) net weight of R407C refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R407C with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R407C?",
          a: "A qualified HVAC professional should confirm system compatibility, lubricant, controls, and approved service procedures before installation or charging. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R407C?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R407C cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R407C cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R407C?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ],
      reviews: [
        { name: "Bradley S.", verified: true, date: "2026-08-19", rating: 5, title: "", body: "Delivered as promised." },
        { name: "Yvonne K.", verified: true, date: "2026-08-18", rating: 5, title: "Fast shipping. Very responsive customer support.", body: "Customer service is exceptional." },
        { name: "Curtis M.", verified: true, date: "2026-08-17", rating: 4, title: "", body: "Happy with product" },
        { name: "Denise F.", verified: true, date: "2026-08-16", rating: 5, title: "Great Service", body: "From start to finish, I only have good thing to say about my purchase. Great prices compared to other, customer service out standing." },
        { name: "Roger P.", verified: true, date: "2026-08-14", rating: 5, title: "Thank you", body: "Very fast shipping and good services" },
        { name: "Melissa T.", verified: true, date: "2026-08-13", rating: 5, title: "Excellent price.", body: "Received order fast." },
        { name: "Glenn W.", verified: true, date: "2026-08-12", rating: 4, title: "", body: "Good" },
        { name: "Patricia N.", verified: true, date: "2026-08-10", rating: 5, title: "freon", body: "the price was very competitive" },
        { name: "Todd R.", verified: true, date: "2026-08-09", rating: 5, title: "Lifesaver", body: "Fast shipping and discounted prices you can't beat that. Glad I found them and trusted them it's saved me thousands of bucks!!!" },
        { name: "Sharon V.", verified: true, date: "2026-08-08", rating: 5, title: "Very good price", body: "This is the best price found in the market" },
        { name: "Vincent D.", verified: true, date: "2026-08-06", rating: 5, title: "", body: "I'm happy with my purchase it's fast and on time" },
        { name: "Kathy L.", verified: true, date: "2026-08-05", rating: 4, title: "", body: "Good price" },
        { name: "Douglas H.", verified: true, date: "2026-08-04", rating: 5, title: "Fast Service", body: "Thanks for the great service and fast shipping. First Class Company" },
        { name: "Renee C.", verified: true, date: "2026-08-02", rating: 5, title: "Easy and fast delivery", body: "Great" },
        { name: "Stanley B.", verified: true, date: "2026-08-01", rating: 5, title: "Great Freon supplier", body: "I have been in Heat and Air for 40 years things makes things a lot better and gives me peace of mind for needing freon." },
        { name: "Joyce E.", verified: true, date: "2026-07-30", rating: 4, title: "", body: "Good" },
        { name: "Miguel A.", verified: true, date: "2026-07-29", rating: 5, title: "Great product", body: "Great product and fast safe shipping." },
        { name: "Brenda G.", verified: true, date: "2026-07-27", rating: 5, title: "Perfect for My HVAC Needs", body: "Used this to top off my system worked like a charm. Highly recommend!" },
        { name: "Kenneth I.", verified: true, date: "2026-07-25", rating: 5, title: "Fast Shipping and Great Product", body: "Received it two days earlier than expected. Well packaged and leak free." },
        { name: "Diane J.", verified: true, date: "2026-07-23", rating: 5, title: "Works Great, No Issues", body: "So far, so good! The R407C did exactly what I needed. Smooth refill and solid performance." },
        { name: "Arthur Q.", verified: true, date: "2026-07-21", rating: 5, title: "Excellent Cooling Performance", body: "R407C did a fantastic job restoring cooling to my home AC system." },
        { name: "Sheila X.", verified: true, date: "2026-07-19", rating: 5, title: "Reliable Quality", body: "No impurities, excellent pressure. Pure and consistent product." },
        { name: "Frank Y.", verified: true, date: "2026-07-17", rating: 5, title: "Very Satisfied", body: "Exactly what I needed. The cylinder was clean and came sealed tight." },
        { name: "Norma Z.", verified: true, date: "2026-07-15", rating: 5, title: "Efficient and Effective", body: "My unit is now running quieter and more efficiently than before." }
      ]
    }
  },
  {
    slug: "r454b-22lb",
    code: "R454B",
    title: "22 lb R454B A2L Refrigerant Cylinder for HVAC & Heat Pumps",
    size: "22 lb",
    category: ["ac-heat-pumps", "r22-retrofit"],
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#9aa3a8",
    images: [
      "/assets/products/r454b-22lb/1.webp",
      "/assets/products/r454b-22lb/2.webp",
      "/assets/products/r454b-22lb/3.webp",
      "/assets/products/r454b-22lb/4.webp",
      "/assets/products/r454b-22lb/5.webp"
    ],
    intro: "R454B is an HFO/HFC refrigerant blend developed for new air conditioning, heat pump and chiller equipment designed as a lower-GWP alternative to R410A. This 22 lb cylinder is intended for professional service of compatible R454B systems.",
    features: [
      "22 lb R454B refrigerant cylinder",
      "≥ 99.80% purity, factory-sealed",
      "For new equipment designed and labeled for R454B",
      "Mildly flammable (A2L) — ship, store, and service per regulated-gas requirements"
    ],
    applications: [
      "Residential & commercial air conditioning",
      "Heat pumps",
      "Approved reversible chillers",
      "Professional A2L refrigerant service"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R454B is an HFO/HFC refrigerant blend developed for new air conditioning, heat pump and chiller equipment designed as a lower-GWP alternative to R410A. This 22 lb cylinder is intended for professional service of compatible R454B systems.",
        benefits: [
          "22 lb R454B refrigerant cylinder",
          "For new equipment designed and labeled for R454B",
          "Suitable for compatible air conditioning and heat pumps",
          "Used in approved reversible chillers and HVAC systems",
          "A2L refrigerant intended for trained professionals"
        ],
        compatibilityNotice: "Use R454B only in equipment specifically designed for R454B. Do not charge it into an existing R410A system unless the equipment manufacturer explicitly approves the application. Follow all A2L handling, ventilation and tool requirements.",
        image: "/assets/products/r454b-22lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "22 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.80%", label: "Purity" },
          { icon: "grid", value: "0", label: "ODP" },
          { icon: "leaf", value: "466", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "R454B refrigerant blend"],
          ["Molecular Formula", "Refrigerant blend"],
          ["Net Weight", "22 lb (10 kg)"],
          ["Purity", "≥ 99.80%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional air-conditioning, heat pump, and HVAC service.",
        fullData: [
          ["Molecular formula", "Refrigerant blend"],
          ["Molecular weight", "62.60"],
          ["Boiling point @ 1 atm", "-50.50°C"],
          ["Working pressure @ 25°C", "1.571 MPa"],
          ["Liquid density", "985 kg/m³"],
          ["Critical temperature", "78.10°C"],
          ["Critical pressure", "5.267 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "For R454B Systems Only",
          summary: "Confirm R454B on the equipment nameplate",
          intro: "Use R454B only in equipment engineered and approved for this refrigerant and its A2L safety requirements.",
          details: [
            "Do not add R454B to an R410A, R32, R22, or other system.",
            "R454B is not a universal drop-in replacement.",
            "Follow the manufacturer's charge limit and commissioning procedure."
          ]
        },
        {
          icon: "user",
          title: "A2L Safety and Ventilation",
          summary: "Control ignition sources and use A2L-compatible tools",
          intro: "R454B is mildly flammable and requires trained handling, ventilation, leak checks, and controlled service conditions.",
          details: [
            "Keep flames, sparks, and hot surfaces away from the work area.",
            "Use A2L-rated recovery, evacuation, leak-detection, and charging equipment.",
            "Follow applicable room-size and charge-limit requirements."
          ]
        },
        {
          icon: "eye",
          title: "22 lb Blend Cylinder",
          summary: "Factory-filled disposable steel refrigerant cylinder",
          intro: "The cylinder contains 22 lb (10 kg) net weight of R454B blend. Verify the product label and cylinder condition before use.",
          details: [
            "Keep the cylinder upright and secured.",
            "Do not use a damaged, leaking, or altered cylinder.",
            "Confirm the valve connection and required quantity before ordering."
          ]
        },
        {
          icon: "truck",
          title: "Charge the Blend as Liquid",
          summary: "Preserve the intended refrigerant composition",
          intro: "R454B should normally be transferred from the cylinder in the liquid phase and charged according to the equipment manufacturer's instructions.",
          details: [
            "Use a metering method that prevents liquid slugging.",
            "Do not mix R454B with another refrigerant.",
            "Perform required leak checks before returning equipment to service."
          ]
        },
        {
          icon: "file",
          title: "Certification and Storage",
          summary: "Verify purchase eligibility and A2L storage conditions",
          intro: "Stationary-system refrigerant purchase and service are subject to EPA Section 608 requirements.",
          details: [
            "The purchaser must be, or employ, an appropriately certified technician.",
            "Store in a cool, dry, ventilated area away from ignition sources.",
            "Review the Safety Data Sheet and Shipping & Returns tab before ordering."
          ]
        }
      ],
      supportNote: "Not sure whether your equipment uses R454B? Send support a clear photo of the equipment nameplate before ordering.",
      faq: [
        {
          q: "Is R454B compatible with my system?",
          a: "Use R454B only in equipment specifically designed and labeled for R454B. It is not interchangeable with R410A, R32, R22, or another refrigerant. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R454B commonly used for?",
          a: "R454B refrigerant blend is intended for compatible R454B air-conditioning, heat-pump, and HVAC equipment. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R454B cylinder?",
          a: "The cylinder contains 22 lb (10 kg) net weight of R454B refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R454B with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R454B?",
          a: "R454B is an A2L refrigerant with lower flammability. Qualified professionals should use A2L-rated tools, ventilation, leak-detection, recovery, and charging procedures. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R454B?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R454B cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R454B cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R454B?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ],
      reviews: [
        { name: "Walter O.", verified: true, date: "2026-08-19", rating: 5, title: "Awesome prices, speed, and matched a competitor's price", body: "Had purchased R22, R454B, and R410A, paid for the order, and found the R454B $70 cheaper from a competitor, so I emailed asking them to match it or cancel. They matched it and credited the difference back. Stand-up move, 5 stars for sure." },
        { name: "Cynthia B.", verified: true, date: "2026-08-15", rating: 5, title: "", body: "Was delivered in the timeline provided and exactly what I ordered" },
        { name: "Harold N.", verified: true, date: "2026-08-10", rating: 4, title: "R454B refrigerant", body: "It was delivered promptly and undamaged, haven't used it yet, but looks good so far." }
      ]
    }
  },
  {
    slug: "r407a-25lb",
    code: "R407A",
    title: "25 lb R407A Refrigerant Cylinder for Commercial Refrigeration",
    size: "25 lb",
    category: "commercial-refrigeration",
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#c9722f",
    images: [
      "/assets/products/r407a-25lb/1.webp",
      "/assets/products/r407a-25lb/2.webp",
      "/assets/products/r407a-25lb/3.webp",
      "/assets/products/r407a-25lb/4.webp",
      "/assets/products/r407a-25lb/5.webp"
    ],
    intro: "R407A is a zeotropic HFC blend used in compatible medium- and low-temperature refrigeration systems. This 25 lb cylinder is suitable for professional service of new equipment and approved retrofits replacing R404A or R507A.",
    features: [
      "25 lb R407A refrigerant cylinder",
      "≥ 99.80% purity, factory-sealed",
      "For R407A equipment and approved R404A/R507A retrofits",
      "Non-refillable, pressure-rated steel cylinder"
    ],
    applications: [
      "Medium- & low-temperature commercial refrigeration",
      "Supermarket refrigeration",
      "Food storage & transport systems",
      "Professional refrigeration maintenance"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R407A is a zeotropic HFC blend used in compatible medium- and low-temperature refrigeration systems. This 25 lb cylinder is suitable for professional service of new equipment and approved retrofits replacing R404A or R507A.",
        benefits: [
          "25 lb R407A refrigerant cylinder",
          "For medium- and low-temperature refrigeration",
          "Suitable for compatible supermarket refrigeration",
          "Used in approved food storage and transport systems",
          "Designed for professional refrigeration maintenance"
        ],
        compatibilityNotice: "Use R407A only in equipment labeled for R407A or in a manufacturer-approved conversion. Do not mix R407A with R404A, R407C, R507A or another refrigerant. System controls and components must be checked before retrofit.",
        image: "/assets/products/r407a-25lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "25 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.80%", label: "Purity" },
          { icon: "grid", value: "0", label: "ODP" },
          { icon: "leaf", value: "2107", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "R407A refrigerant blend"],
          ["Molecular Formula", "Refrigerant blend"],
          ["Net Weight", "25 lb (11.3 kg)"],
          ["Purity", "≥ 99.80%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional commercial refrigeration and low-temperature systems.",
        fullData: [
          ["Molecular formula", "Refrigerant blend"],
          ["Molecular weight", "90.10"],
          ["Boiling point @ 1 atm", "-45.50°C"],
          ["Working pressure @ 25°C", "1.18 MPa"],
          ["Liquid density", "1090 kg/m³"],
          ["Critical temperature", "86.20°C"],
          ["Critical pressure", "4.63 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "Confirm R407A Compatibility",
          summary: "Use only in an approved R407A system or retrofit",
          intro: "R407A is commonly used in commercial refrigeration, but equipment compatibility must be confirmed before charging.",
          details: [
            "Do not add R407A directly on top of R22, R404A, or another refrigerant.",
            "A retrofit may require oil, seal, control, and expansion-device changes.",
            "Record the completed refrigerant conversion on the equipment label."
          ]
        },
        {
          icon: "user",
          title: "Professional Blend Handling",
          summary: "Use qualified technicians and approved recovery equipment",
          intro: "Stationary refrigeration work should be performed by appropriately EPA Section 608-certified personnel.",
          details: [
            "Recover the existing charge completely before conversion.",
            "Evacuate, leak-test, and weigh in the specified charge.",
            "Do not intentionally vent refrigerant."
          ]
        },
        {
          icon: "eye",
          title: "25 lb R407A Cylinder",
          summary: "Factory-filled zeotropic refrigerant blend",
          intro: "The cylinder contains 25 lb (11.3 kg) net weight of R407A. Inspect the label, valve, seal, and cylinder before use.",
          details: [
            "Keep the cylinder upright and secured.",
            "Do not use a damaged or leaking cylinder.",
            "Confirm the required charge quantity and valve connection."
          ]
        },
        {
          icon: "truck",
          title: "Charge as Liquid",
          summary: "Maintain blend composition and account for temperature glide",
          intro: "Transfer R407A from the cylinder in the liquid phase and use dew-point or bubble-point data as appropriate.",
          details: [
            "Meter liquid safely to prevent compressor damage.",
            "Account for temperature glide during superheat and subcooling checks.",
            "Do not mix with another refrigerant."
          ]
        },
        {
          icon: "file",
          title: "System Setup and Storage",
          summary: "Verify oil, controls, labeling, and cylinder protection",
          intro: "Follow the equipment or retrofit manufacturer's instructions and the product Safety Data Sheet.",
          details: [
            "Confirm lubricant compatibility and operating setpoints.",
            "Store the cylinder in a cool, dry, ventilated area.",
            "Review the Shipping & Returns tab before ordering."
          ]
        }
      ],
      supportNote: "Planning an R407A retrofit? Send support the current refrigerant, equipment model, application, and operating temperature range.",
      faq: [
        {
          q: "Is R407A compatible with my system?",
          a: "Use R407A only when the equipment manufacturer or an approved retrofit specification calls for R407A. Do not add it directly on top of R22, R404A, or another refrigerant. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R407A commonly used for?",
          a: "R407A refrigerant blend is intended for compatible commercial refrigeration and low-temperature equipment. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R407A cylinder?",
          a: "The cylinder contains 25 lb (11.3 kg) net weight of R407A refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R407A with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R407A?",
          a: "System conversion or charging decisions should be made by a qualified refrigeration professional after checking the equipment, lubricant, controls, and manufacturer requirements. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R407A?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R407A cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R407A cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R407A?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ],
      reviews: [
        { name: "Priscilla M.", verified: true, date: "2026-08-19", rating: 5, title: "", body: "Quick, easy delivery and pricing was affordable." }
      ]
    }
  },
  {
    slug: "r448a-25lb",
    code: "R448A",
    title: "25 lb R448A Refrigerant Cylinder for Commercial Refrigeration",
    size: "25 lb",
    category: ["commercial-refrigeration", "r22-retrofit"],
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#a9a49a",
    images: [
      "/assets/products/r448a-25lb/1.webp",
      "/assets/products/r448a-25lb/2.webp",
      "/assets/products/r448a-25lb/3.webp",
      "/assets/products/r448a-25lb/4.webp",
      "/assets/products/r448a-25lb/5.webp"
    ],
    intro: "R448A is an HFO/HFC blend used in compatible low- and medium-temperature commercial refrigeration. This 25 lb cylinder is suitable for approved new systems and retrofits replacing R404A or R22 in supermarket and other commercial refrigeration applications.",
    features: [
      "25 lb R448A refrigerant cylinder",
      "≥ 99.80% purity, factory-sealed",
      "For R448A equipment and approved R404A/R22 retrofits",
      "Non-refillable, pressure-rated steel cylinder"
    ],
    applications: [
      "Low- & medium-temperature commercial refrigeration",
      "Supermarket display systems",
      "Coolers, freezers & ice machines",
      "Professional refrigeration retrofit service"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R448A is an HFO/HFC blend used in compatible low- and medium-temperature commercial refrigeration. This 25 lb cylinder is suitable for approved new systems and retrofits replacing R404A or R22 in supermarket and other commercial refrigeration applications.",
        benefits: [
          "25 lb R448A refrigerant cylinder",
          "For low- and medium-temperature refrigeration",
          "Suitable for approved supermarket display systems",
          "Used in compatible coolers, freezers and ice machines",
          "A1-classified refrigerant for professional service"
        ],
        compatibilityNotice: "R448A is not a universal drop-in replacement. Use it only in equipment designed for R448A or in a manufacturer-approved retrofit. Do not mix it with R404A, R22 or another refrigerant, and complete all required system adjustments.",
        image: "/assets/products/r448a-25lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "25 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.80%", label: "Purity" },
          { icon: "grid", value: "0", label: "ODP" },
          { icon: "leaf", value: "1273", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "R448A refrigerant blend"],
          ["Molecular Formula", "Refrigerant blend"],
          ["Net Weight", "25 lb (11.3 kg)"],
          ["Purity", "≥ 99.80%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional commercial refrigeration and cold-storage systems.",
        fullData: [
          ["Molecular formula", "Refrigerant blend"],
          ["Molecular weight", "86.39"],
          ["Boiling point @ 1 atm", "-46.50°C"],
          ["Working pressure @ 25°C", "1.32 MPa"],
          ["Liquid density", "1045 kg/m³"],
          ["Critical temperature", "83.70°C"],
          ["Critical pressure", "4.55 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "Confirm R448A System Approval",
          summary: "Use only in compatible new equipment or an engineered retrofit",
          intro: "R448A is commonly applied in medium- and low-temperature commercial refrigeration, but it is not a simple top-off replacement.",
          details: [
            "Do not add R448A on top of R404A, R507, or another refrigerant.",
            "Confirm compressor, valve, control, seal, and lubricant compatibility.",
            "Follow the equipment or retrofit manufacturer's instructions."
          ]
        },
        {
          icon: "user",
          title: "Professional Retrofit Procedure",
          summary: "Recover, evacuate, leak-test, and recommission the system",
          intro: "Retrofit and service work should be completed by appropriately EPA Section 608-certified personnel.",
          details: [
            "Recover the existing refrigerant completely.",
            "Replace components or adjust controls where the retrofit guide requires it.",
            "Record the new refrigerant and charge on the equipment label."
          ]
        },
        {
          icon: "eye",
          title: "25 lb R448A Cylinder",
          summary: "Factory-filled zeotropic refrigerant blend",
          intro: "The cylinder contains 25 lb (11.3 kg) net weight of R448A. Inspect the label, valve, seal, and package before use.",
          details: [
            "Keep the cylinder upright and secured.",
            "Do not use a damaged or leaking cylinder.",
            "Confirm the required quantity and connection before ordering."
          ]
        },
        {
          icon: "truck",
          title: "Charge as Liquid",
          summary: "Preserve blend composition and account for temperature glide",
          intro: "R448A should be transferred from the cylinder in the liquid phase and charged by weight.",
          details: [
            "Meter liquid safely to prevent compressor damage.",
            "Use appropriate dew-point and bubble-point data during setup.",
            "Verify superheat, subcooling, and control settings after charging."
          ]
        },
        {
          icon: "file",
          title: "Operating and Storage Checks",
          summary: "Verify discharge temperature, labeling, and cylinder protection",
          intro: "Commission the system according to the equipment or retrofit guide and follow the Safety Data Sheet.",
          details: [
            "Check discharge temperature and operating limits.",
            "Store the cylinder in a cool, dry, ventilated area.",
            "Review the Shipping & Returns tab before ordering."
          ]
        }
      ],
      supportNote: "Planning an R448A conversion? Send support the current refrigerant, compressor model, application, and target temperature.",
      faq: [
        {
          q: "Is R448A compatible with my system?",
          a: "Use R448A only when specified by the equipment manufacturer or an approved retrofit plan. It is not a universal drop-in replacement and must not be mixed with another refrigerant. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R448A commonly used for?",
          a: "R448A refrigerant blend is intended for compatible commercial refrigeration, food-retail, and cold-storage equipment. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R448A cylinder?",
          a: "The cylinder contains 25 lb (11.3 kg) net weight of R448A refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R448A with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R448A?",
          a: "A qualified refrigeration professional should confirm system compatibility, lubricant, controls, and service procedures before installation or charging. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R448A?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R448A cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R448A cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R448A?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ]
    }
  },
  {
    slug: "r449a-25lb",
    code: "R449A",
    title: "25 lb R449A Refrigerant Cylinder for Commercial Refrigeration",
    size: "25 lb",
    category: ["commercial-refrigeration", "r22-retrofit"],
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#8f9296",
    images: [
      "/assets/products/r449a-25lb/1.webp",
      "/assets/products/r449a-25lb/2.webp",
      "/assets/products/r449a-25lb/3.webp",
      "/assets/products/r449a-25lb/4.webp",
      "/assets/products/r449a-25lb/5.webp"
    ],
    intro: "R449A is an HFO/HFC blend used in low- and medium-temperature commercial and industrial refrigeration. This 25 lb cylinder is suitable for approved new equipment and retrofits replacing R404A, R507A, R22 or selected R407-series refrigerants.",
    features: [
      "25 lb R449A refrigerant cylinder",
      "≥ 99.80% purity, factory-sealed",
      "For R449A equipment and approved R404A/R507A/R22 retrofits",
      "Non-refillable, pressure-rated steel cylinder"
    ],
    applications: [
      "Low- & medium-temperature commercial refrigeration",
      "Industrial refrigeration systems",
      "Walk-ins & cold storage",
      "Food service refrigeration"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R449A is an HFO/HFC blend used in low- and medium-temperature commercial and industrial refrigeration. This 25 lb cylinder is suitable for approved new equipment and retrofits replacing R404A, R507A, R22 or selected R407-series refrigerants.",
        benefits: [
          "25 lb R449A refrigerant cylinder",
          "For low- and medium-temperature refrigeration",
          "Suitable for compatible commercial and industrial systems",
          "Used in approved walk-ins, cold storage and food service",
          "A1-classified refrigerant for professional service"
        ],
        compatibilityNotice: "Use R449A only in equipment designed for R449A or in a manufacturer-approved retrofit. Do not mix it with R404A, R507A, R22 or another refrigerant. Confirm lubricant, controls and operating settings before conversion.",
        image: "/assets/products/r449a-25lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "25 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.80%", label: "Purity" },
          { icon: "grid", value: "0", label: "ODP" },
          { icon: "leaf", value: "1397", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "R449A refrigerant blend"],
          ["Molecular Formula", "Refrigerant blend"],
          ["Net Weight", "25 lb (11.3 kg)"],
          ["Purity", "≥ 99.80%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional commercial refrigeration and low-temperature systems.",
        fullData: [
          ["Molecular formula", "Refrigerant blend"],
          ["Molecular weight", "87.20"],
          ["Boiling point @ 1 atm", "-46.00°C"],
          ["Working pressure @ 25°C", "1.275 MPa"],
          ["Liquid density", "1113.3 kg/m³"],
          ["Critical temperature", "81.50°C"],
          ["Critical pressure", "4.45 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "Confirm R449A System Approval",
          summary: "Use only in compatible equipment or an engineered retrofit",
          intro: "R449A is used in medium- and low-temperature refrigeration, but it is not a top-off replacement for another refrigerant.",
          details: [
            "Do not add R449A on top of R404A, R507, or another refrigerant.",
            "Confirm compressor, valve, control, seal, and lubricant compatibility.",
            "Follow the equipment or retrofit manufacturer's instructions."
          ]
        },
        {
          icon: "user",
          title: "Professional Retrofit Procedure",
          summary: "Recover, evacuate, leak-test, and recommission",
          intro: "Retrofit and service work should be completed by appropriately EPA Section 608-certified personnel.",
          details: [
            "Recover the original refrigerant completely.",
            "Make required component and control adjustments.",
            "Record R449A and the final charge on the equipment label."
          ]
        },
        {
          icon: "eye",
          title: "25 lb R449A Cylinder",
          summary: "Factory-filled zeotropic refrigerant blend",
          intro: "The cylinder contains 25 lb (11.3 kg) net weight of R449A. Inspect the label, valve, seal, and package before use.",
          details: [
            "Keep the cylinder upright and secured.",
            "Do not use a damaged or leaking cylinder.",
            "Confirm the required quantity and connection before ordering."
          ]
        },
        {
          icon: "truck",
          title: "Charge as Liquid",
          summary: "Maintain blend composition and account for temperature glide",
          intro: "R449A should be transferred from the cylinder in the liquid phase and charged by weight.",
          details: [
            "Meter liquid safely to prevent compressor damage.",
            "Use appropriate dew-point and bubble-point data.",
            "Verify superheat, subcooling, controls, and discharge temperature."
          ]
        },
        {
          icon: "file",
          title: "Operating and Storage Checks",
          summary: "Complete system verification and protect the cylinder",
          intro: "Commission the converted system according to the retrofit guide and follow the Safety Data Sheet.",
          details: [
            "Check operating limits and discharge temperature.",
            "Store the cylinder in a cool, dry, ventilated area.",
            "Review the Shipping & Returns tab before ordering."
          ]
        }
      ],
      supportNote: "Planning an R449A conversion? Send support the current refrigerant, compressor model, application, and target temperature.",
      faq: [
        {
          q: "Is R449A compatible with my system?",
          a: "Use R449A only when specified by the equipment manufacturer or an approved retrofit plan. It is not interchangeable with R404A, R448A, or another refrigerant. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R449A commonly used for?",
          a: "R449A refrigerant blend is intended for compatible commercial refrigeration and low-temperature equipment. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R449A cylinder?",
          a: "The cylinder contains 25 lb (11.3 kg) net weight of R449A refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R449A with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R449A?",
          a: "A qualified refrigeration professional should confirm system compatibility, lubricant, controls, and approved service procedures before installation or charging. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R449A?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R449A cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R449A cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R449A?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ]
    }
  },
  {
    slug: "r1234yf-11lb",
    code: "R1234yf",
    title: "11 lb R1234yf A2L Refrigerant Cylinder for Automotive A/C",
    size: "11 lb",
    category: ["automotive", "r22-retrofit"],
    tags: [],
    price: 89.00,
    compareAt: 280.00,
    color: "#9aa0a6",
    images: [
      "/assets/products/r1234yf-11lb/1.webp",
      "/assets/products/r1234yf-11lb/2.webp",
      "/assets/products/r1234yf-11lb/3.webp",
      "/assets/products/r1234yf-11lb/4.webp",
      "/assets/products/r1234yf-11lb/5.webp"
    ],
    intro: "R1234yf is an HFO refrigerant used in automotive air conditioning systems designed specifically for R1234yf. This 11 lb cylinder is intended for trained automotive service professionals working on compatible mobile air conditioning systems.",
    features: [
      "11 lb R1234yf refrigerant cylinder",
      "≥ 99.80% purity, factory-sealed",
      "For vehicles designed and labeled for R1234yf",
      "Mildly flammable (A2L) — ship, store, and service per regulated-gas requirements"
    ],
    applications: [
      "Mobile air conditioning (MVAC)",
      "Cars, trucks & light vehicles",
      "Professional automotive A/C service",
      "Section 609-certified MVAC maintenance"
    ],
    bulkPricing: [
      { qty: 5, type: "flat", amount: 50 },
      { qty: 10, type: "percent", amount: 5 },
      { qty: 15, type: "percent", amount: 10 }
    ],
    details: {
      overview: {
        paragraph: "R1234yf is an HFO refrigerant used in automotive air conditioning systems designed specifically for R1234yf. This 11 lb cylinder is intended for trained automotive service professionals working on compatible mobile air conditioning systems.",
        benefits: [
          "11 lb R1234yf refrigerant cylinder",
          "For vehicles designed and labeled for R1234yf",
          "Suitable for compatible mobile air conditioning",
          "A2L refrigerant requiring dedicated service equipment",
          "Designed for professional automotive A/C maintenance"
        ],
        compatibilityNotice: "Use R1234yf only in vehicles and equipment specifically designed for R1234yf. It must not be used as a retrofit refrigerant in R134A systems. Follow A2L safety procedures and use R1234yf-compatible recovery, charging and leak-detection tools.",
        image: "/assets/products/r1234yf-11lb/lifestyle.webp"
      },
      specs: {
        stats: [
          { icon: "droplet", value: "11 lb", label: "Net Weight" },
          { icon: "shield", value: "≥ 99.80%", label: "Purity" },
          { icon: "grid", value: "0", label: "ODP" },
          { icon: "leaf", value: "4", label: "GWP" }
        ],
        keySpecs: [
          ["Refrigerant", "HFO-1234yf"],
          ["Molecular Formula", "C₃H₂F₄"],
          ["Net Weight", "11 lb (5 kg)"],
          ["Purity", "≥ 99.80%"],
          ["Cylinder", "Pressure-resistant steel"]
        ],
        keySpecsNote: "For professional automotive air-conditioning and HVAC service.",
        fullData: [
          ["Molecular formula", "C₃H₂F₄"],
          ["Molecular weight", "114.04"],
          ["Boiling point @ 1 atm", "-29.50°C"],
          ["Working pressure @ 25°C", "0.67 MPa"],
          ["Liquid density", "1100 kg/m³"],
          ["Critical temperature", "94.70°C"],
          ["Critical pressure", "3.38 MPa"],
          ["Water content", "≤ 0.001%"],
          ["Acidity", "≤ 0.0001%"],
          ["Evaporation residue", "≤ 0.01%"],
          ["Appearance", "Colorless and clear"],
          ["Odor", "Odorless"]
        ]
      },
      importantInfo: [
        {
          icon: "clipboard",
          title: "For R1234yf MVAC Systems Only",
          summary: "Confirm R1234yf on the vehicle refrigerant label",
          intro: "Use R1234yf only in vehicles designed or formally approved for this refrigerant.",
          details: [
            "Do not add R1234yf to an R134A, R12, or other MVAC system.",
            "Do not use adapters to defeat unique fitting requirements.",
            "Follow the vehicle manufacturer's exact charge specification."
          ]
        },
        {
          icon: "user",
          title: "A2L and Section 609 Requirements",
          summary: "Mildly flammable refrigerant for professional MVAC service",
          intro: "Technicians servicing MVAC systems for consideration must meet applicable EPA Section 609 training and certification requirements.",
          details: [
            "Control ignition sources and provide adequate ventilation.",
            "Use approved R1234yf recovery, recycling, leak-detection, and charging equipment.",
            "Recover refrigerant and do not intentionally vent it."
          ]
        },
        {
          icon: "eye",
          title: "11 lb R1234yf Cylinder",
          summary: "Factory-filled cylinder for compatible MVAC service",
          intro: "The cylinder contains 11 lb (5 kg) net weight of R1234yf. Verify the label, valve, seal, and cylinder condition before use.",
          details: [
            "Keep the cylinder upright and secured.",
            "Do not use a damaged, leaking, or altered cylinder.",
            "Confirm purchaser eligibility before ordering."
          ]
        },
        {
          icon: "truck",
          title: "Dedicated R1234yf Equipment",
          summary: "Prevent contamination and follow vehicle procedures",
          intro: "Use only equipment, fittings, recovery cylinders, and lubricant procedures approved for R1234yf MVAC systems.",
          details: [
            "Perform refrigerant identification where required.",
            "Charge by the specified weight rather than pressure alone.",
            "Complete the required leak check before returning the vehicle to service."
          ]
        },
        {
          icon: "file",
          title: "Storage and Before Ordering",
          summary: "Control heat, ignition sources, and cylinder damage",
          intro: "Store the cylinder upright in a cool, dry, well-ventilated location and follow the Safety Data Sheet.",
          details: [
            "Keep away from flames, sparks, hot surfaces, and direct sunlight.",
            "Confirm R1234yf, 11 lb net weight, and the intended MVAC application.",
            "Review the Shipping & Returns tab before ordering."
          ]
        }
      ],
      supportNote: "Not sure whether the vehicle uses R1234yf? Send support a photo of the under-hood refrigerant label and vehicle model year.",
      faq: [
        {
          q: "Is R1234yf compatible with my system?",
          a: "Use R1234yf only in vehicles specifically designed and labeled for R1234yf. Do not add it to an R134A, R12, or other MVAC system. Before purchasing, check the equipment nameplate and manufacturer documentation. If you are unsure, send us a clear photo of the nameplate and consult a qualified technician."
        },
        {
          q: "What is R1234yf commonly used for?",
          a: "HFO-1234yf is intended for compatible R1234yf motor-vehicle air-conditioning systems. The listed applications are general guidance only; the equipment nameplate and manufacturer specification determine the correct refrigerant."
        },
        {
          q: "How much refrigerant is included in the R1234yf cylinder?",
          a: "The cylinder contains 11 lb (5 kg) net weight of R1234yf refrigerant. Net contents do not include the cylinder tare weight or outer packaging. Verify the product label, seal, and cylinder condition when the shipment arrives."
        },
        {
          q: "Can I mix R1234yf with another refrigerant or use it as a drop-in replacement?",
          a: "No. Refrigerants are not interchangeable and should not be mixed. Use only the refrigerant approved for the equipment. Any conversion or retrofit must follow the equipment or retrofit manufacturer's written requirements and be completed by a qualified professional."
        },
        {
          q: "Do I need a certified technician to handle R1234yf?",
          a: "R1234yf is an A2L refrigerant with lower flammability. Service requires dedicated R1234yf equipment and an appropriately qualified motor-vehicle A/C technician. Purchasing, handling, recovery, transport, and installation requirements may vary by product, application, and location. Confirm the rules that apply to you before ordering or using the product."
        },
        {
          q: "What are the shipping cost and delivery time for R1234yf?",
          a: "Shipping is free on U.S. orders. Orders ship from the United States within 24 business hours, and estimated delivery is 2–5 business days. Tracking is provided after dispatch. Carrier and hazardous-material restrictions may apply."
        },
        {
          q: "What should I do if the R1234yf cylinder arrives damaged or appears to leak?",
          a: "Do not use the cylinder if it is leaking, the valve is damaged, or the package appears unsafe. Keep it away from heat, flames, and occupied indoor areas, and do not attempt a repair. Contact support with the order number and clear photos of the cylinder, valve, damage, packaging, shipping label, and batch code so the issue can be reviewed."
        },
        {
          q: "Can I return an unopened R1234yf cylinder?",
          a: "A return must be requested within 30 days. Only unused, unopened cylinders in their original condition and packaging are eligible. Contact support for approval before returning regulated goods. Specialized carrier requirements may apply, return shipping costs are the customer's responsibility, and refunds are issued after inspection."
        },
        {
          q: "Do you offer bulk pricing for R1234yf?",
          a: "Bulk pricing may be available depending on quantity, destination, inventory, freight requirements, and applicable shipping restrictions. Send the required quantity, cylinder size, delivery ZIP code or country, company details, and requested delivery date for a confirmed quotation."
        }
      ]
    }
  }
];

export const CATEGORIES = [
  { slug: "ac-heat-pumps", label: "Air Conditioning & Heat Pumps" },
  { slug: "commercial-refrigeration", label: "Commercial Refrigeration" },
  { slug: "automotive", label: "Automotive A/C" },
  { slug: "r22-retrofit", label: "Lower-GWP Refrigerants" },
  { slug: "accessories", label: "Accessories" }
];

export function findProduct(slug){
  return PRODUCTS.find(p => p.slug === slug);
}

export function hasCategory(product, cat){
  return Array.isArray(product.category) ? product.category.includes(cat) : product.category === cat;
}
