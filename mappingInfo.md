```
{
  "Category": "Benjamines filles",
  "SubCategory": null,
  "Gender": "Féminin",
  "EventType": "lancer du poids",
  "SeasonType": "Outdoor",
  "IsCombinedEvent": false,
  "IsAllCategories": false,
  "IsRelay": false,
  "Event": "lancer du poids 1,000kg",
  "CategoryEventId": 11684,
  "CategoryId": 113,
  "EventId": 1131,
  "ChampionshipCategoryEventId": 10196,
  "LbfaId": "87"
},

```

#Event:events
competition: 93,
name: data.Event,
type: data.LbfaId,

#Category:eventcategories
event:
category:

#Round:rounds
event:
category:
combinedeventtype: 0,
seqno: 1,
session: 1,
name: '*',
abbreviation: '',
info: '',
timescheduled: '12:00:00',
heatduration: 10,
timeofficial: '12:00:00+02',
lanesavailable: ,
customdistance: ,
jumpoffpossible: ,
seedingmethod: ,
qualifyingmethod: ,
qualificationparameters: ,
participantsforteampoints: ,
teampointsalgorithm: ,
seedingparameters: ,
pointcalculationalgorithm: ,
attempts: ,
startheight: ,
intervalheight: ,
status: ,
lanes_array: ,
datescheduled: ,


select * from categories
where gender = 'M/W' and
