const cropInfo = {
    "Paddy": "Paddy or rice is the staple food for over half the world's population, primarily grown in flooded fields called paddies. It thrives in warm, humid conditions and requires substantial water resources throughout its growing season.",
    "Wheat": "Wheat is a cereal grain cultivated worldwide, serving as a primary ingredient for bread, pasta, and other flour-based products. It grows best in temperate regions with well-drained fertile soil and moderate rainfall.",
    "Chickpea": "Chickpea is a protein-rich legume widely used in Mediterranean, Middle Eastern and Indian cuisines. This drought-resistant crop improves soil fertility by fixing atmospheric nitrogen and grows well in semi-arid climates.",
    "Tomatoes": "Tomatoes are versatile fruits used as vegetables in cooking, rich in lycopene and vitamin C. They grow as perennial plants in tropical climates but are cultivated as annuals in temperate regions.",
    "Chillies": "Chillies are spicy peppers used globally for flavoring and medicinal purposes, containing capsaicin which gives them their heat. They thrive in warm climates with well-drained soil and plenty of sunlight.",
    "Sugarcane": "Sugarcane is a tall perennial grass cultivated in tropical and subtropical regions for sugar production. It requires abundant water and nutrients, typically taking 12-18 months to mature for harvest.",
    "Sunflower": "Sunflower is an important oilseed crop grown for its edible seeds and oil. These heliotropic plants follow the sun's movement and prefer long, warm summers with well-drained soil.",
    "Sorghum (Jowar)": "Sorghum, known as Jowar in India, is a drought-resistant cereal grain used for food, fodder and biofuel. It thrives in hot, arid conditions where other grains might fail, making it crucial for food security.",
    "Pigeonpea (Tur)": "Pigeonpea is a perennial legume crop important in tropical regions, rich in protein and used in various cuisines. It improves soil fertility and grows well in semi-arid conditions with minimal inputs.",
    "Soybean": "Soybean is a high-protein oilseed used for oil extraction, animal feed and numerous processed foods. This versatile legume fixes atmospheric nitrogen and requires warm growing conditions with adequate moisture.",
    "Cotton": "Cotton is a fiber crop primarily grown for textile production, with seeds used for oil and animal feed. It requires a long frost-free period, plenty of sunshine and moderate rainfall for optimal growth.",
    "Rabi Crop": "Rabi crops are winter-season crops sown in autumn and harvested in spring, including wheat, barley, mustard and peas. These crops generally require irrigation in India's predominantly dry winter season.",
    "Linseed": "Linseed or flax is grown both for its seeds (source of linseed oil) and fiber. This cool-season crop thrives in deep, moist, fertile soils and has been cultivated since ancient times.",
    "Green gram": "Green gram (mung bean) is a small, green legume used in sprouts, dals and various Asian dishes. This short-duration crop grows well in warm climates with well-drained soils.",
    "Black gram": "Black gram (urad dal) is a black lentil commonly used in South Asian cuisine. This protein-rich pulse crop grows well in hot, humid conditions and improves soil fertility.",
    "Notable Crop": "Notable crops refer to regionally important cultivars with specific local significance, often adapted to unique growing conditions. These may include heritage varieties or crops with particular cultural importance.",
    "Orange": "Oranges are citrus fruits rich in vitamin C and antioxidants, grown in tropical and subtropical regions. These evergreen trees require well-drained soil and protection from frost for optimal fruit production.",
    "Traditional Crop": "Traditional crops are heritage varieties cultivated for generations, often with cultural and historical importance. These may include landraces and indigenous cultivars adapted to local conditions over centuries.",
    "Groundnut": "Groundnut (peanut) is an important oilseed and food crop grown in tropical and subtropical regions. The plant's unique characteristic is that its pods develop underground after pollination.",
    "Moong (Green Gram)": "Moong or green gram is a small, green legume used extensively in Asian cooking. This short-duration crop is drought-tolerant and enriches soil through nitrogen fixation.",
    "Urd (Black Gram)": "Urd or black gram is a black lentil widely used in Indian cuisine, especially in dal preparations. This warm-season crop grows well in various soil types and improves soil fertility.",
    "Sesamum": "Sesamum is an ancient oilseed crop grown for its oil-rich seeds used in cooking and condiments. This drought-tolerant crop thrives in hot climates with well-drained soils.",
    "Bananas": "Bananas are tropical fruits grown in warm, humid climates, rich in potassium and carbohydrates. These herbaceous plants require deep, fertile soil and regular moisture for optimal production.",
    "Onions": "Onions are bulb vegetables used as a base flavor in cuisines worldwide. These biennial plants are cultivated as annuals and require well-drained, fertile soil for good bulb development."
};

