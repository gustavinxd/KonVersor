const DATA_MEDIDAS_CONV = [
    {
      nome: "m-cm",
      de: "Metro",
      para: "Centímetro",
      fatorConversao: 100,
      formula: "Centímetro = Metro x 100",
    },
    {
      nome: "cm-m",
      de: "Centímetro",
      para: "Metro",
      fatorConversao: 0.01,
      formula: "Metro = Centímetro x 0.01",
    },
    {
      nome: "in-cm",
      de: "Polegada",
      para: "Centímetro",
      fatorConversao: 2.54,
      formula: "Centímetro = Polegada x 2.54",
    },
    {
      nome: "cm-in",
      de: "Centímetro",
      para: "Polegada",
      fatorConversao: 0.393701,
      formula: "Polegada = Centímetro x 0.393701",
    },
    {
      nome: "ft-m",
      de: "Pé",
      para: "Metro",
      fatorConversao: 0.3048,
      formula: "Metro = Pé x 0.3048",
    },
    {
      nome: "m-ft",
      de: "Metro",
      para: "Pé",
      fatorConversao: 3.28084,
      formula: "Pé = Metro x 3.28084",
    },
    {
      nome: "km-mi",
      de: "Quilômetro",
      para: "Milha",
      fatorConversao: 0.621371,
      formula: "Milha = Quilômetro x 0.621371",
    },
    {
      nome: "mi-km",
      de: "Milha",
      para: "Quilômetro",
      fatorConversao: 1.60934,
      formula: "Quilômetro = Milha x 1.60934",
    },
    {
      nome: "nmi-km",
      de: "Milha Náutica",
      para: "Quilômetro",
      fatorConversao: 1.852,
      formula: "Quilômetro = Milha Náutica x 1.852",
    },
    {
      nome: "km-nmi",
      de: "Quilômetro",
      para: "Milha Náutica",
      fatorConversao: 0.539957,
      formula: "Milha Náutica = Quilômetro x 0.539957",
    },
    {
      nome: "ft-in",
      de: "Pé",
      para: "Polegada",
      fatorConversao: 12,
      formula: "Polegada = Pé x 12",
    },
    {
      nome: "in-ft",
      de: "Polegada",
      para: "Pé",
      fatorConversao: 0.0833333,
      formula: "Pé = Polegada x 0.0833333",
    },
    {
      nome: "mi-ft",
      de: "Milha",
      para: "Pé",
      fatorConversao: 5280,
      formula: "Pé = Milha x 5280",
    },
    {
      nome: "ft-mi",
      de: "Pé",
      para: "Milha",
      fatorConversao: 0.000189394,
      formula: "Milha = Pé x 0.000189394",
    },
  ];

const UNIDADES_DATA = [
    {
      nome: "Metro",
      simbolo: "m",
    },
    {
      nome: "Centímetro",
      simbolo: "cm",
    },
    {
      nome: "Polegada",
      simbolo: "in",
    },
    {
      nome: "Pé",
      simbolo: "ft",
    },
    {
      nome: "Quilômetro",
      simbolo: "km",
    },
    {
      nome: "Milha",
      simbolo: "mi",
    },
    {
      nome: "Milha Náutica",
      simbolo: "nmi",
    },
    {
      nome: "Milímetro",
      simbolo: "mm",
    },
    {
      nome: "Micrômetro",
      simbolo: "μm",
    },
    {
      nome: "Nanômetro",
      simbolo: "nm",
    },
    {
      nome: "Milha Náutica",
      simbolo: "yd",
    },
  ];

export {DATA_MEDIDAS_CONV, UNIDADES_DATA}
