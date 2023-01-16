var teamInfo = {
  "Team_GEnoM_-_iGEM_IIT_MADRAS": {
    "name": "GEnoM - iGEM IIT Madras",
    "reportID" : "000000",
  },
  "NAU-CHINA-DE": {
    "name": "NAU-CHINA-DE",
    "reportID" : "000001",
  },
  "NEFU_China": {
    "name": "NEFU_China",
    "reportID" : "000002",
  },
  "USTC": {
    "name": "USTC",
    "reportID" : "000003",
  },
  "HUST-China": {
    "name": "HUST-China",
    "reportID" : "000003",
  },
  "SUSTech_Shenzhen": {
    "name": "SUSTech_Shenzhen_2022",
    "reportID" : "000005",
  },
  "VE_CPU": {
    "name": "VE-CPU",
    "reportID" : "000006",
  },
  "Edinburgh-UHAS_Ghana": {
    "name": "Edinburgh-UHAS_Ghana",
    "reportID": "000007",
  },
  "OUC_China": {
    "name": "OUC_China",
    "reportID" : "000008",
  },
  "OUC-Marine_Drugs": {
    "name": "OUC-Marine Drugs",
    "reportID" : "000009",
  },
  "CSU_CHINA": {
    "name": "CSU_CHINA2022",
    "reportID" : "000009",
  },
  "Team_GEnoM_-_iGEM_IIT_MADRAS": {
    "name": "Team GEnoM - iGEM IIT MADRAS",
    "reportID" : "000009",
  },
  "Tongji_China": {
    "name": "Tongji_China",
    "reportID" : "000009",
  },
  "CPU_CHINA": {
    "name": "CPU_CHINA",
    "reportID" : "000009",
  },
  "LZU-CHINA": {
    "name": "LZU-CHINA",
    "reportID" : "000009",
  },
};

function updateTeamInfoModal(id) {
  document.querySelector('#teamInfoModalLabel').innerHTML = teamInfo[id].name;
  document.querySelector('#teamWikiLink').setAttribute('href', `https://idec-teams.github.io/2022_${id}`);
  /**document.querySelector('#teamReportLink').setAttribute('href', `https://arxiv.idec.io/article/${teamInfo[id].reportID}`);**/
}