const diseaseInfo = {
    // Paddy Diseases
    "Rice Blast": {
        description: "Rice blast is a devastating fungal disease caused by Magnaporthe oryzae, characterized by diamond-shaped lesions with gray centers and brown margins on leaves. The disease spreads rapidly in warm (25-28°C), humid conditions and can cause yield losses up to 100% in severe cases. Spores are dispersed by wind and rain splash, infecting plants through natural openings or wounds.",
        image: "https://www.google.com/search?q=rice+blast+disease&tbm=isch",
        causes: "Fungus Magnaporthe oryzae",
        symptoms: "Diamond-shaped lesions on leaves, collar rot on stems, panicle blast on grains",
        prevention: "Use resistant varieties, avoid excess nitrogen, practice field sanitation"
    },
    "Sheath Blight": {
        description: "Sheath blight, caused by Rhizoctonia solani, is a destructive fungal disease affecting rice plants. Symptoms include oval or irregular lesions on leaf sheaths that later spread to stems. The disease thrives in high humidity (85-100%) and temperatures around 28-32°C, commonly appearing in densely planted fields with excessive nitrogen fertilization.",
        image: "https://www.google.com/search?q=sheath+blight+disease&tbm=isch",
        causes: "Fungus Rhizoctonia solani",
        symptoms: "Oval lesions on sheaths, rotting of stems, white fungal growth",
        prevention: "Avoid dense planting, manage nitrogen levels, use biocontrol agents"
    },
    "Bacterial Blight": {
        description: "Bacterial blight (Xanthomonas oryzae pv. oryzae) causes yellow-white lesions along leaf margins that later turn grayish-white. The bacteria enter through hydathodes or wounds and spread through rain splash or irrigation water. Warm temperatures (25-30°C) with high humidity and wind-driven rain favor disease development, potentially causing 20-50% yield loss.",
        image: "https://www.google.com/search?q=bacterial+blight+disease&tbm=isch",
        causes: "Bacterium Xanthomonas oryzae",
        symptoms: "Yellow-white streaks on leaves, wilting, drying of leaves",
        prevention: "Use disease-free seeds, avoid wounding plants, apply copper-based bactericides"
    },
    "Brown Spot": {
        description: "Brown spot, caused by Cochliobolus miyabeanus, appears as small, circular brown spots on leaves and grains. The disease is more severe in nutrient-deficient soils, particularly when silicon is lacking. It thrives in warm (20-30°C), humid conditions and can reduce yields by 5-45%, affecting grain quality.",
        image: "https://www.google.com/search?q=brown+spot+disease&tbm=isch",
        causes: "Fungus Cochliobolus miyabeanus",
        symptoms: "Small circular brown spots on leaves and grains",
        prevention: "Maintain proper nutrition, use resistant varieties, practice crop rotation"
    },
    "Tungro Virus": {
        description: "Tungro is a viral disease transmitted by green leafhoppers, causing stunting, yellow-orange leaf discoloration and reduced tillering. The disease complex involves two viruses (RTBV and RTSV) and is most damaging during early growth stages. Tungro outbreaks often follow leafhopper population surges, potentially causing complete crop failure.",
        image: "https://www.google.com/search?q=tungro+virus+disease&tbm=isch",
        causes: "Rice tungro bacilliform virus (RTBV) and Rice tungro spherical virus (RTSV)",
        symptoms: "Stunted growth, yellow-orange leaves, reduced tillering",
        prevention: "Control leafhoppers, use resistant varieties, practice synchronous planting"
    },

    // Wheat Diseases
    "Rust": {
        description: "Wheat rust appears as reddish-brown powdery pustules on leaves and stems, caused by Puccinia species. The disease spreads via wind-dispersed spores over long distances, favored by cool temperatures (15-22°C) and high humidity. Rust can reduce yields by 10-70% and requires timely fungicide application for control.",
        image: "https://www.google.com/search?q=wheat+rust+disease&tbm=isch",
        causes: "Fungi Puccinia triticina (leaf rust), Puccinia graminis (stem rust), Puccinia striiformis (stripe rust)",
        symptoms: "Reddish-brown pustules on leaves and stems",
        prevention: "Plant resistant varieties, apply fungicides, avoid late nitrogen applications"
    },
    "Powdery Mildew": {
        description: "Powdery mildew forms white fungal growth on wheat leaves, reducing photosynthesis. Caused by Blumeria graminis, it thrives in moderate temperatures (15-22°C) with high humidity but no free water. Dense plantings with poor air circulation favor disease spread, potentially reducing yields by 10-40% if untreated.",
        image: "https://www.google.com/search?q=powdery+mildew+wheat&tbm=isch",
        causes: "Fungus Blumeria graminis",
        symptoms: "White powdery patches on leaves, stems and heads",
        prevention: "Plant resistant varieties, avoid dense planting, apply sulfur-based fungicides"
    },
    "Karnal Bunt": {
        description: "Karnal bunt (Tilletia indica) affects wheat grains, causing partial conversion to black powdery spore masses with a fishy odor. The fungus spreads through contaminated seeds or soil and favors cool, humid conditions during flowering. While yield loss is minimal (1-2%), the disease causes significant economic impact due to quarantine restrictions.",
        image: "https://www.google.com/search?q=karnal+bunt+disease&tbm=isch",
        causes: "Fungus Tilletia indica",
        symptoms: "Black powdery spore masses in grains, fishy odor",
        prevention: "Use certified disease-free seeds, avoid late sowing, practice crop rotation"
    },
    "Leaf Blight": {
        description: "Leaf blight in wheat appears as elliptical, light brown lesions with yellow halos, caused by Bipolaris sorokiniana. The disease thrives in warm (20-30°C), humid conditions and can cause significant yield reduction (10-30%) by damaging photosynthetic tissue. Infected seeds and crop debris serve as primary inoculum sources.",
        image: "https://www.google.com/search?q=leaf+blight+wheat&tbm=isch",
        causes: "Fungus Bipolaris sorokiniana",
        symptoms: "Elliptical brown lesions with yellow halos on leaves",
        prevention: "Use disease-free seeds, practice crop rotation, apply fungicides"
    },
    "Head Blight": {
        description: "Fusarium head blight (scab) affects wheat spikes, causing bleached spikelets and shriveled grains. Caused by Fusarium species, the disease produces mycotoxins harmful to humans and animals. Warm, wet weather during flowering favors infection, potentially causing 10-50% yield loss and significant quality reduction.",
        image: "https://www.google.com/search?q=head+blight+wheat&tbm=isch",
        causes: "Fungi Fusarium graminearum and other Fusarium species",
        symptoms: "Bleached spikelets, shriveled grains, pinkish mold on heads",
        prevention: "Plant resistant varieties, avoid planting after corn, apply fungicides at flowering"
    },

    // Chickpea Diseases
    "Fusarium Wilt": {
        description: "Fusarium wilt is a soil-borne fungal disease causing yellowing and wilting of plants. The fungus can persist in soil for many years, infecting through roots and blocking vascular tissues. It thrives in warm soil temperatures (25-30°C) and affects many crops including tomatoes, bananas, and legumes.",
        image: "https://www.google.com/search?q=fusarium+wilt+disease&tbm=isch",
        causes: "Fungus Fusarium oxysporum f. sp. ciceris",
        symptoms: "Yellowing and wilting of plants, brown discoloration of vascular tissue",
        prevention: "Use resistant varieties, practice long crop rotations, solarize soil"
    },
    "Ascochyta Blight": {
        description: "Ascochyta blight is a destructive fungal disease of chickpeas causing lesions on leaves, stems and pods. The disease spreads rapidly during cool, wet weather and can cause complete yield loss in severe cases. Spores are spread by rain splash and wind.",
        image: "https://www.google.com/search?q=ascochyta+blight+chickpea&tbm=isch",
        causes: "Fungus Ascochyta rabiei",
        symptoms: "Circular brown lesions with dark margins on leaves, stems and pods",
        prevention: "Use disease-free seeds, apply fungicides, practice crop rotation"
    },
    "Botrytis Gray Mold": {
        description: "Botrytis gray mold is a fungal disease that affects chickpea plants during flowering and podding stages. It thrives in cool, humid conditions and can cause significant yield losses by infecting flowers and developing pods.",
        image: "https://www.google.com/search?q=botrytis+gray+mold+chickpea&tbm=isch",
        causes: "Fungus Botrytis cinerea",
        symptoms: "Gray fuzzy mold on flowers and pods, rotting of affected tissues",
        prevention: "Avoid dense planting, improve air circulation, apply fungicides during flowering"
    },
    "Root Rot": {
        description: "Root rot in chickpeas is caused by several soil-borne pathogens that attack the root system. The disease is more severe in waterlogged or poorly drained soils and can cause significant stand reduction and yield loss.",
        image: "https://www.google.com/search?q=chickpea+root+rot&tbm=isch",
        causes: "Fungi Rhizoctonia solani, Fusarium spp. and Pythium spp.",
        symptoms: "Root discoloration and decay, wilting plants, stunted growth",
        prevention: "Improve soil drainage, use resistant varieties, practice crop rotation"
    },
    "Stunt": {
        description: "Stunt is a viral disease of chickpeas transmitted by leafhoppers. Infected plants show severe stunting, yellowing and reduced pod formation. The disease can cause significant yield losses in affected fields.",
        image: "https://www.google.com/search?q=chickpea+stunt+disease&tbm=isch",
        causes: "Chickpea stunt virus",
        symptoms: "Severe stunting, yellowing of leaves, reduced pod formation",
        prevention: "Control leafhopper vectors, use resistant varieties, remove infected plants"
    },

    // Tomato Diseases
    "Early Blight": {
        description: "Early blight is a fungal disease of tomatoes causing concentric rings on older leaves that eventually yellow and drop. The disease reduces fruit production and quality, thriving in warm, humid weather with alternating wet/dry periods.",
        image: "https://www.google.com/search?q=tomato+early+blight&tbm=isch",
        causes: "Fungus Alternaria solani",
        symptoms: "Concentric rings on leaves, stem cankers, fruit lesions",
        prevention: "Remove infected debris, space plants properly, apply copper-based fungicides"
    },
    "Late Blight": {
        description: "Late blight is a devastating disease of tomatoes causing rapid destruction of foliage and fruit. The water mold thrives in cool, wet conditions and spreads quickly through airborne spores. Famous for causing the Irish Potato Famine.",
        image: "https://www.google.com/search?q=tomato+late+blight&tbm=isch",
        causes: "Oomycete Phytophthora infestans",
        symptoms: "Water-soaked lesions, white mold growth, rapid wilting",
        prevention: "Apply protectant fungicides, improve air circulation, remove volunteers"
    },
    "Bacterial Spot": {
        description: "Bacterial spot causes small, dark lesions on tomato leaves, stems and fruit. The disease reduces marketability and spreads through rain splash and contaminated tools. Warm, wet weather favors disease development.",
        image: "https://www.google.com/search?q=tomato+bacterial+spot&tbm=isch",
        causes: "Bacterium Xanthomonas vesicatoria",
        symptoms: "Small dark spots with yellow halos on leaves and fruit",
        prevention: "Use disease-free transplants, avoid overhead irrigation, apply copper sprays"
    },
    "Leaf Curl Virus": {
        description: "Tomato leaf curl virus causes upward curling, yellowing and stunting of leaves. Transmitted by whiteflies, the disease significantly reduces fruit production and quality. Infected plants cannot be cured.",
        image: "https://www.google.com/search?q=tomato+leaf+curl+virus&tbm=isch",
        causes: "Tomato leaf curl virus",
        symptoms: "Upward leaf curling, yellowing, stunted growth",
        prevention: "Control whiteflies, use resistant varieties, remove infected plants"
    },
    "Fusarium Wilt": {
        description: "Fusarium wilt is a soil-borne disease causing one-sided wilting and death of tomato plants. The fungus blocks vascular tissues and persists in soil for years. Warm soil temperatures favor disease development.",
        image: "https://www.google.com/search?q=tomato+fusarium+wilt&tbm=isch",
        causes: "Fungus Fusarium oxysporum f. sp. lycopersici",
        symptoms: "Yellowing and wilting on one side of plant, brown vascular tissue",
        prevention: "Plant resistant varieties, solarize soil, practice long crop rotations"
    },

    // Chillies Diseases
    "Anthracnose": {
        description: "Anthracnose is a fungal disease causing sunken, dark lesions on chilli fruits. The disease spreads rapidly during warm, wet periods and can cause significant post-harvest losses. Infected fruits become unmarketable.",
        image: "https://www.google.com/search?q=chilli+anthracnose&tbm=isch",
        causes: "Fungi Colletotrichum capsici and C. acutatum",
        symptoms: "Sunken circular lesions with black margins on fruits",
        prevention: "Use disease-free seeds, avoid overhead irrigation, apply fungicides"
    },
    "Powdery Mildew": {
        description: "Powdery mildew forms white fungal growth on chilli leaves, reducing photosynthesis. Unlike many diseases, it thrives in dry conditions with high humidity but no free water. Severe infections can defoliate plants.",
        image: "https://www.google.com/search?q=chilli+powdery+mildew&tbm=isch",
        causes: "Fungus Leveillula taurica",
        symptoms: "White powdery patches on leaf undersides, yellowing of upper surfaces",
        prevention: "Improve air circulation, apply sulfur-based fungicides, avoid dense planting"
    },
    "Bacterial Spot": {
        description: "Bacterial spot causes angular lesions on chilli leaves and raised scabs on fruits. The disease spreads through contaminated seeds, transplants and splashing water. Warm, wet weather favors disease development.",
        image: "https://www.google.com/search?q=chilli+bacterial+spot&tbm=isch",
        causes: "Bacterium Xanthomonas vesicatoria",
        symptoms: "Angular water-soaked spots on leaves, raised scabs on fruits",
        prevention: "Use disease-free seeds, avoid overhead irrigation, apply copper sprays"
    },
    "Leaf Curl": {
        description: "Chilli leaf curl virus causes upward curling, yellowing and distortion of leaves. Transmitted by whiteflies, the disease stunts plant growth and reduces fruit yield. Infected plants cannot be cured.",
        image: "https://www.google.com/search?q=chilli+leaf+curl+virus&tbm=isch",
        causes: "Chilli leaf curl virus",
        symptoms: "Upward curling and distortion of leaves, stunted growth",
        prevention: "Control whiteflies, use resistant varieties, remove infected plants"
    },
    "Fruit Rot": {
        description: "Fruit rot in chillies is caused by several fungi that infect mature fruits, especially after rainfall. The disease causes significant post-harvest losses if proper drying and storage aren't maintained.",
        image: "https://www.google.com/search?q=chilli+fruit+rot&tbm=isch",
        causes: "Fungi Colletotrichum spp., Alternaria spp., and others",
        symptoms: "Soft rotting of fruits, often starting at the blossom end",
        prevention: "Avoid wounding fruits, practice proper drying, apply fungicides before harvest"
    },

    // Sugarcane Diseases
    "Red Rot": {
        description: "Red rot is a destructive fungal disease of sugarcane causing reddening of internal tissues and stalk rot. The pathogen spreads through infected setts and survives in crop residues for years. Severe infections can cause complete yield loss.",
        image: "https://www.google.com/search?q=sugarcane+red+rot&tbm=isch",
        causes: "Fungus Colletotrichum falcatum",
        symptoms: "Reddening of internal tissues with white patches, stalk rot",
        prevention: "Use disease-free setts, practice crop rotation, remove infected plants"
    },
    "Wilt Disease": {
        description: "Sugarcane wilt is a soil-borne disease causing yellowing, stunting and eventual death of plants. The fungus blocks vascular tissues and persists in soil for long periods. The disease is more severe in ratoon crops.",
        image: "https://www.google.com/search?q=sugarcane+wilt&tbm=isch",
        causes: "Fungus Fusarium sacchari",
        symptoms: "Yellowing of leaves, stunted growth, red discoloration of vascular tissue",
        prevention: "Use resistant varieties, practice crop rotation, avoid ratooning in infected fields"
    },
    "Smut": {
        description: "Sugarcane smut produces black whip-like structures instead of normal shoots. The disease reduces cane yield and quality, with spores spreading through wind or contaminated equipment. Some varieties show resistance.",
        image: "https://www.google.com/search?q=sugarcane+smut&tbm=isch",
        causes: "Fungus Sporisorium scitamineum",
        symptoms: "Black whip-like structures emerging from shoots",
        prevention: "Use disease-free setts, plant resistant varieties, rogue infected plants"
    },
    "Leaf Scald": {
        description: "Leaf scald is a bacterial disease of sugarcane causing white pencil-line streaks on leaves. The disease has both chronic and acute phases, with the acute phase causing rapid wilting and death of plants.",
        image: "https://www.google.com/search?q=sugarcane+leaf+scald&tbm=isch",
        causes: "Bacterium Xanthomonas albilineans",
        symptoms: "White pencil-line streaks on leaves, wilting, plant death",
        prevention: "Use disease-free setts, rogue infected plants, avoid mechanical transmission"
    },
    "Ratoon Stunting": {
        description: "Ratoon stunting is a bacterial disease causing stunted growth in ratoon crops. The pathogen spreads through infected setts and contaminated harvesting equipment. Hot water treatment of setts can control the disease.",
        image: "https://www.google.com/search?q=sugarcane+ratoon+stunting&tbm=isch",
        causes: "Bacterium Leifsonia xyli subsp. xyli",
        symptoms: "Stunted growth, shortened internodes, reduced tillering",
        prevention: "Use disease-free setts, practice hot water treatment, disinfect equipment"
    },

    // Sunflower Diseases
    "Sclerotinia Rot": {
        description: "Sclerotinia rot is a destructive fungal disease of sunflower causing stem rot and head mold. The pathogen produces hard black survival structures (sclerotia) that persist in soil for years. The disease can cause complete yield loss.",
        image: "https://www.google.com/search?q=sunflower+sclerotinia+rot&tbm=isch",
        causes: "Fungus Sclerotinia sclerotiorum",
        symptoms: "Water-soaked lesions on stems, white mold growth, lodging of plants",
        prevention: "Practice long crop rotations, improve field drainage, avoid dense planting"
    },
    "Alternaria Spot": {
        description: "Alternaria leaf spot causes dark brown lesions on sunflower leaves, reducing photosynthetic area. The disease spreads rapidly during warm, humid weather and can defoliate plants under severe infection.",
        image: "https://www.google.com/search?q=sunflower+alternaria+leaf+spot&tbm=isch",
        causes: "Fungi Alternaria helianthi and A. zinniae",
        symptoms: "Dark brown circular spots with concentric rings on leaves",
        prevention: "Use resistant varieties, practice crop rotation, apply fungicides"
    },
    "Downy Mildew": {
        description: "Downy mildew is an oomycete disease causing yellow angular spots on sunflower leaves with white fungal growth underneath. Systemically infected plants show stunted growth and may fail to produce heads.",
        image: "https://www.google.com/search?q=sunflower+downy+mildew&tbm=isch",
        causes: "Oomycete Plasmopara halstedii",
        symptoms: "Yellow angular spots on leaves, white mold on undersides, stunted growth",
        prevention: "Use resistant varieties, treat seeds with fungicides, practice crop rotation"
    },
    "Rust": {
        description: "Sunflower rust produces reddish-brown pustules on leaves that reduce photosynthetic efficiency. The disease can cause significant yield loss if it develops early in the season and conditions remain favorable.",
        image: "https://www.google.com/search?q=sunflower+rust&tbm=isch",
        causes: "Fungus Puccinia helianthi",
        symptoms: "Reddish-brown pustules on leaves, premature defoliation",
        prevention: "Plant resistant varieties, apply fungicides, remove volunteer plants"
    },
    "Charcoal Rot": {
        description: "Charcoal rot is a soil-borne fungal disease that causes premature drying and death of sunflower plants during drought stress. The pathogen produces black microsclerotia in stem tissues.",
        image: "https://www.google.com/search?q=sunflower+charcoal+rot&tbm=isch",
        causes: "Fungus Macrophomina phaseolina",
        symptoms: "Premature drying, black microsclerotia in stem tissues, lodging",
        prevention: "Maintain plant vigor, irrigate during drought, practice crop rotation"
    },

    // Sorghum (Jowar) Diseases
    "Anthracnose": {
        description: "Anthracnose is a fungal disease of sorghum causing red lesions on leaves and stalk rot. The disease can kill plants under favorable conditions and reduces both grain and forage quality.",
        image: "https://www.google.com/search?q=sorghum+anthracnose&tbm=isch",
        causes: "Fungus Colletotrichum graminicola",
        symptoms: "Red lesions on leaves, stalk rot, plant death",
        prevention: "Plant resistant varieties, practice crop rotation, remove crop residues"
    },
    "Downy Mildew": {
        description: "Downy mildew causes chlorotic streaks and downy growth on sorghum leaves. Systemically infected plants show stunted growth and may produce no grain. The pathogen survives in soil and seeds.",
        image: "https://www.google.com/search?q=sorghum+downy+mildew&tbm=isch",
        causes: "Oomycete Peronosclerospora sorghi",
        symptoms: "Chlorotic streaks on leaves, white downy growth, stunted plants",
        prevention: "Use disease-free seeds, plant resistant varieties, practice crop rotation"
    },
    "Grain Mold": {
        description: "Grain mold is a complex of fungi that discolor and degrade sorghum grain quality. The disease develops when wet weather occurs during grain filling and maturation stages.",
        image: "https://www.google.com/search?q=sorghum+grain+mold&tbm=isch",
        causes: "Fungi Fusarium, Curvularia, Alternaria and others",
        symptoms: "Discolored grains, fungal growth on seed surface",
        prevention: "Plant resistant varieties, time planting to avoid wet weather at harvest"
    },
    "Rust": {
        description: "Sorghum rust produces orange pustules on leaves that reduce photosynthetic efficiency. While rarely causing significant yield loss, severe infections can weaken plants and reduce grain fill.",
        image: "https://www.google.com/search?q=sorghum+rust&tbm=isch",
        causes: "Fungus Puccinia purpurea",
        symptoms: "Orange pustules on leaves, premature defoliation",
        prevention: "Plant resistant varieties, apply fungicides if necessary"
    },
    "Ergot": {
        description: "Ergot is a fungal disease of sorghum that replaces grains with dark sclerotia containing toxic alkaloids. The disease is dangerous to livestock and reduces grain yield and quality.",
        image: "https://www.google.com/search?q=sorghum+ergot&tbm=isch",
        causes: "Fungus Claviceps africana",
        symptoms: "Dark sclerotia protruding from florets, honeydew secretion",
        prevention: "Plant resistant varieties, control flowering time, rogue infected heads"
    },

    // Pigeonpea (Tur) Diseases
    "Wilt": {
        description: "Fusarium wilt is a soil-borne disease of pigeonpea causing sudden wilting and death of plants. The fungus persists in soil for many years and is more severe in light soils.",
        image: "https://www.google.com/search?q=pigeonpea+wilt&tbm=isch",
        causes: "Fungus Fusarium udum",
        symptoms: "Sudden wilting, yellowing of leaves, vascular browning",
        prevention: "Plant resistant varieties, practice long crop rotations, improve soil health"
    },
    "Sterility Mosaic": {
        description: "Sterility mosaic is a viral disease of pigeonpea transmitted by mites. Infected plants show bushy growth and flower abortion without pod formation, leading to complete yield loss.",
        image: "https://www.google.com/search?q=pigeonpea+sterility+mosaic&tbm=isch",
        causes: "Pigeonpea sterility mosaic virus",
        symptoms: "Bushy growth, small leaves, flower abortion",
        prevention: "Control mite vectors, plant resistant varieties, rogue infected plants"
    },
    "Phytophthora Blight": {
        description: "Phytophthora blight is a water mold disease causing stem cankers and root rot in pigeonpea. The disease develops during periods of excessive soil moisture and can kill plants rapidly.",
        image: "https://www.google.com/search?q=pigeonpea+phytophthora+blight&tbm=isch",
        causes: "Oomycete Phytophthora drechsleri",
        symptoms: "Water-soaked stem lesions, root rot, plant collapse",
        prevention: "Improve field drainage, avoid waterlogging, practice crop rotation"
    },
    "Alternaria Blight": {
        description: "Alternaria blight causes target-like lesions on pigeonpea leaves and stems. The disease defoliates plants prematurely under warm, humid conditions with prolonged leaf wetness.",
        image: "https://www.google.com/search?q=pigeonpea+alternaria+blight&tbm=isch",
        causes: "Fungus Alternaria alternata",
        symptoms: "Circular brown lesions with concentric rings on leaves",
        prevention: "Improve air circulation, apply fungicides, remove crop debris"
    },
    "Stem Canker": {
        description: "Stem canker is a fungal disease causing sunken lesions on pigeonpea stems that girdle and kill branches. The disease spreads through rain splash and survives in infected crop residues.",
        image: "https://www.google.com/search?q=pigeonpea+stem+canker&tbm=isch",
        causes: "Fungus Macrophomina phaseolina",
        symptoms: "Sunken stem lesions, branch dieback, plant death",
        prevention: "Avoid plant stress, practice crop rotation, remove infected plants"
    },

    // Soybean Diseases
    "Rust": {
        description: "Soybean rust is a devastating fungal disease that can cause complete defoliation under favorable conditions. The disease spreads rapidly via wind-dispersed spores and requires specific management strategies.",
        image: "https://www.google.com/search?q=soybean+rust&tbm=isch",
        causes: "Fungus Phakopsora pachyrhizi",
        symptoms: "Small raised pustules on leaf undersides, yellow spots on upper surfaces",
        prevention: "Plant early-maturing varieties, apply fungicides, monitor fields regularly"
    },
    "Bacterial Blight": {
        description: "Bacterial blight causes angular water-soaked spots on soybean leaves that later turn necrotic. The disease spreads through rain splash and is more severe during cool, wet weather.",
        image: "https://www.google.com/search?q=soybean+bacterial+blight&tbm=isch",
        causes: "Bacterium Pseudomonas savastanoi pv. glycinea",
        symptoms: "Angular water-soaked spots with yellow halos on leaves",
        prevention: "Use disease-free seeds, avoid overhead irrigation, practice crop rotation"
    },
    "Charcoal Rot": {
        description: "Charcoal rot is a soil-borne fungal disease causing premature death of soybean plants during drought stress. The pathogen produces black microsclerotia in root and stem tissues.",
        image: "https://www.google.com/search?q=soybean+charcoal+rot&tbm=isch",
        causes: "Fungus Macrophomina phaseolina",
        symptoms: "Premature yellowing, black microsclerotia in stem tissues",
        prevention: "Maintain plant vigor, irrigate during drought, practice crop rotation"
    },
    "Pod Blight": {
        description: "Pod blight is caused by several fungi that infect soybean pods, reducing seed quality and yield. The disease develops when wet weather occurs during pod fill and maturation.",
        image: "https://www.google.com/search?q=soybean+pod+blight&tbm=isch",
        causes: "Fungi Colletotrichum truncatum, Phomopsis spp., and others",
        symptoms: "Discolored pods, shriveled seeds, fungal growth on pods",
        prevention: "Plant resistant varieties, time planting to avoid wet weather at harvest"
    },
    "Mosaic Virus": {
        description: "Soybean mosaic virus causes mottling, leaf distortion and stunting of plants. The virus is seed-borne and also transmitted by aphids, reducing both yield and seed quality.",
        image: "https://www.google.com/search?q=soybean+mosaic+virus&tbm=isch",
        causes: "Soybean mosaic virus",
        symptoms: "Mottled leaves, leaf distortion, stunted growth",
        prevention: "Use virus-free seeds, control aphid vectors, rogue infected plants"
    },

    // Cotton Diseases
    "Boll Rot": {
        description: "Boll rot is caused by several fungi that infect cotton bolls, reducing fiber quality and yield. The disease develops when prolonged wet conditions occur during boll development.",
        image: "https://www.google.com/search?q=cotton+boll+rot&tbm=isch",
        causes: "Fungi Fusarium spp., Aspergillus spp., and others",
        symptoms: "Discolored bolls, fungal growth inside bolls, poor fiber development",
        prevention: "Avoid excessive nitrogen, improve air circulation, apply fungicides"
    },
    "Root Rot": {
        description: "Root rot is a soil-borne disease causing decay of cotton root systems. The disease is more severe in waterlogged or compacted soils and can cause significant stand reduction.",
        image: "https://www.google.com/search?q=cotton+root+rot&tbm=isch",
        causes: "Fungus Phymatotrichopsis omnivora",
        symptoms: "Root discoloration and decay, wilting plants, plant death",
        prevention: "Improve soil drainage, practice crop rotation, use resistant varieties"
    },
    "Leaf Curl": {
        description: "Cotton leaf curl virus causes upward curling, thickening and yellowing of leaves. Transmitted by whiteflies, the disease stunts plant growth and reduces boll production significantly.",
        image: "https://www.google.com/search?q=cotton+leaf+curl+virus&tbm=isch",
        causes: "Cotton leaf curl virus",
        symptoms: "Upward leaf curling, leaf thickening, yellowing",
        prevention: "Control whiteflies, plant resistant varieties, rogue infected plants"
    },
    "Alternaria Blight": {
        description: "Alternaria blight causes circular brown spots on cotton leaves that can lead to defoliation. The disease spreads rapidly during warm, humid weather with prolonged leaf wetness.",
        image: "https://www.google.com/search?q=cotton+alternaria+blight&tbm=isch",
        causes: "Fungus Alternaria macrospora",
        symptoms: "Circular brown spots with concentric rings on leaves",
        prevention: "Improve air circulation, apply fungicides, remove crop debris"
    },
    "Bacterial Blight": {
        description: "Bacterial blight causes angular water-soaked spots on cotton leaves and blackening of veins. The disease spreads through contaminated seeds, crop debris and splashing water.",
        image: "https://www.google.com/search?q=cotton+bacterial+blight&tbm=isch",
        causes: "Bacterium Xanthomonas citri pv. malvacearum",
        symptoms: "Angular water-soaked spots, blackening of veins, boll rot",
        prevention: "Use disease-free seeds, practice crop rotation, apply copper sprays"
    },

    // Banana Diseases
    "Panama Disease": {
        description: "Panama disease (Fusarium wilt) is a soil-borne fungal disease threatening global banana production. The tropical race 4 (TR4) strain affects Cavendish bananas and persists in soil for decades. There is no cure for infected plants.",
        image: "https://www.google.com/search?q=banana+panama+disease&tbm=isch",
        causes: "Fungus Fusarium oxysporum f. sp. cubense",
        symptoms: "Yellowing leaves, splitting of pseudostem, vascular discoloration",
        prevention: "Use disease-free plants, prevent soil movement, plant resistant cultivars"
    },
    "Sigatoka": {
        description: "Sigatoka is a leaf spot disease that reduces banana photosynthetic area and fruit yield. The disease spreads rapidly during periods of high humidity and rainfall, requiring frequent fungicide applications.",
        image: "https://www.google.com/search?q=banana+sigatoka&tbm=isch",
        causes: "Fungi Mycosphaerella fijiensis (Black Sigatoka) and M. musicola (Yellow Sigatoka)",
        symptoms: "Streaks on leaves progressing to large necrotic spots",
        prevention: "Improve air circulation, apply fungicides, remove infected leaves"
    },
    "Bunchy Top": {
        description: "Bunchy top is a viral disease causing stunted growth with leaves bunching at the top of banana plants. Transmitted by aphids, the disease prevents normal fruit production and requires complete plant removal.",
        image: "https://www.google.com/search?q=banana+bunchy+top&tbm=isch",
        causes: "Banana bunchy top virus",
        symptoms: "Stunted growth, narrow upright leaves, dark green streaks",
        prevention: "Control aphid vectors, use virus-free plants, rogue infected plants"
    },
    "Mosaic": {
        description: "Banana mosaic viruses cause chlorotic streaks and mottling on leaves. Several viruses cause mosaic symptoms, all reducing plant vigor and fruit production. Some are transmitted by aphids or through infected planting material.",
        image: "https://www.google.com/search?q=banana+mosaic+virus&tbm=isch",
        causes: "Cucumber mosaic virus, Banana streak virus, and others",
        symptoms: "Chlorotic streaks, mottling, leaf distortion",
        prevention: "Use virus-free plants, control insect vectors, rogue infected plants"
    },
    "Anthracnose": {
        description: "Anthracnose causes dark sunken lesions on banana fruits that expand during ripening and transport. The disease is a significant cause of post-harvest losses and requires proper fruit handling and fungicide treatments.",
        image: "https://www.google.com/search?q=banana+anthracnose&tbm=isch",
        causes: "Fungus Colletotrichum musae",
        symptoms: "Sunken black lesions on fruits, especially on ripening bananas",
        prevention: "Proper fruit handling, post-harvest fungicide dips, field sanitation"
    },

    // Onion Diseases
    "Purple Blotch": {
        description: "Purple blotch is a fungal disease causing purple-tinged oval lesions with concentric rings on onion leaves. The disease leads to leaf dieback and reduces bulb size and quality significantly.",
        image: "https://www.google.com/search?q=onion+purple+blotch&tbm=isch",
        causes: "Fungus Alternaria porri",
        symptoms: "Purple-tinged oval lesions with concentric rings",
        prevention: "Practice crop rotation, apply fungicides, improve air circulation"
    },
    "Stemphylium Blight": {
        description: "Stemphylium blight causes small yellow lesions that turn brown and coalesce, defoliating onion plants. The disease spreads rapidly during periods of alternating wet and dry conditions.",
        image: "https://www.google.com/search?q=onion+stemphylium+blight&tbm=isch",
        causes: "Fungus Stemphylium vesicarium",
        symptoms: "Small yellow lesions turning brown, leaf dieback",
        prevention: "Avoid overhead irrigation, apply fungicides, practice crop rotation"
    },
    "Downy Mildew": {
        description: "Downy mildew causes pale oval lesions with purple fungal growth on onion leaves during humid conditions. The pathogen survives in bulbs and spreads via wind-dispersed spores between fields.",
        image: "https://www.google.com/search?q=onion+downy+mildew&tbm=isch",
        causes: "Oomycete Peronospora destructor",
        symptoms: "Pale oval lesions, purple mold growth, leaf collapse",
        prevention: "Plant resistant varieties, avoid overcrowding, apply fungicides"
    },
    "Basal Rot": {
        description: "Basal rot is a soil-borne fungal disease causing bulb rot starting at the base during storage. The pathogen infects through roots in the field but symptoms often appear post-harvest.",
        image: "https://www.google.com/search?q=onion+basal+rot&tbm=isch",
        causes: "Fungus Fusarium oxysporum f. sp. cepae",
        symptoms: "Soft rot starting at bulb base, white to pink fungal growth",
        prevention: "Practice long crop rotations, proper curing before storage"
    },
    "Smudge": {
        description: "Smudge is a fungal disease causing dark green to black lesions on outer onion bulb scales. The disease reduces marketability but doesn't affect inner scales. The pathogen survives in soil.",
        image: "https://www.google.com/search?q=onion+smudge&tbm=isch",
        causes: "Fungus Colletotrichum circinans",
        symptoms: "Dark green to black lesions on outer scales",
        prevention: "Plant resistant varieties, proper curing, avoid wounding bulbs"
    }
};



