var teamInfo = {
  "Team_GEnoM_-_iGEM_IIT_MADRAS": {
    "name": "GEnoM - iGEM IIT Madras",
    "reportID": "Z5XOEN4HNZ0M",
  },
  "NAU-CHINA-DE": {
    "name": "NAU-CHINA-DE",
    "reportID": "XYRRODDKSVU3",
  },
  "NEFU_China": {
    "name": "NEFU_China",
    "reportID": "2S60D5DQ26YN",
  },
  "USTC": {
    "name": "USTC",
    "reportID": "F65LLEROY7U1",
  },
  "HUST-China": {
    "name": "HUST-China",
    "reportID": "GROUJK6N46VI",
  },
  "SUSTech_Shenzhen": {
    "name": "SUSTech_Shenzhen_2022",
    "reportID": "PH3X5UFPJTDL",
  },
  "VE_CPU": {
    "name": "VE-CPU",
    "reportID": "T2CNH1XL2N8Z",
  },
  "Edinburgh-UHAS_Ghana": {
    "name": "Edinburgh-UHAS_Ghana",
    "reportID": "6NFQ5QUXVHPU",
  },
  "OUC_China": {
    "name": "OUC_China",
    "reportID": "JI32L9JLHK85",
  },
  "OUC-Marine_Drugs": {
    "name": "OUC-Marine Drugs",
    "reportID": "N1JQUWXWO3DE",
  },
  "CSU_CHINA": {
    "name": "CSU_CHINA2022",
    "reportID": "FD21I4NJCZQZ",
  },
  "Tongji_China": {
    "name": "Tongji_China",
    "reportID": "X9NKIEB1ODW8",
  },
  "CPU_CHINA": {
    "name": "CPU_CHINA",
    "reportID": "LLOLRDVFRZ0D",
  },
  "LZU-CHINA": {
    "name": "LZU-CHINA",
    "reportID": "9CU8HHEE6WUW",
  },
  "DU_DTU_NSUT-Delhi": {
    "name": "OriGeneNation",
    "reportID": "14IOZ6L1J4F2",
  },
};

function updateTeamInfoModal(id) {
  document.querySelector('#teamInfoModalLabel').innerHTML = teamInfo[id].name;
  document.querySelector('#teamWikiLink').setAttribute('href', `https://idec-teams.github.io/2022_${id}`);
  document.querySelector('#teamReportLink').setAttribute('href', `https://arxiv.idec.io/article/${teamInfo[id].reportID}`);
}
