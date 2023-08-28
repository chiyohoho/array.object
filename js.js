var mainCard = callElement(".main_body")
var caseIMG = callElement(".case_img")
var showPistol = callElement(".pistol")
var showRifles = callElement(".rifles")
var showSMGs = callElement(".smgs")
var showHeavy = callElement(".heavy")
var showKnives = callElement(".knives")
var ShowGloves = callElement(".gloves")
var showCases = callElement(".cases")
var showCollections = callElement(".collections")
var showTournaments = callElement(".tournaments")
var showOthers = callElement(".others")
var product = [
    {
        name: "Ice Coaled",
        rare: "Classified Rifle",
        rareColor: "#d32ce6",
        special: "StatTrak Available",
        specialColor: "#f89406",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfY29ndGhpbmdzX2xpZ2h0X2xhcmdlLjliNDY3OGE3MGMzMTVlNWQ2MGEyMDM0MzZiN2E5NWNkNGM1ZGNjODkucG5n/auto/auto/85/notrim/bc13b2fd9ea48a6ffc74b418aac13e32.webp",
        nonFrom: 4.53,
        nonTo: 24.27,
        sttFrom: 11.57,
        sttTo: 60.76,
        imgCase: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9jb21tdW5pdHlfMzEuNDQwYjQzZjRhZDNmY2ZlMzQ0Y2U2M2I1ZDhjZjU5Y2Q4MDM0YmExYS5wbmc-/auto/50/85/notrim/a4bcc712c664318515a046de2980494d.webp",
        nameCase: "Recoil Case",
        numberOffer: "14K offers",
        numberMarket: "on 19 markets"
    },
    {
        name: "Gold Arabesque",
        rare: "Covert Rifle",
        rareColor: "#eb4b4b",
        special: "Souvenir Available",
        specialColor: "#ffd700",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2dzX2FrNDdfZ29sZF9hcmFiZXNxdWVfbGlnaHRfbGFyZ2UuMGQxYjBiMmJmY2FmZThkMjE0ODM3MDc3MzY3ZTdkZDQyMzk0ODIyZS5wbmc-/auto/auto/85/notrim/a2ddab6bbea577e44ac836f6487adcdf.webp",
        nonFrom: 1896.2,
        nonTo: 4719.9,
        sttFrom: 1920.49,
        sttTo: 9876.81,
        imgCase: "",
        nameCase: "Found in 3 containers",
        numberOffer: "1K offers",
        numberMarket: "on 14 markets"
    },
    {
        name: "Redline",
        rare: "Classified Rifle",
        rareColor: "#d32ce6",
        special: "StatTrak Available",
        specialColor: "#f89406",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfY29icmFfbGlnaHRfbGFyZ2UuNzQ5NGJmZGY0ODU1ZmQ0ZTZhMmRiZDk4M2VkMGEyNDNjODBlZjgzMC5wbmc-/auto/auto/85/notrim/9a068b7121ffae140452a8689b49a98b.webp",
        nonFrom: 9.12,
        nonTo: 73,
        sttFrom: 21.1,
        sttTo: 202.4,
        imgCase: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9jb21tdW5pdHlfMi40OTE3NGFiZGRjY2NiNjUxOWI4M2QyN2QwY2ZmNDc2ZTFjNDRjYzU3LnBuZw--/auto/50/85/notrim/4a95ce6fd649f881acd11178b1ec8f99.webp",
        nameCase: "Operation Phoenix Weapon Case",
        numberOffer: "11K offers",
        numberMarket: "on 19 markets"
    },
    {
        name: "Wild Lotus",
        rare: "Covert Rifle",
        rareColor: "#eb4b4b",
        special: "",
        specialColor: "",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrX2lzbGFuZF9mbG9yYWxfbGlnaHRfbGFyZ2UuMTMwM2U3NmQwYTc3YWIxNjRhNDZhN2FiYTVhYjFkY2FmMWFjZWU2Yi5wbmc-/auto/auto/85/notrim/5d9abdf853173dda6e4ed8bda689f68c.webp",
        nonFrom: 2661.25,
        nonTo: 11728.64,
        sttFrom: "",
        sttTo: "",
        imgCase: "https://cdn.csgoskins.gg/public/uih/collections/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvY29sbGVjdGlvbnMvYmVmZGExMThlN2VjNTZjNDVmMTNlYTRiYzMxMjcxMzcvZGVmYXVsdC5wbmc-/auto/50/85/notrim/ee08a69aab428f45ae742102c7bf8170.webp",
        nameCase: "The St. Marc Collection",
        numberOffer: "11K offers",
        numberMarket: "on 19 markets"
    },
    {
        name: "Green Laminate",
        rare: "Mil-Spec Grade Rifle",
        rareColor: "#4b69ff",
        special: "Souvenir Available",
        specialColor: "#ffd700",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2h5X2FrNDdsYW1fZ3JlZW5fbGlnaHRfbGFyZ2UuZWNiYWY4NWUzNWNhMDgxNTZjYzMwNTAxN2Q0ZGM0Mjc2YTc0MmE4Zi5wbmc-/auto/auto/85/notrim/1bf2e5804118837d3a9abf361ae54177.webp",
        nonFrom: 9.34,
        nonTo: 24.67,
        sttFrom: 9.94,
        sttTo: 22.02,
        imgCase: "",
        nameCase: "Found in 4 containers",
        numberOffer: "2K offers",
        numberMarket: "on 18 markets"
    },
    {
        name: "Jungle Spray",
        rare: "Industrial Grade Rifle",
        rareColor: "#5e98d9",
        special: "",
        specialColor: "",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X3NwX3NwcmF5X2p1bmdsZV9saWdodF9sYXJnZS5hZjUyNGVhNjFiZTI5YWI4MWRmYjMyMTI3N2I5OGEyMTEzMzhkZTM3LnBuZw--/auto/auto/85/notrim/d47cca2a9641a87ed7c1cb4d046891ac.webp",
        nonFrom: 4.46,
        nonTo: 96.62,
        sttFrom: "",
        sttTo: "",
        imgCase: "https://cdn.csgoskins.gg/public/uih/collections/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvY29sbGVjdGlvbnMvNjQyYzYyYjcwNTA1MmI3MTJmNTY4ZGI5MTFhOWIzMDcvZGVmYXVsdC5wbmc-/auto/50/85/notrim/c46e07013810839d687a8a66e83ab778.webp",
        nameCase: "The Aztec Collection",
        numberOffer: "1K offers",
        numberMarket: "on 16 markets"
    },
    {
        name: "Fire Serpent",
        rare: "Covert Rifle",
        rareColor: "#eb4b4b",
        special: "StatTrak Available",
        specialColor: "#f89406",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2ZpcmVzZXJwZW50X2FrNDdfYnJhdm9fbGlnaHRfbGFyZ2UuOTM5MGU3ZmQwOTFlYThhMDQzNGZkMjE0M2UwYWNmMGQ1ZDFiYmM5Ny5wbmc-/auto/auto/85/notrim/b4ea9b46b1903a8e774e8eb629ba54b5.webp",
        nonFrom: 534.99,
        nonTo: 2661.11,
        sttFrom: 944.26,
        sttTo: 4958.7,
        imgCase: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9vcGVyYXRpb25faWkuNWU1MTA0YTYyOTE3NDFjNTY5M2ExZTc4YmQ2ZWNjOTU2MGI1MWYwYS5wbmc-/auto/50/85/notrim/e76d86df0c804b9cbf8a5118129c9b0f.webp",
        nameCase: "Operation Bravo Case",
        numberOffer: "1K offers",
        numberMarket: "on 15 markets"
    },
    {
        name: "Elite Build",
        rare: "Mil-Spec Grade Rifle",
        rareColor: "#4b69ff",
        special: "StatTrak Available",
        specialColor: "#f89406",
        img: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9hazQ3X2N1X2FrNDdfbWFzdGVyeV9saWdodF9sYXJnZS40MzA1YzBiYTRiMDJjZTUzMWZjMDhjMjc1ZmE2YTlkODdkYTJjZjdlLnBuZw--/auto/auto/85/notrim/836042cd2a78ec345eb0a3e78aac763d.webp",
        nonFrom: 0.54,
        nonTo: 3.83,
        sttFrom: 2.25,
        sttTo: 17.13,
        imgCase: "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbl9jYXNlcy9jcmF0ZV9jb21tdW5pdHlfNy41NzI4NmY3MTAyNjBkMWE4ZWI0ZTkzYzQ3OTVhZTdjYTk4MGVhOTgxLnBuZw--/auto/50/85/notrim/a32899439e098a223441ab79130db088.webp",
        nameCase: "Chroma 2 Case",
        numberOffer: "47K offers",
        numberMarket: "on 20 markets"
    }
];
var hoverPistol = [
    {
        name: "CZ75-Auto",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9jejc1YS4wNTc5Mzk5OTBmNWYyOTVmYzVlYWY4Zjc1OGNkZWYyMWE3Y2ZlYjhhLnBuZw--/50/auto/85/notrim/212779eaf45eeb3842a29cba9acd9524.webp"
    },
    {
        name: "Desert Eagle",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9kZWFnbGUuMjllOGYwZDdkMGJlNWU3MzdkNGY2NjNlZThiMzk0YjVjOWUwMGJkZC5wbmc-/50/auto/85/notrim/8f8095ec61acae1de051140f6fc38041.webp"
    },
    {
        name: "Dual Berettas",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9lbGl0ZS42NTYzZTlkMjc0YzZlNzk5ZDcxYTc4MDkwMjE2MjRmMjEzZDVlMDgwLnBuZw--/50/auto/85/notrim/d7dd6a44db04a7d814d19178a6a3f642.webp"
    },
    {
        name: "Five-SeveN",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9maXZlc2V2ZW4uN2MzM2I0YTc4YWU5NGEzZDE0ZTdjZDBmNzFiMjk1Y2Y2MTcxN2Q3NS5wbmc-/50/auto/85/notrim/0453243a6b5dbe4ee01c86f1494ac35d.webp"
    },
    {
        name: "Glock-18",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9nbG9jay44NDMwYWZlYTUzNDkwNTRkMDkyM2NlZmE3ZDJlN2JmMzk1MGNlM2Q3LnBuZw--/50/auto/85/notrim/5b6875f2598f516022cd8b894c4e515a.webp"
    },
    {
        name: "P250",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9wMjUwLjBiYzkxMDkxMjFmYjMxOGEzYmIxOGY2ZmE5MjY5MmM3YWE0MzMyMDUucG5n/50/auto/85/notrim/60726b0c1cdab5c0a38d1ded39a2a0da.webp"
    },
    {
        name: "R8 Revolver",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9yZXZvbHZlci5hN2MwYWIyOTczY2RjMGJkYjUzZWJiZWY5NjBlY2JhZTg4NDJmNzE5LnBuZw--/50/auto/85/notrim/6e7e84dfae05cddd529964829a7f7e76.webp"
    },
    {
        name: "Tec-9",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl90ZWM5Ljc0NTM4NTY2NDkyYjRhZjEyMmJlOWI5OTZiZGQ3ZDA4NTg1ZGIzYzAucG5n/50/auto/85/notrim/bea6fd0cd628434c464c87cb4b8965fc.webp"
    },
    {
        name: "USP-S",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl91c3Bfc2lsZW5jZXIuNjA4ZTEwODYyODg1MDg0YmIxY2VjNTVkODdiYTVlNjk0YmZkNjIxZC5wbmc-/50/auto/85/notrim/6367bc89ff2c87fe7f5b0d3ee405c378.webp"
    },
];
var hoverRifles = [
    {
        name: "ASSAULT RIFLES",
        img: ""
    },
    {
        name: "AK-47",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9hazQ3LmEzMjBmMTNmZWE0ZjIxZDFlYjNiNDY2NzhkNmIxMmU5N2NiZDEwNTIucG5n/50/auto/85/notrim/2d243acf467b4a859e94e62d0f8630fd.webp"
    },
    {
        name: "AUG",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9hdWcuNmI5N2E3NWFhNGMwZGJiNjFkODFlZmI2ZDU0OTdiMDc5YjY3ZDBkYS5wbmc-/50/auto/85/notrim/ea7b7b39d332385a2a03d9125095f81f.webp"
    },
    {
        name: "FAMAS",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9mYW1hcy5jODk3ODc4ODczYmViOWU5Y2E0YzY4ZWYzYTY2Njg2OWM2ZTc4MDMxLnBuZw--/50/auto/85/notrim/6da519c0a1385440bc6ed9e537869614.webp"
    },
    {
        name: "Galil AR",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9nYWxpbGFyLmI4NDE1MzY1OGFmZGI3ZGMyNmE5ODU0ZTU2NmZkZTNmYzQyYzIyZWYucG5n/50/auto/85/notrim/84f9be4e08633d256677a358b2eff2d7.webp"
    },
    {
        name: "M4A1-S",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9tNGExX3NpbGVuY2VyLmE4ZDJhMDI4ZmEzM2ViMTE3ZDZkNzY2NTMwM2MzMzE2MTY5YzMzZjcucG5n/50/auto/85/notrim/b9001715611e5e071e3c81db9def79af.webp"
    },
    {
        name: "M4A4",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9tNGExLjM5YjNiZDhkNTU2ZTVjZGViYjc5ZDYwOTAyNDQyOTg2ZWI5YWVkZmYucG5n/50/auto/85/notrim/482c98fc52347a383f9ed61655debc8b.webp"
    },
    {
        name: "SG 553",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9zZzU1Ni43NDA0MDg2OTM5MWVhMmFiMjU3NzdmMzY3MGE2MDE1MTkxYTczZTZjLnBuZw--/50/auto/85/notrim/fefa9f2971abad3a46499d0a530b2aab.webp"
    },
    {
        name: "SNIPER RIFLES",
        img: ""
    },
    {
        name: "AWP",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9hd3AuMjg5OWUxYzYzNDVlZDA1ZDYyYmRiZTExMmRiMWIxMTdkMDIyZTQ3Ny5wbmc-/50/auto/85/notrim/78c9080910925516df0b6555c17e50ac.webp"
    },
    {
        name: "G3SG1",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9nM3NnMS45ODZkMGUwN2Y1OGM4MWM5OWFhNWE0N2Q4NjM0MGY0YzNkNDAwMzM5LnBuZw--/50/auto/85/notrim/ff783af11160debe41035bc7215645e5.webp"
    },
    {
        name: "SCAR-20",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9zY2FyMjAuMTU1MmM3YjY0ZGZlOWU1NDJhM2I3MzBlZGI4MGUyMWRjYzZkMjQzZC5wbmc-/50/auto/85/notrim/38a920eb234f2020bfe303b2cda56493.webp"
    },
    {
        name: "SSG-08",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9zc2cwOC4yNzFhODU2ZjUwZmQ2YWMxMDE0MzM0MDk4YjFhNDNkNjFiZGRiODkyLnBuZw--/50/auto/85/notrim/576241992841266b51ff9a1e78ff4d2a.webp"
    },
];
var hoverSMGs = [
    {
        name: "MAC-10",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9tYWMxMC40MWU0MDQ3NGFhMjFhOWVkOTBkOWIyMWRkNWFkZjA5MTBmNzY2NDI2LnBuZw--/50/auto/85/notrim/793d2b48482d97ab65353216bbaa9d9f.webp"
    },
    {
        name: "MP5-SD",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9tcDVzZC4yZTkyMjM0Yzk1MTgxOWYzYWU0NDc0MmU5NmM0ODhlZjk3ZjI2YzdjLnBuZw--/50/auto/85/notrim/c6aeaee8da82a56aac1b4eac5a743c5f.webp"
    },
    {
        name: "MP7",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9tcDcuMGFmYzA5ODY4YzM4YTAwZmRlNTBjM2U0OTQzNjM3YzcxNGU4OTgxZS5wbmc-/50/auto/85/notrim/77c7cd6b17ef05d559e2a89e800a5a9f.webp"
    },
    {
        name: "MP9",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9tcDkuYzkxMDNlZmRlMDg0NWViNzE1Y2RjYjY3YmY3NGJhZDY0NmIxYzViYy5wbmc-/50/auto/85/notrim/8ea24a9ffdcb7673033a893b8f0eed53.webp"
    },
    {
        name: "P90",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9wOTAuMTVmZWRkN2ZjOTBmMDAzYjhkZTBkZWQzNjI0NWI0MzhkNTRiYzNkMi5wbmc-/50/auto/85/notrim/afc706917e4b6d94f5c8d8a8ffb34ad9.webp"
    },
    {
        name: "PP-Bizon",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9iaXpvbi41ODUyM2QzN2VlNDNiOWE0ZWY0MmE2N2I2NWEyOGU1OTY3NzQzYTU2LnBuZw--/50/auto/85/notrim/33a91df8a2f07f18ca8d85fa9b0841f5.webp"
    },
    {
        name: "UMP-45",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl91bXA0NS41NTY2OWUyMzIxZjI4ZWZlZDc3NWJlMjdmN2UzYzdlNzFiNTAxNTIwLnBuZw--/50/auto/85/notrim/27367af2dfdfe38014baff0fe98f1ca6.webp"
    }
];
var hoverHeavy = [
    {
        name: "SHOTGUN",
        img: ""
    },
    {
        name: "MAG-7",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9tYWc3LjU0ODBiYTA1YzYxMTUzMzA5MTYzYzQ2ZTdkNjQ2ZDY5NThhZjliZjcucG5n/50/auto/85/notrim/72d3c11e632f28d95a5feb32d42b91a6.webp"
    },
    {
        name: "Nova",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9ub3ZhLmQ5MDYzMzUxZDQyMzMxMDFkMDJkZWYxOGFhN2U5MDFkMDJmOWI0YzEucG5n/50/auto/85/notrim/9c89d3a2ebe88ffd9815892f1cad47b1.webp"
    },
    {
        name: "Sawed-Off",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9zYXdlZG9mZi40YzRkZjljODRlMWVkYzIwNDg4YzQ1MDYxYWQ4OGNmZDI0NjBjNGE1LnBuZw--/50/auto/85/notrim/992964af4a836760370f6338dfe7d622.webp"
    },
    {
        name: "XM1014",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl94bTEwMTQuN2JkN2YzOTg1ZDY4MGRiMmZjYjdjYWQzMmIwN2M5MGI3NThjMjM0Yi5wbmc-/50/auto/85/notrim/a3a657390a1a9cde1c5e6e43fdb939d5.webp"
    },
    {
        name: "MACHINE GUN",
        img: ""
    },
    {
        name: "M249",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9tMjQ5LjAyZDFjZjhmYThjNDFhZjVhNDM3NDliZjc4MGM0YzRhMmU1MGVhOGUucG5n/50/auto/85/notrim/dc8f1ecdf6277b0803a9aa4437c9f9ef.webp"
    },
    {
        name: "Negev",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9uZWdldi4xY2Y1MTJlYjAxYmQ2MmJjYWU1YzU0ZmVlYzY5NGY0MThhYjcxZDMwLnBuZw--/50/auto/85/notrim/17659110cd36ade65204d141ba015fd7.webp"
    }
];
var hoverKnives = [
    {
        name: "Bayonet",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9iYXlvbmV0LjUxNWRlMjkxMjA0ZDZkODk2NzI0ZDlmYmI2ODU2ZmNjNjA1NGE3ODcucG5n/50/auto/85/notrim/dcaa39d30dd6ebc47982acd7e5fcbe2c.webp"
    },
    {
        name: "Bowie Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9zdXJ2aXZhbF9ib3dpZS4wMWFkZGI1NGQ0MDA4MTUzMDhiMWQzMTIyOTA1OTRhMzE3N2RkNTVmLnBuZw--/50/auto/85/notrim/9c5ea454969c30443bd5ad86324b7aed.webp"
    },
    {
        name: "Butterfly Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9idXR0ZXJmbHkuNzk0MTQ3ZTg0YTRlOTQyNjIwMmQ0NTE0NTkxMGNiYjAwNzc5N2NlNS5wbmc-/50/auto/85/notrim/8ff36c34dbe6857af55e8fffb9650678.webp"
    },
    {
        name: "Classic Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9jc3MuMGIzMzA3MWMyOGMwMmU2ZjE5ZTM2M2RjOWE4Mzg1NjZjNjU1NzM4OS5wbmc-/50/auto/85/notrim/cb310032259230be84a88c8cb3f3931a.webp"
    },
    {
        name: "Falchion Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9mYWxjaGlvbi5hZGNjNDNhMDE4ZmQ0ZmUzMTVkYmRiYzc5NjBjZmM1MmM1ZDYzZTNlLnBuZw--/50/auto/85/notrim/cb500853497457e90ff02eb7998aee9a.webp"
    },
    {
        name: "Flip Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9mbGlwLmViZmMwMDczNTc5MmIxZTI5NDdiMzBhMzIxYTA3MjE1ZGFlOGNlZWQucG5n/50/auto/85/notrim/adc0cf60a0914521eef6946d632cc229.webp"
    },
    {
        name: "GUT Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9ndXQuMWQ1MzAwNzM4NDk3MGU4ZWFmMjg0NDgzMTI3Nzc2ODNmZDYzM2E3OS5wbmc-/50/auto/85/notrim/49bba89812826b437af1ca15f2854321.webp"
    },
    {
        name: "Huntsman Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV90YWN0aWNhbC43NjIxYmJhZDcwNDEwZGViNjI5ZDYwZWQ5OGVmMjQ4ZGFjNTI1MzU2LnBuZw--/50/auto/85/notrim/e0c25230533d7df8d1cd50d471fc2668.webp"
    },
    {
        name: "Karambit",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9rYXJhbWJpdC44YjQ5MWI1ODFhNGI5YzdiNTI5ODA3MTQyNWYyYjI5YTM5YTJhMTJmLnBuZw--/50/auto/85/notrim/12972e19dd4cfb80cfa5e08a33f2c566.webp"
    },
    {
        name: "M9 Bayonet",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9tOV9iYXlvbmV0LjFhNTUxMDllMGM4ODc5MmU1ZDU2ZWEwNGRjMWY2NzZlNDRmOWRlYzIucG5n/50/auto/85/notrim/a7c7e32cefeefa48b1d6ba3e670115fa.webp"
    },
    {
        name: "Navaja Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9neXBzeV9qYWNra25pZmUuMWE3ZTU3NzkxZmE5MzgzY2NlNjdkNTkxNWZmYzQ0MmM3ZGUyNjk0YS5wbmc-/50/auto/85/notrim/9626b108b05babd7a1fd0970686ef0f0.webp"
    },
    {
        name: "Nomad Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9vdXRkb29yLmZkYjNjZTVjZWVmMTU4NDc4MTc1OWVmNWE3YmQ2ZjgxOWJmMTJlOWIucG5n/50/auto/85/notrim/de74dc0943bded76b3515c90579b58d4.webp"
    },
    {
        name: "Paracord Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9jb3JkLjA3M2I1ZmE5OTFhMjU2ZWMyMjY0YjFjMWM1ODE0MDE2MzFlYjUxY2IucG5n/50/auto/85/notrim/3cfdad1d090e9e07ec59ccf880b1505c.webp"
    },
    {
        name: "Shadow Daggers",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9wdXNoLjEzZjQwOWYyM2U2NTMxMDdjOTA3MTFlNWFiMjU4YjUyYjE4N2ZmNmEucG5n/50/auto/85/notrim/a58ec914703ead4908eb01eb98491771.webp"
    },
    {
        name: "Skeleton Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9za2VsZXRvbi4xZmM0MDFhODQ0MDA4YmNhYTg5ZjgzODFjYmU3YjU1MGEwNTE2MDlkLnBuZw--/50/auto/85/notrim/71a95a1588e1ae69d624be335795de9c.webp"
    },
    {
        name: "Stiletto Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9zdGlsZXR0by4xYWVmZTRjYTBlNDMzZmM4YzNmOTI0YmEzNjIyODNlMDY2NmI1ZjhkLnBuZw--/50/auto/85/notrim/89a662e95ec6f63423643a4046323b8f.webp"
    },
    {
        name: "Survival Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV9jYW5pcy5hZTAzYWVkODE4NjRkYzJlZTFlMTExOGJiOTczNDE4ZjkxMDA5OGFjLnBuZw--/50/auto/85/notrim/8e49f25b127072c2f37fe012322f1c66.webp"
    },
    {
        name: "Talon Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV93aWRvd21ha2VyLmEwODQyYWQwNGNkYTkyOTI0ODNiODg5NmQxZGNkYWZmYWM5YzJlNWUucG5n/50/auto/85/notrim/a67097014c8e0eb676ed3c8bc9bf43e8.webp"
    },
    {
        name: "Ursus Knife",
        img: "https://cdn.csgoskins.gg/public/uih/weapons/aHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9hcHBzLzczMC9pY29ucy9lY29uL3dlYXBvbnMvYmFzZV93ZWFwb25zL3dlYXBvbl9rbmlmZV91cnN1cy4zNGVjZGE5ODVjMTI1MDNkZjViODhlOWJkYTE4MjZmNjFjYzllODBhLnBuZw--/50/auto/85/notrim/409a8a7f9e9f244d54a30f6a6d75425c.webp"
    },
];