const Description = ({ crop, disease }) => {
    return (
      <>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-green-800 border-b pb-2">About {crop}</h3>
          <p className="text-gray-700 leading-relaxed">{cropInfo[crop]}</p>
        </div>
  
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-green-800 border-b pb-2">Disease Information</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            {diseaseInfo[disease]?.description || "No specific information available."}
          </p>
          
          {/* Causes Section */}
          {diseaseInfo[disease]?.causes && (
            <div className="mb-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Causes
              </h4>
              <p className="text-gray-700 pl-7">{diseaseInfo[disease].causes}</p>
            </div>
          )}
  
          {/* Symptoms Section */}
          {diseaseInfo[disease]?.symptoms && (
            <div className="mb-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-700 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Symptoms
              </h4>
              <p className="text-gray-700 pl-7">{diseaseInfo[disease].symptoms}</p>
            </div>
          )}
  
          {/* Prevention Section */}
          {diseaseInfo[disease]?.prevention && (
            <div className="mb-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Prevention & Control
              </h4>
              <p className="text-gray-700 pl-7">{diseaseInfo[disease].prevention}</p>
            </div>
          )}
  
          {diseaseInfo[disease]?.image && (
            <a href={diseaseInfo[disease].image} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              View disease images on Google
            </a>
          )}
        </div>
      </>
    );
  };
  
  export default Description;