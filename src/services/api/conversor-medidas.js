/* eslint-disable object-shorthand */
const conversoes = [
  { unidade: 'nm', fatores: {
    μm: 0.001,
    mm: 0.000001,
    cm: 0.0000001,
    m: 0.000000001,
    km: 0.000000000001,
    mi: 6.2137e-13,
    yd: 1.0936e-9,
    ft: 3.2808e-9,
    in: 3.9370e-8,
    nmi: 5.3996e-13
  }},
  { unidade: 'μm', fatores: {
    nm: 1000,
    mm: 0.001,
    cm: 0.0001,
    m: 0.000001,
    km: 1e-9,
    mi: 6.2137e-10,
    yd: 1.0936e-6,
    ft: 3.2808e-6,
    in: 3.9370e-5,
    nmi: 5.3996e-10
  }},
  { unidade: 'mm', fatores: {
    nm: 1000000,
    μm: 1000,
    cm: 0.1,
    m: 0.001,
    km: 1e-6,
    mi: 6.2137e-7,
    yd: 0.0010936,
    ft: 0.0032808,
    in: 0.0393701,
    nmi: 5.3996e-7
  }},
  { unidade: 'cm', fatores: {
    nm: 10000000,
    μm: 10000,
    mm: 10,
    m: 0.01,
    km: 1e-5,
    mi: 6.2137e-6,
    yd: 0.010936,
    ft: 0.0328084,
    in: 0.393701,
    nmi: 5.3996e-6
  }},
  { unidade: 'm', fatores: {
    nm: 1000000000,
    μm: 1000000,
    mm: 1000,
    cm: 100,
    km: 0.001,
    mi: 0.000621371,
    yd: 1.09361,
    ft: 3.28084,
    in: 39.3701,
    nmi: 0.000539957
  }},
  { unidade: 'km', fatores: {
    nm: 1e+12,
    μm: 1e+9,
    mm: 1e+6,
    cm: 1e+5,
    m: 1000,
    mi: 0.621371,
    yd: 1093.61,
    ft: 3280.84,
    in: 39370.1,
    nmi: 0.539957
  }},
  { unidade: 'mi', fatores: {
    nm: 1.60934e+12,
    μm: 1.60934e+9,
    mm: 1.60934e+6,
    cm: 160934,
    m: 1609.34,
    km: 1.60934,
    yd: 1760,
    ft: 5280,
    in: 63360,
    nmi: 1.15078
  }},
  { unidade: 'yd', fatores: {
    nm: 9.144e+8,
    μm: 9.144e+5,
    mm: 914.4,
    cm: 91.44,
    m: 0.9144,
    km: 0.0009144,
    mi: 0.000568182,
    ft: 3,
    in: 36,
    nmi: 0.000493737
  }},
  { unidade: 'ft', fatores: {
    nm: 3.048e+8,
    μm: 3.048e+5,
    mm: 304.8,
    cm: 30.48,
    m: 0.3048,
    km: 0.0003048,
    mi: 0.000189394,
    yd: 0.333333,
    in: 12,
    nmi: 0.000164579
  }},
  { unidade: 'in', fatores: {
    nm: 25400000,
    μm: 25400,
    mm: 25.4,
    cm: 2.54,
    m: 0.0254,
    km: 2.54e-5,
    mi: 1.5783e-5,
    yd: 0.0277778,
    ft: 0.0833333,
    nmi: 1.3715e-5
  }},
  { unidade: 'nmi', fatores: {
    nm: 1.852e+12,
    μm: 1.852e+9,
    mm: 1.852e+6,
    cm: 185200,
    m: 1852,
    km: 1.852,
    mi: 1.15078,
    yd: 2025.37,
    ft: 6076.12,
    in: 72913.4
  }}
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
      nome: "Jarda",
      simbolo: "yd",
    },
  ];

const DATA_MEDIDAS_CONV = [];

conversoes.forEach((origem) => {
  const unidadeOrigem = origem.unidade;
  Object.keys(origem.fatores).forEach((destino) => {
    const fatorConversao = origem.fatores[destino];
    DATA_MEDIDAS_CONV.push({
      nome: `${unidadeOrigem}-${destino}`,
      de: unidadeOrigem,
      para: destino,
      fatorConversao: fatorConversao
    });
  });
});

export {DATA_MEDIDAS_CONV, UNIDADES_DATA}
