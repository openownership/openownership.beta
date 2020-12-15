---
title: Sample Indonesian data BODS mapping
date: 2020-12-14 16:41:00 Z
description: The following JSON data is a complete BODS version of the sample AHU Online data, generated as part of our technical report on Indonesia's beneficial ownership systems.
---

```json
[
  {
    "statementID": "openownership-indonesia-4150716871",
    "statementType": "entityStatement",
    "isComponent": false,
    "entityType": "registeredEntity",
    "name": "BUSINDO AYANA",
    "incorporatedInJurisdiction": {
      "name": "Indonesia",
      "code": "ID"
    },
    "identifiers": [
      {
        "scheme": "ID-KHH",
        "schemeName": "Ministry of Justice & Human Rights",
        "id": "BUSINDO AYANA"
      }
    ],
    "addresses": [
      {
        "type": "registered",
        "address": "KABUPATEN BADUNG",
        "country": "ID"
      }
    ],
    "source": {
      "type": [
        "thirdParty"
      ],
      "retrievedAt": "2020-12-02T14:37:40.463Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "NOTARIS SABH2 S.H., S.E."
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": []
  },
  {
    "statementID": "openownership-indonesia-2714137230",
    "statementType": "personStatement",
    "isComponent": false,
    "personType": "knownPerson",
    "names": [
      {
        "type": "individual",
        "fullName": "Budi Setiawan Raharja"
      }
    ],
    "birthDate": "1970-01-12",
    "placeOfBirth": {
      "type": "placeOfBirth",
      "address": "Jakarta"
    },
    "nationalities": [
      {
        "name": "Indonesia",
        "code": "ID"
      }
    ],
    "identifiers": [
      {
        "scheme": "ID-DJP",
        "schemeName": "Director General of Taxes",
        "id": "738297498237948"
      },
      {
        "scheme": "MISC-ID-NIK",
        "schemeName": "NIK",
        "id": "79878798798792739"
      }
    ],
    "addresses": [
      {
        "type": "residence",
        "address": "JALAN, 002, 031, PENDALAMAN, BARAMBAI, KABUPATEN BARITO KUALA, Indonesia",
        "country": "ID"
      }
    ],
    "source": {
      "type": [
        "thirdParty"
      ],
      "retrievedAt": "2020-12-02T14:37:40.463Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "NOTARIS SABH2 S.H., S.E."
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": []
  },
  {
    "statementID": "openownership-indonesia-3702394047",
    "statementType": "ownershipOrControlStatement",
    "isComponent": false,
    "subject": {
      "describedByEntityStatement": "openownership-indonesia-4150716871"
    },
    "interestedParty": {
      "describedByPersonStatement": "openownership-indonesia-2714137230"
    },
    "interests": [
      {
        "type": "other-influence-or-control",
        "details": "KEJRA",
        "beneficialOwnershipOrControl": true
      }
    ],
    "source": {
      "type": [
        "thirdParty"
      ],
      "retrievedAt": "2020-12-02T14:37:40.463Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "NOTARIS SABH2 S.H., S.E."
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": []
  },
  {
    "statementID": "openownership-indonesia-2602643453",
    "statementType": "personStatement",
    "isComponent": false,
    "personType": "knownPerson",
    "names": [
      {
        "type": "individual",
        "fullName": "Budi Setiawan Raharja"
      }
    ],
    "birthDate": "1970-01-12",
    "placeOfBirth": {
      "type": "placeOfBirth",
      "address": "Jakarta"
    },
    "nationalities": [
      {
        "name": "Indonesia",
        "code": "ID"
      }
    ],
    "identifiers": [
      {
        "scheme": "ID-DJP",
        "schemeName": "Director General of Taxes",
        "id": "738297498237948"
      },
      {
        "scheme": "MISC-ID-NIK",
        "schemeName": "NIK",
        "id": "79878798798792739"
      }
    ],
    "addresses": [
      {
        "type": "residence",
        "address": "JALAN, 002, 031, PENDALAMAN, BARAMBAI, KABUPATEN BARITO KUALA, Indonesia",
        "country": "ID"
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "asdasdada"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-2714137230"
    ]
  },
  {
    "statementID": "openownership-indonesia-593459431",
    "statementType": "ownershipOrControlStatement",
    "isComponent": false,
    "subject": {
      "describedByEntityStatement": "openownership-indonesia-4150716871"
    },
    "interestedParty": {
      "describedByPersonStatement": "openownership-indonesia-2602643453"
    },
    "interests": [
      {
        "type": "other-influence-or-control",
        "details": "KEJRA",
        "beneficialOwnershipOrControl": true
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "asdasdada"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-3702394047"
    ]
  },
  {
    "statementID": "openownership-indonesia-3832447504",
    "statementType": "personStatement",
    "isComponent": false,
    "personType": "knownPerson",
    "names": [
      {
        "type": "individual",
        "fullName": "SAMPLE INPUT NAMA"
      }
    ],
    "birthDate": "1970-01-01",
    "placeOfBirth": {
      "type": "placeOfBirth",
      "address": "qwsdasd"
    },
    "nationalities": [
      {
        "name": "Indonesia",
        "code": "ID"
      }
    ],
    "identifiers": [
      {
        "scheme": "ID-DJP",
        "schemeName": "Director General of Taxes",
        "id": "12319891871928"
      },
      {
        "scheme": "MISC-ID-NIK",
        "schemeName": "NIK",
        "id": "1231231231123123"
      }
    ],
    "addresses": [
      {
        "type": "residence",
        "address": "asdasdasdasddsa, 22, 22, TOBOBOL, IBU SELATAN, KABUPATEN HALMAHERA BARAT, Indonesia",
        "country": "ID"
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "asdasdada"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": []
  },
  {
    "statementID": "openownership-indonesia-682091074",
    "statementType": "ownershipOrControlStatement",
    "isComponent": false,
    "subject": {
      "describedByEntityStatement": "openownership-indonesia-4150716871"
    },
    "interestedParty": {
      "describedByPersonStatement": "openownership-indonesia-3832447504"
    },
    "interests": [
      {
        "type": "other-influence-or-control",
        "details": "SAMPLE INPUT HUBUNGA",
        "beneficialOwnershipOrControl": true
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "asdasdada"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": []
  },
  {
    "statementID": "openownership-indonesia-3694814761",
    "statementType": "personStatement",
    "isComponent": false,
    "personType": "knownPerson",
    "names": [
      {
        "type": "individual",
        "fullName": "Budi Setiawan Raharja"
      }
    ],
    "birthDate": "1970-01-12",
    "placeOfBirth": {
      "type": "placeOfBirth",
      "address": "Jakarta"
    },
    "nationalities": [
      {
        "name": "Indonesia",
        "code": "ID"
      }
    ],
    "identifiers": [
      {
        "scheme": "ID-DJP",
        "schemeName": "Director General of Taxes",
        "id": "738297498237948"
      },
      {
        "scheme": "MISC-ID-NIK",
        "schemeName": "NIK",
        "id": "79878798798792739"
      }
    ],
    "addresses": [
      {
        "type": "residence",
        "address": "JALAN, 002, 031, PENDALAMAN, BARAMBAI, KABUPATEN BARITO KUALA, Indonesia",
        "country": "ID"
      }
    ],
    "source": {
      "type": [
        "thirdParty"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "NOTARIS SABH2 S.H., S.E."
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-2602643453"
    ]
  },
  {
    "statementID": "openownership-indonesia-3778635355",
    "statementType": "ownershipOrControlStatement",
    "isComponent": false,
    "subject": {
      "describedByEntityStatement": "openownership-indonesia-4150716871"
    },
    "interestedParty": {
      "describedByPersonStatement": "openownership-indonesia-3694814761"
    },
    "interests": [
      {
        "type": "other-influence-or-control",
        "details": "KEJRA",
        "beneficialOwnershipOrControl": true
      }
    ],
    "source": {
      "type": [
        "thirdParty"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "NOTARIS SABH2 S.H., S.E."
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-593459431"
    ]
  },
  {
    "statementID": "openownership-indonesia-3458313613",
    "statementType": "personStatement",
    "isComponent": false,
    "personType": "knownPerson",
    "names": [
      {
        "type": "individual",
        "fullName": "SAMPLE INPUT NAMA"
      }
    ],
    "birthDate": "1970-01-01",
    "placeOfBirth": {
      "type": "placeOfBirth",
      "address": "qwsdasd"
    },
    "nationalities": [
      {
        "name": "Indonesia",
        "code": "ID"
      }
    ],
    "identifiers": [
      {
        "scheme": "ID-DJP",
        "schemeName": "Director General of Taxes",
        "id": "12319891871928"
      },
      {
        "scheme": "MISC-ID-NIK",
        "schemeName": "NIK",
        "id": "1231231231123123"
      }
    ],
    "addresses": [
      {
        "type": "residence",
        "address": "asdasdasdasddsa, 22, 22, TOBOBOL, IBU SELATAN, KABUPATEN HALMAHERA BARAT, Indonesia",
        "country": "ID"
      }
    ],
    "source": {
      "type": [
        "thirdParty"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "NOTARIS SABH2 S.H., S.E."
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-3832447504"
    ]
  },
  {
    "statementID": "openownership-indonesia-2096232925",
    "statementType": "ownershipOrControlStatement",
    "isComponent": false,
    "subject": {
      "describedByEntityStatement": "openownership-indonesia-4150716871"
    },
    "interestedParty": {
      "describedByPersonStatement": "openownership-indonesia-3458313613"
    },
    "interests": [
      {
        "type": "other-influence-or-control",
        "details": "SAMPLE INPUT HUBUNGA",
        "beneficialOwnershipOrControl": true
      }
    ],
    "source": {
      "type": [
        "thirdParty"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "NOTARIS SABH2 S.H., S.E."
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-682091074"
    ]
  },
  {
    "statementID": "openownership-indonesia-2711440227",
    "statementType": "personStatement",
    "isComponent": false,
    "personType": "knownPerson",
    "names": [
      {
        "type": "individual",
        "fullName": "Budi Setiawan Raharja"
      }
    ],
    "birthDate": "1970-01-12",
    "placeOfBirth": {
      "type": "placeOfBirth",
      "address": "Jakarta"
    },
    "nationalities": [
      {
        "name": "Indonesia",
        "code": "ID"
      }
    ],
    "identifiers": [
      {
        "scheme": "ID-DJP",
        "schemeName": "Director General of Taxes",
        "id": "738297498237948"
      },
      {
        "scheme": "MISC-ID-NIK",
        "schemeName": "NIK",
        "id": "79878798798792739"
      }
    ],
    "addresses": [
      {
        "type": "residence",
        "address": "JALAN MAWAR MELATI, 002, 031, PENDALAMAN, BARAMBAI, KABUPATEN BARITO KUALA, Indonesia",
        "country": "ID"
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "BUDI RAHARJO"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-3694814761"
    ]
  },
  {
    "statementID": "openownership-indonesia-1374684158",
    "statementType": "ownershipOrControlStatement",
    "isComponent": false,
    "subject": {
      "describedByEntityStatement": "openownership-indonesia-4150716871"
    },
    "interestedParty": {
      "describedByPersonStatement": "openownership-indonesia-2711440227"
    },
    "interests": [
      {
        "type": "other-influence-or-control",
        "details": "KEJRA",
        "beneficialOwnershipOrControl": true
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "BUDI RAHARJO"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-3778635355"
    ]
  },
  {
    "statementID": "openownership-indonesia-1878644943",
    "statementType": "personStatement",
    "isComponent": false,
    "personType": "knownPerson",
    "names": [
      {
        "type": "individual",
        "fullName": "SAMPLE INPUT NAMA"
      }
    ],
    "birthDate": "1970-01-01",
    "placeOfBirth": {
      "type": "placeOfBirth",
      "address": "qwsdasd"
    },
    "nationalities": [
      {
        "name": "Indonesia",
        "code": "ID"
      }
    ],
    "identifiers": [
      {
        "scheme": "ID-DJP",
        "schemeName": "Director General of Taxes",
        "id": "12319891871928"
      },
      {
        "scheme": "MISC-ID-NIK",
        "schemeName": "NIK",
        "id": "1231231231123123"
      }
    ],
    "addresses": [
      {
        "type": "residence",
        "address": "asdasdasdasddsa, 22, 22, TOBOBOL, IBU SELATAN, KABUPATEN HALMAHERA BARAT, Indonesia",
        "country": "ID"
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "BUDI RAHARJO"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-3458313613"
    ]
  },
  {
    "statementID": "openownership-indonesia-1913756129",
    "statementType": "ownershipOrControlStatement",
    "isComponent": false,
    "subject": {
      "describedByEntityStatement": "openownership-indonesia-4150716871"
    },
    "interestedParty": {
      "describedByPersonStatement": "openownership-indonesia-1878644943"
    },
    "interests": [
      {
        "type": "other-influence-or-control",
        "details": "SAMPLE INPUT HUBUNGA",
        "beneficialOwnershipOrControl": true,
        "endDate": "2020-12-02"
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "BUDI RAHARJO"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-2096232925"
    ]
  },
  {
    "statementID": "openownership-indonesia-285675574",
    "statementType": "personStatement",
    "isComponent": false,
    "personType": "knownPerson",
    "names": [
      {
        "type": "individual",
        "fullName": "Budi Setiawan Raharja"
      }
    ],
    "birthDate": "1970-01-12",
    "placeOfBirth": {
      "type": "placeOfBirth",
      "address": "Jakarta"
    },
    "nationalities": [
      {
        "name": "Indonesia",
        "code": "ID"
      }
    ],
    "identifiers": [
      {
        "scheme": "ID-DJP",
        "schemeName": "Director General of Taxes",
        "id": "738297498237948"
      },
      {
        "scheme": "MISC-ID-NIK",
        "schemeName": "NIK",
        "id": "79878798798792739"
      }
    ],
    "addresses": [
      {
        "type": "residence",
        "address": "JALAN MAWAR MELATI, 002, 031, PENDALAMAN, BARAMBAI, KABUPATEN BARITO KUALA, Indonesia",
        "country": "ID"
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "BUDI RAHARJO"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-2711440227"
    ]
  },
  {
    "statementID": "openownership-indonesia-2012232752",
    "statementType": "ownershipOrControlStatement",
    "isComponent": false,
    "subject": {
      "describedByEntityStatement": "openownership-indonesia-4150716871"
    },
    "interestedParty": {
      "describedByPersonStatement": "openownership-indonesia-285675574"
    },
    "interests": [
      {
        "type": "other-influence-or-control",
        "details": "KEJRA",
        "beneficialOwnershipOrControl": true
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "BUDI RAHARJO"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-1374684158"
    ]
  },
  {
    "statementID": "openownership-indonesia-2818745930",
    "statementType": "personStatement",
    "isComponent": false,
    "personType": "knownPerson",
    "names": [
      {
        "type": "individual",
        "fullName": "Dedi Cahyadi"
      }
    ],
    "birthDate": "1977-07-20",
    "placeOfBirth": {
      "type": "placeOfBirth",
      "address": "Punggol"
    },
    "nationalities": [
      {
        "name": " Singapore",
        "code": "SG"
      }
    ],
    "identifiers": [
      {
        "scheme": "ID-DJP",
        "schemeName": "Director General of Taxes",
        "id": "54324532454"
      },
      {
        "scheme": "MISC-ID-PASPOR",
        "schemeName": "PASPOR",
        "id": "67543234"
      }
    ],
    "addresses": [
      {
        "type": "residence",
        "address": "Jl. Singapura No. 45,  Singapore",
        "country": "SG"
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.465Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "BUDI RAHARJO"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": []
  },
  {
    "statementID": "openownership-indonesia-1574107031",
    "statementType": "ownershipOrControlStatement",
    "isComponent": false,
    "subject": {
      "describedByEntityStatement": "openownership-indonesia-4150716871"
    },
    "interestedParty": {
      "describedByPersonStatement": "openownership-indonesia-2818745930"
    },
    "interests": [
      {
        "type": "other-influence-or-control",
        "details": "Dedi Cahyadi",
        "beneficialOwnershipOrControl": true
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.465Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "BUDI RAHARJO"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": []
  },
  {
    "statementID": "837a3726-c2a8-4688-a0ec-bb6df70d8bf4",
    "statementType": "ownershipOrControlStatement",
    "isComponent": false,
    "subject": {
      "describedByEntityStatement": "openownership-indonesia-4150716871"
    },
    "interestedParty": {
      "describedByPersonStatement": "openownership-indonesia-1878644943"
    },
    "interests": [
      {
        "type": "other-influence-or-control",
        "details": "SAMPLE INPUT HUBUNGA",
        "interestLevel": "direct",
        "beneficialOwnershipOrControl": true,
        "endDate": "2020-12-02"
      }
    ],
    "source": {
      "type": [
        "selfDeclaration"
      ],
      "retrievedAt": "2020-12-02T14:37:40.464Z",
      "url": "https://bo.ahu.go.id/service/getReportBo",
      "assertedBy": [
        {
          "name": "BUDI RAHARJO"
        }
      ]
    },
    "publicationDetails": {
      "publicationDate": "2020-12-02",
      "bodsVersion": "0.2",
      "publisher": {
        "name": "Indonesia Ministry for Law and Human Rights"
      }
    },
    "replacesStatements": [
      "openownership-indonesia-1913756129"
    ]
  }
]
```