function callElement(id) {
    return document.querySelector(id);
}
// ----------------Show Hover Nav List
function showHoverPistol() {
    var content = ``;
    hoverPistol.map((item, index) => {
        pistolName = item.name;
        pistolImg = item.img;

        content += `
        <div class="hover_item">
            <img src="${pistolImg}" style="width: 40px; height: 27px;" alt="">
            <span>${pistolName}</span>
        </div>
        `
    });
    showPistol.innerHTML = content;
};
showHoverPistol();
// ----------------Show Hover Nav List

// ----------------Main card item
function showProduct() {
    var str = ``;
    product.map((item, index) => {
        var productName = item.name;
        var productRare = item.rare;
        var productRareColor = item.rareColor;
        var productSpecial = item.special;
        var productSpecialColor = item.specialColor;
        var productImg = item.img;
        var productPriceNonFrom = item.nonFrom;
        var productPriceNonTo = item.nonTo;
        var productPriceFrom = item.sttFrom;
        var productPriceTo = item.sttTo;
        var productImgCase = item.imgCase;
        var productNameCase = item.nameCase;
        var productOffer = item.numberOffer;
        var productMarket = item.numberMarket;
        // -----change color
        str += `
        <div class="main_card">
                    <div class="card_top">
                        <h3 class="card_name">${productName}</h3>
                        <p class="card_rare" style="background: ${productRareColor};">${productRare}</p>
                        <p class="card_special" style="background: ${productSpecialColor};">${productSpecial}</p>
                    </div>

                    <div class="card_middle">
                        <div class="case_info">
                            <img src="${productImg}"
                                style="width: 100%; height: 240px; cursor: pointer;" alt="">

                            <div class="price_nonstt">
                                <h5 class="price_from" style="display: inline-block;">$${productPriceNonFrom}<p>- </p><span
                                        class="price_to"></span>$${productPriceNonTo}</span>
                                </h5>
                            </div>
                            <div class="price_stt" style="color: ${productSpecial === "StatTrak Available" ? "#f89406" : "#ffd700"} ;display: ${productPriceFrom === "" ? "none" : "block"}">
                                <h5 class="stt_from" style="display: inline-block;">$${productPriceFrom}<p>-</p><span
                                        class="stt_to">$${productPriceTo}</span>
                                </h5>
                            </div>
                        </div>
                        <div class="case_drop">
                            <img class="case_img"
                                src="${productImgCase}"
                                alt="recoil" style="width: 30px; height: 20px; cursor: pointer; display: ${productImgCase === "" ? "none" : "block"};">
                            <p class="case_name">${productNameCase}</p>
                        </div>
                    </div>

                    <div class="card_bottom">
                        <p><span>${productOffer} </span>${productMarket}</p>
                    </div>
            </div>
        `
    });
    mainCard.innerHTML = str;
};
showProduct();
// ----------------Main card item
function showHoverRifles() {
    contentRifles = ``;
    hoverRifles.map((item, index) => {
        var riflesName = item.name;
        var riflesImg = item.img

        contentRifles += `
        <div class="hover_item">
            <img src="${riflesImg}" style="width: 40px; height: 27px; display: ${riflesImg === "" ? "none" : "block"};padding-left: ${riflesImg === "" ? "" : "5px"}; alt="">
            <span style="font-size: ${riflesImg === "" ? "12px" : ""};font-weight: ${riflesImg === "" ? "200" : "400"}; cursor: ${riflesImg === "" ? "text" : "pointer"}; padding-left: ${riflesImg === "" ? "16px" : ""}; line-height: ${riflesImg === "" ? "15px" : ""}; padding-top: ${riflesName === "SNIPER RIFLES" || "ASSAULT RIFLES" ? "5px" : ""};">${riflesName}</span>
        </div>
        `
    });
    showRifles.innerHTML = contentRifles;
};
showHoverRifles();
//---------------
function showHoverSMGs() {
    var contentSMGs = ``;
    hoverSMGs.map((item, index) => {
        smgsName = item.name;
        smgsImg = item.img;

        contentSMGs += `
        <div class="hover_item">
            <img src="${smgsImg}" style="width: 40px; height: 27px;" alt="">
            <span>${smgsName}</span>
        </div>
        `
    });
    showSMGs.innerHTML = contentSMGs;
};
showHoverSMGs();
//---------------
function showHoverHeavy() {
    var contentHeavy = ``;
    hoverHeavy.map((item, index) => {
        var heavyName = item.name;
        var heavyImg = item.img

        contentHeavy += `
        <div class="hover_item">
            <img src="${heavyImg}" style="width: 40px; height: 27px; display: ${heavyImg === "" ? "none" : "block"}; alt="">
            <span style="font-size: ${heavyImg === "" ? "12px" : ""};font-weight: ${heavyImg === "" ? "200" : "400"}; cursor: ${heavyImg === "" ? "text" : "pointer"}; padding-left: ${heavyImg === "" ? "16px" : "0px"}; line-height: ${heavyImg === "" ? "15px" : ""}; padding-left: ${heavyImg === "" ? "16px" : "0px"}; padding-top: ${heavyName === "MACHINE GUN" || "SHOTGUN" ? "5px" : "0px"};">${heavyName}</span>
        </div>
        `
    });
    showHeavy.innerHTML = contentHeavy;
};
showHoverHeavy();
//---------------
function showHoverKnives() {
    var contentKnives = ``;
    hoverKnives.map((item, index) => {
        knivesName = item.name;
        knivesImg = item.img;

        contentKnives += `
        <div class="hover_item" style="">
            <img src="${knivesImg}" style="width: 40px; height: 27px;" alt="">
            <span>${knivesName}</span>
        </div>
        `
    });
    showKnives.innerHTML = contentKnives;
};
showHoverKnives();