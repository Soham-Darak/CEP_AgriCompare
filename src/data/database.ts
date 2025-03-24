// Type definitions
interface Medicine {
    name: string;
    price: string;
    efficiency: string;
  }
  
  interface Disease {
    name: string;
    description: string;
    medicines: Medicine[];
  }
  
  interface CropData {
    crop: string;
    diseases: Disease[];
  }
  
  // Database from Excel sheet
  const cropDatabase: CropData[] = [
    {
      crop: "Paddy",
      diseases: [
        {
          name: "Rice Blast (Magnaporthe oryzae)",
          description: "Causes leaf spots, leading to crop loss in high humidity conditions.",
          medicines: [
            { name: "Tricyclazole", price: "₹450 - ₹650", efficiency: "85%" },
            { name: "Azoxystrobin", price: "₹500 - ₹750", efficiency: "80%" },
            { name: "Carbendazim", price: "₹350 - ₹600", efficiency: "75%" }
          ]
        },
        {
          name: "Sheath Blight (Rhizoctonia solani)",
          description: "Fungal disease causing irregular lesions on leaves, reducing yield.",
          medicines: [
            { name: "Hexaconazole", price: "₹500 - ₹900", efficiency: "82%" },
            { name: "Validamycin", price: "₹450 - ₹800", efficiency: "78%" }
          ]
        }
        // Add all other diseases for Paddy
      ]
    },
    {
      crop: "Wheat",
      diseases: [
        {
          name: "Wheat Rust (Puccinia spp.)",
          description: "Fungal disease forming red/orange pustules on leaves.",
          medicines: [
            { name: "Tebuconazole", price: "₹450 - ₹600", efficiency: "88%" },
            { name: "Propiconazole", price: "₹500 - ₹750", efficiency: "85%" }
          ]
        }
        // Add all other diseases for Wheat
      ]
    }
    // Add all other crops from Excel sheet
  ];
  
  // Helper functions
  export const getCrops = (): string[] => {
    return [...new Set(cropDatabase.map(item => item.crop))];
  };
  
  export const getDiseases = (cropName: string): string[] => {
    const crop = cropDatabase.find(item => item.crop === cropName);
    return crop ? crop.diseases.map(d => d.name) : [];
  };
  
  export const getSolutions = (cropName: string, diseaseName: string): Medicine[] => {
    const crop = cropDatabase.find(item => item.crop === cropName);
    if (!crop) return [];
    
    const disease = crop.diseases.find(d => d.name === diseaseName);
    return disease ? disease.medicines : [];
  };